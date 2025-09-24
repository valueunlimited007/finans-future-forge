import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { 
  Cookie, 
  Shield, 
  Settings, 
  Info,
  CheckCircle,
  AlertCircle 
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

// Extend Window interface for gtag (removed duplicate dataLayer)
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('cookie-consent');
    const savedPreferences = localStorage.getItem('cookie-preferences');
    
    if (!hasConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 2000);
      return () => clearTimeout(timer);
    }
    
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    
    setPreferences(allAccepted);
    savePreferences(allAccepted);
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    
    setPreferences(necessaryOnly);
    savePreferences(necessaryOnly);
    setShowBanner(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', 'true');
    localStorage.setItem('cookie-preferences', JSON.stringify(prefs));
    
    // Apply preferences to tracking scripts
    if (typeof window !== 'undefined') {
      // Google Analytics consent (if gtag exists)
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: prefs.analytics ? 'granted' : 'denied',
          ad_storage: prefs.marketing ? 'granted' : 'denied',
          functionality_storage: prefs.functional ? 'granted' : 'denied'
        });
      }
    }
  };

  const handleSaveSettings = () => {
    savePreferences(preferences);
    setShowSettings(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur border-t shadow-lg">
        <Card className="p-4 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Cookie className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">Vi använder cookies</h3>
                  <Badge variant="outline" className="text-xs">GDPR</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Vi använder cookies för att förbättra din upplevelse, visa relevant reklam och analysera trafik. 
                  Som affiliatewebbplats får vi provision från casinon när du registrerar dig via våra länkar.
                </p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    Nödvändiga cookies
                  </span>
                  <span className="flex items-center gap-1">
                    <AlertCircle className="h-3 w-3 text-yellow-500" />
                    Analys & marknadsföring (valfritt)
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-2 md:min-w-[300px]">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(true)}
                className="flex-1"
              >
                <Settings className="h-4 w-4 mr-2" />
                Anpassa
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={acceptNecessary}
                className="flex-1"
              >
                Endast nödvändiga
              </Button>
              <Button
                size="sm"
                onClick={acceptAll}
                className="flex-1"
              >
                Acceptera alla
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Cookie Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Cookie-inställningar
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="text-sm text-muted-foreground">
              <p className="mb-3">
                Vi respekterar din integritet och ger dig full kontroll över vilka cookies som används på vår sajt.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-blue-800 text-sm">
                    <strong>Affiliate-information:</strong> Som jämförelsewebbplats får vi provision 
                    från casinon när du registrerar dig via våra länkar. Detta påverkar inte våra 
                    recensioner som baseras på objektiva kriterier.
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Categories */}
            <div className="space-y-4">
              {/* Necessary */}
              <div className="flex items-start justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold">Nödvändiga cookies</h4>
                    <Badge className="bg-green-500/10 text-green-600">Krävs</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Grundläggande cookies som krävs för att webbplatsen ska fungera. 
                    Inkluderar säkerhet, språkinställningar och cookie-preferenser.
                  </p>
                </div>
                <Switch 
                  checked={true} 
                  disabled 
                  className="ml-4"
                />
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold">Analys-cookies</h4>
                    <Badge variant="outline">Valfritt</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Hjälper oss förstå hur besökare använder sajten genom Google Analytics. 
                    Data används för att förbättra användarupplevelsen.
                  </p>
                  <div className="text-xs text-muted-foreground mt-1">
                    Leverantörer: Google Analytics, Google Tag Manager
                  </div>
                </div>
                <Switch 
                  checked={preferences.analytics}
                  onCheckedChange={(checked) => 
                    setPreferences(prev => ({ ...prev, analytics: checked }))
                  }
                  className="ml-4"
                />
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold">Marknadsföring</h4>
                    <Badge variant="outline">Valfritt</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Används för att spåra affiliate-konverteringar och visa relevanta annonser. 
                    Hjälper oss mäta effektiviteten av våra affiliate-partners.
                  </p>
                  <div className="text-xs text-muted-foreground mt-1">
                    Leverantörer: Adtraction, Google Ads, Facebook
                  </div>
                </div>
                <Switch 
                  checked={preferences.marketing}
                  onCheckedChange={(checked) => 
                    setPreferences(prev => ({ ...prev, marketing: checked }))
                  }
                  className="ml-4"
                />
              </div>

              {/* Functional */}
              <div className="flex items-start justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold">Funktionella cookies</h4>
                    <Badge variant="outline">Valfritt</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Förbättrar funktionaliteten genom att komma ihåg dina preferenser 
                    som filterinställningar och favoriter.
                  </p>
                </div>
                <Switch 
                  checked={preferences.functional}
                  onCheckedChange={(checked) => 
                    setPreferences(prev => ({ ...prev, functional: checked }))
                  }
                  className="ml-4"
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="font-semibold">Datahantering</h4>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>
                  • Du kan när som helst ändra dina cookie-inställningar längst ner på sidan
                </p>
                <p>
                  • Läs vår fullständiga <a href="/integritetspolicy" className="text-primary hover:underline">integritetspolicy</a> för mer information
                </p>
                <p>
                  • Data delas endast med våra betrodda affiliate-partners och analysleverantörer
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setShowSettings(false)} className="flex-1">
                Avbryt
              </Button>
              <Button onClick={handleSaveSettings} className="flex-1">
                Spara inställningar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}