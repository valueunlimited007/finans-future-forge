export interface AffiliateClick {
  id: string;
  brandId: string;
  brandName: string;
  timestamp: Date;
  userId?: string;
  page: string;
  userAgent: string;
  referrer: string;
}

export interface AffiliateConversion {
  id: string;
  clickId: string;
  brandId: string;
  amount?: number;
  currency?: string;
  timestamp: Date;
  type: 'registration' | 'deposit' | 'bet' | 'other';
}

export interface AffiliateLink {
  brandId: string;
  url: string;
  trackingParams: Record<string, string>;
  isActive: boolean;
}

export interface AffiliateStats {
  clicks: number;
  conversions: number;
  revenue: number;
  conversionRate: number;
  period: {
    start: Date;
    end: Date;
  };
}

export interface AffiliateNetwork {
  id: string;
  name: string;
  baseUrl: string;
  trackingPrefix: string;
  isActive: boolean;
}

export interface AffiliateAdapter {
  networkId: string;
  generateTrackingUrl(brandId: string, originalUrl: string, params?: Record<string, string>): string;
  trackClick(click: Omit<AffiliateClick, 'id' | 'timestamp'>): Promise<AffiliateClick>;
  getStats(brandId?: string, period?: { start: Date; end: Date }): Promise<AffiliateStats>;
  isValidUrl(url: string): boolean;
  isMockMode(): boolean;
}