import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Clock, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ResponsibleGambling from './ResponsibleGambling';
import { getSiteConfig } from '@/lib/siteConfig';

export function CasinoFooter() {
  const siteConfig = getSiteConfig();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Casinon',
      links: [
        { title: 'Alla casinon', href: '/se' },
        { title: 'BankID casinon', href: '/se/casinon-med-bankid' },
        { title: 'Pay-n-Play', href: '/se/pay-n-play' },
        { title: 'Snabbast uttag', href: '/se/snabbast-uttag' },
        { title: 'Live Casino', href: '/se/live-casino' },
      ]
    },
    {
      title: 'Information',
      links: [
        { title: 'Om oss', href: '/om' },
        { title: 'Kontakt', href: '/kontakt' },
        { title: 'Integritetspolicy', href: '/integritetspolicy' },
        { title: 'Cookies', href: '/cookies' },
        { title: 'Ansvarsfriskrivning', href: '/ansvarsfriskrivning' },
      ]
    },
    {
      title: 'Ansvarfullt spelande',
      links: [
        { title: 'Spelpaus.se', href: 'https://spelpaus.se', external: true },
        { title: 'Stödlinjen', href: 'https://www.stodlinjen.se', external: true },
        { title: 'Spelberoendes riksförbund', href: 'https://spelberoendesrikssforbund.se', external: true },
        { title: 'Spelinspektionen', href: 'https://www.spelinspektionen.se', external: true },
      ]
    },
    {
      title: 'Guider',
      links: [
        { title: 'Så fungerar Spelpaus', href: '/se/guider/spelpaus' },
        { title: 'Ansvarfullt spelande', href: '/se/guider/ansvarfullt-spelande' },
        { title: 'Svenska spellicenser', href: '/se/guider/svenska-licenser' },
        { title: 'Spelregler', href: '/se/guider/spelregler' },
      ]
    }
  ];

  return (
    <footer className="bg-muted/30 border-t">
      {/* Responsible Gambling Banner */}
      <ResponsibleGambling variant="footer" />
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-sm mb-4 text-casino-primary">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.title}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                      >
                        {link.title}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Description */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src={siteConfig.logo} 
                alt={siteConfig.name}
                className="h-8 w-auto"
              />
              <div>
                <div className="font-bold text-casino-primary">{siteConfig.name}</div>
                <div className="text-xs text-muted-foreground">
                  {siteConfig.tagline}
                </div>
              </div>
            </Link>
          </div>

          {/* Important Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <a 
              href="https://www.spelinspektionen.se" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-rg-primary transition-colors"
            >
              <Shield className="h-3 w-3" />
              Spelinspektionen
            </a>
            <a 
              href="https://spelpaus.se" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-rg-primary transition-colors"
            >
              <Clock className="h-3 w-3" />
              Spelpaus.se
            </a>
            <a 
              href="https://www.stodlinjen.se" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-rg-secondary transition-colors"
            >
              <Phone className="h-3 w-3" />
              Stödlinjen
            </a>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Legal and Copyright */}
        <div className="text-center space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm">
            <p className="font-medium text-yellow-800 mb-2">
              Viktigt meddelande om spelansvar
            </p>
            <p className="text-yellow-700">
              Alla casinon på denna webbplats har svensk spellicens från Spelinspektionen. 
              Spel kan vara beroendeframkallande. Spela ansvarsfullt. Du måste vara 18 år för att spela. 
              För hjälp och stöd, kontakta{' '}
              <a href="https://www.stodlinjen.se" target="_blank" rel="noopener noreferrer" className="underline">
                Stödlinjen (020-819 100)
              </a>
              {' '}eller använd{' '}
              <a href="https://spelpaus.se" target="_blank" rel="noopener noreferrer" className="underline">
                Spelpaus.se
              </a>
              {' '}för självavstängning.
            </p>
          </div>

          <div className="text-xs text-muted-foreground space-y-2">
            <p>
              © {currentYear} {siteConfig.name}. Alla rättigheter förbehållna.
            </p>
            <p>
              Denna webbplats innehåller affiliatelänkar. Vi kan få provision när du klickar på länkarna 
              och registrerar dig hos våra partners. Detta påverkar aldrig våra recensioner eller rekommendationer.
            </p>
            <p>
              Licensierade operatörer i Sverige regleras av Spelinspektionen enligt Spellagen (2018:1138).
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CasinoFooter;