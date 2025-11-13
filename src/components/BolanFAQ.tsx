import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const bolanFaqData = [
  {
    question: "Vad är ett bolån?",
    answer: "Ett bolån är ett lån där din bostad fungerar som säkerhet. Du kan låna upp till 85% av bostadens värde enligt lag, vilket innebär att du behöver minst 15% i kontantinsats. Bolån har generellt lägre ränta än privatlån eftersom banken har säkerhet i fastigheten."
  },
  {
    question: "Hur mycket kan jag låna i bolån?",
    answer: "Du kan låna upp till 85% av bostadens värde. Din lånekapacitet beror på din inkomst, befintliga skulder och övrig ekonomi. En tumregel är att månatliga boendekostnader (ränta + amortering + avgift) inte bör överstiga 30-35% av din bruttoinkomst. Använd vår kalkylator för att beräkna hur mycket du kan låna."
  },
  {
    question: "Vad är skillnaden mellan nominell och effektiv ränta?",
    answer: "Nominell ränta är den rena låneräntan utan avgifter, som används för att beräkna månatliga räntekostnader. Effektiv ränta inkluderar nominell ränta plus alla avgifter (uppläggningsavgift, aviavgift etc.) och ger den verkliga årskostnaden för lånet i procent. När du jämför banker, titta på både nominell ränta (för månadskostnad) och effektiv ränta (för totalkostnad)."
  },
  {
    question: "Vad är kontantinsats och hur mycket behöver jag?",
    answer: "Kontantinsats är den del av köpeskillingen som du måste betala med egna pengar. Enligt lag måste kontantinsatsen vara minst 15% av bostadens värde. I praktiken vill många banker ofta se 20-25% kontantinsats för att ge bättre ränta. Kontantinsatsen kan komma från sparande, arv, gåva eller försäljning av tidigare bostad."
  },
  {
    question: "Vad är belåningsgrad?",
    answer: "Belåningsgrad är hur stor andel av bostadens värde som är belånad, räknat som lånebelopp delat med bostadens marknadsvärde. Belåningsgraden påverkar både räntan (högre belåningsgrad = högre ränta) och amorteringskraven. Vid 85% belåningsgrad eller högre kan du även behöva amorteringsutrymme."
  },
  {
    question: "Vad är amorteringskrav?",
    answer: "Amorteringskrav infördes 2016 och innebär: Vid 70-85% belåningsgrad måste du amortera minst 2% per år av det ursprungliga lånebeloppet. Vid 50-70% belåningsgrad måste du amortera minst 1% per år. Under 50% belåningsgrad finns inget tvingande amorteringskrav, men många banker rekommenderar ändå amortering."
  },
  {
    question: "Ska jag välja rörlig eller bunden ränta?",
    answer: "Det finns inget rätt svar - det beror på din risktolerans och marknadssyn. Rörlig ränta är ofta lägst men kan höjas när som helst. Bunden ränta ger trygghet men kostar mer. Många väljer en kombination: 50% rörlig för lägre kostnad, 30% bundet 2-3 år för medellång trygghet, 20% bundet 5 år för långsiktig säkerhet. Detta ger balans mellan kostnad och trygghet."
  },
  {
    question: "Vad är ett lånelöfte?",
    answer: "Ett lånelöfte är ett preliminärt besked från banken om hur mycket du kan låna för bostadsköp. Det behövs ofta för att kunna delta i budgivning och visar säljaren att du har ekonomisk kapacitet. Lånelöftet är giltigt i 2-3 månader och innebär ingen bindande skyldighet att ta lånet. Ansökan påverkar din UC-registrering."
  },
  {
    question: "Hur påverkar UC-kontroll min kreditvärdighet?",
    answer: "Varje bolåneansökan registreras som en kreditförfrågan i UC. Många ansökningar inom kort tid kan sänka din kreditvärdighet tillfälligt. Därför är det smart att använda en bolåneförmedlare som Ordna Bolån - då görs endast EN UC-kontroll som delas mellan alla banker i nätverket, vilket skyddar din kreditvärdighet samtidigt som du får jämföra flera erbjudanden."
  },
  {
    question: "Kan jag flytta mitt bolån till annan bank?",
    answer: "Ja, du kan alltid flytta ditt bolån till en annan bank som erbjuder bättre villkor. Detta kallas för att 'byta bank'. Den nya banken betalar av din gamla skuld och du får ett nytt lån hos dem. Det kan kosta en avgift på 0-5000 kr beroende på bank, men kan vara värt det om du får mycket lägre ränta. Jämför alltid totalkostnaden."
  },
  {
    question: "Vad kostar det att ta bolån?",
    answer: "Kostnader för bolån inkluderar: Ränta (från 0,84% nominellt), uppläggningsavgift (0-5000 kr engångsavgift), aviavgift (0-50 kr/månad), eventuell värdering av bostaden (2000-5000 kr), och pantbrevsavgift vid nyköp. Den totala kostnaden varierar mellan banker - jämför alltid effektiv årsränta för att se den verkliga kostnaden."
  },
  {
    question: "Hur lång tid tar det att få bolån?",
    answer: "Från ansökan till godkänt bolån tar vanligtvis 1-2 veckor beroende på bank och hur komplett din ansökan är. Ett lånelöfte kan du få snabbare, ofta inom några dagar. För snabbast hantering: ha alla dokument klara (lönespecar, kontoutdrag, deklaration), använd en bolåneförmedlare, och ansök i god tid innan du ska lägga bud."
  },
  {
    question: "Vilka dokument behöver jag för bolåneansökan?",
    answer: "Vanliga dokument inkluderar: Giltig ID-handling, lönespecifikationer från senaste 2-3 månaderna, kontoutdrag som visar inkomster och sparande, anställningsbevis, deklarationer från senaste 1-2 åren, och för egenföretagare även bokslut och företagsregistreringsbevis. Många banker kan hämta information digitalt via BankID."
  },
  {
    question: "Kan jag ansöka om bolån online?",
    answer: "Ja, alla större banker och bolåneförmedlare erbjuder digital ansökan. Processen tar vanligtvis 20-40 minuter. Du behöver BankID för att identifiera dig och signera. Många banker kan även hämta information om din ekonomi automatiskt, vilket påskyndar processen. Via Ordna Bolån kan du ansöka digitalt och få erbjudanden från flera banker samtidigt."
  },
  {
    question: "Vad händer om jag inte kan betala bolånet?",
    answer: "Kontakta omedelbart din bank om du får betalningssvårigheter. Banken kan erbjuda lösningar som tillfälligt anstånd, sänkt amortering eller förlängd återbetalningstid. Om du fortsätter att inte betala kan banken säga upp lånet och i värsta fall tvångsförsälja din bostad. Många banker erbjuder även betalningsskydd/låneförsäkring som kan hjälpa vid arbetslöshet eller sjukdom."
  },
  {
    question: "Vad är ett blancolån och skiljer det sig från bolån?",
    answer: "Ett blancolån (även kallat privatlån) är ett lån utan säkerhet. Till skillnad från bolån där bostaden är säkerhet, baseras blancolån endast på din kreditvärdighet. Blancolån har därför högre ränta (5-20%) jämfört med bolån (0,84-3%). Blancolån används ofta för den sista delen av kontantinsatsen, men tänk på att banken räknar med denna skuld när de bedömer din bolånekapacitet."
  },
  {
    question: "Kan jag amortera extra eller lösa lånet i förtid?",
    answer: "Ja, du kan alltid göra extra amorteringar eller lösa hela lånet i förtid. Banken kan ta ut en avgift för detta, ofta 1-2% av återstående skuld eller motsvarande återstående ränta under bindningstiden. För lån med rörlig ränta är det ofta ingen eller låg avgift. Extra amortering kan vara smart om du får lägre belåningsgrad och därmed bättre ränta."
  },
  {
    question: "Vad är en bolåneförmedlare och varför ska jag använda en?",
    answer: "En bolåneförmedlare som Ordna Bolån hjälper dig att jämföra bolån från flera banker samtidigt. Fördelarna är: endast EN UC-kontroll (skyddar din kreditvärdighet), automatisk jämförelse av alla erbjudanden, personlig rådgivning från licensierade bolånehandläggare, snabbare process, och kostnadsfritt för dig (banken betalar provision). Du får helt enkelt bättre översikt och kan välja det bästa erbjudandet."
  }
];

export default function BolanFAQ() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Vanliga frågor om bolån</CardTitle>
          <CardDescription className="text-center">
            Här hittar du svar på de mest frekventa frågorna om bolån i Sverige
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="space-y-2">
            {bolanFaqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
