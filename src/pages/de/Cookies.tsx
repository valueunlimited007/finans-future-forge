import { Helmet } from "react-helmet-async";
import { getSiteConfig } from "@/lib/siteConfig";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CookiesDE() {
  const siteConfig = getSiteConfig();

  return (
    <>
      <Helmet>
        <title>Cookie-Richtlinie | {siteConfig.name}</title>
        <meta name="description" content="Informationen über die Verwendung von Cookies auf Finanzen-Guide.de" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`https://${siteConfig.domain}/cookies`} />
      </Helmet>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Cookie-Richtlinie</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Was sind Cookies?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie 
              eine Website besuchen. Sie helfen uns, die Website funktionsfähig zu machen und 
              Ihr Erlebnis zu verbessern.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Welche Cookies verwenden wir?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Notwendige Cookies</h3>
              <p className="text-muted-foreground text-sm">
                Diese Cookies sind für den Betrieb der Website unerlässlich. Sie ermöglichen 
                grundlegende Funktionen wie die Seitennavigation und den Zugriff auf sichere 
                Bereiche. Die Website kann ohne diese Cookies nicht ordnungsgemäß funktionieren.
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-1">
                <li>Session-Cookies für sichere Verbindungen</li>
                <li>Cookie-Präferenzen</li>
                <li>Load-Balancing-Cookies</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Analyse-Cookies</h3>
              <p className="text-muted-foreground text-sm">
                Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website 
                interagieren. Wir verwenden Google Analytics, um anonyme Statistiken zu 
                sammeln und unsere Website zu verbessern.
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-1">
                <li>Google Analytics (_ga, _gid)</li>
                <li>Seitenaufrufe und Verweildauer</li>
                <li>Verwendete Geräte und Browser</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Marketing-Cookies</h3>
              <p className="text-muted-foreground text-sm">
                Diese Cookies werden verwendet, um Ihnen relevante Werbung anzuzeigen und 
                die Effektivität unserer Werbekampagnen zu messen. Sie können auch verwendet 
                werden, um Begrenzungen für die Anzahl der Anzeigeneinblendungen festzulegen.
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-1">
                <li>Affiliate-Tracking-Cookies</li>
                <li>Conversion-Tracking</li>
                <li>Retargeting-Cookies</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cookies von Drittanbietern</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Wir arbeiten mit vertrauenswürdigen Drittanbietern zusammen, die ebenfalls 
              Cookies setzen können:
            </p>
            <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2">
              <li>
                <strong>Google Analytics:</strong> Zur Analyse des Nutzerverhaltens
              </li>
              <li>
                <strong>Affiliate-Netzwerke:</strong> Zur Nachverfolgung von Vermittlungen 
                (Adtraction, TradeDoubler, CJ Affiliate)
              </li>
              <li>
                <strong>Partnerbanken:</strong> Für die Abwicklung von Kreditanträgen
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Wie können Sie Cookies kontrollieren?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Sie haben verschiedene Möglichkeiten, Cookies zu kontrollieren oder zu löschen:
            </p>

            <div>
              <h3 className="font-semibold mb-2">Browser-Einstellungen</h3>
              <p className="text-muted-foreground text-sm">
                Die meisten Browser ermöglichen es Ihnen, Cookies zu verwalten. Sie können 
                Cookies blockieren oder löschen über:
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-1">
                <li>Chrome: Einstellungen → Datenschutz und Sicherheit → Cookies</li>
                <li>Firefox: Einstellungen → Datenschutz & Sicherheit</li>
                <li>Safari: Einstellungen → Datenschutz</li>
                <li>Edge: Einstellungen → Cookies und Websiteberechtigungen</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Opt-Out-Links</h3>
              <p className="text-muted-foreground text-sm">
                Für bestimmte Dienste können Sie die Cookie-Verwendung direkt deaktivieren:
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-1">
                <li>
                  <a 
                    href="https://tools.google.com/dlpage/gaoptout" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Analytics Opt-Out
                  </a>
                </li>
              </ul>
            </div>

            <p className="text-muted-foreground text-sm mt-4">
              <strong>Hinweis:</strong> Wenn Sie Cookies deaktivieren, können einige Funktionen 
              der Website möglicherweise nicht mehr ordnungsgemäß funktionieren.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Aktualisierungen dieser Richtlinie</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um Änderungen 
              in unseren Praktiken oder aus anderen betrieblichen, rechtlichen oder regulatorischen 
              Gründen widerzuspiegeln. Bitte überprüfen Sie diese Seite regelmäßig auf Aktualisierungen.
            </p>
            <p className="text-muted-foreground text-sm mt-4">
              <strong>Letzte Aktualisierung:</strong> Januar 2025
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
