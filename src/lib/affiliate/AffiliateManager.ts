import { AffiliateAdapter, AffiliateClick, AffiliateStats } from './types';
import { MockAffiliateAdapter } from './MockAffiliateAdapter';
import { AdtractionAdapter } from './AdtractionAdapter';
import { AFFILIATE_CONFIG, getActiveNetwork } from './config';

class AffiliateManager {
  private adapter: AffiliateAdapter;
  private initialized = false;

  constructor() {
    this.adapter = this.createAdapter();
  }

  private createAdapter(): AffiliateAdapter {
    const network = getActiveNetwork();
    
    if (AFFILIATE_CONFIG.mockMode || network.id === 'mock') {
      console.log('🎭 [Affiliate] Using Mock Mode for safe testing');
      return new MockAffiliateAdapter();
    }

    switch (network.id) {
      case 'adtraction':
        console.log('🔗 [Affiliate] Using Adtraction Network');
        return new AdtractionAdapter();
      default:
        console.warn('⚠️ [Affiliate] Unknown network, falling back to mock');
        return new MockAffiliateAdapter();
    }
  }

  async init(): Promise<void> {
    if (this.initialized) return;
    
    console.log(`🚀 [Affiliate] Initializing with ${this.adapter.networkId} adapter`);
    
    if (this.adapter.isMockMode()) {
      console.log('🎯 [Affiliate] Mock mode active - all tracking is simulated');
    }
    
    this.initialized = true;
  }

  generateTrackingUrl(brandId: string, originalUrl: string, params?: Record<string, string>): string {
    if (!this.initialized) {
      console.warn('⚠️ [Affiliate] Manager not initialized, using original URL');
      return originalUrl;
    }

    const trackingUrl = this.adapter.generateTrackingUrl(brandId, originalUrl, params);
    
    if (this.adapter.isMockMode()) {
      console.log('🔗 [Mock Affiliate] Generated tracking URL:', {
        brandId,
        original: originalUrl,
        tracked: trackingUrl.substring(0, 100) + '...'
      });
    }

    return trackingUrl;
  }

  async trackClick(
    brandId: string, 
    brandName: string, 
    userId?: string, 
    additionalParams?: Record<string, string>
  ): Promise<AffiliateClick | null> {
    if (!this.initialized) {
      console.warn('⚠️ [Affiliate] Manager not initialized');
      return null;
    }

    try {
      const clickData = {
        brandId,
        brandName,
        userId,
        page: window.location.pathname,
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'direct'
      };

      return await this.adapter.trackClick(clickData);
    } catch (error) {
      console.error('❌ [Affiliate] Error tracking click:', error);
      return null;
    }
  }

  async getStats(brandId?: string, period?: { start: Date; end: Date }): Promise<AffiliateStats | null> {
    if (!this.initialized) {
      console.warn('⚠️ [Affiliate] Manager not initialized');
      return null;
    }

    try {
      return await this.adapter.getStats(brandId, period);
    } catch (error) {
      console.error('❌ [Affiliate] Error fetching stats:', error);
      return null;
    }
  }

  isMockMode(): boolean {
    return this.adapter.isMockMode();
  }

  getCurrentNetwork(): string {
    return this.adapter.networkId;
  }

  // Utility för att växla mellan mock och live (endast för utveckling)
  switchToMock(): void {
    if (process.env.NODE_ENV === 'development') {
      this.adapter = new MockAffiliateAdapter();
      this.initialized = false;
      console.log('🎭 [Affiliate] Switched to mock mode');
    }
  }

  switchToLive(): void {
    if (process.env.NODE_ENV === 'development') {
      this.adapter = new AdtractionAdapter();
      this.initialized = false;
      console.log('🔗 [Affiliate] Switched to live mode');
    }
  }

  // Få tillgång till mock-specifika funktioner för testning
  getMockAdapter(): MockAffiliateAdapter | null {
    return this.adapter instanceof MockAffiliateAdapter ? this.adapter : null;
  }
}

// Singleton instance
export const affiliateManager = new AffiliateManager();

// Auto-initialize
affiliateManager.init();

export default affiliateManager;