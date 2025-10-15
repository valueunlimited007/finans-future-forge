import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function ConsumerCreditWarning() {
  return (
    <Alert variant="destructive" className="my-8 max-w-6xl mx-auto">
      <AlertTriangle className="h-5 w-5" />
      <AlertTitle className="text-lg font-bold">
        Att låna kostar pengar!
      </AlertTitle>
      <AlertDescription className="mt-2 space-y-2">
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
            className="underline font-medium hover:text-destructive-foreground/80"
          >
            Kontaktuppgifter finns på konsumentverket.se
          </a>
        </p>
      </AlertDescription>
    </Alert>
  );
}
