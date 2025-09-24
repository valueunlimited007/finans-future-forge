import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  AlertTriangle, 
  Shield, 
  Calendar,
  ExternalLink,
  XCircle
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function AgeVerificationModal() {
  const [showModal, setShowModal] = useState(false);
  const [hasVerified, setHasVerified] = useState(false);

  useEffect(() => {
    // Check if user has already verified age
    const ageVerified = localStorage.getItem('age-verified');
    const verificationDate = localStorage.getItem('age-verification-date');
    
    // Verify age every 30 days
    const now = new Date().getTime();
    const thirtyDays = 30 * 24 * 60 * 60 * 1000;
    
    if (!ageVerified || !verificationDate || (now - parseInt(verificationDate)) > thirtyDays) {
      // Show modal after a brief delay to let page load
      const timer = setTimeout(() => setShowModal(true), 1500);
      return () => clearTimeout(timer);
    } else {
      setHasVerified(true);
    }
  }, []);

  const confirmAge = () => {
    localStorage.setItem('age-verified', 'true');
    localStorage.setItem('age-verification-date', new Date().getTime().toString());
    setHasVerified(true);
    setShowModal(false);
  };

  const rejectAge = () => {
    // Redirect to appropriate resource
    window.location.href = 'https://www.1177.se/barn--gravid/';
  };

  return (
    <Dialog open={showModal && !hasVerified} onOpenChange={() => {}}>
      <DialogContent 
        className="max-w-md" 
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600">
            <AlertTriangle className="h-5 w-5" />
            Åldersverifiering krävs
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Age Warning */}
          <Card className="p-4 bg-red-50 border-red-200">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-red-100 rounded-full">
                <Calendar className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-red-800 mb-2">18+ år krävs</h3>
                <p className="text-sm text-red-700">
                  Enligt svensk lag måste du vara minst 18 år gammal för att 
                  besöka webbplatser som innehåller information om spel och casinon.
                </p>
              </div>
            </div>
          </Card>

          {/* Legal Notice */}
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              Denna webbplats innehåller information om online casinon och spel. 
              Vi följer svenska lagar och regler för spelansvar.
            </p>
            
            <div className="bg-muted/50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-blue-600" />
                <span className="font-medium text-foreground">Vad vi gör för säkerheten:</span>
              </div>
              <ul className="space-y-1 text-xs">
                <li>• Kontrollerar att alla casinon har svensk spellicens</li>
                <li>• Främjar ansvarfullt spelande</li>
                <li>• Tillhandahåller information om spelproblem</li>
                <li>• Följer GDPR och svenska dataskyddslagar</li>
              </ul>
            </div>
          </div>

          <Separator />

          {/* Age Confirmation */}
          <div className="space-y-4">
            <h3 className="font-semibold text-center">Bekräfta din ålder</h3>
            
            <div className="grid grid-cols-1 gap-3">
              <Button 
                onClick={confirmAge}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Jag är 18 år eller äldre
              </Button>
              
              <Button 
                onClick={rejectAge}
                variant="outline"
                className="w-full border-red-200 hover:bg-red-50 text-red-600"
              >
                <XCircle className="h-4 w-4 mr-2" />
                Jag är under 18 år
              </Button>
            </div>
          </div>

          {/* Help Resources */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Hjälp och stöd</span>
            </div>
            <div className="space-y-2 text-xs text-blue-700">
              <div className="flex justify-between">
                <span>Spelproblem?</span>
                <a 
                  href="https://www.stodlinjen.se" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  Stödlinjen.se <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <div className="flex justify-between">
                <span>Spelpaus:</span>
                <a 
                  href="https://spelpaus.se" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:underline"
                >
                  Spelpaus.se <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Legal Footer */}
          <div className="text-xs text-muted-foreground text-center space-y-1">
            <p>
              Genom att bekräfta din ålder godkänner du att du förstår riskerna 
              med spel och vårt ansvar som informationswebbplats.
            </p>
            <p className="font-medium">
              <Badge variant="outline" className="text-xs">
                Svensk lag • GDPR-kompatibel • Spelansvar
              </Badge>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}