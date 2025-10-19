import { Helmet } from "react-helmet-async";
import { getSiteConfig } from "@/lib/siteConfig";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ImpressumDE() {
  const siteConfig = getSiteConfig();

  return (
    <>
      <Helmet>
        <title>Impressum | {siteConfig.name}</title>
        <meta name="description" content="Impressum und Kontaktinformationen von Finanzen-Guide.de" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`https://${siteConfig.domain}/impressum`} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Angaben gemäß § 5 TMG</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold">Betreiber:</p>
              <p>[FÖRETAGSNAMN]</p>
              <p>[FÖRETAGSADRESS]</p>
              <p>[POSTNUMMER OCH ORT]</p>
              <p>Deutschland</p>
            </div>

            <div>
              <p className="font-semibold">Kontakt:</p>
              <p>E-Mail: <a href="mailto:hello@finanzen-guide.de" className="text-primary hover:underline">hello@finanzen-guide.de</a></p>
            </div>

            <div>
              <p className="font-semibold">Registereintrag:</p>
              <p>Handelsregister: [HANDELSREGISTER-NUMMER]</p>
              <p>Registergericht: [REGISTERGERICHT]</p>
            </div>

            <div>
              <p className="font-semibold">Umsatzsteuer-ID:</p>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: [UST-ID]</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV</CardTitle>
          </CardHeader>
          <CardContent>
            <p>[ANSVARLIG PERSON]</p>
            <p>[FÖRETAGSADRESS]</p>
            <p>[POSTNUMMER OCH ORT]</p>
            <p>Deutschland</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Haftungsausschluss</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Haftung für Inhalte</h3>
              <p className="text-muted-foreground text-sm">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Haftung für Links</h3>
              <p className="text-muted-foreground text-sm">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                Verlinkung nicht erkennbar.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Urheberrecht</h3>
              <p className="text-muted-foreground text-sm">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hinweis zur Kreditvermittlung</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Finanzen-Guide.de ist ein unabhängiges Vergleichsportal für Finanzprodukte. 
              Wir vermitteln Kredite und Kreditkarten als eingetragener Kreditvermittler gemäß § 34c GewO. 
              Die Vermittlung erfolgt für Rechnung und im Auftrag der jeweiligen Partnerbanken. 
              Für die Kreditvermittlung erhalten wir von unseren Partnern eine Provision.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
