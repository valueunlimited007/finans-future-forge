import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Filter, X } from "lucide-react";

interface LoanOffer {
  id: string;
  lender: string;
  minRate: number;
  maxRate: number;
  maxAmount: number;
  payoutDays: string;
  noUC: boolean;
  acceptsBadCredit: boolean;
  url: string;
}

// Mock data - ersätt med riktig data från Adtraction
const mockOffers: LoanOffer[] = [
  {
    id: "1",
    lender: "Marginalen Bank",
    minRate: 4.75,
    maxRate: 19.9,
    maxAmount: 350000,
    payoutDays: "1-2 dagar",
    noUC: false,
    acceptsBadCredit: false,
    url: "#"
  },
  {
    id: "2",
    lender: "Northmill",
    minRate: 5.95,
    maxRate: 21.5,
    maxAmount: 300000,
    payoutDays: "Samma dag",
    noUC: false,
    acceptsBadCredit: true,
    url: "#"
  },
  {
    id: "3",
    lender: "Resurs Bank",
    minRate: 6.45,
    maxRate: 24.9,
    maxAmount: 400000,
    payoutDays: "1-3 dagar",
    noUC: false,
    acceptsBadCredit: false,
    url: "#"
  }
];

export default function InteractiveComparisonTable() {
  const [rateRange, setRateRange] = useState<number[]>([0, 30]);
  const [amountRange, setAmountRange] = useState<number[]>([10000, 600000]);
  const [filterNoUC, setFilterNoUC] = useState(false);
  const [filterBadCredit, setFilterBadCredit] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const filteredOffers = mockOffers.filter(offer => {
    if (offer.minRate < rateRange[0] || offer.maxRate > rateRange[1]) return false;
    if (offer.maxAmount < amountRange[0]) return false;
    if (filterNoUC && !offer.noUC) return false;
    if (filterBadCredit && !offer.acceptsBadCredit) return false;
    return true;
  });

  const resetFilters = () => {
    setRateRange([0, 30]);
    setAmountRange([10000, 600000]);
    setFilterNoUC(false);
    setFilterBadCredit(false);
  };

  const hasActiveFilters = 
    rateRange[0] !== 0 || 
    rateRange[1] !== 30 || 
    amountRange[0] !== 10000 || 
    amountRange[1] !== 600000 ||
    filterNoUC || 
    filterBadCredit;

  return (
    <div className="space-y-6">
      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="gap-2"
        >
          <Filter className="w-4 h-4" />
          {showFilters ? "Dölj filter" : "Visa filter"}
        </Button>
        
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            className="gap-2"
          >
            <X className="w-4 h-4" />
            Återställ filter
          </Button>
        )}
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Filtrera lån</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Rate Range */}
            <div>
              <Label className="text-base mb-3 block">
                Ränta: {rateRange[0]}% - {rateRange[1]}%
              </Label>
              <Slider
                value={rateRange}
                onValueChange={setRateRange}
                min={0}
                max={30}
                step={0.5}
                className="mb-2"
              />
            </div>

            {/* Amount Range */}
            <div>
              <Label className="text-base mb-3 block">
                Lånebelopp: {amountRange[0].toLocaleString('sv-SE')} - {amountRange[1].toLocaleString('sv-SE')} kr
              </Label>
              <Slider
                value={amountRange}
                onValueChange={setAmountRange}
                min={10000}
                max={600000}
                step={10000}
                className="mb-2"
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="noUC"
                  checked={filterNoUC}
                  onCheckedChange={(checked) => setFilterNoUC(checked as boolean)}
                />
                <Label htmlFor="noUC" className="cursor-pointer">
                  Utan UC-kontroll
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="badCredit"
                  checked={filterBadCredit}
                  onCheckedChange={(checked) => setFilterBadCredit(checked as boolean)}
                />
                <Label htmlFor="badCredit" className="cursor-pointer">
                  Accepterar betalningsanmärkning
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        Visar {filteredOffers.length} av {mockOffers.length} lån
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-card rounded-lg shadow-sm">
          <thead>
            <tr className="bg-muted">
              <th className="text-left p-4 border-b">Långivare</th>
              <th className="text-left p-4 border-b">Ränta från</th>
              <th className="text-left p-4 border-b">Max belopp</th>
              <th className="text-left p-4 border-b">Utbetalning</th>
              <th className="text-left p-4 border-b">Funktioner</th>
              <th className="text-center p-4 border-b">Ansök</th>
            </tr>
          </thead>
          <tbody>
            {filteredOffers.map((offer, index) => (
              <tr 
                key={offer.id}
                className={index % 2 === 0 ? "bg-muted/30" : ""}
              >
                <td className="p-4 border-b font-semibold">{offer.lender}</td>
                <td className="p-4 border-b">
                  <span className="text-lg font-bold text-primary">{offer.minRate}%</span>
                </td>
                <td className="p-4 border-b">
                  {offer.maxAmount.toLocaleString('sv-SE')} kr
                </td>
                <td className="p-4 border-b">{offer.payoutDays}</td>
                <td className="p-4 border-b">
                  <div className="flex gap-2 flex-wrap">
                    {offer.noUC && (
                      <Badge variant="secondary" className="text-xs">Utan UC</Badge>
                    )}
                    {offer.acceptsBadCredit && (
                      <Badge variant="outline" className="text-xs">OK med anmärkning</Badge>
                    )}
                  </div>
                </td>
                <td className="p-4 border-b text-center">
                  <Button 
                    size="sm"
                    className="fg-btn"
                    onClick={() => {
                      // GTM tracking
                      if (window.dataLayer) {
                        window.dataLayer.push({
                          event: 'loan_comparison_click',
                          lender: offer.lender,
                          rate: offer.minRate
                        });
                      }
                      window.open(offer.url, '_blank');
                    }}
                  >
                    Ansök
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredOffers.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">
              Inga lån matchar dina filterval. Prova att justera filtren ovan.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
