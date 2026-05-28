import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { ServiceCityIndex } from "@/components/ServiceCityIndex";
import { breadcrumb, buildSeo, service } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";

export const Route = createFileRoute("/bruiloft-dj")({
  head: () => buildSeo({
    title: "Bruiloft DJ huren | Trouw-DJ met show | Kevin Froger",
    description: "Bruiloft DJ nodig? Van ceremonie en diner tot de eerste dans en feestavond. Kevin draait jullie dag aan elkaar. Check je datum.",
    path: "/bruiloft-dj",
    image: IMG,
    jsonLd: [
      service({
        name: "Bruiloft DJ",
        serviceType: "Wedding DJ",
        description: "Allround DJ voor jullie hele trouwdag: ceremonie, diner, openingsdans en feestavond. Inclusief licht, geluid en MC services. Voor bruiloften door heel Nederland.",
        path: "/bruiloft-dj",
        image: IMG,
      }),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Bruiloft DJ", path: "/bruiloft-dj" },
      ]),
    ],
  }),
  component: Page,
});

const BLOCKS = [
  { t: "Ceremonie en diner", d: "Achtergrondmuziek tijdens binnenkomst en diner. Draadloze microfoons voor toespraken en jullie eigen songs op de juiste momenten." },
  { t: "Openingsdans", d: "Begeleiding van jullie eerste dans op een originele track of een mix die we samen kiezen." },
  { t: "Feestavond", d: "Allround set die meebeweegt met de gasten. Van Nederlandstalig en classics tot top 40 en dance, opgebouwd naar een volle vloer." },
  { t: "DJ en MC in een", d: "Aankondigingen, toespraken en programmaonderdelen netjes aan elkaar, zonder losse presentator." },
  { t: "Eigen licht en geluid", d: "Complete show met geluidsset en sfeerverlichting. Geen aparte leverancier nodig." },
  { t: "Vast aanspreekpunt", d: "Van intake tot nazorg hebben jullie direct contact met mij. Eén lijntje voor alles wat met muziek te maken heeft." },
];

function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />
      <PageHero
        eyebrow="Bruiloft DJ"
        title={<>Jullie trouwdag,<br/><span className="text-primary">van begin tot eind.</span></>}
        intro="Jullie trouwdag draait om sfeer, en muziek bepaalt die sfeer voor een groot deel. Als bruiloft DJ verzorg ik de hele dag, van de ceremonie tot de laatste plaat."
        image={IMG}
        imageAlt="DJ Kevin Froger achter zijn set tijdens een bruiloft"
      />

      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Bruiloft DJ met complete show</div>
            <h2 className="text-4xl md:text-6xl leading-[0.9]" style={{ fontFamily: "var(--font-display)" }}>Een avond die meebeweegt</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Ik draai de muziek bij het binnenkomen, begeleid het diner met passende achtergrondmuziek en zorg dat de eerste dans precies goed valt. Daarna bouw ik de feestavond op naar een volle dansvloer. Ik draai allround en lees jullie gasten, dus van de oma's tot de vrienden gaat iedereen los op het juiste moment. Geen vaste lijst, maar een avond die meebeweegt.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLOCKS.map((b) => (
              <div key={b.t} className="rounded-2xl border-2 border-border bg-card p-7 hover:border-primary transition-colors">
                <h3 className="text-2xl mb-3" style={{ fontFamily: "var(--font-display)" }}>{b.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10 bg-card border-y-2 border-border">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Persoonlijk</div>
            <h2 className="text-4xl md:text-6xl leading-[0.9]" style={{ fontFamily: "var(--font-display)" }}>Geen losse schakels,<br/><span className="text-primary">een aanspreekpunt.</span></h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Vooraf bespreken we jullie muziekwensen, de openingsdans en het draaiboek. Op de dag zelf ben ik er ruim op tijd voor opbouw en soundcheck. Als DJ en MC in een persoon kan ik ook aankondigingen en momenten netjes aan elkaar praten. Licht en geluid neem ik mee, dus jullie hoeven nergens voor te zorgen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/werkwijze" className="rounded-full border-2 border-secondary text-secondary px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:bg-secondary hover:text-secondary-foreground transition">Werkwijze</Link>
              <Link to="/prijzen" className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">Prijsindicatie</Link>
              <Link to="/reviews" className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">Reviews</Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-border aspect-[4/5]">
            <img src="/images/AdobeStock_1026307983-scaled.jpeg" alt="Sfeervolle bruiloftslocatie met dansvloer" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Werkgebied</div>
          <h2 className="text-4xl md:text-5xl leading-[0.9] mb-6" style={{ fontFamily: "var(--font-display)" }}>Bruiloft DJ in heel Nederland</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Ik draai bruiloften door heel Nederland, met veel ervaring in de Betuwe, Bommelerwaard, Hoeksche Waard en Zuid-Holland. Voor jouw plaats kom ik graag mee.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/dj-boeken-hoeksche-waard" className="rounded-full bg-card border-2 border-border text-foreground px-5 py-2 text-xs tracking-[0.15em] uppercase font-bold hover:border-primary transition">Hoeksche Waard</Link>
            <Link to="/dj-boeken-tiel" className="rounded-full bg-card border-2 border-border text-foreground px-5 py-2 text-xs tracking-[0.15em] uppercase font-bold hover:border-primary transition">Tiel</Link>
            <Link to="/dj-boeken-betuwe" className="rounded-full bg-card border-2 border-border text-foreground px-5 py-2 text-xs tracking-[0.15em] uppercase font-bold hover:border-primary transition">Betuwe</Link>
            <Link to="/dj-boeken-dordrecht" className="rounded-full bg-card border-2 border-border text-foreground px-5 py-2 text-xs tracking-[0.15em] uppercase font-bold hover:border-primary transition">Dordrecht</Link>
            <Link to="/regios" className="rounded-full bg-card border-2 border-border text-foreground px-5 py-2 text-xs tracking-[0.15em] uppercase font-bold hover:border-primary transition">Heel werkgebied</Link>
          </div>
        </div>
      </section>

      <ServiceCityIndex service="Bruiloft" />
      <ContactCta title={<>Klaar om jullie<br/>datum te checken?</>} subtitle="App of bel 06-45251333 met jullie datum en locatie. Reactie binnen 24 uur." />
      <SiteFooter />
    </main>
  );
}
