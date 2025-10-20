import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export default function DynamicRobots() {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('robots', {
          method: 'GET',
        });

        if (error) throw error;
        
        setContent(data);
      } catch (error) {
        console.error('[ROBOTS] Error fetching:', error);
        setContent('User-agent: *\nDisallow:');
      } finally {
        setLoading(false);
      }
    };

    fetchRobots();
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
