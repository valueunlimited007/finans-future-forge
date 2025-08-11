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

export default function SeoManager() {
  const location = useLocation();
  const path = location.pathname as keyof typeof seoRoutes;
  const cfg = (seoRoutes as Record<string, RouteSEO>)[path] || {};

  const title = cfg.title || DEFAULT_TITLE;
  const description = cfg.description;
  const canonical = cfg.canonical;
  const ogImage = cfg.ogImage;
  const twitterImage = cfg.twitterImage || cfg.ogImage;
  const jsonld = cfg.jsonld;

  // Prefer config canonical for canonical link; fall back to current location
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.origin + location.pathname : undefined);
  // Always use production canonical for og:url when available
  const ogUrl = canonical || undefined;
  // Robots handling: noindex on lovable previews
  const isLovable = typeof window !== 'undefined' && /\.lovable\.app$/.test(window.location.hostname);
  const robots = isLovable ? 'noindex, nofollow' : 'index, follow';

  return (
    <Helmet prioritizeSeoTags>
      {/* Title */}
      <title>{title}</title>

      {/* Meta description */}
      {description && <meta name="description" content={description} />}

      {/* Robots */}
      <meta name="robots" content={robots} />

      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {ogImage && <meta property="og:image" content={ogImage} />}        
      {ogUrl && <meta property="og:url" content={ogUrl} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}

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
