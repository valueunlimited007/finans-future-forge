import { AffiliateAdapter, AffiliateClick, AffiliateStats } from './types';
import { AFFILIATE_CONFIG } from './config';

export class MockAffiliateAdapter implements AffiliateAdapter {
  networkId = 'mock';
  private clicks: AffiliateClick[] = [];
  private mockStats: AffiliateStats = {
    clicks: 0,
    conversions: 0,
    revenue: 0,
    conversionRate: 0,
    period: {
      start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 dagar sedan
      end: new Date()
    }
  };

  generateTrackingUrl(brandId: string, originalUrl: string, params: Record<string, string> = {}): string {
    const trackingParams = {
      ...AFFILIATE_CONFIG.defaultParams,
      ...params,
      brand_id: brandId,
      click_id: `mock_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now().toString()
    };

    const searchParams = new URLSearchParams(trackingParams);
    const separator = originalUrl.includes('?') ? '&' : '?';
    
    return `${originalUrl}${separator}${searchParams.toString()}`;
  }

  async trackClick(clickData: Omit<AffiliateClick, 'id' | 'timestamp'>): Promise<AffiliateClick> {
    const click: AffiliateClick = {
      ...clickData,
      id: `mock_click_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date()
    };

    // Simulera async operation
    await new Promise(resolve => setTimeout(resolve, 100));

    this.clicks.push(click);
    this.mockStats.clicks++;

    // Simulera några konverteringar för demo
    if (Math.random() < 0.05) { // 5% conversion rate
      this.mockStats.conversions++;
      this.mockStats.revenue += Math.random() * 100 + 50; // 50-150 SEK
    }

    this.mockStats.conversionRate = this.mockStats.clicks > 0 
      ? (this.mockStats.conversions / this.mockStats.clicks) * 100 
      : 0;

    console.log('🎰 [Mock Affiliate] Click tracked:', {
      brandId: click.brandId,
      brandName: click.brandName,
      page: click.page,
      clickId: click.id,
      totalClicks: this.mockStats.clicks,
      conversionRate: `${this.mockStats.conversionRate.toFixed(2)}%`
    });

    return click;
  }

  async getStats(brandId?: string, period?: { start: Date; end: Date }): Promise<AffiliateStats> {
    // Simulera async operation
    await new Promise(resolve => setTimeout(resolve, 200));

    let filteredClicks = this.clicks;

    if (brandId) {
      filteredClicks = this.clicks.filter(c => c.brandId === brandId);
    }

    if (period) {
      filteredClicks = filteredClicks.filter(c => 
        c.timestamp >= period.start && c.timestamp <= period.end
      );
    }

    const stats: AffiliateStats = {
      clicks: filteredClicks.length,
      conversions: Math.floor(filteredClicks.length * 0.05), // 5% mock conversion rate
      revenue: filteredClicks.length * (Math.random() * 20 + 10), // 10-30 SEK per click
      conversionRate: filteredClicks.length > 0 ? 5.0 : 0,
      period: period || this.mockStats.period
    };

    stats.conversionRate = stats.clicks > 0 ? (stats.conversions / stats.clicks) * 100 : 0;

    return stats;
  }

  isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  isMockMode(): boolean {
    return true;
  }

  // Mock-specifika metoder för testning
  clearMockData(): void {
    this.clicks = [];
    this.mockStats = {
      clicks: 0,
      conversions: 0,
      revenue: 0,
      conversionRate: 0,
      period: {
        start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        end: new Date()
      }
    };
    console.log('🧹 [Mock Affiliate] Data cleared');
  }

  getMockClicks(): AffiliateClick[] {
    return [...this.clicks];
  }
}