import React, { useState } from "react";
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
      description: "17 långivare som lånar ut utan UC-kontroll",
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
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/finansguiden-logo-v2.png" 
            alt="Finansguiden"
            className="h-8 w-auto"
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

        {/* Mobile Navigation */}
        <div className="flex lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Öppna meny</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-6">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors",
                    isActivePath("/") && "bg-muted text-primary font-medium"
                  )}
                >
                  <Home className="h-5 w-5" />
                  <span className="font-medium">Hem</span>
                </Link>

                <div>
                  <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                    Lån & Krediter
                  </h3>
                  <div className="space-y-1">
                    {loanProducts.map((item) => (
                      <NavMenuItem key={item.href} item={item} onClick={() => setIsOpen(false)} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                    Community
                  </h3>
                  <div className="space-y-1">
                    {communityContent.map((item) => (
                      <NavMenuItem key={item.href} item={item} onClick={() => setIsOpen(false)} />
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                    Resurser
                  </h3>
                  <div className="space-y-1">
                    {resources.map((item) => (
                      <NavMenuItem key={item.href} item={item} onClick={() => setIsOpen(false)} />
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