import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Play, Eye, MousePointer, BarChart3 } from 'lucide-react';
import { AffiliateButton } from '@/components/AffiliateButton';
import { affiliateManager } from '@/lib/affiliate/AffiliateManager';

export const AffiliateMockDemo: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleDemoClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Play className="h-5 w-5" />
          Affiliate System Demo
        </CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Badge variant={affiliateManager.isMockMode() ? "secondary" : "default"}>
            {affiliateManager.isMockMode() ? "Mock Mode" : "Live Mode"}
          </Badge>
          Network: {affiliateManager.getCurrentNetwork()}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium mb-3 flex items-center gap-2">
            <MousePointer className="h-4 w-4" />
            Test Affiliate Buttons
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Casino Button:</p>
              <AffiliateButton
                href="https://example.com/betsson"
                label="Spela på Betsson"
                brandId="betsson"
                brandName="Betsson"
              />
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Finance Button:</p>
              <AffiliateButton
                href="https://example.com/lendo"
                label="Ansök hos Lendo"
                termSlug="privatlan"
              />
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-medium mb-3 flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Mock Features
          </h3>
          
          <div className="text-sm space-y-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Eye className="h-3 w-3" />
              All clicks are tracked and logged to console
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-3 w-3" />
              URLs are wrapped with tracking parameters
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-3 w-3" />
              Mock conversion rate: ~5% for demo purposes
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-3 w-3" />
              Debug panel available in development mode
            </div>
          </div>
        </div>

        {affiliateManager.isMockMode() && (
          <>
            <Separator />
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-800 font-medium mb-2">
                ⚠️ Mock Mode Active
              </div>
              <p className="text-sm text-yellow-700">
                All affiliate tracking is simulated. No real partner networks are contacted. 
                Perfect for safe testing and development.
              </p>
            </div>
          </>
        )}

        <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded">
          💡 <strong>För utvecklare:</strong> Öppna Developer Tools Console för att se 
          tracking-events när du klickar på affiliate-knappar. Debug-panelen visar 
          statistik och kontroller längst ner till höger på sidan.
        </div>
      </CardContent>
    </Card>
  );
};

export default AffiliateMockDemo;