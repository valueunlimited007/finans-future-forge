import { Helmet } from "react-helmet-async";
import { getSiteConfig } from "@/lib/siteConfig";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { TrendingUp, Calculator, Info } from "lucide-react";

export default function ZinsenVerstehenDE() {
  const siteConfig = getSiteConfig();

  return (
    <>
      <Helmet>
        <title>Zinsen verstehen - Ratgeber zu Kreditzinsen | {siteConfig.name}</title>
        <meta 
          name="description" 
          content="Wie funktionieren Kreditzinsen? ✓ Effektivzins vs Nominalzins ✓ Zinsrechnung ✓ Zinsen sparen. Alles einfach erklärt!" 
        />
        <link rel="canonical" href={`https://${siteConfig.domain}/ratgeber/zinsen`} />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              <Calculator className="w-4 h-4 mr-2" />
              Ratgeber
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Zinsen verstehen
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alles was Sie über Kreditzinsen wissen müssen - einfach und verständlich erklärt.
            </p>
          </div>
        </div>
      </section>

      {/* Grundlagen */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Was sind Zinsen?</h2>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">
                Zinsen sind der <strong>Preis für geliehenes Geld</strong>. Wenn Sie einen Kredit 
                aufnehmen, verlangen Banken Zinsen als Gebühr dafür, dass Sie ihr Geld nutzen dürfen.
              </p>
              <p className="text-muted-foreground">
                Je höher das Risiko für die Bank (z.B. schlechte Bonität), desto höher die Zinsen. 
                Je länger die Laufzeit, desto mehr Zinsen zahlen Sie insgesamt.
              </p>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-bold mb-6">Effektivzins vs. Nominalzins</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  Effektivzins
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  <strong>Das ist der wichtige Wert!</strong> Der Effektivzins (effektiver Jahreszins) 
                  beinhaltet ALLE Kosten des Kredits:
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Nominalzins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Bearbeitungsgebühren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Vermittlungsgebühren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Kontoführungsgebühren</span>
                  </li>
                </ul>
                <div className="bg-primary/10 p-3 rounded-lg mt-4">
                  <p className="text-sm font-semibold">
                    → Vergleichen Sie immer den Effektivzins, nie den Nominalzins!
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nominalzins</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Der Nominalzins (oder Sollzins) ist nur der reine Zinssatz OHNE Nebenkosten.
                </p>
                <p className="text-sm text-muted-foreground">
                  Beispiel:
                </p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Nominalzins: 3,5%</li>
                  <li>• + Gebühren: 0,8%</li>
                  <li className="font-bold text-foreground pt-2 border-t">
                    = Effektivzins: 4,3%
                  </li>
                </ul>
                <div className="bg-amber-50 dark:bg-amber-950 p-3 rounded-lg mt-4">
                  <p className="text-sm">
                    ⚠️ Banken werben oft mit dem niedrigeren Nominalzins. 
                    Das ist irreführend!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beispielrechnung */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Beispielrechnung: So wirken sich Zinsen aus</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Kredit über 15.000 € - Verschiedene Zinssätze</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Laufzeit</th>
                      <th className="text-left p-3">Zinssatz</th>
                      <th className="text-left p-3">Monatl. Rate</th>
                      <th className="text-left p-3">Gesamtkosten</th>
                      <th className="text-left p-3">Zinsen gesamt</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">36 Monate</td>
                      <td className="p-3 font-semibold text-green-600">3,0%</td>
                      <td className="p-3">436 €</td>
                      <td className="p-3">15.696 €</td>
                      <td className="p-3 text-green-600">696 €</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">60 Monate</td>
                      <td className="p-3 font-semibold text-yellow-600">5,0%</td>
                      <td className="p-3">283 €</td>
                      <td className="p-3">16.980 €</td>
                      <td className="p-3 text-yellow-600">1.980 €</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">60 Monate</td>
                      <td className="p-3 font-semibold text-red-600">8,0%</td>
                      <td className="p-3">304 €</td>
                      <td className="p-3">18.240 €</td>
                      <td className="p-3 text-red-600">3.240 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Erkenntnis:</p>
                <p className="text-sm text-muted-foreground">
                  Zwischen 3% und 8% Zinsen liegen <strong>2.544 € Unterschied</strong> bei den Gesamtkosten! 
                  Deshalb lohnt sich ein Vergleich immer.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Faktoren */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Was beeinflusst die Höhe der Zinsen?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Ihre Bonität
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p className="text-muted-foreground">
                  Der wichtigste Faktor! Je besser Ihr SCHUFA-Score, desto niedriger die Zinsen.
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Sehr gut (95-100%): ab 2,9%</li>
                  <li>• Gut (90-95%): ab 4,5%</li>
                  <li>• Befriedigend (80-90%): ab 6,5%</li>
                  <li>• Schwach (&lt;80%): ab 9% oder Ablehnung</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kredithöhe</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p className="text-muted-foreground">
                  Mittlere Beträge (10.000-30.000 €) haben oft die besten Zinsen.
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Unter 5.000 €: teurer (höheres Aufwand-Nutzen-Verhältnis für Bank)</li>
                  <li>• 10.000-30.000 €: günstigste Zinsen</li>
                  <li>• Über 50.000 €: wieder teurer (höheres Risiko)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Laufzeit</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p className="text-muted-foreground">
                  Je länger die Laufzeit, desto höher meist der Zinssatz.
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• 12-36 Monate: niedrigste Zinsen</li>
                  <li>• 37-60 Monate: mittlere Zinsen</li>
                  <li>• 61-120 Monate: höchste Zinsen</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Leitzins der EZB</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p className="text-muted-foreground">
                  Der Leitzins der Europäischen Zentralbank beeinflusst alle Kreditzinsen.
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Aktuell (2025): 4,5%</li>
                  <li>• Niedriger Leitzins = günstige Kredite</li>
                  <li>• Hoher Leitzins = teure Kredite</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tipps */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">5 Tipps um Zinsen zu sparen</h2>
          
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-semibold mb-2">SCHUFA-Score verbessern</p>
                    <p className="text-sm text-muted-foreground">
                      Bezahlen Sie Rechnungen pünktlich, kündigen Sie ungenuutzte Konten und 
                      Kreditkarten, nutzen Sie nicht das gesamte Kreditlimit.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Mehrere Angebote vergleichen</p>
                    <p className="text-sm text-muted-foreground">
                      Die Zinsdifferenz zwischen Banken kann 3-4 Prozentpunkte betragen. 
                      Das sind hunderte Euro Unterschied!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Sicherheiten anbieten</p>
                    <p className="text-sm text-muted-foreground">
                      Mit einem Bürgen oder Sicherheiten (Auto, Immobilie) bekommen Sie 
                      deutlich bessere Konditionen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Kürzere Laufzeit wählen</p>
                    <p className="text-sm text-muted-foreground">
                      Falls Sie es sich leisten können: Eine kürzere Laufzeit bedeutet 
                      niedrigere Zinsen und weniger Gesamtkosten.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Sondertilgungen nutzen</p>
                    <p className="text-sm text-muted-foreground">
                      Nutzen Sie kostenlose Sondertilgungen, um den Kredit schneller abzubezahlen 
                      und Zinsen zu sparen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für den günstigsten Zinssatz?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Vergleichen Sie jetzt Kredite und sparen Sie hunderte Euro!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg">
              <Link to="/ratenkredit">Kredite vergleichen</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Link to="/ratenkredit/zinsen">Zinsvergleich</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
