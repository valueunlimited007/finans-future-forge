import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { acceptAll, readConsent, rejectAll } from "@/lib/consent";

const ConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const c = readConsent();
    setVisible(c.analytics === null);
  }, []);

  const onAccept = () => {
    acceptAll();
    setVisible(false);
  };

  const onReject = () => {
    rejectAll();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-3xl rounded-t-xl border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75 shadow-lg p-4 md:p-5">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="text-sm text-muted-foreground">
            Vi använder endast nödvändiga cookies tills du samtycker. För analys/marknadsföring behöver vi ditt ja. Du kan ändra senare på sidan "Cookiepolicy".
          </div>
          <div className="flex gap-2 shrink-0 ml-auto">
            <Button variant="secondary" onClick={onReject} aria-label="Avböj icke-nödvändiga cookies">Avböj</Button>
            <Button onClick={onAccept} aria-label="Godkänn alla cookies">Godkänn</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;
