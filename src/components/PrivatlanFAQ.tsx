import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const privatlanFaqData = [
  {
    question: "Vad är ett privatlån?",
    answer: "Ett privatlån är en kredit utan säkerhet som du kan använda för egna ändamål. Lånet baseras på din kreditvärdighet och återbetalningsförmåga, inte på säkerheter som hus eller bil. Du betalar tillbaka lånet med fasta månatliga betalningar över en förutbestämd period, vanligtvis 1-15 år."
  },
  {
    question: "Vilka krav ställs för att få privatlån?",
    answer: "Vanliga krav inkluderar: minst 18 års ålder, svensk personnummer, fast inkomst (ofta minst 10 000-15 000 kr/månad), god kreditvärdighet enligt UC, inga aktiva skulder hos Kronofogden, och fast anställning eller stabil inkomst. Specifika krav varierar mellan olika banker."
  },
  {
    question: "Hur mycket kan jag låna?",
    answer: "Lånebelopp varierar mellan bankerna, vanligtvis från 10 000 kr upp till 700 000 kr. Hur mycket du kan låna beror på din inkomst, andra skulder, kreditvärdighet och återbetalningsförmåga. En tumregel är att totala månatliga skulder inte bör överstiga 85% av din nettoinkomst."
  },
  {
    question: "Vad kostar ett privatlån?",
    answer: "Kostnaden består av ränta (för närvarande 4,75-19,95% effektiv årsränta), uppläggningsavgift (0-3000 kr), eventuell aviavgift (0-50 kr/månad) och förseningsränta vid sena betalningar. Den totala kostnaden varierar kraftigt beroende på ränta och återbetalningstid."
  },
  {
    question: "Hur lång återbetalningstid kan jag få?",
    answer: "Återbetalningstiden är vanligtvis 1-15 år beroende på bank och lånebelopp. Kortare återbetalningstid ger högre månatliga betalningar men lägre totalkostnad. Längre återbetalningstid ger lägre månatliga betalningar men högre totalkostnad på grund av mer ränta."
  },
  {
    question: "Kan jag få privatlån med betalningsanmärkningar?",
    answer: "Det är mycket svårt att få privatlån från traditionella banker med aktiva betalningsanmärkningar. Vissa digitala långivare kan överväga ansökningar med äldre, mindre anmärkningar, men då till högre räntor. Alternativt kan du behöva vänta tills anmärkningarna är bortplockade (3-5 år)."
  },
  {
    question: "Vad är skillnaden mellan fast och rörlig ränta?",
    answer: "Fast ränta förblir oförändrad under hela låneperioden, vilket ger förutsägbara månatliga betalningar. Rörlig ränta kan ändras baserat på marknadsräntor, vilket kan göra lånet billigare eller dyrare över tid. De flesta privatlån i Sverige har fast ränta."
  },
  {
    question: "Kan jag betala tillbaka lånet i förtid?",
    answer: "Ja, alla privatlån i Sverige kan betalas tillbaka i förtid. Banker kan ta ut en avgift för förtida återbetalning, vanligtvis 1-2% av återstående skuld eller minst 500-2000 kr. Vissa banker erbjuder kostnadsfri förtida återbetalning efter en viss tid."
  },
  {
    question: "Hur påverkar privatlån min kreditvärdighet?",
    answer: "Ansökan registreras som en kreditförfrågan och kan tillfälligt sänka din UC-poäng. Ett godkänt lån registreras som en skuld. Om du betalar i tid kan detta förbättra din kredithistorik på lång sikt. Missade betalningar påverkar kreditvärdigheten negativt och kan leda till betalningsanmärkningar."
  },
  {
    question: "Vilken bank har bäst villkor för privatlån?",
    answer: "Det beror på din situation. Storbanker som Nordea och SEB har ofta lägst räntor (4,75-12,95%) men striktare krav. Digitalbanker som Marginalen och Northmill har snabbare handläggning men något högre räntor. Jämför alltid effektiv årsränta och totalkostnad, inte bara nominell ränta."
  },
  {
    question: "Hur lång tid tar det att få besked?",
    answer: "Handläggningstiden varierar kraftigt mellan banker. Digitalbanker kan ge besked inom 15 minuter till 24 timmar, medan traditionella storbanker ofta tar 1-5 dagar. Utbetalning sker vanligtvis 1-3 dagar efter godkänt beslut, beroende på bankdagar."
  },
  {
    question: "Vilka dokument behöver jag för ansökan?",
    answer: "Vanliga dokument inkluderar: giltig ID-handling, inkomstbesked eller lönespecar från senaste 2-3 månaderna, kontoutdrag, anställningsbevis, och ibland deklaration. Digitalbanker kan ofta hämta information elektroniskt, medan traditionella banker kan kräva fysiska dokument."
  },
  {
    question: "Kan jag ansöka om privatlån online?",
    answer: "Ja, nästan alla svenska banker erbjuder onlineansökan för privatlån. Processen tar vanligtvis 10-30 minuter. Du behöver BankID för att identifiera dig och signera avtalet digitalt. Vissa banker erbjuder även mobilappar för ansökan."
  },
  {
    question: "Vad händer om jag inte kan betala tillbaka?",
    answer: "Vid betalningsproblem bör du kontakta banken omedelbart för att diskutera lösningar som anstånd eller avbetalningsplan. Om betalningar fortsatt uteblir kan banken överlämna skulden till inkasso, vilket leder till betalningsanmärkning och eventuellt Kronofogden."
  },
  {
    question: "Kan jag ha flera privatlån samtidigt?",
    answer: "Ja, det är möjligt att ha flera privatlån, men varje ny ansökan påverkar din kreditvärdighet och skuldsättningsgrad. Banker bedömer din totala ekonomiska situation, och flera lån kan göra det svårare att få godkänt för nya krediter. Överväg att samla lån istället."
  },
  {
    question: "Är privatlån avdragsgilla?",
    answer: "Nej, räntan på privatlån är inte avdragsgill för privatpersoner i Sverige eftersom lånet inte är kopplat till inkomstgenererande verksamhet eller bostadsinvestering. Endast räntor på bolån och investeringslån kan vara avdragsgilla under vissa förutsättningar."
  },
  {
    question: "Vad är en kreditgivare och vad är en kreditförmedlare?",
    answer: "En kreditgivare (som SEB, Nordea) lånar ut egna pengar och står för risken. En kreditförmedlare (som Lendo) hjälper dig att hitta lån från olika banker mot provision. Förmedlare kan ge dig tillgång till flera banker samtidigt, men läs alltid villkoren noga."
  },
  {
    question: "Kan jag förhandla om räntan?",
    answer: "Ja, särskilt om du är befintlig kund med god kredithistorik eller höga inkomster. Storbanker har ofta mer förhandlingsutrymme än digitalbanker. Det kan också hjälpa att visa konkurrenterbjudanden eller hota att byta bank. Testa alltid att förhandla innan du accepterar ett erbjudande."
  }
];

export default function PrivatlanFAQ() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Vanliga frågor om privatlån</CardTitle>
          <CardDescription className="text-center">
            Här hittar du svar på de mest frekventa frågorna om privatlån i Sverige
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="space-y-2">
            {privatlanFaqData.map((faq, index) => (
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