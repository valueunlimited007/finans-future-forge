import React from 'react';
import { AlertTriangle, Phone, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface ResponsibleGamblingProps {
  variant?: 'widget' | 'sidebar' | 'footer' | 'notice';
  className?: string;
}

export function ResponsibleGambling({ variant = 'widget', className }: ResponsibleGamblingProps) {
  if (variant === 'widget') {
    return (
      <Card className={cn('p-4 bg-rg-primary/5 border-rg-primary/20 mx-auto max-w-md', className)}>
        <div className="flex flex-col items-center text-center gap-3">
          <Shield className="h-5 w-5 text-rg-primary flex-shrink-0" />
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-sm mb-2">Spela ansvarsfullt</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Spel ska vara roligt och aldrig påverka din ekonomi negativt. 
                Du måste vara 18 år för att spela.
              </p>
            </div>
            
            <div className="flex flex-col gap-2">
              <Button 
                asChild 
                size="sm" 
                className="bg-rg-primary hover:bg-rg-primary/90 text-white h-8 text-xs"
              >
                <a 
                  href="https://spelpaus.se" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Clock className="h-3 w-3 mr-1" />
                  Spelpaus.se
                </a>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="sm" 
                className="h-8 text-xs border-rg-secondary/30 text-rg-secondary hover:bg-rg-secondary/10"
              >
                <a 
                  href="https://www.stodlinjen.se" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Phone className="h-3 w-3 mr-1" />
                  Stödlinjen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className={cn('space-y-4', className)}>
        <div className="bg-rg-primary/5 p-4 rounded-lg border border-rg-primary/20">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-4 w-4 text-rg-primary" />
            <span className="font-semibold text-sm">Ansvarfullt spelande</span>
          </div>
          
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-rg-primary">•</span>
              <span>Sätt gränser för tid och pengar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rg-primary">•</span>
              <span>Spela aldrig för att tjäna pengar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rg-primary">•</span>
              <span>Ta pauser och spela aldrig när du är upprörd</span>
            </li>
          </ul>
          
          <Separator className="my-3" />
          
          <div className="space-y-2">
            <Button 
              asChild 
              size="sm" 
              className="w-full bg-rg-primary hover:bg-rg-primary/90 text-white h-8 text-xs"
            >
              <a href="https://spelpaus.se" target="_blank" rel="noopener noreferrer">
                Spelpaus - stäng av dig själv
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="sm" 
              className="w-full h-8 text-xs"
            >
              <a href="https://www.stodlinjen.se" target="_blank" rel="noopener noreferrer">
                Stödlinjen: 020-819 100
              </a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={cn('text-center py-4 px-6 bg-muted/30', className)}>
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <AlertTriangle className="h-3 w-3" />
            <span>18+</span>
          </div>
          <Separator orientation="vertical" className="h-3" />
          <span>Spela ansvarsfullt</span>
          <Separator orientation="vertical" className="h-3" />
          <a 
            href="https://spelpaus.se" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-rg-primary transition-colors"
          >
            Spelpaus.se
          </a>
          <Separator orientation="vertical" className="h-3" />
          <a 
            href="https://www.stodlinjen.se" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-rg-secondary transition-colors"
          >
            Stödlinjen
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'notice') {
    return (
      <div className={cn('bg-yellow-50 border border-yellow-200 p-4 rounded-lg', className)}>
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium text-yellow-800 mb-1">
              Viktig information om bonusar i Sverige
            </p>
            <p className="text-yellow-700">
              I Sverige får licenshavare endast ge bonus vid första speltillfället enligt Spellagen. 
              Läs alltid villkoren hos operatören för detaljerad information.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default ResponsibleGambling;