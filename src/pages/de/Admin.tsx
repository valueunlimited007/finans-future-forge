import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { SiteCard } from '@/components/admin/SiteCard';
import { LogViewer } from '@/components/admin/LogViewer';
import { FilePreview } from '@/components/admin/FilePreview';
import { buildManager } from '@/lib/buildManager';
import { Rocket, Settings } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function AdminDE() {
  const [isGeneratingAll, setIsGeneratingAll] = useState(false);
  const [generatedFiles, setGeneratedFiles] = useState<Record<string, string> | undefined>();

  const handleGenerateAll = async () => {
    setIsGeneratingAll(true);
    toast({
      title: 'Startar',
      description: 'Genererar SEO-filer för alla sajter...',
    });

    try {
      const results = await buildManager.generateAllSites();
      const successCount = Object.values(results).filter(r => r.success).length;
      
      toast({
        title: 'Klart',
        description: `Genererade SEO-filer för ${successCount}/3 sajter`,
      });
    } catch (error) {
      toast({
        title: 'Fel',
        description: 'Kunde inte generera SEO-filer',
        variant: 'destructive',
      });
    } finally {
      setIsGeneratingAll(false);
    }
  };

  const handleFilesGenerated = (files: Record<string, string>) => {
    setGeneratedFiles(files);
  };

  return (
    <>
      <Helmet>
        <title>Multi-Site Build Manager - Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Header */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Settings className="h-8 w-8 text-primary" />
                <div>
                  <h1 className="text-4xl font-bold tracking-tight">Multi-Site Build Manager</h1>
                  <p className="text-muted-foreground mt-1">
                    Generate SEO files for Finanzen, Finansguiden, and Kasinos
                  </p>
                </div>
              </div>
              
              <Button 
                size="lg"
                onClick={handleGenerateAll}
                disabled={isGeneratingAll}
              >
                <Rocket className="mr-2 h-5 w-5" />
                {isGeneratingAll ? 'Generating All...' : 'Generate All Sites'}
              </Button>
            </div>
          </div>

          {/* Site Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <SiteCard site="finanzen" onFilesGenerated={handleFilesGenerated} />
            <SiteCard site="finansguiden" onFilesGenerated={handleFilesGenerated} />
            <SiteCard site="kasinos" onFilesGenerated={handleFilesGenerated} />
          </div>

          {/* Log Viewer and File Preview */}
          <div className="grid gap-6 md:grid-cols-2">
            <LogViewer />
            <FilePreview files={generatedFiles} />
          </div>

          {/* Info Footer */}
          <div className="mt-8 p-4 rounded-lg bg-muted/50 border">
            <h3 className="font-semibold mb-2">ℹ️ Information</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• All sites share the same Supabase backend</li>
              <li>• Build process generates: sitemap.xml, robots.txt, llms.txt, security.txt</li>
              <li>• Files are site-specific based on SITE_DOMAIN environment variable</li>
              <li>• Production builds: npm run build:finanzen / build:finansguiden / build:kasinos</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
