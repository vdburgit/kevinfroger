import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { Faq } from "@/components/Faq";
import { ReviewStrip } from "@/components/ReviewBadge";
import { SITE_URL, aggregateRating, breadcrumb, buildSeo, faqPage, type FaqItem } from "@/lib/seo";

const IMG = "/images/dj-booth-wit-design.webp";

const FAQ: FaqItem[] = [
  { q: "Wat kost een DJ?", a: "Dat hangt af van de duur van de avond, de locatie en je wensen rond licht en geluid. Mijn pakketten starten bij 795 euro voor een compacter feest en 1295 euro voor de complete show. Je krijgt altijd vooraf een heldere offerte." },
  { q: "Wat is de prijs van een DJ inclusief licht en geluid?", a: "Bij mij zit de complete show in de prijs: opbouw, een professionele geluidsset, een lichtshow en mijn rol als DJ en MC. Geen losse posten of verrassingen achteraf." },
  { q: "Zijn er extra kosten, zoals reiskosten?", a: "Reiskosten tot 50 km zijn bij de pakketten inbegrepen. Verder reken ik geen verborgen toeslagen; wat in de offerte staat, is wat je betaalt." },
  { q: "Wat is het verschil tussen de pakketten?", a: "Essential is voor intiemere feesten met een compacte set. Complete is het meestgekozen pakket voor bruiloften en bedrijfsfeesten, met volledig geluid, lichtshow en draadloze microfoons. Show is volledig op maat voor grote events." },
  { q: "Kan ik een pakket aanpassen?", a: "Ja. Je kunt uren toevoegen, modules combineren of een volledig maatpakket aanvragen. Laat me weten wat je in gedachten hebt, dan reken ik het voor je uit." },
  { q: "Hoe vraag ik een prijs op?", a: "App of bel me met je datum, locatie en type feest. Je krijgt binnen 24 uur een vrijblijvende offerte op maat." },
];

const PACKAGES = [
  {
    name: "Essential",
    from: "v.a. €795",
    price: "795",
    desc: "Voor intieme feesten tot ~75 gasten.",
    features: ["DJ-set 4 uur show", "Compacte geluidsset", "Basis sfeerverlichting", "Persoonlijke intake", "Reiskosten t/m 50 km inbegrepen"],
  },
  {
    name: "Complete",
    from: "v.a. €1295",
    price: "1295",
    desc: "Het meest gekozen pakket voor bruiloften en bedrijfsfeesten.",
    features: ["DJ-set 4 uur show", "Volledig geluidssysteem", "Lichtshow met movingheads", "Draadloze microfoons", "Intake + draaiboek", "Reiskosten t/m 50 km inbegrepen"],
    featured: true,
  },
  {
    name: "Show",
    from: "op aanvraag",
    price: null,
    desc: "Festival of large-scale event met complete show.",
    features: ["DJ-set op maat", "Festival-grade geluid", "Complete lichtshow + haze", "MC services", "Backup-DJ optioneel", "Volledig technisch team"],
  },
];

export const Route = createFileRoute("/prijzen")({
  head: () => buildSeo({
    title: "Wat kost een DJ? Betaalbare DJ huren | Kevin Froger",
    description: "Benieuwd wat een DJ kost? Kevin werkt met een eerlijke all-in prijs voor DJ, licht en geluid. Bekijk de tarieven en vraag je datum aan.",
    path: "/prijzen",
    image: IMG,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "DJ-pakketten Kevin Froger",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Hoeksche Waard" },
          { "@type": "AdministrativeArea", name: "Betuwe" },
          { "@type": "Country", name: "Nederland" },
        ],
        url: `${SITE_URL}/prijzen`,
        offers: PACKAGES.filter(p => p.price).map(p => ({
          "@type": "Offer",
          name: p.name,
          description: p.desc,
          priceCurrency: "EUR",
          price: p.price,
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EUR",
            price: p.price,
            valueAddedTaxIncluded: false,
          },
          url: `${SITE_URL}/prijzen`,
        })),
        aggregateRating: aggregateRating(),
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Prijzen", path: "/prijzen" },
      ]),
      faqPage(FAQ),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />
      <PageHero
        eyebrow="Prijzen"
        title={<>Wat kost<br/><span className="text-primary">een DJ?</span></>}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Prijzen", path: "/prijzen" }]}
        intro="Op zoek naar een betaalbare DJ voor je bruiloft of feest? Bij mij weet je vooraf waar je aan toe bent. Ik werk met een eerlijke all-in prijs voor DJ, licht en geluid, zonder verrassingen achteraf."
        image={IMG}
        imageAlt="DJ Kevin Froger booth met sfeerverlichting"
      />

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[800px] mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Wat je betaalt hangt af van de duur van de avond, de locatie en eventuele extra wensen, maar je krijgt altijd een heldere offerte. Goedkoop is niet mijn uitgangspunt, eerlijk wel. Je boekt geen hobbyist, maar een DJ met 15+ jaar ervaring, die de avond strak verzorgt en met je meedenkt. Dat verschil merk je op de dansvloer.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-6">
            In de prijs zit de complete show: opbouw, een professionele geluidsset, een lichtshow en mijn rol als DJ en MC. We bespreken vooraf je wensen, zodat je precies krijgt wat bij jouw feest past.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Indicatie</div>
            <h2 className="text-4xl md:text-6xl leading-[0.9]" style={{ fontFamily: "var(--font-display)" }}>Drie startpunten</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">Iedere offerte wordt op maat gemaakt. Exacte prijs hangt af van locatie, duur en wensen rond licht en geluid.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PACKAGES.map((p) => (
              <div key={p.name} className={`rounded-2xl border-2 p-8 flex flex-col ${p.featured ? "border-primary bg-card relative" : "border-border bg-card"}`}>
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-secondary text-secondary-foreground px-4 py-1 text-xs tracking-[0.2em] uppercase font-bold">Populair</span>
                )}
                <h3 className="text-4xl" style={{ fontFamily: "var(--font-display)" }}>{p.name}</h3>
                <div className="mt-2 text-primary text-xl font-bold">{p.from}</div>
                <p className="mt-2 text-muted-foreground">{p.desc}</p>
                <ul className="mt-6 space-y-3 text-sm flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3"><span className="text-secondary">★</span><span>{f}</span></li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-8 rounded-full px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold text-center transition ${p.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"}`}>
                  Offerte aanvragen
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-10 bg-card border-y-2 border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl leading-[0.9]" style={{ fontFamily: "var(--font-display)" }}>Andere wensen?</h2>
          <p className="mt-4 text-muted-foreground">Combineer modules, voeg uren toe of vraag een volledig maatpakket aan. Alles bespreekbaar.</p>
          <p className="mt-6 text-muted-foreground">Wil je een prijsindicatie? Vraag een vrijblijvende offerte aan of app ons, dan reken ik het voor je uit.</p>
        </div>
      </section>

      <ReviewStrip text="Klanten waarderen mijn werk met een 5,0 op Google." />
      <Faq items={FAQ} />
      <ContactCta />
      <SiteFooter />
    </main>
  );
}