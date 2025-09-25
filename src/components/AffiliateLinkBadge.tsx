import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface AffiliateLinkBadgeProps {
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'sm' | 'default';
  className?: string;
}

export const AffiliateLinkBadge: React.FC<AffiliateLinkBadgeProps> = ({
  variant = 'outline',
  size = 'sm',
  className = ''
}) => {
  return (
    <Badge 
      variant={variant} 
      className={`text-xs font-medium bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100 ${className}`}
    >
      <ExternalLink className="h-3 w-3 mr-1" />
      Annonslänk
    </Badge>
  );
};

export default AffiliateLinkBadge;