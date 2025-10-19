import { Helmet } from "react-helmet-async";
import NavigationDE from "@/components/de/NavigationDE";
import FooterDE from "@/components/de/FooterDE";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExpertProfile from "@/components/ExpertProfile";
import { TrendingUp, TrendingDown, AlertTriangle, Home, Calculator, MapPin, Euro } from "lucide-react";

const staedtePreise = [
  {
    stadt: "München",
    kaufpreis: "9.500 - 12.000 €/m²",
    miete: "18 - 25 €/m²",
    prognose: "Stabil bis leicht steigend",
    entwicklung: "+2% bis +5%"
  },
  {
    stadt: "Frankfurt",
    kaufpreis: "6.500 - 9.000 €/m²",
    miete: "16 - 22 €/m²",
    prognose: "Stabil",
    entwicklung: "0% bis +3%"
  },
  {
    stadt: "Hamburg",
    kaufpreis: "6.000 - 8.500 €/m²",
    miete: "14 - 20 €/m²",
    prognose: "Leicht fallend",
    entwicklung: "-2% bis +1%"
  },
  {
    stadt: "Berlin",
    kaufpreis: "5.500 - 7.500 €/m²",
    miete: "13 - 18 €/m²",
    prognose: "Stabil",
    entwicklung: "0% bis +2%"
  },
  {
    stadt: "Köln",
    kaufpreis: "5.000 - 7.000 €/m²",
    miete: "12 - 17 €/m²",
    prognose: "Leicht steigend",
    entwicklung: "+1% bis +4%"
  },
  {
    stadt: "Stuttgart",
    kaufpreis: "6.000 - 8.000 €/m²",
    miete: "14 - 19 €/m²",
    prognose: "Stabil",
    entwicklung: "0% bis +3%"
  }
];

export default function Immobilienmarkt() {
  return (
    <>
      <Helmet>
        <html lang="de" />
        <title>Immobilienmarkt 2025: Preisentwicklung & Prognose Deutschland | Finanzen Guide</title>
        <meta name="description" content="Immobilienmarkt-Analyse 2025: Steigen oder fallen die Preise? Expertenmeinungen, Marktdaten und Prognosen für München, Berlin, Hamburg & mehr." />
        <meta name="keywords" content="immobilienmarkt deutschland, immobilienpreise 2025, wohnungspreise, immobilien prognose, kaufen oder mieten, münchen berlin hamburg" />
        <link rel="canonical" href="https://finanzen-guide.de/ratgeber/immobilienmarkt" />
        
        <meta property="og:title" content="Immobilienmarkt 2025: Steigen die Preise weiter?" />
        <meta property="og:description" content="Umfassende Marktanalyse: Preisentwicklung, Expertenmeinungen und Prognosen für den deutschen Immobilienmarkt." />
        <meta property="og:url" content="https://finanzen-guide.de/ratgeber/immobilienmarkt" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://finanzen-guide.de/images/og-immobilien.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Immobilienmarkt 2025: Preisentwicklung Deutschland" />
        <meta name="twitter:description" content="Expertenanalyse des deutschen Immobilienmarkts mit Prognosen." />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Immobilienmarkt 2025: Preisentwicklung & Prognose Deutschland",
          "description": "Umfassende Analyse des deutschen Immobilienmarkts 2025 mit Expertenmeinungen und Prognosen.",
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
            "@id": "https://finanzen-guide.de/ratgeber/immobilienmarkt"
          }
        })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Home className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="text-sm">
                Marktanalyse 2025
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Immobilienmarkt 2025: Wie geht es weiter?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Steigen oder fallen die Immobilienpreise? Expertenanalyse der aktuellen Marktlage in Deutschland mit konkreten Prognosen für die wichtigsten Städte.
            </p>
          </section>

          {/* Markt-Indikatoren */}
          <section className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-5 w-5 text-orange-500" />
                  <CardTitle className="text-lg">Nachfrage</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600 mb-2">Gedämpft</div>
                <p className="text-sm text-muted-foreground">
                  Hohe Zinsen und Kaufnebenkosten bremsen die Nachfrage
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-blue-500" />
                  <CardTitle className="text-lg">Zinsniveau</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-2">3,5% - 4,2%</div>
                <p className="text-sm text-muted-foreground">
                  Baufinanzierung teurer als in den letzten 10 Jahren
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-green-500" />
                  <CardTitle className="text-lg">Angebot</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 mb-2">Knapp</div>
                <p className="text-sm text-muted-foreground">
                  Wohnungsmangel in Großstädten bleibt bestehen
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Städte-Vergleich */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Preise in Top-Städten
            </h2>
            
            <div className="space-y-4">
              {staedtePreise.map((stadt, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-5 gap-4 items-center">
                      <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin className="h-5 w-5 text-primary" />
                          <h3 className="font-bold text-xl">{stadt.stadt}</h3>
                        </div>
                        <Badge 
                          variant={
                            stadt.prognose.includes("steigend") ? "default" :
                            stadt.prognose.includes("fallend") ? "destructive" : "secondary"
                          }
                          className={
                            stadt.prognose.includes("steigend") ? "bg-green-500" : ""
                          }
                        >
                          {stadt.entwicklung}
                        </Badge>
                      </div>
                      
                      <div className="md:col-span-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded">
                            <div className="text-xs text-muted-foreground mb-1">Kaufpreis</div>
                            <div className="font-bold text-sm">{stadt.kaufpreis}</div>
                          </div>
                          <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded">
                            <div className="text-xs text-muted-foreground mb-1">Miete</div>
                            <div className="font-bold text-sm">{stadt.miete}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        <div className="p-4 bg-secondary/30 rounded">
                          <div className="text-sm font-semibold mb-1">Prognose 2025:</div>
                          <p className="text-sm text-muted-foreground">{stadt.prognose}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Expertenanalyse */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Expertenanalyse: Verschiedene Szenarien
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-red-500" />
                    Preisrückgang-Szenario
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Argumente für Preisrückgang:</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Hohe Zinsen reduzieren Kaufkraft drastisch</li>
                      <li>• Wirtschaftliche Unsicherheit bremst Kaufentscheidungen</li>
                      <li>• Zwangsversteigerungen könnten zunehmen</li>
                      <li>• Überangebot in einigen Neubaugebieten</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "In einigen Regionen sehen wir bereits Preisrückgänge von 5-10%. Der Trend könnte sich 2025 fortsetzen." - Immobilienanalyst
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    Stabilisierungs-Szenario
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Argumente für Stabilität:</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Anhaltender Wohnungsmangel in Großstädten</li>
                      <li>• Starke Zuwanderung erhöht Nachfrage</li>
                      <li>• Begrenzte Neubautätigkeit stützt Preise</li>
                      <li>• Immobilien als Inflationsschutz attraktiv</li>
                    </ul>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "Der fundamentale Wohnungsmangel wird größere Preiseinbrüche verhindern. Wir erwarten Seitwärtsbewegung." - Immobilienökonom
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Kaufen vs Mieten */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Kaufen oder Mieten 2025?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-blue-500" />
                    Jetzt Kaufen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded">
                      <h4 className="font-semibold mb-2">Pro:</h4>
                      <ul className="text-sm space-y-1">
                        <li>✓ Langfristige Wertsicherung</li>
                        <li>✓ Unabhängigkeit vom Vermieter</li>
                        <li>✓ Zinsen könnten weiter steigen</li>
                        <li>✓ Potenzielle Schnäppchen bei Verkaufsdruck</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded">
                      <h4 className="font-semibold mb-2">Contra:</h4>
                      <ul className="text-sm space-y-1">
                        <li>✗ Hohe Kaufnebenkosten (10-15%)</li>
                        <li>✗ Zinsbindung bei hohem Niveau</li>
                        <li>✗ Weitere Preisrückgänge möglich</li>
                        <li>✗ Geringe Flexibilität</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Euro className="h-5 w-5 text-green-500" />
                    Weiter Mieten
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded">
                      <h4 className="font-semibold mb-2">Pro:</h4>
                      <ul className="text-sm space-y-1">
                        <li>✓ Maximale Flexibilität</li>
                        <li>✓ Keine Kaufnebenkosten</li>
                        <li>✓ Kann auf Preisentwicklung warten</li>
                        <li>✓ Kapital für andere Investments</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded">
                      <h4 className="font-semibold mb-2">Contra:</h4>
                      <ul className="text-sm space-y-1">
                        <li>✗ Mietpreissteigerungen</li>
                        <li>✗ Kein Vermögensaufbau</li>
                        <li>✗ Kündigungsrisiko</li>
                        <li>✗ Verpassen von Kaufgelegenheiten</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Rechner */}
          <section className="mb-12">
            <Card className="max-w-3xl mx-auto bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calculator className="h-6 w-6 text-primary" />
                  Faustregeln für 2025
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg">
                    <h4 className="font-semibold mb-2">Kaufpreis-zu-Jahresmiete Verhältnis:</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Ein Kauf lohnt sich tendenziell bei einem Faktor unter 25-30.
                    </p>
                    <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded">
                      <p className="text-sm">
                        <strong>Beispiel:</strong> Wohnung kostet 400.000 €, Jahresmiete wäre 16.000 € → Faktor 25 → Grenzbereich
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-background rounded-lg">
                    <h4 className="font-semibold mb-2">Eigenkapital-Regel:</h4>
                    <p className="text-sm text-muted-foreground">
                      Mindestens 20-30% Eigenkapital + Kaufnebenkosten für sichere Finanzierung
                    </p>
                  </div>
                  
                  <div className="p-4 bg-background rounded-lg">
                    <h4 className="font-semibold mb-2">Belastungsgrenze:</h4>
                    <p className="text-sm text-muted-foreground">
                      Monatliche Rate sollte max. 35-40% des Nettoeinkommens betragen
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Expert Profile */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Unser Immobilien-Experte
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <ExpertProfile 
                name="Dr. Andreas Werner"
                title="Immobilienökonom & Marktanalyst"
                experience="18 Jahre Erfahrung in Immobilienmarkt-Analyse"
                specialization={[
                  "Marktprognosen",
                  "Investmentstrategien",
                  "Bewertungsverfahren",
                  "Regionalanalysen"
                ]}
                credentials={[
                  "Promotion in Immobilienökonomie",
                  "15 Jahre bei großer Immobilien-AG",
                  "Autor: 'Immobilienmarkt Deutschland' (2024)",
                  "Regelmäßiger Experte bei Handelsblatt"
                ]}
                image="expert"
              />
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Informiert Entscheiden
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nutze unsere Ratgeber und Vergleiche für fundierte Finanzentscheidungen rund um Immobilien.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/ratenkredit" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                    Baufinanzierung Vergleichen
                  </a>
                  <a href="/ratgeber/monatliches-sparen" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors">
                    Sparrechner Nutzen
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
