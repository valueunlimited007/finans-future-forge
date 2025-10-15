import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ConsumerCreditWarning() {
  return (
    <Alert variant="default" className="my-8 max-w-6xl mx-auto border-2 border-red-600 bg-background">
      <img 
        src="/images/konsumentverket-warning.png" 
        alt="Varning" 
        className="h-10 w-10 absolute left-4 top-4"
      />
      <AlertTitle className="text-lg font-bold text-foreground">
        Att låna kostar pengar!
      </AlertTitle>
      <AlertDescription className="mt-2 space-y-2 text-foreground">
        <p>
          Om du inte kan betala tillbaka skulden i tid riskerar du en betalningsanmärkning.
          Det kan leda till svårigheter att få hyra bostad, teckna abonnemang och få nya lån.
        </p>
        <p>
          För stöd, vänd dig till budget- och skuldrådgivningen i din kommun.{" "}
          <a
            href="https://www.konsumentverket.se"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium hover:opacity-80"
          >
            Kontaktuppgifter finns på konsumentverket.se
          </a>
        </p>
      </AlertDescription>
    </Alert>
  );
}
