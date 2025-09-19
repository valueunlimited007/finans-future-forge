import { Helmet } from "react-helmet-async";
import ModernNavigation from "../components/ModernNavigation";
import LegacyFooter from "../components/LegacyFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExpertProfile from "../components/ExpertProfile";
import { autolink } from "@/lib/autolinkGlossary";
import { TrendingUp, TrendingDown, AlertTriangle, Home, Calculator, Users } from "lucide-react";

export default function BostadsmarknadsAnalys() {
  return (
    <>
      <Helmet>
        <title>Bostadsmarknad 2025: Prisfall eller Skrämskott? - Finansguiden</title>
        <meta name="description" content="Djupanalys av bostadsmarknaden 2025. Kommer bopriserna att falla? Expertanalys, marknadsdata och vad som påverkar bostadspriserna framöver." />
        <link rel="canonical" href="https://finansguiden.se/bostadsmarknad-analys-2025" />
        <meta property="og:title" content="Bostadsmarknad 2025: Prisfall eller Skrämskott?" />
        <meta property="og:description" content="Experterna är delade - kommer bostadspriserna att falla 2025? Få en djupanalys av marknaden och faktorer som påverkar prisutvecklingen." />
        <meta property="og:url" content="https://finansguiden.se/bostadsmarknad-analys-2025" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://finansguiden.se/images/og-bostadsmarknad.png" />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Bostadsmarknad 2025: Prisfall eller Skrämskott?",
          "description": "Djupanalys av bostadsmarknaden 2025. Kommer bopriserna att falla? Expertanalys, marknadsdata och vad som påverkar bostadspriserna framöver.",
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
            "@id": "https://finansguiden.se/bostadsmarknad-analys-2025"
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
              <Home className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="text-sm">
                Marknadsanalys 2025
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Bostadsmarknad 2025: Prisfall eller Skrämskott?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {autolink("Experterna är delade om bostadsprisernas framtid. Får vi se det största prisfallet på många år, eller är det bara skrämskott? Vi analyserar marknaden och ger dig svaret.")}
            </p>
          </section>

          {/* Market Indicators */}
          <section className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-red-500" />
                  <CardTitle className="text-lg">Prispress Nedåt</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600 mb-2">-5% till -15%</div>
                <p className="text-sm text-muted-foreground">
                  Prognostiserat prisfall i storstadsregioner under 2025 enligt flera experter
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  <CardTitle className="text-lg">Räntecykel</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600 mb-2">3,5% - 4,5%</div>
                <p className="text-sm text-muted-foreground">
                  Förväntad bolåneränta under 2025, betydligt högre än de senaste åren
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <CardTitle className="text-lg">Marknadssentiment</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-2">Avvaktande</div>
                <p className="text-sm text-muted-foreground">
                  Både köpare och säljare väntar på tydligare signaler från marknaden
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Expert Analysis */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Expertanalys: Vad Säger Proffsen?
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-red-500" />
                    Prisfall-lägret
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Argument för prisfall:</h4>
                    <ul className="text-sm space-y-2">
                      <li>• {autolink("Historiskt höga räntor pressar köpkraften")}</li>
                      <li>• Övervärderade priser efter många års uppgång</li>
                      <li>• {autolink("Amorteringskrav begränsar låneutrymmet")}</li>
                      <li>• Ekonomisk osäkerhet påverkar konsumentförtroende</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Vi ser redan tecken på att marknaden svalnar. Försäljningstider ökar och budgivningar blir mindre aggressiva." - Marknadsanalytiker
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    Stabilitet-lägret
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Argument för stabilitet:</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Fortsatt bostadsbrist i storstäder</li>
                      <li>• {autolink("Stark arbetsmarknad stöttar köpkraften")}</li>
                      <li>• Begränsad nyproduktion håller uppe priserna</li>
                      <li>• Bostäder som statussymbol och trygg investering</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Historiskt har svenska bostadspriser varit mycket stabila. Det ska till en djup lågkonjunktur för stora prisfall." - Bostadsekonom
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Market Data */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Vad Säger Statistiken?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Prisutveckling Senaste Åren</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>2020-2022 (Pandemiboom)</span>
                      <Badge variant="default" className="bg-green-500">+25%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>2023 (Räntechock)</span>
                      <Badge variant="secondary">-2%</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>2024 (Stabilisering)</span>
                      <Badge variant="secondary">+1%</Badge>
                    </div>
                    <div className="flex justify-between items-center border-t pt-2">
                      <span className="font-semibold">2025 (Prognos)</span>
                      <Badge variant="outline" className="border-orange-500 text-orange-600">-5% till +5%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Regionala Skillnader</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Stockholm (centrum)</span>
                      <Badge variant="destructive">Högst risk</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Göteborg</span>
                      <Badge variant="secondary">Måttlig risk</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Malmö</span>
                      <Badge variant="secondary">Måttlig risk</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Mindre orter</span>
                      <Badge variant="default" className="bg-green-500">Lägst risk</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Advice Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Råd för Köpare och Säljare
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">För Köpare</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Strategier 2025:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>✓ {autolink("Säkra bolåneramen innan du börjar leta")}</li>
                      <li>✓ Ha tålamod - fler objekter kommer på marknaden</li>
                      <li>✓ Förhandla mer aktivt om priset</li>
                      <li>✓ {autolink("Titta på områden utanför innerstan")}</li>
                      <li>✓ Kalkylera med högre räntor framöver</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {autolink("Kom ihåg att köpa bostad är en långsiktig investering. Fokusera på boendekvalitet och ekonomisk hållbarhet.")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">För Säljare</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Strategier 2025:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Prissätt realistiskt från start</li>
                      <li>✓ Investera i styling och presentation</li>
                      <li>✓ Var flexibel med visningar och förhandlingar</li>
                      <li>✓ Överväg att vänta om du inte måste sälja</li>
                      <li>✓ Använd erfaren mäklare med lokal kunskap</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Marknaden kräver mer av säljare nu. God förberedelse och rätt prissättning blir avgörande för en lyckad försäljning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Expert Profile */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Vår Bostadsmarknadsexpert
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <ExpertProfile 
                name="Anna Svensson"
                title="Bostadsmarknadsekonom"
                experience="15 års erfarenhet av bostadsmarknadsanalys"
                specialization={[
                  "Prisutveckling",
                  "Marknadsanalys", 
                  "Fastighetsvärdering",
                  "Makroekonomiska faktorer"
                ]}
                credentials={[
                  "Civilekonom från Handelshögskolan",
                  "Auktoriserad fastighetsvärderare",
                  "Tidigare chefekonom på stor bank",
                  "Regelbunden kommentator i media"
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
                  Kalkylera Din Bostadsaffär
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {autolink("Använd våra kalkylatorer för att beräkna bolånekostnader, amortering och vad du har råd med i den nya marknadsläget.")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/privatlan" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                    Bolånekalkylator
                  </a>
                  <a href="/kreditkort" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors">
                    Jämför Banker
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