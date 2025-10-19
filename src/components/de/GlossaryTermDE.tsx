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
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px] max-w-7xl mx-auto">
      <article className="min-w-0 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link className="underline underline-offset-2 hover:no-underline hover:text-foreground transition-colors" to="/de">Home</Link>
          <span className="mx-2">/</span>
          <Link className="underline underline-offset-2 hover:no-underline hover:text-foreground transition-colors" to="/glossar">Glossar</Link>
          <span className="mx-2">/</span>
          <span aria-current="page" className="text-foreground font-medium">{term.term}</span>
        </nav>

        {/* Header Section */}
        <header className="space-y-4 pb-6 border-b border-border">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">{term.term}</h1>
          {term.shortDefinition && (
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">{term.shortDefinition}</p>
          )}
        </header>

        {/* Main Definition */}
        <section className="prose prose-lg prose-neutral dark:prose-invert max-w-none space-y-6">
          {term.longDefinition?.map((p, i) => (
            <p key={i} className="leading-relaxed text-foreground/90">{p}</p>
          ))}
        </section>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="space-y-6 py-4">
            <h2 className="text-3xl font-bold tracking-tight">Häufig gestellte Fragen</h2>
            <div className="grid gap-6">
              {faqs.map((f, i) => (
                <div key={i} className="rounded-xl border border-border bg-gradient-to-br from-muted/30 to-muted/10 p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{f.q}</h3>
                  <p className="text-foreground/80 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Example Section */}
        {term.example && (
          <section className="rounded-xl border-2 border-primary/20 bg-primary/5 p-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💡</span>
              <h2 className="text-2xl font-bold">Beispiel</h2>
            </div>
            <p className="text-foreground/90 leading-relaxed text-lg">{term.example}</p>
          </section>
        )}

        {/* Related Terms */}
        {related.length > 0 && (
          <section className="space-y-4 py-4">
            <h2 className="text-2xl font-bold tracking-tight">Verwandte Begriffe</h2>
            <div className="flex flex-wrap gap-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/glossar/${r.slug}`}
                  className="rounded-full border-2 border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {r.term}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Call-to-Action Sections */}
        <div className="space-y-4">
          {(term.slug.includes('kredit') || term.slug.includes('darlehen') || term.slug.includes('ratenkredit')) && (
            <section className="rounded-xl border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 p-6 hover:shadow-lg transition-all duration-300">
              <p className="text-foreground text-lg">
                <span className="font-semibold">Möchten Sie Kredite vergleichen?</span>{" "}
                <Link to="/ratenkredit" className="inline-flex items-center gap-1 font-bold text-primary hover:underline underline-offset-4 transition-all">
                  Siehe unsere Empfehlungen hier →
                </Link>
              </p>
            </section>
          )}
          
          {term.slug.includes('unternehmenskredit') && (
            <section className="rounded-xl border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 p-6 hover:shadow-lg transition-all duration-300">
              <p className="text-foreground text-lg">
                <span className="font-semibold">Möchten Sie Unternehmenskredite vergleichen?</span>{" "}
                <Link to="/unternehmenskredit" className="inline-flex items-center gap-1 font-bold text-primary hover:underline underline-offset-4 transition-all">
                  Siehe unsere Empfehlungen hier →
                </Link>
              </p>
            </section>
          )}
          
          {term.slug.includes('kreditkarte') && (
            <section className="rounded-xl border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 p-6 hover:shadow-lg transition-all duration-300">
              <p className="text-foreground text-lg">
                <span className="font-semibold">Möchten Sie Kreditkarten vergleichen?</span>{" "}
                <Link to="/kreditkarten" className="inline-flex items-center gap-1 font-bold text-primary hover:underline underline-offset-4 transition-all">
                  Siehe unsere Empfehlungen hier →
                </Link>
              </p>
            </section>
          )}
          
          {(term.slug.includes('schufa') || term.slug.includes('ohne-schufa')) && (
            <section className="rounded-xl border-2 border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 p-6 hover:shadow-lg transition-all duration-300">
              <p className="text-foreground text-lg">
                <span className="font-semibold">Brauchen Sie einen Kredit ohne SCHUFA?</span>{" "}
                <Link to="/ratenkredit/ohne-schufa" className="inline-flex items-center gap-1 font-bold text-primary hover:underline underline-offset-4 transition-all">
                  Siehe unsere Empfehlungen hier →
                </Link>
              </p>
            </section>
          )}
        </div>

        {/* Sources */}
        {term.sources?.length ? (
          <section className="space-y-4 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold tracking-tight">Quellen</h2>
            <ul className="space-y-3">
              {term.sources.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-1">📚</span>
                  <a
                    className="text-foreground hover:text-primary underline underline-offset-4 decoration-2 hover:decoration-primary transition-all font-medium"
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

        {/* Last Updated */}
        <div className="pt-8 mt-8 border-t border-border">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span>🕒</span>
            <span>Zuletzt aktualisiert: <span className="font-medium">{term.lastUpdated}</span></span>
          </p>
        </div>
      </article>

      {/* Sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 space-y-6">
          <div className="rounded-xl border-2 border-border bg-gradient-to-br from-muted/40 to-muted/20 p-6 shadow-lg space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">📖</span>
              <h3 className="font-bold text-xl">Finanz-Glossar</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Verstehen Sie alle wichtigen Finanzbegriffe mit unserem umfassenden Glossar von über 600 Begriffen.
            </p>
            <Link 
              to="/glossar" 
              className="block w-full rounded-lg bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground hover:bg-primary/90 hover:shadow-lg transition-all duration-200"
            >
              Alle Begriffe anzeigen →
            </Link>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 space-y-3">
            <h4 className="font-semibold text-base">💡 Gut zu wissen</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Unsere Glossar-Einträge werden regelmäßig aktualisiert und von Finanzexperten geprüft.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default GlossaryTermDE;
