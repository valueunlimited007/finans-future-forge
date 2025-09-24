import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Clock, 
  Users, 
  Phone,
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  HelpCircle
} from 'lucide-react';
import ResponsibleGambling from '@/components/ResponsibleGambling';
import { Separator } from '@/components/ui/separator';

export default function SpelpausGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-rg-primary/10 text-rg-primary px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="h-4 w-4" />
            Ansvarfullt spelande
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Allt om{' '}
            <span className="text-rg-primary">Spelpaus</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Spelpaus.se är ett verktyg för självavstängning som låter dig stänga av 
            dig från allt licensierat spel i Sverige. Gratis, enkelt och säkert.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" className="bg-rg-primary hover:bg-rg-primary/90 text-white" asChild>
              <a href="https://spelpaus.se" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Gå till Spelpaus.se
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://stodlinjen.se" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4 mr-2" />
                Ring Stödlinjen
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <Shield className="h-8 w-8 mx-auto mb-3 text-rg-primary" />
            <div className="text-2xl font-bold mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Av licensierade casinon</div>
          </Card>
          
          <Card className="p-6 text-center">
            <Clock className="h-8 w-8 mx-auto mb-3 text-orange-500" />
            <div className="text-2xl font-bold mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Aktivt dygnet runt</div>
          </Card>
          
          <Card className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-3 text-blue-500" />
            <div className="text-2xl font-bold mb-1">0 kr</div>
            <div className="text-sm text-muted-foreground">Helt kostnadsfritt</div>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Spelpaus */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Vad är Spelpaus?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Spelpaus.se är en kostnadsfri tjänst som låter dig stänga av dig från 
                  allt kommersiellt spel som bedrivs med svensk spellicens. Det inkluderar 
                  casinon, sportspel, poker och andra spelformer online.
                </p>
                
                <p>
                  Tjänsten drivs av Spelinspektionen och är helt frivillig. När du 
                  aktiverar Spelpaus kan du inte spela på några licensierade sajter 
                  förrän perioden är slut eller du återaktiverar ditt spelande.
                </p>

                <div className="bg-rg-primary/10 border border-rg-primary/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-rg-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-rg-primary mb-2">Viktigt att veta</h4>
                      <p className="text-sm text-rg-primary/80">
                        Spelpaus gäller endast för svensklicensierade spelsajter. 
                        Det hindrar inte spel på sajter utan svensk licens.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* How to Use Spelpaus */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Så här använder du Spelpaus</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Badge variant="outline" className="mt-0.5 bg-rg-primary/10 text-rg-primary border-rg-primary/20">
                    1
                  </Badge>
                  <div>
                    <h3 className="font-semibold mb-2">Gå till Spelpaus.se</h3>
                    <p className="text-muted-foreground text-sm">
                      Besök den officiella webbplatsen spelpaus.se. Tjänsten är 
                      tillgänglig dygnet runt, alla dagar på året.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Badge variant="outline" className="mt-0.5 bg-rg-primary/10 text-rg-primary border-rg-primary/20">
                    2
                  </Badge>
                  <div>
                    <h3 className="font-semibold mb-2">Identifiera dig med BankID</h3>
                    <p className="text-muted-foreground text-sm">
                      Logga in med ditt BankID för att verifiera din identitet. 
                      Detta säkerställer att bara du kan påverka din spelstatus.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Badge variant="outline" className="mt-0.5 bg-rg-primary/10 text-rg-primary border-rg-primary/20">
                    3
                  </Badge>
                  <div>
                    <h3 className="font-semibold mb-2">Välj tidsperiod</h3>
                    <p className="text-muted-foreground text-sm">
                      Bestäm hur länge du vill vara avstängd: 1, 3, 6 eller 12 månader. 
                      Du kan också välja permanent avstängning.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Badge variant="outline" className="mt-0.5 bg-rg-primary/10 text-rg-primary border-rg-primary/20">
                    4
                  </Badge>
                  <div>
                    <h3 className="font-semibold mb-2">Bekräfta avstängningen</h3>
                    <p className="text-muted-foreground text-sm">
                      Efter bekräftelse aktiveras Spelpaus inom några minuter och 
                      du kommer inte kunna spela på licensierade sajter.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Time Periods */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Avstängningsperioder</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4">Tillfällig avstängning</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                      <span>1 månad</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                      <span>3 månader</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                      <span>6 månader</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted/50 rounded">
                      <span>12 månader</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Permanent avstängning</h3>
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Tills vidare</h4>
                        <p className="text-sm text-red-700">
                          Permanent avstängning gäller tills du aktivt väljer att 
                          återaktivera ditt spelande. Detta kan ske tidigast efter 
                          3 månader.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Reactivation */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Återaktivera spelandet</h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Om du valt en tillfällig avstängning aktiveras ditt spelande automatiskt 
                  när perioden löper ut. Du behöver inte göra något.
                </p>
                
                <p>
                  För permanent avstängning kan du återaktivera tidigast efter 3 månader 
                  genom att logga in på Spelpaus.se med ditt BankID.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Betänktid</h4>
                      <p className="text-sm text-yellow-700">
                        När du begär återaktivering från permanent avstängning får du 
                        en betänketid på 7 dagar innan spelandet aktiveras igen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* FAQ */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Vanliga frågor</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Kostar det något att använda Spelpaus?</h3>
                  <p className="text-muted-foreground text-sm">
                    Nej, Spelpaus är helt kostnadsfritt. Det finns inga avgifter för 
                    varken avstängning eller återaktivering.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Kan jag använda Spelpaus flera gånger?</h3>
                  <p className="text-muted-foreground text-sm">
                    Ja, du kan använda Spelpaus så många gånger du behöver. Det finns 
                    inga begränsningar för hur ofta du kan stänga av dig.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Vad händer med mina spelkonton?</h3>
                  <p className="text-muted-foreground text-sm">
                    Dina spelkonton förblir aktiva men du kan inte logga in eller spela. 
                    Eventuella pengar på kontona påverkas inte av Spelpaus.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Fungerar Spelpaus på alla spelsajter?</h3>
                  <p className="text-muted-foreground text-sm">
                    Spelpaus fungerar endast på sajter med svensk spellicens. Sajter 
                    utan svensk licens omfattas inte av systemet.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Hjälpresurser</h3>
              <div className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://spelpaus.se" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Spelpaus.se
                  </a>
                </Button>
                
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://stodlinjen.se" target="_blank" rel="noopener noreferrer">
                    <Phone className="h-4 w-4 mr-2" />
                    Stödlinjen (020-819 100)
                  </a>
                </Button>
                
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="https://www.spelinspektionen.se" target="_blank" rel="noopener noreferrer">
                    <Shield className="h-4 w-4 mr-2" />
                    Spelinspektionen
                  </a>
                </Button>
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card className="p-6 bg-rg-primary/10 border-rg-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="h-6 w-6 text-rg-primary" />
                <h3 className="font-semibold text-rg-primary">Akut hjälp</h3>
              </div>
              <p className="text-sm text-rg-primary/80 mb-4">
                Om du har akuta problem med spel, ring Stödlinjen direkt:
              </p>
              <Button size="sm" className="w-full bg-rg-primary hover:bg-rg-primary/90 text-white" asChild>
                <a href="tel:020819100">
                  020-819 100
                </a>
              </Button>
              <p className="text-xs text-rg-primary/60 mt-2 text-center">
                Kostnadsfritt • Öppet dygnet runt
              </p>
            </Card>

            <ResponsibleGambling variant="sidebar" />
          </div>
        </div>
      </section>
    </div>
  );
}