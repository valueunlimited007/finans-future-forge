import React from "react";
import { Helmet } from "react-helmet-async";
import LegacyHeader from "@/components/LegacyHeader";
import LegacyFooter from "@/components/LegacyFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RichForetagslan() {
  return (
    <>
      <Helmet>
        <title>Företagslån - Finansiering för företag 2025 | Finansguiden.se</title>
        <meta name="description" content="Företagslån för alla företag. Upp till 5 miljoner kr. ✓ Även utan säkerhet ✓ Snabba beslut ✓ Flexibla villkor. Finansiera expansion, kassaflöde eller investeringar." />
        <link rel="canonical" href="https://finansguiden.se/foretagslan" />
        <meta property="og:title" content="Företagslån - Finansiering för företag 2025" />
        <meta property="og:description" content="Jämför företagslån från ledande långivare. Finansiera tillväxt, kassaflöde och investeringar för ditt företag." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            "name": "Företagslån",
            "description": "Företagsfinansiering för tillväxt och investeringar"
          })}
        </script>
      </Helmet>

      <LegacyHeader />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Företagslån för <span className="text-emerald-600">tillväxt</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Finansiera ditt företags utveckling med flexibla företagslån. Upp till 5 miljoner kr, 
                snabba beslut och konkurrenskraftiga villkor för alla typer av företag.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Button size="lg" className="text-lg px-8">
                  Ansök om företagslån
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Kostnadsfri rådgivning
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <Badge variant="secondary">✓ Upp till 5 miljoner kr</Badge>
                <Badge variant="secondary">✓ Även utan säkerhet</Badge>
                <Badge variant="secondary">✓ Flexibla återbetalningar</Badge>
                <Badge variant="secondary">✓ Snabba beslut</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Business Loans */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Olika typer av företagsfinansiering</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <CardTitle>Tillväxtlån</CardTitle>
                  <CardDescription>
                    Finansiera expansion, nya marknader eller produktutveckling
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• 100 000 - 5 000 000 kr</li>
                    <li>• Löptid upp till 10 år</li>
                    <li>• Konkurrenskraftiga räntor</li>
                    <li>• Flexibel återbetalning</li>
                  </ul>
                  <Button className="w-full">Läs mer om tillväxtlån</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <CardTitle>Kassaflödeslån</CardTitle>
                  <CardDescription>
                    Kortsiktig finansiering för kassaflödesproblem
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• 50 000 - 2 000 000 kr</li>
                    <li>• Snabba utbetalningar</li>
                    <li>• Kort löptid (3-24 månader)</li>
                    <li>• Minimal dokumentation</li>
                  </ul>
                  <Button className="w-full">Läs mer om kassaflödeslån</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <CardTitle>Investeringslån</CardTitle>
                  <CardDescription>
                    Finansiera maskiner, utrustning eller lokaler
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• 100 000 - 10 000 000 kr</li>
                    <li>• Säkerhet i investering</li>
                    <li>• Långa löptider</li>
                    <li>• Gynnsamma villkor</li>
                  </ul>
                  <Button className="w-full">Läs mer om investeringslån</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <CardTitle>Startupfinansiering</CardTitle>
                  <CardDescription>
                    Lån för nya företag och entreprenörer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• 25 000 - 500 000 kr</li>
                    <li>• Även för nya företag</li>
                    <li>• Personlig borgen möjlig</li>
                    <li>• Rådgivning inkluderad</li>
                  </ul>
                  <Button className="w-full">Läs mer om startupfinansiering</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">📄</span>
                  </div>
                  <CardTitle>Faktoring</CardTitle>
                  <CardDescription>
                    Sälj dina fakturor för omedelbar likviditet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Baserat på fakturor</li>
                    <li>• Snabb tillgång till kapital</li>
                    <li>• Ingen kreditprövning</li>
                    <li>• Flexibel lösning</li>
                  </ul>
                  <Button className="w-full">Läs mer om faktoring</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🏪</span>
                  </div>
                  <CardTitle>Handelskredit</CardTitle>
                  <CardDescription>
                    Revolverande kredit för löpande behov
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                    <li>• Kreditlimit upp till 2 miljoner</li>
                    <li>• Använd vid behov</li>
                    <li>• Rörlig ränta</li>
                    <li>• Perfekt för säsongsvariationer</li>
                  </ul>
                  <Button className="w-full">Läs mer om handelskredit</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Guide Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Guide: Så ansöker du om företagslån</h2>
            
            <Tabs defaultValue="preparation" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="preparation">Förberedelse</TabsTrigger>
                <TabsTrigger value="requirements">Krav</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="tips">Tips</TabsTrigger>
              </TabsList>
              
              <TabsContent value="preparation" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Dokumentation du behöver</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Företagsdokument</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Registreringsbevis från Bolagsverket</li>
                          <li>• Senaste årsredovisningen</li>
                          <li>• Senaste bokslutet</li>
                          <li>• Företagets stadgar</li>
                          <li>• Firmatecknare och ägare</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Ekonomiska handlingar</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Senaste 12 månaders bokföring</li>
                          <li>• Resultat- och balansrapporter</li>
                          <li>• Kassaflödesanalys</li>
                          <li>• Budgetar och prognoser</li>
                          <li>• Skatteverkets kontrolluppgifter</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Affärsplan och syfte</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm">
                        En välskriven affärsplan ökar dina chanser att få lånet godkänt betydligt. 
                        Inkludera följande delar:
                      </p>
                      <div>
                        <h4 className="font-semibold mb-2">Viktiga delar att inkludera</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Företagsbeskrivning och verksamhet</li>
                          <li>• Marknadsanalys och konkurrenter</li>
                          <li>• Tydligt syfte med lånet</li>
                          <li>• Återbetalningsplan</li>
                          <li>• Riskanalys och säkerheter</li>
                          <li>• Ekonomiska nyckeltal</li>
                          <li>• Framtidsutsikter och tillväxtmål</li>
                        </ul>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <p className="text-sm text-emerald-700">
                          <strong>Tips:</strong> Var konkret och realistisk i dina prognoser. 
                          Banker värdesätter ärliga bedömningar högre än optimistiska fantasier.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="requirements" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Krav för företagslån</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-emerald-600">Grundläggande krav</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Registrerat svenskt företag</li>
                            <li>• Minst 6-12 månaders verksamhet</li>
                            <li>• Omsättning över 500 000 kr/år</li>
                            <li>• Ingen pågående rekonstruktion</li>
                            <li>• Positiv utveckling senaste året</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-blue-600">För bättre villkor</h4>
                          <ul className="text-sm space-y-1">
                            <li>• Stabil lönsamhet över tid</li>
                            <li>• Stark balansräkning</li>
                            <li>• Diversifierad kundportfölj</li>
                            <li>• Erfarna ledning</li>
                            <li>• Säkerheter att ställa</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Vad banker bedömer</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Ekonomiska nyckeltal</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• <strong>Soliditet:</strong> Bör vara över 20%</li>
                            <li>• <strong>Kassalikviditet:</strong> Minst 10-15%</li>
                            <li>• <strong>Räntabilitet:</strong> Positiv resultatutveckling</li>
                            <li>• <strong>Skuldsättning:</strong> Rimlig i förhållande till omsättning</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Kvalitativa faktorer</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• Branschkännedom och experience</li>
                            <li>• Affärsmodellens hållbarhet</li>
                            <li>• Konkurrensposition på marknaden</li>
                            <li>• Ledningens kompetens</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="process" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Så går låneprocessen till</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-600">1</div>
                        <div>
                          <h4 className="font-semibold">Förberedelse och ansökan</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Samla all dokumentation och fyll i ansökan. Många banker erbjuder digital ansökan som går snabbt.
                          </p>
                          <div className="text-xs text-muted-foreground mt-2">Tid: 1-3 dagar</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-600">2</div>
                        <div>
                          <h4 className="font-semibold">Initial bedömning</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Banken gör en första bedömning av din ansökan och kan komma med frågor eller begära kompletteringar.
                          </p>
                          <div className="text-xs text-muted-foreground mt-2">Tid: 3-7 dagar</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-600">3</div>
                        <div>
                          <h4 className="font-semibold">Kreditprövning</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Djupare analys av företagets ekonomi, affärsplan och återbetalningsförmåga. Kan inkludera företagsbesök.
                          </p>
                          <div className="text-xs text-muted-foreground mt-2">Tid: 1-3 veckor</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-600">4</div>
                        <div>
                          <h4 className="font-semibold">Beslut och villkor</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Banken meddelar sitt beslut med specificerade villkor, ränta, säkerheter och återbetalningsplan.
                          </p>
                          <div className="text-xs text-muted-foreground mt-2">Tid: 1-2 dagar</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-600">5</div>
                        <div>
                          <h4 className="font-semibold">Avtal och utbetalning</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Signering av låneavtal, registrering av säkerheter och utbetalning av lånebeloppet.
                          </p>
                          <div className="text-xs text-muted-foreground mt-2">Tid: 3-7 dagar</div>
                        </div>
                      </div>

                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-amber-800">Total handläggningstid</h4>
                        <p className="text-sm text-amber-700">
                          För mindre belopp (under 500 000 kr): 1-2 veckor
                          <br />
                          För större belopp (över 500 000 kr): 2-6 veckor
                          <br />
                          Komplexa fall kan ta längre tid.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tips" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-emerald-600">✓ Så ökar du dina chanser</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li>
                          <strong>Ha ordning på ekonomin</strong>
                          <p className="text-muted-foreground">Uppdaterad bokföring och tydliga rapporter visar professionalitet</p>
                        </li>
                        <li>
                          <strong>Visa tydligt syfte</strong>
                          <p className="text-muted-foreground">Förklara exakt hur lånet ska användas och hur det skapar värde</p>
                        </li>
                        <li>
                          <strong>Bygg relation med banken</strong>
                          <p className="text-muted-foreground">Ha företagskonto och andra tjänster hos samma bank</p>
                        </li>
                        <li>
                          <strong>Erbjud säkerheter</strong>
                          <p className="text-muted-foreground">Även delvis säkerheter kan förbättra villkoren avsevärt</p>
                        </li>
                        <li>
                          <strong>Visa stabilitet</strong>
                          <p className="text-muted-foreground">Långa kundrelationer och återkommande intäkter värderas högt</p>
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
                          <strong>Ansök om för stort belopp</strong>
                          <p className="text-muted-foreground">Var realistisk - banken bedömer din återbetalningsförmåga noga</p>
                        </li>
                        <li>
                          <strong>Dölj problem</strong>
                          <p className="text-muted-foreground">Ärlighet om utmaningar bygger förtroende hos långivaren</p>
                        </li>
                        <li>
                          <strong>Sakna tydlig plan</strong>
                          <p className="text-muted-foreground">Vaga beskrivningar av hur pengarna ska användas skapar tvivel</p>
                        </li>
                        <li>
                          <strong>Ignorera mindre långivare</strong>
                          <p className="text-muted-foreground">Alternativa finansiärer kan ha bättre villkor för vissa företag</p>
                        </li>
                        <li>
                          <strong>Inte jämföra villkor</strong>
                          <p className="text-muted-foreground">Räntor och avgifter kan skilja kraftigt mellan olika långivare</p>
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
        <section className="py-16 px-4 bg-emerald-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Redo att finansiera ditt företags tillväxt?
            </h2>
            <p className="text-xl mb-8">
              Få kostnadsfri rådgivning och hitta bästa finansieringslösningen för ditt företag
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Kostnadsfri rådgivning
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-emerald-600">
                Jämför företagslån
              </Button>
            </div>
          </div>
        </section>
      </main>

      <LegacyFooter />
    </>
  );
}