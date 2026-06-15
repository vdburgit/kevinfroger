import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { ReviewStrip } from "@/components/ReviewBadge";
import { getCity } from "@/data/cities";
import type { Locatie } from "@/data/locaties";

const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";

export function FeestlocatiePage({ locatie }: { locatie: Locatie }) {
  const city = locatie.citySlug ? getCity(locatie.citySlug) : undefined;
  const cityPath: string = `/dj-boeken-${locatie.citySlug}`;
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />
      <PageHero
        eyebrow={`DJ op een ${locatie.type} in ${locatie.plaats}`}
        title={
          <>
            DJ bij
            <br />
            <span className="text-primary">{locatie.name}.</span>
          </>
        }
        intro={locatie.description}
        image={IMG}
        imageAlt={`DJ Kevin Froger op een feest bij ${locatie.name} in ${locatie.plaats}`}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Feestlocaties", path: "/feestlocaties" },
          { name: locatie.name, path: `/feestlocatie/${locatie.slug}` },
        ]}
      />

      <section className="py-20 px-6 lg:px-10">
        <article className="max-w-[800px] mx-auto prose-content">
          <h2
            className="text-3xl md:text-5xl leading-[0.95] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DJ huren bij {locatie.name}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {locatie.description}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Ik kom met een complete show: eigen licht en geluid, afgestemd op de ruimte. Als DJ en
            MC in een persoon draai ik de muziek en praat ik de avond aan elkaar, dus je hebt aan
            mij genoeg. Ik stem mijn opstelling af op de zaal, of die nu hoog en ruim is of juist
            intiem.
          </p>

          <h2
            className="text-3xl md:text-5xl leading-[0.95] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            In {locatie.plaats} en omgeving
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {locatie.name} ligt in {locatie.plaats}.{" "}
            {city ? (
              <>
                Bekijk wat ik doe als{" "}
                <Link
                  to={cityPath}
                  className="text-secondary underline hover:text-primary"
                >
                  DJ in {city.name}
                </Link>
                , of plan meteen een bruiloft of feest.
              </>
            ) : (
              <>Plan gerust een bruiloft of feest op deze locatie.</>
            )}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Voor een{" "}
            <Link to="/bruiloft-dj" className="text-secondary underline hover:text-primary">
              bruiloft
            </Link>
            ,{" "}
            <Link to="/zakelijk-dj" className="text-secondary underline hover:text-primary">
              bedrijfsfeest
            </Link>{" "}
            of{" "}
            <Link to="/verjaardag-dj" className="text-secondary underline hover:text-primary">
              verjaardag
            </Link>{" "}
            bij {locatie.name} ben ik je DJ. Bekijk ook de andere{" "}
            <Link to="/feestlocaties" className="text-secondary underline hover:text-primary">
              feestlocaties
            </Link>{" "}
            in mijn werkgebied.
          </p>
        </article>
      </section>

      <ReviewStrip />
      <ContactCta title={<>Feest bij {locatie.name}?</>} subtitle="App of bel ons met je datum, dan check ik of ik vrij ben." />
      <SiteFooter />
    </main>
  );
}
