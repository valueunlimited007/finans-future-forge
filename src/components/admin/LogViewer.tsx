import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Terminal } from 'lucide-react';

interface LogEntry {
  timestamp: Date;
  site: string;
  message: string;
  level: 'info' | 'success' | 'error';
}

export function LogViewer() {
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      timestamp: new Date(),
      site: 'system',
      message: 'Admin panel initialized',
      level: 'info',
    },
  ]);

  const getLevelColor = (level: LogEntry['level']) => {
    switch (level) {
      case 'success':
        return 'text-green-500';
      case 'error':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString('sv-SE', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5" />
          <CardTitle>Build Logs</CardTitle>
        </div>
        <CardDescription>Real-time build process output</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] w-full rounded-md border bg-muted/30 p-4">
          <div className="space-y-2 font-mono text-sm">
            {logs.map((log, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-muted-foreground/50 shrink-0">
                  [{formatTimestamp(log.timestamp)}]
                </span>
                <Badge variant="outline" className="shrink-0">
                  {log.site}
                </Badge>
                <span className={getLevelColor(log.level)}>{log.message}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
