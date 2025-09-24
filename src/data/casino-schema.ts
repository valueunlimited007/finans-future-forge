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

// Sample Swedish licensed casino brands
export const CASINO_BRANDS: Brand[] = [
  {
    id: 'betsson',
    operatorId: 'betsson-group',
    name: 'Betsson',
    description: 'Etablerat casino med svensk licens och starkt fokus på ansvarfullt spelande.',
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
    description: 'En av Sveriges mest välkända speloperatörer med brett utbud av casino och sport.',
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
];