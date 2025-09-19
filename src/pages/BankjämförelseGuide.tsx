import { Helmet } from "react-helmet-async";
import ModernNavigation from "../components/ModernNavigation";
import LegacyFooter from "../components/LegacyFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExpertProfile from "../components/ExpertProfile";
import { autolink } from "@/lib/autolinkGlossary";
import { Building2, Star, Check, X, TrendingUp, Shield, CreditCard } from "lucide-react";

export default function BankjämförelseGuide() {
  const banks = [
    {
      name: "Handelsbanken",
      type: "Storbank",
      rating: 4.2,
      strengths: ["Personlig service", "Stabil", "Bra rådgivning"],
      weaknesses: ["Höga avgifter", "Låg ränta på sparkonton"],
      bestFor: "Företag & förmögna kunder",
      fees: {
        account: "0-50 kr/mån",
        card: "0-400 kr/år",
        mortgage: "0,10-0,15%"
      }
    },
    {
      name: "Swedbank",
      type: "Storbank", 
      rating: 4.0,
      strengths: ["Många kontor", "Helkundsfördelar", "Bra mobilapp"],
      weaknesses: ["Avgifter", "Kötider"],
      bestFor: "Traditionella bankkunder",
      fees: {
        account: "0-39 kr/mån", 
        card: "0-395 kr/år",
        mortgage: "0,10-0,15%"
      }
    },
    {
      name: "Länsförsäkringar Bank",
      type: "Regional",
      rating: 4.5,
      strengths: ["Bästa räntor", "Låga avgifter", "Bra service"],
      weaknesses: ["Måste vara medlem", "Begränsad närvaro"],
      bestFor: "Helkunder med försäkringar",
      fees: {
        account: "0 kr/mån",
        card: "0-200 kr/år", 
        mortgage: "0,05-0,10%"
      }
    },
    {
      name: "ICA Banken",
      type: "Nischbank",
      rating: 4.3,
      strengths: ["Högsta sparränta", "Inga avgifter", "ICA-bonus"],
      weaknesses: ["Begränsade tjänster", "Inget eget kontor"],
      bestFor: "Sparare & ICA-handlare",
      fees: {
        account: "0 kr/mån",
        card: "0 kr/år",
        mortgage: "0,08-0,12%"
      }
    },
    {
      name: "Avanza Bank",
      type: "Digital",
      rating: 4.6,
      strengths: ["Bäst för sparande", "Låga avgifter", "Enkel app"],
      weaknesses: ["Ingen rådgivning", "Begränsade banktjänster"],
      bestFor: "Aktiv sparare & investerare",
      fees: {
        account: "0 kr/mån",
        card: "0-95 kr/år",
        mortgage: "Ej tillgängligt"
      }
    },
    {
      name: "Nordea",
      type: "Storbank",
      rating: 3.8,
      strengths: ["Internationell", "Företagstjänster", "Digitalisering"],
      weaknesses: ["Högst avgifter", "Sämre service"],
      bestFor: "Internationella kunder",
      fees: {
        account: "49-99 kr/mån",
        card: "200-500 kr/år",
        mortgage: "0,15-0,20%"
      }
    }
  ];

  const servicAreas = [
    {
      area: "Sparkonto & Räntor",
      winner: "ICA Banken",
      rate: "3,25% (2025)",
      runners: ["Länsförsäkringar: 3,0%", "Avanza: 2,8%"]
    },
    {
      area: "Bolåneräntor", 
      winner: "Länsförsäkringar",
      rate: "4,89% (3-mån)",
      runners: ["SBAB: 4,95%", "Handelsbanken: 5,15%"]
    },
    {
      area: "Kreditkort",
      winner: "ICA Banken",
      rate: "0 kr årsavgift",
      runners: ["SEB: 0 kr", "Swedbank: 0 kr (villkorat)"]
    },
    {
      area: "Fonder & ISK",
      winner: "Avanza",
      rate: "0,25% förvaltningsavgift",
      runners: ["Nordnet: 0,25%", "Swedbank: 0,5-1,5%"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bankjämförelse 2025: Bästa Bankerna för Helkunder - Finansguiden</title>
        <meta name="description" content="Oberoende jämförelse av svenska banker 2025. Räntor, avgifter och tjänster - hitta banken som sparar dig mest pengar." />
        <link rel="canonical" href="https://finansguiden.se/bankjämförelse-guide-2025" />
        <meta property="og:title" content="Bankjämförelse 2025: Bästa Bankerna för Helkunder" />
        <meta property="og:description" content="Vilken bank ger dig bäst villkor? Jämför räntor, avgifter och service från alla stora svenska banker." />
        <meta property="og:url" content="https://finansguiden.se/bankjämförelse-guide-2025" />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Bankjämförelse 2025: Bästa Bankerna för Helkunder",
          "description": "Oberoende jämförelse av svenska banker 2025. Räntor, avgifter och tjänster - hitta banken som sparar dig mest pengar.",
          "author": {
            "@type": "Organization",
            "name": "Finansguiden"
          },
          "publisher": {
            "@type": "Organization", 
            "name": "Finansguiden"
          },
          "datePublished": "2025-01-19",
          "dateModified": "2025-01-19"
        })}
        </script>
      </Helmet>

      <ModernNavigation />

      <main className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Building2 className="h-8 w-8 text-blue-600" />
              <Badge variant="secondary" className="text-sm">
                Bank & Finans
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Bankjämförelse 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {autolink("Oberoende jämförelse av svenska banker - räntor, avgifter och tjänster som hjälper dig välja rätt bank och spara tusentals kronor per år.")}
            </p>
          </section>

          {/* Quick Winners */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Vinnarna inom Olika Områden
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicAreas.map((service, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{service.area}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <Badge className="bg-green-500">{service.winner}</Badge>
                      </div>
                      <div className="text-lg font-bold text-green-700">{service.rate}</div>
                      <div className="space-y-1">
                        {service.runners.map((runner, runnerIndex) => (
                          <div key={runnerIndex} className="text-xs text-muted-foreground">
                            {runner}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Detailed Bank Comparison */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Detaljerad Bankjämförelse
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {banks.map((bank, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{bank.name}</CardTitle>
                        <Badge variant="outline" className="mt-1">{bank.type}</Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold">{bank.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-green-700">Styrkor:</h4>
                        <div className="space-y-1">
                          {bank.strengths.map((strength, sIndex) => (
                            <div key={sIndex} className="flex items-center gap-2 text-sm">
                              <Check className="h-3 w-3 text-green-500" />
                              {strength}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-red-700">Svagheter:</h4>
                        <div className="space-y-1">
                          {bank.weaknesses.map((weakness, wIndex) => (
                            <div key={wIndex} className="flex items-center gap-2 text-sm">
                              <X className="h-3 w-3 text-red-500" />
                              {weakness}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-secondary/30 p-3 rounded-lg">
                        <h4 className="font-semibold text-sm mb-2">Avgifter:</h4>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span>Konto:</span>
                            <span>{bank.fees.account}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Kort:</span> 
                            <span>{bank.fees.card}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Bolån:</span>
                            <span>{bank.fees.mortgage}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-semibold">Bäst för:</span>
                        </div>
                        <p className="text-sm text-blue-700 mt-1">{bank.bestFor}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Bank Selection Guide */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Välj Rätt Bank för Din Situation
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-blue-500" />
                    Traditionell Bankservice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Du vill ha personlig kontakt, kontor att besöka och traditionell bankservice
                    </p>
                    
                    <div className="space-y-2">
                      <div className="font-semibold text-green-700">Rekommendation:</div>
                      <div className="space-y-1">
                        <Badge className="bg-blue-500">1. Handelsbanken</Badge>
                        <Badge variant="secondary">2. Swedbank</Badge>
                        <Badge variant="outline">3. SEB</Badge>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg text-sm">
                      <strong>Pro tip:</strong> Förhandla om avgifterna om du har flera produkter hos samma bank
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-green-500" />
                    Maximal Avkastning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Du vill ha högst ränta på sparande, lägsta avgifter och bäst investeringsmöjligheter
                    </p>
                    
                    <div className="space-y-2">
                      <div className="font-semibold text-green-700">Rekommendation:</div>
                      <div className="space-y-1">
                        <Badge className="bg-green-500">1. Avanza Bank</Badge>
                        <Badge className="bg-blue-500">2. ICA Banken</Badge>
                        <Badge variant="secondary">3. Länsförsäkringar</Badge>
                      </div>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg text-sm">
                      <strong>Sparar:</strong> 5 000-15 000 kr/år i avgifter + högre ränta
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-6 w-6 text-purple-500" />
                    Helkundslösning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Du vill ha alla tjänster samlat - konto, bolån, försäkringar, sparande, kort
                    </p>
                    
                    <div className="space-y-2">
                      <div className="font-semibold text-green-700">Rekommendation:</div>
                      <div className="space-y-1">
                        <Badge className="bg-orange-500">1. Länsförsäkringar</Badge>
                        <Badge className="bg-blue-500">2. Swedbank</Badge>
                        <Badge variant="secondary">3. SEB</Badge>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-3 rounded-lg text-sm">
                      <strong>Fördelar:</strong> Rabatter på försäkringar + bonusränta vid helkund
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Expert Profile */}
          <section className="mb-12">
            <ExpertProfile
              name="Maria Ekonomsson"
              title="Bankekonom & Finansanalytiker"
              experience="20+ års erfarenhet från svenska bankbranschen"
              specialization={[
                "Bankprodukter & tjänster",
                "Ränteanalys", 
                "Konsumenträttigheter",
                "Finansiell rådgivning"
              ]}
              credentials={[
                "Civilekonom Handelshögskolan",
                "Auktoriserad Finansanalytiker (AFA)",
                "Fd. Senior Rådgivare Swedbank (10 år)",
                "Grundare av BankJämför.se"
              ]}
            />
          </section>

          {/* Action Plan */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Så Byter Du Bank Smart
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Steg 1: Analysera (Vecka 1)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</span>
                      <span>Samla alla dina bankavgifter från senaste året</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">2</span>
                      <span>Lista alla tjänster du använder</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">3</span>
                      <span>Beräkna total kostnad per år</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Steg 2: Jämför (Vecka 2)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">4</span>
                      <span>Kontakta 3-4 banker för offerter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">5</span>
                      <span>Jämför total kostnad + räntor</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">6</span>
                      <span>Kolla helkundsfördelar</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Steg 3: Byt (Vecka 3-4)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">7</span>
                      <span>Använd kontobytesservice</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">8</span>
                      <span>Flytta autogiro & löneinsättning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">9</span>
                      <span>Stäng gamla kontot efter 2 månader</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <Card className="max-w-md mx-auto bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-green-700 mb-2">Genomsnittlig besparing:</h3>
                  <div className="text-2xl font-bold text-green-800">3 000 - 8 000 kr/år</div>
                  <p className="text-sm text-green-600 mt-2">+ högre ränta på sparkapital</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Hitta Din Perfekta Bank
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {autolink("Använd våra verktyg för att jämföra banker och hitta den som passar just dina behov och ekonomiska situation.")}
                </p>
                <div className="flex justify-center">
                  <div className="flex flex-col sm:flex-row gap-4 max-w-fit">
                    <a href="/sparkonto-guide-2025" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                      Jämför Räntor
                    </a>
                    <a href="/privatlan" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-primary/10 transition-colors">
                      Lånejämförelse
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

        </div>
      </main>

      <LegacyFooter />
    </>
  );
}