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
import CustomBreadcrumb from "./CustomBreadcrumb";
import ConsumerCreditWarning from "./ConsumerCreditWarning";

export default function RichAndraTjanster() {
  const breadcrumbItems = [
    { label: "Andra finansiella tjänster" }
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
        <title>Andra finansiella tjänster - Valutaväxling, Sparande & Pension | Finansguiden</title>
        <meta name="description" content="Jämför valutaväxling, högavkastande sparkonton och pensionsrådgivning. ChangeGroup, SaveLend och Pensionera. Oberoende jämförelser." />
        <link rel="canonical" href="https://finansguiden.se/andra-tjanster" />
        <meta property="og:title" content="Andra finansiella tjänster - Valutaväxling, Sparande & Pension | Finansguiden" />
        <meta property="og:description" content="Jämför valutaväxling, högavkastande sparkonton och pensionsrådgivning. ChangeGroup, SaveLend och Pensionera." />
        <meta property="og:url" content="https://finansguiden.se/andra-tjanster" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <main className="pt-[48px] sm:pt-[64px] md:pt-[80px] lg:pt-[96px]">
        <div className="container mx-auto max-w-6xl px-4">
          <CustomBreadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Andra finansiella tjänster - <span className="text-blue-600">Valutaväxling, Sparande och Pension</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Utforska smarta alternativ för valutaväxling, högavkastande sparkonton och pensionsrådgivning. 
                Vi hjälper dig hitta bästa växelkurserna, trygga sparalternativ och full koll på din pension.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Button asChild size="lg" className="fg-btn text-lg px-8 shadow-lg">
                  <a href="#jamfor-tjanster">Jämför tjänster</a>
                </Button>
                <Button 
                  size="lg" 
                  className="fg-btn--secondary text-lg px-8"
                  asChild
                >
                  <a href="#guide">Läs guide</a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <Badge variant="secondary">✓ Oberoende jämförelser</Badge>
                <Badge variant="secondary">✓ Säkra tjänster</Badge>
                <Badge variant="secondary">✓ Högre avkastning</Badge>
                <Badge variant="secondary">✓ Transparent affiliatemodell</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services - CTA Cards */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Våra smarta finanslösningar</h2>
              <p className="text-xl text-muted-foreground">
                Upptäck tjänster som hjälper dig spara pengar och planera din framtid
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {/* ChangeGroup Card */}
              <Card data-fg-card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/adtraction-logos/changegroup-logo.png" 
                      alt="ChangeGroup logotyp" 
                      className="h-12 object-contain"
                    />
                  </div>
                  <CardTitle>ChangeGroup</CardTitle>
                  <CardDescription>
                    Bättre växelkurser än banker. Växla valuta enkelt online eller i butik.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Konkurrenskraftiga kurser</li>
                    <li>• Online & fysiska kontor</li>
                    <li>• Snabb service</li>
                    <li>• Inga dolda kostnader</li>
                  </ul>
                  <Button asChild className="w-full fg-btn">
                    <a href="https://go.adt231.net/t/t?a=1841663863&as=2005939977&t=2&tk=1" target="_blank" rel="noopener noreferrer">
                      Växla valuta →
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* SaveLend Card */}
              <Card data-fg-card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/adtraction-logos/savelend-logo.png" 
                      alt="SaveLend logotyp" 
                      className="h-12 object-contain"
                    />
                  </div>
                  <CardTitle>SaveLend</CardTitle>
                  <CardDescription>
                    5,5% fast årsränta med kapitalskydd. Högre avkastning än sparkonton.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• 5,5% fast årsränta</li>
                    <li>• Kapitalskydd via Bricknode</li>
                    <li>• ESMA-reglerat</li>
                    <li>• Bindningstid 6-12 månader</li>
                  </ul>
                  <Button asChild className="w-full fg-btn">
                    <a href="https://go.adt231.net/t/t?a=1895536547&as=2005939977&t=2&tk=1" target="_blank" rel="noopener noreferrer">
                      Öppna sparkonto →
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Pensionera Card */}
              <Card data-fg-card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/adtraction-logos/pensionera-logo.png" 
                      alt="Pensionera logotyp" 
                      className="h-12 object-contain"
                    />
                  </div>
                  <CardTitle>Pensionera</CardTitle>
                  <CardDescription>
                    Full koll på din pension. Samlar all information och ger dig prognoser.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Pensionsöversikt från alla källor</li>
                    <li>• Prognoser för framtida uttag</li>
                    <li>• Hjälp med försäkringar</li>
                    <li>• Livförsäkringar inkluderade</li>
                  </ul>
                  <Button asChild className="w-full fg-btn">
                    <a href="https://go.adt231.net/t/t?a=1870932183&as=2005939977&t=2&tk=1" target="_blank" rel="noopener noreferrer">
                      Ta kontroll över din pension →
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Offers Section */}
        <section id="jamfor-tjanster" className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <OffersContainer 
              category="ovriga" 
              limit={10}
              title="Jämför våra partners"
            />
            
            <ConsumerCreditWarning />
          </div>
        </section>

        {/* Services Info Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Våra finansiella tjänster</h2>
            <div className="grid md:grid-cols-3 gap-8">
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

              {/* Pensionera - Pensionsrådgivning */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Pensionera - Pensionsrådgivning</CardTitle>
                      <CardDescription>Full koll på din pension</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Pensionera hjälper dig få fullständig översikt över din pension från alla källor. 
                    Med omfattande rådgivning täcker vi allmän-, tjänste- och privata pensionsplaner. 
                    Vi ger dig prognoser, hjälper med försäkringsflyttar och säkerställer rätt skydd.
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Så här fungerar det:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Registrera dig enkelt</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Invänta inhämtning av din pensionsinformation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Ta kontroll över ditt sparande med detaljerad översikt</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Fördelar:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Sammanställer din hela pensionsportfölj</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Prognoser för framtida uttag</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Hjälp med försäkringsförhandlingar och flyttar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Livförsäkringar för extra trygghet</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <p className="text-sm text-purple-700">
                      <strong>Perfekt för:</strong> Alla som vill ha fullständig översikt och kontroll över sin pension och framtida ekonomi
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

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Redo att komma igång?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Jämför valutaväxling, högavkastande sparkonton och pensionsrådgivning från våra partners. 
              Hitta tjänsten som passar dig bäst.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button asChild size="lg" className="fg-btn text-lg px-8 shadow-lg">
                <a href="#jamfor-tjanster">Jämför tjänster</a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="fg-btn--secondary text-lg px-8"
              >
                <Link to="/">Tillbaka till startsidan</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
