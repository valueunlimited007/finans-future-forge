import React from "react";
import { Link } from "react-router-dom";
import type { GlossaryTerm as GlossaryType } from "@/data/glossary";
import AdtractionBanner from "@/components/AdtractionBanner";
import AffiliateButton from "@/components/AffiliateButton";
import { getBannerForTerm } from "@/lib/adtractionBanners";
import { autolink } from "@/lib/autolinkGlossary";
import { buildFaq } from "@/lib/glossaryFaq";

interface GlossaryTermProps {
  term: GlossaryType;
  related: { term: string; slug: string }[];
}

const GlossaryTerm: React.FC<GlossaryTermProps> = ({ term, related }) => {
  const faqs = buildFaq(term);
  
  // Select appropriate banners based on term and placement
  const topBanner = getBannerForTerm(term, 'top');
  const sidebarBanner = getBannerForTerm(term, 'sidebar');
  const midBanner = getBannerForTerm(term, 'mid');

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_320px]">
      <article className="min-w-0">
        <nav className="mb-4 text-sm text-muted-foreground" aria-label="Brödsmulor">
          <Link className="underline underline-offset-2 hover:no-underline" to="/">Hem</Link>
          <span className="mx-1">/</span>
          <Link className="underline underline-offset-2 hover:no-underline" to="/ordlista">Ordlista</Link>
          <span className="mx-1">/</span>
          <span aria-current="page">{term.term}</span>
        </nav>

        <header className="mb-4">
          <h1 className="text-3xl font-bold leading-tight">{term.term}</h1>
          {term.shortDefinition && (
            <p className="mt-2 text-lg text-muted-foreground">{term.shortDefinition}</p>
          )}
        </header>

        <div className="mb-6">
          <AdtractionBanner 
            banner={topBanner} 
            placement="glossary_top"
            termSlug={term.slug}
          />
        </div>

        <section className="prose prose-neutral dark:prose-invert">
          {term.longDefinition?.map((p, i) => (
            <p key={i}>{autolink(p)}</p>
          ))}
        </section>

        {faqs.length ? (
          <section className="my-6">
            <h2 className="mb-2 font-semibold">Vanliga frågor</h2>
            <div className="prose prose-neutral dark:prose-invert">
              {faqs.map((f, i) => (
                <div key={i} className="mb-4">
                  <h3 className="text-lg font-medium">{f.q}</h3>
                  <p>{autolink(f.a)}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <AdtractionBanner 
                banner={midBanner} 
                placement="glossary_mid"
                termSlug={term.slug}
              />
            </div>
          </section>
        ) : null}

        {term.example && (
          <section className="my-6 rounded-lg border border-border bg-muted/20 p-4">
            <h2 className="mb-1 font-semibold">Exempel</h2>
            <p className="text-foreground">{autolink(term.example)}</p>
          </section>
        )}

        {related.length > 0 && (
          <section className="my-6">
            <h2 className="mb-2 font-semibold">Relaterade begrepp</h2>
            <div className="flex flex-wrap gap-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/ordlista/${r.slug}`}
                  className="rounded-full border border-border bg-background px-3 py-1 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                >
                  {r.term}
                </Link>
              ))}
            </div>
          </section>
        )}

        {term.partners && term.partners.length > 0 && (
          <section className="my-6 rounded-lg border border-primary/20 bg-primary/5 p-6">
            <h2 className="mb-4 text-lg font-semibold">Rekommenderade tjänster</h2>
            <div className="space-y-4">
              {term.partners.map((partner, i) => (
                <div key={i} className="flex flex-col gap-3 rounded-md border border-border bg-background p-4 sm:flex-row sm:items-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-10 w-auto object-contain sm:h-12"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{partner.name}</p>
                    <p className="text-sm text-muted-foreground">{partner.description}</p>
                  </div>
                  <AffiliateButton
                    href={partner.url}
                    label="Ansök nu"
                    termSlug={term.slug}
                    brandId={partner.brandId}
                    brandName={partner.name}
                    variant="default"
                    className="w-full sm:w-auto"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {term.sources?.length ? (
          <section className="my-6">
            <h2 className="mb-2 font-semibold">Källor</h2>
            <ul className="list-disc pl-6 text-foreground">
              {term.sources.map((s, i) => (
                <li key={i}>
                  <a
                    className="underline underline-offset-2 hover:no-underline"
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

        <p className="mt-8 text-sm text-muted-foreground">Senast uppdaterad: {term.lastUpdated}</p>
      </article>

      <aside className="hidden md:block">
        <div className="sticky top-24 space-y-4">
          <AdtractionBanner 
            banner={sidebarBanner} 
            placement="glossary_sidebar"
            termSlug={term.slug}
          />
        </div>
      </aside>
    </div>
  );
};

export default GlossaryTerm;
