import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { ServiceCityIndex } from "@/components/ServiceCityIndex";
import { Faq } from "@/components/Faq";
import { ReviewStrip } from "@/components/ReviewBadge";
import { breadcrumb, buildSeo, faqPage, service, type FaqItem } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-bedrijfsfeest.webp";

const FAQ: FaqItem[] = [
  { q: "Draai je personeelsfeesten, jubilea en bedrijfsevents?", a: "Ja, van borrel en personeelsfeest tot jubileum en corporate event." },
  { q: "Kun je het programma aan elkaar presenteren?", a: "Ja, als DJ en MC verzorg ik ook aankondigingen en momenten op het podium." },
  { q: "Neem je eigen licht en geluid mee?", a: "Ja, een complete show is inbegrepen, geschikt voor zowel kleine als grote zalen." },
  { q: "Voor welke bedrijven heb je gedraaid?", a: "Onder andere voor Heineken, Jumbo, Albert Heijn, KPN, Van der Valk en Feyenoord Rotterdam." },
  { q: "In welk gebied draai je bedrijfsfeesten?", a: "Door heel Nederland." },
];

export const Route = createFileRoute("/zakelijk-dj")({
  head: () => buildSeo({
    title: "Bedrijfsfeest DJ huren | Zakelijk DJ | Kevin Froger",
    description: "Personeelsfeest, jubileum of netwerkevent? Kevin levert DJ, licht en geluid en houdt de vloer vol. Vraag een offerte aan.",
    path: "/zakelijk-dj",
    image: IMG,
    jsonLd: [
      service({
        name: "Bedrijfsfeest en zakelijk DJ",
        serviceType: "Corporate Event DJ",
        description: "DJ voor bedrijfsfeesten, jubilea, personeelsfeesten, netwerkevents en productlanceringen. Complete show met licht en geluid, MC services, factuur op naam.",
        path: "/zakelijk-dj",
        image: IMG,
      }),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Bedrijfsfeest DJ", path: "/zakelijk-dj" },
      ]),
      faqPage(FAQ),
    ],
  }),
  component: Page,
});

const HIGHLIGHTS = [
  { t: "Borrel en netwerken", d: "Achtergrondmuziek tijdens netwerken en speeches, zonder dat gesprekken overstemd worden." },
  { t: "Diner", d: "Subtiele set tijdens het eten. Geen lounge-cliché, maar muziek die past bij het tempo van de avond." },
  { t: "Feestavond", d: "Opbouw van classics naar dance en top 40. De dansvloer loopt vanzelf vol, ongeacht het gezelschap." },
  { t: "MC services", d: "Aankondiging van speeches, awards en presentaties. Strak getimed, in lijn met het programma." },
  { t: "Factuur op naam", d: "Zakelijke offerte en facturatie, BTW-conform. Eén aanspreekpunt voor alles wat met muziek te maken heeft." },
  { t: "Themafeest", d: "Jaren 80, Italo disco, festival, aprèsski. Themasets volledig op maat van jullie concept." },
];

function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />
      <PageHero
        eyebrow="Bedrijfsfeest DJ"
        title={<>Bedrijfsfeest DJ<br/><span className="text-primary">die de vloer vol houdt.</span></>}
        intro="Een goed bedrijfsfeest blijft hangen bij je collega's en relaties. Ik verzorg personeelsfeesten, jubilea, netwerkevents, productlanceringen en teambuilding. Inclusief licht, geluid en presentatie."
        image={IMG}
        imageAlt="DJ Kevin Froger op een bedrijfsfeest"
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Bedrijfsfeest DJ", path: "/zakelijk-dj" }]}
      />

      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Compleet pakket</div>
            <h2 className="text-4xl md:text-6xl leading-[0.9]" style={{ fontFamily: "var(--font-display)" }}>Eén leverancier, alles geregeld</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Ik lever een complete show met licht en geluid en stem de muziek af op het gezelschap, zodat zowel de directie als de jongere collega's zich vermaken. Als DJ en MC in een persoon kan ik ook de presentatie verzorgen, bijvoorbeeld bij een opening, een prijsuitreiking of een toespraak. Van intake tot nazorg heb je een vast aanspreekpunt, dus jij hoeft de muziek en het programma niet zelf te regelen.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HIGHLIGHTS.map((h) => (
              <div key={h.t} className="rounded-2xl border-2 border-border bg-card p-7 hover:border-primary transition-colors">
                <h3 className="text-2xl mb-3" style={{ fontFamily: "var(--font-display)" }}>{h.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{h.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10 bg-card border-y-2 border-border">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Vertrouwd door</div>
            <h2 className="text-4xl md:text-6xl leading-[0.9]" style={{ fontFamily: "var(--font-display)" }}>Merken die<br/><span className="text-primary">terugkomen.</span></h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Onder andere Heineken, Jumbo, Albert Heijn, Makro, Bol.com, KPN, Van der Valk, Feyenoord, Sparta Rotterdam, Dutch Grand Prix, Circuit Zandvoort, Roparun, de Koninklijke Landmacht, de Politie, Hogeschool Rotterdam, Flügel, Pupa Milano, YourSurprise, Voorwinden en Modern Nerdplace. Wat ze gemeen hebben: een dag met meerdere programmaonderdelen, een gemengd gezelschap en geen ruimte voor losse eindjes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/dj-en-mc" className="rounded-full border-2 border-secondary text-secondary px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:bg-secondary hover:text-secondary-foreground transition">DJ en MC</Link>
              <Link to="/prijzen" className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">Prijsindicatie</Link>
              <Link to="/regios" className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">Werkgebied</Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-border aspect-[4/5]">
            <img src="/images/dj-kevin-froger-bedrijfsfeest-lichtshow-1280.webp" alt="Sfeervol bedrijfsfeest met lichtshow" className="w-full h-full object-cover" loading="lazy" width={1280} height={718} />
          </div>
        </div>
      </section>

      <ServiceCityIndex service="Bedrijfsfeest" collapsible />
      <ReviewStrip text="Opdrachtgevers waarderen mijn werk met een 5,0 op Google." />
      <Faq items={FAQ} />
      <ContactCta />
      <SiteFooter />
    </main>
  );
}
