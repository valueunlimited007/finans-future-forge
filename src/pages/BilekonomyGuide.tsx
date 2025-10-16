import { Helmet } from "react-helmet-async";
import SimpleNavigation from "../components/SimpleNavigation";
import LegacyFooter from "../components/LegacyFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExpertProfile from "../components/ExpertProfile";
import { autolink } from "@/lib/autolinkGlossary";
import { Car, Calculator, TrendingDown, Zap, DollarSign, Clock } from "lucide-react";

export default function BilekonomyGuide() {
  const carCosts = [
    {
      category: "Fasta kostnader/år",
      items: [
        { name: "Försäkring (helforsäkring)", cost: "8 000 - 15 000 kr" },
        { name: "Fordonsskatt", cost: "2 000 - 8 000 kr" },
        { name: "Besiktning", cost: "500 kr" },
        { name: "Värdeminskning", cost: "15 000 - 40 000 kr" }
      ]
    },
    {
      category: "Rörliga kostnader/år",
      items: [
        { name: "Bränsle (1 500 mil/år)", cost: "15 000 - 25 000 kr" },
        { name: "Service & reparationer", cost: "5 000 - 15 000 kr" },
        { name: "Däck", cost: "2 000 - 4 000 kr" },
        { name: "Parkeringsavgifter", cost: "3 000 - 12 000 kr" }
      ]
    }
  ];

  const alternatives = [
    {
      option: "Kollektivtrafik + Bilpool",
      monthlyCost: "2 500 - 4 000 kr",
      savings: "30 000 - 60 000 kr/år",
      pros: ["Ingen värdeminskning", "Flexibilitet", "Miljövänligt"],
      cons: ["Begränsad tillgänglighet", "Planering krävs"]
    },
    {
      option: "Cykel + Kollektivtrafik",
      monthlyCost: "500 - 1 500 kr", 
      savings: "45 000 - 70 000 kr/år",
      pros: ["Hälsa", "Minimal kostnad", "Snabbt i city"],
      cons: ["Väderberoende", "Begränsad räckvidd"]
    },
    {
      option: "Begagnad bil (5-10 år)",
      monthlyCost: "3 000 - 5 000 kr",
      savings: "15 000 - 30 000 kr/år",
      pros: ["Flexibilitet", "Lägre värdeminskning"],
      cons: ["Högre reparationskostnader"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bilekonomi 2025: Komplett Guide - Verklig Kostnad att Äga Bil - Finansguiden</title>
        <meta name="description" content="Fullständig guide till bilekonomin 2025. Verkliga kostnader, smarta alternativ och hur du sparar 30 000-60 000 kr per år på transport." />
        <link rel="canonical" href="https://finansguiden.se/bilekonomy-guide-2025" />
        <meta property="og:title" content="Bilekonomi 2025: Verklig Kostnad att Äga Bil" />
        <meta property="og:description" content="Komplett genomgång av bilkostnader och smarta transportalternativ som sparar tusentals kronor per år." />
        <meta property="og:url" content="https://finansguiden.se/bilekonomy-guide-2025" />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Bilekonomi 2025: Komplett Guide - Verklig Kostnad att Äga Bil",
          "description": "Fullständig guide till bilekonomin 2025. Verkliga kostnader, smarta alternativ och hur du sparar 30 000-60 000 kr per år på transport.",
          "author": {
            "@type": "Organization",
            "name": "Finansguiden"
          },
          "publisher": {
            "@type": "Organization", 
            "name": "Finansguiden"
          },
          "datePublished": "2025-01-19",
          "dateModified": "2025-01-19"
        })}
        </script>
      </Helmet>

      <SimpleNavigation />

      <main className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Car className="h-8 w-8 text-blue-600" />
              <Badge variant="secondary" className="text-sm">
                Transport & Ekonomi
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Bilekonomi 2025: Verkliga Kostnader
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {autolink("En ögonöppnande genomgång av vad det egentligen kostar att äga bil i Sverige - plus smarta alternativ som kan spara dig 30 000-60 000 kr per år.")}
            </p>
          </section>

          {/* Quick Stats */}
          <section className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">50-100k</div>
                <p className="text-sm text-muted-foreground">Årskostnad per bil</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingDown className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">30-50%</div>
                <p className="text-sm text-muted-foreground">Värdeminskning år 1</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">2%</div>
                <p className="text-sm text-muted-foreground">Av tiden används</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Calculator className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">4-7kr</div>
                <p className="text-sm text-muted-foreground">Per körd kilometer</p>
              </CardContent>
            </Card>
          </section>

          {/* Detailed Cost Breakdown */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Fullständig Kostnadsanalys
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {carCosts.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                          <span className="text-sm font-medium">{item.name}</span>
                          <Badge variant="outline" className="font-semibold">{item.cost}</Badge>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Totalt {category.category.toLowerCase()}:</span>
                        <span className="text-lg font-bold text-orange-700">
                          {category.category.includes("Fasta") ? "25 000 - 63 500 kr" : "25 000 - 56 000 kr"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Card className="max-w-md mx-auto bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-700 mb-2">Total årskostnad</h3>
                  <div className="text-3xl font-bold text-red-800">50 000 - 119 500 kr</div>
                  <p className="text-sm text-red-600 mt-2">Det är 4 200 - 10 000 kr per månad!</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Smart Alternatives */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Smarta Alternativ som Sparar Pengar
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {alternatives.map((alt, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{alt.option}</CardTitle>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary">{alt.monthlyCost}</Badge>
                      <Badge variant="default" className="bg-green-500">{alt.savings}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-green-700">Fördelar:</h4>
                        <ul className="space-y-1">
                          {alt.pros.map((pro, proIndex) => (
                            <li key={proIndex} className="text-sm flex items-center gap-2">
                              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-orange-700">Nackdelar:</h4>
                        <ul className="space-y-1">
                          {alt.cons.map((con, conIndex) => (
                            <li key={conIndex} className="text-sm flex items-center gap-2">
                              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Electric vs Gasoline */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Elbil vs Bensinbil - Ekonomisk Jämförelse
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-blue-500" />
                    Elbil (Tesla Model 3, VW ID.4)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Inköpspris (ny)</span>
                      <Badge>400 000 - 600 000 kr</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Miljöbonus</span>
                      <Badge className="bg-green-500">-70 000 kr</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Bränslekostnad/år (1500 mil)</span>
                      <Badge>3 000 - 6 000 kr</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Service/år</span>
                      <Badge>1 000 - 3 000 kr</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Försäkring/år</span>
                      <Badge>8 000 - 12 000 kr</Badge>
                    </div>
                    
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <div className="flex justify-between font-semibold">
                        <span>Total driftskostnad/år:</span>
                        <span className="text-blue-700">12 000 - 21 000 kr</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-6 w-6 text-gray-500" />
                    Bensinbil (VW Golf, Toyota Corolla)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Inköpspris (ny)</span>
                      <Badge>250 000 - 400 000 kr</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Miljöbonus</span>
                      <Badge variant="secondary">0 kr</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Bränslekostnad/år (1500 mil)</span>
                      <Badge>15 000 - 25 000 kr</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Service/år</span>
                      <Badge>3 000 - 8 000 kr</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Försäkring/år</span>
                      <Badge>6 000 - 10 000 kr</Badge>
                    </div>
                    
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between font-semibold">
                        <span>Total driftskostnad/år:</span>
                        <span className="text-gray-700">24 000 - 43 000 kr</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-6 text-center">
              <Card className="max-w-lg mx-auto bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-green-700 mb-2">Elbil sparar per år:</h3>
                  <div className="text-2xl font-bold text-green-800">12 000 - 22 000 kr</div>
                  <p className="text-sm text-green-600 mt-2">Återbetalningstid: 3-7 år beroende på körning</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Expert Profile */}
          <section className="mb-12">
            <ExpertProfile
              name="Lars Andersson"
              title="Transportekonom & Hållbarhetsexpert"
              experience="15+ års erfarenhet av transportsystem och bilekonomi"
              specialization={[
                "Transportekonomi",
                "Elbilsanalys", 
                "Hållbar mobilitet",
                "Bilpoolsverksamhet"
              ]}
              credentials={[
                "Civilingenjör Transport & Logistik, KTH",
                "Transportekonom, Trafikverket 2010-2020",
                "Projektledare för Stockholms bilpoolsutredning",
                "Författare: 'Framtidens Transport' (2023)"
              ]}
            />
          </section>

          {/* Action Steps */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Din Handlingsplan för Smarter Transport
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Steg 1-2: Analysera & Testa (Månad 1)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</span>
                      <span>Beräkna din verkliga bilkostnad (använd vår kalkylator)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">2</span>
                      <span>Testa kollektivtrafik + bilpool i 2 veckor</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">3</span>
                      <span>Dokumentera alla resor och kostnader</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Steg 3-4: Beslut & Optimering (Månad 2-3)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">4</span>
                      <span>Jämför total kostnad vs alternativ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">5</span>
                      <span>Fatta beslut baserat på data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">6</span>
                      <span>Investera besparingarna i ISK eller extra amortering</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

        </div>
      </main>

      <LegacyFooter />
    </>
  );
}