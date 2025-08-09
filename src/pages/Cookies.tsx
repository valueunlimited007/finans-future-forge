import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const Cookies = () => {
  const title = "Cookies & Samtycke | Finansguiden.se";
  const description =
    "Cookiepolicy och samtyckeshantering för Finansguiden.se. Läs om nödvändiga och icke-nödvändiga cookies samt ändra dina inställningar.";
  const canonical = "https://finansguiden.se/cookies";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <Layout>
        <section className="container mx-auto px-4 py-12">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold">Cookiepolicy</h1>
            <p className="text-muted-foreground mt-2">Senast uppdaterad: {new Date().toLocaleDateString("sv-SE")}</p>
          </header>
          <article className="prose prose-slate max-w-none dark:prose-invert">
            <p>
              Vi använder endast nödvändiga cookies för drift. Analys- och marknadsföringscookies laddas först efter
              samtycke. Du kan när som helst ändra dina inställningar.
            </p>
          </article>
        </section>
      </Layout>
    </>
  );
};

export default Cookies;
