import { useEffect } from 'react';
import { 
  optimizeImageLoading, 
  preloadCriticalImages,
  addResourceHints,
  trackCasinoWebVitals 
} from '@/lib/performance/casinoOptimizations';
import { Brand } from '@/data/casino-schema';
import { isCasinoSite } from '@/lib/siteConfig';

export const useCasinoPerformance = (brands?: Brand[]) => {
  useEffect(() => {
    if (!isCasinoSite()) return;

    // Add resource hints for better loading performance
    addResourceHints();

    // Setup image lazy loading
    optimizeImageLoading();

    // Track web vitals for casino pages
    trackCasinoWebVitals();

    // Preload critical casino logos if brands are provided
    if (brands && brands.length > 0) {
      preloadCriticalImages(brands);
    }

    // Cleanup function
    return () => {
      // Remove any performance observers if needed
    };
  }, [brands]);
};

export default useCasinoPerformance;