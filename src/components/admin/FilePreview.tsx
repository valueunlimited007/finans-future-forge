import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Copy, Download, FileText } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface FilePreviewProps {
  files?: Record<string, string>;
}

export function FilePreview({ files }: FilePreviewProps) {
  const copyToClipboard = (text: string, filename: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Kopierat!',
      description: `${filename} kopierad till urklipp`,
    });
  };

  const downloadFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: 'Nedladdad!',
      description: `${filename} har laddats ner`,
    });
  };

  const downloadAll = () => {
    if (!files) return;
    
    Object.entries(files).forEach(([filename, content]) => {
      downloadFile(content, filename);
    });
  };

  if (!files || Object.keys(files).length === 0) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <CardTitle>Filförhandsvisning</CardTitle>
          </div>
          <CardDescription>Generera SEO-filer för att se dem här</CardDescription>
        </CardHeader>
        <CardContent className="text-center py-8 text-muted-foreground">
          <FileText className="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p>Inga filer genererade ännu</p>
          <p className="text-sm mt-1">Klicka på "Generera SEO-filer" för att börja</p>
        </CardContent>
      </Card>
    );
  }

  const fileEntries = Object.entries(files);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            <CardTitle>Filförhandsvisning</CardTitle>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={downloadAll}
          >
            <Download className="h-4 w-4 mr-2" />
            Ladda ner alla
          </Button>
        </div>
        <CardDescription>{fileEntries.length} filer genererade</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={fileEntries[0]?.[0]}>
          <TabsList className="grid w-full grid-cols-4">
            {fileEntries.map(([filename]) => (
              <TabsTrigger key={filename} value={filename}>
                {filename.split('.')[0]}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {fileEntries.map(([filename, content]) => (
            <TabsContent key={filename} value={filename} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {(content.length / 1024).toFixed(1)} KB
                </span>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(content, filename)}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Kopiera
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => downloadFile(content, filename)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Ladda ner
                  </Button>
                </div>
              </div>
              <ScrollArea className="h-[300px] w-full rounded-md border bg-muted/30">
                <pre className="p-4 text-xs">
                  <code>{content}</code>
                </pre>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
