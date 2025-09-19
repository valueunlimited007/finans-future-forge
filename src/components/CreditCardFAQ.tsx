import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const creditCardFaqData = [
  {
    question: "Vad är ett kreditkort och hur fungerar det?",
    answer: "Ett kreditkort ger dig tillgång till en kredit upp till en förutbestämd gräns. Du kan använda kortet för köp och kontantuttag, och betalar tillbaka det använda beloppet antingen helt eller delvis varje månad. Om du betalar hela saldot innan förfallodagen undviker du ränta under de räntefria dagarna."
  },
  {
    question: "Vilka krav ställs för att få ett kreditkort?",
    answer: "Vanliga krav inkluderar: minst 18 års ålder, svensk personnummer, fast inkomst (ofta minst 10 000-15 000 kr/månad), god kreditvärdighet enligt UC, ingen pågående skuldsanering, och fast bostadsadress i Sverige. Specifika krav varierar mellan olika kortutgivare."
  },
  {
    question: "Vad är skillnaden mellan kreditkort och betalkort?",
    answer: "Kreditkort lånar pengar som du betalar tillbaka senare, ofta med räntefria dagar och förmåner. Betalkort drar pengar direkt från ditt bankkonto utan kreditmöjlighet. Kreditkort bygger kredithistorik och har ofta bättre förmåner, men kräver mer ansvar för att undvika skulder."
  },
  {
    question: "Vad kostar det att ha kreditkort?",
    answer: "Kostnader inkluderar: årsavgift (0-1500 kr), ränta på outnyttjat saldo (8-25% årligen), uttaksavgifter (25-50 kr + procent), valutaavgifter (1-3% för utlandsköp), och förseningsavgifter vid sena betalningar. Många kort har ingen årsavgift första året."
  },
  {
    question: "Vad innebär räntefria dagar?",
    answer: "Räntefria dagar är perioden från köpdatum till förfallodagen då du inte behöver betala ränta om du betalar hela saldot. Vanligtvis 30-56 dagar. Om du endast betalar minimibeloppet börjar ränta löpa på hela det outnyttjade saldot från köpdatum."
  },
  {
    question: "Vad är cashback och hur fungerar det?",
    answer: "Cashback innebär att du får pengar tillbaka på dina köp, vanligtvis 0,5-3% av köpbeloppet. Pengarna kan betalas ut kontant, som kontokredit eller som poäng. Vissa kort har högre cashback-procent i specifika kategorier som mat, drivmedel eller resor."
  },
  {
    question: "Hur påverkar kreditkort min kreditvärdighet?",
    answer: "Kreditkort kan både förbättra och försämra din kreditvärdighet. Ansvar full användning med betalningar i tid byggerkredithistorik positivt. Högt kreditutnyttjande (över 30% av limiten), sena betalningar eller missade betalningar påverkar negativt och kan leda till betalningsanmärkningar."
  },
  {
    question: "Vad är en kreditlimit och hur bestäms den?",
    answer: "Kreditlimiten är det maximala beloppet du kan låna på kortet. Den bestäms baserat på din inkomst, andra skulder, kredithistorik och betalningsförmåga. Du kan ofta ansöka om höjning av limiten efter att ha visat god betalningshistorik under 6-12 månader."
  },
  {
    question: "Vilka försäkringar följer med kreditkort?",
    answer: "Vanliga försäkringar inkluderar: köpskydd (ersättning för skadade/stulna varor), reseförsäkringar (avbokningsskydd, bagageförsäkring, sjukförsäkring), konsumentförsäkring, och ibland bilförsäkring. Premiumkort har ofta mer omfattande försäkringsskydd än grundkort."
  },
  {
    question: "Kan jag använda mitt svenska kreditkort utomlands?",
    answer: "Ja, svenska kreditkort (Visa/Mastercard) fungerar världsomfattande. Du betalar vanligtvis 1-3% valutaavgift på utlandsköp. Vissa resekort har ingen valutaavgift. Meddela alltid din bank före utlandsresor för att undvika att kortet spärras av säkerhetsskäl."
  },
  {
    question: "Vad händer om jag inte kan betala kreditkortsskulden?",
    answer: "Vid betalningsproblem kontakta kortutgivaren omedelbart för att diskutera betalningsplan. Utebliven betalning leder till förseningsavgifter, höjd ränta, och eventuellt betalningsanmärkningar. I värsta fall kan skulden överlämnas till inkasso och Kronofogden."
  },
  {
    question: "Vilka är de vanligaste misstagen med kreditkort?",
    answer: "Vanliga misstag: endast betala minimibeloppet (leder till höga räntekostnader), använda kortet för kontantuttag (höga avgifter), maxutnyttja kreditlimiten (påverkar kreditvärdering negativt), inte läsa villkoren, och ansöka om för många kort samtidigt."
  },
  {
    question: "Hur många kreditkort bör jag ha?",
    answer: "De flesta behöver 1-3 kreditkort: ett huvudkort för vardagsanvändning, eventuellt ett resekort för reseförmåner, och kanske ett butikskort för specifika rabatter. Många kort kan påverka kreditvärderingen negativt och öka risken för överskuldsättning."
  },
  {
    question: "Vad är skillnaden mellan Visa och Mastercard?",
    answer: "Både Visa och Mastercard är betalningsnätverk med liknande acceptans världsomfattande. Skillnaderna ligger främst i specifika förmåner och partnererbjudanden. Välj baserat på kortutgivaren och förmåner snarare än nätverket."
  },
  {
    question: "Kan jag få kreditkort med betalningsanmärkningar?",
    answer: "Det är mycket svårt att få kreditkort med aktiva betalningsanmärkningar från traditionella banker. Vissa specialiserade utgivare kan överväga ansökningar med äldre, mindre anmärkningar, men då med högre avgifter och lägre kreditlimiter."
  },
  {
    question: "Hur säger jag upp mitt kreditkort?",
    answer: "Kontakta kortutgivaren via telefon, app eller webbsida för att begära uppsägning. Betala av hela saldot först, eller arrangera överföring till annat kort. Klipp sönder det fysiska kortet. Uppsägning påverkar inte din kredithistorik om du stänger kontot ansvarsfullt."
  },
  {
    question: "Vad är dynamisk valutakonvertering (DCC)?",
    answer: "DCC innebär att handelns terminal erbjuder att debitera i svenska kronor istället för lokal valuta vid utlandsköp. Detta är ofta dyrare än att låta banken göra valutaomvandlingen. Välj alltid att betala i lokal valuta för bästa växelkurs."
  },
  {
    question: "Vilka säkerhetsåtgärder finns för kreditkort?",
    answer: "Säkerhetsåtgärder inkluderar: chip och PIN-kod, kontaktlösa betalningar med beloppsgränser, SMS-notifieringar, möjlighet att spärra kort via app, bedrägeriövervakning, 3D-Secure för onlineköp, och nollansvar för obehöriga transaktioner vid anmälan."
  }
];

export default function CreditCardFAQ() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Vanliga frågor om kreditkort</CardTitle>
          <CardDescription className="text-center">
            Här hittar du svar på de mest frekventa frågorna om kreditkort i Sverige
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="space-y-2">
            {creditCardFaqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}