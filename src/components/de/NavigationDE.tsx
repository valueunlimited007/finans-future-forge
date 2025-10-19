import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
  MapPin,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getSiteConfig } from "@/lib/siteConfig";

const NavigationDE = () => {
  const siteConfig = getSiteConfig();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const loanProducts = [
    { title: "Ratenkredite", href: "/ratenkredit", icon: Banknote, popular: true },
    { title: "Kreditkarten", href: "/kreditkarten", icon: CreditCard },
    { title: "Unternehmenskredite", href: "/unternehmenskredit", icon: Building2 }
  ];

  const ratgeber = [
    { title: "Gehaltsoptimierung", href: "/ratgeber/gehaltsoptimierung", icon: TrendingUp, popular: true },
    { title: "Karriere Guide", href: "/ratgeber/karriere", icon: TrendingUp },
    { title: "Deutsche Einkommen", href: "/ratgeber/deutsche-einkommen", icon: Euro },
    { title: "Sparkonto Vergleich", href: "/ratgeber/sparkonto", icon: Euro },
    { title: "Monatliches Sparen", href: "/ratgeber/monatliches-sparen", icon: PiggyBank },
    { title: "Banken-Vergleich", href: "/ratgeber/banken-vergleich", icon: Building2 },
    { title: "Auto-Kosten", href: "/ratgeber/auto-kosten", icon: Car },
    { title: "Immobilienmarkt", href: "/ratgeber/immobilienmarkt", icon: MapPin },
    { title: "Finanz Life Hacks", href: "/ratgeber/finanz-tipps", icon: Lightbulb }
  ];

  const allItems = [
    { title: "Startseite", href: "/", icon: Home },
    ...loanProducts,
    ...ratgeber,
    { title: "Glossar", href: "/glossar", icon: BookOpen }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={siteConfig.logo} 
            alt={siteConfig.name}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Startseite
          </Link>
          <Link to="/ratenkredit" className="text-sm font-medium hover:text-primary transition-colors">
            Kredite
          </Link>
          <Link to="/kreditkarten" className="text-sm font-medium hover:text-primary transition-colors">
            Kreditkarten
          </Link>
          <Link to="/ratgeber/gehaltsoptimierung" className="text-sm font-medium hover:text-primary transition-colors">
            Ratgeber
          </Link>
          <Link to="/glossar" className="text-sm font-medium hover:text-primary transition-colors">
            Glossar
          </Link>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-4 mt-8">
              {allItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors",
                    location.pathname === item.href && "bg-accent"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.title}</span>
                  {item.popular && (
                    <Badge className="ml-auto">Beliebt</Badge>
                  )}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default NavigationDE;
