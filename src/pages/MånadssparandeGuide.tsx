import { Helmet } from "react-helmet-async";
import ModernNavigation from "../components/ModernNavigation";
import LegacyFooter from "../components/LegacyFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import ExpertProfile from "../components/ExpertProfile";
import { autolink } from "@/lib/autolinkGlossary";
import { PiggyBank, TrendingUp, Target, Calculator, Clock, Trophy, AlertCircle, Users } from "lucide-react";
import { useState } from "react";

export default function MånadssparandeGuide() {
  const [income, setIncome] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [goal, setGoal] = useState("");

  const savingsRules = [
    {
      rule: "50/30/20 Regeln",
      description: "50% behov, 30% önskemål, 20% sparande",
      minSavings: 20,
      maxSavings: 20,
      difficulty: "Lätt",
      suitableFor: "Nybörjare som vill ha struktur"
    },
    {
      rule: "10% Regeln",
      description: "Spara minst 10% av bruttoinkomsten",
      minSavings: 10,
      maxSavings: 15,
      difficulty: "Lätt",
      suitableFor: "Alla som bara vill komma igång"
    },
    {
      rule: "Aggressivt FIRE",
      description: "Spara 40-70% för ekonomisk frihet",
      minSavings: 40,
      maxSavings: 70,
      difficulty: "Svårt",
      suitableFor: "Dedikerade FIRE-anhängare"
    },
    {
      rule: "Automatisk Ökning",
      description: "Öka sparandet med 1% per år",
      minSavings: 15,
      maxSavings: 30,
      difficulty: "Medel",
      suitableFor: "Långsiktiga tänkare"
    }
  ];

  const communityExamples = [
    {
      profile: "Tech-utvecklare, 28 år",
      income: 58000,
      savings: 25000,
      percentage: 43,
      strategy: "Lever billigt, investerar aggressivt i index",
      goal: "FIRE vid 40"
    },
    {
      profile: "Lärare, 35 år, familj",
      income: 34000,
      savings: 4500,
      percentage: 13,
      strategy: "Automatiskt sparande + barnbidrag",
      goal: "Barnens utbildning + pension"
    },
    {
      profile: "Konsult, 42 år",
      income: 67000,
      savings: 15000,
      percentage: 22,
      strategy: "50/30/20 regeln, diversifierad portfölj",
      goal: "Tidig pension vid 55"
    },
    {
      profile: "Sjuksköterska, 31 år",
      income: 38000,
      savings: 6000,
      percentage: 16,
      strategy: "Placeringsfördelning + extra amortering",
      goal: "Eget hus + ekonomisk trygghet"
    }
  ];

  const calculateRecommendations = () => {
    if (!income) return null;
    
    const monthlyIncome = parseInt(income);
    const expenses = parseInt(monthlyExpenses) || monthlyIncome * 0.7;
    const availableForSavings = monthlyIncome - expenses;
    
    return {
      conservative: Math.max(monthlyIncome * 0.1, 0),
      moderate: Math.max(monthlyIncome * 0.2, 0),
      aggressive: Math.max(monthlyIncome * 0.4, 0),
      available: availableForSavings,
      currentPercentage: currentSavings ? (parseInt(currentSavings) / monthlyIncome) * 100 : 0
    };
  };

  const recommendations = calculateRecommendations();

  const getMotivationMessage = (percentage: number) => {
    if (percentage >= 40) return { message: "Fantastiskt! Du är på FIRE-nivå! 🔥", color: "text-green-600" };
    if (percentage >= 20) return { message: "Utmärkt sparande! Du ligger över genomsnittet ⭐", color: "text-blue-600" };
    if (percentage >= 10) return { message: "Bra början! Du sparar mer än många svenskar 👍", color: "text-orange-600" };
    return { message: "Varje krona räknas! Öka gradvis för bättre framtid 💪", color: "text-red-600" };
  };

  return (
    <>
      <Helmet>
        <title>Månadssparande Guide 2025: Hur Mycket Ska Man Spara? - Finansguiden</title>
        <meta name="description" content="Hur mycket sparar svenskarna per månad? Jämför ditt sparande med andra och få personliga råd baserat på din inkomst och mål." />
        <link rel="canonical" href="https://finansguiden.se/manadssparande-guide" />
        <meta property="og:title" content="Månadssparande Guide 2025: Så Mycket Sparar Svenskarna" />
        <meta property="og:description" content="Upptäck hur mycket du bör spara per månad baserat på din inkomst. Jämför med andra svenskar och få konkreta spartips." />
        <meta property="og:url" content="https://finansguiden.se/manadssparande-guide" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://finansguiden.se/images/og-sparande.png" />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Månadssparande Guide 2025: Hur Mycket Ska Man Spara?",
          "description": "Hur mycket sparar svenskarna per månad? Jämför ditt sparande med andra och få personliga råd baserat på din inkomst och mål.",
          "author": {
            "@type": "Organization",
            "name": "Finansguiden"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Finansguiden",
            "logo": {
              "@type": "ImageObject",
              "url": "https://finansguiden.se/finansguiden-logo.png"
            }
          },
          "datePublished": "2025-01-19",
          "dateModified": "2025-01-19",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://finansguiden.se/manadssparande-guide"
          }
        })}
        </script>
      </Helmet>

      <ModernNavigation />

      <main className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <PiggyBank className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="text-sm">
                Community-Data 2025
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Hur Mycket Manadssparar Ni?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {autolink("Upptäck vad svenska sparare verkligen sätter undan varje månad. Jämför ditt sparande med andra och få personliga rekommendationer baserat på din situation.")}
            </p>
          </section>

          {/* Quick Stats */}
          <section className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">6 500 kr</div>
                <p className="text-sm text-muted-foreground">Genomsnitt månadsparande</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">18%</div>
                <p className="text-sm text-muted-foreground">Av inkomsten (snitt)</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">40%+</div>
                <p className="text-sm text-muted-foreground">FIRE-communityn</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Clock className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">15 år</div>
                <p className="text-sm text-muted-foreground">Till första miljonen</p>
              </CardContent>
            </Card>
          </section>

          {/* Personal Calculator */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Beräkna Ditt Optimala Månadssparande
            </h2>
            
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  Personlig Sparandekalkylator
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="income">Månadsslön (netto)</Label>
                    <Input
                      id="income"
                      type="number"
                      placeholder="35000"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="expenses">Månatliga utgifter</Label>
                    <Input
                      id="expenses"
                      type="number"
                      placeholder="25000"
                      value={monthlyExpenses}
                      onChange={(e) => setMonthlyExpenses(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="current">Nuvarande sparande</Label>
                    <Input
                      id="current"
                      type="number"
                      placeholder="5000"
                      value={currentSavings}
                      onChange={(e) => setCurrentSavings(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="goal">Sparmål (kr)</Label>
                    <Input
                      id="goal"
                      type="number"
                      placeholder="1000000"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                    />
                  </div>
                </div>

                {recommendations && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4">Dina Sparrekommendationer</h3>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-xl font-bold text-blue-600">
                          {Math.round(recommendations.conservative).toLocaleString()} kr
                        </div>
                        <p className="text-sm text-blue-700">Försiktig (10%)</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-xl font-bold text-green-600">
                          {Math.round(recommendations.moderate).toLocaleString()} kr
                        </div>
                        <p className="text-sm text-green-700">Rekommenderat (20%)</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-xl font-bold text-purple-600">
                          {Math.round(recommendations.aggressive).toLocaleString()} kr
                        </div>
                        <p className="text-sm text-purple-700">Aggressivt (40%)</p>
                      </div>
                    </div>

                    {currentSavings && (
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Ditt nuvarande sparande:</span>
                          <span className="font-bold">{recommendations.currentPercentage.toFixed(1)}% av inkomsten</span>
                        </div>
                        <Progress value={Math.min(recommendations.currentPercentage, 50)} className="w-full" />
                        <div className={`text-center font-medium ${getMotivationMessage(recommendations.currentPercentage).color}`}>
                          {getMotivationMessage(recommendations.currentPercentage).message}
                        </div>
                      </div>
                    )}

                    {goal && income && (
                      <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                        <h4 className="font-semibold mb-2">Tid till mål:</h4>
                        <p className="text-sm">
                          Med {currentSavings || recommendations.moderate} kr/månad når du {parseInt(goal).toLocaleString()} kr på{" "}
                          <span className="font-bold">
                            {Math.round((parseInt(goal) - 0) / (parseInt(currentSavings) || recommendations.moderate))} månader
                          </span>
                          {" "}({Math.round(((parseInt(goal) - 0) / (parseInt(currentSavings) || recommendations.moderate)) / 12)} år)
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </section>

          {/* Savings Rules */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Populära Sparregler
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {savingsRules.map((rule) => (
                <Card key={rule.rule}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{rule.rule}</CardTitle>
                      <Badge 
                        variant={rule.difficulty === 'Lätt' ? 'default' : rule.difficulty === 'Medel' ? 'secondary' : 'destructive'}
                      >
                        {rule.difficulty}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{rule.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Sparandeprocent:</span>
                        <span className="font-bold text-primary">
                          {rule.minSavings}% - {rule.maxSavings}%
                        </span>
                      </div>
                      
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <h4 className="font-medium text-sm mb-1">Passar dig om:</h4>
                        <p className="text-xs text-muted-foreground">{rule.suitableFor}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Community Examples */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Verkliga Exempel från Communityn
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {communityExamples.map((example, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold">{example.profile}</h3>
                        <div className="text-sm text-muted-foreground mt-1">
                          Inkomst: {example.income.toLocaleString()} kr/månad
                        </div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={
                          example.percentage >= 40 ? 'text-green-600 border-green-500' :
                          example.percentage >= 20 ? 'text-blue-600 border-blue-500' :
                          example.percentage >= 10 ? 'text-orange-600 border-orange-500' :
                          'text-red-600 border-red-500'
                        }
                      >
                        {example.percentage}%
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Månadsparande:</span>
                        <span className="font-bold text-primary">{example.savings.toLocaleString()} kr</span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${Math.min(example.percentage, 50)}%` }}
                        ></div>
                      </div>
                      
                      <div className="space-y-2">
                        <div>
                          <h4 className="text-sm font-medium">Strategi:</h4>
                          <p className="text-xs text-muted-foreground">{example.strategy}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Mål:</h4>
                          <p className="text-xs text-muted-foreground">{example.goal}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Sparstrategier */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Effektiva Sparstrategier 2025
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🤖</span>
                    Automatisera Allt
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Sätt upp automatiska överföringar samma dag som lönen kommer
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Sparkonto: 10-20% av lönen</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>ISK/Investeringar: 10-30%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        <span>Pensionssparande: 2-5%</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-xs text-green-700 font-semibold">
                        Resultat: Spara konsekvent utan att tänka
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">📈</span>
                    Trappa Upp Gradvis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Öka sparandet med 1% per år eller vid varje löneökning
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>År 1:</span>
                        <span className="font-medium">10% sparande</span>
                      </div>
                      <div className="flex justify-between">
                        <span>År 2:</span>
                        <span className="font-medium">11% sparande</span>
                      </div>
                      <div className="flex justify-between">
                        <span>År 5:</span>
                        <span className="font-medium">15% sparande</span>
                      </div>
                      <div className="flex justify-between">
                        <span>År 10:</span>
                        <span className="font-medium">20% sparande</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs text-blue-700 font-semibold">
                        Smärtfritt sätt att nå högt sparande
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Mål-baserat Sparande
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      Dela upp sparandet i konkreta mål med tidsram
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        <span>Buffert (3-6 mån utgifter)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        <span>Semester/bil (1-2 år)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>Bostad/pension (5-30 år)</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                      <p className="text-xs text-purple-700 font-semibold">
                        Tydliga mål = högre motivation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Warning Box */}
          <section className="mb-12">
            <Card className="border-yellow-500 bg-yellow-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-700">
                  <AlertCircle className="h-5 w-5" />
                  Viktiga Sparregler att Komma Ihåg
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Spara Rätt Ordning</h4>
                    <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                      <li>Bygg buffert (3-6 månader)</li>
                      <li>Betala av dyra skulder (&gt;5% ränta)</li>
                      <li>Maxut PPM och tjänstepension</li>
                      <li>Långsiktigt sparande (ISK/kapitalförsäkring)</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Vanliga Misstag</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Sparar för lite i början av karriären</li>
                      <li>Glömmer att justera för inflation</li>
                      <li>Ingen automatisering av sparandet</li>
                      <li>För koncentrerad till ett sparalternativ</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
                  <p className="text-yellow-800 font-medium">
                    💡 Kom ihåg: {autolink("Det bästa sparandet är det du faktiskt genomför konsekvent. Börja med vad som känns hållbart!")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Expert Profile */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Vår Sparexpert
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <ExpertProfile 
                name="Maria Lindberg"
                title="Certifierad Finansiell Planerare (CFP)"
                experience="12 års erfarenhet av privat sparrådgivning"
                specialization={[
                  "Sparstrategier & automation",
                  "Mål-baserad planering",
                  "Beteendeekonomi",
                  "FIRE-strategier"
                ]}
                credentials={[
                  "CFP (Certified Financial Planner)",
                  "Civilekonom från Handelshögskolan",
                  "Författare till 'Spara Smart för Framtiden'",
                  "Föreläsare inom privatekonomi"
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
                  Optimera Ditt Sparande Idag
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {autolink("Upptäck de bästa sparkontona 2025 och använd våra ekonomiska life hacks för att automatisera och maximera ditt månadsparande.")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-auto">
                  <a href="/sparkonto-guide-2025" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                    Hitta Bästa Sparkonto
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