import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Clock, Star, TrendingUp } from "lucide-react";

const lenders = [
  {
    name: "SEB",
    type: "Storbank",
    minAmount: "100 000 kr",
    maxAmount: "50 miljoner kr",
    interestRate: "Från 4,2%",
    processingTime: "2-4 veckor",
    collateral: "Krävs för större lån",
    features: ["Personlig rådgivning", "Bred produktportfölj", "Etablerad relation"],
    pros: ["Låga räntor", "Stora lånebelopp", "Trygg partner"],
    cons: ["Strikt kreditbedömning", "Långsam process", "Kräver ofta säkerheter"],
    rating: 4.2,
    recommended: false
  },
  {
    name: "Nordea",
    type: "Storbank", 
    minAmount: "150 000 kr",
    maxAmount: "25 miljoner kr",
    interestRate: "Från 4,5%",
    processingTime: "2-3 veckor",
    collateral: "Ja för lån över 500k",
    features: ["Digital ansökan", "Företagsrådgivning", "Helhetslösningar"],
    pros: ["Konkurrenskraftiga räntor", "Digital process", "Bred marknadskunskap"],
    cons: ["Höga krav", "Begränsad flexibilitet", "Långa handläggningstider"],
    rating: 4.0,
    recommended: false
  },
  {
    name: "Handelsbanken",
    type: "Storbank",
    minAmount: "200 000 kr", 
    maxAmount: "10 miljoner kr",
    interestRate: "Från 4,8%",
    processingTime: "1-3 veckor",
    collateral: "Beroende på belopp",
    features: ["Lokal närhet", "Personlig service", "Decentraliserad beslut"],
    pros: ["Snabbare lokala beslut", "Personlig relation", "Flexibel bedömning"],
    cons: ["Varierande kompetens", "Mindre digitala lösningar", "Begränsad produktportfölj"],
    rating: 4.1,
    recommended: false
  },
  {
    name: "Swedbank",
    type: "Storbank",
    minAmount: "100 000 kr",
    maxAmount: "20 miljoner kr", 
    interestRate: "Från 4,3%",
    processingTime: "2-4 veckor",
    collateral: "Krävs över 1 miljon",
    features: ["Stark inom SME", "Digital plattform", "Sektorexpertis"],
    pros: ["Bra SME-fokus", "Konkurrenskraftiga villkor", "Branschkunskap"],
    cons: ["Strikt kreditpolicy", "Begränsad flexibilitet", "Traditionell approach"],
    rating: 4.0,
    recommended: false
  },
  {
    name: "Almi",
    type: "Statlig",
    minAmount: "100 000 kr",
    maxAmount: "25 miljoner kr",
    interestRate: "Från 3,8%",
    processingTime: "3-6 veckor", 
    collateral: "Ofta krävs",
    features: ["Statligt stöd", "Rådgivning", "Tillväxtfokus"],
    pros: ["Låga räntor", "Accepterar högre risk", "Gratis rådgivning"],
    cons: ["Längre process", "Specifika krav", "Begränsad tillgänglighet"],
    rating: 4.3,
    recommended: true
  },
  {
    name: "Collector Bank",
    type: "Specialistbank",
    minAmount: "50 000 kr",
    maxAmount: "5 miljoner kr",
    interestRate: "Från 6,5%",
    processingTime: "1-2 veckor",
    collateral: "Nej för mindre lån",
    features: ["Snabba beslut", "Flexibel kreditbedömning", "Digital process"],
    pros: ["Snabb handläggning", "Mindre krav", "Enkel ansökan"],
    cons: ["Högre räntor", "Begränsade belopp", "Kortare löptider"],
    rating: 3.8,
    recommended: false
  },
  {
    name: "Marginalen Bank",
    type: "Digitalbank",
    minAmount: "25 000 kr",
    maxAmount: "2 miljoner kr",
    interestRate: "Från 7,2%",
    processingTime: "24-48 timmar",
    collateral: "Nej",
    features: ["Helt digital", "Snabba beslut", "Ingen säkerhet"],
    pros: ["Mycket snabbt", "Enkel process", "Ingen säkerhet krävs"],
    cons: ["Höga räntor", "Små lånebelopp", "Begränsad service"],
    rating: 3.5,
    recommended: false
  },
  {
    name: "Resurs Bank",
    type: "Specialistbank", 
    minAmount: "50 000 kr",
    maxAmount: "3 miljoner kr",
    interestRate: "Från 6,8%",
    processingTime: "3-7 dagar",
    collateral: "Sällan krävs",
    features: ["Branschexpertis", "Flexibla lösningar", "Snabb service"],
    pros: ["Snabbare än storbanker", "Flexibel approach", "Branschfokus"],
    cons: ["Högre räntor", "Begränsad storlek", "Mindre etablerad"],
    rating: 3.7,
    recommended: false
  },
  {
    name: "TF Bank",
    type: "Digitalbank",
    minAmount: "30 000 kr", 
    maxAmount: "1 miljon kr",
    interestRate: "Från 8,5%",
    processingTime: "1-3 dagar",
    collateral: "Nej",
    features: ["Helt online", "Mycket snabbt", "Enkel kreditbedömning"],
    pros: ["Extremt snabbt", "Minimal dokumentation", "24/7 tillgänglig"],
    cons: ["Mycket höga räntor", "Mycket små lån", "Begränsad support"],
    rating: 3.2,
    recommended: false
  },
  {
    name: "Svea Bank",
    type: "Specialistbank",
    minAmount: "100 000 kr",
    maxAmount: "10 miljoner kr", 
    interestRate: "Från 5,9%",
    processingTime: "1-2 veckor",
    collateral: "Ofta krävs",
    features: ["B2B-fokus", "Factoring", "Flexibla lösningar"],
    pros: ["Företagsfokus", "Helhetslösningar", "God branschkunskap"],
    cons: ["Kräver ofta säkerheter", "Mindre känd", "Begränsad närvaro"],
    rating: 3.9,
    recommended: false
  }
];

export default function ForetagslanComparisonTable() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">Jämför företagslån från 10 långivare</h3>
        <p className="text-muted-foreground">
          Vi har jämfört villkor, räntor och processer för att hjälpa dig hitta rätt finansiering
        </p>
      </div>

      <div className="grid gap-6">
        {lenders.map((lender, index) => (
          <Card key={index} className={`relative ${lender.recommended ? 'border-emerald-200 bg-emerald-50' : ''}`}>
            {lender.recommended && (
              <div className="absolute -top-3 left-6">
                <Badge className="bg-emerald-500 text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Rekommenderad
                </Badge>
              </div>
            )}
            
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-3">
                    {lender.name}
                    <Badge variant="outline">{lender.type}</Badge>
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {lender.minAmount} - {lender.maxAmount}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-emerald-600">{lender.interestRate}</div>
                  <div className="text-sm text-muted-foreground">Effektiv ränta</div>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{lender.rating}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-semibold mb-1">Handläggningstid</div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-blue-500" />
                    {lender.processingTime}
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Säkerhet</div>
                  <div>{lender.collateral}</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Typ</div>
                  <div>{lender.type}</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">✓ Fördelar</h4>
                  <ul className="space-y-1 text-sm">
                    {lender.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-700">⚠ Nackdelar</h4>
                  <ul className="space-y-1 text-sm">
                    {lender.cons.map((con, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <XCircle className="w-3 h-3 text-red-500" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Specialiteter</h4>
                <div className="flex flex-wrap gap-2">
                  {lender.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 pt-2">
                <Button className="flex-1">
                  Ansök hos {lender.name}
                </Button>
                <Button variant="outline">
                  Läs mer
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <TrendingUp className="w-12 h-12 text-blue-600 mx-auto" />
            <h3 className="text-xl font-bold text-blue-800">Behöver du hjälp att välja?</h3>
            <p className="text-blue-700 max-w-2xl mx-auto">
              Varje företag har unika behov. Kontakta oss för kostnadsfri rådgivning och 
              hjälp med att hitta den finansieringslösning som passar just ditt företag bäst.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Få kostnadsfri rådgivning
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}