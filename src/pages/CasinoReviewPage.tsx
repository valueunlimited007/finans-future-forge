import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Star, 
  Shield, 
  Clock, 
  CreditCard, 
  Users, 
  TrendingUp,
  CheckCircle,
  XCircle,
  ExternalLink,
  Calendar,
  User,
  Gamepad2,
  Smartphone,
  Timer,
  Award
} from 'lucide-react';
import ResponsibleGambling from '@/components/ResponsibleGambling';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import EnhancedSeoHead from '@/components/EnhancedSeoHead';
import { Separator } from '@/components/ui/separator';
import { CASINO_BRANDS, CASINO_REVIEWS, type Brand, type CasinoReview } from '@/data/casino-schema';
import CasinoReviewSeoHead from '@/components/CasinoReviewSeoHead';
import AffiliateButton from '@/components/AffiliateButton';
import LazyImage from '@/components/LazyImage';
import { openGraphGenerator } from '@/lib/seo/openGraphGenerator';
import { 
  generateCasinoProductSchema, 
  generateReviewSchema, 
  generateFAQSchema,
  generateBreadcrumbSchema 
} from '@/lib/seo/structuredData';
import { casinoAnalytics } from '@/lib/analytics/casinoAnalytics';

export default function CasinoReviewPage() {
  const { brandId } = useParams<{ brandId: string }>();
  
  // Find the casino brand
  const casino = CASINO_BRANDS.find(brand => 
    brand.name.toLowerCase().replace(/[^\w]/g, '-') === brandId
  );

  // Find the corresponding review
  const review = casino ? CASINO_REVIEWS.find(r => r.brandId === casino.id) : undefined;

  // Track analytics
  React.useEffect(() => {
    if (casino) {
      casinoAnalytics.trackCasinoReviewView(casino.id, casino.name, casino.rating);
    }
  }, [casino]);

  if (!casino) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Casino inte hittad</h1>
          <p className="text-muted-foreground">Vi kunde inte hitta det casino du söker efter.</p>
        </div>
      </div>
    );
  }

  // Generate SEO data
  const ogData = openGraphGenerator.generateCasinoReview(casino);
  const structuredData = [
    generateCasinoProductSchema(casino),
    generateReviewSchema(casino, review),
    generateBreadcrumbSchema([
      { name: 'Hem', url: '/' },
      { name: 'Casino Recensioner', url: '/se' },
      { name: `${casino.name} Recension`, url: `/se/recension/${casino.name.toLowerCase().replace(/[^\w]/g, '-')}` }
    ]),
    generateFAQSchema([
      {
        question: `Är ${casino.name} säkert att spela på?`,
        answer: `Ja, ${casino.name} är licensierat av Spelinspektionen i Sverige och följer alla svenska regler för spelansvar och konsumentskydd.`
      },
      {
        question: `Vilka betalningsmetoder accepterar ${casino.name}?`,
        answer: `${casino.name} accepterar ${casino.features.bankid ? 'BankID, ' : ''}${casino.features.swish ? 'Swish, ' : ''}bankkort (Visa/Mastercard) och banköverföring.`
      },
      {
        question: `Hur länge tar uttag från ${casino.name}?`,
        answer: `Uttag från ${casino.name} behandlas vanligtvis inom 6-24 timmar till bankkonto.`
      }
    ])
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <>
      <EnhancedSeoHead
        title={ogData.title}
        description={ogData.description}
        keywords={[casino.name, 'casino recension', 'online casino', 'svensk licens', 'spelautomater']}
        canonicalUrl={ogData.url}
        openGraph={ogData}
        structuredData={structuredData}
        hreflang={[
          { locale: 'sv-SE', url: ogData.url },
          { locale: 'sv', url: ogData.url },
          { locale: 'x-default', url: ogData.url }
        ]}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Casino Logo & Basic Info */}
              <div className="flex-shrink-0">
                <Card className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                    <LazyImage
                      src={`/adtraction-logos/${casino.name.toLowerCase()}-logo.png`}
                      alt={`${casino.name} logo`}
                      className="max-w-full max-h-full object-contain"
                      fallbackSrc="/placeholder.svg"
                    />
                  </div>
                  <h1 className="text-2xl font-bold mb-2">{casino.name}</h1>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {renderStars(casino.rating)}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {casino.rating}/5
                    </span>
                  </div>
                  <Badge variant="outline" className="mb-4">
                    <Calendar className="h-3 w-3 mr-1" />
                    Grundat {casino.established}
                  </Badge>
                  
                  <AffiliateButton
                    href={`https://${casino.name.toLowerCase()}.com`}
                    label={`Besök ${casino.name}`}
                    brandId={casino.id}
                    brandName={casino.name}
                    termSlug="casino-recension"
                    className="w-full"
                    variant="default"
                  />
                </Card>
              </div>

            {/* Review Summary */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Shield className="h-4 w-4" />
                Svensk licens
              </div>
              
              <h1 className="text-4xl font-bold mb-4">
                {casino.name} recension
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                {casino.description}
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary flex items-center justify-center gap-1">
                    <Star className="h-5 w-5 fill-current" />
                    {casino.rating}/5
                  </div>
                  <div className="text-sm text-muted-foreground">Betyg</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 flex items-center justify-center gap-1">
                    <Shield className="h-5 w-5" />
                    {casino.features.bankid ? 'Ja' : 'Nej'}
                  </div>
                  <div className="text-sm text-muted-foreground">BankID</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500 flex items-center justify-center gap-1">
                    <CreditCard className="h-5 w-5" />
                    {casino.features.swish ? 'Ja' : 'Nej'}
                  </div>
                  <div className="text-sm text-muted-foreground">Swish</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent flex items-center justify-center gap-1">
                    <Timer className="h-5 w-5" />
                    {review?.kpis.payoutSpeed || '24h'}
                  </div>
                  <div className="text-sm text-muted-foreground">Uttag</div>
                </div>
              </div>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-2">
                {casino.features.payNPlay && (
                  <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-200">
                    <Gamepad2 className="h-3 w-3 mr-1" />
                    Pay-n-Play
                  </Badge>
                )}
                {casino.features.liveCasino && (
                  <Badge variant="secondary" className="bg-purple-500/10 text-purple-600 border-purple-200">
                    <Users className="h-3 w-3 mr-1" />
                    Live Casino
                  </Badge>
                )}
                {casino.features.mobileApp && (
                  <Badge variant="secondary" className="bg-blue-500/10 text-blue-600 border-blue-200">
                    <Smartphone className="h-3 w-3 mr-1" />
                    Mobilapp
                  </Badge>
                )}
                <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-200">
                  <Award className="h-3 w-3 mr-1" />
                  Svensk licens
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Gambling Notice */}
      <section className="container mx-auto px-4 py-6">
        <ResponsibleGambling variant="notice" />
      </section>

      {/* Affiliate Disclosure */}
      <section className="container mx-auto px-4 py-6">
        <AffiliateDisclosure variant="banner" />
      </section>

      {/* Main Review Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pros and Cons */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">För- och nackdelar</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Fördelar
                  </h3>
                  <ul className="space-y-2">
                    {(review?.pros || [
                      'Svensk spellicens från Spelinspektionen',
                      casino.features.bankid ? 'Snabb registrering med BankID' : 'Enkel registreringsprocess',
                      casino.features.swish ? 'Stöder Swish för snabba betalningar' : 'Säkra betalningsmetoder',
                      'Bred spelportfölj från välkända leverantörer',
                      'Svensk kundtjänst på vardagar'
                    ]).map((pro, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    Nackdelar
                  </h3>
                  <ul className="space-y-2">
                    {(review?.cons || [
                      'Begränsad bonus enligt svensk lag',
                      'Insättningsgränser kan vara låga för vissa',
                      'Kundtjänst inte tillgänglig 24/7'
                    ]).map((con, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Enhanced Detailed Review */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Detaljerad recension</h2>
              
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    Säkerhet och licens
                  </h3>
                  <p className="mb-3">
                    {casino.name} är licensierat av Spelinspektionen i Sverige och följer alla 
                    nationella regler för spelansvar och konsumentskydd. Casinot använder 
                    SSL-kryptering för att skydda alla transaktioner och personuppgifter.
                  </p>
                  {review?.evidence && (
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground text-sm mb-2">Vår verifiering:</h4>
                      <ul className="space-y-1 text-sm">
                        {review.evidence.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Gamepad2 className="h-5 w-5 text-blue-600" />
                    Spelutbud
                  </h3>
                  <p className="mb-3">
                    Spelportföljen inkluderar spelautomater från ledande leverantörer{review?.kpis.gameProviders ? 
                      ` som ${review.kpis.gameProviders.join(', ')}` : ' som NetEnt, Microgaming och Play\'n GO'
                    }. {casino.features.liveCasino ? 
                      'Live casino-sektionen drivs av Evolution Gaming och erbjuder blackjack, roulette och baccarat med svensktalande dealers.' : 
                      'Casinot fokuserar främst på spelautomater och bordsspel.'
                    }
                  </p>
                  {review?.kpis.rtpInfo && (
                    <div className="bg-muted/50 p-3 rounded-lg text-sm">
                      <strong>RTP-information:</strong> {review.kpis.rtpInfo}
                    </div>
                  )}
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-purple-600" />
                    Betalningar
                  </h3>
                  <p className="mb-3">
                    {casino.features.bankid && 'BankID stöds för snabb registrering och verifiering. '}
                    {casino.features.swish && 'Swish är tillgängligt för insättningar. '}
                    Uttag behandlas {review?.kpis.payoutSpeed || 'vanligtvis inom 24 timmar'} till bankkonto. 
                    Alla transaktioner är säkra och spårbara.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-foreground">Insättningsmetoder:</strong>
                      <ul className="mt-1 space-y-1">
                        {casino.features.bankid && <li>• BankID</li>}
                        {casino.features.swish && <li>• Swish</li>}
                        <li>• Bankkort (Visa/Mastercard)</li>
                        <li>• Banköverföring</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-foreground">Uttagstid:</strong>
                      <ul className="mt-1 space-y-1">
                        <li>• Bankkonto: {review?.kpis.payoutSpeed || '6-24h'}</li>
                        <li>• Verifieringstid: {review?.kpis.kycSpeed || '2-4h med BankID'}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-orange-600" />
                    Kundtjänst
                  </h3>
                  <p>
                    {review?.kpis.supportLanguages ? 
                      `Kundtjänst finns på ${review.kpis.supportLanguages.join(', ')}` : 
                      'Svensk kundtjänst'
                    } och är tillgänglig via livechatt och e-post på vardagar 
                    09:00-21:00. Supportpersonalen är välutbildad och kan hjälpa till med 
                    tekniska frågor, betalningar och spelansvar.
                  </p>
                </div>
              </div>
            </Card>

            {/* Test Methodology */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Vår testmetodik</h2>
              <div className="space-y-4 text-sm text-muted-foreground">
                <p>
                  Vi testar alla casinon enligt samma standardiserade process för att 
                  säkerställa rättvisa och jämförbara recensioner.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Testområden</h4>
                    <ul className="space-y-1">
                      <li>• Registreringsprocess och verifiering</li>
                      <li>• Insättnings- och uttagsmetoder</li>
                      <li>• Spelutbud och leverantörer</li>
                      <li>• Kundtjänst responstider</li>
                      <li>• Mobilupplevelse</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Betygsystem</h4>
                    <ul className="space-y-1">
                      <li>• 5/5: Exceptionellt</li>
                      <li>• 4/5: Mycket bra</li>
                      <li>• 3/5: Bra</li>
                      <li>• 2/5: Godkänt</li>
                      <li>• 1/5: Underkänt</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enhanced Quick Info */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Snabbfakta
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Grundat:</span>
                  <span className="font-medium">{casino.established}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Licens:</span>
                  <span className="font-medium">Sverige (SGA)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Språk:</span>
                  <span className="font-medium">{review?.kpis.supportLanguages?.join(', ') || 'Svenska, Engelska'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Valuta:</span>
                  <span className="font-medium">SEK</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mobilapp:</span>
                  <span className="font-medium">{casino.features.mobileApp ? 'Ja (iOS, Android)' : 'Webbläsare'}</span>
                </div>
                {review?.kpis.kycSpeed && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Verifiering:</span>
                    <span className="font-medium">{review.kpis.kycSpeed}</span>
                  </div>
                )}
                {review?.kpis.rtpInfo && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">RTP:</span>
                    <span className="font-medium">{review.kpis.rtpInfo}</span>
                  </div>
                )}
              </div>
            </Card>

            {/* Enhanced Payment Methods */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Betalningsmetoder
              </h3>
              <div className="space-y-3">
                {casino.features.bankid && (
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-blue-50 dark:bg-blue-950/20">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">BankID</div>
                      <div className="text-xs text-muted-foreground">Snabb & säker</div>
                    </div>
                  </div>
                )}
                {casino.features.swish && (
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-purple-50 dark:bg-purple-950/20">
                    <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                      <Smartphone className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Swish</div>
                      <div className="text-xs text-muted-foreground">Mobila betalningar</div>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3 p-2 rounded-lg bg-orange-50 dark:bg-orange-950/20">
                  <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                    <CreditCard className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">Visa/Mastercard</div>
                    <div className="text-xs text-muted-foreground">Bankkort</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-green-50 dark:bg-green-950/20">
                  <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">Banköverföring</div>
                    <div className="text-xs text-muted-foreground">Direktöverföring</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Author Info */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Marcus Andersson</div>
                  <div className="text-xs text-muted-foreground">Casino-expert</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Marcus har över 8 års experience inom online casino-branschen och 
                specialiserar sig på svenska marknaden.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>Uppdaterad: {review?.updatedAt || '24 sep 2025'}</span>
              </div>
            </Card>

            <ResponsibleGambling variant="sidebar" />

            {/* CTA Card */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="text-center">
                <h3 className="font-bold mb-2">Redo att spela?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Kom ihåg att spela ansvarsfullt och bara med pengar du har råd att förlora.
                </p>
                <AffiliateButton
                  href={`https://${casino.name.toLowerCase()}.com`}
                  label={`Spela på ${casino.name}`}
                  brandId={casino.id}
                  brandName={casino.name}
                  termSlug="casino-recension-sidebar"
                  className="w-full"
                  variant="default"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}