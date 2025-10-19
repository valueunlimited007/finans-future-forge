import { Helmet } from "react-helmet-async";
import NavigationDE from "@/components/de/NavigationDE";
import FooterDE from "@/components/de/FooterDE";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExpertProfile from "@/components/ExpertProfile";
import { Car, Calculator, TrendingDown, Zap, Euro, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

const autoKosten = [
  {
    kategorie: "Fixkosten pro Jahr",
    items: [
      { name: "Kfz-Versicherung (Vollkasko)", kosten: "800 - 1.500 €" },
      { name: "Kfz-Steuer", kosten: "100 - 400 €" },
      { name: "TÜV/HU", kosten: "100 - 150 €" },
      { name: "Wertverlust", kosten: "2.000 - 5.000 €" }
    ]
  },
  {
    kategorie: "Variable Kosten pro Jahr",
    items: [
      { name: "Benzin/Diesel (15.000 km/Jahr)", kosten: "1.500 - 2.500 €" },
      { name: "Wartung & Reparaturen", kosten: "600 - 1.500 €" },
      { name: "Reifen", kosten: "200 - 500 €" },
      { name: "Parkgebühren", kosten: "300 - 1.200 €" }
    ]
  }
];

const alternativen = [
  {
    option: "Öffentlicher Nahverkehr + Carsharing",
    monatlicheKosten: "200 - 400 €",
    ersparnis: "3.000 - 6.000 €/Jahr",
    vorteile: ["Kein Wertverlust", "Flexibilität", "Umweltfreundlich"],
    nachteile: ["Begrenzte Verfügbarkeit", "Planung erforderlich"]
  },
  {
    option: "Fahrrad + ÖP NV",
    monatlicheKosten: "50 - 150 €",
    ersparnis: "4.500 - 7.000 €/Jahr",
    vorteile: ["Gesundheit", "Minimale Kosten", "Schnell in der Stadt"],
    nachteile: ["Wetterabhängig", "Begrenzte Reichweite"]
  },
  {
    option: "Gebrauchtwagen (5-10 Jahre)",
    monatlicheKosten: "250 - 450 €",
    ersparnis: "1.500 - 3.500 €/Jahr",
    vorteile: ["Flexibilität", "Geringerer Wertverlust"],
    nachteile: ["Höhere Reparaturkosten"]
  },
  {
    option: "Elektroauto",
    monatlicheKosten: "300 - 550 €",
    ersparnis: "800 - 1.500 €/Jahr (Sprit)",
    vorteile: ["Geringe Betriebskosten", "Staatliche Förderung", "Kfz-Steuerbefreiung"],
    nachteile: ["Höherer Anschaffungspreis", "Ladeinfrastruktur"]
  }
];

const eAutos = [
  {
    modell: "VW ID.3",
    kaufpreis: "39.000 - 48.000 €",
    reichweite: "420 km",
    verbrauch: "15 kWh/100km",
    jahreskosten: "3.500 - 4.500 €",
    vorteile: ["Etablierte Marke", "Gutes Ladenetz", "Solide Reichweite"]
  },
  {
    modell: "Tesla Model 3",
    kaufpreis: "42.000 - 55.000 €",
    reichweite: "510 km",
    verbrauch: "14 kWh/100km",
    jahreskosten: "4.000 - 5.000 €",
    vorteile: ["Beste Software", "Supercharger-Netz", "Hohe Reichweite"]
  },
  {
    modell: "Renault Zoe",
    kaufpreis: "33.000 - 38.000 €",
    reichweite: "390 km",
    verbrauch: "17 kWh/100km",
    jahreskosten: "3.200 - 4.000 €",
    vorteile: ["Günstiger Einstieg", "Kompakt für Stadt", "Niedrige Betriebskosten"]
  }
];

export default function AutoKosten() {
  return (
    <>
      <Helmet>
        <html lang="de" />
        <title>Auto-Kosten 2025: Vollständige Kostenanalyse & Alternativen | Finanzen Guide</title>
        <meta name="description" content="Komplette Auto-Kostenanalyse 2025: Wahre Kosten für Benziner, Diesel, Elektro. Smarte Alternativen sparen 3.000-7.000 € pro Jahr. Jetzt vergleichen!" />
        <meta name="keywords" content="auto kosten, kfz kosten rechner, elektroauto kosten, carsharing, öpnv kosten, auto alternativen, auto sparen" />
        <link rel="canonical" href="https://finanzen-guide.de/ratgeber/auto-kosten" />
        
        <meta property="og:title" content="Auto-Kosten 2025: Die wahren Kosten eines Autos" />
        <meta property="og:description" content="Vollständige Kostenanalyse und clevere Alternativen, die tausende Euro sparen." />
        <meta property="og:url" content="https://finanzen-guide.de/ratgeber/auto-kosten" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://finanzen-guide.de/images/og-auto-kosten.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Auto-Kosten 2025: Vollständiger Kostencheck" />
        <meta name="twitter:description" content="Vergleichen Sie alle Kosten und entdecken Sie günstige Alternativen." />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Auto-Kosten 2025: Vollständige Kostenanalyse & Alternativen",
          "description": "Komplette Auto-Kostenanalyse 2025 mit smarten Alternativen für Deutschland.",
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
            "@id": "https://finanzen-guide.de/ratgeber/auto-kosten"
          }
        })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Car className="h-8 w-8 text-blue-600" />
              <Badge variant="secondary" className="text-sm">
                Transport & Mobilität
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Auto-Kosten 2025: Die Wahrheit
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Eine augenöffnende Analyse der tatsächlichen Auto-Kosten in Deutschland - plus clevere Alternativen, die Ihnen 3.000-7.000 € pro Jahr sparen können.
            </p>
          </section>

          {/* Quick Stats */}
          <section className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Euro className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">5.000-10.000 €</div>
                <p className="text-sm text-muted-foreground">Jahreskosten pro Auto</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingDown className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">20-35%</div>
                <p className="text-sm text-muted-foreground">Wertverlust Jahr 1</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">3%</div>
                <p className="text-sm text-muted-foreground">Nutzungszeit täglich</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Calculator className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">0,40-0,70 €</div>
                <p className="text-sm text-muted-foreground">Pro gefahrenem Kilometer</p>
              </CardContent>
            </Card>
          </section>

          {/* Detaillierte Kostenaufschlüsselung */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Vollständige Kostenanalyse
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {autoKosten.map((kategorie, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{kategorie.kategorie}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {kategorie.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-center p-3 bg-secondary/30 rounded-lg">
                          <span className="text-sm font-medium">{item.name}</span>
                          <Badge variant="outline" className="font-semibold">{item.kosten}</Badge>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Gesamt {kategorie.kategorie.toLowerCase()}:</span>
                        <span className="text-lg font-bold text-orange-700">
                          {kategorie.kategorie.includes("Fix") ? "3.000 - 7.050 €" : "2.600 - 5.700 €"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Card className="max-w-md mx-auto bg-red-50 dark:bg-red-950/20 border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-2">Gesamtkosten pro Jahr</h3>
                  <div className="text-3xl font-bold text-red-800 dark:text-red-300">5.600 - 12.750 €</div>
                  <p className="text-sm text-red-600 dark:text-red-400 mt-2">Das sind 470 - 1.060 € pro Monat!</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Clevere Alternativen */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Clevere Alternativen, Die Geld Sparen
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {alternativen.map((alt, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{alt.option}</CardTitle>
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="secondary">{alt.monatlicheKosten}</Badge>
                      <Badge className="bg-green-500">{alt.ersparnis}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          Vorteile
                        </h4>
                        <ul className="space-y-1">
                          {alt.vorteile.map((vorteil, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-green-500">•</span>
                              {vorteil}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500" />
                          Nachteile
                        </h4>
                        <ul className="space-y-1">
                          {alt.nachteile.map((nachteil, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-orange-500">•</span>
                              {nachteil}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Elektroauto-Vergleich */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Elektroautos im Vergleich
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {eAutos.map((auto, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{auto.modell}</CardTitle>
                      <Zap className="h-6 w-6 text-green-500" />
                    </div>
                    <Badge variant="outline" className="w-fit">{auto.kaufpreis}</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded">
                          <div className="text-xs text-muted-foreground mb-1">Reichweite</div>
                          <div className="font-bold">{auto.reichweite}</div>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded">
                          <div className="text-xs text-muted-foreground mb-1">Verbrauch</div>
                          <div className="font-bold">{auto.verbrauch}</div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-secondary/30 rounded">
                        <div className="text-sm font-semibold mb-1">Jahreskosten</div>
                        <div className="text-lg font-bold text-primary">{auto.jahreskosten}</div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Vorteile:</h4>
                        <ul className="space-y-1">
                          {auto.vorteile.map((vorteil, i) => (
                            <li key={i} className="text-xs flex items-start gap-1.5">
                              <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{vorteil}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Expert Profile */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Unser Mobilitäts-Experte
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <ExpertProfile 
                name="Thomas Wagner"
                title="Mobilitätsberater & Kfz-Experte"
                experience="13 Jahre Erfahrung in Automobilbranche und Mobilitätskonzepten"
                specialization={[
                  "Kostenanalysen",
                  "Elektromobilität",
                  "Alternative Mobilitätskonzepte",
                  "Flottenmanagement"
                ]}
                credentials={[
                  "Kfz-Meister & Betriebswirt",
                  "2.000+ Mobilitätsberatungen",
                  "Autor: 'Auto oder Alternative' (2024)",
                  "Experte bei ADAC und Stiftung Warentest"
                ]}
                image="expert"
              />
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Berechnen Sie Ihr Sparpotenzial
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nutzen Sie unsere Ratgeber und Vergleiche, um die beste Mobilitätslösung für Ihre Situation zu finden.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/ratgeber/finanz-tipps" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                    Weitere Spartipps
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
