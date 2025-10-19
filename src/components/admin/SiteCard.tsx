import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, FileCheck, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { buildManager, SiteLabel, BuildProgress } from '@/lib/buildManager';
import { toast } from '@/hooks/use-toast';

interface SiteCardProps {
  site: SiteLabel;
}

export function SiteCard({ site }: SiteCardProps) {
  const [status, setStatus] = useState<'idle' | 'building' | 'success' | 'error'>('idle');
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');

  const siteInfo = buildManager.getSiteInfo(site);

  useEffect(() => {
    buildManager.subscribe(site, (progress: BuildProgress) => {
      setStatus(progress.status);
      setProgress(progress.progress);
      setMessage(progress.message);
    });
  }, [site]);

  const handleGenerate = async () => {
    const result = await buildManager.generateSEOFiles(site);
    
    if (result.success) {
      toast({
        title: 'Success',
        description: result.message,
      });
    } else {
      toast({
        title: 'Error',
        description: result.message,
        variant: 'destructive',
      });
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'building':
        return <Loader2 className="h-4 w-4 animate-spin" />;
      case 'success':
        return <CheckCircle2 className="h-4 w-4" />;
      case 'error':
        return <XCircle className="h-4 w-4" />;
      default:
        return <FileCheck className="h-4 w-4" />;
    }
  };

  const getStatusVariant = () => {
    switch (status) {
      case 'building':
        return 'secondary';
      case 'success':
        return 'default';
      case 'error':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">
            {siteInfo.flag} {siteInfo.domain}
          </CardTitle>
          <Badge variant={getStatusVariant()} className="flex items-center gap-1">
            {getStatusIcon()}
            {status}
          </Badge>
        </div>
        <CardDescription>
          {siteInfo.market} Market • {siteInfo.type} • {siteInfo.routes} routes
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {status === 'building' && (
          <div className="space-y-2">
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground">{message}</p>
          </div>
        )}
        
        {status === 'success' && (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">{message}</p>
            <div className="flex flex-wrap gap-2">
              <a 
                href="/sitemap.xml" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline flex items-center gap-1"
              >
                sitemap.xml <ExternalLink className="h-3 w-3" />
              </a>
              <a 
                href="/robots.txt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline flex items-center gap-1"
              >
                robots.txt <ExternalLink className="h-3 w-3" />
              </a>
              <a 
                href="/llms.txt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline flex items-center gap-1"
              >
                llms.txt <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        )}
        
        {status === 'error' && (
          <p className="text-sm text-destructive">{message}</p>
        )}
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleGenerate}
          disabled={status === 'building'}
          className="w-full"
        >
          {status === 'building' ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <FileCheck className="mr-2 h-4 w-4" />
              Generate SEO Files
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
