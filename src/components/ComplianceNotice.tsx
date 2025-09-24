import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, AlertTriangle, ExternalLink, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ComplianceNoticeProps {
  variant?: 'full' | 'compact' | 'inline';
  showLicense?: boolean;
  showAge?: boolean;
  showSpelpaus?: boolean;
  className?: string;
}

export const ComplianceNotice: React.FC<ComplianceNoticeProps> = ({
  variant = 'full',
  showLicense = true,
  showAge = true, 
  showSpelpaus = true,
  className = ''
}) => {
  if (variant === 'inline') {
    return (
      <div className={`inline-flex items-center gap-2 text-xs text-muted-foreground ${className}`}>
        {showAge && (
          <Badge variant="outline" className="text-xs">
            18+
          </Badge>
        )}
        <span>Spela ansvarsfullt</span>
        <span>•</span>
        <a 
          href="/spelpaus" 
          className="hover:underline text-primary"
        >
          Stödlinjen.se
        </a>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <Alert className={`border-amber-200 bg-amber-50 ${className}`}>
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertDescription className="text-amber-800">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {showAge && <Badge variant="outline">18+ år</Badge>}
            <span>Spela ansvarsfullt och sätt gränser.</span>
            <a 
              href="https://www.stodlinjen.se" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-700 hover:underline font-medium"
            >
              Stödlinjen.se ↗
            </a>
          </div>
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Card className={`p-6 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 ${className}`}>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-100 rounded-full">
            <Shield className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <h3 className="font-semibold text-amber-900">Ansvarfullt spelande</h3>
            <p className="text-sm text-amber-700">Spela säkert och ha kul</p>
          </div>
        </div>

        {/* Age Warning */}
        {showAge && (
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <div className="flex items-center gap-2">
                <Badge variant="destructive">18+ ÅR</Badge>
                <span className="font-medium">Endast för personer över 18 år</span>
              </div>
              <p className="mt-1 text-sm">
                Alla casinon kräver gyltig svensk legitimation för registrering.
              </p>
            </AlertDescription>
          </Alert>
        )}

        {/* License Info */}
        {showLicense && (
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
            <Shield className="h-5 w-5 text-green-600" />
            <div>
              <div className="font-medium text-green-800">Svensk spellicens</div>
              <p className="text-sm text-green-700">
                Alla listade casinon har licens från Spelinspektionen
              </p>
            </div>
          </div>
        )}

        {/* Responsible Gaming Tools */}
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-blue-600" />
              <span className="font-medium text-blue-800">Sätt gränser</span>
            </div>
            <p className="text-sm text-blue-700">
              Använd casinots verktyg för att sätta utgifts- och tidsgränser.
            </p>
          </div>

          {showSpelpaus && (
            <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-purple-600" />
                <span className="font-medium text-purple-800">Spelpaus</span>
              </div>
              <p className="text-sm text-purple-700">
                Aktivera spelpaus på <a href="https://www.spelpaus.se" className="underline">spelpaus.se</a>
              </p>
            </div>
          )}
        </div>

        {/* Help Resources */}
        <div className="pt-3 border-t border-amber-200">
          <p className="text-sm text-amber-800 mb-3">
            <strong>Behöver du hjälp?</strong> Kontakta professionell support:
          </p>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              asChild 
              variant="outline" 
              size="sm"
              className="h-8 text-xs border-amber-300 hover:bg-amber-100"
            >
              <a 
                href="https://www.stodlinjen.se" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Stödlinjen.se
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="sm"
              className="h-8 text-xs border-amber-300 hover:bg-amber-100"
            >
              <a 
                href="https://www.spelberoendecentrum.se" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                Spelberoende Centrum
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="sm"
              className="h-8 text-xs border-amber-300 hover:bg-amber-100"
            >
              <a 
                href="/spelpaus"
                className="flex items-center gap-1"
              >
                Läs mer om spelpaus
              </a>
            </Button>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="text-xs text-amber-700 bg-amber-100/50 p-3 rounded border">
          <p>
            <strong>Reklam:</strong> Denna sida innehåller affiliatelänkar. Vi får provision 
            från casinon när du registrerar dig via våra länkar. Detta påverkar inte våra 
            recensioner eller betyg som baseras på objektiva kriterier.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ComplianceNotice;