import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { ServiceCityIndex } from "@/components/ServiceCityIndex";
import { breadcrumb, buildSeo, service } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-prive-feest.jpeg";

export const Route = createFileRoute("/verjaardag-dj")({
  head: () => buildSeo({
    title: "Feest & verjaardag DJ huren | DJ Kevin Froger",
    description: "Verjaardag of feest? Kevin draait allround en houdt de vloer vol, van familiefeest tot groot verjaardagsfeest. Vraag een offerte aan.",
    path: "/verjaardag-dj",
    image: IMG,
    jsonLd: [
      service({
        name: "Verjaardag en feest DJ",
        serviceType: "Private Party DJ",
        description: "Allround DJ voor verjaardagen, familiefeesten en privé-events. Inclusief licht, geluid en MC. Gasten kunnen verzoekjes doen, ik bouw de avond op naar een volle dansvloer.",
        path: "/verjaardag-dj",
        image: IMG,
      }),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Feest DJ", path: "/verjaardag-dj" },
      ]),
    ],
  }),
  component: Page,
});

const OCC = [
  { t: "Verjaardag", d: "Van 30 tot 70 jaar. Muziek die past bij jou en je gasten, met persoonlijke verzoekjes verwerkt in een set die werkt." },
  { t: "Familiefeest", d: "Reünies, jubilea, doopfeesten. Een mix die werkt voor alle generaties, van kinderen tot grootouders." },
  { t: "Themafeest", d: "Jaren 80, Ibiza, festival, Bourgondisch. Themasets met bijpassende verlichting voor de juiste sfeer." },
  { t: "Tuinfeest", d: "Compacte set-up die ook outdoor werkt. Geluid hard genoeg voor de gasten, niet de hele buurt." },
];

function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />
      <PageHero
        eyebrow="Feest en verjaardag DJ"
        title={<>Jouw verjaardag,<br/><span className="text-primary">jouw gasten.</span></>}
        intro="Een verjaardag of feest wordt pas echt leuk als de muziek klopt en de dansvloer vol staat. Ik draai allround, van Nederlandstalig en classics tot top 40 en dance, afgestemd op jouw gasten."
        image={IMG}
        imageAlt="DJ Kevin Froger draait een verjaardagsfeest"
      />

      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Voor elk type feest</div>
            <h2 className="text-4xl md:text-6xl leading-[0.9]" style={{ fontFamily: "var(--font-display)" }}>Een DJ die past</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Of het nu een gezellig feest thuis is of een groot verjaardagsfeest in een zaal, ik pas me aan. Ik kom met een complete set, dus licht en geluid zijn geregeld. Gasten kunnen verzoekjes doen en ik hou een microfoon bij de hand voor een speech of een toost. Als DJ en MC in een persoon hou ik het verloop in de gaten, zodat de avond lekker doorloopt.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OCC.map((o) => (
              <div key={o.t} className="rounded-2xl border-2 border-border bg-card p-6 hover:border-primary transition-colors">
                <h3 className="text-xl mb-3" style={{ fontFamily: "var(--font-display)" }}>{o.t}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10 bg-card border-y-2 border-border">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Werkgebied</div>
          <h2 className="text-4xl md:text-5xl leading-[0.9] mb-6" style={{ fontFamily: "var(--font-display)" }}>Feest DJ door heel Nederland</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Voor verjaardagen en feesten kom ik in heel Nederland, met extra veel boekingen in de Betuwe, Bommelerwaard, Hoeksche Waard en Zuid-Holland. Wil je weten of ik op jouw datum kan? App of bel ons.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/prijzen" className="rounded-full border-2 border-secondary text-secondary px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:bg-secondary hover:text-secondary-foreground transition">Prijzen</Link>
            <Link to="/werkwijze" className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">Werkwijze</Link>
            <Link to="/regios" className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">Werkgebied</Link>
          </div>
        </div>
      </section>

      <ServiceCityIndex service="Feest" />
      <ContactCta />
      <SiteFooter />
    </main>
  );
}
