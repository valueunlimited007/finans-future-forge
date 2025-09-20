import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Shield, TrendingUp, Users, Clock, CheckCircle, XCircle, Info, Calculator, Star, Building, Target, Zap } from "lucide-react";
import ForetagslanComparisonTable from "./ForetagslanComparisonTable";
import ForetagslanFAQ from "./ForetagslanFAQ";
import ForetagslanGuideSteps from "./ForetagslanGuideSteps";
import CustomBreadcrumb from "./CustomBreadcrumb";
import FinancialCalculator from "@/components/FinancialCalculator";
import OffersContainer from "./OffersContainer";

export default function RichForetagslan() {
  const breadcrumbItems = [
    { label: "Företagslån" }
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Vad är ett företagslån?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ett företagslån är en kredit som ges till företag för att finansiera verksamheten. Det kan användas för investeringar, kassaflöde, expansion eller andra företagsbehov. Lånet kan vara säkrat eller osäkrat beroende på företagets situation."
        }
      },
      {
        "@type": "Question",
        "name": "Vilka krav ställs för att få företagslån?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Vanliga krav inkluderar: registrerat företag (minst 6-12 månader), god företagsekonomi, personlig borgen från VD/ägare, årsomsättning på minst 500 000-1 miljon kr och god kreditvärdighet."
        }
      },
      {
        "@type": "Question",
        "name": "Hur mycket kan mitt företag låna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lånebelopp varierar beroende på företagets omsättning, resultat och säkerheter. Mindre företag kan låna 100 000-2 miljoner kr, medan större företag kan få lån upp till 50 miljoner kr eller mer."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Företagslån - Jämför bästa finansiering för företag 2025 | Finansguiden.se</title>
        <meta name="description" content="Företagslån från 100 000 kr upp till 50 miljoner kr. ✓ Även utan säkerhet ✓ Snabba beslut ✓ Från 4,2% ränta. Jämför 10+ långivare och hitta bästa finansieringen." />
        <link rel="canonical" href="https://finansguiden.se/foretagslan" />
        <meta property="og:title" content="Företagslån - Finansiering för företag 2025" />
        <meta property="og:description" content="Jämför företagslån från ledande långivare. Finansiera tillväxt, kassaflöde och investeringar för ditt företag." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            "name": "Företagslån",
            "description": "Företagsfinansiering för tillväxt och investeringar",
            "provider": {
              "@type": "FinancialService",
              "name": "Finansguiden.se"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>
      </Helmet>

      <main>
        <div className="container mx-auto max-w-6xl px-4">
          <CustomBreadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Företagslån för <span className="text-emerald-600">tillväxt</span> 2025
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Finansiera ditt företags utveckling med flexibla företagslån. 100 000 kr - 50 miljoner kr, 
              snabba beslut och konkurrenskraftiga räntor från 4,2%. Jämför 10+ långivare.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg">
                Jämför företagslån nu
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white">
                Kostnadsfri rådgivning
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center text-sm mb-8">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <CheckCircle className="w-4 h-4 mr-1" />
                Från 4,2% ränta
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <Building className="w-4 h-4 mr-1" />
                10+ långivare
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                <Clock className="w-4 h-4 mr-1" />
                Beslut inom 1-4 veckor
              </Badge>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                <TrendingUp className="w-4 h-4 mr-1" />
                100k - 50 miljoner kr
              </Badge>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">4,2%</div>
                <div className="text-sm text-muted-foreground">Lägsta ränta</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">50M</div>
                <div className="text-sm text-muted-foreground">Max belopp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">24h</div>
                <div className="text-sm text-muted-foreground">Snabbaste beslut</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">10+</div>
                <div className="text-sm text-muted-foreground">Långivare</div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8 px-4 bg-blue-50 border-y border-blue-200">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-blue-300">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-3">
                  <Info className="w-6 h-6" />
                  Viktigt för företagare att veta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-blue-700">
                  Företagslån kräver ofta personlig borgen från VD/ägare, vilket innebär att du som person 
                  blir ansvarig för lånet. Säkerheter som fastigheter eller inventarier kan sänka räntan avsevärt.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-800">✓ Fördelar med företagslån:</h4>
                    <ul className="space-y-1 text-blue-700">
                      <li>• Stora lånebelopp möjliga (upp till 50M kr)</li>
                      <li>• Längre återbetalningstider (upp till 25 år)</li>
                      <li>• Ränteavdrag för företaget</li>
                      <li>• Flexibla användningsområden</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-800">⚠️ Viktigt att tänka på:</h4>
                    <ul className="space-y-1 text-blue-700">
                      <li>• Personlig borgen ofta krävs</li>
                      <li>• Säkerheter för större lån</li>
                      <li>• Grundlig kreditprövning</li>
                      <li>• Företaget måste vara lönsamt</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What is Business Loan */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">Vad är företagslån?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-emerald-600" />
                    Företagslån vs Privatlån
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Företagslån skiljer sig från privatlån genom att de är specifikt utformade för 
                    affärsändamål och ofta erbjuder större lånebelopp och längre återbetalningstider.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Större lånebelopp (upp till 50M kr)
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Längre återbetalningstider (upp till 25 år)
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Ränteavdrag för företaget
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-500" />
                      Kräver ofta personlig borgen
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Zap className="w-6 h-6 text-blue-600" />
                    Användningsområden
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Företagslån kan användas för många olika affärsändamål, från kortsiktiga 
                    kassaflödesbehov till långsiktiga investeringar och expansion.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Maskiner och utrustning
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Lagerinvesteringar
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Marknadsföring och försäljning
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Kassaflödesutjämning
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Så bedöms ditt företag för lån</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Banker gör en grundlig bedömning av ditt företag innan de beviljar lån. 
                  Här är de viktigaste faktorerna de tittar på:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Ekonomiska faktorer:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Omsättningsutveckling senaste 2-3 åren
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Lönsamhet och resultatutveckling
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Kassaflöde och likviditet
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Skuldsättningsgrad och finansiell stabilitet
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Kvalitativa faktorer:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Branschexpertis och marknadsposition
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Ledningsteamets kompetens och erfarenhet
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Affärsmodell och konkurrensförmåga
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        Tillväxtpotential och framtidsutsikter
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Räkna på ditt företagslån</h2>
              <p className="text-xl text-muted-foreground">
                Använd vår kalkylator för att uppskatta månadskostnad och totala lånekostnader
              </p>
            </div>
            <FinancialCalculator />
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-4">Aktuella företagslån</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Handplocka erbjudanden från våra verifierade partners - uppdaterade dagligen
            </p>
            
            {/* Adtraction Offers for Business Loans */}
            <OffersContainer 
              category="foretagslan" 
              limit={4}
              className="mb-12" 
            />
            
            <h2 className="text-3xl font-bold text-center mb-4 mt-16">Fullständig jämförelse 2025</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Vi har jämfört 10 långivare som erbjuder företagslån. Här är de bästa alternativen 
              baserat på räntor, villkor och specialiteter.
            </p>
            <ForetagslanComparisonTable />
          </div>
        </section>

        {/* Types of Business Loans */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Olika typer av företagsfinansiering</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <CardTitle>Tillväxtlån</CardTitle>
                  <CardDescription>
                    Finansiera expansion, nya marknader eller produktutveckling
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• 100 000 - 50 000 000 kr</li>
                    <li>• Löptid upp till 25 år</li>
                    <li>• Konkurrenskraftiga räntor från 4,2%</li>
                    <li>• Flexibel återbetalning</li>
                  </ul>
                  <Button className="w-full">Läs mer om tillväxtlån</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>Kassaflödeslån</CardTitle>
                  <CardDescription>
                    Kortsiktig finansiering för kassaflödesproblem
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• 50 000 - 2 000 000 kr</li>
                    <li>• Snabba utbetalningar (24-48h)</li>
                    <li>• Kort löptid (3-24 månader)</li>
                    <li>• Minimal dokumentation</li>
                  </ul>
                  <Button className="w-full">Läs mer om kassaflödeslån</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <CardTitle>Investeringslån</CardTitle>
                  <CardDescription>
                    Finansiera maskiner, utrustning eller lokaler
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• 100 000 - 10 000 000 kr</li>
                    <li>• Säkerhet i investering</li>
                    <li>• Långa löptider</li>
                    <li>• Gynnsamma villkor</li>
                  </ul>
                  <Button className="w-full">Läs mer om investeringslån</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <CardTitle>Startupfinansiering</CardTitle>
                  <CardDescription>
                    Lån för nya företag och entreprenörer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• 25 000 - 500 000 kr</li>
                    <li>• Även för nya företag</li>
                    <li>• Personlig borgen möjlig</li>
                    <li>• Rådgivning inkluderad</li>
                  </ul>
                  <Button className="w-full">Läs mer om startupfinansiering</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📄</span>
                  </div>
                  <CardTitle>Faktoring</CardTitle>
                  <CardDescription>
                    Sälj dina fakturor för omedelbar likviditet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Baserat på fakturor</li>
                    <li>• Snabb tillgång till kapital</li>
                    <li>• Ingen kreditprövning</li>
                    <li>• Flexibel lösning</li>
                  </ul>
                  <Button className="w-full">Läs mer om faktoring</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🏪</span>
                  </div>
                  <CardTitle>Handelskredit</CardTitle>
                  <CardDescription>
                    Revolverande kredit för löpande behov
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Kreditlimit upp till 2 miljoner</li>
                    <li>• Använd vid behov</li>
                    <li>• Rörlig ränta</li>
                    <li>• Perfekt för säsongsvariationer</li>
                  </ul>
                  <Button className="w-full">Läs mer om handelskredit</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Guide: Så ansöker du om företagslån</h2>
            
            <Tabs defaultValue="preparation" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="preparation">Förberedelse</TabsTrigger>
                <TabsTrigger value="requirements">Krav</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="tips">Tips</TabsTrigger>
              </TabsList>
              
              <TabsContent value="preparation" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Dokumentation du behöver</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Företagsdokument</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Registreringsbevis från Bolagsverket</li>
                          <li>• Senaste årsredovisningen</li>
                          <li>• Senaste bokslutet</li>
                          <li>• Företagets stadgar</li>
                          <li>• Firmatecknare och ägare</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Ekonomiska handlingar</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Senaste 12 månaders bokföring</li>
                          <li>• Resultat- och balansrapporter</li>
                          <li>• Kassaflödesanalys</li>
                          <li>• Budgetar och prognoser</li>
                          <li>• Skatteverkets kontrolluppgifter</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Affärsplan och syfte</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm">
                        En välskriven affärsplan ökar dina chanser att få lånet godkänt betydligt. 
                        Inkludera följande delar:
                      </p>
                      <div>
                        <h4 className="font-semibold mb-2">Viktiga delar att inkludera</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Företagsbeskrivning och verksamhet</li>
                          <li>• Marknadsanalys och konkurrenter</li>
                          <li>• Tydligt syfte med lånet</li>
                          <li>• Återbetalningsplan</li>
                          <li>• Riskanalys och säkerheter</li>
                          <li>• Ekonomiska nyckeltal</li>
                          <li>• Framtidsutsikter och tillväxtmål</li>
                        </ul>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <p className="text-sm text-emerald-700">
                          <strong>Tips:</strong> Var konkret och realistisk i dina prognoser. 
                          Banker värdesätter ärliga bedömningar högre än optimistiska fantasier.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="requirements" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Krav för företagslån</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-emerald-600">Grundläggande krav</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Registrerat svenskt företag</li>
                            <li>• Minst 6-12 månaders verksamhet</li>
                            <li>• Omsättning över 500 000 kr/år</li>
                            <li>• Ingen pågående rekonstruktion</li>
                            <li>• Positiv utveckling senaste året</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-blue-600">För bättre villkor</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Stabil lönsamhet över tid</li>
                            <li>• Stark balansräkning</li>
                            <li>• Diversifierad kundportfölj</li>
                            <li>• Erfarna ledning</li>
                            <li>• Säkerheter att ställa</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Vad banker bedömer</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Ekonomiska nyckeltal</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• <strong>Soliditet:</strong> Bör vara över 20%</li>
                            <li>• <strong>Kassalikviditet:</strong> Minst 10-15%</li>
                            <li>• <strong>Räntabilitet:</strong> Positiv resultatutveckling</li>
                            <li>• <strong>Skuldsättning:</strong> Rimlig i förhållande till omsättning</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Kvalitativa faktorer</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Branschkännedom och experience</li>
                            <li>• Affärsmodellens hållbarhet</li>
                            <li>• Konkurrensposition på marknaden</li>
                            <li>• Ledningens kompetens</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="process" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Så går låneprocessen till</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-600">1</div>
                        <div>
                          <h4 className="font-semibold">Förberedelse och ansökan</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Samla all dokumentation och fyll i ansökan. Många banker erbjuder digital ansökan som går snabbt.
                          </p>
                          <div className="text-xs text-muted-foreground mt-2">Tid: 1-3 dagar</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-600">2</div>
                        <div>
                          <h4 className="font-semibold">Initial bedömning</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Banken gör en första bedömning av din ansökan och kan komma med frågor eller begära kompletteringar.
                          </p>
                          <div className="text-xs text-muted-foreground mt-2">Tid: 3-7 dagar</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-600">3</div>
                        <div>
                          <h4 className="font-semibold">Kreditprövning</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Djupare analys av företagets ekonomi, affärsplan och återbetalningsförmåga. Kan inkludera företagsbesök.
                          </p>
                          <div className="text-xs text-muted-foreground mt-2">Tid: 1-3 veckor</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-600">4</div>
                        <div>
                          <h4 className="font-semibold">Beslut och villkor</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Banken meddelar sitt beslut med specificerade villkor, ränta, säkerheter och återbetalningsplan.
                          </p>
                          <div className="text-xs text-muted-foreground mt-2">Tid: 1-2 dagar</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-600">5</div>
                        <div>
                          <h4 className="font-semibold">Avtal och utbetalning</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Signering av låneavtal, registrering av säkerheter och utbetalning av lånebeloppet.
                          </p>
                          <div className="text-xs text-muted-foreground mt-2">Tid: 3-7 dagar</div>
                        </div>
                      </div>

                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-amber-800">Total handläggningstid</h4>
                        <p className="text-sm text-amber-700">
                          För mindre belopp (under 500 000 kr): 1-2 veckor
                          <br />
                          För större belopp (över 500 000 kr): 2-6 veckor
                          <br />
                          Komplexa fall kan ta längre tid.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tips" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-emerald-600">✓ Så ökar du dina chanser</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li>
                          <strong>Ha ordning på ekonomin</strong>
                          <p className="text-muted-foreground">Uppdaterad bokföring och tydliga rapporter visar professionalitet</p>
                        </li>
                        <li>
                          <strong>Visa tydligt syfte</strong>
                          <p className="text-muted-foreground">Förklara exakt hur lånet ska användas och hur det skapar värde</p>
                        </li>
                        <li>
                          <strong>Bygg relation med banken</strong>
                          <p className="text-muted-foreground">Ha företagskonto och andra tjänster hos samma bank</p>
                        </li>
                        <li>
                          <strong>Erbjud säkerheter</strong>
                          <p className="text-muted-foreground">Även delvis säkerheter kan förbättra villkoren avsevärt</p>
                        </li>
                        <li>
                          <strong>Visa stabilitet</strong>
                          <p className="text-muted-foreground">Långa kundrelationer och återkommande intäkter värderas högt</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-red-600">⚠️ Undvik dessa misstag</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li>
                          <strong>Ansök om för stort belopp</strong>
                          <p className="text-muted-foreground">Var realistisk - banken bedömer din återbetalningsförmåga noga</p>
                        </li>
                        <li>
                          <strong>Dölj problem</strong>
                          <p className="text-muted-foreground">Ärlighet om utmaningar bygger förtroende hos långivaren</p>
                        </li>
                        <li>
                          <strong>Sakna tydlig plan</strong>
                          <p className="text-muted-foreground">Vaga beskrivningar av hur pengarna ska användas skapar tvivel</p>
                        </li>
                        <li>
                          <strong>Ignorera mindre långivare</strong>
                          <p className="text-muted-foreground">Alternativa finansiärer kan ha bättre villkor för vissa företag</p>
                        </li>
                        <li>
                          <strong>Inte jämföra villkor</strong>
                          <p className="text-muted-foreground">Räntor och avgifter kan skilja kraftigt mellan olika långivare</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <ForetagslanFAQ />
          </div>
        </section>

        {/* Legal and Expert Information */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">Juridisk information och expertråd</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Juridiska aspekter</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Personlig borgen</h4>
                    <p className="text-sm text-muted-foreground">
                      Personlig borgen innebär att du som privatperson går i borgen för företagets skuld. 
                      Det betyder att banken kan kräva betalning från dig personligen om företaget inte kan betala.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Säkerheter och pant</h4>
                    <p className="text-sm text-muted-foreground">
                      Företagspant kan omfatta inventarier, varulager, fordringar eller fastigheter. 
                      Vid betalningsproblem kan banken ta dessa tillgångar i anspråk.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Uppsägningsklausuler</h4>
                    <p className="text-sm text-muted-foreground">
                      Läs noga vad som kan leda till att banken säger upp lånet i förtid. 
                      Vanliga orsaker är försämrad ekonomi, missade betalningar eller avtalsbrott.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expertråd från rådgivare</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Anna Svensson, Finansrådgivare</h4>
                    <p className="text-sm text-muted-foreground">
                      "Många företag underskattar vikten av att ha god kontakt med sin bankrådgivare. 
                      Bygg relationen innan du behöver låna - det underlättar hela processen enormt."
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Per Nilsson, Företagsrådgivare</h4>
                    <p className="text-sm text-muted-foreground">
                      "Dokumentation är A och O. Ha alltid uppdaterad bokföring, prognoser och affärsplan. 
                      Det visar professionalitet och ökar trovärdigheten hos långivaren."
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Maria Johansson, Bankchef SME</h4>
                    <p className="text-sm text-muted-foreground">
                      "Vi ser hellre ett mindre lånebelopp som företaget säkert kan hantera än ett stort lån 
                      som skapar finansiell stress. Var realistisk i dina beräkningar."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Sammanfattning - Checklista för företagslån</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-800">Före ansökan:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Tydlig affärsplan och budget
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Uppdaterade ekonomiska rapporter
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Identifierade säkerheter
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Jämfört olika långivare
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-800">Efter beviljat lån:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Använd pengarna enligt planen
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Följ upp och rapportera resultat
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Betala i tid och håll kontakt med banken
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Planera för framtida finansieringsbehov
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-emerald-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Redo att finansiera ditt företags tillväxt?
            </h2>
            <p className="text-xl mb-8">
              Få kostnadsfri rådgivning och hitta bästa finansieringslösningen för ditt företag
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Kostnadsfri rådgivning
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white bg-transparent hover:bg-white hover:text-emerald-600">
                Jämför företagslån
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}