import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { breadcrumb, buildSeo, SITE_URL } from "@/lib/seo";
import { BLOG_POSTS } from "@/data/blogs";

const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";
const PATH = "/blog";

export const Route = createFileRoute("/blog/")({
  head: () =>
    buildSeo({
      title: "Blog over DJ's, bruiloften en feesten | Kevin Froger",
      description:
        "Eerlijke antwoorden op vragen rond een DJ boeken: wat kost een DJ, DJ of band op je bruiloft en hoe je je openingsdans kiest.",
      path: PATH,
      image: IMG,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog van DJ Kevin Froger",
          url: `${SITE_URL}${PATH}`,
          publisher: { "@id": `${SITE_URL}/#business` },
          blogPost: BLOG_POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.cardTitle,
            url: `${SITE_URL}/blog/${p.slug}`,
            datePublished: p.datePublished,
            author: { "@type": "Person", name: "Kevin Froger" },
          })),
        },
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Blog", path: PATH },
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
        eyebrow="Blog"
        title={
          <>
            Antwoorden voordat
            <br />
            <span className="text-primary">je een DJ boekt.</span>
          </>
        }
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: PATH },
        ]}
        intro="Veel mensen die een DJ zoeken hebben eerst vragen. Wat kost het, DJ of band, hoe kies je je openingsdans. Hier geef ik eerlijk antwoord, zonder verkooppraatje."
        image={IMG}
        imageAlt="DJ Kevin Froger draait op een feest met eigen licht en geluid"
      />

      <section className="py-16 px-5 sm:px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLOG_POSTS.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group rounded-2xl border-2 border-border bg-card p-7 hover:border-primary transition-colors flex flex-col"
              >
                <div className="text-secondary text-xs tracking-[0.25em] uppercase font-bold mb-3">
                  {p.readingMinutes} min lezen
                </div>
                <h2
                  className="text-2xl mb-3 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.cardTitle}
                </h2>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {p.cardSummary}
                </p>
                <span className="mt-5 text-xs tracking-[0.18em] uppercase font-bold text-secondary">
                  Lees verder
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
      <SiteFooter />
    </main>
  );
}
