import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu, Home, CreditCard, Banknote, Building2, TrendingUp, Users, BookOpen, Lightbulb, Calculator, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const SimpleNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuValue, setDesktopMenuValue] = useState<string>("");
  const [clickedMenu, setClickedMenu] = useState<string>("");
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleMenuTriggerClick = (menuValue: string) => {
    if (clickedMenu === menuValue) {
      setClickedMenu("");
      setDesktopMenuValue("");
    } else {
      setClickedMenu(menuValue);
      setDesktopMenuValue(menuValue);
    }
  };

  const handleMenuValueChange = (value: string) => {
    if (clickedMenu === "") {
      setDesktopMenuValue(value);
    }
  };

  const menuCategories = {
    main: [
      { title: "Hem", href: "/", icon: Home },
      { title: "Privatlån", href: "/privatlan", icon: Banknote, popular: true },
      { title: "Lån utan UC", href: "/lan-utan-uc", icon: TrendingUp, popular: true },
      { title: "Låneförmedlare", href: "/laneformedlare", icon: Users },
    ],
    financial: [
      { title: "Privatlån", href: "/privatlan", icon: Banknote, popular: true },
      { title: "Låneförmedlare", href: "/laneformedlare", icon: Users },
      { title: "Lån utan UC", href: "/lan-utan-uc", icon: TrendingUp, popular: true },
      { title: "Företagslån", href: "/foretagslan", icon: Building2 },
      { title: "Kreditkort", href: "/kreditkort", icon: CreditCard },
      { title: "Andra Tjänster", href: "/andra-tjanster", icon: Building2 },
    ],
    guides: [
      { title: "Bostadsmarknad 2025", href: "/bostadsmarknad-analys", icon: Home },
      { title: "Karriär Guide", href: "/karriar-guide", icon: TrendingUp },
      { title: "Ekonomiska Life Hacks", href: "/ekonomiska-lifehacks", icon: Lightbulb },
      { title: "Månadssparande", href: "/manadssparande-guide", icon: Calculator },
      { title: "Bilekonomi", href: "/bilekonomy-guide", icon: TrendingUp },
      { title: "Bankjämförelse", href: "/bankjamforelse-guide", icon: Building2 },
      { title: "Löneoptimering", href: "/loneoptimeringsguide", icon: TrendingUp },
      { title: "Sparkonto Guide", href: "/sparkonto-guide", icon: Banknote },
      { title: "Svenska Inkomster", href: "/svenska-inkomster-2025", icon: TrendingUp },
    ],
    more: [
      { title: "Företagslån", href: "/foretagslan", icon: Building2 },
      { title: "Kreditkort", href: "/kreditkort", icon: CreditCard },
      { title: "Andra Tjänster", href: "/andra-tjanster", icon: Building2 },
      { title: "Ordlista", href: "/ordlista", icon: BookOpen },
      { title: "Sajtkarta", href: "/sajtkarta", icon: BookOpen },
      { title: "Om oss", href: "/om", icon: Users },
    ],
  };

  const [financialOpen, setFinancialOpen] = useState(true);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24 md:h-28 py-2">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/finansguiden-logo-new.png" 
                alt="Finansguiden"
                className="h-20 md:h-36 lg:h-44 -my-2 md:-my-4 lg:-my-6 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-2">
              <NavigationMenu 
                value={clickedMenu || desktopMenuValue} 
                onValueChange={handleMenuValueChange}
                delayDuration={0}
              >
                <NavigationMenuList>
                  {/* Main Links */}
                  {menuCategories.main.map((item) => (
                    <NavigationMenuItem key={item.href}>
                      <Link to={item.href}>
                        <NavigationMenuLink
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
                            <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded ml-1">
                              Populär
                            </span>
                          )}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}

                  {/* Guider Dropdown */}
                  <NavigationMenuItem value="guider">
                    <NavigationMenuTrigger 
                      className="font-medium"
                      onClick={() => handleMenuTriggerClick("guider")}
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      Guider
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-background">
                        {menuCategories.guides.map((item) => (
                          <li key={item.href}>
                            <Link
                              to={item.href}
                              onClick={() => {
                                closeMobileMenu();
                                setClickedMenu("");
                                setDesktopMenuValue("");
                              }}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                                isActive(item.href)
                                  ? "bg-primary text-primary-foreground"
                                  : "hover:bg-accent hover:text-accent-foreground"
                              )}
                            >
                              <div className="flex items-center gap-2">
                                <item.icon className="h-4 w-4" />
                                <div className="text-sm font-medium leading-none">
                                  {item.title}
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Fler Dropdown */}
                  <NavigationMenuItem value="fler">
                    <NavigationMenuTrigger 
                      className="font-medium"
                      onClick={() => handleMenuTriggerClick("fler")}
                    >
                      <Building2 className="h-4 w-4 mr-2" />
                      Fler
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4 bg-background">
                        {menuCategories.more.map((item) => (
                          <li key={item.href}>
                            <Link
                              to={item.href}
                              onClick={() => {
                                closeMobileMenu();
                                setClickedMenu("");
                                setDesktopMenuValue("");
                              }}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                                isActive(item.href)
                                  ? "bg-primary text-primary-foreground"
                                  : "hover:bg-accent hover:text-accent-foreground"
                              )}
                            >
                              <div className="flex items-center gap-2">
                                <item.icon className="h-4 w-4" />
                                <div className="text-sm font-medium leading-none">
                                  {item.title}
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-3 rounded-lg hover:bg-accent transition-colors flex items-center gap-2"
              aria-label="Öppna meny"
            >
              <span className="text-sm font-medium">Meny</span>
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

            {/* Menu Items - Categorized with Accordions */}
            <nav className="p-6 space-y-4">
              {/* Finansiella Produkter */}
              <Collapsible open={financialOpen} onOpenChange={setFinancialOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-accent transition-colors">
                  <div className="flex items-center gap-2">
                    <Banknote className="h-5 w-5" />
                    <span className="font-semibold text-base">Finansiella Produkter</span>
                  </div>
                  <ChevronDown className={cn("h-5 w-5 transition-transform", financialOpen && "rotate-180")} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-1">
                  {menuCategories.financial.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "flex items-center gap-3 p-3 pl-6 rounded-lg transition-all",
                        isActive(item.href)
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "hover:bg-accent"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      <span className="flex-1 text-sm">{item.title}</span>
                      {item.popular && (
                        <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded">
                          Populär
                        </span>
                      )}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              {/* Guider & Analys */}
              <Collapsible open={guidesOpen} onOpenChange={setGuidesOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-accent transition-colors">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    <span className="font-semibold text-base">Guider & Analys</span>
                  </div>
                  <ChevronDown className={cn("h-5 w-5 transition-transform", guidesOpen && "rotate-180")} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-1">
                  {menuCategories.guides.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "flex items-center gap-3 p-3 pl-6 rounded-lg transition-all",
                        isActive(item.href)
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "hover:bg-accent"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      <span className="flex-1 text-sm">{item.title}</span>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              {/* Verktyg & Info */}
              <Collapsible open={moreOpen} onOpenChange={setMoreOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-accent transition-colors">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span className="font-semibold text-base">Verktyg & Info</span>
                  </div>
                  <ChevronDown className={cn("h-5 w-5 transition-transform", moreOpen && "rotate-180")} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-1">
                  {menuCategories.more.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "flex items-center gap-3 p-3 pl-6 rounded-lg transition-all",
                        isActive(item.href)
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "hover:bg-accent"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      <span className="flex-1 text-sm">{item.title}</span>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </nav>
          </div>
        </>
      )}

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-24 md:h-28" />
    </>
  );
};

export default SimpleNavigation;
