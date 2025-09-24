import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  CheckCircle, 
  Award, 
  Users,
  Clock,
  Star,
  Globe,
  Eye,
  Lock,
  FileCheck
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface TrustIndicatorsProps {
  variant?: 'full' | 'compact' | 'badges' | 'sidebar';
  className?: string;
}

export default function TrustIndicators({ variant = 'full', className = '' }: TrustIndicatorsProps) {
  const indicators = [
    {
      icon: Shield,
      title: 'Endast svenska licenser',
      description: 'Alla casinon har gyltig licens från Spelinspektionen',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Eye,
      title: 'Objektiva recensioner',
      description: 'Oberoende testning enligt transparenta kriterier',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: FileCheck,
      title: 'GDPR-kompatibel',
      description: 'Fullständig efterlevnad av svenska dataskyddslagar',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Award,
      title: 'Branschexpertis',
      description: 'Över 5 års erfarenhet av den svenska spelmarknaden',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  if (variant === 'badges') {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {indicators.map((indicator, index) => {
          const IconComponent = indicator.icon;
          return (
            <Badge 
              key={index}
              variant="outline" 
              className={`${indicator.borderColor} ${indicator.bgColor} ${indicator.color} px-3 py-1`}
            >
              <IconComponent className="h-3 w-3 mr-1" />
              {indicator.title}
            </Badge>
          );
        })}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <Card className={`p-4 ${className}`}>
        <div className="flex items-center gap-2 mb-3">
          <Shield className="h-4 w-4 text-green-600" />
          <span className="font-semibold text-sm">Trygg jämförelse</span>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs">
          {indicators.slice(0, 4).map((indicator, index) => {
            const IconComponent = indicator.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <IconComponent className={`h-3 w-3 ${indicator.color}`} />
                <span className="text-muted-foreground">{indicator.title}</span>
              </div>
            );
          })}
        </div>
      </Card>
    );
  }

  if (variant === 'sidebar') {
    return (
      <Card className={`p-6 ${className}`}>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-600" />
            <h3 className="font-semibold">Säkerhet & förtroende</h3>
          </div>

          <div className="space-y-3">
            {indicators.map((indicator, index) => {
              const IconComponent = indicator.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className={`p-1 rounded-full ${indicator.bgColor}`}>
                    <IconComponent className={`h-3 w-3 ${indicator.color}`} />
                  </div>
                  <div>
                    <div className="font-medium text-sm">{indicator.title}</div>
                    <div className="text-xs text-muted-foreground">{indicator.description}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <Separator />

          <div className="space-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-3 w-3" />
              <span>1000+ användare litar på oss</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-3 w-3" />
              <span>Uppdaterad dagligen</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-3 w-3" />
              <span>4.8/5 i användarrecensioner</span>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  // Full variant
  return (
    <Card className={`p-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200 ${className}`}>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-bold text-green-800">Trygg & säker jämförelse</h2>
          </div>
          <p className="text-sm text-green-700">
            Vi följer högsta säkerhetsstandard och svenska lagar för att skydda våra användare
          </p>
        </div>

        {/* Trust Indicators Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {indicators.map((indicator, index) => {
            const IconComponent = indicator.icon;
            return (
              <div 
                key={index} 
                className={`p-4 rounded-lg border ${indicator.bgColor} ${indicator.borderColor}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full bg-white/60`}>
                    <IconComponent className={`h-5 w-5 ${indicator.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{indicator.title}</h3>
                    <p className="text-sm text-gray-600">{indicator.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Trust Elements */}
        <div className="bg-white/60 p-4 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
            <Lock className="h-4 w-4" />
            Vårt säkerhetslöfte
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>SSL-krypterad sajt</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Ingen försäljning av data</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Transparent affiliatemodell</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Regelbunden säkerhetsgranskning</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>GDPR-kompatibel datahantering</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Ansvarsfull spelmarknadsföring</span>
            </div>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="flex flex-wrap justify-center gap-3 pt-4 border-t border-green-200">
          <Badge className="bg-green-500/10 text-green-600 border-green-200">
            <Globe className="h-3 w-3 mr-1" />
            Svensk GDPR
          </Badge>
          <Badge className="bg-blue-500/10 text-blue-600 border-blue-200">
            <Shield className="h-3 w-3 mr-1" />
            Spelinspektionen
          </Badge>
          <Badge className="bg-purple-500/10 text-purple-600 border-purple-200">
            <Award className="h-3 w-3 mr-1" />
            Branschcertifierad
          </Badge>
          <Badge className="bg-orange-500/10 text-orange-600 border-orange-200">
            <FileCheck className="h-3 w-3 mr-1" />
            ISO 27001
          </Badge>
        </div>
      </div>
    </Card>
  );
}