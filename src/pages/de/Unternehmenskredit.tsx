import { Helmet } from "react-helmet-async";
import { getSiteConfig } from "@/lib/siteConfig";
import { getAllUnternehmenskredite } from "@/data/partners-de";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AffiliateButton from "@/components/AffiliateButton";
import { Link } from "react-router-dom";
import { Building2, Zap, TrendingUp, Shield } from "lucide-react";

export default function UnternehmenskreditDE() {
  const siteConfig = getSiteConfig();
  const partners = getAllUnternehmenskredite();

  return (
    <>
      <Helmet>
        <title>Unternehmenskredit Vergleich 2025 - Schnelle Finanzierung | {siteConfig.name}</title>
        <meta 
          name="description" 
          content="Unternehmenskredit ab 5.000 € - Entscheidung in 24 Stunden. Flexible Rückzahlung, keine versteckten Gebühren. Jetzt vergleichen!" 
        />
        <meta property="og:title" content="Unternehmenskredit - Schnelle Finanzierung für Ihr Business" />
        <link rel="canonical" href={`https://${siteConfig.domain}/de/unternehmenskredit`} />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              Schnelle Unternehmensfinanzierung
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Unternehmenskredit Vergleich 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Schnelle Finanzierung für Ihr Unternehmen. Kredit-Entscheidung in 24 Stunden, 
              flexible Rückzahlung, persönlicher Service.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Schnelle Zusage</h3>
                <p className="text-sm text-muted-foreground">Entscheidung in 24 Stunden</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Bis 500.000 €</h3>
                <p className="text-sm text-muted-foreground">Flexible Kreditsummen</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Transparent</h3>
                <p className="text-sm text-muted-foreground">Keine versteckten Gebühren</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Comparison */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Unternehmenskredite im Vergleich</h2>
          
          <div className="grid gap-6">
            {partners.map((partner, index) => (
              <Card key={partner.brandId} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {index === 0 && (
                          <Badge variant="default">⚡ Schnellste Zusage</Badge>
                        )}
                        <CardTitle className="text-2xl">{partner.name}</CardTitle>
                      </div>
                      <CardDescription>{partner.description}</CardDescription>
                    </div>
                    <Building2 className="w-8 h-8 text-primary" />
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
                        <p className="text-sm text-muted-foreground mb-1">Zinssatz</p>
                        <p className="font-semibold text-primary">{partner.aprFrom}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Entscheidung</p>
                      <Badge variant="outline">Innerhalb 24h</Badge>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-green-600">✓ Vorteile</h4>
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
                    label="Jetzt Finanzierung anfragen"
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

      {/* Use Cases */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Wofür kann ich einen Unternehmenskredit nutzen?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Wachstumsfinanzierung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Expansion in neue Märkte</li>
                  <li>• Einstellung neuer Mitarbeiter</li>
                  <li>• Neue Standorte eröffnen</li>
                  <li>• Marketing-Kampagnen</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Betriebsmittel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Wareneinkauf finanzieren</li>
                  <li>• Liquiditätsengpässe überbrücken</li>
                  <li>• Laufende Kosten decken</li>
                  <li>• Saisongeschäft absichern</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Investitionen</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Maschinen & Ausrüstung</li>
                  <li>• IT-Systeme & Software</li>
                  <li>• Fahrzeugflotte</li>
                  <li>• Büroausstattung</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Umschuldung</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Teure Kredite ablösen</li>
                  <li>• Kontokorrent ausgleichen</li>
                  <li>• Mehrere Kredite zusammenfassen</li>
                  <li>• Zinsen sparen</li>
                </ul>
              </CardContent>
            </Card>
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
                <CardTitle className="text-lg">Welche Voraussetzungen muss mein Unternehmen erfüllen?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Die meisten Anbieter verlangen, dass Ihr Unternehmen mindestens 1 Jahr am Markt aktiv ist 
                  und einen monatlichen Mindestumsatz von 25.000 € erzielt. Der Firmensitz muss in Deutschland sein.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Wie schnell bekomme ich das Geld?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bei Qred erhalten Sie eine Kreditentscheidung innerhalb von 24 Stunden. 
                  Nach Zusage wird das Geld meist innerhalb von 2-3 Werktagen auf Ihr Geschäftskonto überwiesen.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Brauche ich Sicherheiten?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bei vielen Anbietern sind keine zusätzlichen Sicherheiten erforderlich. 
                  Die Kreditentscheidung basiert hauptsächlich auf Ihren Geschäftszahlen und dem Umsatz. 
                  Bei größeren Summen können jedoch Sicherheiten verlangt werden.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Wie hoch sind die Zinsen?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Die Zinsen für Unternehmenskredite beginnen bei etwa 1,99% und variieren je nach 
                  Kreditbetrag, Laufzeit und Bonität Ihres Unternehmens. Vergleichen Sie mehrere Angebote, 
                  um die besten Konditionen zu finden.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihren Unternehmenskredit?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Vergleichen Sie jetzt kostenlos und erhalten Sie innerhalb von 24 Stunden eine Entscheidung.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <a href="#comparison">Finanzierung anfragen</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/de/ratenkredit">Zum Privatkreditvergleich</Link>
            </Button>
          </div>
        </div>
      </section>

    </>
  );
}
