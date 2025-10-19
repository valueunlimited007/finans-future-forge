import { Helmet } from "react-helmet-async";
import { getSiteConfig } from "@/lib/siteConfig";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CreditCard, Building2, TrendingDown, Shield, Search, Zap } from "lucide-react";

export default function HomeDE() {
  const siteConfig = getSiteConfig();

  return (
    <>
      <Helmet>
        <title>{siteConfig.name} - Kredite & Kreditkarten smart vergleichen</title>
        <meta 
          name="description" 
          content="Vergleichen Sie Ratenkredite, Kreditkarten und Unternehmenskredite in Deutschland. Finden Sie die besten Zinsen und Konditionen - kostenlos und unverbindlich." 
        />
        <meta property="og:title" content={`${siteConfig.name} - Kredite vergleichen`} />
        <meta property="og:description" content="Deutschlands unabhängiger Kreditvergleich. Finden Sie die besten Angebote für Privat- und Unternehmenskredite." />
        <link rel="canonical" href={`https://${siteConfig.domain}/`} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4" variant="outline">
            🇩🇪 Deutschlands unabhängiger Kreditvergleich
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Kredite & Kreditkarten<br />smart vergleichen
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Finden Sie die besten Zinsen und Konditionen für Ratenkredite, Kreditkarten und Unternehmenskredite. 
            Kostenlos, unverbindlich und TÜV-geprüft.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/de/ratenkredit">Ratenkredit vergleichen</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/de/kreditkarten">Kreditkarten vergleichen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Was möchten Sie vergleichen?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Ratenkredit Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingDown className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Ratenkredite</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Vergleichen Sie Ratenkredite von über 20 Banken. Zinsen ab 0,68% eff. Jahreszins.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>1.000 - 100.000 € Kreditsumme</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Schnelle Entscheidung in 24h</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Kostenlose Sondertilgungen</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/de/ratenkredit">Jetzt vergleichen</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Kreditkarten Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Kreditkarten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Finden Sie die perfekte Kreditkarte - kostenlos, mit Cashback oder Versicherung.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Keine Jahresgebühr</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Weltweit kostenlos zahlen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Cashback & Bonus-Programme</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/de/kreditkarten">Kreditkarten finden</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Unternehmenskredit Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Unternehmenskredite</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Schnelle Finanzierung für Ihr Unternehmen. Entscheidung in 24 Stunden.
                </p>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>5.000 - 500.000 € möglich</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Schnelle Zusage in 24h</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Flexible Rückzahlung</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/de/unternehmenskredit">Jetzt anfragen</Link>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Warum Finanzen-Guide.de?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Unabhängig</h3>
              <p className="text-muted-foreground">
                Wir vergleichen objektiv und unabhängig über 20 Banken und Anbieter für Sie.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kostenlos & Unverbindlich</h3>
              <p className="text-muted-foreground">
                Unser Vergleich ist komplett kostenlos und verpflichtet Sie zu nichts.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Schnell & Einfach</h3>
              <p className="text-muted-foreground">
                In wenigen Minuten die besten Angebote finden und direkt online beantragen.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Beliebte Themen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/de/ratenkredit/beste" className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <h3 className="font-semibold mb-2">Beste Ratenkredite</h3>
              <p className="text-sm text-muted-foreground">Top-Angebote im Vergleich</p>
            </Link>
            <Link to="/de/ratenkredit/zinsen" className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <h3 className="font-semibold mb-2">Zinsvergleich</h3>
              <p className="text-sm text-muted-foreground">Aktuelle Zinsen vergleichen</p>
            </Link>
            <Link to="/de/ratenkredit/ohne-schufa" className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <h3 className="font-semibold mb-2">Kredit ohne SCHUFA</h3>
              <p className="text-sm text-muted-foreground">Auch bei negativer Bonität</p>
            </Link>
            <Link to="/de/glossar" className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <h3 className="font-semibold mb-2">Finanz-Glossar</h3>
              <p className="text-sm text-muted-foreground">Alle Begriffe erklärt</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für Ihren Kredit?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Vergleichen Sie jetzt kostenlos über 20 Banken und finden Sie die besten Konditionen.
          </p>
          <Button asChild size="lg">
            <Link to="/de/ratenkredit">Kredit vergleichen</Link>
          </Button>
        </div>
      </section>

    </>
  );
}
