import { Helmet } from "react-helmet-async";
import NavigationDE from "@/components/de/NavigationDE";
import FooterDE from "@/components/de/FooterDE";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExpertProfile from "@/components/ExpertProfile";
import { Building2, Star, CheckCircle2, X, TrendingUp, Shield, CreditCard, Euro } from "lucide-react";

const banken = [
  {
    name: "DKB (Deutsche Kreditbank)",
    typ: "Direktbank",
    bewertung: 4.6,
    staerken: ["Kostenloses Girokonto", "Weltweit kostenlos Geld abheben", "Gute Visa-Karte"],
    schwaechen: ["Aktivkunden-Status für beste Konditionen", "Kein Filialnetz"],
    geeignetFuer: "Digitale Nutzer & Reisende",
    gebuehren: {
      konto: "0 €/Monat",
      karte: "0 €/Jahr",
      ausland: "0 € (Aktivkunden)"
    }
  },
  {
    name: "ING",
    typ: "Direktbank",
    bewertung: 4.5,
    staerken: ["Sehr gute App", "Kostenlos ab 700 € Geldeingang", "Apple/Google Pay"],
    schwaechen: ["Bargeldabhebung ab 50 €", "Eingeschränkte Bargeldeinzahlung"],
    geeignetFuer: "App-affine Nutzer",
    gebuehren: {
      konto: "0 €/Monat (ab 700 €)",
      karte: "0 €/Jahr",
      ausland: "Gebührenfrei (Euro-Raum)"
    }
  },
  {
    name: "Commerzbank",
    typ: "Filialbank",
    bewertung: 4.1,
    staerken: ["Viele Filialen", "Persönliche Beratung", "Cash-Group ATMs"],
    schwaechen: ["Kontoführungsgebühren", "Höhere Kosten"],
    geeignetFuer: "Kunden mit Beratungsbedarf",
    gebuehren: {
      konto: "9,90 €/Monat (kostenfrei bei 700 € Gehaltseingang)",
      karte: "0 €/Jahr",
      ausland: "1,75% Fremdwährung"
    }
  },
  {
    name: "Sparkasse",
    typ: "Regional",
    bewertung: 4.0,
    staerken: ["Flächendeckendes Filialnetz", "Viele Geldautomaten", "Lokale Präsenz"],
    schwaechen: ["Höchste Gebühren", "Konditionen variieren regional"],
    geeignetFuer: "Traditionelle Bankkunden",
    gebuehren: {
      konto: "5-12 €/Monat",
      karte: "15-30 €/Jahr",
      ausland: "1-2% Fremdwährung"
    }
  },
  {
    name: "N26",
    typ: "Smartphone-Bank",
    bewertung: 4.3,
    staerken: ["100% mobil", "Moderne Features", "Schnelle Kontoeröffnung"],
    schwaechen: ["Kein deutscher Einlagenschutz", "Bargeldabhebung begrenzt"],
    geeignetFuer: "Digital Natives",
    gebuehren: {
      konto: "0 €/Monat (Basis)",
      karte: "0 €/Jahr",
      ausland: "3 Abhebungen/Monat frei"
    }
  },
  {
    name: "Comdirect",
    typ: "Direktbank",
    bewertung: 4.4,
    staerken: ["Starkes Depot-Angebot", "Gute Trading-Plattform", "Cash-Group"],
    schwaechen: ["Kontoführung kostenpflichtig ohne Aktivität", "Komplexe Gebührenstruktur"],
    geeignetFuer: "Anleger & Trader",
    gebuehren: {
      konto: "4,90 €/Monat (kostenfrei bei Aktivität)",
      karte: "0 €/Jahr",
      ausland: "Gebührenfrei (Cash-Group)"
    }
  }
];

const kategorien = [
  {
    bereich: "Kostenloses Girokonto",
    gewinner: "DKB",
    details: "Bedingungslos kostenlos",
    zweitplatziert: ["ING: ab 700 € Geldeingang", "N26: Basis kostenlos"]
  },
  {
    bereich: "Beste Konditionen im Ausland",
    gewinner: "DKB",
    details: "Weltweit kostenlos Geld abheben",
    zweitplatziert: ["ING: Euro-Raum kostenfrei", "N26: 5 Abhebungen/Monat"]
  },
  {
    bereich: "Beste App",
    gewinner: "ING",
    details: "Sehr intuitive Bedienung",
    zweitplatziert: ["N26: Modern & schnell", "DKB: Solide App"]
  },
  {
    bereich: "Bestes für Anleger",
    gewinner: "Comdirect",
    details: "Umfangreiches Depot",
    zweitplatziert: ["ING: Gutes Depot", "DKB: Solide Konditionen"]
  },
  {
    bereich: "Filialnetz",
    gewinner: "Sparkasse",
    details: "Flächendeckend in Deutschland",
    zweitplatziert: ["Commerzbank: Cash-Group", "Volksbank: BankCard ServiceNetz"]
  }
];

export default function BankenVergleich() {
  return (
    <>
      <Helmet>
        <html lang="de" />
        <title>Banken-Vergleich 2025: Beste Banken für Girokonto & Kreditkarte | Finanzen Guide</title>
        <meta name="description" content="Unabhängiger Banken-Vergleich 2025: DKB, ING, Commerzbank & mehr. Gebühren, Leistungen, Konditionen - finde die beste Bank für deine Bedürfnisse." />
        <meta name="keywords" content="banken vergleich, kostenloses girokonto, beste bank deutschland, dkb, ing, commerzbank, sparkasse, kreditkarte kostenlos" />
        <link rel="canonical" href="https://finanzen-guide.de/ratgeber/banken-vergleich" />
        
        <meta property="og:title" content="Banken-Vergleich 2025: Die besten Banken im Test" />
        <meta property="og:description" content="Welche Bank bietet die besten Konditionen? Umfassender Vergleich aller wichtigen Banken in Deutschland." />
        <meta property="og:url" content="https://finanzen-guide.de/ratgeber/banken-vergleich" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://finanzen-guide.de/images/og-banken.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Banken-Vergleich 2025: Beste Bank finden" />
        <meta name="twitter:description" content="Umfassender Vergleich: Gebühren, Leistungen & Service aller Top-Banken." />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Banken-Vergleich 2025: Beste Banken für Girokonto & Kreditkarte",
          "description": "Unabhängiger Banken-Vergleich 2025 mit allen wichtigen deutschen Banken.",
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
            "@id": "https://finanzen-guide.de/ratgeber/banken-vergleich"
          }
        })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building2 className="h-8 w-8 text-blue-600" />
              <Badge variant="secondary" className="text-sm">
                Banking & Finanzen
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Banken-Vergleich 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Unabhängiger Vergleich deutscher Banken - Gebühren, Leistungen und Service im Detail. Finde die Bank, die am besten zu deinen Bedürfnissen passt.
            </p>
          </section>

          {/* Kategorie-Gewinner */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Kategorie-Gewinner 2025
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kategorien.map((kategorie, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-base">{kategorie.bereich}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        <Badge className="bg-green-500 text-base">{kategorie.gewinner}</Badge>
                      </div>
                      <div className="text-sm font-semibold text-green-700 dark:text-green-400">
                        {kategorie.details}
                      </div>
                      <div className="space-y-1 pt-2 border-t">
                        {kategorie.zweitplatziert.map((zweiter, i) => (
                          <div key={i} className="text-xs text-muted-foreground">
                            {zweiter}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Detaillierter Banken-Vergleich */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Alle Banken im Detail
            </h2>
            
            <div className="space-y-6">
              {banken.map((bank, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-2xl">{bank.name}</CardTitle>
                          <Badge variant="outline">{bank.typ}</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(bank.bewertung)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {bank.bewertung}/5.0
                          </span>
                        </div>
                      </div>
                      <Building2 className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Linke Spalte */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            Stärken
                          </h4>
                          <ul className="space-y-1">
                            {bank.staerken.map((staerke, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-green-500 mt-0.5">•</span>
                                {staerke}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <X className="h-4 w-4 text-red-500" />
                            Schwächen
                          </h4>
                          <ul className="space-y-1">
                            {bank.schwaechen.map((schwaeche, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-red-500 mt-0.5">•</span>
                                {schwaeche}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Rechte Spalte */}
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                          <h4 className="font-semibold mb-3">Gebühren:</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Kontoführung:</span>
                              <span className="font-semibold">{bank.gebuehren.konto}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Kreditkarte:</span>
                              <span className="font-semibold">{bank.gebuehren.karte}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Ausland:</span>
                              <span className="font-semibold">{bank.gebuehren.ausland}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-secondary/30 rounded-lg">
                          <h4 className="font-semibold mb-2">Geeignet für:</h4>
                          <p className="text-sm">{bank.geeignetFuer}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex gap-3">
                      <a
                        href="/ratenkredit"
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
                      >
                        Zur Bank
                      </a>
                      <a
                        href="/ratenkredit"
                        className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors"
                      >
                        Mehr erfahren
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Auswahlhilfe */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Welche Bank passt zu mir?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Euro className="h-5 w-5 text-green-500" />
                    Für Sparfüchse
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Du willst komplett kostenlos banken und keine Gebühren zahlen.
                  </p>
                  <div className="space-y-2">
                    <div className="font-semibold">Empfehlung: DKB oder ING</div>
                    <p className="text-sm text-muted-foreground">
                      Beide bieten komplett kostenlose Girokonten und Kreditkarten ohne versteckte Kosten.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-blue-500" />
                    Für Filial-Fans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Dir ist persönliche Beratung vor Ort wichtig.
                  </p>
                  <div className="space-y-2">
                    <div className="font-semibold">Empfehlung: Sparkasse oder Commerzbank</div>
                    <p className="text-sm text-muted-foreground">
                      Flächendeckendes Filialnetz und persönliche Ansprechpartner.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-purple-500" />
                    Für Vielreisende
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Du bist oft im Ausland und brauchst flexible Bargeld-Optionen.
                  </p>
                  <div className="space-y-2">
                    <div className="font-semibold">Empfehlung: DKB</div>
                    <p className="text-sm text-muted-foreground">
                      Weltweit kostenlos Bargeld abheben als Aktivkunde.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-orange-500" />
                    Für Anleger
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Du willst Banking und Wertpapier-Depot aus einer Hand.
                  </p>
                  <div className="space-y-2">
                    <div className="font-semibold">Empfehlung: Comdirect oder ING</div>
                    <p className="text-sm text-muted-foreground">
                      Starke Depot-Angebote mit günstigen Trading-Konditionen.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Expert Profile */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Unser Banking-Experte
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <ExpertProfile 
                name="Martin Becker"
                title="Banking-Berater & Finanzanalyst"
                experience="14 Jahre Erfahrung in Bankwesen und Finanzberatung"
                specialization={[
                  "Girokonto-Vergleiche",
                  "Kreditkarten-Analysen",
                  "Banking-Trends",
                  "Gebührenstrukturen"
                ]}
                credentials={[
                  "Bankfachwirt (IHK)",
                  "3.500+ Beratungsgespräche",
                  "Ehemaliger Filialleiter Commerzbank",
                  "Regelmäßiger Experte bei Stiftung Warentest"
                ]}
                image="expert"
              />
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Finde Jetzt Deine Perfekte Bank
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nutze unsere Vergleiche und Ratgeber, um die beste Banking-Lösung für deine Bedürfnisse zu finden.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/ratenkredit" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                    Kredite Vergleichen
                  </a>
                  <a href="/ratgeber/sparkonto" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors">
                    Bestes Sparkonto
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
