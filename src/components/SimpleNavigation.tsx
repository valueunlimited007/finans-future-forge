import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu, Home, CreditCard, Banknote, Building2, TrendingUp, Users, BookOpen, Lightbulb, Calculator } from "lucide-react";
import { cn } from "@/lib/utils";

const SimpleNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { title: "Hem", href: "/", icon: Home },
    { title: "Privatlån", href: "/privatlan", icon: Banknote, popular: true },
    { title: "Lån utan UC", href: "/lan-utan-uc", icon: TrendingUp, popular: true },
    { title: "Företagslån", href: "/foretagslan", icon: Building2 },
    { title: "Kreditkort", href: "/kreditkort", icon: CreditCard },
    { title: "Bostadsmarknad", href: "/bostadsmarknad-analys", icon: Home },
    { title: "Karriär Guide", href: "/karriar-guide", icon: TrendingUp },
    { title: "Ekonomiska Life Hacks", href: "/ekonomiska-lifehacks", icon: Lightbulb },
    { title: "Månadssparande", href: "/manadssparande-guide", icon: Calculator },
    { title: "Ordlista", href: "/ordlista", icon: BookOpen },
    { title: "Om oss", href: "/om", icon: Users },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24 md:h-32 lg:h-36">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/finansguiden-logo-new.png" 
                alt="Finansguiden"
                className="h-20 md:h-28 lg:h-32 xl:h-40 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-6">
              {menuItems.slice(0, 6).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium",
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                  {item.popular && (
                    <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded">
                      Populär
                    </span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-3 rounded-lg hover:bg-accent transition-colors"
              aria-label="Öppna meny"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
            onClick={closeMobileMenu}
          />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-background z-[70] lg:hidden overflow-y-auto shadow-2xl">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold">Meny</h2>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="Stäng meny"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="p-6 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl transition-all",
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "hover:bg-accent"
                  )}
                >
                  <div className={cn(
                    "h-10 w-10 rounded-full flex items-center justify-center",
                    isActive(item.href) ? "bg-primary-foreground/20" : "bg-accent"
                  )}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="flex-1 text-base">{item.title}</span>
                  {item.popular && (
                    <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">
                      Populär
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-24 md:h-32 lg:h-36" />
    </>
  );
};

export default SimpleNavigation;
