import { useState, useEffect } from 'react';
import { getRandomUnsplashImage, type UnsplashImage } from '@/services/unsplash';

interface UseUnsplashImageProps {
  query: string;
  orientation?: 'landscape' | 'portrait' | 'squarish';
  enabled?: boolean;
}

export function useUnsplashImage({ query, orientation = 'landscape', enabled = true }: UseUnsplashImageProps) {
  const [image, setImage] = useState<UnsplashImage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) {
      setLoading(false);
      return;
    }

    let mounted = true;
    
    const fetchImage = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getRandomUnsplashImage(query, orientation);
        
        if (mounted) {
          setImage(result);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Failed to fetch image');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchImage();

    return () => {
      mounted = false;
    };
  }, [query, orientation, enabled]);

  return { image, loading, error };
}

// Cached component for better performance
interface UnsplashImageProps {
  query: string;
  orientation?: 'landscape' | 'portrait' | 'squarish';
  className?: string;
  alt?: string;
  size?: 'small' | 'regular' | 'full';
}

export function UnsplashImage({ 
  query, 
  orientation = 'landscape', 
  className = '', 
  alt, 
  size = 'regular' 
}: UnsplashImageProps) {
  const { image, loading, error } = useUnsplashImage({ query, orientation });

  if (loading) {
    return (
      <div className={`bg-muted animate-pulse ${className}`} />
    );
  }

  if (error || !image) {
    return (
      <div className={`bg-muted flex items-center justify-center ${className}`}>
        <span className="text-muted-foreground text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={image.urls[size]}
      alt={alt || image.alt_description || `Photo by ${image.user.name}`}
      className={className}
      loading="lazy"
    />
  );
}