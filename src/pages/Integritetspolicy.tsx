import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const Integritetspolicy = () => {
  const title = "Integritetspolicy | Finansguiden.se";
  const description =
    "Integritetspolicy för Finansguiden.se – hur vi behandlar personuppgifter och cookies i enlighet med GDPR.";
  const canonical = "https://finansguiden.se/integritetspolicy";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      <Layout>
        <section className="container mx-auto px-4 py-12">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold">Integritetspolicy</h1>
            <p className="text-muted-foreground mt-2">Senast uppdaterad: {new Date().toLocaleDateString("sv-SE")}</p>
          </header>
          <article className="prose prose-slate max-w-none dark:prose-invert">
            <p>
              Vi värnar om din integritet. Denna policy beskriver hur vi behandlar personuppgifter enligt GDPR och
              hur du kan påverka hanteringen av dina data.
            </p>
          </article>
        </section>
      </Layout>
    </>
  );
};

export default Integritetspolicy;
