import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { SITE_URL, breadcrumb, buildSeo } from "@/lib/seo";

const IMG = "/images/licht-en-geluid-verhuur-show.jpeg";

export const Route = createFileRoute("/biografie")({
  head: () => buildSeo({
    title: "Biografie DJ Kevin Froger | 15+ jaar achter de knoppen",
    description: "Het verhaal van DJ Kevin Froger. Van eerste schoolfeesten tot bruiloften, bedrijfsfeesten en festivals door heel Nederland.",
    path: "/biografie",
    image: IMG,
    type: "profile",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        mainEntity: {
          "@type": "Person",
          "@id": `${SITE_URL}/#kevin`,
          name: "Kevin Froger",
          jobTitle: "Allround DJ",
          description: "Allround DJ met 15+ jaar ervaring. Bruiloften, bedrijfsfeesten, verjaardagen en festivals door heel Nederland.",
          url: `${SITE_URL}/biografie`,
          image: `${SITE_URL}${IMG}`,
          worksFor: { "@id": `${SITE_URL}/#business` },
        },
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Biografie", path: "/biografie" },
      ]),
    ],
  }),
  component: Page,
});

const TIMELINE = [
  { y: "2009", t: "Eerste set", d: "Schoolfeest in de regio. Het begin van een onomkeerbare voorliefde voor dansvloeren." },
  { y: "2012", t: "Eerste bruiloft", d: "Sindsdien een vast onderdeel van mijn werk, eerst regionaal en daarna door het hele land." },
  { y: "2016", t: "Corporate jaren", d: "Vaste DJ voor merken als Heineken, Jumbo en Van der Valk." },
  { y: "2019", t: "Festivalpodia", d: "Sets op Dutch Grand Prix, Circuit Zandvoort en diverse aprèsski-events." },
  { y: "2023", t: "Eigen show set-up", d: "Volledige investering in eigen licht- en geluidssysteem voor complete shows zonder externe partijen." },
  { y: "Nu", t: "Allround specialist", d: "Van bruiloft tot festival, van borrel tot main stage. Een DJ voor elk feest." },
];

function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />
      <PageHero
        eyebrow="Biografie"
        title={<>15+ jaar<br/><span className="text-primary">achter de knoppen.</span></>}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Biografie", path: "/biografie" }]}
        intro="DJ-en begon voor mij als hobby in de slaapkamer en groeide uit tot een carrière. Inmiddels draai ik feesten voor merken, bruidsparen en festivalbezoekers door heel Nederland, met veel ervaring in de Betuwe, Bommelerwaard, Hoeksche Waard en Zuid-Holland."
        image={IMG}
        imageAlt="DJ Kevin Froger met volledige show set-up"
      />

      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Verhaal</div>
          <h2 className="text-4xl md:text-6xl leading-[0.9] mb-8" style={{ fontFamily: "var(--font-display)" }}>Het draait om<br/><span className="text-primary">het moment.</span></h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>Ik geloof niet in standaardplaylists. Elke avond is anders, elk publiek is anders, en het is mijn taak om dat verschil te horen en daarop te reageren. Live mixing is voor mij de enige manier waarop ik wil werken.</p>
            <p>Dat principe combineer ik met een nuchtere, zakelijke aanpak: heldere afspraken, op tijd opbouwen, backup-apparatuur in de auto en directe communicatie met de organisatie. Geen drama, wel resultaat.</p>
            <p>Inmiddels draai ik regelmatig door het hele land, van intieme bruiloften tot grotere festivals. Wat ze gemeen hebben: een avond waar de muziek precies past en de mensen blijven dansen.</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10 bg-card border-y-2 border-border">
        <div className="max-w-3xl mx-auto">
          <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Tijdlijn</div>
          <h2 className="text-4xl md:text-6xl leading-[0.9] mb-12" style={{ fontFamily: "var(--font-display)" }}>Hoe het ging</h2>
          <ol className="space-y-8 border-l-2 border-border pl-8">
            {TIMELINE.map((item) => (
              <li key={item.y} className="relative">
                <span className="absolute -left-[42px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <div className="text-secondary text-xs tracking-[0.3em] uppercase font-bold">{item.y}</div>
                <h3 className="text-2xl md:text-3xl mt-1" style={{ fontFamily: "var(--font-display)" }}>{item.t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{item.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <Link to="/contact" className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:opacity-90 transition">Boek Kevin</Link>
          </div>
        </div>
      </section>

      <ContactCta />
      <SiteFooter />
    </main>
  );
}