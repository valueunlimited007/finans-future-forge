// Performance optimizations for casino site
import { Brand } from '@/data/casino-schema';

// Image lazy loading and optimization
export const optimizeImageLoading = () => {
  // Add intersection observer for lazy loading images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    // Observe all lazy images
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

// Preload critical casino logos
export const preloadCriticalImages = (brands: Brand[]) => {
  const criticalImages = brands.slice(0, 3); // Top 3 casinos
  
  criticalImages.forEach(brand => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = brand.logo;
    document.head.appendChild(link);
  });
};

// Virtual scrolling for large casino lists
export class VirtualCasinoList {
  private container: HTMLElement;
  private itemHeight: number;
  private visibleCount: number;
  private data: Brand[];
  private startIndex: number = 0;

  constructor(container: HTMLElement, itemHeight: number = 80) {
    this.container = container;
    this.itemHeight = itemHeight;
    this.visibleCount = Math.ceil(container.clientHeight / itemHeight) + 2;
    this.data = [];
    
    this.setupScrollListener();
  }

  setData(data: Brand[]) {
    this.data = data;
    this.render();
  }

  private setupScrollListener() {
    this.container.addEventListener('scroll', () => {
      const scrollTop = this.container.scrollTop;
      const newStartIndex = Math.floor(scrollTop / this.itemHeight);
      
      if (newStartIndex !== this.startIndex) {
        this.startIndex = newStartIndex;
        this.render();
      }
    });
  }

  private render() {
    const endIndex = Math.min(this.startIndex + this.visibleCount, this.data.length);
    const visibleItems = this.data.slice(this.startIndex, endIndex);
    
    // This would integrate with your React component
    console.log('Rendering items:', this.startIndex, 'to', endIndex);
    
    // Set container height for proper scrollbar
    this.container.style.height = `${this.data.length * this.itemHeight}px`;
  }
}

// Critical CSS inlining for casino pages
export const getCriticalCSS = () => {
  return `
    /* Critical styles for above-the-fold content */
    .casino-hero {
      background: linear-gradient(135deg, hsl(var(--casino-primary)), hsl(var(--casino-secondary)));
    }
    
    .casino-card {
      border: 1px solid hsl(var(--border));
      border-radius: var(--radius);
      background: hsl(var(--card));
    }
    
    .casino-rating-stars {
      color: hsl(47 96% 53%); /* yellow-400 */
      fill: currentColor;
    }
    
    .casino-badge {
      background: hsl(var(--secondary));
      color: hsl(var(--secondary-foreground));
      padding: 0.125rem 0.5rem;
      border-radius: calc(var(--radius) - 2px);
      font-size: 0.75rem;
    }
  `;
};

// Resource hints for external domains
export const addResourceHints = () => {
  const hints = [
    { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//www.googletagmanager.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.crossorigin) {
      link.crossOrigin = hint.crossorigin;
    }
    document.head.appendChild(link);
  });
};

// Bundle splitting and code splitting utilities
export const loadCasinoChunk = async (chunkName: string) => {
  try {
    switch (chunkName) {
      case 'comparison-table':
        return await import('@/components/CasinoComparisonTable');
      case 'review-page':
        return await import('@/pages/CasinoReviewPage');
      case 'analytics':
        return await import('@/components/CasinoAnalytics');
      default:
        throw new Error(`Unknown chunk: ${chunkName}`);
    }
  } catch (error) {
    console.error(`Failed to load casino chunk ${chunkName}:`, error);
    return null;
  }
};

// Service Worker for caching casino data
export const registerCasinoSW = () => {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw-casino.js')
        .then(registration => {
          console.log('🎰 Casino SW registered:', registration.scope);
        })
        .catch(error => {
          console.log('🎰 Casino SW registration failed:', error);
        });
    });
  }
};

// Web Vitals tracking for casino pages
export const trackCasinoWebVitals = () => {
  // This would integrate with web-vitals library
  const vitalsData: Record<string, number> = {};
  
  // Mock implementation
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.entryType === 'measure') {
        vitalsData[entry.name] = entry.duration;
      }
    });
  });
  
  observer.observe({ entryTypes: ['measure'] });
  
  // Send to analytics periodically
  setInterval(() => {
    if (Object.keys(vitalsData).length > 0) {
      // Send vitals to analytics
      if (typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'casino_web_vitals', {
          custom_parameter: vitalsData
        });
      }
    }
  }, 30000);
};

export default {
  optimizeImageLoading,
  preloadCriticalImages,
  VirtualCasinoList,
  getCriticalCSS,
  addResourceHints,
  loadCasinoChunk,
  registerCasinoSW,
  trackCasinoWebVitals
};