import { Helmet } from "react-helmet-async";
import ModernNavigation from "../components/ModernNavigation";
import LegacyFooter from "../components/LegacyFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExpertProfile from "../components/ExpertProfile";
import { autolink } from "@/lib/autolinkGlossary";
import { TrendingUp, Briefcase, GraduationCap, Target, Users, Globe, Calculator } from "lucide-react";

export default function KarriärGuide() {
  return (
    <>
      <Helmet>
        <title>Karriärguide: Hur Får Man 100 000 kr i Månaden? - Finansguiden</title>
        <meta name="description" content="Konkreta strategier för att nå 100 000 kr/månad. Vilka utbildningar, branscher och karriärvägar leder till höga löner? Expertråd och riktiga exempel." />
        <link rel="canonical" href="https://finansguiden.se/karriar-100k-guide" />
        <meta property="og:title" content="Karriärguide: Hur Får Man 100 000 kr i Månaden?" />
        <meta property="og:description" content="Upptäck de konkreta strategierna för att nå 100k+ i månaden. Från utbildningsval till branschbyten - vi visar vägen till höga löner." />
        <meta property="og:url" content="https://finansguiden.se/karriar-100k-guide" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://finansguiden.se/images/og-karriar.png" />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Karriärguide: Hur Får Man 100 000 kr i Månaden?",
          "description": "Konkreta strategier för att nå 100 000 kr/månad. Vilka utbildningar, branscher och karriärvägar leder till höga löner?",
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
            "@id": "https://finansguiden.se/karriar-100k-guide"
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
              <TrendingUp className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="text-sm">
                Karriärguide 2025
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hur Får Man 100 000 kr i Månaden?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {autolink("Konkreta strategier, utbildningsvägar och karriärtips från verkliga experter som nått målet. Lär dig vad som verkligen krävs för att tjäna över 100k i månaden.")}
            </p>
          </section>

          {/* Success Metrics */}
          <section className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">8-12 år</div>
                <p className="text-sm text-muted-foreground">Genomsnittlig tid att nå målet</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Briefcase className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">3-5 st</div>
                <p className="text-sm text-muted-foreground">Antal jobbyten som krävs</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">12%</div>
                <p className="text-sm text-muted-foreground">Av svenska anställda tjänar 100k+</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">85%</div>
                <p className="text-sm text-muted-foreground">Har högskoleexamen</p>
              </CardContent>
            </Card>
          </section>

          {/* Education Paths */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Utbildningsvägar som Leder Till Målet
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Tekniska Utbildningar
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold">Civilingenjör Teknisk Fysik</h4>
                        <p className="text-sm text-muted-foreground">KTH, Chalmers, LTH</p>
                      </div>
                      <Badge variant="default" className="bg-green-500">Toppval</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold">Industriell Ekonomi</h4>
                        <p className="text-sm text-muted-foreground">Kombination teknik + ekonomi</p>
                      </div>
                      <Badge variant="secondary">Stark kandidat</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold">Datateknik/IT</h4>
                        <p className="text-sm text-muted-foreground">Speciellt AI och mjukvaruutveckling</p>
                      </div>
                      <Badge variant="outline">Växande</Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold mb-2">Karriärvägar:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Tech-konsult: 80-150k/månad</li>
                      <li>• Tech Lead: 90-130k/månad</li>
                      <li>• CTO större företag: 120-200k/månad</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    Ekonomi & Juridik
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gold-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold">Handelshögskolan Stockholm</h4>
                        <p className="text-sm text-muted-foreground">Direktingång till finansvärlden</p>
                      </div>
                      <Badge variant="default" className="bg-yellow-500">Elit</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold">Juristexamen</h4>
                        <p className="text-sm text-muted-foreground">Advokatbyrå eller företagsjurist</p>
                      </div>
                      <Badge variant="secondary">Säkert kort</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold">Läkarutbildning</h4>
                        <p className="text-sm text-muted-foreground">Specialist inom eftertraktade områden</p>
                      </div>
                      <Badge variant="outline">Långsiktig</Badge>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-semibold mb-2">Karriärvägar:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Investment banker: 100-300k/månad</li>
                      <li>• Senior jurist: 90-150k/månad</li>
                      <li>• Specialistläkare: 80-120k/månad</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Industry Analysis */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Bästa Branscherna för Höga Löner
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Tech & IT</CardTitle>
                  <p className="text-sm text-muted-foreground">Snabbast växande sektorn</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Mjukvaruutvecklare</span>
                      <span className="text-sm font-semibold">60-100k</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Tech-säljare</span>
                      <span className="text-sm font-semibold">80-150k</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">AI/ML-specialist</span>
                      <span className="text-sm font-semibold">90-160k</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Tech-entreprenör</span>
                      <span className="text-sm font-semibold">100-500k+</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-xs text-green-700">
                      ✓ Högst lönetillväxt ✓ Flexibla arbetstider ✓ Remote-möjligheter
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">Finans & Konsulting</CardTitle>
                  <p className="text-sm text-muted-foreground">Traditionellt välbetalt</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Managementkonsult</span>
                      <span className="text-sm font-semibold">80-120k</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Investment banker</span>
                      <span className="text-sm font-semibold">100-300k</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Private equity</span>
                      <span className="text-sm font-semibold">150-500k</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">CFO större företag</span>
                      <span className="text-sm font-semibold">120-250k</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-red-50 rounded-lg">
                    <p className="text-xs text-red-700">
                      ⚠ Långa arbetsdagar ⚠ Hög stress ⚠ Tuff konkurrens
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-purple-600">Specialistyrken</CardTitle>
                  <p className="text-sm text-muted-foreground">Nischkompetens</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Specialistläkare</span>
                      <span className="text-sm font-semibold">80-120k</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Piloten (SAS+)</span>
                      <span className="text-sm font-semibold">90-140k</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Kärnkraftsingenjör</span>
                      <span className="text-sm font-semibold">85-130k</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Rättspsykiatriker</span>
                      <span className="text-sm font-semibold">100-150k</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                    <p className="text-xs text-purple-700">
                      ✓ Hög trygghet ✓ Svår att ersätta ✓ Lång utbildning krävs
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Career Strategies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Beprövade Karriärstrategier
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Jobbbyte-strategin
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Optimal frekvens: Vart 2-4 år</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>År 1-2: Samma företag</span>
                        <Badge variant="secondary">+5-10%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>År 3: Nytt företag</span>
                        <Badge variant="default" className="bg-green-500">+15-25%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>År 5: Nytt företag igen</span>
                        <Badge variant="default" className="bg-green-500">+20-30%</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold">Viktiga principer:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• {autolink("Förhandla alltid vid nytt jobb")}</li>
                      <li>• Bygg nätverk innan du behöver det</li>
                      <li>• Dokumentera dina prestationer</li>
                      <li>• Sök aktivt även när du trivs</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Internationell Karriär
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Löneökning: 30-100%</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>London (finans)</span>
                        <Badge variant="default" className="bg-green-500">+50-100%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>New York (tech/finans)</span>
                        <Badge variant="default" className="bg-green-500">+60-120%</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Schweiz (alla branscher)</span>
                        <Badge variant="default" className="bg-green-500">+40-80%</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold">Strategiska fördelar:</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Internationell erfarenhet värderas högt</li>
                      <li>• Bredare nätverk och perspektiv</li>
                      <li>• Bättre förhandlingposition vid återkomst</li>
                      <li>• {autolink("Möjlighet till skatteoptimering")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Entrepreneurship */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Eget Företag - Snabbaste Vägen?
            </h2>
            
            <Card>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <h4 className="font-semibold mb-2">Konsultverksamhet</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Säljj din spetskompetens för 1500-3000 kr/timme
                    </p>
                    <Badge variant="default" className="bg-green-500">Lägst risk</Badge>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💡</span>
                    </div>
                    <h4 className="font-semibold mb-2">SaaS-företag</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {autolink("Mjukvarulösningar med återkommande intäkter")}
                    </p>
                    <Badge variant="secondary">Måttlig risk</Badge>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h4 className="font-semibold mb-2">VC-backed startup</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Potential för miljoner, men hög risk för misslyckande
                    </p>
                    <Badge variant="destructive">Hög risk</Badge>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-xl">⚖️</span>
                    Skatteoptimering för egenföretagare
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold">Lön upp till brytpunkten:</h5>
                      <p>~56 000 kr/månad (låg skatt)</p>
                    </div>
                    <div>
                      <h5 className="font-semibold">Resten som utdelning:</h5>
                      <p>~20% skatt istället för ~50%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Expert Profile */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Vår Karriärexpert
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <ExpertProfile 
                name="Marcus Lindström"
                title="Senior Karriärrådgivare & Executive Coach"
                experience="12 års erfarenhet av karriärutveckling för chefer"
                specialization={[
                  "Löneförhandling",
                  "Karriärplanering",
                  "Ledarskapsutveckling",
                  "Executive search"
                ]}
                credentials={[
                  "MBA från INSEAD",
                  "Certifierad Executive Coach (ICF)",
                  "Tidigare Partner på managementkonsultfirma",
                  "Hjälpt 500+ personer nå 100k+ löner"
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
                  Beräkna Din Karriärväg
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {autolink("Använd våra verktyg för att planera din karriär och beräkna vad olika val betyder för din ekonomi på lång sikt.")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/ekonomiska-lifehacks" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                    Ekonomiska Tips
                  </a>
                  <a href="/svenska-inkomster-2025" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-primary/10 transition-colors">
                    Jämför Inkomster
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