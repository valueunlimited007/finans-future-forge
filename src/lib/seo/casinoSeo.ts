import { Brand } from '@/data/casino-schema';

export interface CasinoSeoData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  hreflang?: Record<string, string>;
  structuredData?: any[];
}

export class CasinoSeoManager {
  private baseUrl = 'https://kasinos.se';
  
  generateHomeSeo(): CasinoSeoData {
    return {
      title: 'Bästa Svenska Casinon 2024 - Licensierade & Säkra | Kasinos.se',
      description: 'Jämför svenska casinon med licens från Spelinspektionen. BankID-registrering, snabba uttag och ansvarfullt spelande. Hitta ditt perfekta casino idag!',
      keywords: [
        'svenska casinon',
        'casino med svensk licens',
        'bankid casino',
        'spelinspektionen',
        'casinojämförelse',
        'säkra casinon',
        'ansvarfullt spelande',
        'casino bonus',
        'slots sverige'
      ],
      canonicalUrl: `${this.baseUrl}/`,
      hreflang: {
        'sv-SE': `${this.baseUrl}/`,
        'x-default': `${this.baseUrl}/`
      },
      structuredData: [
        this.generateWebsiteSchema(),
        this.generateBreadcrumbSchema([
          { name: 'Hem', url: this.baseUrl }
        ])
      ]
    };
  }

  generateBankIdSeo(): CasinoSeoData {
    return {
      title: 'BankID Casinon - Snabb Registrering & Säkra Uttag | Kasinos.se',
      description: 'Upptäck casinon med BankID! Registrera dig på 30 sekunder, få direktuttag till banken och spela säkert med svensk licens. Jämför alla BankID-casinon här.',
      keywords: [
        'bankid casino',
        'casino bankid',
        'snabb registrering casino',
        'direktuttag casino',
        'bankid spel',
        'säker casino registrering',
        'mobilt bankid casino',
        'svensk casino bankid'
      ],
      canonicalUrl: `${this.baseUrl}/bankid-casinon`,
      hreflang: {
        'sv-SE': `${this.baseUrl}/bankid-casinon`,
        'x-default': `${this.baseUrl}/bankid-casinon`
      },
      structuredData: [
        this.generateBreadcrumbSchema([
          { name: 'Hem', url: this.baseUrl },
          { name: 'BankID Casinon', url: `${this.baseUrl}/bankid-casinon` }
        ]),
        this.generateFAQSchema([
          {
            question: 'Är BankID-casinon säkra?',
            answer: 'Ja, BankID-casinon är ofta säkrare än traditionella registreringar eftersom BankID är kopplat till din riktiga identitet och bankinformation.'
          },
          {
            question: 'Kan jag använda BankID från vilken bank som helst?',
            answer: 'Ja, BankID fungerar oavsett vilken svensk bank du har. Alla större banker i Sverige stöder BankID-tjänsten.'
          }
        ])
      ]
    };
  }

  generateCasinoReviewSeo(casino: Brand): CasinoSeoData {
    const reviewYear = new Date().getFullYear();
    
    return {
      title: `${casino.name} Recension ${reviewYear} - Bonus, Spel & Uttag | Kasinos.se`,
      description: `Läs vår detaljerade recension av ${casino.name}. Vi testar bonus, spelutbud, uttag och säkerhet. Etablerat ${casino.established} med svensk licens. Betyg: ${casino.rating}/5.`,
      keywords: [
        `${casino.name.toLowerCase()} recension`,
        `${casino.name.toLowerCase()} casino`,
        `${casino.name.toLowerCase()} bonus`,
        `${casino.name.toLowerCase()} uttag`,
        'casino recension',
        'casino test',
        'svensk casino',
        'spelinspektionen licens'
      ],
      canonicalUrl: `${this.baseUrl}/casino/${casino.id}`,
      hreflang: {
        'sv-SE': `${this.baseUrl}/casino/${casino.id}`,
        'x-default': `${this.baseUrl}/casino/${casino.id}`
      },
      structuredData: [
        this.generateCasinoReviewSchema(casino),
        this.generateBreadcrumbSchema([
          { name: 'Hem', url: this.baseUrl },
          { name: 'Casino Recensioner', url: `${this.baseUrl}/recensioner` },
          { name: `${casino.name} Recension`, url: `${this.baseUrl}/casino/${casino.id}` }
        ])
      ]
    };
  }

  generateSpelpausSeo(): CasinoSeoData {
    return {
      title: 'Spelpaus - Ansvarfullt Spelande & Hjälp | Kasinos.se',
      description: 'Information om spelpaus, självexkludering och ansvarfullt spelande. Få hjälp med spelproblem och lär dig hur du sätter gränser för ditt spelande.',
      keywords: [
        'spelpaus',
        'självexkludering',
        'ansvarfullt spelande',
        'spelproblem',
        'spelhjälp',
        'spelgränser',
        'spelavhängighet',
        'spelberoende hjälp'
      ],
      canonicalUrl: `${this.baseUrl}/spelpaus`,
      hreflang: {
        'sv-SE': `${this.baseUrl}/spelpaus`,
        'x-default': `${this.baseUrl}/spelpaus`
      },
      structuredData: [
        this.generateBreadcrumbSchema([
          { name: 'Hem', url: this.baseUrl },
          { name: 'Spelpaus & Ansvarfullt Spelande', url: `${this.baseUrl}/spelpaus` }
        ])
      ]
    };
  }

  private generateWebsiteSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Kasinos.se',
      description: 'Sveriges bästa casinoguide - jämför licensierade casinon',
      url: this.baseUrl,
      publisher: {
        '@type': 'Organization',
        name: 'Kasinos.se',
        logo: {
          '@type': 'ImageObject',
          url: `${this.baseUrl}/finansguiden-logo-v2.png`
        }
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${this.baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };
  }

  private generateCasinoReviewSchema(casino: Brand) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Review',
      itemReviewed: {
        '@type': 'Product',
        name: casino.name,
        description: casino.description,
        brand: {
          '@type': 'Brand',
          name: casino.name
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: casino.rating,
          bestRating: 5,
          worstRating: 1,
          ratingCount: Math.floor(Math.random() * 500) + 100 // Mock review count
        }
      },
      author: {
        '@type': 'Organization',
        name: 'Kasinos.se Redaktion'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Kasinos.se'
      },
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
      reviewRating: {
        '@type': 'Rating',
        ratingValue: casino.rating,
        bestRating: 5,
        worstRating: 1
      },
      reviewBody: `Vår detaljerade recension av ${casino.name} casino. Etablerat ${casino.established} och licensierat av Spelinspektionen i Sverige. ${casino.description}`
    };
  }

  private generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    };
  }

  private generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
  }

  // Generate hreflang for future international expansion
  generateHreflang(currentUrl: string, locales: string[] = ['sv-SE']) {
    const hreflang: Record<string, string> = {};
    
    locales.forEach(locale => {
      const [lang, country] = locale.split('-');
      let localizedUrl = currentUrl;
      
      if (locale !== 'sv-SE') {
        // Future: add locale-specific URL patterns
        localizedUrl = currentUrl.replace('kasinos.se', `kasinos.${country?.toLowerCase()}`);
      }
      
      hreflang[locale] = localizedUrl;
    });
    
    hreflang['x-default'] = currentUrl;
    return hreflang;
  }
}

export const casinoSeoManager = new CasinoSeoManager();