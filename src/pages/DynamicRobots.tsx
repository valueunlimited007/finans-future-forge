import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export default function DynamicRobots() {
  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('robots', {
          method: 'GET',
        });

        if (error) throw error;
        
        // Create a blob with raw text content
        const blob = new Blob([data], { type: 'text/plain; charset=utf-8' });
        const url = URL.createObjectURL(blob);
        
        // Replace current location with blob URL
        window.location.replace(url);
      } catch (error) {
        console.error('[ROBOTS] Error fetching:', error);
        const fallbackBlob = new Blob(['User-agent: *\nDisallow:'], { type: 'text/plain; charset=utf-8' });
        const fallbackUrl = URL.createObjectURL(fallbackBlob);
        window.location.replace(fallbackUrl);
      }
    };

    fetchRobots();
  }, []);

  return null;
}
