import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { 
  Menu, 
  X, 
  Home, 
  CreditCard, 
  Shield, 
  Zap, 
  FileText, 
  ChevronDown,
  ExternalLink,
  Phone
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  external?: boolean;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Hem',
    href: '/',
    icon: Home,
    description: 'Startsida med översikt'
  },
  {
    label: 'Casino',
    href: '/se/casinon',
    icon: CreditCard,
    description: 'Jämför svenska casinon',
    children: [
      {
        label: 'Alla casinon',
        href: '/se/casinon',
        icon: CreditCard,
        description: 'Komplett lista över licensierade casinon'
      },
      {
        label: 'BankID-casinon',
        href: '/se/casinon-med-bankid',
        icon: Shield,
        description: 'Casinon med BankID-registrering'
      },
      {
        label: 'Pay-n-Play',
        href: '/se/pay-n-play',
        icon: Zap,
        description: 'Spela direkt utan registrering'
      },
      {
        label: 'Live Casino',
        href: '/se/live-casino',
        icon: ExternalLink,
        description: 'Spela med riktiga dealers'
      }
    ]
  },
  {
    label: 'Ansvarfullt spelande',
    href: '/se/spelpaus-guide',
    icon: Shield,
    description: 'Information om säkert spelande'
  },
  {
    label: 'Om oss',
    href: '/se/om',
    icon: FileText,
    description: 'Om Finansguiden Casino'
  }
];

export function AccessibleNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navigationRef = useRef<HTMLElement>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case 'Escape':
          setIsOpen(false);
          menuButtonRef.current?.focus();
          break;
        case 'ArrowDown':
          event.preventDefault();
          setFocusedIndex(prev => 
            prev < navigationItems.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          event.preventDefault();
          setFocusedIndex(prev => 
            prev > 0 ? prev - 1 : navigationItems.length - 1
          );
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          if (focusedIndex >= 0) {
            const item = navigationItems[focusedIndex];
            if (item.children) {
              toggleExpanded(item.label);
            }
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, focusedIndex]);

  // Skip to main content functionality
  const skipToMain = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleExpanded = (itemLabel: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemLabel)) {
        newSet.delete(itemLabel);
      } else {
        newSet.add(itemLabel);
      }
      return newSet;
    });
  };

  const isCurrentPage = (href: string) => {
    return location.pathname === href;
  };

  const renderNavigationItem = (item: NavigationItem, level = 0) => {
    const isExpanded = expandedItems.has(item.label);
    const isCurrent = isCurrentPage(item.href);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.href} className={cn('w-full', level > 0 && 'ml-4')}>
        {hasChildren ? (
          <Button
            variant="ghost"
            onClick={() => toggleExpanded(item.label)}
            className={cn(
              'w-full justify-start h-auto p-4 text-left',
              'hover:bg-muted transition-colors',
              'focus:bg-muted focus:ring-2 focus:ring-primary focus:ring-offset-2'
            )}
            aria-expanded={isExpanded}
            aria-controls={`submenu-${item.label.replace(/\s+/g, '-').toLowerCase()}`}
          >
            <div className="flex items-center gap-3 w-full">
              <item.icon 
                className="h-5 w-5 flex-shrink-0" 
                aria-hidden="true" 
              />
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{item.label}</div>
                {item.description && (
                  <div className="text-xs text-muted-foreground truncate">
                    {item.description}
                  </div>
                )}
              </div>
              <ChevronDown 
                className={cn(
                  'h-4 w-4 transition-transform',
                  isExpanded && 'rotate-180'
                )}
                aria-hidden="true"
              />
            </div>
          </Button>
        ) : (
          <Button
            variant="ghost"
            asChild
            className={cn(
              'w-full justify-start h-auto p-4 text-left',
              'hover:bg-muted transition-colors',
              'focus:bg-muted focus:ring-2 focus:ring-primary focus:ring-offset-2',
              isCurrent && 'bg-primary/10 text-primary border-l-4 border-primary'
            )}
            onClick={() => setIsOpen(false)}
            aria-current={isCurrent ? 'page' : undefined}
          >
            <Link to={item.href} className="flex items-center gap-3 w-full">
              <item.icon 
                className="h-5 w-5 flex-shrink-0" 
                aria-hidden="true" 
              />
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{item.label}</div>
                {item.description && (
                  <div className="text-xs text-muted-foreground truncate">
                    {item.description}
                  </div>
                )}
              </div>
              {item.external && (
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              )}
            </Link>
          </Button>
        )}

        {/* Submenu */}
        {hasChildren && (
          <div
            id={`submenu-${item.label.replace(/\s+/g, '-').toLowerCase()}`}
            className={cn(
              'overflow-hidden transition-all duration-200',
              isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            )}
            aria-hidden={!isExpanded}
          >
            <div className="pl-4 border-l border-muted">
              {item.children?.map(child => renderNavigationItem(child, level + 1))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Skip to main content link */}
      <Button
        variant="outline"
        onClick={skipToMain}
        className={cn(
          'absolute top-2 left-2 z-50',
          'transform -translate-y-16 focus:translate-y-0',
          'transition-transform duration-200',
          'sr-only focus:not-sr-only'
        )}
      >
        Hoppa till huvudinnehåll
      </Button>

      {/* Mobile hamburger menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            ref={menuButtonRef}
            variant="outline"
            size="sm"
            className="md:hidden"
            aria-label="Öppna navigationsmenyn"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent 
          side="left" 
          className="w-full sm:w-80 p-0"
          aria-labelledby="navigation-title"
        >
          <SheetHeader className="p-6 border-b">
            <SheetTitle id="navigation-title" className="text-left">
              Navigation
            </SheetTitle>
          </SheetHeader>

          <nav 
            ref={navigationRef}
            id="mobile-navigation"
            className="flex flex-col h-full"
            role="navigation"
            aria-label="Huvudnavigation"
          >
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-2">
                {navigationItems.map(item => renderNavigationItem(item))}
              </div>
            </div>

            {/* Footer actions */}
            <div className="p-6 border-t bg-muted/30 space-y-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full justify-start"
                asChild
              >
                <a 
                  href="tel:+46123456789"
                  className="flex items-center gap-3"
                >
                  <Phone className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">Kundtjänst</div>
                    <div className="text-xs text-muted-foreground">
                      Ring oss för hjälp
                    </div>
                  </div>
                </a>
              </Button>

              <div className="text-xs text-muted-foreground text-center">
                Finansguiden Casino - Ansvarfullt spelande
              </div>
            </div>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop navigation - enhanced for accessibility */}
      <nav 
        className="hidden md:flex items-center space-x-1" 
        role="navigation"
        aria-label="Huvudnavigation"
      >
        {navigationItems.map(item => {
          if (item.children) {
            // Dropdown menu for desktop
            return (
              <div key={item.label} className="relative group">
                <Button
                  variant="ghost"
                  className={cn(
                    'flex items-center gap-1',
                    'focus:bg-muted focus:ring-2 focus:ring-primary focus:ring-offset-2'
                  )}
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                  <ChevronDown className="h-3 w-3" aria-hidden="true" />
                </Button>

                {/* Desktop dropdown */}
                <div className={cn(
                  'absolute top-full left-0 mt-1 w-64 bg-background border rounded-md shadow-lg',
                  'opacity-0 invisible group-hover:opacity-100 group-hover:visible',
                  'transition-all duration-200 z-50',
                  'focus-within:opacity-100 focus-within:visible'
                )}>
                  <div className="p-2">
                    {item.children.map(child => (
                      <Button
                        key={child.href}
                        variant="ghost"
                        asChild
                        className={cn(
                          'w-full justify-start h-auto p-3 text-left',
                          'hover:bg-muted focus:bg-muted',
                          isCurrentPage(child.href) && 'bg-primary/10 text-primary'
                        )}
                        aria-current={isCurrentPage(child.href) ? 'page' : undefined}
                      >
                        <Link to={child.href} className="flex items-center gap-3">
                          <child.icon className="h-4 w-4" aria-hidden="true" />
                          <div>
                            <div className="font-medium">{child.label}</div>
                            {child.description && (
                              <div className="text-xs text-muted-foreground">
                                {child.description}
                              </div>
                            )}
                          </div>
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className={cn(
                'flex items-center gap-1',
                'focus:bg-muted focus:ring-2 focus:ring-primary focus:ring-offset-2',
                isCurrentPage(item.href) && 'bg-primary/10 text-primary'
              )}
              aria-current={isCurrentPage(item.href) ? 'page' : undefined}
            >
              <Link to={item.href}>
                <item.icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            </Button>
          );
        })}
      </nav>
    </>
  );
}