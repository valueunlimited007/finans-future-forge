// Separate analytics system for casino site

// Extend window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export class CasinoAnalytics {
  private isProduction = typeof window !== 'undefined' && window.location.hostname === 'kasinos.se';
  private debugMode = !this.isProduction;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeAnalytics();
    }
  }

  private initializeAnalytics() {
    // Initialize Google Analytics 4 for casino site
    if (this.isProduction) {
      this.loadGoogleAnalytics();
    }
    
    // Initialize custom casino analytics
    this.initializeCasinoTracking();
  }

  private loadGoogleAnalytics() {
    const GA_MEASUREMENT_ID = 'G-CASINO123456'; // Separate GA4 property for casino site
    
    // Load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: 'Casino Site',
      page_location: window.location.href,
      content_group1: 'Casino',
      custom_map: { 
        custom_parameter_1: 'casino_type',
        custom_parameter_2: 'affiliate_partner' 
      }
    });

    // Enhanced ecommerce for affiliate tracking
    gtag('config', GA_MEASUREMENT_ID, {
      enhanced_ecommerce: true,
      link_attribution: true,
      allow_google_signals: false, // GDPR compliance
      anonymize_ip: true
    });
  }

  private initializeCasinoTracking() {
    // Custom casino-specific tracking
    this.trackPageView();
    this.setupScrollTracking();
    this.setupClickTracking();
  }

  // Page View Tracking
  trackPageView(pageName?: string, customParams?: Record<string, any>) {
    const eventData = {
      event_category: 'casino_navigation',
      event_label: pageName || document.title,
      page_title: document.title,
      page_location: window.location.href,
      content_group: 'casino',
      ...customParams
    };

    this.sendEvent('page_view', eventData);
    
    if (this.debugMode) {
      console.log('Casino Page View:', eventData);
    }
  }

  // Casino Review Views
  trackCasinoReviewView(casinoId: string, casinoName: string, rating: number) {
    const eventData = {
      event_category: 'casino_content',
      event_action: 'review_view',
      casino_id: casinoId,
      casino_name: casinoName,
      casino_rating: rating,
      content_type: 'casino_review'
    };

    this.sendEvent('casino_review_view', eventData);
  }

  // Affiliate Click Tracking
  trackAffiliateClick(casinoId: string, casinoName: string, clickSource: string) {
    const eventData = {
      event_category: 'affiliate',
      event_action: 'click',
      casino_id: casinoId,
      casino_name: casinoName,
      click_source: clickSource,
      timestamp: Date.now(),
      referrer: document.referrer
    };

    // Enhanced ecommerce event for affiliate clicks
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'select_item', {
        currency: 'SEK',
        value: 1.0, // Estimated value per click
        items: [{
          item_id: casinoId,
          item_name: casinoName,
          item_category: 'casino',
          item_brand: casinoName,
          price: 1.0,
          quantity: 1
        }]
      });
    }

    this.sendEvent('affiliate_click', eventData);

    if (this.debugMode) {
      console.log('Affiliate Click Tracked:', eventData);
    }
  }

  // Filter Usage Tracking
  trackFilterUsage(filterType: string, filterValue: string | boolean) {
    const eventData = {
      event_category: 'casino_interaction',
      event_action: 'filter_use',
      filter_type: filterType,
      filter_value: String(filterValue)
    };

    this.sendEvent('filter_usage', eventData);
  }

  // Search Tracking
  trackCasinoSearch(searchTerm: string, resultsCount: number) {
    const eventData = {
      event_category: 'casino_search',
      event_action: 'search',
      search_term: searchTerm,
      results_count: resultsCount
    };

    this.sendEvent('casino_search', eventData);
  }

  // Alias for compatibility
  trackSearch(searchTerm: string, resultsCount: number) {
    return this.trackCasinoSearch(searchTerm, resultsCount);
  }

  // Casino Interaction Tracking (generic)
  trackCasinoInteraction(action: string, casinoId: string, casinoName: string, context?: string) {
    const eventData = {
      event_category: 'casino_interaction',
      event_action: action,
      casino_id: casinoId,
      casino_name: casinoName,
      context: context || 'unknown'
    };

    this.sendEvent('casino_interaction', eventData);
  }

  // Filter Tracking
  trackFilter(filterType: string, filterValue: string | boolean, resultCount: number) {
    const eventData = {
      event_category: 'casino_filter',
      event_action: 'filter_change',
      filter_type: filterType,
      filter_value: String(filterValue),
      result_count: resultCount
    };

    this.sendEvent('filter_usage', eventData);
  }

  // Responsible Gambling Interactions
  trackResponsibleGamblingAction(action: string, source: string) {
    const eventData = {
      event_category: 'responsible_gambling',
      event_action: action,
      source: source,
      priority: 'high' // High priority for RG events
    };

    this.sendEvent('responsible_gambling_action', eventData);
  }

  // Conversion Tracking (when user registers at casino)
  trackCasinoRegistration(casinoId: string, casinoName: string, conversionValue?: number) {
    const eventData = {
      event_category: 'conversion',
      event_action: 'casino_registration',
      casino_id: casinoId,
      casino_name: casinoName,
      conversion_value: conversionValue || 0,
      currency: 'SEK'
    };

    // Enhanced ecommerce purchase event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'purchase', {
        transaction_id: `casino_${casinoId}_${Date.now()}`,
        value: conversionValue || 10.0,
        currency: 'SEK',
        items: [{
          item_id: casinoId,
          item_name: casinoName,
          item_category: 'casino_registration',
          price: conversionValue || 10.0,
          quantity: 1
        }]
      });
    }

    this.sendEvent('casino_registration', eventData);
  }

  // Performance Tracking
  async trackPerformanceMetrics() {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      const lcp = await this.getLargestContentfulPaint();
      
      const metrics = {
        event_category: 'casino_performance',
        page_load_time: navigation.loadEventEnd - navigation.loadEventStart,
        dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        first_contentful_paint: this.getFirstContentfulPaint(),
        largest_contentful_paint: lcp
      };

      this.sendEvent('performance_metrics', metrics);
    }
  }

  // Private helper methods
  private setupScrollTracking() {
    let scrollDepth = 0;
    const milestones = [25, 50, 75, 100];
    
    const trackScroll = () => {
      const scroll = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      
      for (const milestone of milestones) {
        if (scroll >= milestone && scrollDepth < milestone) {
          scrollDepth = milestone;
          this.sendEvent('scroll_depth', {
            event_category: 'casino_engagement',
            scroll_depth: milestone,
            page_title: document.title
          });
          break;
        }
      }
    };

    window.addEventListener('scroll', trackScroll, { passive: true });
  }

  private setupClickTracking() {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      
      // Track casino logo clicks
      if (target.tagName === 'IMG') {
        const imgTarget = target as HTMLImageElement;
        if (imgTarget.alt && imgTarget.alt.includes('logo')) {
          this.sendEvent('casino_logo_click', {
            event_category: 'casino_interaction',
            casino_name: imgTarget.alt.replace(' logo', ''),
            click_position: this.getElementPosition(target)
          });
        }
      }

      // Track navigation clicks
      if (target.tagName === 'A' && target.getAttribute('href')?.includes('/se/')) {
        this.sendEvent('internal_navigation', {
          event_category: 'casino_navigation',
          link_url: target.getAttribute('href'),
          link_text: target.textContent?.trim() || 'Unknown'
        });
      }
    });
  }

  private getElementPosition(element: HTMLElement): string {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    const horizontalPosition = centerX < viewportWidth / 3 ? 'left' : 
                             centerX < (2 * viewportWidth) / 3 ? 'center' : 'right';
    const verticalPosition = centerY < viewportHeight / 3 ? 'top' : 
                           centerY < (2 * viewportHeight) / 3 ? 'middle' : 'bottom';
    
    return `${verticalPosition}_${horizontalPosition}`;
  }

  private getFirstContentfulPaint(): number {
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    return fcpEntry ? Math.round(fcpEntry.startTime) : 0;
  }

  private async getLargestContentfulPaint(): Promise<number> {
    return new Promise<number>((resolve) => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(Math.round(lastEntry.startTime));
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        
        // Fallback timeout
        setTimeout(() => resolve(0), 5000);
      } else {
        resolve(0);
      }
    });
  }

  private sendEvent(eventName: string, eventData: Record<string, any>) {
    // Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, eventData);
    }

    // Send to custom analytics endpoint (if needed)
    if (this.isProduction) {
      this.sendToCustomAnalytics(eventName, eventData);
    }

    // Debug logging
    if (this.debugMode) {
      console.log(`Casino Analytics Event: ${eventName}`, eventData);
    }
  }

  private async sendToCustomAnalytics(eventName: string, eventData: Record<string, any>) {
    try {
      await fetch('/api/casino-analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: eventName,
          data: eventData,
          timestamp: new Date().toISOString(),
          session_id: this.getSessionId(),
          user_agent: navigator.userAgent,
          url: window.location.href
        })
      });
    } catch (error) {
      console.warn('Failed to send custom analytics:', error);
    }
  }

  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('casino_session_id');
    if (!sessionId) {
      sessionId = `casino_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('casino_session_id', sessionId);
    }
    return sessionId;
  }
}

// Global instance
export const casinoAnalytics = new CasinoAnalytics();