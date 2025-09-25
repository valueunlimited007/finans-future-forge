import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle, Zap, CreditCard, AlertTriangle } from 'lucide-react';
import CasinoComparisonTable from '@/components/CasinoComparisonTable';
import CasinoSeoHead from '@/components/CasinoSeoHead';
import ResponsibleGambling from '@/components/ResponsibleGambling';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { CASINO_BRANDS } from '@/data/casino-schema';
import { casinoAnalytics } from '@/lib/analytics/casinoAnalytics';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import { generateCasinoCategorySchema } from '@/lib/seo/structuredData';
import AffiliateDebugPanel from '@/components/AffiliateDebugPanel';

export default function CasinoFastWithdrawalsPage() {
  // Filter casinos with fast withdrawals (assuming this feature exists in data)
  const fastWithdrawalCasinos = CASINO_BRANDS.filter(
    casino => casino.markets?.includes('SE') && casino.rating >= 4.0
  );

  // Preload top casino logos
  useImagePreloader({
    images: fastWithdrawalCasinos.slice(0, 3).map(
      casino => `/adtraction-logos/${casino.name.toLowerCase()}-logo.png`
    )
  });

  useEffect(() => {
    casinoAnalytics.trackPageView('/se/snabbast-uttag', { title: 'Snabbast Uttag - Casinon' });
  }, []);

  const seoData = {
    title: 'Casinon med Snabbast Uttag 2024 | Snabba Utbetalningar',
    description: 'Upptäck svenska casinon med snabbast uttag. Få dina vinster på 15 minuter till 6 timmar. Jämför uttagstider och välj bästa casinot för dig.',
    keywords: ['snabba uttag casino', 'snabb utbetalning', 'instant uttag', 'casino uttagstid', 'svenska casinon uttag'],
    canonicalUrl: 'https://kasinos.se/se/snabbast-uttag',
    structuredData: [
      generateCasinoCategorySchema(
        'Casinon med Snabbast Uttag',
        'Svenska licensierade casinon med snabbast utbetalningar',
        fastWithdrawalCasinos
      )
    ]
  };

  return (
    <>
      <CasinoSeoHead seoData={seoData} />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-casino-primary/10 to-background py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Clock className="h-8 w-8 text-casino-primary" />
                <Badge variant="secondary" className="text-sm bg-casino-primary/10 text-casino-primary">
                  Snabbast Uttag
                </Badge>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-casino-primary via-casino-secondary to-casino-accent bg-clip-text text-transparent">
                Svenska Casinon med Snabbast Uttag
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Upptäck casinon med blixtsnabba utbetalningar. Få dina vinster på 15 minuter till 6 timmar 
                istället för att vänta flera dagar. Alla casinon har svensk spellicens.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-casino-primary">15 min</div>
                  <div className="text-sm text-muted-foreground">Snabbaste uttag</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-casino-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-casino-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Svenska licenser</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Varför Välja Casinon med Snabba Uttag?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <div className="w-12 h-12 bg-casino-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-casino-primary" />
                  </div>
                  <CardTitle className="text-lg">Blixtsnabba Utbetalningar</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">
                    Få dina vinster på 15 minuter till några timmar istället för att vänta dagar. 
                    Perfekt för dig som vill ha omedelbar tillgång till dina pengar.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <div className="w-12 h-12 bg-casino-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-casino-secondary" />
                  </div>
                  <CardTitle className="text-lg">Förenklad Verifiering</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">
                    Många snabba casinon använder BankID eller Pay-n-Play teknik som gör 
                    verifieringsprocessen smidig och automatisk.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <div className="w-12 h-12 bg-casino-accent/10 rounded-full flex items-center justify-center mb-4">
                    <CreditCard className="h-6 w-6 text-casino-accent" />
                  </div>
                  <CardTitle className="text-lg">Moderna Betalmetoder</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">
                    Swish, BankID, Trustly och andra svenska betalmetoder som möjliggör 
                    snabba och säkra transaktioner dygnet runt.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                    Viktigt att Veta om Snabba Uttag
                  </h3>
                  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                    <li>• Första uttaget kan ta längre tid på grund av säkerhetskontroller</li>
                    <li>• Större belopp (över 10 000 kr) kan kräva extra verifiering</li>
                    <li>• Uttagstider kan variera beroende på betalmetod och veckodag</li>
                    <li>• Kontrollera alltid casinots uttagsregler innan du spelar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <ResponsibleGambling />
          </div>
        </section>

        {/* Casino Comparison Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Bästa Casinon med Snabbast Uttag
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Jämför svenska casinon med snabbast utbetalningar. Alla casinon är licensierade 
                av Spelinspektionen och erbjuder säkra, snabba uttag.
              </p>
            </div>

            <CasinoComparisonTable
              brands={fastWithdrawalCasinos}
              showFilters={true}
              className="mb-8"
            />
          </div>
        </section>

        <AffiliateDisclosure />

        {/* How Fast Withdrawals Work */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Så Fungerar Snabba Uttag
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-casino-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-casino-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Begär Uttag</h3>
                <p className="text-sm text-muted-foreground">
                  Logga in på casinot och välj "Uttag" i kassan. Välj belopp och betalmetod.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-casino-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-casino-secondary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Automatisk Kontroll</h3>
                <p className="text-sm text-muted-foreground">
                  Systemet kontrollerar automatiskt din identitet och spelhistorik.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-casino-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-casino-accent">3</span>
                </div>
                <h3 className="font-semibold mb-2">Snabb Godkännande</h3>
                <p className="text-sm text-muted-foreground">
                  Uttaget godkänns automatiskt och skickas till din bank eller Swish.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Pengar på Kontot</h3>
                <p className="text-sm text-muted-foreground">
                  Du får dina pengar på 15 minuter till några timmar, beroende på metod.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <AffiliateDebugPanel />
      </main>
    </>
  );
}