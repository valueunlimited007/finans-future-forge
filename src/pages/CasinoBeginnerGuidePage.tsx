import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, Shield, CreditCard, Users, Target, AlertTriangle, 
  CheckCircle, Star, TrendingUp, Clock, Lock, Phone 
} from 'lucide-react';
import CasinoSeoHead from '@/components/CasinoSeoHead';
import ResponsibleGambling from '@/components/ResponsibleGambling';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { casinoAnalytics } from '@/lib/analytics/casinoAnalytics';
import { generateHowToSchema } from '@/lib/seo/structuredData';
import { Link } from 'react-router-dom';
import AffiliateDebugPanel from '@/components/AffiliateDebugPanel';

export default function CasinoBeginnerGuidePage() {
  useEffect(() => {
    casinoAnalytics.trackPageView('/se/guider/nyborjarguide', { title: 'Nybörjarguide - Casino' });
  }, []);

  const seoData = {
    title: 'Nybörjarguide till Casino 2024 | Så Kommer Du Igång Säkert',
    description: 'Komplett guide för nybörjare till online casino. Lär dig grunderna, säkerhetsregler, speltyper och hur du spelar ansvarsfullt på svenska casinon.',
    keywords: ['casino nybörjarguide', 'hur spela casino', 'online casino guide', 'svenska casinon nybörjare', 'casino säkerhet'],
    canonicalUrl: 'https://kasinos.se/se/guider/nyborjarguide',
    structuredData: [
      generateHowToSchema(
        'Så kommer du igång med online casino',
        'Steg-för-steg guide för nybörjare till svenska online casinon',
        [
          { name: 'Välj ett licensierat casino', text: 'Se till att casinot har svensk spellicens från Spelinspektionen' },
          { name: 'Registrera dig säkert', text: 'Använd BankID för snabb och säker registrering' },
          { name: 'Sätt upp spelgränser', text: 'Bestäm dina gränser för insättningar och förluster innan du börjar' },
          { name: 'Prova spel gratis först', text: 'Testa spelen i demoläge innan du spelar med riktiga pengar' },
          { name: 'Gör din första insättning', text: 'Använd säkra betalmetoder som Swish eller BankID' }
        ]
      )
    ]
  };

  const steps = [
    {
      number: 1,
      title: 'Välj ett Licensierat Casino',
      content: 'Kontrollera alltid att casinot har en giltig svensk spellicens från Spelinspektionen. Detta garanterar säkerhet och rättvisa spel.',
      icon: Shield,
      tips: [
        'Sök efter licensnumret på casinots hemsida',
        'Kontrollera på Spelinspektionens webbplats',
        'Undvik casinon utan svensk licens'
      ]
    },
    {
      number: 2,
      title: 'Skapa Konto Säkert',
      content: 'Registrera dig med BankID för snabbast och säkrast process. Dina personuppgifter skyddas enligt GDPR.',
      icon: Lock,
      tips: [
        'Använd stark och unik lösenord',
        'Aktivera tvåfaktorsautentisering om tillgängligt',
        'Verifiera din e-postadress direkt'
      ]
    },
    {
      number: 3,
      title: 'Sätt upp Spelgränser',
      content: 'Innan du börjar spela, sätt upp gränser för insättningar, förluster och speltid. Detta är obligatoriskt på svenska casinon.',
      icon: Target,
      tips: [
        'Sätt vecko- och månadsgränser',
        'Använd casinots gränsverktyg',
        'Justera gränserna endast uppåt efter 24h reflektion'
      ]
    },
    {
      number: 4,
      title: 'Lär dig Spelen',
      content: 'Prova spel i demoläge först. Förstå regler, odds och strategier innan du spelar med riktiga pengar.',
      icon: BookOpen,
      tips: [
        'Börja med enkla spel som slots',
        'Läs om RTP (Return to Player)',
        'Förstå skillnaden mellan olika speltyper'
      ]
    },
    {
      number: 5,
      title: 'Gör din Första Insättning',
      content: 'Använd säkra svenska betalmetoder som Swish, BankID eller Trustly för snabba och säkra transaktioner.',
      icon: CreditCard,
      tips: [
        'Börja med små belopp',
        'Kontrollera insättningsgränser',
        'Läs om bonusvillkor innan du accepterar'
      ]
    }
  ];

  const gameTypes = [
    {
      name: 'Spelautomater (Slots)',
      difficulty: 'Lätt',
      description: 'Perfekt för nybörjare. Klicka bara på "spin" och hoppas på vinst.',
      rtp: '94-98%',
      icon: Star,
      tips: ['Välj slots med hög RTP', 'Förstå volatilitet', 'Sätt förlustgränser']
    },
    {
      name: 'Roulette',
      difficulty: 'Medium',
      description: 'Klassiskt hasardspel. Satsa på nummer, färger eller grupper.',
      rtp: '97.3%',
      icon: Target,
      tips: ['Spela europeisk roulette', 'Undvik amerikansk roulette', 'Förstå olika satsningar']
    },
    {
      name: 'Blackjack',
      difficulty: 'Svår',
      description: 'Strategiskt kortspel där kunskap kan förbättra dina odds.',
      rtp: '99.5%',
      icon: TrendingUp,
      tips: ['Lär dig grundstrategi', 'Undvik sidosatsningar', 'Öva gratis först']
    }
  ];

  const safetyTips = [
    {
      title: 'Kännetecken på Säkra Casinon',
      items: [
        'Svensk spellicens från Spelinspektionen',
        'SSL-kryptering (https://) på hela webbplatsen',
        'Tydliga användarvillkor och integritetspolicy',
        'Professionell kundsupport på svenska',
        'Verktyg för ansvarsfullt spelande'
      ]
    },
    {
      title: 'Varningssignaler att Undvika',
      items: [
        'Casinon utan tydlig licensinformation',
        'Orealistiska bonuserbjudanden',
        'Otydliga eller orättvisa bonusvillkor',
        'Dåliga recensioner om utbetalningar',
        'Ingen kundsupport eller endast chatbottar'
      ]
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
                <BookOpen className="h-8 w-8 text-casino-primary" />
                <Badge variant="secondary" className="text-sm bg-casino-primary/10 text-casino-primary">
                  Nybörjarguide
                </Badge>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-casino-primary via-casino-secondary to-casino-accent bg-clip-text text-transparent">
                Casino för Nybörjare
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Din kompletta guide till att komma igång med online casino på ett säkert och ansvarsfullt sätt. 
                Lär dig grunderna, förstå riskerna och upptäck hur du spelar smart.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/se">Utforska Säkra Casinon</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://spelpaus.se" target="_blank" rel="noopener noreferrer">
                    <Shield className="h-4 w-4 mr-2" />
                    Läs om Spelpaus
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                    Viktigt för Nybörjare att Veta
                  </h3>
                  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                    <li>• Casino är hasardspel - du kan förlora pengarna du satsar</li>
                    <li>• Huset har alltid en matematisk fördel på lång sikt</li>
                    <li>• Sätt alltid gränser innan du börjar spela</li>
                    <li>• Spela aldrig för pengar du inte har råd att förlora</li>
                    <li>• Casino ska vara underhållning, inte ett sätt att tjäna pengar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Steg-för-Steg: Kom Igång Säkert
            </h2>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card key={index} className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-casino-primary/10 rounded-full flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-casino-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="outline" className="text-casino-primary border-casino-primary">
                          Steg {step.number}
                        </Badge>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {step.content}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Viktiga tips:</h4>
                        <ul className="space-y-1">
                          {step.tips.map((tip, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Game Types for Beginners */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Bästa Spelen för Nybörjare
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {gameTypes.map((game, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 bg-casino-primary/10 rounded-full flex items-center justify-center">
                        <game.icon className="h-5 w-5 text-casino-primary" />
                      </div>
                      <Badge variant={game.difficulty === 'Lätt' ? 'default' : game.difficulty === 'Medium' ? 'secondary' : 'outline'}>
                        {game.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{game.name}</CardTitle>
                    <div className="text-sm text-muted-foreground">
                      RTP: <span className="text-casino-primary font-medium">{game.rtp}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground mb-4">
                      {game.description}
                    </p>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Tips för nybörjare:</h4>
                      <ul className="space-y-1">
                        {game.tips.map((tip, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground">
                            • {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Säkerhet och Trygghet
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {safetyTips.map((section, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      {index === 0 ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                      )}
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          {index === 0 ? (
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          ) : (
                            <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                          )}
                          {item}
                        </li>
                      ))}
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

        {/* Next Steps */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                Nästa Steg
              </h2>
              <p className="text-muted-foreground mb-8">
                Nu när du lärt dig grunderna är det dags att utforska säkra svenska casinon. 
                Kom ihåg att alltid spela ansvarsfullt och inom dina gränser.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/se">
                    <Users className="h-4 w-4 mr-2" />
                    Jämför Svenska Casinon
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/se/guider/ansvarfullt-spelande">
                    <Shield className="h-4 w-4 mr-2" />
                    Läs om Ansvarsfullt Spelande
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <AffiliateDisclosure />
        <AffiliateDebugPanel />
      </main>
    </>
  );
}