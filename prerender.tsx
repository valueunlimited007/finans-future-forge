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

  const linkStr = typeof helmet.link?.toString === "function" ? helmet.link.toString() : "";
  const canonMatch = linkStr.match(/rel="canonical"[^>]*href="([^"]*)"/i);
  const canonical = canonMatch?.[1];

  const elements = new Set<any>();
  if (description) elements.add({ type: "meta", props: { name: "description", content: description } });
  if (canonical) elements.add({ type: "link", props: { rel: "canonical", href: canonical } });

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
