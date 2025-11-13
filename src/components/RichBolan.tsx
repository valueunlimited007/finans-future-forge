import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, TrendingDown, Shield, Clock, Calculator, CheckCircle } from "lucide-react";
import BolanComparisonTable from "./BolanComparisonTable";
import BolanFAQ from "./BolanFAQ";
import BolanGuideSteps from "./BolanGuideSteps";
import CustomBreadcrumb from "./CustomBreadcrumb";
import FinancialCalculator from "@/components/FinancialCalculator";
import OffersContainer from "./OffersContainer";
import RelatedPagesCluster from "./RelatedPagesCluster";

export default function RichBolan() {
  const breadcrumbItems = [
    { label: "Bolån" }
  ];
  
  return (
    <>
      <Helmet>
        <title>Bolån - Jämför bolåneräntor från Sveriges banker 2025 | Finansguiden.se</title>
        <meta name="description" content="Jämför bolån från Sveriges banker. Nominell ränta från 0,84%. Endast 1 kreditupplysning. ✓ Personlig rådgivning ✓ Lånelöfte ✓ Bästa villkor 2025." />
        <link rel="canonical" href="https://finansguiden.se/bolan" />
        <meta property="og:title" content="Bolån - Jämför bolåneräntor 2025" />
        <meta property="og:description" content="Hitta bästa bolånet. Jämför räntor från flera banker med endast 1 UC-kontroll." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            "name": "Bolån",
            "description": "Jämför bolån från Sveriges ledande banker",
            "provider": {
              "@type": "FinancialService",
              "name": "Finansguiden.se"
            }
          })}
        </script>
      </Helmet>

      <main className="pt-[48px] sm:pt-[64px] md:pt-[80px] lg:pt-[96px]">
        <div className="container mx-auto max-w-6xl px-4">
          <CustomBreadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-950 dark:to-blue-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Bolån med <span className="text-cyan-600">bästa räntan</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Jämför bolån från flera banker samtidigt. Nominell ränta från 0,84% och endast 1 kreditupplysning. 
                Låna 150 000 - 15 000 000 kr för din bostadsköp.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Button asChild size="lg" className="fg-btn text-lg px-8 shadow-lg">
                  <Link to="#jamfor">Jämför bolån nu</Link>
                </Button>
                <Button 
                  size="lg" 
                  className="fg-btn--secondary text-lg px-8"
                  onClick={() => {
                    const element = document.getElementById('kalkylator');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Räkna bolån
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <Badge variant="secondary">✓ Från 0,84% nominell ränta</Badge>
                <Badge variant="secondary">✓ Endast 1 UC-kontroll</Badge>
                <Badge variant="secondary">✓ Jämför flera banker</Badge>
                <Badge variant="secondary">✓ Personlig rådgivning</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Comparison */}
        <section id="jamfor" className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Bolåneförmedlare just nu</h2>
            
            <OffersContainer 
              category="bolan"
              limit={10}
              className="mb-12" 
            />

            {/* Info about mortgage intermediary */}
            <Card className="bg-cyan-50 dark:bg-cyan-950/30 border-cyan-200 dark:border-cyan-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-600" />
                  Varför använda en bolåneförmedlare?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  När du använder en bolåneförmedlare som Ordna Bolån behöver du bara göra <strong>en ansökan</strong> som 
                  skickas till flera banker samtidigt. Detta innebär att endast <strong>en kreditupplysning</strong> tas, vilket 
                  skyddar din kreditvärdighet jämfört med om du skulle ansöka hos varje bank separat.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Endast 1 UC:</strong> Skyddar din kreditvärdighet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Jämför flera banker:</strong> Automatisk jämförelse av alla erbjudanden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Personlig rådgivning:</strong> Licensierade bolånehandläggare hjälper dig</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Snabbare process:</strong> Från ansökan till godkänt lån</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="kalkylator" className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Räkna på ditt bolån</h2>
              <p className="text-xl text-muted-foreground">
                Använd vår kalkylator för att beräkna månadskostnad och amortering
              </p>
            </div>
            <FinancialCalculator />
          </div>
        </section>

        {/* What is a mortgage */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Vad är ett bolån?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    Grundläggande om bolån
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Ett bolån är ett lån med din bostad som säkerhet. Du kan låna upp till 85% av bostadens värde, 
                    och de återstående 15% måste du ha som kontantinsats. Bolån har generellt lägre ränta än 
                    privatlån eftersom banken har säkerhet i fastigheten.
                  </p>
                  <p>
                    Räntan kan vara antingen rörlig eller bunden på 1, 2, 3, 5 eller 10 år. Många väljer en 
                    kombination av olika bindningstider för att balansera risk och kostnad.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    Amorteringskrav
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Sedan 2016 finns amorteringskrav på bolån i Sverige:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-semibold min-w-[60px]">70-85%:</span>
                      <span>Minst 2% amortering per år av lånebeloppet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold min-w-[60px]">50-70%:</span>
                      <span>Minst 1% amortering per år av lånebeloppet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold min-w-[60px]">Under 50%:</span>
                      <span>Inget krav på amortering</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    Belåningsgraden räknas som lånebelopp delat med bostadens värde.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Jämför olika bolånetyper</h2>
            <BolanComparisonTable />
          </div>
        </section>

        {/* Key terms */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Viktiga begrepp att känna till</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Kontantinsats</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Den del av köpeskillingen som du måste ha i egen kapital. Minst 15% av bostadens värde 
                    enligt lagar och regler. Högre kontantinsats ger ofta bättre ränta.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Belåningsgrad</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Hur stor del av bostadens värde som är belånad. Räknas som lånebelopp / bostadens värde. 
                    Belåningsgraden påverkar både ränta och amorteringskrav.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Lånelöfte</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ett preliminärt besked från banken om hur mycket du kan låna. Behövs ofta för att kunna 
                    delta i budgivning. Giltigt i 2-3 månader.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Nominell ränta</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Den rena låneräntan utan avgifter. Används för att beräkna månatliga räntekostnader. 
                    Jämför alltid nominell ränta mellan olika banker.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Effektiv ränta</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Inkluderar nominell ränta plus alla avgifter. Ger den verkliga årskostnaden för lånet. 
                    Bra för att jämföra totalkostnad.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rak amortering</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Du betalar samma amorteringsbelopp varje månad. Totala månadskostnaden sjunker över tid 
                    eftersom räntan räknas på lägre skuld.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Guide Steps */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <BolanGuideSteps />
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <BolanFAQ />
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Relaterade sidor</h2>
              <p className="text-muted-foreground">Läs mer inom samma område</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/bostadsmarknad-analys" className="group">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-lg">
                      Bostadsmarknadsanalys 2025
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Läs vår expertanalys av bostadsmarknaden</CardDescription>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/privatlan" className="group">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-lg">
                      Privatlån
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Jämför privatlån om du behöver lån utan säkerhet</CardDescription>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/manadssparande-guide" className="group">
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-lg">
                      Månadssparande
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Bygg kapital för din kontantinsats</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
