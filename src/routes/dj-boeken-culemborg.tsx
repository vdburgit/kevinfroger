import { createFileRoute, Link } from "@tanstack/react-router";
import { LocationLayout } from "@/components/LocationLayout";
import { breadcrumb, buildSeo, service } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";

export const Route = createFileRoute("/dj-boeken-culemborg")({
  head: () => buildSeo({
    title: "DJ Culemborg huren voor feest of bruiloft | Froger",
    description: "Feest of bruiloft in Culemborg? Kevin draait passend bij jouw gasten en houdt de vloer vol. Vraag vrijblijvend een offerte aan.",
    path: "/dj-boeken-culemborg",
    image: IMG,
    jsonLd: [
      service({
        name: "DJ Culemborg",
        serviceType: "DJ in Culemborg",
        description: "Allround DJ voor bruiloft, verjaardag en bedrijfsfeest in Culemborg. Inclusief licht, geluid en MC services.",
        path: "/dj-boeken-culemborg",
        image: IMG,
      }),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Werkgebied", path: "/regios" },
        { name: "Culemborg", path: "/dj-boeken-culemborg" },
      ]),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LocationLayout
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Werkgebied", path: "/regios" }, { name: "Culemborg", path: "/dj-boeken-culemborg" }]}
      eyebrow="Culemborg"
      heroTitle={<>DJ huren<br/><span className="text-primary">in Culemborg.</span></>}
      heroIntro="Culemborg is een sfeervolle stad aan de Lek, met genoeg mooie plekken voor een feest. Ik draai er regelmatig, en ook in de omliggende dorpen Beusichem, Ravenswaaij, Eck en Wiel en Ingen."
      heroImage={IMG}
      heroImageAlt="DJ Kevin Froger op een bruiloft in Culemborg"
      related={[
        { to: "/dj-boeken-betuwe", label: "Hele Betuwe" },
        { to: "/dj-boeken-geldermalsen", label: "Geldermalsen" },
        { to: "/dj-boeken-tiel", label: "Tiel" },
      ]}
    >
      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Complete avond</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Voor je bruiloft, verjaardag of bedrijfsfeest breng ik een complete avond mee. Licht en geluid zijn geregeld, ik draai allround en bouw de set op naar de sfeer van het moment. Geen vaste lijst, maar muziek die meebeweegt met jouw gasten.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>DJ en MC in een persoon</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Als DJ en MC in een persoon kan ik ook de presentatie verzorgen, bijvoorbeeld bij een ceremonie of een toost. Zo blijft alles bij een aanspreekpunt. Voor een <Link to="/bruiloft-dj" className="text-secondary underline hover:text-primary">trouwdag</Link> of <Link to="/verjaardag-dj" className="text-secondary underline hover:text-primary">verjaardag</Link> in Culemborg ben ik je DJ.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Culemborg en de regio</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Vanuit Culemborg ben ik snel bij omliggende dorpen: Beusichem, Asch, Ravenswaaij, Eck en Wiel, Ingen en Maurik. Allemaal binnen handbereik voor een feest of bruiloft.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Richting de West Betuwe zit ik in <Link to="/dj-boeken-geldermalsen" className="text-secondary underline hover:text-primary">Geldermalsen</Link>, Beesd, Tricht en Meteren. Of bekijk de hele <Link to="/dj-boeken-betuwe" className="text-secondary underline hover:text-primary">Betuwe-pagina</Link>.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Datum prikken</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Benieuwd naar de mogelijkheden voor jouw datum? App ons of vraag een offerte aan. Bekijk eerst de <Link to="/prijzen" className="text-secondary underline hover:text-primary">prijzen</Link> en <Link to="/reviews" className="text-secondary underline hover:text-primary">reviews</Link>.
      </p>
    </LocationLayout>
  );
}
