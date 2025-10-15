import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Wifi, 
  WifiOff, 
  Bell, 
  Smartphone,
  X,
  Check
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Interface for PWA install prompt
interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

// Service Worker registration
const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully:', registration.scope);
      return registration;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
      return null;
    }
  }
  return null;
};

// Network status hook
function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}

// PWA Install Banner
export function PWAInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if app is already installed
    const checkInstallation = () => {
      if (window.matchMedia('(display-mode: standalone)').matches || 
          (window.navigator as any).standalone === true) {
        setIsInstalled(true);
      }
    };

    checkInstallation();

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Don't show banner if already dismissed recently
      const lastDismissed = localStorage.getItem('pwa-install-dismissed');
      const twentyFourHours = 24 * 60 * 60 * 1000;
      
      if (!lastDismissed || Date.now() - parseInt(lastDismissed) > twentyFourHours) {
        setShowBanner(true);
      }
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowBanner(false);
      toast({
        title: "App installerad!",
        description: "Finansguiden Casino är nu tillgänglig på din hemskärm.",
      });
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [toast]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      
      if (choiceResult.outcome === 'accepted') {
        toast({
          title: "Tack!",
          description: "Appen installeras nu på din enhet.",
        });
      }
      
      setDeferredPrompt(null);
      setShowBanner(false);
    } catch (error) {
      console.error('Install prompt failed:', error);
      toast({
        title: "Kunde inte installera",
        description: "Försök igen senare eller använd webbläsarens installationsalternativ.",
        variant: "destructive"
      });
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  if (isInstalled || !showBanner || !deferredPrompt) return null;

  return (
    <Card className="fixed bottom-4 left-4 right-4 z-50 p-4 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 shadow-lg md:left-auto md:right-4 md:w-80">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/20 rounded-lg">
          <Smartphone className="h-5 w-5 text-primary" />
        </div>
        
        <div className="flex-1">
          <h4 className="font-medium text-sm">Installera appen</h4>
          <p className="text-xs text-muted-foreground">
            Få snabb tillgång till casinojämförelser
          </p>
        </div>

        <div className="flex gap-2">
          <Button size="sm" onClick={handleInstallClick}>
            <Download className="h-3 w-3 mr-1" />
            Installera
          </Button>
          <Button 
            size="sm" 
            variant="ghost" 
            onClick={handleDismiss}
            className="h-8 w-8 p-0"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </Card>
  );
}

// Network Status Indicator
export function NetworkStatusIndicator() {
  const isOnline = useNetworkStatus();
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (!isOnline) {
      setShowIndicator(true);
    } else if (showIndicator) {
      // Show "back online" for a few seconds
      timeoutId = setTimeout(() => {
        setShowIndicator(false);
      }, 3000);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isOnline, showIndicator]);

  if (!showIndicator) return null;

  return (
    <Card className={`
      fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2
      ${isOnline 
        ? 'bg-green-50 border-green-200 text-green-800' 
        : 'bg-orange-50 border-orange-200 text-orange-800'
      }
    `}>
      <div className="flex items-center gap-2 text-sm">
        {isOnline ? (
          <>
            <Wifi className="h-4 w-4" />
            <span>Anslutning återställd</span>
            <Check className="h-4 w-4" />
          </>
        ) : (
          <>
            <WifiOff className="h-4 w-4" />
            <span>Ingen internetanslutning</span>
          </>
        )}
      </div>
    </Card>
  );
}

// Push Notification Setup
export function PushNotificationManager() {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [subscribed, setSubscribed] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }

    // Check existing subscription
    checkSubscription();
  }, []);

  const checkSubscription = async () => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      try {
        const registration = await navigator.serviceWorker.ready;
        const subscription = await registration.pushManager.getSubscription();
        setSubscribed(!!subscription);
      } catch (error) {
        console.error('Error checking push subscription:', error);
      }
    }
  };

  const requestPermission = async () => {
    if (!('Notification' in window)) {
      toast({
        title: "Notiser stöds inte",
        description: "Din webbläsare stöder inte push-notiser.",
        variant: "destructive"
      });
      return;
    }

    try {
      const permission = await Notification.requestPermission();
      setPermission(permission);

      if (permission === 'granted') {
        await subscribeToPush();
        toast({
          title: "Notiser aktiverade!",
          description: "Du får nu notiser om viktiga uppdateringar.",
        });
      }
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      toast({
        title: "Kunde inte aktivera notiser",
        description: "Försök igen senare.",
        variant: "destructive"
      });
    }
  };

  const subscribeToPush = async () => {
    if (!('serviceWorker' in navigator && 'PushManager' in window)) return;

    try {
      const registration = await navigator.serviceWorker.ready;
      
      // Generate VAPID keys for production use
      const vapidPublicKey = 'YOUR_VAPID_PUBLIC_KEY_HERE'; // Replace with actual VAPID key
      
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(vapidPublicKey) as BufferSource
      });

      // Send subscription to your server
      await fetch('/api/push-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscription)
      });

      setSubscribed(true);
    } catch (error) {
      console.error('Error subscribing to push notifications:', error);
    }
  };

  if (permission === 'denied' || !('Notification' in window)) {
    return null;
  }

  return (
    <Card className="p-4">
      <div className="flex items-center gap-3">
        <Bell className={`h-5 w-5 ${subscribed ? 'text-green-500' : 'text-muted-foreground'}`} />
        <div className="flex-1">
          <h4 className="font-medium text-sm">
            {subscribed ? 'Notiser aktiverade' : 'Aktivera notiser'}
          </h4>
          <p className="text-xs text-muted-foreground">
            {subscribed 
              ? 'Du får notiser om nya casinon och erbjudanden'
              : 'Få notiser om nya casinon och viktiga uppdateringar'
            }
          </p>
        </div>
        
        {!subscribed && permission !== 'granted' && (
          <Button size="sm" onClick={requestPermission}>
            Aktivera
          </Button>
        )}
        
        {subscribed && (
          <Badge variant="secondary" className="text-xs">
            <Check className="h-3 w-3 mr-1" />
            Aktiv
          </Badge>
        )}
      </div>
    </Card>
  );
}

// PWA Features Provider
export function PWAFeaturesProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Register service worker
    registerServiceWorker();

    // Add PWA-specific meta tags
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      );
    }

    // Add theme-color for mobile browsers
    const themeColor = document.createElement('meta');
    themeColor.name = 'theme-color';
    themeColor.content = '#2563eb'; // Adjust to match your primary color
    document.head.appendChild(themeColor);

    // Add mobile web app capable meta tags
    const webAppCapable = document.createElement('meta');
    webAppCapable.name = 'mobile-web-app-capable';
    webAppCapable.content = 'yes';
    document.head.appendChild(webAppCapable);

    const appleWebAppCapable = document.createElement('meta');
    appleWebAppCapable.name = 'apple-mobile-web-app-capable';
    appleWebAppCapable.content = 'yes';
    document.head.appendChild(appleWebAppCapable);

    const appleWebAppStatusBar = document.createElement('meta');
    appleWebAppStatusBar.name = 'apple-mobile-web-app-status-bar-style';
    appleWebAppStatusBar.content = 'default';
    document.head.appendChild(appleWebAppStatusBar);

    return () => {
      // Cleanup if needed
      document.head.removeChild(themeColor);
      document.head.removeChild(webAppCapable);
      document.head.removeChild(appleWebAppCapable);
      document.head.removeChild(appleWebAppStatusBar);
    };
  }, []);

  return (
    <>
      {children}
      <PWAInstallBanner />
      <NetworkStatusIndicator />
    </>
  );
}

// Helper function for VAPID key conversion
function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  return new Uint8Array([...rawData].map(char => char.charCodeAt(0)));
}