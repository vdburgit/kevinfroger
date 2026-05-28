import { Link } from "@tanstack/react-router";
import { CITIES } from "@/data/cities";

// Lijst van alle bestaande locatiepagina's (steden + regio's), gegroepeerd voor
// makkelijk weergeven onderaan een dienst-pagina. Houd handmatig in sync met
// `src/routes/dj-boeken-*.tsx`.
const ALL_LOCATIONS = [
  // Pijlerregio's (bestaande pages)
  { to: "/dj-boeken-hoeksche-waard", label: "Hoeksche Waard" },
  { to: "/dj-boeken-betuwe", label: "Betuwe" },
  { to: "/dj-boeken-tiel", label: "Tiel" },
  { to: "/dj-boeken-culemborg", label: "Culemborg" },
  { to: "/dj-boeken-geldermalsen", label: "Geldermalsen" },
  { to: "/dj-boeken-zaltbommel", label: "Zaltbommel" },
  { to: "/dj-boeken-gorinchem", label: "Gorinchem" },
  { to: "/dj-boeken-dordrecht", label: "Dordrecht" },
  // Grote steden uit cities-data
  ...Object.values(CITIES).map((c) => ({ to: `/dj-boeken-${c.slug}`, label: c.name })),
];

type Props = {
  service: string; // "bruiloft" | "feest" | "bedrijfsfeest" | "festival"
};

export function ServiceCityIndex({ service }: Props) {
  const lowercase = service.toLowerCase();
  return (
    <section className="py-16 sm:py-20 px-5 sm:px-6 lg:px-10 bg-card border-y-2 border-border">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10">
          <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-3">
            {service} DJ per plaats
          </div>
          <h2 className="text-3xl md:text-5xl leading-[0.95] mb-4" style={{ fontFamily: "var(--font-display)" }}>
            {service} DJ in heel Nederland
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Boek een {lowercase} DJ in jouw stad of dorp. Bekijk hieronder de pagina van jouw plaats of het complete <Link to="/regios" className="text-secondary underline hover:text-primary">werkgebied per provincie</Link>.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
          {ALL_LOCATIONS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full bg-background border-2 border-border text-foreground px-4 py-2 text-xs tracking-[0.1em] uppercase font-bold hover:border-primary transition"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/regios"
            className="rounded-full bg-background border-2 border-secondary text-secondary px-4 py-2 text-xs tracking-[0.1em] uppercase font-bold hover:bg-secondary hover:text-secondary-foreground transition"
          >
            Alle plaatsen
          </Link>
        </div>
      </div>
    </section>
  );
}
