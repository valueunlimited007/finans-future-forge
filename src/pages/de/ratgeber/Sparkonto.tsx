import { Helmet } from "react-helmet-async";
import NavigationDE from "@/components/de/NavigationDE";
import FooterDE from "@/components/de/FooterDE";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExpertProfile from "@/components/ExpertProfile";
import { TrendingUp, Shield, Star, Building2, AlertCircle, CheckCircle2, ThumbsUp } from "lucide-react";

const sparkonten = [
  {
    bank: "Trade Republic",
    zins: "3,25% p.a.",
    mindestanlage: "0 €",
    maximalanlage: "Unbegrenzt",
    freieAbhebungen: "Jederzeit",
    einlagensicherung: "100.000 € (Deutschland)",
    vorteile: [
      "Höchster Zinssatz am Markt",
      "Täglich verfügbar",
      "Keine Mindesteinlage",
      "Kostenlose Kontoführung"
    ],
    nachteile: [
      "App-basiert (keine Filiale)",
      "Zinssatz kann sich ändern"
    ],
    bewertung: 4.8,
    empfehlung: "Beste Wahl für hohe Zinsen"
  },
  {
    bank: "ING",
    zins: "3,00% p.a.",
    mindestanlage: "0 €",
    maximalanlage: "Unbegrenzt",
    freieAbhebungen: "Jederzeit",
    einlagensicherung: "100.000 € (Deutschland)",
    vorteile: [
      "Etablierte Direktbank",
      "4 Monate Garantiezins für Neukunden",
      "Kombinierbar mit Girokonto",
      "Guter Kundenservice"
    ],
    nachteile: [
      "Zinssatz nach 4 Monaten oft niedriger",
      "Neukunden-Aktion zeitlich begrenzt"
    ],
    bewertung: 4.6,
    empfehlung: "Ideal für Neukunden"
  },
  {
    bank: "C24",
    zins: "2,80% p.a.",
    mindestanlage: "0 €",
    maximalanlage: "250.000 €",
    freieAbhebungen: "Jederzeit",
    einlagensicherung: "100.000 € (Deutschland)",
    vorteile: [
      "Keine Kontoführungsgebühren",
      "Attraktiver Dauerzins",
      "Einfache App-Bedienung",
      "Schnelle Kontoeröffnung"
    ],
    nachteile: [
      "Maximale Einlage begrenzt",
      "Noch relativ neue Bank"
    ],
    bewertung: 4.5,
    empfehlung: "Solide Alternative"
  },
  {
    bank: "DKB",
    zins: "2,50% p.a.",
    mindestanlage: "0 €",
    maximalanlage: "Unbegrenzt",
    freieAbhebungen: "Jederzeit",
    einlagensicherung: "100.000 € (Deutschland)",
    vorteile: [
      "Traditionsbank mit gutem Ruf",
      "Umfangreiches Produktportfolio",
      "Visa-Kreditkarte inklusive",
      "Guter Kundenservice"
    ],
    nachteile: [
      "Zinssatz unter Marktdurchschnitt",
      "Aktivkunden-Status für beste Konditionen"
    ],
    bewertung: 4.4,
    empfehlung: "Für Komplettpaket-Kunden"
  },
  {
    bank: "Consorsbank",
    zins: "2,30% p.a.",
    mindestanlage: "0 €",
    maximalanlage: "Unbegrenzt",
    freieAbhebungen: "Jederzeit",
    einlagensicherung: "100.000 € (Deutschland)",
    vorteile: [
      "Teil der BNP Paribas Gruppe",
      "Kombinierbar mit Depot",
      "Langjährige Erfahrung",
      "Gute Online-Banking Plattform"
    ],
    nachteile: [
      "Zinssatz niedriger als Wettbewerb",
      "Fokus auf Wertpapierkunden"
    ],
    bewertung: 4.3,
    empfehlung: "Für Depot-Kunden"
  }
];

const festgeld = [
  {
    bank: "TF Bank",
    laufzeit: "12 Monate",
    zins: "3,50% p.a.",
    mindestanlage: "5.000 €",
    kommentar: "Höchster Festgeldzins für 1 Jahr"
  },
  {
    bank: "Klarna",
    laufzeit: "6 Monate",
    zins: "3,40% p.a.",
    mindestanlage: "1 €",
    kommentar: "Sehr niedrige Mindesteinlage"
  },
  {
    bank: "Credit Agricole",
    laufzeit: "24 Monate",
    zins: "3,30% p.a.",
    mindestanlage: "5.000 €",
    kommentar: "Attraktiv für mittelfristige Anlage"
  },
  {
    bank: "Renault Bank",
    laufzeit: "36 Monate",
    zins: "3,10% p.a.",
    mindestanlage: "2.500 €",
    kommentar: "Gute Option für längere Bindung"
  }
];

const kundenbewertungen = [
  {
    bank: "Trade Republic",
    name: "Michael S.",
    bewertung: 5,
    kommentar: "Beste Zinsen am Markt und super einfache App. Geld ist jederzeit verfügbar. Nutze es als Notgroschen-Konto."
  },
  {
    bank: "ING",
    name: "Sarah W.",
    bewertung: 5,
    kommentar: "4 Monate 3% Zinsen für Neukunden sind top. Bank ist zuverlässig und der Service antwortet schnell."
  },
  {
    bank: "C24",
    name: "Thomas B.",
    bewertung: 4,
    kommentar: "Gute Alternative zu den großen Banken. Zinsen sind solide und das Banking läuft problemlos."
  }
];

export default function Sparkonto() {
  return (
    <>
      <Helmet>
        <html lang="de" />
        <title>Sparkonto Vergleich 2025: Beste Tagesgeld-Zinsen bis 3,25% | Finanzen Guide</title>
        <meta name="description" content="Sparkonto-Vergleich 2025: Finde die besten Tagesgeld-Zinsen in Deutschland. Trade Republic, ING, DKB & mehr im Test. Bis zu 3,25% Zinsen p.a. + 100.000 € Einlagensicherung." />
        <meta name="keywords" content="sparkonto, tagesgeld vergleich, beste zinsen, trade republic, ing, c24, einlagensicherung, festgeld, sparplan" />
        <link rel="canonical" href="https://finanzen-guide.de/ratgeber/sparkonto" />
        
        <meta property="og:title" content="Sparkonto Vergleich 2025: Bis zu 3,25% Zinsen auf Tagesgeld" />
        <meta property="og:description" content="Die besten Sparkonten in Deutschland im Vergleich. Sichere Zinsen, 100.000 € Einlagensicherung, täglich verfügbar." />
        <meta property="og:url" content="https://finanzen-guide.de/ratgeber/sparkonto" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://finanzen-guide.de/images/og-sparkonto.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sparkonto Vergleich 2025: Die besten Tagesgeld-Zinsen" />
        <meta name="twitter:description" content="5 Top-Sparkonten im Test. Bis zu 3,25% Zinsen + volle Einlagensicherung." />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Sparkonto Vergleich 2025: Beste Tagesgeld-Zinsen bis 3,25%",
          "description": "Umfassender Sparkonto-Vergleich mit den besten Tagesgeld-Zinsen in Deutschland für 2025.",
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
            "@id": "https://finanzen-guide.de/ratgeber/sparkonto"
          }
        })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building2 className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="text-sm">
                Aktualisiert Oktober 2025
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sparkonto Vergleich 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Die besten Sparkonten und Tagesgeld-Angebote in Deutschland im Vergleich. Sichere Zinsen bis 3,25% p.a. mit voller Einlagensicherung bis 100.000 €.
            </p>
          </section>

          {/* Quick Stats */}
          <section className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">3,25%</div>
                <p className="text-sm text-muted-foreground">Höchster Zinssatz</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">100.000 €</div>
                <p className="text-sm text-muted-foreground">Einlagensicherung</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">Trade Republic</div>
                <p className="text-sm text-muted-foreground">Community-Favorit</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Building2 className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">5</div>
                <p className="text-sm text-muted-foreground">Empfohlene Banken</p>
              </CardContent>
            </Card>
          </section>

          {/* Sparkonto Vergleich */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Die 5 Besten Sparkonten im Detail
            </h2>
            
            <div className="space-y-6">
              {sparkonten.map((konto, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">{konto.bank}</CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="text-lg py-1">{konto.zins}</Badge>
                          <Badge variant="secondary">{konto.empfehlung}</Badge>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(konto.bewertung)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-sm text-muted-foreground ml-2">
                            {konto.bewertung}/5.0
                          </span>
                        </div>
                      </div>
                      <Building2 className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Mindestanlage:</span>
                          <span className="font-semibold">{konto.mindestanlage}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Maximalanlage:</span>
                          <span className="font-semibold">{konto.maximalanlage}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Verfügbarkeit:</span>
                          <span className="font-semibold">{konto.freieAbhebungen}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Sicherung:</span>
                          <span className="font-semibold">{konto.einlagensicherung}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <ThumbsUp className="h-4 w-4 text-green-500" />
                            Vorteile
                          </h4>
                          <ul className="space-y-1">
                            {konto.vorteile.map((vorteil, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                {vorteil}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <AlertCircle className="h-4 w-4 text-orange-500" />
                            Nachteile
                          </h4>
                          <ul className="space-y-1">
                            {konto.nachteile.map((nachteil, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-orange-500 mt-0.5">•</span>
                                {nachteil}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <a
                        href={`/ratenkredit`}
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
                      >
                        Zum Anbieter
                      </a>
                      <a
                        href={`/ratenkredit`}
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors"
                      >
                        Details ansehen
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Festgeld Vergleich */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Festgeld: Höhere Zinsen bei Bindung
            </h2>
            
            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Bank</th>
                        <th className="text-left py-3 px-4">Laufzeit</th>
                        <th className="text-left py-3 px-4">Zinssatz</th>
                        <th className="text-left py-3 px-4">Mindestanlage</th>
                        <th className="text-left py-3 px-4">Kommentar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {festgeld.map((anlage, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="py-3 px-4 font-semibold">{anlage.bank}</td>
                          <td className="py-3 px-4">{anlage.laufzeit}</td>
                          <td className="py-3 px-4">
                            <Badge variant="secondary">{anlage.zins}</Badge>
                          </td>
                          <td className="py-3 px-4">{anlage.mindestanlage}</td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{anlage.kommentar}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Kundenbewertungen */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Das sagen unsere Nutzer
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {kundenbewertungen.map((bewertung, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{bewertung.bank}</CardTitle>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < bewertung.bewertung
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3 italic">
                      "{bewertung.kommentar}"
                    </p>
                    <p className="text-xs text-muted-foreground">- {bewertung.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Auswahlhilfe */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Welches Sparkonto passt zu mir?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    Für Zinsjäger
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Du willst die absolut höchsten Zinsen und bist bereit, regelmäßig zu wechseln.
                  </p>
                  <div className="space-y-2">
                    <div className="font-semibold">Empfehlung: Trade Republic</div>
                    <p className="text-sm text-muted-foreground">
                      Aktuell 3,25% Zinsen, keine Mindesteinlage, täglich verfügbar.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                    Für Sicherheitsliebhaber
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Dir ist eine etablierte Bank mit langjähriger Erfahrung wichtig.
                  </p>
                  <div className="space-y-2">
                    <div className="font-semibold">Empfehlung: ING oder DKB</div>
                    <p className="text-sm text-muted-foreground">
                      Traditionsbanken mit solidem Ruf und umfassendem Service.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-purple-500" />
                    Für Komplettpaket-Fans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Du möchtest Girokonto, Kreditkarte und Sparkonto aus einer Hand.
                  </p>
                  <div className="space-y-2">
                    <div className="font-semibold">Empfehlung: DKB oder ING</div>
                    <p className="text-sm text-muted-foreground">
                      Umfassendes Banking-Angebot mit allen Produkten kombinierbar.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-orange-500" />
                    Für Neulinge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Du bist neu beim Thema Sparen und willst einen einfachen Einstieg.
                  </p>
                  <div className="space-y-2">
                    <div className="font-semibold">Empfehlung: C24 oder Trade Republic</div>
                    <p className="text-sm text-muted-foreground">
                      Intuitive Apps, keine Mindesteinlage, schnelle Kontoeröffnung.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Risikohinweis */}
          <section className="mb-12">
            <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-orange-600" />
                  Wichtige Hinweise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <strong>Einlagensicherung:</strong> In Deutschland sind Einlagen bis 100.000 € pro Bank und Kunde durch die gesetzliche Einlagensicherung geschützt. Bei höheren Beträgen auf mehrere Banken verteilen.
                </div>
                <div>
                  <strong>Zinssatzänderungen:</strong> Tagesgeld-Zinsen können sich jederzeit ändern. Festgeld bietet garantierte Zinsen für die vereinbarte Laufzeit.
                </div>
                <div>
                  <strong>Steuerliche Behandlung:</strong> Zinserträge sind einkommensteuerpflichtig. Nutze den Sparerpauschbetrag von 1.000 € (Singles) bzw. 2.000 € (Paare) durch Freistellungsauftrag.
                </div>
                <div>
                  <strong>Inflation:</strong> Bei einer Inflationsrate von 3% verliert Geld real an Wert, wenn die Zinsen niedriger sind. Für langfristiges Vermögen sollten auch andere Anlageformen (ETFs, Aktien) in Betracht gezogen werden.
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Expert Profile */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Unsere Spar-Expertin
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <ExpertProfile 
                name="Julia Schneider"
                title="Spar- und Anlageberaterin"
                experience="9 Jahre Erfahrung in Bankberatung und Vermögensaufbau"
                specialization={[
                  "Tagesgeld & Festgeld Optimierung",
                  "Einlagensicherung",
                  "Zinsvergleiche",
                  "Steueroptimierung für Sparer"
                ]}
                credentials={[
                  "Bankfachwirtin (IHK)",
                  "Zertifizierte Anlageberaterin",
                  "Über 2.000 beratene Sparkunden",
                  "Regelmäßige Autorin bei Finanztip"
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
                  Starte Jetzt Mit Deinem Sparkonto
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Vergleiche die besten Angebote und finde das perfekte Sparkonto für deine Bedürfnisse.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/ratenkredit" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                    Jetzt Vergleichen
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
