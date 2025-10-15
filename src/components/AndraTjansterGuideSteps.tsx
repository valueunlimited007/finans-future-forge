import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calculator, Search, FileCheck, Wallet } from "lucide-react";

export default function AndraTjansterGuideSteps() {
  const steps = [
    {
      step: 1,
      title: "Välj rätt tjänst för dina behov",
      description: "Börja med att identifiera vad du behöver - valutaväxling för resa eller sparande för högre avkastning.",
      details: [
        "Valutaväxling: Bäst för resor, onlineshopping eller utlandsbetalningar",
        "FastRäntekonto: Passar dig som vill spara med högre ränta än vanliga sparkonton",
        "Beräkna hur mycket du behöver växla eller hur länge du kan binda dina pengar",
        "Överväg vilken risknivå du är bekväm med",
        "Tänk på när du behöver tillgång till pengarna"
      ],
      icon: <Search className="w-6 h-6" />,
      tip: "För kortsiktigt sparande (under 6 månader) är traditionella sparkonton säkrare"
    },
    {
      step: 2,
      title: "Jämför villkor och avgifter noggrant",
      description: "Olika tjänster har olika kostnader och villkor. Jämför den totala kostnaden och läs villkoren noga.",
      details: [
        "För valutaväxling: Jämför växelkurser och avgifter mellan olika aktörer",
        "För FastRäntekonto: Kontrollera bindningstid, ränta och villkor för kapitalskydd",
        "Läs användarrecensioner och erfarenheter från andra kunder",
        "Kontrollera att tjänsten är reglerad och trygg (ESMA för SaveLend)",
        "Räkna ut den totala kostnaden eller avkastningen"
      ],
      icon: <Calculator className="w-6 h-6" />,
      tip: "Använd oberoende jämförelsesajter men kontrollera slutliga villkor direkt hos leverantören"
    },
    {
      step: 3,
      title: "Ansök eller beställ tjänsten",
      description: "När du valt tjänst är det dags att gå vidare med ansökan eller beställningen.",
      details: [
        "ChangeGroup: Beställ valuta online eller besök en av deras butiker",
        "SaveLend: Skapa konto och ansök om FastRäntekonto via deras webbplats",
        "Förbered nödvändig legitimation (BankID för svenska tjänster)",
        "Fyll i alla uppgifter noggrant och sanningsenligt",
        "Läs och acceptera användarvillkoren"
      ],
      icon: <FileCheck className="w-6 h-6" />,
      tip: "Ha BankID redo för snabbast möjlig identifiering"
    },
    {
      step: 4,
      title: "Genomför transaktion och börja använda",
      description: "När din ansökan är godkänd kan du börja använda tjänsten direkt.",
      details: [
        "Valutaväxling: Hämta din valuta eller få den levererad hem",
        "FastRäntekonto: Överför pengar till ditt nya konto via bankgiro",
        "Spara kvitton och bekräftelser för dina egna register",
        "Följ upp din investering eller transaktion regelbundet",
        "Kontakta kundservice om du har frågor eller problem"
      ],
      icon: <Wallet className="w-6 h-6" />,
      tip: "Sätt en påminnelse för när bindningstiden på FastRäntekonto går ut"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Så kommer du igång - steg för steg</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Följ denna guide för att komma igång med valutaväxling eller högavkastande sparande. 
          Rätt förberedelse ger bästa resultat och trygghet.
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
            <h3 className="text-xl font-bold text-green-800">Du är nu redo att komma igång!</h3>
            <p className="text-green-700 max-w-2xl mx-auto">
              Om du har följt alla steg ovan är du väl förberedd för att använda dessa finansiella tjänster. 
              Kom ihåg att alltid läsa villkoren och bara investera eller växla enligt dina behov.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Tjänst vald
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Villkor jämförda
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Ansökan klar
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Redo att börja
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
