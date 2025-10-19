import { Helmet } from "react-helmet-async";
import { getSiteConfig } from "@/lib/siteConfig";
import { getAllKreditkarten } from "@/data/partners-de";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AffiliateButton from "@/components/AffiliateButton";
import { Link } from "react-router-dom";
import { CreditCard, Gift, Shield, Globe } from "lucide-react";

export default function KreditkartenDE() {
  const siteConfig = getSiteConfig();
  const creditCards = getAllKreditkarten();

  return (
    <>
      <Helmet>
        <title>Kreditkarten Vergleich 2025 - Kostenlos & mit Cashback | {siteConfig.name}</title>
        <meta 
          name="description" 
          content="Vergleichen Sie die besten Kreditkarten in Deutschland. Kostenlose Karten, Cashback-Programme, Versicherungen. Jetzt beantragen!" 
        />
        <meta property="og:title" content="Kreditkarten Vergleich - Finden Sie die perfekte Karte" />
        <link rel="canonical" href={`https://${siteConfig.domain}/kreditkarten`} />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              Die besten Kreditkarten im Vergleich
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Kreditkarten Vergleich 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Finden Sie die perfekte Kreditkarte - kostenlos, mit Cashback oder Versicherungsschutz. 
              Weltweit akzeptiert und sicher.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Keine Gebühren</h3>
                <p className="text-sm text-muted-foreground">Jahresgebühr 0 €</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Gift className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Cashback</h3>
                <p className="text-sm text-muted-foreground">Geld zurück bei jedem Einkauf</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Versicherung</h3>
                <p className="text-sm text-muted-foreground">Reise- & Kaufschutz inklusive</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Weltweit</h3>
                <p className="text-sm text-muted-foreground">Kostenlos im Ausland zahlen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Cards Comparison */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Die besten Kreditkarten im Vergleich</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {creditCards.map((card, index) => (
              <Card key={card.brandId} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      {index === 0 && (
                        <Badge variant="default" className="mb-2">Empfehlung</Badge>
                      )}
                      <CardTitle className="text-xl">{card.name}</CardTitle>
                    </div>
                    <CreditCard className="w-8 h-8 text-primary" />
                  </div>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-green-600">✓ Vorteile</h4>
                    <ul className="space-y-2">
                      {card.pros.map((pro, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="text-green-600 mt-0.5">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Anforderungen</h4>
                    <ul className="space-y-2">
                      {card.requirements.map((req, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="text-muted-foreground mt-0.5">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <AffiliateButton
                    brandId={card.brandId}
                    brandName={card.name}
                    href={card.url || '#'}
                    label="Jetzt beantragen"
                    variant="default"
                    className="w-full"
                    showBadges={false}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Credit Cards */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Arten von Kreditkarten</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Kostenlose Kreditkarten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Keine Jahresgebühr, ideal für den Alltag. Perfekt für Onlineshopping und 
                  bargeldloses Bezahlen in Geschäften.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>0 € Jahresgebühr dauerhaft</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Weltweite Akzeptanz</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Kontaktloses Bezahlen</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cashback-Kreditkarten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Bekommen Sie bei jedem Einkauf Geld zurück. Je mehr Sie ausgeben, 
                  desto mehr sparen Sie.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>1-5% Cashback auf Umsätze</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Willkommensbonus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Partnerprogramme</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Premium-Kreditkarten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Mit umfangreichen Versicherungen und exklusiven Vorteilen. 
                  Ideal für Vielreisende.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Reiseversicherungen inklusive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Lounge-Zugang Flughäfen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Bonuspunkte sammeln</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prepaid-Kreditkarten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Nur ausgeben, was vorher aufgeladen wurde. Keine Bonitätsprüfung, 
                  keine Schuldenfalle.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Keine SCHUFA-Prüfung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Volle Kostenkontrolle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Für Jugendliche geeignet</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Häufig gestellte Fragen</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Welche Kreditkarte ist die beste?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Die beste Kreditkarte hängt von Ihren Bedürfnissen ab. Für den Alltag empfehlen wir 
                  kostenlose Karten wie die Ferratum Mastercard. Für Cashback ist die Mastercard FLORIN+ ideal. 
                  Vielreisende profitieren von Premium-Karten mit Versicherungen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ist eine Kreditkarte kostenlos?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Viele Kreditkarten in Deutschland sind dauerhaft kostenlos ohne Jahresgebühr. 
                  Achten Sie jedoch auf mögliche Kosten für Bargeldabhebungen, Auslandseinsatz oder 
                  Zusatzleistungen wie Versicherungen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Brauche ich eine gute Bonität für eine Kreditkarte?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Für normale Kreditkarten ist eine positive SCHUFA-Auskunft in der Regel erforderlich. 
                  Bei Prepaid-Kreditkarten ist keine Bonitätsprüfung nötig, da Sie nur Geld ausgeben können, 
                  das Sie vorher aufgeladen haben.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Wie sicher sind Kreditkarten?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Kreditkarten sind sehr sicher. Sie sind durch 3D-Secure, Chip-Technologie und 
                  Haftungsschutz bei unbefugter Nutzung geschützt. Bei Verlust können Sie die Karte 
                  sofort sperren lassen. Kontaktloses Bezahlen ist durch PIN-Abfrage bei höheren Beträgen gesichert.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihre neue Kreditkarte?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Vergleichen Sie jetzt kostenlos und finden Sie die perfekte Kreditkarte für Ihre Bedürfnisse.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg">
              <a href="#comparison">Kreditkarte finden</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Link to="/ratenkredit">Zum Kreditvergleich</Link>
            </Button>
          </div>
        </div>
      </section>

    </>
  );
}
