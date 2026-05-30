import { createFileRoute, Link } from "@tanstack/react-router";
import { LocationLayout } from "@/components/LocationLayout";
import { breadcrumb, buildSeo, service } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";

export const Route = createFileRoute("/dj-boeken-tiel")({
  head: () => buildSeo({
    title: "Bruiloft DJ Tiel | Ervaren trouw-DJ | Kevin Froger",
    description: "Bruiloft of feest in Tiel of de Betuwe? Kevin draait jullie dag aan elkaar, van ceremonie tot de laatste plaat. Vraag een offerte aan.",
    path: "/dj-boeken-tiel",
    image: IMG,
    jsonLd: [
      service({
        name: "Bruiloft DJ Tiel",
        serviceType: "Wedding DJ Tiel",
        description: "Allround DJ voor bruiloft en feest in Tiel en de Betuwe. Complete show met licht en geluid, DJ en MC in een persoon.",
        path: "/dj-boeken-tiel",
        image: IMG,
      }),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Werkgebied", path: "/regios" },
        { name: "Tiel", path: "/dj-boeken-tiel" },
      ]),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LocationLayout
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Werkgebied", path: "/regios" }, { name: "Tiel", path: "/dj-boeken-tiel" }]}
      eyebrow="Tiel"
      heroTitle={<>DJ huren<br/><span className="text-primary">in Tiel.</span></>}
      heroIntro="Tiel is voor mij een vast punt in de Betuwe. Ik draai er regelmatig en ben snel ter plaatse, ook voor de omliggende dorpen zoals Tuil, Ophemert, Varik en Zoelen."
      heroImage={IMG}
      heroImageAlt="DJ Kevin Froger draait een bruiloft in Tiel"
      related={[
        { to: "/dj-boeken-betuwe", label: "Hele Betuwe" },
        { to: "/dj-boeken-culemborg", label: "Culemborg" },
        { to: "/dj-boeken-geldermalsen", label: "Geldermalsen" },
      ]}
    >
      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Bruiloft, feest of zakelijk</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        Of het nu een bruiloft is in een zaal aan de Linge of een feest in een schuur tussen de boomgaarden, ik zorg voor de muziek en een volle dansvloer. Ik werk allround, dus ik draai wat jouw gasten leuk vinden: een mix van classics, Nederlandstalig, top 40 en dance, opgebouwd naar de sfeer van het moment.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Geen vaste lijst die ik afdraai, maar een avond die meebeweegt met je publiek. Voor een <Link to="/bruiloft-dj" className="text-secondary underline hover:text-primary">trouwdag</Link> of <Link to="/verjaardag-dj" className="text-secondary underline hover:text-primary">verjaardag</Link> bouw ik de set op vanuit jullie wensen.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>DJ en MC in een persoon</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Als DJ en MC in een persoon kan ik ook de presentatie verzorgen, handig bij een ceremonie, een toost of een spelelement. Licht en geluid neem ik zelf mee, dus jij hoeft alleen te genieten.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Ook in de dorpen rond Tiel</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Tiel ligt centraal in de Betuwe en het Rivierenland, dus ik draai net zo makkelijk in de dorpen eromheen. Denk aan Wadenoijen, Zoelen, Kapel-Avezaath, Kerk-Avezaath en richting Buren.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Aan de westkant van Tiel: <strong className="text-foreground">Tuil, Ophemert, Varik en Heesselt</strong>, allemaal langs de Waal. Voor bruiloften op kleine landelijke locaties of feesten in zaaltjes ben ik vaak in dit gebied.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Verder de Betuwe in: Kesteren, Opheusden, Ochten, Dodewaard, Maurik, Lienden, Eck en Wiel en Ingen. Allemaal binnen een half uurtje rijden vanuit Tiel.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Datum checken</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Bel of app ons voor je datum. Of bekijk eerst de <Link to="/prijzen" className="text-secondary underline hover:text-primary">prijzen</Link>.
      </p>
    </LocationLayout>
  );
}
