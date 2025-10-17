// Utility functions for extracting and calculating rates from partner offers

interface PartnerOffer {
  id: string;
  name: string;
  aprFrom: string;
  logo: string;
  url: string;
  isPartner?: boolean;
  isComparison?: boolean;
}

/**
 * Parse APR string to extract numeric rate values
 * Examples: "14,88% - 21,6%", "från 4,95%", "4,95% - 23%"
 */
export function parseAprRange(aprString: string): { min: number; max: number | null } {
  // Remove "från" prefix if present
  const cleaned = aprString.replace(/från\s*/i, '');
  
  // Extract all numbers (handle both "," and "." as decimal separators)
  const numbers = cleaned.match(/\d+[.,]?\d*/g);
  
  if (!numbers || numbers.length === 0) {
    return { min: 0, max: null };
  }
  
  // Convert to numbers (replace comma with dot)
  const rates = numbers.map(n => parseFloat(n.replace(',', '.')));
  
  if (rates.length === 1) {
    return { min: rates[0], max: null };
  }
  
  return {
    min: Math.min(...rates),
    max: Math.max(...rates)
  };
}

/**
 * Get all partner offers from window.FG_OFFERS
 */
export function getPartnerOffers(): PartnerOffer[] {
  if (typeof window === 'undefined' || !window.FG_OFFERS) {
    return [];
  }
  
  const offers = (window.FG_OFFERS as any).privatlan || [];
  
  return offers
    .filter((offer: PartnerOffer) => offer.isPartner && offer.aprFrom)
    .map((offer: PartnerOffer) => ({
      id: offer.id,
      name: offer.name,
      aprFrom: offer.aprFrom,
      logo: offer.logo,
      url: offer.url,
      isComparison: offer.isComparison
    }));
}

/**
 * Calculate average minimum rate from all partners
 */
export function calculateAverageMinRate(offers: PartnerOffer[]): number {
  if (offers.length === 0) return 0;
  
  const minRates = offers
    .map(offer => parseAprRange(offer.aprFrom).min)
    .filter(rate => rate > 0);
  
  if (minRates.length === 0) return 0;
  
  const sum = minRates.reduce((acc, rate) => acc + rate, 0);
  return Math.round((sum / minRates.length) * 10) / 10; // Round to 1 decimal
}

/**
 * Find the absolute lowest rate among all partners
 */
export function findLowestRate(offers: PartnerOffer[]): number {
  if (offers.length === 0) return 0;
  
  const minRates = offers
    .map(offer => parseAprRange(offer.aprFrom).min)
    .filter(rate => rate > 0);
  
  if (minRates.length === 0) return 0;
  
  return Math.min(...minRates);
}

/**
 * Get top N partners sorted by lowest rate
 */
export function getTopPartnersByRate(offers: PartnerOffer[], limit: number = 15): PartnerOffer[] {
  return offers
    .map(offer => ({
      ...offer,
      minRate: parseAprRange(offer.aprFrom).min
    }))
    .filter(offer => offer.minRate > 0)
    .sort((a, b) => a.minRate - b.minRate)
    .slice(0, limit);
}

/**
 * Generate mock historical data based on current rates
 * Used for the rate development chart
 */
export function generateHistoricalData(currentAverage: number, currentLowest: number) {
  const months = [
    'Jan 2024', 'Feb 2024', 'Mar 2024', 'Apr 2024', 'Maj 2024', 
    'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024', 'Okt 2024'
  ];
  
  // Generate declining trend over past 10 months
  return months.map((month, index) => {
    const monthsAgo = months.length - 1 - index;
    const avgIncrease = monthsAgo * 0.2; // Decrease by 0.2% per month
    const lowestIncrease = monthsAgo * 0.05; // Slower decline for lowest rate
    
    return {
      month,
      average: Math.round((currentAverage + avgIncrease) * 10) / 10,
      lowest: Math.round((currentLowest + lowestIncrease) * 10) / 10
    };
  });
}

// Type declaration for window.FG_OFFERS


