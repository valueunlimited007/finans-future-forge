import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, FileText, CreditCard, Clock, Shield } from "lucide-react";

export default function LoanGuideSteps() {
  const steps = [
    {
      step: 1,
      title: "Bedöm ditt behov och din återbetalningsförmåga",
      description: "Innan du ansöker om lån utan UC är det kritiskt att du gör en ärlig bedömning av din ekonomiska situation.",
      details: [
        "Räkna ut exakt hur mycket du behöver låna - låna inte mer än nödvändigt",
        "Gör en budget för att se att du har råd med månatliga betalningar",
        "Kontrollera din nuvarande månadsinkomst och fasta utgifter",
        "Planera för oväntade utgifter - ha alltid en säkerhetsmarginal"
      ],
      icon: <FileText className="w-6 h-6" />,
      warning: "Kom ihåg att lån utan UC ofta har högre räntor - var säker på att du kan betala tillbaka"
    },
    {
      step: 2,
      title: "Jämför olika långivare och villkor",
      description: "Även om du behöver lånet snabbt är det viktigt att jämföra olika alternativ för att få bästa möjliga villkor.",
      details: [
        "Jämför effektiv ränta (inte bara nominell ränta) mellan olika långivare",
        "Kontrollera alla avgifter: uppläggningsavgift, aviavgift, förseningsränta",
        "Läs villkoren för förtida återbetalning",
        "Kontrollera återbetalningstid och flexibilitet",
        "Verifiera att långivaren har tillstånd från Finansinspektionen"
      ],
      icon: <CreditCard className="w-6 h-6" />,
      tip: "Använd vår jämförelsetabell ovan för att enkelt jämföra olika långivare"
    },
    {
      step: 3,
      title: "Förbered nödvändiga dokument",
      description: "För att snabba på ansökningsprocessen bör du ha alla dokument redo innan du ansöker.",
      details: [
        "Giltig ID-handling (körkort, pass eller nationellt ID-kort)",
        "Senaste lönebesked eller annan inkomstverifiering",
        "Bankutdrag från de senaste 2-3 månaderna",
        "Anställningsbevis (om du har fast anställning)",
        "Kontoinformation för utbetalning av lånet"
      ],
      icon: <Shield className="w-6 h-6" />,
      tip: "Ha dokumenten digitalt tillgängliga för snabbast möjlig ansökan"
    },
    {
      step: 4,
      title: "Ansök online hos vald långivare",
      description: "De flesta långivare utan UC har enkel onlineansökan som tar 5-15 minuter att fylla i.",
      details: [
        "Fyll i ansökningsformuläret noggrant och sanningsenligt",
        "Ladda upp eller skicka in begärda dokument",
        "Dubbelkolla all information innan du skickar ansökan",
        "Notera referensnummer för din ansökan",
        "Förvänta dig svar inom 15 minuter till 24 timmar"
      ],
      icon: <Clock className="w-6 h-6" />,
      warning: "Ljug aldrig i ansökan - det kan leda till att lånet sägs upp i förtid"
    },
    {
      step: 5,
      title: "Vänta på beslut och kontrollera villkoren",
      description: "När du får ett erbjudande är det viktigt att läsa igenom alla villkor innan du accepterar.",
      details: [
        "Kontrollera att lånebeloppet och räntan stämmer med vad som utlovades",
        "Läs igenom alla villkor och avgifter noga",
        "Kontrollera återbetalningsplan och datum för första betalning",
        "Förstå vad som händer vid försenad betalning",
        "Spara alla dokument för framtida referens"
      ],
      icon: <CheckCircle className="w-6 h-6" />,
      tip: "Ta dig tid att läsa villkoren även om du behöver pengarna snabbt"
    },
    {
      step: 6,
      title: "Hantera lånet ansvarsfullt",
      description: "Efter att lånet är beviljat och utbetalt är det viktigt att du hanterar det på ett ansvarsfullt sätt.",
      details: [
        "Sätt upp automatisk betalning för att undvika förseningar",
        "Betala mer än minimum när det är möjligt för att minska räntan",
        "Kontakta långivaren omedelbart om du får betalningsproblem",
        "Överväg att betala tillbaka lånet i förtid om din ekonomi förbättras",
        "Använd inte lånet för att ta nya lån - undvik skuldfälla"
      ],
      icon: <Shield className="w-6 h-6" />,
      warning: "Missade betalningar kan leda till inkasso och påverka din framtida kreditvärdighet"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Steg-för-steg guide: Så ansöker du om lån utan UC</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Följ denna detaljerade guide för att ansöka om lån utan UC-kontroll på ett säkert och ansvarsfullt sätt.
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
            <h3 className="text-xl font-bold text-green-800">Grattis! Du är nu redo att ansöka</h3>
            <p className="text-green-700">
              Om du har följt alla steg ovan är du väl förberedd för att ansöka om lån utan UC på ett ansvarsfullt sätt. 
              Kom ihåg att endast låna det du verkligen behöver och se till att du kan betala tillbaka i tid.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Budgeten är gjord
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Dokumenten är klara
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Långivaren är vald
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}