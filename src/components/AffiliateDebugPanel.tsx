import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff, Trash2, Activity, Network } from 'lucide-react';
import { affiliateManager } from '@/lib/affiliate/AffiliateManager';
import { AffiliateStats } from '@/lib/affiliate/types';

export const AffiliateDebugPanel: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState<AffiliateStats | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Visa endast i development mode
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const loadStats = async () => {
    setIsLoading(true);
    try {
      const currentStats = await affiliateManager.getStats();
      setStats(currentStats);
    } catch (error) {
      console.error('Error loading affiliate stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearMockData = () => {
    const mockAdapter = affiliateManager.getMockAdapter();
    if (mockAdapter) {
      mockAdapter.clearMockData();
      setStats(null);
    }
  };

  const switchMode = () => {
    if (affiliateManager.isMockMode()) {
      affiliateManager.switchToLive();
    } else {
      affiliateManager.switchToMock();
    }
    window.location.reload(); // Reload för att uppdatera komponenter
  };

  useEffect(() => {
    if (isVisible && !stats) {
      loadStats();
    }
  }, [isVisible]);

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsVisible(true)}
          variant="outline"
          size="sm"
          className="shadow-lg"
        >
          <Network className="h-4 w-4 mr-2" />
          Affiliate Debug
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80">
      <Card className="shadow-xl border-2">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm flex items-center gap-2">
              <Network className="h-4 w-4" />
              Affiliate System Debug
            </CardTitle>
            <Button
              onClick={() => setIsVisible(false)}
              variant="ghost"
              size="sm"
            >
              <EyeOff className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Current Mode */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Current Mode:</span>
              <Badge variant={affiliateManager.isMockMode() ? "secondary" : "default"}>
                {affiliateManager.isMockMode() ? "Mock" : "Live"}
              </Badge>
            </div>
            <div className="text-xs text-muted-foreground">
              Network: {affiliateManager.getCurrentNetwork()}
            </div>
            
            <Button
              onClick={switchMode}
              variant="outline"
              size="sm"
              className="w-full mt-2"
            >
              Switch to {affiliateManager.isMockMode() ? "Live" : "Mock"}
            </Button>
          </div>

          <Separator />

          {/* Stats */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Statistics:</span>
              <Button
                onClick={loadStats}
                variant="ghost"
                size="sm"
                disabled={isLoading}
              >
                <Activity className="h-3 w-3" />
              </Button>
            </div>

            {stats ? (
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span>Clicks:</span>
                  <span className="font-mono">{stats.clicks}</span>
                </div>
                <div className="flex justify-between">
                  <span>Conversions:</span>
                  <span className="font-mono">{stats.conversions}</span>
                </div>
                <div className="flex justify-between">
                  <span>Revenue:</span>
                  <span className="font-mono">{stats.revenue.toFixed(0)} SEK</span>
                </div>
                <div className="flex justify-between">
                  <span>Conv. Rate:</span>
                  <span className="font-mono">{stats.conversionRate.toFixed(2)}%</span>
                </div>
              </div>
            ) : (
              <div className="text-xs text-muted-foreground">
                {isLoading ? 'Loading...' : 'No data loaded'}
              </div>
            )}
          </div>

          {/* Mock Controls */}
          {affiliateManager.isMockMode() && (
            <>
              <Separator />
              <div>
                <span className="text-sm font-medium mb-2 block">Mock Controls:</span>
                <Button
                  onClick={clearMockData}
                  variant="destructive"
                  size="sm"
                  className="w-full"
                >
                  <Trash2 className="h-3 w-3 mr-2" />
                  Clear Mock Data
                </Button>
              </div>
            </>
          )}

          <div className="text-xs text-muted-foreground">
            💡 This panel is only visible in development mode
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AffiliateDebugPanel;