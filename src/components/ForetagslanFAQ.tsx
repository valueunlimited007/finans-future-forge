import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const foretagslanFaqData = [
  {
    question: "Vad är ett företagslån?",
    answer: "Ett företagslån är en kredit som ges till företag för att finansiera verksamheten. Det kan användas för investeringar, kassaflöde, expansion eller andra företagsbehov. Lånet kan vara säkrat (med pant) eller osäkrat beroende på företagets situation och lånebelopp."
  },
  {
    question: "Vilka krav ställs för att få företagslån?",
    answer: "Vanliga krav inkluderar: registrerat företag (minst 6-12 månader), god företagsekonomi, personlig borgen från VD/ägare, årsomsättning på minst 500 000-1 miljon kr, god kreditvärdighet och ofta säkerheter för större lån."
  },
  {
    question: "Hur mycket kan mitt företag låna?",
    answer: "Lånebelopp varierar kraftigt beroende på företagets omsättning, resultat och säkerheter. Mindre företag kan låna 100 000-2 miljoner kr, medan större företag kan få lån upp till 50 miljoner kr eller mer. En tumregel är att lånet inte bör överstiga 3-4 gånger årsomsättningen."
  },
  {
    question: "Vilka säkerheter krävs för företagslån?",
    answer: "För mindre lån (under 500 000 kr) räcker ofta personlig borgen. Större lån kan kräva företagshypoteker, inventariepant, fordringar som säkerhet eller privata säkerheter som fastigheter. Vissa digitalbanker erbjuder osäkrade lån upp till 1-2 miljoner kr."
  },
  {
    question: "Vad kostar ett företagslån?",
    answer: "Räntor varierar mellan 4-15% beroende på risk, säkerheter och lånebelopp. Därtill kommer uppläggningsavgifter (5 000-50 000 kr), årliga avgifter och eventuella pantbrevskostnader. Totalkostnaden beror på företagets kreditvärdighet och lånets struktur."
  },
  {
    question: "Kan nya företag få företagslån?",
    answer: "Ja, men det är svårare. Nya företag (under 2 år) måste ofta visa stark affärsplan, erfarna ägare, tillräckligt eget kapital och acceptera högre räntor. Alternativ kan vara mikrofinansiering, Almi-lån eller investerare."
  },
  {
    question: "Vad är skillnaden mellan företagslån och factoring?",
    answer: "Företagslån ger kontanter direkt mot fast ränta och återbetalning. Factoring innebär att du säljer dina fakturor till ett factoringbolag som betalar ut 80-90% direkt och resten när kunden betalar, minus en avgift på 1-3%."
  },
  {
    question: "Kan företag med betalningsanmärkningar få lån?",
    answer: "Det är mycket svårt att få företagslån med aktiva betalningsanmärkningar från traditionella banker. Alternativ kan vara specialiserade finansiärer, factoring, leasing eller att vänta tills anmärkningarna försvinner (3-5 år)."
  },
  {
    question: "Vad är Almi och hur skiljer sig deras lån?",
    answer: "Almi är statens finansieringsbolag som hjälper små och medelstora företag. De erbjuder lån på 100 000-25 miljoner kr med konkurrenskraftiga räntor och kan acceptera högre risk än banker. De fokuserar på tillväxt, innovation och regional utveckling."
  },
  {
    question: "Hur lång tid tar det att få företagslån?",
    answer: "Handläggningstiden varierar: digitalbanker kan ge beslut inom 24-48 timmar för mindre lån, medan traditionella banker ofta tar 2-8 veckor. Komplexa lån med säkerheter kan ta 1-3 månader. Förbered alla dokument för att påskynda processen."
  },
  {
    question: "Vilka dokument krävs för företagslånansökan?",
    answer: "Vanliga dokument inkluderar: årsbokslut för senaste 2-3 åren, senaste månadsrapporter, kassaflödesprognoser, affärsplan, personbevis på VD/ägare, företagsregistreringsbevis och eventuella säkerhetsdokument."
  },
  {
    question: "Vad händer om företaget inte kan betala tillbaka?",
    answer: "Vid betalningsproblem kontakta banken omedelbart för att diskutera lösningar som amorteringsfrihet eller omförhandling. Om betalningar uteblir kan banken kräva säkerheter, säga upp lånet och driva in skulden genom inkasso eller konkurs."
  },
  {
    question: "Kan utländska företag få lån i Sverige?",
    answer: "Ja, men med striktare krav. Företaget behöver svensk verksamhet, F-skattsedel, svensk bank-/postgiroansökningar och ofta svenska garantier. EU-företag har lättare än icke-EU-företag att få lån."
  },
  {
    question: "Vad är revolverande kredit för företag?",
    answer: "En revolverande kredit fungerar som ett företagskreditkort - du får en kreditlimit (t.ex. 500 000 kr) som du kan använda och betala tillbaka flexibelt. Du betalar bara ränta på det belopp du använder, inte hela limiten."
  },
  {
    question: "Kan enskild firma få företagslån?",
    answer: "Ja, enskild firma kan få företagslån, men kraven är ofta striktare än för aktiebolag. Ägaren har personligt betalningsansvar, vilket påverkar både risk och villkor. Många banker behandlar enskild firma som privatlån med företagssyfte."
  },
  {
    question: "Vilka är de vanligaste felen vid lånansökan?",
    answer: "Vanliga fel inkluderar: bristfällig dokumentation, orealistiska prognoser, för höga lånebelopp i förhållande till omsättning, dålig timing (ansök inte under lågsäsong), och att inte förbereda svar på bankens frågor om affärsmodell och risker."
  },
  {
    question: "Kan företag refinansiera befintliga lån?",
    answer: "Ja, refinansiering är vanligt för att få bättre villkor, samla flera lån eller frigöra likviditet. Bästa tiden är när företaget har förbättrat sin ekonomi eller när marknadsräntorna sjunkit. Jämför alltid totalkostnaden inklusive avgifter."
  },
  {
    question: "Vad är mezzaninfinansiering?",
    answer: "Mezzaninfinansiering är en hybrid mellan lån och eget kapital med högre ränta (8-15%) men också möjlighet till ägarandel. Det används ofta vid större investeringar eller uppköp när traditionell bankfinansiering inte räcker."
  }
];

export default function ForetagslanFAQ() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Vanliga frågor om företagslån</CardTitle>
          <CardDescription className="text-center">
            Här hittar du svar på de mest frekventa frågorna om företagsfinansiering i Sverige
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="space-y-2">
            {foretagslanFaqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
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