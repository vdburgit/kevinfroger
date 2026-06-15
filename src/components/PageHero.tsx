import { responsiveImage } from "@/lib/images";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image: string;
  imageAlt: string;
  // Zichtbare broodkruimels boven de H1. Geef dezelfde array door als de
  // breadcrumb() JSON-LD in de route-head zodat ze 1-op-1 matchen.
  breadcrumbs?: Crumb[];
};

export function PageHero({ eyebrow, title, intro, image, imageAlt, breadcrumbs }: Props) {
  const { src, srcSet } = responsiveImage(image);
  return (
    <section className="relative overflow-hidden border-b-2 border-border">
      <img
        src={src}
        srcSet={srcSet}
        sizes="100vw"
        alt={imageAlt}
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-background" />
      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 pt-28 sm:pt-32 md:pt-48 pb-20 sm:pb-24 md:pb-36">
        {breadcrumbs && breadcrumbs.length > 1 && (
          <Breadcrumbs items={breadcrumbs} variant="onDark" className="mb-4 sm:mb-5" />
        )}
        <div className="text-secondary text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase font-bold mb-3 sm:mb-4">{eyebrow}</div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] sm:leading-[0.9] max-w-4xl" style={{ fontFamily: "var(--font-display)", textShadow: "0 6px 30px oklch(0 0 0 / 0.5)" }}>
          {title}
        </h1>
        {intro && (
          <p className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed">{intro}</p>
        )}
      </div>
    </section>
  );
}