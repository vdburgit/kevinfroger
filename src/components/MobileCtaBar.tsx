import { track } from "@/lib/track";

// Vaste onderbalk op mobiel met bel-, WhatsApp- en vragenlijst-knop. Telefoon/
// WhatsApp-leads converteren goed; één duim-afstand verhoogt boekingen.
// Alleen zichtbaar op mobiel (md:hidden). De spacer houdt ruimte vrij zodat de
// balk de footer niet overlapt.
const TEL = "+31645251333";
const WA =
  "https://wa.me/31645251333?text=" +
  encodeURIComponent("Hoi Kevin! Ik wil graag mijn datum checken. Mijn event is op (datum) in (plaats): ");
const FORM = "https://kevinfroger.fillout.com/t/e4SxxxQXrjus";

export function MobileCtaBar() {
  return (
    <>
      <div className="h-16 md:hidden" aria-hidden="true" />
      <nav
        aria-label="Snel contact"
        className="fixed bottom-0 inset-x-0 z-50 grid grid-cols-3 md:hidden border-t-2 border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80"
      >
        <a
          href={`tel:${TEL}`}
          onClick={() => track("tel_click", { location: "mobile_bar" })}
          className="flex flex-col items-center justify-center gap-0.5 py-3 text-[0.65rem] tracking-[0.08em] uppercase font-bold text-foreground border-r-2 border-border active:bg-muted"
        >
          <span className="text-base leading-none">📞</span>
          Bellen
        </a>
        <a
          href={WA}
          onClick={() => track("whatsapp_click", { location: "mobile_bar" })}
          className="flex flex-col items-center justify-center gap-0.5 py-3 text-[0.65rem] tracking-[0.08em] uppercase font-bold bg-primary text-primary-foreground border-r-2 border-border active:opacity-90"
        >
          <span className="text-base leading-none">💬</span>
          WhatsApp
        </a>
        <a
          href={FORM}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("questionnaire_click", { location: "mobile_bar" })}
          className="flex flex-col items-center justify-center gap-0.5 py-3 text-[0.65rem] tracking-[0.08em] uppercase font-bold text-foreground active:bg-muted"
        >
          <span className="text-base leading-none">📝</span>
          Vragenlijst
        </a>
      </nav>
    </>
  );
}
