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

  // DEBUG: Log state changes
  useEffect(() => {
    console.log('=== NavigationDE Sheet State ===', { isOpen });
  }, [isOpen]);

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

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
      data-minimal-test="v1.0"
      className="fixed top-0 z-50 w-full bg-background border-b"
    >
      <div className="container flex h-[80px] sm:h-[96px] md:h-[112px] lg:h-[128px] items-center justify-between px-4 min-w-full">
        <Link to="/" className="flex items-center shrink-0 gap-3">
          <img 
            src={siteConfig.logo} 
            alt={siteConfig.name}
            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto"
          />
          <span className="hidden sm:block text-xs md:text-sm text-muted-foreground">
            Kredite smart vergleichen
          </span>
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

        {/* Mobile Navigation - MINIMAL TEST */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={(open) => {
            console.log('=== Sheet onOpenChange ===', { open });
            setIsOpen(open);
          }}>
            <SheetTrigger asChild>
              <Button 
                variant="outline"
                className="lg:hidden"
                onClick={() => console.log('=== Trigger clicked ===')}
              >
                <Menu className="h-5 w-5 mr-2" />
                Menü
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>Menü</SheetDescription>
              
              <div className="mt-8 space-y-4">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block p-4 hover:bg-accent rounded-lg"
                >
                  Startseite
                </Link>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm">Kredite & Karten</h3>
                  {loanProducts.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block p-3 hover:bg-accent rounded-lg"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-sm">Ratgeber</h3>
                  {ratgeber.slice(0, 3).map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block p-3 hover:bg-accent rounded-lg"
                    >
                      {item.title}
                    </Link>
                  ))}
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
