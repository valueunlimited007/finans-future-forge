import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UnsplashImage } from "@/hooks/useUnsplashImage";
import { IMAGE_QUERIES } from "@/services/unsplash";

export default function ContentStrategy() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Kombinerade finansguider</h2>
          <p className="text-xl text-muted-foreground">
            Djupgående guides som kombinerar relaterade ämnen för maximal användarnytta
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Combined Loan Guide */}
          <Card className="border-l-4 border-l-blue-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <UnsplashImage 
                query={IMAGE_QUERIES.loans}
                className="w-full h-full object-cover"
                alt="Loan and credit guidance"
                size="small"
              />
            </div>
            <CardHeader>
              <Badge className="w-fit mb-2">Pillar-innehåll</Badge>
              <CardTitle>Komplett guide: Lån & Kredit</CardTitle>
              <CardDescription>
                Allt du behöver veta om lån, från privatlån till företagsfinansiering
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Detta täcker guiden:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Privatlån: Villkor, räntor och ansökan</li>
                    <li>• Företagslån: Alla typer av företagsfinansiering</li>
                    <li>• Lån utan UC: Alternativ för dålig kredit</li>
                    <li>• Skuldkonsolidering och refinansiering</li>
                    <li>• Juridiska aspekter och konsumentskydd</li>
                    <li>• Strategier för bästa villkor</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">🎯 Unikt värde</h5>
                  <p className="text-sm text-blue-700">
                    Istället för separata artiklar om varje lånetyp, får du en sammanhängande 
                    guide som visar hur olika lån relaterar till varandra och när du ska välja vad.
                  </p>
                </div>
                <Button className="w-full">Läs kompletta låneguiden</Button>
              </div>
            </CardContent>
          </Card>

          {/* Investment & Savings Guide */}
          <Card className="border-l-4 border-l-green-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <UnsplashImage 
                query={IMAGE_QUERIES.savings}
                className="w-full h-full object-cover"
                alt="Savings and investment planning"
                size="small"
              />
            </div>
            <CardHeader>
              <Badge className="w-fit mb-2">Pillar-innehåll</Badge>
              <CardTitle>Spara & Investera smart</CardTitle>
              <CardDescription>
                Från sparkonto till ISK - bygg din förmögenhet steg för steg
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Omfattande innehåll:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sparkonton: Vilken typ passar dig?</li>
                    <li>• ISK vs Kapitalförsäkring: Skatteoptimering</li>
                    <li>• Indexfonder: Långsiktig förmögenhetsbyggning</li>
                    <li>• Pensionssparande: PPM och tjänstepension</li>
                    <li>• Riskanpassning efter ålder och situation</li>
                    <li>• Skattestrategier för olika investeringar</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">💡 Expertanalys</h5>
                  <p className="text-sm text-green-700">
                    Praktiska exempel med riktiga siffror som visar hur olika sparstrategier 
                    utvecklas över tid. Inklusive skattekonsekvenser och optimeringsstrategier.
                  </p>
                </div>
                <Button variant="outline" className="w-full">Läs investeringsguiden</Button>
              </div>
            </CardContent>
          </Card>

          {/* Credit Card & Payment Guide */}
          <Card className="border-l-4 border-l-purple-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <UnsplashImage 
                query={IMAGE_QUERIES.creditCard}
                className="w-full h-full object-cover"
                alt="Credit card and payment solutions"
                size="small"
              />
            </div>
            <CardHeader>
              <Badge className="w-fit mb-2">Pillar-innehåll</Badge>
              <CardTitle>Kreditkort & Betalningar</CardTitle>
              <CardDescription>
                Maximera fördelarna och minimera kostnaderna
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Allt du behöver veta:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Kreditkortsstrategi: Cashback vs Miles</li>
                    <li>• Betalkort vs Kreditkort: För- och nackdelar</li>
                    <li>• Internationella betalningar och valutaavgifter</li>
                    <li>• Digitala betalningar: Swish, Apple Pay, Google Pay</li>
                    <li>• Säkerhet vid online-shopping</li>
                    <li>• Bygga kredithistorik för bättre lånevillkor</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-purple-800 mb-2">🔒 Säkerhetsfokus</h5>
                  <p className="text-sm text-purple-700">
                    Detaljerade säkerhetsråd och skydd mot bedrägerier. Inklusive vad du ska 
                    göra om ditt kort missbrukas och hur du förebygger problem.
                  </p>
                </div>
                <Button variant="outline" className="w-full">Läs betalningsguiden</Button>
              </div>
            </CardContent>
          </Card>

          {/* Tax & Legal Guide */}
          <Card className="border-l-4 border-l-orange-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <UnsplashImage 
                query="tax calculator legal documents"
                className="w-full h-full object-cover"
                alt="Tax planning and legal documentation"
                size="small"
              />
            </div>
            <CardHeader>
              <Badge className="w-fit mb-2">Pillar-innehåll</Badge>
              <CardTitle>Skatt & Juridik för Privatpersoner</CardTitle>
              <CardDescription>
                Optimera din ekonomi inom ramen för lagen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Omfattande juridisk guide:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Kapitalvinst och kapitalförlust: K4-blanketten</li>
                    <li>• ISK-beskattning vs traditionellt sparande</li>
                    <li>• Avdrag för privatpersoner och företagare</li>
                    <li>• Konsumentkreditlagen: Dina rättigheter</li>
                    <li>• Betalningsförelägganden och kronofogden</li>
                    <li>• Skuldsanering: Process och konsekvenser</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-orange-800 mb-2">⚖️ Uppdaterad lagstiftning</h5>
                  <p className="text-sm text-orange-700">
                    Alltid aktuell information om regeländringar som påverkar din ekonomi. 
                    Inklusive praktiska exempel på hur nya lagar påverkar dig.
                  </p>
                </div>
                <Button variant="outline" className="w-full">Läs juridiska guiden</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Quality Metrics */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Innehållskvalitet som Google älskar</h3>
            <p className="text-muted-foreground">
              Vårt innehåll uppfyller alla Google AdSense-krav för värdefull, unik information
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">15 000+</div>
              <div className="text-sm text-muted-foreground">ord per guide</div>
              <div className="text-xs text-muted-foreground mt-1">Djupgående innehåll</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-muted-foreground">unikt innehåll</div>
              <div className="text-xs text-muted-foreground mt-1">Ingen kopiering</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
              <div className="text-sm text-muted-foreground">experter</div>
              <div className="text-xs text-muted-foreground mt-1">Verifierad kunskap</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">2025</div>
              <div className="text-sm text-muted-foreground">uppdaterat</div>
              <div className="text-xs text-muted-foreground mt-1">Aktuell information</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}