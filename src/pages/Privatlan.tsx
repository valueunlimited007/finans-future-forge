import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

const Privatlan = () => {
  const title = "Privatlån 2025 - Jämför räntor från 2.9% | Komplett guide";
  const description =
    "Allt om privatlån 2025. Jämför räntor från 2.9%, ansök om upp till 600 000 kr. ✓ Låg ränta ✓ Snabb utbetalning ✓ Utan säkerhet. Läs vår kompletta guide.";
  const canonical = "https://finansguiden.se/privatlan";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Vad är ett privatlån?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Ett privatlån är ett blancolån utan säkerhet som du kan använda till valfritt ändamål. Lånebelopp från 10 000 kr upp till 600 000 kr med återbetalningstid 1-15 år.",
        },
      },
      {
        "@type": "Question",
        name: "Vilken ränta kan jag få på privatlån?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Räntan på privatlån varierar från ca 2.9% till 24% beroende på din kreditvärdighet, lånebelopp och återbetalningstid. Genomsnittsräntan ligger på cirka 6-8%.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Layout>
        <section className="container mx-auto px-4 py-12">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold">Privatlån – jämför och hitta lägsta räntan</h1>
            <p className="text-muted-foreground mt-2">
              Jämför privatlån från flera långivare på några minuter. Kostnadsfritt och utan bindning.
            </p>
          </header>

          <section aria-label="Bästa privatlånen" className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Bästa privatlånen just nu</h2>
            <div data-offers data-category="privatlan" data-limit="6" />
            <p className="text-sm text-muted-foreground mt-2">Sponsrade länkar. Jämför erbjudanden noga innan du ansöker.</p>
          </section>

          <article className="prose prose-slate max-w-none dark:prose-invert">
            <p>
              Privatlån (blancolån) är lån utan säkerhet mellan 10 000 – 600 000 kr. Räntan sätts individuellt
              utifrån ekonomi och återbetalningsförmåga. Jämför alltid flera erbjudanden för bästa villkor.
            </p>
            <h2>Vad är ett privatlån?</h2>
            <p>
              Ett privatlån, även kallat blancolån, är ett lån utan säkerhet som du kan använda till valfritt ändamål.
              Till skillnad från bolån eller billån behöver du inte ställa någon säkerhet, vilket gör processen snabbare
              men ofta med högre ränta.
            </p>
          </article>
        </section>
      </Layout>
    </>
  );
};

export default Privatlan;
