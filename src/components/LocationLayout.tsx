import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";

type Props = {
  eyebrow: string;
  heroTitle: React.ReactNode;
  heroIntro: string;
  heroImage: string;
  heroImageAlt: string;
  children: React.ReactNode;
  related?: Array<{ to: string; label: string }>;
};

export function LocationLayout({ eyebrow, heroTitle, heroIntro, heroImage, heroImageAlt, children, related }: Props) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />
      <PageHero
        eyebrow={eyebrow}
        title={heroTitle}
        intro={heroIntro}
        image={heroImage}
        imageAlt={heroImageAlt}
      />

      <section className="py-20 px-6 lg:px-10">
        <article className="max-w-[800px] mx-auto prose-content">
          {children}
        </article>
      </section>

      {related && related.length > 0 && (
        <section className="py-16 px-6 lg:px-10 bg-card border-y-2 border-border">
          <div className="max-w-[1100px] mx-auto text-center">
            <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Ook actief in</div>
            <div className="flex flex-wrap gap-3 justify-center">
              {related.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className="rounded-full bg-background border-2 border-border text-foreground px-5 py-2 text-xs tracking-[0.15em] uppercase font-bold hover:border-primary transition"
                >
                  {r.label}
                </Link>
              ))}
              <Link
                to="/regios"
                className="rounded-full bg-background border-2 border-secondary text-secondary px-5 py-2 text-xs tracking-[0.15em] uppercase font-bold hover:bg-secondary hover:text-secondary-foreground transition"
              >
                Heel werkgebied
              </Link>
            </div>
          </div>
        </section>
      )}

      <ContactCta title={<>Check je<br/>datum.</>} subtitle="App of bel ons. Reactie binnen 24 uur." />
      <SiteFooter />
    </main>
  );
}
