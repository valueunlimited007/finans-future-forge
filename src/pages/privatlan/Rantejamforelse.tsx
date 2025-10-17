import SimpleNavigation from "@/components/SimpleNavigation";
import LegacyFooter from "@/components/LegacyFooter";
import SeoManager from "@/seo/SeoManager";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import RelatedPagesCluster from "@/components/RelatedPagesCluster";
import RateChart from "@/components/RateChart";
import AffiliateButton from "@/components/AffiliateButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calculator, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTopPartnersByRate, parseAprRange, getPartnerOffers } from "@/lib/rateCalculations";

export default function PrivatlanRantejamforelse() {
  const [topPartners, setTopPartners] = useState<any[]>([]);
  
  useEffect(() => {
    // Load partner data when component mounts
    const loadPartners = () => {
      const allPartners = getPartnerOffers();
      const partners = getTopPartnersByRate(allPartners, 15);
      setTopPartners(partners);
    };
    
    // Try immediately
    loadPartners();
    
    // Also try after a short delay (in case offers-schema.js loads after this component)
    const timer = setTimeout(loadPartners, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
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
                <Button 
                  size="lg" 
                  className="fg-btn text-lg px-8 shadow-lg"
                  onClick={() => {
                    document.getElementById('aktuella-rantor')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  Se aktuella räntor
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
            <h2 className="text-3xl font-bold text-center mb-8">
              Aktuella räntor från våra partners
            </h2>
            
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Nedan visas räntor från långivare vi samarbetar med. Vi kan få provision 
                om du ansöker via våra länkar. Alla jämförelser är objektiva och 
                sorterade efter lägsta ränta först.
              </p>
            </div>
            
            {topPartners.length > 0 ? (
              <>
                {/* Desktop: Table Layout */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full border-collapse bg-card rounded-lg shadow-sm">
                    <thead>
                      <tr className="bg-muted">
                        <th className="text-left p-3 md:p-4 border-b text-sm">Långivare</th>
                        <th className="text-left p-3 md:p-4 border-b text-sm">Ränta</th>
                        <th className="text-left p-3 md:p-4 border-b text-sm">Typ</th>
                        <th className="text-center p-3 md:p-4 border-b text-sm">Ansök</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topPartners.map((partner, index) => {
                        const { min, max } = parseAprRange(partner.aprFrom);
                        return (
                          <tr key={partner.id} className={index % 2 === 0 ? 'bg-muted/30' : ''}>
                            <td className="p-3 md:p-4 border-b">
                              <div className="flex items-center gap-2">
                                {partner.logo && (
                                  <img 
                                    src={partner.logo} 
                                    alt={`${partner.name} logo`}
                                    className="h-6 md:h-8 w-auto object-contain flex-shrink-0"
                                    loading="lazy"
                                  />
                                )}
                                <span className="font-semibold text-sm md:text-base">{partner.name}</span>
                              </div>
                            </td>
                            <td className="p-3 md:p-4 border-b whitespace-nowrap">
                              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                                <span className="text-base md:text-lg font-bold text-green-600 dark:text-green-400">
                                  från {min}%
                                </span>
                                {max && (
                                  <span className="text-xs md:text-sm text-muted-foreground">
                                    - {max}%
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="p-3 md:p-4 border-b">
                              {partner.isComparison ? (
                                <Badge variant="outline" className="text-xs">Jämförelsetjänst</Badge>
                              ) : (
                                <Badge variant="secondary" className="text-xs">Långivare</Badge>
                              )}
                            </td>
                            <td className="p-3 md:p-4 border-b text-center">
                              <AffiliateButton
                                href={partner.url}
                                label="Ansök"
                                brandId={partner.id}
                                brandName={partner.name}
                                variant="default"
                                className="w-auto text-xs md:text-sm px-4 md:px-6 py-2"
                                showBadges={false}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile: Card Layout */}
                <div className="md:hidden space-y-4">
                  {topPartners.map((partner) => {
                    const { min, max } = parseAprRange(partner.aprFrom);
                    return (
                      <Card key={partner.id}>
                        <CardContent className="p-4">
                          {/* Logo + Name */}
                          <div className="flex items-center gap-3 mb-3">
                            {partner.logo && (
                              <img 
                                src={partner.logo} 
                                alt={`${partner.name} logo`}
                                className="h-8 w-auto object-contain flex-shrink-0"
                                loading="lazy"
                              />
                            )}
                            <span className="font-bold text-base">{partner.name}</span>
                          </div>
                          
                          {/* Badge (Typ) */}
                          <div className="mb-3">
                            {partner.isComparison ? (
                              <Badge variant="outline" className="text-xs">Jämförelsetjänst</Badge>
                            ) : (
                              <Badge variant="secondary" className="text-xs">Långivare</Badge>
                            )}
                          </div>
                          
                          {/* Rate */}
                          <div className="mb-4">
                            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                              från {min}%
                            </span>
                            {max && (
                              <span className="text-sm text-muted-foreground ml-2">
                                - {max}%
                              </span>
                            )}
                          </div>
                          
                          {/* CTA Button */}
                          <AffiliateButton
                            href={partner.url}
                            label="Ansök"
                            brandId={partner.id}
                            brandName={partner.name}
                            variant="default"
                            className="w-full"
                            showBadges={false}
                          />
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                
                <p className="text-sm text-muted-foreground text-center mt-6">
                  Visar {topPartners.length} av våra samarbetspartners sorterade efter lägsta ränta. 
                  Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
                </p>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Laddar räntedata från våra partners...</p>
              </div>
            )}
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
