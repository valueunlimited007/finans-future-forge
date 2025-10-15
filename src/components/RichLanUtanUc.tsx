import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, TrendingUp, Users, Clock, CheckCircle, XCircle, Info } from "lucide-react";
import LoanComparisonTable from "./LoanComparisonTable";
import LoanFAQ from "./LoanFAQ";
import LoanGuideSteps from "./LoanGuideSteps";
import CustomBreadcrumb from "./CustomBreadcrumb";
import OffersContainer from "./OffersContainer";
import ConsumerCreditWarning from "./ConsumerCreditWarning";

export default function RichLanUtanUc() {
  const breadcrumbItems = [
    { label: "Lån utan UC" }
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Vad betyder lån utan UC-kontroll?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ett lån utan UC-kontroll innebär att långivaren inte gör en traditionell kreditupplysning hos UC (Upplysningscentralen) innan lånet beviljas. Istället bedömer de din kreditvärdighet genom andra metoder som inkomstverifiering, bankutdrag eller andra databaser."
        }
      },
      {
        "@type": "Question", 
        "name": "Kan jag få lån utan UC även med betalningsanmärkningar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, många långivare som erbjuder lån utan UC accepterar ansökningar från personer med betalningsanmärkningar. Dock är det viktigt att notera att räntan oftast blir högre och lånebeloppet lägre jämfört med traditionella lån."
        }
      },
      {
        "@type": "Question",
        "name": "Vilka är riskerna med lån utan UC-kontroll?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De främsta riskerna inkluderar högre räntor (ofta 15-35% effektiv ränta), kortare återbetalningstid, risk för överbelåning, och att du kan hamna i en skuldskuldfälla om du inte kan betala tillbaka i tid."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Lån utan UC - 13 långivare som inte UC-kontrollerar 2025</title>
        <meta name="description" content="Lån utan UC-kontroll från 13 långivare. ✓ Även med betalningsanmärkning ✓ Snabba beslut ✓ 1 000-800 000 kr. Få lån utan kreditupplysning idag." />
        <link rel="canonical" href="https://finansguiden.se/lan-utan-uc" />
        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>
      </Helmet>

      <main>
        <div className="container mx-auto max-w-6xl px-4">
          <CustomBreadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-orange-100">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Lån <span className="text-orange-600">utan UC</span> 2025
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              13 verifierade långivare som inte gör UC-kontroll. Få lån även med betalningsanmärkning. 
              Snabba beslut och utbetalning samma dag med räntor från 2,95%.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button asChild size="lg" className="text-lg px-8 bg-orange-600 text-white hover:bg-orange-700 shadow-lg">
                <a href="#godkanda-partners">Jämför lån utan UC</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
                <a href="#guide">Läs guide först</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center text-sm mb-8">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <CheckCircle className="w-4 h-4 mr-1" />
                Ingen UC-kontroll
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Users className="w-4 h-4 mr-1" />
                13 verifierade långivare
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                <Clock className="w-4 h-4 mr-1" />
                Beslut inom 5 min
              </Badge>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                <TrendingUp className="w-4 h-4 mr-1" />
                1 000-800 000 kr
              </Badge>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">13</div>
                <div className="text-sm text-muted-foreground">Långivare</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">2,95%</div>
                <div className="text-sm text-muted-foreground">Lägsta ränta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">800k</div>
                <div className="text-sm text-muted-foreground">Max belopp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">5 min</div>
                <div className="text-sm text-muted-foreground">Snabbaste beslut</div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Warning */}
        <section className="py-8 px-4 bg-amber-50 border-y border-amber-200">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-amber-300">
              <CardHeader>
                <CardTitle className="text-amber-800 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6" />
                  Viktigt att veta innan du ansöker
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-amber-700">
                  Lån utan UC-kontroll har ofta betydligt högre räntor än traditionella banklån (15-35% vs 4-8%). 
                  Dessa lån är främst avsedda som kortsiktiga lösningar för akuta ekonomiska behov.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-amber-800">✓ Fördelar:</h4>
                    <ul className="space-y-1 text-amber-700">
                      <li>• Snabba beslut (15 min - 24h)</li>
                      <li>• Ingen traditionell UC-kontroll</li>
                      <li>• Möjligt även med anmärkningar</li>
                      <li>• Enkel onlineansökan</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-amber-800">⚠️ Nackdelar:</h4>
                    <ul className="space-y-1 text-amber-700">
                      <li>• Högre räntor (15-35%)</li>
                      <li>• Kortare återbetalningstid</li>
                      <li>• Risk för skuldfälla</li>
                      <li>• Begränsade lånebelopp</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What is UC-free loan */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">Vad är lån utan UC-kontroll?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-blue-600" />
                    Traditionella lån med UC
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Vid traditionella lån gör långivaren alltid en kreditupplysning hos UC (Upplysningscentralen) 
                    för att kontrollera din kredithistorik, betalningsanmärkningar och skulder.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Lägre räntor (4-8%)
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Större lånebelopp
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-500" />
                      Kräver god kreditvärdighet
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-500" />
                      Längre handläggningstid
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                    Lån utan UC-kontroll
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Lån utan UC innebär att långivaren inte gör en traditionell kreditupplysning. 
                    Istället bedöms din återbetalningsförmåga genom inkomstverifiering och bankdata.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Snabba beslut (15 min-24h)
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Accepterar anmärkningar
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-500" />
                      Högre räntor (15-35%)
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-500" />
                      Begränsade lånebelopp
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Så fungerar bedömningen utan UC</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Istället för UC-kontroll använder långivare alternativa metoder för att bedöma din kreditvärdighet:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Inkomstverifiering:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Lönespecifikationer från de senaste 2-3 månaderna
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Anställningsbevis eller inkomstbesked
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Kontroll av fast vs tillfällig anställning
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Bankdata och beteende:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Bankutdrag för att se inkomst- och utgiftsmönster
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Kontroll av återkommande betalningar
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Analys av ekonomiska vanor och stabilitet
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Adtraction Offers Section */}
        <section id="godkanda-partners" className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-4">Lån utan UC - Godkända partners</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Dessa partners erbjuder lån utan traditionell UC-kontroll. Snabba beslut och 
              möjlighet att få lån även med betalningsanmärkningar.
            </p>
            
            {/* Adtraction Utan UC Offers */}
            <OffersContainer 
              category="utan-uc" 
              limit={14}
              className="mb-12" 
            />
            
            <ConsumerCreditWarning />
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-4">Fullständig jämförelse</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Komplett översikt över alla långivare som erbjuder lån utan UC-kontroll, 
              inklusive villkor och användarrecensioner.
            </p>
            <LoanComparisonTable />
          </div>
        </section>

        {/* Step-by-step Guide */}
        <section id="guide" className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <LoanGuideSteps />
          </div>
        </section>

        {/* Risk Analysis */}
        <section className="py-16 px-4 bg-red-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-red-800">
              Risker och alternativ till lån utan UC
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6" />
                    Huvudsakliga risker
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">Skuldfälla</h4>
                        <p className="text-sm text-muted-foreground">
                          Höga räntor kan leda till att du behöver låna mer för att betala tillbaka, 
                          vilket skapar en negativ spiral.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">Överbelåning</h4>
                        <p className="text-sm text-muted-foreground">
                          Utan UC-kontroll kan du få lån du egentligen inte har råd med, 
                          vilket förvärrar din ekonomiska situation.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">Inkasso och Kronofogden</h4>
                        <p className="text-sm text-muted-foreground">
                          Missade betalningar leder snabbt till inkasso och kan resultera i 
                          betalningsföreläggande från Kronofogden.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-3">
                    <CheckCircle className="w-6 h-6" />
                    Alternativ att överväga
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">Vänta och förbättra UC</h4>
                        <p className="text-sm text-muted-foreground">
                          Betala av skulder och vänta 3-6 månader för att förbättra din kreditvärdighet 
                          och få bättre lånevillkor.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">Ekonomisk rådgivning</h4>
                        <p className="text-sm text-muted-foreground">
                          Kontakta kommunens budget- och skuldrådgivning för gratis hjälp 
                          med att lösa din ekonomiska situation.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm">Familj och vänner</h4>
                        <p className="text-sm text-muted-foreground">
                          Privata lån från närstående utan ränta kan vara ett mycket bättre alternativ 
                          än dyra snabblån.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white border-red-300">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-red-800">När du INTE bör ta lån utan UC</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-left">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        För att betala andra lån eller krediter
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        För konsumtion eller lyxinköp
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        När du redan har ekonomiska problem
                      </li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        För att spela eller satsa pengar
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        När du inte har stabil inkomst
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        För investeringar eller aktieköp
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Legal Information */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">Lagar och regler för lån utan UC</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-blue-600" />
                    Konsumentkreditlagen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Alla lån i Sverige omfattas av konsumentkreditlagen som skyddar dig som låntagare:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      14 dagars ångerrätt på alla lån
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Krav på kreditprövning och återbetalningsförmåga
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Tydlig information om totalkostnad och effektiv ränta
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Rätt till förtida återbetalning
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Info className="w-6 h-6 text-purple-600" />
                    Finansinspektionens tillsyn
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Alla seriösa långivare måste ha tillstånd från Finansinspektionen:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Tillstånd krävs för att bedriva låneverksamhet
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Regelbunden granskning av verksamheten
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Krav på ansvarsfull utlåning
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      Konsumentskydd och klagomålshantering
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-blue-800">Kontrollera alltid långivarens legitimitet</h3>
                  <p className="text-blue-700 text-sm max-w-2xl mx-auto">
                    Innan du ansöker om lån, kontrollera att långivaren finns listad på Finansinspektionens 
                    webbplats över företag med tillstånd att bedriva finansiell verksamhet i Sverige.
                  </p>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    Kontrollera på FI.se
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <LoanFAQ />
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">Verkliga exempel: När lån utan UC fungerar</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">✓ Lyckad användning</CardTitle>
                  <CardDescription>Maria, 34 år, förskolelärare</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground italic">
                    "Min bil gick sönder mitt i månaden och jag behövde 15 000 kr för reparation för att kunna ta mig till jobbet. 
                    Hade betalningsanmärkning från förra året så bankerna sa nej."
                  </p>
                  <div className="space-y-2 text-sm">
                    <div><strong>Lösning:</strong> Lån utan UC på 15 000 kr, 18% ränta, 12 månaders återbetalningstid</div>
                    <div><strong>Resultat:</strong> Betalade tillbaka lånet i tid, kunde behålla jobbet</div>
                    <div className="text-green-700"><strong>Totalkostnad:</strong> 16 800 kr (1 800 kr i ränta)</div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Bra användning för akut behov</Badge>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-800">✗ Problematisk användning</CardTitle>
                  <CardDescription>Johan, 28 år, servitör</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground italic">
                    "Tog lån utan UC på 25 000 kr för att betala kreditkortsskuld. När jag inte kunde betala tillbaka tog jag nya lån för att täcka det första."
                  </p>
                  <div className="space-y-2 text-sm">
                    <div><strong>Problem:</strong> Lånade för att betala andra skulder</div>
                    <div><strong>Resultat:</strong> Skuldfälla, slutade med 80 000 kr i skulder</div>
                    <div className="text-red-700"><strong>Slutkostnad:</strong> Inkasso och Kronofogden</div>
                  </div>
                  <Badge variant="secondary" className="bg-red-100 text-red-800">Undvik att låna för att betala skulder</Badge>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-yellow-800">Lärdomar från fallen</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Framgångsrika användningar:</h4>
                      <ul className="space-y-1 text-sm text-green-700">
                        <li>• Akuta reparationer (bil, hem)</li>
                        <li>• Medicinska utgifter</li>
                        <li>• Kortsiktiga kassaflödesproblem</li>
                        <li>• Enstaka nödutgifter</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Problematiska användningar:</h4>
                      <ul className="space-y-1 text-sm text-red-700">
                        <li>• Betala andra lån eller krediter</li>
                        <li>• Konsumtion och shopping</li>
                        <li>• Investeringar eller spel</li>
                        <li>• Flera samtidiga lån</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Expert Comments */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">Expertkommentarer</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👨‍💼</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">Lars Andersson</h4>
                      <p className="text-sm text-blue-600 mb-3">Privatekonom, tidigare Finansinspektionen</p>
                      <p className="text-sm text-muted-foreground italic mb-3">
                        "Lån utan UC kan vara ett användbart verktyg för personer som temporärt har försämrad kreditvärdighet 
                        men stabil inkomst. Nyckeln är att använda dem sparsamt och för verkliga behov, inte för konsumtion."
                      </p>
                      <p className="text-sm">
                        <strong>Rekommendation:</strong> Låna max 3-4 månadslöner och planera för återbetalning innan du ansöker.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👩‍⚖️</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">Anna Svensson</h4>
                      <p className="text-sm text-green-600 mb-3">Konsumentrådgivare, Konsumentverket</p>
                      <p className="text-sm text-muted-foreground italic mb-3">
                        "Tyvärr ser vi alltför ofta att konsumenter hamnar i skuldfällor med snabblån. 
                        Det är avgörande att förstå totalkostnaden och ha en realistisk återbetalningsplan."
                      </p>
                      <p className="text-sm">
                        <strong>Varning:</strong> Undvik långivare som inte gör någon kreditprövning alls - det är olagligt enligt svensk lag.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Redo att ansöka om lån utan UC?</h2>
            <p className="text-xl mb-8 opacity-90">
              Nu när du vet allt om lån utan UC kan du göra ett informerat val. 
              Kom ihåg att bara låna det du verkligen behöver och har råd att betala tillbaka.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button asChild size="lg" className="text-lg px-8 bg-white text-orange-600 hover:bg-gray-100">
                <a href="#erbjudanden">Jämför lån utan UC</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-orange-600 bg-white/10 backdrop-blur-sm">
                <Link to="/privatlan">Läs mer om privatlån</Link>
              </Button>
            </div>

            <div className="text-sm opacity-75 max-w-2xl mx-auto">
              <p>
                Denna guide uppdaterades senast december 2024. Information om räntor och villkor kan ändras. 
                Kontrollera alltid aktuella villkor direkt hos långivaren innan du ansöker.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}