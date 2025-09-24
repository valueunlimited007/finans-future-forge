import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  AlertTriangle, 
  ExternalLink,
  Clock,
  Phone,
  Eye,
  Globe
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function ComplianceFooter() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Responsible Gambling */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2 text-rg-primary">
              <Shield className="h-4 w-4" />
              Ansvarfullt spelande
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-red-600">
                <AlertTriangle className="h-3 w-3" />
                <Badge variant="destructive" className="text-xs">18+</Badge>
                <span>Endast för vuxna</span>
              </div>
              <p className="text-muted-foreground text-xs">
                Spel ska vara roligt och aldrig påverka din ekonomi negativt. 
                Sätt alltid gränser för tid och pengar.
              </p>
              <div className="space-y-2">
                <Button 
                  asChild 
                  size="sm" 
                  className="w-full bg-rg-primary hover:bg-rg-primary/90 text-white h-8 text-xs"
                >
                  <a href="https://spelpaus.se" target="_blank" rel="noopener noreferrer">
                    <Clock className="h-3 w-3 mr-1" />
                    Spelpaus.se
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm" 
                  className="w-full h-8 text-xs"
                >
                  <a href="tel:020819100">
                    <Phone className="h-3 w-3 mr-1" />
                    Stödlinjen: 020-819 100
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Transparens
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Badge className="bg-green-500/10 text-green-600 border-green-200 text-xs">
                  Affiliate
                </Badge>
                <span className="text-xs">Vi får provision från casinon</span>
              </div>
              <p className="text-xs">
                Detta påverkar inte våra objektiva recensioner som baseras på 
                testkriterier och faktisk användarupplevelse.
              </p>
              <div className="space-y-1">
                <Button variant="link" size="sm" className="p-0 h-auto text-xs" asChild>
                  <a href="/integritetspolicy">
                    Integritetspolicy <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
                <Button variant="link" size="sm" className="p-0 h-auto text-xs" asChild>
                  <a href="/om">
                    Om oss & testmetodik <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Licenses & Security */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Säkerhet & Licenser
            </h3>
            <div className="space-y-3 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-500/10 text-green-600 border-green-200 text-xs">
                    <Shield className="h-3 w-3 mr-1" />
                    SGA
                  </Badge>
                  <span className="text-xs text-muted-foreground">Spelinspektionen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-500/10 text-blue-600 border-blue-200 text-xs">
                    <Globe className="h-3 w-3 mr-1" />
                    GDPR
                  </Badge>
                  <span className="text-xs text-muted-foreground">EU-kompatibel</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Alla listade casinon har gyldig svensk spellicens och följer 
                EU:s dataskyddsförordning (GDPR).
              </p>
              <Button variant="link" size="sm" className="p-0 h-auto text-xs" asChild>
                <a href="https://www.spelinspektionen.se" target="_blank" rel="noopener noreferrer">
                  Spelinspektionen.se <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </Button>
            </div>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="font-semibold mb-4">Support & Hjälp</h3>
            <div className="space-y-3 text-sm">
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">
                  Har du frågor om våra recensioner eller behöver hjälp?
                </p>
                <Button variant="link" size="sm" className="p-0 h-auto text-xs" asChild>
                  <a href="/kontakt">
                    Kontakta oss <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>
              
              <Separator />
              
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">
                  Hjälp vid spelproblem:
                </p>
                <div className="space-y-1">
                  <Button variant="link" size="sm" className="p-0 h-auto text-xs text-rg-secondary" asChild>
                    <a href="https://www.stodlinjen.se" target="_blank" rel="noopener noreferrer">
                      Stödlinjen.se <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                  <Button variant="link" size="sm" className="p-0 h-auto text-xs text-rg-secondary" asChild>
                    <a href="/se/guider/spelpaus">
                      Spelpaus-guide <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-wrap justify-between items-center gap-4 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2025 Kasinos.se</span>
            <Separator orientation="vertical" className="h-3" />
            <div className="flex items-center gap-1">
              <AlertTriangle className="h-3 w-3" />
              <span>18+ år</span>
            </div>
            <Separator orientation="vertical" className="h-3" />
            <span>Spela ansvarsfullt</span>
            <Separator orientation="vertical" className="h-3" />
            <Badge className="bg-orange-500/10 text-orange-600 border-orange-200 text-xs">
              Reklam & Affiliate
            </Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="/cookies" 
              className="hover:text-foreground transition-colors"
            >
              Cookies
            </a>
            <a 
              href="/integritetspolicy" 
              className="hover:text-foreground transition-colors"
            >
              Integritet
            </a>
            <a 
              href="/villkor" 
              className="hover:text-foreground transition-colors"
            >
              Villkor
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}