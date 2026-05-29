import { Link } from "@tanstack/react-router";

export function ContactCta({
  title = "Tijd voor een volle dansvloer.",
  subtitle = "Vraag vrijblijvend een offerte aan of stuur direct een appje. Reactie binnen 24 uur, gegarandeerd.",
}: { title?: React.ReactNode; subtitle?: React.ReactNode }) {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-5 sm:px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-warm)" }} />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle, oklch(0 0 0 / 0.15) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="text-primary-foreground text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase font-bold mb-4">Boek Kevin</div>
        <h2 className="text-4xl sm:text-5xl md:text-7xl leading-[0.95] sm:leading-[0.9] text-background" style={{ fontFamily: "var(--font-display)" }}>
          {title}
        </h2>
        <p className="mt-5 sm:mt-6 text-base sm:text-lg text-background/85 max-w-xl mx-auto">{subtitle}</p>
        <div className="mt-7 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center">
          <Link to="/contact" className="rounded-full bg-background text-foreground px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-[0.15em] uppercase font-bold hover:bg-foreground hover:text-background transition">
            Offerte aanvragen
          </Link>
          <a href="tel:+31645251333" className="rounded-full border-2 border-background text-background px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-[0.15em] uppercase font-bold hover:bg-background hover:text-foreground transition">
            Bellen
          </a>
          <a href="https://wa.me/31645251333" className="rounded-full border-2 border-background text-background px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-[0.15em] uppercase font-bold hover:bg-background hover:text-foreground transition">
            App direct
          </a>
        </div>
      </div>
    </section>
  );
}