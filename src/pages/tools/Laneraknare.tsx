import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import ModernNavigation from "@/components/ModernNavigation";
import LegacyFooter from "@/components/LegacyFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingDown, PieChart } from "lucide-react";

const Laneraknare = () => {
  const [amount, setAmount] = useState("100000");
  const [rate, setRate] = useState("4.5");
  const [years, setYears] = useState("5");
  const [result, setResult] = useState<any>(null);

  const calculateLoan = () => {
    const principal = parseFloat(amount);
    const monthlyRate = parseFloat(rate) / 100 / 12;
    const numberOfPayments = parseInt(years) * 12;
    
    const monthlyPayment = 
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalAmount = monthlyPayment * numberOfPayments;
    const totalInterest = totalAmount - principal;
    
    setResult({
      monthlyPayment: Math.round(monthlyPayment),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest)
    });
  };

  return (
    <>
      <Helmet>
        <title>Låneräknare - Beräkna månadsavgift & totalkostnad | Finansguiden.se</title>
        <meta 
          name="description" 
          content="Gratis låneräknare som beräknar månadsavgift och totalkostnad för ditt lån. Jämför olika räntor och löptider enkelt." 
        />
        <link rel="canonical" href="https://finansguiden.se/verktyg/laneraknare" />
      </Helmet>

      <ModernNavigation />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Låneräknare
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beräkna månadsavgift, totalkostnad och ränta för ditt lån. 
              Jämför olika alternativ och hitta det bästa lånet för din situation.
            </p>
          </header>

          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Calculator */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Beräkna ditt lån
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="amount">Lånebelopp (kr)</Label>
                  <Input 
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="100000"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="rate">Årsränta (%)</Label>
                  <Input 
                    id="rate"
                    type="number"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    placeholder="4.5"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="years">Löptid (år)</Label>
                  <Input 
                    id="years"
                    type="number"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    placeholder="5"
                  />
                </div>
                
                <Button onClick={calculateLoan} className="w-full">
                  Beräkna lån
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle>Resultat</CardTitle>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-6">
                    <div className="grid gap-4">
                      <div className="p-4 border border-border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Calculator className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">Månadsavgift</span>
                        </div>
                        <div className="text-2xl font-bold text-foreground">
                          {result.monthlyPayment.toLocaleString()} kr
                        </div>
                      </div>
                      
                      <div className="p-4 border border-border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <PieChart className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">Total kostnad</span>
                        </div>
                        <div className="text-2xl font-bold text-foreground">
                          {result.totalAmount.toLocaleString()} kr
                        </div>
                      </div>
                      
                      <div className="p-4 border border-border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingDown className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">Total ränta</span>
                        </div>
                        <div className="text-2xl font-bold text-foreground">
                          {result.totalInterest.toLocaleString()} kr
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h3 className="font-semibold mb-2">Sammanfattning</h3>
                      <p className="text-sm text-muted-foreground">
                        Med ett lån på {parseInt(amount).toLocaleString()} kr till {rate}% ränta över {years} år 
                        betalar du {result.monthlyPayment.toLocaleString()} kr per månad. 
                        Totalt betalar du {result.totalInterest.toLocaleString()} kr i ränta.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Fyll i värdena och klicka "Beräkna lån" för att se resultatet</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <section className="mt-16 text-center">
            <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Hitta bästa lånet
              </h2>
              <p className="text-muted-foreground mb-6">
                Nu när du vet vad lånet kostar - jämför aktuella erbjudanden från alla stora långivare
              </p>
              <Button asChild>
                <a href="/privatlan">Jämför lån nu</a>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <LegacyFooter />
    </>
  );
};

export default Laneraknare;