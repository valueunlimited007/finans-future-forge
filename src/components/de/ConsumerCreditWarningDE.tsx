import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

export default function ConsumerCreditWarningDE() {
  return (
    <Alert variant="default" className="my-8 max-w-6xl mx-auto border-2 border-red-600 bg-background">
      <AlertTriangle className="h-10 w-10 flex-shrink-0 text-red-600" />
      <div>
        <AlertTitle className="text-lg font-bold text-foreground">
          Achtung: Kredite kosten Geld!
        </AlertTitle>
        <AlertDescription className="mt-2 space-y-2 text-foreground">
          <p>
            Wenn Sie einen Kredit nicht rechtzeitig zurückzahlen können, droht ein negativer SCHUFA-Eintrag.
            Dies kann zu Schwierigkeiten bei Wohnungssuche, Vertragsabschlüssen und zukünftigen Krediten führen.
          </p>
          <p>
            Bei finanziellen Problemen wenden Sie sich bitte an die Schuldnerberatung Ihrer Stadt oder an die{" "}
            <a
              href="https://www.bafin.de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium hover:opacity-80"
            >
              Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin)
            </a>
            .
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            <strong>Repräsentatives Beispiel:</strong> Bei einem Nettokreditbetrag von 10.000 € und 
            84 Monatsraten beträgt der effektive Jahreszins 3,99% (fest). Die monatliche Rate beträgt 
            139,76 €. Der zu zahlende Gesamtbetrag beläuft sich auf 11.739,84 €.
          </p>
        </AlertDescription>
      </div>
    </Alert>
  );
}
