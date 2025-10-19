import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { glossaryDE } from "@/data/glossary-de";
import GlossaryTermDE from "@/components/de/GlossaryTermDE";
import { buildFaqDE } from "@/lib/glossaryFaqDE";
import NavigationDE from "@/components/de/NavigationDE";
import FooterDE from "@/components/de/FooterDE";

const safeEvent = (name: string, params: Record<string, any>) => {
  try {
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", name, params);
    } else {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: name, ...params });
    }
  } catch {}
};

export default function GlossaryTermPageDE() {
  const { slug } = useParams();
  const term = useMemo(() => glossaryDE.find((t) => t.slug === slug), [slug]);

  useEffect(() => {
    if (term) {
      safeEvent("glossary_view_de", { term: term.slug, page: location.pathname });
    }
  }, [term]);

  if (!term) {
    return (
      <>
        <NavigationDE />
        <main className="mx-auto max-w-3xl px-4 py-8">
          <Helmet>
            <title>Begriff nicht gefunden – Finanzglossar | Finanzen-Guide.de</title>
            <meta name="robots" content="noindex,follow" />
            <link rel="canonical" href={`https://finanzen-guide.de/glossar/${slug || ""}`} />
          </Helmet>
          <h1 className="text-2xl font-bold">Begriff nicht gefunden</h1>
          <p className="text-muted-foreground">Wir konnten den gesuchten Begriff leider nicht finden.</p>
        </main>
        <FooterDE />
      </>
    );
  }

  const related = (term.relatedTerms || [])
    .map((name) => glossaryDE.find((g) => g.term === name))
    .filter(Boolean)
    .map((g) => ({ term: (g as any).term as string, slug: (g as any).slug as string }));

  const title = `${term.term} – Finanzglossar | Finanzen-Guide.de`;
  const description = term.shortDefinition || `${term.term} – Erklärung und Beispiele aus der Finanzwelt.`;
  const canonical = `https://finanzen-guide.de/glossar/${term.slug}`;

  const faqs = buildFaqDE(term);

  // JSON-LD Structured Data
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "name": term.term,
      "description": term.shortDefinition,
      "inDefinedTermSet": {
        "@type": "DefinedTermSet",
        "name": "Finanzen-Guide Glossar",
        "url": "https://finanzen-guide.de/glossar"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": term.term,
      "description": description,
      "datePublished": term.lastUpdated,
      "dateModified": term.lastUpdated,
      "author": {
        "@type": "Organization",
        "name": "Finanzen-Guide.de"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Finanzen-Guide.de",
        "logo": {
          "@type": "ImageObject",
          "url": "https://finanzen-guide.de/finanzen-guide-logo.png"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://finanzen-guide.de/de"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Glossar",
          "item": "https://finanzen-guide.de/glossar"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": term.term,
          "item": canonical
        }
      ]
    }
  ];

  if (faqs.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    } as any);
  }

  return (
    <>
      <NavigationDE />
      <main className="mx-auto max-w-7xl px-4 py-12 mt-4">
        <Helmet>
          <html lang="de" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={canonical} />
          
          {/* Open Graph */}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={canonical} />
          <meta property="og:site_name" content="Finanzen-Guide.de" />
          <meta property="og:locale" content="de_DE" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          
          {/* Additional SEO */}
          <meta name="keywords" content={`${term.term}, Finanzen, Kredit, Glossar, Finanzlexikon`} />
          <meta name="author" content="Finanzen-Guide.de" />
          
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>

        <GlossaryTermDE term={term} related={related} />
      </main>
      <FooterDE />
    </>
  );
}
