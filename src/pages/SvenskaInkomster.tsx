import { Helmet } from "react-helmet-async";
import ModernNavigation from "../components/ModernNavigation";
import LegacyFooter from "../components/LegacyFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ExpertProfile from "../components/ExpertProfile";
import { autolink } from "@/lib/autolinkGlossary";
import { TrendingUp, BarChart3, Users, Target, Calculator, MapPin, Award } from "lucide-react";
import { useState } from "react";

export default function SvenskaInkomster() {
  const [userIncome, setUserIncome] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userRegion, setUserRegion] = useState("");

  const incomeStats = {
    median: 35800,
    mean: 42100,
    percentiles: {
      "10": 25000,
      "25": 30000,
      "50": 35800,
      "75": 47000,
      "90": 65000,
      "95": 80000,
      "99": 120000
    }
  };

  const ageGroups = [
    { age: "20-24 år", median: 28500, description: "Nya på arbetsmarknaden" },
    { age: "25-29 år", median: 34200, description: "Etablerar karriären" },
    { age: "30-34 år", median: 38900, description: "Karriärutveckling" },
    { age: "35-39 år", median: 42300, description: "Toppår för många" },
    { age: "40-44 år", median: 45100, description: "Erfarna medarbetare" },
    { age: "45-49 år", median: 46800, description: "Karriärtoppen" },
    { age: "50-54 år", median: 47500, description: "Seniorpositioner" },
    { age: "55-59 år", median: 46200, description: "Mot pension" },
    { age: "60-64 år", median: 44300, description: "Avtrappar sakta" }
  ];

  const regions = [
    { name: "Stockholm", median: 48500, growth: "+3.2%", description: "Högst löner i landet" },
    { name: "Göteborg", median: 41200, growth: "+2.8%", description: "Stark industristad" },
    { name: "Malmö", median: 38900, growth: "+2.5%", description: "Växande tech-sektor" },
    { name: "Uppsala", median: 40100, growth: "+2.7%", description: "Universitet & forskning" },
    { name: "Västerås", median: 39400, growth: "+2.3%", description: "Industriell bas" },
    { name: "Örebro", median: 37800, growth: "+2.1%", description: "Logistik & handel" },
    { name: "Linköping", median: 38200, growth: "+2.4%", description: "Tech & flygindustri" },
    { name: "Helsingborg", median: 37500, growth: "+2.0%", description: "Närhet till Danmark" }
  ];

  const industries = [
    { name: "IT & Tech", median: 58000, growth: "+8.2%", trend: "🚀" },
    { name: "Finans & Försäkring", median: 54000, growth: "+4.1%", trend: "📈" },
    { name: "Läkemedel & Biotech", median: 52000, growth: "+5.3%", trend: "🧬" },
    { name: "Konsulting", median: 51000, growth: "+3.8%", trend: "💼" },
    { name: "Energi & Utilities", median: 49000, growth: "+3.2%", trend: "⚡" },
    { name: "Telekom", median: 47000, growth: "+2.9%", trend: "📱" },
    { name: "Handel & E-commerce", median: 38000, growth: "+3.5%", trend: "🛒" },
    { name: "Tillverkning", median: 36000, growth: "+2.1%", trend: "🏭" },
    { name: "Vård & Omsorg", median: 34000, growth: "+2.8%", trend: "🏥" },
    { name: "Utbildning", median: 35000, growth: "+2.3%", trend: "🎓" }
  ];

  const calculatePercentile = (income: number) => {
    if (income <= incomeStats.percentiles["10"]) return "Bottom 10%";
    if (income <= incomeStats.percentiles["25"]) return "Bottom 25%";
    if (income <= incomeStats.percentiles["50"]) return "Below median";
    if (income <= incomeStats.percentiles["75"]) return "Above median";
    if (income <= incomeStats.percentiles["90"]) return "Top 25%";
    if (income <= incomeStats.percentiles["95"]) return "Top 10%";
    if (income <= incomeStats.percentiles["99"]) return "Top 5%";
    return "Top 1%";
  };

  const getPercentileColor = (percentile: string) => {
    if (percentile.includes("Bottom")) return "text-red-600 bg-red-50";
    if (percentile.includes("Below")) return "text-orange-600 bg-orange-50";
    if (percentile.includes("Above") || percentile.includes("Top 25%")) return "text-blue-600 bg-blue-50";
    if (percentile.includes("Top 10%")) return "text-green-600 bg-green-50";
    if (percentile.includes("Top 5%")) return "text-purple-600 bg-purple-50";
    if (percentile.includes("Top 1%")) return "text-yellow-600 bg-yellow-50";
    return "text-gray-600 bg-gray-50";
  };

  return (
    <>
      <Helmet>
        <title>Svenska Inkomster 2025: Jämför Din Lön mot Rikssnittet - Finansguiden</title>
        <meta name="description" content="Så rika är svenskarna 2025. Jämför din lön med medianlön per ålder, region och bransch. Aktuell statistik från SCB och fackförbund." />
        <link rel="canonical" href="https://finansguiden.se/svenska-inkomster-2025" />
        <meta property="og:title" content="Svenska Inkomster 2025: Så Rika är Vi" />
        <meta property="og:description" content="Jämför din lön med andra svenskar. Medianlöner per ålder, region och bransch. Vad tjänar svenskarna egentligen 2025?" />
        <meta property="og:url" content="https://finansguiden.se/svenska-inkomster-2025" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://finansguiden.se/images/og-inkomster.png" />
        
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Svenska Inkomster 2025: Jämför Din Lön mot Rikssnittet",
          "description": "Så rika är svenskarna 2025. Jämför din lön med medianlön per ålder, region och bransch.",
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
            "@id": "https://finansguiden.se/svenska-inkomster-2025"
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
              <BarChart3 className="h-8 w-8 text-primary" />
              <Badge variant="secondary" className="text-sm">
                SCB Data 2025
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Så Rika är Svenskarna 2025
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {autolink("Jämför din lön med andra svenskar. Få en realistisk bild av var du står i lönestatistiken och vad du kan förvänta dig tjäna.")}
            </p>
          </section>

          {/* Quick Stats */}
          <section className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Target className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">35 800 kr</div>
                <p className="text-sm text-muted-foreground">Medianlön i Sverige</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">42 100 kr</div>
                <p className="text-sm text-muted-foreground">Genomsnittslön</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">120 000 kr</div>
                <p className="text-sm text-muted-foreground">Top 1% (99:e percentilen)</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">48 500 kr</div>
                <p className="text-sm text-muted-foreground">Stockholm (högst)</p>
              </CardContent>
            </Card>
          </section>

          {/* Income Calculator */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Jämför Din Lön
            </h2>
            
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  Var Står Du i Lönestatistiken?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="income">Månads*lön (brutto)</Label>
                    <Input
                      id="income"
                      type="number"
                      placeholder="35000"
                      value={userIncome}
                      onChange={(e) => setUserIncome(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Åldersgrupp</Label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={userAge}
                      onChange={(e) => setUserAge(e.target.value)}
                    >
                      <option value="">Välj ålder</option>
                      {ageGroups.map((group) => (
                        <option key={group.age} value={group.age}>{group.age}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="region">Region</Label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={userRegion}
                      onChange={(e) => setUserRegion(e.target.value)}
                    >
                      <option value="">Välj region</option>
                      {regions.map((region) => (
                        <option key={region.name} value={region.name}>{region.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {userIncome && (
                  <div className="mt-6 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4">Ditt Resultat</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-primary mb-2">
                          {calculatePercentile(parseInt(userIncome))}
                        </div>
                        <Badge className={getPercentileColor(calculatePercentile(parseInt(userIncome)))}>
                          Du tjänar {parseInt(userIncome) > incomeStats.median ? "över" : "under"} medianen
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Skillnad mot median:</span>
                          <span className={parseInt(userIncome) > incomeStats.median ? "text-green-600" : "text-red-600"}>
                            {parseInt(userIncome) > incomeStats.median ? "+" : ""}{parseInt(userIncome) - incomeStats.median} kr
                          </span>
                        </div>
                        {userAge && (
                          <div className="flex justify-between">
                            <span>Median för din ålder:</span>
                            <span className="font-medium">
                              {ageGroups.find(g => g.age === userAge)?.median.toLocaleString()} kr
                            </span>
                          </div>
                        )}
                        {userRegion && (
                          <div className="flex justify-between">
                            <span>Median i {userRegion}:</span>
                            <span className="font-medium">
                              {regions.find(r => r.name === userRegion)?.median.toLocaleString()} kr
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>

          {/* Age Groups */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Löner per Åldersgrupp
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {ageGroups.map((group) => (
                <Card key={group.age}>
                  <CardHeader>
                    <CardTitle className="text-lg">{group.age}</CardTitle>
                    <p className="text-sm text-muted-foreground">{group.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-2">
                        {group.median.toLocaleString()} kr
                      </div>
                      <p className="text-xs text-muted-foreground">Medianlön/månad</p>
                    </div>
                    
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(group.median / 50000) * 100}%` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Regional Differences */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Regionala Löneskillnader
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {regions.map((region) => (
                <Card key={region.name}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{region.name}</h3>
                        <p className="text-sm text-muted-foreground">{region.description}</p>
                      </div>
                      <Badge variant="outline" className="text-green-600">
                        {region.growth}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          {region.median.toLocaleString()} kr
                        </div>
                        <p className="text-xs text-muted-foreground">Medianlön</p>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm">
                          {region.median > incomeStats.median ? "+" : ""}{region.median - incomeStats.median} kr
                        </div>
                        <p className="text-xs text-muted-foreground">vs rikssnitt</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Industry Analysis */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Löner per Bransch 2025
            </h2>
            
            <div className="space-y-4">
              {industries.map((industry, index) => (
                <Card key={industry.name}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">{industry.trend}</div>
                        <div>
                          <h3 className="font-semibold">{industry.name}</h3>
                          <p className="text-sm text-muted-foreground">#{index + 1} högst betald</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="text-xl font-bold text-primary">
                            {industry.median.toLocaleString()} kr
                          </div>
                          <p className="text-xs text-muted-foreground">Medianlön</p>
                        </div>
                        
                        <Badge 
                          variant="outline" 
                          className={parseFloat(industry.growth.replace('%', '')) > 3 ? 'text-green-600' : 'text-blue-600'}
                        >
                          {industry.growth}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Income Distribution */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Inkomstfördelning i Sverige
            </h2>
            
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Percentiler</h3>
                    <div className="space-y-3">
                      {Object.entries(incomeStats.percentiles).map(([percentile, amount]) => (
                        <div key={percentile} className="flex justify-between items-center">
                          <span className="text-sm">
                            {percentile === "50" ? "Median (50%)" : `${percentile}:e percentilen`}
                          </span>
                          <span className="font-medium">{amount.toLocaleString()} kr</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-4">Vad betyder det?</h3>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-800">50% (Median)</h4>
                        <p className="text-blue-700">Hälften av alla svenskar tjänar mindre än 35 800 kr</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h4 className="font-medium text-green-800">90:e percentilen</h4>
                        <p className="text-green-700">Endast 10% tjänar mer än 65 000 kr/månad</p>
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <h4 className="font-medium text-yellow-800">99:e percentilen</h4>
                        <p className="text-yellow-700">Bara 1% tjänar mer än 120 000 kr/månad</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Expert Profile */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Vår Lönestatistik-Expert
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <ExpertProfile 
                name="Dr. Anders Holm"
                title="Ekonom & Lönestatistik-Specialist"
                experience="15 års erfarenhet av svensk arbetsmarknadsstatistik"
                specialization={[
                  "SCB-data och lönestatistik",
                  "Regionala löneskillnader",
                  "Branschanalys",
                  "Arbetsmarknadsekonomiskt"
                ]}
                credentials={[
                  "PhD Nationalekonomi, Stockholms Universitet",
                  "Tidigare chef för lönestatistik på SCB",
                  "Författare till 'Svenska Löner i Förändring'",
                  "Regelbunden kommentator om lönetrends"
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
                  Vill Du Höja Din Lön?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  {autolink("Läs vår karriärguide för konkreta strategier att nå 100k+ eller upptäck ekonomiska life hacks som sparar tusentals kronor per år.")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/karriar-100k-guide" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                    Karriärguide 100k+
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