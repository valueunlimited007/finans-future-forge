import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export default function DynamicSitemap() {
  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('sitemap', {
          method: 'GET',
        });

        if (error) throw error;
        
        // Create a blob with raw XML content
        const blob = new Blob([data], { type: 'application/xml; charset=utf-8' });
        const url = URL.createObjectURL(blob);
        
        // Replace current location with blob URL
        window.location.replace(url);
      } catch (error) {
        console.error('[SITEMAP] Error fetching:', error);
        const fallbackBlob = new Blob(
          ['<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>'],
          { type: 'application/xml; charset=utf-8' }
        );
        const fallbackUrl = URL.createObjectURL(fallbackBlob);
        window.location.replace(fallbackUrl);
      }
    };

    fetchSitemap();
  }, []);

  return null;
}
