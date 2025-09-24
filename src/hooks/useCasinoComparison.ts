import { useState, useCallback } from 'react';
import { type Brand } from '@/data/casino-schema';
import { casinoAnalytics } from '@/lib/analytics/casinoAnalytics';

const MAX_COMPARISON_ITEMS = 4;

export function useCasinoComparison() {
  const [selectedCasinos, setSelectedCasinos] = useState<Brand[]>([]);

  const addCasino = useCallback((casino: Brand) => {
    setSelectedCasinos(prev => {
      // Check if already selected
      if (prev.find(c => c.id === casino.id)) {
        return prev;
      }

      // Check max limit
      if (prev.length >= MAX_COMPARISON_ITEMS) {
        return prev;
      }

      const newSelection = [...prev, casino];
      
      casinoAnalytics.trackCasinoInteraction(
        'add_to_comparison',
        casino.id,
        casino.name,
        'comparison_tool'
      );

      return newSelection;
    });
  }, []);

  const removeCasino = useCallback((casinoId: string) => {
    setSelectedCasinos(prev => {
      const casino = prev.find(c => c.id === casinoId);
      const newSelection = prev.filter(c => c.id !== casinoId);
      
      if (casino) {
        casinoAnalytics.trackCasinoInteraction(
          'remove_from_comparison',
          casinoId,
          casino.name,
          'comparison_tool'
        );
      }

      return newSelection;
    });
  }, []);

  const clearAll = useCallback(() => {
    casinoAnalytics.trackCasinoInteraction(
      'clear_comparison',
      selectedCasinos.map(c => c.id).join(','),
      'comparison_cleared',
      'comparison_tool'
    );
    
    setSelectedCasinos([]);
  }, [selectedCasinos]);

  const isSelected = useCallback((casinoId: string) => {
    return selectedCasinos.some(c => c.id === casinoId);
  }, [selectedCasinos]);

  const canAddMore = selectedCasinos.length < MAX_COMPARISON_ITEMS;

  return {
    selectedCasinos,
    addCasino,
    removeCasino,
    clearAll,
    isSelected,
    canAddMore,
    maxItems: MAX_COMPARISON_ITEMS,
  };
}