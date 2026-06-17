import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { ServiceCityIndex } from "@/components/ServiceCityIndex";
import { Faq } from "@/components/Faq";
import { ReviewStrip } from "@/components/ReviewBadge";
import { breadcrumb, buildSeo, faqPage, service, type FaqItem } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";

const FAQ: FaqItem[] = [
  { q: "Draai je de hele dag, van ceremonie tot feestavond?", a: "Ja. Ik verzorg achtergrondmuziek bij binnenkomst en diner, begeleid de openingsdans en bouw daarna de feestavond op naar een volle dansvloer." },
  { q: "Verzorg je licht en geluid zelf?", a: "Ja, ik kom met een complete show inclusief geluidsset en sfeerverlichting. Je hoeft geen aparte leverancier te regelen." },
  { q: "Ben je ook MC of presentator?", a: "Ja, ik ben DJ en MC in een persoon. Aankondigingen, toespraken en programmaonderdelen praat ik netjes aan elkaar." },
  { q: "In welke regio's draai je bruiloften?", a: "Door heel Nederland, met veel ervaring in de Betuwe, Bommelerwaard, Hoeksche Waard en Zuid-Holland." },
  { q: "Hoe ver van tevoren moet ik boeken?", a: "Populaire data raken vroeg vol. Check je datum zo vroeg mogelijk; ik reageer binnen 24 uur." },
  { q: "Werk je met een vaste afspeellijst?", a: "Nee. Ik lees de zaal en bouw de avond ter plekke op, afgestemd op jullie gasten en wensen." },
];

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
      faqPage(FAQ),
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
        title={<>Bruiloft DJ huren<br/><span className="text-primary">voor jullie hele dag.</span></>}
        intro="Jullie trouwdag draait om sfeer, en muziek bepaalt die sfeer voor een groot deel. Als bruiloft DJ verzorg ik de hele dag, van de ceremonie tot de laatste plaat."
        image={IMG}
        imageAlt="DJ Kevin Froger achter zijn set tijdens een bruiloft"
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Bruiloft DJ", path: "/bruiloft-dj" }]}
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
              <Link to="/dj-en-mc" className="rounded-full border-2 border-secondary text-secondary px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:bg-secondary hover:text-secondary-foreground transition">DJ en MC</Link>
              <Link to="/prijzen" className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">Prijsindicatie</Link>
              <Link to="/reviews" className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">Reviews</Link>
              <Link to="/blog/$slug" params={{ slug: "wat-kost-dj-bruiloft" }} className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">Wat kost een DJ?</Link>
              <Link to="/blog/$slug" params={{ slug: "openingsdans-nummers" }} className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">Openingsdans nummers</Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-border aspect-[4/5]">
            <img src="/images/dj-kevin-froger-prive-feest-1280.webp" alt="Sfeervolle bruiloftslocatie met dansvloer" className="w-full h-full object-cover" loading="lazy" width={1280} height={427} />
          </div>
        </div>
      </section>

      <ServiceCityIndex
        service="Bruiloft"
        collapsible
        intro="Ik draai bruiloften door heel Nederland, met veel ervaring in de Betuwe, Bommelerwaard, Hoeksche Waard en Zuid-Holland. Voor jouw plaats kom ik graag mee."
      />
      <ReviewStrip text="Bruidsparen waarderen mijn werk met een 5,0 op Google." />
      <Faq items={FAQ} />
      <ContactCta title={<>Klaar om jullie<br/>datum te checken?</>} subtitle="App of bel ons met jullie datum en locatie. Reactie binnen 24 uur." />
      <SiteFooter />
    </main>
  );
}
