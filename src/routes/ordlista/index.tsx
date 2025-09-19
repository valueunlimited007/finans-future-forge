import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { glossary as glossaryData } from "@/data/glossary";
import GlossaryList from "@/components/GlossaryList";
import AlphabeticalGlossaryList from "@/components/AlphabeticalGlossaryList";
import ModernNavigation from "@/components/ModernNavigation";
import LegacyFooter from "@/components/LegacyFooter";
const safeEvent = (name: string, params: Record<string, any>) => {
  try {
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", name, params);
    } else {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: name, ...params });
    }
  } catch {}
};

export default function GlossaryIndex() {
  const [q, setQ] = useState("");

  useEffect(() => {
    safeEvent("glossary_index_view", { page: location.pathname });
  }, []);

  // debounce search event
  useEffect(() => {
    const s = q.trim();
    if (!s) return;
    const t = setTimeout(() => {
      const sLower = s.toLowerCase();
      const count = glossaryData.filter((g) =>
        g.term.toLowerCase().includes(sLower) || g.shortDefinition?.toLowerCase().includes(sLower)
      ).length;
      safeEvent("glossary_search", { query: s, results_count: count, page: location.pathname });
    }, 500);
    return () => clearTimeout(t);
  }, [q]);

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return glossaryData;
    return glossaryData.filter((g) =>
      g.term.toLowerCase().includes(s) || g.shortDefinition?.toLowerCase().includes(s)
    );
  }, [q]);

  return (
    <>
      <ModernNavigation />
      <main className="mx-auto max-w-3xl px-4 py-8">
        <Helmet>
          <title>Finansordlista A–Ö | Finansguiden.se</title>
          <meta name="description" content="Sök i Finansguidens finansordlista A–Ö. Förklaringar av begrepp som amortering, effektiv ränta, indexfond m.fl." />
          <link rel="canonical" href={`https://finansguiden.se/ordlista`} />
        </Helmet>

        <div className="prose prose-neutral dark:prose-invert">
          <header className="mb-6 not-prose">
            <h1 className="text-3xl font-bold">Finansordlista (A–Ö)</h1>
            <p className="mt-1 text-muted-foreground">Utforska centrala begrepp inom lån, sparande och privatekonomi.</p>
          </header>
        </div>

        <label className="sr-only" htmlFor="glossary-search">Sök i finansordlistan</label>
        <input
          id="glossary-search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Sök begrepp, t.ex. ”amortering”"
          aria-label="Sök i finansordlistan"
          className="mb-6 w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground"
        />

        <div className="prose prose-neutral dark:prose-invert">
          {q.trim() ? (
            <GlossaryList items={list} />
          ) : (
            <AlphabeticalGlossaryList items={list} />
          )}
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          Tips: Saknar du något ord? <Link to="/kontakt" className="underline underline-offset-2 hover:no-underline">Hör av dig</Link>.
        </div>
      </main>
      <LegacyFooter />
    </>
  );
}
