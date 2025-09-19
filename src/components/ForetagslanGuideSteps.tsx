import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Calculator, FileText, CreditCard, Shield, Building, TrendingUp } from "lucide-react";

export default function ForetagslanGuideSteps() {
  const steps = [
    {
      step: 1,
      title: "Analysera företagets finansieringsbehov",
      description: "Börja med att noggrant kartlägga vad företaget behöver pengarna till och hur mycket som krävs.",
      details: [
        "Gör en detaljerad budget för investeringen eller satsningen",
        "Beräkna ROI (avkastning på investering) för att motivera lånet",
        "Sätt upp realistiska kassaflödesprognoser för 2-3 år framåt",
        "Överväg om hela beloppet behövs på en gång eller kan delas upp",
        "Analysera alternativa finansieringsformer som leasing eller factoring"
      ],
      icon: <Calculator className="w-6 h-6" />,
      tip: "Dokumentera tydligt hur lånet kommer att öka företagets lönsamhet eller minska risker - det stärker ansökan"
    },
    {
      step: 2,
      title: "Förbered företagets ekonomiska underlag",
      description: "Samla all nödvändig finansiell dokumentation som visar företagets stabilitet och återbetalningsförmåga.",
      details: [
        "Senaste 2-3 årens bokslut och revisionsberättelser",
        "Aktuella månadsrapporter och delårsrapporter",
        "Kassaflödesanalys och budget för kommande år",
        "Kundreskontra och leverantörsreskontra vid behov",
        "Företagsregistreringsbevis och F-skattsedel"
      ],
      icon: <FileText className="w-6 h-6" />,
      warning: "Ofullständig dokumentation är den vanligaste orsaken till förseningar eller avslag"
    },
    {
      step: 3,
      title: "Kontrollera kreditvärdighet och säkerheter",
      description: "Granska både företagets och ägarnas kreditvärdighet samt identifiera möjliga säkerheter.",
      details: [
        "Begär ut företagets kreditupplysning från UC eller Bisnode",
        "Kontrollera ägarnas privata kreditvärdighet",
        "Inventera möjliga säkerheter: fastigheter, inventarier, fordringar",
        "Värdera säkerheter professionellt vid behov",
        "Överväg om medlåntagare eller garantier kan stärka ansökan"
      ],
      icon: <Shield className="w-6 h-6" />,
      tip: "Säkerheter kan sänka räntan avsevärt - även partiella säkerheter hjälper"
    },
    {
      step: 4,
      title: "Jämför långivare och finansieringsalternativ",
      description: "Olika långivare har olika specialiteter och krav. Jämför inte bara räntor utan totala villkor.",
      details: [
        "Storbanker: Ofta lägst räntor men striktare krav och långsammare process",
        "Regionalbanker: Mer personlig service och lokal förståelse",
        "Specialistfinansiärer: Kan acceptera högre risk mot högre ränta",
        "Almi: Statligt stöd för tillväxtföretag med konkurrenskraftiga villkor",
        "Alternative lenders: Snabbare beslut men ofta högre kostnader"
      ],
      icon: <Building className="w-6 h-6" />,
      tip: "Prata med flera banker - villkoren kan variera kraftigt mellan olika långivare"
    },
    {
      step: 5,
      title: "Förbered en övertygande affärsplan",
      description: "En välskriven affärsplan är avgörande för att få långivarens förtroende, särskilt för större lån.",
      details: [
        "Tydlig beskrivning av företaget, marknad och konkurrenter",
        "Detaljerad plan för hur lånet ska användas",
        "Realistiska finansiella prognoser med olika scenarios",
        "Riskanalys och hur företaget hanterar potentiella problem",
        "Tydlig återbetalningsplan baserad på förväntade kassaflöden"
      ],
      icon: <TrendingUp className="w-6 h-6" />,
      warning: "Orealistiskt optimistiska prognoser skapar misstro - var ärlig om risker och utmaningar"
    },
    {
      step: 6,
      title: "Ansök och förhandla villkor",
      description: "När allt är förberett är det dags att ansöka och förhandla fram bästa möjliga villkor.",
      details: [
        "Ansök hos 2-3 banker samtidigt för att jämföra erbjudanden",
        "Var beredd att svara på detaljerade frågor om verksamheten",
        "Förhandla inte bara ränta utan även avgifter och amorteringsplan",
        "Diskutera möjligheter till framtida utökningar av krediten",
        "Läs villkoren noga innan du accepterar - särskilt uppsägningsklausuler"
      ],
      icon: <CheckCircle className="w-6 h-6" />,
      tip: "Ha tålamod - företagslån tar tid. Använd väntetiden för att fortsätta utveckla verksamheten"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Så ansöker du om företagslån - steg för steg</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Följ denna detaljerade guide för att maximera dina chanser att få företagslån med bra villkor. 
          Rätt förberedelse är nyckeln till framgång.
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

      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-green-800">Företaget är nu redo för lånansökan!</h3>
            <p className="text-green-700 max-w-2xl mx-auto">
              Med denna förberedelse har ditt företag optimala förutsättningar för att få företagslån beviljat. 
              Kom ihåg att vara tålmodig och professionell genom hela processen.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Finansieringsbehov analyserat
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Dokumentation förberedd
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Säkerheter inventerade
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                ✓ Affärsplan klar
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}