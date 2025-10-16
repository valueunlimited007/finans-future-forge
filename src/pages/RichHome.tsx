import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PillarGuide from "@/components/PillarGuide";
import ContentStrategy from "@/components/ContentStrategy";
import OffersContainer from "@/components/OffersContainer";
import ConsumerCreditWarning from "@/components/ConsumerCreditWarning";

export default function RichHome() {
  return (
    <>
      <Helmet>
        <title>Finansguiden.se - Jämför lån, kreditkort och finansiering | 2025</title>
        <meta name="description" content="Jämför lån, kreditkort och finansieringslösningar från 50+ långivare. ✓ Bästa räntan ✓ Snabba beslut ✓ Oberoende jämförelser. Hitta rätt finansiering 2025." />
        <link rel="canonical" href="https://finansguiden.se" />
        <meta property="og:title" content="Finansguiden.se - Din guide till bättre ekonomi" />
        <meta property="og:description" content="Jämför lån och finansiering från Sveriges alla långivare. Spara tusenlappar genom att hitta bästa villkoren." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://finansguiden.se" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Finansguiden.se",
            "description": "Sveriges oberoende jämförelsetjänst för lån och finansiella tjänster",
            "url": "https://finansguiden.se"
          })}
        </script>
      </Helmet>

      <main className="pt-[80px] sm:pt-[96px] md:pt-[112px] lg:pt-[128px]">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Jämför lån, kreditkort och finansiering <span className="text-blue-600">2025</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              Se aktuella erbjudanden från ledande långivare – snabbt, enkelt och helt kostnadsfritt. 
              Spara tusenlappar genom att hitta bästa villkoren för din situation.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button asChild size="lg" className="text-lg px-8 bg-blue-600 text-white hover:bg-blue-700 shadow-lg">
                <Link to="/privatlan">Se erbjudanden</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                <Link to="/bostadsmarknad-analys">Läs guider</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Badge variant="secondary">✓ Oberoende jämförelser</Badge>
              <Badge variant="secondary">✓ Alltid kostnadsfritt</Badge>
              <Badge variant="secondary">✓ Snabba besked</Badge>
              <Badge variant="secondary">✓ Inga dolda avgifter</Badge>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 px-4 bg-muted/50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Långivare</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2,9%</div>
                <div className="text-muted-foreground">Lägsta räntan</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-muted-foreground">Snabbaste beskedet</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4,8/5</div>
                <div className="text-muted-foreground">Användarbetyg</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Offers from Adtraction Partners */}
        <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Aktuella erbjudanden</h2>
              <p className="text-xl text-muted-foreground">
                Handplocka erbjudanden från våra verifierade partners - uppdaterade dagligen
              </p>
            </div>

            {/* Privatlan Offers */}
            <OffersContainer 
              category="privatlan" 
              limit={6}
              title="Bästa privatlånen"
              className="mb-12"
            />
            
            <ConsumerCreditWarning />

            {/* Utan UC Offers */}
            <OffersContainer 
              category="utan-uc" 
              limit={6}
              title="Lån utan UC-kontroll"
            />
            
            <ConsumerCreditWarning />
          </div>
        </section>

        {/* Financial Products */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Välj din finansieringslösning</h2>
              <p className="text-xl text-muted-foreground">
                Hitta rätt produkt för dina behov - vi guidar dig hela vägen
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              <Card data-fg-card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">👤</span>
                  </div>
                  <CardTitle>Privatlån</CardTitle>
                  <CardDescription>
                    Jämför privatlån från 10 000 kr upp till 600 000 kr. Ansök direkt online och få svar inom 24h.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Räntor från 2,9% (effektiv)</li>
                    <li>• Upp till 15 års löptid</li>
                    <li>• Snabb handläggning</li>
                    <li>• Fri användning</li>
                  </ul>
                  <Button asChild className="w-full fg-btn">
                    <Link to="/privatlan">Jämför privatlån</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card data-fg-card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <CardTitle>Företagslån</CardTitle>
                  <CardDescription>
                    Finansiering för företag. Från startkapital till expansion och kassaflöde. Även utan säkerhet.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Upp till 5 miljoner kr</li>
                    <li>• Flexibla återbetalningar</li>
                    <li>• Även utan säkerhet</li>
                    <li>• Snabba beslut</li>
                  </ul>
                  <Button asChild className="w-full fg-btn">
                    <Link to="/foretagslan">Jämför företagslån</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card data-fg-card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💳</span>
                  </div>
                  <CardTitle>Kreditkort</CardTitle>
                  <CardDescription>
                    Hitta kreditkort med bonus, cashback och reseförsäkringar. Jämför över 50 olika kort.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Cashback upp till 3%</li>
                    <li>• Räntefria dagar</li>
                    <li>• Reseförsäkringar</li>
                    <li>• Bonusprogram</li>
                  </ul>
                  <Button asChild className="w-full fg-btn">
                    <Link to="/kreditkort">Jämför kreditkort</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card data-fg-card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🔓</span>
                  </div>
                  <CardTitle>Lån utan UC</CardTitle>
                  <CardDescription>
                    28 långivare som inte gör UC-kontroll. Även med betalningsanmärkning. Svar inom 24h.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Ingen UC-kontroll</li>
                    <li>• Även med anmärkningar</li>
                    <li>• Snabba utbetalningar</li>
                    <li>• 28 olika långivare</li>
                  </ul>
                  <Button asChild className="w-full fg-btn">
                    <Link to="/lan-utan-uc">Jämför lån utan UC</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card data-fg-card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <CardTitle>Låneförmedlare</CardTitle>
                  <CardDescription>
                    Jämför erbjudanden från 30-50 banker med endast en ansökan. Endast EN UC-kontroll.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Jämför 30-50 banker</li>
                    <li>• Endast 1 UC-kontroll</li>
                    <li>• Helt kostnadsfritt</li>
                    <li>• Sparar tid och energi</li>
                  </ul>
                  <Button asChild className="w-full fg-btn">
                    <Link to="/laneformedlare">Jämför låneförmedlare</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card data-fg-card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <CardTitle>Andra finansiella tjänster</CardTitle>
                  <CardDescription>
                    Valutaväxling och sparande med hög avkastning.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Bästa växelkurserna</li>
                    <li>• FastRäntekonto 5,5%</li>
                    <li>• Kapitalskydd ingår</li>
                    <li>• Högre än sparkonton</li>
                  </ul>
                  <Button asChild className="w-full fg-btn">
                    <Link to="/andra-tjanster">Jämför tjänster</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-dashed">
                <CardHeader>
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <CardTitle className="text-muted-foreground">Bolån</CardTitle>
                  <CardDescription>
                    Kommer snart! Jämför bolåneräntor från Sveriges största banker.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-dashed">
                <CardHeader>
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <CardTitle className="text-muted-foreground">Billån</CardTitle>
                  <CardDescription>
                    Kommer snart! Finansiera din bil med förmånliga villkor.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Pillar Content - Comprehensive Guides */}
        <PillarGuide />

        {/* Content Strategy - Combined Guides */}
        <ContentStrategy />

        {/* Educational Content */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Lär dig mer om finansiering</h2>
              <p className="text-xl text-muted-foreground">
                Våra experguider hjälper dig att fatta smarta ekonomiska beslut
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">🔥 Populärt just nu</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <a href="/bostadsmarknad-analys-2025" className="block hover:text-primary transition-colors">
                        <div className="font-medium">Bostadsmarknad 2025: Prisfall eller skrämskott?</div>
                        <div className="text-sm text-muted-foreground">Expertanalys av marknaden</div>
                      </a>
                    </li>
                    <li>
                      <a href="/karriar-100k-guide" className="block hover:text-primary transition-colors">
                        <div className="font-medium">Karriärguide: 100k+ i månaden</div>
                        <div className="text-sm text-muted-foreground">Konkreta strategier för höga löner</div>
                      </a>
                    </li>
                    <li>
                      <a href="/ekonomiska-lifehacks" className="block hover:text-primary transition-colors">
                        <div className="font-medium">Ekonomiska Life Hacks 2025</div>
                        <div className="text-sm text-muted-foreground">Beprövade spartips från communityn</div>
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">📚 Kompletta guider</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <a href="/sparkonto-guide-2025" className="block hover:text-primary transition-colors">
                        <div className="font-medium">Sparkonto Guide 2025</div>
                        <div className="text-sm text-muted-foreground">Jämför räntor och villkor</div>
                      </a>
                    </li>
                    <li>
                      <a href="/svenska-inkomster-2025" className="block hover:text-primary transition-colors">
                        <div className="font-medium">Svenska Inkomster 2025</div>
                        <div className="text-sm text-muted-foreground">Jämför din lön med andra</div>
                      </a>
                    </li>
                    <li>
                      <a href="/manadssparande-guide" className="block hover:text-primary transition-colors">
                        <div className="font-medium">Månadssparande Guide</div>
                        <div className="text-sm text-muted-foreground">Hur mycket sparar svenska folket?</div>
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">🎯 Snabba tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <div>
                        <div className="font-medium">Jämför minst 3 långivare</div>
                        <div className="text-muted-foreground">Skillnaderna kan vara stora</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <div>
                        <div className="font-medium">Kolla effektiv ränta, inte nominell</div>
                        <div className="text-muted-foreground">Inkluderar alla avgifter</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <div>
                        <div className="font-medium">Läs alltid det finstilta</div>
                        <div className="text-muted-foreground">Undvik obehagliga överraskningar</div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Redo att jämföra?</h2>
            <p className="text-xl mb-8 text-white/90">
              Börja din jämförelse idag och hitta bästa erbjudandena för din situation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 bg-white text-slate-900 hover:bg-white/90">
                <Link to="/privatlan">Jämför lån nu</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
                <Link to="/bostadsmarknad-analys">Läs våra guider</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}