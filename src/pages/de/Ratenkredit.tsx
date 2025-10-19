import { Helmet } from "react-helmet-async";
import { getSiteConfig } from "@/lib/siteConfig";
import { getAllRatenkredite } from "@/data/partners-de";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AffiliateButton from "@/components/AffiliateButton";
import { Link } from "react-router-dom";
import { TrendingDown, Shield, Zap, CheckCircle2 } from "lucide-react";

export default function RatenkreditDE() {
  const siteConfig = getSiteConfig();
  const partners = getAllRatenkredite();

  return (
    <>
      <Helmet>
        <title>Ratenkredit Vergleich 2025 - Beste Zinsen ab 0,68% | {siteConfig.name}</title>
        <meta 
          name="description" 
          content="Vergleichen Sie Ratenkredite von über 20 Banken. Zinsen ab 0,68% eff. Jahreszins. Schnelle Entscheidung, kostenlos & unverbindlich. TÜV-geprüft." 
        />
        <meta property="og:title" content="Ratenkredit Vergleich - Beste Zinsen finden" />
        <link rel="canonical" href={`https://${siteConfig.domain}/ratenkredit`} />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              Über 20 Banken im Vergleich
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ratenkredit Vergleich 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Finden Sie den günstigsten Ratenkredit mit Zinsen ab 0,68% eff. Jahreszins. 
              Kostenlos vergleichen, schnell beantragen.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingDown className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Niedrige Zinsen</h3>
                <p className="text-sm text-muted-foreground">Ab 0,68% effektiver Jahreszins</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Schnelle Entscheidung</h3>
                <p className="text-sm text-muted-foreground">Antwort innerhalb von 24 Stunden</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">TÜV-geprüft</h3>
                <p className="text-sm text-muted-foreground">100% kostenlos & unverbindlich</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Comparison */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Die besten Ratenkredite im Vergleich</h2>
          
          <div className="grid gap-6">
            {partners.map((partner, index) => (
              <Card key={partner.brandId} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {index < 3 && (
                          <Badge variant="default">#{index + 1}</Badge>
                        )}
                        <CardTitle className="text-2xl">{partner.name}</CardTitle>
                      </div>
                      <CardDescription>{partner.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    {partner.amountRange && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Kreditsumme</p>
                        <p className="font-semibold">{partner.amountRange}</p>
                      </div>
                    )}
                    {partner.aprFrom && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Zinssatz ab</p>
                        <p className="font-semibold text-primary">{partner.aprFrom}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Kategorie</p>
                      <Badge variant="outline">
                        {partner.category === 'comparison' ? 'Vergleichsportal' : 'Direktbank'}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        Vorteile
                      </h4>
                      <ul className="space-y-2">
                        {partner.pros.map((pro, i) => (
                          <li key={i} className="text-sm flex items-start gap-2">
                            <span className="text-green-600 mt-0.5">✓</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Anforderungen</h4>
                      <ul className="space-y-2">
                        {partner.requirements.map((req, i) => (
                          <li key={i} className="text-sm flex items-start gap-2">
                            <span className="text-muted-foreground mt-0.5">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <AffiliateButton
                    brandId={partner.brandId}
                    brandName={partner.name}
                    href={partner.url || '#'}
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

      {/* Information Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Was ist ein Ratenkredit?</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Ein Ratenkredit ist ein Darlehen, das Sie in gleichbleibenden monatlichen Raten zurückzahlen. 
              Diese Kreditform eignet sich ideal für größere Anschaffungen wie Autos, Möbel oder Renovierungen.
            </p>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>So funktioniert ein Ratenkredit</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary">1.</span>
                    <span><strong>Kreditantrag stellen:</strong> Wählen Sie Ihren Wunschkredit und beantragen Sie ihn online.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary">2.</span>
                    <span><strong>Bonitätsprüfung:</strong> Die Bank prüft Ihre Kreditwürdigkeit (SCHUFA-Auskunft).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary">3.</span>
                    <span><strong>Kreditentscheidung:</strong> Sie erhalten meist innerhalb von 24 Stunden eine Zu- oder Absage.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary">4.</span>
                    <span><strong>Auszahlung:</strong> Nach Vertragsabschluss wird das Geld auf Ihr Konto überwiesen.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-primary">5.</span>
                    <span><strong>Rückzahlung:</strong> Sie zahlen den Kredit in monatlichen Raten zurück.</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-4">Worauf Sie achten sollten</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Effektiver Jahreszins:</strong> Dieser Zinssatz beinhaltet alle Kosten und ist entscheidend für den Vergleich.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Laufzeit:</strong> Je kürzer die Laufzeit, desto niedriger die Gesamtkosten.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Sondertilgungen:</strong> Möglichkeit, den Kredit vorzeitig abzubezahlen.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Restschuldversicherung:</strong> Oft optional, aber nicht immer sinnvoll.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Häufig gestellte Fragen</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Wie hoch sind die Zinsen für einen Ratenkredit?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Die Zinsen für Ratenkredite in Deutschland beginnen bei etwa 0,68% effektivem Jahreszins 
                  für Kunden mit sehr guter Bonität. Der durchschnittliche Zinssatz liegt zwischen 3% und 8%.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Kann ich einen Kredit ohne SCHUFA bekommen?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ja, einige Anbieter wie auxmoney vermitteln Kredite auch bei negativer SCHUFA. 
                  Diese Kredite haben jedoch oft höhere Zinsen. Mehr erfahren Sie auf unserer Seite 
                  <Link to="/ratenkredit/ohne-schufa" className="text-primary hover:underline"> Kredit ohne SCHUFA</Link>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Wie schnell bekomme ich eine Kreditentscheidung?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Die meisten Banken und Vergleichsportale geben innerhalb von 24 Stunden eine 
                  vorläufige Kreditentscheidung. Bei positiver Entscheidung erfolgt die Auszahlung 
                  meist innerhalb von 2-3 Werktagen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Was ist der Unterschied zwischen Nominalzins und effektivem Jahreszins?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Der Nominalzins ist der reine Zinssatz ohne Nebenkosten. Der effektive Jahreszins 
                  beinhaltet alle Kosten (Gebühren, Provisionen) und ist daher die relevante Kennzahl 
                  für den Kreditvergleich.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihren Ratenkredit?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Vergleichen Sie jetzt kostenlos über 20 Banken und finden Sie die besten Konditionen.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <a href="#comparison">Kredit vergleichen</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/glossar">Zum Finanz-Glossar</Link>
            </Button>
          </div>
        </div>
      </section>

    </>
  );
}
