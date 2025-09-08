import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import seoRoutes from "./routes.json";

interface RouteSEO {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  twitterImage?: string;
  jsonld?: Record<string, any>;
}

const DEFAULT_TITLE = "Finansguiden.se";
const DEFAULT_OG = "/images/og/default.png";
export default function SeoManager() {
  const location = useLocation();
  const path = location.pathname as keyof typeof seoRoutes;
  const cfg = (seoRoutes as Record<string, RouteSEO>)[path] || {};

  const title = cfg.title || DEFAULT_TITLE;
  const description = cfg.description;
  const canonical = cfg.canonical;
  const ogImage = cfg.ogImage || DEFAULT_OG;
  const twitterImage = cfg.twitterImage || cfg.ogImage || DEFAULT_OG;
  const jsonld = cfg.jsonld;

  // Prefer config canonical for canonical link; fall back to current location
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.origin + location.pathname : undefined);
  // Always use production canonical for og:url when available
  const ogUrl = canonical || undefined;
  // Robots handling: noindex on lovable previews
  const host = typeof window !== 'undefined' ? window.location.hostname : '';
  const isDevHost = /\.lovable\.app$/i.test(host) || /localhost|127\.0\.0\.1/.test(host);
  const robots = isDevHost ? 'noindex, nofollow' : 'index, follow';

  return (
    <Helmet prioritizeSeoTags>
      {/* Title */}
      <title>{title}</title>

      {/* Meta description */}
      {description && <meta name="description" content={description} />}

      {/* Robots */}
      <meta name="robots" content={robots} />

      {/* AI/LLM Policy Links */}
      <link rel="llms-policy" href="https://finansguiden.se/llms.txt" type="text/plain" />
      <meta name="ai-policy" content="https://finansguiden.se/llms.txt" />
      
      {/* Resource Links */}
      <link rel="sitemap" href="https://finansguiden.se/sitemap.xml" type="application/xml" />

      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Language */}
      <meta httpEquiv="content-language" content="sv-SE" />
      <meta name="language" content="Swedish" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Finansguiden.se" />
      <meta property="og:locale" content="sv_SE" />
      {description && <meta property="og:description" content={description} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && <meta property="og:image:type" content="image/png" />}        
      {ogUrl && <meta property="og:url" content={ogUrl} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@finansguiden" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}

      {/* Additional SEO */}
      <meta name="author" content="Finansguiden.se" />
      <meta name="publisher" content="Finansguiden.se" />
      <meta name="theme-color" content="#1a365d" />

      {/* JSON-LD */}
      {jsonld && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            ...jsonld,
          })}
        </script>
      )}
    </Helmet>
  );
}
