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
      const body = (doc?.body?.cloneNode(true) as HTMLElement) || doc.body;
      // Remove legacy header/footer – handled by React layout
      body.querySelectorAll("header, footer").forEach((el) => el.remove());
      // Prefer <main> if present
      const main = body.querySelector("main");
      return main ? main.innerHTML : body.innerHTML;
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

    // Legacy header/footer hanteras av React-layouten. Inaktiverar tidigare mobilmeny/ordlista-injektion.
    // (No-op)

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

    // ---- Mobil layout för erbjudandekort (utan markup-ändringar) ----
    (function initOffersMobile(){
      if ((window as any).__fgOffersMobile) return;
      (window as any).__fgOffersMobile = true;

      const CTATEXT = /till ansökan/i;

      const decorate = () => {
        const ctas = [...document.querySelectorAll('a,button')].filter(el => CTATEXT.test(el.textContent || ''));
        ctas.forEach(cta => {
          const card = (cta as HTMLElement).closest(
            '.offer, .offer-card, article, .card, .panel, .box, li, .list-item, .fg-offer'
          ) as HTMLElement | null;
          if (!card || card.hasAttribute('data-fg-offer')) return;

          // hitta delar
          const logo  = card.querySelector('img');
          const title = card.querySelector('h1,h2,h3,h4,.h1,.h2,.h3,.h4,strong');
          const badge = card.querySelector('.badge, .label, [class*="badge"], [class*="label"]')
                     || [...card.querySelectorAll<HTMLElement>('*')].find(el => /bäst val/i.test(el.textContent||''));
          const meta  = [...card.querySelectorAll<HTMLElement>('div,p,ul,dl')]
                           .find(el => /belopp|ränta|krav/i.test(el.textContent||''));

          // märka upp (påverkar inte desktop)
          card.classList.add('fg-offer');
          card.setAttribute('data-fg-offer','1');
          logo && logo.classList.add('fg-logo');
          title && title.classList.add('fg-title');
          badge && (badge as HTMLElement).classList.add('fg-badge');
          meta  && meta.classList.add('fg-meta');
          (cta as HTMLElement).classList.add('fg-cta');
        });
      };

      // initialt + när listor fylls på (MutationObserver)
      decorate();
      const mo = new MutationObserver(() => decorate());
      mo.observe(document.body, { childList: true, subtree: true });

      // injicera mobil-CSS en gång
      if (!document.querySelector('style[data-fg-offers-mobile]')) {
        const css = `
@media (max-width:768px){
  .fg-offer{
    display:grid; grid-template-columns:72px 1fr;
    grid-template-areas:
      "logo title"
      "meta meta"
      "cta  cta";
    gap:12px; align-items:start; padding:16px !important;
  }
  .fg-offer .fg-logo  { grid-area:logo;  width:56px; height:auto; object-fit:contain; }
  .fg-offer .fg-title { grid-area:title; margin:0; line-height:1.2; }
  .fg-offer .fg-badge { margin-left:8px; font-size:.85rem; vertical-align:middle; }
  .fg-offer .fg-meta  { grid-area:meta; }
  .fg-offer .fg-meta p, .fg-offer .fg-meta li { white-space:normal; }
  .fg-offer .fg-cta   { grid-area:cta; width:100% !important; display:inline-flex; justify-content:center; }
  /* säkerställ ingen horisontell scroll pga inre element */
  .fg-offer *, .fg-offer { max-width:100%; box-sizing:border-box; }
}
        `.trim();
        const s = document.createElement('style');
        s.setAttribute('data-fg-offers-mobile','1');
        s.textContent = css;
        document.head.appendChild(s);
      }
    })();
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
        "/cookies",
        "/integritetspolicy",
        "/ordlista",
      ]);

      if (allowed.has(path) || path.startsWith("/ordlista")) {
        e.preventDefault();
        window.location.assign(path + url.search + url.hash);
      }
    };

    el.addEventListener("click", onClick);

    // Force full navigation for cookies/integritetspolicy anywhere (drawer or content)
    const onDocNavFix = (e: MouseEvent) => {
      const t = e.target as Element | null;
      if (!t) return;
      const a = t.closest('a') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (!href) return;
      if (/cookies|integritetspolicy/i.test(href)) {
        // ensure hard navigation, not SPA interception
        e.preventDefault();
        window.location.href = href;
      }
    };
    document.addEventListener('click', onDocNavFix, true);

    return () => {
      document.removeEventListener('click', onFaqClick);
      el.removeEventListener("click", onClick);
      document.removeEventListener('click', onDocNavFix, true);
      window.removeEventListener('popstate', onLocationChange);
      window.removeEventListener('hashchange', onLocationChange);
      el.innerHTML = ""; // cleanup previous content
    };
  }, [bodyHtml, headStyles, currentPath]);

  // The container will receive the exact markup, preserving all classes and structure
  return <div ref={containerRef} />;
}
