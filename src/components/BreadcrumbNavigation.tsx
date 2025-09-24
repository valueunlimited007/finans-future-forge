import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavigationProps {
  items?: BreadcrumbItem[];
  className?: string;
}

// Route to breadcrumb mapping
const routeToBreadcrumb: Record<string, BreadcrumbItem[]> = {
  '/': [{ label: 'Hem' }],
  
  // Casino routes
  '/se': [
    { label: 'Hem', href: '/' },
    { label: 'Svenska Casinon' }
  ],
  '/se/casinon-med-bankid': [
    { label: 'Hem', href: '/' },
    { label: 'Svenska Casinon', href: '/se' },
    { label: 'BankID Casinon' }
  ],
  '/se/pay-n-play': [
    { label: 'Hem', href: '/' },
    { label: 'Svenska Casinon', href: '/se' },
    { label: 'Pay-n-Play' }
  ],
  '/se/live-casino': [
    { label: 'Hem', href: '/' },
    { label: 'Svenska Casinon', href: '/se' },
    { label: 'Live Casino' }
  ],
  '/se/snabbast-uttag': [
    { label: 'Hem', href: '/' },
    { label: 'Svenska Casinon', href: '/se' },
    { label: 'Snabbast Uttag' }
  ],
  '/se/slots': [
    { label: 'Hem', href: '/' },
    { label: 'Svenska Casinon', href: '/se' },
    { label: 'Slots' }
  ],
  '/se/bordsspel': [
    { label: 'Hem', href: '/' },
    { label: 'Svenska Casinon', href: '/se' },
    { label: 'Bordsspel' }
  ],
  
  // Guide routes
  '/se/guider/spelpaus': [
    { label: 'Hem', href: '/' },
    { label: 'Svenska Casinon', href: '/se' },
    { label: 'Guider', href: '/se#guider' },
    { label: 'Spelpaus' }
  ],
  '/se/guider/nyborjarguide': [
    { label: 'Hem', href: '/' },
    { label: 'Svenska Casinon', href: '/se' },
    { label: 'Guider', href: '/se#guider' },
    { label: 'Nybörjarguide' }
  ],
  '/se/guider/ansvarfullt-spelande': [
    { label: 'Hem', href: '/' },
    { label: 'Svenska Casinon', href: '/se' },
    { label: 'Guider', href: '/se#guider' },
    { label: 'Ansvarsfullt Spelande' }
  ],
  '/se/guider/svenska-licenser': [
    { label: 'Hem', href: '/' },
    { label: 'Svenska Casinon', href: '/se' },
    { label: 'Guider', href: '/se#guider' },
    { label: 'Svenska Licenser' }
  ],
  
  // Other routes
  '/se/favoriter': [
    { label: 'Hem', href: '/' },
    { label: 'Svenska Casinon', href: '/se' },
    { label: 'Mina Favoriter' }
  ],
  '/om': [
    { label: 'Hem', href: '/' },
    { label: 'Om Oss' }
  ],
  '/cookies': [
    { label: 'Hem', href: '/' },
    { label: 'Cookies' }
  ],
  '/integritetspolicy': [
    { label: 'Hem', href: '/' },
    { label: 'Integritetspolicy' }
  ],
};

// Generate dynamic breadcrumbs for casino review pages
function generateDynamicBreadcrumbs(pathname: string): BreadcrumbItem[] | null {
  // Casino review pattern: /se/recension/[casino-name]
  const casinoReviewMatch = pathname.match(/^\/se\/recension\/(.+)$/);
  if (casinoReviewMatch) {
    const casinoSlug = casinoReviewMatch[1];
    const casinoName = casinoSlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return [
      { label: 'Hem', href: '/' },
      { label: 'Svenska Casinon', href: '/se' },
      { label: 'Recensioner', href: '/se#recensioner' },
      { label: `${casinoName} Recension` }
    ];
  }

  // Finance routes (original site)
  const financeRoutes: Record<string, string> = {
    '/lan-utan-uc': 'Lån Utan UC',
    '/kreditkort': 'Kreditkort',
    '/privatlan': 'Privatlån',
    '/foretagslan': 'Företagslån',
    '/ordlista': 'Ordlista',
    '/sajtkarta': 'Sajtkarta'
  };

  if (financeRoutes[pathname]) {
    return [
      { label: 'Hem', href: '/' },
      { label: financeRoutes[pathname] }
    ];
  }

  // Glossary term pattern: /ordlista/[term]
  const glossaryMatch = pathname.match(/^\/ordlista\/(.+)$/);
  if (glossaryMatch) {
    const termSlug = glossaryMatch[1];
    const termName = termSlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return [
      { label: 'Hem', href: '/' },
      { label: 'Ordlista', href: '/ordlista' },
      { label: termName }
    ];
  }

  return null;
}

export default function BreadcrumbNavigation({ items, className = '' }: BreadcrumbNavigationProps) {
  const location = useLocation();
  const pathname = location.pathname;

  // Use provided items or generate from current path
  let breadcrumbItems = items;
  
  if (!breadcrumbItems) {
    // Try exact match first
    breadcrumbItems = routeToBreadcrumb[pathname];
    
    // If no exact match, try dynamic generation
    if (!breadcrumbItems) {
      breadcrumbItems = generateDynamicBreadcrumbs(pathname);
    }
    
    // Fallback to home if still no match
    if (!breadcrumbItems) {
      breadcrumbItems = [{ label: 'Hem', href: '/' }, { label: '404' }];
    }
  }

  // Don't show breadcrumbs on home page or if only one item
  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <nav className={`py-4 border-b bg-muted/30 ${className}`} aria-label="Breadcrumb">
      <div className="container mx-auto px-4">
        <Breadcrumb>
          <BreadcrumbList className="flex items-center space-x-1 text-sm">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems!.length - 1;
              
              return (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className="font-medium text-foreground">
                        {item.label}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        {item.href ? (
                          <Link 
                            to={item.href}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {index === 0 && (
                              <Home className="h-4 w-4 mr-1 inline-block" />
                            )}
                            {item.label}
                          </Link>
                        ) : (
                          <span className="text-muted-foreground">
                            {item.label}
                          </span>
                        )}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  
                  {!isLast && (
                    <BreadcrumbSeparator>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </BreadcrumbSeparator>
                  )}
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </nav>
  );
}

// Utility function to generate breadcrumbs for specific pages
export function generateBreadcrumbs(pageType: string, pageName: string, additionalItems?: BreadcrumbItem[]): BreadcrumbItem[] {
  const baseCrumbs: BreadcrumbItem[] = [
    { label: 'Hem', href: '/' },
    { label: 'Svenska Casinon', href: '/se' }
  ];

  if (additionalItems) {
    baseCrumbs.push(...additionalItems);
  }

  baseCrumbs.push({ label: pageName });

  return baseCrumbs;
}
