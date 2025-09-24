import React from 'react';
import { Helmet } from 'react-helmet-async';
import { OpenGraphData, openGraphGenerator } from '@/lib/seo/openGraphGenerator';

interface EnhancedSeoHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl: string;
  openGraph?: Partial<OpenGraphData>;
  structuredData?: object[];
  noIndex?: boolean;
  noFollow?: boolean;
  robots?: string;
  hreflang?: Array<{ locale: string; url: string }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export default function EnhancedSeoHead({
  title,
  description,
  keywords = [],
  canonicalUrl,
  openGraph,
  structuredData = [],
  noIndex = false,
  noFollow = false,
  robots,
  hreflang = [],
  breadcrumbs = []
}: EnhancedSeoHeadProps) {
  
  // Generate default OpenGraph data
  const defaultOG: OpenGraphData = {
    title,
    description,
    url: canonicalUrl,
    image: 'https://kasinos.se/images/og/default.png',
    imageAlt: title,
    type: 'website',
    siteName: 'Kasinos.se',
    locale: 'sv_SE'
  };

  const ogData = { ...defaultOG, ...openGraph };
  const twitterCard = openGraphGenerator.generateTwitterCard(ogData);

  // Generate robots meta content
  const robotsContent = robots || [
    !noIndex ? 'index' : 'noindex',
    !noFollow ? 'follow' : 'nofollow',
    'max-snippet:-1',
    'max-image-preview:large',
    'max-video-preview:-1'
  ].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Robots */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang Tags */}
      {hreflang.map(({ locale, url }) => (
        <link key={locale} rel="alternate" hrefLang={locale} href={url} />
      ))}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={ogData.title} />
      <meta property="og:description" content={ogData.description} />
      <meta property="og:type" content={ogData.type} />
      <meta property="og:url" content={ogData.url} />
      <meta property="og:image" content={ogData.image} />
      <meta property="og:image:alt" content={ogData.imageAlt} />
      <meta property="og:site_name" content={ogData.siteName} />
      <meta property="og:locale" content={ogData.locale} />
      
      {ogData.section && (
        <meta property="article:section" content={ogData.section} />
      )}
      {ogData.author && (
        <meta property="article:author" content={ogData.author} />
      )}
      {ogData.publishedTime && (
        <meta property="article:published_time" content={ogData.publishedTime} />
      )}
      {ogData.modifiedTime && (
        <meta property="article:modified_time" content={ogData.modifiedTime} />
      )}
      {ogData.tags?.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard.card} />
      <meta name="twitter:site" content={twitterCard.site} />
      <meta name="twitter:creator" content={twitterCard.creator} />
      <meta name="twitter:title" content={twitterCard.title} />
      <meta name="twitter:description" content={twitterCard.description} />
      <meta name="twitter:image" content={twitterCard.image} />
      <meta name="twitter:image:alt" content={twitterCard.imageAlt} />
      
      {/* Additional Meta Tags for Casino Sites */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* Geographic and Language Tags */}
      <meta name="geo.region" content="SE" />
      <meta name="geo.country" content="Sweden" />
      <meta name="language" content="Swedish" />
      <meta name="content-language" content="sv" />
      
      {/* Structured Data */}
      {structuredData.map((data, index) => (
        <script 
          key={index} 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      
      {/* Preconnect to External Services */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1e40af" />
      
      {/* Manifest for PWA */}
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Additional Performance Hints */}
      <link rel="preload" href="/finansguiden-logo-v2.png" as="image" type="image/png" />
      
      {/* Security Headers via Meta Tags */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
    </Helmet>
  );
}