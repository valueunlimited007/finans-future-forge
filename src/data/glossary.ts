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
// Lägg detta efter declarationen av CATEGORIES i glossary.ts

const EXTRA: Partial<Record<keyof typeof CATEGORIES, string[]>> = {
  lan: [
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
    "Räntetak","Räntekorridor","Styrränta","Referensränta","Riksbankens reporänta",
    "Räntebana","Inflationsjusterad ränta","Realränta","Nollränta","Minusränta",
    "Ränta på ränta","Ränteperiod","Räntedag","Dagkonvention","Bas­punkter (bps)",
    "Fixingränta","Stibor","Euribor","Libor (historik)","Yield curve",
    "Inverterad räntekurva","Terminsränta","Forward rate",
    "Duration modifierad","Konvexitet","Diskonteringsränta","Kalkylränta WACC"
  ],
  fastighet: [
    "Bruksvärdeshyra","Andrahandsuthyrning","Hyresnämnden","BRF-ekonomi",
    "Kalkylränta bolån","Boendekalkyl","Driftskostnader bostad","Tomträttsavgäld",
    "Energideklaration","Föreningsintyg","Underhållsplan BRF","Samfällighetsavgift",
    "Servitut","Inteckning","Pantbrevskostnad","Lagfartskostnad",
    "Likvidavräkning","Tillträdesdag","Besiktning"
  ],
  investering: [
    "Aktieutdelning","Extrautdelning","Avstämningsdag","X-dag","Utdelningsandel",
    "Återinvestering utdelning (DRIP)","Syntetisk replikering","Fysisk replikering",
    "Indexnära fond","Smart beta","Faktorinvestering","Momentumstrategi",
    "Värdeinvestering","Tillväxtinvestering","Small cap","Mid cap","Large cap",
    "Micro cap","Free float","Börsvärde","Likviditetsgarant","Spread","Orderdjup",
    "Auction call","Öppningscall","Stängningscall","Kill switch","Stop-loss",
    "Limit order","Market order","Fill or kill","GTC-order",
    "Blankning (short selling)","Utlåning av aktier","Belåning av portfölj",
    "Marginalkrav","Margin call","Hävstångs-ETF","Inversa ETF:er",
    "ETN (Exchange Traded Note)","Certifikat","Bull & Bear-certifikat",
    "Warrant","Mini future","Knock-out","Barrier","Covered call",
    "Option (call/put)","Lösendag","Lösenpris","Amerikansk option","Europeisk option",
    "Terminer (futures)","Råvarutermin","Räntefutur","Valutatermin",
    "Swap","CDS (Credit Default Swap)","IRS (ränte­swap)","Total return swap",
    "NAV","Tracking error","Tracking difference","Alfa (alpha)","Beta",
    "Sharpekvot","Sortinokvot","Information ratio","Max drawdown","Volatilitet",
    "Standardavvikelse","Kvartilspridning","Skewness","Kurtosis",
    "VaR (Value at Risk)","CVaR","Monte Carlo-simulering","Backtest",
    "DCF (Discounted Cash Flow)","WACC","Kassaflödesvärdering","Multipelvärdering",
    "EV/EBIT","EV/EBITDA","P/E-tal","P/B-tal","P/S-tal","PEG-tal","ROE","ROA","ROC",
    "ROIC","CFROI","EPS","DPS","FCF","Capex","Opex","Working capital","Net debt",
    "Skuldsättningsgrad (Debt/Equity)","LTV (Loan-to-Value)",
    "DSCR (Debt Service Coverage Ratio)","Dividend yield","Totalavkastning",
    "HPR (Holding Period Return)","Hurdle rate","IRR","Payback-tid",
    "NPV (Nettonuvärde)","Diversifiering","Korrelationskoefficient","Riskparitet",
    "Allvädersportfölj","Tillgångsallokering","Rebalansering",
    "Glidande medelvärde","RSI","MACD","Bollingerband","Stokastisk oscillator",
    "ETF-termer TER","Ongoing charges","Fond-i-fond","UCITS","PRIIPs","MiFID II"
  ],
  pension: [
    "Pensionsprognos","Pensionsmyndigheten","Premiepensionsfonder","Flytträtt pension",
    "Flyttavgift pension","Traditionell försäkring","Fondförsäkring",
    "Kapitalspar pension (gammalt IPS)","Livslängdsantagande",
    "Uttagsregler pension","Efterlevandepension","Garantipension"
  ],
  ekonomi: [
    "Prisbasbelopp","Inkomstbasbelopp","Balansräkning (privat)","Resultaträkning (privat)",
    "Disponibel inkomst","Buffertsparande","Sparkvot","Marginalskatt","Skuldkvotstak",
    "Ränteavdragstak","Reallön","Nominallön","Inflationsmål","Penningpolitik",
    "Finanspolitik","Konjunkturcykel","Högkonjunktur","Lågkonjunktur","Output gap",
    "NAIRU","Phillipskurvan","Kreditcykel","Basel III","LCR","NSFR","Leverage ratio",
    "Systemrisk","Makrotillsyn"
  ],
  skatt: [
    "Ränteavdrag","Investeraravdrag","ISkatt schablon (ISK-skatt)","Källskatt utdelning",
    "Kupongskatt","Avräkning utländsk skatt","Skattepliktig förmån",
    "30-regeln (värdepapper)","Schablonmetoden (K4)","Genomsnittsmetoden (K4)",
    "Omsättningsskatt historik","Tobinskatt (debatt)","FATCA","CRS","Kontrolluppgift",
    "Omvänd kvittning"
  ]
};

// Merge EXTRA in i CATEGORIES
for (const [cat, list] of Object.entries(EXTRA)) {
  if (list?.length) CATEGORIES[cat as keyof typeof CATEGORIES].push(...list);
}

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

// Texterna per kategori - Förbättrade med mer detaljerat innehåll
function shortDef(term: string, cat: string): string {
  const t = term.toLowerCase();
  
  // Specifika termer med detaljerat innehåll
  if (t.includes("ränta")) return `${term} är den kostnad eller avkastning som uttrycks i procent per år och påverkar det totala beloppet du betalar eller får. Räntan bestäms av flera faktorer som centralbanksräntan, kreditrisk och marknadssituation.`;
  if (t.includes("amortering")) return `${term} innebär att du betalar av på låneskulden genom regelbundna betalningar som minskar den ursprungliga skulden. Amorteringstakten påverkar både månadskostnaden och den totala räntekostnaden över lånets löptid.`;
  if (t.includes("säkerhet")) return `${term} är något värdefull som ställs som garanti för ett lån, vilket minskar långivarens risk och ofta resulterar i bättre lånevillkor för låntagaren.`;
  if (t.includes("kreditupplysning") || t.includes("uc")) return `${term} är en kontroll av din ekonomiska historia och betalningsförmåga som långivare använder för att bedöma kreditrisken innan de beviljar lån.`;
  if (t.includes("betalningsanmärkning")) return `${term} är en registrering som visar att du inte betalat räkningar i tid, vilket påverkar din kreditvärdighet negativt och kan försvåra framtida lån.`;
  if (t.includes("kredit")) return `${term} handlar om möjligheten att låna pengar eller köpa på avbetalning, baserat på din ekonomiska situation och kreditvärdighet.`;

  // Förbättrade kategoribaserade definitioner
  if (cat === "lan") return `${term} är en finansieringslösning som ger dig tillgång till kapital för olika ändamål. Olika låntyper har olika villkor, räntor och användningsområden som påverkar din ekonomiska situation långsiktigt.`;
  if (cat === "ranta") return `${term} är en ränterelaterad term som direkt påverkar kostnaden för ditt lån eller avkastningen på din investering. Förståelse för räntestrukturer hjälper dig att fatta bättre finansiella beslut.`;
  if (cat === "fastighet") return `${term} är ett begrepp kopplat till bostadsköp, ägande och fastighetsfinansiering. Fastighetsmarknaden påverkas av räntor, ekonomisk utveckling och bostadspolitik.`;
  if (cat === "investering") return `${term} är ett investeringsbegrepp som kan hjälpa dig bygga förmögenhet över tid. Alla investeringar innebär en avvägning mellan risk och potentiell avkastning.`;
  if (cat === "pension") return `${term} rör långsiktigt sparande och pensionssystemets olika delar. Pensionsplanering kräver tid och förståelse för olika sparformer och skatteregler.`;
  if (cat === "ekonomi") return `${term} är ett nyckeltal eller begrepp som beskriver ekonomisk aktivitet, tillväxt och marknadsutveckling. Ekonomisk förståelse hjälper dig navigera finansiella beslut.`;
  if (cat === "skatt") return `${term} rör beskattning av sparande, investeringar eller företagande. Skattekunskap hjälper dig att optimera din ekonomi inom ramen för gällande lagstiftning.`;
  return `${term} är ett viktigt finansbegrepp som påverkar din ekonomiska situation på olika sätt. Grundläggande finansiell kunskap stärker din förmåga att fatta informerade beslut.`;
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

// Förbättrade FAQ med mer användarnytta och specifika frågor
function buildFaqDefault(term: string, sd: string, ld: string[], ex?: string): GlossaryFAQ[] {
  const t = term.toLowerCase();
  
  // Anpassade FAQ-frågor baserat på termens innehåll
  let questions: GlossaryFAQ[] = [
    { q: `Vad är ${term}?`, a: sd }
  ];
  
  if (t.includes("lån") || t.includes("kredit")) {
    questions.push(
      { q: `Hur ansöker jag om ${term}?`, a: `${ld[0]} ${ex || ""}`.trim() },
      { q: `Vad kostar ${term}?`, a: ld[1] || "Kostnaden varierar beroende på din ekonomiska situation och marknadsläget." },
      { q: `Vilka krav finns för ${term}?`, a: ld[2] || "Kraven inkluderar vanligtvis stabil inkomst, god kredithistorik och passande skuldsättning." }
    );
  } else if (t.includes("ränta")) {
    questions.push(
      { q: `Hur beräknas ${term}?`, a: `${ld[0]} ${ex || ""}`.trim() },
      { q: `Vad påverkar ${term}?`, a: ld[1] || "Räntan påverkas av centralbanksränta, inflation, kreditrisk och konkurrens på marknaden." },
      { q: `Ska jag välja fast eller rörlig ${term}?`, a: ld[2] || "Valet beror på din risktolerans och marknadsutsikterna." }
    );
  } else if (t.includes("investering") || t.includes("sparande")) {
    questions.push(
      { q: `Hur kommer jag igång med ${term}?`, a: `${ld[0]} ${ex || ""}`.trim() },
      { q: `Vilka risker finns med ${term}?`, a: ld[1] || "Alla investeringar innebär risk, men långsiktigt sparande minskar risken avsevärt." },
      { q: `Hur mycket ska jag satsa på ${term}?`, a: ld[2] || "Börja med vad du bekvämt kan spara varje månad och öka gradvis." }
    );
  } else if (t.includes("försäkring")) {
    questions.push(
      { q: `Behöver jag ${term}?`, a: `${ld[0]} ${ex || ""}`.trim() },
      { q: `Vad kostar ${term}?`, a: ld[1] || "Kostnaden beror på din situation, ålder och vilken täckning du väljer." },
      { q: `Hur väljer jag rätt ${term}?`, a: ld[2] || "Jämför olika alternativ och läs villkoren noggrant för att förstå täckningen." }
    );
  } else {
    questions.push(
      { q: `Hur fungerar ${term} i praktiken?`, a: `${ld[0]} ${ex || ""}`.trim() },
      { q: `Vad ska jag tänka på kring ${term}?`, a: ld[1] || "Det är viktigt att förstå alla aspekter innan du fattar ekonomiska beslut." },
      { q: `Hur påverkar ${term} min ekonomi?`, a: ld[2] || `${term} kan ha både kort- och långsiktiga effekter på din ekonomiska situation.` }
    );
  }
  
  return questions.slice(0, 4); // Max 4 FAQs för att hålla kvaliteten hög
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
