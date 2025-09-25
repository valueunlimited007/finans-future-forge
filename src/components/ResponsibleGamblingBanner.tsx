import React from 'react';
import { AlertTriangle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ResponsibleGamblingBannerProps {
  variant?: 'full' | 'compact' | 'inline';
  className?: string;
}

export const ResponsibleGamblingBanner: React.FC<ResponsibleGamblingBannerProps> = ({
  variant = 'full',
  className = ''
}) => {
  if (variant === 'inline') {
    return (
      <div className={`text-sm text-muted-foreground border-t pt-2 ${className}`}>
        <span className="font-medium">18+</span> • Spela ansvarsfullt • 
        <a 
          href="https://www.spelpaus.se" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline ml-1"
        >
          Självavstängning: Spelpaus.se
        </a>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-orange-50 border border-orange-200 rounded-lg p-3 ${className}`}>
        <div className="flex items-center gap-2 text-orange-800">
          <AlertTriangle className="h-4 w-4 flex-shrink-0" />
          <div className="text-sm">
            <span className="font-semibold">18+ år</span> • Spela ansvarsfullt • 
            <a 
              href="https://www.spelpaus.se" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:no-underline font-medium"
            >
              Spelpaus.se
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Alert className={`border-orange-200 bg-orange-50 ${className}`}>
      <AlertTriangle className="h-5 w-5 text-orange-600" />
      <AlertDescription className="text-orange-800">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <span className="font-semibold">Viktigt om spelansvar:</span> Du måste vara 18+ år för att spela. 
            Spela ansvarsfullt och bara med pengar du har råd att förlora.
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.spelpaus.se" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Spelpaus.se
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.stodlinjen.se" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Stödlinjen.se
              </a>
            </Button>
          </div>
        </div>
      </AlertDescription>
    </Alert>
  );
};

export default ResponsibleGamblingBanner;