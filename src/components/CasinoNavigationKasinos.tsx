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
  Gamepad2,
  Users,
  Shield,
  BookOpen,
  ExternalLink,
  AlertTriangle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ResponsibleGamblingBanner } from './ResponsibleGamblingBanner';

const CasinoNavigationKasinos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const casinoPages = [
    {
      title: "Bästa Casinon",
      href: "/",
      description: "Topprankade licensierade casinon i Sverige",
      icon: Home,
      popular: true
    },
    {
      title: "BankID Casinon",
      href: "/se/casinon-med-bankid",
      description: "Snabb registrering med BankID",
      icon: Shield,
      popular: true
    },
    {
      title: "Pay n Play",
      href: "/se/pay-n-play", 
      description: "Spela direkt utan registrering",
      icon: Gamepad2,
      tag: "Populär"
    },
    {
      title: "Snabba Uttag",
      href: "/se/snabbast-uttag",
      description: "Casinon med snabbast utbetalning",
      icon: ExternalLink,
      tag: "Hett"
    },
    {
      title: "Live Casino",
      href: "/se/live-casino",
      description: "Äkta dealers och live-action",
      icon: Users
    }
  ];

  const casinoGuides = [
    {
      title: "Nybörjarguide",
      href: "/se/guider/nyborjare",
      description: "Lär dig grunderna om online casino",
      icon: BookOpen,
      tag: "Grundläggande"
    },
    {
      title: "Svensk Licens Guide",
      href: "/se/guider/svenska-licenser",
      description: "Vad betyder svensk spellicens?",
      icon: Shield,
      tag: "Viktig"
    },
    {
      title: "Spelansvar Guide",
      href: "/se/guider/ansvarfullt-spelande",
      description: "Spela säkert och ansvarsfullt",
      icon: AlertTriangle,
      tag: "RG"
    }
  ];

  const resources = [
    {
      title: "Om Kasinos.se",
      href: "/om",
      description: "Läs mer om vår metodik och expertgrupp",
      icon: Users
    },
    {
      title: "Kontakt",
      href: "/kontakt",
      description: "Hör av dig till oss",
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
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img 
              src="/kasinos-logo-new.png" 
              alt="Kasinos.se"
              className="h-8 w-auto"
            />
          </Link>

          {/* RG Quick Link - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <AlertTriangle className="h-4 w-4 text-orange-500" />
              <span className="font-medium">18+</span>
              <span>•</span>
              <a 
                href="https://www.spelpaus.se" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Spelpaus.se
              </a>
            </div>
          </div>

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
                    Bästa Casinon
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Casino Types */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Gamepad2 className="mr-2 h-4 w-4" />
                  Casino Typer
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px]">
                    <div className="grid gap-1">
                      <h3 className="font-medium">Populära Casino Kategorier</h3>
                      <p className="text-sm text-muted-foreground">
                        Hitta rätt casino för dig
                      </p>
                    </div>
                    <div className="grid gap-2">
                      {casinoPages.slice(1).map((item) => (
                        <NavMenuItem key={item.href} item={item} />
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Guides */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <BookOpen className="mr-2 h-4 w-4" />
                  Guider
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[450px]">
                    <div className="grid gap-1">
                      <h3 className="font-medium">Casino Guider</h3>
                      <p className="text-sm text-muted-foreground">
                        Lär dig spela säkert och smart
                      </p>
                    </div>
                    <div className="grid gap-2">
                      {casinoGuides.map((item) => (
                        <NavMenuItem key={item.href} item={item} />
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Users className="mr-2 h-4 w-4" />
                  Om Oss
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="grid gap-1">
                      <h3 className="font-medium">Lär känna oss</h3>
                      <p className="text-sm text-muted-foreground">
                        Vår metodik och expertteam
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
          <div className="lg:hidden flex-shrink-0">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost"
                  className="flex items-center gap-3 h-12 px-3 hover:bg-accent/50 transition-colors"
                  aria-label="Öppna navigeringsmeny"
                >
                  <span className="text-sm font-medium text-muted-foreground tracking-wider">MENY</span>
                  <div className="h-10 w-10 rounded-full border-2 border-border flex items-center justify-center bg-background">
                    <Menu className="h-5 w-5" />
                  </div>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px] overflow-y-auto border-0 bg-background p-0">
                <SheetTitle className="sr-only">Navigeringsmeny</SheetTitle>
                <SheetDescription className="sr-only">
                  Huvudnavigering för Kasinos.se med länkar till casinon, guider och spelansvar
                </SheetDescription>
                
                {/* Header in menu */}
                <div className="sticky top-0 bg-background border-b border-border p-6 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Gamepad2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-lg text-foreground">Meny</h2>
                      <p className="text-sm text-muted-foreground">Kasinos.se</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col px-6 pb-8 space-y-6">
                  {/* Casino Pages Section */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 px-1 py-1">
                      <div className="h-1 w-6 rounded-full bg-red-500/60"></div>
                      <h3 className="font-medium text-sm text-foreground/80 uppercase tracking-wide">
                        Casinon
                      </h3>
                      <div className="flex-1 h-px bg-border/50"></div>
                    </div>
                    <div className="space-y-2">
                      {casinoPages.map((item) => (
                        <MobileNavItem key={item.href} item={item} onClick={() => setIsOpen(false)} />
                      ))}
                    </div>
                  </div>

                  {/* Guides Section */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 px-1 py-1">
                      <div className="h-1 w-6 rounded-full bg-blue-500/60"></div>
                      <h3 className="font-medium text-sm text-foreground/80 uppercase tracking-wide">
                        Guider & Spelansvar
                      </h3>
                      <div className="flex-1 h-px bg-border/50"></div>
                    </div>
                    <div className="space-y-2">
                      {casinoGuides.map((item) => (
                        <MobileNavItem key={item.href} item={item} onClick={() => setIsOpen(false)} />
                      ))}
                    </div>
                  </div>

                  {/* Resources Section */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 px-1 py-1">
                      <div className="h-1 w-6 rounded-full bg-green-500/60"></div>
                      <h3 className="font-medium text-sm text-foreground/80 uppercase tracking-wide">
                        Om Oss
                      </h3>
                      <div className="flex-1 h-px bg-border/50"></div>
                    </div>
                    <div className="space-y-2">
                      {resources.map((item) => (
                        <MobileNavItem key={item.href} item={item} onClick={() => setIsOpen(false)} />
                      ))}
                    </div>
                  </div>

                  {/* RG Banner in Mobile Menu */}
                  <ResponsibleGamblingBanner variant="compact" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Sticky RG Banner - Only on mobile */}
      <div className="md:hidden sticky top-16 z-40 bg-orange-50 border-b border-orange-200 px-4 py-2">
        <div className="flex items-center justify-center gap-2 text-orange-800 text-sm">
          <AlertTriangle className="h-4 w-4" />
          <span><span className="font-semibold">18+</span> • Spela ansvarsfullt • </span>
          <a 
            href="https://www.spelpaus.se" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline font-medium hover:no-underline"
          >
            Spelpaus.se
          </a>
        </div>
      </div>
    </>
  );
};

export default CasinoNavigationKasinos;