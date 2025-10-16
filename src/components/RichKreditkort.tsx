import React from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Shield, TrendingUp, Users, Clock, CheckCircle, XCircle, Info, Calculator, Star, CreditCard, Gift, Plane } from "lucide-react";
import CreditCardComparisonTable from "./CreditCardComparisonTable";
import CreditCardFAQ from "./CreditCardFAQ";
import CreditCardGuideSteps from "./CreditCardGuideSteps";
import CustomBreadcrumb from "./CustomBreadcrumb";
import ConsumerCreditWarning from "./ConsumerCreditWarning";

export default function RichKreditkort() {
  const breadcrumbItems = [
    { label: "Kreditkort" }
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Vad är ett kreditkort och hur fungerar det?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ett kreditkort ger dig tillgång till en kredit upp till en förutbestämd gräns. Du kan använda kortet för köp och kontantuttag, och betalar tillbaka det använda beloppet antingen helt eller delvis varje månad."
        }
      },
      {
        "@type": "Question",
        "name": "Vilka krav ställs för att få ett kreditkort?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vanliga krav inkluderar: minst 18 års ålder, svensk personnummer, fast inkomst (ofta minst 10 000-15 000 kr/månad), god kreditvärdighet enligt UC, ingen pågående skuldsanering, och fast bostadsadress i Sverige."
        }
      },
      {
        "@type": "Question",
        "name": "Vad kostar det att ha kreditkort?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kostnader inkluderar: årsavgift (0-1500 kr), ränta på outnyttjat saldo (8-25% årligen), uttaksavgifter (25-50 kr + procent), valutaavgifter (1-3% för utlandsköp), och förseningsavgifter vid sena betalningar."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Kreditkort - Jämför bästa kreditkorten 2025 | Finansguiden.se</title>
        <meta name="description" content="Jämför 10+ kreditkort med cashback, miles och förmåner. ✓ Upp till 3% cashback ✓ Reseförsäkringar ✓ Räntefria dagar ✓ Ingen årsavgift. Hitta perfekta kortet 2025." />
        <link rel="canonical" href="https://finansguiden.se/kreditkort" />
        <meta property="og:title" content="Kreditkort - Jämför bästa kreditkorten 2025" />
        <meta property="og:description" content="Hitta bästa kreditkortet med cashback, bonusprogram och förmåner. Jämför över 10 olika kort från svenska banker." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            "name": "Kreditkort",
            "description": "Jämför kreditkort med cashback, bonusprogram och reseförmåner",
            "provider": {
              "@type": "FinancialService",
              "name": "Finansguiden.se"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>
      </Helmet>

      <main className="pt-[48px] sm:pt-[64px] md:pt-[80px] lg:pt-[96px]">
        <div className="container mx-auto max-w-6xl px-4">
          <CustomBreadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950 dark:to-violet-900">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bästa <span className="text-violet-600">kreditkorten</span> 2025
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Jämför 10+ kreditkort med cashback, miles och reseförmåner. Hitta det perfekta kortet 
              för dina behov och spara pengar på dina köp med upp till 3% cashback.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 bg-violet-600 text-white hover:bg-violet-700 shadow-lg">
                Jämför kreditkort nu
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white">
                Kreditkort-guiden
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center text-sm mb-8">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <CheckCircle className="w-4 h-4 mr-1" />
                Upp till 3% cashback
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                <CreditCard className="w-4 h-4 mr-1" />
                10+ kort jämförda
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                <Clock className="w-4 h-4 mr-1" />
                56 räntefria dagar
              </Badge>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                <Plane className="w-4 h-4 mr-1" />
                Miles & reseförmåner
              </Badge>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-600">3%</div>
                <div className="text-sm text-muted-foreground">Max cashback</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-600">56</div>
                <div className="text-sm text-muted-foreground">Räntefria dagar</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-600">0 kr</div>
                <div className="text-sm text-muted-foreground">Årsavgift möjligt</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-violet-600">10+</div>
                <div className="text-sm text-muted-foreground">Kort jämförda</div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8 px-4 bg-amber-50 border-y border-amber-200">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-amber-300">
              <CardHeader>
                <CardTitle className="text-amber-800 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6" />
                  Viktigt att veta innan du ansöker om kreditkort
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-amber-700">
                  Kreditkort kan vara mycket fördelaktiga när de används ansvarsfullt, men kan leda till 
                  höga kostnader om du inte betalar av saldot i tid. Räntor på kreditkort är ofta 15-25% årligen.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-amber-800">✓ Fördelar med kreditkort:</h4>
                    <ul className="space-y-1 text-amber-700">
                      <li>• Cashback och bonuspoäng på köp</li>
                      <li>• 30-56 räntefria dagar</li>
                      <li>• Reseförsäkringar och köpskydd</li>
                      <li>• Bygger kredithistorik</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-amber-800">⚠️ Viktigt att tänka på:</h4>
                    <ul className="space-y-1 text-amber-700">
                      <li>• Höga räntor om du inte betalar i tid</li>
                      <li>• Risk för överskuldsättning</li>
                      <li>• Årsavgifter kan äta upp fördelarna</li>
                      <li>• Påverkar kreditvärdigheten</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-4">Jämför kreditkort 2025</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Vi har jämfört 10 populära kreditkort från svenska banker och kortutgivare. 
              Här hittar du allt från cashback-kort till premiumkort med exklusiva förmåner.
            </p>
            <CreditCardComparisonTable />
            
            <ConsumerCreditWarning />
          </div>
        </section>

        {/* Step-by-step Guide */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <CreditCardGuideSteps />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <CreditCardFAQ />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-violet-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Redo att hitta ditt perfekta kreditkort?
            </h2>
            <p className="text-xl mb-8">
              Jämför över 10 kreditkort och hitta det som passar dina behov bäst. 
              Få cashback, miles eller andra förmåner på dina dagliga köp.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Jämför kreditkort nu
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white bg-transparent hover:bg-white hover:text-violet-600">
                Läs mer om kreditkort
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}