import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Shield, Clock, CreditCard, ExternalLink } from 'lucide-react';
import { Brand } from '@/data/casino-schema';
import { Link } from 'react-router-dom';
import AffiliateButton from './AffiliateButton';
import LazyImage from './LazyImage';

interface CasinoReviewCardProps {
  casino: Brand;
  featured?: boolean;
  actionSlot?: React.ReactNode;
}

export default function CasinoReviewCard({ casino, featured = false, actionSlot }: CasinoReviewCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-3 w-3 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  const reviewSlug = casino.name.toLowerCase().replace(/[^\w]/g, '-');

  return (
    <Card className={`group hover:shadow-lg transition-shadow duration-200 max-w-sm mx-auto w-full ${featured ? 'border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5' : ''}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center p-2">
            <LazyImage
              src={`/adtraction-logos/${casino.name.toLowerCase()}-logo.png`}
              alt={`${casino.name} logo`}
              className="max-w-full max-h-full object-contain"
              fallbackSrc="/placeholder.svg"
            />
          </div>
          <div className="flex items-center gap-1">
            {renderStars(casino.rating)}
            <span className="text-sm font-medium text-foreground ml-1">
              {casino.rating}
            </span>
          </div>
        </div>
        
        <CardTitle className="text-xl font-bold mb-3">
          <Link 
            to={`/se/recension/${reviewSlug}`}
            className="hover:text-primary transition-colors duration-200"
          >
            {casino.name}
          </Link>
        </CardTitle>
        
        <div className="flex flex-wrap gap-2">
          {casino.features.bankid && (
            <Badge variant="secondary" className="text-xs font-medium bg-blue-50 text-blue-700 border-blue-200">
              BankID
            </Badge>
          )}
          {casino.features.swish && (
            <Badge variant="secondary" className="text-xs font-medium bg-purple-50 text-purple-700 border-purple-200">
              Swish
            </Badge>
          )}
          {casino.features.payNPlay && (
            <Badge variant="secondary" className="text-xs font-medium bg-green-50 text-green-700 border-green-200">
              Pay-n-Play
            </Badge>
          )}
          <Badge variant="secondary" className="text-xs font-medium bg-green-50 text-green-700 border-green-200">
            Svensk licens
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0 space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {casino.description}
        </p>

        <div className="grid grid-cols-3 gap-4 py-3 bg-muted/30 rounded-lg">
          <div className="text-center">
            <div className="font-semibold text-foreground text-sm">Grundat</div>
            <div className="text-muted-foreground text-xs mt-1">{casino.established}</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-foreground text-sm">Uttag</div>
            <div className="text-muted-foreground text-xs mt-1">6-24h</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-foreground text-sm">Support</div>
            <div className="text-muted-foreground text-xs mt-1">Svenska</div>
          </div>
        </div>

        <div className="pt-2">
          {actionSlot ? (
            actionSlot
          ) : (
            <Link 
              to={`/se/recension/${reviewSlug}`}
              className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors duration-200"
            >
              Läs recension
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}