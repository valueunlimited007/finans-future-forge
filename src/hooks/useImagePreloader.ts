import { useEffect, useState } from 'react';

interface UseImagePreloaderOptions {
  images: string[];
  priority?: boolean;
}

interface ImageLoadStatus {
  src: string;
  loaded: boolean;
  error: boolean;
}

export const useImagePreloader = ({ images, priority = false }: UseImagePreloaderOptions) => {
  const [loadedImages, setLoadedImages] = useState<Map<string, ImageLoadStatus>>(new Map());
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!images.length) {
      setIsLoading(false);
      return;
    }

    // Initialize status map
    const initialStatuses = new Map<string, ImageLoadStatus>();
    images.forEach(src => {
      initialStatuses.set(src, { src, loaded: false, error: false });
    });
    setLoadedImages(initialStatuses);

    // Create preload promises
    const preloadPromises = images.map((src) => {
      return new Promise<ImageLoadStatus>((resolve) => {
        const img = new Image();
        
        // Set priority loading attributes if needed
        if (priority) {
          img.fetchPriority = 'high';
          img.loading = 'eager';
        }

        img.onload = () => {
          const status: ImageLoadStatus = { src, loaded: true, error: false };
          setLoadedImages(prev => new Map(prev).set(src, status));
          resolve(status);
        };

        img.onerror = () => {
          const status: ImageLoadStatus = { src, loaded: false, error: true };
          setLoadedImages(prev => new Map(prev).set(src, status));
          resolve(status);
        };

        img.src = src;
      });
    });

    // Track progress
    let completed = 0;
    preloadPromises.forEach(promise => {
      promise.then(() => {
        completed++;
        setProgress((completed / images.length) * 100);
      });
    });

    // Wait for all images to complete (loaded or errored)
    Promise.allSettled(preloadPromises).then(() => {
      setIsLoading(false);
    });

  }, [images, priority]);

  const getImageStatus = (src: string): ImageLoadStatus | undefined => {
    return loadedImages.get(src);
  };

  const isImageLoaded = (src: string): boolean => {
    return loadedImages.get(src)?.loaded ?? false;
  };

  const hasImageError = (src: string): boolean => {
    return loadedImages.get(src)?.error ?? false;
  };

  return {
    isLoading,
    progress,
    getImageStatus,
    isImageLoaded,
    hasImageError,
    loadedImages: Array.from(loadedImages.values()),
  };
};

export default useImagePreloader;