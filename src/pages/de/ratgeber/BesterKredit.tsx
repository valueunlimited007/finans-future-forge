import { Helmet } from "react-helmet-async";
import { getSiteConfig } from "@/lib/siteConfig";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle2, AlertCircle, Calculator, FileText } from "lucide-react";

export default function BesterKreditRatgeberDE() {
  const siteConfig = getSiteConfig();

  return (
    <>
      <Helmet>
        <title>Bester Kredit finden - Ratgeber 2025 | {siteConfig.name}</title>
        <meta 
          name="description" 
          content="Wie finden Sie den besten Kredit? ✓ Schritt-für-Schritt Anleitung ✓ Fehler vermeiden ✓ Geld sparen. Unser Ratgeber hilft!" 
        />
        <link rel="canonical" href={`https://${siteConfig.domain}/ratgeber/bester-kredit`} />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              <FileText className="w-4 h-4 mr-2" />
              Ratgeber
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              So finden Sie den besten Kredit
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unser umfassender Ratgeber zeigt Ihnen Schritt für Schritt, wie Sie den 
              günstigsten Kredit mit den besten Konditionen finden.
            </p>
          </div>
        </div>
      </section>

      {/* Schritt-für-Schritt */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">In 7 Schritten zum besten Kredit</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <CardTitle>Kreditbedarf genau ermitteln</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">
                  Berechnen Sie genau, wie viel Geld Sie wirklich brauchen. Weder zu viel 
                  (kostet unnötig Zinsen) noch zu wenig (müssen Sie nachfinanzieren).
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Beispielrechnung:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Autokauf: 20.000 €</li>
                    <li>• Abzüglich Anzahlung: -3.000 €</li>
                    <li>• Plus Puffer (5%): +850 €</li>
                    <li className="font-bold pt-2 border-t">= Kreditbedarf: 17.850 €</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <CardTitle>Laufzeit sinnvoll wählen</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  Die Laufzeit beeinflusst sowohl die monatliche Rate als auch die Gesamtkosten:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Kurze Laufzeit (12-36 Monate)</p>
                    <ul className="text-xs space-y-1">
                      <li className="flex items-start gap-1">
                        <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5" />
                        <span>Niedrigere Gesamtkosten</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5" />
                        <span>Schneller schuldenfrei</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <AlertCircle className="w-3 h-3 text-amber-600 mt-0.5" />
                        <span>Höhere monatliche Rate</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                    <p className="font-semibold text-sm mb-2">Lange Laufzeit (60-120 Monate)</p>
                    <ul className="text-xs space-y-1">
                      <li className="flex items-start gap-1">
                        <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5" />
                        <span>Niedrigere monatliche Rate</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5" />
                        <span>Mehr finanzieller Spielraum</span>
                      </li>
                      <li className="flex items-start gap-1">
                        <AlertCircle className="w-3 h-3 text-amber-600 mt-0.5" />
                        <span>Höhere Gesamtkosten</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <CardTitle>Mehrere Angebote einholen</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  Vergleichen Sie mindestens 3-5 Angebote. Die Zinsdifferenz kann mehrere 
                  hundert Euro ausmachen!
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm font-semibold mb-2">Beispiel (15.000 € über 60 Monate):</p>
                  <ul className="text-sm space-y-1">
                    <li>• Bank A (3,5%): Gesamtkosten 16.379 €</li>
                    <li>• Bank B (5,5%): Gesamtkosten 17.314 €</li>
                    <li className="font-bold text-green-600 pt-2 border-t">Ersparnis durch Vergleich: 935 €!</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <CardTitle>Effektivzins vergleichen, nicht Nominalzins</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  Der <strong>Effektivzins</strong> ist die einzig relevante Vergleichszahl! 
                  Er beinhaltet alle Kosten.
                </p>
                <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg">
                  <p className="text-sm flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>
                      Achtung: Manche Banken werben mit dem niedrigeren Nominalzins. 
                      Das ist irreführend!
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <CardTitle>Auf Sondertilgungen achten</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Achten Sie darauf, dass kostenlose Sondertilgungen möglich sind. So können 
                  Sie den Kredit vorzeitig ablösen, wenn Sie zu Geld kommen (Bonus, Erbschaft, etc.) 
                  und sparen dadurch Zinsen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    6
                  </div>
                  <CardTitle>Zusatzversicherungen kritisch prüfen</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  Restschuldversicherungen werden oft angeboten, sind aber meist teuer und 
                  nicht immer sinnvoll.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold">Sinnvoll bei:</p>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Einkommensrisiko (Selbstständige)</li>
                    <li>Gesundheitliche Vorbelastungen</li>
                    <li>Alleinverdiener mit Familie</li>
                  </ul>
                  <p className="font-semibold mt-3">Oft überflüssig bei:</p>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Festanstellung mit guter Absicherung</li>
                    <li>Ausreichende Rücklagen vorhanden</li>
                    <li>Kurze Kreditlaufzeit</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    7
                  </div>
                  <CardTitle>Unterlagen vorbereiten</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  Bereiten Sie alle Unterlagen vor, damit die Bearbeitung schnell geht:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Personalausweis/Reisepass</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Gehaltsnachweise (letzte 3 Monate)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Kontoauszüge (letzte 3 Monate)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Meldebescheinigung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Bei Selbstständigen: Einkommenssteuerbescheid</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Häufige Fehler */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Diese Fehler sollten Sie vermeiden</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-red-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-2">Ersten Angebot sofort zusagen</p>
                    <p className="text-sm text-muted-foreground">
                      Vergleichen Sie immer mehrere Angebote. Das erste ist selten das beste.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-2">Zu hohen Kreditbetrag wählen</p>
                    <p className="text-sm text-muted-foreground">
                      Leihen Sie nur so viel wie nötig. Jeder Euro mehr kostet Zinsen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-2">Rate zu hoch ansetzen</p>
                    <p className="text-sm text-muted-foreground">
                      Planen Sie einen Puffer ein. Unerwartete Ausgaben kommen immer.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-2">Kleingedrucktes nicht lesen</p>
                    <p className="text-sm text-muted-foreground">
                      Lesen Sie den Vertrag sorgfältig. Achten Sie auf Zusatzkosten.
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
          <h2 className="text-3xl font-bold mb-6">Bereit, den besten Kredit zu finden?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Nutzen Sie unseren Vergleich und sparen Sie hunderte Euro!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg">
              <Link to="/ratenkredit">Kredite vergleichen</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Link to="/ratenkredit/beste">Top 5 Kredite 2025</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
