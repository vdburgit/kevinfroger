import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { ServiceCityIndex } from "@/components/ServiceCityIndex";
import { breadcrumb, buildSeo, service } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-festival.webp";

export const Route = createFileRoute("/festival-dj")({
  head: () => buildSeo({
    title: "Festival DJ huren | Energieke sets | Kevin Froger",
    description: "Festival of groot evenement? Kevin draait energieke sets vol crowd control en presentatie. Check beschikbaarheid en boek je slot.",
    path: "/festival-dj",
    image: IMG,
    jsonLd: [
      service({
        name: "Festival DJ",
        serviceType: "Festival DJ",
        description: "Strakke festivalsets met crowd control en MC. Allround, schakelt makkelijk tussen genres. Flexibel met tijdsloten van 60 minuten of langer.",
        path: "/festival-dj",
        image: IMG,
      }),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Festival DJ", path: "/festival-dj" },
      ]),
    ],
  }),
  component: Page,
});

const STYLES = [
  { t: "Power set", d: "60 minuten non-stop. Hoge BPM, strakke transities, geen pauzes. Het publiek heeft geen tijd om weg te lopen." },
  { t: "Crowd control", d: "Lezen van de massa, opbouwen en uitlopen op het juiste moment. Energie bouwt op, blijft en escaleert." },
  { t: "MC en presentatie", d: "Microfoonwerk, acts aankondigen, het podium aan elkaar praten. Geen schreeuwer, wel een aanjager." },
  { t: "Allround schakelen", d: "Van dance naar mainstream, top 40, classics of aprèsski, afhankelijk van publiek en tijdslot." },
];

function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />
      <PageHero
        eyebrow="Festival DJ"
        title={<>60 minuten<br/><span className="text-primary">non-stop.</span></>}
        intro="Op een festival of groot evenement moet de energie meteen staan. Ik draai strakke sets die het publiek meenemen, met crowd control en presentatie. Of het nu een set van 60 minuten is of een langer blok."
        image={IMG}
        imageAlt="DJ Kevin Froger op een festival: verlicht hoofdpodium met vuurwerk en een juichende dansende menigte"
      />

      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Wat je krijgt</div>
            <h2 className="text-4xl md:text-6xl leading-[0.9]" style={{ fontFamily: "var(--font-display)" }}>Een set die staat</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Ik speel in op de massa en hou de spanning erin. Allround, dus ik schakel makkelijk tussen genres afhankelijk van het publiek en het moment. Als DJ en MC in een persoon kan ik ook het podium aan elkaar praten en acts aankondigen. Flexibel met tijdsloten, zodat ik in jouw programma pas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STYLES.map((s) => (
              <div key={s.t} className="rounded-2xl border-2 border-border bg-card p-6 hover:border-primary transition-colors">
                <h3 className="text-xl mb-3" style={{ fontFamily: "var(--font-display)" }}>{s.t}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10 bg-card border-y-2 border-border">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Eerdere podia</div>
          <h2 className="text-4xl md:text-5xl leading-[0.9] mb-6" style={{ fontFamily: "var(--font-display)" }}>Onder andere</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Dutch Grand Prix, Circuit Zandvoort, festivals en aprèsski-events door Nederland. Zowel mainstage als after-events.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link to="/prijzen" className="rounded-full border-2 border-secondary text-secondary px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:bg-secondary hover:text-secondary-foreground transition">Prijzen</Link>
            <Link to="/reviews" className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">Reviews</Link>
            <Link to="/contact" className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">Slot boeken</Link>
          </div>
        </div>
      </section>

      <ServiceCityIndex service="Festival" />
      <ContactCta title={<>Boek je<br/>festivalslot.</>} subtitle="App of bel ons met datum, locatie en gewenst tijdslot. Reactie binnen 24 uur." />
      <SiteFooter />
    </main>
  );
}
