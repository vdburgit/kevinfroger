import { Link } from "@tanstack/react-router";
import { LocationLayout } from "@/components/LocationLayout";
import { ReviewBadge } from "@/components/ReviewBadge";
import { cityFaq } from "@/lib/seo";
import type { CityData } from "@/data/cities";

const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";

export function CityPage({ city }: { city: CityData }) {
  return (
    <LocationLayout
      eyebrow={`DJ in ${city.name}`}
      heroTitle={
        <>
          DJ in {city.name}<br />
          <span className="text-primary">huren.</span>
        </>
      }
      heroIntro={city.heroIntro}
      heroImage={IMG}
      heroImageAlt={`DJ Kevin Froger in ${city.name}`}
      related={city.related}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Werkgebied", path: "/regios" },
        { name: city.name, path: `/dj-boeken-${city.slug}` },
      ]}
    >
      <ReviewBadge className="mb-8" />

      <h2 className="text-3xl md:text-5xl leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
        Bruiloft-DJ en feest-DJ in {city.name}
      </h2>
      {city.paragraphs.map((p, i) => (
        <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-6">
          {p}
        </p>
      ))}

      <h2 className="text-3xl md:text-5xl leading-tight mb-6 mt-10" style={{ fontFamily: "var(--font-display)" }}>
        Wat ik meeneem
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        Ik kom met een complete show: licht, geluid en allround muziek. Ik draai van Nederlandstalig en classics tot top 40 en dance, afgestemd op jouw gasten. Als DJ en MC in een persoon kan ik ook de presentatie verzorgen, bijvoorbeeld bij een ceremonie of een toost.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Voor een <Link to="/bruiloft-dj" className="text-secondary underline hover:text-primary">bruiloft</Link>, <Link to="/verjaardag-dj" className="text-secondary underline hover:text-primary">verjaardag</Link>, <Link to="/zakelijk-dj" className="text-secondary underline hover:text-primary">bedrijfsfeest</Link> of <Link to="/festival-dj" className="text-secondary underline hover:text-primary">festival</Link> in {city.name} ben ik je DJ.
      </p>

      <h2 className="text-3xl md:text-5xl leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
        {city.name} en omgeving
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        <strong className="text-foreground">Wijken en buurten</strong>: {city.characteristics}
      </p>
      {city.region && (
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          Onderdeel van de regio <strong className="text-foreground">{city.region}</strong> in de provincie <strong className="text-foreground">{city.province}</strong>. Bekijk mijn complete <Link to="/regios" className="text-secondary underline hover:text-primary">werkgebied per provincie</Link>.
        </p>
      )}

      <h2 className="text-3xl md:text-5xl leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
        Veelgestelde vragen over een DJ in {city.name}
      </h2>
      <div className="divide-y-2 divide-border border-y-2 border-border mb-10">
        {cityFaq(city.name).map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-foreground list-none [&::-webkit-details-marker]:hidden">
              <span>{f.q}</span>
              <span aria-hidden className="shrink-0 text-secondary text-2xl leading-none transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>

      <h2 className="text-3xl md:text-5xl leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
        Datum checken
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Wil je weten of ik op jouw datum kan in {city.name}? Bel of app ons, dan check ik het meteen. Bekijk eerst de <Link to="/prijzen" className="text-secondary underline hover:text-primary">prijzen</Link> en <Link to="/reviews" className="text-secondary underline hover:text-primary">reviews</Link>.
      </p>
    </LocationLayout>
  );
}
