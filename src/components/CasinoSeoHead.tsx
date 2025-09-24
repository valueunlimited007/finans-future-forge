import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CasinoSeoData } from '@/lib/seo/casinoSeo';

interface CasinoSeoHeadProps {
  seoData: CasinoSeoData;
  siteName?: string;
  ogImage?: string;
}

export const CasinoSeoHead: React.FC<CasinoSeoHeadProps> = ({
  seoData,
  siteName = 'Kasinos.se',
  ogImage = '/images/og-home.png'
}) => {
  const ogTitle = `${seoData.title} | ${siteName}`;
  const twitterImage = ogImage.replace('/images/', '/images/twitter-');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content={seoData.keywords.join(', ')} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoData.canonicalUrl} />
      
      {/* Hreflang Tags */}
      {seoData.hreflang && Object.entries(seoData.hreflang).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:url" content={seoData.canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={seoData.title} />
      <meta property="og:locale" content="sv_SE" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={seoData.description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />
      <meta name="twitter:image:alt" content={seoData.title} />
      
      {/* Casino-specific meta tags */}
      <meta name="geo.region" content="SE" />
      <meta name="geo.country" content="Sweden" />
      <meta name="language" content="Swedish" />
      <meta name="target_country" content="SE" />
      
      {/* Gaming regulatory compliance */}
      <meta name="gaming:license" content="Spelinspektionen" />
      <meta name="gaming:jurisdiction" content="Sweden" />
      <meta name="content:rating" content="18+" />
      
      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Performance hints */}
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      {seoData.structuredData && seoData.structuredData.map((schema, index) => (
        <script 
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
      
      {/* Casino-specific favicons and icons */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      <meta name="theme-color" content="#D21F3C" />
      <meta name="msapplication-TileColor" content="#D21F3C" />
      
      {/* Security headers */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.google-analytics.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com; img-src 'self' data: *.google-analytics.com *.googletagmanager.com; connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com" />
      
      {/* Responsible gambling notice */}
      <meta name="responsible-gambling" content="Spela ansvarsfullt. 18+ år. Stödlinjen.se" />
    </Helmet>
  );
};

export default CasinoSeoHead;