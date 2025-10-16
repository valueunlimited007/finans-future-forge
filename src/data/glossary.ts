export interface GlossaryFAQ { q: string; a: string; }

export interface GlossaryPartner {
  name: string;
  logo: string;
  description: string;
  url: string;
  brandId: string;
}

export interface GlossaryTerm {
  term: string;
  slug: string;
  shortDefinition: string;
  longDefinition: string[];
  example?: string;
  relatedTerms?: string[];
  sources?: { title: string; url: string }[];
  partners?: GlossaryPartner[];
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
    `${term} påverkar hur dyrt ditt lån blir över tid och vilka krav banken ställer i kreditprövningen. Långivare bedömer din ekonomiska situation, inkomststabilitet och befintliga skulder för att bestämma villkoren.`,
    "Olika låntyper passar olika situationer - privatlån för personliga behov, billån för fordon och bolån för fastigheter. Räntan varierar beroende på lånetyp, löptid och din kreditvärdighet.",
    "Innan du tar ett lån bör du noggrant överväga din återbetalningsförmåga och jämföra erbjudanden från flera långivare. Räkna alltid på den totala kostnaden över hela lånets löptid.",
    "Kom ihåg att lån innebär en långsiktig ekonomisk förpliktelse som påverkar din budget under många år framöver. Ha alltid en plan för återbetalning och en buffert för oförutsedda utgifter."
  ];
  if (cat === "ranta") return [
    `${term} styr kostnaden för lånet och beror på både marknadsräntor och din riskprofil. Centralbanksräntan påverkar de basräntor som bankerna använder som grund för sina utlåningsräntor.`,
    "Fast ränta ger förutsägbarhet eftersom kostnaden är densamma under hela låneperioden, medan rörlig ränta kan variera med marknadsförhållandena och påverka din månadskostnad.",
    "Effektiv ränta är det viktigaste måttet eftersom det inkluderar alla kostnader som uppläggningsavgifter och månadsavgifter. Detta gör det enkelt att jämföra olika låneförslag rättvist.",
    "Små skillnader i ränta kan ha stor påverkan över tid - en procents skillnad på ett stort lån kan innebära tiotusentals kronor i besparingar över lånets löptid."
  ];
  if (cat === "fastighet") return [
    `${term} är centralt för bostadsköp och påverkar både finansieringsmöjligheter och långsiktiga kostnader. Fastighetsmarknaden påverkas av räntor, ekonomisk utveckling och bostadspolitik.`,
    "Vid fastighetsköp tillkommer kostnader utöver köpeskillingen som pantbrev, lagfart, besiktning och eventuell mäklararvode. Dessa kan uppgå till 3-5% av köpesumman.",
    "Belåningsgraden påverkar vilken ränta du får och om du behöver kontantinsats. Högre belåning innebär större risk för banken och därmed högre ränta.",
    "Tänk långsiktigt vid fastighetsköp - överväg framtida underhållskostnader, energikostnader och hur bostaden passar dina behov över tid."
  ];
  if (cat === "investering") return [
    `${term} handlar om att placera pengar med målet att få avkastning över tid. Alla investeringar innebär risk, och högre potentiell avkastning kommer vanligtvis med högre risk.`,
    "Diversifiering är nyckeln till framgångsrik investering - sprid dina investeringar över olika tillgångsslag, sektorer och geografiska marknader för att minska risken.",
    "Tid är en av investerarens bästa vänner. Genom att investera under lång tid kan du dra nytta av ränta-på-ränta-effekten och jämna ut marknadens kortsiktiga svängningar.",
    "Förstå din egen risktolerans och investeringshorisont innan du väljer investeringsstrategi. Unga investerare kan ofta ta större risker än de som närmar sig pension."
  ];
  if (cat === "pension") return [
    `${term} är en del av det svenska pensionssystemet som påverkar din ekonomiska trygghet efter arbetslivet. Pensionen består av flera delar: allmän pension, tjänstepension och eget sparande.`,
    "Ju tidigare du börjar spara till pension, desto mindre behöver du spara varje månad tack vare ränta-på-ränta-effekten. Även små belopp får stor effekt över lång tid.",
    "Olika pensionsformer har olika skatteregler - tjänstepension är vanligtvis skattefri att betala in men beskattas vid uttag, medan privat pensionssparande kan ge avdrag.",
    "Pensionsplanering kräver långsiktig strategi där du balanserar trygghet mot avkastning baserat på hur länge det är kvar till pension och din risktolerans."
  ];
  if (cat === "ekonomi") return [
    `${term} påverkar den ekonomiska utvecklingen och kan indirekt påverka din privatekonomi genom räntor, inflation och arbetsmarknad.`,
    "Ekonomiska indikatorer som BNP, inflation och arbetslöshet ger signaler om ekonomins hälsa och kan påverka centralbankers räntebeslut.",
    "Som privatperson kan du använda ekonomisk förståelse för att bättre tajma stora ekonomiska beslut som bostadsköp eller investeringar.",
    "Ekonomiska cykler är naturliga - genom att förstå dem kan du fatta bättre beslut om sparande, investeringar och skuldsättning."
  ];
  if (cat === "skatt") return [
    `${term} är en del av det svenska skattesystemet som påverkar din privatekonomi. Förståelse för grundläggande skatteregler hjälper dig att optimera din ekonomi lagligt.`,
    "Olika inkomsttyper beskattas olika - arbetsinkomst, kapitalinkomst och pensioner har olika skatteregler som påverkar din nettoinkomst och skatteplanering.",
    "Skatteplanering handlar om att strukturera din ekonomi för att minimera skatten inom ramen för gällande lagar. Detta kan inkludera pensionssparande, gåvor och avdrag.",
    "Utnyttja tillgängliga avdrag som reseavdrag, facklitteratur och pensionssparande för att minska din skattebörda på ett lagligt sätt."
  ];
  return [
    `${term} är ett centralt begrepp inom privatekonomi som påverkar hur vi hanterar och förstår pengar. Grundläggande kunskap om finansiella termer hjälper dig navigera det komplexa ekonomiska landskapet.`,
    "I praktiken innebär förståelse för finansiella begrepp att du kan fatta mer informerade beslut om din ekonomi, vilket kan leda till bättre ekonomiska resultat och större trygghet.",
    "Olika aspekter av finansiella termer kan ha långsiktiga konsekvenser för din ekonomiska situation. Därför är det värt att investera tid i att lära sig mer om hur dessa påverkar din personliga ekonomi.",
  ];
}

function example(cat: string): string | undefined {
  if (cat === "lan" || cat === "ranta")
    return "Praktiskt exempel: Om du lånar 200 000 kr för hemförbättring på 5 år med 5,5% ränta blir månadsavgiften cirka 3 817 kr och den totala kostnaden 229 020 kr. Jämfört med ett lån med 7% ränta sparar du nästan 6 000 kr över lånets löptid.";
  if (cat === "fastighet")
    return "Verkligt exempel: Vid bostadsköp för 3 000 000 kr tillkommer pantbrev (20 000 kr), lagfart (15 000 kr) och eventuell mäklararvode (60 000 kr) - totalt över 95 000 kr utöver kontantinsatsen.";
  if (cat === "investering")
    return "Långsiktigt exempel: Ett månadssparande på 1 000 kr som växer 7% per år blir cirka 1,37 miljoner på 30 år tack vare ränta-på-ränta-effekten. Av denna summa kommer 1,01 miljoner från avkastning.";
  if (cat === "pension")
    return "Konkret beräkning: Löneväxling på 3 000 kr/månad till tjänstepension sparar cirka 900 kr i skatt månadsvis vid marginalskatten 30%, men kan påverka SGI (sjukpenninggrundande inkomst).";
  if (cat === "ekonomi")
    return "Marknadsexempel: När Riksbanken höjer styrräntan med 0,25% påverkas bolåneräntor ofta inom några månader - för en villa på 4 miljoner kr kan detta innebära 10 000 kr mer per år i räntekostnader.";
  if (cat === "skatt")
    return "Skatteberäkning: På kapitalvinst från aktieförsäljning betalar du 30% i skatt. Säljer du aktier för vinst på 100 000 kr betalar du 30 000 kr i skatt, oavsett hur länge du ägt aktierna.";
  return undefined;
}

// Bygg grundlista

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
    "Högre amortering minskar räntekostnaden över tid men höjer din månadsutgift nu. För att beräkna dina amorteringar och förstå din ekonomiska situation bättre kan du använda verktyg som hjälper dig planera dina lån.",
  ],
  example: "Ex: Lån 1 000 000 kr med rak amortering 2 500 kr per månad minskar skulden 2 500 kr varje månad, utöver räntan.",
  relatedTerms: ["Annuitetslån","Rak amortering","Amorteringskrav","Ränta","Effektiv ränta"],
  sources: [
    { title: "Amortera.se - Beräkna lån och amorteringar", url: "https://amortera.se" },
  ],
  partners: [
    {
      name: "Amortera.se",
      logo: "/adtraction-logos/enklare-logo.png",
      description: "Beräkna dina amorteringar och få koll på din ekonomi",
      url: "https://amortera.se",
      brandId: "amortera"
    },
  ],
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
    { q: "Vad är kapitalförlust?", a: "Förlust vid försäljning under anskaffningsvärdet." },
    { q: "Kan jag dra av kapitalförlust?", a: "Ja, enligt särskilda regler kan du kvitta mot kapitalvinst." },
    { q: "Var redovisar jag kapitalförlust?", a: "I deklarationen, ofta K4-blankett." },
  ],
});

// Privatlån
override("Privatlån", {
  partners: [
    {
      name: "Enklare",
      logo: "/adtraction-logos/enklare-logo.png",
      description: "Jämför privatlån från flera banker samtidigt",
      url: "https://www.enklare.se/privatlan",
      brandId: "enklare"
    },
    {
      name: "Northmill",
      logo: "/adtraction-logos/northmill-logo.png",
      description: "Flexibla privatlån med snabb handläggning",
      url: "https://www.northmill.se",
      brandId: "northmill"
    },
    {
      name: "Marginalen Bank",
      logo: "/adtraction-logos/marginalen-logo.png",
      description: "Privatlån upp till 600 000 kr",
      url: "https://www.marginalen.se",
      brandId: "marginalen"
    },
  ],
});

// Blancolån
override("Blancolån", {
  partners: [
    {
      name: "Enklare",
      logo: "/adtraction-logos/enklare-logo.png",
      description: "Jämför blancolån från flera banker samtidigt",
      url: "https://www.enklare.se/privatlan",
      brandId: "enklare"
    },
    {
      name: "Northmill",
      logo: "/adtraction-logos/northmill2-logo.png",
      description: "Flexibla blancolån utan säkerhet",
      url: "https://www.northmill.se",
      brandId: "northmill"
    },
  ],
});

// Företagslån
override("Företagslån", {
  partners: [
    {
      name: "Qred",
      logo: "/adtraction-logos/qred-logo.png",
      description: "Företagslån med snabba beslut",
      url: "https://www.qred.com/se",
      brandId: "qred"
    },
    {
      name: "Lendo",
      logo: "/adtraction-logos/lendo-logo.png",
      description: "Jämför företagslån från flera banker",
      url: "https://www.lendo.se/foretagslan",
      brandId: "lendo"
    },
    {
      name: "Froda",
      logo: "/adtraction-logos/froda-logo.png",
      description: "Rörelsekapital för företag",
      url: "https://www.froda.se",
      brandId: "froda"
    },
  ],
});

// Kreditkort
override("Kreditkort", {
  partners: [
    {
      name: "Nordnet",
      logo: "/adtraction-logos/nordnet-logo.png",
      description: "Kreditkort med cashback på alla köp",
      url: "https://www.nordnet.se/kreditkort",
      brandId: "nordnet"
    },
    {
      name: "SEB",
      logo: "/adtraction-logos/swedbank-logo.png",
      description: "Kreditkort med förmåner och bonusprogram",
      url: "https://seb.se/privat/kort",
      brandId: "seb"
    },
  ],
});

// UC / Kreditupplysning - lägg till partners för lån utan UC
override("UC", {
  partners: [
    {
      name: "Enklare",
      logo: "/adtraction-logos/enklare-logo.png",
      description: "Hitta lån utan hård UC-kontroll",
      url: "https://www.enklare.se/lan-utan-uc",
      brandId: "enklare"
    },
  ],
});

override("Kreditupplysning", {
  partners: [
    {
      name: "Enklare",
      logo: "/adtraction-logos/enklare-logo.png",
      description: "Jämför lån med mjuk kreditkontroll",
      url: "https://www.enklare.se/lan-utan-uc",
      brandId: "enklare"
    },
  ],
});

export { glossary };
export default glossary;
