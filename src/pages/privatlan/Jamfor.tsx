import SimpleNavigation from "@/components/SimpleNavigation";
import LegacyFooter from "@/components/LegacyFooter";
import SeoManager from "@/seo/SeoManager";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import RelatedPagesCluster from "@/components/RelatedPagesCluster";
import InteractiveComparisonTable from "@/components/InteractiveComparisonTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivatlanJamfor() {
  const breadcrumbItems = [
    { label: "Privatlån", href: "/privatlan" },
    { label: "Jämför privatlån" }
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
                Jämför privatlån
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Använd vårt jämförelseverktyg för att filtrera och hitta det privatlån 
                som passar just dina behov. Jämför räntor, belopp och villkor.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link to="/privatlan/basta">Se topplistan</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Tool */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Jämför räntor och villkor
            </h2>
            
            <InteractiveComparisonTable />
          </div>
        </section>

        {/* How to Compare Guide */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Så jämför du privatlån rätt
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Gör rätt
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-sm">Jämför <strong>effektiv ränta</strong>, inte bara nominell ränta</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-sm">Kolla <strong>alla avgifter</strong> (uppläggning, avi, etc.)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-sm">Ansök endast hos <strong>seriösa långivare</strong> med FI-tillstånd</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-sm">Beräkna totalkostnaden för hela låneperioden</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    Undvik misstag
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-sm">Ansök inte hos för många långivare samtidigt</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-sm">Fokusera inte bara på lägsta månadskostnad</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-sm">Låna inte mer än du verkligen behöver</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                    <p className="text-sm">Skippa inte att läsa villkoren noggrant</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step by Step */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">5 steg till rätt lån</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      1
                    </span>
                    <div>
                      <strong className="block mb-1">Beräkna ditt behov</strong>
                      <p className="text-sm text-muted-foreground">
                        Hur mycket behöver du låna och hur länge? Räkna även med en buffert för oförutsedda kostnader.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      2
                    </span>
                    <div>
                      <strong className="block mb-1">Använd jämförelseverktyget</strong>
                      <p className="text-sm text-muted-foreground">
                        Filtrera efter dina behov (ränta, belopp, utbetalningstid, UC-krav).
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      3
                    </span>
                    <div>
                      <strong className="block mb-1">Jämför effektiv ränta</strong>
                      <p className="text-sm text-muted-foreground">
                        Den effektiva räntan inkluderar alla avgifter och ger den verkliga kostnaden.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      4
                    </span>
                    <div>
                      <strong className="block mb-1">Läs villkoren</strong>
                      <p className="text-sm text-muted-foreground">
                        Kolla villkor för extra amortering, betalningsuppehåll och förtidsinlösen.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      5
                    </span>
                    <div>
                      <strong className="block mb-1">Ansök hos 2-3 långivare</strong>
                      <p className="text-sm text-muted-foreground">
                        Ansök hos några långivare för att jämföra faktiska erbjudanden. Undvik att ansöka hos för många.
                      </p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Vanliga frågor om att jämföra lån
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Vad är skillnaden mellan nominell och effektiv ränta?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    <strong>Nominell ränta</strong> är den grundläggande räntekostnaden, utan avgifter. 
                    <strong> Effektiv ränta</strong> inkluderar alla avgifter (uppläggning, avi, etc.) och visar 
                    den verkliga totalkostnaden per år.
                  </p>
                  <p>
                    Jämför alltid den <strong>effektiva räntan</strong> när du väljer lån, eftersom den ger 
                    en rättvisande bild av vad lånet faktiskt kostar.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Påverkar jämförelsen min kreditvärdighet?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Att använda vårt jämförelseverktyg påverkar <strong>inte</strong> din kreditvärdighet. 
                    Det registreras ingen UC-förfrågan förrän du faktiskt ansöker om lån hos en långivare.
                  </p>
                  <p>
                    När du sedan ansöker registreras en "mjuk" eller "hård" UC-förfrågan beroende på långivare. 
                    Många UC-förfrågningar på kort tid kan sänka din kreditvärdighet, så ansök endast hos 2-3 långivare.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Hur vet jag om en långivare är seriös?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Seriösa långivare har alltid:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Tillstånd från Finansinspektionen (FI)</li>
                    <li>Tydlig information om räntor och avgifter</li>
                    <li>Inga dolda kostnader</li>
                    <li>Professionell kundservice</li>
                    <li>Svenskt organisationsnummer</li>
                  </ul>
                  <p className="mt-4">
                    Undvik långivare som lovar "garanterade lån", "lån utan UC" eller som kräver förskottsbetalning.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Vad ska jag tänka på när jag jämför lånevillkor?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Viktiga faktorer att jämföra:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li><strong>Effektiv ränta</strong> - den verkliga kostnaden</li>
                    <li><strong>Uppläggningsavgift</strong> - engångskostnad vid start</li>
                    <li><strong>Aviavgift</strong> - månatlig faktureringsavgift</li>
                    <li><strong>Rätt till extra amortering</strong> - kan du betala av snabbare?</li>
                    <li><strong>Förtidsinlösen</strong> - kostar det att lösa lånet i förtid?</li>
                    <li><strong>Betalningsuppehåll</strong> - kan du pausa betalningar vid behov?</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <RelatedPagesCluster 
              clusterId="privatlan" 
              currentUrl="/privatlan/jamfor"
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
