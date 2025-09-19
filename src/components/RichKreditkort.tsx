import React from "react";
import { Helmet } from "react-helmet-async";
import LegacyHeader from "@/components/LegacyHeader";
import LegacyFooter from "@/components/LegacyFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RichKreditkort() {
  return (
    <>
      <Helmet>
        <title>Kreditkort - Jämför bästa kreditkorten 2025 | Finansguiden.se</title>
        <meta name="description" content="Jämför 50+ kreditkort. ✓ Cashback upp till 3% ✓ Bonusprogram ✓ Reseförsäkringar ✓ Räntefria dagar. Hitta det perfekta kreditkortet för dig 2025." />
        <link rel="canonical" href="https://finansguiden.se/kreditkort" />
        <meta property="og:title" content="Kreditkort - Jämför bästa kreditkorten 2025" />
        <meta property="og:description" content="Hitta bästa kreditkortet med cashback, bonusprogram och förmåner. Jämför över 50 olika kort." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            "name": "Kreditkort",
            "description": "Jämför kreditkort med cashback, bonusprogram och reseförmåner"
          })}
        </script>
      </Helmet>

      <LegacyHeader />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950 dark:to-violet-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Bästa <span className="text-violet-600">kreditkorten</span> 2025
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Jämför över 50 kreditkort med cashback, bonusprogram och reseförmåner. 
                Hitta det perfekta kortet för dina behov och spara pengar på dina köp.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Button size="lg" className="text-lg px-8">
                  Jämför kreditkort
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Kreditkort-guiden
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <Badge variant="secondary">✓ Cashback upp till 3%</Badge>
                <Badge variant="secondary">✓ Bonusprogram</Badge>
                <Badge variant="secondary">✓ Reseförsäkringar</Badge>
                <Badge variant="secondary">✓ Räntefria dagar</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Credit Card Categories */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Hitta rätt typ av kreditkort</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <CardTitle>Cashback-kort</CardTitle>
                  <CardDescription>
                    Få pengar tillbaka på alla dina köp
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Upp till 3% cashback</li>
                    <li>• Pengar tillbaka på alla köp</li>
                    <li>• Ingen årsavgift hos vissa</li>
                    <li>• Perfekt för vardagskonsumtion</li>
                  </ul>
                  <Button className="w-full">Se cashback-kort</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">✈️</span>
                  </div>
                  <CardTitle>Resekort</CardTitle>
                  <CardDescription>
                    Samla miles och få reseförmåner
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Samla miles och poäng</li>
                    <li>• Reseförsäkringar inkluderade</li>
                    <li>• Lounge-access på flygplatser</li>
                    <li>• Bonusmiles vid registrering</li>
                  </ul>
                  <Button className="w-full">Se resekort</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <CardTitle>Premiumkort</CardTitle>
                  <CardDescription>
                    Exklusiva förmåner och status
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Concierge-service</li>
                    <li>• Exklusiva erbjudanden</li>
                    <li>• Högre kreditlimit</li>
                    <li>• VIP-behandling</li>
                  </ul>
                  <Button className="w-full">Se premiumkort</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🏪</span>
                  </div>
                  <CardTitle>Butikskort</CardTitle>
                  <CardDescription>
                    Extra rabatter hos specifika återförsäljare
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Extra rabatter i butik</li>
                    <li>• Medlemsförmåner</li>
                    <li>• Bonuspoäng</li>
                    <li>• Exklusiva erbjudanden</li>
                  </ul>
                  <Button className="w-full">Se butikskort</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🔰</span>
                  </div>
                  <CardTitle>Grundkort</CardTitle>
                  <CardDescription>
                    Enkla kort utan årsavgift
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Ingen årsavgift</li>
                    <li>• Grundläggande försäkringar</li>
                    <li>• Enke att få beviljat</li>
                    <li>• Bra för nya användare</li>
                  </ul>
                  <Button className="w-full">Se grundkort</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <CardTitle>Bensin- & Bilkort</CardTitle>
                  <CardDescription>
                    Rabatter på drivmedel och bilrelaterat
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Rabatt på bensin/diesel</li>
                    <li>• Bonuspoäng på drivmedel</li>
                    <li>• Bilförsäkringar</li>
                    <li>• Vägassistans inkluderad</li>
                  </ul>
                  <Button className="w-full">Se bil-kort</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Top Credit Cards */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Populära kreditkort just nu</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500">Bäst cashback</Badge>
                </div>
                <CardHeader>
                  <div className="h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="font-bold text-white">CASHBACK MASTER</span>
                  </div>
                  <CardTitle>3% cashback på alla köp</CardTitle>
                  <CardDescription>Ingen årsavgift första året</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 mb-6">
                    <li>• 3% cashback på alla köp</li>
                    <li>• Ingen årsavgift första året</li>
                    <li>• 56 räntefria dagar</li>
                    <li>• Grundläggande försäkringar</li>
                  </ul>
                  <Button className="w-full">Ansök om kort</Button>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-500">Populärast</Badge>
                </div>
                <CardHeader>
                  <div className="h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="font-bold text-white">TRAVEL PREMIUM</span>
                  </div>
                  <CardTitle>Samla miles & reseförmåner</CardTitle>
                  <CardDescription>299 kr årsavgift</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 mb-6">
                    <li>• 2 miles per spenderad krona</li>
                    <li>• Lounge-access på flygplatser</li>
                    <li>• Omfattande reseförsäkringar</li>
                    <li>• 10 000 välkomstmiles</li>
                  </ul>
                  <Button className="w-full">Ansök om kort</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="font-bold text-white">CLASSIC VISA</span>
                  </div>
                  <CardTitle>Helt kostnadsfritt</CardTitle>
                  <CardDescription>Perfekt första kort</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 mb-6">
                    <li>• Ingen årsavgift någonsin</li>
                    <li>• Köpskydd och försäkringar</li>
                    <li>• 45 räntefria dagar</li>
                    <li>• Enkel och snabb ansökan</li>
                  </ul>
                  <Button className="w-full">Ansök om kort</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Credit Card Guide */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Komplett guide till kreditkort</h2>
            
            <Tabs defaultValue="basics" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="basics">Grunderna</TabsTrigger>
                <TabsTrigger value="fees">Avgifter</TabsTrigger>
                <TabsTrigger value="benefits">Förmåner</TabsTrigger>
                <TabsTrigger value="smart-use">Smart användning</TabsTrigger>
              </TabsList>
              
              <TabsContent value="basics" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Hur fungerar kreditkort?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>
                        Ett kreditkort ger dig tillgång till en kreditlimit som du kan använda för köp och 
                        uttag. Du betalar tillbaka det du använt, antingen helt eller delvis varje månad.
                      </p>
                      <div>
                        <h4 className="font-semibold mb-2">Viktiga begrepp:</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li><strong>Kreditlimit:</strong> Max belopp du kan använda</li>
                          <li><strong>Räntefria dagar:</strong> Period utan ränta om du betalar hela beloppet</li>
                          <li><strong>Minimibelopp:</strong> Minsta summa du måste betala varje månad</li>
                          <li><strong>Kreditränta:</strong> Ränta på outnyttjat saldo</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-blue-700">
                          <strong>Tips:</strong> Betala alltid hela saldot innan förfallodagen för att undvika ränta 
                          och bygga upp en god kredithistorik.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Skillnad mellan kort</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Kreditkort vs Betalkort</h4>
                        <div className="text-sm space-y-2">
                          <div>
                            <strong>Kreditkort:</strong> Lånar pengar som betalas tillbaka senare
                            <ul className="text-muted-foreground ml-4">
                              <li>• Bygger kredithistorik</li>
                              <li>• Räntefria dagar</li>
                              <li>• Ofta bättre förmåner</li>
                              <li>• Kräver kreditprövning</li>
                            </ul>
                          </div>
                          <div>
                            <strong>Betalkort:</strong> Drar pengar direkt från kontot
                            <ul className="text-muted-foreground ml-4">
                              <li>• Inga räntekostnader</li>
                              <li>• Mindre risk för skulder</li>
                              <li>• Enklare att få beviljat</li>
                              <li>• Färre förmåner</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="fees" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Förstå alla avgifter och kostnader</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4">Vanliga avgifter</h4>
                        <div className="space-y-4 text-sm">
                          <div>
                            <strong>Årsavgift:</strong> 0-1 500 kr/år
                            <p className="text-muted-foreground">Fast kostnad för att ha kortet. Många kort har ingen årsavgift första året.</p>
                          </div>
                          <div>
                            <strong>Ränta på kreditsaldo:</strong> 8-25% per år
                            <p className="text-muted-foreground">Ränta på outnyttjat saldo. Undviks genom att betala hela saldot i tid.</p>
                          </div>
                          <div>
                            <strong>Uttaksavgift:</strong> 25-50 kr + %
                            <p className="text-muted-foreground">Avgift för kontantuttag i bankomat. Använd kortet för köp istället.</p>
                          </div>
                          <div>
                            <strong>Valutaavgift:</strong> 0-2,5%
                            <p className="text-muted-foreground">Extra kostnad vid köp i utländsk valuta. Vissa kort har ingen valutaavgift.</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4">Kostnadsexempel</h4>
                        <div className="bg-muted p-4 rounded-lg">
                          <div className="text-center mb-4">
                            <div className="text-2xl font-bold">Kreditkort med årsavgift</div>
                            <div className="text-sm text-muted-foreground">299 kr årsavgift</div>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Årsavgift:</span>
                              <span className="font-semibold">299 kr</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Månadsvis köp 5 000 kr:</span>
                              <span className="font-semibold">0 kr (om betalt i tid)</span>
                            </div>
                            <div className="flex justify-between">
                              <span>2% cashback per år:</span>
                              <span className="font-semibold text-green-600">-1 200 kr</span>
                            </div>
                            <hr />
                            <div className="flex justify-between font-bold">
                              <span>Nettovinst per år:</span>
                              <span className="text-green-600">+901 kr</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 bg-amber-50 p-4 rounded-lg">
                          <h5 className="font-semibold mb-2 text-amber-800">⚠️ Fallgropar</h5>
                          <ul className="text-sm text-amber-700 space-y-1">
                            <li>• Betala aldrig bara minimibeloppet</li>
                            <li>• Undvik kontantuttag (höga avgifter)</li>
                            <li>• Läs villkoren för bonusprogram</li>
                            <li>• Håll koll på utgångsdatum</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="benefits" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-green-600">💰 Cashback & Bonusprogram</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 text-sm">
                        <div>
                          <strong>Cashback:</strong>
                          <p className="text-muted-foreground">Få pengar tillbaka på dina köp, vanligtvis 0,5-3% av köpesumman.</p>
                        </div>
                        <div>
                          <strong>Bonuspoäng:</strong>
                          <p className="text-muted-foreground">Samla poäng som kan växlas mot varor, resor eller kontantrabatter.</p>
                        </div>
                        <div>
                          <strong>Miles:</strong>
                          <p className="text-muted-foreground">Samla flygmiles för gratis resor eller uppgraderingar.</p>
                        </div>
                        <div>
                          <strong>Butikrabatter:</strong>
                          <p className="text-muted-foreground">Extra rabatter hos specifika återförsäljare och partners.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-blue-600">🛡️ Försäkringar & Skydd</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 text-sm">
                        <div>
                          <strong>Köpskydd:</strong>
                          <p className="text-muted-foreground">Skydd mot defekta varor och garantiförlängning.</p>
                        </div>
                        <div>
                          <strong>Reseförsäkring:</strong>
                          <p className="text-muted-foreground">Omfattande skydd vid resor, inklusive avbokningsskydd.</p>
                        </div>
                        <div>
                          <strong>Stöldskydd:</strong>
                          <p className="text-muted-foreground">Ersättning vid stöld av kort eller missbruk.</p>
                        </div>
                        <div>
                          <strong>Priskydd:</strong>
                          <p className="text-muted-foreground">Ersättning om du hittar samma vara billigare inom viss tid.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="smart-use" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-green-600">✓ Smarta strategier</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li>
                          <strong>Betala hela saldot varje månad</strong>
                          <p className="text-muted-foreground">Undvik ränta och bygg upp kreditvärdighet</p>
                        </li>
                        <li>
                          <strong>Använd för alla köp (om du har disciplin)</strong>
                          <p className="text-muted-foreground">Maximera cashback och bonuspoäng</p>
                        </li>
                        <li>
                          <strong>Sätt upp automatisk betalning</strong>
                          <p className="text-muted-foreground">Missa aldrig en betalning och undvik förseningsavgifter</p>
                        </li>
                        <li>
                          <strong>Välj kort efter dina vanor</strong>
                          <p className="text-muted-foreground">Reseälskare bör välja resekort, shoppare cashback-kort</p>
                        </li>
                        <li>
                          <strong>Använd förmånerna</strong>
                          <p className="text-muted-foreground">Ta vara på försäkringar och bonusprogram</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-red-600">⚠️ Undvik dessa misstag</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li>
                          <strong>Bara betala minimibeloppet</strong>
                          <p className="text-muted-foreground">Leder till höga räntekostnader och skuldfällor</p>
                        </li>
                        <li>
                          <strong>Ta kontantuttag</strong>
                          <p className="text-muted-foreground">Höga avgifter och ränta börjar löpa omedelbart</p>
                        </li>
                        <li>
                          <strong>Ansök om för många kort samtidigt</strong>
                          <p className="text-muted-foreground">Försämrar din kreditvärdighet tillfälligt</p>
                        </li>
                        <li>
                          <strong>Ignorera utgångsdatum</strong>
                          <p className="text-muted-foreground">Kan leda till avvisade betalningar i kritiska situationer</p>
                        </li>
                        <li>
                          <strong>Inte läsa villkoren</strong>
                          <p className="text-muted-foreground">Missa viktiga förändringar i avgifter eller förmåner</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-violet-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Hitta ditt perfekta kreditkort idag
            </h2>
            <p className="text-xl mb-8">
              Jämför över 50 kreditkort och hitta det som passar dina behov bäst
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Jämför kreditkort nu
            </Button>
          </div>
        </section>
      </main>

      <LegacyFooter />
    </>
  );
}