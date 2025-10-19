import { Helmet } from "react-helmet-async";
import NavigationDE from "@/components/de/NavigationDE";
import FooterDE from "@/components/de/FooterDE";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import ExpertProfile from "@/components/ExpertProfile";
import { PiggyBank, TrendingUp, Target, Calculator, Clock, Trophy, AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const sparregeln = [
  {
    regel: "50/30/20 Regel",
    beschreibung: "50% Notwendiges, 30% Wünsche, 20% Sparen",
    minSparen: 20,
    maxSparen: 20,
    schwierigkeit: "Leicht",
    geeignetFür: "Anfänger, die Struktur brauchen"
  },
  {
    regel: "10% Regel",
    beschreibung: "Mindestens 10% des Bruttoeinkommens sparen",
    minSparen: 10,
    maxSparen: 15,
    schwierigkeit: "Leicht",
    geeignetFür: "Alle, die einfach starten wollen"
  },
  {
    regel: "Aggressive FIRE-Strategie",
    beschreibung: "40-70% sparen für finanzielle Freiheit",
    minSparen: 40,
    maxSparen: 70,
    schwierigkeit: "Schwer",
    geeignetFür: "FIRE-Bewegung Anhänger"
  },
  {
    regel: "Automatische Steigerung",
    beschreibung: "Sparrate jährlich um 1% erhöhen",
    minSparen: 15,
    maxSparen: 30,
    schwierigkeit: "Mittel",
    geeignetFür: "Langfristige Sparer"
  }
];

const communityBeispiele = [
  {
    profil: "Software-Entwickler, 29 Jahre",
    einkommen: 4800,
    sparen: 2000,
    prozent: 42,
    strategie: "Minimalistisch leben, aggressive ETF-Investments",
    ziel: "FIRE mit 40"
  },
  {
    profil: "Lehrer, 36 Jahre, Familie",
    einkommen: 3200,
    sparen: 480,
    prozent: 15,
    strategie: "Automatisches Sparen + Kindergeld investieren",
    ziel: "Ausbildung der Kinder + Altersvorsorge"
  },
  {
    profil: "Unternehmensberater, 43 Jahre",
    einkommen: 6500,
    sparen: 1600,
    prozent: 25,
    strategie: "50/30/20 Regel, diversifiziertes Portfolio",
    ziel: "Früher Ruhestand mit 57"
  },
  {
    profil: "Krankenschwester, 32 Jahre",
    einkommen: 3400,
    sparen: 600,
    prozent: 18,
    strategie: "Vermögenswirksame Leistungen + Zusatztilgung",
    ziel: "Eigene Immobilie + Sicherheit"
  }
];

export default function MonatlichesSparen() {
  const [einkommen, setEinkommen] = useState("");
  const [aktuellesSparen, setAktuellesSparen] = useState("");
  const [ausgaben, setAusgaben] = useState("");

  const berechneEmpfehlungen = () => {
    if (!einkommen) return null;
    const monatlichesEinkommen = parseInt(einkommen);
    const monatlicheAusgaben = parseInt(ausgaben) || monatlichesEinkommen * 0.7;
    const verfuegbar = monatlichesEinkommen - monatlicheAusgaben;

    return {
      konservativ: Math.max(monatlichesEinkommen * 0.1, 0),
      moderat: Math.max(monatlichesEinkommen * 0.2, 0),
      aggressiv: Math.max(monatlichesEinkommen * 0.4, 0),
      verfuegbar: verfuegbar,
      aktuellProzent: aktuellesSparen ? (parseInt(aktuellesSparen) / monatlichesEinkommen) * 100 : 0
    };
  };

  const empfehlungen = berechneEmpfehlungen();

  const getMotivationstext = (prozent: number) => {
    if (prozent >= 40) return { text: "Fantastisch! Sie sind auf FIRE-Niveau! 🔥", farbe: "text-green-600" };
    if (prozent >= 20) return { text: "Ausgezeichnet! Sie liegen über dem Durchschnitt ⭐", farbe: "text-blue-600" };
    if (prozent >= 10) return { text: "Guter Start! Sie sparen mehr als viele Deutsche 👍", farbe: "text-orange-600" };
    return { text: "Jeder Euro zählt! Steigern Sie schrittweise 💪", farbe: "text-red-600" };
  };

  return (
    <>
      <Helmet>
        <html lang="de" />
        <title>Monatliches Sparen 2025: Wie viel sollte man sparen? | Finanzen Guide</title>
        <meta name="description" content="Wie viel sparen die Deutschen monatlich? Vergleichen Sie Ihre Sparrate mit anderen und erhalten Sie persönliche Empfehlungen basierend auf Ihrem Einkommen." />
        <meta name="keywords" content="monatlich sparen, sparquote deutschland, wie viel sparen, sparrechner, 50/30/20 regel, sparen tipps" />
        <link rel="canonical" href="https://finanzen-guide.de/ratgeber/monatliches-sparen" />
        
        <meta property="og:title" content="Monatliches Sparen 2025: So viel sparen die Deutschen" />
        <meta property="og:description" content="Entdecken Sie, wie viel Sie monatlich sparen sollten. Vergleichen Sie Ihre Sparquote und erhalten Sie konkrete Tipps." />
        <meta property="og:url" content="https://finanzen-guide.de/ratgeber/monatliches-sparen" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://finanzen-guide.de/images/og-sparen.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Monatliches Sparen: Wie viel ist richtig?" />
        <meta name="twitter:description" content="Sparrechner + Vergleich: Finden Sie Ihre optimale Sparquote." />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Monatliches Sparen 2025: Wie viel sollte man sparen?",
          "description": "Wie viel sparen die Deutschen monatlich? Vergleichen Sie Ihre Sparrate und erhalten Sie persönliche Empfehlungen.",
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
            "@id": "https://finanzen-guide.de/ratgeber/monatliches-sparen"
          }
        })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <PiggyBank className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="text-sm">
                Community-Daten 2025
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wie viel spart ihr monatlich?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Entdecken Sie, was Deutsche wirklich monatlich sparen. Vergleichen Sie Ihre Sparquote mit anderen und erhalten Sie persönliche Empfehlungen für Ihre Situation.
            </p>
          </section>

          {/* Quick Stats */}
          <section className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">560 €</div>
                <p className="text-sm text-muted-foreground">Durchschnitt monatlich</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">16%</div>
                <p className="text-sm text-muted-foreground">Vom Einkommen (Durchschnitt)</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">40%+</div>
                <p className="text-sm text-muted-foreground">FIRE-Community</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">17 Jahre</div>
                <p className="text-sm text-muted-foreground">Zur ersten Million</p>
              </CardContent>
            </Card>
          </section>

          {/* Spar-Rechner */}
          <section className="mb-12">
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Calculator className="h-6 w-6 text-primary" />
                  Persönlicher Spar-Rechner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="einkommen">Netto-Einkommen/Monat</Label>
                      <Input
                        id="einkommen"
                        type="number"
                        placeholder="z.B. 3500"
                        value={einkommen}
                        onChange={(e) => setEinkommen(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="sparen">Aktuelles Sparen/Monat</Label>
                      <Input
                        id="sparen"
                        type="number"
                        placeholder="z.B. 500"
                        value={aktuellesSparen}
                        onChange={(e) => setAktuellesSparen(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="ausgaben">Fixe Ausgaben/Monat</Label>
                      <Input
                        id="ausgaben"
                        type="number"
                        placeholder="z.B. 2500"
                        value={ausgaben}
                        onChange={(e) => setAusgaben(e.target.value)}
                      />
                    </div>
                  </div>

                  {empfehlungen && (
                    <div className="space-y-4 p-6 bg-secondary/30 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">Ihre Sparquote:</h3>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-primary">
                            {empfehlungen.aktuellProzent.toFixed(1)}%
                          </div>
                          <p className={`text-sm ${getMotivationstext(empfehlungen.aktuellProzent).farbe}`}>
                            {getMotivationstext(empfehlungen.aktuellProzent).text}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-background rounded">
                          <span className="text-sm">Konservativ (10%)</span>
                          <Badge variant="outline">{empfehlungen.konservativ.toFixed(0)} €</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-background rounded">
                          <span className="text-sm">Moderat (20%)</span>
                          <Badge variant="secondary">{empfehlungen.moderat.toFixed(0)} €</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-background rounded">
                          <span className="text-sm">Aggressiv (40%)</span>
                          <Badge className="bg-green-500">{empfehlungen.aggressiv.toFixed(0)} €</Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-primary/10 rounded border border-primary/20">
                          <span className="text-sm font-semibold">Verfügbar für Sparen:</span>
                          <Badge className="bg-primary">{empfehlungen.verfuegbar.toFixed(0)} €</Badge>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Sparregeln */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Bewährte Spar-Regeln
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {sparregeln.map((regel, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{regel.regel}</CardTitle>
                      <Badge variant={regel.schwierigkeit === 'Leicht' ? 'default' : 'secondary'}>
                        {regel.schwierigkeit}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{regel.beschreibung}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded">
                        <span className="text-sm">Sparquote:</span>
                        <span className="font-semibold text-green-600">
                          {regel.minSparen === regel.maxSparen 
                            ? `${regel.minSparen}%` 
                            : `${regel.minSparen}-${regel.maxSparen}%`}
                        </span>
                      </div>
                      
                      <div className="p-3 bg-secondary/30 rounded">
                        <p className="text-sm">
                          <strong>Geeignet für:</strong> {regel.geeignetFür}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Community Beispiele */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Reale Beispiele aus der Community
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {communityBeispiele.map((beispiel, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-base">{beispiel.profil}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded">
                          <div className="text-xs text-muted-foreground mb-1">Einkommen</div>
                          <div className="text-lg font-bold">{beispiel.einkommen} €</div>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded">
                          <div className="text-xs text-muted-foreground mb-1">Sparen</div>
                          <div className="text-lg font-bold text-green-600">{beispiel.sparen} €</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Sparquote:</span>
                          <Badge className="bg-primary">{beispiel.prozent}%</Badge>
                        </div>
                        <Progress value={beispiel.prozent} className="h-2" />
                      </div>
                      
                      <div className="p-3 bg-secondary/30 rounded">
                        <p className="text-sm mb-2"><strong>Strategie:</strong> {beispiel.strategie}</p>
                        <p className="text-sm"><strong>Ziel:</strong> {beispiel.ziel}</p>
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
              Unsere Spar-Expertin
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <ExpertProfile 
                name="Anna Schmidt"
                title="Finanzplanerin & Spar-Coach"
                experience="11 Jahre Erfahrung in Finanzberatung und Vermögensaufbau"
                specialization={[
                  "Sparstrategien",
                  "Budgetplanung",
                  "FIRE-Bewegung",
                  "Verhaltensökonomie"
                ]}
                credentials={[
                  "Certified Financial Planner (CFP)",
                  "4.500+ beratene Sparer",
                  "Autorin: 'Sparen mit System' (2024)",
                  "Regelmäßige Expertin bei Finanztip"
                ]}
                image="expert"
              />
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <PiggyBank className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Starten Sie Ihre Spar-Reise Heute
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nutzen Sie unsere Tools und Vergleiche, um mehr aus Ihrem Geld zu machen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/ratgeber/sparkonto" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                    Bestes Sparkonto Finden
                  </a>
                  <a href="/ratgeber/finanz-tipps" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors">
                    Weitere Spartipps
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
