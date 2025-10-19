export interface GlossaryFAQDE { q: string; a: string; }

export interface GlossaryPartnerDE {
  name: string;
  logo: string;
  description: string;
  url: string;
  brandId: string;
  rating?: number;
  amountRange?: string;
  aprFrom?: string;
  decision?: string;
  requirements?: string;
  isPartner?: boolean;
}

export interface GlossaryTermDE {
  term: string;
  slug: string;
  shortDefinition: string;
  longDefinition: string[];
  example?: string;
  relatedTerms?: string[];
  sources?: { title: string; url: string }[];
  partners?: GlossaryPartnerDE[];
  lastUpdated: string;
  faqs?: GlossaryFAQDE[];
}

// Quellen, verwendet für alle Einträge
const SOURCES = [
  { title: "BaFin", url: "https://www.bafin.de/" },
  { title: "Verbraucherzentrale", url: "https://www.verbraucherzentrale.de/" },
  { title: "Bundesbank", url: "https://www.bundesbank.de/" },
] as const;

const TODAY = "2025-10-19";

// Hilfsfunktion für URL-Slug
function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[^a-z0-9\- ]+/g, "")
    .replace(/ /g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// Kategorien mit Begriffen
const CATEGORIES: Record<string, string[]> = {
  kredit: [
    "Tilgung", "Tilgungsplan", "Annuitätendarlehen", "Ratentilgung", "Tilgungsfreie Zeit",
    "Baufinanzierung", "Ratenkredit", "Konsumentenkredit", "Autokredit", "Sofortkredit",
    "Überbrückungskredit", "Aufstockungskredit", "Rahmenkredit", "Dispositionskredit",
    "Firmenkredit", "Unternehmenskredit", "Betriebsmittelkredit", "Investitionskredit",
    "Kreditprüfung", "Bonitätsprüfung", "Kreditauskunft", "SCHUFA", "Creditreform",
    "Negativmerkmal", "Zahlungsverzug", "Bearbeitungsgebühr", "Kontoführungsgebühr",
    "Mahngebühr", "Mahnung", "Lastschrift", "Dauerauftrag", "Vorfälligkeitsentschädigung",
    "Sondertilgung", "Tilgungsplan", "Ratenzahlung", "Fälligkeit", "Darlehensvertrag",
    "Bürge", "Bürgschaft", "Selbstschuldnerische Bürgschaft", "Ausfallbürgschaft",
    "Sicherheit", "Verpfändung", "Regressrecht", "Vorfälligkeitsentschädigung",
    "Restschuldversicherung", "Haushaltsrechnung", "Beleihungswert", "Loan-to-Value",
    "Schuldenquote", "Eigenkapital", "Fremdkapital",
  ],
  zinsen: [
    "Zinsen", "Nominalzins", "Sollzins", "Effektivzins", "Variabler Zinssatz",
    "Festzins", "Zinsbindung", "Zinsbindungsfrist", "Durchschnittszins",
    "Referenzzins", "Leitzins", "Kalkulationszins", "Zinseszins",
  ],
  immobilien: [
    "Grundschuld", "Grundbuch", "Grundbucheintrag", "Notarkosten", "Kaufnebenkosten",
    "Grunderwerbsteuer", "Maklerkosten", "Instandhaltungsrücklage",
  ],
  investment: [
    "Sparkonto", "Festgeldkonto", "Tagesgeldkonto", "Depot", "Wertpapierdepot",
    "Aktie", "Fonds", "Indexfonds", "Aktiv verwalteter Fonds", "Dividende",
    "Dividendenrendite", "KGV", "Kurs-Gewinn-Verhältnis", "Ordergebühr", "Transaktionskosten",
    "Verwaltungsgebühr", "TER", "Gesamtkostenquote", "ETF", "ETC", "REIT",
    "Wertpapierkredit", "Hebel", "Derivate", "Option", "Termingeschäft", "Swap",
    "Rentenfonds", "Anleihe", "Unternehmensanleihe", "Staatsanleihe", "Bundesanleihe",
    "Inflation-Linked Bond", "Duration", "Kreditrisiko", "Rendite", "Effektivverzinsung",
    "Wertzuwachs", "Volatilität", "Standardabweichung", "Sharpe-Ratio",
    "Risikoadjustierte Rendite",
  ],
  rente: [
    "Betriebsrente", "Riester-Rente", "Rürup-Rente", "Private Rentenversicherung",
    "Gesetzliche Rentenversicherung", "Entgeltumwandlung", "Beitragszusage",
    "Leistungszusage", "Hinterbliebenenversorgung", "Fondswechsel", "Risikoprofil",
    "Sparquote",
  ],
  wirtschaft: [
    "Budget", "Haushaltsplan", "Cashflow", "Liquidität", "Eigenkapitalquote",
    "Eigenkapital", "Verbindlichkeiten", "Schulden", "Bilanz", "GuV",
    "Gewinn- und Verlustrechnung", "Verfügbares Einkommen", "Verschuldungsgrad",
    "Fremdkapitalquote", "BIP", "Bruttoinlandsprodukt", "Inflation", "Deflation",
    "Stagflation", "Rezession", "VPI", "Verbraucherpreisindex", "Inflationsziel",
  ],
  steuern: [
    "Einkommensteuererklärung", "Abgeltungssteuer", "Kapitalertragsteuer",
    "Spekulationsgewinn", "Spekulationsfrist", "Anschaffungskosten",
    "Fifo-Methode", "Durchschnittsmethode", "Verlustvortrag", "Verlustverrechnung",
  ],
};

// Zusätzliche Begriffe
const EXTRA: Partial<Record<keyof typeof CATEGORIES, string[]>> = {
  kredit: [
    "Kreditzusage", "Blitzkredit", "Minikredit", "Umschuldung", "Kredit ohne SCHUFA",
    "Kreditvermittler", "Kreditbroker", "Kreditkarte", "Kreditwürdigkeit",
    "Bonität", "Kreditlimit", "Kreditrahmen", "Kreditlaufzeit", "Kreditantrag",
    "Auszahlung", "Kreditvertrag", "Rückzahlungsdauer", "Kreditkosten",
    "Bearbeitungsgebühr", "Zinsvorteil", "Fälligkeit", "Mahngebühr",
    "Inkasso", "Gerichtsvollzieher", "Vollstreckung", "Schuldenerlass",
    "Restschuldbefreiung", "Insolvenz", "Privatinsolvenz", "Darlehensvertrag",
    "Gläubiger", "Schuldner", "Auskunftspflicht", "Widerrufsrecht",
    "Eigentumsvorbehalt", "Effektiver Jahreszins", "Haushaltsrechnung",
    "Verbraucherkreditgesetz", "Darlehensgeber", "Kreditgeber",
    "Sammelkredit", "Ratenpause", "Zahlungspause", "Verzugszinsen",
    "Bonitätsprüfung ohne SCHUFA", "Gesamtschuldnerische Haftung",
    "Tilgungsaussetzung", "Tilgungsfreie Jahre", "Durchschnittszins Baufinanzierung",
    "Grüne Baufinanzierung", "Aufstockung", "Nachrangdarlehen",
    "Grundpfandrecht", "Hypothek", "Bürgschaftserklärung",
    "Tilgungserleichterung", "Tilgungsaussetzung", "Zinsgarantie",
    "Zinsrabatt", "Zinsbindung", "Ratenbindung", "Aufgelaufene Zinsen",
  ],
  zinsen: [
    "Zinsobergrenze", "Zinskorridor", "Leitzins", "Referenzzins",
    "EZB-Leitzins", "Zinsentwicklung", "Inflationsbereinigter Zins",
    "Realzins", "Nullzins", "Negativzins", "Zinseszins", "Zinsperiode",
    "Zinstag", "Zinsberechnungsmethode", "Basispunkte", "Fixing-Zinssatz",
    "Euribor", "Libor", "Forward-Zinssatz", "Zinsstrukturkurve",
    "Inverse Zinskurve", "Terminzins", "Forward Rate",
  ],
  immobilien: [
    "Mietspiegel", "Mietpreisbremse", "Wohnungseigentumsgesetz",
    "Hausgeld", "Wohngeld", "Instandhaltungskosten",
    "Erbpacht", "Energieausweis", "Teilungserklärung",
    "Gemeinschaftseigentum", "Sondereigentum", "Wegerecht",
    "Dienstbarkeit", "Hypothek", "Grundschuldkosten",
    "Notarkosten", "Grundbuchgebühren", "Auflassung",
  ],
  investment: [
    "Ausschüttung", "Sonderausschüttung", "Ex-Tag", "Dividendenstrategie",
    "Thesaurierung", "Sparplan", "Physische Replikation",
    "Synthetische Replikation", "Tracking Difference", "Smart Beta",
    "Faktorinvestment", "Momentum-Strategie", "Value-Investing",
    "Growth-Investing", "Small Cap", "Mid Cap", "Large Cap",
    "Micro Cap", "Free Float", "Marktkapitalisierung", "Spread",
    "Ordertiefe", "Xetra", "Börsenhandel", "Stop-Loss", "Limit-Order",
    "Market-Order", "Leerverkauf", "Short-Selling", "Wertpapierleihe",
    "Margin", "Margin Call", "Hebel-ETF", "Inverse ETFs",
    "Zertifikate", "Knock-Out", "Turbo", "Optionsschein", "Barrier",
    "Call-Option", "Put-Option", "Strike", "Amerikanische Option",
    "Europäische Option", "Futures", "Rohstoff-Future", "Zins-Future",
    "Währungs-Future", "Swap", "CDS", "Credit Default Swap",
    "NAV", "Nettoinventarwert", "Alpha", "Beta", "Sharpe-Ratio",
    "Sortino-Ratio", "Maximum Drawdown", "Volatilität",
    "Value-at-Risk", "VaR", "Monte-Carlo-Simulation",
    "Discounted-Cash-Flow", "DCF", "WACC", "KGV", "KBV", "KUV",
    "PEG-Ratio", "ROE", "ROA", "EPS", "Free Cashflow",
    "Verschuldungsgrad", "Eigenkapitalrendite", "Gesamtkapitalrendite",
    "Dividendenrendite", "Totalrendite", "IRR", "Interner Zinsfuß",
    "Diversifikation", "Korrelation", "Asset Allocation",
    "Rebalancing", "Gleitender Durchschnitt", "RSI", "MACD",
  ],
  rente: [
    "Rentenprognose", "Deutsche Rentenversicherung", "Beitragsjahre",
    "Rentenpunkte", "Rentenwert", "Altersvorsorge", "Betriebliche Altersvorsorge",
    "Pensionskasse", "Direktversicherung", "Pensionsfonds",
  ],
  wirtschaft: [
    "Basiszinssatz", "Arbeitslosenquote", "Konjunkturzyklus",
    "Aufschwung", "Abschwung", "Output-Lücke", "NAIRU",
    "Phillips-Kurve", "Kreditklemme", "Basel III", "LCR", "NSFR",
    "Systemrisiko", "Makroprudenzielle Aufsicht",
  ],
  steuern: [
    "Steuererklärung", "Anlage KAP", "Freistellungsauftrag",
    "Sparerpauschbetrag", "Quellensteuer", "Doppelbesteuerungsabkommen",
    "Abgeltungssteuer", "Kirchensteuer", "Solidaritätszuschlag",
  ]
};

// Merge EXTRA in CATEGORIES
for (const [cat, list] of Object.entries(EXTRA)) {
  if (list?.length) CATEGORIES[cat as keyof typeof CATEGORIES].push(...list);
}

// Verwandte Begriffe pro Kategorie
const RELATED: Record<string, string[]> = {
  kredit: ["Zinsen", "Effektivzins", "Kreditprüfung", "Darlehensvertrag"],
  zinsen: ["Variabler Zinssatz", "Festzins", "Nominalzins", "Effektivzins"],
  immobilien: ["Baufinanzierung", "Beleihungswert", "Eigenkapital"],
  investment: ["Fonds", "Indexfonds", "Ordergebühr", "Verwaltungsgebühr"],
  rente: ["Betriebsrente", "Riester-Rente", "Risikoprofil"],
  wirtschaft: ["Budget", "Cashflow", "Liquidität"],
  steuern: ["Kapitalertragsteuer", "Spekulationsgewinn", "Einkommensteuererklärung"],
};

// Kurzdefinition
function shortDef(term: string, cat: string): string {
  const t = term.toLowerCase();
  
  // Spezifische Begriffe
  if (t.includes("zins")) return `${term} bezeichnet die Kosten oder Erträge, die in Prozent pro Jahr ausgedrückt werden und den Gesamtbetrag beeinflussen, den Sie zahlen oder erhalten.`;
  if (t.includes("tilgung")) return `${term} bedeutet, dass Sie Ihre Darlehensschuld durch regelmäßige Zahlungen reduzieren, die die ursprüngliche Schuld verringern.`;
  if (t.includes("sicherheit")) return `${term} ist etwas Wertvolles, das als Garantie für ein Darlehen gestellt wird und das Risiko für den Kreditgeber verringert.`;
  if (t.includes("bonitätsprüfung") || t.includes("schufa")) return `${term} ist eine Überprüfung Ihrer finanziellen Historie und Zahlungsfähigkeit, die Kreditgeber nutzen, um das Kreditrisiko einzuschätzen.`;
  if (t.includes("negativmerkmal")) return `${term} ist eine Registrierung, die zeigt, dass Sie Rechnungen nicht rechtzeitig bezahlt haben, was Ihre Kreditwürdigkeit negativ beeinflusst.`;
  
  // Kategoriebasierte Definitionen
  if (cat === "kredit") return `${term} ist eine Finanzierungslösung, die Ihnen Zugang zu Kapital für verschiedene Zwecke bietet. Verschiedene Kreditarten haben unterschiedliche Konditionen und Zinssätze.`;
  if (cat === "zinsen") return `${term} ist ein zinsbezogener Begriff, der die Kosten Ihres Kredits oder die Rendite Ihrer Investition direkt beeinflusst.`;
  if (cat === "immobilien") return `${term} ist ein Begriff aus dem Bereich Immobilienkauf, Eigentum und Immobilienfinanzierung.`;
  if (cat === "investment") return `${term} ist ein Investmentbegriff, der Ihnen helfen kann, Vermögen aufzubauen. Alle Investitionen beinhalten einen Kompromiss zwischen Risiko und potenziellem Ertrag.`;
  if (cat === "rente") return `${term} bezieht sich auf langfristiges Sparen und verschiedene Teile des Rentensystems.`;
  if (cat === "wirtschaft") return `${term} ist eine Kennzahl oder ein Begriff, der wirtschaftliche Aktivität und Marktentwicklung beschreibt.`;
  if (cat === "steuern") return `${term} bezieht sich auf die Besteuerung von Sparen, Investitionen oder Unternehmertum.`;
  return `${term} ist ein wichtiger Finanzbegriff, der Ihre finanzielle Situation auf verschiedene Weise beeinflusst.`;
}

// Langdefinition
function longDef(term: string, cat: string): string[] {
  if (cat === "kredit") return [
    `${term} beeinflusst, wie teuer Ihr Kredit über die Zeit wird und welche Anforderungen die Bank in der Kreditprüfung stellt.`,
    "Verschiedene Kreditarten passen zu verschiedenen Situationen - Ratenkredite für persönliche Bedürfnisse, Autokredite für Fahrzeuge und Baufinanzierungen für Immobilien.",
    "Bevor Sie einen Kredit aufnehmen, sollten Sie Ihre Rückzahlungsfähigkeit sorgfältig prüfen und Angebote mehrerer Kreditgeber vergleichen.",
    "Denken Sie daran, dass ein Kredit eine langfristige finanzielle Verpflichtung ist, die Ihr Budget über viele Jahre beeinflusst."
  ];
  if (cat === "zinsen") return [
    `${term} bestimmt die Kosten des Kredits und hängt sowohl von Marktzinsen als auch von Ihrem Risikoprofil ab.`,
    "Festzinsen bieten Planungssicherheit, da die Kosten über die gesamte Laufzeit gleich bleiben, während variable Zinsen mit den Marktbedingungen schwanken können.",
    "Der Effektivzins ist das wichtigste Maß, da er alle Kosten einschließlich Bearbeitungsgebühren enthält.",
    "Kleine Zinsunterschiede können über die Zeit große Auswirkungen haben - ein Prozentpunkt Unterschied bei einem großen Kredit kann Tausende Euro Ersparnis bedeuten."
  ];
  if (cat === "immobilien") return [
    `${term} ist zentral für den Immobilienkauf und beeinflusst sowohl Finanzierungsmöglichkeiten als auch langfristige Kosten.`,
    "Beim Immobilienkauf kommen Kosten zusätzlich zum Kaufpreis hinzu wie Grunderwerbsteuer, Notarkosten und Maklergebühren.",
    "Der Beleihungswert beeinflusst, welchen Zinssatz Sie erhalten und ob Sie Eigenkapital benötigen.",
    "Denken Sie langfristig beim Immobilienkauf - berücksichtigen Sie zukünftige Instandhaltungskosten und Energiekosten."
  ];
  if (cat === "investment") return [
    `${term} handelt davon, Geld mit dem Ziel anzulegen, über die Zeit Rendite zu erzielen. Alle Investitionen beinhalten Risiko.`,
    "Diversifikation ist der Schlüssel zu erfolgreichem Investieren - verteilen Sie Ihre Investitionen über verschiedene Anlageklassen.",
    "Zeit ist einer der besten Freunde des Investors. Durch langfristiges Investieren können Sie vom Zinseszinseffekt profitieren.",
    "Verstehen Sie Ihre eigene Risikotoleranz, bevor Sie eine Investitionsstrategie wählen."
  ];
  if (cat === "rente") return [
    `${term} ist Teil des deutschen Rentensystems, das Ihre finanzielle Sicherheit im Ruhestand beeinflusst.`,
    "Je früher Sie mit dem Rentenparen beginnen, desto weniger müssen Sie monatlich sparen dank des Zinseszinseffekts.",
    "Verschiedene Rentenformen haben unterschiedliche Steuerregeln - Betriebsrenten sind oft steuer frei bei Einzahlung, werden aber bei Auszahlung besteuert.",
    "Rentenplanung erfordert eine langfristige Strategie, bei der Sie Sicherheit gegen Rendite abwägen."
  ];
  if (cat === "wirtschaft") return [
    `${term} beeinflusst die wirtschaftliche Entwicklung und kann indirekt Ihre persönlichen Finanzen durch Zinsen, Inflation und Arbeitsmarkt beeinflussen.`,
    "Wirtschaftsindikatoren wie BIP, Inflation und Arbeitslosigkeit geben Signale über die Gesundheit der Wirtschaft.",
    "Als Privatperson können Sie wirtschaftliches Verständnis nutzen, um bessere Entscheidungen über große finanzielle Entscheidungen zu treffen.",
    "Wirtschaftszyklen sind natürlich - durch ihr Verständnis können Sie bessere Entscheidungen über Sparen und Investitionen treffen."
  ];
  if (cat === "steuern") return [
    `${term} ist Teil des deutschen Steuersystems, das Ihre persönlichen Finanzen beeinflusst.`,
    "Verschiedene Einkommensarten werden unterschiedlich besteuert - Arbeitseinkommen, Kapitaleinkommen und Renten haben unterschiedliche Steuerregeln.",
    "Steuerplanung bedeutet, Ihre Finanzen so zu strukturieren, dass Sie Steuern innerhalb der geltenden Gesetze minimieren.",
    "Nutzen Sie verfügbare Abzüge und Freibeträge, um Ihre Steuerlast legal zu reduzieren."
  ];
  return [
    `${term} ist ein zentraler Begriff in der Privatfinanzierung, der beeinflusst, wie wir Geld verstehen und verwalten.`,
    "In der Praxis bedeutet das Verständnis finanzieller Begriffe, dass Sie fundiertere Entscheidungen über Ihre Finanzen treffen können.",
    "Verschiedene Aspekte finanzieller Begriffe können langfristige Auswirkungen auf Ihre finanzielle Situation haben.",
  ];
}

// Beispiele
function example(cat: string): string | undefined {
  if (cat === "kredit" || cat === "zinsen")
    return "Beispiel: Wenn Sie 200.000 € für 5 Jahre mit 5,5% Zinsen leihen, beträgt die monatliche Rate etwa 3.817 € und die Gesamtkosten 229.020 €.";
  if (cat === "immobilien")
    return "Beispiel: Bei einem Immobilienkauf für 300.000 € kommen Grunderwerbsteuer (ca. 21.000 €), Notarkosten (ca. 6.000 €) und ggf. Maklerkosten hinzu.";
  if (cat === "investment")
    return "Beispiel: Ein monatlicher Sparplan von 100 € mit 7% jährlicher Rendite wird in 30 Jahren ca. 122.000 € wert sein, davon 86.000 € aus Zinsen.";
  if (cat === "rente")
    return "Beispiel: Entgeltumwandlung von 300 €/Monat zur Betriebsrente spart ca. 90 € Steuern monatlich bei 30% Grenzsteuersatz.";
  if (cat === "wirtschaft")
    return "Beispiel: Wenn die EZB den Leitzins um 0,25% erhöht, wirkt sich dies oft innerhalb weniger Monate auf Hypothekenzinsen aus.";
  if (cat === "steuern")
    return "Beispiel: Auf Kapitalgewinne aus Aktienverkäufen zahlen Sie 25% Abgeltungssteuer plus Solidaritätszuschlag.";
  return undefined;
}

// FAQs erstellen
function buildFaqDefault(term: string, sd: string, ld: string[], ex?: string): GlossaryFAQDE[] {
  const t = term.toLowerCase();
  
  let questions: GlossaryFAQDE[] = [
    { q: `Was ist ${term}?`, a: sd }
  ];
  
  if (t.includes("kredit") || t.includes("darlehen")) {
    questions.push(
      { q: `Wie beantrage ich ${term}?`, a: `${ld[0]} ${ex || ""}`.trim() },
      { q: `Was kostet ${term}?`, a: ld[1] || "Die Kosten variieren je nach Ihrer finanziellen Situation und den Marktbedingungen." },
      { q: `Welche Anforderungen gibt es für ${term}?`, a: ld[2] || "Die Anforderungen umfassen in der Regel ein stabiles Einkommen, gute Bonität und angemessene Verschuldung." }
    );
  } else if (t.includes("zins")) {
    questions.push(
      { q: `Wie wird ${term} berechnet?`, a: `${ld[0]} ${ex || ""}`.trim() },
      { q: `Was beeinflusst ${term}?`, a: ld[1] || "Der Zinssatz wird von EZB-Leitzins, Inflation, Kreditrisiko und Marktwettbewerb beeinflusst." },
      { q: `Soll ich Fest- oder variable ${term} wählen?`, a: ld[2] || "Die Wahl hängt von Ihrer Risikotoleranz und den Marktaussichten ab." }
    );
  } else {
    questions.push(
      { q: `Wie funktioniert ${term} in der Praxis?`, a: `${ld[0]} ${ex || ""}`.trim() },
      { q: `Worauf sollte ich bei ${term} achten?`, a: ld[1] || "Es ist wichtig, alle Aspekte zu verstehen, bevor Sie finanzielle Entscheidungen treffen." },
      { q: `Wie beeinflusst ${term} meine Finanzen?`, a: ld[2] || `${term} kann sowohl kurz- als auch langfristige Auswirkungen auf Ihre finanzielle Situation haben.` }
    );
  }
  
  return questions.slice(0, 4);
}

// Alle Begriffe sammeln
const ALL_PAIRS: Array<{ term: string; cat: string }> = [];
for (const [cat, terms] of Object.entries(CATEGORIES)) {
  for (const t of terms) ALL_PAIRS.push({ term: t, cat });
}

const UNIQUE = Array.from(
  new Map(ALL_PAIRS.map(p => [p.term, p])).values()
).sort((a, b) => slugify(a.term).localeCompare(slugify(b.term)));

// Glossar erstellen
export const glossaryDE: GlossaryTermDE[] = UNIQUE.map(({ term, cat }) => {
  const sd = shortDef(term, cat);
  const ld = longDef(term, cat);
  const ex = example(cat);
  const rel = (RELATED[cat] || []).slice(0, 5);
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

// Alphabetisch gruppieren
export function getGlossaryByLetter(): Array<{ letter: string; terms: GlossaryTermDE[] }> {
  const groups = new Map<string, GlossaryTermDE[]>();
  
  for (const term of glossaryDE) {
    const firstLetter = term.term[0].toUpperCase();
    if (!groups.has(firstLetter)) {
      groups.set(firstLetter, []);
    }
    groups.get(firstLetter)!.push(term);
  }
  
  return Array.from(groups.entries())
    .map(([letter, terms]) => ({ letter, terms }))
    .sort((a, b) => a.letter.localeCompare(b.letter));
}

// Begriff nach Slug finden
export function getTermBySlug(slug: string): GlossaryTermDE | undefined {
  return glossaryDE.find(t => t.slug === slug);
}
