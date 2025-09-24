import { Helmet } from 'react-helmet-async';
import { Brand, CasinoReview } from '@/data/casino-schema';

interface CasinoReviewSeoHeadProps {
  casino: Brand;
  review?: CasinoReview;
}

export default function CasinoReviewSeoHead({ casino, review }: CasinoReviewSeoHeadProps) {
  const title = `${casino.name} Recension 2025 - Test & Betyg | Kasinos.se`;
  const description = `Fullständig recension av ${casino.name}. Vi har testat säkerhet, spelutbud, betalningar och kundtjänst. Betyg: ${casino.rating}/5 stjärnor.`;
  const canonicalUrl = `https://kasinos.se/se/recension/${casino.name.toLowerCase().replace(/[^\w]/g, '-')}`;

  // Structured data for casino review
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": casino.name,
      "description": casino.description,
      "foundingDate": casino.established.toString(),
      "url": `https://kasinos.se/se/recension/${casino.name.toLowerCase().replace(/[^\w]/g, '-')}`,
      "logo": casino.logo
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": casino.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Person",
      "name": "Marcus Andersson",
      "jobTitle": "Casino Expert"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Kasinos.se",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kasinos.se/finansguiden-logo-v2.png"
      }
    },
    "datePublished": review?.updatedAt || "2025-09-24",
    "dateModified": review?.updatedAt || "2025-09-24",
    "reviewBody": `Fullständig recension av ${casino.name}. ${casino.description}`,
    "positiveNotes": review?.pros || [
      "Svensk spellicens från Spelinspektionen",
      casino.features.bankid ? "Snabb registrering med BankID" : "Enkel registreringsprocess",
      casino.features.swish ? "Stöder Swish för snabba betalningar" : "Säkra betalningsmetoder"
    ],
    "negativeNotes": review?.cons || [
      "Begränsad bonus enligt svensk lag",
      "Insättningsgränser kan vara låga för vissa"
    ]
  };

  // FAQ Structured Data
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Är ${casino.name} säkert att spela på?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Ja, ${casino.name} är licensierat av Spelinspektionen i Sverige och följer alla svenska regler för spelansvar och konsumentskydd.`
        }
      },
      {
        "@type": "Question", 
        "name": `Vilka betalningsmetoder accepterar ${casino.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${casino.name} accepterar ${casino.features.bankid ? 'BankID, ' : ''}${casino.features.swish ? 'Swish, ' : ''}bankkort (Visa/Mastercard) och banköverföring.`
        }
      },
      {
        "@type": "Question",
        "name": `Hur länge tar uttag från ${casino.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Uttag från ${casino.name} behandlas vanligtvis inom 6-24 timmar till bankkonto.`
        }
      }
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${casino.name}, casino recension, online casino, svensk licens, spelautomater, live casino`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`https://kasinos.se/images/og-casino-${casino.name.toLowerCase()}.png`} />
      <meta property="og:image:alt" content={`${casino.name} recension`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://kasinos.se/images/og-casino-${casino.name.toLowerCase()}.png`} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(faqData)}
      </script>
      
      {/* Article metadata */}
      <meta name="article:author" content="Marcus Andersson" />
      <meta name="article:published_time" content={review?.updatedAt || "2025-09-24"} />
      <meta name="article:modified_time" content={review?.updatedAt || "2025-09-24"} />
      <meta name="article:section" content="Casino Recensioner" />
      <meta name="article:tag" content={casino.name} />
    </Helmet>
  );
}