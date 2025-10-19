import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Copy } from 'lucide-react';
import { buildManager, SiteLabel } from '@/lib/buildManager';
import { toast } from '@/hooks/use-toast';

interface SiteCardProps {
  site: SiteLabel;
}

export function SiteCard({ site }: SiteCardProps) {
  const siteInfo = buildManager.getSiteInfo(site);
  const buildCommand = `npm run build:${site}`;

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText(buildCommand);
      toast({
        title: 'Kopierat!',
        description: 'Klistra in kommandot i terminalen',
      });
    } catch (error) {
      toast({
        title: 'Kunde inte kopiera',
        description: 'Kopiera kommandot manuellt',
        variant: 'destructive',
      });
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
            För att bygga SEO-filer för <strong>{siteInfo.domain}</strong>, kör:
          </p>
          <div className="bg-muted p-3 rounded-md font-mono">
            <code className="text-sm">{buildCommand}</code>
          </div>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>📁 Output: <code>dist/{site}/sitemap.xml</code></p>
            <p>🚀 Deploy <code>dist/{site}/</code> mappen till {siteInfo.domain}</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleCopyCommand}
          className="w-full"
        >
          <Copy className="mr-2 h-4 w-4" />
          Kopiera Build-kommando
        </Button>
      </CardFooter>
    </Card>
  );
}
