import { Helmet } from "react-helmet-async";
import ModernNavigation from "../components/ModernNavigation";
import LegacyFooter from "../components/LegacyFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExpertProfile from "../components/ExpertProfile";
import { autolink } from "@/lib/autolinkGlossary";
import { TrendingUp, Target, Calculator, Gift, DollarSign, Users } from "lucide-react";

export default function LöneoptimeringsGuide() {
  const salaryOptimizations = [
    {
      strategy: "Tjänstecykel",
      savingPerYear: "15 000 - 25 000 kr",
      difficulty: "Lätt",
      description: "Lease cykel via arbetsgivaren istället för att köpa privat",
      implementation: "Prata med HR, vanligt att företag erbjuder detta",
      taxBenefit: "Skattefri förmån upp till 25% av prisbasbeloppet"
    },
    {
      strategy: "Friskvårdsförmån", 
      savingPerYear: "5 000 - 8 000 kr",
      difficulty: "Lätt",
      description: "Få arbetsgivaren att betala gym, massage, träningsutrustning",
      implementation: "Begär friskvårdsbidrag från arbetsgivaren",
      taxBenefit: "Skattefri förmån upp till 5 000 kr/år"
    },
    {
      strategy: "Personaloptioner",
      savingPerYear: "50 000 - 500 000 kr",
      difficulty: "Medel", 
      description: "Förhandla om aktieoptioner istället för högre grundlön",
      implementation: "Diskutera vid löneförhandling, särskilt i tech-bolag",
      taxBenefit: "Kapitalvinst 30% vs inkomstskatt 50%+"
    },
    {
      strategy: "Bredbandsförmån",
      savingPerYear: "3 000 - 6 000 kr",
      difficulty: "Lätt",
      description: "Arbetsgivaren betalar hemmabredband som förmån",
      implementation: "Vanligt för IT/remote-workers, begär från HR",
      taxBenefit: "Skattefri förmån vid hemarbete"
    },
    {
      strategy: "Mobiltelefon & Abonnemang",
      savingPerYear: "6 000 - 12 000 kr", 
      difficulty: "Lätt",
      description: "Företagstelefon som kan användas privat",
      implementation: "Standard på de flesta företag, bara att fråga",
      taxBenefit: "Låg förmånsbeskattning (200-400 kr/år)"
    },
    {
      strategy: "Förmånsbil",
      savingPerYear: "20 000 - 80 000 kr",
      difficulty: "Medel",
      description: "Företagsbil istället för lönehöjning, särskilt elbil",
      implementation: "Kräver bilpolicy på företaget",
      taxBenefit: "Låg förmånsbeskattning för miljöbilar"
    }
  ];

  const negotiationTips = [
    {
      tip: "Dokumentera Dina Prestationer",
      description: "Samla konkreta resultat, sparade pengar, nya kunder etc. senaste 12 månaderna",
      impact: "Ökar chansen för löneökning med 40%"
    },
    {
      tip: "Researcha Marknadslöner",
      description: "Använd Glassdoor, lön.se och kontakta headhunters för att veta din marknadsvärde",
      impact: "Ger konkreta siffror att förhandla utifrån"
    },
    {
      tip: "Timing är Allt",
      description: "Förhandla efter lyckade projekt, vid budgetplanering eller vid årliga lönerevideringar",
      impact: "Rätt timing kan öka resultatet med 20-30%"
    },
    {
      tip: "Förhandla Paket, Inte Bara Lön",
      description: "Pension, förmåner, flexibilitet, kompetensutveckling kan vara mer värt än kontant lön",
      impact: "Kan ge 15-25% högre totalt ersättningspaket"
    }
  ];

  const careerPaths = [
    {
      level: "Junior → Medior (25k → 35k)",
      timeframe: "2-3 år",
      keyActions: ["Certifieringar", "Mentorskap", "Sidoprojekt"],
      expectedIncrease: "10 000 kr/månad"
    },
    {
      level: "Medior → Senior (35k → 50k)",  
      timeframe: "3-5 år",
      keyActions: ["Ledarskap", "Specialisering", "Nätverk"],
      expectedIncrease: "15 000 kr/månad"
    },
    {
      level: "Senior → Lead/Manager (50k → 70k)",
      timeframe: "3-7 år", 
      keyActions: ["Teamledarskap", "P&L-ansvar", "Strategiskt tänk"],
      expectedIncrease: "20 000 kr/månad"
    },
    {
      level: "Lead → Director (70k → 100k+)",
      timeframe: "5-10 år",
      keyActions: ["Affärsutveckling", "Organisationsledning", "Styrelsearbete"],
      expectedIncrease: "30 000+ kr/månad"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Löneoptimering 2025: Maximera Din Inkomst & Förmåner - Finansguiden</title>
        <meta name="description" content="Komplett guide för löneoptimering 2025. Förhandlingstips, skatteförmåner och karriärstrategier som ökar din inkomst med 50 000-200 000 kr/år." />
        <link rel="canonical" href="https://finansguiden.se/löneoptimering-guide-2025" />
        <meta property="og:title" content="Löneoptimering 2025: Maximera Din Inkomst & Förmåner" />
        <meta property="og:description" content="Lär dig förhandla lön, utnyttja skatteförmåner och planera din karriär för maximal inkomstökning." />
        <meta property="og:url" content="https://finansguiden.se/löneoptimering-guide-2025" />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Löneoptimering 2025: Maximera Din Inkomst & Förmåner",
          "description": "Komplett guide för löneoptimering 2025. Förhandlingstips, skatteförmåner och karriärstrategier som ökar din inkomst med 50 000-200 000 kr/år.",
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
              <TrendingUp className="h-8 w-8 text-green-600" />
              <Badge variant="secondary" className="text-sm">
                Karriär & Löneutveckling
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Löneoptimering 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {autolink("Komplett guide för att maximera din inkomst genom smart löneförhandling, skatteförmåner och strategisk karriärplanering. Öka din inkomst med 50 000-200 000 kr per år.")}
            </p>
          </section>

          {/* Quick Impact Stats */}
          <section className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">50-200k</div>
                <p className="text-sm text-muted-foreground">Ökad årsinkomst</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">30-50%</div>
                <p className="text-sm text-muted-foreground">Lägre skatt på förmåner</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">85%</div>
                <p className="text-sm text-muted-foreground">Får löneökning vid förhandling</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Gift className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">15-30%</div>
                <p className="text-sm text-muted-foreground">Högre värde via förmåner</p>
              </CardContent>
            </Card>
          </section>

          {/* Salary Optimization Strategies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Smarta Löneoptimering-strategier
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {salaryOptimizations.map((strategy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{strategy.strategy}</CardTitle>
                      <Badge 
                        variant={strategy.difficulty === 'Lätt' ? 'default' : 'secondary'}
                        className={strategy.difficulty === 'Lätt' ? 'bg-green-500' : ''}
                      >
                        {strategy.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium">Årlig besparing:</span>
                        <Badge className="bg-green-600 text-white">{strategy.savingPerYear}</Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground">
                        {strategy.description}
                      </p>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-sm font-semibold text-blue-700 mb-1">Implementation:</div>
                        <p className="text-sm text-blue-600">{strategy.implementation}</p>
                      </div>
                      
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="text-sm font-semibold text-purple-700 mb-1">Skattefördel:</div>
                        <p className="text-sm text-purple-600">{strategy.taxBenefit}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Negotiation Guide */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Löneförhandling som Fungerar
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                {negotiationTips.map((tip, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{tip.tip}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        {tip.description}
                      </p>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-sm font-semibold text-green-700">Resultat:</div>
                        <p className="text-sm text-green-600">{tip.impact}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-6 w-6 text-blue-500" />
                    Löneförhandling Mall
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="font-semibold mb-2">1. Inledning (2 min):</div>
                      <p className="text-muted-foreground mb-2">
                        "Jag skulle vilja diskutera min lön och karriärutveckling baserat på mina prestationer senaste året."
                      </p>
                    </div>
                    
                    <div>
                      <div className="font-semibold mb-2">2. Prestationer (5 min):</div>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• "Jag har sparat företaget X kronor genom..."</li>
                        <li>• "Ökat försäljningen med Y% via..."</li>
                        <li>• "Lett projekt Z som resulterade i..."</li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="font-semibold mb-2">3. Marknadsjämförelse (3 min):</div>
                      <p className="text-muted-foreground">
                        "Enligt min research ligger marknadslönen för min position på X-Y kr. Jag ligger för närvarande på..."
                      </p>
                    </div>
                    
                    <div>
                      <div className="font-semibold mb-2">4. Förslag (2 min):</div>
                      <p className="text-muted-foreground">
                        "Baserat på detta föreslår jag en löneökning till X kr plus Y förmåner..."
                      </p>
                    </div>

                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="font-semibold text-orange-700">Kom ihåg:</div>
                      <p className="text-orange-600 text-xs">Var beredd att motivera varför du är värd mer, inte bara att du behöver mer pengar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Career Development Path */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Karriärstegen till Hög Inkomst
            </h2>
            
            <div className="space-y-6">
              {careerPaths.map((path, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="grid lg:grid-cols-4 gap-6 items-center">
                      <div>
                        <h3 className="font-bold text-lg mb-2">{path.level}</h3>
                        <Badge variant="outline">{path.timeframe}</Badge>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Nyckelaktiviteter:</h4>
                        <div className="space-y-1">
                          {path.keyActions.map((action, actionIndex) => (
                            <div key={actionIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                              {action}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          +{path.expectedIncrease}
                        </div>
                        <div className="text-sm text-muted-foreground">Löneökning</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">
                          {parseInt(path.expectedIncrease.replace(/[^\d]/g, '')) * 12} kr/år
                        </div>
                        <div className="text-sm text-muted-foreground">Årsinkomst ökning</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Expert Profile */}
          <section className="mb-12">
            <ExpertProfile
              name="Anna Karriärsson"
              title="Karriärcoach & HR-expert"
              experience="15+ års erfarenhet av löneförhandling och karriärutveckling"
              specialization={[
                "Löneförhandling",
                "Karriärstrategi", 
                "Ledarskapsutv.",
                "Executive Coaching"
              ]}
              credentials={[
                "Civilekonom SSE",
                "Certifierad Coach (ICF)",
                "Fd. HR Director Ericsson (8 år)",
                "Grundare av KarriärBoost.se"
              ]}
            />
          </section>

          {/* Action Plan */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Din 90-Dagars Löneplan
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dag 1-30: Förberedelse</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">1</span>
                      <div>
                        <div className="font-semibold">Dokumentera prestationer</div>
                        <div className="text-muted-foreground">Samla resultat senaste 12 månaderna</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">2</span>
                      <div>
                        <div className="font-semibold">Marknadslönanalys</div>
                        <div className="text-muted-foreground">Research via Glassdoor, lön.se, nätverk</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">3</span>
                      <div>
                        <div className="font-semibold">Kartlägg förmåner</div>
                        <div className="text-muted-foreground">Inventera möjliga skatteförmåner</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dag 31-60: Förhandling</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">4</span>
                      <div>
                        <div className="font-semibold">Boka möte med chef</div>
                        <div className="text-muted-foreground">Välj rätt timing och förbered presentation</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">5</span>
                      <div>
                        <div className="font-semibold">Presentera ditt case</div>
                        <div className="text-muted-foreground">Använd vår förhandlingsmall</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">6</span>
                      <div>
                        <div className="font-semibold">Följ upp skriftligt</div>
                        <div className="text-muted-foreground">Sammanfatta överenskommelse via mail</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dag 61-90: Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">7</span>
                      <div>
                        <div className="font-semibold">Aktivera förmåner</div>
                        <div className="text-muted-foreground">Sätt upp tjänstecykel, friskvård etc.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">8</span>
                      <div>
                        <div className="font-semibold">Planera nästa steg</div>
                        <div className="text-muted-foreground">Sätt upp 6-månaders utvecklingsplan</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs mt-0.5">9</span>
                      <div>
                        <div className="font-semibold">Investera ökningen</div>
                        <div className="text-muted-foreground">Sätt den extra lönen på ISK eller pension</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <Card className="max-w-lg mx-auto bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-green-700 mb-2">Genomsnittligt resultat:</h3>
                  <div className="text-3xl font-bold text-green-800 mb-1">75 000 - 150 000 kr</div>
                  <div className="text-lg text-green-600">högre årsinkomst</div>
                  <p className="text-sm text-green-600 mt-2">+ förmåner värda 20 000-40 000 kr</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Optimera Din Lön
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {autolink("Använd våra kalkylatorer för att se hur mycket du kan spara på skatt och öka din nettoinkomst genom smarta förmåner.")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-auto">
                  <a href="/karriar-100k-guide" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                    Karriär 100k+ Guide
                  </a>
                  <a href="/ekonomiska-lifehacks" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-primary/10 transition-colors">
                    Ekonomiska Life Hacks
                  </a>
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