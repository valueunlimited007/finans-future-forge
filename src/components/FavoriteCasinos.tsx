import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, Trash2, ExternalLink } from 'lucide-react';
import { Brand } from '@/data/casino-schema';
import { CASINO_BRANDS } from '@/data/casino-schema';
import AffiliateButton from './AffiliateButton';
import LazyImage from './LazyImage';
import { toast } from 'sonner';
import { casinoAnalytics } from '@/lib/analytics/casinoAnalytics';
import { EmptyState } from './ErrorBoundary';

// Favorite Casino Management Hook
export function useFavoriteCasinos() {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('favorite-casinos');
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('favorite-casinos', JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  }, [favorites]);

  const addFavorite = (casinoId: string) => {
    if (!favorites.includes(casinoId)) {
      setFavorites(prev => [...prev, casinoId]);
      
      // Find casino name for analytics
      const casino = CASINO_BRANDS.find(c => c.id === casinoId);
      casinoAnalytics.trackCasinoInteraction('add_favorite', casinoId, casino?.name || 'Unknown');
      
      toast.success('Casino tillagt till favoriter', {
        description: `${casino?.name || 'Casinot'} har lagts till i dina favoriter.`
      });
    }
  };

  const removeFavorite = (casinoId: string) => {
    setFavorites(prev => prev.filter(id => id !== casinoId));
    
    // Find casino name for analytics
    const casino = CASINO_BRANDS.find(c => c.id === casinoId);
    casinoAnalytics.trackCasinoInteraction('remove_favorite', casinoId, casino?.name || 'Unknown');
    
    toast.success('Casino borttaget från favoriter');
  };

  const toggleFavorite = (casinoId: string) => {
    if (favorites.includes(casinoId)) {
      removeFavorite(casinoId);
    } else {
      addFavorite(casinoId);
    }
  };

  const isFavorite = (casinoId: string) => favorites.includes(casinoId);

  const getFavoriteCasinos = (): Brand[] => {
    return CASINO_BRANDS.filter(casino => favorites.includes(casino.id));
  };

  const clearAllFavorites = () => {
    setFavorites([]);
    casinoAnalytics.trackCasinoInteraction('clear_all_favorites', '', '');
    toast.success('Alla favoriter rensade');
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    getFavoriteCasinos,
    clearAllFavorites,
    favoriteCount: favorites.length
  };
}

// Favorite Button Component
export function FavoriteButton({ 
  casinoId, 
  size = 'default',
  variant = 'ghost' 
}: { 
  casinoId: string; 
  size?: 'default' | 'sm' | 'lg';
  variant?: 'ghost' | 'outline' | 'default';
}) {
  const { isFavorite, toggleFavorite } = useFavoriteCasinos();
  const favorite = isFavorite(casinoId);

  return (
    <Button
      variant={variant}
      size={size}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(casinoId);
      }}
      className="hover:bg-red-50 dark:hover:bg-red-950/20"
    >
      <Heart 
        className={`h-4 w-4 ${favorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} 
      />
      {size === 'lg' && <span className="ml-2">{favorite ? 'Favorit' : 'Lägg till favorit'}</span>}
    </Button>
  );
}

// Favorite Casino Card Component
function FavoriteCasinoCard({ casino, onRemove }: { casino: Brand; onRemove: () => void }) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-3 w-3 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <Card className="group hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
            <LazyImage
              src={`/adtraction-logos/${casino.name.toLowerCase()}-logo.png`}
              alt={`${casino.name} logo`}
              className="max-w-full max-h-full object-contain"
              fallbackSrc="/placeholder.svg"
            />
          </div>
          <div className="flex items-center gap-1">
            {renderStars(casino.rating)}
            <span className="text-xs text-muted-foreground ml-1">
              {casino.rating}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">{casino.name}</CardTitle>
          <Button
            size="sm"
            onClick={onRemove}
            className="fg-btn--danger-ghost opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Ta bort från favoriter"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {casino.features.bankid && (
            <Badge variant="secondary" className="text-xs bg-blue-500/10 text-blue-600">
              BankID
            </Badge>
          )}
          {casino.features.swish && (
            <Badge variant="secondary" className="text-xs bg-purple-500/10 text-purple-600">
              Swish
            </Badge>
          )}
          {casino.features.payNPlay && (
            <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-600">
              Pay-n-Play
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {casino.description}
        </p>

        <div className="flex gap-2">
          <AffiliateButton
            href={`https://${casino.name.toLowerCase()}.com`}
            label="Spela nu"
            brandId={casino.id}
            brandName={casino.name}
            termSlug="favorite-casino"
            className="flex-1 text-sm px-3 py-2"
          />
          <Button variant="outline" size="sm" asChild>
            <a 
              href={`/se/recension/${casino.name.toLowerCase().replace(/[^\w]/g, '-')}`}
              className="flex items-center gap-1"
            >
              <ExternalLink className="h-3 w-3" />
              Recension
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Main Favorite Casinos Component
export default function FavoriteCasinos({ limit }: { limit?: number }) {
  const { getFavoriteCasinos, clearAllFavorites, favoriteCount } = useFavoriteCasinos();
  const favoriteCasinos = getFavoriteCasinos();
  const displayCasinos = limit ? favoriteCasinos.slice(0, limit) : favoriteCasinos;

  // Track page view when component mounts
  useEffect(() => {
    if (favoriteCount > 0) {
      casinoAnalytics.trackPageView('/favorites', { title: 'Favorite Casinos' });
    }
  }, [favoriteCount]);

  if (favoriteCount === 0) {
    return (
      <Card className="p-6">
        <EmptyState
          icon={Heart}
          title="Inga favoriter än"
          description="Lägg till casinon i dina favoriter för snabb åtkomst. Klicka på hjärt-ikonen på valfritt casino."
          action={
            <Button asChild variant="outline">
              <a href="/se">Utforska Casinon</a>
            </Button>
          }
        />
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <CardHeader className="px-0 pt-0">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            Mina Favoriter ({favoriteCount})
          </CardTitle>
          
          {favoriteCount > 0 && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={clearAllFavorites}
              className="text-red-600 hover:text-red-700 border-red-200 hover:border-red-300"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Rensa alla
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="px-0 pb-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayCasinos.map((casino) => (
            <FavoriteCasinoCard 
              key={casino.id} 
              casino={casino} 
              onRemove={() => {
                const { removeFavorite } = useFavoriteCasinos();
                removeFavorite(casino.id);
              }}
            />
          ))}
        </div>

        {limit && favoriteCasinos.length > limit && (
          <div className="text-center mt-6">
            <Button variant="outline" asChild>
              <a href="/se/favoriter">
                Visa alla {favoriteCount} favoriter
              </a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Favorites Page Component
export function FavoritesPage() {
  useEffect(() => {
    casinoAnalytics.trackPageView('/se/favoriter', { title: 'Mina Favoriter' });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Mina Favoriter</h1>
          <p className="text-muted-foreground">
            Här finns alla casinon du markerat som favoriter för snabb åtkomst.
          </p>
        </div>

        <FavoriteCasinos />
      </div>
    </div>
  );
}