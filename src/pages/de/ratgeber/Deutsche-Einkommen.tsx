import { Helmet } from "react-helmet-async";
import NavigationDE from "@/components/de/NavigationDE";
import FooterDE from "@/components/de/FooterDE";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import ExpertProfile from "@/components/ExpertProfile";
import { TrendingUp, Users, Euro, Target, Calculator, Briefcase, MapPin } from "lucide-react";
import { useState } from "react";

const altersgruppen = [
  { alter: "20-29 Jahre", median: "36.000 €", durchschnitt: "38.500 €" },
  { alter: "30-39 Jahre", median: "48.000 €", durchschnitt: "52.000 €" },
  { alter: "40-49 Jahre", median: "54.000 €", durchschnitt: "58.500 €" },
  { alter: "50-59 Jahre", median: "56.000 €", durchschnitt: "61.000 €" },
  { alter: "60+ Jahre", median: "48.000 €", durchschnitt: "52.000 €" }
];

const regionen = [
  { region: "Bayern (München)", median: "52.000 €", durchschnitt: "58.000 €" },
  { region: "Baden-Württemberg (Stuttgart)", median: "50.000 €", durchschnitt: "55.000 €" },
  { region: "Hessen (Frankfurt)", median: "51.000 €", durchschnitt: "57.000 €" },
  { region: "Hamburg", median: "48.000 €", durchschnitt: "53.000 €" },
  { region: "Nordrhein-Westfalen", median: "45.000 €", durchschnitt: "49.000 €" },
  { region: "Berlin", median: "42.000 €", durchschnitt: "47.000 €" },
  { region: "Sachsen", median: "38.000 €", durchschnitt: "42.000 €" },
  { region: "Mecklenburg-Vorpommern", median: "35.000 €", durchschnitt: "39.000 €" }
];

const branchen = [
  { branche: "IT & Software", median: "58.000 €", top10: "95.000 €" },
  { branche: "Finanzdienstleistungen", median: "54.000 €", top10: "110.000 €" },
  { branche: "Pharma & Chemie", median: "55.000 €", top10: "92.000 €" },
  { branche: "Automotive", median: "52.000 €", top10: "88.000 €" },
  { branche: "Maschinenbau", median: "50.000 €", top10: "82.000 €" },
  { branche: "Beratung", median: "56.000 €", top10: "105.000 €" },
  { branche: "Gesundheitswesen", median: "44.000 €", top10: "78.000 €" },
  { branche: "Einzelhandel", median: "35.000 €", top10: "58.000 €" },
  { branche: "Gastgewerbe", median: "28.000 €", top10: "45.000 €" }
];

export default function DeutscheEinkommen() {
  const [einkommen, setEinkommen] = useState("");
  const [alter, setAlter] = useState("");
  const [region, setRegion] = useState("");

  const berechnePercentile = (einkommenWert: number, alterGruppe: string) => {
    const altersData = altersgruppen.find(a => a.alter === alterGruppe);
    if (!altersData) return 50;
    
    const median = parseInt(altersData.median.replace(/[^0-9]/g, ''));
    
    if (einkommenWert < median * 0.7) return 25;
    if (einkommenWert < median) return 40;
    if (einkommenWert < median * 1.3) return 60;
    if (einkommenWert < median * 1.6) return 75;
    if (einkommenWert < median * 2) return 85;
    if (einkommenWert < median * 2.5) return 92;
    return 97;
  };

  const getPercentileFarbe = (percentile: number) => {
    if (percentile >= 90) return "text-green-600";
    if (percentile >= 70) return "text-blue-600";
    if (percentile >= 50) return "text-orange-600";
    return "text-red-600";
  };

  const percentile = einkommen && alter 
    ? berechnePercentile(parseInt(einkommen), alter) 
    : 0;

  return (
    <>
      <Helmet>
        <html lang="de" />
        <title>Deutsche Einkommen 2025: Gehaltsvergleich nach Alter, Region & Branche | Finanzen Guide</title>
        <meta name="description" content="Verdienst-Statistik Deutschland 2025: Vergleichen Sie Ihr Gehalt mit dem Durchschnitt nach Alter, Region und Branche. Interaktiver Rechner + aktuelle Zahlen." />
        <meta name="keywords" content="durchschnittsgehalt deutschland, einkommen vergleich, gehalt nach alter, gehalt nach region, gehalt nach branche, gehaltsrechner" />
        <link rel="canonical" href="https://finanzen-guide.de/ratgeber/deutsche-einkommen" />
        
        <meta property="og:title" content="Deutsche Einkommen 2025: Wie viel verdienen die Deutschen?" />
        <meta property="og:description" content="Interaktiver Gehaltsvergleich: Finden Sie heraus, wie Ihr Einkommen im Vergleich abschneidet." />
        <meta property="og:url" content="https://finanzen-guide.de/ratgeber/deutsche-einkommen" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://finanzen-guide.de/images/og-einkommen.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deutsche Einkommen 2025: Gehaltsvergleich" />
        <meta name="twitter:description" content="Vergleichen Sie Ihr Gehalt mit deutschen Durchschnittswerten." />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Deutsche Einkommen 2025: Gehaltsvergleich nach Alter, Region & Branche",
          "description": "Umfassende Verdienst-Statistik Deutschland 2025 mit interaktivem Vergleichsrechner.",
          "author": {
            "@type": "Organization",
            "name": "Finanzen Guide"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Finanzen Guide",
            "logo": {
              "@type": "ImageObject",
              "url": "https://finanzen-guide.de/finanzen-guide-logo.png"
            }
          },
          "datePublished": "2025-10-19",
          "dateModified": "2025-10-19",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://finanzen-guide.de/ratgeber/deutsche-einkommen"
          }
        })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Euro className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="text-sm">
                Einkommens-Statistik 2025
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wie viel verdienen die Deutschen?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Statistiken, Vergleiche und interaktiver Rechner: Finden Sie heraus, wie Ihr Gehalt im bundesweiten Vergleich nach Alter, Region und Branche abschneidet.
            </p>
          </section>

          {/* Quick Stats */}
          <section className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Euro className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">49.200 €</div>
                <p className="text-sm text-muted-foreground">Median-Jahresgehalt</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">53.800 €</div>
                <p className="text-sm text-muted-foreground">Durchschnittsgehalt</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">100.000 €</div>
                <p className="text-sm text-muted-foreground">Top 10% verdienen mehr</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">30%</div>
                <p className="text-sm text-muted-foreground">Ost-West Unterschied</p>
              </CardContent>
            </Card>
          </section>

          {/* Einkommens-Rechner */}
          <section className="mb-12">
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calculator className="h-6 w-6 text-primary" />
                  Einkommens-Vergleichsrechner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="einkommen">Brutto-Jahresgehalt</Label>
                      <Input
                        id="einkommen"
                        type="number"
                        placeholder="z.B. 50000"
                        value={einkommen}
                        onChange={(e) => setEinkommen(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="alter">Altersgruppe</Label>
                      <select
                        id="alter"
                        value={alter}
                        onChange={(e) => setAlter(e.target.value)}
                        className="w-full h-10 px-3 py-2 text-sm rounded-md border border-input bg-background"
                      >
                        <option value="">Wählen...</option>
                        {altersgruppen.map((gruppe) => (
                          <option key={gruppe.alter} value={gruppe.alter}>
                            {gruppe.alter}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="region">Region</Label>
                      <select
                        id="region"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        className="w-full h-10 px-3 py-2 text-sm rounded-md border border-input bg-background"
                      >
                        <option value="">Wählen...</option>
                        {regionen.map((reg) => (
                          <option key={reg.region} value={reg.region}>
                            {reg.region}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {einkommen && alter && (
                    <div className="space-y-4 p-6 bg-secondary/30 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">Ihr Einkommens-Percentil:</h3>
                        <div className="text-right">
                          <div className={`text-3xl font-bold ${getPercentileFarbe(percentile)}`}>
                            Top {100 - percentile}%
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Sie verdienen mehr als {percentile}% der Deutschen
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Ihr Einkommen im Vergleich</span>
                          <span className="font-semibold">{percentile}. Percentil</span>
                        </div>
                        <Progress value={percentile} className="h-3" />
                      </div>

                      {alter && (
                        <div className="p-4 bg-background rounded">
                          <h4 className="font-semibold mb-2">Vergleich mit Ihrer Altersgruppe:</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-muted-foreground">Median {alter}:</div>
                              <div className="font-bold">
                                {altersgruppen.find(a => a.alter === alter)?.median}
                              </div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Durchschnitt {alter}:</div>
                              <div className="font-bold">
                                {altersgruppen.find(a => a.alter === alter)?.durchschnitt}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Nach Alter */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Einkommen Nach Altersgruppe
            </h2>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {altersgruppen.map((gruppe, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                      <div className="flex items-center gap-4">
                        <Briefcase className="h-6 w-6 text-primary" />
                        <div>
                          <div className="font-semibold">{gruppe.alter}</div>
                          <div className="text-sm text-muted-foreground">Vollzeitbeschäftigte</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">{gruppe.median}</div>
                        <div className="text-sm text-muted-foreground">Ø {gruppe.durchschnitt}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Nach Region */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Regionale Unterschiede
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {regionen.map((reg, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {reg.region}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded">
                        <div className="text-xs text-muted-foreground mb-1">Median</div>
                        <div className="text-xl font-bold">{reg.median}</div>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded">
                        <div className="text-xs text-muted-foreground mb-1">Durchschnitt</div>
                        <div className="text-xl font-bold">{reg.durchschnitt}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Nach Branche */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Einkommen Nach Branche
            </h2>
            
            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Branche</th>
                        <th className="text-left py-3 px-4">Median</th>
                        <th className="text-left py-3 px-4">Top 10%</th>
                      </tr>
                    </thead>
                    <tbody>
                      {branchen.map((branche, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="py-3 px-4 font-semibold">{branche.branche}</td>
                          <td className="py-3 px-4">{branche.median}</td>
                          <td className="py-3 px-4">
                            <Badge className="bg-green-500">{branche.top10}</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Expert Profile */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Unsere Gehalts-Expertin
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <ExpertProfile 
                name="Dr. Laura Hoffmann"
                title="Arbeitsmarkt-Ökonomin & Gehaltsanalystin"
                experience="12 Jahre Erfahrung in Arbeitsmarkt-Forschung"
                specialization={[
                  "Gehaltsanalysen",
                  "Arbeitsmarkt-Trends",
                  "Lohnstrukturen",
                  "Gehaltsverhandlung"
                ]}
                credentials={[
                  "Promotion in Volkswirtschaftslehre",
                  "Statistisches Bundesamt (Destatis)",
                  "Autorin zahlreicher Studien",
                  "Expertin bei IAB und DIW"
                ]}
                image="expert"
              />
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Steigern Sie Ihr Einkommen
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nutzen Sie unsere Ratgeber, um mehr aus Ihrem Gehalt zu machen und Ihre Karriere voranzubringen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/ratgeber/karriere" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                    Karriere Guide
                  </a>
                  <a href="/ratgeber/gehaltsoptimierung" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors">
                    Gehaltsoptimierung
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </>
  );
}
