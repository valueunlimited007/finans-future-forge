import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Calculator, FileText, CreditCard, Shield } from "lucide-react";

export default function PrivatlanGuideSteps() {
  const steps = [
    {
      step: 1,
      title: "Beräkna ditt lånebehov och återbetalningsförmåga",
      description: "Börja med att göra en noggrann ekonomisk genomgång för att avgöra exakt hur mycket du behöver låna och kan betala tillbaka.",
      details: [
        "Gör en detaljerad budget över dina månatliga inkomster och utgifter",
        "Räkna ut exakt hur mycket du behöver låna - undvik att låna mer än nödvändigt",
        "Använd tumregeln: totala månatliga skuldbetalningar max 85% av nettoinkomst",
        "Planera för oväntade utgifter - ha alltid en säkerhetsmarginal på 10-20%",
        "Överväg olika återbetalningstider och hur de påverkar den totala kostnaden"
      ],
      icon: <Calculator className="w-6 h-6" />,
      tip: "Använd bankers onlinekalkylatorer för att räkna ut månatlig kostnad för olika lånebelopp och återbetalningstider"
    },
    {
      step: 2,
      title: "Kontrollera och förbättra din kreditvärdighet",
      description: "En bra kreditvärdighet ger dig tillgång till lägre räntor och bättre villkor. Kontrollera din UC-rapport innan du ansöker.",
      details: [
        "Begär ut din kreditupplysning gratis från UC eller Bisnode",
        "Kontrollera att all information är korrekt och aktuell",
        "Betala av befintliga skulder för att förbättra din skuldsättningsgrad",
        "Vänta med ansökan om du nyligen fått betalningsanmärkningar bortplockade",
        "Undvik flera kreditförfrågningar inom kort tid"
      ],
      icon: <Shield className="w-6 h-6" />,
      warning: "Flera kreditförfrågningar inom kort tid kan sänka din kreditvärdighet temporärt"
    },
    {
      step: 3,
      title: "Jämför banker och villkor noggrant", 
      description: "Olika banker erbjuder olika villkor. Jämför inte bara räntan utan den totala kostnaden över hela låneperioden.",
      details: [
        "Fokusera på effektiv årsränta (EÅR) istället för nominell ränta",
        "Jämför totalkostnaden för hela låneperioden, inklusive alla avgifter",
        "Kontrollera villkor för förtida återbetalning och eventuella avgifter",
        "Läs recensioner och erfarenheter från andra kunder",
        "Kontrollera bankens kundservice och tillgänglighet"
      ],
      icon: <FileText className="w-6 h-6" />,
      tip: "Använd oberoende jämförelsesajter men kontrollera alltid slutliga villkor direkt hos banken"
    },
    {
      step: 4,
      title: "Förbered alla nödvändiga dokument",
      description: "För att påskynda processen och öka chanserna för godkännande bör du ha alla dokument redo innan ansökan.",
      details: [
        "Giltig ID-handling (pass, körkort eller nationellt ID-kort)",
        "Lönespecifikationer eller inkomstbesked från de senaste 2-3 månaderna",
        "Kontoutdrag som visar inkomster och utgiftsmönster",
        "Anställningsbevis eller företagsregistreringsbevis för egenföretagare",
        "Eventuell deklaration eller annat som visar inkomstkällor"
      ],
      icon: <CreditCard className="w-6 h-6" />,
      tip: "Ha alla dokument i digital form för snabbast möjlig ansökan online"
    },
    {
      step: 5,
      title: "Ansök hos din valda bank",
      description: "När du valt bank och förberett dokumenten är det dags att göra den faktiska ansökan. Var noggrann och ärlig i alla uppgifter.",
      details: [
        "Fyll i ansökningsformuläret noggrant och sanningsenligt",
        "Ladda upp eller skicka in alla begärda dokument",
        "Dubbelkolla all information innan du skickar ansökan",
        "Använd BankID för att signera ansökan digitalt",
        "Spara referensnummer och bekräftelse för dina egna register"
      ],
      icon: <CheckCircle className="w-6 h-6" />,
      warning: "Ljug aldrig i ansökan - det kan leda till att lånet sägs upp omedelbart och påverka din framtida kreditvärdighet"
    },
    {
      step: 6,
      title: "Vänta på besked och granska erbjudandet",
      description: "När banken granskat din ansökan får du besked. Om du får ett erbjudande, granska det noga innan du accepterar.",
      details: [
        "Vänta på beslut (15 minuter till 5 dagar beroende på bank)",
        "Granska erbjudandet noga - kontrollera ränta, avgifter och villkor",
        "Jämför med andra erbjudanden om du ansökt hos flera banker",
        "Läs lånevillkoren och förstå alla delar av avtalet",
        "Kontakta banken om något är oklart innan du accepterar"
      ],
      icon: <FileText className="w-6 h-6" />,
      tip: "Du har 14 dagars ångerrätt enligt lag - men det är bättre att tänka igenom beslutet innan du accepterar"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Så ansöker du om privatlån - steg för steg</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Följ denna guide för att ansöka om privatlån på rätt sätt och få bästa möjliga villkor. 
          Rätt förberedelse ökar dina chanser att få godkänt med bra ränta.
        </p>
      </div>

      <div className="grid gap-6">
        {steps.map((stepData, index) => (
          <Card key={index} className="relative">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {stepData.step}
                  </div>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2 flex items-center gap-3">
                    {stepData.icon}
                    {stepData.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {stepData.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="ml-16 space-y-4">
              <ul className="space-y-2">
                {stepData.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
              
              {stepData.warning && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-red-700">
                      <strong>Viktigt:</strong> {stepData.warning}
                    </p>
                  </div>
                </div>
              )}
              
              {stepData.tip && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-blue-700">
                      <strong>Tips:</strong> {stepData.tip}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-green-800">Du är nu redo att ansöka!</h3>
            <p className="text-green-700 max-w-2xl mx-auto">
              Om du har följt alla steg ovan är du väl förberedd för att ansöka om privatlån. 
              Kom ihåg att jämföra olika banker och bara låna det du verkligen behöver och har råd att betala tillbaka.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Ekonomin är genomgången
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ UC är kontrollerad
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Bankerna är jämförda
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Dokumenten är klara
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}