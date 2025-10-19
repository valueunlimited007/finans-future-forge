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
  BookOpen,
  TrendingUp,
  Euro,
  Lightbulb,
  Calculator,
  PiggyBank,
  Car,
  MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getSiteConfig } from "@/lib/siteConfig";

const NavigationDE = () => {
  const siteConfig = getSiteConfig();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) < 10) return;
      
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActivePath = (path: string) => location.pathname === path;

  const loanProducts = [
    {
      title: "Ratenkredite",
      href: "/ratenkredit",
      description: "Vergleichen Sie über 20 Banken - finden Sie die besten Zinsen",
      icon: Banknote,
      popular: true
    },
    {
      title: "Kreditkarten",
      href: "/kreditkarten",
      description: "Kostenlose Karten mit Cashback und Versicherung",
      icon: CreditCard
    },
    {
      title: "Unternehmenskredite",
      href: "/unternehmenskredit",
      description: "Schnelle Finanzierung für Ihr Unternehmen",
      icon: Building2
    }
  ];

  const ratgeber = [
    {
      title: "Gehaltsoptimierung",
      href: "/ratgeber/gehaltsoptimierung",
      description: "Mehr Netto durch Steuervorteile & Benefits",
      icon: TrendingUp,
      popular: true
    },
    {
      title: "Karriere Guide",
      href: "/ratgeber/karriere",
      description: "100.000 € Jahresgehalt erreichen",
      icon: TrendingUp
    },
    {
      title: "Deutsche Einkommen",
      href: "/ratgeber/deutsche-einkommen",
      description: "Gehaltsvergleich Deutschland 2025",
      icon: Euro
    },
    {
      title: "Sparkonto Vergleich",
      href: "/ratgeber/sparkonto",
      description: "Beste Tagesgeld-Zinsen bis 3,25%",
      icon: Euro
    },
    {
      title: "Monatliches Sparen",
      href: "/ratgeber/monatliches-sparen",
      description: "Wie viel sollten Sie sparen?",
      icon: PiggyBank
    },
    {
      title: "Banken-Vergleich",
      href: "/ratgeber/banken-vergleich",
      description: "Beste Bank für Girokonto & Karte",
      icon: Building2
    },
    {
      title: "Auto-Kosten Analyse",
      href: "/ratgeber/auto-kosten",
      description: "Wahre Kosten & clevere Alternativen",
      icon: Car
    },
    {
      title: "Immobilienmarkt",
      href: "/ratgeber/immobilienmarkt",
      description: "Preisentwicklung & Prognosen",
      icon: MapPin
    },
    {
      title: "Finanz Life Hacks",
      href: "/ratgeber/finanz-tipps",
      description: "Bewährte Spartipps für Deutschland",
      icon: Lightbulb
    }
  ];

  const resources = [
    {
      title: "Glossar",
      href: "/glossar",
      description: "Alle Finanzbegriffe erklärt",
      icon: BookOpen
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
          {item.popular && (
            <Badge className="text-xs font-medium bg-green-500 hover:bg-green-600 shrink-0">
              Beliebt
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

  const NavMenuItem = ({ item }: { item: any }) => (
    <Link
      to={item.href}
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors",
        isActivePath(item.href) && "bg-muted text-primary font-medium"
      )}
    >
      <item.icon className="h-5 w-5 flex-shrink-0" />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium">{item.title}</span>
          {item.popular && <Badge variant="default" className="text-xs bg-green-500">Beliebt</Badge>}
        </div>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </div>
    </Link>
  );

  return (
    <header 
      className={cn(
        "fixed top-0 z-[9999] w-full bg-background backdrop-blur-sm border-b transition-transform duration-300",
        scrollDirection === 'down' ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="container flex h-[80px] sm:h-[96px] md:h-[112px] lg:h-[128px] items-center justify-between px-4 min-w-full">
        <Link to="/" className="flex flex-col items-start shrink-0 gap-1">
          <img 
            src={siteConfig.logo} 
            alt={siteConfig.name}
            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
          />
          <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Kredite smart vergleichen</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
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
                  Startseite
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Banknote className="mr-2 h-4 w-4" />
                Kredite & Karten
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[450px]">
                  <div className="grid gap-1">
                    <h3 className="font-medium">Vergleichen Sie alle Kreditarten</h3>
                    <p className="text-sm text-muted-foreground">
                      Finden Sie die besten Konditionen für Ihre Situation
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

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <BookOpen className="mr-2 h-4 w-4" />
                Ratgeber
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[500px] md:w-[550px] bg-background z-[100]">
                  <div className="grid gap-1">
                    <h3 className="font-medium">Finanzwissen & Spartipps</h3>
                    <p className="text-sm text-muted-foreground">
                      Praktische Guides für bessere Finanzen
                    </p>
                  </div>
                  <div className="grid gap-2 md:grid-cols-2">
                    {ratgeber.map((item) => (
                      <NavMenuItem key={item.href} item={item} />
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <BookOpen className="mr-2 h-4 w-4" />
                Ressourcen
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px] bg-background z-[100]">
                  <div className="grid gap-1">
                    <h3 className="font-medium">Mehr erfahren</h3>
                    <p className="text-sm text-muted-foreground">
                      Vertiefen Sie Ihr Finanzwissen
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

        {/* Mobile Navigation */}
        <div className="lg:hidden flex-shrink-0 min-w-max relative z-[10000]">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost"
                size="lg"
                className="h-12 gap-2 hover:bg-accent/50 transition-colors lg:hidden"
                aria-label="Navigationsmenü öffnen"
              >
                <span className="text-sm font-medium">Menü</span>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[320px] sm:w-[400px] max-h-screen overflow-y-auto border-0 bg-background p-0" 
              data-sheet-content
            >
              <SheetTitle className="sr-only">Navigationsmenü</SheetTitle>
              <SheetDescription className="sr-only">
                Hauptnavigation für Finanzen-Guide.de mit Links zu Krediten und Kreditkarten
              </SheetDescription>
              
              <div className="sticky top-0 bg-background border-b border-border p-6 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Menu className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg text-foreground">Menü</h2>
                    <p className="text-sm text-muted-foreground">Finanzen-Guide.de</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col px-6 pb-20 space-y-6">
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
                    <span className="font-medium text-base">Startseite</span>
                    <p className="text-sm text-muted-foreground">Übersicht und Aktuelles</p>
                  </div>
                </Link>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 px-1 py-1">
                    <div className="h-1 w-6 rounded-full bg-blue-500/60"></div>
                    <h3 className="font-medium text-sm text-foreground/80 uppercase tracking-wide">
                      Kredite & Karten
                    </h3>
                    <div className="flex-1 h-px bg-border/50"></div>
                  </div>
                  <div className="space-y-2">
                    {loanProducts.map((item) => (
                      <MobileNavItem key={item.href} item={item} onClick={() => setIsOpen(false)} />
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 px-1 py-1">
                    <div className="h-1 w-6 rounded-full bg-green-500/60"></div>
                    <h3 className="font-medium text-sm text-foreground/80 uppercase tracking-wide">
                      Ratgeber
                    </h3>
                    <div className="flex-1 h-px bg-border/50"></div>
                  </div>
                  <div className="space-y-2">
                    {ratgeber.map((item) => (
                      <MobileNavItem key={item.href} item={item} onClick={() => setIsOpen(false)} />
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 px-1 py-1">
                    <div className="h-1 w-6 rounded-full bg-purple-500/60"></div>
                    <h3 className="font-medium text-sm text-foreground/80 uppercase tracking-wide">
                      Ressourcen
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

export default NavigationDE;
