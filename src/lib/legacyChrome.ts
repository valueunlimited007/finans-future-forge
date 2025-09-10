import homeHtml from "../../home.html?raw";

function parseDoc(html: string) {
  try {
    return new DOMParser().parseFromString(html, "text/html");
  } catch {
    const doc = document.implementation.createHTMLDocument("");
    doc.documentElement.innerHTML = html;
    return doc;
  }
}

export function getLegacyHeaderHtml(): string {
  const doc = parseDoc(homeHtml);
  const header = doc.querySelector("header");
  return header ? header.outerHTML : "";
}

export function getLegacyFooterHtml(): string {
  const doc = parseDoc(homeHtml);
  const footer = doc.querySelector("footer");
  return footer ? footer.outerHTML : "";
}

export function ensureLegacyStyles() {
  const href = "/css/styles.css";
  const exists = Array.from(document.querySelectorAll<HTMLLinkElement>('link[rel~="stylesheet"]'))
    .some((l) => (l.getAttribute("href") || "").includes(href));
  if (!exists) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.setAttribute("data-fg-legacy-style", "1");
    document.head.appendChild(link);
  }
}

export function absolutizeUrls(root: HTMLElement) {
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
  root.querySelectorAll("[style]").forEach((n) => {
    const el = n as HTMLElement;
    if (el.style && el.style.cssText) {
      el.style.cssText = el.style.cssText.replace(/url\((?!['"]?(?:data:|https?:|\/))/g, "url(/");
    }
  });
}

export function bindLegacyMobileMenu(container: HTMLElement) {
  try {
    const btn = container.querySelector<HTMLButtonElement>(".mobile-menu");
    const nav = container.querySelector<HTMLElement>(".nav-links");
    if (!btn || !nav) return;
    const toggle = () => {
      const isHidden = getComputedStyle(nav).display === "none";
      (nav as HTMLElement).style.display = isHidden ? "flex" : "none";
    };
    btn.addEventListener("click", toggle);
  } catch {}
}

export function ensureGlossaryLinks(container: HTMLElement) {
      try {
        // Glossary links are now only in footer
        const footerNav = container.querySelector("footer nav, footer ul, footer .footer-links");
        if (footerNav && !container.querySelector('a[href$="/ordlista"]')) {
          const ordlistaLink = document.createElement("a");
          ordlistaLink.href = "/ordlista";
          ordlistaLink.textContent = "Ordlista";
          ordlistaLink.className = "hover:underline";
          
          const sajtkarteLink = document.createElement("a");
          sajtkarteLink.href = "/sajtkarta";
          sajtkarteLink.textContent = "Sajtkarta";
          sajtkarteLink.className = "hover:underline";
          
          const omLink = document.createElement("a");
          omLink.href = "/om";
          omLink.textContent = "Om oss";
          omLink.className = "hover:underline";
          
          footerNav.appendChild(ordlistaLink);
          footerNav.appendChild(sajtkarteLink);
          footerNav.appendChild(omLink);
        }
      } catch {}
}

export function interceptInternalLinks(container: HTMLElement, navigate: (to: string) => void) {
  container.addEventListener(
    "click",
    (e) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest && (target.closest("a") as HTMLAnchorElement | null);
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (!href || /^https?:|^mailto:|^tel:/i.test(href)) return; // external or special
      if (href.startsWith("#")) return; // in-page
      const url = new URL(href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      let path = url.pathname;
      if (/\.html$/i.test(path)) path = path.replace(/\.html$/i, "");
      const allowed = new Set([
        "/",
        "/lan-utan-uc",
        "/kreditkort",
        "/privatlan",
        "/foretagslan",
        "/ordlista",
        "/sajtkarta",
        "/om",
        "/cookies",
        "/integritetspolicy",
      ]);
      if (allowed.has(path) || path.startsWith("/ordlista")) {
        e.preventDefault();
        navigate(path + url.search + url.hash);
      }
    },
    { capture: true }
  );
}
