import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Shield, TrendingUp, Users, Clock, CheckCircle, XCircle, Info, Calculator, Star } from "lucide-react";
import BankComparisonTable from "./BankComparisonTable";
import PrivatlanFAQ from "./PrivatlanFAQ";
import PrivatlanGuideSteps from "./PrivatlanGuideSteps";
import CustomBreadcrumb from "./CustomBreadcrumb";
import FinancialCalculator from "@/components/FinancialCalculator";
import OffersContainer from "@/components/OffersContainer";

export default function RichPrivatlan() {
  return (
    <>
      <Helmet>
        <title>Privatlån - Jämför bästa räntan 2025 | Finansguiden.se</title>
        <meta name="description" content="Jämför privatlån från 50+ långivare. Räntor från 2,9%. Snabba beslut inom 24h. Belopp 10 000 - 600 000 kr. ✓ Oberoende jämförelse ✓ Bästa villkor 2025." />
        <link rel="canonical" href="https://finansguiden.se/privatlan" />
        <meta property="og:title" content="Privatlån - Jämför bästa räntan 2025" />
        <meta property="og:description" content="Hitta billigaste privatlånet. Jämför räntor, villkor och få snabbt besked från Sveriges bästa långivare." />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            "name": "Privatlån",
            "description": "Jämför privatlån från Sveriges ledande långivare",
            "provider": {
              "@type": "FinancialService",
              "name": "Finansguiden.se"
            }
          })}
        </script>
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Privatlån med <span className="text-blue-600">bästa räntan</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Jämför privatlån från 50+ långivare. Räntor från 2,9% och snabba beslut inom 24 timmar. 
                Låna 10 000 - 600 000 kr för alla ändamål.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Button size="lg" className="text-lg px-8 bg-blue-600 text-white hover:bg-blue-700 shadow-lg">
                  Jämför privatlån nu
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Räkna lånet
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <Badge variant="secondary">✓ Räntor från 2,9%</Badge>
                <Badge variant="secondary">✓ Beslut inom 24h</Badge>
                <Badge variant="secondary">✓ Upp till 600 000 kr</Badge>
                <Badge variant="secondary">✓ Ingen bindningstid</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Comparison */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Populära privatlån just nu</h2>
            
            {/* Adtraction Offers Container */}
            <OffersContainer 
              category="privatlan" 
              limit={4}
              className="mb-12" 
            />
            
            <div className="text-center">
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/privatlan#jamfor">Se alla privatlån</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Räkna på ditt privatlån</h2>
              <p className="text-xl text-muted-foreground">
                Använd vår kalkylator för att se vad lånet kostar och jämföra olika alternativ
              </p>
            </div>
            <FinancialCalculator />
          </div>
        </section>

        {/* Popular Search Terms */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Populära söktermmer för privatlån</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Kredit utan UC</CardTitle>
                  <CardDescription>Lån utan kreditupplysning</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Många söker efter lån utan UC-kontroll, men nästan alla seriösa långivare gör kreditkontroll. 
                    Undvik oseriösa aktörer som erbjuder "garanterade lån utan UC".
                  </p>
                  <Button variant="outline" size="sm" className="w-full">Läs mer om UC</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Nordea Privatlån</CardTitle>
                  <CardDescription>Stor svensk bank</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Nordea erbjuder privatlån från 25 000 kr upp till 600 000 kr med konkurrenskraftiga räntor 
                    för kunder med god kreditvärdighet.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">Jämför Nordea</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Kredit & Lån</CardTitle>
                  <CardDescription>Allmän information</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Kredit och lån är samma sak - en överenskommelse där du lånar pengar mot ränta. 
                    Privatlån är den vanligaste typen av konsumentkredit.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">Läs grunderna</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Loan Types Comparison */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Jämföra olika lånetyper</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-4 border-b">Lånetyp</th>
                    <th className="text-left p-4 border-b">Ränta</th>
                    <th className="text-left p-4 border-b">Säkerhet</th>
                    <th className="text-left p-4 border-b">Användning</th>
                    <th className="text-left p-4 border-b">Maxbelopp</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b font-semibold">Privatlån</td>
                    <td className="p-4 border-b">2,9-15%</td>
                    <td className="p-4 border-b">Nej</td>
                    <td className="p-4 border-b">Fri användning</td>
                    <td className="p-4 border-b">600 000 kr</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="p-4 border-b font-semibold">Bolån</td>
                    <td className="p-4 border-b">2,5-4%</td>
                    <td className="p-4 border-b">Ja (fastighet)</td>
                    <td className="p-4 border-b">Bostadsköp</td>
                    <td className="p-4 border-b">85% av värdet</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b font-semibold">Billån</td>
                    <td className="p-4 border-b">3,5-12%</td>
                    <td className="p-4 border-b">Ja (bil)</td>
                    <td className="p-4 border-b">Bilköp</td>
                    <td className="p-4 border-b">100% av bilens värde</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="p-4 border-b font-semibold">Kreditkort</td>
                    <td className="p-4 border-b">15-25%</td>
                    <td className="p-4 border-b">Nej</td>
                    <td className="p-4 border-b">Köp & uttag</td>
                    <td className="p-4 border-b">Varierar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Bank Specific Information */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Privatlån från olika banker</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold mb-6">Stora banker</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">SEB Privatlån</h4>
                        <Badge variant="secondary">Från 2,95%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        25 000 - 600 000 kr. Snabb digital ansökan. Inga uppläggningsavgifter för befintliga kunder.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">Nordea Privatlån</h4>
                        <Badge variant="secondary">Från 3,15%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        25 000 - 600 000 kr. Rabatt för befintliga kunder. Möjlighet till betalningsuppehåll.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">Handelsbanken</h4>
                        <Badge variant="secondary">Från 3,25%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        30 000 - 500 000 kr. Personlig rådgivning på kontor. Flexibla återbetalningsalternativ.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6">Digitalbanker</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">Marginalen Bank</h4>
                        <Badge variant="secondary">Från 4,75%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        15 000 - 350 000 kr. Snabb hantering online. Besked inom 24 timmar.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">Northmill</h4>
                        <Badge variant="secondary">Från 5,95%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        10 000 - 300 000 kr. Helt digital process. Automatisk kreditbedömning.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">Resurs Bank</h4>
                        <Badge variant="secondary">Från 6,45%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        20 000 - 400 000 kr. Flexibla villkor. Möjlighet till extra amorteringar.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Guide */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Komplett guide till privatlån</h2>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="overview">Översikt</TabsTrigger>
                <TabsTrigger value="requirements">Krav</TabsTrigger>
                <TabsTrigger value="costs">Kostnader</TabsTrigger>
                <TabsTrigger value="tips">Tips</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Vad är ett privatlån?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>
                        Ett privatlån är en typ av blancolån som ger dig snabb tillgång till kapital utan att du behöver 
                        ställa någon säkerhet. Pengarna kan användas till vad du vill - hemförbättring, bilköp, 
                        skuldkonsolidering eller andra personliga behov.
                      </p>
                      <p>
                        Privatlån har vanligtvis fast ränta under hela låneperioden, vilket ger förutsägbara 
                        månadsbetalningar. Löptiden är ofta mellan 1-10 år, och lånebelopp varierar från 10 000 kr 
                        upp till 600 000 kr beroende på din ekonomiska situation.
                      </p>
                      <p>
                        <strong>Fördelar:</strong> Snabb handläggning, ingen säkerhet krävs, fri användning av pengarna, 
                        fast ränta och månadsbetalning.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Så fungerar ansökan</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 text-sm">1</div>
                          <div>
                            <h4 className="font-semibold">Jämför erbjudanden</h4>
                            <p className="text-sm text-muted-foreground">Använd vår jämförelse för att hitta bästa räntan för din situation</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 text-sm">2</div>
                          <div>
                            <h4 className="font-semibold">Ansök online</h4>
                            <p className="text-sm text-muted-foreground">Fyll i ansökan digitalt - tar ofta bara 5-10 minuter</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 text-sm">3</div>
                          <div>
                            <h4 className="font-semibold">Få snabbt besked</h4>
                            <p className="text-sm text-muted-foreground">Många långivare ger preliminärt svar inom minuter</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 text-sm">4</div>
                          <div>
                            <h4 className="font-semibold">Signera och få pengarna</h4>
                            <p className="text-sm text-muted-foreground">Signera digitalt och få pengarna utbetalda samma dag</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="requirements" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Krav för att få privatlån</CardTitle>
                    <CardDescription>Dessa krav är vanliga hos de flesta långivare</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4 text-green-600">✓ Grundläggande krav</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Minst 18 år gammal</li>
                          <li>• Svensk medborgare eller permanent uppehållstillstånd</li>
                          <li>• Fast inkomst (anställning, pension eller företag)</li>
                          <li>• Månadsinkomst på minst 12 000-15 000 kr</li>
                          <li>• Eget svenskt bankkonto</li>
                          <li>• Ingen pågående skuldsanering</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-blue-600">💡 För bättre villkor</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Hög och stabil inkomst</li>
                          <li>• God kredithistorik utan betalningsanmärkningar</li>
                          <li>• Låg skuldsättningsgrad (under 85%)</li>
                          <li>• Flera års anställningstid</li>
                          <li>• Befintlig kund hos banken</li>
                          <li>• Säkerhet eller medlåntagare (för större belopp)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                      <h4 className="font-semibold mb-2 text-amber-800">⚠️ Viktigt att veta</h4>
                      <p className="text-sm text-amber-700">
                        Även om du uppfyller grundkraven är det inte säkert att du får lånet beviljat. 
                        Långivare gör alltid en individuell bedömning av din ekonomiska situation och återbetalningsförmåga.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="costs" className="mt-8">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Vad kostar ett privatlån?</CardTitle>
                      <CardDescription>Förstå alla kostnader för att göra rätt val</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-4">Huvudkostnader</h4>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-medium">Ränta</h5>
                              <p className="text-sm text-muted-foreground">
                                Den årliga kostnaden för lånet, vanligtvis 2,9-15% beroende på din kreditvärdighet.
                              </p>
                            </div>
                            <div>
                              <h5 className="font-medium">Uppläggningsavgift</h5>
                              <p className="text-sm text-muted-foreground">
                                Engångsavgift vid lånets start, ofta 0-3% av lånebeloppet (max 5 000 kr).
                              </p>
                            </div>
                            <div>
                              <h5 className="font-medium">Månadsavgift</h5>
                              <p className="text-sm text-muted-foreground">
                                Fast avgift varje månad, vanligtvis 29-99 kr.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-4">Exempel på totalkostnad</h4>
                          <div className="bg-muted p-4 rounded-lg">
                            <div className="text-center mb-4">
                              <div className="text-2xl font-bold">200 000 kr</div>
                              <div className="text-sm text-muted-foreground">på 5 år med 5,9% ränta</div>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span>Månadsavgift:</span>
                                <span className="font-semibold">3 833 kr</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Total återbetalning:</span>
                                <span className="font-semibold">229 980 kr</span>
                              </div>
                              <div className="flex justify-between text-orange-600">
                                <span>Total räntekostnad:</span>
                                <span className="font-semibold">29 980 kr</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Effektiv ränta - det viktiga måttet</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Effektiv ränta inkluderar alla kostnader för lånet (ränta, avgifter, etc.) och gör det enkelt 
                        att jämföra olika erbjudanden. Det är enligt lag det enda måttet långivare får använda i marknadsföring.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">💡 Jämförelsexempel</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <strong>Lån A:</strong> 4,5% nominell ränta + 500 kr uppläggning + 49 kr/månad
                            <br />
                            <span className="text-blue-600 font-semibold">Effektiv ränta: 5,2%</span>
                          </div>
                          <div>
                            <strong>Lån B:</strong> 5,0% nominell ränta + ingen uppläggning + 0 kr/månad
                            <br />
                            <span className="text-blue-600 font-semibold">Effektiv ränta: 5,0%</span>
                          </div>
                        </div>
                        <p className="mt-2 text-sm">Trots lägre nominell ränta är Lån B billigare totalt!</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="tips" className="mt-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-green-600">✓ Så får du bästa räntan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li>
                          <strong>Förbättra din kreditvärdighet</strong>
                          <p className="text-muted-foreground">Betala räkningar i tid, minska skulder och undvik kreditupplysningar i onödan</p>
                        </li>
                        <li>
                          <strong>Jämför flera långivare</strong>
                          <p className="text-muted-foreground">Räntor kan skilja flera procent mellan olika banker</p>
                        </li>
                        <li>
                          <strong>Välj kortare löptid</strong>
                          <p className="text-muted-foreground">Kortare lån ger lägre ränta men högre månadsavgift</p>
                        </li>
                        <li>
                          <strong>Var befintlig kund</strong>
                          <p className="text-muted-foreground">Din egen bank ger ofta bättre villkor</p>
                        </li>
                        <li>
                          <strong>Ansök om rimligt belopp</strong>
                          <p className="text-muted-foreground">Låna inte mer än 85% av din årsinkomst</p>
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
                          <strong>Ansök hos för många samtidigt</strong>
                          <p className="text-muted-foreground">Många kreditupplysningar på kort tid försämrar din kreditvärdighet</p>
                        </li>
                        <li>
                          <strong>Fokusera bara på månadsavgiften</strong>
                          <p className="text-muted-foreground">Längre löptid ger lägre månadsavgift men högre totalkostnad</p>
                        </li>
                        <li>
                          <strong>Glöm läsa villkoren</strong>
                          <p className="text-muted-foreground">Kontrollera avgifter för förtida återbetalning och kontering</p>
                        </li>
                        <li>
                          <strong>Låna för konsumtion</strong>
                          <p className="text-muted-foreground">Undvik att låna till semester, kläder eller andra tillfälliga nöjen</p>
                        </li>
                        <li>
                          <strong>Inte ha buffert kvar</strong>
                          <p className="text-muted-foreground">Se till att du har råd med månadsavgiften även vid inkomstbortfall</p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Vanliga frågor om privatlån</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Vad är skillnaden mellan privatlån och blancolån?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Privatlån och blancolån är samma sak - båda termerna beskriver lån utan säkerhet för privatpersoner. Skillnaden ligger endast i vad olika banker väljer att kalla sina produkter.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Kan jag få privatlån med betalningsanmärkning?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Det är mycket svårt att få privatlån från traditionella banker med aktiva betalningsanmärkningar. Vissa nischade långivare erbjuder lån utan UC-kontroll, men dessa har ofta mycket höga räntor. Se vår sektion om <a href="/lan-utan-uc" className="text-blue-600 underline">lån utan UC</a>.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Hur snabbt kan jag få pengarna?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Med digitala ansökningar kan du ofta få preliminärt besked inom minuter och pengarna utbetalda samma dag. Handläggningstiden beror på vilken bank du väljer och hur komplett din ansökan är. Många långivare erbjuder utbetalning inom 24 timmar för godkända lån.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Kan jag betala tillbaka lånet i förtid?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Ja, du har alltid rätt att betala tillbaka ditt privatlån i förtid. Vissa banker tar ut en avgift för detta (vanligtvis 1-2% av resterande skuld), medan andra har ingen avgift alls. Kontrollera alltid villkoren innan du skriver på.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Redo att hitta ditt privatlån?
            </h2>
            <p className="text-xl mb-8">
              Jämför räntor från 50+ långivare och hitta bästa erbjudandet för din situation
            </p>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white text-primary border-2 border-white hover:bg-white/90 font-semibold">
              Jämför privatlån nu
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}