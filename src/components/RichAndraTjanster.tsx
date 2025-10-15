import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Shield, DollarSign, Globe, Wallet } from "lucide-react";
import OffersContainer from "./OffersContainer";
import AndraTjansterGuideSteps from "./AndraTjansterGuideSteps";
import AndraTjansterFAQ from "./AndraTjansterFAQ";
import BreadcrumbNavigation from "./BreadcrumbNavigation";
import FinancialTrustIndicators from "./FinancialTrustIndicators";

export default function RichAndraTjanster() {
  const breadcrumbItems = [
    { label: "Hem", path: "/" },
    { label: "Andra finansiella tjänster", path: "/andra-tjanster" }
  ];

  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FinancialService",
        "name": "Andra finansiella tjänster - Finansguiden.se",
        "description": "Jämför valutaväxling med bästa kurserna och högavkastande sparkonton. ChangeGroup och SaveLend.",
        "url": "https://finansguiden.se/andra-tjanster",
        "provider": {
          "@type": "Organization",
          "name": "Finansguiden.se",
          "url": "https://finansguiden.se/"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Hem",
            "item": "https://finansguiden.se/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Andra finansiella tjänster",
            "item": "https://finansguiden.se/andra-tjanster"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Andra finansiella tjänster - Valutaväxling & Sparande | Finansguiden</title>
        <meta name="description" content="Jämför valutaväxling med bästa kurserna och högavkastande sparkonton. ChangeGroup för valuta och SaveLend FastRäntekonto med 5,5% ränta. Oberoende jämförelser." />
        <link rel="canonical" href="https://finansguiden.se/andra-tjanster" />
        <meta property="og:title" content="Andra finansiella tjänster - Valutaväxling & Sparande | Finansguiden" />
        <meta property="og:description" content="Jämför valutaväxling med bästa kurserna och högavkastande sparkonton. ChangeGroup och SaveLend." />
        <meta property="og:url" content="https://finansguiden.se/andra-tjanster" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <BreadcrumbNavigation items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="py-12 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Andra finansiella tjänster - Valutaväxling och Sparande
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Utforska smarta alternativ för valutaväxling och högavkastande sparkonton. 
                Vi hjälper dig hitta bästa växelkurserna och trygga sparalternativ med högre ränta än traditionella sparkonton.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button asChild size="lg" className="fg-btn">
                  <a href="#jamfor-tjanster">Jämför tjänster</a>
                </Button>
              <Button asChild size="lg" className="fg-btn">
                <a href="#guide">Läs guide</a>
              </Button>
              </div>
              <div className="flex flex-wrap gap-3 justify-center pt-6">
                <Badge variant="secondary" className="text-sm">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Oberoende jämförelser
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  <Shield className="w-4 h-4 mr-1" />
                  Säkra tjänster
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Högre avkastning
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Offers Section */}
        <section id="jamfor-tjanster" className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <OffersContainer 
              category="ovriga" 
              limit={10}
              title="Jämför våra partners"
            />
          </div>
        </section>

        {/* Services Info Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Våra finansiella tjänster</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* ChangeGroup - Valutaväxling */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">ChangeGroup - Valutaväxling</CardTitle>
                      <CardDescription>Bästa kurserna för din valuta</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    ChangeGroup erbjuder konkurrenskraftiga växelkurser för alla större valutor. 
                    Oavsett om du reser utomlands eller behöver växla valuta för onlineshopping, 
                    hjälper ChangeGroup dig att få mer för dina pengar.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Fördelar:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Konkurrenskraftiga växelkurser jämfört med banker</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Säker och snabb service både online och i butik</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Fysiska kontor i flera städer för personlig service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Ingen dold kostnad - tydliga villkor</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-700">
                      <strong>Perfekt för:</strong> Resenärer, onlineshoppare och företag som hanterar flera valutor
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* SaveLend - FastRäntekonto */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Wallet className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">SaveLend - FastRäntekonto</CardTitle>
                      <CardDescription>5,5% årsränta med kapitalskydd</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    SaveLends FastRäntekonto erbjuder 5,5% fast årsränta med kapitalskydd från Bricknode. 
                    Ett smart alternativ till traditionella sparkonton som ger betydligt högre avkastning 
                    samtidigt som ditt kapital är skyddat.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Fördelar:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">5,5% fast årsränta - mycket högre än sparkonton</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Kapitalskydd via Bricknode - ditt insatta belopp är säkrat</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">ESMA-reglerat - säkerhet och transparens</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Bindningstid 6-12 månader beroende på val</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-green-700">
                      <strong>Perfekt för:</strong> Sparare som söker högre avkastning och kan binda pengarna 6-12 månader
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Guide Steps Section */}
        <section id="guide" className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <AndraTjansterGuideSteps />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <AndraTjansterFAQ />
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <FinancialTrustIndicators />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Redo att komma igång?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Jämför valutaväxling och högavkastande sparkonton från våra partners. 
              Hitta tjänsten som passar dig bäst.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button asChild size="lg" className="fg-btn">
                <a href="#jamfor-tjanster">Jämför tjänster</a>
              </Button>
              <Button asChild size="lg" className="fg-btn">
                <Link to="/">Tillbaka till startsidan</Link>
              </Button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
