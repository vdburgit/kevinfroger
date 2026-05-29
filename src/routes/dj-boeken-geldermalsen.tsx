import { createFileRoute, Link } from "@tanstack/react-router";
import { LocationLayout } from "@/components/LocationLayout";
import { breadcrumb, buildSeo, service } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";

export const Route = createFileRoute("/dj-boeken-geldermalsen")({
  head: () => buildSeo({
    title: "DJ Geldermalsen & West Betuwe | DJ Kevin Froger",
    description: "DJ huren in Geldermalsen of West Betuwe? Van bruiloft tot bedrijfsfeest, Kevin draait passend bij jouw gasten. Boek je datum vandaag.",
    path: "/dj-boeken-geldermalsen",
    image: IMG,
    jsonLd: [
      service({
        name: "DJ Geldermalsen en West Betuwe",
        serviceType: "DJ in Geldermalsen",
        description: "Allround DJ voor bruiloft, verjaardag en bedrijfsfeest in Geldermalsen en de West Betuwe. Complete show inclusief licht en geluid.",
        path: "/dj-boeken-geldermalsen",
        image: IMG,
      }),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Werkgebied", path: "/regios" },
        { name: "Geldermalsen", path: "/dj-boeken-geldermalsen" },
      ]),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LocationLayout
      eyebrow="Geldermalsen"
      heroTitle={<>DJ huren in<br/><span className="text-primary">Geldermalsen.</span></>}
      heroIntro="Geldermalsen ligt midden in West Betuwe, omringd door dorpen als Beesd, Buurmalsen, Tricht en Meteren. Het is fruitstreek in het kwadraat, met veel landelijke locaties die zich prima lenen voor een feest."
      heroImage={IMG}
      heroImageAlt="DJ Kevin Froger draait een feest in Geldermalsen"
      related={[
        { to: "/dj-boeken-betuwe", label: "Hele Betuwe" },
        { to: "/dj-boeken-culemborg", label: "Culemborg" },
        { to: "/dj-boeken-tiel", label: "Tiel" },
      ]}
    >
      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Complete show</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Ik lever een complete show: licht, geluid en allround muziek, afgestemd op je gasten. Van een rustig begin tijdens het diner tot een vloer die de hele avond vol staat. Voor een <Link to="/bruiloft-dj" className="text-secondary underline hover:text-primary">bruiloft</Link>, <Link to="/zakelijk-dj" className="text-secondary underline hover:text-primary">bedrijfsfeest</Link> of <Link to="/verjaardag-dj" className="text-secondary underline hover:text-primary">verjaardag</Link> ben ik je DJ.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>DJ en MC</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Als DJ en MC in een verzorg ik ook de presentatie als je dat wilt, bijvoorbeeld bij een ceremonie, een toost of een opening. Eén aanspreekpunt voor alles wat met muziek en aankondigingen te maken heeft.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>De West Betuwe in beeld</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Naast Geldermalsen zelf draai ik in <strong className="text-foreground">Beesd, Buurmalsen, Tricht, Meteren, Rumpt, Asch en Erichem</strong>. Allemaal in een handbereik van Geldermalsen.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Via Tiel ben ik ook snel in Wadenoijen, Zoelen en richting Buren. Bekijk de <Link to="/dj-boeken-betuwe" className="text-secondary underline hover:text-primary">Betuwe-pagina</Link> voor de hele regio.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Datum checken</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Via de A15 is West Betuwe goed bereikbaar. App of bel ons om je datum te checken.
      </p>
    </LocationLayout>
  );
}
