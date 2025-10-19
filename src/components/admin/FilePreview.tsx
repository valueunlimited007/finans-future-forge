import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Copy, FileText } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export function FilePreview() {
  const copyToClipboard = (text: string, filename: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied',
      description: `${filename} copied to clipboard`,
    });
  };

  const sitemapPreview = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://finanzen-guide.de/</loc>
    <lastmod>2025-01-19</lastmod>
    <priority>1.0</priority>
  </url>
  <!-- ... more URLs -->
</urlset>`;

  const robotsPreview = `User-agent: *
Allow: /
Crawl-delay: 5

Sitemap: https://finanzen-guide.de/sitemap.xml`;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          <CardTitle>File Preview</CardTitle>
        </div>
        <CardDescription>Preview generated SEO files</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="sitemap">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sitemap">sitemap.xml</TabsTrigger>
            <TabsTrigger value="robots">robots.txt</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sitemap" className="space-y-2">
            <div className="flex justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(sitemapPreview, 'sitemap.xml')}
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>
            <ScrollArea className="h-[200px] w-full rounded-md border bg-muted/30">
              <pre className="p-4 text-sm">
                <code>{sitemapPreview}</code>
              </pre>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="robots" className="space-y-2">
            <div className="flex justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(robotsPreview, 'robots.txt')}
              >
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </Button>
            </div>
            <ScrollArea className="h-[200px] w-full rounded-md border bg-muted/30">
              <pre className="p-4 text-sm">
                <code>{robotsPreview}</code>
              </pre>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
