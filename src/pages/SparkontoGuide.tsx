import { Helmet } from "react-helmet-async";
import ModernNavigation from "../components/ModernNavigation";
import LegacyFooter from "../components/LegacyFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExpertProfile from "../components/ExpertProfile";
import { autolink } from "@/lib/autolinkGlossary";
import { Banknote, TrendingUp, Shield, Star, CheckCircle, AlertTriangle, Calculator } from "lucide-react";

export default function SparkontoGuide() {
  const sparkonton = [
    {
      bank: "SBAB",
      räntesats: "2,50%",
      minBelopp: "0 kr",
      maxBelopp: "10 miljoner kr",
      fria_uttag: "Obegränsat",
      fördelar: ["Grym app med daglig räntevisning", "Statligt ägt - hög trygghet", "Inga avgifter", "Snabb överföring"],
      nackdelar: ["Endast online", "Begränsad fysisk service"],
      rating: 5,
      rekommendation: "Toppval för de flesta"
    },
    {
      bank: "Sparbanken Skåne",
      räntesats: "2,00%",
      minBelopp: "0 kr", 
      maxBelopp: "Ingen gräns",
      fria_uttag: "Obegränsat",
      fördelar: ["Lokalt förankrat", "Bra kundservice", "Enkelt och okrångligt", "Fysiska kontor"],
      nackdelar: ["Lägre ränta än konkurrenter", "Begränsat till Skåne"],
      rating: 4,
      rekommendation: "Bra för Skåne-bor"
    },
    {
      bank: "SevenDay Bank",
      räntesats: "2,30%",
      minBelopp: "0 kr",
      maxBelopp: "2 miljoner kr", 
      fria_uttag: "4 per månad",
      fördelar: ["Konkurrensduktig ränta", "Norsk bankgaranti", "Etablerad nätbank"],
      nackdelar: ["Krånglig setup med pappersblanketter", "Norsk/svensk garanti-förvirring", "Begränsade uttag"],
      rating: 3,
      rekommendation: "OK men krångligare setup"
    },
    {
      bank: "Skandiabanken",
      räntesats: "1,85%",
      minBelopp: "0 kr",
      maxBelopp: "Ingen gräns",
      fria_uttag: "Obegränsat",
      fördelar: ["Bred produktpalett", "Bunden sparande med högre ränta", "Välkänt varumärke"],
      nackdelar: ["Lägre ränta på rörligt sparande", "Kan kännas opersonligt"],
      rating: 3,
      rekommendation: "Funkar för helkundskap"
    },
    {
      bank: "Landshypotek",
      räntesats: "2,60%",
      minBelopp: "0 kr",
      maxBelopp: "5 miljoner kr",
      fria_uttag: "Obegränsat", 
      fördelar: ["Högst ränta 2025", "Snabb kontoskapande online", "Ingen bindningstid"],
      nackdelar: ["Mindre känt varumärke", "Begränsad kundservice", "Kan ändra ränta snabbt"],
      rating: 4,
      rekommendation: "För räntejägare"
    }
  ];

  const bundetSparande = [
    {
      bank: "Skandiabanken",
      tid: "1 år",
      räntesats: "3,20%",
      minBelopp: "500 000 kr",
      kommentar: "Bra för större belopp och säker avkastning"
    },
    {
      bank: "Handelsbanken", 
      tid: "3 månader",
      räntesats: "3,00%",
      minBelopp: "50 000 kr",
      kommentar: "Kortare bindning, men setupkrångel + avgift 300 kr/år"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bästa Sparkontot 2025: Jämförelse av Räntor och Villkor - Finansguiden</title>
        <meta name="description" content="Hitta det bästa sparkontot 2025. Jämför räntor, villkor och användarerfarenheter från SBAB, Landshypotek, SevenDay och fler banker." />
        <link rel="canonical" href="https://finansguiden.se/sparkonto-guide-2025" />
        <meta property="og:title" content="Bästa Sparkontot 2025: Komplett Guide" />
        <meta property="og:description" content="Jämför sparkonton från alla stora banker. Aktuella räntor, villkor och riktiga användarrecensioner från svenska sparare." />
        <meta property="og:url" content="https://finansguiden.se/sparkonto-guide-2025" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://finansguiden.se/images/og-sparkonto.png" />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Bästa Sparkontot 2025: Jämförelse av Räntor och Villkor",
          "description": "Hitta det bästa sparkontot 2025. Jämför räntor, villkor och användarerfarenheter från SBAB, Landshypotek, SevenDay och fler banker.",
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
            "@id": "https://finansguiden.se/sparkonto-guide-2025"
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
              <Banknote className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="text-sm">
                Uppdaterad 2025
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Bästa Sparkontot 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {autolink("Hitta sparkontot som ger dig mest för pengarna. Jämför räntor, villkor och få riktiga användarrecensioner från svenska sparare.")}
            </p>
          </section>

          {/* Quick Stats */}
          <section className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">2,60%</div>
                <p className="text-sm text-muted-foreground">Högsta räntan (Landshypotek)</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">1,95M kr</div>
                <p className="text-sm text-muted-foreground">Insättningsgaranti per bank</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">SBAB</div>
                <p className="text-sm text-muted-foreground">Community-favorit</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">5 st</div>
                <p className="text-sm text-muted-foreground">Rekommenderade banker</p>
              </CardContent>
            </Card>
          </section>

          {/* Bank Comparison */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Detaljerad Jämförelse av Sparkonton
            </h2>
            
            <div className="space-y-6">
              {sparkonton.map((bank, index) => (
                <Card key={index} className={`${bank.rating === 5 ? 'border-green-500 border-2' : ''} hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{bank.bank}</CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-2xl font-bold text-green-600">{bank.räntesats}</div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < bank.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                        </div>
                        <Badge 
                          variant={bank.rating === 5 ? 'default' : 'secondary'}
                          className={bank.rating === 5 ? 'bg-green-500' : ''}
                        >
                          {bank.rekommendation}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Villkor & Begränsningar</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Minsta belopp:</span>
                            <span className="font-medium">{bank.minBelopp}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Maxbelopp:</span>
                            <span className="font-medium">{bank.maxBelopp}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Fria uttag:</span>
                            <span className="font-medium">{bank.fria_uttag}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">För- och Nackdelar</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="text-sm font-medium text-green-600 mb-1">Fördelar:</h5>
                            <ul className="text-xs space-y-1">
                              {bank.fördelar.map((fördel, i) => (
                                <li key={i} className="flex items-start gap-1">
                                  <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{fördel}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium text-red-600 mb-1">Nackdelar:</h5>
                            <ul className="text-xs space-y-1">
                              {bank.nackdelar.map((nackdel, i) => (
                                <li key={i} className="flex items-start gap-1">
                                  <AlertTriangle className="h-3 w-3 text-red-500 mt-0.5 flex-shrink-0" />
                                  <span>{nackdel}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Bound Savings */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Bundet Sparande - Högre Ränta med Bindningstid
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {bundetSparande.map((sparande, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{sparande.bank}</span>
                      <Badge variant="outline">{sparande.tid} bindning</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{sparande.räntesats}</div>
                      <p className="text-sm text-muted-foreground">Garanterad ränta</p>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Minsta belopp:</span>
                        <span className="font-medium">{sparande.minBelopp}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bindningstid:</span>
                        <span className="font-medium">{sparande.tid}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs text-blue-700">{sparande.kommentar}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* User Testimonials */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Vad Säger Riktiga Användare?
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">VTJ</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Community-medlem</h4>
                      <p className="text-xs text-muted-foreground">SevenDay Bank-användare</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic mb-3">
                    {autolink("\"Jag har haft sparkonto hos SevenDay länge och jag har inget att klaga på. Inte högst och inte lägst ränta men något krångligt att ansluta insättning och uttagskonto.\"")}
                  </p>
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">AC</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Chattstammis</h4>
                      <p className="text-xs text-muted-foreground">Sparbanken Skåne</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic mb-3">
                    "Har valt det kontot min bank kan erbjuda med högst ränta och fria uttag. Sparbanken Skånes Skånekonto med 2% ränta just nu. Smidigt enkelt okrångligt. 😊"
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">I1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Investeraren1</h4>
                      <p className="text-xs text-muted-foreground">SBAB-användare</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm italic mb-3">
                    {autolink("\"SBAB 2,5% f.n. Grym app där man ser räntan ticka på dag för dag. Rekommenderas varmt!\"")}
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Selection Guide */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Vilket Sparkonto Passar Dig?
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    För Räntejägare
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Rekommendation: Landshypotek Bank</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ Högsta räntan: 2,60%</li>
                      <li>✓ Inga avgifter eller bindningstid</li>
                      <li>✓ Snabb setup online</li>
                      <li>⚠ Mindre känt varumärke</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Perfekt om du vill maximera räntan och är bekväm med mindre banker.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                    För Trygghetsälskare
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Rekommendation: SBAB</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ Statligt ägt - maximal trygghet</li>
                      <li>✓ Bra ränta: 2,50%</li>
                      <li>✓ Fantastisk app</li>
                      <li>✓ Stor och etablerad bank</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {autolink("Bästa kombinationen av trygghet, ränta och användarupplevelse.")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Risk Warning */}
          <section className="mb-12">
            <Card className="border-yellow-500 bg-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-700">
                  <AlertTriangle className="h-5 w-5" />
                  Viktigt att Veta om Sparkonton 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Insättningsgaranti</h4>
                    <p className="text-muted-foreground">
                      {autolink("Alla svenska banker täcks av insättningsgaranti upp till 1,95 miljoner kr per bank. Sprid större belopp över flera banker.")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ränteförändringar</h4>
                    <p className="text-muted-foreground">
                      Räntorna kan ändras när som helst. Följ med utvecklingen och var beredd att byta bank vid behov.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Skattekonsekvenser</h4>
                    <p className="text-muted-foreground">
                      {autolink("Ränteintäkter beskattas som kapitalinkomst (30%). Tänk på detta när du jämför med ISK.")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Inflation</h4>
                    <p className="text-muted-foreground">
                      Med inflation runt 2-3% ger sparkonton reell avkastning efter skatt på 0-1%.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Expert Profile */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Vår Sparexpert
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <ExpertProfile 
                name="Lisa Andersson"
                title="Privatekonom & Sparexpert"
                experience="10 års erfarenhet av banking och privatsparande"
                specialization={[
                  "Sparkonton & bankprodukter",
                  "Ränteanalys",
                  "Bankförhandling",
                  "Sparstrategier"
                ]}
                credentials={[
                  "Civilekonom med inriktning bank & finans",
                  "Tidigare rådgivare på storbank",
                  "Certifierad finansiell rådgivare",
                  "Författare till 3 böcker om privatekonomi"
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
                  Beräkna Din Ränteintäkt
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {autolink("Använd vår räntekalkylator för att se hur mycket du kan tjäna på olika sparkonton och jämför med andra placeringsalternativ.")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/privatlan" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                    Räntekalkylator
                  </a>
                  <a href="/ekonomiska-lifehacks" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-primary/10 transition-colors">
                    Fler Spartips
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