import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Calculator, CreditCard, Shield, Target, Search, FileText } from "lucide-react";

export default function CreditCardGuideSteps() {
  const steps = [
    {
      step: 1,
      title: "Analysera dina behov och användningsmönster",
      description: "Börja med att förstå hur du kommer att använda kreditkortet för att välja rätt typ av kort.",
      details: [
        "Beräkna dina månatliga utgifter i olika kategorier (mat, resor, drivmedel)",
        "Bestäm om du vill ha cashback, miles, eller andra specifika förmåner",
        "Utvärdera om du kommer betala hela saldot varje månad eller använda krediten",
        "Överväg om du behöver kortet främst för vardagsköp eller specifika ändamål",
        "Fundera över vikten av årsavgift kontra förmånernas värde"
      ],
      icon: <Target className="w-6 h-6" />,
      tip: "Gör en lista över dina största utgiftskategorier - detta hjälper dig välja kort med bäst cashback eller poäng för dina behov"
    },
    {
      step: 2,
      title: "Kontrollera din kreditvärdighet",
      description: "En god kreditvärdighet ger dig tillgång till bättre kort med lägre räntor och högre kreditlimiter.",
      details: [
        "Begär ut din kreditupplysning gratis från UC eller Bisnode",
        "Kontrollera att all information är korrekt och aktuell",
        "Betala av eventuella skulder för att förbättra din skuldsättningsgrad",
        "Undvik att ansöka om flera kreditprodukter samtidigt",
        "Vänta minst 3-6 månader mellan kreditansökningar"
      ],
      icon: <Shield className="w-6 h-6" />,
      warning: "Flera kreditförfrågningar inom kort tid kan sänka din kreditpoäng temporärt"
    },
    {
      step: 3,
      title: "Jämför olika kreditkort noggrant",
      description: "Jämför inte bara årsavgifter utan se till hela värdeproposition inklusive förmåner och villkor.",
      details: [
        "Fokusera på värdet av förmåner i förhållande till årsavgiften",
        "Jämför räntor, särskilt om du inte alltid betalar hela saldot",
        "Kontrollera uttagsavgifter och valutaavgifter för utlandsanvändning",
        "Läs om försäkringar och andra förmåner som ingår",
        "Undersök om det finns välkomstbonusar eller introduktionserbjudanden"
      ],
      icon: <Search className="w-6 h-6" />,
      tip: "Använd kalkylator för att räkna ut det verkliga värdet av cashback/poäng baserat på dina utgifter"
    },
    {
      step: 4,
      title: "Förbered ansökningsdokument",
      description: "Ha alla nödvändiga dokument redo för en smidig och snabb ansökningsprocess.",
      details: [
        "Giltig ID-handling (pass, körkort eller nationellt ID-kort)",
        "Inkomstbesked eller lönespecifikationer från senaste månaden",
        "Kontoutdrag som visar regelbundna inkomster",
        "Uppgifter om andra krediter och månatliga utgifter",
        "Kontaktuppgifter inklusive telefonnummer för verifiering"
      ],
      icon: <FileText className="w-6 h-6" />,
      tip: "Ha alla dokument digitalt för snabbast möjlig ansökan online"
    },
    {
      step: 5,
      title: "Ansök om kreditkort",
      description: "När du valt kort och förberett dokument är det dags att göra ansökan.",
      details: [
        "Fyll i ansökan noggrant och sanningsenligt online eller på kontor",
        "Ange realistiska uppgifter om inkomster och utgifter",
        "Välj lämplig kreditlimit - inte för hög för din ekonomi",
        "Läs och förstå alla villkor innan du accepterar",
        "Spara ansökningsreferens och bekräftelse"
      ],
      icon: <CreditCard className="w-6 h-6" />,
      warning: "Ange aldrig felaktiga uppgifter i ansökan - det kan leda till avslag och påverka framtida ansökningar"
    },
    {
      step: 6,
      title: "Använd kortet ansvarsfullt",
      description: "När du fått kortet beviljat är det viktigt att använda det på ett sätt som bygger god kredithistorik.",
      details: [
        "Sätt upp automatiska betalningar för att aldrig missa förfallodagen",
        "Håll kreditutnyttjandet under 30% av din kreditlimit",
        "Betala hela saldot varje månad för att undvika ränta",
        "Följ upp dina utgifter regelbundet via app eller kontoutdrag",
        "Aktivera och lär dig använda kortets förmåner och försäkringar"
      ],
      icon: <CheckCircle className="w-6 h-6" />,
      tip: "Sätt upp push-notifieringar för alla transaktioner för att hålla koll på användningen och upptäcka bedrägerier snabbt"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Så väljer och använder du kreditkort - steg för steg</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Följ denna guide för att välja rätt kreditkort och använda det på ett ansvarsfullt sätt. 
          Rätt kort kan spara pengar och ge värdefulla förmåner.
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

      <Card className="bg-gradient-to-r from-green-50 to-violet-50 border-green-200">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-green-800">Nu är du redo att välja kreditkort!</h3>
            <p className="text-green-700 max-w-2xl mx-auto">
              Med denna kunskap kan du välja ett kreditkort som passar dina behov och använda det ansvarsfullt. 
              Kom ihåg att ett kreditkort är ett verktyg - använt rätt kan det ge stora fördelar.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Behov analyserade
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Kreditvärdighet kontrollerad
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Kort jämförda
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Ansvarig användning planerad
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}