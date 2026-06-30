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

// Klantlogo's. Heineken, KPN en Feyenoord vooraan, daarna een aantal bekende
// namen. Logo's bestaan al in /public/images/logos.
const LOGOS = [
  { src: "/images/logos/heineken.webp", alt: "Heineken", w: 240, h: 125 },
  { src: "/images/logos/kpn.webp", alt: "KPN", w: 240, h: 240 },
  { src: "/images/logos/feyenoord-rotterdam.webp", alt: "Feyenoord Rotterdam", w: 240, h: 240 },
  { src: "/images/logos/jumbo.webp", alt: "Jumbo", w: 240, h: 240 },
  { src: "/images/logos/van-der-valk.webp", alt: "Van der Valk", w: 240, h: 125 },
  { src: "/images/logos/makro.webp", alt: "Makro", w: 240, h: 125 },
];

const FAQ: FaqItem[] = [
  { q: "Draai je personeelsfeesten, jubilea en bedrijfsevents?", a: "Ja. Van een borrel of personeelsfeest tot een jubileum, kerstborrel, nieuwjaarsborrel of een opening. Ik stem de muziek af op het moment: rustig tijdens het netwerken en vol op de dansvloer als het feest losbarst." },
  { q: "Kun je het programma aan elkaar presenteren?", a: "Ja, als DJ en MC verzorg ik ook de aankondigingen en momenten op het podium, zoals een speech, een prijsuitreiking of een aftrap. Geen losse presentator nodig." },
  { q: "Neem je eigen licht en geluid mee?", a: "Ja, een complete show is inbegrepen, geschikt voor zowel een kleine borrelruimte als een grote zaal. Jullie hoeven geen aparte techniek te regelen." },
  { q: "Voor welke bedrijven heb je gedraaid?", a: "Onder andere voor Heineken, Jumbo, Albert Heijn, KPN, Van der Valk en Feyenoord Rotterdam." },
  { q: "Hoe laat begin je en hoelang draai je?", a: "In overleg. Ik kom ruim op tijd voor opbouw en soundcheck, en draai zo lang als nodig. De uren leggen we vooraf vast, zonder verrassingen achteraf." },
  { q: "Kunnen collega's verzoekjes doen?", a: "Ja, gasten kunnen verzoekjes doorgeven en ik verwerk ze in de set zonder de sfeer te verliezen." },
  { q: "In welk gebied draai je bedrijfsfeesten?", a: "Door heel Nederland, met veel bedrijfsfeesten in de Randstad, Zuid-Holland, de Drechtsteden en de Betuwe. Op kantoor, in een zaal of op een externe locatie." },
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
  { t: "Diner", d: "Rustige muziek tijdens het eten, die past bij het tempo van de avond." },
  { t: "Feestavond", d: "Opbouw van classics naar dance en top 40. De dansvloer loopt vanzelf vol, ongeacht het gezelschap." },
  { t: "MC services", d: "Aankondiging van speeches, awards en presentaties. Strak getimed, in lijn met het programma." },
  { t: "Factuur op naam", d: "Zakelijke offerte en facturatie, BTW-conform. Eén aanspreekpunt voor alles wat met muziek te maken heeft." },
  { t: "Themafeest", d: "Jaren 80, Italo disco, festival, aprèsski. Themasets volledig op maat van jullie concept." },
  { t: "Personeelsfeest, jubileum of kerstborrel", d: "Of het nu een personeelsfeest, een jubileum of de kerstborrel is: ik stem de muziek en het programma af op de gelegenheid en het gezelschap." },
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

      <section className="py-16 px-5 sm:px-6 lg:px-10">
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

      <section className="py-16 px-5 sm:px-6 lg:px-10 bg-card border-y-2 border-border">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Vertrouwd door</div>
            <h2 className="text-4xl md:text-6xl leading-[0.9]" style={{ fontFamily: "var(--font-display)" }}>Merken die<br/><span className="text-primary">terugkomen.</span></h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Onder andere Heineken, Jumbo, Albert Heijn, Makro, Bol.com, KPN, Van der Valk, Feyenoord, Sparta Rotterdam, Dutch Grand Prix, Circuit Zandvoort, Roparun, de Koninklijke Landmacht, de Politie, Hogeschool Rotterdam, Flügel, Pupa Milano, YourSurprise, Voorwinden en Modern Nerdplace. Wat ze gemeen hebben: een dag met meerdere onderdelen en een gemengd gezelschap, waar de muziek en de aankondigingen moesten kloppen.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-6">
              {LOGOS.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.w}
                  height={logo.h}
                  loading="lazy"
                  className="h-10 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
                />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/dj-en-mc" className="rounded-full border-2 border-secondary text-secondary px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:bg-secondary hover:text-secondary-foreground transition">DJ en MC</Link>
              <Link to="/prijzen" className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">Prijsindicatie</Link>
              <Link to="/reviews" className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">Reviews</Link>
              <Link to="/werkwijze" className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">Werkwijze</Link>
              <Link to="/personeelsfeest-dj" className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">Personeelsfeest DJ</Link>
              <Link to="/feest-op-locatie" className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">Feest op locatie</Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border-2 border-border aspect-[4/3]">
            <img src="/images/dj-kevin-froger-bedrijfsfeest-lichtshow-1280.webp" alt="Sfeervol bedrijfsfeest met lichtshow" className="w-full h-full object-cover" loading="lazy" width={1280} height={718} />
          </div>
        </div>
      </section>

      <ServiceCityIndex service="Bedrijfsfeest" collapsible />
      <ReviewStrip text="Van personeelsborrel tot groot bedrijfsfeest, opdrachtgevers weten me te vinden." />
      <Faq items={FAQ} />
      <ContactCta />
      <SiteFooter />
    </main>
  );
}
