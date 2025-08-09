import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const Kreditkort = () => {
  const title = "Kreditkort 2025 - Jämför 50+ kort | Cashback, Bonus & Reseförsäkring";
  const description =
    "Komplett guide till kreditkort 2025. ✓ Jämför 50+ kort ✓ Upp till 5% cashback ✓ Reseförsäkring värde 15 000 kr ✓ Bonuspoäng och förmåner.";
  const canonical = "https://finansguiden.se/kreditkort";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <Layout>
        <section className="container mx-auto px-4 py-12">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold">Kreditkort 2025: Hitta kortet som ger mest tillbaka</h1>
            <p className="text-muted-foreground mt-2">
              Jämför cashback, bonuspoäng och försäkringar för att maximera värdet av dina kort.
            </p>
          </header>

          <section aria-label="Topplista kreditkort" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Topplista kreditkort</h2>
            <div data-offers data-category="kreditkort" data-limit="5" />
            <p className="text-sm text-muted-foreground mt-2">Sponsrade länkar. Betala hela fakturan för räntefri kredit.</p>
          </section>

          <article className="prose prose-slate max-w-none dark:prose-invert">
            <p>
              Olika kort passar olika beteenden. Välj mellan cashback-kort, resekort, bonuskort och premiumkort – och
              betala alltid hela fakturan för räntefri kredit.
            </p>
          </article>
        </section>
      </Layout>
    </>
  );
};

export default Kreditkort;
