// Main exports for affiliate system
export { affiliateManager as default, affiliateManager } from './AffiliateManager';
export type { 
  AffiliateAdapter, 
  AffiliateClick, 
  AffiliateStats, 
  AffiliateLink,
  AffiliateConversion,
  AffiliateNetwork 
} from './types';
export { AFFILIATE_CONFIG, AFFILIATE_NETWORKS, getActiveNetwork } from './config';
export { MockAffiliateAdapter } from './MockAffiliateAdapter';
export { AdtractionAdapter } from './AdtractionAdapter';