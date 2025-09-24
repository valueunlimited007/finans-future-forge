import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Shield, 
  Clock, 
  CheckCircle,
  Star,
  Users,
  Camera
} from 'lucide-react';
import CasinoComparisonTable from '@/components/CasinoComparisonTable';
import ResponsibleGambling from '@/components/ResponsibleGambling';
import { AffiliateDebugPanel } from '@/components/AffiliateDebugPanel';
import { CasinoSeoHead } from '@/components/CasinoSeoHead';
import { casinoSeoManager } from '@/lib/seo/casinoSeo';
import { CASINO_BRANDS } from '@/data/casino-schema';

export default function CasinoLiveCasinoPage() {
  // Filter casinos that have good live casino offerings
  const liveCasinoBrands = CASINO_BRANDS.filter(brand => 
    brand.features.liveCasino && brand.markets.includes('SE')
  );

  const seoData = {
    title: 'Live Casino 2025 - Spela Med Riktiga Dealers Online',
    description: 'Upptäck bästa live casino med riktiga dealers. Spela live blackjack, roulette och baccarat i realtid från svenska casinon.',
    keywords: ['live casino', 'riktiga dealers', 'live blackjack', 'live roulette', 'realtid casino'],
    canonicalUrl: '/se/live-casino',
    structuredData: [{
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Live Casino",
      "description": "Bästa live casino med riktiga dealers",
      "numberOfItems": liveCasinoBrands.length
    }]
  };

  return (
    <>
      <CasinoSeoHead 
        seoData={seoData}
        ogImage="/images/og-live-casino.png"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
              <TrendingUp className="h-4 w-4" />
              Live Casino
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Spela med{' '}
              <span className="text-green-600">riktiga dealers</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upplev äkta casinokänsla hemma. Spela live blackjack, roulette 
              och baccarat med professionella dealers i realtid.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Star className="h-4 w-4 mr-2" />
                Bästa Live Casino
              </Button>
              <Button variant="outline" size="lg">
                <Camera className="h-4 w-4 mr-2" />
                Se live streams
              </Button>
            </div>
          </div>
        </section>

        {/* Live Casino Benefits */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-green-600" />
              <div className="text-2xl font-bold mb-1">Riktiga</div>
              <div className="text-sm text-muted-foreground">Professionella dealers</div>
            </Card>
            
            <Card className="p-6 text-center">
              <Camera className="h-8 w-8 mx-auto mb-3 text-blue-500" />
              <div className="text-2xl font-bold mb-1">HD</div>
              <div className="text-sm text-muted-foreground">Kristallklar video</div>
            </Card>
            
            <Card className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-3 text-casino-accent" />
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Alltid öppet</div>
            </Card>
          </div>
        </section>

        {/* Responsible Gambling Notice */}
        <section className="container mx-auto px-4 py-6">
          <ResponsibleGambling variant="notice" />
        </section>

        {/* Main Comparison Table */}
        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Bästa Live Casino</h2>
            <p className="text-muted-foreground max-w-2xl">
              Jämför {liveCasinoBrands.length} casinon med utmärkt live casino-upplevelse och riktiga dealers.
            </p>
          </div>
          
          <CasinoComparisonTable 
            brands={liveCasinoBrands}
            showFilters={true} 
          />
        </section>

        {/* Popular Live Games */}
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">
                Populära live spel
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-red-500/10 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-red-500" />
                    </div>
                    <h3 className="font-semibold">Live Blackjack</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Klassiskt kortspel med riktiga dealers. Få 21 utan att gå över.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3" />
                    Olika bordsinsatser
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-green-500" />
                    </div>
                    <h3 className="font-semibold">Live Roulette</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Europeisk och amerikansk roulette med riktiga hjul och dealers.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3" />
                    Flera roulette-varianter
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-blue-500" />
                    </div>
                    <h3 className="font-semibold">Live Baccarat</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Elegant kortspel som är lätt att lära sig men spännande att spela.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3" />
                    Enkla regler
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Live Casino Tips */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Tips för live casino
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Välj rätt bordsgränser</h3>
                <p className="text-muted-foreground text-sm">
                  Live casino har ofta högre minimum-insatser än vanliga spel. Kontrollera 
                  bordsgränserna innan du sätter dig vid ett bord.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Håll dig till strategin</h3>
                <p className="text-muted-foreground text-sm">
                  I spel som blackjack finns det grundläggande strategier som kan 
                  förbättra dina chanser. Lär dig strategierna innan du spelar.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Interagera med dealern</h3>
                <p className="text-muted-foreground text-sm">
                  En av fördelarna med live casino är den sociala aspekten. Chatta 
                  gärna med dealern och andra spelare för en bättre upplevelse.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <AffiliateDebugPanel />
      </div>
    </>
  );
}