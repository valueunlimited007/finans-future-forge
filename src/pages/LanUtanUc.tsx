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
          <article className="prose prose-slate max-w-none dark:prose-invert">
            <p>
              Flera seriösa aktörer använder Bisnode, Creditsafe eller egen bedömning. Bedöm alltid effektiv ränta och
              villkor innan ansökan.
            </p>
          </article>
        </section>
      </Layout>
    </>
  );
};

export default LanUtanUc;
