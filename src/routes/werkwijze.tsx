import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { breadcrumb, buildSeo } from "@/lib/seo";

const IMG = "/images/dj-booth-black.webp";

const STEPS = [
  { n: "01", t: "Aanvraag", d: "Stuur een berichtje met datum, locatie en type event. Binnen 24 uur reactie of ik beschikbaar ben." },
  { n: "02", t: "Offerte", d: "Heldere all-in offerte op maat. Vaste prijs, geen verborgen kosten. Inclusief licht, geluid en eventuele reiskosten." },
  { n: "03", t: "Intake", d: "Telefonisch of in persoon. We bespreken programma, must-plays, no-go's en logistiek op locatie." },
  { n: "04", t: "Voorbereiding", d: "Set wordt voorbereid op basis van jullie input. Microfoons, draaipunten en planning worden vastgelegd in een draaiboek." },
  { n: "05", t: "Opbouw", d: "Ik ben minimaal 2 uur voor aanvang op locatie voor opbouw, soundcheck en lichtsetting. Backup-apparatuur altijd mee." },
  { n: "06", t: "Show", d: "Live mixing, het publiek lezen en strakke transities. De dansvloer is mijn werkplek tot het laatste moment." },
  { n: "07", t: "Afbouw", d: "Snelle, nette afbouw na afloop. Locatie wordt achtergelaten zoals we hem aantroffen." },
  { n: "08", t: "Nazorg", d: "Korte follow-up na het event en eventueel een Google-review als jullie tevreden zijn." },
];

export const Route = createFileRoute("/werkwijze")({
  head: () => buildSeo({
    title: "Werkwijze DJ Kevin Froger | Van offerte tot dansvloer",
    description: "Zo werkt boeken bij DJ Kevin Froger: persoonlijke intake, heldere offerte, op maat samengestelde set en volledige opbouw op locatie.",
    path: "/werkwijze",
    image: IMG,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "DJ boeken bij Kevin Froger, werkwijze",
        description: "Het complete proces van eerste contact tot afbouw na het feest.",
        step: STEPS.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.t,
          text: s.d,
        })),
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Werkwijze", path: "/werkwijze" },
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
        eyebrow="Werkwijze"
        title={<>Van eerste<br/><span className="text-primary">mail tot encore.</span></>}
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Werkwijze", path: "/werkwijze" }]}
        intro="Een transparant proces in 8 stappen, zodat jullie weten wat er gebeurt, wanneer het gebeurt en wie het doet."
        image={IMG}
        imageAlt="DJ Kevin Froger DJ-booth met show verlichting"
      />

      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl border-2 border-border bg-card p-7 hover:border-primary transition-colors">
                <div className="text-5xl text-primary mb-4" style={{ fontFamily: "var(--font-display)" }}>{s.n}</div>
                <h3 className="text-2xl mb-2" style={{ fontFamily: "var(--font-display)" }}>{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
      <SiteFooter />
    </main>
  );
}