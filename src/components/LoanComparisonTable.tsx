import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

interface LoanProvider {
  name: string;
  amount: string;
  apr: string;
  decisionTime: string;
  requirements: string[];
  pros: string[];
  cons: string[];
  rating: number;
  hasUCCheck: boolean;
  acceptsRemarks: boolean;
}

const loanProviders: LoanProvider[] = [
  {
    name: "Lendo",
    amount: "10 000 - 500 000 kr",
    apr: "4,95% - 19,9%",
    decisionTime: "Samma dag",
    requirements: ["Minst 18 år", "Fast inkomst", "Svensk medborgare"],
    pros: ["Snabb handläggning", "Konkurrenzkraftiga räntor", "Ingen UC-kontroll vid förfrågan"],
    cons: ["UC-kontroll vid slutligt beslut", "Kräver god ekonomi"],
    rating: 4.2,
    hasUCCheck: true,
    acceptsRemarks: false
  },
  {
    name: "Northmill Bank",
    amount: "15 000 - 300 000 kr", 
    apr: "6,9% - 16,9%",
    decisionTime: "Inom 24h",
    requirements: ["Minst 23 år", "Minst 15 000 kr/mån", "Svensk medborgare"],
    pros: ["Etablerad bank", "Transparenta villkor", "Bra kundservice"],
    cons: ["Högre ålderskrav", "Inkomstkrav"],
    rating: 4.0,
    hasUCCheck: true,
    acceptsRemarks: false
  },
  {
    name: "Ferratum",
    amount: "1 000 - 50 000 kr",
    apr: "15% - 35%",
    decisionTime: "15 minuter",
    requirements: ["Minst 20 år", "Inkomst minst 8 000 kr/mån"],
    pros: ["Mycket snabbt", "Accepterar anmärkningar", "Minimal UC-kontroll"],
    cons: ["Högre räntor", "Lägre lånebelopp"],
    rating: 3.5,
    hasUCCheck: false,
    acceptsRemarks: true
  },
  {
    name: "Credway",
    amount: "5 000 - 100 000 kr",
    apr: "12% - 28%",
    decisionTime: "30 minuter",
    requirements: ["Minst 18 år", "Regelbunden inkomst"],
    pros: ["Ingen UC-kontroll", "Accepterar betalningsanmärkningar", "Flexibla villkor"],
    cons: ["Högre räntor", "Begränsad lånesumma"],
    rating: 3.8,
    hasUCCheck: false,
    acceptsRemarks: true
  },
  {
    name: "Zmarta",
    amount: "25 000 - 500 000 kr",
    apr: "5,95% - 17,9%",
    decisionTime: "Samma dag",
    requirements: ["Minst 18 år", "Fast anställning", "Minst 20 000 kr/mån"],
    pros: ["Låga räntor", "Höga lånebelopp", "Etablerad aktör"],
    cons: ["Strikt UC-kontroll", "Höga inkomstkrav"],
    rating: 4.3,
    hasUCCheck: true,
    acceptsRemarks: false
  }
];

export default function LoanComparisonTable() {
  const ucFreeLenders = loanProviders.filter(provider => !provider.hasUCCheck);
  const traditionalLenders = loanProviders.filter(provider => provider.hasUCCheck);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">Långivare utan UC-kontroll</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {ucFreeLenders.map((provider, index) => (
            <Card key={index} className="border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{provider.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {"★".repeat(Math.floor(provider.rating))}
                      <span className="text-sm text-muted-foreground ml-1">
                        {provider.rating}/5
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-green-600">{provider.amount}</p>
                  <p className="text-sm text-muted-foreground">Ränta: {provider.apr}</p>
                  <p className="text-sm text-muted-foreground">Beslut: {provider.decisionTime}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Ingen UC
                  </Badge>
                  {provider.acceptsRemarks && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Accepterar anmärkningar
                    </Badge>
                  )}
                </div>
                
                <div>
                  <h5 className="font-semibold text-sm mb-2">Fördelar:</h5>
                  <ul className="text-sm space-y-1">
                    {provider.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-sm mb-2">Nackdelar:</h5>
                  <ul className="text-sm space-y-1">
                    {provider.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Ansök hos {provider.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6 text-center">Traditionella långivare (med UC-kontroll)</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {traditionalLenders.map((provider, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{provider.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {"★".repeat(Math.floor(provider.rating))}
                      <span className="text-sm text-muted-foreground ml-1">
                        {provider.rating}/5
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-blue-600">{provider.amount}</p>
                  <p className="text-sm text-muted-foreground">Ränta: {provider.apr}</p>
                  <p className="text-sm text-muted-foreground">Beslut: {provider.decisionTime}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    UC-kontroll
                  </Badge>
                </div>
                
                <div>
                  <h5 className="font-semibold text-sm mb-2">Fördelar:</h5>
                  <ul className="text-sm space-y-1">
                    {provider.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-sm mb-2">Nackdelar:</h5>
                  <ul className="text-sm space-y-1">
                    {provider.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" className="w-full">
                  Ansök hos {provider.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-amber-800 mb-2">Viktigt att komma ihåg</h4>
              <p className="text-amber-700 text-sm">
                Jämförelsen ovan är baserad på offentligt tillgänglig information från långivarnas webbplatser 
                per december 2024. Räntor och villkor kan variera beroende på din ekonomiska situation och 
                kan ändras utan förvarning. Kontrollera alltid aktuella villkor direkt hos långivaren.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}