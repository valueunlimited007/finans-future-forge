export interface GlossaryTerm {
  term: string;
  slug: string;
  shortDefinition: string;
  longDefinition: string[];
  example?: string;
  relatedTerms?: string[];
  sources?: { title: string; url: string }[];
  lastUpdated: string;
}

export const glossary: GlossaryTerm[] = [
{
  term: `Aktie`,
  slug: `aktie`,
  shortDefinition: `Aktie är ett investeringsbegrepp som påverkar risk, avgifter eller avkastning.`,
  longDefinition: [`Aktie påverkar hur dina pengar växer och vilken risk du tar på kapitalmarknaden.`, `Avgifter, skatter och tidshorisont är centrala faktorer bakom nettoavkastningen.`, `Sprid risken och följ en tydlig strategi för att undvika onödiga tapp vid volatilitet.`],
  example: `Ex: Ett månadssparande på 1 000 kr som växer 7% per år kan bli ~1,2 miljoner på 40 år med ränta-på-ränta.`,
  relatedTerms: [`Aktie`, `Courtage`, `Fond`, `Förvaltningsavgift`, `Indexfond`],
  sources: [{ title: `Konsumentverket`, url: `https://www.konsumentverket.se/` }, { title: `Finansinspektionen`, url: `https://www.fi.se/` }, { title: `Skatteverket`, url: `https://www.skatteverket.se/` }],
  lastUpdated: `2025-08-12`,
},
{
  term: `Aktiv fond`,
  slug: `aktiv-fond`,
  shortDefinition: `Aktiv fond är ett investeringsbegrepp som påverkar risk, avgifter eller avkastning.`,
  longDefinition: [`Aktiv fond påverkar hur dina pengar växer och vilken risk du tar på kapitalmarknaden.`, `Avgifter, skatter och tidshorisont är centrala faktorer bakom nettoavkastningen.`, `Sprid risken och följ en tydlig strategi för att undvika onödiga tapp vid volatilitet.`],
  example: `Ex: Ett månadssparande på 1 000 kr som växer 7% per år kan bli ~1,2 miljoner på 40 år med ränta-på-ränta.`,
  relatedTerms: [`Aktiv fond`, `Courtage`, `Fond`, `Förvaltningsavgift`, `Indexfond`],
  sources: [{ title: `Konsumentverket`, url: `https://www.konsumentverket.se/` }, { title: `Finansinspektionen`, url: `https://www.fi.se/` }, { title: `Skatteverket`, url: `https://www.skatteverket.se/` }],
  lastUpdated: `2025-08-12`,
},
{
  term: `Amortering`,
  slug: `amortering`,
  shortDefinition: `Avbetalning på lånets skuld. Minskar skulden vid varje betalning.`,
  longDefinition: [`Amortering är den del av din månadsbetalning som sänker kvarvarande skuld. Ränta tillkommer ovanpå amorteringen.`, `Vanliga modeller är rak amortering (samma amorteringsbelopp) och annuitet (samma totalbetalning där ränta/amortering skiftar).`, `Högre amortering minskar räntekostnader över tid men höjer din månadsutgift nu.`],
  example: `Ex: Lån 1 000 000 kr med rak amortering 2 500 kr/mån innebär att skulden minskar 2 500 kr varje månad utöver räntan.`,
  relatedTerms: [`Annuitetslån`, `Rak amortering`, `Amorteringskrav`, `Ränta`, `Effektiv ränta`],
  sources: [{ title: `Konsumentverket`, url: `https://www.konsumentverket.se/` }, { title: `Finansinspektionen`, url: `https://www.fi.se/` }, { title: `Skatteverket`, url: `https://www.skatteverket.se/` }],
  lastUpdated: `2025-08-12`,
},
// ... (resten av termerna följer här, oförändrade)
];

export default glossary;