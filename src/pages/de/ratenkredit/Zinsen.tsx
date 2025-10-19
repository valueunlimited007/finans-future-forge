import { Helmet } from "react-helmet-async";
import { getSiteConfig } from "@/lib/siteConfig";
import { getAllRatenkredite } from "@/data/partners-de";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { TrendingDown, Info } from "lucide-react";

export default function RatenkreditZinsenDE() {
  const siteConfig = getSiteConfig();
  const partners = getAllRatenkredite();

  return (
    <>
      <Helmet>
        <title>Ratenkredit Zinsvergleich 2025 - Aktuelle Zinsen | {siteConfig.name}</title>
        <meta 
          name="description" 
          content="Aktuelle Ratenkredit Zinsen 2025 im Vergleich ✓ Effektivzins ab 0,68% ✓ Zinsrechner ✓ Zinsen verstehen. Finden Sie den günstigsten Kredit!" 
        />
        <link rel="canonical" href={`https://${siteConfig.domain}/ratenkredit/zinsen`} />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              <TrendingDown className="w-4 h-4 mr-2" />
              Aktuelle Zinsen 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Ratenkredit Zinsvergleich
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vergleichen Sie die aktuellen Zinsen von über 20 Banken. 
              Finden Sie den günstigsten Effektivzins für Ihren Ratenkredit.
            </p>
          </div>
        </div>
      </section>

      {/* Wichtige Info */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-blue-500 bg-blue-50 dark:bg-blue-950">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                <CardTitle>Wichtig: Effektiver vs. Nominaler Zinssatz</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-2">
                <strong>Effektivzins:</strong> Beinhaltet alle Kosten des Kredits (Zinsen, Gebühren, etc.). 
                Dies ist die Zahl, die Sie vergleichen sollten!
              </p>
              <p>
                <strong>Nominalzins:</strong> Nur der reine Zinssatz ohne Nebenkosten. Oft niedriger, 
                aber weniger aussagekräftig.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Zinsübersicht */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Aktuelle Zinssätze im Überblick</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-4 font-semibold">Anbieter</th>
                  <th className="text-left p-4 font-semibold">Effektivzins ab</th>
                  <th className="text-left p-4 font-semibold">Kreditsumme</th>
                  <th className="text-left p-4 font-semibold">Besonderheit</th>
                  <th className="text-right p-4 font-semibold">Aktion</th>
                </tr>
              </thead>
              <tbody>
                {partners.map((partner) => (
                  <tr key={partner.brandId} className="border-b border-border hover:bg-muted/50">
                    <td className="p-4 font-medium">{partner.name}</td>
                    <td className="p-4">
                      <span className="text-green-600 font-bold text-lg">{partner.aprFrom}</span>
                    </td>
                    <td className="p-4 text-muted-foreground">{partner.amountRange}</td>
                    <td className="p-4">
                      {partner.pros[0] && (
                        <Badge variant="outline" className="text-xs">
                          {partner.pros[0].substring(0, 30)}...
                        </Badge>
                      )}
                    </td>
                    <td className="p-4 text-right">
                      <Button asChild size="sm" variant="outline">
                        <Link to="/ratenkredit">Details</Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Zinsentwicklung */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Zinsentwicklung verstehen</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Wovon hängen die Zinsen ab?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Ihre Bonität</h4>
                <p className="text-sm text-muted-foreground">
                  Je besser Ihre Kreditwürdigkeit (SCHUFA-Score), desto niedriger der Zinssatz. 
                  Ein Score über 95% führt zu den besten Konditionen.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Kredithöhe</h4>
                <p className="text-sm text-muted-foreground">
                  Mittlere Kreditsummen (10.000-30.000 €) haben oft die günstigsten Zinsen. 
                  Sehr kleine oder sehr große Summen können teurer sein.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">3. Laufzeit</h4>
                <p className="text-sm text-muted-foreground">
                  Kürzere Laufzeiten führen zu niedrigeren Zinsen, aber höheren monatlichen Raten. 
                  Der Sweet Spot liegt oft bei 36-60 Monaten.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">4. Verwendungszweck</h4>
                <p className="text-sm text-muted-foreground">
                  Zweckgebundene Kredite (z.B. Autokredite) haben oft niedrigere Zinsen als 
                  freie Verwendung, da die Bank eine Sicherheit hat.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">5. Leitzins der EZB</h4>
                <p className="text-sm text-muted-foreground">
                  Der Leitzins der Europäischen Zentralbank beeinflusst alle Kreditzinsen. 
                  Aktuell (2025) liegt er bei 4,5%, was zu höheren Kreditzinsen führt.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tipps für günstigere Zinsen</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span><strong>SCHUFA-Score verbessern:</strong> Bezahlen Sie Rechnungen pünktlich und nutzen Sie nicht das gesamte Kreditlimit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span><strong>Mehrere Angebote einholen:</strong> Nutzen Sie Vergleichsportale und holen Sie mindestens 3 Angebote ein</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span><strong>Sicherheiten anbieten:</strong> Mit Bürgen oder Sicherheiten bekommen Sie bessere Konditionen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span><strong>Kürzere Laufzeit wählen:</strong> Falls möglich, wählen Sie eine kürzere Laufzeit für niedrigere Zinsen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">✓</span>
                  <span><strong>Verhandeln:</strong> Die ersten Angebote sind nicht in Stein gemeißelt - fragen Sie nach besseren Konditionen</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für den günstigsten Zinssatz?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Vergleichen Sie jetzt alle Angebote und sparen Sie hunderte Euro an Zinsen.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg">
              <Link to="/ratenkredit">Kredite vergleichen</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Link to="/ratenkredit/beste">Beste Kredite</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
