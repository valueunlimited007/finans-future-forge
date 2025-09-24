import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  Filter,
  ChevronDown
} from 'lucide-react';
import { CASINO_BRANDS, type Brand } from '@/data/casino-schema';
import { casinoAnalytics } from '@/lib/analytics/casinoAnalytics';
import { cn } from '@/lib/utils';

interface MobileOptimizedSearchProps {
  onResults: (brands: Brand[]) => void;
  className?: string;
}

interface SearchFilters {
  query: string;
  features: {
    bankid: boolean;
    swish: boolean;
    payNPlay: boolean;
  };
}

const initialFilters: SearchFilters = {
  query: '',
  features: {
    bankid: false,
    swish: false,
    payNPlay: false,
  },
};

export function MobileOptimizedSearch({ onResults, className }: MobileOptimizedSearchProps) {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Auto-focus search on mobile when component mounts
  useEffect(() => {
    if (window.innerWidth < 768 && searchInputRef.current) {
      // Delay to avoid iOS keyboard issues
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, []);

  // Memoized search results with performance optimization
  const searchResults = React.useMemo(() => {
    let results = [...CASINO_BRANDS];

    // Text search with enhanced mobile performance
    if (filters.query.trim()) {
      const query = filters.query.toLowerCase();
      results = results.filter(brand => 
        brand.name.toLowerCase().includes(query) ||
        brand.description.toLowerCase().includes(query)
      );
    }

    // Feature filters
    Object.entries(filters.features).forEach(([feature, enabled]) => {
      if (enabled) {
        results = results.filter(brand => 
          brand.features[feature as keyof typeof brand.features]
        );
      }
    });

    // Sort by relevance for mobile (rating + name match)
    if (filters.query.trim()) {
      results.sort((a, b) => {
        const aNameMatch = a.name.toLowerCase().includes(filters.query.toLowerCase()) ? 2 : 0;
        const bNameMatch = b.name.toLowerCase().includes(filters.query.toLowerCase()) ? 2 : 0;
        const aScore = aNameMatch + a.rating;
        const bScore = bNameMatch + b.rating;
        return bScore - aScore;
      });
    } else {
      results.sort((a, b) => b.rating - a.rating);
    }

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
    }, 200); // Faster feedback on mobile
  }, [searchResults.length]);

  const toggleFeature = useCallback((feature: keyof SearchFilters['features']) => {
    setFilters(prev => ({
      ...prev,
      features: {
        ...prev.features,
        [feature]: !prev.features[feature]
      }
    }));

    // Haptic feedback on mobile if available
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }

    casinoAnalytics.trackFilter(feature, !filters.features[feature], searchResults.length);
  }, [filters.features, searchResults.length]);

  const clearFilters = useCallback(() => {
    setFilters(initialFilters);
    setShowMobileFilters(false);
    
    // Haptic feedback
    if ('vibrate' in navigator) {
      navigator.vibrate([50, 50, 50]);
    }
    
    casinoAnalytics.trackFilter('clear_all', true, CASINO_BRANDS.length);
  }, []);

  const activeFilterCount = React.useMemo(() => {
    return Object.values(filters.features).filter(Boolean).length;
  }, [filters.features]);

  return (
    <div className={cn('space-y-4', className)}>
      {/* Mobile-optimized search input */}
      <div className="relative">
        <Search className={cn(
          'absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors',
          isSearching ? 'text-primary animate-pulse' : 'text-muted-foreground'
        )} />
        <Input
          ref={searchInputRef}
          placeholder="Sök casino..."
          value={filters.query}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-16 h-12 text-base" // Larger touch target
          type="search"
          inputMode="search"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck="false"
          aria-label="Sök efter casino"
        />
        
        {/* Mobile filter button */}
        <Sheet open={showMobileFilters} onOpenChange={setShowMobileFilters}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                'absolute right-2 top-1/2 transform -translate-y-1/2 h-8 px-3',
                activeFilterCount > 0 && 'border-primary bg-primary/5'
              )}
              aria-label={`Öppna filter ${activeFilterCount > 0 ? `(${activeFilterCount} aktiva)` : ''}`}
            >
              <Filter className="h-4 w-4" />
              {activeFilterCount > 0 && (
                <Badge variant="secondary" className="ml-1 h-4 px-1 text-xs">
                  {activeFilterCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          
          <SheetContent side="bottom" className="h-[80vh] rounded-t-xl">
            <SheetHeader className="text-left pb-6">
              <SheetTitle className="text-xl">Filtrera casinon</SheetTitle>
            </SheetHeader>
            
            <div className="space-y-6">
              {/* Quick feature filters */}
              <div>
                <h4 className="text-sm font-medium mb-3 text-muted-foreground">
                  POPULÄRA FUNKTIONER
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  <Button
                    variant={filters.features.bankid ? "default" : "outline"}
                    size="lg"
                    onClick={() => toggleFeature('bankid')}
                    className="justify-start h-14 text-left"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className={cn(
                        'w-6 h-6 rounded border-2 flex items-center justify-center',
                        filters.features.bankid 
                          ? 'border-primary-foreground bg-primary-foreground' 
                          : 'border-muted-foreground'
                      )}>
                        {filters.features.bankid && (
                          <div className="w-3 h-3 rounded-full bg-primary" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">BankID</div>
                        <div className="text-xs text-muted-foreground">
                          Snabb registrering med BankID
                        </div>
                      </div>
                    </div>
                  </Button>
                  
                  <Button
                    variant={filters.features.swish ? "default" : "outline"}
                    size="lg"
                    onClick={() => toggleFeature('swish')}
                    className="justify-start h-14 text-left"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className={cn(
                        'w-6 h-6 rounded border-2 flex items-center justify-center',
                        filters.features.swish 
                          ? 'border-primary-foreground bg-primary-foreground' 
                          : 'border-muted-foreground'
                      )}>
                        {filters.features.swish && (
                          <div className="w-3 h-3 rounded-full bg-primary" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">Swish</div>
                        <div className="text-xs text-muted-foreground">
                          Betala enkelt med Swish
                        </div>
                      </div>
                    </div>
                  </Button>
                  
                  <Button
                    variant={filters.features.payNPlay ? "default" : "outline"}
                    size="lg"
                    onClick={() => toggleFeature('payNPlay')}
                    className="justify-start h-14 text-left"
                  >
                    <div className="flex items-center gap-3 w-full">
                      <div className={cn(
                        'w-6 h-6 rounded border-2 flex items-center justify-center',
                        filters.features.payNPlay 
                          ? 'border-primary-foreground bg-primary-foreground' 
                          : 'border-muted-foreground'
                      )}>
                        {filters.features.payNPlay && (
                          <div className="w-3 h-3 rounded-full bg-primary" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">Pay-n-Play</div>
                        <div className="text-xs text-muted-foreground">
                          Spela direkt utan registrering
                        </div>
                      </div>
                    </div>
                  </Button>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  disabled={activeFilterCount === 0}
                  className="flex-1 h-12"
                >
                  <X className="h-4 w-4 mr-2" />
                  Rensa filter
                </Button>
                <Button
                  onClick={() => setShowMobileFilters(false)}
                  className="flex-1 h-12"
                >
                  Visa {searchResults.length} resultat
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Mobile-friendly quick filters */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
        <Button
          variant={filters.features.bankid ? "default" : "outline"}
          size="sm"
          onClick={() => toggleFeature('bankid')}
          className="whitespace-nowrap h-9 px-4"
        >
          BankID
        </Button>
        
        <Button
          variant={filters.features.swish ? "default" : "outline"}
          size="sm"
          onClick={() => toggleFeature('swish')}
          className="whitespace-nowrap h-9 px-4"
        >
          Swish
        </Button>
        
        <Button
          variant={filters.features.payNPlay ? "default" : "outline"}
          size="sm"
          onClick={() => toggleFeature('payNPlay')}
          className="whitespace-nowrap h-9 px-4"
        >
          Pay-n-Play
        </Button>

        {activeFilterCount > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearFilters}
            className="whitespace-nowrap h-9 px-4 text-muted-foreground"
          >
            <X className="h-3 w-3 mr-1" />
            Rensa
          </Button>
        )}
      </div>

      {/* Results summary - mobile optimized */}
      <div className="text-sm text-muted-foreground">
        {isSearching ? (
          <div className="flex items-center gap-2">
            <div className="animate-spin h-3 w-3 border-2 border-primary border-t-transparent rounded-full" />
            Söker...
          </div>
        ) : (
          <span>
            {searchResults.length} casino{searchResults.length !== 1 ? 'n' : ''} 
            {filters.query && <> för "{filters.query}"</>}
          </span>
        )}
      </div>
    </div>
  );
}