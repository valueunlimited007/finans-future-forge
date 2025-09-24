import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isCasinoSite } from '@/lib/siteConfig';

// Casino-specific analytics events
export const casinoAnalytics = {
  trackPageView: (page: string, title: string) => {
    if (!isCasinoSite()) return;
    
    const event = {
      page_title: title,
      page_location: window.location.href,
      page_path: page,
      site_type: 'casino',
      market: 'SE'
    };

    // Google Analytics 4
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('config', 'G-CASINO-ID', {
        page_title: title,
        page_location: window.location.href
      });
      (window as any).gtag('event', 'page_view', event);
    }

    // Fallback to dataLayer
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'casino_page_view',
      ...event
    });

    console.log('🎰 [Casino Analytics] Page view:', event);
  },

  trackCasinoInteraction: (action: string, casinoId: string, casinoName: string, context?: string) => {
    if (!isCasinoSite()) return;

    const event = {
      event_category: 'casino_interaction',
      event_label: `${casinoName} (${casinoId})`,
      action,
      casino_id: casinoId,
      casino_name: casinoName,
      context: context || 'unknown',
      timestamp: Date.now()
    };

    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', action, {
        event_category: 'casino_interaction',
        event_label: event.event_label,
        casino_id: casinoId,
        casino_name: casinoName
      });
    }

    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'casino_interaction',
      ...event
    });

    console.log('🎰 [Casino Analytics] Interaction:', event);
  },

  trackFilter: (filterType: string, filterValue: string | boolean, resultCount: number) => {
    if (!isCasinoSite()) return;

    const event = {
      event_category: 'casino_filter',
      filter_type: filterType,
      filter_value: filterValue.toString(),
      result_count: resultCount,
      timestamp: Date.now()
    };

    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'casino_filter', event);
    }

    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'casino_filter_applied',
      ...event
    });

    console.log('🎰 [Casino Analytics] Filter:', event);
  },

  trackSearch: (query: string, resultCount: number) => {
    if (!isCasinoSite()) return;

    const event = {
      search_term: query,
      result_count: resultCount,
      timestamp: Date.now()
    };

    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'search', {
        search_term: query
      });
    }

    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'casino_search',
      ...event
    });

    console.log('🎰 [Casino Analytics] Search:', event);
  },

  trackComplianceAction: (action: string, source: string) => {
    if (!isCasinoSite()) return;

    const event = {
      event_category: 'responsible_gambling',
      action,
      source,
      timestamp: Date.now()
    };

    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'responsible_gambling', event);
    }

    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'compliance_interaction',
      ...event
    });

    console.log('🎰 [Casino Analytics] Compliance:', event);
  }
};

// Hook for automatic page view tracking
export const useCasinoAnalytics = (pageTitle: string) => {
  const location = useLocation();

  useEffect(() => {
    if (isCasinoSite()) {
      casinoAnalytics.trackPageView(location.pathname, pageTitle);
    }
  }, [location.pathname, pageTitle]);
};

export default casinoAnalytics;