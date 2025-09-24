import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard, 
  Shield, 
  Clock, 
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';
import CasinoComparisonTable from '@/components/CasinoComparisonTable';
import ResponsibleGambling from '@/components/ResponsibleGambling';
import { Separator } from '@/components/ui/separator';
import { CASINO_BRANDS } from '@/data/casino-schema';

export default function CasinoBankIDPage() {
  // Filter casinos that support BankID
  const bankIdCasinos = CASINO_BRANDS.filter(brand => 
    brand.features.bankid && brand.markets.includes('SE')
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
            <CreditCard className="h-4 w-4" />
            BankID-casinon
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Casinon med{' '}
            <span className="text-blue-600">BankID</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kom igång på sekunder med BankID. Snabb registrering, säker 
            verifiering och direktuttag till ditt bankkonto.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Star className="h-4 w-4 mr-2" />
              Topprankade BankID-casinon
            </Button>
            <Button variant="outline" size="lg">
              <Zap className="h-4 w-4 mr-2" />
              Jämför funktioner
            </Button>
          </div>
        </div>
      </section>

      {/* BankID Benefits */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <Clock className="h-8 w-8 mx-auto mb-3 text-blue-600" />
            <div className="text-2xl font-bold mb-1">30 sek</div>
            <div className="text-sm text-muted-foreground">Snabb registrering</div>
          </Card>
          
          <Card className="p-6 text-center">
            <Shield className="h-8 w-8 mx-auto mb-3 text-green-500" />
            <div className="text-2xl font-bold mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Säker verifiering</div>
          </Card>
          
          <Card className="p-6 text-center">
            <CheckCircle className="h-8 w-8 mx-auto mb-3 text-casino-accent" />
            <div className="text-2xl font-bold mb-1">Direkt</div>
            <div className="text-sm text-muted-foreground">Uttag till banken</div>
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
          <h2 className="text-3xl font-bold mb-4">Alla BankID-casinon</h2>
          <p className="text-muted-foreground max-w-2xl">
            Jämför {bankIdCasinos.length} casinon som stöder BankID för snabb registrering och säkra uttag.
          </p>
        </div>
        
        <CasinoComparisonTable 
          brands={bankIdCasinos}
          showFilters={true} 
        />
      </section>

      {/* How BankID Works */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              Så fungerar BankID på casinon
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-0.5 bg-blue-50 text-blue-600 border-blue-200">
                    1
                  </Badge>
                  <div>
                    <h3 className="font-semibold mb-2">Välj BankID-registrering</h3>
                    <p className="text-muted-foreground text-sm">
                      Klicka på "Registrera med BankID" istället för att fylla i formulär.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-0.5 bg-blue-50 text-blue-600 border-blue-200">
                    2
                  </Badge>
                  <div>
                    <h3 className="font-semibold mb-2">Verifiera din identitet</h3>
                    <p className="text-muted-foreground text-sm">
                      Öppna BankID-appen och bekräfta din identitet som vanligt.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Badge variant="outline" className="mt-0.5 bg-blue-50 text-blue-600 border-blue-200">
                    3
                  </Badge>
                  <div>
                    <h3 className="font-semibold mb-2">Börja spela direkt</h3>
                    <p className="text-muted-foreground text-sm">
                      Ditt konto är nu verifierat och redo. Sätt in pengar och börja spela.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-green-50 border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-6 w-6 text-green-600" />
                    <h3 className="font-semibold text-green-800">Fördelar med BankID</h3>
                  </div>
                  <ul className="text-sm text-green-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      Inga formulär att fylla i
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      Automatisk identitetsverifiering
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      Snabbare uttag till bankkonto
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      Högre säkerhet och skydd
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Vanliga frågor om BankID-casinon
          </h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Är BankID-casinon säkra?</h3>
              <p className="text-muted-foreground text-sm">
                Ja, BankID-casinon är ofta säkrare än traditionella registreringar eftersom 
                BankID är kopplat till din riktiga identitet och bankinformation. Detta gör 
                det omöjligt för andra att använda dina uppgifter.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Kan jag använda BankID från vilken bank som helst?</h3>
              <p className="text-muted-foreground text-sm">
                Ja, BankID fungerar oavsett vilken svensk bank du har. Alla större banker 
                i Sverige stöder BankID-tjänsten.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-2">Går uttag snabbare med BankID?</h3>
              <p className="text-muted-foreground text-sm">
                Oftast ja, eftersom ditt bankkonto redan är verifierat via BankID behöver 
                casinot inte göra extra kontroller vid uttag. Detta kan spara flera timmar 
                eller till och med dagar.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Sidebar with RG Widget */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Tips för BankID-registrering</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  BankID gör casinoregistrering enklare och säkrare, men här är några tips 
                  för att få bästa möjliga upplevelse:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-0.5">💡</Badge>
                    <div>
                      <strong className="text-foreground">Håll telefonen redo</strong> - 
                      Se till att din BankID-app är uppdaterad och fungerar innan du börjar.
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-0.5">💡</Badge>
                    <div>
                      <strong className="text-foreground">Kontrollera personuppgifter</strong> - 
                      Din registrering kommer använda samma uppgifter som i din bank.
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-0.5">💡</Badge>
                    <div>
                      <strong className="text-foreground">Spara inloggningsuppgifter</strong> - 
                      Även om registreringen är snabb behöver du fortfarande lösenord för framtida inloggningar.
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
  );
}