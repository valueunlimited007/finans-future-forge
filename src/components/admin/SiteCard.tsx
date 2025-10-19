import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Rocket } from 'lucide-react';
import { buildManager, SiteLabel } from '@/lib/buildManager';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface SiteCardProps {
  site: SiteLabel;
  onFilesGenerated?: (files: Record<string, string>) => void;
}

export function SiteCard({ site, onFilesGenerated }: SiteCardProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const siteInfo = buildManager.getSiteInfo(site);

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-seo', {
        body: { site }
      });
      
      if (error) throw error;
      
      if (data.success) {
        toast({
          title: '✅ Genererat!',
          description: `SEO-filer skapade för ${siteInfo.domain} (${data.urlCount} URLs)`,
        });
        
        // Skicka filer till FilePreview om callback finns
        if (onFilesGenerated) {
          onFilesGenerated(data.files);
        }
      } else {
        throw new Error(data.error || 'Unknown error');
      }
    } catch (error: any) {
      toast({
        title: 'Fel vid generering',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">
            {siteInfo.flag} {siteInfo.domain}
          </CardTitle>
          <Badge variant="outline">
            {siteInfo.routes} routes
          </Badge>
        </div>
        <CardDescription>
          {siteInfo.market} Market • {siteInfo.type}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Generera SEO-filer för <strong>{siteInfo.domain}</strong>
          </p>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>📄 sitemap.xml, robots.txt, llms.txt, security.txt</p>
            <p>🌐 {siteInfo.routes} sidor inkluderade</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Genererar...
            </>
          ) : (
            <>
              <Rocket className="mr-2 h-4 w-4" />
              Generera SEO-filer
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
