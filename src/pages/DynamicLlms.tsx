import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export default function DynamicLlms() {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLlms = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('llms', {
          method: 'GET',
        });

        if (error) throw error;
        
        setContent(data);
      } catch (error) {
        console.error('[LLMS] Error fetching:', error);
        setContent('# llms.txt\n# Error loading content');
      } finally {
        setLoading(false);
      }
    };

    fetchLlms();
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
