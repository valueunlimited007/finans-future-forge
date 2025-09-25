import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, CheckCircle, AlertTriangle, Scale, Building2, Lock, 
  FileText, Globe, Users, CreditCard, Clock, Target 
} from 'lucide-react';
import CasinoSeoHead from '@/components/CasinoSeoHead';
import ResponsibleGambling from '@/components/ResponsibleGambling';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { casinoAnalytics } from '@/lib/analytics/casinoAnalytics';
import { generateHowToSchema, generateFAQSchema } from '@/lib/seo/structuredData';
import { Link } from 'react-router-dom';
import AffiliateDebugPanel from '@/components/AffiliateDebugPanel';

export default function SwedishLicenseGuidePage() {
  useEffect(() => {
    casinoAnalytics.trackPageView('/se/guider/svenska-licenser', { title: 'Svenska Licenser Guide' });
  }, []);

  const faqs = [
    {
      question: 'Vad är en svensk spellicens?',
      answer: 'En svensk spellicens är ett tillstånd från Spelinspektionen som krävs för att lagligt erbjuda hasardspel till svenska kunder. Licensen garanterar att casinot följer svenska lagar och regler.'
    },
    {
      question: 'Hur vet jag om ett casino har svensk licens?',
      answer: 'Kontrollera licensnumret på casinots hemsida (oftast i sidfoten) och verifiera det på Spelinspektionens officiella webbplats. Licensierade casinon måste tydligt visa sin licensinformation.'
    },
    {
      question: 'Vad händer om jag spelar på ett olicensierat casino?',
      answer: 'Det är inte olagligt för privatpersoner att spela på olicensierade casinon, men du saknar skydd enligt svenska lagar och kan få problem med insättningar, uttag och tvistlösning.'
    },
    {
      question: 'Vilka fördelar har svenska licensierade casinon?',
      answer: 'Svenska casinon erbjuder konsumentskydd, ansvarsfullt spelande-verktyg, svensk kundsupport, säkra betalningar och möjlighet till tvistlösning genom svenska myndigheter.'
    }
  ];

  const seoData = {
    title: 'Svenska Spellicenser Guide 2024 | Spelinspektionens Regler',
    description: 'Allt om svenska spellicenser från Spelinspektionen. Lär dig skillnaden mellan licensierade och olicensierade casinon, dina rättigheter och skydd.',
    keywords: ['svenska spellicenser', 'spelinspektionen', 'svensk spellicens', 'licensierade casinon', 'casino licens sverige'],
    canonicalUrl: 'https://kasinos.se/se/guider/svenska-licenser',
    structuredData: [
      generateHowToSchema(
        'Så kontrollerar du om ett casino har svensk licens',
        'Guide för att verifiera svenska casinolicenser',
        [
          { name: 'Hitta licensnumret', text: 'Leta efter licensnumret på casinots hemsida, oftast i sidfoten' },
          { name: 'Besök Spelinspektionen', text: 'Gå till Spelinspektionens officiella webbplats' },
          { name: 'Sök efter licensen', text: 'Använd licensregistret för att verifiera licensnumret' },
          { name: 'Kontrollera giltighet', text: 'Se till att licensen är aktiv och gäller för den typ av spel du vill spela' }
        ]
      ),
      generateFAQSchema(faqs)
    ]
  };

  const licenseRequirements = [
    {
      title: 'Ekonomiska Krav',
      icon: Building2,
      requirements: [
        'Minimikapital på 1 miljon kronor',
        'Säkerställd finansiering för verksamheten',
        'Revisorsgranskning av ekonomi',
        'Regelbunden ekonomisk rapportering'
      ]
    },
    {
      title: 'Tekniska Krav',
      icon: Lock,
      requirements: [
        'Säkra spelsystem och IT-infrastruktur',
        'Kryptering av känslig data',
        'Spelloggar och transaktionshistorik',
        'Integreringar med svenska system'
      ]
    },
    {
      title: 'Ansvarsfullt Spelande',
      icon: Shield,
      requirements: [
        'Verktyg för gränsättsning obligatoriska',
        'Integration med Spelpaus-systemet',
        'Identifiering av riskspelande',
        'Utbildning av personal'
      ]
    },
    {
      title: 'Legala Krav',
      icon: Scale,
      requirements: [
        'Svensk juridisk person eller filial',
        'Godkänd verkställande direktör',
        'Regelefterlevnad och kontroller',
        'Årsavgifter till Spelinspektionen'
      ]
    }
  ];

  const playerProtections = [
    {
      title: 'Ekonomiskt Skydd',
      icon: CreditCard,
      protections: [
        'Säkra betalningsmetoder',
        'Skyddade kundmedel',
        'Garanterade utbetalningar',
        'Tvistlösning via ARN'
      ]
    },
    {
      title: 'Personlig Integritet',
      icon: Lock,
      protections: [
        'GDPR-efterlevnad',
        'Säker datahantering',
        'Begränsad datadelning',
        'Rätt till radering'
      ]
    },
    {
      title: 'Ansvarsfullt Spelande',
      icon: Target,
      protections: [
        'Obligatoriska spelgränser',
        'Tillgång till Spelpaus',
        'Riskbedömningar',
        'Stöd och hjälpresurser'
      ]
    }
  ];

  const comparisonData = [
    {
      aspect: 'Lagligt skydd',
      licensed: 'Fullständigt skydd enligt svensk lag',
      unlicensed: 'Begränsat eller inget skydd',
      icon: Shield
    },
    {
      aspect: 'Kundsupport',
      licensed: 'Svensk kundsupport på svenska',
      unlicensed: 'Ofta endast engelska',
      icon: Users
    },
    {
      aspect: 'Betalningar',
      licensed: 'Svenska betalmetoder (Swish, BankID)',
      unlicensed: 'Begränsade alternativ',
      icon: CreditCard
    },
    {
      aspect: 'Tvister',
      licensed: 'ARN och svenska domstolar',
      unlicensed: 'Komplicerad tvistlösning',
      icon: Scale
    },
    {
      aspect: 'Spelansvar',
      licensed: 'Obligatoriska verktyg och Spelpaus',
      unlicensed: 'Frivilliga eller inga verktyg',
      icon: Target
    },
    {
      aspect: 'Skatter',
      licensed: 'Automatisk skattehantering',
      unlicensed: 'Du ansvarar för deklaration',
      icon: FileText
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
                <Scale className="h-8 w-8 text-casino-primary" />
                <Badge variant="secondary" className="text-sm bg-casino-primary/10 text-casino-primary">
                  Svenska Licenser
                </Badge>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-casino-primary via-casino-secondary to-casino-accent bg-clip-text text-transparent">
                Svenska Spellicenser Guide
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                Allt du behöver veta om svenska spellicenser från Spelinspektionen. 
                Förstå dina rättigheter, skydd och varför det är viktigt att välja licensierade casinon.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/se">Utforska Licensierade Casinon</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.spelinspektionen.se" target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4 mr-2" />
                    Besök Spelinspektionen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is a Swedish License */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Vad är en Svensk Spellicens?
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-casino-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-8 w-8 text-casino-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Spelinspektionens Licens</h3>
                    <p className="text-muted-foreground mb-4">
                      Sedan 1 januari 2019 regleras den svenska spelmarknaden av Spelinspektionen. 
                      Alla företag som vill erbjuda hasardspel till svenska konsumenter måste ha en 
                      giltig svensk spellicens.
                    </p>
                    <p className="text-muted-foreground">
                      Licensen är inte bara ett papper - den garanterar att casinot följer strikta 
                      regler för konsumentskydd, ansvarsfullt spelande och säkerhet.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Konsumentskydd</h4>
                  <p className="text-sm text-muted-foreground">
                    Garanterar dina rättigheter och skydd enligt svensk lag
                  </p>
                </Card>
                
                <Card className="p-6 text-center">
                  <Shield className="h-12 w-12 text-casino-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Ansvarsfullt Spelande</h4>
                  <p className="text-sm text-muted-foreground">
                    Obligatoriska verktyg för att skydda dig som spelare
                  </p>
                </Card>

                <Card className="p-6 text-center">
                  <Building2 className="h-12 w-12 text-casino-secondary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Ekonomisk Säkerhet</h4>
                  <p className="text-sm text-muted-foreground">
                    Säkra transaktioner och garanterade utbetalningar
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* License Requirements */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Krav för Svensk Spellicens
            </h2>
            
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              För att få en svensk spellicens måste företag uppfylla strikta krav inom flera områden.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {licenseRequirements.map((category, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="w-12 h-12 bg-casino-primary/10 rounded-full flex items-center justify-center mb-3">
                      <category.icon className="h-6 w-6 text-casino-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-2">
                      {category.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Player Protection */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Ditt Skydd som Spelare
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {playerProtections.map((category, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="w-12 h-12 bg-casino-primary/10 rounded-full flex items-center justify-center mb-3">
                      <category.icon className="h-6 w-6 text-casino-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-2">
                      {category.protections.map((protection, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {protection}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Licensierat vs Olicensierat Casino
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 divide-y">
                  <div className="grid grid-cols-3 bg-muted/50 p-4 font-semibold">
                    <div>Aspekt</div>
                    <div className="text-center text-green-600">Svensk Licens</div>
                    <div className="text-center text-red-600">Utan Licens</div>
                  </div>
                  
                  {comparisonData.map((item, index) => (
                    <div key={index} className="grid grid-cols-3 p-4 items-center">
                      <div className="flex items-center gap-2 font-medium">
                        <item.icon className="h-4 w-4 text-casino-primary" />
                        {item.aspect}
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-400 px-2">
                        {item.licensed}
                      </div>
                      <div className="text-sm text-red-700 dark:text-red-400 px-2">
                        {item.unlicensed}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Verify */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Så Kontrollerar Du en Licens
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-casino-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-casino-primary">1</span>
                      </div>
                      <CardTitle className="text-lg">Hitta Licensnumret</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground mb-3">
                      Leta efter licensnumret på casinots hemsida. Det ska vara tydligt synligt, 
                      oftast i sidfoten eller i avsnittet "Om oss".
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Format: 18DGA-XXXXXXXXX (började med 18DGA från 2019)
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-casino-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-casino-primary">2</span>
                      </div>
                      <CardTitle className="text-lg">Verifiera Licensen</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground mb-3">
                      Gå till Spelinspektionens webbplats och sök efter licensnumret 
                      i deras officiella register över licensinnehavare.
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href="https://www.spelinspektionen.se" target="_blank" rel="noopener noreferrer">
                        Kontrollera Licens
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                      Varning för Falska Licenser
                    </h3>
                    <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
                      Vissa olicensierade casinon kan visa falska licensnummer eller hänvisa 
                      till licenser från andra länder som Malta eller Curacao.
                    </p>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      Endast svenska licenser från Spelinspektionen ger dig fullständigt 
                      skydd enligt svensk lag.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Vanliga Frågor om Svenska Licenser
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <FileText className="h-5 w-5 text-casino-primary" />
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

        {/* Call to Action */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                Välj Alltid Licensierade Casinon
              </h2>
              <p className="text-muted-foreground mb-8">
                Skydda dig själv genom att bara spela på svenska licensierade casinon. 
                Alla casinon vi rekommenderar har giltiga svenska spellicenser.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/se">
                    <Shield className="h-4 w-4 mr-2" />
                    Utforska Säkra Casinon
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/se/guider/ansvarfullt-spelande">
                    <Target className="h-4 w-4 mr-2" />
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