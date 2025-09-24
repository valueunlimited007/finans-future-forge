import { Brand, CasinoReview } from '@/data/casino-schema';

// Website Organization Schema
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kasinos.se",
  "url": "https://kasinos.se",
  "logo": {
    "@type": "ImageObject",
    "url": "https://kasinos.se/finansguiden-logo-v2.png",
    "width": 300,
    "height": 100
  },
  "description": "Sveriges ledande jämförelsewebbplats för online casinon med svensk spellicens",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "SE"
  },
  "areaServed": "SE",
  "knowsAbout": [
    "Online Casino",
    "Svensk Spellicens",
    "Spelansvar",
    "Casinorecensioner"
  ],
  "sameAs": [
    "https://www.facebook.com/kasinos.se",
    "https://twitter.com/kasinossе"
  ]
});

// Website Schema
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Kasinos.se",
  "url": "https://kasinos.se",
  "description": "Jämför svenska casinon med licens från Spelinspektionen. Objektiva recensioner och säker spelupplevelse.",
  "publisher": generateOrganizationSchema(),
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://kasinos.se/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "mainEntity": {
    "@type": "ItemList",
    "name": "Svenska Casinon",
    "description": "Lista över licensierade svenska casinon"
  }
});

// Product Schema for Casino
export const generateCasinoProductSchema = (casino: Brand) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": casino.name,
  "description": casino.description,
  "category": "Online Casino",
  "brand": {
    "@type": "Brand",
    "name": casino.name
  },
  "logo": casino.logo,
  "url": `https://kasinos.se/se/recension/${casino.name.toLowerCase().replace(/[^\w]/g, '-')}`,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": casino.rating,
    "bestRating": 5,
    "worstRating": 1,
    "ratingCount": 150 // Estimate based on reviews
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    "seller": {
      "@type": "Organization",
      "name": casino.name
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Spelalternativ",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Spelautomater"
        }
      },
      ...(casino.features.liveCasino ? [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Live Casino"
        }
      }] : [])
    ]
  }
});

// Review Schema
export const generateReviewSchema = (casino: Brand, review?: CasinoReview) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": generateCasinoProductSchema(casino),
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": casino.rating,
    "bestRating": 5,
    "worstRating": 1
  },
  "author": {
    "@type": "Person",
    "name": "Marcus Andersson",
    "jobTitle": "Casino Expert",
    "worksFor": generateOrganizationSchema()
  },
  "publisher": generateOrganizationSchema(),
  "datePublished": review?.updatedAt || new Date().toISOString().split('T')[0],
  "dateModified": review?.updatedAt || new Date().toISOString().split('T')[0],
  "reviewBody": `Fullständig recension av ${casino.name}. ${casino.description}`,
  "positiveNotes": review?.pros || [
    "Svensk spellicens från Spelinspektionen",
    casino.features.bankid ? "Snabb registrering med BankID" : "Säker registreringsprocess"
  ],
  "negativeNotes": review?.cons || [
    "Begränsad bonuserbjudanden enligt svensk lag"
  ]
});

// FAQ Schema
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Breadcrumb Schema
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://kasinos.se${item.url}`
  }))
});

// ItemList Schema for Casino Categories
export const generateCasinoCategorySchema = (
  categoryName: string, 
  description: string,
  casinos: Brand[]
) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": categoryName,
  "description": description,
  "numberOfItems": casinos.length,
  "itemListElement": casinos.map((casino, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product",
      "name": casino.name,
      "description": casino.description,
      "url": `https://kasinos.se/se/recension/${casino.name.toLowerCase().replace(/[^\w]/g, '-')}`,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": casino.rating,
        "bestRating": 5
      }
    }
  }))
});

// Local Business Schema for Swedish Market
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Kasinos.se",
  "description": "Professionell jämförelsewebbplats för svenska casinon",
  "url": "https://kasinos.se",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "SE"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Sweden"
  },
  "serviceType": "Casino Comparison Service",
  "provider": generateOrganizationSchema(),
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Casinotjänster",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Casinorecensioner",
          "description": "Objektiva recensioner av svenska casinon"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Säkerhetsanalys",
          "description": "Analys av casinons säkerhet och licenser"
        }
      }
    ]
  }
});

// HowTo Schema for Gambling Guides
export const generateHowToSchema = (
  name: string, 
  description: string,
  steps: Array<{ name: string; text: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": name,
  "description": description,
  "totalTime": "PT10M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "SEK",
    "value": "0"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "BankID"
    },
    {
      "@type": "HowToSupply", 
      "name": "Internetuppkoppling"
    }
  ],
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Dator eller mobiltelefon"
    }
  ],
  "step": steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.name,
    "text": step.text,
    "url": `#step-${index + 1}`
  }))
});