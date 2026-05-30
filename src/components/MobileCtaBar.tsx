import { track } from "@/lib/track";

// Vaste onderbalk op mobiel met bel- en WhatsApp-knop. Telefoon/WhatsApp-leads
// converteren veel beter dan formulieren; één duim-afstand verhoogt boekingen.
// Alleen zichtbaar op mobiel (md:hidden). De spacer houdt ruimte vrij zodat de
// balk de footer niet overlapt.
const TEL = "+31645251333";
const WA =
  "https://wa.me/31645251333?text=" +
  encodeURIComponent("Hoi Kevin! Ik wil graag mijn datum checken. Mijn event is op (datum) in (plaats): ");

export function MobileCtaBar() {
  return (
    <>
      <div className="h-16 md:hidden" aria-hidden="true" />
      <nav
        aria-label="Snel contact"
        className="fixed bottom-0 inset-x-0 z-50 flex md:hidden border-t-2 border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80"
      >
        <a
          href={`tel:${TEL}`}
          onClick={() => track("tel_click", { location: "mobile_bar" })}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-xs tracking-[0.15em] uppercase font-bold text-foreground border-r-2 border-border active:bg-muted"
        >
          Bel direct
        </a>
        <a
          href={WA}
          onClick={() => track("whatsapp_click", { location: "mobile_bar" })}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-xs tracking-[0.15em] uppercase font-bold bg-primary text-primary-foreground active:opacity-90"
        >
          App · check je datum
        </a>
      </nav>
    </>
  );
}
