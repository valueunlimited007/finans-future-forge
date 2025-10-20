import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export default function DynamicLlms() {
  useEffect(() => {
    const fetchLlms = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('llms', {
          method: 'GET',
        });

        if (error) throw error;
        
        // Create a blob with raw text content
        const blob = new Blob([data], { type: 'text/plain; charset=utf-8' });
        const url = URL.createObjectURL(blob);
        
        // Replace current location with blob URL
        window.location.replace(url);
      } catch (error) {
        console.error('[LLMS] Error fetching:', error);
        const fallbackBlob = new Blob(['# llms.txt\n# Error loading content'], { type: 'text/plain; charset=utf-8' });
        const fallbackUrl = URL.createObjectURL(fallbackBlob);
        window.location.replace(fallbackUrl);
      }
    };

    fetchLlms();
  }, []);

  return null;
}
