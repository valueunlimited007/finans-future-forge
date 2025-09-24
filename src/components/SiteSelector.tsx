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
import { getSiteConfig } from '@/lib/siteConfig';
import { setDevelopmentSiteOverride } from '@/lib/developmentOverride';

export function SiteSelector() {
  const [currentSite, setCurrentSite] = useState<string>('auto');
  const [isDevelopment, setIsDevelopment] = useState(false);
  
  // Get site config - it will automatically use development override
  const siteConfig = getSiteConfig();

  useEffect(() => {
    // Only show in development
    setIsDevelopment(import.meta.env.DEV);
    
    // Get stored preference
    const stored = localStorage.getItem('site-selector-override');
    if (stored) {
      setCurrentSite(stored);
    }
  }, []);

  const handleSiteChange = (site: string) => {
    setCurrentSite(site);
    if (site === 'auto') {
      localStorage.removeItem('site-selector-override');
      setDevelopmentSiteOverride(null);
    } else {
      localStorage.setItem('site-selector-override', site);
      setDevelopmentSiteOverride(site);
    }
    
    // Force reload to apply new site config
    window.location.reload();
  };

  if (!isDevelopment) return null;

  const sites = [
    { 
      id: 'auto', 
      name: 'Auto (Domain)', 
      icon: Monitor,
      description: 'Detect from hostname',
      current: currentSite === 'auto'
    },
    { 
      id: 'finansguiden', 
      name: 'Finansguiden', 
      icon: Building2,
      description: 'Financial comparison site',
      current: siteConfig.site === 'finansguiden' 
    },
    { 
      id: 'kasinos', 
      name: 'Kasinos', 
      icon: Settings,
      description: 'Casino comparison site',
      current: siteConfig.site === 'kasinos' 
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-background/95 backdrop-blur border-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <Settings className="h-3 w-3 mr-2" />
            <span className="text-xs font-medium">
              {sites.find(s => s.id === currentSite)?.name || 'Site'}
            </span>
            <Badge 
              variant={siteConfig.site === 'kasinos' ? 'default' : 'secondary'} 
              className="ml-2 px-1.5 py-0.5 text-xs"
            >
              {siteConfig.site === 'kasinos' ? 'Casino' : 'Finance'}
            </Badge>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64">
          <div className="p-2 text-xs text-muted-foreground border-b mb-2">
            Development Site Selector
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
          <div className="p-2 pt-3 border-t mt-2">
            <div className="text-xs text-muted-foreground">
              <strong>Current:</strong> {siteConfig.name}
            </div>
            <div className="text-xs text-muted-foreground">
              <strong>Theme:</strong> {siteConfig.theme}
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default SiteSelector;