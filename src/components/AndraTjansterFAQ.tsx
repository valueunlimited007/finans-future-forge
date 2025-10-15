import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const andraTjansterFaqData = [
  {
    question: "Vad är valutaväxling och hur fungerar det?",
    answer: "Valutaväxling innebär att du byter en valuta mot en annan, till exempel svenska kronor mot euro eller dollar. Växelkursen avgör hur mycket du får för dina pengar. ChangeGroup erbjuder konkurrenskraftiga växelkurser både online och i fysiska butiker."
  },
  {
    question: "Vad är FastRäntekonto från SaveLend?",
    answer: "FastRäntekonto är en sparform där du lånar ut pengar till företag via SaveLend mot en fast ränta på 5,5% per år. Ditt kapital är skyddat genom kapitalskydd från Bricknode, vilket innebär att du får tillbaka ditt insatta belopp även om låntagaren inte kan betala."
  },
  {
    question: "Är mitt kapital säkert hos SaveLend?",
    answer: "Ja, SaveLend erbjuder kapitalskydd via Bricknode som täcker 100% av ditt insatta kapital. SaveLend är även reglerat av ESMA (European Securities and Markets Authority) vilket ger ytterligare trygghet. Din ränta är dock inte skyddad, endast kapitalet."
  },
  {
    question: "Vilka avgifter tillkommer vid valutaväxling?",
    answer: "Avgifterna varierar beroende på tjänst och valuta. ChangeGroup tar ofta ut en provision eller har en marginal inkluderad i växelkursen. Jämför alltid den totala kostnaden inklusive alla avgifter innan du växlar. Onlinetjänster har ofta lägre avgifter än fysiska kontor."
  },
  {
    question: "Hur lång bindningstid har FastRäntekonto?",
    answer: "SaveLends FastRäntekonto har en bindningstid på 6-12 månader beroende på vilket alternativ du väljer. Du kan inte ta ut pengarna under bindningstiden utan att förlora räntan. Efter bindningstiden kan du antingen ta ut pengarna eller förnya ditt konto."
  },
  {
    question: "Kan jag växla valuta online?",
    answer: "Ja, ChangeGroup och många andra valutaväxlare erbjuder onlinetjänster där du kan beställa valuta som levereras hem till dig eller som du hämtar i butik. Onlineväxling ger ofta bättre kurser än växling i butik och du kan jämföra priser i lugn och ro."
  },
  {
    question: "Vad är skillnaden mellan sparkonto och FastRäntekonto?",
    answer: "Ett vanligt sparkonto hos bank ger för närvarande runt 0,5-2% ränta med insättningsgaranti upp till 1 050 000 kr via riksgälden. FastRäntekonto ger 5,5% ränta men pengarna är bundna 6-12 månader och har kapitalskydd istället för insättningsgaranti. Högre avkastning innebär också något högre risk."
  },
  {
    question: "Hur jämför jag växelkurser mellan olika tjänster?",
    answer: "Fokusera på den totala kostnaden, inte bara växelkursen. Räkna ut hur mycket du faktiskt får i den nya valutan efter alla avgifter. Använd jämförelsesajter och kolla både onlinetjänster och banker. Undvik att växla på flygplatser där kurserna ofta är sämst."
  },
  {
    question: "Är räntan på FastRäntekonto garanterad?",
    answer: "Ja, räntan på 5,5% per år är fast och garanterad under hela bindningstiden. Detta till skillnad från sparkonton där räntan kan ändras av banken när som helst. Dock gäller räntan endast om du inte gör uttag i förtid."
  },
  {
    question: "Kan jag använda dessa tjänster om jag bor utomlands?",
    answer: "ChangeGroup erbjuder växling i flera länder, både online och i butik. SaveLends FastRäntekonto kräver svenskt personnummer och bankkonto. Kontrollera alltid villkoren hos varje tjänst om du är bosatt utomlands eller inte är svensk medborgare."
  }
];

export default function AndraTjansterFAQ() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Vanliga frågor om valutaväxling och sparande</CardTitle>
          <CardDescription className="text-center">
            Här hittar du svar på de mest frekventa frågorna om valutaväxling och högavkastande sparkonton
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="space-y-2">
            {andraTjansterFaqData.map((faq, index) => (
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
