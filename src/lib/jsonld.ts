export function faqJsonLd(termTitle: string, faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } as const;
}

export function breadcrumbJsonLd(slug: string, term: string) {
  const base = "https://finansguiden.se";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: `${base}/` },
      { "@type": "ListItem", position: 2, name: "Ordlista", item: `${base}/ordlista` },
      { "@type": "ListItem", position: 3, name: term, item: `${base}/ordlista/${slug}` },
    ],
  } as const;
}

export function articleJsonLd(slug: string, term: string, description: string, date: string) {
  const base = "https://finansguiden.se";
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: term,
    description,
    dateModified: date,
    mainEntityOfPage: `${base}/ordlista/${slug}`,
    author: { "@type": "Organization", name: "Finansguiden.se" },
    publisher: { "@type": "Organization", name: "Finansguiden.se" },
  } as const;
}
