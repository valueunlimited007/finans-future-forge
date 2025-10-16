import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  Home, 
  CreditCard, 
  Banknote, 
  Building2, 
  TrendingUp,
  Users,
  Lightbulb,
  Calculator,
  BookOpen,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";

const ModernNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const loanProducts = [
    {
      title: "Privatlån",
      href: "/privatlan",
      description: "Jämför privatlån från alla banker - få bästa räntan",
      icon: Banknote,
      popular: true
    },
    {
      title: "Lån utan UC",
      href: "/lan-utan-uc", 
      description: "28 långivare som lånar ut utan UC-kontroll",
      icon: TrendingUp,
      popular: true
    },
    {
      title: "Företagslån",
      href: "/foretagslan",
      description: "Finansiering för företag - från startup till expansion",
      icon: Building2
    },
    {
      title: "Kreditkort",
      href: "/kreditkort",
      description: "Bästa kreditkorten 2025 - cashback och förmåner",
      icon: CreditCard
    }
  ];

  const communityContent = [
    {
      title: "Bostadsmarknad 2025",
      href: "/bostadsmarknad-analys",
      description: "Prisfall eller skrämskott? Expertanalys av marknaden",
      icon: Home,
      tag: "Hett ämne"
    },
    {
      title: "Karriär: 100k+ Guide", 
      href: "/karriar-guide",
      description: "Konkreta strategier för att nå 100 000 kr/månad",
      icon: TrendingUp,
      tag: "Populär"
    },
    {
      title: "Ekonomiska Life Hacks",
      href: "/ekonomiska-lifehacks",
      description: "Beprövade spartips från svenska sparare",
      icon: Lightbulb,
      tag: "Community"
    },
    {
      title: "Månadssparande Guide",
      href: "/manadssparande-guide", 
      description: "Bygg förmögenhet med automatiskt månadssparande",
      icon: Calculator,
      tag: "Aktuell"
    },
    {
      title: "Bilekonomi Guide",
      href: "/bilekonomy-guide",
      description: "Verkliga kostnader att äga bil + smarta alternativ",
      icon: TrendingUp,
      tag: "Ny"
    },
    {
      title: "Bankjämförelse Guide",
      href: "/bankjamforelse-guide", 
      description: "Bästa bankerna för helkunder - räntor och avgifter",
      icon: Building2,
      tag: "Uppdaterad"
    },
    {
      title: "Löneoptimering Guide",
      href: "/loneoptimeringsguide",
      description: "Maximera din inkomst genom förmåner och förhandling",  
      icon: TrendingUp,
      tag: "Hett"
    }
  ];

  const resources = [
    {
      title: "Ordlista",
      href: "/ordlista",
      description: "Förklaringar av finansiella termer",
      icon: BookOpen
    },
    {
      title: "Om oss",
      href: "/om",
      description: "Läs mer om Finansguiden",
      icon: Users
    }
  ];

  const MobileNavItem = ({ item, onClick }: { item: any; onClick?: () => void }) => (
    <Link
      to={item.href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-4 p-4 rounded-xl transition-all duration-200",
        "hover:bg-accent/50 active:scale-[0.98]",
        "min-h-[60px] touch-manipulation group",
        isActivePath(item.href) && "bg-primary/10 text-primary font-medium border border-primary/20"
      )}
    >
      <div className={cn(
        "h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors",
        isActivePath(item.href) ? "bg-primary/20" : "bg-accent/30 group-hover:bg-accent/50"
      )}>
        <item.icon className={cn(
          "h-5 w-5 transition-colors",
          isActivePath(item.href) ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
        )} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium text-base truncate">{item.title}</span>
          {item.tag && (
            <Badge variant="secondary" className="text-xs font-medium shrink-0">
              {item.tag}
            </Badge>
          )}
          {item.popular && (
            <Badge className="text-xs font-medium bg-green-500 hover:bg-green-600 shrink-0">
              Populär
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
      </div>
      {isActivePath(item.href) && (
        <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
      )}
    </Link>
  );

  const NavMenuItem = ({ item, onClick }: { item: any; onClick?: () => void }) => (
    <Link
      to={item.href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors",
        isActivePath(item.href) && "bg-muted text-primary font-medium"
      )}
    >
      <item.icon className="h-5 w-5 flex-shrink-0" />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium">{item.title}</span>
          {item.tag && <Badge variant="secondary" className="text-xs">{item.tag}</Badge>}
          {item.popular && <Badge variant="default" className="text-xs bg-green-500">Populär</Badge>}
        </div>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </div>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 sm:h-20 md:h-24 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 shrink-0">
          <img 
            src="/finansguiden-logo-new.png" 
            alt="Finansguiden"
            className="h-16 sm:h-[72px] md:h-20 xl:h-24 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    isActivePath("/") && "bg-accent text-accent-foreground"
                  )}
                >
                  <Home className="mr-2 h-4 w-4" />
                  Hem
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Loan Products */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Banknote className="mr-2 h-4 w-4" />
                Lån & Krediter
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[500px]">
                  <div className="grid gap-1">
                    <h3 className="font-medium">Jämför alla typer av lån</h3>
                    <p className="text-sm text-muted-foreground">
                      Hitta bästa lånet för din situation
                    </p>
                  </div>
                  <div className="grid gap-2">
                    {loanProducts.map((item) => (
                      <NavMenuItem key={item.href} item={item} />
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Community Content */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Users className="mr-2 h-4 w-4" />
                Community
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[550px]">
                  <div className="grid gap-1">
                    <h3 className="font-medium">Populärt från Community</h3>
                    <p className="text-sm text-muted-foreground">
                      De hetaste ämnena från svenska sparare
                    </p>
                  </div>
                  <div className="grid gap-2">
                    {communityContent.map((item) => (
                      <NavMenuItem key={item.href} item={item} />
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Resources */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <BookOpen className="mr-2 h-4 w-4" />
                Resurser
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <div className="grid gap-1">
                    <h3 className="font-medium">Lär dig mer</h3>
                    <p className="text-sm text-muted-foreground">
                      Djupare kunskap om privatekonomi
                    </p>
                  </div>
                  <div className="grid gap-2">
                    {resources.map((item) => (
                      <NavMenuItem key={item.href} item={item} />
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation - Single unified trigger */}
        <div className="lg:hidden flex-shrink-0">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost"
                className="flex items-center gap-3 h-12 px-3 hover:bg-accent/50 transition-colors mobile-menu-trigger"
                aria-label="Öppna navigeringsmeny"
              >
                <span className="text-sm font-medium text-muted-foreground tracking-wider">MENY</span>
                <div className="h-10 w-10 rounded-full border-2 border-border flex items-center justify-center bg-background">
                  <Menu className="h-5 w-5" />
                </div>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px] overflow-y-auto border-0 bg-background p-0">
              {/* Accessibility requirements */}
              <SheetTitle className="sr-only">Navigeringsmeny</SheetTitle>
              <SheetDescription className="sr-only">
                Huvudnavigering för Finansguiden med länkar till lån, kreditkort och guider
              </SheetDescription>
              
              {/* Header in menu */}
              <div className="sticky top-0 bg-background border-b border-border p-6 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Menu className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg text-foreground">Meny</h2>
                    <p className="text-sm text-muted-foreground">Finansguiden</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col px-6 pb-8 space-y-6">
                {/* Home Link */}
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl transition-all duration-200",
                    "hover:bg-primary/5 active:scale-[0.98]",
                    "min-h-[60px] touch-manipulation",
                    isActivePath("/") && "bg-primary/10 text-primary font-medium border border-primary/20"
                  )}
                >
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Home className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-base">Hem</span>
                    <p className="text-sm text-muted-foreground">Översikt och senaste nytt</p>
                  </div>
                  {isActivePath("/") && (
                    <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  )}
                </Link>

                {/* Loan Products Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 px-1 py-1">
                    <div className="h-1 w-6 rounded-full bg-blue-500/60"></div>
                    <h3 className="font-medium text-sm text-foreground/80 uppercase tracking-wide">
                      Lån & Krediter
                    </h3>
                    <div className="flex-1 h-px bg-border/50"></div>
                  </div>
                  <div className="space-y-2">
                    {loanProducts.map((item) => (
                      <MobileNavItem key={item.href} item={item} onClick={() => setIsOpen(false)} />
                    ))}
                  </div>
                </div>

                {/* Community Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 px-1 py-1">
                    <div className="h-1 w-6 rounded-full bg-green-500/60"></div>
                    <h3 className="font-medium text-sm text-foreground/80 uppercase tracking-wide">
                      Community & Guider
                    </h3>
                    <div className="flex-1 h-px bg-border/50"></div>
                  </div>
                  <div className="space-y-2">
                    {communityContent.map((item) => (
                      <MobileNavItem key={item.href} item={item} onClick={() => setIsOpen(false)} />
                    ))}
                  </div>
                </div>

                {/* Resources Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 px-1 py-1">
                    <div className="h-1 w-6 rounded-full bg-purple-500/60"></div>
                    <h3 className="font-medium text-sm text-foreground/80 uppercase tracking-wide">
                      Resurser
                    </h3>
                    <div className="flex-1 h-px bg-border/50"></div>
                  </div>
                  <div className="space-y-2">
                    {resources.map((item) => (
                      <MobileNavItem key={item.href} item={item} onClick={() => setIsOpen(false)} />
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default ModernNavigation;