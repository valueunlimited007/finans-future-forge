import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Shield, 
  Clock, 
  CheckCircle,
  Star,
  CreditCard
} from 'lucide-react';
import CasinoComparisonTable from '@/components/CasinoComparisonTable';
import ResponsibleGambling from '@/components/ResponsibleGambling';
import { AffiliateDebugPanel } from '@/components/AffiliateDebugPanel';
import { CasinoSeoHead } from '@/components/CasinoSeoHead';
import { casinoSeoManager } from '@/lib/seo/casinoSeo';
import { CASINO_BRANDS } from '@/data/casino-schema';

export default function CasinoPayNPlayPage() {
  // Filter casinos that support Pay-n-Play
  const payNPlayCasinos = CASINO_BRANDS.filter(brand => 
    brand.features.payNPlay && brand.markets.includes('SE')
  );

  const seoData = {
    title: 'Pay-n-Play Casinon 2025 - Spela Direkt Utan Registrering',
    description: 'Upptäck bästa Pay-n-Play casinon där du kan spela direkt utan registrering. Sätt in och börja spela på sekunder med BankID.',
    keywords: ['pay-n-play casino', 'spela direkt', 'utan registrering', 'trustly', 'bankid casino'],
    canonicalUrl: '/se/pay-n-play',
    structuredData: [{
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Pay-n-Play Casinon",
      "description": "Bästa Pay-n-Play casinon utan registrering",
      "numberOfItems": payNPlayCasinos.length
    }]
  };

  return (
    <>
      <CasinoSeoHead 
        seoData={seoData}
        ogImage="/images/og-pay-n-play.png"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-casino-accent/10 text-casino-accent px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="h-4 w-4" />
              Pay-n-Play casinon
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Spela{' '}
              <span className="text-casino-accent">direkt</span>
              {' '}utan registrering
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sätt in pengar och börja spela på sekunder. Ingen registrering, 
              inga formulär - bara ren spelglädje med BankID och Trustly.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" className="bg-casino-accent hover:bg-casino-accent/90 text-white">
                <Star className="h-4 w-4 mr-2" />
                Bästa Pay-n-Play casinon
              </Button>
              <Button variant="outline" size="lg">
                <Zap className="h-4 w-4 mr-2" />
                Jämför funktioner
              </Button>
            </div>
          </div>
        </section>

        {/* Pay-n-Play Benefits */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Zap className="h-8 w-8 mx-auto mb-3 text-casino-accent" />
              <div className="text-2xl font-bold mb-1">0 sek</div>
              <div className="text-sm text-muted-foreground">Ingen registrering</div>
            </Card>
            
            <Card className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-3 text-green-500" />
              <div className="text-2xl font-bold mb-1">Direkt</div>
              <div className="text-sm text-muted-foreground">Börja spela omedelbart</div>
            </Card>
            
            <Card className="p-6 text-center">
              <Shield className="h-8 w-8 mx-auto mb-3 text-blue-500" />
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Säkra transaktioner</div>
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
            <h2 className="text-3xl font-bold mb-4">Alla Pay-n-Play casinon</h2>
            <p className="text-muted-foreground max-w-2xl">
              Jämför {payNPlayCasinos.length} casinon där du kan spela direkt utan registrering.
            </p>
          </div>
          
          <CasinoComparisonTable 
            brands={payNPlayCasinos}
            showFilters={true} 
          />
        </section>

        {/* How Pay-n-Play Works */}
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">
                Så fungerar Pay-n-Play
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-0.5 bg-casino-accent/10 text-casino-accent border-casino-accent/20">
                      1
                    </Badge>
                    <div>
                      <h3 className="font-semibold mb-2">Välj casinospel</h3>
                      <p className="text-muted-foreground text-sm">
                        Hitta det spel du vill spela på Pay-n-Play casinot.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-0.5 bg-casino-accent/10 text-casino-accent border-casino-accent/20">
                      2
                    </Badge>
                    <div>
                      <h3 className="font-semibold mb-2">Gör en insättning</h3>
                      <p className="text-muted-foreground text-sm">
                        Sätt in pengar via BankID eller bank. Ditt konto skapas automatiskt.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-0.5 bg-casino-accent/10 text-casino-accent border-casino-accent/20">
                      3
                    </Badge>
                    <div>
                      <h3 className="font-semibold mb-2">Börja spela direkt</h3>
                      <p className="text-muted-foreground text-sm">
                        Pengarna är på kontot och du kan börja spela omedelbart.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="p-6 bg-casino-accent/5 border-casino-accent/20">
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="h-6 w-6 text-casino-accent" />
                      <h3 className="font-semibold text-casino-accent">Fördelar</h3>
                    </div>
                    <ul className="text-sm text-foreground/80 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-casino-accent" />
                        Inga formulär eller registrering
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-casino-accent" />
                        Spela på sekunder efter insättning
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-casino-accent" />
                        Automatisk identitetsverifiering
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-casino-accent" />
                        Snabbare uttag och insättningar
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AffiliateDebugPanel />
      </div>
    </>
  );
}