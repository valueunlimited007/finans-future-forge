import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Star, Shield, CreditCard, Zap, Search, ExternalLink } from 'lucide-react';
import { CASINO_BRANDS, type Brand } from '@/data/casino-schema';
import { cn } from '@/lib/utils';

interface CasinoComparisonTableProps {
  brands?: Brand[];
  showFilters?: boolean;
  limit?: number;
  className?: string;
}

export function CasinoComparisonTable({ 
  brands = CASINO_BRANDS, 
  showFilters = true,
  limit,
  className 
}: CasinoComparisonTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    payNPlay: false,
    bankId: false,
    swish: false,
    minRating: 0,
  });

  const filteredBrands = brands
    .filter(brand => {
      const matchesSearch = brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           brand.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilters = 
        (!selectedFilters.payNPlay || brand.features.payNPlay) &&
        (!selectedFilters.bankId || brand.features.bankid) &&
        (!selectedFilters.swish || brand.features.swish) &&
        (brand.rating >= selectedFilters.minRating);

      return matchesSearch && matchesFilters;
    })
    .slice(0, limit);

  const toggleFilter = (filter: keyof typeof selectedFilters) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index}
        className={cn(
          'h-4 w-4',
          index < Math.floor(rating) 
            ? 'fill-yellow-400 text-yellow-400' 
            : index < rating 
            ? 'fill-yellow-400/50 text-yellow-400' 
            : 'fill-gray-200 text-gray-200'
        )}
      />
    ));
  };

  return (
    <Card className={cn('p-6', className)}>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Svenska licensierade casinon</h2>
          <p className="text-muted-foreground">
            Jämför casinon med svensk spellicens. Alla operatörer är godkända av Spelinspektionen.
          </p>
        </div>

        {showFilters && (
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Sök casino..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedFilters.payNPlay ? "default" : "outline"}
                size="sm"
                onClick={() => toggleFilter('payNPlay')}
                className="h-8"
              >
                <Zap className="h-3 w-3 mr-1" />
                Pay-n-Play
              </Button>
              
              <Button
                variant={selectedFilters.bankId ? "default" : "outline"}
                size="sm"
                onClick={() => toggleFilter('bankId')}
                className="h-8"
              >
                <Shield className="h-3 w-3 mr-1" />
                BankID
              </Button>
              
              <Button
                variant={selectedFilters.swish ? "default" : "outline"}
                size="sm"
                onClick={() => toggleFilter('swish')}
                className="h-8"
              >
                <CreditCard className="h-3 w-3 mr-1" />
                Swish
              </Button>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Casino</TableHead>
                <TableHead>Betyg</TableHead>
                <TableHead>Etablerat</TableHead>
                <TableHead>Betalning</TableHead>
                <TableHead>Licens</TableHead>
                <TableHead className="text-right">Åtgärd</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBrands.map((brand) => (
                <TableRow key={brand.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img 
                        src={brand.logo} 
                        alt={`${brand.name} logotyp`}
                        className="h-8 w-8 rounded object-contain"
                        onError={(e) => {
                          e.currentTarget.src = '/finansguiden-logo-v2.png';
                        }}
                      />
                      <div>
                        <div className="font-medium">{brand.name}</div>
                        <div className="text-xs text-muted-foreground max-w-[150px] truncate">
                          {brand.description}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {renderStars(brand.rating)}
                      </div>
                      <span className="text-sm font-medium">{brand.rating.toFixed(1)}</span>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <span className="text-sm">{brand.established}</span>
                  </TableCell>
                  
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {brand.features.bankid && (
                        <Badge variant="secondary" className="text-xs">
                          BankID
                        </Badge>
                      )}
                      {brand.features.swish && (
                        <Badge variant="secondary" className="text-xs">
                          Swish
                        </Badge>
                      )}
                      {brand.features.payNPlay && (
                        <Badge variant="secondary" className="text-xs">
                          Pay-n-Play
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      <Shield className="h-3 w-3 mr-1" />
                      Svensk licens
                    </Badge>
                  </TableCell>
                  
                  <TableCell className="text-right">
                    <Button 
                      asChild 
                      size="sm" 
                      className="bg-casino-primary hover:bg-casino-primary/90 text-casino-primary-foreground"
                    >
                      <a 
                        href={`/se/recension/${brand.id}`}
                        className="inline-flex items-center gap-1"
                      >
                        Läs recension
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredBrands.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <p>Inga casinon matchar dina sökkriterier.</p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => {
                setSearchTerm('');
                setSelectedFilters({
                  payNPlay: false,
                  bankId: false,
                  swish: false,
                  minRating: 0,
                });
              }}
              className="mt-2"
            >
              Rensa filter
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}

export default CasinoComparisonTable;