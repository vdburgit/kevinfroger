import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { breadcrumb, buildSeo } from "@/lib/seo";
import { LOCATIES } from "@/data/locaties";

const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";

export const Route = createFileRoute("/feestlocaties")({
  head: () =>
    buildSeo({
      title: "Feestlocaties in mijn werkgebied | Kevin Froger",
      description:
        "Trouw- en feestlocaties waar ik als DJ kom, van de Hoeksche Waard en Drechtsteden tot de Betuwe en Bommelerwaard. Bekijk de locaties.",
      path: "/feestlocaties",
      image: IMG,
      jsonLd: [
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Feestlocaties", path: "/feestlocaties" },
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
        eyebrow="Werkgebied"
        title={<>Feest- en<br /><span className="text-primary">trouwlocaties.</span></>}
        intro="Een greep uit de feest- en trouwlocaties in mijn werkgebied, van de Hoeksche Waard en de Drechtsteden tot de Betuwe en de Bommelerwaard. Op elke locatie kom ik met mijn eigen licht en geluid."
        image={IMG}
        imageAlt="DJ Kevin Froger op een feestlocatie"
        breadcrumbs={[{ name: "Home", path: "/" }, { name: "Feestlocaties", path: "/feestlocaties" }]}
      />

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LOCATIES.map((l) => {
              const to: string = `/feestlocatie/${l.slug}`;
              return (
                <Link
                  key={l.slug}
                  to={to}
                  className="rounded-2xl border-2 border-border bg-card p-7 hover:border-primary transition-colors block"
                >
                  <div className="text-secondary text-xs tracking-[0.3em] uppercase font-bold mb-2">
                    {l.plaats}
                  </div>
                  <h2 className="text-2xl mb-3" style={{ fontFamily: "var(--font-display)" }}>
                    {l.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm">{l.description}</p>
                  <span className="mt-4 inline-block text-secondary text-xs tracking-[0.18em] uppercase font-bold">
                    Bekijk locatie →
                  </span>
                </Link>
              );
            })}
          </div>
          <p className="mt-10 text-muted-foreground">
            Staat jouw locatie er niet bij? Geen probleem, ik draai door heel mijn werkgebied. Bekijk
            mijn <Link to="/regios" className="text-secondary underline hover:text-primary">werkgebied per regio</Link>.
          </p>
        </div>
      </section>

      <ContactCta />
      <SiteFooter />
    </main>
  );
}
