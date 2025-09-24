export interface SiteConfig {
  site: 'finansguiden' | 'kasinos';
  market: 'SE' | 'NO' | 'FI' | 'DK' | 'UK';
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
  
  // Simple development override check
  if (typeof window !== 'undefined' && import.meta.env.DEV) {
    try {
      const stored = localStorage.getItem('site-selector-override');
      if (stored === 'kasinos') {
        hostname = 'kasinos.se';
      } else if (stored === 'finansguiden') {
        hostname = 'finansguiden.se';
      }
    } catch (error) {
      // Ignore localStorage errors
    }
  }
  
  if (hostname.includes('kasinos') || hostname.includes('casino')) {
    return {
      site: 'kasinos',
      market: 'SE',
      locale: 'sv-SE',
      theme: 'casino',
      brandColor: 'hsl(221, 83%, 30%)', // Deep navy blue from new logo
      domain: 'kasinos.se',
      name: 'Kasinos.se',
      tagline: 'Svenska licensierade casinon - spela ansvarsfullt',
      logo: '/kasinos-logo.png',
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