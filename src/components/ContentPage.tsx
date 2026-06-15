import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { Faq } from "@/components/Faq";
import { ReviewStrip } from "@/components/ReviewBadge";
import type { Crumb } from "@/components/Breadcrumbs";
import type { FaqItem } from "@/lib/seo";

export type ContentBlock = { t: string; d: string };
export type ContentSection = { h2: string; paragraphs: string[] };
export type ContentLink = { to: string; label: string };

type Props = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  intro: string;
  image: string;
  imageAlt: string;
  breadcrumbs: Crumb[];
  blocksHeading?: string;
  blocks: ContentBlock[];
  sections: ContentSection[];
  links?: ContentLink[];
  faq: FaqItem[];
  ctaTitle?: React.ReactNode;
  ctaSubtitle?: string;
};

// Generieke landingspagina (hero, blokkenraster, lopende secties, FAQ). Gebruikt
// voor USP- en gelegenheid-paginas zoals /dj-en-mc en /bruiloft-dj-hoeksche-waard.
export function ContentPage({
  eyebrow,
  titleLine1,
  titleLine2,
  intro,
  image,
  imageAlt,
  breadcrumbs,
  blocksHeading = "Wat dat betekent",
  blocks,
  sections,
  links,
  faq,
  ctaTitle,
  ctaSubtitle,
}: Props) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />
      <PageHero
        eyebrow={eyebrow}
        title={
          <>
            {titleLine1}
            <br />
            <span className="text-primary">{titleLine2}</span>
          </>
        }
        intro={intro}
        image={image}
        imageAlt={imageAlt}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">
              {blocksHeading}
            </div>
            <h2
              className="text-4xl md:text-6xl leading-[0.9]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              In het kort
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blocks.map((b) => (
              <div
                key={b.t}
                className="rounded-2xl border-2 border-border bg-card p-7 hover:border-primary transition-colors"
              >
                <h3 className="text-2xl mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {b.t}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-card border-y-2 border-border">
        <article className="max-w-[800px] mx-auto prose-content">
          {sections.map((s) => (
            <div key={s.h2}>
              <h2
                className="text-3xl md:text-5xl leading-[0.95] mb-6 mt-10 first:mt-0"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.h2}
              </h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {p}
                </p>
              ))}
            </div>
          ))}
          {links && links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-full border-2 border-secondary text-secondary px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:bg-secondary hover:text-secondary-foreground transition"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}
        </article>
      </section>

      <ReviewStrip />
      <Faq items={faq} />
      <ContactCta title={ctaTitle} subtitle={ctaSubtitle} />
      <SiteFooter />
    </main>
  );
}
