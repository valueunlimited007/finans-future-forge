import SimpleNavigation from "@/components/SimpleNavigation";
import LegacyFooter from "@/components/LegacyFooter";
import SeoManager from "@/seo/SeoManager";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import RelatedPagesCluster from "@/components/RelatedPagesCluster";
import OffersContainer from "@/components/OffersContainer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle, CheckCircle, XCircle, Info } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivatlanLanMedBetalningsanmarkning() {
  const breadcrumbItems = [
    { label: "Privatlån", href: "/privatlan" },
    { label: "Lån med betalningsanmärkning" }
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
                Lån med betalningsanmärkning
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Har du betalningsanmärkning? Det är svårare men inte omöjligt att få lån. 
                Här hittar du långivare som kan godkänna din ansökan och alternativ att överväga.
              </p>
            </div>
          </div>
        </section>

        {/* Important Warning */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <Alert variant="destructive">
              <AlertTriangle className="h-5 w-5" />
              <AlertDescription className="ml-2">
                <strong>Viktigt att veta:</strong> Lån med betalningsanmärkning har ofta mycket högre räntor 
                (15-30%). Tänk noga igenom om du verkligen behöver lånet och om du har råd att betala tillbaka det. 
                Risken är stor att skulden växer sig ännu större.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* What is Payment Remark */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Vad är en betalningsanmärkning?</h2>
            
            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="mb-4">
                  En betalningsanmärkning registreras när du inte har betalat en skuld trots påminnelse 
                  och krav. Anmärkningen stannar i 3 år från det att skulden betalas.
                </p>
                
                <div className="space-y-4 mt-6">
                  <div>
                    <h3 className="font-semibold mb-2">Vanliga orsaker till betalningsanmärkning:</h3>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Obetald faktura som gått till inkasso</li>
                      <li>Missade lånebetalningar</li>
                      <li>Obetald hyra</li>
                      <li>Obetalda abonnemang (telefon, internet, etc.)</li>
                      <li>Obetald skatt eller avgifter</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Hur påverkar det mig?</h3>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Mycket svårare att få lån eller krediter</li>
                      <li>Högre räntor om du får lån</li>
                      <li>Kan påverka möjligheten att teckna mobilabonnemang</li>
                      <li>Kan försvåra vid bostadshyra</li>
                      <li>Påverkar vissa jobbansökningar</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Lenders Who Accept */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Långivare som kan godkänna lån med betalningsanmärkning
            </h2>
            
            {/* Real Adtraction Offers */}
            <OffersContainer 
              category="privatlån" 
              limit={4}
              className="mb-8" 
            />
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle>Northmill Bank</CardTitle>
                    <Badge variant="secondary">Kan acceptera anmärkning</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Ränta från:</strong> 9,95% (högre vid anmärkning)
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Belopp:</strong> 10 000 - 300 000 kr
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Villkor:</strong> Individuell prövning, kräver fast inkomst
                    </p>
                  </div>
                  <Button className="fg-btn w-full">Ansök hos Northmill</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle>Resurs Bank</CardTitle>
                    <Badge variant="secondary">Kan acceptera anmärkning</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Ränta från:</strong> 12,95% (högre vid anmärkning)
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Belopp:</strong> 20 000 - 400 000 kr
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Villkor:</strong> Prövar varje fall individuellt
                    </p>
                  </div>
                  <Button className="fg-btn w-full">Ansök hos Resurs</Button>
                </CardContent>
              </Card>
            </div>
            
            <Alert>
              <Info className="h-5 w-5" />
              <AlertDescription className="ml-2">
                <strong>OBS:</strong> Att en långivare "kan acceptera" anmärkning betyder inte att alla 
                godkänns. De gör en individuell bedömning av din ekonomi, inkomst och skuldnivå. 
                Räntan blir också högre än normalräntan.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Alternatives */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Alternativ till lån med betalningsanmärkning</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    1. Borgensförsäkring eller borgensman
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Om någon i din närhet har god ekonomi kan de gå i borgen för ditt lån. 
                    Detta ökar chansen för godkännande och kan ge lägre ränta.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Viktigt:</strong> Borgensmannen tar på sig ansvaret att betala om du inte kan. 
                    Tänk noga igenom detta och var öppen om din situation.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    2. Pantlån
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Har du värdefullt lösöre (guld, smycken, elektronik) kan du pantsätta detta 
                    och få snabba pengar. Ingen kreditprövning behövs.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Viktigt:</strong> Höga räntor (ofta 20-30%) och du förlorar föremålet om du inte 
                    kan lösa ut det.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    3. Skuldsanering
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Har du flera skulder och inte kan betala? Skuldsanering kan vara ett alternativ. 
                    Du betalar en förenklad skuld under 5 år och resterande avskrivs.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Mer info:</strong>{" "}
                    <a 
                      href="https://www.kronofogden.se/skuldsanering" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Kronofogden - Skuldsanering
                    </a>
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    4. Budget- och skuldrådgivning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Innan du tar nya lån, kontakta kommunens budget- och skuldrådgivning. 
                    De kan hjälpa dig att hitta lösningar och förhandla med borgenärer.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Kontakt:</strong> Gratis tjänst som alla kommuner erbjuder. Ring din kommuns växel.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What to Avoid */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-red-600 dark:text-red-400">
              Var försiktig med detta
            </h2>
            
            <div className="space-y-6">
              <Card className="border-red-200 dark:border-red-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <XCircle className="w-5 h-5" />
                    SMS-lån och snabblån
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Extremt höga räntor (ofta 30-50% effektiv ränta eller mer). Små belopp men stor 
                    risk att hamna i skuldspiral. Godkänner ofta folk med anmärkningar vilket gör dem ännu farligare.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-red-200 dark:border-red-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <XCircle className="w-5 h-5" />
                    "Garanterade lån utan UC"
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Seriösa långivare gör alltid UC-kontroll. De som lovar "garanterade lån" är ofta oseriösa 
                    aktörer med dåliga villkor, höga avgifter eller direkta bedrägerier.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-red-200 dark:border-red-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <XCircle className="w-5 h-5" />
                    Lån från privata långivare på Facebook
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Risker för bedrägeri, identitetsstöld och ocker. Dessa är inte reglerade av 
                    Finansinspektionen och du har inget konsumentskydd.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Vanliga frågor om lån med betalningsanmärkning
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Kan jag få lån med aktiv betalningsanmärkning?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Ja, det är möjligt men mycket svårt. De flesta banker och större långivare nekar 
                    automatiskt. Några få långivare gör individuell prövning och kan godkänna om:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Du har fast inkomst</li>
                    <li>Skulden är liten eller nästan betald</li>
                    <li>Du kan visa att du har bättrat dig ekonomiskt</li>
                    <li>Du har låg belåningsgrad i övrigt</li>
                  </ul>
                  <p className="mt-4">
                    Räkna med mycket högre ränta (15-30%) än normalräntan (3-10%).
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Hur länge stannar betalningsanmärkningen kvar?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    En betalningsanmärkning stannar i <strong>3 år från den dag skulden betalas</strong>. 
                    Om skulden inte betalas stannar anmärkningen kvar tills skulden är betald + 3 år.
                  </p>
                  <p className="mt-4">
                    <strong>Exempel:</strong> Skuld uppstod 2020, betalades 2023. Anmärkningen försvinner 2026.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Kan jag få anmärkningen borttagen tidigare?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Endast i undantagsfall:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Om anmärkningen är felaktig (kontakta UC)</li>
                    <li>Om du kan visa att det var force majeure (exempelvis allvarlig sjukdom)</li>
                    <li>Om borgenären godkänner att ta bort den (mycket ovanligt)</li>
                  </ul>
                  <p className="mt-4">
                    I normalfallet finns ingen möjlighet att få anmärkningen borttagen i förtid, 
                    även om skulden betalas direkt.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Vad kostar det att låna med betalningsanmärkning?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    <strong>Exempel på 100 000 kr över 5 år:</strong>
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                      <p className="text-sm mb-1">Normal ränta (5%)</p>
                      <p className="text-lg font-bold text-green-600 dark:text-green-400">
                        Totalkostnad: ~113 300 kr
                      </p>
                      <p className="text-xs text-muted-foreground">Månadskostnad: ~1 888 kr</p>
                    </div>
                    
                    <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                      <p className="text-sm mb-1">Hög ränta vid anmärkning (20%)</p>
                      <p className="text-lg font-bold text-red-600 dark:text-red-400">
                        Totalkostnad: ~158 900 kr
                      </p>
                      <p className="text-xs text-muted-foreground">Månadskostnad: ~2 648 kr</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm">
                    <strong>Skillnad:</strong> Du betalar 45 600 kr mer i räntekostnader på grund av 
                    betalningsanmärkningen. Därför är det viktigt att tänka igenom om du verkligen behöver lånet.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Get Help CTA */}
        <section className="py-16 px-4 bg-blue-50 dark:bg-blue-950">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Behöver du hjälp med din ekonomi?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Om du har betalningsanmärkning och svårt att hantera din ekonomi finns det professionell 
              hjälp att få. Kontakta din kommun för gratis budget- och skuldrådgivning.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="fg-btn">
                <a 
                  href="https://www.kronofogden.se/skuld-och-betalningsproblem" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Kronofogden - Få hjälp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/privatlan/basta">Se bättre alternativ</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <RelatedPagesCluster 
              clusterId="privatlan" 
              currentUrl="/privatlan/lan-med-betalningsanmarkning"
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
