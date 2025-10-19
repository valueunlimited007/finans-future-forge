import { Helmet } from "react-helmet-async";
import NavigationDE from "@/components/de/NavigationDE";
import FooterDE from "@/components/de/FooterDE";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExpertProfile from "@/components/ExpertProfile";
import { TrendingUp, Euro, Calendar, Award, Target, CheckCircle2, Briefcase, GraduationCap } from "lucide-react";

const strategien = [
  {
    name: "Firmenwagen",
    jahrlichErsparnis: "3.600 - 7.200 €",
    schwierigkeit: "Mittel",
    beschreibung: "Steuervorteil durch Dienstwagen mit 1%-Regelung. Alle Kosten (Benzin, Versicherung, Wartung) werden vom Arbeitgeber getragen.",
    umsetzung: [
      "Beim Arbeitgeber nach Firmenwagen-Optionen fragen",
      "Steuerliche Auswirkungen mit Steuerberater besprechen",
      "Angebot mit Gehaltsalternativen vergleichen",
      "Bei Verhandlung Bruttogehaltsverzicht einkalkulieren"
    ],
    steuerVorteil: "1% des Bruttolistenpreises pro Monat als geldwerter Vorteil, deutlich günstiger als eigener Pkw"
  },
  {
    name: "Betriebliche Altersvorsorge",
    jahrlichErsparnis: "2.400 - 6.000 €",
    schwierigkeit: "Leicht",
    beschreibung: "Arbeitgeberzuschuss zur Altersvorsorge nutzen. Seit 2022 mindestens 15% Zuschuss verpflichtend.",
    umsetzung: [
      "Bei HR nach betrieblicher Altersvorsorge (bAV) fragen",
      "Maximalen Arbeitgeberzuschuss ermitteln",
      "Steuerfreie Einzahlungsgrenzen ausschöpfen (bis 584 € mtl. 2025)",
      "Vertragsdetails prüfen und optimieren"
    ],
    steuerVorteil: "Steuer- und sozialabgabenfrei bis 7.008 € jährlich (2025)"
  },
  {
    name: "Jobticket / Deutschlandticket",
    jahrlichErsparnis: "600 - 1.800 €",
    schwierigkeit: "Leicht",
    beschreibung: "Arbeitgeber bezahlt oder bezuschusst das Deutschlandticket (49 €/Monat). Steuerfrei als Sachbezug möglich.",
    umsetzung: [
      "Beim Arbeitgeber nach Jobticket-Programm fragen",
      "Deutschlandticket-Bezuschussung beantragen",
      "Steuerfreie Zusatzleistung prüfen",
      "Eigene Fahrtkosten komplett einsparen"
    ],
    steuerVorteil: "Bis 50 € monatlich steuerfrei als Sachbezug möglich"
  },
  {
    name: "Homeoffice-Pauschale",
    jahrlichErsparnis: "600 - 1.260 €",
    schwierigkeit: "Leicht",
    beschreibung: "6 € pro Homeoffice-Tag steuerlich absetzbar (max. 210 Tage = 1.260 € jährlich).",
    umsetzung: [
      "Homeoffice-Tage dokumentieren (Kalender/Liste)",
      "In Steuererklärung als Werbungskosten angeben",
      "Alternativ: Arbeitszimmer komplett absetzen wenn möglich",
      "Arbeitgeberbescheinigung über Homeoffice-Regelung einholen"
    ],
    steuerVorteil: "Reduziert zu versteuerndes Einkommen um bis zu 1.260 € jährlich"
  },
  {
    name: "Essenszuschuss",
    jahrlichErsparnis: "600 - 1.800 €",
    schwierigkeit: "Leicht",
    beschreibung: "Arbeitgeber kann täglich 7,23 € (2025) steuerfrei für Mahlzeiten zuschießen.",
    umsetzung: [
      "Nach Essensgutscheinen oder digitalen Lunch-Cards fragen",
      "Pluxee, Sodexo oder ähnliche Programme nutzen",
      "Bei jedem Arbeitstag maximalen Betrag ausschöpfen",
      "In Supermärkten und Restaurants verwenden"
    ],
    steuerVorteil: "Bis 7,23 € pro Arbeitstag steuerfrei (ca. 1.808 € jährlich bei 250 Arbeitstagen)"
  },
  {
    name: "Fahrradleasing (Dienstrad)",
    jahrlichErsparnis: "800 - 2.000 €",
    schwierigkeit: "Mittel",
    beschreibung: "E-Bike oder Fahrrad über Gehaltsumwandlung leasen. Arbeitgeber zahlt, Sie sparen Steuern.",
    umsetzung: [
      "Arbeitgeber nach JobRad oder Lease a Bike fragen",
      "Wunsch-Fahrrad beim Händler aussuchen",
      "Gehaltsumwandlung vereinbaren (0,25% Listenpreis/Monat)",
      "Nach 36 Monaten günstig übernehmen"
    ],
    steuerVorteil: "Nur 0,25% des Listenpreises monatlich als geldwerter Vorteil statt Vollpreis"
  },
  {
    name: "Betriebliche Krankenversicherung",
    jahrlichErsparnis: "400 - 1.200 €",
    schwierigkeit: "Mittel",
    beschreibung: "Zusatzversicherung für Zahnersatz, Brille, Heilpraktiker durch Arbeitgeber finanziert.",
    umsetzung: [
      "Bei HR nach betrieblicher Krankenversicherung (bKV) fragen",
      "Leistungsumfang prüfen (Zahnzusatz, Sehhilfen, etc.)",
      "Mit privater Zusatzversicherung vergleichen",
      "Als Teil des Gehaltspakets verhandeln"
    ],
    steuerVorteil: "Steuerfrei bis 50 € monatlich als Sachbezug (600 € jährlich)"
  },
  {
    name: "Weiterbildung & Fortbildungen",
    jahrlichErsparnis: "1.000 - 5.000 €",
    schwierigkeit: "Mittel",
    beschreibung: "Arbeitgeber finanziert berufliche Weiterbildungen steuerfrei. Erhöht gleichzeitig Marktwert.",
    umsetzung: [
      "Relevante Zertifikate und Kurse identifizieren",
      "Business Case für Arbeitgeber erstellen",
      "Kostenübernahme verhandeln (100% oder Teilfinanzierung)",
      "Online-Kurse, Konferenzen, Zertifizierungen nutzen"
    ],
    steuerVorteil: "Vollständig steuerfrei + erhöht langfristiges Gehaltspotenzial"
  }
];

const verhandlungsTipps = [
  {
    titel: "Dokumentiere Erfolge kontinuierlich",
    beschreibung: "Führe ein 'Erfolgs-Journal' mit messbaren Resultaten, übernommener Verantwortung und positiven Feedbacks. Nutze dies als konkrete Argumente.",
    beispiel: "Projekt X führte zu 15% Kosteneinsparung, Team-Lead für Initiative Y, Kundenzufriedenheit um 20% gesteigert"
  },
  {
    titel: "Recherchiere Marktgehälter gründlich",
    beschreibung: "Nutze Gehaltsdatenbanken wie Stepstone Gehaltsreport, Kununu, Glassdoor. Kenne deinen Marktwert nach Position, Branche und Region.",
    beispiel: "Senior Developer in München: 65.000-85.000 € (Median 72.000 €)"
  },
  {
    titel: "Timing ist entscheidend",
    beschreibung: "Verhandle nach großen Erfolgen, bei Jahresgesprächen oder bei Jobangeboten. Vermeide stressige Phasen.",
    beispiel: "2 Wochen nach erfolgreichem Projektabschluss oder vor Budget-Freigabe"
  },
  {
    titel: "Verhandle Gesamtpaket, nicht nur Gehalt",
    beschreibung: "Nutze alle Hebel: Homeoffice-Tage, Weiterbildungsbudget, Bonusvereinbarungen, Extra-Urlaubstage, flexible Arbeitszeiten.",
    beispiel: "Statt +3.000 € Brutto: +1.500 € + 2 Tage Homeoffice + 1.000 € Weiterbildungsbudget"
  }
];

const karriereStufen = [
  {
    level: "Junior",
    zeitraum: "0-3 Jahre",
    gehalt: "42.000 - 52.000 €",
    massnahmen: [
      "Zertifizierungen erwerben (AWS, Google, PMP etc.)",
      "Erste Führungsaufgaben übernehmen",
      "Netzwerk aufbauen (LinkedIn, XING, Events)",
      "Mentor finden innerhalb/außerhalb Firma"
    ],
    gehaltsSteigerung: "+15-25%"
  },
  {
    level: "Professional/Senior",
    zeitraum: "3-7 Jahre",
    gehalt: "55.000 - 75.000 €",
    massnahmen: [
      "Spezialisierung in gefragtem Bereich",
      "Erste Management-Verantwortung",
      "Sichtbarkeit erhöhen (Vorträge, Artikel)",
      "Regelmäßiger Marktvergleich"
    ],
    gehaltsSteigerung: "+20-30%"
  },
  {
    level: "Lead/Expert",
    zeitraum: "7-12 Jahre",
    gehalt: "70.000 - 95.000 €",
    massnahmen: [
      "Team Lead oder Tech Lead Position",
      "Strategische Projekte leiten",
      "Executive Presence entwickeln",
      "Externe Angebote als Verhandlungsbasis"
    ],
    gehaltsSteigerung: "+25-40%"
  },
  {
    level: "Manager/Principal",
    zeitraum: "12+ Jahre",
    gehalt: "90.000 - 130.000+ €",
    massnahmen: [
      "Abteilungsverantwortung übernehmen",
      "Unternehmensweite Initiativen führen",
      "C-Level Kontakte aufbauen",
      "Verhandlung mit Bonus-Komponenten"
    ],
    gehaltsSteigerung: "+30-50%"
  }
];

export default function Gehaltsoptimierung() {
  return (
    <>
      <Helmet>
        <html lang="de" />
        <title>Gehaltsoptimierung 2025: Mehr Netto durch Steuervorteile & Zusatzleistungen</title>
        <meta name="description" content="Praktische Strategien zur Gehaltsoptimierung in Deutschland. Nutze Steuervorteile wie Firmenwagen, bAV, Jobticket und spare bis zu 15.000 € jährlich." />
        <meta name="keywords" content="gehaltsoptimierung, steuervorteile arbeitnehmer, firmenwagen, betriebliche altersvorsorge, jobticket, dienstrad, gehaltsverhandlung, mehr netto vom brutto" />
        <link rel="canonical" href="https://finanzen-guide.de/ratgeber/gehaltsoptimierung" />
        
        <meta property="og:title" content="Gehaltsoptimierung 2025: Bis zu 15.000 € mehr durch Steuervorteile" />
        <meta property="og:description" content="Entdecke 8 bewährte Strategien zur Gehaltsoptimierung. Von Firmenwagen bis bAV - spare tausende Euro durch clevere Zusatzleistungen." />
        <meta property="og:url" content="https://finanzen-guide.de/ratgeber/gehaltsoptimierung" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://finanzen-guide.de/images/og-gehaltsoptimierung.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gehaltsoptimierung 2025: Steuervorteile clever nutzen" />
        <meta name="twitter:description" content="8 bewährte Strategien für mehr Netto. Firmenwagen, bAV, Jobticket & mehr." />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Gehaltsoptimierung 2025: Mehr Netto durch Steuervorteile & Zusatzleistungen",
          "description": "Praktische Strategien zur Gehaltsoptimierung in Deutschland durch clevere Nutzung von Steuervorteilen.",
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
            "@id": "https://finanzen-guide.de/ratgeber/gehaltsoptimierung"
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
                Aktualisiert 2025
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Gehaltsoptimierung 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Nutze steuerliche Vorteile und Zusatzleistungen, um dein Nettogehalt zu maximieren. Spare bis zu 15.000 € jährlich durch clevere Gehaltsgestaltung.
            </p>
          </section>

          {/* Quick Impact Stats */}
          <section className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Euro className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">5.000-15.000 €</div>
                <p className="text-sm text-muted-foreground">Jährliche Ersparnis</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">8</div>
                <p className="text-sm text-muted-foreground">Optimierungsstrategien</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle2 className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">Leicht-Mittel</div>
                <p className="text-sm text-muted-foreground">Umsetzungsschwierigkeit</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">2-4 Wochen</div>
                <p className="text-sm text-muted-foreground">Bis zur Umsetzung</p>
              </CardContent>
            </Card>
          </section>

          {/* Optimierungsstrategien */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              8 Bewährte Gehaltsoptimierungs-Strategien
            </h2>
            
            <div className="space-y-6">
              {strategien.map((strategie, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{strategie.name}</CardTitle>
                        <CardDescription className="text-base">
                          {strategie.beschreibung}
                        </CardDescription>
                      </div>
                      <Badge 
                        variant={strategie.schwierigkeit === 'Leicht' ? 'default' : 'secondary'}
                        className="ml-4"
                      >
                        {strategie.schwierigkeit}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="mb-4 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <div className="text-sm font-medium text-muted-foreground mb-1">
                            Jährliche Ersparnis
                          </div>
                          <div className="text-2xl font-bold text-green-600">
                            {strategie.jahrlichErsparnis}
                          </div>
                        </div>
                        
                        <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                          <div className="text-sm font-medium text-muted-foreground mb-2">
                            Steuervorteil
                          </div>
                          <p className="text-sm text-blue-700 dark:text-blue-400">
                            {strategie.steuerVorteil}
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Umsetzungsschritte:</h4>
                        <ol className="space-y-2">
                          {strategie.umsetzung.map((schritt, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-semibold">
                                {i + 1}
                              </span>
                              <span className="text-muted-foreground">{schritt}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Verhandlungstipps */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Gehaltsverhandlung: 4 Goldene Regeln
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {verhandlungsTipps.map((tipp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      {tipp.titel}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{tipp.beschreibung}</p>
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <p className="text-sm font-medium">Beispiel:</p>
                      <p className="text-sm text-muted-foreground italic mt-1">
                        {tipp.beispiel}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Karrierepfad */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Langfristiger Karriere-Entwicklungspfad
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-6">
              {karriereStufen.map((stufe, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {index === 0 && <GraduationCap className="h-5 w-5 text-blue-500" />}
                      {index === 1 && <Briefcase className="h-5 w-5 text-green-500" />}
                      {index === 2 && <Target className="h-5 w-5 text-purple-500" />}
                      {index === 3 && <Award className="h-5 w-5 text-orange-500" />}
                      <CardTitle className="text-lg">{stufe.level}</CardTitle>
                    </div>
                    <Badge variant="outline">{stufe.zeitraum}</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 p-3 bg-primary/5 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">Gehaltsspanne</div>
                      <div className="text-lg font-bold text-primary">{stufe.gehalt}</div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Schlüsselmaßnahmen:</h4>
                      <ul className="space-y-1.5">
                        {stufe.massnahmen.map((massnahme, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                            <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{massnahme}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="p-2 bg-green-50 dark:bg-green-950/20 rounded text-center">
                      <div className="text-xs text-muted-foreground">Potenzielle Steigerung</div>
                      <div className="text-sm font-bold text-green-600">{stufe.gehaltsSteigerung}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Expert Profile */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Unser Gehalts-Experte
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <ExpertProfile 
                name="Dr. Michael Weber"
                title="Karriereberater & Gehaltsverhandlungs-Experte"
                experience="12 Jahre Erfahrung in Personal- und Karriereberatung"
                specialization={[
                  "Gehaltsverhandlungen",
                  "Steueroptimierung für Arbeitnehmer",
                  "Karriereplanung",
                  "Zusatzleistungs-Pakete"
                ]}
                credentials={[
                  "Diplom-Betriebswirt mit Schwerpunkt Personal",
                  "5.000+ erfolgreiche Gehaltsverhandlungen begleitet",
                  "Autor: 'Mehr Netto vom Brutto' (2023)",
                  "Regelmäßiger Experte bei Handelsblatt und ZEIT"
                ]}
                image="expert"
              />
            </div>
          </section>

          {/* 90-Tage Aktionsplan */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              90-Tage Gehaltsoptimierungs-Plan
            </h2>
            
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      1
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-3">Monat 1: Analyse</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Aktuelles Gehalt & Benefits dokumentieren</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Marktgehälter recherchieren</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Erfolge der letzten 12 Monate sammeln</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Gespräch mit HR über verfügbare Benefits</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="w-14 h-14 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      2
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-3">Monat 2: Vorbereitung</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Verhandlungsstrategie entwickeln</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Konkrete Zahlen & Argumente vorbereiten</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Alternative Benefits identifizieren</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Übungsgespräche mit Freunden/Coach</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      3
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-3">Monat 3: Umsetzung</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Gehaltsgespräch führen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Benefits-Pakete verhandeln</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Neue Vereinbarungen schriftlich festhalten</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Steuerliche Optimierungen umsetzen</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-green-50 dark:bg-green-950/20 rounded-lg text-center">
                  <h4 className="font-semibold text-green-800 dark:text-green-400 mb-2">
                    Erwartetes Ergebnis nach 90 Tagen
                  </h4>
                  <div className="text-3xl font-bold text-green-600">
                    5.000 - 15.000 € mehr netto pro Jahr
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-500 mt-2">
                    Durch Kombination von Gehaltserhöhung und steueroptimierten Zusatzleistungen
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
                  Optimiere Jetzt Dein Gehalt
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nutze unsere Ratgeber und Vergleiche, um das Beste aus deinem Einkommen herauszuholen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/ratgeber/deutsche-einkommen" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                    Gehaltsvergleich
                  </a>
                  <a href="/ratenkredit" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors">
                    Kredite Vergleichen
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
