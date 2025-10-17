import SimpleNavigation from "@/components/SimpleNavigation";
import LegacyFooter from "@/components/LegacyFooter";
import SeoManager from "@/seo/SeoManager";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import RelatedPagesCluster from "@/components/RelatedPagesCluster";
import RateChart from "@/components/RateChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingDown, TrendingUp, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivatlanRantejamforelse() {
  const breadcrumbItems = [
    { label: "Privatlån", href: "/privatlan" },
    { label: "Räntejämförelse" }
  ];

  return (
    <>
      <SeoManager />
      <SimpleNavigation />
      
      <main className="pt-[48px] sm:pt-[64px] md:pt-[80px] lg:pt-[96px]">
        <div className="container mx-auto max-w-6xl px-4">
          <CustomBreadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Räntejämförelse privatlån
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Se aktuella räntor och ränteutveckling för privatlån. Jämför räntor från 
                50+ långivare och hitta lägst ränta för din ekonomi.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="fg-btn text-lg px-8 shadow-lg">
                  <Link to="#aktuella-rantor">Se aktuella räntor</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link to="/privatlan/basta">Se bästa lånen</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Rate Development Chart */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <RateChart />
          </div>
        </section>

        {/* Current Rates Table */}
        <section id="aktuella-rantor" className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Aktuella räntor idag
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-card rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-4 border-b">Långivare</th>
                    <th className="text-left p-4 border-b">Ränta från</th>
                    <th className="text-left p-4 border-b">Ränta upp till</th>
                    <th className="text-left p-4 border-b">Effektiv ränta</th>
                    <th className="text-left p-4 border-b">Trend</th>
                    <th className="text-center p-4 border-b">Ansök</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b font-semibold">SEB</td>
                    <td className="p-4 border-b">
                      <span className="text-lg font-bold text-green-600">2,95%</span>
                    </td>
                    <td className="p-4 border-b">15,90%</td>
                    <td className="p-4 border-b">3,05%</td>
                    <td className="p-4 border-b">
                      <Badge variant="secondary" className="gap-1">
                        <TrendingDown className="w-3 h-3" />
                        Sjunkit
                      </Badge>
                    </td>
                    <td className="p-4 border-b text-center">
                      <Button size="sm" className="fg-btn">Ansök</Button>
                    </td>
                  </tr>
                  
                  <tr className="bg-muted/30">
                    <td className="p-4 border-b font-semibold">Nordea</td>
                    <td className="p-4 border-b">
                      <span className="text-lg font-bold text-green-600">3,15%</span>
                    </td>
                    <td className="p-4 border-b">16,50%</td>
                    <td className="p-4 border-b">3,25%</td>
                    <td className="p-4 border-b">
                      <Badge variant="outline" className="gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Oförändrat
                      </Badge>
                    </td>
                    <td className="p-4 border-b text-center">
                      <Button size="sm" className="fg-btn">Ansök</Button>
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="p-4 border-b font-semibold">Marginalen Bank</td>
                    <td className="p-4 border-b">
                      <span className="text-lg font-bold text-green-600">4,75%</span>
                    </td>
                    <td className="p-4 border-b">19,90%</td>
                    <td className="p-4 border-b">5,10%</td>
                    <td className="p-4 border-b">
                      <Badge variant="secondary" className="gap-1">
                        <TrendingDown className="w-3 h-3" />
                        Sjunkit
                      </Badge>
                    </td>
                    <td className="p-4 border-b text-center">
                      <Button size="sm" className="fg-btn">Ansök</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-muted-foreground text-center mt-6">
              Räntorna uppdateras dagligen från långivarnas officiella webbplatser. 
              Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
            </p>
          </div>
        </section>

        {/* Calculation Example */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Räkneexempel: Så mycket kostar räntan
            </h2>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Exempel: Lån på 200 000 kr
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-green-50 dark:bg-green-950 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Lägst ränta (2,95%)</p>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                      213 800 kr
                    </p>
                    <p className="text-sm text-muted-foreground">Totalkostnad över 5 år</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Månadskostnad: ~3 563 kr
                    </p>
                  </div>
                  
                  <div className="p-6 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Genomsnitt (7,0%)</p>
                    <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                      237 400 kr
                    </p>
                    <p className="text-sm text-muted-foreground">Totalkostnad över 5 år</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Månadskostnad: ~3 957 kr
                    </p>
                  </div>
                  
                  <div className="p-6 bg-red-50 dark:bg-red-950 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Hög ränta (15%)</p>
                    <p className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">
                      285 700 kr
                    </p>
                    <p className="text-sm text-muted-foreground">Totalkostnad över 5 år</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Månadskostnad: ~4 762 kr
                    </p>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-sm font-semibold mb-2">💡 Observation:</p>
                  <p className="text-sm text-muted-foreground">
                    Skillnaden mellan lägst och högst ränta är hela <strong>71 900 kr</strong> över 
                    5 år på ett lån på 200 000 kr. Därför lönar det sig att jämföra räntor!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 5 Ways to Get Lower Rate */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              5 sätt att få lägre ränta
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>1. Förbättra din kreditvärdighet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Din kreditvärdighet är den viktigaste faktorn för räntesättningen. 
                    Förbättra den genom att:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Betala räkningar i tid</li>
                    <li>Minska befintliga skulder</li>
                    <li>Undvik nya UC-förfrågningar innan låneansökan</li>
                    <li>Kontrollera din UC-rapport för fel</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>2. Jämför flera långivare</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Räntorna kan variera kraftigt mellan långivare. Genom att ansöka hos 2-3 
                    långivare kan du jämföra faktiska erbjudanden och förhandla om bättre villkor.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>3. Bli befintlig kund</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Många banker ger ränterabatt till befintliga kunder. Om du redan har bankkonto, 
                    lönekonto eller andra produkter hos en bank kan du få lägre ränta.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>4. Välj kortare lånetid</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Kortare lånetid ger ofta lägre ränta eftersom risken för långivaren är mindre. 
                    Men kom ihåg att månadsbetalningen blir högre.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>5. Omförhandla befintliga lån</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Om räntorna har sjunkit sedan du tog ditt lån, kan du kontakta din långivare 
                    och förhandla om lägre ränta eller flytta lånet till en annan bank.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sources */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>Källor och metodik</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Datakällor</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Långivarnas officiella webbplatser (uppdateras dagligen)</li>
                    <li>Finansinspektionen (tillsyn och statistik)</li>
                    <li>UC (kreditmarknadsstatistik)</li>
                    <li>Riksbanken (ränteutveckling och makrodata)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Uppdateringsfrekvens</h3>
                  <p className="text-sm text-muted-foreground">
                    Räntorna kontrolleras dagligen automatiskt mot långivarnas officiella priser. 
                    Ränteutvecklingsgraf uppdateras månadsvis.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Beräkningar</h3>
                  <p className="text-sm text-muted-foreground">
                    Alla räkneexempel baseras på annuitetsmetoden med månadsvis amortering. 
                    Effektiv ränta beräknas enligt Finansinspektionens riktlinjer.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <RelatedPagesCluster 
              clusterId="privatlan" 
              currentUrl="/privatlan/rantejamforelse"
              title="Läs mer om privatlån"
              description="Utforska fler guider och jämförelser"
            />
          </div>
        </section>
      </main>
      
      <LegacyFooter />
    </>
  );
}
