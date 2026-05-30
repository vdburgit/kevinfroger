import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { SITE_URL, breadcrumb, buildSeo } from "@/lib/seo";

const IMG = "/images/dj-booth-apresski.webp";

const REVIEWS = [
  { q: "Wat een feest, wat een DJ en wat een sfeermaker! Kevin je was geweldig op onze bruiloft bedankt! Je maakte onze dag compleet!", who: "Dylan Hartog", role: "Bruiloft" },
  { q: "Echt zo'n top avond gehad met DJ Kevin Froger, een bruiloft om nooit te vergeten! Het geluid, verlichting, alles was gewoon geweldig.", who: "S. Klunder", role: "Bruiloft" },
  { q: "Kevin heeft een top avond verzorgd samen met de band. De wisselwerking was erg goed en Kevin speelde goed in op het publiek. Een aanrader!", who: "Tim De Feyter", role: "Event met band" },
  { q: "Feest vanaf minuut 1. De DJ speelt goed in op het publiek. Aardige en meedenkende jongen, echt een aanrader.", who: "Jari Kabalt", role: "Feest" },
  { q: "Kevin heeft er een feestje van gemaakt. In het begin zelfs de allerkleinsten op de dansvloer en daarna gingen de ouderen lekker los. Muziek voor ieder wat wils.", who: "Naat Ton", role: "Familiefeest" },
  { q: "Kevin maakt echt een heel groot feest. Hij neemt voldoende spullen mee, denk aan lampen en geluidsboxen. In een woord: geweldig. Tot het volgende feest!", who: "Jaimy Van Huffel", role: "Feest" },
  { q: "Goede DJ, voelt de sfeer goed aan. Kan een goed feestje bouwen. Vriendelijke man.", who: "Kees Alblas", role: "Feest" },
  { q: "Een top DJ voor alle feesten. Kevin maakt er een groot feest van.", who: "Arjan Versteegh", role: "Feest" },
  { q: "Geweldige muziek en een volle dansvloer.", who: "Fabio van der Burg", role: "Feest" },
];

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=DJ+Kevin+Froger+Reviews";

export const Route = createFileRoute("/reviews")({
  head: () => buildSeo({
    title: "Reviews DJ Kevin Froger | 5.0 op Google",
    description: "Wat klanten zeggen over DJ Kevin Froger. Bruiloften, bedrijfsfeesten en privé-events. 5.0 sterren op Google.",
    path: "/reviews",
    image: IMG,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": ["EntertainmentBusiness", "LocalBusiness"],
        "@id": `${SITE_URL}/#business`,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          bestRating: "5",
          worstRating: "1",
          reviewCount: "10",
        },
        review: REVIEWS.map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.who },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          reviewBody: r.q,
        })),
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Reviews", path: "/reviews" },
      ]),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />
      <PageHero
        eyebrow="Reviews"
        title={<>5.0 op<br/><span className="text-primary">Google.</span></>}
        intro="Het belangrijkste oordeel komt van de mensen die het hebben meegemaakt. Een selectie van reacties van klanten door de jaren heen."
        image={IMG}
        imageAlt="DJ Kevin Froger booth met gouden verlichting"
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }]}
      />

      <section className="py-12 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto rounded-2xl border-2 border-secondary/30 bg-card p-6 text-center">
          <div className="text-3xl text-secondary mb-2">★★★★★</div>
          <div className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>5,0 op Google · 10 reviews</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            De citaten hieronder zijn een selectie van reacties op mijn Google Bedrijfsprofiel. Bekijk daar het volledige overzicht of laat zelf een review achter.
          </p>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block rounded-full border-2 border-secondary text-secondary px-6 py-2 text-xs tracking-[0.18em] uppercase font-bold hover:bg-secondary hover:text-secondary-foreground transition">
            Lees alle reviews op Google
          </a>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r) => (
            <article key={r.who} className="rounded-2xl bg-card border-2 border-border p-8 flex flex-col hover:border-primary transition-colors">
              <div className="text-secondary text-xl mb-4">★★★★★</div>
              <p className="text-foreground/90 leading-relaxed flex-1">"{r.q}"</p>
              <div className="mt-6 pt-6 border-t-2 border-border">
                <div className="font-bold" style={{ fontFamily: "var(--font-display)" }}>{r.who}</div>
                <div className="text-xs text-muted-foreground tracking-[0.2em] uppercase mt-1">{r.role}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactCta />
      <SiteFooter />
    </main>
  );
}