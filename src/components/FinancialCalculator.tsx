import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FinancialCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(200000);
  const [interestRate, setInterestRate] = useState<number>(5.5);
  const [loanTerm, setLoanTerm] = useState<number>(5);
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalCost: number;
    totalInterest: number;
  } | null>(null);

  const calculateLoan = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    const totalCost = monthlyPayment * numPayments;
    const totalInterest = totalCost - loanAmount;

    setResult({
      monthlyPayment: Math.round(monthlyPayment),
      totalCost: Math.round(totalCost),
      totalInterest: Math.round(totalInterest)
    });
  };

  const [savingsAmount, setSavingsAmount] = useState<number>(1000);
  const [savingsRate, setSavingsRate] = useState<number>(7);
  const [savingsYears, setSavingsYears] = useState<number>(25);
  const [savingsResult, setSavingsResult] = useState<{
    totalAmount: number;
    totalDeposits: number;
    totalReturn: number;
  } | null>(null);

  const calculateSavings = () => {
    const monthlyRate = savingsRate / 100 / 12;
    const numPayments = savingsYears * 12;
    
    // Månadsvis sparande med ränta-på-ränta
    const futureValue = savingsAmount * (Math.pow(1 + monthlyRate, numPayments) - 1) / monthlyRate;
    const totalDeposits = savingsAmount * numPayments;
    const totalReturn = futureValue - totalDeposits;

    setSavingsResult({
      totalAmount: Math.round(futureValue),
      totalDeposits: Math.round(totalDeposits),
      totalReturn: Math.round(totalReturn)
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Finansiella kalkylatorer</CardTitle>
        <CardDescription>
          Räkna ut låne- och sparkostnader för att fatta bättre ekonomiska beslut
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="loan" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="loan">Lånekalkylator</TabsTrigger>
            <TabsTrigger value="savings">Sparkalkylator</TabsTrigger>
          </TabsList>
          
          <TabsContent value="loan" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="loanAmount">Lånebelopp (kr)</Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="interestRate">Ränta (%)</Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="loanTerm">Löptid (år)</Label>
                  <Input
                    id="loanTerm"
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <Button onClick={calculateLoan} className="w-full">
                  Beräkna lånet
                </Button>
              </div>

              {result && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Resultat</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-muted rounded-lg">
                      <span>Månadsavgift:</span>
                      <span className="font-semibold">{result.monthlyPayment.toLocaleString()} kr</span>
                    </div>
                    <div className="flex justify-between p-3 bg-muted rounded-lg">
                      <span>Total kostnad:</span>
                      <span className="font-semibold">{result.totalCost.toLocaleString()} kr</span>
                    </div>
                    <div className="flex justify-between p-3 bg-muted rounded-lg">
                      <span>Total ränta:</span>
                      <span className="font-semibold text-orange-600">{result.totalInterest.toLocaleString()} kr</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>💡 <strong>Tips:</strong> Jämför alltid effektiv ränta när du väljer lån. Skillnader på 0,5% kan spara tusenlappar över lånets löptid.</p>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="savings" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="savingsAmount">Månadsbelopp (kr)</Label>
                  <Input
                    id="savingsAmount"
                    type="number"
                    value={savingsAmount}
                    onChange={(e) => setSavingsAmount(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="savingsRate">Årlig avkastning (%)</Label>
                  <Input
                    id="savingsRate"
                    type="number"
                    step="0.1"
                    value={savingsRate}
                    onChange={(e) => setSavingsRate(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="savingsYears">Spartid (år)</Label>
                  <Input
                    id="savingsYears"
                    type="number"
                    value={savingsYears}
                    onChange={(e) => setSavingsYears(Number(e.target.value))}
                    className="mt-1"
                  />
                </div>
                <Button onClick={calculateSavings} className="w-full">
                  Beräkna sparandet
                </Button>
              </div>

              {savingsResult && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Resultat</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-muted rounded-lg">
                      <span>Slutbelopp:</span>
                      <span className="font-semibold text-green-600">{savingsResult.totalAmount.toLocaleString()} kr</span>
                    </div>
                    <div className="flex justify-between p-3 bg-muted rounded-lg">
                      <span>Totalt insatt:</span>
                      <span className="font-semibold">{savingsResult.totalDeposits.toLocaleString()} kr</span>
                    </div>
                    <div className="flex justify-between p-3 bg-muted rounded-lg">
                      <span>Avkastning:</span>
                      <span className="font-semibold text-green-600">{savingsResult.totalReturn.toLocaleString()} kr</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>💡 <strong>Tips:</strong> Ränta-på-ränta-effekten är kraftfull över tid. Börja spara tidigt och låt tiden arbeta för dig!</p>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}