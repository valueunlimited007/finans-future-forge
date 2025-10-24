import React from "react";
import { Link } from "react-router-dom";

const ModernFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Lån */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Lån</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privatlan" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privatlån
                </Link>
              </li>
              <li>
                <Link to="/privatlan/basta" className="text-muted-foreground hover:text-foreground transition-colors">
                  Bästa privatlånen
                </Link>
              </li>
              <li>
                <Link to="/privatlan/jamfor" className="text-muted-foreground hover:text-foreground transition-colors">
                  Jämför privatlån
                </Link>
              </li>
              <li>
                <Link to="/lan-utan-uc" className="text-muted-foreground hover:text-foreground transition-colors">
                  Lån utan UC
                </Link>
              </li>
              <li>
                <Link to="/foretagslan" className="text-muted-foreground hover:text-foreground transition-colors">
                  Företagslån
                </Link>
              </li>
            </ul>
          </div>

          {/* Kreditkort */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kreditkort</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/kreditkort" className="text-muted-foreground hover:text-foreground transition-colors">
                  Alla kreditkort
                </Link>
              </li>
              <li>
                <Link to="/kreditkort#cashback" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cashback-kort
                </Link>
              </li>
              <li>
                <Link to="/kreditkort#resor" className="text-muted-foreground hover:text-foreground transition-colors">
                  Resekort
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/integritetspolicy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Integritetspolicy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <a href="mailto:hej@finansguiden.se" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Resurser */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resurser</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/guider/basta-lanet" className="text-muted-foreground hover:text-foreground transition-colors">
                  Bästa lånet - Guide
                </Link>
              </li>
              <li>
                <Link to="/guider/lagst-ranta-blancolan" className="text-muted-foreground hover:text-foreground transition-colors">
                  Lägst ränta blancolån
                </Link>
              </li>
              <li>
                <Link to="/ordlista" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ordlista
                </Link>
              </li>
              <li>
                <Link to="/sajtkarta" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sajtkarta
                </Link>
              </li>
              <li>
                <Link to="/om" className="text-muted-foreground hover:text-foreground transition-colors">
                  Om oss
                </Link>
              </li>
            </ul>
          </div>

          {/* Internationellt */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Internationellt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://finanzen-guide.de" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kreditjämförelse Tyskland
                </a>
              </li>
              <li>
                <a 
                  href="https://finanzen-guide.de/ratenkredit" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privatlån Tyskland
                </a>
              </li>
              <li>
                <a 
                  href="https://finanzen-guide.de/kreditkarten" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kreditkort Tyskland
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Finansguiden.se - Skapad av Value Unlimited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;