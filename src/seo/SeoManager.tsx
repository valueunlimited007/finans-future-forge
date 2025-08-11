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

  // Prefer config canonical, else build from current location (safety)
  const currentUrl = canonical || (typeof window !== 'undefined' ? window.location.origin + location.pathname : undefined);

  return (
    <Helmet prioritizeSeoTags>
      {/* Title */}
      <title>{title}</title>

      {/* Meta description */}
      {description && <meta name="description" content={description} />}

      {/* Canonical */}
      {currentUrl && <link rel="canonical" href={currentUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {ogImage && <meta property="og:image" content={ogImage} />}        
      {currentUrl && <meta property="og:url" content={currentUrl} />}

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
