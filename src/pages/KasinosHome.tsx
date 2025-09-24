import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Clock, 
  CreditCard, 
  Users, 
  TrendingUp,
  Star,
  Zap,
  Phone
} from 'lucide-react';
import CasinoComparisonTable from '@/components/CasinoComparisonTable';
import CasinoReviewCard from '@/components/CasinoReviewCard';
import ResponsibleGambling from '@/components/ResponsibleGambling';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import TrustIndicators from '@/components/TrustIndicators';
import CookieConsent from '@/components/CookieConsent';
import AgeVerificationModal from '@/components/AgeVerificationModal';
import { Separator } from '@/components/ui/separator';
import { CASINO_BRANDS } from '@/data/casino-schema'; 
import { useImagePreloader } from '@/hooks/useImagePreloader';

export default function KasinosHome() {
  // Preload critical casino logos for better performance
  const criticalLogos = CASINO_BRANDS
    .slice(0, 10) // Top 10 casinos
    .map(brand => brand.logo);
  
  const { isLoading: imagesLoading, progress } = useImagePreloader({
    images: criticalLogos,
    priority: true
  });

  return (
    <>
      <CookieConsent />
      <AgeVerificationModal />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-casino-primary/10 text-casino-primary px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="h-4 w-4" />
            Endast svenska licensierade casinon
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Säkra & licensierade{' '}
            <span className="text-casino-primary">casinon</span> i Sverige
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Jämför casinon med svensk spellicens. Opartiska recensioner, 
            säkra betalningar och ansvarfullt spelande i fokus.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" className="bg-casino-primary hover:bg-casino-primary/90 text-casino-primary-foreground" asChild>
              <Link to="#top-casinos">
                <Star className="h-4 w-4 mr-2" />
                Topprankade casinon
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/se/pay-n-play">
                <Zap className="h-4 w-4 mr-2" />
                Pay-n-Play casinon
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <Shield className="h-8 w-8 mx-auto mb-3 text-rg-primary" />
            <div className="text-2xl font-bold mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Svenska licenser</div>
          </Card>
          
          <Card className="p-6 text-center">
            <Clock className="h-8 w-8 mx-auto mb-3 text-casino-accent" />
            <div className="text-2xl font-bold mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Snabba uttag</div>
          </Card>
          
          <Card className="p-6 text-center">
            <CreditCard className="h-8 w-8 mx-auto mb-3 text-blue-500" />
            <div className="text-2xl font-bold mb-1">BankID</div>
            <div className="text-sm text-muted-foreground">Säker inloggning</div>
          </Card>
          
          <Card className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-3 text-green-500" />
            <div className="text-2xl font-bold mb-1">50k+</div>
            <div className="text-sm text-muted-foreground">Nöjda spelare</div>
          </Card>
        </div>
      </section>

      {/* Responsible Gambling Notice */}
      <section className="container mx-auto px-4 py-6">
        <ResponsibleGambling variant="notice" />
      </section>

      {/* Top Rated Casinos */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Bäst betygsatta casinon</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Våra topprankade casinon med svensk licens och högsta säkerhet.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {CASINO_BRANDS.slice(0, 6).map((casino) => (
            <CasinoReviewCard 
              key={casino.id} 
              casino={casino}
              featured={casino.rating >= 4.2}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="#comparison">
              Se alla casinon
            </Link>
          </Button>
        </div>
      </section>

      {/* Affiliate Disclosure Section */}
      <section className="container mx-auto px-4 py-8">
        <AffiliateDisclosure variant="banner" detailed />
      </section>

      {/* Full Comparison Table */}
      <section id="comparison" className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Jämför alla casinon</h2>
          <p className="text-muted-foreground">
            Detaljerad jämförelse med filter och betyg.
          </p>
        </div>
        <CasinoComparisonTable showFilters={true} />
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Populära kategorier</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hitta casinon som passar just dina behov och spelpreferenser.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-casino-primary/10 rounded-lg group-hover:bg-casino-primary/20 transition-colors">
                <CreditCard className="h-6 w-6 text-casino-primary" />
              </div>
              <h3 className="text-lg font-semibold">Casinon med BankID</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Snabb registrering och verifiering med BankID. Kom igång på sekunder.
            </p>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/se/casinon-med-bankid">
                Se alla BankID-casinon
              </Link>
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-casino-accent/10 rounded-lg group-hover:bg-casino-accent/20 transition-colors">
                <Zap className="h-6 w-6 text-casino-accent" />
              </div>
              <h3 className="text-lg font-semibold">Pay-n-Play</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Börja spela direkt utan registrering. Sätt in och spela på en gång.
            </p>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/se/pay-n-play">
                Upptäck Pay-n-Play
              </Link>
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                <TrendingUp className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold">Live Casino</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Spela med riktiga dealers i realtid. Autentisk casinoupplevelse hemma.
            </p>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <Link to="/se/live-casino">
                Utforska Live Casino
              </Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Key Information */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Varför välja svenska licensierade casinon?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-rg-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Säkerhet och trygghet</h3>
                    <p className="text-muted-foreground text-sm">
                      Alla casinon är godkända av Spelinspektionen och följer stränga regler 
                      för spelarsäkerhet och datahantering.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-rg-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Svensk kundtjänst</h3>
                    <p className="text-muted-foreground text-sm">
                      Få hjälp på svenska från erfaren kundtjänst som förstår 
                      svenska lagar och regler.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CreditCard className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Svenska betalningsmetoder</h3>
                    <p className="text-muted-foreground text-sm">
                      Betala enkelt med BankID, Swish och andra välkända svenska tjänster.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-casino-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Snabba uttag</h3>
                    <p className="text-muted-foreground text-sm">
                      De flesta svenska casinon erbjuder uttag inom 24 timmar, 
                      många även samma dag.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Ansvarfullt spelande</h3>
                    <p className="text-muted-foreground text-sm">
                      Stark fokus på spelansvar med verktyg som Spelpaus 
                      och obligatoriska insättningsgränser.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-casino-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Transparent spelande</h3>
                    <p className="text-muted-foreground text-sm">
                      Tydliga regler, öppna RTP-värden och rättvisa spelvillkor 
                      enligt svensk lag.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar with RG Widget */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Så väljer du rätt casino</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Att välja rätt casino kan kännas överväldigande med alla alternativ som finns. 
                  Här är de viktigaste faktorerna att tänka på:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-0.5">1</Badge>
                    <div>
                      <strong className="text-foreground">Svensk licens</strong> - 
                      Välj alltid ett casino med licens från Spelinspektionen för maximal trygghet.
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-0.5">2</Badge>
                    <div>
                      <strong className="text-foreground">Betalningsmetoder</strong> - 
                      Kontrollera att dina föredragna metoder som BankID och Swish stöds.
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-0.5">3</Badge>
                    <div>
                      <strong className="text-foreground">Spelutbud</strong> - 
                      Se till att casinot har de spel du gillar från pålitliga leverantörer.
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-0.5">4</Badge>
                    <div>
                      <strong className="text-foreground">Kundtjänst</strong> - 
                      Svensk kundtjänst på ditt språk gör stor skillnad vid problem.
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <ResponsibleGambling variant="sidebar" />
          </div>
        </div>
      </section>
      </div>

      {/* Affiliate Disclosure */}
      <AffiliateDisclosure variant="footer" />
      
      {/* Trust Section */}
      <section className="container mx-auto px-4 py-12">
        <TrustIndicators variant="full" />
      </section>
    </>
  );
}