import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Spade, Diamond, Heart, Club, Trophy, Users, Target } from 'lucide-react';
import CasinoComparisonTable from '@/components/CasinoComparisonTable';
import CasinoSeoHead from '@/components/CasinoSeoHead';
import ResponsibleGambling from '@/components/ResponsibleGambling';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { CASINO_BRANDS } from '@/data/casino-schema';
import { casinoAnalytics } from '@/lib/analytics/casinoAnalytics';
import { useImagePreloader } from '@/hooks/useImagePreloader';
import { generateCasinoCategorySchema } from '@/lib/seo/structuredData';
import AffiliateDebugPanel from '@/components/AffiliateDebugPanel';

export default function CasinoBordsspelPage() {
  // Filter casinos that are available in Swedish market
  const bordsspelCasinos = CASINO_BRANDS.filter(
    casino => casino.markets?.includes('SE')
  );

  // Preload top casino logos
  useImagePreloader({
    images: bordsspelCasinos.slice(0, 5).map(
      casino => `/adtraction-logos/${casino.name.toLowerCase()}-logo.png`
    )
  });

  useEffect(() => {
    casinoAnalytics.trackPageView('/se/bordsspel', { title: 'Bordsspel - Casinospel' });
  }, []);

  const seoData = {
    title: 'Bordsspel på Svenska Casinon 2024 | Blackjack, Roulette & Poker',
    description: 'Spela klassiska bordsspel som blackjack, roulette och poker på svenska casinon. Lär dig regler, strategier och hitta bästa casinon.',
    keywords: ['bordsspel', 'blackjack', 'roulette', 'poker', 'baccarat', 'svenska casinon bordsspel', 'casino spel'],
    canonicalUrl: 'https://kasinos.se/se/bordsspel',
    structuredData: [
      generateCasinoCategorySchema(
        'Bordsspel på Svenska Casinon',
        'Klassiska bordsspel som blackjack, roulette och poker',
        bordsspelCasinos
      )
    ]
  };

  const popularGames = [
    {
      name: 'Blackjack',
      description: 'Det mest populära kortspelet där målet är att komma så nära 21 som möjligt',
      rtp: '99.5%',
      skill: 'Hög',
      icon: Spade,
      strategies: ['Grundstrategi', 'Korträkning', 'Bankroll management']
    },
    {
      name: 'Roulette',
      description: 'Klassiskt hasardspel med hjul och kula, europisk version rekommenderas',
      rtp: '97.3%',
      skill: 'Låg',
      icon: Target,
      strategies: ['Martingale', 'D\'Alembert', 'Fibonacci']
    },
    {
      name: 'Baccarat',
      description: 'Elegant kortspel som är enkelt att lära sig men svårt att bemästra',
      rtp: '98.9%',
      skill: 'Medium',
      icon: Diamond,
      strategies: ['Banker-satsning', 'Mönsterigenkänning', 'Bankroll-kontroll']
    },
    {
      name: 'Casino Hold\'em',
      description: 'Pokervariant där du spelar mot huset istället för andra spelare',
      rtp: '97.8%',
      skill: 'Hög',
      icon: Heart,
      strategies: ['Starthandsval', 'Positionsspel', 'Odds-beräkning']
    }
  ];

  const gameCategories = [
    {
      title: 'Kortspel',
      games: ['Blackjack', 'Baccarat', 'Pontoon', 'Red Dog', 'Casino Hold\'em'],
      icon: Spade,
      description: 'Strategiska spel där kunskap och färdighet kan påverka resultatet'
    },
    {
      title: 'Roulette',
      games: ['Europeisk Roulette', 'Fransk Roulette', 'Amerikansk Roulette'],
      icon: Target,
      description: 'Klassiska hjulspel med olika varianter och satsningsalternativ'
    },
    {
      title: 'Tärningsspel',
      games: ['Craps', 'Sic Bo', 'Chuck-a-Luck'],
      icon: Club,
      description: 'Spännande tärningsspel med snabba rundor och många satsningar'
    },
    {
      title: 'Andra Spel',
      games: ['Pai Gow', 'Dragon Tiger', 'War', 'Teen Patti'],
      icon: Diamond,
      description: 'Exotiska och unika bordsspel från olika kulturer'
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
                <Spade className="h-8 w-8 text-casino-primary" />
                <Badge variant="secondary" className="text-sm bg-casino-primary/10 text-casino-primary">
                  Bordsspel
                </Badge>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-casino-primary via-casino-secondary to-casino-accent bg-clip-text text-transparent">
                Bordsspel på Svenska Casinon
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Upplev spänningen i klassiska bordsspel som blackjack, roulette och poker. 
                Lär dig strategier, regler och hitta de bästa svenska casinon för bordsspel.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-casino-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Olika bordsspel</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-casino-secondary">99%</div>
                  <div className="text-sm text-muted-foreground">Högsta RTP</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-casino-accent">Live</div>
                  <div className="text-sm text-muted-foreground">Dealers tillgängliga</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Games Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Populäraste Bordsspelen
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {popularGames.map((game, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-casino-primary/10 rounded-full flex items-center justify-center">
                        <game.icon className="h-6 w-6 text-casino-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{game.name}</CardTitle>
                        <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                          <span>RTP: <strong className="text-casino-primary">{game.rtp}</strong></span>
                          <span>Skicklighet: <strong>{game.skill}</strong></span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground mb-4">
                      {game.description}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Populära strategier:</h4>
                      <div className="flex flex-wrap gap-2">
                        {game.strategies.map((strategy, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {strategy}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Game Categories */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Bordsspel Kategorier
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gameCategories.map((category, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="w-12 h-12 bg-casino-primary/10 rounded-full flex items-center justify-center mb-3">
                      <category.icon className="h-6 w-6 text-casino-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground mb-4">
                      {category.description}
                    </p>
                    <ul className="space-y-1">
                      {category.games.slice(0, 3).map((game, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          • {game}
                        </li>
                      ))}
                      {category.games.length > 3 && (
                        <li className="text-sm text-muted-foreground">
                          + {category.games.length - 3} fler spel
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              ))}
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
                Bästa Casinon för Bordsspel
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Jämför svenska casinon med de bästa bordsspels-utbudet. Alla casinon är licensierade 
                av Spelinspektionen och erbjuder rättvisa spel.
              </p>
            </div>

            <CasinoComparisonTable
              brands={bordsspelCasinos}
              showFilters={true}
              className="mb-8"
            />
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <AffiliateDisclosure />
        </section>

        {/* Strategy Tips Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Strategitips för Bordsspel
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-casino-primary" />
                  Lär dig reglerna
                </h3>
                <p className="text-sm text-muted-foreground">
                  Innan du sätter riktiga pengar, se till att du förstår spelets regler helt. 
                  Prova gratis versioner först för att öva.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-casino-secondary" />
                  Använd grundstrategier
                </h3>
                <p className="text-sm text-muted-foreground">
                  Många bordsspel har matematiskt bevisade grundstrategier som minskar 
                  husets fördel betydligt när de tillämpas korrekt.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-casino-accent" />
                  Hantera din bankroll
                </h3>
                <p className="text-sm text-muted-foreground">
                  Sätt tydliga gränser för hur mycket du är villig att satsa och håll dig 
                  till dem. Aldrig jaga förluster med större satsningar.
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