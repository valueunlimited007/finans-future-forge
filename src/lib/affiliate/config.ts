import { AffiliateNetwork } from './types';

export const AFFILIATE_CONFIG = {
  // Mock mode för utveckling och testning
  mockMode: process.env.NODE_ENV === 'development',
  
  // Default tracking parametrar
  defaultParams: {
    source: 'kasinos_se',
    medium: 'cpc',
    campaign: 'casino_comparison'
  },

  // Session timeout för clicks (24 timmar)
  clickSessionTimeout: 24 * 60 * 60 * 1000,
  
  // Cache timeout för stats (5 minuter)
  statsCacheTimeout: 5 * 60 * 1000
};

export const AFFILIATE_NETWORKS: AffiliateNetwork[] = [
  {
    id: 'adtraction',
    name: 'Adtraction',
    baseUrl: 'https://www.adtraction.com/tracking/click',
    trackingPrefix: 'aff_',
    isActive: true
  },
  {
    id: 'tradedoubler',
    name: 'TradeDoubler', 
    baseUrl: 'https://clk.tradedoubler.com/click',
    trackingPrefix: 'td_',
    isActive: false
  },
  {
    id: 'mock',
    name: 'Mock Network (Development)',
    baseUrl: 'https://example.com/mock',
    trackingPrefix: 'mock_',
    isActive: true
  }
];

export function getActiveNetwork(): AffiliateNetwork {
  if (AFFILIATE_CONFIG.mockMode) {
    return AFFILIATE_NETWORKS.find(n => n.id === 'mock')!;
  }
  
  return AFFILIATE_NETWORKS.find(n => n.isActive && n.id !== 'mock') || AFFILIATE_NETWORKS[0];
}