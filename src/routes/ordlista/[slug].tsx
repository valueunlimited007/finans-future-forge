import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { glossary as glossaryData } from "@/data/glossary";
import GlossaryTerm from "@/components/GlossaryTerm";

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
      <main className="mx-auto max-w-3xl px-4 py-8">
        <Helmet>
          <title>Term saknas – Finansordlista | Finansguiden.se</title>
          <meta name="robots" content="noindex,follow" />
          <link rel="canonical" href={`${location.origin}/ordlista/${slug || ""}`} />
        </Helmet>
        <h1 className="text-2xl font-bold">Saknas</h1>
        <p className="text-muted-foreground">Vi hittade inte termen.</p>
      </main>
    );
  }

  const related = (term.relatedTerms || [])
    .map((name) => glossaryData.find((g) => g.term === name))
    .filter(Boolean)
    .map((g) => ({ term: (g as any).term as string, slug: (g as any).slug as string }));

  const title = `${term.term} – Finansordlista | Finansguiden.se`;
  const description = term.shortDefinition || `${term.term} – förklaring och exempel.`;
  const canonical = `${location.origin}/ordlista/${term.slug}`;

  const faq = [
    {
      question: `Vad betyder ${term.term}?`,
      answer: term.shortDefinition || term.longDefinition?.[0] || "",
    },
    {
      question: `Hur används ${term.term} i praktiken?`,
      answer: term.example || term.longDefinition?.[1] || term.longDefinition?.[0] || "",
    },
    ...(related.length
      ? [
          {
            question: `Vilka relaterade begrepp finns till ${term.term}?`,
            answer: `Relaterade: ${related.map((r) => r.term).join(", ")}.`,
          },
        ]
      : []),
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: term.term,
      description,
      dateModified: term.lastUpdated,
      mainEntityOfPage: canonical,
      author: { "@type": "Organization", name: "Finansguiden.se" },
      publisher: { "@type": "Organization", name: "Finansguiden.se" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hem", item: `${location.origin}/` },
        { "@type": "ListItem", position: 2, name: "Ordlista", item: `${location.origin}/ordlista` },
        { "@type": "ListItem", position: 3, name: term.term, item: canonical },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8">
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
  );
}
