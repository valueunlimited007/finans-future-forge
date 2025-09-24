import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Monitor, Building2, Settings } from 'lucide-react';

// Simple site selector without hostname manipulation
export function SiteSelector() {
  const [currentSite, setCurrentSite] = useState<string>('auto');
  const [isDevelopment, setIsDevelopment] = useState(false);

  useEffect(() => {
    // Only show in development
    setIsDevelopment(import.meta.env.DEV);
    
    // Get stored preference
    try {
      const stored = localStorage.getItem('site-selector-override');
      if (stored) {
        setCurrentSite(stored);
      }
    } catch (error) {
      console.log('Could not access localStorage:', error);
    }
  }, []);

  const handleSiteChange = (site: string) => {
    setCurrentSite(site);
    
    try {
      if (site === 'auto') {
        localStorage.removeItem('site-selector-override');
      } else {
        localStorage.setItem('site-selector-override', site);
      }
      
      // Simple reload without any hostname manipulation
      window.location.reload();
    } catch (error) {
      console.log('Could not update site preference:', error);
    }
  };

  // Don't show in production
  if (!isDevelopment) return null;

  // Determine current site based on URL
  const hostname = window.location.hostname;
  const detectedSite = hostname.includes('kasinos') ? 'kasinos' : 'finansguiden';

  const sites = [
    { 
      id: 'auto', 
      name: 'Auto Detection', 
      icon: Monitor,
      description: `Currently: ${detectedSite}`,
    },
    { 
      id: 'finansguiden', 
      name: 'Finansguiden Mode', 
      icon: Building2,
      description: 'Financial comparison site',
    },
    { 
      id: 'kasinos', 
      name: 'Kasinos Mode', 
      icon: Settings,
      description: 'Casino comparison site',
    },
  ];

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-background/95 backdrop-blur border shadow-lg hover:shadow-xl transition-shadow"
          >
            <Settings className="h-3 w-3 mr-2" />
            <span className="text-xs font-medium">
              {sites.find(s => s.id === currentSite)?.name || 'Dev Tools'}
            </span>
            <Badge 
              variant={detectedSite === 'kasinos' ? 'default' : 'secondary'} 
              className="ml-2 px-1.5 py-0.5 text-xs"
            >
              {detectedSite === 'kasinos' ? 'Casino' : 'Finance'}
            </Badge>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-64">
          <div className="p-2 text-xs text-muted-foreground border-b mb-2">
            Development Site Mode
          </div>
          {sites.map((site) => (
            <DropdownMenuItem
              key={site.id}
              onClick={() => handleSiteChange(site.id)}
              className="flex items-center gap-3 p-3 cursor-pointer"
            >
              <site.icon className="h-4 w-4" />
              <div className="flex-1">
                <div className="font-medium text-sm">{site.name}</div>
                <div className="text-xs text-muted-foreground">
                  {site.description}
                </div>
              </div>
              {currentSite === site.id && (
                <Badge variant="outline" className="text-xs">
                  Active
                </Badge>
              )}
            </DropdownMenuItem>
          ))}
          <div className="p-2 pt-3 border-t mt-2 text-xs text-muted-foreground">
            Note: Changes require page reload
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default SiteSelector;