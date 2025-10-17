import SimpleNavigation from "@/components/SimpleNavigation";
import LegacyFooter from "@/components/LegacyFooter";
import SeoManager from "@/seo/SeoManager";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import RelatedPagesCluster from "@/components/RelatedPagesCluster";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, TrendingDown, AlertCircle, Calculator, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function LagstRantaBlancolan() {
  const breadcrumbItems = [
    { label: "Guider", href: "/" },
    { label: "Lägst ränta blancolån" }
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
        <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Så får du lägst ränta på blancolån
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Komplett guide för att sänka din låneränta. 7 beprövade strategier 
                som kan spara dig tusentals kronor varje år.
              </p>
              
              <div className="flex items-center justify-center gap-4 text-sm">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  8 min läsning
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Uppdaterad 2025
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-orange-500" />
                  Problemet med hög ränta
                </h2>
                <p className="text-lg mb-4">
                  En hög låneränta kan kosta dig mycket pengar. På ett blancolån på 200 000 kr 
                  över 5 år gör en ränteskillnad på 3 procentenheter en kostnadsskillnad på 
                  över <strong>30 000 kr</strong>.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Hög ränta (10%)</p>
                    <p className="text-2xl font-bold text-red-600 dark:text-red-400">255 496 kr</p>
                    <p className="text-xs text-muted-foreground">Total kostnad</p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Låg ränta (7%)</p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">227 544 kr</p>
                    <p className="text-xs text-muted-foreground">Total kostnad</p>
                  </div>
                </div>
                <p className="text-sm text-center mt-4 font-semibold">
                  💡 Skillnad: 27 952 kr sparade genom lägre ränta!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 7 Strategies */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              7 sätt att få lägst ränta
            </h2>
            
            <div className="space-y-8">
              {/* Strategy 1 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center font-bold">
                      1
                    </span>
                    Förbättra din kreditvärdighet
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Din kreditvärdighet är <strong>den viktigaste faktorn</strong> för räntesättning. 
                    Långivare använder UC-poäng och betalningshistorik för att bedöma risk.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Konkreta åtgärder:</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Betala alla räkningar i tid</strong>
                          <p className="text-sm text-muted-foreground">
                            Även små missade betalningar registreras och sänker din UC-poäng.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Minska befintliga skulder</strong>
                          <p className="text-sm text-muted-foreground">
                            Amortera ner krediter och betala av kreditkort helt varje månad.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Undvik nya UC-förfrågningar</strong>
                          <p className="text-sm text-muted-foreground">
                            Många UC-kontroller på kort tid signalerar desperation och sänker poängen.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Kontrollera din UC-rapport</strong>
                          <p className="text-sm text-muted-foreground">
                            Begär ut din kreditrapport gratis en gång per år och rätta eventuella fel.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <p className="text-sm">
                      <strong>💡 Tips:</strong> Det tar vanligtvis 3-6 månader av god betalningshistorik 
                      innan din UC-poäng förbättras märkbart.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Strategy 2 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center font-bold">
                      2
                    </span>
                    Jämför minst 3 långivare
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Räntorna kan variera kraftigt mellan långivare, även för samma låntagare. 
                    Genom att jämföra flera erbjudanden kan du <strong>spara 1-3% i ränta</strong>.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Så gör du:</h4>
                    <ol className="space-y-2 list-decimal pl-6">
                      <li>Ansök hos 2-3 olika långivare inom samma vecka</li>
                      <li>Jämför de faktiska erbjudandena (inte bara "från X%")</li>
                      <li>Förhandla med den långivare som ger bäst villkor</li>
                      <li>Be andra långivare matcha eller slå bästa erbjudandet</li>
                    </ol>
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link to="/privatlan/jamfor">Jämför långivare nu</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Strategy 3 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center font-bold">
                      3
                    </span>
                    Bli befintlig kund
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Många banker ger <strong>ränterabatt 0,5-1,5%</strong> till befintliga kunder 
                    med lönekonto, sparande eller andra produkter hos dem.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Exempel på kundrabatter:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>SEB:</strong> 0,5-1% rabatt för lönekund</li>
                      <li>• <strong>Nordea:</strong> 0,75% rabatt vid lönekonto + sparande</li>
                      <li>• <strong>Handelsbanken:</strong> Upp till 1,5% rabatt för premiumkunder</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Strategy 4 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center font-bold">
                      4
                    </span>
                    Välj kortare lånetid
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Kortare lånetid = lägre risk för långivaren = lägre ränta. 
                    Du kan ofta spara <strong>0,5-1,5% i ränta</strong> genom att välja 3 år istället för 7 år.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">7 års lånetid</p>
                      <p className="text-xl font-bold">7,5%</p>
                      <p className="text-xs text-muted-foreground">Månadskostnad: 3 163 kr</p>
                    </div>
                    <div className="p-4 border-2 border-green-500 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">3 års lånetid</p>
                      <p className="text-xl font-bold text-green-600">6,0%</p>
                      <p className="text-xs text-muted-foreground">Månadskostnad: 6 084 kr</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    <strong>OBS:</strong> Högre månadskostnad men lägre totalkostnad och mindre ränta betald.
                  </p>
                </CardContent>
              </Card>

              {/* Strategy 5 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center font-bold">
                      5
                    </span>
                    Använd låneförmedlare
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Låneförmedlare (som Lendo, Sambla, Advisa) skickar din ansökan till 
                    flera banker samtidigt och presenterar det bästa erbjudandet.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Fördelar:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>✓ En ansökan → flera erbjudanden</li>
                      <li>✓ Jämför enkelt räntor från 10-30 banker</li>
                      <li>✓ Kan förhandla bättre räntor än du själv</li>
                      <li>✓ Gratis tjänst för låntagaren</li>
                    </ul>
                  </div>
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/laneformedlare">Läs mer om låneförmedlare</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Strategy 6 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center font-bold">
                      6
                    </span>
                    Omförhandla befintliga lån
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Har du haft ditt lån i 1-2 år och förbättrat din ekonomi? 
                    Kontakta din nuvarande långivare och förhandla om lägre ränta.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Förhandlingsstrategi:</h4>
                    <ol className="space-y-2 list-decimal pl-6 text-sm">
                      <li>Ta in konkreta erbjudanden från andra banker</li>
                      <li>Ring din nuvarande bank och be om räntesänkning</li>
                      <li>Nämn konkurrensens erbjudanden</li>
                      <li>Var beredd att faktiskt byta om de säger nej</li>
                    </ol>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <p className="text-sm">
                      <strong>Verkligt exempel:</strong> "Jag har fått erbjudande om 5,5% hos X-bank. 
                      Kan ni matcha det så jag kan stanna hos er?"
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Strategy 7 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center font-bold">
                      7
                    </span>
                    Låna rätt belopp
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Både för små och för stora lån kan ge högre ränta. 
                    Det optimala lånebeloppet brukar vara <strong>100 000 - 300 000 kr</strong>.
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Varför?</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>För små lån (&lt;50 000 kr):</strong> Högre administrationskostnad i förhållande till beloppet</li>
                      <li>• <strong>För stora lån (&gt;400 000 kr):</strong> Högre risk för långivaren</li>
                      <li>• <strong>Optimal zon:</strong> Bäst balans mellan kostnad och risk</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Action Plan */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Target className="w-6 h-6" />
                  Din handlingsplan för lägst ränta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold">Kort sikt (denna vecka):</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">Kontrollera min UC-rapport för fel</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">Ansök hos 2-3 långivare och jämför erbjudanden</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">Be om ränterabatt hos min nuvarande bank</span>
                    </label>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold">Medellång sikt (3-6 månader):</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">Betala alla räkningar i tid för att förbättra UC-poäng</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">Minska befintliga skulder med 20%</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">Flytta lönekonto till bank med bäst lånevillkor</span>
                    </label>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold">Lång sikt (6-12 månader):</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">Omförhandla eller flytta lån efter förbättrad ekonomi</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">Uppnå UC-poäng över 700 (god kreditvärdighet)</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Vanliga frågor
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Hur mycket kan jag spara på lägre ränta?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    På ett lån på 200 000 kr över 5 år kan varje procentenhets räntesänkning 
                    spara dig cirka <strong>10 000 - 15 000 kr</strong> i totalkostnad.
                  </p>
                  <p>
                    Exempel: Sänkning från 8% till 5% ger en besparing på cirka 28 000 kr över 5 år.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Hur lång tid tar det att förbättra sin UC-poäng?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Med konsekvent god betalningshistorik tar det vanligtvis <strong>3-6 månader</strong> 
                    innan din UC-poäng förbättras märkbart.
                  </p>
                  <p>
                    Betalningsanmärkningar stannar dock kvar i 3 år från det att skulden betalas, 
                    så det kan ta längre tid att återhämta sig från tidigare försummelser.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Kan jag förhandla om räntan med min bank?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Ja, absolut! Banker sätter ofta räntorna med förhandlingsutrymme. 
                    Särskilt om du:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Har god kreditvärdighet</li>
                    <li>Är befintlig kund med flera produkter</li>
                    <li>Kan visa konkreta erbjudanden från andra banker</li>
                    <li>Har haft lånet länge och alltid betalat i tid</li>
                  </ul>
                  <p className="mt-4">
                    Ring din bank direkt och be om räntesänkning. Det värsta som kan hända är att de säger nej.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Är det värt att byta lån för 0,5% lägre ränta?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">
                    Det beror på lånebelopp och kvarvarande tid. Som tumregel:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>0,5% lägre ränta:</strong> Lönar sig vid lån över 100 000 kr med 2+ år kvar
                    </li>
                    <li>
                      <strong>1% lägre ränta:</strong> Nästan alltid värt att byta
                    </li>
                    <li>
                      <strong>Under 0,3%:</strong> Ofta inte värt besväret
                    </li>
                  </ul>
                  <p className="mt-4">
                    Räkna alltid med eventuella avgifter för förtidsinlösen innan du byter.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-green-600 to-green-800 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Redo att hitta lägst ränta?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Använd vår jämförelsetjänst för att hitta lån med lägst ränta för just din situation
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 bg-white text-green-600 hover:bg-gray-100">
                <Link to="/privatlan/jamfor">Jämför räntor nu</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-green-600 bg-white/10">
                <Link to="/privatlan/basta">Se bästa lånen</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <RelatedPagesCluster 
              clusterId="privatlan" 
              currentUrl="/guider/lagst-ranta-blancolan"
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
