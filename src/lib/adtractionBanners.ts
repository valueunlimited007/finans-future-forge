import type { GlossaryTerm } from "@/data/glossary";

export interface AdtractionBanner {
  id: string;
  width: number;
  height: number;
  format: 'skyscraper' | 'leaderboard' | 'rectangle' | 'square' | 'large-square' | 'mobile';
  suitableFor: string[]; // categories or placements
}

// All Enklare banners from Adtraction
export const ENKLARE_BANNERS: AdtractionBanner[] = [
  {
    id: '1552774574',
    width: 300,
    height: 600,
    format: 'skyscraper',
    suitableFor: ['lan', 'fastighet', 'sidebar']
  },
  {
    id: '1552774580',
    width: 728,
    height: 90,
    format: 'leaderboard',
    suitableFor: ['lan', 'ranta', 'skatt', 'top']
  },
  {
    id: '1552774584',
    width: 300,
    height: 250,
    format: 'rectangle',
    suitableFor: ['ranta', 'ekonomi', 'mid']
  },
  {
    id: '1552774578',
    width: 320,
    height: 320,
    format: 'square',
    suitableFor: ['investering', 'pension', 'mid']
  },
  {
    id: '1650085601',
    width: 402,
    height: 402,
    format: 'large-square',
    suitableFor: ['investering', 'mid']
  },
  {
    id: '1552774576',
    width: 320,
    height: 100,
    format: 'mobile',
    suitableFor: ['top', 'mid']
  },
];

// Category mapping for all glossary terms
const CATEGORIES: Record<string, string[]> = {
  lan: [
    "Amortering","Amorteringskrav","Annuitetslån","Rak amortering","Amorteringsfritt",
    "Bolån","Privatlån","Blancolån","Billån","Handpenningslån","Brygglån","Topplån","Top-up lån",
    "Lånelöfte","Kreditprövning","Kreditupplysning","UC","Bisnode","Skuldsanering",
    "Betalningsanmärkning","Uppläggningsavgift","Aviavgift","Förseningsavgift","Avi",
    "Autogiro","E-faktura","Förtidslösen","Villkorsändring","Amorteringsplan","Betalningsplan",
    "Förfallodag","Skuldebrev","Borgensman","Proprieborgen","Enkel borgen","Säkerhet",
    "Pantsättning","Regressrätt","Ränteskillnadsersättning","Räntekompensation","KALP (kvar att leva på)",
    "Boendekalkyl","Hushållskostnadskalkyl","Belåningsgrad","Skuldkvot","Kontantinsats",
    "Lånelöfte","Snabblån","SMS-lån","Samlingslån","Omstartslån","Lån utan UC",
    "Låneförmedlare","Kreditvärdighet","Kreditpoäng","Kreditlimit","Kreditgräns",
    "Kredittid","Låneansökan","Utbetalningstid","Låneavtal","Återbetalningstid",
    "Kreditkostnad","Kreditavgift","Ränteavdrag","Förfallodag","Påminnelseavgift",
    "Inkasso","Kronofogden","Skuld hos Kronofogden","Betalningsföreläggande",
    "Skuldebrev mall","Borgenär","Gäldenär","Upplysningsplikt","Ångerrätt kredit",
    "Återtagandeförbehåll","Effektiv kreditränta","Kvar-att-leva-på-kalkyl",
    "Konsumentkreditlagen","Kreditgivare","Kreditförmedlare","Samlingskredit",
    "Räntefri delbetalning","Avbetalningsplan","Kreditköp","Kreditkortsränta",
    "Betalpaus","Räntefri månad","Dröjsmålsränta","Kreditprövning utan UC",
    "Skuldebrev solidariskt","Solidariskt ansvar","Amorteringsunderlag",
    "Snittränta bolån","Grönt bolån","Topplån (bolån)","Bottenlån",
    "Pant i bostadsrätt","Pant i fastighet","Borgensåtagande",
    "Amorteringslättnad","Amorteringsbefrielse","Räntegaranti",
    "Ränterabatt","Lånebindning","Räntebindning","Upplupen ränta",
    "Ränteskillnadsersättning beräkning"
  ],
  ranta: [
    "Ränta","Nominell ränta","Effektiv ränta","Rörlig ränta","Bunden ränta","Räntebindningstid",
    "Snittränta","Referensränta","Styrränta","Kalkylränta","Ränta-på-ränta",
    "Räntetak","Räntekorridor","Riksbankens reporänta",
    "Räntebana","Inflationsjusterad ränta","Realränta","Nollränta","Minusränta",
    "Ränta på ränta","Ränteperiod","Räntedag","Dagkonvention","Baspunkter (bps)",
    "Fixingränta","Stibor","Euribor","Libor (historik)","Yield curve"
  ],
  fastighet: ["Pantbrev","Lagfart","Driftskostnad"],
  investering: [
    "Sparkonto","Fasträntekonto","Investeringssparkonto (ISK)","Kapitalförsäkring",
    "Aktie","Fond","Indexfond","Aktiv fond","Utdelning","Direktavkastning","P/E-tal",
    "Courtage","Förvaltningsavgift","TER","Ongoing charges","ETF","ETC","REIT",
    "Belåna värdepapper","Hävstång","Derivat","Option","Termin","Swap",
    "Räntefond","Företagsobligation","Statsobligation","Realränteobligation","Duration",
    "Kreditrisk","Yield","Effektiv avkastning","Avkastning","Volatilitet",
    "Standardavvikelse","Sharpe-kvot","Riskjusterad avkastning"
  ],
  pension: [
    "Tjänstepension","Premiepension (PPM)","Inkomstpension","Individuellt pensionssparande (IPS)",
    "Löneväxling","Återbetalningsskydd","Efterlevandeskydd","Fondbyte","Riskprofil","Sparkvot"
  ],
  ekonomi: [
    "Budget","Kassaflöde","Likviditet","Soliditet","Eget kapital","Skulder",
    "Balansräkning","Resultaträkning","Disponibel inkomst","Skuldsättningsgrad",
    "Skuldfinansieringsgrad","BNP","Inflation","Deflation","Stagflation",
    "Recession","KPI","KPIF","Inflationsmål"
  ],
  skatt: [
    "K4-blankett","K10-blankett","Kapitalvinst","Kapitalförlust","Omkostnadsbelopp",
    "Schablonmetoden","Genomsnittsmetoden","Uppskov"
  ],
};

/**
 * Find which category a term belongs to
 */
export function getCategoryForTerm(termName: string): string {
  for (const [category, terms] of Object.entries(CATEGORIES)) {
    if (terms.includes(termName)) {
      return category;
    }
  }
  return 'ekonomi'; // Default fallback
}

/**
 * Seeded random for consistent selection per page
 */
function getSeededIndex(seed: string, max: number): number {
  const hash = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return hash % max;
}

/**
 * Get the best banner for a term and placement
 */
export function getBannerForTerm(
  term: GlossaryTerm,
  placement: 'top' | 'sidebar' | 'mid'
): AdtractionBanner {
  const category = getCategoryForTerm(term.term);
  
  // Filter banners suitable for both category AND placement
  let suitable = ENKLARE_BANNERS.filter(banner => 
    banner.suitableFor.includes(category) || banner.suitableFor.includes(placement)
  );
  
  // Prioritize placement-specific banners for sidebar and top
  if (placement === 'sidebar') {
    const sidebarBanners = suitable.filter(b => b.format === 'skyscraper');
    if (sidebarBanners.length > 0) suitable = sidebarBanners;
  } else if (placement === 'top') {
    const topBanners = suitable.filter(b => 
      b.format === 'leaderboard' || b.format === 'mobile'
    );
    if (topBanners.length > 0) suitable = topBanners;
  }
  
  // If multiple suitable banners, use seeded selection
  if (suitable.length > 1) {
    const index = getSeededIndex(term.slug, suitable.length);
    return suitable[index];
  }
  
  // Return first suitable or fallback to first banner
  return suitable[0] || ENKLARE_BANNERS[0];
}
