import SimpleNavigation from "@/components/SimpleNavigation";
import LegacyFooter from "@/components/LegacyFooter";
import SeoManager from "@/seo/SeoManager";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import RelatedPagesCluster from "@/components/RelatedPagesCluster";
import OffersContainer from "@/components/OffersContainer";
import ConsumerCreditWarning from "@/components/ConsumerCreditWarning";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingDown, Clock, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivatlanBasta() {
  const breadcrumbItems = [
    { label: "Privatlån", href: "/privatlan" },
    { label: "Bästa privatlån" }
  ];

  const lastUpdated = new Date().toLocaleDateString('sv-SE', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <>
      <SeoManager />
      <SimpleNavigation />
      
      <main className="pt-[48px] sm:pt-[64px] md:pt-[80px] lg:pt-[96px]">
        <div className="container mx-auto max-w-6xl px-4">
          <CustomBreadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Uppdaterad: {lastUpdated}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Bästa privatlån 2025
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Vi har jämfört 50+ långivare och rankat de bästa privatlånen. 
                Hitta lån med lägst ränta, snabbast utbetalning och bästa villkor.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="fg-btn text-lg px-8 shadow-lg">
                  <Link to="#topplista">Se topplistan</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link to="/privatlan/jamfor">Jämför alla lån</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <TrendingDown className="w-8 h-8 mx-auto mb-3 text-green-600" />
                  <p className="text-sm text-muted-foreground mb-1">Lägsta ränta</p>
                  <p className="text-2xl font-bold">2,9%</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <Clock className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                  <p className="text-sm text-muted-foreground mb-1">Snabbast beslut</p>
                  <p className="text-2xl font-bold">15 min</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <Shield className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                  <p className="text-sm text-muted-foreground mb-1">Max belopp</p>
                  <p className="text-2xl font-bold">600 000 kr</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6 text-center">
                  <Star className="w-8 h-8 mx-auto mb-3 text-yellow-600" />
                  <p className="text-sm text-muted-foreground mb-1">Långivare</p>
                  <p className="text-2xl font-bold">50+</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Top List */}
        <section id="topplista" className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Bästa privatlånen just nu
            </h2>
            
            <OffersContainer 
              category="privatlan"
              limit={15}
              className="mb-12"
            />
            
            <ConsumerCreditWarning />
          </div>
        </section>

        {/* Category Sections */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl space-y-16">
            {/* Lägst ränta */}
            <div id="lagst-ranta">
              <h2 className="text-3xl font-bold mb-8">Lägst ränta</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Privatlån med lägst ränta passar dig med god ekonomi och hög kreditvärdighet.
              </p>
              <OffersContainer 
                category="privatlan"
                limit={5}
              />
            </div>

            {/* Snabbast utbetalning */}
            <div id="snabbast-utbetalning">
              <h2 className="text-3xl font-bold mb-8">Snabbast utbetalning</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Behöver du pengarna snabbt? Dessa långivare betalar ut samma dag.
              </p>
              <OffersContainer 
                category="privatlan"
                limit={5}
              />
            </div>

            {/* Utan UC */}
            <div id="utan-uc">
              <h2 className="text-3xl font-bold mb-8">Lån utan UC-kontroll</h2>
              <p className="text-lg text-muted-foreground mb-8">
                OBS: Nästan alla seriösa långivare gör UC-kontroll. Läs mer om{" "}
                <Link to="/lan-utan-uc" className="text-primary hover:underline">
                  lån utan UC
                </Link>.
              </p>
            </div>

            {/* Med betalningsanmärkning */}
            <div id="med-anmarkning">
              <h2 className="text-3xl font-bold mb-8">Med betalningsanmärkning</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Har du betalningsanmärkning? Vissa långivare accepterar detta. Läs mer om{" "}
                <Link to="/privatlan/lan-med-betalningsanmarkning" className="text-primary hover:underline">
                  lån med betalningsanmärkning
                </Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Så rankar vi privatlån</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Vår ranking baseras på en objektiv utvärdering av följande kriterier:
                </p>
                
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Ränta (40%)</strong>
                      <p className="text-sm text-muted-foreground">
                        Lägst ränta väger tyngst, men vi utvärderar både min- och maxränta
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Avgifter (20%)</strong>
                      <p className="text-sm text-muted-foreground">
                        Uppläggnings-, aviavgifter och dolda kostnader
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Användarupplevelse (20%)</strong>
                      <p className="text-sm text-muted-foreground">
                        Ansökningsprocess, kundservice och digital upplevelse
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Flexibilitet (10%)</strong>
                      <p className="text-sm text-muted-foreground">
                        Möjlighet till extra amortering, betalningsuppehåll och villkorsändringar
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong>Tillgänglighet (10%)</strong>
                      <p className="text-sm text-muted-foreground">
                        Krav på inkomst, kreditvärdighet och andra villkor
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    <strong>Datakällor:</strong> Långivarnas officiella webbplatser, Finansinspektionen, 
                    UC, samt egna användarundersökningar. Uppdateras veckovis.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Senast uppdaterad:</strong> {lastUpdated}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <RelatedPagesCluster 
              clusterId="privatlan" 
              currentUrl="/privatlan/basta"
              title="Läs mer om privatlån"
              description="Utforska fler guider och jämförelser"
            />
          </div>
        </section>
      </main>
      
      <LegacyFooter />
    </>
  );
}
