import { Helmet } from "react-helmet-async";
import { getSiteConfig } from "@/lib/siteConfig";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Shield, AlertTriangle, CheckCircle2 } from "lucide-react";
import AffiliateButton from "@/components/AffiliateButton";

export default function KreditOhneSchufaDE() {
  const siteConfig = getSiteConfig();

  // Anbieter die Kredite ohne SCHUFA anbieten
  const providers = [
    {
      name: "auxmoney",
      description: "Deutschlands größter Kreditmarktplatz - Kredite von Privatpersonen",
      amount: "1.000 - 50.000 €",
      rate: "ab 3,2%",
      pros: [
        "Auch bei negativer SCHUFA möglich",
        "Schnelle Entscheidung in 24h",
        "Flexible Laufzeiten",
        "Über 250.000 erfolgreiche Kredite"
      ],
      brandId: "auxmoney"
    },
    {
      name: "Bon-Kredit",
      description: "Schweizer Kredit ohne SCHUFA-Abfrage",
      amount: "3.500 - 7.500 CHF",
      rate: "ab 11,9%",
      pros: [
        "Keine SCHUFA-Abfrage",
        "Auch bei Betalningsanmärkningar",
        "Seit 40 Jahren am Markt",
        "Seriöser Schweizer Anbieter"
      ],
      brandId: "bon-kredit"
    }
  ];

  return (
    <>
      <Helmet>
        <html lang="de" />
        <title>Kredit ohne SCHUFA 2025 - Seriöse Anbieter | {siteConfig.name}</title>
        <meta 
          name="description" 
          content="Kredit ohne SCHUFA-Abfrage: Auch bei negativer Bonität möglich. Seriöse Anbieter wie auxmoney & Schweizer Kredite. Vorsicht vor Betrügern! Jetzt vergleichen." 
        />
        <meta name="keywords" content="Kredit ohne SCHUFA, Kredit trotz SCHUFA, auxmoney, Schweizer Kredit, negative Bonität, Kredit ohne Auskunft, schufafreier Kredit" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Kredit ohne SCHUFA 2025 - Seriöse Anbieter" />
        <meta property="og:description" content="Kredit auch bei negativer Bonität. Vertrauenswürdige Anbieter ohne SCHUFA-Abfrage im Vergleich." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://${siteConfig.domain}/ratenkredit/ohne-schufa`} />
        <meta property="og:locale" content="de_DE" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Kredit ohne SCHUFA - Seriöse Anbieter" />
        <meta name="twitter:description" content="Auch bei negativer Bonität. Vorsicht vor Betrügern!" />
        
        <link rel="canonical" href={`https://${siteConfig.domain}/ratenkredit/ohne-schufa`} />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              <Shield className="w-4 h-4 mr-2" />
              Seriöse Anbieter ohne SCHUFA
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Kredit ohne SCHUFA
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Auch bei negativer Bonität gibt es seriöse Möglichkeiten für einen Kredit. 
              Wir zeigen Ihnen vertrauenswürdige Anbieter und worauf Sie achten müssen.
            </p>
          </div>
        </div>
      </section>

      {/* Warnung */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-amber-500 bg-amber-50 dark:bg-amber-950">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <CardTitle>Vorsicht vor unseriösen Anbietern!</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p>
                <strong>Warnsignale:</strong> Vermeiden Sie Anbieter die...
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Vorabgebühren verlangen (illegal in Deutschland!)</li>
                <li>Keine Impressum oder Kontaktdaten haben</li>
                <li>Unrealistische Versprechungen machen ("100% Zusage")</li>
                <li>Zusatzversicherungen aufzwingen</li>
                <li>Per Nachnahme Unterlagen versenden</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seriöse Anbieter */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Seriöse Anbieter ohne SCHUFA</h2>
          
          <div className="grid gap-6 max-w-4xl mx-auto">
            {providers.map((provider) => (
              <Card key={provider.brandId} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{provider.name}</CardTitle>
                      <CardDescription>{provider.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Kreditsumme</p>
                      <p className="font-semibold">{provider.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Zinssatz</p>
                      <p className="font-semibold text-primary">{provider.rate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">SCHUFA</p>
                      <Badge variant="outline">Keine Abfrage</Badge>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Vorteile
                    </h4>
                    <ul className="space-y-2">
                      {provider.pros.map((pro, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <AffiliateButton
                    brandId={provider.brandId}
                    brandName={provider.name}
                    href="#"
                    label="Jetzt beantragen"
                    variant="default"
                    className="w-full md:w-auto"
                    showBadges={false}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Was ist ein Kredit ohne SCHUFA */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Was ist ein Kredit ohne SCHUFA?</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Zwei Varianten</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Ohne SCHUFA-Abfrage</h4>
                <p className="text-sm text-muted-foreground">
                  Die Bank fragt Ihren SCHUFA-Score nicht ab. Das ist z.B. bei Schweizer Krediten 
                  der Fall, da diese nicht mit der deutschen SCHUFA zusammenarbeiten.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Trotz negativer SCHUFA</h4>
                <p className="text-sm text-muted-foreground">
                  Die Bank macht eine SCHUFA-Anfrage, vergibt aber auch Kredite an Personen mit 
                  schlechter Bonität. Beispiel: auxmoney, wo Privatpersonen das Risiko tragen.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Vor- und Nachteile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Vorteile</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Chance auch bei negativer Bonität</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>SCHUFA wird nicht weiter belastet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Schnelle Bearbeitung möglich</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-red-600">Nachteile</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Höhere Zinsen als normale Kredite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Oft kleinere Kreditsummen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Viele unseriöse Anbieter am Markt</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alternativen zum Kredit ohne SCHUFA</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span><strong>Dispokredit:</strong> Oft günstiger als Kredit ohne SCHUFA, wenn Sie nur kurzfristig Geld brauchen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span><strong>Kredit mit Bürgen:</strong> Mit einem Bürgen haben Sie deutlich bessere Chancen auf normale Konditionen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span><strong>Pfandkredit:</strong> Gegen wertvolle Gegenstände (Schmuck, Elektronik) kurzfristig Geld leihen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span><strong>Familiendarlehen:</strong> Private Vereinbarung mit Familienmitgliedern (schriftlich festhalten!)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihren Kredit?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Vergleichen Sie auch normale Ratenkredite - vielleicht haben Sie bessere Chancen als gedacht.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg">
              <Link to="/ratenkredit">Normale Kredite vergleichen</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Link to="/ratenkredit/beste">Beste Kredite 2025</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
