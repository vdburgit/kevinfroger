import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const LOGO = "/images/kevin-logo-small.webp";

const NAV = [
  { to: "/bruiloft-dj", label: "Bruiloft DJ" },
  { to: "/verjaardag-dj", label: "Feest DJ" },
  { to: "/zakelijk-dj", label: "Bedrijfsfeest" },
  { to: "/festival-dj", label: "Festival" },
  { to: "/prijzen", label: "Prijzen" },
] as const;

const MOBILE_NAV = [
  ...NAV,
  { to: "/regios", label: "Werkgebied" },
  { to: "/reviews", label: "Reviews" },
  { to: "/werkwijze", label: "Werkwijze" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);

  // Sluit menu bij Esc en lock body scroll als open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={
        transparent
          ? "absolute inset-x-0 top-0 z-30"
          : "sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border"
      }
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 py-4 md:py-5 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <img src={LOGO} alt="DJ Kevin Froger" width={360} height={198} className="h-10 sm:h-12 md:h-14 w-auto drop-shadow-lg" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm tracking-[0.15em] uppercase font-semibold">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-secondary transition-colors"
              activeProps={{ className: "text-secondary" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Boek Kevin knop - altijd zichtbaar */}
          <Link
            to="/contact"
            className="rounded-full bg-primary text-primary-foreground border-2 border-secondary px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm tracking-[0.15em] uppercase font-bold hover:bg-secondary hover:text-secondary-foreground transition shrink-0"
          >
            Boek Kevin
          </Link>

          {/* Hamburger - alleen onder lg */}
          <button
            type="button"
            aria-label={open ? "Sluit menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex flex-col items-center justify-center w-11 h-11 rounded-full border-2 border-border hover:border-primary transition shrink-0"
          >
            <span
              className={`block w-5 h-0.5 bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span className={`block w-5 h-0.5 bg-foreground my-1 transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur"
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-background border-l-2 border-border overflow-y-auto transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-6 pt-24 pb-12 flex flex-col gap-2">
            {MOBILE_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block py-3 text-xl tracking-[0.05em] uppercase font-semibold border-b border-border hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              <a href="tel:0645251333" className="block text-foreground text-lg">
                📞 Bellen
              </a>
              <a href="mailto:Booking@kevinfroger.nl" className="block hover:text-foreground">
                ✉️ Booking@kevinfroger.nl
              </a>
              <a
                href="https://wa.me/31645251333"
                target="_blank"
                rel="noopener"
                className="block hover:text-foreground"
              >
                💬 Direct een appje sturen
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
