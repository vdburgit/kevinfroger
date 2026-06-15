import { createFileRoute, Link } from "@tanstack/react-router";
import { LocationLayout } from "@/components/LocationLayout";
import { breadcrumb, buildSeo, service } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-apreskifeest.webp";

export const Route = createFileRoute("/dj-boeken-betuwe")({
  head: () => buildSeo({
    title: "DJ huren in de Betuwe & Rivierenland | Kevin Froger",
    description: "DJ nodig in de Betuwe? Van Tiel en Culemborg tot Geldermalsen en Zaltbommel. Allround DJ met licht en geluid. Check beschikbaarheid.",
    path: "/dj-boeken-betuwe",
    image: IMG,
    jsonLd: [
      service({
        name: "DJ Betuwe en Rivierenland",
        serviceType: "DJ in Betuwe",
        description: "Allround DJ voor bruiloften, bedrijfsfeesten en verjaardagen in de Betuwe en het Rivierenland. Inclusief licht, geluid en MC.",
        path: "/dj-boeken-betuwe",
        image: IMG,
      }),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Werkgebied", path: "/regios" },
        { name: "Betuwe", path: "/dj-boeken-betuwe" },
      ]),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LocationLayout
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Werkgebied", path: "/regios" }, { name: "Betuwe", path: "/dj-boeken-betuwe" }]}
      eyebrow="Betuwe en Rivierenland"
      heroTitle={<>Allround DJ in de<br/><span className="text-primary">Betuwe.</span></>}
      heroIntro="De Betuwe is een gebied met veel mooie feestplekken, van landelijke trouwlocaties tussen de boomgaarden tot zalen in de dorpskernen. Ik draai er regelmatig, van Tiel tot Zaltbommel en alles ertussen."
      heroImage={IMG}
      heroImageAlt="DJ Kevin Froger met complete show in de Betuwe"
      related={[
        { to: "/dj-boeken-tiel", label: "Tiel" },
        { to: "/dj-boeken-culemborg", label: "Culemborg" },
        { to: "/dj-boeken-geldermalsen", label: "Geldermalsen" },
        { to: "/dj-boeken-zaltbommel", label: "Zaltbommel" },
      ]}
    >
      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>De hele Betuwe als werkgebied</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Steden in de regio: <Link to="/dj-boeken-tiel" className="text-secondary underline hover:text-primary">Tiel</Link>, <Link to="/dj-boeken-culemborg" className="text-secondary underline hover:text-primary">Culemborg</Link>, <Link to="/dj-boeken-geldermalsen" className="text-secondary underline hover:text-primary">Geldermalsen</Link> en <Link to="/dj-boeken-zaltbommel" className="text-secondary underline hover:text-primary">Zaltbommel</Link>.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        <strong className="text-foreground">West Betuwe</strong>: Beesd, Buurmalsen, Tricht, Meteren, Tuil, Ophemert, Varik, Heesselt, Rumpt, Asch en Erichem. Veel kleine landelijke locaties tussen de boomgaarden.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        <strong className="text-foreground">Rond Tiel en Buren</strong>: Wadenoijen, Zoelen, Kapel-Avezaath, Kerk-Avezaath, Buren en Beusichem. Centrale plek voor bruiloften en bedrijfsfeesten in de hele regio.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        <strong className="text-foreground">Neder-Betuwe en Maas en Waal</strong>: Kesteren, Opheusden, Ochten, Dodewaard, Maurik, Lienden, Eck en Wiel, Ingen, Echteld, Ravenswaaij, en aan de overkant van de Waal: Wamel, Druten en Beneden-Leeuwen.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        In de Betuwe draai ik regelmatig op sfeervolle locaties, en dat zijn soms ook echte kastelen. Zo heb ik al vaak gedraaid op Kasteel Wijenburg in Echteld, een fijne plek waar de juiste muziek goed tot zijn recht komt.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Wat ik breng</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        Wat ik breng is een complete avond. Licht en geluid zitten erbij, ik draai allround, en ik stem de muziek af op jouw gasten in plaats van een standaardlijst af te spelen. Van het diner tot de laatste plaat bouw ik de energie rustig op.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Voor <Link to="/bruiloft-dj" className="text-secondary underline hover:text-primary">bruiloften</Link>, <Link to="/zakelijk-dj" className="text-secondary underline hover:text-primary">bedrijfsfeesten</Link>, <Link to="/verjaardag-dj" className="text-secondary underline hover:text-primary">verjaardagen</Link> en <Link to="/festival-dj" className="text-secondary underline hover:text-primary">festivals</Link> in de Betuwe ben ik je DJ. Als DJ en MC in een verzorg ik desgewenst ook de presentatie.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Datum checken</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Vraag een vrijblijvende offerte aan of app ons. Bekijk eerst de <Link to="/prijzen" className="text-secondary underline hover:text-primary">prijzen</Link>.
      </p>
    </LocationLayout>
  );
}
