import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { glossary as glossaryData } from "@/data/glossary";
import GlossaryTerm from "@/components/GlossaryTerm";
import { buildFaq } from "@/lib/glossaryFaq";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";
import LegacyHeader from "@/components/LegacyHeader";
import LegacyFooter from "@/components/LegacyFooter";
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

export default function GlossaryTermPage() {
  const { slug } = useParams();
  const term = useMemo(() => glossaryData.find((t) => t.slug === slug), [slug]);

  useEffect(() => {
    if (term) {
      safeEvent("glossary_view", { term: term.slug, page: location.pathname });
    }
  }, [term]);

  if (!term) {
    return (
      <>
        <LegacyHeader />
        <main className="mx-auto max-w-3xl px-4 py-8">
          <Helmet>
            <title>Term saknas – Finansordlista | Finansguiden.se</title>
            <meta name="robots" content="noindex,follow" />
            <link rel="canonical" href={`https://finansguiden.se/ordlista/${slug || ""}`} />
          </Helmet>
          <h1 className="text-2xl font-bold">Saknas</h1>
          <p className="text-muted-foreground">Vi hittade inte termen.</p>
        </main>
        <LegacyFooter />
      </>
    );
  }

  const related = (term.relatedTerms || [])
    .map((name) => glossaryData.find((g) => g.term === name))
    .filter(Boolean)
    .map((g) => ({ term: (g as any).term as string, slug: (g as any).slug as string }));

  const title = `${term.term} – Finansordlista | Finansguiden.se`;
  const description = term.shortDefinition || `${term.term} – förklaring och exempel.`;
  const canonical = `https://finansguiden.se/ordlista/${term.slug}`;

  const faqs = buildFaq(term);

  const jsonLd = [
    articleJsonLd(term.slug, term.term, description, term.lastUpdated),
    breadcrumbJsonLd(term.slug, term.term),
    faqJsonLd(term.term, faqs),
  ];

  return (
    <> 
      <LegacyHeader />
      <main className="mx-auto max-w-3xl px-4 py-8">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="canonical" href={canonical} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={canonical} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>

        <GlossaryTerm term={term} related={related} />
      </main>
      <LegacyFooter />
    </>
  );
}
