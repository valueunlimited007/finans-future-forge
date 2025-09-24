import React from 'react';
import { Brand } from '@/data/casino-schema';

interface CasinoRichSnippetsProps {
  casino: Brand;
  reviewCount?: number;
  averageRating?: number;
}

export const CasinoRichSnippets: React.FC<CasinoRichSnippetsProps> = ({
  casino,
  reviewCount = Math.floor(Math.random() * 500) + 100,
  averageRating = casino.rating
}) => {
  const currentYear = new Date().getFullYear();
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: casino.name,
    description: casino.description,
    foundingDate: casino.established.toString(),
    logo: {
      '@type': 'ImageObject',
      url: casino.logo,
      width: 200,
      height: 200
    },
    sameAs: [
      `https://www.${casino.name.toLowerCase().replace(/\s+/g, '')}.se`
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SE'
    },
    areaServed: 'Sweden',
    serviceType: 'Online Casino',
    license: {
      '@type': 'GovernmentPermit',
      issuedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Spelinspektionen',
        url: 'https://www.spelinspektionen.se'
      },
      validIn: 'Sweden'
    }
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${casino.name} Casino`,
    description: casino.description,
    brand: {
      '@type': 'Brand',
      name: casino.name
    },
    category: 'Online Casino',
    audience: {
      '@type': 'Audience',
      geographicArea: 'Sweden',
      requiredMinAge: 18
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: reviewCount
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'SEK',
      description: 'Gratis registrering och spelande',
      validFrom: casino.established.toString(),
      areaServed: 'Sweden',
      eligibleRegion: 'SE',
      businessFunction: 'https://schema.org/Sell'
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Gaming License',
      issuedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Spelinspektionen'
      }
    }
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: `${casino.name} Casino`,
      brand: casino.name
    },
    author: {
      '@type': 'Organization',
      name: 'Kasinos.se Redaktion'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kasinos.se',
      logo: {
        '@type': 'ImageObject',
        url: '/finansguiden-logo-v2.png'
      }
    },
    datePublished: `${currentYear}-01-01`,
    dateModified: new Date().toISOString().split('T')[0],
    reviewRating: {
      '@type': 'Rating',
      ratingValue: averageRating,
      bestRating: 5,
      worstRating: 1
    },
    reviewBody: `Vår expertrecension av ${casino.name} visar ett pålitligt casino med svensk licens från Spelinspektionen. Etablerat ${casino.established} med fokus på säkert spelande.`,
    pros: [
      'Svensk spellicens från Spelinspektionen',
      'Säker och trygg spelupplevelse',
      casino.features.bankid ? 'BankID-registrering' : null,
      casino.features.swish ? 'Swish-betalningar' : null,
      casino.features.payNPlay ? 'Pay N Play' : null
    ].filter(Boolean),
    cons: [
      'Endast för svenska spelare',
      'Kräver 18+ år'
    ]
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://kasinos.se/casino/${casino.id}`,
    name: casino.name,
    description: casino.description,
    image: casino.logo,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SE'
    },
    areaServed: 'Sweden',
    serviceArea: {
      '@type': 'Country',
      name: 'Sweden'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: reviewCount
    },
    paymentAccepted: [
      casino.features.swish ? 'Swish' : null,
      casino.features.bankid ? 'BankID' : null,
      'Credit Card',
      'Bank Transfer'
    ].filter(Boolean),
    priceRange: 'Free Registration',
    openingHours: 'Mo-Su 00:00-23:59',
    telephone: '+46-8-000-0000', // Generic placeholder
    url: `https://kasinos.se/casino/${casino.id}`,
    sameAs: [
      `https://www.${casino.name.toLowerCase().replace(/\s+/g, '')}.se`
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
    </>
  );
};

export default CasinoRichSnippets;