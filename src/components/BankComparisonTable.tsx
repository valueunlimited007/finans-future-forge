import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Star, TrendingUp, Shield, Clock } from "lucide-react";

interface Bank {
  name: string;
  logo?: string;
  amount: string;
  apr: string;
  decisionTime: string;
  requirements: string[];
  pros: string[];
  cons: string[];
  rating: number;
  specialOffer?: string;
  category: "traditional" | "digital" | "niche";
  ucRequired: boolean;
  minIncome: string;
}

const banks: Bank[] = [
  {
    name: "SEB",
    amount: "50 000 - 600 000 kr",
    apr: "4,95% - 12,95%",
    decisionTime: "1-3 dagar",
    requirements: ["Fast anställning", "Minst 25 000 kr/mån", "Bor i Sverige", "Inga betalningsanmärkningar"],
    pros: ["Låga räntor", "Stor bank med lång historia", "Personlig rådgivning", "Flexibla återbetalningsvillkor"],
    cons: ["Strikt kreditprövning", "Högre inkomstkrav", "Längre handläggningstid"],
    rating: 4.2,
    category: "traditional",
    ucRequired: true,
    minIncome: "25 000 kr/mån",
    specialOffer: "Första månaden räntefritt för nya kunder"
  },
  {
    name: "Handelsbanken",
    amount: "50 000 - 500 000 kr",
    apr: "5,25% - 13,45%",
    decisionTime: "2-4 dagar",
    requirements: ["Svensk medborgare", "Fast inkomst", "Minst 20 000 kr/mån", "God kreditvärdighet"],
    pros: ["Lokala kontor", "Personlig service", "Transparenta villkor", "Möjlighet till förhandling"],
    cons: ["Begränsad digitalisering", "Högre räntor än vissa konkurrenter", "Kräver bankrelation"],
    rating: 4.0,
    category: "traditional",
    ucRequired: true,
    minIncome: "20 000 kr/mån"
  },
  {
    name: "Swedbank",
    amount: "30 000 - 500 000 kr", 
    apr: "5,15% - 13,95%",
    decisionTime: "1-2 dagar",
    requirements: ["Minst 18 år", "Fast anställning", "Minst 18 000 kr/mån", "Svensk personnummer"],
    pros: ["Snabb handläggning", "Stor bankutmanning", "Mobil app", "Konkurrenskraftiga räntor"],
    cons: ["Kräver god UC", "Avgifter för extra tjänster", "Strikt inkomstprövning"],
    rating: 4.1,
    category: "traditional",
    ucRequired: true,
    minIncome: "18 000 kr/mån",
    specialOffer: "Rabatterad ränta för Swedbank-kunder"
  },
  {
    name: "Nordea",
    amount: "50 000 - 700 000 kr",
    apr: "4,75% - 12,75%",
    decisionTime: "2-5 dagar",
    requirements: ["Minst 23 år", "Fast anställning minst 1 år", "Minst 30 000 kr/mån", "Inga anmärkningar"],
    pros: ["Låga räntor för höginkomsttagare", "Stora lånebelopp", "Nordisk bank", "Premium-service"],
    cons: ["Höga inkomstkrav", "Längre handläggningstid", "Avgifter för förtida återbetalning"],
    rating: 4.3,
    category: "traditional",
    ucRequired: true,
    minIncome: "30 000 kr/mån"
  },
  {
    name: "Länsförsäkringar Bank",
    amount: "25 000 - 400 000 kr",
    apr: "5,95% - 14,95%",
    decisionTime: "1-3 dagar",
    requirements: ["Medlem i Länsförsäkringar", "Fast inkomst", "Minst 16 000 kr/mån", "Bor i Sverige"],
    pros: ["Medlemsfördelar", "Lokala kontor", "Helkundsrabatter", "Personlig service"],
    cons: ["Kräver medlemskap", "Begränsade lånebelopp", "Ej tillgängligt överallt"],
    rating: 3.9,
    category: "niche",
    ucRequired: true,
    minIncome: "16 000 kr/mån",
    specialOffer: "Extra rabatt för medlemmar med försäkringar"
  },
  {
    name: "ICA Banken",
    amount: "15 000 - 300 000 kr",
    apr: "6,95% - 16,95%",
    decisionTime: "Samma dag",
    requirements: ["Minst 18 år", "Fast inkomst", "Minst 12 000 kr/mån", "ICA-kort"],
    pros: ["Snabba beslut", "ICA-bonuspoäng", "Enkel digital ansökan", "Flexibla villkor"],
    cons: ["Högre räntor", "Begränsade lånebelopp", "Kräver ICA-relation"],
    rating: 3.7,
    category: "niche",
    ucRequired: true,
    minIncome: "12 000 kr/mån",
    specialOffer: "Dubbla ICA-poäng första året"
  },
  {
    name: "Marginalen Bank",
    amount: "20 000 - 500 000 kr",
    apr: "5,95% - 17,95%",
    decisionTime: "30 minuter - 24h",
    requirements: ["Minst 18 år", "Fast anställning", "Minst 15 000 kr/mån", "Ingen Kronofogden"],
    pros: ["Mycket snabba beslut", "Digital bank", "Flexibel kreditprövning", "Bra kundservice"],
    cons: ["Högre räntor än storbankerna", "Mindre känd bank", "Begränsad fysisk närvaro"],
    rating: 3.8,
    category: "digital",
    ucRequired: true,
    minIncome: "15 000 kr/mån"
  },
  {
    name: "Northmill Bank",
    amount: "15 000 - 300 000 kr",
    apr: "6,9% - 16,9%",
    decisionTime: "Inom 24h",
    requirements: ["Minst 23 år", "Minst 15 000 kr/mån", "Svensk medborgare", "Mobilbank-ID"],
    pros: ["Etablerad digital bank", "Transparenta villkor", "Bra mobilapp", "Snabb service"],
    cons: ["Högre ålderskrav", "Högre räntor", "Mindre lånebelopp"],
    rating: 4.0,
    category: "digital",
    ucRequired: true,
    minIncome: "15 000 kr/mån"
  },
  {
    name: "Resurs Bank",
    amount: "10 000 - 350 000 kr",
    apr: "7,95% - 19,95%",
    decisionTime: "15 minuter",
    requirements: ["Minst 18 år", "Regelbunden inkomst", "Minst 10 000 kr/mån", "Svensk adress"],
    pros: ["Mycket snabba beslut", "Låga inkomstkrav", "Accepterar deltidsarbete", "Enkel ansökan"],
    cons: ["Högre räntor", "Variabel ränta", "Mindre etablerad för privatlån"],
    rating: 3.6,
    category: "digital",
    ucRequired: true,
    minIncome: "10 000 kr/mån"
  },
  {
    name: "Lendo (förmedlare)",
    amount: "10 000 - 500 000 kr",
    apr: "4,95% - 19,9%",
    decisionTime: "Samma dag",
    requirements: ["Minst 18 år", "Fast inkomst", "Svensk medborgare", "Inga aktiva skulder Kronofogden"],
    pros: ["Jämför många banker", "Ingen kostnad att jämföra", "Snabb process", "Bred marknad"],
    cons: ["Ej direkt bank", "Delar data med partners", "Varierad kvalitet på erbjudanden"],
    rating: 4.1,
    category: "digital",
    ucRequired: true,
    minIncome: "Varierar per bank",
    specialOffer: "Jämför 17 banker samtidigt"
  }
];

export default function BankComparisonTable() {
  const traditionalBanks = banks.filter(bank => bank.category === "traditional");
  const digitalBanks = banks.filter(bank => bank.category === "digital");
  const nicheBanks = banks.filter(bank => bank.category === "niche");

  const BankCard = ({ bank }: { bank: Bank }) => {
    const getCategoryColor = (category: Bank['category']) => {
      switch (category) {
        case "traditional": return "blue";
        case "digital": return "green";
        case "niche": return "purple";
      }
    };

    const categoryColor = getCategoryColor(bank.category);

    return (
      <Card className={`border-l-4 border-l-${categoryColor}-500`}>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <CardTitle className="text-lg flex items-center gap-2">
                {bank.name}
                {bank.specialOffer && (
                  <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-800">
                    Erbjudande
                  </Badge>
                )}
              </CardTitle>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center">
                  {Array.from({length: Math.floor(bank.rating)}).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">
                    {bank.rating}/5
                  </span>
                </div>
                <Badge variant="outline" className={`text-${categoryColor}-600 border-${categoryColor}-300`}>
                  {bank.category === "traditional" ? "Storbank" : 
                   bank.category === "digital" ? "Digital" : "Nischbank"}
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="space-y-2 mt-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-lg font-semibold text-green-600">{bank.amount}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Ränta:</span>
                <span className="font-medium">{bank.apr}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>{bank.decisionTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Min inkomst:</span>
                <span className="font-medium">{bank.minIncome}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-500" />
                <span>{bank.ucRequired ? "UC krävs" : "Ingen UC"}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {bank.specialOffer && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-sm text-yellow-800 font-medium">
                🎯 {bank.specialOffer}
              </p>
            </div>
          )}
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-sm mb-2 text-green-700">Fördelar:</h5>
              <ul className="text-sm space-y-1">
                {bank.pros.map((pro, idx) => (
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
                {bank.cons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t pt-4">
            <h5 className="font-semibold text-sm mb-2">Krav för ansökan:</h5>
            <div className="flex flex-wrap gap-2">
              {bank.requirements.map((req, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {req}
                </Badge>
              ))}
            </div>
          </div>

          <Button className={`w-full bg-${categoryColor}-600 hover:bg-${categoryColor}-700`}>
            Ansök hos {bank.name}
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-12">
      {/* Traditional Banks */}
      <div>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
            <Shield className="w-6 h-6 text-blue-600" />
            Storbanker - Traditionella alternativ
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Etablerade svenska storbanker med låga räntor men striktare krav. 
            Bäst för dig med god ekonomi och stabil anställning.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
          {traditionalBanks.map((bank, index) => (
            <BankCard key={index} bank={bank} />
          ))}
        </div>
      </div>

      {/* Digital Banks */}
      <div>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
            <Clock className="w-6 h-6 text-green-600" />
            Digitalbanker - Snabba beslut
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Moderna banker med fokus på snabbhet och digital upplevelse. 
            Perfekt för dig som vill ha snabba beslut och smidig hantering online.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
          {digitalBanks.map((bank, index) => (
            <BankCard key={index} bank={bank} />
          ))}
        </div>
      </div>

      {/* Niche Banks */}
      <div>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
            <Star className="w-6 h-6 text-purple-600" />
            Nischbanker - Specialerbjudanden
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Banker med unika erbjudanden och medlemsfördelar. 
            Ofta förmånliga villkor om du redan är kund eller medlem.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
          {nicheBanks.map((bank, index) => (
            <BankCard key={index} bank={bank} />
          ))}
        </div>
      </div>

      {/* Summary Card */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-blue-800">Sammanfattning av bankjämförelsen</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Lägsta räntor:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Nordea: från 4,75%</li>
                  <li>• SEB: från 4,95%</li>
                  <li>• Lendo: från 4,95%</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Snabbaste beslut:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Resurs Bank: 15 minuter</li>
                  <li>• Marginalen: 30 minuter</li>
                  <li>• ICA Banken: samma dag</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Störst lånebelopp:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Nordea: upp till 700 000 kr</li>
                  <li>• SEB: upp till 600 000 kr</li>
                  <li>• Lendo/Marginalen: 500 000 kr</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              * Räntor och villkor kan ändras. Kontrollera alltid aktuella villkor direkt hos banken.
              Jämförelsen uppdaterad december 2024.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}