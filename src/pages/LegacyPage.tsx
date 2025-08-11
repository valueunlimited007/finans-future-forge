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

    // Parse legacy document and mirror <body> attributes (classes/id/data-*)
    try {
      const legacyDoc = new DOMParser().parseFromString(htmlRaw, "text/html");
      const legacyBody = legacyDoc.body;
      const legacyClasses = (legacyBody.getAttribute("class") || "")
        .split(/\s+/)
        .filter(Boolean);
      const legacyId = legacyBody.getAttribute("id") || "";
      const legacyDataAttrs = Array.from(legacyBody.attributes).filter((a) =>
        a.name.startsWith("data-")
      );

      // Cleanup previously set attributes
      const prev = (document.body.getAttribute("data-fg-prev-classes") || "")
        .split(/\s+/)
        .filter(Boolean);
      if (prev.length) document.body.classList.remove(...prev);
      if (document.body.getAttribute("data-fg-set-id") === "1") {
        document.body.removeAttribute("id");
        document.body.removeAttribute("data-fg-set-id");
      }
      Array.from(document.body.attributes)
        .filter((a) => a.name.startsWith("data-fg-prop-"))
        .forEach((a) =>
          document.body.removeAttribute(a.name.replace("data-fg-prop-", ""))
        );

      // Apply new ones
      if (legacyClasses.length) {
        document.body.classList.add(...legacyClasses);
        document.body.setAttribute(
          "data-fg-prev-classes",
          legacyClasses.join(" ")
        );
      } else {
        document.body.removeAttribute("data-fg-prev-classes");
      }
      if (legacyId) {
        document.body.id = legacyId;
        document.body.setAttribute("data-fg-set-id", "1");
      }
      legacyDataAttrs.forEach((a) => {
        document.body.setAttribute(a.name, a.value);
        document.body.setAttribute("data-fg-prop-" + a.name, "1");
      });
      console.info("[FG_BODY]", { classes: legacyClasses, id: legacyId });
    } catch (err) {
      console.warn("[FG_BODY_ERROR]", err);
    }

    // Inject inline <style> tags from the legacy head AND adopt important <link> tags
    try {
      // Remove previously injected styles/links
      document
        .querySelectorAll('style[data-fg-inline-style]')
        .forEach((n) => n.parentNode?.removeChild(n));
      document
        .querySelectorAll('link[data-fg-inline-link]')
        .forEach((n) => n.parentNode?.removeChild(n));

      // Styles
      if (headStyles.trim()) {
        const tag = document.createElement("style");
        tag.setAttribute("data-fg-inline-style", currentPath);
        tag.textContent = headStyles;
        document.head.appendChild(tag);
      }

      // Links from legacy head (fonts/stylesheet/preconnect/preload as style)
      try {
        const doc = new DOMParser().parseFromString(htmlRaw, "text/html");
        const needed = Array.from(
          doc.head?.querySelectorAll(
            'link[rel~="stylesheet"],link[rel="preconnect"],link[rel="dns-prefetch"],link[rel="preload"][as="style"]'
          ) ?? []
        ) as HTMLLinkElement[];

        needed.forEach((src) => {
          const l = document.createElement("link");
          Array.from(src.attributes).forEach((a) => l.setAttribute(a.name, a.value));
          const href = l.getAttribute("href");
          if (href && !/^https?:|^\//.test(href)) {
            l.href = new URL(href, window.location.origin).toString();
          }
          l.setAttribute("data-fg-inline-link", currentPath);
          document.head.appendChild(l);
        });

        // Temporary log
        console.info("[FG_HEAD]", {
          stylesLen: headStyles.length,
          links: Array.from(document.querySelectorAll('link[data-fg-inline-link]'))
            .slice(0, 5)
            .map((l) => (l as HTMLLinkElement).href),
        });
      } catch (err) {
        console.warn("[FG_INLINE_LINK_ERROR]", err);
      }
    } catch (err) {
      console.warn("[FG_INLINE_STYLE_ERROR]", err);
    }

    el.insertAdjacentHTML("afterbegin", bodyHtml);

    // Absolutisera relativa URL:er i injicerat innehåll (bilder, länkar, srcset, data-src, inline style url(...))
    const absolutize = (root: HTMLElement) => {
      const fix = (attr: "src" | "href" | "srcset" | "data-src") => {
        root.querySelectorAll(`[${attr}]`).forEach((node) => {
          const v = node.getAttribute(attr);
          if (!v || v.startsWith("http") || v.startsWith("/") || v.startsWith("data:") || v.startsWith("#")) return;
          if (attr === "srcset") {
            const newVal = v
              .split(",")
              .map((item) => {
                const parts = item.trim().split(/\s+/);
                const url = parts.shift() || "";
                const abs = new URL(url, window.location.origin).toString();
                return [abs, ...parts].join(" ");
              })
              .join(", ");
            node.setAttribute(attr, newVal);
          } else {
            node.setAttribute(attr, new URL(v, window.location.origin).toString());
          }
        });
      };
      fix("src");
      fix("href");
      fix("srcset");
      fix("data-src");
      // inline style url(...)
      root.querySelectorAll("[style]").forEach((n) => {
        const el = n as HTMLElement;
        if (el.style && el.style.cssText) {
          el.style.cssText = el.style.cssText.replace(/url\((?!['"]?(?:data:|https?:|\/))/g, "url(/");
        }
      });
    };

    absolutize(el as HTMLElement);

    console.info("[FG_INJECTED]", currentPath, "len:", el.innerHTML.length);

    // Execute inline scripts inside injected HTML (skip legacy FAQ binders to avoid double listeners)
    const scripts = Array.from(el.querySelectorAll("script"));
    scripts.forEach((oldScript) => {
      const old = oldScript as HTMLScriptElement;
      if (old.src) {
        const newScript = document.createElement("script");
        newScript.src = old.src;
        newScript.async = old.async;
        newScript.defer = old.defer;
        document.body.appendChild(newScript);
        setTimeout(() => newScript.parentNode?.removeChild(newScript), 0);
      } else {
        const code = old.textContent || "";
        if (/\bfaq-(question|toggle)\b|\.faq-item\s*\.active|accordion/i.test(code)) {
          return; // we handle FAQ toggling ourselves
        }
        const newScript = document.createElement("script");
        newScript.textContent = code;
        document.body.appendChild(newScript);
        setTimeout(() => newScript.parentNode?.removeChild(newScript), 0);
      }
    });

    // Delegated FAQ toggler: toggle .active on container, set aria-expanded, prevent legacy double-bind
    const onFaqClick = (e: Event) => {
      const q = (e.target as HTMLElement)?.closest('[data-faq-question], .faq-question, .accordion-button, [aria-controls]') as HTMLElement | null;
      if (!q) return;
      const item = q.closest('.faq-item, .accordion-item, li, div') as HTMLElement | null;
      if (item) {
        const isActive = item.classList.toggle('active');
        q.setAttribute('aria-expanded', String(isActive));
        console.info('[FG_FAQ]', { active: isActive });
        e.preventDefault();
      }
    };
    document.addEventListener('click', onFaqClick);

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
      document.removeEventListener('click', onFaqClick);
      el.removeEventListener("click", onClick);
      el.innerHTML = ""; // cleanup previous content
    };
  }, [bodyHtml, headStyles, currentPath]);

  // The container will receive the exact markup, preserving all classes and structure
  return <div ref={containerRef} />;
}
