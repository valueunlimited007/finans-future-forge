import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, Clock, Heart, Phone, AlertTriangle, CheckCircle, 
  Target, Users, Lock, TrendingDown, Calendar, HelpCircle 
} from 'lucide-react';
import CasinoSeoHead from '@/components/CasinoSeoHead';
import ResponsibleGambling from '@/components/ResponsibleGambling';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { casinoAnalytics } from '@/lib/analytics/casinoAnalytics';
import { generateHowToSchema, generateFAQSchema } from '@/lib/seo/structuredData';
import AffiliateDebugPanel from '@/components/AffiliateDebugPanel';

export default function ResponsibleGamblingGuidePage() {
  useEffect(() => {
    casinoAnalytics.trackPageView('/se/guider/ansvarfullt-spelande', { title: 'Ansvarfullt Spelande Guide' });
  }, []);

  const faqs = [
    {
      question: 'Vad är ansvarsfullt spelande?',
      answer: 'Ansvarsfullt spelande innebär att spela på ett sätt som är säkert, kontrollerat och inom dina ekonomiska och tidsramar. Det handlar om att se spelande som underhållning, inte som en inkomstkälla.'
    },
    {
      question: 'Hur vet jag om mitt spelande blivit problematiskt?',
      answer: 'Varningssignaler inkluderar att spela för mer än du har råd med, ljuga om spelande, försumma ansvar, jaga förluster eller känna ångest kring spel. Om du känner igen dig bör du söka hjälp.'
    },
    {
      question: 'Vad är Spelpaus och hur fungerar det?',
      answer: 'Spelpaus är Sveriges nationella system för självavstängning. När du registrerar dig stängs du av från alla svenska licensierade casinon i 1 månad till permanent. Det är gratis och enkelt att använda.'
    },
    {
      question: 'Vilka verktyg finns för att kontrollera spelandet?',
      answer: 'Svenska casinon erbjuder insättningsgränser, förlustgränser, tidsgränser, spelpauser och självavstängning. Alla verktyg är obligatoriska enligt svensk lag och ska vara lätta att hitta och använda.'
    }
  ];

  const seoData = {
    title: 'Ansvarsfullt Spelande Guide 2024 | Säkert Casinospelande',
    description: 'Lär dig spela casino ansvarsfullt. Verktyg, gränser, varningssignaler och hjälp för säkert spelande på svenska licensierade casinon.',
    keywords: ['ansvarsfullt spelande', 'spelansvar', 'spelpaus', 'spelgränser', 'säkert casino', 'spelproblem hjälp'],
    canonicalUrl: 'https://kasinos.se/se/guider/ansvarfullt-spelande',
    structuredData: [
      generateHowToSchema(
        'Så spelar du ansvarsfullt på casino',
        'Guide för säkert och ansvarsfullt casinospelande',
        [
          { name: 'Sätt tydliga gränser', text: 'Bestäm din budget och tidsgränser innan du börjar spela' },
          { name: 'Använd casinots verktyg', text: 'Aktivera insättningsgränser och förlustgränser' },
          { name: 'Spela för nöjes skull', text: 'Se spelandet som underhållning, inte som en inkomstkälla' },
          { name: 'Ta pauser regelbundet', text: 'Gör pauser och reflektera över ditt spelande' },
          { name: 'Sök hjälp vid behov', text: 'Kontakta Stödlinjen eller använd Spelpaus om spelandet blir problematiskt' }
        ]
      ),
      generateFAQSchema(faqs)
    ]
  };

  const warningSignals = [
    {
      category: 'Ekonomiska varningssignaler',
      icon: TrendingDown,
      signals: [
        'Satsar mer pengar än du har råd att förlora',
        'Lånar pengar för att kunna spela',
        'Försummar räkningar för att ha spelpengar',
        'Ljuger om hur mycket du spelat för',
        'Använder spelandet som lösning på ekonomiska problem'
      ]
    },
    {
      category: 'Emotionella varningssignaler',
      icon: Heart,
      signals: [
        'Känner ångest eller stress kring spelandet',
        'Blir irriterad när du inte kan spela',
        'Spelar för att fly från problem eller dålig känslor',
        'Känner skuld eller skam efter spelande',
        'Tänker konstant på spelande och nästa chans'
      ]
    },
    {
      category: 'Beteendemässiga varningssignaler',
      icon: Clock,
      signals: [
        'Spelar längre än planerat',
        'Försummar arbete, familj eller sociala aktiviteter',
        'Jagar förluster med större satsningar',
        'Spelar i hemlighet eller ljuger om spelandet',
        'Har svårt att sluta när du bestämt dig för det'
      ]
    }
  ];

  const protectionTools = [
    {
      name: 'Insättningsgränser',
      description: 'Sätt gränser för hur mycket du kan sätta in per dag, vecka eller månad',
      icon: Target,
      howTo: 'Finns i kontoinställningar på alla svenska casinon. Kan endast höjas efter 24h reflektion.',
      benefits: ['Kontrollerar utgifter', 'Förhindrar impulshandlingar', 'Obligatorisk enligt svensk lag']
    },
    {
      name: 'Förlustgränser',
      description: 'Bestäm maximala förluster per tidsperiod',
      icon: Shield,
      howTo: 'Aktiveras i spelansvarssektionen. Stänger av spelandet när gränsen nås.',
      benefits: ['Skyddar ekonomin', 'Automatisk kontroll', 'Minskar risken för stora förluster']
    },
    {
      name: 'Tidsgränser',
      description: 'Sätt gränser för hur länge du kan spela i sträck',
      icon: Clock,
      howTo: 'Kan ställas in per session eller per dag. Påminnelser och automatisk utloggning.',
      benefits: ['Förhindrar långa spelsessioner', 'Främjar balans i livet', 'Minskar risken för impulsivt spelande']
    },
    {
      name: 'Spelpauser',
      description: 'Ta en paus från spelandet från 24 timmar upp till 6 månader',
      icon: Calendar,
      howTo: 'Kan aktiveras direkt i ditt konto. Blockerar inloggning under pausperioden.',
      benefits: ['Ger tid för reflektion', 'Bryter spelcykler', 'Kan förlängas vid behov']
    },
    {
      name: 'Självavstängning (Spelpaus)',
      description: 'Stäng av dig från alla svenska casinon i 1 månad till permanent',
      icon: Lock,
      howTo: 'Registrera dig på spelpaus.se med BankID. Träder i kraft inom 24 timmar.',
      benefits: ['Blockerar alla svenska casinon', 'Gratis att använda', 'Juridiskt bindande']
    }
  ];

  const helpResources = [
    {
      name: 'Stödlinjen',
      contact: '020-819 100',
      description: 'Nationella stödlinjen för spelproblem. Kostnadsfri och anonym rådgivning.',
      hours: 'Mån-fre 09:00-21:00, helger 12:00-16:00',
      website: 'stodlinjen.se'
    },
    {
      name: 'Spelpaus',
      contact: 'spelpaus.se',
      description: 'Sveriges nationella system för självavstängning från spel om pengar.',
      hours: 'Tillgängligt dygnet runt',
      website: 'spelpaus.se'
    },
    {
      name: 'Spelberoendes Riksförbund',
      contact: '08-556 967 70',
      description: 'Stödgrupper och rådgivning för personer med spelproblem och anhöriga.',
      hours: 'Kontakta för aktuella mötestider',
      website: 'spelberoendesriksförbund.se'
    }
  ];

  return (
    <>
      <CasinoSeoHead seoData={seoData} />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-rg-primary/10 to-background py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Shield className="h-8 w-8 text-rg-primary" />
                <Badge variant="secondary" className="text-sm bg-rg-primary/10 text-rg-primary">
                  Ansvarsfullt Spelande
                </Badge>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-rg-primary via-rg-secondary to-rg-accent bg-clip-text text-transparent">
                Spela Säkert och Ansvarsfullt
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Lär dig hur du kan njuta av casinospel på ett säkert sätt. Upptäck verktyg, 
                känna igen varningssignaler och veta var du kan få hjälp om du behöver det.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-rg-primary hover:bg-rg-primary/90">
                  <a href="https://spelpaus.se" target="_blank" rel="noopener noreferrer">
                    <Lock className="h-4 w-4 mr-2" />
                    Gå till Spelpaus
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:020819100">
                    <Phone className="h-4 w-4 mr-2" />
                    Ring Stödlinjen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-rg-primary/10 to-rg-secondary/10 border border-rg-primary/20 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Heart className="h-6 w-6 text-rg-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-rg-primary mb-2">
                    Kom ihåg: Det finns alltid hjälp att få
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Om du eller någon du känner har problem med spelandet, tveka inte att söka hjälp. 
                    Stödlinjen (020-819 100) erbjuder kostnadsfri och anonym rådgivning. 
                    Du kan också använda Spelpaus för att stänga av dig från alla svenska casinon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Signals */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Varningssignaler att Känna Igen
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {warningSignals.map((category, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="w-12 h-12 bg-rg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <category.icon className="h-6 w-6 text-rg-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-2">
                      {category.signals.map((signal, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          {signal}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Känner du igen dig i flera av dessa signaler? <br />
                Det är viktigt att ta det på allvar och söka hjälp.
              </p>
              <Button asChild className="bg-rg-primary hover:bg-rg-primary/90">
                <a href="tel:020819100">
                  <Phone className="h-4 w-4 mr-2" />
                  Kontakta Stödlinjen Nu
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Protection Tools */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Verktyg för Säkert Spelande
            </h2>
            
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Alla svenska licensierade casinon är enligt lag skyldiga att erbjuda dessa verktyg. 
              De ska vara enkla att hitta och använda.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {protectionTools.map((tool, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="w-12 h-12 bg-rg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <tool.icon className="h-6 w-6 text-rg-primary" />
                    </div>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {tool.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Hur det fungerar:</h4>
                      <p className="text-xs text-muted-foreground">
                        {tool.howTo}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Fördelar:</h4>
                      <ul className="space-y-1">
                        {tool.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                            <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                            {benefit}
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

        {/* Help Resources */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Var Kan Jag Få Hjälp?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {helpResources.map((resource, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Phone className="h-5 w-5 text-rg-primary" />
                      <CardTitle className="text-lg">{resource.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 space-y-3">
                    <div>
                      <div className="font-semibold text-rg-primary text-lg">
                        {resource.contact}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {resource.hours}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                    
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a 
                        href={resource.contact.includes('.se') ? `https://${resource.contact}` : `tel:${resource.contact.replace(/\s+/g, '')}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {resource.contact.includes('.se') ? 'Besök webbplats' : 'Ring nu'}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Vanliga Frågor om Ansvarsfullt Spelande
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <HelpCircle className="h-5 w-5 text-rg-primary" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
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

        {/* Tips for Healthy Gaming */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Tips för Hälsosamt Spelande
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Target className="h-8 w-8 text-rg-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Sätt Budget</h3>
                <p className="text-sm text-muted-foreground">
                  Bestäm innan du spelar hur mycket du har råd att förlora. Aldrig mer än det.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Clock className="h-8 w-8 text-rg-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Ta Pauser</h3>
                <p className="text-sm text-muted-foreground">
                  Spela inte i flera timmar i sträck. Ta regelbundna pauser för reflektion.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Users className="h-8 w-8 text-rg-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Prata med Andra</h3>
                <p className="text-sm text-muted-foreground">
                  Håll ditt spelande öppet. Prata med familj och vänner om dina vanor.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Heart className="h-8 w-8 text-rg-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Se det som Nöje</h3>
                <p className="text-sm text-muted-foreground">
                  Spel ska vara underhållning, inte ett sätt att lösa ekonomiska problem.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-8">
          <AffiliateDisclosure />
        </section>
        <AffiliateDebugPanel />
      </main>
    </>
  );
}