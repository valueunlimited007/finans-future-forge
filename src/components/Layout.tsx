import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b border-border">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" aria-label="Finansguiden.se" className="flex items-center gap-2">
            <img src="/finansguiden-logo.png" alt="Finansguiden.se logotyp" width={140} height={40} loading="eager" />
          </Link>
          <ul className="flex gap-4 text-sm">
            <li><Link to="/privatlan" className="hover:underline">Privatlån</Link></li>
            <li><Link to="/foretagslan" className="hover:underline">Företagslån</Link></li>
            <li><Link to="/kreditkort" className="hover:underline">Kreditkort</Link></li>
            <li><Link to="/lan-utan-uc" className="hover:underline">Lån utan UC</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border">
        <div className="container mx-auto px-4 py-8 grid gap-6 md:grid-cols-4">
          <div>
            <h4 className="font-semibold mb-3">Lån</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privatlan" className="hover:underline">Privatlån</Link></li>
              <li><Link to="/lan-utan-uc" className="hover:underline">Lån utan UC</Link></li>
              <li><Link to="/foretagslan" className="hover:underline">Företagslån</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Kreditkort</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/kreditkort" className="hover:underline">Alla kreditkort</Link></li>
              <li><Link to="/kreditkort#cashback" className="hover:underline">Cashback-kort</Link></li>
              <li><Link to="/kreditkort#resor" className="hover:underline">Resekort</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Information</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:hej@finansguiden.se" className="hover:underline">Kontakt</a></li>
              <li><Link to="/integritetspolicy" className="hover:underline">Integritetspolicy</Link></li>
              <li><Link to="/cookies" className="hover:underline">Cookies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Om oss</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">Finansguiden.se<br/>hej@finansguiden.se<br/>Skapad av Value Unlimited</p>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="container mx-auto px-4 py-4 text-sm text-muted-foreground">© {new Date().getFullYear()} Finansguiden.se</div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
