import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from '@/components/ui/table';
import { 
  Scale, 
  X, 
  Star,
  Shield,
  Calendar,
  Check,
  Minus
} from 'lucide-react';
import { type Brand, CASINO_REVIEWS } from '@/data/casino-schema';
import { LazyImage } from '@/components/LazyImage';
import { AffiliateButton } from '@/components/AffiliateButton';
import { casinoAnalytics } from '@/lib/analytics/casinoAnalytics';
import { cn } from '@/lib/utils';

interface CasinoComparisonProps {
  selectedCasinos: Brand[];
  onRemoveCasino: (casinoId: string) => void;
  onClearAll: () => void;
  className?: string;
}

const comparisonFeatures = [
  { key: 'rating', label: 'Betyg', type: 'rating' as const },
  { key: 'established', label: 'Etablerat', type: 'year' as const },
  { key: 'bankid', label: 'BankID', type: 'boolean' as const },
  { key: 'swish', label: 'Swish', type: 'boolean' as const },
  { key: 'payNPlay', label: 'Pay-n-Play', type: 'boolean' as const },
  { key: 'liveCasino', label: 'Live Casino', type: 'boolean' as const },
  { key: 'mobileApp', label: 'Mobilapp', type: 'boolean' as const },
];

export function CasinoComparison({ 
  selectedCasinos, 
  onRemoveCasino, 
  onClearAll,
  className 
}: CasinoComparisonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const comparisonData = useMemo(() => {
    return selectedCasinos.map(casino => {
      const review = CASINO_REVIEWS.find(r => r.brandId === casino.id);
      return {
        ...casino,
        review,
        pros: review?.pros || [],
        cons: review?.cons || [],
        kycSpeed: review?.kpis.kycSpeed || 'Ej specificerat',
        payoutSpeed: review?.kpis.payoutSpeed || 'Ej specificerat'
      };
    });
  }, [selectedCasinos]);

  const handleCompare = () => {
    setIsModalOpen(true);
    casinoAnalytics.trackCasinoInteraction(
      'compare_casinos', 
      selectedCasinos.map(c => c.id).join(','), 
      selectedCasinos.map(c => c.name).join(' vs '), 
      'comparison_tool'
    );
  };

  const renderFeatureValue = (
    casino: Brand, 
    feature: typeof comparisonFeatures[0]
  ) => {
    switch (feature.type) {
      case 'rating':
        return (
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{casino.rating.toFixed(1)}</span>
          </div>
        );
      case 'year':
        return (
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{casino.established}</span>
          </div>
        );
      case 'boolean':
        const hasFeature = casino.features[feature.key as keyof Brand['features']];
        return (
          <div className="flex justify-center">
            {hasFeature ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Minus className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
        );
      default:
        return null;
    }
  };

  if (selectedCasinos.length === 0) {
    return null;
  }

  return (
    <>
      {/* Floating comparison bar */}
      <div className={cn(
        'fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50',
        'bg-card border rounded-lg shadow-lg p-4',
        'flex items-center gap-4 min-w-[300px] max-w-[90vw]',
        className
      )}>
        <div className="flex items-center gap-2 flex-1">
          <Scale className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium">
            {selectedCasinos.length} casino{selectedCasinos.length !== 1 ? 'n' : ''} valda
          </span>
        </div>

        <div className="flex items-center gap-2">
          {selectedCasinos.slice(0, 3).map((casino) => (
            <div key={casino.id} className="flex items-center gap-1">
              <LazyImage
                src={casino.logo}
                alt={casino.name}
                className="h-6 w-6 rounded object-contain"
                fallbackSrc="/finansguiden-logo-v2.png"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemoveCasino(casino.id)}
                className="h-5 w-5 p-0 hover:bg-destructive/20"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
          {selectedCasinos.length > 3 && (
            <span className="text-xs text-muted-foreground">
              +{selectedCasinos.length - 3} till
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button size="sm" onClick={handleCompare}>
                Jämför
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Jämför casinon</DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Quick overview cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {comparisonData.map((casino) => (
                    <Card key={casino.id} className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <LazyImage
                          src={casino.logo}
                          alt={casino.name}
                          className="h-8 w-8 rounded object-contain"
                          fallbackSrc="/finansguiden-logo-v2.png"
                        />
                        <div>
                          <h3 className="font-medium">{casino.name}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{casino.rating.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="text-xs text-muted-foreground">
                          <strong>Verifiering:</strong> {casino.kycSpeed}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          <strong>Uttag:</strong> {casino.payoutSpeed}
                        </div>
                      </div>

                      <AffiliateButton
                        href={`https://www.${casino.name.toLowerCase().replace(/\s+/g, '')}.se`}
                        label="Spela nu"
                        brandId={casino.id}
                        brandName={casino.name}
                        className="w-full"
                      />
                    </Card>
                  ))}
                </div>

                {/* Detailed comparison table */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Detaljerad jämförelse</h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[150px]">Funktion</TableHead>
                          {comparisonData.map((casino) => (
                            <TableHead key={casino.id} className="text-center min-w-[120px]">
                              {casino.name}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {comparisonFeatures.map((feature) => (
                          <TableRow key={feature.key}>
                            <TableCell className="font-medium">
                              {feature.label}
                            </TableCell>
                            {comparisonData.map((casino) => (
                              <TableCell key={`${casino.id}-${feature.key}`} className="text-center">
                                {renderFeatureValue(casino, feature)}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </Card>

                {/* Pros and Cons */}
                {comparisonData.some(c => c.pros.length > 0 || c.cons.length > 0) && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {comparisonData.map((casino) => (
                      <Card key={`${casino.id}-pros-cons`} className="p-4">
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <LazyImage
                            src={casino.logo}
                            alt={casino.name}
                            className="h-5 w-5 rounded object-contain"
                            fallbackSrc="/finansguiden-logo-v2.png"
                          />
                          {casino.name}
                        </h4>
                        
                        {casino.pros.length > 0 && (
                          <div className="mb-3">
                            <h5 className="text-sm font-medium text-green-600 mb-2">Fördelar</h5>
                            <ul className="space-y-1">
                              {casino.pros.slice(0, 3).map((pro, index) => (
                                <li key={index} className="text-xs text-muted-foreground flex items-start gap-1">
                                  <Check className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {casino.cons.length > 0 && (
                          <div>
                            <h5 className="text-sm font-medium text-orange-600 mb-2">Nackdelar</h5>
                            <ul className="space-y-1">
                              {casino.cons.slice(0, 3).map((con, index) => (
                                <li key={index} className="text-xs text-muted-foreground flex items-start gap-1">
                                  <Minus className="h-3 w-3 text-orange-500 mt-0.5 flex-shrink-0" />
                                  {con}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="outline" size="sm" onClick={onClearAll}>
            <X className="h-3 w-3 mr-1" />
            Rensa
          </Button>
        </div>
      </div>
    </>
  );
}