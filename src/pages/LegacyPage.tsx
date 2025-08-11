import { useLayoutEffect, useRef, useMemo } from "react";


interface LegacyPageProps {
  htmlRaw: string;
}

function extractBody(html: string) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return bodyMatch ? bodyMatch[1] : html;
}

export default function LegacyPage({ htmlRaw }: LegacyPageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
  const bodyHtml = useMemo(() => {
    try {
      const doc = new DOMParser().parseFromString(htmlRaw, "text/html");
      return doc?.body?.innerHTML ?? "";
    } catch {
      return extractBody(htmlRaw);
    }
  }, [htmlRaw]);

  const headStyles = useMemo(() => {
    try {
      const doc = new DOMParser().parseFromString(htmlRaw, "text/html");
      return Array.from(doc.head?.querySelectorAll("style") ?? [])
        .map((s) => s.textContent || "")
        .join("\n");
    } catch {
      return "";
    }
  }, [htmlRaw]);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Clear and inject fresh HTML
    el.innerHTML = "";
    el.setAttribute("data-fg-page", currentPath);

    // Inject inline <style> tags from the legacy head
    try {
      document
        .querySelectorAll('style[data-fg-inline-style]')
        .forEach((n) => n.parentNode?.removeChild(n));
      if (headStyles.trim()) {
        const tag = document.createElement("style");
        tag.setAttribute("data-fg-inline-style", currentPath);
        tag.textContent = headStyles;
        document.head.appendChild(tag);
      }
    } catch (err) {
      console.warn("[FG_INLINE_STYLE_ERROR]", err);
    }

    el.insertAdjacentHTML("afterbegin", bodyHtml);

    console.info("[FG_INJECTED]", currentPath, "len:", el.innerHTML.length);

    // Execute inline scripts inside injected HTML (to keep behaviors like FAQ toggles, dates)
    const scripts = Array.from(el.querySelectorAll("script"));
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      const old = oldScript as HTMLScriptElement;
      if (old.src) {
        newScript.src = old.src;
        newScript.async = old.async;
        newScript.defer = old.defer;
      } else {
        newScript.textContent = old.textContent;
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
        window.location.assign(path + url.search + url.hash);
      }
    };

    el.addEventListener("click", onClick);

    return () => {
      el.removeEventListener("click", onClick);
      el.innerHTML = ""; // cleanup previous content
    };
  }, [bodyHtml, headStyles, currentPath]);

  // The container will receive the exact markup, preserving all classes and structure
  return <div ref={containerRef} />;
}
