import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gamepad2, Trophy, Zap, Star, TrendingUp, Target } from 'lucide-react';
import CasinoComparisonTable from '@/components/CasinoComparisonTable';
import CasinoSeoHead from '@/components/CasinoSeoHead';
import ResponsibleGambling from '@/components/ResponsibleGambling';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { CASINO_BRANDS } from '@/data/casino-schema';
import { casinoAnalytics } from '@/lib/analytics/casinoAnalytics';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import { generateCasinoCategorySchema } from '@/lib/seo/structuredData';
import AffiliateDebugPanel from '@/components/AffiliateDebugPanel';

export default function CasinoSlotsPage() {
  // Filter casinos that are available in Swedish market
  const slotsCasinos = CASINO_BRANDS.filter(
    casino => casino.markets?.includes('SE')
  );

  // Preload top casino logos
  useImagePreloader({
    images: slotsCasinos.slice(0, 5).map(
      casino => `/adtraction-logos/${casino.name.toLowerCase()}-logo.png`
    )
  });

  useEffect(() => {
    casinoAnalytics.trackPageView('/se/slots', { title: 'Slots - Spelautomater' });
  }, []);

  const seoData = {
    title: 'Bästa Slots & Spelautomater 2024 | Svenska Casinon',
    description: 'Spela slots och spelautomater på svenska licensierade casinon. Upptäck de bästa jackpottspelen, free spins och högsta RTP-värden.',
    keywords: ['slots', 'spelautomater', 'jackpot', 'free spins', 'RTP', 'svenska casinon slots', 'bästa slots'],
    canonicalUrl: 'https://kasinos.se/se/slots',
    structuredData: [
      generateCasinoCategorySchema(
        'Slots och Spelautomater',
        'Bästa svenska casinon för slots och spelautomater',
        slotsCasinos
      )
    ]
  };

  const popularSlots = [
    { name: 'Starburst', provider: 'NetEnt', rtp: '96.1%', type: 'Klassisk' },
    { name: 'Gonzo\'s Quest', provider: 'NetEnt', rtp: '95.97%', type: 'Äventyr' },
    { name: 'Book of Dead', provider: 'Play\'n GO', rtp: '94.25%', type: 'Egyptisk' },
    { name: 'Sweet Bonanza', provider: 'Pragmatic Play', rtp: '96.48%', type: 'Frukt' },
    { name: 'Wolf Gold', provider: 'Pragmatic Play', rtp: '96.01%', type: 'Djur' },
    { name: 'Jammin\' Jars', provider: 'Push Gaming', rtp: '96.83%', type: 'Frukt' }
  ];

  const slotTypes = [
    {
      name: 'Klassiska Slots',
      description: 'Traditionella 3-hjuls spelautomater med enkla symboler',
      icon: Trophy,
      features: ['3-5 hjul', 'Enkla symboler', 'Låg volatilitet']
    },
    {
      name: 'Video Slots',
      description: 'Moderna 5-hjuls slots med bonusfunktioner och teman',
      icon: Gamepad2,
      features: ['5+ hjul', 'Bonusrundor', 'Free Spins']
    },
    {
      name: 'Jackpott Slots',
      description: 'Progressiva jackpottar som växer till miljontals kronor',
      icon: Target,
      features: ['Progressiva jackpottar', 'Stora vinster', 'Nätverks-pooler']
    },
    {
      name: 'Megaways',
      description: 'Revolutionerande mekanik med upp till 117,649 sätt att vinna',
      icon: TrendingUp,
      features: ['Varierande symboler', '100,000+ sätt', 'Hög volatilitet']
    }
  ];

  return (
    <>
      <CasinoSeoHead seoData={seoData} />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-casino-primary/10 to-background py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Gamepad2 className="h-8 w-8 text-casino-primary" />
                <Badge variant="secondary" className="text-sm bg-casino-primary/10 text-casino-primary">
                  Slots & Spelautomater
                </Badge>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-casino-primary via-casino-secondary to-casino-accent bg-clip-text text-transparent">
                Bästa Slots på Svenska Casinon
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Upptäck tusentals spelautomater från världens bästa utvecklare. Från klassiska 
                fruktmaskiner till moderna video slots med jackpottar på miljontals kronor.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-casino-primary">1000+</div>
                  <div className="text-sm text-muted-foreground">Olika slots</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-casino-secondary">98%</div>
                  <div className="text-sm text-muted-foreground">Högsta RTP</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-casino-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Tillgängliga</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Slot Types Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Olika Typer av Slots
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {slotTypes.map((type, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0 mb-4">
                    <div className="w-12 h-12 bg-casino-primary/10 rounded-full flex items-center justify-center mb-4">
                      <type.icon className="h-6 w-6 text-casino-primary" />
                    </div>
                    <CardTitle className="text-lg">{type.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground mb-4 text-sm">
                      {type.description}
                    </p>
                    <ul className="space-y-1">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Star className="h-3 w-3 text-casino-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Slots Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Populäraste Slots 2024
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {popularSlots.map((slot, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">{slot.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {slot.type}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Utvecklare:</span>
                      <span className="font-medium">{slot.provider}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">RTP:</span>
                      <span className="font-medium text-casino-primary">{slot.rtp}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Alla dessa slots finns tillgängliga på svenska licensierade casinon nedan.
              </p>
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
                Bästa Casinon för Slots
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Jämför svenska casinon med de bästa slot-utbudet. Alla casinon är licensierade 
                av Spelinspektionen och erbjuder säkert spelande.
              </p>
            </div>

            <CasinoComparisonTable
              brands={slotsCasinos}
              showFilters={true}
              className="mb-8"
            />
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <AffiliateDisclosure />
        </section>

        {/* Tips Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Tips för Slots-spelande
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-casino-primary" />
                  Förstå RTP
                </h3>
                <p className="text-sm text-muted-foreground">
                  RTP (Return to Player) visar hur mycket en slot betalar tillbaka över tid. 
                  Välj slots med RTP över 96% för bästa odds.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-casino-secondary" />
                  Volatilitet
                </h3>
                <p className="text-sm text-muted-foreground">
                  Låg volatilitet = mindre vinster oftare. Hög volatilitet = stora vinster mer sällan. 
                  Välj efter din spelstil och budget.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-casino-accent" />
                  Sätt Gränser
                </h3>
                <p className="text-sm text-muted-foreground">
                  Bestäm alltid hur mycket du är beredd att satsa innan du börjar. 
                  Använd casinots gränsverktyg för säkert spelande.
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