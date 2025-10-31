export interface SiteConfig {
  site: 'finansguiden' | 'kasinos';
  market: 'SE' | 'NO' | 'FI' | 'DK' | 'DE' | 'UK';
  locale: string;
  theme: 'finance' | 'casino';
  brandColor: string;
  domain: string;
  name: string;
  tagline: string;
  logo: string;
  rg?: {
    showSpelpaus: boolean;
    age18: boolean;
    showGambling: boolean;
  };
  features: {
    offers: boolean;
    glossary: boolean;
    reviews: boolean;
    guides: boolean;
  };
}

export function getSiteConfig(host: string = ''): SiteConfig {
  // Handle both development and production hostnames
  let hostname = host || (typeof window !== 'undefined' ? window.location.hostname : '');
  
  // CRITICAL: Check if this is a production domain FIRST
  const isProductionDomain = /^(www\.)?(finansguiden\.se|kasinos\.se|finanzen-guide\.de)$/i.test(hostname);
  
  // Only allow localStorage override in development AND on Lovable preview URLs
  if (typeof window !== 'undefined' && import.meta.env.DEV && !isProductionDomain) {
    const isLovablePreview = hostname.includes('lovable.app') || hostname.includes('lovable.dev') || hostname === 'localhost';
    
    if (isLovablePreview) {
      try {
        const stored = localStorage.getItem('site-selector-override');
        if (stored === 'kasinos') {
          hostname = 'kasinos.se';
        } else if (stored === 'finansguiden') {
          hostname = 'finansguiden.se';
        } else if (stored === 'finanzen-guide') {
          hostname = 'finanzen-guide.de';
        }
      } catch (error) {
        // Ignore localStorage errors
      }
    }
  }
  
  // Check for German site
  if (/^(www\.)?finanzen-guide\.de$/i.test(hostname) || hostname.endsWith('.finanzen-guide.de')) {
    return {
      site: 'finansguiden',
      market: 'DE',
      locale: 'de-DE',
      theme: 'finance',
      brandColor: '#1a4d2e',
      domain: 'finanzen-guide.de',
      name: 'Finanzen-Guide.de',
      tagline: 'Kredite & Kreditkarten smart vergleichen',
      logo: '/finanzen-guide-logo.png',
      features: {
        offers: true,
        glossary: true,
        reviews: true,
        guides: true,
      },
    };
  }
  
  if (/^(www\.)?kasinos\.se$/i.test(hostname) || hostname.endsWith('.kasinos.se')) {
    return {
      site: 'kasinos',
      market: 'SE',
      locale: 'sv-SE',
      theme: 'casino',
      brandColor: 'hsl(221, 83%, 30%)', // Deep navy blue from new logo
      domain: 'kasinos.se',
      name: 'Kasinos.se',
      tagline: 'Svenska licensierade casinon - spela ansvarsfullt',
      logo: '/kasinos-logo-new.png',
      rg: {
        showSpelpaus: true,
        age18: true,
        showGambling: true,
      },
      features: {
        offers: true,
        glossary: true,
        reviews: true,
        guides: true,
      },
    };
  }

  // Default to finansguiden
  return {
    site: 'finansguiden',
    market: 'SE',
    locale: 'sv-SE',
    theme: 'finance',
    brandColor: '#222F47',
    domain: 'finansguiden.se',
    name: 'Finansguiden.se',
    tagline: 'Jämför lån & kreditkort smart',
    logo: '/finansguiden-logo-v2.png',
    features: {
      offers: true,
      glossary: true,
      reviews: true,
      guides: true,
    },
  };
}

export function isCasinoSite(host?: string): boolean {
  const config = getSiteConfig(host);
  return config.site === 'kasinos';
}

export function isFinansguiden(host?: string): boolean {
  const config = getSiteConfig(host);
  return config.site === 'finansguiden';
}