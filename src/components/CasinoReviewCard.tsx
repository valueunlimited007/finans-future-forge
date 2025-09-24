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
}

export default function CasinoReviewCard({ casino, featured = false }: CasinoReviewCardProps) {
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
    <Card className={`group hover:shadow-lg transition-shadow ${featured ? 'border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
            <LazyImage
              src={`/adtraction-logos/${casino.name.toLowerCase()}-logo.png`}
              alt={`${casino.name} logo`}
              className="max-w-full max-h-full object-contain"
              fallbackSrc="/placeholder.svg"
            />
          </div>
          <div className="flex items-center gap-1">
            {renderStars(casino.rating)}
            <span className="text-sm text-muted-foreground ml-1">
              {casino.rating}
            </span>
          </div>
        </div>
        
        <CardTitle className="text-lg">
          <Link 
            to={`/se/recension/${reviewSlug}`}
            className="hover:text-primary transition-colors"
          >
            {casino.name}
          </Link>
        </CardTitle>
        
        <div className="flex flex-wrap gap-1">
          {casino.features.bankid && (
            <Badge variant="secondary" className="text-xs bg-blue-500/10 text-blue-600">
              BankID
            </Badge>
          )}
          {casino.features.swish && (
            <Badge variant="secondary" className="text-xs bg-purple-500/10 text-purple-600">
              Swish
            </Badge>
          )}
          {casino.features.payNPlay && (
            <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-600">
              Pay-n-Play
            </Badge>
          )}
          <Badge variant="secondary" className="text-xs bg-green-500/10 text-green-600">
            Svensk licens
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {casino.description}
        </p>

        <div className="grid grid-cols-3 gap-3 mb-4 text-xs">
          <div className="text-center">
            <div className="font-semibold text-foreground">Grundat</div>
            <div className="text-muted-foreground">{casino.established}</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-foreground">Uttag</div>
            <div className="text-muted-foreground">6-24h</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-foreground">Support</div>
            <div className="text-muted-foreground">Svenska</div>
          </div>
        </div>

        <div className="flex gap-2">
          <Link 
            to={`/se/recension/${reviewSlug}`}
            className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm border border-border rounded-md hover:bg-accent transition-colors"
          >
            Läs recension
          </Link>
          <AffiliateButton
            href={`https://${casino.name.toLowerCase()}.com`}
            label="Spela nu"
            brandId={casino.id}
            brandName={casino.name}
            termSlug="casino-card"
            className="flex-1 text-sm px-3 py-2"
          />
        </div>
      </CardContent>
    </Card>
  );
}