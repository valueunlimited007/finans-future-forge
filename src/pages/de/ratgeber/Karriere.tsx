import { Helmet } from "react-helmet-async";
import NavigationDE from "@/components/de/NavigationDE";
import FooterDE from "@/components/de/FooterDE";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExpertProfile from "@/components/ExpertProfile";
import { TrendingUp, Briefcase, GraduationCap, Target, Users, Calculator, CheckCircle2 } from "lucide-react";

const ausbildungswege = [
  {
    typ: "Technische Berufe",
    icon: Calculator,
    wege: [
      {
        name: "Informatik / IT",
        beschreibung: "Software-Entwicklung, KI, Cloud Computing",
        einstieg: "45.000 - 55.000 €",
        senior: "70.000 - 100.000+ €",
        top: "100.000 - 150.000+ € (Principal Engineer, CTO)"
      },
      {
        name: "Maschinenbau / Ingenieurwesen",
        beschreibung: "Automotive, Automatisierung, Robotik",
        einstieg: "48.000 - 56.000 €",
        senior: "65.000 - 90.000 €",
        top: "90.000 - 130.000 € (Abteilungsleiter)"
      },
      {
        name: "Elektrotechnik",
        beschreibung: "Energietechnik, Elektronik, Embedded Systems",
        einstieg: "46.000 - 54.000 €",
        senior: "63.000 - 85.000 €",
        top: "85.000 - 120.000 € (Lead Engineer)"
      }
    ]
  },
  {
    typ: "Wirtschaft & Finanzen",
    icon: TrendingUp,
    wege: [
      {
        name: "BWL / Management",
        beschreibung: "Consulting, Projektmanagement, Strategie",
        einstieg: "42.000 - 50.000 €",
        senior: "70.000 - 100.000 €",
        top: "100.000 - 180.000+ € (Partner, Geschäftsführer)"
      },
      {
        name: "Finance / Banking",
        beschreibung: "Investment Banking, Vermögensverwaltung",
        einstieg: "50.000 - 65.000 €",
        senior: "80.000 - 120.000 €",
        top: "120.000 - 250.000+ € (Director, Managing Partner)"
      },
      {
        name: "Wirtschaftsinformatik",
        beschreibung: "IT-Consulting, Digitalisierung, SAP",
        einstieg: "46.000 - 55.000 €",
        senior: "68.000 - 95.000 €",
        top: "95.000 - 140.000 € (IT-Direktor)"
      }
    ]
  },
  {
    typ: "Medizin & Pharma",
    icon: Users,
    wege: [
      {
        name: "Facharzt (Spezialisten)",
        beschreibung: "Radiologie, Anästhesie, Chirurgie",
        einstieg: "60.000 - 75.000 €",
        senior: "85.000 - 110.000 €",
        top: "110.000 - 200.000+ € (Chefarzt, eigene Praxis)"
      },
      {
        name: "Pharmazie / Medizintechnik",
        beschreibung: "Forschung, Produktmanagement",
        einstieg: "50.000 - 60.000 €",
        senior: "70.000 - 95.000 €",
        top: "95.000 - 140.000 € (Abteilungsleiter)"
      }
    ]
  }
];

const strategien = [
  {
    titel: "Regelmäßige Jobwechsel",
    beschreibung: "Alle 3-5 Jahre den Arbeitgeber wechseln führt zu durchschnittlich 10-20% Gehaltssteigerung pro Wechsel.",
    wirkung: "+10-20% pro Wechsel",
    tipps: ["Externe Angebote als Verhandlungsbasis", "Marktwert regelmäßig prüfen", "LinkedIn aktiv nutzen"]
  },
  {
    titel: "Kontinuierliche Weiterbildung",
    beschreibung: "Investiere in Zertifizierungen und Fortbildungen. Arbeitgeber zahlen oft 80-100% der Kosten.",
    wirkung: "+15-30% langfristig",
    tipps: ["Cloud-Zertifikate (AWS, Azure, GCP)", "Agile/Scrum Master", "Fachspezifische Qualifikationen"]
  },
  {
    titel: "Führungsverantwortung übernehmen",
    beschreibung: "Der Wechsel von Fachexperte zu Führungskraft öffnet höhere Gehaltsstufen.",
    wirkung: "+20-40%",
    tipps: ["Klein anfangen (Team Lead)", "Management-Schulungen", "Soft Skills entwickeln"]
  },
  {
    titel: "In Wachstumsbranchen wechseln",
    beschreibung: "IT, Erneuerbare Energien, KI und Cybersecurity zahlen überdurchschnittlich.",
    wirkung: "+15-35%",
    tipps: ["Tech-Skills aufbauen", "Start-ups und Scale-ups berücksichtigen", "Remote-Jobs erwägen"]
  }
];

const branchen = [
  { name: "IT & Software", durchschnitt: "58.000 - 85.000 €", top: "120.000+ €", wachstum: "Sehr hoch" },
  { name: "Automotive", durchschnitt: "52.000 - 75.000 €", top: "110.000+ €", wachstum: "Mittel" },
  { name: "Pharma & Chemie", durchschnitt: "55.000 - 78.000 €", top: "115.000+ €", wachstum: "Hoch" },
  { name: "Maschinenbau", durchschnitt: "50.000 - 72.000 €", top: "105.000+ €", wachstum: "Mittel" },
  { name: "Finanzdienstleistungen", durchschnitt: "54.000 - 82.000 €", top: "140.000+ €", wachstum: "Hoch" },
  { name: "Beratung/Consulting", durchschnitt: "56.000 - 88.000 €", top: "150.000+ €", wachstum: "Sehr hoch" }
];

export default function Karriere() {
  return (
    <>
      <Helmet>
        <html lang="de" />
        <title>Karriere Guide 2025: Wie erreicht man 100.000 € Jahresgehalt? | Finanzen Guide</title>
        <meta name="description" content="Konkrete Strategien für 100.000+ € Jahresgehalt in Deutschland. Welche Ausbildungen, Branchen und Karrierewege führen zu Top-Gehältern? Expertentipps und echte Beispiele." />
        <meta name="keywords" content="karriere, 100k gehalt, gehaltserhöhung, jobwechsel, ausbildungswege, top gehälter deutschland, karrieretipps" />
        <link rel="canonical" href="https://finanzen-guide.de/ratgeber/karriere" />
        
        <meta property="og:title" content="Karriere Guide 2025: So erreichen Sie 100.000 € Jahresgehalt" />
        <meta property="og:description" content="Entdecken Sie die konkreten Strategien für Top-Gehälter in Deutschland. Von Ausbildung bis Führungsposition." />
        <meta property="og:url" content="https://finanzen-guide.de/ratgeber/karriere" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://finanzen-guide.de/images/og-karriere.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Karriere Guide: 100.000 € Gehalt erreichen" />
        <meta name="twitter:description" content="Konkrete Strategien für Top-Gehälter in Deutschland." />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Karriere Guide 2025: Wie erreicht man 100.000 € Jahresgehalt?",
          "description": "Konkrete Strategien für 100.000+ € Jahresgehalt in Deutschland.",
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
            "@id": "https://finanzen-guide.de/ratgeber/karriere"
          }
        })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="text-sm">
                Karriere Guide 2025
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wie erreicht man 100.000 € im Jahr?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Konkrete Strategien, Ausbildungswege und Karrieretipps von echten Experten, die das Ziel erreicht haben. Erfahre, was wirklich nötig ist, um 100k+ zu verdienen.
            </p>
          </section>

          {/* Success Metrics */}
          <section className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">10-15 Jahre</div>
                <p className="text-sm text-muted-foreground">Durchschnittliche Dauer</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Briefcase className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">3-5x</div>
                <p className="text-sm text-muted-foreground">Arbeitgeberwechsel nötig</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">~8%</div>
                <p className="text-sm text-muted-foreground">Der Arbeitnehmer verdienen 100k+</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">78%</div>
                <p className="text-sm text-muted-foreground">Haben Hochschulabschluss</p>
              </CardContent>
            </Card>
          </section>

          {/* Ausbildungswege */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Ausbildungswege zu Top-Gehältern
            </h2>
            
            <div className="space-y-8">
              {ausbildungswege.map((kategorie, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <kategorie.icon className="h-6 w-6 text-primary" />
                      {kategorie.typ}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {kategorie.wege.map((weg, i) => (
                        <Card key={i} className="border-2">
                          <CardContent className="p-4">
                            <h4 className="font-bold text-lg mb-2">{weg.name}</h4>
                            <p className="text-sm text-muted-foreground mb-4">{weg.beschreibung}</p>
                            
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Einstieg:</span>
                                <span className="font-semibold">{weg.einstieg}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Senior:</span>
                                <span className="font-semibold">{weg.senior}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Top:</span>
                                <span className="font-semibold text-green-600">{weg.top}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Karrierestrategien */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              4 Bewährte Karrierestrategien
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {strategien.map((strategie, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{strategie.titel}</CardTitle>
                      <Badge className="bg-green-500">{strategie.wirkung}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{strategie.beschreibung}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Konkrete Tipps:</h4>
                      <ul className="space-y-1">
                        {strategie.tipps.map((tipp, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{tipp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Branchen-Übersicht */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Top-Branchen in Deutschland
            </h2>
            
            <Card>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Branche</th>
                        <th className="text-left py-3 px-4">Durchschnitt</th>
                        <th className="text-left py-3 px-4">Top-Gehälter</th>
                        <th className="text-left py-3 px-4">Wachstum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {branchen.map((branche, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="py-3 px-4 font-semibold">{branche.name}</td>
                          <td className="py-3 px-4">{branche.durchschnitt}</td>
                          <td className="py-3 px-4">
                            <Badge variant="default" className="bg-green-500">{branche.top}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge 
                              variant={branche.wachstum === 'Sehr hoch' ? 'default' : 'secondary'}
                              className={branche.wachstum === 'Sehr hoch' ? 'bg-green-500' : ''}
                            >
                              {branche.wachstum}
                            </Badge>
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
              Unser Karriere-Experte
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <ExpertProfile 
                name="Dr. Stefan Müller"
                title="Karriereberater & Executive Coach"
                experience="15 Jahre Erfahrung in Karriereberatung und Recruiting"
                specialization={[
                  "Gehaltsverhandlungen",
                  "Karriereplanung",
                  "Executive Search",
                  "Branchenwechsel"
                ]}
                credentials={[
                  "Diplom-Psychologe & Business Coach",
                  "3.000+ erfolgreiche Karriereberatungen",
                  "Ehemaliger HR-Director bei DAX-Konzern",
                  "Autor: 'Der Weg zur 100k' (2024)"
                ]}
                image="expert"
              />
            </div>
          </section>

          {/* 3-Jahres-Plan */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              3-Jahres-Aktionsplan
            </h2>
            
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      1
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-3">Jahr 1: Fundament</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Skills-Audit durchführen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Erste Zertifizierung anstreben</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Marktwert analysieren</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Netzwerk aufbauen</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="w-14 h-14 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      2
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-3">Jahr 2: Wachstum</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Führungsverantwortung übernehmen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Externe Angebote einholen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Gehaltsverhandlung führen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Weiterbildung abschließen</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      3
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-3">Jahr 3: Durchbruch</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Jobwechsel zu Top-Gehalt</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Führungsposition erreichen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>100k+ Gehalt verhandeln</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Langfristige Karriereplanung</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-green-50 dark:bg-green-950/20 rounded-lg text-center">
                  <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2">
                    Erwartetes Ergebnis nach 3 Jahren
                  </h4>
                  <div className="text-3xl font-bold text-green-600">
                    Gehaltssteigerung von 30-60%
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-500 mt-2">
                    Basierend auf Durchschnittswerten erfolgreicher Karrierewechsel
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Starte Deine Karriere-Transformation
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nutze unsere Ratgeber und Tools, um deine Karriere auf das nächste Level zu bringen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/ratgeber/gehaltsoptimierung" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                    Gehaltsoptimierung
                  </a>
                  <a href="/ratgeber/deutsche-einkommen" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors">
                    Gehaltsvergleich
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
