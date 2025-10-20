import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export default function DynamicSitemap() {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('sitemap', {
          method: 'GET',
        });

        if (error) throw error;
        
        setContent(data);
      } catch (error) {
        console.error('[SITEMAP] Error fetching:', error);
        setContent('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');
      } finally {
        setLoading(false);
      }
    };

    fetchSitemap();
  }, []);

  if (loading) {
    return <pre>Loading...</pre>;
  }

  return (
    <pre style={{ 
      fontFamily: 'monospace', 
      whiteSpace: 'pre-wrap', 
      padding: '20px',
      background: '#f5f5f5',
      color: '#000'
    }}>
      {content}
    </pre>
  );
}
