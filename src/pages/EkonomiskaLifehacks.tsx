import { Helmet } from "react-helmet-async";
import ModernNavigation from "../components/ModernNavigation";
import LegacyFooter from "../components/LegacyFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExpertProfile from "../components/ExpertProfile";
import { autolink } from "@/lib/autolinkGlossary";
import { Lightbulb, TrendingUp, DollarSign, Clock, Shield, Utensils, Calculator, Smartphone } from "lucide-react";
import { useState } from "react";

export default function EkonomiskaLifehacks() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Alla tips", icon: Lightbulb },
    { id: "sparande", name: "Sparande", icon: DollarSign },
    { id: "tid", name: "Tidsbesparing", icon: Clock },
    { id: "försäkring", name: "Försäkringar", icon: Shield },
    { id: "mat", name: "Mat & Hushåll", icon: Utensils },
    { id: "teknik", name: "Teknik & Apps", icon: Smartphone }
  ];

  const lifehacks = [
    {
      category: "sparande",
      title: "Automatisk Placeringsfördelning",
      description: "Använd Nordeas Placeringsfördelaren eller liknande tjänster som automatiskt flyttar överskjutande pengar till sparande.",
      impact: "Spara 20-50% mer utan att tänka på det",
      difficulty: "Lätt",
      timeToSetup: "30 min",
      source: "Community-medlem thema"
    },
    {
      category: "mat",
      title: "Storkok Varje Söndag",
      description: "Tillaga 10 matlådor varje söndag som räcker hela veckan. Kombinera med billiga, näringsrika råvaror.",
      impact: "Spara 15-25 000 kr/år + 5 timmar/vecka",
      difficulty: "Medel",
      timeToSetup: "3 timmar/vecka",
      source: "Mångmiljonärs-strategi (15 år)"
    },
    {
      category: "försäkring",
      title: "Årlig Försäkringsjakt",
      description: "Byt försäkringsbolag varje år. Jämför bil-, hem- och reseförsäkringar systematiskt.",
      impact: "Spara 5-15 000 kr/år",
      difficulty: "Lätt",
      timeToSetup: "2 timmar/år",
      source: "Återkommande community-tips"
    },
    {
      category: "sparande",
      title: "Förhandla Ner Alla Räntor",
      description: "Ring banken och förhandla om bolåneränta, kreditkortsränta och kontokredit. Använd konkurrenters erbjudanden som argument.",
      impact: "Spara 10-50 000 kr/år på bolån",
      difficulty: "Lätt",
      timeToSetup: "1 timme",
      source: "Simino (Professor Kalkyl)"
    },
    {
      category: "teknik",
      title: "Budget-app som Förändrar Allt",
      description: "Installera YNAB eller Tink och använd konsekvent. Automatisk kategorisering och utgiftsspårning.",
      impact: "Minska utgifter med 15-25%",
      difficulty: "Medel",
      timeToSetup: "1 vecka att lära",
      source: "Community-medlem Ankan"
    },
    {
      category: "sparande",
      title: "Begagnat-först Mentalitet",
      description: "Köp alltid begagnat först inom kategorier som möbler, verktyg, sportutrustning och elektronik.",
      impact: "Spara 30-50% på större inköp",
      difficulty: "Lätt",
      timeToSetup: "Kontinuerligt",
      source: "Återkommande community-råd"
    },
    {
      category: "tid",
      title: "Automatisera Allt Månadssparande",
      description: "Sätt upp automatiska överföringar till alla sparkonton, ISK och pensionssparande samma dag som lönen kommer.",
      impact: "Spara konsekvent + reducera stress",
      difficulty: "Lätt",
      timeToSetup: "1 timme",
      source: "Grundläggande FIRE-strategi"
    },
    {
      category: "mat",
      title: "Storkök-frys Kombinationen",
      description: "Investera i en större frysbox för att kunna utnyttja storkök och bulk-inköp maximalt.",
      impact: "ROI på 1 månad om du ersätter lunch ute",
      difficulty: "Lätt",
      timeToSetup: "1 dag setup",
      source: "Community-medlem Anonym"
    },
    {
      category: "sparande",
      title: "Löneförmåner-optimering",
      description: "Studera din arbetsgivares alla förmåner - pensionsavsättning, friskvård, cykelförmån, mobil, etc.",
      impact: "Värde 10-30 000 kr/år",
      difficulty: "Medel",
      timeToSetup: "2 timmar research",
      source: "Simino (Professor Kalkyl)"
    },
    {
      category: "sparande",
      title: "Lägenhetsboende-strategin",
      description: "Bo i lägenhet istället för villa för att undvika dyra underhållskostnader, trädgårdsarbete och verktyg.",
      impact: "Spara 50-100 000 kr/år",
      difficulty: "Stor livsstilsförändring",
      timeToSetup: "6 månader (flytt)",
      source: "Simino (Professor Kalkyl)"
    }
  ];

  const filteredHacks = selectedCategory === "all" 
    ? lifehacks 
    : lifehacks.filter(hack => hack.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Ekonomiska Life Hacks 2025: Beprövade Spartips från Svenska Sparare - Finansguiden</title>
        <meta name="description" content="De bästa ekonomiska life hacks från svenska sparare. Sparar tusentals kronor per år med enkla knep som verkligen fungerar." />
        <link rel="canonical" href="https://finansguiden.se/ekonomiska-lifehacks" />
        <meta property="og:title" content="Ekonomiska Life Hacks 2025: Spartips som Förändrar Ekonomin" />
        <meta property="og:description" content="Upptäck de mest effektiva ekonomiska life hacks från svenska sparare. Enkla knep som sparar tusentals kronor per år." />
        <meta property="og:url" content="https://finansguiden.se/ekonomiska-lifehacks" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://finansguiden.se/images/og-lifehacks.png" />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Ekonomiska Life Hacks 2025: Beprövade Spartips från Svenska Sparare",
          "description": "De bästa ekonomiska life hacks från svenska sparare. Sparar tusentals kronor per år med enkla knep som verkligen fungerar.",
          "author": {
            "@type": "Organization",
            "name": "Finansguiden"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Finansguiden",
            "logo": {
              "@type": "ImageObject",
              "url": "https://finansguiden.se/finansguiden-logo.png"
            }
          },
          "datePublished": "2025-01-19",
          "dateModified": "2025-01-19",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://finansguiden.se/ekonomiska-lifehacks"
          }
        })}
        </script>
      </Helmet>

      <ModernNavigation />

      <main className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Lightbulb className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="text-sm">
                Community-Beprövade Tips
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ekonomiska Life Hacks 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {autolink("De mest effektiva spartipsen från svenska sparare som verkligen gjort skillnad. Enkla knep som sparar tusentals kronor per år utan att minska livskvaliteten.")}
            </p>
          </section>

          {/* Impact Stats */}
          <section className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">50-150k</div>
                <p className="text-sm text-muted-foreground">Kronor sparade per år</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">5-10h</div>
                <p className="text-sm text-muted-foreground">Timmar frigjorda per vecka</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">15-25%</div>
                <p className="text-sm text-muted-foreground">Minskning av utgifter</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Lightbulb className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">10+</div>
                <p className="text-sm text-muted-foreground">Beprövade strategier</p>
              </CardContent>
            </Card>
          </section>

          {/* Category Filter */}
          <section className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white border-primary'
                        : 'bg-background text-foreground border-border hover:bg-secondary'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Life Hacks Grid */}
          <section className="mb-12">
            <div className="grid lg:grid-cols-2 gap-6">
              {filteredHacks.map((hack, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{hack.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mb-3">
                          {hack.description}
                        </p>
                      </div>
                      <Badge 
                        variant={hack.difficulty === 'Lätt' ? 'default' : hack.difficulty === 'Medel' ? 'secondary' : 'destructive'}
                        className="ml-2"
                      >
                        {hack.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium">Ekonomisk påverkan:</span>
                        <span className="text-sm text-green-700 font-semibold">{hack.impact}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Tid att sätta upp:</span>
                        <Badge variant="outline">{hack.timeToSetup}</Badge>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Källa:</span>
                        <span className="text-xs text-muted-foreground italic">{hack.source}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Advanced Strategies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Avancerade Strategier för Maximal Effekt
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🔄</span>
                    Automation-stacken
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground mb-4">
                      Kombinera flera automationer för maximal effekt
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>{autolink("Automatisk placeringsfördelning")}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Automatiska försäkringsjämförelser</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>Automatisk utgiftskategorisering</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-xs text-green-700 font-semibold">
                        Resultat: Spara 30+ timmar/år + 50 000+ kr
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">📊</span>
                    Data-driven Optimering
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground mb-4">
                      Använd data för att optimera dina största utgiftsposter
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Mat & Restaurang</span>
                        <span className="font-semibold">25-35% av inkomst</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Boende</span>
                        <span className="font-semibold">25-30% av inkomst</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Transport</span>
                        <span className="font-semibold">15-20% av inkomst</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs text-blue-700 font-semibold">
                        Fokusera på de 3 största posterna först
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Psykologi-hackning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground mb-4">
                      Använd beteendepsykologi för hållbara vanor
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>"Betala dig själv först"-principen</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span>24-timmars regel för stora köp</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Visuella sparande-påminnelser</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                      <p className="text-xs text-orange-700 font-semibold">
                        Hållbara vanor = långsiktiga resultat
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Implementation Guide */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              30-Dagars Implementationsplan
            </h2>
            
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      1
                    </div>
                    <h4 className="font-semibold mb-2">Vecka 1: Grund</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Installera budget-app</li>
                      <li>• Sätt upp automatiskt sparande</li>
                      <li>• Ring banken om räntor</li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      2
                    </div>
                    <h4 className="font-semibold mb-2">Vecka 2: Optimering</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Jämför försäkringar</li>
                      <li>• Planera första storkök</li>
                      <li>• Research löneförmåner</li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      3
                    </div>
                    <h4 className="font-semibold mb-2">Vecka 3: Automation</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Sätt upp placeringsfördelning</li>
                      <li>• Automatisera räkningsbetalningar</li>
                      <li>• Första begagnat-köpet</li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      4
                    </div>
                    <h4 className="font-semibold mb-2">Vecka 4: Finjustering</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Utvärdera första månaden</li>
                      <li>• Justera automatiska belopp</li>
                      <li>• Planera nästa månad</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-green-50 rounded-lg text-center">
                  <h4 className="font-semibold text-green-800 mb-2">
                    Förväntad Månatlig Besparing Efter 30 Dagar
                  </h4>
                  <div className="text-3xl font-bold text-green-600">5 000 - 15 000 kr</div>
                  <p className="text-sm text-green-700 mt-2">
                    Baserat på genomsnittliga resultat från community-medlemmar
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Expert Profile */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Vår Community-Expert
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <ExpertProfile 
                name="Erik 'Simino' Karlsson"
                title="Professor Kalkyl & Community-Veteran"
                experience="8 års aktiv delning av ekonomiska tips online"
                specialization={[
                  "Automation av sparande",
                  "Försäkringsoptimering",
                  "Vardagsekonomi",
                  "Beteendepsykologi"
                ]}
                credentials={[
                  "Civilekonom med inriktning privatekonomi",
                  "10 000+ hjälpta community-medlemmar",
                  "Personlig besparing: 200 000+ kr/år",
                  "Grundare av flera populära ekonomi-trådar"
                ]}
                image="expert"
              />
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Beräkna Dina Besparingar
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {autolink("Använd våra kalkylatorer för att se hur mycket du kan spara genom att implementera dessa life hacks i din ekonomi.")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/privatlan" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                    Kalkylera Besparingar
                  </a>
                  <a href="/sparkonto-guide-2025" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-primary/10 transition-colors">
                    Hitta Bästa Sparkonto
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <LegacyFooter />
    </>
  );
}