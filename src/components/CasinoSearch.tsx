import React, { useState, useCallback, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  Star,
  Calendar,
  Shield
} from 'lucide-react';
import { CASINO_BRANDS, type Brand } from '@/data/casino-schema';
import { casinoAnalytics } from '@/lib/analytics/casinoAnalytics';
import { cn } from '@/lib/utils';

interface CasinoSearchProps {
  onResults: (brands: Brand[]) => void;
  className?: string;
}

interface SearchFilters {
  query: string;
  rating: number;
  established: 'any' | 'new' | 'established' | 'veteran';
  features: {
    bankid: boolean;
    swish: boolean;
    payNPlay: boolean;
    liveCasino: boolean;
    mobileApp: boolean;
  };
  sortBy: 'relevance' | 'rating' | 'established' | 'name';
  sortOrder: 'asc' | 'desc';
}

const initialFilters: SearchFilters = {
  query: '',
  rating: 0,
  established: 'any',
  features: {
    bankid: false,
    swish: false,
    payNPlay: false,
    liveCasino: false,
    mobileApp: false,
  },
  sortBy: 'relevance',
  sortOrder: 'desc',
};

export function CasinoSearch({ onResults, className }: CasinoSearchProps) {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Memoized search results
  const searchResults = useMemo(() => {
    let results = [...CASINO_BRANDS];

    // Text search
    if (filters.query.trim()) {
      const query = filters.query.toLowerCase();
      results = results.filter(brand => 
        brand.name.toLowerCase().includes(query) ||
        brand.description.toLowerCase().includes(query)
      );
    }

    // Rating filter
    if (filters.rating > 0) {
      results = results.filter(brand => brand.rating >= filters.rating);
    }

    // Established filter
    const currentYear = new Date().getFullYear();
    switch (filters.established) {
      case 'new':
        results = results.filter(brand => currentYear - brand.established <= 5);
        break;
      case 'established':
        results = results.filter(brand => 
          currentYear - brand.established > 5 && currentYear - brand.established <= 15
        );
        break;
      case 'veteran':
        results = results.filter(brand => currentYear - brand.established > 15);
        break;
    }

    // Feature filters
    Object.entries(filters.features).forEach(([feature, enabled]) => {
      if (enabled) {
        results = results.filter(brand => 
          brand.features[feature as keyof typeof brand.features]
        );
      }
    });

    // Sorting
    results.sort((a, b) => {
      let comparison = 0;
      
      switch (filters.sortBy) {
        case 'rating':
          comparison = a.rating - b.rating;
          break;
        case 'established':
          comparison = a.established - b.established;
          break;
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'relevance':
        default:
          // Relevance based on query match and rating
          if (filters.query.trim()) {
            const aRelevance = a.name.toLowerCase().includes(filters.query.toLowerCase()) ? 2 : 1;
            const bRelevance = b.name.toLowerCase().includes(filters.query.toLowerCase()) ? 2 : 1;
            comparison = (bRelevance + b.rating) - (aRelevance + a.rating);
          } else {
            comparison = b.rating - a.rating;
          }
          break;
      }

      return filters.sortOrder === 'desc' ? -comparison : comparison;
    });

    return results;
  }, [filters]);

  // Update results when search changes
  React.useEffect(() => {
    onResults(searchResults);
  }, [searchResults, onResults]);

  const handleSearch = useCallback((query: string) => {
    setIsSearching(true);
    setFilters(prev => ({ ...prev, query }));
    
    setTimeout(() => {
      setIsSearching(false);
      if (query.trim()) {
        casinoAnalytics.trackSearch(query, searchResults.length);
      }
    }, 300);
  }, [searchResults.length]);

  const toggleFeature = useCallback((feature: keyof SearchFilters['features']) => {
    setFilters(prev => ({
      ...prev,
      features: {
        ...prev.features,
        [feature]: !prev.features[feature]
      }
    }));

    casinoAnalytics.trackFilter(feature, !filters.features[feature], searchResults.length);
  }, [filters.features, searchResults.length]);

  const clearFilters = useCallback(() => {
    setFilters(initialFilters);
    casinoAnalytics.trackFilter('clear_all', true, CASINO_BRANDS.length);
  }, []);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.rating > 0) count++;
    if (filters.established !== 'any') count++;
    count += Object.values(filters.features).filter(Boolean).length;
    return count;
  }, [filters]);

  return (
    <Card className={cn('p-6 space-y-4', className)}>
      {/* Main search */}
      <div className="relative">
        <Search className={cn(
          'absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors',
          isSearching ? 'text-primary animate-pulse' : 'text-muted-foreground'
        )} />
        <Input
          placeholder="Sök efter casino..."
          value={filters.query}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-12"
        />
        {filters.query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleSearch('')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {/* Quick filters */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={filters.features.bankid ? "default" : "outline"}
          size="sm"
          onClick={() => toggleFeature('bankid')}
        >
          <Shield className="h-3 w-3 mr-1" />
          BankID
        </Button>
        
        <Button
          variant={filters.features.swish ? "default" : "outline"}
          size="sm"
          onClick={() => toggleFeature('swish')}
        >
          Swish
        </Button>
        
        <Button
          variant={filters.features.payNPlay ? "default" : "outline"}
          size="sm"
          onClick={() => toggleFeature('payNPlay')}
        >
          Pay-n-Play
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className={cn(activeFilterCount > 0 && 'border-primary')}
        >
          <SlidersHorizontal className="h-3 w-3 mr-1" />
          Avancerat
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="ml-1 h-4 px-1 text-xs">
              {activeFilterCount}
            </Badge>
          )}
        </Button>

        {activeFilterCount > 0 && (
          <Button variant="outline" size="sm" onClick={clearFilters}>
            <X className="h-3 w-3 mr-1" />
            Rensa
          </Button>
        )}
      </div>

      {/* Advanced filters */}
      {showAdvanced && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium mb-2 block">Minst betyg</label>
              <Select
                value={filters.rating.toString()}
                onValueChange={(value) => 
                  setFilters(prev => ({ ...prev, rating: parseFloat(value) }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Alla betyg</SelectItem>
                  <SelectItem value="3.5">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      3.5+
                    </div>
                  </SelectItem>
                  <SelectItem value="4.0">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      4.0+
                    </div>
                  </SelectItem>
                  <SelectItem value="4.5">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      4.5+
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Etablerat</label>
              <Select
                value={filters.established}
                onValueChange={(value: SearchFilters['established']) => 
                  setFilters(prev => ({ ...prev, established: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Alla år</SelectItem>
                  <SelectItem value="new">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Nya (senaste 5 åren)
                    </div>
                  </SelectItem>
                  <SelectItem value="established">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Etablerade (6-15 år)
                    </div>
                  </SelectItem>
                  <SelectItem value="veteran">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Veteraner (15+ år)
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium mb-2 block">Sortera efter</label>
              <div className="flex gap-2">
                <Select
                  value={filters.sortBy}
                  onValueChange={(value: SearchFilters['sortBy']) => 
                    setFilters(prev => ({ ...prev, sortBy: value }))
                  }
                >
                  <SelectTrigger className="flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevans</SelectItem>
                    <SelectItem value="rating">Betyg</SelectItem>
                    <SelectItem value="established">Etablerat år</SelectItem>
                    <SelectItem value="name">Namn</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select
                  value={filters.sortOrder}
                  onValueChange={(value: 'asc' | 'desc') => 
                    setFilters(prev => ({ ...prev, sortOrder: value }))
                  }
                >
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="desc">↓</SelectItem>
                    <SelectItem value="asc">↑</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Funktioner</label>
              <div className="grid grid-cols-2 gap-1">
                <Button
                  variant={filters.features.liveCasino ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFeature('liveCasino')}
                  className="text-xs h-8"
                >
                  Live Casino
                </Button>
                <Button
                  variant={filters.features.mobileApp ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleFeature('mobileApp')}
                  className="text-xs h-8"
                >
                  Mobilapp
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results summary */}
      <div className="text-sm text-muted-foreground">
        {isSearching ? (
          <div className="flex items-center gap-2">
            <div className="animate-spin h-3 w-3 border-2 border-primary border-t-transparent rounded-full" />
            Söker...
          </div>
        ) : (
          <>Visar {searchResults.length} av {CASINO_BRANDS.length} casinon</>
        )}
      </div>
    </Card>
  );
}