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
 * Historical interest rate data for personal loans
 * Based on market data from various sources
 */
const HISTORICAL_RATES = [
  { year: 2024, month: 11, average: 6.9, lowest: 5.83 },
  { year: 2024, month: 12, average: 6.0, lowest: 4.98 },
  { year: 2025, month: 1, average: 6.2, lowest: 5.22 },
  { year: 2025, month: 2, average: 5.9, lowest: 4.91 },
  { year: 2025, month: 3, average: 5.8, lowest: 4.84 },
  { year: 2025, month: 4, average: 5.8, lowest: 4.83 },
  { year: 2025, month: 5, average: 6.1, lowest: 5.11 },
  { year: 2025, month: 6, average: 5.5, lowest: 4.45 },
  { year: 2025, month: 7, average: 5.7, lowest: 4.69 },
  { year: 2025, month: 8, average: 6.5, lowest: 5.51 },
  { year: 2025, month: 9, average: 5.6, lowest: 4.64 },
  { year: 2025, month: 10, average: 5.5, lowest: 4.49 },
];

/**
 * Generate historical data based on real market rates
 * Used for the rate development chart - dynamically generates last 10 months
 */
export function generateHistoricalData(currentAverage: number, currentLowest: number) {
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
  const now = new Date();
  const months: string[] = [];
  const data: { month: string; average: number; lowest: number }[] = [];
  
  // Generate last 10 months dynamically
  for (let i = 9; i >= 0; i--) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const monthName = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const monthLabel = `${monthName} ${year}`;
    months.push(monthLabel);
    
    // Find matching historical data
    const historicalData = HISTORICAL_RATES.find(
      r => r.year === year && r.month === date.getMonth() + 1
    );
    
    if (historicalData) {
      // Use real historical data
      data.push({
        month: monthLabel,
        average: historicalData.average,
        lowest: historicalData.lowest
      });
    } else {
      // Fallback: use current rates if no historical data available
      data.push({
        month: monthLabel,
        average: Math.round(currentAverage * 10) / 10,
        lowest: Math.round(currentLowest * 10) / 10
      });
    }
  }
  
  return data;
}

// Type declaration for window.FG_OFFERS


