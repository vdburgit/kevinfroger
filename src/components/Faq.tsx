import type { FaqItem } from "@/lib/seo";

type Props = {
  items: FaqItem[];
  heading?: string;
  eyebrow?: string;
};

// Zichtbare FAQ-sectie. Gebruikt native <details>/<summary>, dus alle
// vragen en antwoorden staan altijd in de statische HTML (geen JS nodig).
// Voed met DEZELFDE array als faqPage() zodat zichtbare tekst en JSON-LD matchen.
export function Faq({
  items,
  heading = "Veelgestelde vragen",
  eyebrow = "FAQ",
}: Props) {
  if (items.length === 0) return null;
  return (
    <section className="py-20 px-5 sm:px-6 lg:px-10 bg-card border-y-2 border-border">
      <div className="max-w-3xl mx-auto">
        <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">
          {eyebrow}
        </div>
        <h2
          className="text-4xl md:text-6xl leading-[0.9] mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {heading}
        </h2>
        <div className="divide-y-2 divide-border border-y-2 border-border">
          {items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg md:text-xl font-semibold text-foreground list-none [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-secondary text-2xl leading-none transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
