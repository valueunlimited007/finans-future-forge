export interface Market {
  id: 'SE' | 'NO' | 'FI' | 'DK' | 'UK' | 'CA-ON' | 'CA-ROW';
  currency: 'SEK' | 'NOK' | 'EUR' | 'DKK' | 'GBP' | 'CAD';
  name: string;
}

export interface License {
  id: string;
  authority: 'SGA' | 'UKGC' | 'MGA' | 'DGA' | 'AGCO' | 'GGL';
  market: Market['id'];
  url: string;
  name: string;
}

export interface Operator {
  id: string;
  name: string;
  group: 'Betsson' | 'Kindred' | 'LeoVegas' | 'ComeOn' | 'Paf' | 'Other';
  website: string;
}

export interface Brand {
  id: string;
  operatorId: string;
  name: string;
  description: string;
  logo: string;
  markets: Market['id'][];
  licenses: License['id'][];
  established: number;
  rating: number;
  features: {
    bankid: boolean;
    swish: boolean;
    payNPlay: boolean;
    liveCasino: boolean;
    mobileApp: boolean;
  };
}

export interface AffiliateProgram {
  id: string;
  platform: 'IncomeAccess' | 'MyAffiliates' | 'NetRefer' | 'Omarsys' | 'Impact' | 'Custom';
  signupUrl: string;
  commissionType: 'RevShare' | 'CPA' | 'Hybrid';
}

export interface BrandAffiliate {
  brandId: string;
  programId: string;
  market: Market['id'];
  deepLinkBase: string;
  postbackTemplate?: string;
  isActive: boolean;
}

export interface CasinoOffer {
  id: string;
  brandId: string;
  market: Market['id'];
  type: 'welcome' | 'no-bonus' | 'other';
  headline: string;
  legalSummary: string;
  wagering?: string;
  showAmount?: boolean;
  termsUrl: string;
  minDeposit?: string;
  maxWin?: string;
}

export interface CasinoReview {
  id: string;
  brandId: string;
  market: Market['id'];
  pros: string[];
  cons: string[];
  kpis: {
    kycSpeed: string;
    payoutSpeed: string;
    rtpInfo?: string;
    supportLanguages: string[];
    gameProviders: string[];
  };
  evidence: string[];
  authorId: string;
  methodology: string;
  updatedAt: string;
  rating: number;
}

export interface TrackingClick {
  id: string;
  brandId: string;
  market: Market['id'];
  subId: string;
  consent: boolean;
  timestamp: string;
  userAgent?: string;
  referrer?: string;
}

// Swedish market data
export const MARKETS: Market[] = [
  { id: 'SE', currency: 'SEK', name: 'Sverige' },
  { id: 'NO', currency: 'NOK', name: 'Norge' },
  { id: 'FI', currency: 'EUR', name: 'Finland' },
  { id: 'DK', currency: 'DKK', name: 'Danmark' },
];

export const LICENSES: License[] = [
  {
    id: 'sga-se',
    authority: 'SGA',
    market: 'SE',
    url: 'https://www.spelinspektionen.se/',
    name: 'Svensk spellicens (SGA)',
  },
  {
    id: 'mga',
    authority: 'MGA',
    market: 'SE',
    url: 'https://www.mga.org.mt/',
    name: 'Malta Gaming Authority (MGA)',
  },
];

export const OPERATORS: Operator[] = [
  {
    id: 'betsson-group',
    name: 'Betsson Group',
    group: 'Betsson',
    website: 'https://www.betssongroup.com/',
  },
  {
    id: 'kindred-group',
    name: 'Kindred Group',
    group: 'Kindred',
    website: 'https://www.kindredgroup.com/',
  },
  {
    id: 'leovegas-group',
    name: 'LeoVegas Group',
    group: 'LeoVegas',
    website: 'https://www.leovegasgroup.com/',
  },
  {
    id: 'comeon-group',
    name: 'ComeOn Group',
    group: 'ComeOn',
    website: 'https://www.comeon.com/',
  },
  {
    id: 'paf',
    name: 'Paf',
    group: 'Paf',
    website: 'https://www.paf.com/',
  },
];

// Sample Swedish licensed casino brands with enhanced data
export const CASINO_BRANDS: Brand[] = [
  {
    id: 'betsson',
    operatorId: 'betsson-group',
    name: 'Betsson',
    description: 'Etablerat casino med svensk licens och starkt fokus på ansvarfullt spelande. Ett av Sveriges mest pålitliga online casinon.',
    logo: '/adtraction-logos/betsson-logo.png',
    markets: ['SE'],
    licenses: ['sga-se'],
    established: 2001,
    rating: 4.2,
    features: {
      bankid: true,
      swish: true,
      payNPlay: false,
      liveCasino: true,
      mobileApp: true,
    },
  },
  {
    id: 'unibet',
    operatorId: 'kindred-group',
    name: 'Unibet',
    description: 'En av Sveriges mest välkända speloperatörer med brett utbud av casino och sport. Över 25 års experience på marknaden.',
    logo: '/adtraction-logos/unibet-logo.png',
    markets: ['SE'],
    licenses: ['sga-se'],
    established: 1997,
    rating: 4.1,
    features: {
      bankid: true,
      swish: true,
      payNPlay: false,
      liveCasino: true,
      mobileApp: true,
    },
  },
  {
    id: 'leovegas',
    operatorId: 'leovegas-group',
    name: 'LeoVegas',
    description: 'Mobilfokuserat casino känt som "King of Casino" med stark användarupplevelse.',
    logo: '/adtraction-logos/leovegas-logo.png',
    markets: ['SE'],
    licenses: ['sga-se'],
    established: 2011,
    rating: 4.3,
    features: {
      bankid: true,
      swish: true,
      payNPlay: true,
      liveCasino: true,
      mobileApp: true,
    },
  },
  {
    id: 'comeon',
    operatorId: 'comeon-group',
    name: 'ComeOn',
    description: 'Populärt casino med fokus på användarupplevelse och snabba uttag.',
    logo: '/adtraction-logos/comeon-logo.png',
    markets: ['SE'],
    licenses: ['sga-se'],
    established: 2008,
    rating: 4.0,
    features: {
      bankid: true,
      swish: false,
      payNPlay: true,
      liveCasino: true,
      mobileApp: true,
    },
  },
  {
    id: 'paf',
    operatorId: 'paf',
    name: 'Paf',
    description: 'Nordiskt casino med stark tradition av ansvarfullt spelande.',
    logo: '/adtraction-logos/paf-logo.png',
    markets: ['SE'],
    licenses: ['sga-se'],
    established: 1966,
    rating: 3.9,
    features: {
      bankid: false,
      swish: false,
      payNPlay: false,
      liveCasino: true,
      mobileApp: true,
    },
  },
  {
    id: 'svenskaspel',
    operatorId: 'svenska-spel',
    name: 'Svenska Spel Casino',
    description: 'Statligt ägd speloperatör med fokus på trygghet och ansvarsfullt spelande. Monopol på vissa spelformer.',
    logo: '/adtraction-logos/svenskaspel-logo.png',
    markets: ['SE'],
    licenses: ['sga-se'],
    established: 1997,
    rating: 3.8,
    features: {
      bankid: true,
      swish: true,
      payNPlay: false,
      liveCasino: false,
      mobileApp: true,
    },
  },
  {
    id: 'mrgreen',
    operatorId: 'mr-green-group',
    name: 'Mr Green',
    description: 'Prisbelönt casino känt för sitt gröna fokus på ansvarfullt spelande och innovation.',
    logo: '/adtraction-logos/mrgreen-logo.png',
    markets: ['SE'],
    licenses: ['sga-se'],
    established: 2007,
    rating: 4.4,
    features: {
      bankid: true,
      swish: true,
      payNPlay: true,
      liveCasino: true,
      mobileApp: true,
    },
  },
  {
    id: 'casumo',
    operatorId: 'casumo-group',
    name: 'Casumo',
    description: 'Innovativt casino med unik gamification-approach och stark fokus på användarupplevelse.',
    logo: '/adtraction-logos/casumo-logo.png',
    markets: ['SE'],
    licenses: ['sga-se'],
    established: 2012,
    rating: 4.0,
    features: {
      bankid: true,
      swish: false,
      payNPlay: true,
      liveCasino: true,
      mobileApp: true,
    },
  },
];

// Enhanced review data for detailed casino reviews
export const CASINO_REVIEWS: CasinoReview[] = [
  {
    id: 'betsson-review-se',
    brandId: 'betsson',
    market: 'SE',
    pros: [
      'Svensk spellicens från Spelinspektionen',
      'Snabb registrering med BankID',
      'Stöder Swish för snabba betalningar',
      'Bred spelportfölj från välkända leverantörer',
      'Svensk kundtjänst på vardagar',
      'Stark fokus på spelansvar',
      'Mobilvänlig plattform'
    ],
    cons: [
      'Begränsad bonus enligt svensk lag',
      'Insättningsgränser kan vara låga för vissa',
      'Kundtjänst inte tillgänglig 24/7',
      'Inte Pay-n-Play funktionalitet'
    ],
    kpis: {
      kycSpeed: '2-4 timmar med BankID',
      payoutSpeed: '6-24 timmar till bankkonto',
      rtpInfo: '96-98% genomsnittlig RTP',
      supportLanguages: ['svenska', 'engelska', 'norska'],
      gameProviders: ['NetEnt', 'Microgaming', 'Play\'n GO', 'Evolution Gaming', 'Yggdrasil', 'Red Tiger']
    },
    evidence: [
      'Testad registrering och verifiering med BankID',
      'Genomfört insättningar och uttag med olika metoder',
      'Kontaktat kundtjänst vid flera tillfällen',
      'Testat mobilapp på iOS och Android',
      'Verifierat spelutbud och leverantörer'
    ],
    authorId: 'marcus-andersson',
    methodology: 'Standardiserad testprocess enligt Finansguidens riktlinjer för casinobedömning',
    updatedAt: '2025-09-24',
    rating: 4.2
  },
  {
    id: 'unibet-review-se',
    brandId: 'unibet',
    market: 'SE',
    pros: [
      'Över 25 års erfarenhet på marknaden',
      'Kombinerar casino med sportvadslagning',
      'BankID och Swish-support',
      'Omfattande live casino-sektion',
      'Välkänd och pålitlig varumärke'
    ],
    cons: [
      'Komplex navigering för nybörjare',
      'Fokus på sport kan distrahera från casino',
      'Begränsade bonuserbjudanden'
    ],
    kpis: {
      kycSpeed: '1-3 timmar med BankID',
      payoutSpeed: '12-24 timmar',
      rtpInfo: '95-97% genomsnittlig RTP',
      supportLanguages: ['svenska', 'engelska'],
      gameProviders: ['NetEnt', 'Evolution Gaming', 'Play\'n GO', 'Pragmatic Play']
    },
    evidence: [
      'Omfattande testning av både casino och sport',
      'Verifierad betalningshantering',
      'Kontakt med svensk kundtjänst'
    ],
    authorId: 'marcus-andersson',
    methodology: 'Standardiserad testprocess enligt Finansguidens riktlinjer för casinobedömning',
    updatedAt: '2025-09-24',
    rating: 4.1
  }
];