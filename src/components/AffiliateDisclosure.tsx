import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  DollarSign, 
  Info, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp,
  AlertTriangle,
  Shield,
  Eye
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface AffiliateDisclosureProps {
  variant?: 'banner' | 'card' | 'inline' | 'footer';
  detailed?: boolean;
  className?: string;
}

export default function AffiliateDisclosure({ 
  variant = 'banner', 
  detailed = false, 
  className = '' 
}: AffiliateDisclosureProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (variant === 'inline') {
    return (
      <div className={`inline-flex items-center gap-1 text-xs text-orange-600 ${className}`}>
        <DollarSign className="h-3 w-3" />
        <Badge variant="outline" className="text-xs border-orange-200 text-orange-600">
          Reklam
        </Badge>
        <span>Affiliatelänk</span>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`text-center py-4 px-6 bg-orange-50 border-t border-orange-200 ${className}`}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-orange-700">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              <Badge className="bg-orange-500/10 text-orange-600 border-orange-200">
                Affiliatewebbplats
              </Badge>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <span>
              Vi får provision från casinon när du registrerar dig via våra länkar
            </span>
            <Separator orientation="vertical" className="h-4" />
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 hover:text-orange-800 transition-colors"
            >
              Läs mer {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </button>
          </div>
          
          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            <CollapsibleContent className="pt-4">
              <div className="text-xs text-orange-600 max-w-2xl mx-auto space-y-2">
                <p>
                  Kasinos.se är en oberoende jämförelsewebbplats som får ersättning från 
                  casinooperatörer när användare registrerar sig via våra affiliate-länkar.
                </p>
                <p>
                  Denna affiliateersättning påverkar inte våra recensioner, betyg eller 
                  rekommendationer som baseras på objektiva testkriterier och faktisk spelupplevelse.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <Alert className={`border-orange-200 bg-orange-50 ${className}`}>
        <DollarSign className="h-4 w-4 text-orange-600" />
        <AlertDescription>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Badge className="bg-orange-500/10 text-orange-600 border-orange-200">
              Reklam & Affiliate
            </Badge>
            <span className="text-orange-800">
              Vi får provision från casinon när du registrerar dig via våra länkar. 
              Detta påverkar inte våra objektiva recensioner.
            </span>
            {detailed && (
              <Button 
                variant="link" 
                size="sm" 
                className="p-0 h-auto text-orange-700 hover:text-orange-800"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                Läs mer <ChevronDown className="h-3 w-3 ml-1" />
              </Button>
            )}
          </div>
        </AlertDescription>
      </Alert>
    );
  }

  // Card variant (detailed)
  return (
    <Card className={`p-6 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50 ${className}`}>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-100 rounded-full">
            <DollarSign className="h-5 w-5 text-orange-600" />
          </div>
          <div>
            <h3 className="font-semibold text-orange-900 flex items-center gap-2">
              Affiliate & transparens
              <Badge className="bg-orange-500/10 text-orange-600 border-orange-200">
                Reklam
              </Badge>
            </h3>
            <p className="text-sm text-orange-700">Så finansierar vi vår verksamhet</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <div className="bg-white/60 p-4 rounded-lg border border-orange-200">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Vad betyder detta för dig?</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Du betalar aldrig extra när du använder våra länkar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Våra recensioner förblir objektiva och ärliga</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Vi kan erbjuda gratis jämförelsetjänst tack vare affiliateintäkter</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {detailed && (
            <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between p-3 bg-white/40 rounded-lg border border-orange-200 hover:bg-white/60 transition-colors">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-orange-600" />
                    <span className="font-medium text-orange-800">Detaljerad information</span>
                  </div>
                  {isExpanded ? 
                    <ChevronUp className="h-4 w-4 text-orange-600" /> : 
                    <ChevronDown className="h-4 w-4 text-orange-600" />
                  }
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="pt-4">
                <div className="space-y-4">
                  <div className="bg-white/60 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-gray-800 mb-3">Så fungerar vårt affiliatesystem</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>
                        <strong>1. Provision per registrering:</strong> Vi får en engångsersättning 
                        när en användare registrerar sig på ett casino via våra länkar.
                      </p>
                      <p>
                        <strong>2. Inga löpande avgifter:</strong> Vi får inte någon del av dina 
                        eventuella förluster eller vinster.
                      </p>
                      <p>
                        <strong>3. Objektiva kriterier:</strong> Våra betyg baseras på faktorer som 
                        säkerhet, spelutbud, kundtjänst och användarupplevelse.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Vårt oberoende</h4>
                        <p className="text-sm text-blue-700">
                          Vi recenserar endast casinon med svensk spellicens och följer 
                          strikta riktlinjer för objektivitet. Våra testmetoder är transparenta 
                          och samma kriterier gäller för alla casinon oavsett affiliateersättning.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Viktigt att komma ihåg</h4>
                        <p className="text-sm text-yellow-700">
                          Spel innebär risker. Använd alltid endast pengar du har råd att förlora 
                          och spela ansvarsfullt. Vi rekommenderar starkt att sätta gränser 
                          och använda verktyg som Spelpaus vid behov.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}
        </div>

        {/* Legal Links */}
        <div className="pt-3 border-t border-orange-200">
          <div className="flex flex-wrap gap-4 text-sm">
            <Button variant="link" size="sm" className="p-0 h-auto text-orange-700 hover:text-orange-800" asChild>
              <a href="/integritetspolicy">
                Läs vår integritetspolicy <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </Button>
            <Button variant="link" size="sm" className="p-0 h-auto text-orange-700 hover:text-orange-800" asChild>
              <a href="/om">
                Om oss & våra metoder <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}