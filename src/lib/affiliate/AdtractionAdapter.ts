import { AffiliateAdapter, AffiliateClick, AffiliateStats } from './types';
import { AFFILIATE_CONFIG } from './config';

export class AdtractionAdapter implements AffiliateAdapter {
  networkId = 'adtraction';
  private apiKey: string | null = null;
  private baseUrl = 'https://www.adtraction.com/tracking/click';

  constructor(apiKey?: string) {
    this.apiKey = apiKey || null;
  }

  generateTrackingUrl(brandId: string, originalUrl: string, params: Record<string, string> = {}): string {
    // Adtraction tracking URL format
    const trackingParams = {
      ...AFFILIATE_CONFIG.defaultParams,
      ...params,
      epi: brandId, // External Partner ID
      url: encodeURIComponent(originalUrl),
      click_id: `aff_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };

    const searchParams = new URLSearchParams(trackingParams);
    return `${this.baseUrl}?${searchParams.toString()}`;
  }

  async trackClick(clickData: Omit<AffiliateClick, 'id' | 'timestamp'>): Promise<AffiliateClick> {
    const click: AffiliateClick = {
      ...clickData,
      id: `aff_click_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date()
    };

    // I produktion skulle detta skicka till Adtraction API
    console.log('🔗 [Adtraction] Click tracked:', {
      brandId: click.brandId,
      brandName: click.brandName,
      page: click.page,
      clickId: click.id
    });

    // Simulera API call för nu
    await new Promise(resolve => setTimeout(resolve, 100));

    return click;
  }

  async getStats(brandId?: string, period?: { start: Date; end: Date }): Promise<AffiliateStats> {
    // I produktion skulle detta hämta från Adtraction API
    console.log('📊 [Adtraction] Fetching stats for:', { brandId, period });

    // Simulera API call
    await new Promise(resolve => setTimeout(resolve, 500));

    // Mock data för nu
    return {
      clicks: Math.floor(Math.random() * 1000) + 100,
      conversions: Math.floor(Math.random() * 50) + 5,
      revenue: Math.floor(Math.random() * 10000) + 1000,
      conversionRate: Math.random() * 10 + 2,
      period: period || {
        start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        end: new Date()
      }
    };
  }

  isValidUrl(url: string): boolean {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.protocol === 'https:' && parsedUrl.hostname.length > 0;
    } catch {
      return false;
    }
  }

  isMockMode(): boolean {
    return false;
  }

  setApiKey(apiKey: string): void {
    this.apiKey = apiKey;
  }
}