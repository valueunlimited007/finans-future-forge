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
    "@type": "DefinedTerm",
    "name": term,
    "description": description,
    "url": `${base}/ordlista/${slug}`,
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "Finansguiden.se Ordlista",
      "description": "Omfattande ordlista med finansiella termer och begrepp",
      "url": `${base}/ordlista`,
      "hasDefinedTerm": `${base}/ordlista/${slug}`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "url": `${base}/ordlista/${slug}`,
      "name": term,
      "description": description,
      "inLanguage": "sv-SE",
      "dateModified": date,
      "breadcrumb": {
        "@type": "BreadcrumbList", 
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Hem", "item": `${base}/` },
          { "@type": "ListItem", "position": 2, "name": "Ordlista", "item": `${base}/ordlista` },
          { "@type": "ListItem", "position": 3, "name": term, "item": `${base}/ordlista/${slug}` }
        ]
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Finansguiden.se",
      "url": base,
      "logo": `${base}/finansguiden-logo-v2.png`
    },
    "author": {
      "@type": "Organization",
      "name": "Finansguiden.se",
      "url": base
    }
  } as const;
}
