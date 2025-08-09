import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./src/App";
import { AppRoutes } from "./src/App";

export async function prerender(data: { url?: string }) {
  const url = data?.url || "/";

  const helmetContext: any = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  );

  const helmet = helmetContext.helmet || {};
  const extractText = (s: string) => s.replace(/<[^>]*>/g, "").trim();

  const titleStr = typeof helmet.title?.toString === "function" ? helmet.title.toString() : "";
  const title = titleStr ? extractText(titleStr) : undefined;

  const metaStr = typeof helmet.meta?.toString === "function" ? helmet.meta.toString() : "";
  const descMatch = metaStr.match(/name="description"[^>]*content="([^"]*)"/i);
  const description = descMatch?.[1];
  // Extract Open Graph and Twitter tags if present
  const ogTitleMatch = metaStr.match(/property="og:title"[^>]*content="([^"]*)"/i);
  const ogTitle = ogTitleMatch?.[1];
  const ogDescMatch = metaStr.match(/property="og:description"[^>]*content="([^"]*)"/i);
  const ogDescription = ogDescMatch?.[1];
  const twTitleMatch = metaStr.match(/name="twitter:title"[^>]*content="([^"]*)"/i);
  const twitterTitle = twTitleMatch?.[1];
  const twDescMatch = metaStr.match(/name="twitter:description"[^>]*content="([^"]*)"/i);
  const twitterDescription = twDescMatch?.[1];

  const linkStr = typeof helmet.link?.toString === "function" ? helmet.link.toString() : "";
  const canonMatch = linkStr.match(/rel="canonical"[^>]*href="([^"]*)"/i);
  const canonical = canonMatch?.[1];

  const elements = new Set<any>();
  if (description) elements.add({ type: "meta", props: { name: "description", content: description } });
  if (ogTitle) elements.add({ type: "meta", props: { property: "og:title", content: ogTitle } });
  if (ogDescription) elements.add({ type: "meta", props: { property: "og:description", content: ogDescription } });
  if (twitterTitle) elements.add({ type: "meta", props: { name: "twitter:title", content: twitterTitle } });
  if (twitterDescription) elements.add({ type: "meta", props: { name: "twitter:description", content: twitterDescription } });
  if (canonical) elements.add({ type: "link", props: { rel: "canonical", href: canonical } });

  // Include JSON-LD structured data scripts from Helmet in prerendered head
  const scriptStr = typeof helmet.script?.toString === "function" ? helmet.script.toString() : "";
  const ldJsonMatches = Array.from(scriptStr.matchAll(/<script[^>]*type=\"application\/ld\+json\"[^>]*>([\s\S]*?)<\/script>/gi));
  for (const m of ldJsonMatches) {
    const json = m[1]?.trim();
    if (json) elements.add({ type: "script", props: { type: "application/ld+json", innerHTML: json } });
  }

  const { parseLinks } = await import("vite-prerender-plugin/parse");
  const links = new Set<string>(parseLinks(html));

  return {
    html,
    links,
    head: {
      lang: "sv",
      title,
      elements,
    },
  };
}
