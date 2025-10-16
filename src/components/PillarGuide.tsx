import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ExpertProfile from "./ExpertProfile";

export default function PillarGuide() {
  return (
    <div className="space-y-8">
      {/* Expert Validation */}
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Expertgranskad information</h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
          <ExpertProfile
            name="Magnus Andersson"
            title="Auktoriserad Finansiell Rådgivare"
            experience="15+ års erfarenhet inom finansiell rådgivning"
            specialization={["Privatlån", "Företagsfinansiering", "Kreditanalys"]}
            credentials={[
              "Certifierad Finansiell Rådgivare (CFP)",
              "Auktoriserad av Finansinspektionen",
              "Medlem i SweSIF (Svenska Finansrådgivarnas Förening)",
              "Tidigare Senior Kreditanalytiker på Nordea"
            ]}
          />
          
          <ExpertProfile
            name="Lisa Eriksson"
            title="Ekonomijournalist & Författare"
            experience="12+ års erfarenhet av finansjournalistik"
            specialization={["Konsumentekonomi", "Kreditkort", "Sparande & Investeringar"]}
            credentials={[
              "Ekonomijournalist på Svenska Dagbladet 2015-2020",
              "Författare: 'Smart Privatekonomi' (2022)",
              "Medlem i Ekonomijournalisternas Förening",
              "Pristagare: Årets Konsumentekonomi-artikel 2021"
            ]}
          />
        </div>
      </section>

      {/* Comprehensive Loan Comparison */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Djupgående jämförelse: Alla lånetyper</h2>
            <p className="text-xl text-muted-foreground">
              Expertanalys av när du ska välja vilket lån för optimal ekonomi
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Detaljerad jämförelse av lånetyper</CardTitle>
                <CardDescription>Baserat på verkliga marknadsdata från januari 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Lånetyp</th>
                        <th className="text-left p-2">Typisk ränta</th>
                        <th className="text-left p-2">Max belopp</th>
                        <th className="text-left p-2">Löptid</th>
                        <th className="text-left p-2">Säkerhet</th>
                        <th className="text-left p-2">Bäst för</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b">
                        <td className="p-2 font-medium">Privatlån</td>
                        <td className="p-2">2,9-12%</td>
                        <td className="p-2">600 000 kr</td>
                        <td className="p-2">1-15 år</td>
                        <td className="p-2">Ingen</td>
                        <td className="p-2">Hemförbättring, bilköp, skuldsanering</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Bolån</td>
                        <td className="p-2">2,5-5%</td>
                        <td className="p-2">85% av bostadens värde</td>
                        <td className="p-2">Up till 50 år</td>
                        <td className="p-2">Bostaden</td>
                        <td className="p-2">Bostadsköp, större renoveringar</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Billån</td>
                        <td className="p-2">3,5-8%</td>
                        <td className="p-2">100% av bilens värde</td>
                        <td className="p-2">1-8 år</td>
                        <td className="p-2">Bilen</td>
                        <td className="p-2">Ny- och begagnade bilar</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Företagslån</td>
                        <td className="p-2">4-15%</td>
                        <td className="p-2">5 000 000 kr+</td>
                        <td className="p-2">1-10 år</td>
                        <td className="p-2">Ofta krävs</td>
                        <td className="p-2">Expansion, kassaflöde, investeringar</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Lån utan UC</td>
                        <td className="p-2">15-30%</td>
                        <td className="p-2">100 000 kr</td>
                        <td className="p-2">6 mån-3 år</td>
                        <td className="p-2">Ingen</td>
                        <td className="p-2">Akuta behov, dålig kredit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">💡 Expertens rekommendation</h4>
                    <p className="text-sm text-green-700">
                      "Välj alltid den lånetyp som har lägst totalkostnad för ditt specifika ändamål. 
                      Undvik lån utan UC om du kan få traditionella lån." - Magnus Andersson, AFR
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">📊 Kostnadsjämförelse</h4>
                    <p className="text-sm text-blue-700">
                      För samma belopp (200 000 kr över 5 år):
                      <br />• Bolån (3%): Total kostnad ~231 000 kr
                      <br />• Privatlån (6%): Total kostnad ~240 000 kr  
                      <br />• Lån utan UC (20%): Total kostnad ~318 000 kr
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Beslutshjälp</CardTitle>
                <CardDescription>Vilket lån passar dig?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Köpa bostad?</h4>
                    <p className="text-sm text-muted-foreground mb-2">Bolån ger lägst ränta men kräver kontantinsats.</p>
                    <Button size="sm" className="w-full">Jämför bolån</Button>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Hemförbättring?</h4>
                    <p className="text-sm text-muted-foreground mb-2">Privatlån ger flexibilitet utan att belasta bostaden.</p>
                    <Button size="sm" variant="outline" className="w-full">Se privatlån</Button>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Företagsinvestering?</h4>
                    <p className="text-sm text-muted-foreground mb-2">Företagslån med avdragsgilla räntor.</p>
                    <Button size="sm" variant="outline" className="w-full">Företagslån</Button>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Akut behov?</h4>
                    <p className="text-sm text-muted-foreground mb-2">Snabba lån finns men till högre kostnad.</p>
                    <Button size="sm" variant="outline" className="w-full">Lån utan UC</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Marknadsanalys: Lånemarknaden 2025</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  📈 Räntutveckling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Riksbankens styrränta: 3,75%</h4>
                    <p className="text-sm text-muted-foreground">Höjd från 0% sedan 2022 för att bekämpa inflation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Privatlåneräntor 2025</h4>
                    <p className="text-sm text-muted-foreground">Genomsnitt 7,2% (upp från 5,8% år 2021)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Prognos 2025</h4>
                    <p className="text-sm text-muted-foreground">Förväntas stabiliseras kring nuvarande nivåer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🏦 Konkurrenssituation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Traditionella banker</h4>
                    <p className="text-sm text-muted-foreground">Striktare kreditbedömning, bättre räntor för bra kunder</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Nischade långivare</h4>
                    <p className="text-sm text-muted-foreground">Snabbare processer, accepterar lägre kreditvärdighet</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Fintech-aktörer</h4>
                    <p className="text-sm text-muted-foreground">Digital-först approach, innovativa produkter</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  ⚖️ Regleringar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Konsumentkreditlagen</h4>
                    <p className="text-sm text-muted-foreground">Skärpta regler för lånereklam och kreditbedömning</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Amorteringskrav</h4>
                    <p className="text-sm text-muted-foreground">Påverkar bolån men inte privatlån direkt</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Skuldsaneringen</h4>
                    <p className="text-sm text-muted-foreground">Utökad med 3 år från 2022, påverkar lånemarknaden</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Tips Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Avancerade strategier för smart låntagning</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Optimera din kreditprofil</CardTitle>
                <CardDescription>Strategier som verkligen fungerar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">1. Timing av ansökningar</h4>
                    <p className="text-sm text-muted-foreground">
                      Ansök om alla lån inom 14 dagar - då räknas alla kreditupplysningar som en enda förfrågan.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">2. Skuldsättningsgrad</h4>
                    <p className="text-sm text-muted-foreground">
                      Håll total skuldsättning under 85% av årsinkomsten. Under 60% ger bästa villkor.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">3. Diversifierad kredithistorik</h4>
                    <p className="text-sm text-muted-foreground">
                      Mix av kreditkort, billån och privatlån visar att du kan hantera olika kredittyper.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">4. Stabilitet premieras</h4>
                    <p className="text-sm text-muted-foreground">
                      Samma arbetsgivare, boende och bank i 2+ år förbättrar villkoren betydligt.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Förhandlingsstrategier</CardTitle>
                <CardDescription>Så får du bättre villkor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">1. Använd konkurrenters erbjudanden</h4>
                    <p className="text-sm text-muted-foreground">
                      Visa upp bättre räntor från andra banker. De flesta matcher eller slår konkurrenters villkor.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">2. Samla alla tjänster</h4>
                    <p className="text-sm text-muted-foreground">
                      Kunder med lön, sparande och försäkringar får ofta 0,5-1% bättre ränta.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">3. Erbjud säkerhet</h4>
                    <p className="text-sm text-muted-foreground">
                      Även delvis säkerhet (ex 50% av lånebeloppet) kan sänka räntan med 2-3 procentenheter.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">4. Välj kortare löptid</h4>
                    <p className="text-sm text-muted-foreground">
                      Välj kortare löptid än vad du behöver, förhandla sedan om förlängning vid behov.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">🎯 Expertens hemliga tips</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Bästa tiden att ansöka:</h4>
                <p className="text-muted-foreground">
                  Januari-mars: Banker har nya kvoter och är mer generösa. Undvik november-december.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Psykologiska trick:</h4>
                <p className="text-muted-foreground">
                  Ansök om lite mindre än du behöver först. Efter godkännande kan du ofta höja beloppet billigt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}