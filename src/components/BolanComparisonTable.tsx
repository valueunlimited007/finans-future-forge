import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

export default function BolanComparisonTable() {
  const mortgageTypes = [
    {
      type: "Rörlig ränta",
      rate: "Från 0,84%",
      bindingPeriod: "Ingen bindning",
      pros: ["Ofta lägst ränta", "Ingen bindningstid", "Flexibelt"],
      cons: ["Räntan kan höjas när som helst", "Svårt att budgetera", "Risk vid räntehöjningar"],
      bestFor: "Den som tror på sänkta räntor eller vill ha flexibilitet",
      icon: <TrendingDown className="w-5 h-5 text-green-600" />
    },
    {
      type: "Bundet 1 år",
      rate: "Från 1,89%",
      bindingPeriod: "1 år",
      pros: ["Trygghet i 1 år", "Lägre ränta än längre bindning", "Balans mellan pris och trygghet"],
      cons: ["Högre än rörlig ränta", "Måste ombindas varje år", "Kan missa räntesänkningar"],
      bestFor: "Den som vill ha kortare förutsägbarhet",
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />
    },
    {
      type: "Bundet 2 år",
      rate: "Från 2,19%",
      bindingPeriod: "2 år",
      pros: ["Trygghet i 2 år", "Populäraste valet", "Bra balans"],
      cons: ["Högre än kortare bindning", "Låst även vid räntesänkningar"],
      bestFor: "Den som vill ha medellång trygghet",
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />
    },
    {
      type: "Bundet 3 år",
      rate: "Från 2,39%",
      bindingPeriod: "3 år",
      pros: ["Längre trygghet", "Undvik omförhandling i 3 år", "Stabila kostnader"],
      cons: ["Högre ränta", "Längre bindning vid räntesänkningar"],
      bestFor: "Den som prioriterar stabilitet",
      icon: <TrendingUp className="w-5 h-5 text-orange-600" />
    },
    {
      type: "Bundet 5 år",
      rate: "Från 2,79%",
      bindingPeriod: "5 år",
      pros: ["Maximal trygghet", "Slipper omförhandling länge", "Budget säkert"],
      cons: ["Högsta räntan", "Mycket låst"],
      bestFor: "Den som verkligen vill ha förutsägbarhet",
      icon: <TrendingUp className="w-5 h-5 text-red-600" />
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mortgageTypes.map((mortgage, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  {mortgage.icon}
                  <CardTitle className="text-lg">{mortgage.type}</CardTitle>
                </div>
                <Badge variant="secondary" className="bg-cyan-100 text-cyan-800">
                  {mortgage.rate}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Bindningstid: <span className="font-semibold">{mortgage.bindingPeriod}</span>
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h5 className="font-semibold text-sm mb-2 text-green-700">Fördelar:</h5>
                <ul className="text-sm space-y-1">
                  {mortgage.pros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-sm mb-2 text-red-700">Nackdelar:</h5>
                <ul className="text-sm space-y-1">
                  {mortgage.cons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm">
                  <span className="font-semibold">Passar för:</span> {mortgage.bestFor}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Tips: Kombinera olika bindningstider</h4>
              <p className="text-blue-700 dark:text-blue-200 text-sm mb-3">
                Många väljer att dela upp sitt bolån i delar med olika bindningstider. Till exempel:
              </p>
              <ul className="text-blue-700 dark:text-blue-200 text-sm space-y-1">
                <li>• 50% rörlig ränta (lägst kostnad just nu)</li>
                <li>• 30% bundet 2 år (medellång trygghet)</li>
                <li>• 20% bundet 5 år (långsiktig säkerhet)</li>
              </ul>
              <p className="text-blue-700 dark:text-blue-200 text-sm mt-3">
                På så sätt balanserar du kostnad mot trygghet och riskspridning.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skillnad mellan nominell och effektiv ränta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold mb-2">Nominell ränta</h5>
              <p className="text-sm text-muted-foreground">
                Den rena låneräntan utan avgifter. Detta är den ränta som används för att beräkna 
                dina månatliga räntekostnader. När du jämför bolån mellan olika banker ska du alltid 
                jämföra nominell ränta.
              </p>
              <p className="text-sm font-semibold mt-2">
                Exempel: 0,84% nominell ränta
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Effektiv ränta</h5>
              <p className="text-sm text-muted-foreground">
                Inkluderar nominell ränta plus alla avgifter som uppläggningsavgift, aviavgift etc. 
                Ger den verkliga årskostnaden för lånet i procent. Bra för att jämföra den totala 
                kostnaden mellan olika banker.
              </p>
              <p className="text-sm font-semibold mt-2">
                Exempel: 0,85% effektiv ränta
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button size="lg" className="fg-btn">
          Jämför bolåneräntor nu
        </Button>
      </div>
    </div>
  );
}
