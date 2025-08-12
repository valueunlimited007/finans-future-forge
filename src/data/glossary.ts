export interface GlossaryFAQ { q: string; a: string; }
export interface GlossaryTerm {
  term: string;
  slug: string;
  shortDefinition: string;
  longDefinition: string[];
  example?: string;
  relatedTerms?: string[];
  sources?: { title: string; url: string }[];
  lastUpdated: string;
  faqs?: GlossaryFAQ[];
}

// Källor, används på alla poster
const SOURCES = [
  { title: "Konsumentverket", url: "https://www.konsumentverket.se/" },
  { title: "Finansinspektionen", url: "https://www.fi.se/" },
  { title: "Skatteverket", url: "https://www.skatteverket.se/" },
] as const;

const TODAY = "2025-08-12";

// Hjälpare
function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/å/g, "a").replace(/ä/g, "a").replace(/ö/g, "o")
    .replace(/[^a-z0-9\- ]+/g, "")
    .replace(/ /g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// Kategorier med termer
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
  ],
  ranta: [
    "Ränta","Nominell ränta","Effektiv ränta","Rörlig ränta","Bunden ränta","Räntebindningstid",
    "Snittränta","Referensränta","Styrränta","Kalkylränta","Ränta-på-ränta",
  ],
  fastighet: ["Pantbrev","Lagfart","Driftskostnad"],
  investering: [
    "Sparkonto","Fasträntekonto","Investeringssparkonto (ISK)","Kapitalförsäkring",
    "Aktie","Fond","Indexfond","Aktiv fond","Utdelning","Direktavkastning","P/E-tal",
    "Courtage","Förvaltningsavgift","TER","Ongoing charges","ETF","ETC","REIT",
    "Belåna värdepapper","Hävstång","Derivat","Option","Termin","Swap",
    "Räntefond","Företagsobligation","Statsobligation","Realränteobligation","Duration",
    "Kreditrisk","Yield","Effektiv avkastning","Avkastning","Volatilitet",
    "Standardavvikelse","Sharpe-kvot","Riskjusterad avkastning",
  ],
  pension: [
    "Tjänstepension","Premiepension (PPM)","Inkomstpension","Individuellt pensionssparande (IPS)",
    "Löneväxling","Återbetalningsskydd","Efterlevandeskydd","Fondbyte","Riskprofil","Sparkvot",
  ],
  ekonomi: [
    "Budget","Kassaflöde","Likviditet","Soliditet","Eget kapital","Skulder",
    "Balansräkning","Resultaträkning","Disponibel inkomst","Skuldsättningsgrad",
    "Skuldfinansieringsgrad","BNP","Inflation","Deflation","Stagflation",
    "Recession","KPI","KPIF","Inflationsmål",
  ],
  skatt: [
    "K4-blankett","K10-blankett","Kapitalvinst","Kapitalförlust","Omkostnadsbelopp",
    "Schablonmetoden","Genomsnittsmetoden","Uppskov",
  ],
};

// Relaterade begrepp per kategori
const RELATED: Record<string, string[]> = {
  lan: ["Ränta","Effektiv ränta","Kreditprövning","Skuldebrev"],
  ranta: ["Rörlig ränta","Bunden ränta","Nominell ränta","Effektiv ränta"],
  fastighet: ["Bolån","Belåningsgrad","Kontantinsats"],
  investering: ["Fond","Indexfond","Courtage","Förvaltningsavgift"],
  pension: ["Tjänstepension","Premiepension (PPM)","Riskprofil"],
  ekonomi: ["Budget","Kassaflöde","Likviditet"],
  skatt: ["Kapitalvinst","Kapitalförlust","K4-blankett"],
};

// Texterna per kategori
function shortDef(term: string, cat: string): string {
  if (cat === "lan") return `${term} handlar om lån och återbetalning, med fokus på kostnader och villkor för privatpersoner.`;
  if (cat === "ranta") return `${term} beskriver hur lånets kostnad beräknas över tid och påverkar din månadsbetalning.`;
  if (cat === "fastighet") return `${term} är ett begrepp kopplat till bostadsköp och ägande.`;
  if (cat === "investering") return `${term} är ett investeringsbegrepp som påverkar risk, avgifter eller avkastning.`;
  if (cat === "pension") return `${term} rör långsiktigt sparande och pensionssystemets delar.`;
  if (cat === "ekonomi") return `${term} är ett nyckeltal eller begrepp som beskriver ekonomi och konjunktur.`;
  if (cat === "skatt") return `${term} rör beskattning av sparande, värdepapper eller företagande.`;
  return `${term} är ett finansbegrepp.`;
}

function longDef(term: string, cat: string): string[] {
  if (cat === "lan") return [
    `${term} påverkar hur dyrt ditt lån blir över tid och vilka krav banken ställer i kreditprövningen.`,
    "Villkoren kan variera mellan banker, jämför avgifter, räntor och flexibilitet innan du skriver på.",
    "Titta särskilt på effektiv ränta, avgifter samt möjligheter till extraamortering eller förtidslösen.",
  ];
  if (cat === "ranta") return [
    `${term} styr kostnaden för lånet och beror på både marknadsräntor och din riskprofil.`,
    "Banker använder olika kalkylräntor och påslag, därför kan erbjudanden skilja sig åt.",
    "Förstå skillnaden mellan nominell och effektiv ränta för att jämföra rättvist.",
  ];
  if (cat === "fastighet") return [
    `${term} uppstår i samband med fastighetsaffärer och registreras hos Lantmäteriet eller via banken.`,
    "Kostnaderna är ofta engångsavgifter men kan påverka din totala boendekalkyl betydligt.",
    "Planera för dessa kostnader i budgeten inför köp.",
  ];
  if (cat === "investering") return [
    `${term} påverkar hur dina pengar växer och vilken risk du tar på kapitalmarknaden.`,
    "Avgifter, skatter och tidshorisont är centrala faktorer bakom nettoavkastningen.",
    "Sprid risken och följ en tydlig strategi för att undvika onödiga tapp vid volatilitet.",
  ];
  if (cat === "pension") return [
    `${term} ingår i den svenska pensionsstrukturen eller val du kan göra för din framtida pension.`,
    "Val av risknivå, avgifter och eventuellt skydd påverkar pensionens storlek.",
    "Se över dina val årligen och anpassa efter livssituation och horisont.",
  ];
  if (cat === "ekonomi") return [
    `${term} används för att analysera ekonomisk hälsa hos hushåll, företag eller ekonomier.`,
    "Nyckeltalet påverkas av flera faktorer och bör tolkas i sitt sammanhang.",
    "Kombinera flera mått för en mer heltäckande bild.",
  ];
  if (cat === "skatt") return [
    `${term} bestämmer hur transaktioner och vinster ska deklareras och beskattas.`,
    "Regler uppdateras då och då, kontrollera aktuella krav hos Skatteverket.",
    "Dokumentera anskaffningar och försäljningar för korrekt deklaration.",
  ];
  return [
    `${term} är ett centralt begrepp inom privatekonomi.`,
    "Kännedom om definition och användning minskar risken för dyra misstag.",
    "Jämför alltid villkor och kontrollera källor.",
  ];
}

function example(cat: string): string | undefined {
  if (cat === "lan" || cat === "ranta")
    return "Ex: Lån på 1 000 000 kr med 4% nominell ränta och 30 år löptid ger cirka 4 775 kr i ränta första månaden, före amortering.";
  if (cat === "fastighet")
    return "Ex: Vid bostadsköp för 3 000 000 kr kan pantbrev och lagfart kosta tiotusentals kronor utöver kontantinsats.";
  if (cat === "investering")
    return "Ex: Ett månadssparande på 1 000 kr som växer 7% per år kan bli cirka 1,2 miljoner på 40 år med ränta på ränta.";
  if (cat === "pension")
    return "Ex: Löneväxling kan löna sig vid hög lön men kan påverka SGI, sjukpenninggrundande inkomst.";
  if (cat === "ekonomi")
    return "Ex: Ett hushåll med 30 000 kr i nettoinkomst och 8 000 kr i fasta boendekostnader har begränsat utrymme för sparande.";
  if (cat === "skatt")
    return "Ex: Vid aktieförsäljning deklareras vinst eller förlust på K4, schablonmetoden kan användas om anskaffningsvärde saknas.";
  return undefined;
}

// Generera FAQ om inte överskrivning finns
function buildFaqDefault(term: string, sd: string, ld: string[], ex?: string): GlossaryFAQ[] {
  return [
    { q: `Vad är ${term}?`, a: sd },
    { q: `Hur fungerar ${term} i praktiken?`, a: `${ld[0]}${ex ? " " + ex : ""}`.trim() },
    { q: `Vad ska jag tänka på kring ${term}?`, a: ld.slice(1).join(" ").trim() },
  ];
}

// Samla alla termer unikt
const ALL_PAIRS: Array<{ term: string; cat: string }> = [];
for (const [cat, terms] of Object.entries(CATEGORIES)) {
  for (const t of terms) ALL_PAIRS.push({ term: t, cat });
}
const UNIQUE = Array.from(
  new Map(ALL_PAIRS.map(p => [p.term, p])).values()
).sort((a,b) => slugify(a.term).localeCompare(slugify(b.term)));

// Bygg grundlista
let glossary: GlossaryTerm[] = UNIQUE.map(({ term, cat }) => {
  const sd = shortDef(term, cat);
  const ld = longDef(term, cat);
  const ex = example(cat);
  const rel = (RELATED[cat] || []).slice(0,5);
  const faqs = buildFaqDefault(term, sd, ld, ex);
  return {
    term,
    slug: slugify(term),
    shortDefinition: sd,
    longDefinition: ld,
    example: ex,
    relatedTerms: rel,
    sources: [...SOURCES],
    lastUpdated: TODAY,
    faqs,
  };
});

// Hand tweak för kärntermer, mer precisa texter och FAQ
function override(term: string, patch: Partial<GlossaryTerm> & { faqs?: GlossaryFAQ[] }) {
  const i = glossary.findIndex(t => t.term.toLowerCase() === term.toLowerCase());
  if (i >= 0) {
    glossary[i] = { ...glossary[i], ...patch };
  }
}

// Amortering
override("Amortering", {
  shortDefinition: "Avbetalning på lånets skuld, minskar skulden vid varje betalning.",
  longDefinition: [
    "Amortering är den del av din månadsbetalning som sänker kvarvarande skuld. Ränta tillkommer ovanpå amorteringen.",
    "Vanliga modeller är rak amortering, samma amorteringsbelopp, och annuitet, samma totalbelopp där ränta och amortering skiftar.",
    "Högre amortering minskar räntekostnaden över tid men höjer din månadsutgift nu.",
  ],
  example: "Ex: Lån 1 000 000 kr med rak amortering 2 500 kr per månad minskar skulden 2 500 kr varje månad, utöver räntan.",
  relatedTerms: ["Annuitetslån","Rak amortering","Amorteringskrav","Ränta","Effektiv ränta"],
  faqs: [
    { q: "Vad är amortering?", a: "Avbetalning på lånets skuld som minskar skulden vid varje betalning." },
    { q: "Vad är skillnaden mellan rak amortering och annuitet?", a: "Rak amortering ger samma amorteringsbelopp varje period, annuitet ger samma totalbelopp där ränta och amortering förskjuts över tid." },
    { q: "Hur påverkar högre amortering min ekonomi?", a: "Du betalar mer per månad nu, men minskar räntekostnader och risk över tid." },
  ],
});

// Effektiv ränta
override("Effektiv ränta", {
  shortDefinition: "Total lånekostnad per år inklusive ränta och avgifter, uttryckt i procent.",
  longDefinition: [
    "Effektiv ränta gör olika lån jämförbara eftersom avgifter och räntesats vägs in.",
    "Ju fler avgifter och ju tätare betalningar, desto högre blir effektiv ränta jämfört med nominell.",
    "Konsumentkreditlagen kräver att effektiv ränta visas i kreditmarknadsföring.",
  ],
  example: "Ex: Ett lån med 6% nominell ränta och avgifter kan få 7,1% effektiv ränta.",
  relatedTerms: ["Nominell ränta","Ränta","Uppläggningsavgift","Aviavgift"],
  faqs: [
    { q: "Vad betyder effektiv ränta?", a: "Den totala årskostnaden för ett lån inklusive ränta och avgifter." },
    { q: "Varför är effektiv ränta viktig?", a: "Den gör det möjligt att jämföra lån med olika avgifter och betalningsintervall på ett rättvist sätt." },
    { q: "Är effektiv ränta högre än nominell?", a: "Ofta ja, eftersom avgifter och betalningsfrekvens adderas till den nominella räntan." },
  ],
});

// Bolån
override("Bolån", {
  shortDefinition: "Lån med bostaden som säkerhet, ofta lägre ränta än blancolån.",
  longDefinition: [
    "Bolån kräver kontantinsats och innebär kostnader som pantbrev och lagfart.",
    "Belåningsgrad och skuldkvot påverkar amorteringskrav enligt Finansinspektionens regler.",
    "Välj rörlig eller bunden ränta beroende på riskaptit och marknadsläge.",
  ],
  example: "Ex: Bostad 3 000 000 kr med 15% kontantinsats ger bolån 2 550 000 kr.",
  relatedTerms: ["Belåningsgrad","Kontantinsats","Pantbrev","Lagfart","Amorteringskrav"],
  faqs: [
    { q: "Hur mycket kontantinsats krävs för bolån?", a: "Minst 15% av köpesumman för bostad i Sverige." },
    { q: "Vad påverkar min bolåneränta?", a: "Marknadsräntor, belåningsgrad, din ekonomi och bankens riskbedömning." },
    { q: "När måste jag amortera på bolån?", a: "Amorteringskrav beror på belåningsgrad och skuldkvot enligt FI." },
  ],
});

// Pantbrev
override("Pantbrev", {
  shortDefinition: "Bevis på inteckning i fastighet som används som säkerhet för lån.",
  longDefinition: [
    "Pantbrev utfärdas av Lantmäteriet och motsvarar ett belopp som kan pantsättas till banken.",
    "Kostnaden är 2% av inteckningsbeloppet plus administrativ avgift.",
    "Befintliga pantbrev kan återanvändas om utrymme finns.",
  ],
  example: "Ex: Nya pantbrev 1 500 000 kr, stämpelskatt cirka 30 000 kr plus avgift.",
  relatedTerms: ["Bolån","Belåningsgrad","Kontantinsats","Lagfart"],
  faqs: [
    { q: "Vad är pantbrev?", a: "Ett bevis på inteckning i fastighet som banken kan ta som säkerhet för lån." },
    { q: "Vad kostar pantbrev?", a: "2% av inteckningsbeloppet plus en fast administrativ avgift." },
    { q: "Måste nya pantbrev tas ut vid varje köp?", a: "Nej, befintliga kan ofta återanvändas om utrymme finns." },
  ],
});

// Lagfart
override("Lagfart", {
  shortDefinition: "Registrering av dig som ny ägare till en fastighet.",
  longDefinition: [
    "Lagfart söks hos Lantmäteriet och medför stämpelskatt.",
    "Avgiften är ofta 1,5% av köpeskillingen för privatpersoner plus expeditionsavgift.",
    "Lagfart krävs för att kunna ta ut pantbrev.",
  ],
  example: "Ex: Köp 3 000 000 kr, lagfart cirka 45 000 kr plus avgift.",
  relatedTerms: ["Bolån","Pantbrev","Kontantinsats"],
  faqs: [
    { q: "Vad är lagfart?", a: "Registreringen som gör dig till formell ägare av en fastighet." },
    { q: "Vad kostar lagfart?", a: "Vanligen 1,5% av köpeskillingen för privatpersoner plus avgift." },
    { q: "Varför behövs lagfart?", a: "Den krävs för att kunna belåna fastigheten och ta ut pantbrev." },
  ],
});

// ISK
override("Investeringssparkonto (ISK)", {
  shortDefinition: "Skatteform för sparande där du schablonbeskattas istället för reavinstskatt.",
  longDefinition: [
    "Skatten baseras på kapitalunderlag och statslåneränta enligt gällande regler.",
    "Deklarationen förenklas, köp och sälj behöver inte K4.",
    "Passar ofta aktier och fonder med förväntad positiv avkastning.",
  ],
  example: "Ex: Månadssparande i indexfonder på ISK beskattas löpande via schablon.",
  relatedTerms: ["Kapitalförsäkring","Fond","Aktie","K4-blankett"],
  faqs: [
    { q: "Hur beskattas ISK?", a: "Med en årlig schablonskatt baserad på kapitalunderlag och statslåneränta." },
    { q: "Behöver jag K4 för ISK?", a: "Nej, köp och sälj deklareras inte på K4 för ISK." },
    { q: "Vad passar ISK till?", a: "Främst aktier och fonder med förväntad positiv avkastning över tid." },
  ],
});

// Indexfond
override("Indexfond", {
  shortDefinition: "Fond som följer ett marknadsindex till låg avgift.",
  longDefinition: [
    "Låga avgifter har historiskt varit viktiga för god långsiktig avkastning.",
    "Ger bred riskspridning på ett enkelt sätt.",
    "Jämför total avgift, TER, och spårningsfel.",
  ],
  example: "Ex: Global indexfond med 0,2% avgift ger billig exponering mot många bolag.",
  relatedTerms: ["Fond","Förvaltningsavgift","TER","ETF"],
  faqs: [
    { q: "Varför välja indexfond?", a: "Låg avgift och bred riskspridning ger ofta bra förutsättningar långsiktigt." },
    { q: "Vad ska jag jämföra mellan indexfonder?", a: "Total avgift, TER, spårningsfel och vilket index som följs." },
    { q: "Är indexfonder passiva?", a: "Ja, de följer ett index istället för aktiv förvaltning." },
  ],
});

// Kapitalvinst
override("Kapitalvinst", {
  shortDefinition: "Vinst vid försäljning av tillgång, till exempel aktier eller bostad.",
  longDefinition: [
    "Kapitalvinst är skillnaden mellan försäljningspris och omkostnadsbelopp.",
    "Vinsten beskattas enligt gällande regler, olika för privatbostad och värdepapper.",
    "Korrekt beräkning kräver dokumentation av anskaffningskostnader.",
  ],
  example: "Ex: Säljer du bostad för 3 000 000 kr som köptes för 2 000 000 kr inklusive kostnader är kapitalvinsten 1 000 000 kr.",
  relatedTerms: ["Kapitalförlust","Omkostnadsbelopp","K4-blankett"],
  faqs: [
    { q: "Vad är kapitalvinst?", a: "Vinst vid försäljning av tillgångar som aktier eller bostäder." },
    { q: "Hur beskattas kapitalvinst?", a: "Reglerna skiljer sig mellan privatbostad och värdepapper, se Skatteverket." },
    { q: "Vilka underlag behöver jag?", a: "Kvitton och handlingar som visar anskaffningskostnad och försäljningspris." },
  ],
});

// Kapitalförlust
override("Kapitalförlust", {
  shortDefinition: "Förlust vid försäljning av tillgång under anskaffningsvärdet.",
  longDefinition: [
    "Kapitalförlust kan i vissa fall kvittas mot kapitalvinst.",
    "Det finns regler för hur stor del som får dras av.",
    "Viktigt att redovisa korrekt i deklarationen.",
  ],
  example: "Ex: Säljer du aktier för 50 000 kr som köptes för 70 000 kr har du kapitalförlust 20 000 kr.",
  relatedTerms: ["Kapitalvinst","Omkostnadsbelopp","K4-blankett"],
  faqs: [
    { q: "Vad är kapitalförlust?", a: "Förlust vid försäljning av tillgångar till ett pris under anskaffningsvärdet." },
    { q: "Kan jag dra av kapitalförlust?", a: "Ja, mot kapitalvinst, reglerna beror på typ av tillgång." },
    { q: "Hur deklarerar jag kapitalförlust?", a: "Använd rätt blankett, ofta K4 vid värdepapper." },
  ],
});

export { glossary };
export default glossary;
