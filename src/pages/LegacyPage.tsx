import { useLayoutEffect, useRef, useMemo } from "react";
import { pageview } from "../analytics/tracker";

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

    // Step 1 — Safe mobile menu (overlay without touching header nav)
    function initSafeMobileMenu() {
      // Hitta huvudnavets länkar (ändra selector vid behov)
      const header = document.querySelector('header') as HTMLElement | null;
      const sourceNav = header?.querySelector('nav, [role="navigation"]') as HTMLElement | null;
      if (!header || !sourceNav) return;

      // Skapa toggle i header om saknas
      if (!header.querySelector('.fg-mobile-toggle')) {
        const btn = document.createElement('button');
        btn.className = 'fg-mobile-toggle';
        btn.setAttribute('aria-label', 'Meny');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '<span></span><span></span><span></span>';
        header.appendChild(btn);

        // Skapa overlay-meny (egen container – påverkar inte befintligt nav)
        let drawer = document.querySelector('.fg-mobile-drawer') as HTMLElement | null;
        if (!drawer) {
          drawer = document.createElement('div');
          drawer.className = 'fg-mobile-drawer';
          drawer.innerHTML = `
        <div class="fgm-panel" role="dialog" aria-modal="true" aria-label="Meny">
          <button class="fgm-close" aria-label="Stäng">×</button>
          <nav class="fgm-nav"></nav>
        </div>`;
          document.body.appendChild(drawer);

          // Kopiera länkar från desktop-nav
          const srcLinks = [...sourceNav.querySelectorAll('a[href]')];
          const dest = drawer.querySelector('.fgm-nav')! as HTMLElement;
          srcLinks.forEach((a) => {
            const link = a.cloneNode(true) as HTMLAnchorElement;
            link.removeAttribute('id');
            dest.appendChild(link);
          });

          // Stänglogik
          const close = () => {
            document.body.classList.remove('fg-no-scroll');
            drawer!.classList.remove('open');
            btn.setAttribute('aria-expanded','false');
          };
          const open = () => {
            document.body.classList.add('fg-no-scroll');
            drawer!.classList.add('open');
            btn.setAttribute('aria-expanded','true');
          };
          btn.addEventListener('click', (e) => {
            e.preventDefault();
            drawer!.classList.contains('open') ? close() : open();
          });
          drawer.querySelector('.fgm-close')!.addEventListener('click', close);
          drawer.addEventListener('click', (e) => { if (e.target === drawer) close(); });
          drawer.querySelector('.fgm-nav')!.addEventListener('click', (e) => {
            const a = (e.target as HTMLElement).closest('a[href]');
            if (a) close();
          });
        }
      }

      // CSS – helt separat, påverkar ej desktopnav
      if (!document.querySelector('style[data-fg-mobile]')) {
        const css = `
@media (max-width:768px){
  .fg-mobile-toggle{
    position:absolute; right:16px; top:14px; width:32px; height:28px;
    background:transparent; border:0; display:inline-flex; flex-direction:column; gap:5px; z-index:1001;
  }
  .fg-mobile-toggle span{display:block;height:3px;background:#0d3a8d;border-radius:2px;}

  .fg-mobile-drawer{position:fixed; inset:0; background:rgba(0,0,0,.25);
    opacity:0; pointer-events:none; transition:opacity .18s; z-index:1000;}
  .fg-mobile-drawer.open{opacity:1; pointer-events:auto;}
  .fg-mobile-drawer .fgm-panel{
    position:absolute; inset:0 0 0 0; background:#fff; transform:translateY(-100%);
    transition:transform .22s; padding:16px 20px; overflow:auto;
  }
  .fg-mobile-drawer.open .fgm-panel{ transform:translateY(0); }
  .fgm-close{position:absolute; right:12px; top:10px; font-size:28px; background:transparent; border:0;}
  .fgm-nav a{ display:block; padding:14px 6px; border-bottom:1px solid rgba(0,0,0,.08); color:#0b1535; text-decoration:none; }
  body.fg-no-scroll{ overflow:hidden; }
}
        `.trim();
        const s = document.createElement('style');
        s.setAttribute('data-fg-mobile','1'); s.textContent = css;
        document.head.appendChild(s);
      }
    }
    initSafeMobileMenu();

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
    try { pageview(location.pathname, document.title); } catch (e) { console.warn("[FG_TRACK_ERR]", e); }
    // FG: Initialize FAQ icons/panels immediately after injection and on route changes
    function initFaq(root: Document | HTMLElement = document) {
      const TRIG = '[data-faq-question], .faq-question, .accordion-button, [aria-controls]';
      const ITEM = '.faq-item, .accordion-item, li, div';
      const PANL = '.faq-answer, .accordion-content, [data-faq-answer], .answer, .content';
      let domIconCount = 0, panelsFixed = 0;

      root.querySelectorAll<HTMLElement>(TRIG).forEach((q) => {
        // mark DOM icon presence -> disable ::after pseudo via CSS
        if (q.querySelector('.faq-toggle,[data-icon],svg,.icon,i')) {
          q.classList.add('fg-has-dom-icon');
          domIconCount++;
        }
        const item = q.closest(ITEM) as HTMLElement | null;
        const id = q.getAttribute('aria-controls');
        let a = (id ? document.getElementById(id) : null) as HTMLElement | null;
        if (!a && item) a = item.querySelector(PANL) as HTMLElement | null;
        if (!a && q.nextElementSibling) a = q.nextElementSibling as HTMLElement | null;
        if (!a) return;

        const preset = (item?.classList.contains('active') || q.getAttribute('aria-expanded') === 'true');
        if (preset) {
          item?.classList.add('active');
          q.setAttribute('aria-expanded','true');
          a.removeAttribute('hidden');
          Object.assign(a.style, {
            display:'block', maxHeight:'none', whiteSpace:'normal', overflow:'visible', height:'auto', textOverflow:'clip'
          } as any);
          (a.style as any).webkitLineClamp = 'unset';
          (a.style as any).webkitBoxOrient = 'initial';
          panelsFixed++;
        }
      });
      console.info('[FG_FAQ_INIT]', { domIconCount, panelsFixed });
    }

    // run immediately after injection
    initFaq(document);

    // re-init on browser navigation changes (belt-and-braces)
    const onLocationChange = () => initFaq(document);
    window.addEventListener('popstate', onLocationChange);
    window.addEventListener('hashchange', onLocationChange);

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
      window.removeEventListener('popstate', onLocationChange);
      window.removeEventListener('hashchange', onLocationChange);
      el.innerHTML = ""; // cleanup previous content
    };
  }, [bodyHtml, headStyles, currentPath]);

  // The container will receive the exact markup, preserving all classes and structure
  return <div ref={containerRef} />;
}
