import { Helmet } from "react-helmet-async";
import { getSiteConfig } from "@/lib/siteConfig";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Award, Target } from "lucide-react";

export default function UberUnsDE() {
  const siteConfig = getSiteConfig();

  return (
    <>
      <Helmet>
        <title>Über uns - Deutschlands unabhängiger Kreditvergleich | {siteConfig.name}</title>
        <meta 
          name="description" 
          content="Erfahren Sie mehr über Finanzen-Guide.de: Ihr unabhängiger Partner für Kreditvergleiche ✓ TÜV-geprüft ✓ Über 50 Banken ✓ 100% kostenlos ✓ Seit 2020." 
        />
        <meta name="keywords" content="über uns, Finanzen-Guide, unabhängiger Vergleich, Kreditvergleich Deutschland, seriöser Kreditvergleich" />
        <link rel="canonical" href={`https://${siteConfig.domain}/uber-uns`} />
      </Helmet>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Über Finanzen-Guide.de</h1>
          <p className="text-xl text-muted-foreground">
            Ihr unabhängiger Partner für bessere Finanzentscheidungen
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Unsere Mission</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground">
              Finanzen-Guide.de ist Deutschlands unabhängige Vergleichsplattform für Kredite, 
              Kreditkarten und Finanzprodukte. Unsere Mission ist es, Verbrauchern und Unternehmen 
              zu helfen, die besten Finanzentscheidungen zu treffen - transparent, objektiv und kostenlos.
            </p>
            <p className="text-muted-foreground">
              Wir vergleichen täglich über 20 Banken und Finanzdienstleister, um Ihnen stets die 
              aktuellsten Konditionen und besten Angebote präsentieren zu können.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>100% Unabhängig</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Wir sind kein Kreditinstitut und haben keine Präferenzen. Unser Vergleich 
                ist objektiv und zeigt Ihnen wirklich die besten Angebote für Ihre Situation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Für Verbraucher</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Unser Service ist komplett kostenlos für Sie. Wir finanzieren uns durch 
                Provisionen von unseren Partnerbanken - ohne dass Sie mehr zahlen.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>TÜV-geprüft</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Unsere Vergleichsrechner und Prozesse sind TÜV-geprüft. Ihre Daten sind 
                bei uns sicher und werden nach höchsten deutschen Standards verarbeitet.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Aktuelle Daten</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Wir aktualisieren unsere Daten täglich, damit Sie immer die neuesten 
                Zinsen und Konditionen sehen. So verpassen Sie keine guten Angebote.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Wie wir arbeiten</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Transparenz</h3>
              <p className="text-sm text-muted-foreground">
                Alle Links zu unseren Partnern sind klar als Affiliate-Links gekennzeichnet. 
                Sie wissen immer, wenn wir eine Provision erhalten.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Objektivität</h3>
              <p className="text-sm text-muted-foreground">
                Unsere Rankings basieren auf objektiven Kriterien wie Zinssätzen, Konditionen 
                und Kundenbewertungen - nicht auf Provisionshöhe.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Qualität</h3>
              <p className="text-sm text-muted-foreground">
                Wir arbeiten nur mit seriösen, in Deutschland zugelassenen Finanzdienstleistern 
                zusammen. Ihre Sicherheit steht an erster Stelle.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Kontakt</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Haben Sie Fragen oder Anregungen? Wir freuen uns auf Ihre Nachricht:
            </p>
            <p className="text-sm">
              <strong>E-Mail:</strong>{" "}
              <a href="mailto:hello@finanzen-guide.de" className="text-primary hover:underline">
                hello@finanzen-guide.de
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
