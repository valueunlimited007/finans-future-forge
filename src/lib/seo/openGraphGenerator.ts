import { Brand } from '@/data/casino-schema';

export interface OpenGraphData {
  title: string;
  description: string;
  url: string;
  image: string;
  imageAlt: string;
  type: 'website' | 'article' | 'product';
  siteName: string;
  locale: string;
  section?: string;
  tags?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export class OpenGraphGenerator {
  private baseUrl = 'https://kasinos.se';
  private defaultImage = 'https://kasinos.se/images/og/default.png';
  private siteName = 'Kasinos.se';

  generateHomePage(): OpenGraphData {
    return {
      title: 'Bästa Svenska Casinon 2025 - Säker Jämförelse | Kasinos.se',
      description: 'Jämför svenska casinon med licens från Spelinspektionen. Objektiva recensioner, säkra betalningar och ansvarfullt spelande. ⭐ Endast licensierade casinon',
      url: this.baseUrl,
      image: 'https://kasinos.se/images/og-home.png',
      imageAlt: 'Kasinos.se - Bästa svenska casinon 2025',
      type: 'website',
      siteName: this.siteName,
      locale: 'sv_SE'
    };
  }

  generateCasinoReview(casino: Brand): OpenGraphData {
    const slug = casino.name.toLowerCase().replace(/[^\w]/g, '-');
    return {
      title: `${casino.name} Recension 2025 - Test & Betyg | Kasinos.se`,
      description: `Fullständig recension av ${casino.name}. Vi har testat säkerhet, spelutbud, betalningar och kundtjänst. Betyg: ${casino.rating}/5 stjärnor. ${casino.features.bankid ? '✓ BankID' : ''} ${casino.features.swish ? '✓ Swish' : ''}`,
      url: `${this.baseUrl}/se/recension/${slug}`,
      image: `https://kasinos.se/images/og-casino-${slug}.png`,
      imageAlt: `${casino.name} recension - Betyg ${casino.rating}/5`,
      type: 'article',
      siteName: this.siteName,
      locale: 'sv_SE',
      section: 'Casino Recensioner',
      tags: [casino.name, 'casino recension', 'svensk licens', 'spelautomater'],
      author: 'Marcus Andersson',
      publishedTime: new Date().toISOString(),
      modifiedTime: new Date().toISOString()
    };
  }

  generateBankIDPage(): OpenGraphData {
    return {
      title: 'Bästa BankID Casinon 2025 - Snabb & Säker Registrering',
      description: 'Upptäck casinon med BankID-registrering. Snabb verifiering, inga formulär och direkt spelstart. Endast svenska licenser från Spelinspektionen. ⚡ Registrera på sekunder',
      url: `${this.baseUrl}/se/casinon-med-bankid`,
      image: 'https://kasinos.se/images/og-bankid.png',
      imageAlt: 'BankID Casinon - Snabb registrering',
      type: 'website',
      siteName: this.siteName,
      locale: 'sv_SE',
      section: 'Casino Kategorier'
    };
  }

  generatePayNPlayPage(): OpenGraphData {
    return {
      title: 'Pay-n-Play Casinon 2025 - Spela Direkt Utan Registrering',
      description: 'Bästa Pay-n-Play casinon i Sverige. Sätt in och spela direkt utan registrering. BankID-verifiering och snabba uttag. ⚡ Spela på sekunder',
      url: `${this.baseUrl}/se/pay-n-play`,
      image: 'https://kasinos.se/images/og-paynplay.png',
      imageAlt: 'Pay-n-Play Casinon - Spela direkt',
      type: 'website',
      siteName: this.siteName,
      locale: 'sv_SE',
      section: 'Casino Kategorier'
    };
  }

  generateLiveCasinoPage(): OpenGraphData {
    return {
      title: 'Live Casino 2025 - Bästa Sajterna med Riktiga Dealers',
      description: 'Upplev äkta casinofeeling med live dealers. Blackjack, roulette och baccarat i realtid. Svenska dealers och HD-kvalitet. 🎰 Autentisk spelupplevelse',
      url: `${this.baseUrl}/se/live-casino`,
      image: 'https://kasinos.se/images/og-livecasino.png',
      imageAlt: 'Live Casino - Spela med riktiga dealers',
      type: 'website',
      siteName: this.siteName,
      locale: 'sv_SE',
      section: 'Casino Kategorier'
    };
  }

  generateSpelpausPage(): OpenGraphData {
    return {
      title: 'Spelpaus Guide 2025 - Hur du Stänger av dig från Spel',
      description: 'Komplett guide till Spelpaus.se. Lär dig hur du stänger av dig från allt licensierat spel i Sverige. Gratis, säkert och effektivt. 🛡️ Ta kontroll över ditt spelande',
      url: `${this.baseUrl}/se/guider/spelpaus`,
      image: 'https://kasinos.se/images/og-spelpaus.png',
      imageAlt: 'Spelpaus Guide - Ansvarfullt spelande',
      type: 'article',
      siteName: this.siteName,
      locale: 'sv_SE',
      section: 'Spelansvar',
      author: 'Marcus Andersson',
      publishedTime: new Date().toISOString(),
      modifiedTime: new Date().toISOString()
    };
  }

  generateCategoryPage(
    category: string, 
    title: string, 
    description: string,
    imageName: string
  ): OpenGraphData {
    return {
      title,
      description,
      url: `${this.baseUrl}/se/${category}`,
      image: `https://kasinos.se/images/og-${imageName}.png`,
      imageAlt: title,
      type: 'website',
      siteName: this.siteName,
      locale: 'sv_SE',
      section: 'Casino Kategorier'
    };
  }

  // Twitter Card specific optimizations
  generateTwitterCard(ogData: OpenGraphData) {
    return {
      card: 'summary_large_image',
      site: '@kasinossе',
      creator: '@kasinossе',
      title: ogData.title.length > 70 ? ogData.title.substring(0, 67) + '...' : ogData.title,
      description: ogData.description.length > 200 ? ogData.description.substring(0, 197) + '...' : ogData.description,
      image: ogData.image,
      imageAlt: ogData.imageAlt
    };
  }

  // Generate hreflang tags for internationalization
  generateHreflang(currentPath: string) {
    const baseUrls = {
      'sv-SE': 'https://kasinos.se',
      'sv': 'https://kasinos.se',
      'x-default': 'https://kasinos.se'
    };

    return Object.entries(baseUrls).map(([locale, baseUrl]) => ({
      hreflang: locale,
      href: `${baseUrl}${currentPath}`
    }));
  }
}

export const openGraphGenerator = new OpenGraphGenerator();