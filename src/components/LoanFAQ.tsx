import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
  {
    question: "Vad betyder lån utan UC-kontroll?",
    answer: "Ett lån utan UC-kontroll innebär att långivaren inte gör en traditionell kreditupplysning hos UC (Upplysningscentralen) innan lånet beviljas. Istället bedömer de din kreditvärdighet genom andra metoder som inkomstverifiering, bankutdrag eller andra databaser."
  },
  {
    question: "Kan jag få lån utan UC även med betalningsanmärkningar?",
    answer: "Ja, många långivare som erbjuder lån utan UC accepterar ansökningar från personer med betalningsanmärkningar. Dock är det viktigt att notera att räntan oftast blir högre och lånebeloppet lägre jämfört med traditionella lån."
  },
  {
    question: "Vilka är riskerna med lån utan UC-kontroll?",
    answer: "De främsta riskerna inkluderar högre räntor (ofta 15-35% effektiv ränta), kortare återbetalningstid, risk för överbelåning, och att du kan hamna i en skuldskuldfälla om du inte kan betala tillbaka i tid. Vissa aktörer kan också ha mindre transparenta villkor."
  },
  {
    question: "Hur snabbt kan jag få pengarna utbetalda?",
    answer: "Många långivare som erbjuder lån utan UC kan betala ut pengarna mycket snabbt - ofta inom 15-30 minuter efter godkänt beslut. Vissa kan ta upp till 24 timmar beroende på vilken tid på dagen du ansöker och vilken bank du har."
  },
  {
    question: "Vilka krav ställs för att få lån utan UC?",
    answer: "Vanliga krav inkluderar: minst 18-20 års ålder, regelbunden inkomst (ofta minst 8 000-15 000 kr/månad), svenskt personnummer, svensk bankkonto, och att du inte har aktiva skulder hos Kronofogden. Vissa långivare har även krav på fast anställning."
  },
  {
    question: "Påverkar ansökan min kreditvärdighet?",
    answer: "En ansökan om lån utan UC påverkar vanligtvis inte din UC-rating eftersom ingen traditionell kreditupplysning görs. Dock kan vissa långivare göra en 'mjuk' kontroll som inte syns för andra långivare, och om lånet beviljas kan det registreras i efterhand."
  },
  {
    question: "Kan jag betala tillbaka lånet i förtid?",
    answer: "Ja, de flesta långivare tillåter förtida återbetalning. Vissa tar ut en avgift för detta (vanligtvis 1-2% av återstående skuld), medan andra låter dig betala tillbaka utan extra kostnad. Kontrollera alltid villkoren innan du tecknar lånet."
  },
  {
    question: "Vad händer om jag inte kan betala tillbaka?",
    answer: "Om du missar betalningar kommer långivaren först att kontakta dig för att hitta en lösning. Om du fortsatt inte kan betala kan skulden skickas till inkasso, och i värsta fall till Kronofogden. Detta kommer att påverka din framtida möjlighet att få krediter negativt."
  },
  {
    question: "Finns det alternativ till lån utan UC?",
    answer: "Ja, alternativ inkluderar: ansöka om traditionellt banklån (om din UC-rating förbättrats), be om hjälp från familj/vänner, sälja tillhörigheter, söka ekonomisk rådgivning från kommunen, eller vänta tills din ekonomiska situation förbättrats."
  },
  {
    question: "Hur vet jag om en långivare är seriös?",
    answer: "Kontrollera att långivaren har tillstånd från Finansinspektionen, läs villkoren noga, jämför med andra aktörer, undvik långivare som ringer och pressar dig, och var försiktig med långivare som lovar lån utan någon kreditprövning alls."
  },
  {
    question: "Kan jag få lån utan UC om jag är arbetslös?",
    answer: "Det är mycket svårt att få lån utan UC om du är arbetslös. De flesta långivare kräver regelbunden inkomst. Har du a-kassa, sjukpenning eller pension kan vissa långivare acceptera detta som inkomst, men möjligheterna är begränsade."
  },
  {
    question: "Vilka dokument behöver jag för ansökan?",
    answer: "Vanliga dokument inkluderar: giltig ID-handling, senaste lönespecifikationen eller inkomstbesked, bankutdrag från senaste 3 månaderna, och ibland anställningsbevis. Vissa långivare kan begära ytterligare dokumentation beroende på din situation."
  },
  {
    question: "Kan jag ansöka om flera lån utan UC samtidigt?",
    answer: "Tekniskt sett kan du ansöka hos flera långivare, men det rekommenderas inte. För det första ökar risken för överbelåning, för det andra kan det påverka din ansökan negativt om långivaren ser att du ansökt på flera ställen samtidigt."
  },
  {
    question: "Vad är skillnaden mellan SMS-lån och lån utan UC?",
    answer: "SMS-lån är en typ av lån utan UC som vanligtvis är mindre belopp (1 000-15 000 kr) med mycket kort återbetalningstid (14-30 dagar). Lån utan UC kan vara större belopp med längre återbetalningstid, men båda har ofta höga räntor."
  },
  {
    question: "Är lån utan UC lagligt reglerade?",
    answer: "Ja, alla långivare i Sverige måste följa konsumentkreditlagen och ha tillstånd från Finansinspektionen. Det finns regler för marknadsföring, räntetak, återbetalningsförmåga och konsumentskydd, även för lån utan UC."
  },
  {
    question: "Kan jag få större lån utan UC-kontroll?",
    answer: "Lån utan UC är vanligtvis begränsade till mindre belopp (upp till 50 000-100 000 kr). För större lån (över 100 000 kr) kräver nästan alla seriösa långivare UC-kontroll enligt lag för att säkerställa att du kan betala tillbaka."
  },
  {
    question: "Vad kostar ett lån utan UC totalt?",
    answer: "Totalkostnaden varierar mycket beroende på lånebelopp, återbetalningstid och ränta. Ett lån på 10 000 kr med 25% ränta över 12 månader kostar totalt cirka 13 500 kr. Använd alltid effektiv ränta för att jämföra olika lån."
  },
  {
    question: "Kan jag förlänga återbetalningstiden?",
    answer: "Många långivare erbjuder möjlighet att förlänga lånet mot en avgift, men detta ökar den totala kostnaden avsevärt. Det är nästan alltid bättre att betala tillbaka så snabbt som möjligt för att minimera räntekostnaderna."
  }
];

export default function LoanFAQ() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Vanliga frågor om lån utan UC</CardTitle>
          <CardDescription className="text-center">
            Här hittar du svar på de mest frekventa frågorna om lån utan UC-kontroll
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="space-y-2">
            {faqData.map((faq, index) => (
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