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

  const isActivePath = (path: string) => location.pathname === path;

  const loanProducts = [
    {
      title: "Ratenkredite",
      href: "/ratenkredit",
      description: "Vergleichen Sie über 20 Banken",
      icon: Banknote,
      popular: true
    },
    {
      title: "Kreditkarten",
      href: "/kreditkarten",
      description: "Kostenlose Karten mit Cashback",
      icon: CreditCard
    },
    {
      title: "Unternehmenskredite",
      href: "/unternehmenskredit",
      description: "Schnelle Finanzierung",
      icon: Building2
    }
  ];

  const ratgeber = [
    {
      title: "Gehaltsoptimierung",
      href: "/ratgeber/gehaltsoptimierung",
      description: "Mehr Netto durch Steuervorteile",
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
      title: "Sparkonto",
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
      description: "Beste Bank für Girokonto",
      icon: Building2
    },
    {
      title: "Auto-Kosten",
      href: "/ratgeber/auto-kosten",
      description: "Wahre Kosten & Alternativen",
      icon: Car
    },
    {
      title: "Immobilienmarkt",
      href: "/ratgeber/immobilienmarkt",
      description: "Preisentwicklung & Prognosen",
      icon: MapPin
    },
    {
      title: "Finanz Tipps",
      href: "/ratgeber/finanz-tipps",
      description: "Bewährte Spartipps",
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

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={siteConfig.logo} 
            alt={siteConfig.name}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation with Dropdowns */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    isActivePath("/") && "bg-accent"
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
                <div className="grid gap-3 p-6 w-[450px] bg-popover">
                  {loanProducts.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors",
                        isActivePath(item.href) && "bg-accent"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{item.title}</span>
                          {item.popular && <Badge className="text-xs">Beliebt</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <BookOpen className="mr-2 h-4 w-4" />
                Ratgeber
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-2 p-6 w-[550px] md:grid-cols-2 bg-popover">
                  {ratgeber.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors",
                        isActivePath(item.href) && "bg-accent"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">{item.title}</span>
                          {item.popular && <Badge className="text-xs">Beliebt</Badge>}
                        </div>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/glossar"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    isActivePath("/glossar") && "bg-accent"
                  )}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Glossar
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menü öffnen</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[320px] sm:w-[400px] bg-background">
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>Finanzen-Guide.de Hauptmenü</SheetDescription>
            
            <div className="flex flex-col gap-6 mt-8">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors",
                  isActivePath("/") && "bg-accent"
                )}
              >
                <Home className="h-5 w-5" />
                <span className="font-medium">Startseite</span>
              </Link>

              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-2 px-3">Kredite & Karten</h3>
                <div className="flex flex-col gap-1">
                  {loanProducts.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors",
                        isActivePath(item.href) && "bg-accent"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{item.title}</span>
                          {item.popular && <Badge className="text-xs">Beliebt</Badge>}
                        </div>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-2 px-3">Ratgeber</h3>
                <div className="flex flex-col gap-1">
                  {ratgeber.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors",
                        isActivePath(item.href) && "bg-accent"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">{item.title}</span>
                          {item.popular && <Badge className="text-xs">Beliebt</Badge>}
                        </div>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/glossar"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors",
                  isActivePath("/glossar") && "bg-accent"
                )}
              >
                <BookOpen className="h-5 w-5" />
                <span className="font-medium">Glossar</span>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default NavigationDE;
