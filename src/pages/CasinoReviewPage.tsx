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
  User
} from 'lucide-react';
import ResponsibleGambling from '@/components/ResponsibleGambling';
import { Separator } from '@/components/ui/separator';
import { CASINO_BRANDS, type Brand } from '@/data/casino-schema';

export default function CasinoReviewPage() {
  const { brandId } = useParams<{ brandId: string }>();
  
  // Find the casino brand
  const casino = CASINO_BRANDS.find(brand => 
    brand.name.toLowerCase().replace(/[^\w]/g, '-') === brandId
  );

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Casino Logo & Basic Info */}
            <div className="flex-shrink-0">
              <Card className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                  <img 
                    src={`/adtraction-logos/${casino.name.toLowerCase()}-logo.png`}
                    alt={`${casino.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder.svg';
                    }}
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
                  Grundat {casino.established}
                </Badge>
                
                <Button className="w-full bg-casino-primary hover:bg-casino-primary/90">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Besök {casino.name}
                </Button>
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-casino-primary">
                    {casino.rating}/5
                  </div>
                  <div className="text-sm text-muted-foreground">Betyg</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {casino.features.bankid ? 'Ja' : 'Nej'}
                  </div>
                  <div className="text-sm text-muted-foreground">BankID</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">
                    {casino.features.swish ? 'Ja' : 'Nej'}
                  </div>
                  <div className="text-sm text-muted-foreground">Swish</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-casino-accent">
                    24h
                  </div>
                  <div className="text-sm text-muted-foreground">Uttag</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsible Gambling Notice */}
      <section className="container mx-auto px-4 py-6">
        <ResponsibleGambling variant="notice" />
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
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      Svensk spellicens från Spelinspektionen
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {casino.features.bankid ? 'Snabb registrering med BankID' : 'Enkel registreringsprocess'}
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {casino.features.swish ? 'Stöder Swish för snabba betalningar' : 'Säkra betalningsmetoder'}
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      Bred spelportfölj från välkända leverantörer
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      Svensk kundtjänst på vardagar
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                    <XCircle className="h-5 w-5" />
                    Nackdelar
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      Begränsad bonus enligt svensk lag
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      Insättningsgränser kan vara låga för vissa
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      Kundtjänst inte tillgänglig 24/7
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Detailed Review */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Detaljerad recension</h2>
              
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Säkerhet och licens</h3>
                  <p>
                    {casino.name} är licensierat av Spelinspektionen i Sverige och följer alla 
                    nationella regler för spelansvar och konsumentskydd. Casinot använder 
                    SSL-kryptering för att skydda alla transaktioner och personuppgifter.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Spelutbud</h3>
                  <p>
                    Spelportföljen inkluderar spelautomater från ledande leverantörer som 
                    NetEnt, Microgaming och Play'n GO. Live casino-sektionen drivs av 
                    Evolution Gaming och erbjuder blackjack, roulette och baccarat med 
                    svensktalande dealers.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Betalningar</h3>
                  <p>
                    {casino.features.bankid && 'BankID stöds för snabb registrering och verifiering. '}
                    {casino.features.swish && 'Swish är tillgängligt för insättningar. '}
                    Uttag behandlas vanligtvis inom 24 timmar till bankkonto. Alla transaktioner 
                    är säkra och spårbara.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Kundtjänst</h3>
                  <p>
                    Svensk kundtjänst är tillgänglig via livechatt och e-post på vardagar 
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
            {/* Quick Info */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Snabbfakta</h3>
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
                  <span className="font-medium">Svenska, Engelska</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Valuta:</span>
                  <span className="font-medium">SEK</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mobilapp:</span>
                  <span className="font-medium">Ja (iOS, Android)</span>
                </div>
              </div>
            </Card>

            {/* Payment Methods */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Betalningsmetoder</h3>
              <div className="space-y-2">
                {casino.features.bankid && (
                  <div className="flex items-center gap-2 text-sm">
                    <CreditCard className="h-4 w-4 text-blue-600" />
                    <span>BankID</span>
                  </div>
                )}
                {casino.features.swish && (
                  <div className="flex items-center gap-2 text-sm">
                    <CreditCard className="h-4 w-4 text-purple-600" />
                    <span>Swish</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm">
                  <CreditCard className="h-4 w-4 text-orange-600" />
                  <span>Visa/Mastercard</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CreditCard className="h-4 w-4 text-green-600" />
                  <span>Banköverföring</span>
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
                <span>Uppdaterad: 24 sep 2025</span>
              </div>
            </Card>

            <ResponsibleGambling variant="sidebar" />
          </div>
        </div>
      </section>
    </div>
  );
}