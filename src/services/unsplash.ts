const UNSPLASH_ACCESS_KEY = 'kS8EPFZMoCBgSpwc5jQhNf6GCmkvTS1ZQEtbpU4pQo8';
const UNSPLASH_API_URL = 'https://api.unsplash.com';

export interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string | null;
  description: string | null;
  user: {
    name: string;
    username: string;
  };
}

export async function searchUnsplashImages(
  query: string,
  count: number = 1,
  orientation: 'landscape' | 'portrait' | 'squarish' = 'landscape'
): Promise<UnsplashImage[]> {
  try {
    const response = await fetch(
      `${UNSPLASH_API_URL}/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=${orientation}&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching Unsplash images:', error);
    return [];
  }
}

export async function getRandomUnsplashImage(
  query: string,
  orientation: 'landscape' | 'portrait' | 'squarish' = 'landscape'
): Promise<UnsplashImage | null> {
  try {
    const response = await fetch(
      `${UNSPLASH_API_URL}/photos/random?query=${encodeURIComponent(query)}&orientation=${orientation}&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching random Unsplash image:', error);
    return null;
  }
}

// Pre-defined image queries for consistent results
export const IMAGE_QUERIES = {
  finance: 'finance money investment',
  loans: 'loan handshake business agreement',
  creditCard: 'credit card payment financial',
  business: 'business professional office',
  savings: 'piggy bank savings money',
  mortgage: 'house home mortgage real estate',
  car: 'car automobile financing',
  expert: 'professional business person suit',
  calculator: 'calculator finance planning',
  growth: 'growth chart financial success'
};