import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { acceptAll, rejectAll } from "@/lib/consent";

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
            <h1 className="text-3xl md:text-4xl font-bold">Cookiepolicy</h1>
            <p className="text-muted-foreground mt-2">Senast uppdaterad: {new Date().toLocaleDateString("sv-SE")}</p>
          </header>
          <article className="prose prose-slate max-w-none dark:prose-invert">
            <p>
              Vi använder endast nödvändiga cookies för drift. Analys- och marknadsföringscookies laddas först efter
              samtycke. Du kan när som helst ändra dina inställningar.
            </p>
            <div className="not-prose mt-6 flex gap-3">
              <Button onClick={() => acceptAll()} aria-label="Godkänn alla cookies">Godkänn alla</Button>
              <Button variant="secondary" onClick={() => rejectAll()} aria-label="Avböj icke-nödvändiga cookies">Avböj</Button>
            </div>
          </article>
        </section>
      </Layout>
    </>
  );
};

export default Cookies;
