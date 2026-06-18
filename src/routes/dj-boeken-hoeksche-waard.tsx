import { createFileRoute, Link } from "@tanstack/react-router";
import { LocationLayout } from "@/components/LocationLayout";
import { ReviewBadge } from "@/components/ReviewBadge";
import { breadcrumb, buildSeo, cityFaq, faqPage, service } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";

export const Route = createFileRoute("/dj-boeken-hoeksche-waard")({
  head: () => buildSeo({
    title: "DJ Hoeksche Waard huren | Bruiloft & feest | Kevin Froger",
    description: "DJ in de Hoeksche Waard huren? Kevin uit 's-Gravendeel draait al jaren bruiloften en feesten in de regio, van Oud-Beijerland tot Numansdorp. Check je datum.",
    path: "/dj-boeken-hoeksche-waard",
    image: IMG,
    jsonLd: [
      service({
        name: "DJ Hoeksche Waard",
        serviceType: "DJ in Hoeksche Waard",
        areaServed: "Hoeksche Waard",
        areaServedType: "AdministrativeArea",
        description: "Allround DJ voor bruiloften, feesten en bedrijfsfeesten in de hele Hoeksche Waard. Complete show met licht en geluid, DJ en MC in een persoon.",
        path: "/dj-boeken-hoeksche-waard",
        image: IMG,
      }),
      faqPage(cityFaq("de Hoeksche Waard")),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Werkgebied", path: "/regios" },
        { name: "Hoeksche Waard", path: "/dj-boeken-hoeksche-waard" },
      ]),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LocationLayout
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Werkgebied", path: "/regios" }, { name: "Hoeksche Waard", path: "/dj-boeken-hoeksche-waard" }]}
      eyebrow="Hoeksche Waard"
      heroTitle={<>DJ in de<br/><span className="text-primary">Hoeksche Waard.</span></>}
      heroIntro="In de Hoeksche Waard draai ik al jaren, van een bruiloft op een boerderij tot een verjaardag in het dorpshuis. Veel boekingen komen via via, omdat ik hier bekend ben in het feestcircuit."
      heroImage={IMG}
      heroImageAlt="DJ Kevin Froger op een feest in de Hoeksche Waard"
      related={[
        { to: "/dj-boeken-dordrecht", label: "Dordrecht" },
        { to: "/dj-boeken-gorinchem", label: "Gorinchem" },
        { to: "/dj-boeken-betuwe", label: "Betuwe" },
      ]}
    >
      <ReviewBadge className="mb-8" />

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Bekend in de regio</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        Ik woon zelf in <Link to="/dj-boeken-s-gravendeel" className="text-secondary underline hover:text-primary">'s-Gravendeel</Link>, dus de Hoeksche Waard is letterlijk mijn achtertuin. Veel boekingen komen via via: mensen kennen me of hebben me ergens op een feest gezien. Dat zegt meer dan welke advertentie ook. Ik weet de weg op de polderwegen, ken de zalen en dorpshuizen en sta er ruim voor de eerste gasten klaar.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Of je feest nu in <Link to="/dj-boeken-oud-beijerland" className="text-secondary underline hover:text-primary">Oud-Beijerland</Link>, <Link to="/dj-boeken-puttershoek" className="text-secondary underline hover:text-primary">Puttershoek</Link>, <Link to="/dj-boeken-strijen" className="text-secondary underline hover:text-primary">Strijen</Link>, <Link to="/dj-boeken-maasdam" className="text-secondary underline hover:text-primary">Maasdam</Link> of <Link to="/dj-boeken-numansdorp" className="text-secondary underline hover:text-primary">Numansdorp</Link> is, ik ben zo bij je. Ook in de kleinere kernen zoals <Link to="/dj-boeken-klaaswaal" className="text-secondary underline hover:text-primary">Klaaswaal</Link>, <Link to="/dj-boeken-heinenoord" className="text-secondary underline hover:text-primary">Heinenoord</Link>, <Link to="/dj-boeken-mijnsheerenland" className="text-secondary underline hover:text-primary">Mijnsheerenland</Link>, <Link to="/dj-boeken-westmaas" className="text-secondary underline hover:text-primary">Westmaas</Link>, <Link to="/dj-boeken-nieuw-beijerland" className="text-secondary underline hover:text-primary">Nieuw-Beijerland</Link>, <Link to="/dj-boeken-zuid-beijerland" className="text-secondary underline hover:text-primary">Zuid-Beijerland</Link>, <Link to="/dj-boeken-goudswaard" className="text-secondary underline hover:text-primary">Goudswaard</Link> en <Link to="/dj-boeken-piershil" className="text-secondary underline hover:text-primary">Piershil</Link> draai ik regelmatig.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>De locaties die de Hoeksche Waard typeren</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        De Hoeksche Waard is een eiland van polders, dijken en water, en dat zie ik terug in de feesten. Veel bruiloften zitten hier buitenaf: een omgebouwde schuur of loods op een boerderij, een feesttent in het weiland of een locatie aan het water langs het Spui, de Oude Maas of het Hollands Diep. Daarnaast draai ik geregeld in de dorpszalen en verenigingsgebouwen in kernen als Oud-Beijerland, Numansdorp en Strijen. Bij een buitenlocatie kijk ik vooraf naar stroom, ruimte en akoestiek, zodat het geluid ook in een hoge schuur of open tent gewoon klopt.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Wat ik meeneem</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        Ik kom met een complete set, dus licht en geluid neem ik mee. Ik draai allround: van Nederlandstalig en classics tot top 40 en dance, afgestemd op jouw gasten. Als DJ en MC in een hou ik bovendien het verloop van de avond in de gaten, zodat een speech of een verrassing op het juiste moment komt.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Voor een <Link to="/bruiloft-dj" className="text-secondary underline hover:text-primary">bruiloft</Link>, <Link to="/verjaardag-dj" className="text-secondary underline hover:text-primary">verjaardag</Link>, <Link to="/zakelijk-dj" className="text-secondary underline hover:text-primary">bedrijfsfeest</Link> of een groot besloten feest in de Hoeksche Waard zit je bij mij goed.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Hele Hoeksche Waard plus omliggend</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Naast Oud-Beijerland, Strijen, Maasdam en Numansdorp draai ik ook in <strong className="text-foreground">Klaaswaal, Heinenoord, Mijnsheerenland, Westmaas, Nieuw-Beijerland, Zuid-Beijerland, Goudswaard en Piershil</strong>.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Buiten de Hoeksche Waard ben ik snel in <Link to="/dj-boeken-dordrecht" className="text-secondary underline hover:text-primary">Dordrecht</Link>, en in <Link to="/dj-boeken-zwijndrecht" className="text-secondary underline hover:text-primary">Zwijndrecht</Link>, <Link to="/dj-boeken-barendrecht" className="text-secondary underline hover:text-primary">Barendrecht</Link>, <Link to="/dj-boeken-hendrik-ido-ambacht" className="text-secondary underline hover:text-primary">Hendrik-Ido-Ambacht</Link> en <Link to="/dj-boeken-ridderkerk" className="text-secondary underline hover:text-primary">Ridderkerk</Link>. Voor de hele <strong className="text-foreground">Drechtsteden</strong> ben ik je DJ.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Datum checken</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Wil je weten of ik op jouw datum kan? Bel of app ons, dan check ik het meteen. Of bekijk eerst de <Link to="/prijzen" className="text-secondary underline hover:text-primary">prijzen</Link> en <Link to="/reviews" className="text-secondary underline hover:text-primary">reviews</Link>.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6 mt-10" style={{ fontFamily: "var(--font-display)" }}>Veelgestelde vragen over een DJ in de Hoeksche Waard</h2>
      <div className="divide-y-2 divide-border border-y-2 border-border">
        {cityFaq("de Hoeksche Waard").map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-foreground list-none [&::-webkit-details-marker]:hidden"><span>{f.q}</span><span aria-hidden className="shrink-0 text-secondary text-2xl leading-none transition-transform group-open:rotate-45">+</span></summary>
            <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </LocationLayout>
  );
}
