import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Finansguiden – Jämför lån, kreditkort och finansiering</title>
        <meta
          name="description"
          content="Jämför lån, kreditkort och finansieringslösningar. Se aktuella erbjudanden och guider."
        />
        <link rel="canonical" href="https://finansguiden.se" />
        {/* Open Graph */}
        <meta property="og:title" content="Finansguiden – Jämför lån, kreditkort och finansiering" />
        <meta property="og:description" content="Jämför lån, kreditkort och finansieringslösningar. Se aktuella erbjudanden och guider." />
        <meta property="og:url" content="https://finansguiden.se" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Finansguiden – Jämför lån, kreditkort och finansiering" />
        <meta name="twitter:description" content="Jämför lån, kreditkort och finansieringslösningar. Se aktuella erbjudanden och guider." />
        {/* JSON-LD WebSite */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Finansguiden",
            url: "https://finansguiden.se",
            inLanguage: "sv-SE",
          })}
        </script>
      </Helmet>
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Finansguiden</h1>
            <p className="text-xl text-muted-foreground mb-6">Välj kategori för att komma igång</p>
            <nav className="flex gap-3 justify-center flex-wrap">
              <Link className="underline" to="/privatlan">Privatlån</Link>
              <Link className="underline" to="/foretagslan">Företagslån</Link>
              <Link className="underline" to="/kreditkort">Kreditkort</Link>
              <Link className="underline" to="/lan-utan-uc">Lån utan UC</Link>
              <Link className="underline" to="/integritetspolicy">Integritetspolicy</Link>
              <Link className="underline" to="/cookies">Cookies</Link>
            </nav>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Index;
