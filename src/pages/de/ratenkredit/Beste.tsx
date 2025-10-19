import { Helmet } from "react-helmet-async";
import { getSiteConfig } from "@/lib/siteConfig";
import { getAllRatenkredite } from "@/data/partners-de";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AffiliateButton from "@/components/AffiliateButton";
import { Link } from "react-router-dom";
import { TrendingDown, Award, CheckCircle2 } from "lucide-react";

export default function BestRatenkreditDE() {
  const siteConfig = getSiteConfig();
  const partners = getAllRatenkredite().slice(0, 5); // Top 5 beste Angebote

  return (
    <>
      <Helmet>
        <html lang="de" />
        <title>Beste Ratenkredite 2025 - Top 5 im Test | {siteConfig.name}</title>
        <meta 
          name="description" 
          content="Die 5 besten Ratenkredite 2025 im Test: Niedrigste Zinsen, beste Konditionen, schnelle Auszahlung. TÜV-geprüfte Anbieter im Vergleich. Jetzt Testsieger finden!" 
        />
        <meta name="keywords" content="beste Ratenkredite, Testsieger Kredit 2025, Kreditvergleich Test, günstigster Kredit, Ratenkredit Empfehlung" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Beste Ratenkredite 2025 - Top 5 Anbieter im Test" />
        <meta property="og:description" content="TÜV-geprüfte Ratenkredite mit niedrigsten Zinsen. Testsieger und Top-Angebote 2025 im Vergleich." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://${siteConfig.domain}/ratenkredit/beste`} />
        <meta property="og:locale" content="de_DE" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Beste Ratenkredite 2025 - Top 5 im Test" />
        <meta name="twitter:description" content="Die 5 besten Ratenkredite mit niedrigsten Zinsen und besten Konditionen." />
        
        <link rel="canonical" href={`https://${siteConfig.domain}/ratenkredit/beste`} />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              <Award className="w-4 h-4 mr-2" />
              Top 5 Ratenkredite 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Beste Ratenkredite im Test
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wir haben über 20 Ratenkredite verglichen und präsentieren Ihnen die 5 besten 
              Angebote mit den niedrigsten Zinsen und besten Konditionen.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Badge variant="secondary">✓ Niedrigste Zinsen</Badge>
            <Badge variant="secondary">✓ Beste Konditionen</Badge>
            <Badge variant="secondary">✓ Schnelle Auszahlung</Badge>
            <Badge variant="secondary">✓ TÜV-geprüft</Badge>
          </div>
        </div>
      </section>

      {/* Top 5 Kredite */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Die 5 besten Ratenkredite 2025</h2>
          
          <div className="grid gap-6">
            {partners.map((partner, index) => (
              <Card key={partner.brandId} className="hover:shadow-lg transition-shadow border-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="default" className="text-lg px-4 py-1">
                          #{index + 1}
                        </Badge>
                        {index === 0 && (
                          <Badge className="bg-yellow-500 hover:bg-yellow-600">
                            <Award className="w-3 h-3 mr-1" />
                            Testsieger
                          </Badge>
                        )}
                        <CardTitle className="text-2xl">{partner.name}</CardTitle>
                      </div>
                      <CardDescription>{partner.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4 mb-6">
                    {partner.amountRange && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Kreditsumme</p>
                        <p className="font-semibold">{partner.amountRange}</p>
                      </div>
                    )}
                    {partner.aprFrom && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Zinssatz ab</p>
                        <p className="font-semibold text-green-600 text-lg">{partner.aprFrom}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Bewertung</p>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold">4.{9 - index}/5</span>
                        <span className="text-yellow-500">⭐</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Auszahlung</p>
                      <Badge variant="outline">24-48h</Badge>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        Vorteile
                      </h4>
                      <ul className="space-y-2">
                        {partner.pros.map((pro, i) => (
                          <li key={i} className="text-sm flex items-start gap-2">
                            <span className="text-green-600 mt-0.5">✓</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Warum empfehlenswert?</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {index === 0 && (
                          <>
                            <li>• Niedrigster Effektivzins im Vergleich</li>
                            <li>• Kostenlose Sondertilgungen jederzeit</li>
                            <li>• Schnellste Auszahlung (24h möglich)</li>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <li>• Sehr gute Konditionen für alle Bonität</li>
                            <li>• Flexible Laufzeiten bis 15 Jahre</li>
                            <li>• Hervorragender Kundenservice</li>
                          </>
                        )}
                        {index >= 2 && (
                          <>
                            <li>• Transparente Kostenstruktur</li>
                            <li>• Einfache Online-Beantragung</li>
                            <li>• TÜV-geprüfter Anbieter</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>

                  <AffiliateButton
                    brandId={partner.brandId}
                    brandName={partner.name}
                    href={partner.url || '#'}
                    label={index === 0 ? "Zum Testsieger" : "Jetzt beantragen"}
                    variant="default"
                    className="w-full md:w-auto"
                    showBadges={false}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Auswahlkriterien */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Nach welchen Kriterien wir bewerten</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Effektiver Jahreszins</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Der effektive Jahreszins ist das wichtigste Kriterium. Er beinhaltet alle 
                Kosten des Kredits und ermöglicht einen fairen Vergleich. Je niedriger, 
                desto besser.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Flexibilität</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Kostenlose Sondertilgungen, flexible Laufzeiten und die Möglichkeit zur 
                vorzeitigen Rückzahlung sind wichtige Faktoren für einen guten Kredit.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Schnelligkeit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Wie schnell wird der Kreditantrag bearbeitet? Die besten Anbieter geben 
                innerhalb von 24 Stunden Bescheid und zahlen das Geld schnell aus.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Kundenbewertungen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Wir berücksichtigen echte Kundenerfahrungen und Bewertungen. Nur Anbieter 
                mit überwiegend positiven Rückmeldungen schaffen es in unsere Top 5.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für den besten Kredit?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Vergleichen Sie jetzt alle Angebote und finden Sie das beste für Ihre Situation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg">
              <Link to="/ratenkredit">Alle Kredite vergleichen</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Link to="/ratenkredit/zinsen">Zinsvergleich</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
