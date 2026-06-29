import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

// Cookiebanner + Google Consent Mode v2.
// De default ('denied') wordt in index.html gezet vóór GTM laadt. Deze banner
// laat de bezoeker kiezen en stuurt een consent-update naar gtag. De keuze wordt
// in localStorage bewaard (kf-consent), zodat terugkerende bezoekers niet opnieuw
// hoeven te kiezen (index.html herstelt die keuze ook bij de volgende paginaload).
const KEY = "kf-consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* localStorage geblokkeerd: banner niet tonen, tracking blijft 'denied' */
    }
  }, []);

  if (!show) return null;

  const choose = (granted: boolean) => {
    try {
      localStorage.setItem(KEY, granted ? "granted" : "denied");
    } catch {
      /* negeren */
    }
    if (granted && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
    setShow(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Cookietoestemming"
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-5"
    >
      <div className="max-w-3xl mx-auto rounded-2xl border-2 border-border bg-card/95 backdrop-blur shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          Ik gebruik analytische cookies om te zien hoe de site gebruikt wordt en
          hem te verbeteren. Geen advertenties. Meer in de{" "}
          <Link to="/privacy" className="text-secondary underline hover:text-primary">
            privacyverklaring
          </Link>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => choose(false)}
            className="rounded-full border-2 border-border text-foreground px-5 py-2.5 text-xs tracking-[0.15em] uppercase font-bold hover:border-primary transition"
          >
            Weigeren
          </button>
          <button
            type="button"
            onClick={() => choose(true)}
            className="rounded-full bg-primary text-primary-foreground border-2 border-secondary px-5 py-2.5 text-xs tracking-[0.15em] uppercase font-bold hover:bg-secondary hover:text-secondary-foreground transition"
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
}
