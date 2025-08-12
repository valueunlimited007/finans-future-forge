import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/privatlan", label: "Privatlån" },
  { to: "/foretagslan", label: "Företagslån" },
  { to: "/kreditkort", label: "Kreditkort" },
  { to: "/lan-utan-uc", label: "Lån utan UC" },
  { to: "/ordlista", label: "Ordlista" },
];

const navClass = ({ isActive }: { isActive: boolean }) =>
  [
    "px-3 py-2 rounded-lg text-sm transition-colors",
    "focus:outline-none focus-visible:ring-2 ring-offset-2 ring-ring ring-offset-background",
    isActive
      ? "font-medium text-foreground"
      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
  ].join(" ");

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      role="banner"
      className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur legacy-header supports-[backdrop-filter]:bg-background/60"
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="Finansguiden.se startsida">
          <img
            src="/finansguiden-logo-v2.png"
            alt="Finansguiden.se logotyp"
            width={140}
            height={40}
            className="h-7 w-auto sm:h-8"
            loading="eager"
          />
        </Link>

        <button
          className="md:hidden inline-flex items-center rounded-lg border border-border bg-background px-3 py-2 text-sm"
          aria-controls="main-nav"
          aria-expanded={open}
          aria-label="Öppna meny"
          onClick={() => setOpen((v) => !v)}
        >
          Meny
        </button>

        <nav
          id="main-nav"
          aria-label="Huvudmeny"
          className={`${open ? "block" : "hidden"} md:block`}
        >
          <ul className="md:flex md:items-center gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={navClass} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
