import { Helmet } from "react-helmet-async";
import { getSiteConfig } from "@/lib/siteConfig";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DatenschutzDE() {
  const siteConfig = getSiteConfig();

  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung | {siteConfig.name}</title>
        <meta name="description" content="Datenschutzerklärung und DSGVO-Informationen von Finanzen-Guide.de" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`https://${siteConfig.domain}/datenschutz`} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>1. Datenschutz auf einen Blick</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground text-sm">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema 
                Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Datenerfassung auf unserer Website</h3>
              <p className="text-muted-foreground text-sm mb-2">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              </p>
              <p className="text-muted-foreground text-sm">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>2. Allgemeine Hinweise und Pflichtinformationen</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Datenschutz</h3>
              <p className="text-muted-foreground text-sm">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen 
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="text-sm">
                [FÖRETAGSNAMN]<br />
                [FÖRETAGSADRESS]<br />
                [POSTNUMMER OCH ORT]<br />
                Deutschland
              </p>
              <p className="text-sm mt-2">
                E-Mail: <a href="mailto:hallo@finanzen-guide.de" className="text-primary hover:underline">hallo@finanzen-guide.de</a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p className="text-muted-foreground text-sm">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
                Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine 
                formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten 
                Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p className="text-muted-foreground text-sm">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
                Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres 
                Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht 
                unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>3. Datenerfassung auf unserer Website</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Cookies</h3>
              <p className="text-muted-foreground text-sm">
                Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem 
                Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot 
                nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, 
                die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert 
                werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle 
                oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des 
                Browser aktivieren.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Server-Log-Dateien</h3>
              <p className="text-muted-foreground text-sm">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Kontaktformular</h3>
              <p className="text-muted-foreground text-sm">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>4. Analyse-Tools und Werbung</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Google Analytics</h3>
              <p className="text-muted-foreground text-sm">
                Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die 
                Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Google Analytics verwendet so genannte "Cookies". Das sind Textdateien, die auf Ihrem 
                Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie 
                ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser 
                Website werden in der Regel an einen Server von Google in den USA übertragen und dort 
                gespeichert.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Affiliate-Marketing</h3>
              <p className="text-muted-foreground text-sm">
                Diese Website nimmt am Affiliate-Marketing-Programm teil. Wenn Sie auf einen 
                Affiliate-Link klicken und anschließend ein Produkt oder eine Dienstleistung erwerben, 
                erhalten wir eine Provision. Dies hat keine Auswirkungen auf den Preis, den Sie zahlen.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Ihre Rechte</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten 
              personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung 
              sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
            </p>
            <p className="text-muted-foreground text-sm">
              Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit 
              unter der im Impressum angegebenen Adresse an uns wenden.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
