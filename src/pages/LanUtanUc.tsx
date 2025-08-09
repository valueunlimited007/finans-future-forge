import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const LanUtanUc = () => {
  const title = "Lån utan UC 2025 - 17 långivare som godkänner utan UC";
  const description =
    "Lån utan UC 2025. ✓ 17 verifierade långivare ✓ Belopp 5 000 - 500 000 kr ✓ Svar inom 24h ✓ Även med betalningsanmärkning.";
  const canonical = "https://finansguiden.se/lan-utan-uc";

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
            <h1 className="text-3xl md:text-4xl font-bold">Lån utan UC – 17 verifierade långivare</h1>
            <p className="text-muted-foreground mt-2">
              Alternativa kreditkontroller och anpassade villkor. Jämför och ansök ansvarsfullt.
            </p>
          </header>

          <section aria-label="Topplista lån utan UC" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Bästa lånen utan UC just nu</h2>
            <div data-offers data-category="utan-uc" data-limit="5" />
            <p className="text-sm text-muted-foreground mt-2">Sponsrade länkar. Låna ansvarsfullt.</p>
          </section>

          <article className="prose prose-slate max-w-none dark:prose-invert">
            <h2>Så fungerar lån utan UC</h2>
            <p>
              Flera seriösa aktörer använder Bisnode, Creditsafe eller egen bedömning. Bedöm alltid effektiv ränta och
              villkor innan ansökan.
            </p>
            <h3>Tre varianter</h3>
            <ul>
              <li>Utan UC helt – använder Creditsafe, Bisnode eller egen modell</li>
              <li>Mjuk UC – syns inte för andra kreditgivare</li>
              <li>Godkänner betalningsanmärkning – individuell prövning</li>
            </ul>
          </article>
        </section>
      </Layout>
    </>
  );
};

export default LanUtanUc;
