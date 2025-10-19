import React from "react";
import { Link } from "react-router-dom";

const FooterDE: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Kredite */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kredite</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/de/ratenkredit" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ratenkredite
                </Link>
              </li>
              <li>
                <Link to="/de/ratenkredit/beste" className="text-muted-foreground hover:text-foreground transition-colors">
                  Beste Ratenkredite
                </Link>
              </li>
              <li>
                <Link to="/de/ratenkredit/zinsen" className="text-muted-foreground hover:text-foreground transition-colors">
                  Zinsvergleich
                </Link>
              </li>
              <li>
                <Link to="/de/ratenkredit/ohne-schufa" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kredit ohne SCHUFA
                </Link>
              </li>
              <li>
                <Link to="/de/unternehmenskredit" className="text-muted-foreground hover:text-foreground transition-colors">
                  Unternehmenskredite
                </Link>
              </li>
            </ul>
          </div>

          {/* Kreditkarten */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kreditkarten</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/de/kreditkarten" className="text-muted-foreground hover:text-foreground transition-colors">
                  Alle Kreditkarten
                </Link>
              </li>
              <li>
                <Link to="/de/kreditkarten#kostenlos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kostenlose Karten
                </Link>
              </li>
              <li>
                <Link to="/de/kreditkarten#cashback" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cashback-Karten
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/de/impressum" className="text-muted-foreground hover:text-foreground transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/de/datenschutz" className="text-muted-foreground hover:text-foreground transition-colors">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link to="/de/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookie-Richtlinie
                </Link>
              </li>
              <li>
                <a href="mailto:info@finanzen-guide.de" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Ressourcen */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Ressourcen</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/de/ratgeber/bester-kredit" className="text-muted-foreground hover:text-foreground transition-colors">
                  Bester Kredit - Ratgeber
                </Link>
              </li>
              <li>
                <Link to="/de/ratgeber/zinsen" className="text-muted-foreground hover:text-foreground transition-colors">
                  Zinsen verstehen
                </Link>
              </li>
              <li>
                <Link to="/de/glossar" className="text-muted-foreground hover:text-foreground transition-colors">
                  Finanz-Glossar
                </Link>
              </li>
              <li>
                <Link to="/de/uber-uns" className="text-muted-foreground hover:text-foreground transition-colors">
                  Über uns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <div className="mb-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Finanzen-Guide.de - Unabhängiger Kreditvergleich<br />
              info@finanzen-guide.de
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Finanzen-Guide.de - Alle Rechte vorbehalten
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Wir sind ein unabhängiges Vergleichsportal und erhalten Provisionen von unseren Partnern.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterDE;
