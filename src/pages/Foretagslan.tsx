import { Helmet } from "react-helmet-async";

const Foretagslan = () => {
  const title = "Företagslån 2025 - Finansiering för Startups & SME | Från 10 000 kr";
  const description =
    "Komplett guide om företagslån 2025. ✓ Lån från 10 000 kr till 10 miljoner ✓ Utan säkerhet ✓ Svar inom 24h. Jämför checkkredit, fakturabelåning, företagskredit och tillväxtlån.";
  const canonical = "https://finansguiden.se/foretagslan";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <main className="min-h-screen bg-background text-foreground">
        <section className="container mx-auto px-4 py-12">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold">Företagslån 2025: Din kompletta guide</h1>
            <p className="text-muted-foreground mt-2">
              Jämför finansiering för nystartade och etablerade företag – från checkkredit till tillväxtlån.
            </p>
          </header>
          <article className="prose prose-slate max-w-none dark:prose-invert">
            <p>
              Lånebehovet varierar över företagets livscykel. Jämför alternativ, krav och kostnader för att välja rätt
              produkt för ditt kassaflöde och dina mål.
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default Foretagslan;
