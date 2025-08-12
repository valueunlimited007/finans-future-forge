import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer role="contentinfo" className="mt-12 border-t border-border bg-background legacy-footer">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Lån</h4>
            <nav className="grid gap-2 text-sm text-muted-foreground" aria-label="Lånlänkar">
              <Link to="/privatlan" className="hover:text-foreground">Privatlån</Link>
              <Link to="/lan-utan-uc" className="hover:text-foreground">Lån utan UC</Link>
              <Link to="/foretagslan" className="hover:text-foreground">Företagslån</Link>
            </nav>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Kreditkort</h4>
            <nav className="grid gap-2 text-sm text-muted-foreground" aria-label="Kreditkortslänkar">
              <Link to="/kreditkort" className="hover:text-foreground">Alla kreditkort</Link>
            </nav>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Information</h4>
            <nav className="grid gap-2 text-sm text-muted-foreground" aria-label="Informationslänkar">
              <Link to="/ordlista" className="hover:text-foreground">Finansordlista (A–Ö)</Link>
              <Link to="/integritetspolicy" className="hover:text-foreground">Integritetspolicy</Link>
              <Link to="/cookies" className="hover:text-foreground">Cookies</Link>
            </nav>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Om Finansguiden</h4>
            <p className="text-sm leading-6 text-muted-foreground">
              Oberoende jämförelser för lån och finansiella tjänster. Hitta rätt produkt och bättre villkor.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Finansguiden.se</p>
          <p>
            Ansvarsfriskrivning: Innehållet är informativt och ska inte ses som finansiell rådgivning.
          </p>
        </div>
      </div>
    </footer>
  );
}
