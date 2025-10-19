import { Helmet } from "react-helmet-async";
import NavigationDE from "@/components/de/NavigationDE";
import FooterDE from "@/components/de/FooterDE";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExpertProfile from "@/components/ExpertProfile";
import { Lightbulb, TrendingUp, Euro, Clock, Shield, ShoppingCart, Calculator, Smartphone } from "lucide-react";
import { useState } from "react";

export default function FinanzTipps() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Alle Tipps", icon: Lightbulb },
    { id: "sparen", name: "Sparen", icon: Euro },
    { id: "zeit", name: "Zeitersparnis", icon: Clock },
    { id: "versicherung", name: "Versicherungen", icon: Shield },
    { id: "einkauf", name: "Einkaufen", icon: ShoppingCart },
    { id: "technik", name: "Apps & Tech", icon: Smartphone }
  ];

  const lifehacks = [
    {
      category: "sparen",
      title: "Automatischer Sparplan",
      description: "Richte einen automatischen Dauerauftrag ein, der am Tag deines Gehaltseingangs 10-20% auf ein separates Sparkonto überweist.",
      impact: "Spare 3.600-7.200 € mehr pro Jahr ohne nachzudenken",
      difficulty: "Leicht",
      timeToSetup: "30 Min",
      source: "Klassische Spar-Methode"
    },
    {
      category: "einkauf",
      title: "Meal Prep Sonntags",
      description: "Koche jeden Sonntag für die ganze Woche vor. Nutze günstige, gesunde Zutaten und spare täglich 8-12 € Kantinen- oder Restaurant-Kosten.",
      impact: "Spare 2.400-3.600 € pro Jahr + 5 Stunden wöchentlich",
      difficulty: "Mittel",
      timeToSetup: "3 Std pro Woche",
      source: "FIRE-Community Deutschland"
    },
    {
      category: "versicherung",
      title: "Jährlicher Versicherungs-Check",
      description: "Vergleiche jährlich Kfz-, Hausrat- und Haftpflichtversicherungen. Wechsel zu günstigeren Anbietern spart oft 200-500 € pro Versicherung.",
      impact: "Spare 600-1.500 € jährlich",
      difficulty: "Leicht",
      timeToSetup: "2 Std pro Jahr",
      source: "Stiftung Warentest Empfehlung"
    },
    {
      category: "sparen",
      title: "Kredit-Zinsen Verhandeln",
      description: "Rufe deine Bank an und verhandle Baufinanzierungs- oder Kreditzinsen. Nutze Konkurrenzangebote als Verhandlungsbasis.",
      impact: "Spare 1.200-6.000 € jährlich bei Immobilienkrediten",
      difficulty: "Leicht",
      timeToSetup: "1 Stunde",
      source: "Finanztest-Strategie"
    },
    {
      category: "technik",
      title: "Banking-App mit Budget-Tracking",
      description: "Nutze Apps wie Finanzguru oder Outbank für automatische Ausgaben-Kategorisierung und monatliche Budget-Übersichten.",
      impact: "Reduziere Ausgaben um 10-20%",
      difficulty: "Mittel",
      timeToSetup: "1 Woche Einarbeitung",
      source: "Finanzblogger-Community"
    },
    {
      category: "sparen",
      title: "Gebraucht-Erst Mentalität",
      description: "Kaufe Möbel, Elektronik, Sportgeräte und Werkzeug zuerst bei eBay Kleinanzeigen, Vinted oder Rebuy.",
      impact: "Spare 40-60% bei Großanschaffungen",
      difficulty: "Leicht",
      timeToSetup: "Kontinuierlich",
      source: "Nachhaltigkeits-Community"
    },
    {
      category: "zeit",
      title: "Alle Sparpläne Automatisieren",
      description: "Richte am Zahltag automatische Überweisungen für Sparkonto, ETF-Sparplan und Altersvorsorge ein.",
      impact: "Konsistentes Sparen + Stressreduktion",
      difficulty: "Leicht",
      timeToSetup: "1 Stunde",
      source: "Grundprinzip der FIRE-Bewegung"
    },
    {
      category: "einkauf",
      title: "Discounter-Strategie",
      description: "Kaufe Grundnahrungsmittel bei ALDI, Lidl oder Penny statt bei Rewe oder Edeka. Spare 30-40% bei gleichwertiger Qualität.",
      impact: "Spare 1.200-2.400 € jährlich bei Lebensmitteln",
      difficulty: "Leicht",
      timeToSetup: "Sofort umsetzbar",
      source: "Verbrauchervergleich 2025"
    },
    {
      category: "sparen",
      title: "Arbeitgeber-Benefits Ausnutzen",
      description: "Prüfe alle Benefits deines Arbeitgebers: betriebliche Altersvorsorge, Jobticket, Firmenwagen, Essenszuschuss, Dienstrad.",
      impact: "Wert von 1.200-3.600 € jährlich",
      difficulty: "Mittel",
      timeToSetup: "2 Std Recherche",
      source: "HR-Experten Empfehlung"
    },
    {
      category: "sparen",
      title: "Wohnung statt Haus",
      description: "Wohne in einer Mietwohnung statt Eigenheim um Instandhaltung, Grundsteuer, Garten und teure Reparaturen zu vermeiden.",
      impact: "Spare 6.000-12.000 € jährlich",
      difficulty: "Große Lebensstil-Entscheidung",
      timeToSetup: "Langfristig (Umzug)",
      source: "Finanzielle Freiheit Community"
    }
  ];

  const filteredHacks = selectedCategory === "all" 
    ? lifehacks 
    : lifehacks.filter(hack => hack.category === selectedCategory);

  return (
    <>
      <Helmet>
        <html lang="de" />
        <title>Finanz Life Hacks 2025: Die besten Spartipps für Deutschland | Finanzen Guide</title>
        <meta name="description" content="Bewährte Finanz Life Hacks aus der deutschen Spar-Community. Spare tausende Euro pro Jahr mit einfachen Tipps, die wirklich funktionieren." />
        <meta name="keywords" content="finanz tipps, spartipps deutschland, geld sparen, lifehacks finanzen, budgetierung, meal prep, versicherungen sparen, gebraucht kaufen" />
        <link rel="canonical" href="https://finanzen-guide.de/ratgeber/finanz-tipps" />
        
        <meta property="og:title" content="Finanz Life Hacks 2025: Spartipps für Deutschland" />
        <meta property="og:description" content="Entdecke die effektivsten Finanz Life Hacks. Einfache Tricks, die tausende Euro jährlich sparen." />
        <meta property="og:url" content="https://finanzen-guide.de/ratgeber/finanz-tipps" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://finanzen-guide.de/images/og-finanz-tipps.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Finanz Life Hacks 2025: Die besten Spartipps" />
        <meta name="twitter:description" content="10+ bewährte Strategien zum Geld sparen ohne Verzicht." />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Finanz Life Hacks 2025: Die besten Spartipps für Deutschland",
          "description": "Bewährte Finanz Life Hacks aus der deutschen Spar-Community zum effektiven Geldsparen.",
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
            "@id": "https://finanzen-guide.de/ratgeber/finanz-tipps"
          }
        })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Lightbulb className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="text-sm">
                Community-getestet
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Finanz Life Hacks 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Die effektivsten Spartipps aus der deutschen Community. Einfache Strategien, die tausende Euro jährlich sparen ohne Verzicht auf Lebensqualität.
            </p>
          </section>

          {/* Impact Stats */}
          <section className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Euro className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">6.000-18.000 €</div>
                <p className="text-sm text-muted-foreground">Jährlich gespart</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">5-10 Std</div>
                <p className="text-sm text-muted-foreground">Wöchentlich gewonnen</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">10-20%</div>
                <p className="text-sm text-muted-foreground">Ausgaben-Reduktion</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Lightbulb className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">10+</div>
                <p className="text-sm text-muted-foreground">Bewährte Strategien</p>
              </CardContent>
            </Card>
          </section>

          {/* Category Filter */}
          <section className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white border-primary'
                        : 'bg-background text-foreground border-border hover:bg-secondary'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Life Hacks Grid */}
          <section className="mb-12">
            <div className="grid lg:grid-cols-2 gap-6">
              {filteredHacks.map((hack, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{hack.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mb-3">
                          {hack.description}
                        </p>
                      </div>
                      <Badge 
                        variant={hack.difficulty === 'Leicht' ? 'default' : hack.difficulty === 'Mittel' ? 'secondary' : 'destructive'}
                        className="ml-2"
                      >
                        {hack.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                        <span className="text-sm font-medium">Finanzielle Auswirkung:</span>
                        <span className="text-sm text-green-700 dark:text-green-400 font-semibold">{hack.impact}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Setup-Zeit:</span>
                        <Badge variant="outline">{hack.timeToSetup}</Badge>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Quelle:</span>
                        <span className="text-xs text-muted-foreground italic">{hack.source}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Fortgeschrittene Strategien */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Fortgeschrittene Strategien für Maximalen Effekt
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🔄</span>
                    Automation-Stack
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground mb-4">
                      Kombiniere mehrere Automatisierungen für maximale Wirkung
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Automatischer Sparplan</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Auto-Versicherungsvergleich</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>Automatische Budgetierung</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <p className="text-xs text-green-700 dark:text-green-400 font-semibold">
                        Ergebnis: Spare 30+ Std/Jahr + 6.000+ €
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">📊</span>
                    Datenbasierte Optimierung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground mb-4">
                      Nutze Daten zur Optimierung deiner größten Ausgabenposten
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Lebensmittel</span>
                        <span className="font-semibold">20-30% vom Einkommen</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wohnen</span>
                        <span className="font-semibold">30-35% vom Einkommen</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Mobilität</span>
                        <span className="font-semibold">10-15% vom Einkommen</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <p className="text-xs text-blue-700 dark:text-blue-400 font-semibold">
                        Fokus auf die Top 3 Ausgaben zuerst
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Psychologie-Hacks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground mb-4">
                      Nutze Verhaltenspsychologie für nachhaltige Gewohnheiten
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>"Zuerst sich selbst bezahlen"-Prinzip</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span>24-Stunden-Regel bei Großkäufen</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                        <span>Visuelle Spar-Erinnerungen</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <p className="text-xs text-orange-700 dark:text-orange-400 font-semibold">
                        Nachhaltige Gewohnheiten = Langfristige Erfolge
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Implementierungsplan */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              30-Tage Umsetzungsplan
            </h2>
            
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      1
                    </div>
                    <h4 className="font-semibold mb-2">Woche 1: Grundlagen</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Banking-App installieren</li>
                      <li>• Automatisches Sparen einrichten</li>
                      <li>• Bank wegen Zinsen anrufen</li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      2
                    </div>
                    <h4 className="font-semibold mb-2">Woche 2: Optimierung</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Versicherungen vergleichen</li>
                      <li>• Ersten Meal Prep planen</li>
                      <li>• Arbeitgeber-Benefits prüfen</li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      3
                    </div>
                    <h4 className="font-semibold mb-2">Woche 3: Automation</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Sparpläne automatisieren</li>
                      <li>• Daueraufträge einrichten</li>
                      <li>• Gebraucht-Portale checken</li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                      4
                    </div>
                    <h4 className="font-semibold mb-2">Woche 4: Feintuning</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ersten Monat auswerten</li>
                      <li>• Beträge anpassen</li>
                      <li>• Nächsten Monat planen</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-green-50 dark:bg-green-950/20 rounded-lg text-center">
                  <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2">
                    Erwartete Monatliche Ersparnis Nach 30 Tagen
                  </h4>
                  <div className="text-3xl font-bold text-green-600">600 - 1.500 €</div>
                  <p className="text-sm text-green-700 dark:text-green-500 mt-2">
                    Basierend auf durchschnittlichen Community-Ergebnissen
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Expert Profile */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Unser Community-Experte
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <ExpertProfile 
                name="Markus Fischer"
                title="Finanz-Blogger & Community-Veteran"
                experience="7 Jahre aktives Teilen von Spar-Strategien"
                specialization={[
                  "Spar-Automatisierung",
                  "Versicherungsoptimierung",
                  "Alltagsfinanzen",
                  "Verhaltensökonomie"
                ]}
                credentials={[
                  "BWL-Studium mit Schwerpunkt Finanzmanagement",
                  "8.000+ geholfenem Community-Mitgliedern",
                  "Persönliche Ersparnis: 24.000+ € jährlich",
                  "Gründer mehrerer Finanz-Foren"
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
                  Berechne Deine Ersparnisse
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nutze unsere Tools und Vergleiche, um zu sehen wie viel du durch diese Life Hacks sparen kannst.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/ratenkredit" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                    Ersparnisse Berechnen
                  </a>
                  <a href="/ratgeber/sparkonto" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors">
                    Bestes Sparkonto Finden
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
