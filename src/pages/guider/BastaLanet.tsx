import SimpleNavigation from "@/components/SimpleNavigation";
import LegacyFooter from "@/components/LegacyFooter";
import SeoManager from "@/seo/SeoManager";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import RelatedPagesCluster from "@/components/RelatedPagesCluster";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Target, TrendingDown, Clock, Shield, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function BastaLanet() {
  const breadcrumbItems = [
    { label: "Guider", href: "/" },
    { label: "Bästa lånet" }
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
        <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Vilket är bästa lånet för dig?
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Det finns inget universellt "bästa lån". Rätt lån beror på din situation, 
                ekonomi och behov. Här är guiden för att hitta DITT bästa lån.
              </p>
            </div>
          </div>
        </section>

        {/* Key Insight */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-purple-500" />
                  Viktigt att förstå
                </h2>
                <p className="text-lg mb-4">
                  "Bästa lånet" varierar drastiskt beroende på din profil. Ett lån med 
                  2,9% ränta kan vara bäst för dig men omöjligt att få för någon annan.
                </p>
                <p>
                  Istället för att leta efter DET bästa lånet, ska du leta efter det 
                  bästa lånet <strong>för just din situation</strong>.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Profile Types */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Hitta ditt bästa lån baserat på profil
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Profile 1 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-green-600" />
                    God ekonomi & hög kreditvärdighet
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Din profil:</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ Fast anställning, hög inkomst</li>
                      <li>✓ Ingen betalningsanmärkning</li>
                      <li>✓ UC-poäng över 700</li>
                      <li>✓ Låg skuldsättning</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold mb-2">Bästa lånet för dig:</h4>
                    <p className="text-sm mb-2">
                      <strong>Storbanks privatlån med lägst ränta</strong>
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Ränta: 2,9-4,5%</li>
                      <li>• Belopp: upp till 600 000 kr</li>
                      <li>• Lånetid: 3-7 år</li>
                      <li>• Exempel: SEB, Nordea, Handelsbanken</li>
                    </ul>
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link to="/privatlan/basta">Se lån med lägst ränta</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Profile 2 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-blue-600" />
                    Normal ekonomi & medelkreditvärdighet
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Din profil:</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ Fast eller tillsvidare anställning</li>
                      <li>✓ Medelhög inkomst (25-40k/mån)</li>
                      <li>✓ UC-poäng 500-700</li>
                      <li>✓ Några befintliga lån/krediter</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold mb-2">Bästa lånet för dig:</h4>
                    <p className="text-sm mb-2">
                      <strong>Digitalbanks privatlån eller låneförmedlare</strong>
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Ränta: 5-10%</li>
                      <li>• Belopp: upp till 350 000 kr</li>
                      <li>• Lånetid: 3-7 år</li>
                      <li>• Exempel: Marginalen Bank, Northmill, Lendo</li>
                    </ul>
                  </div>
                  
                  <Button asChild className="w-full">
                    <Link to="/privatlan/jamfor">Jämför lån</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Profile 3 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-orange-600" />
                    Behöver pengarna snabbt
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Din situation:</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ Akut behov av pengar</li>
                      <li>✓ Måste ha pengarna inom 24h</li>
                      <li>✓ Mindre belopp (10-100k)</li>
                      <li>✓ Normal kreditvärdighet</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <h4 className="font-semibold mb-2">Bästa lånet för dig:</h4>
                    <p className="text-sm mb-2">
                      <strong>Snabbutbetalning från digitalbank</strong>
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Utbetalning: Samma dag</li>
                      <li>• Ränta: 6-12% (lite högre för snabbhet)</li>
                      <li>• Belopp: 10 000 - 200 000 kr</li>
                      <li>• Exempel: Northmill, Zmarta, Anyfin</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <p className="text-xs">
                      <strong>⚠️ Varning:</strong> Undvik SMS-lån och snabblån med extremt 
                      höga räntor (20-50%). De är endast lämpliga som absolut sista utväg.
                    </p>
                  </div>
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/privatlan/basta">Lån med snabb utbetalning</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Profile 4 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-red-600" />
                    Betalningsanmärkning eller dålig UC
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Din situation:</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ Har betalningsanmärkning</li>
                      <li>✓ UC-poäng under 500</li>
                      <li>✓ Tidigare betalningsproblem</li>
                      <li>✓ Har fast inkomst idag</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                    <h4 className="font-semibold mb-2">Bästa lånet för dig:</h4>
                    <p className="text-sm mb-2">
                      <strong>Långivare som accepterar anmärkningar</strong>
                    </p>
                    <ul className="text-sm space-y-1">
                      <li>• Ränta: 12-25% (högre risk = högre ränta)</li>
                      <li>• Belopp: upp till 150 000 kr</li>
                      <li>• Lånetid: 1-5 år</li>
                      <li>• Exempel: Northmill, Resurs Bank</li>
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-red-100 dark:bg-red-950 rounded-lg">
                    <p className="text-xs">
                      <strong>⚠️ Viktigt:</strong> Med anmärkning blir räntan mycket högre. 
                      Överväg alternativ som borgensman, skuldkonsolidering eller att vänta 
                      tills anmärkningen försvinner.
                    </p>
                  </div>
                  
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/privatlan/lan-med-betalningsanmarkning">Läs mer</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Decision Factors */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              5 faktorer som avgör vilket lån som är bäst
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-green-600" />
                    1. Ränta (viktigast)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Räntan är den största kostnadsposten. Varje procentenhets skillnad 
                    kostar/sparar tusentals kronor över lånetiden.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Regel:</strong> Fokusera på <em>effektiv ränta</em> (inkluderar alla avgifter), 
                    inte bara nominell ränta.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>2. Avgifter (dolda kostnader)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Många långivare har uppläggningsavgifter (500-2000 kr) och aviavgifter (29-95 kr/mån). 
                    Detta kan äta upp värdet av en låg ränta.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Exempel:</strong> Lån med 5% ränta + 2000 kr uppläggning + 95 kr/mån kan 
                    vara dyrare än lån med 5,5% ränta utan avgifter.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>3. Flexibilitet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Kan du göra extra amorteringar? Får du ta betalningsuppehåll vid behov? 
                    Kan du lösa lånet i förtid utan kostnad?
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>✓ Rätt till extra amortering: Viktigt om ekonomin förbättras</li>
                    <li>✓ Möjlighet till betalningsuppehåll: Säkerhetsnät vid tillfälliga problem</li>
                    <li>✓ Ingen förtidsinlösenkostnad: Frihet att byta eller betala av snabbare</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>4. Kundservice</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Du kommer ha lånet i flera år. Dålig kundservice kan bli frustratnde.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Tips:</strong> Kolla recensioner och Trustpilot innan du väljer. 
                    Banker med hög service-rating är ofta värda lite högre ränta.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>5. Snabbhet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Behöver du pengarna snabbt, eller kan du vänta några dagar för bättre villkor?
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-semibold text-sm mb-1">Snabb utbetalning:</p>
                      <p className="text-xs">Samma dag - 1 dag, ofta 0,5-1% högre ränta</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="font-semibold text-sm mb-1">Normal handläggning:</p>
                      <p className="text-xs">3-7 dagar, bättre räntor och villkor</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-red-600 dark:text-red-400">
              3 vanliga misstag när man väljer lån
            </h2>
            
            <div className="space-y-6">
              <Card className="border-red-200 dark:border-red-900">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-red-600 dark:text-red-400">
                    ❌ Misstag 1: Fokusera bara på månadskostnad
                  </h3>
                  <p className="mb-3">
                    Lägst månadskostnad = längst lånetid = högsta totalkostnad. Ett lån med 
                    2 000 kr/mån i 10 år kostar MER än 3 000 kr/mån i 5 år.
                  </p>
                  <p className="text-sm font-semibold">
                    ✅ Rätt: Jämför totalkostnad och effektiv ränta, inte bara månadskostnad.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 dark:border-red-900">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-red-600 dark:text-red-400">
                    ❌ Misstag 2: Ansöka hos för många långivare
                  </h3>
                  <p className="mb-3">
                    Varje låneansökan registreras hos UC. För många förfrågningar på kort tid 
                    sänker din kreditvärdighet och försämrar villkoren.
                  </p>
                  <p className="text-sm font-semibold">
                    ✅ Rätt: Ansök hos max 2-3 långivare inom samma vecka, eller använd låneförmedlare.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 dark:border-red-900">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-red-600 dark:text-red-400">
                    ❌ Misstag 3: Låna från första bästa erbjudande
                  </h3>
                  <p className="mb-3">
                    Det första erbjudandet du får är sällan det bästa. Banker förväntar sig 
                    att du förhandlar och har utrymme att sänka räntan.
                  </p>
                  <p className="text-sm font-semibold">
                    ✅ Rätt: Använd första erbjudandet som utgångspunkt för förhandling med andra banker.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Action Steps */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
              <CardHeader>
                <CardTitle className="text-2xl">Din checklista för att hitta bästa lånet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="w-5 h-5 mt-1" />
                  <span>Identifiera vilken profil som passar dig (se profilerna ovan)</span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="w-5 h-5 mt-1" />
                  <span>Definiera vad som är viktigast: lägst ränta, snabb utbetalning, eller flexibilitet</span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="w-5 h-5 mt-1" />
                  <span>Ansök hos 2-3 långivare som matchar din profil</span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="w-5 h-5 mt-1" />
                  <span>Jämför erbjudandena baserat på effektiv ränta (inte bara nominell)</span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="w-5 h-5 mt-1" />
                  <span>Räkna ut totalkostnaden över hela låneperioden för varje alternativ</span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="w-5 h-5 mt-1" />
                  <span>Läs villkoren noggrant (extra amortering, betalningsuppehåll, förtidsinlösen)</span>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="w-5 h-5 mt-1" />
                  <span>Förhandla med den långivare som ger bäst erbjudande</span>
                </label>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">
              Hitta ditt bästa lån idag
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Använd våra verktyg för att jämföra lån och hitta det som passar just dig
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 bg-white text-purple-600 hover:bg-gray-100">
                <Link to="/privatlan/jamfor">Jämför lån</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-purple-600 bg-white/10">
                <Link to="/privatlan/basta">Se topplistan</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <RelatedPagesCluster 
              clusterId="privatlan" 
              currentUrl="/guider/basta-lanet"
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
