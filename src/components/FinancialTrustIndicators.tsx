import React from 'react';
import { Card } from '@/components/ui/card';
import { Shield, Eye, FileCheck, Award, CheckCircle, Lock, Users, Clock } from 'lucide-react';

export default function FinancialTrustIndicators() {
  const indicators = [
    {
      icon: Shield,
      title: 'Oberoende jämförelser',
      description: 'Vi granskar alla tjänster enligt objektiva kriterier',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Eye,
      title: 'Transparent affiliatemodell',
      description: 'Vi får provision men det påverkar inte våra recensioner',
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
      title: 'Finansexpertis',
      description: 'Över 5 års erfarenhet av den svenska finansmarknaden',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-bold text-green-800">Trygg & oberoende jämförelse</h2>
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
                  <div className="p-2 rounded-full bg-white/60">
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
            Vårt kvalitetslöfte
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
              <span>Regelbunden uppdatering</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>GDPR-kompatibel datahantering</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Verifierade partners</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 pt-4 border-t border-green-200 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4 text-green-600" />
            <span>1000+ nöjda användare</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4 text-blue-600" />
            <span>Uppdateras dagligen</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
