import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu, Home, CreditCard, Banknote, Building2, TrendingUp, Users, BookOpen, Lightbulb, Calculator, ChevronDown, Euro, PiggyBank, Car, MapPin } from "lucide-react";
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
import { getSiteConfig } from "@/lib/siteConfig";

const NavigationDESimple = () => {
  const siteConfig = getSiteConfig();
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
      { title: "Startseite", href: "/", icon: Home },
    ],
    kredite: [
      { title: "Ratenkredite", href: "/ratenkredit", icon: Banknote },
      { title: "Beste Ratenkredite", href: "/ratenkredit/beste", icon: TrendingUp },
      { title: "Kreditzinsen", href: "/ratenkredit/zinsen", icon: Calculator },
      { title: "Kredit ohne Schufa", href: "/ratenkredit/ohne-schufa", icon: TrendingUp },
    ],
    produkte: [
      { title: "Kreditkarten", href: "/kreditkarten", icon: CreditCard },
      { title: "Unternehmenskredite", href: "/unternehmenskredit", icon: Building2 },
    ],
    ratgeber: [
      { title: "Gehaltsoptimierung", href: "/ratgeber/gehaltsoptimierung", icon: TrendingUp },
      { title: "Karriere Guide", href: "/ratgeber/karriere", icon: TrendingUp },
      { title: "Deutsche Einkommen", href: "/ratgeber/deutsche-einkommen", icon: Euro },
      { title: "Sparkonto", href: "/ratgeber/sparkonto", icon: Euro },
      { title: "Monatliches Sparen", href: "/ratgeber/monatliches-sparen", icon: PiggyBank },
      { title: "Banken-Vergleich", href: "/ratgeber/banken-vergleich", icon: Building2 },
      { title: "Auto-Kosten", href: "/ratgeber/auto-kosten", icon: Car },
      { title: "Immobilienmarkt", href: "/ratgeber/immobilienmarkt", icon: MapPin },
      { title: "Finanz Tipps", href: "/ratgeber/finanz-tipps", icon: Lightbulb },
    ],
    mehr: [
      { title: "Glossar", href: "/glossar", icon: BookOpen },
      { title: "Über uns", href: "/uber-uns", icon: Users },
    ],
  };

  const [krediteOpen, setKrediteOpen] = useState(true);
  const [produkteOpen, setProdukteOpen] = useState(false);
  const [ratgeberOpen, setRatgeberOpen] = useState(false);
  const [mehrOpen, setMehrOpen] = useState(false);

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
                src={siteConfig.logo}
                alt={siteConfig.name}
                className="h-40 md:h-36 lg:h-44 -my-6 md:-my-4 lg:-my-6 w-auto"
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
                  {/* Startseite */}
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
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}

                  {/* Kredite Dropdown */}
                  <NavigationMenuItem value="kredite">
                    <NavigationMenuTrigger 
                      className="font-medium"
                      onClick={() => handleMenuTriggerClick("kredite")}
                    >
                      <Banknote className="h-4 w-4 mr-2" />
                      Kredite
                      <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded ml-2">
                        Beliebt
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 bg-background">
                        {menuCategories.kredite.map((item) => (
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

                  {/* Produkte */}
                  <NavigationMenuItem value="produkte">
                    <NavigationMenuTrigger 
                      className="font-medium"
                      onClick={() => handleMenuTriggerClick("produkte")}
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Produkte
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4 bg-background">
                        {menuCategories.produkte.map((item) => (
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

                  {/* Ratgeber Dropdown */}
                  <NavigationMenuItem value="ratgeber">
                    <NavigationMenuTrigger 
                      className="font-medium"
                      onClick={() => handleMenuTriggerClick("ratgeber")}
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      Ratgeber
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-background">
                        {menuCategories.ratgeber.map((item) => (
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

                  {/* Mehr Dropdown */}
                  <NavigationMenuItem value="mehr">
                    <NavigationMenuTrigger 
                      className="font-medium"
                      onClick={() => handleMenuTriggerClick("mehr")}
                    >
                      <Building2 className="h-4 w-4 mr-2" />
                      Mehr
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4 bg-background">
                        {menuCategories.mehr.map((item) => (
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
              className="lg:hidden p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors flex items-center gap-2 border border-border"
              aria-label="Menü öffnen"
            >
              <span className="text-sm font-medium">Menü</span>
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
              <h2 className="text-xl font-bold">Menü</h2>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="Menü schließen"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Items - Categorized with Collapsibles */}
            <nav className="p-6 space-y-4">
              {/* Kredite */}
              <Collapsible open={krediteOpen} onOpenChange={setKrediteOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-accent transition-colors">
                  <div className="flex items-center gap-2">
                    <Banknote className="h-5 w-5" />
                    <span className="font-semibold text-base">Kredite</span>
                    <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded">
                      Beliebt
                    </span>
                  </div>
                  <ChevronDown className={cn("h-5 w-5 transition-transform", krediteOpen && "rotate-180")} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-1">
                  {menuCategories.kredite.map((item) => (
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

              {/* Produkte */}
              <Collapsible open={produkteOpen} onOpenChange={setProdukteOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-accent transition-colors">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    <span className="font-semibold text-base">Produkte</span>
                  </div>
                  <ChevronDown className={cn("h-5 w-5 transition-transform", produkteOpen && "rotate-180")} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-1">
                  {menuCategories.produkte.map((item) => (
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

              {/* Ratgeber */}
              <Collapsible open={ratgeberOpen} onOpenChange={setRatgeberOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-accent transition-colors">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    <span className="font-semibold text-base">Ratgeber</span>
                  </div>
                  <ChevronDown className={cn("h-5 w-5 transition-transform", ratgeberOpen && "rotate-180")} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-1">
                  {menuCategories.ratgeber.map((item) => (
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

              {/* Mehr */}
              <Collapsible open={mehrOpen} onOpenChange={setMehrOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-accent transition-colors">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span className="font-semibold text-base">Mehr</span>
                  </div>
                  <ChevronDown className={cn("h-5 w-5 transition-transform", mehrOpen && "rotate-180")} />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 space-y-1">
                  {menuCategories.mehr.map((item) => (
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

export default NavigationDESimple;
