import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Star, Gift, Shield, CreditCard, Plane, Car } from "lucide-react";

interface CreditCard {
  name: string;
  type: "cashback" | "travel" | "premium" | "store" | "basic" | "fuel";
  annualFee: string;
  cashbackRate?: string;
  milesRate?: string;
  interestFreeDays: string;
  creditLimit: string;
  features: string[];
  pros: string[];
  cons: string[];
  rating: number;
  recommended?: boolean;
  welcomeBonus?: string;
  issuer: string;
  url?: string;
  isPartner?: boolean;
}

interface OfferCard {
  id: string;
  name: string;
  url: string;
  annualFee: string;
  cashback: string;
  creditLimit: string;
  interestFreeDays: string;
  rating: number;
  highlights: string[];
  logo?: string;
  isPartner: boolean;
}

// Declare global FG_OFFERS for TypeScript
declare global {
  interface Window {
    FG_OFFERS?: {
      kreditkort?: OfferCard[];
    };
  }
}

const creditCards: CreditCard[] = [
  {
    name: "SEB Cashback Mastercard",
    type: "cashback",
    issuer: "SEB",
    annualFee: "295 kr (första året gratis)",
    cashbackRate: "1-3%",
    interestFreeDays: "56 dagar",
    creditLimit: "10 000 - 500 000 kr",
    features: ["Cashback på alla köp", "Reseförsäkringar", "Köpskydd", "Mobil app"],
    pros: ["Hög cashback-procent", "Lång räntefri period", "Etablerad bank", "Bra kundservice"],
    cons: ["Årsavgift efter första året", "Kräver god kreditvärdighet", "Begränsad cashback-kategori"],
    rating: 4.3,
    recommended: true,
    welcomeBonus: "Extra 1% cashback första 6 månaderna",
  },
  {
    name: "Nordea Gold Visa",
    type: "premium",
    issuer: "Nordea",
    annualFee: "795 kr",
    interestFreeDays: "56 dagar",
    creditLimit: "25 000 - 800 000 kr",
    features: ["Concierge service", "Lounge access", "Omfattande försäkringar", "Prioriterad service"],
    pros: ["Premium-förmåner", "Höga kreditlimiter", "Exklusiv service", "Global acceptans"],
    cons: ["Hög årsavgift", "Strikt kreditprövning", "Många förmåner kräver aktivering"],
    rating: 4.1,
    welcomeBonus: "50 000 bonuspoäng vid registrering"
  },
  {
    name: "Handelsbanken Resa Mastercard",
    type: "travel",
    issuer: "Handelsbanken",
    annualFee: "495 kr",
    milesRate: "2 miles/krona",
    interestFreeDays: "51 dagar",
    creditLimit: "15 000 - 400 000 kr",
    features: ["Miles-program", "Reseförsäkringar", "Lounge-rabatter", "Reseassistans"],
    pros: ["Bra miles-intjäning", "Omfattande reseförsäkringar", "Partnerskapen med flybolag", "Personlig service"],
    cons: ["Måttlig årsavgift", "Miles förfaller", "Begränsade partnershop"],
    rating: 4.0,
    welcomeBonus: "20 000 välkomstmiles"
  },
  {
    name: "Swedbank 1-2-3 Visa",
    type: "cashback",
    issuer: "Swedbank",
    annualFee: "195 kr",
    cashbackRate: "1-3%",
    interestFreeDays: "56 dagar",
    creditLimit: "10 000 - 300 000 kr",
    features: ["Kategoricashback", "Mobila betalningar", "Grundförsäkringar", "Budgetverktyg"],
    pros: ["Låg årsavgift", "Hög cashback i kategorier", "Integrerat med bankapp", "Flexibel användning"],
    cons: ["Begränsad cashback-procent", "Roterande kategorier", "Måttliga försäkringar"],
    rating: 3.9,
    welcomeBonus: "Dubbel cashback första 3 månaderna"
  },
  {
    name: "ICA Banken Mastercard",
    type: "store",
    issuer: "ICA Banken",
    annualFee: "Ingen",
    cashbackRate: "1% + ICA-bonuspoäng",
    interestFreeDays: "56 dagar",
    creditLimit: "5 000 - 200 000 kr",
    features: ["ICA-bonuspoäng", "Specialerbjudanden", "Matvarurabatter", "Ingen årsavgift"],
    pros: ["Ingen årsavgift", "Extra ICA-poäng", "Bra för matinköp", "Enkel ansökan"],
    cons: ["Begränsad till ICA-ekosystem", "Lägre kreditlimiter", "Färre premiumförmåner"],
    rating: 3.7,
    welcomeBonus: "500 ICA-bonuspoäng vid registrering"
  },
  {
    name: "Länsförsäkringar Visa Classic",
    type: "basic",
    issuer: "Länsförsäkringar",
    annualFee: "Ingen",
    interestFreeDays: "45 dagar",
    creditLimit: "8 000 - 150 000 kr",
    features: ["Grundförsäkringar", "Medlemsfördelar", "Personlig rådgivning", "Lokal service"],
    pros: ["Ingen årsavgift", "Medlemsfördelar", "Personlig service", "Lokala kontor"],
    cons: ["Kortare räntefri period", "Begränsade förmåner", "Kräver medlemskap"],
    rating: 3.8,
    welcomeBonus: "3 månaders gratis kortförsäkring"
  },
  {
    name: "Circle K Mastercard",
    type: "fuel",
    issuer: "Resurs Bank",
    annualFee: "Ingen",
    cashbackRate: "5% på drivmedel, 1% övrigt",
    interestFreeDays: "56 dagar",
    creditLimit: "5 000 - 100 000 kr",
    features: ["Drivmedelsrabatt", "Circle K Extra bonuspoäng", "Bilförsäkringar", "Vägassistans"],
    pros: ["Hög cashback på drivmedel", "Ingen årsavgift", "Bilrelaterade förmåner", "Enkelt att få"],
    cons: ["Begränsad till Circle K", "Lägre cashback på annat", "Färre premiumförmåner"],
    rating: 3.6,
    welcomeBonus: "100 kr rabatt på första tankningen"
  },
  {
    name: "Klarna Card",
    type: "basic",
    issuer: "Klarna",
    annualFee: "Ingen",
    cashbackRate: "1%",
    interestFreeDays: "30 dagar",
    creditLimit: "2 000 - 50 000 kr",
    features: ["Flexibla betalningar", "Köp nu, betala senare", "Budgetverktyg", "Instant notifications"],
    pros: ["Modern app-upplevelse", "Flexibla betalningsalternativ", "Ingen årsavgift", "Snabb ansökan"],
    cons: ["Kortare räntefri period", "Lägre kreditlimiter", "Färre traditionella förmåner"],
    rating: 3.5,
    welcomeBonus: "1% extra cashback första månaden"
  },
  {
    name: "American Express Green Card",
    type: "premium",
    issuer: "American Express",
    annualFee: "895 kr",
    milesRate: "1-3 poäng/krona",
    interestFreeDays: "Ingen förbestämd gräns",
    creditLimit: "Ingen förbestämd gräns",
    features: ["Membership Rewards", "Exklusiva erbjudanden", "Concierge", "Försäkringar"],
    pros: ["Prestigefull", "Flexibel betalning", "Stark belöningsstruktur", "Global acceptans"],
    cons: ["Hög årsavgift", "Mindre acceptans i Sverige", "Komplex poängsystem"],
    rating: 4.2,
    welcomeBonus: "40 000 Membership Rewards-poäng"
  },
  {
    name: "Danske Bank Visa Guld",
    type: "premium",
    issuer: "Danske Bank",
    annualFee: "695 kr",
    interestFreeDays: "56 dagar",
    creditLimit: "20 000 - 600 000 kr",
    features: ["Guldförmåner", "Reseförsäkringar", "Köpskydd", "Prioriterad kundservice"],
    pros: ["Premium-status", "Omfattande försäkringar", "Hög kreditlimit", "Nordisk bank"],
    cons: ["Hög årsavgift", "Begränsad i Sverige", "Många villkor för förmåner"],
    rating: 3.9,
    welcomeBonus: "Första året avgiftsfritt"
  }
];

export default function CreditCardComparisonTable() {
  const [allCards, setAllCards] = useState<CreditCard[]>(creditCards);

  // Transform offer to CreditCard format
  const transformOfferToCard = (offer: OfferCard): CreditCard => {
    // Determine card type based on highlights and cashback info
    let type: CreditCard['type'] = "basic";
    const highlights = offer.highlights.join(' ').toLowerCase();
    const cashback = offer.cashback.toLowerCase();
    
    if (cashback.includes('cashback') || cashback.includes('%')) type = "cashback";
    else if (highlights.includes('resa') || highlights.includes('travel')) type = "travel";
    else if (highlights.includes('premium') || offer.annualFee !== '0 kr') type = "premium";
    else if (highlights.includes('butik') || highlights.includes('ica')) type = "store";
    
    return {
      name: offer.name,
      type,
      issuer: offer.name.split(' ')[0], // Use first word as issuer
      annualFee: offer.annualFee,
      cashbackRate: offer.cashback !== 'Nej' ? offer.cashback : undefined,
      interestFreeDays: offer.interestFreeDays,
      creditLimit: offer.creditLimit,
      features: offer.highlights,
      pros: offer.highlights.slice(0, 3), // Use highlights as pros
      cons: [], // No cons data available from offers
      rating: offer.rating,
      recommended: offer.isPartner,
      url: offer.url,
      isPartner: offer.isPartner
    };
  };

  // Load offers and combine with static cards
  useEffect(() => {
    const loadOffers = () => {
      const offerCards = window.FG_OFFERS?.kreditkort || [];
      const partnerCards = offerCards
        .filter(offer => offer.isPartner)
        .map(transformOfferToCard);
      
      // Combine static cards with partner offers, prioritizing partners
      const combined = [...partnerCards, ...creditCards];
      setAllCards(combined);
    };

    // Load initial offers
    loadOffers();

    // Listen for offers updates
    const handleOffersUpdate = () => loadOffers();
    document.addEventListener('fg:offers-updated', handleOffersUpdate);

    return () => {
      document.removeEventListener('fg:offers-updated', handleOffersUpdate);
    };
  }, []);

  const cashbackCards = allCards.filter(card => card.type === "cashback");
  const travelCards = allCards.filter(card => card.type === "travel");
  const premiumCards = allCards.filter(card => card.type === "premium");
  const basicCards = allCards.filter(card => card.type === "basic");
  const storeCards = allCards.filter(card => card.type === "store");
  const fuelCards = allCards.filter(card => card.type === "fuel");

  const getTypeIcon = (type: CreditCard['type']) => {
    switch (type) {
      case "cashback": return <Gift className="w-5 h-5" />;
      case "travel": return <Plane className="w-5 h-5" />;
      case "premium": return <Star className="w-5 h-5" />;
      case "store": return <CreditCard className="w-5 h-5" />;
      case "basic": return <Shield className="w-5 h-5" />;
      case "fuel": return <Car className="w-5 h-5" />;
    }
  };

  const getButtonStyles = (type: CreditCard['type']) => {
    switch (type) {
      case "cashback": return "bg-green-600 hover:bg-green-700 text-white";
      case "travel": return "bg-blue-600 hover:bg-blue-700 text-white";
      case "premium": return "bg-purple-600 hover:bg-purple-700 text-white";
      case "store": return "bg-orange-600 hover:bg-orange-700 text-white";
      case "basic": return "bg-gray-600 hover:bg-gray-700 text-white";
      case "fuel": return "bg-red-600 hover:bg-red-700 text-white";
    }
  };

  const CardComponent = ({ card }: { card: CreditCard }) => {
    const buttonStyles = getButtonStyles(card.type);
    
    return (
      <Card className={`relative flex flex-col h-full ${card.recommended ? 'border-2 border-green-400 bg-green-50' : ''}`}>
        {card.recommended && (
          <div className="absolute -top-2 left-4 z-10">
            <Badge className="bg-green-500 text-white shadow-md">
              <Star className="w-3 h-3 mr-1" />
              Rekommenderad
            </Badge>
          </div>
        )}
        
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <CardTitle className="flex items-center gap-2 text-lg">
                {getTypeIcon(card.type)}
                {card.name}
              </CardTitle>
              <CardDescription className="mt-1">
                {card.issuer} • {card.interestFreeDays} räntefria dagar
              </CardDescription>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{card.rating}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm mt-4">
            <div>
              <span className="text-muted-foreground">Årsavgift:</span>
              <div className="font-medium">{card.annualFee}</div>
            </div>
            <div>
              <span className="text-muted-foreground">Kreditlimit:</span>
              <div className="font-medium">{card.creditLimit}</div>
            </div>
            {card.cashbackRate && (
              <div>
                <span className="text-muted-foreground">Cashback:</span>
                <div className="font-medium text-green-600">{card.cashbackRate}</div>
              </div>
            )}
            {card.milesRate && (
              <div>
                <span className="text-muted-foreground">Miles:</span>
                <div className="font-medium text-blue-600">{card.milesRate}</div>
              </div>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4 flex-1">
          {card.welcomeBonus && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">Välkomsterbjudande</span>
              </div>
              <p className="text-sm text-yellow-700 mt-1">{card.welcomeBonus}</p>
            </div>
          )}
          
          <div>
            <h5 className="font-semibold text-sm mb-2">Huvudfunktioner:</h5>
            <div className="flex flex-wrap gap-1">
              {card.features.map((feature, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-sm mb-2 text-green-700">Fördelar:</h5>
              <ul className="text-sm space-y-1">
                {card.pros.slice(0, 3).map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-sm mb-2 text-red-700">Nackdelar:</h5>
              <ul className="text-sm space-y-1">
                {card.cons && card.cons.length > 0 ? (
                  card.cons.slice(0, 3).map((con, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <XCircle className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-muted-foreground text-xs italic">
                    Kontakta utgivaren för fullständig information
                  </li>
                )}
              </ul>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="pt-0">
          <Button 
            className={`w-full ${buttonStyles}`}
            asChild={!!card.url}
          >
            {card.url ? (
              <a href={card.url} target="_blank" rel="noopener noreferrer">
                Ansök om {card.name}
              </a>
            ) : (
              <span>Ansök om {card.name}</span>
            )}
          </Button>
        </CardFooter>
      </Card>
    );
  };

  return (
    <div className="space-y-12">
      {/* Basic Cards */}
      {basicCards.length > 0 && (
        <div id="grundkort">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
              <Shield className="w-6 h-6 text-gray-600" />
              Grundkort - Enkla och kostnadsfria
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enkla kreditkort utan årsavgift. Perfekt för nybörjare eller som kompletterande kort.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
            {basicCards.map((card, index) => (
              <CardComponent key={index} card={card} />
            ))}
          </div>
        </div>
      )}

      {/* Cashback Cards */}
      {cashbackCards.length > 0 && (
        <div id="cashback">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
              <Gift className="w-6 h-6 text-green-600" />
              Cashback-kort - Få pengar tillbaka
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Få pengar tillbaka på dina köp. Perfekt för dig som vill tjäna på dina vardagsköp.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
            {cashbackCards.map((card, index) => (
              <CardComponent key={index} card={card} />
            ))}
          </div>
        </div>
      )}

      {/* Travel Cards */}
      {travelCards.length > 0 && (
        <div id="resor">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
              <Plane className="w-6 h-6 text-blue-600" />
              Resekort - Miles och reseförmåner
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Samla miles och få reseförmåner. Bäst för dig som reser ofta och vill maximera dina reseupplevelser.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
            {travelCards.map((card, index) => (
              <CardComponent key={index} card={card} />
            ))}
          </div>
        </div>
      )}

      {/* Premium Cards */}
      {premiumCards.length > 0 && (
        <div id="premium">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
              <Star className="w-6 h-6 text-purple-600" />
              Premiumkort - Exklusiva förmåner
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Premiumkort med exklusiva förmåner och status. För dig som värdesätter service och prestisje.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
            {premiumCards.map((card, index) => (
              <CardComponent key={index} card={card} />
            ))}
          </div>
        </div>
      )}

      {/* Store Cards */}
      {storeCards.length > 0 && (
        <div id="butikskort">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
              <CreditCard className="w-6 h-6 text-orange-600" />
              Butikskort - Extra rabatter och poäng
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kort kopplade till specifika butiker med extra rabatter och bonuspoäng.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
            {storeCards.map((card, index) => (
              <CardComponent key={index} card={card} />
            ))}
          </div>
        </div>
      )}

      {/* Fuel Cards */}
      {fuelCards.length > 0 && (
        <div id="bensin">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3">
              <Car className="w-6 h-6 text-red-600" />
              Bensin- och bilkort
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialkort för bilägare med rabatter på drivmedel och bilrelaterade tjänster.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
            {fuelCards.map((card, index) => (
              <CardComponent key={index} card={card} />
            ))}
          </div>
        </div>
      )}

      {/* Summary */}
      <Card className="bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-violet-800">Sammanfattning av kreditkortsjämförelsen</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Bäst cashback:</h4>
                <ul className="text-sm space-y-1">
                  <li>• SEB Cashback: upp till 3%</li>
                  <li>• Circle K: 5% på drivmedel</li>
                  <li>• Swedbank 1-2-3: kategoricashback</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">Bäst för resenärer:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Handelsbanken Resa: 2 miles/kr</li>
                  <li>• Amex Green: flexibel poänginsamling</li>
                  <li>• Nordea Gold: lounge access</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-700 mb-2">Ingen årsavgift:</h4>
                <ul className="text-sm space-y-1">
                  <li>• ICA Banken Mastercard</li>
                  <li>• Länsförsäkringar Classic</li>
                  <li>• Circle K Mastercard</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              * Villkor och erbjudanden kan ändras. Kontrollera alltid aktuella villkor hos utgivaren.
              Jämförelsen uppdaterad december 2024.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}