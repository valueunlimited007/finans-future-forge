import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface LegacyPageProps {
  htmlRaw: string;
}

function extractBody(html: string) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return bodyMatch ? bodyMatch[1] : html;
}

export default function LegacyPage({ htmlRaw }: LegacyPageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Inject exact HTML body content
    const bodyHtml = extractBody(htmlRaw);
    container.innerHTML = bodyHtml;

    // Execute inline scripts inside injected HTML (to keep behaviors like FAQ toggles, dates)
    const scripts = Array.from(container.querySelectorAll("script"));
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      if ((oldScript as HTMLScriptElement).src) {
        newScript.src = (oldScript as HTMLScriptElement).src;
        newScript.async = (oldScript as HTMLScriptElement).async;
        newScript.defer = (oldScript as HTMLScriptElement).defer;
      } else {
        newScript.textContent = oldScript.textContent;
      }
      document.body.appendChild(newScript);
      // Cleanup after execution to avoid duplicates
      setTimeout(() => {
        newScript.parentNode?.removeChild(newScript);
      }, 0);
    });

    // Intercept internal link clicks to navigate via React Router
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) return;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (href.startsWith("#")) return; // allow in-page anchors

      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return;

      let path = url.pathname;
      // map legacy .html paths to extensionless routes
      if (/\.html$/i.test(path)) path = path.replace(/\.html$/i, "");

      const allowed = new Set([
        "/",
        "/lan-utan-uc",
        "/kreditkort",
        "/privatlan",
        "/foretagslan",
      ]);

      if (allowed.has(path)) {
        e.preventDefault();
        navigate(path + url.search + url.hash);
      }
    };

    container.addEventListener("click", onClick);
    return () => {
      container.removeEventListener("click", onClick);
    };
  }, [htmlRaw, navigate]);

  // The container will receive the exact markup, preserving all classes and structure
  return <div ref={containerRef} />;
}
