import React from "react";
import { Link } from "react-router-dom";
import type { GlossaryTermDE as GlossaryTypeDE } from "@/data/glossary-de";
import { buildFaqDE } from "@/lib/glossaryFaqDE";

interface GlossaryTermDEProps {
  term: GlossaryTypeDE;
  related: { term: string; slug: string }[];
}

const GlossaryTermDE: React.FC<GlossaryTermDEProps> = ({ term, related }) => {
  const faqs = buildFaqDE(term);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_320px]">
      <article className="min-w-0">
        <nav className="mb-4 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link className="underline underline-offset-2 hover:no-underline" to="/de">Home</Link>
          <span className="mx-1">/</span>
          <Link className="underline underline-offset-2 hover:no-underline" to="/glossar">Glossar</Link>
          <span className="mx-1">/</span>
          <span aria-current="page">{term.term}</span>
        </nav>

        <header className="mb-4">
          <h1 className="text-3xl font-bold leading-tight">{term.term}</h1>
          {term.shortDefinition && (
            <p className="mt-2 text-lg text-muted-foreground">{term.shortDefinition}</p>
          )}
        </header>

        <section className="prose prose-neutral dark:prose-invert max-w-none">
          {term.longDefinition?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        {faqs.length > 0 && (
          <section className="my-6">
            <h2 className="mb-3 text-2xl font-semibold">Häufig gestellte Fragen</h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="rounded-lg border border-border bg-muted/20 p-4">
                  <h3 className="text-lg font-medium mb-2">{f.q}</h3>
                  <p className="text-foreground">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {term.example && (
          <section className="my-6 rounded-lg border border-border bg-muted/20 p-4">
            <h2 className="mb-2 font-semibold">Beispiel</h2>
            <p className="text-foreground">{term.example}</p>
          </section>
        )}

        {related.length > 0 && (
          <section className="my-6">
            <h2 className="mb-3 text-xl font-semibold">Verwandte Begriffe</h2>
            <div className="flex flex-wrap gap-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/glossar/${r.slug}`}
                  className="rounded-full border border-border bg-background px-3 py-1 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {r.term}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Relevante Vergleichsseiten */}
        {(term.slug.includes('kredit') || term.slug.includes('darlehen') || term.slug.includes('ratenkredit')) && (
          <section className="my-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-foreground">
              Möchten Sie Kredite vergleichen? <Link to="/ratenkredit" className="underline underline-offset-2 hover:no-underline font-medium text-primary">Siehe unsere Empfehlungen hier</Link>
            </p>
          </section>
        )}
        
        {term.slug.includes('unternehmenskredit') && (
          <section className="my-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-foreground">
              Möchten Sie Unternehmenskredite vergleichen? <Link to="/unternehmenskredit" className="underline underline-offset-2 hover:no-underline font-medium text-primary">Siehe unsere Empfehlungen hier</Link>
            </p>
          </section>
        )}
        
        {term.slug.includes('kreditkarte') && (
          <section className="my-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-foreground">
              Möchten Sie Kreditkarten vergleichen? <Link to="/kreditkarten" className="underline underline-offset-2 hover:no-underline font-medium text-primary">Siehe unsere Empfehlungen hier</Link>
            </p>
          </section>
        )}
        
        {(term.slug.includes('schufa') || term.slug.includes('ohne-schufa')) && (
          <section className="my-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-foreground">
              Brauchen Sie einen Kredit ohne SCHUFA? <Link to="/ratenkredit/ohne-schufa" className="underline underline-offset-2 hover:no-underline font-medium text-primary">Siehe unsere Empfehlungen hier</Link>
            </p>
          </section>
        )}

        {term.sources?.length ? (
          <section className="my-6">
            <h2 className="mb-3 text-xl font-semibold">Quellen</h2>
            <ul className="list-disc pl-6 space-y-1 text-foreground">
              {term.sources.map((s, i) => (
                <li key={i}>
                  <a
                    className="underline underline-offset-2 hover:no-underline text-primary"
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <p className="mt-8 text-sm text-muted-foreground">Zuletzt aktualisiert: {term.lastUpdated}</p>
      </article>

      <aside className="hidden md:block">
        <div className="sticky top-24 space-y-4 rounded-lg border border-border bg-muted/20 p-4">
          <h3 className="font-semibold text-lg">Finanz-Glossar</h3>
          <p className="text-sm text-muted-foreground">
            Verstehen Sie alle wichtigen Finanzbegriffe mit unserem umfassenden Glossar.
          </p>
          <Link 
            to="/glossar" 
            className="block w-full rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Alle Begriffe anzeigen
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default GlossaryTermDE;
