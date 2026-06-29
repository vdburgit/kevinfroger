import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { ServiceCityIndex } from "@/components/ServiceCityIndex";
import { Faq } from "@/components/Faq";
import { ReviewStrip } from "@/components/ReviewBadge";
import { breadcrumb, buildSeo, faqPage, service, type FaqItem } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-prive-feest.jpeg";

const FAQ: FaqItem[] = [
  { q: "Draai je verjaardagen en themafeesten?", a: "Ja, van verjaardag en themafeest tot besloten privé-events, altijd op maat van je gasten." },
  { q: "Is licht en geluid inbegrepen?", a: "Ja, ik kom met een complete show, dus je hoeft niets te regelen." },
  { q: "Kun je inspelen op verschillende leeftijden?", a: "Ja, ik draai allround en lees het publiek, zodat iedereen op het juiste moment de dansvloer op gaat." },
  { q: "Draai je ook mijlpaal-verjaardagen zoals een 25e of 50e?", a: "Zeker. Of het nu een 18e, 25e, 50e (Abraham of Sarah) of 60e is, ik stem de muziek af op de leeftijd en de gasten, zodat iedereen de dansvloer op gaat." },
  { q: "In welke plaatsen kom je draaien?", a: "Door heel Nederland." },
];

export const Route = createFileRoute("/verjaardag-dj")({
  head: () => buildSeo({
    title: "Verjaardag DJ huren | Feest DJ | Kevin Froger",
    description: "Verjaardag of feest? Kevin draait allround en houdt de vloer vol, van familiefeest tot groot verjaardagsfeest. Vraag een offerte aan.",
    path: "/verjaardag-dj",
    image: IMG,
    jsonLd: [
      service({
        name: "Verjaardag en feest DJ",
        serviceType: "Private Party DJ",
        description: "Allround DJ voor verjaardagen, familiefeesten en privé-events. Inclusief licht, geluid en MC. Gasten kunnen verzoekjes doen, ik bouw de avond op naar een volle dansvloer.",
        path: "/verjaardag-dj",
        image: IMG,
      }),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Feest DJ", path: "/verjaardag-dj" },
      ]),
      faqPage(FAQ),
    ],
  }),
  component: Page,
});

const OCC = [
  { t: "Verjaardag", d: "Van 30 tot 70 jaar. Muziek die past bij jou en je gasten, met persoonlijke verzoekjes verwerkt in een set die werkt." },
  { t: "Familiefeest", d: "Reünies, jubilea, doopfeesten. Een mix die werkt voor alle generaties, van kinderen tot grootouders." },
  { t: "Themafeest", d: "Jaren 80, Ibiza, festival, Bourgondisch. Themasets met bijpassende verlichting voor de juiste sfeer." },
  { t: "Tuinfeest", d: "Compacte set-up die ook outdoor werkt. Geluid hard genoeg voor de gasten, niet de hele buurt." },
];

// Mijlpaal-verjaardagen: dekt zoektermen als "dj voor 25e/50e verjaardag" natuurlijk af.
const MILESTONES = [
  { t: "18e en 21e", d: "De eerste grote party. Top 40, dance en een fout uurtje waar de hele vriendengroep op losgaat." },
  { t: "25e verjaardag", d: "Een kwart eeuw. Een mix van de hits waarmee je opgroeide en de nummers van nu." },
  { t: "30e en 40e", d: "Vrienden, familie en collega's door elkaar. Classics, foute uurtjes en dance, met ruimte voor verzoekjes." },
  { t: "50e verjaardag", d: "Abraham of Sarah. Van Nederlandstalig en jaren 70 en 80 tot de nummers waar je kinderen op dansen." },
  { t: "60e en ouder", d: "Een feest voor alle generaties. Ik bouw rustig op en hou de vloer de hele avond gezellig vol." },
];

function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />
      <PageHero
        eyebrow="Feest en verjaardag DJ"
        title={<>DJ voor jouw verjaardag,<br/><span className="text-primary">jouw gasten.</span></>}
        intro="Een verjaardag of feest wordt pas echt leuk als de muziek klopt en de dansvloer vol staat. Ik draai allround, van Nederlandstalig en classics tot top 40 en dance, afgestemd op jouw gasten."
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Feest DJ", path: "/verjaardag-dj" }]}
        image={IMG}
        imageAlt="DJ Kevin Froger draait een verjaardagsfeest"
      />

      <section className="py-16 px-5 sm:px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Voor elk type feest</div>
            <h2 className="text-4xl md:text-6xl leading-[0.9]" style={{ fontFamily: "var(--font-display)" }}>Een DJ die past</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Of het nu een gezellig feest thuis is of een groot verjaardagsfeest in een zaal, ik pas me aan. Ik kom met een complete set, dus licht en geluid zijn geregeld. Gasten kunnen verzoekjes doen en ik hou een microfoon bij de hand voor een speech of een toost. Als DJ en MC in een persoon hou ik het verloop in de gaten, zodat de avond lekker doorloopt.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OCC.map((o) => (
              <div key={o.t} className="rounded-2xl border-2 border-border bg-card p-6 hover:border-primary transition-colors">
                <h3 className="text-xl mb-3" style={{ fontFamily: "var(--font-display)" }}>{o.t}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-6 lg:px-10 border-t-2 border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Elke mijlpaal</div>
            <h2 className="text-4xl md:text-6xl leading-[0.9]" style={{ fontFamily: "var(--font-display)" }}>Van een 18e tot een 60e</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Elke verjaardag heeft zijn eigen publiek en zijn eigen muziek. Een 25e voelt anders dan een 50e, en daar stem ik de set op af zodat jong en oud de vloer op gaan. Een paar voorbeelden:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {MILESTONES.map((m) => (
              <div key={m.t} className="rounded-2xl border-2 border-border bg-card p-6 hover:border-primary transition-colors">
                <h3 className="text-lg mb-3" style={{ fontFamily: "var(--font-display)" }}>{m.t}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 sm:px-6 lg:px-10 bg-card border-t-2 border-border">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Muziek die voor elk gezelschap werkt
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Op een verjaardag staat vaak een gemengd gezelschap: vrienden, ouders, buren en soms de kleinkinderen. Ik draai allround en lees de zaal, dus ik schakel van Nederlandstalig en classics naar top 40 en dance op het moment dat het past. Verzoekjes verwerk ik in de set, zodat het jouw feest blijft. Als <Link to="/dj-en-mc" className="text-secondary underline underline-offset-2 hover:text-primary transition-colors">DJ en MC in een persoon</Link> kan ik ook het officiële deel aan elkaar praten, van een speech tot een verrassing.
          </p>
          <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6 mt-10" style={{ fontFamily: "var(--font-display)" }}>
            Binnen of buiten, ook je tuinfeest
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Een verjaardag in de tuin vraagt een andere aanpak dan een zaal. Voor een tuinfeest kom ik met een compacte set-up: geluid dat hard genoeg is voor je gasten maar niet voor de hele straat, en verlichting die het ook 's avonds af maakt. Binnen of buiten, ik stem licht en geluid af op de ruimte. Bekijk wat een avond kost op de <Link to="/prijzen" className="text-secondary underline underline-offset-2 hover:text-primary transition-colors">prijzenpagina</Link>.
          </p>
        </div>
      </section>

      <ServiceCityIndex
        service="Feest"
        collapsible
        intro="Voor verjaardagen en feesten kom ik in heel Nederland, met extra veel boekingen in de Betuwe, Bommelerwaard, Hoeksche Waard en Zuid-Holland. Wil je weten of ik op jouw datum kan? App of bel ons."
        links={[
          { to: "/prijzen", label: "Prijzen", primary: true },
          { to: "/verzoekje", label: "Verzoekje doen" },
          { to: "/werkwijze", label: "Werkwijze" },
          { to: "/dj-en-mc", label: "DJ en MC" },
          { to: "/reviews", label: "Reviews" },
        ]}
      />
      <ReviewStrip />
      <Faq items={FAQ} />
      <ContactCta />
      <SiteFooter />
    </main>
  );
}
