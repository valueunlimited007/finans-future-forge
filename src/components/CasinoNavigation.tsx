import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Shield, CreditCard, Zap, TrendingUp, Clock, Menu, X } from 'lucide-react';
import { getSiteConfig } from '@/lib/siteConfig';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import ResponsibleGambling from './ResponsibleGambling';

export function CasinoNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const siteConfig = getSiteConfig();

  const navigationItems = [
    {
      title: 'Casinon',
      items: [
        { title: 'Alla casinon', href: '/se', icon: Shield, description: 'Jämför alla svenska licensierade casinon' },
        { title: 'BankID casinon', href: '/se/casinon-med-bankid', icon: CreditCard, description: 'Casinon med BankID för snabb registrering' },
        { title: 'Pay-n-Play', href: '/se/pay-n-play', icon: Zap, description: 'Spela direkt utan registrering' },
        { title: 'Snabbast uttag', href: '/se/snabbast-uttag', icon: Clock, description: 'Casinon med snabbast utbetalningar' },
      ]
    },
    {
      title: 'Speltyper',
      items: [
        { title: 'Live Casino', href: '/se/live-casino', icon: TrendingUp, description: 'Spela med riktiga dealers i realtid' },
        { title: 'Slots', href: '/se/slots', icon: TrendingUp, description: 'Bästa spelautomaterna från svenska casinon' },
        { title: 'Bordsspel', href: '/se/bordsspel', icon: TrendingUp, description: 'Blackjack, roulette och andra bordsspel' },
      ]
    },
    {
      title: 'Guider',
      items: [
        { title: 'Nybörjarguide', href: '/se/guider/nyborjarguide', icon: Shield, description: 'Komplett guide för nya casinospelare' },
        { title: 'Spelpaus', href: '/se/guider/spelpaus', icon: Shield, description: 'Så fungerar självavstängning via Spelpaus' },
        { title: 'Ansvarfullt spelande', href: '/se/guider/ansvarfullt-spelande', icon: Shield, description: 'Tips för säkert och ansvarsfullt spelande' },
        { title: 'Svenska licenser', href: '/se/guider/svenska-licenser', icon: Shield, description: 'Allt om Spelinspektionens regler' },
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={siteConfig.logo} 
              alt={siteConfig.name}
              className="h-8 sm:h-10 lg:h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-casino-primary">{siteConfig.name}</span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                {siteConfig.tagline}
              </span>
            </div>
            <Badge variant="outline" className="ml-2 text-xs border-rg-primary/20 text-rg-primary">
              18+
            </Badge>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.items.map((subItem) => (
                        <NavigationMenuLink key={subItem.title} asChild>
                          <Link
                            to={subItem.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2">
                              <subItem.icon className="h-4 w-4 text-casino-primary" />
                              <div className="text-sm font-medium leading-none">
                                {subItem.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {subItem.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA & RG */}
          <div className="hidden lg:flex items-center gap-4">
            <Button 
              asChild 
              size="sm" 
              className="bg-rg-primary hover:bg-rg-primary/90 text-white"
            >
              <a href="https://spelpaus.se" target="_blank" rel="noopener noreferrer">
                <Shield className="h-3 w-3 mr-1" />
                Spelpaus
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/om">Om oss</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Öppna meny</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                    <img 
                      src={siteConfig.logo} 
                      alt={siteConfig.name}
                      className="h-10 w-auto"
                    />
                  </Link>
                  <Badge variant="outline" className="text-xs border-rg-primary/20 text-rg-primary">
                    18+
                  </Badge>
                </div>

                <nav className="flex-1 space-y-6">
                  {navigationItems.map((section) => (
                    <div key={section.title}>
                      <h3 className="font-semibold text-sm mb-3 text-casino-primary">
                        {section.title}
                      </h3>
                      <div className="space-y-2">
                        {section.items.map((item) => (
                          <Link
                            key={item.title}
                            to={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors"
                          >
                            <item.icon className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <div className="font-medium text-sm">{item.title}</div>
                              <div className="text-xs text-muted-foreground">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </nav>

                <div className="border-t pt-6 space-y-4">
                  <ResponsibleGambling variant="widget" />
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link to="/om" onClick={() => setMobileMenuOpen(false)}>
                        Om oss
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default CasinoNavigation;