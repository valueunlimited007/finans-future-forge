import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Calculator, FileText, Home, Shield } from "lucide-react";

export default function BolanGuideSteps() {
  const steps = [
    {
      step: 1,
      title: "Beräkna ditt lånebehov och kontantinsats",
      description: "Innan du börjar leta bostad måste du veta hur mycket du kan låna och hur mycket kontantinsats du behöver.",
      details: [
        "Beräkna din totala ekonomi: inkomster, utgifter och befintliga skulder",
        "Kontrollera ditt sparade kapital för kontantinsatsen (minst 15% av bostadens värde)",
        "Använd bolånekalkylatorer för att se hur mycket du kan låna baserat på din inkomst",
        "Planera för övriga kostnader vid bostadsköp: överlåtelseskatt (1,5%), pantbrevsavgifter, lagfart, flyttkostnader",
        "Ha en buffert på 5-10% för oväntade utgifter"
      ],
      icon: <Calculator className="w-6 h-6" />,
      tip: "Tumregel: Dina totala boendekostnader (ränta + amortering + avgift) bör inte överstiga 30-35% av din bruttoinkomst"
    },
    {
      step: 2,
      title: "Ta fram ett lånelöfte",
      description: "Innan du börjar leta bostad och ge bud behöver du ett lånelöfte som visar säljare att du har ekonomisk kapacitet.",
      details: [
        "Ansök om lånelöfte hos bank eller bolåneförmedlare",
        "Lämna in dokument: lönespecar, kontoutdrag, deklaration",
        "Lånelöftet är giltigt i 2-3 månader",
        "Använd en bolåneförmedlare för att få flera lånelöften samtidigt med endast EN UC-kontroll",
        "Lånelöftet innebär ingen bindande skyldighet"
      ],
      icon: <FileText className="w-6 h-6" />,
      warning: "Varje bolåneansökan ger en UC-registrering. Använd bolåneförmedlare för att minimera antalet förfrågningar"
    },
    {
      step: 3,
      title: "Hitta rätt bostad och lägg bud",
      description: "Nu när du har lånelöfte kan du börja leta efter din drömbostad och delta i budgivningar.",
      details: [
        "Sök bostad inom din budget (kom ihåg att lånebeloppet är max 85% av priset)",
        "Gå på visningar och läs igenom objektsbeskrivningen noga",
        "Anlita en besiktningsman före köp (kostar 5000-15000 kr men kan spara mycket pengar)",
        "Lägg bud via mäklare och visa upp ditt lånelöfte",
        "När budet accepteras skriver du köpekontrakt"
      ],
      icon: <Home className="w-6 h-6" />,
      tip: "Ta med dig någon med erfarenhet av bostadsköp till visningarna - de kan upptäcka saker du missar"
    },
    {
      step: 4,
      title: "Ansök om det formella bolånet",
      description: "När köpet är klart är det dags att ansöka om det faktiska bolånet hos den bank du valt.",
      details: [
        "Kontakta banken eller bolåneförmedlaren du valt för ditt bolån",
        "Lämna in slutliga dokument: köpekontrakt, besiktningsprotokoll, värdering av bostaden",
        "Välj räntebindning: rörlig, 1, 2, 3 eller 5 år (eller en kombination)",
        "Diskutera amortering och återbetalningstid med din rådgivare",
        "Signera låneavtalet digitalt med BankID"
      ],
      icon: <Shield className="w-6 h-6" />,
      tip: "Många väljer att dela upp lånet i delar med olika bindningstider för att balansera risk och kostnad"
    },
    {
      step: 5,
      title: "Få besked och slutför köpet",
      description: "När bolånet är godkänt och utbetalt kan du slutföra köpet och flytta in i din nya bostad.",
      details: [
        "Banken godkänner lånet efter granskning av alla dokument (tar 1-2 veckor)",
        "Banken utbetalar lånebeloppet på tillträdesdagen",
        "Betala överlåtelseskatt (1,5% av köpesumman) inom 3 veckor",
        "Ansök om lagfart hos Lantmäteriet (325-825 kr beroende på köpesumma)",
        "Teckna hemförsäkring innan tillträdet"
      ],
      icon: <CheckCircle className="w-6 h-6" />,
      warning: "Glöm inte att betala överlåtelseskatt i tid - annars tillkommer förseningsavgift"
    },
    {
      step: 6,
      title: "Tillträde och utbetalning",
      description: "På tillträdesdagen får du nycklarna och äger officiellt din bostad. Nu börjar ditt bolån löpa.",
      details: [
        "Mötesplats och tid för tillträde framgår av köpekontraktet",
        "Överlämning av nycklar och genomgång av bostaden med säljaren",
        "Banken betalar ut lånebeloppet direkt till säljarens konto",
        "Räntan börjar löpa från tillträdesdagen",
        "Första amorteringen och ränteinbetalningen sker månaden efter tillträdet",
        "Spara alla kvitton och dokument - viktiga för framtida försäljning"
      ],
      icon: <Home className="w-6 h-6" />,
      tip: "Fotografera bostaden vid tillträdet och spara objektsbeskrivningen - kan behövas vid framtida försäljning"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Så ansöker du om bolån - steg för steg</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Följ denna guide för att genomföra ditt bostadsköp och bolåneansökan på rätt sätt.
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
            <h3 className="text-xl font-bold text-green-800">Grattis - du är redo för ditt bostadsköp!</h3>
            <p className="text-green-700 max-w-2xl mx-auto">
              Om du har följt alla steg ovan är du väl förberedd för att köpa bostad och ta bolån. 
              Använd en bolåneförmedlare för att jämföra flera banker med endast EN UC-kontroll.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Ekonomin är genomgången
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Lånelöfte är klart
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Redo att lägga bud
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Förstår processen
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
