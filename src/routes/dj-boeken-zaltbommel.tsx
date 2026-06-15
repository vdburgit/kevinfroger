import { createFileRoute, Link } from "@tanstack/react-router";
import { LocationLayout } from "@/components/LocationLayout";
import { breadcrumb, buildSeo, cityFaq, faqPage, service } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";

export const Route = createFileRoute("/dj-boeken-zaltbommel")({
  head: () => buildSeo({
    title: "DJ Zaltbommel huren | Bruiloft & feest | Froger",
    description: "Bruiloft of feest in Zaltbommel of de Bommelerwaard? Kevin maakt er een avond van om niet te vergeten. Check snel je datum.",
    path: "/dj-boeken-zaltbommel",
    image: IMG,
    jsonLd: [
      service({
        name: "DJ Zaltbommel en Bommelerwaard",
        serviceType: "DJ in Zaltbommel",
        areaServed: "Zaltbommel",
        description: "Allround DJ voor bruiloft, verjaardag of bedrijfsfeest in Zaltbommel en de Bommelerwaard. Complete show inclusief licht en geluid.",
        path: "/dj-boeken-zaltbommel",
        image: IMG,
      }),
      faqPage(cityFaq("Zaltbommel")),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Werkgebied", path: "/regios" },
        { name: "Zaltbommel", path: "/dj-boeken-zaltbommel" },
      ]),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LocationLayout
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Werkgebied", path: "/regios" }, { name: "Zaltbommel", path: "/dj-boeken-zaltbommel" }]}
      eyebrow="Zaltbommel"
      heroTitle={<>DJ in Zaltbommel<br/><span className="text-primary">huren.</span></>}
      heroIntro="Zaltbommel ligt net ten zuiden van de Waal, in de Bommelerwaard. Een mooi stukje rivierenland met genoeg sfeervolle feestlocaties. Ik draai er graag en de regio is vanuit mijn kant prima bereikbaar."
      heroImage={IMG}
      heroImageAlt="DJ Kevin Froger op een feest in Zaltbommel"
      related={[
        { to: "/dj-boeken-betuwe", label: "Hele Betuwe" },
        { to: "/dj-boeken-tiel", label: "Tiel" },
        { to: "/dj-boeken-geldermalsen", label: "Geldermalsen" },
      ]}
    >
      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Complete set</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Voor je bruiloft, verjaardag of bedrijfsfeest kom ik met een complete set. Licht en geluid neem ik mee, ik draai allround en stem de muziek af op de gasten. Zo blijft de dansvloer de hele avond vol.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>DJ en MC in een persoon</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Als DJ en MC in een persoon kan ik ook de presentatie doen. Of je feest nu in Zaltbommel zelf is of in een van de dorpen in de Bommelerwaard, ik regel de op- en afbouw zelf en zorg dat de muziek klopt. Voor een <Link to="/bruiloft-dj" className="text-secondary underline hover:text-primary">trouwdag</Link> of <Link to="/verjaardag-dj" className="text-secondary underline hover:text-primary">verjaardag</Link> ben ik je DJ.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>De Bommelerwaard in beeld</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Naast Zaltbommel draai ik ook in de omliggende dorpen: <strong className="text-foreground">Brakel, Aalst, Poederoijen, Hurwenen, Nederhemert, Kerkwijk, Gameren, Velddriel, Hedel, Ammerzoden, Rossum en Heerewaarden</strong>.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Vanuit Zaltbommel ben ik snel over de Waal in <Link to="/dj-boeken-tiel" className="text-secondary underline hover:text-primary">Tiel</Link> of richting 's-Hertogenbosch. De hele <Link to="/dj-boeken-betuwe" className="text-secondary underline hover:text-primary">Betuwe</Link> is mijn werkgebied.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Datum checken</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Bel of app ons om te kijken of ik vrij ben op jouw datum. Bekijk eerst de <Link to="/prijzen" className="text-secondary underline hover:text-primary">prijzen</Link>.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6 mt-10" style={{ fontFamily: "var(--font-display)" }}>Veelgestelde vragen over een DJ in Zaltbommel</h2>
      <div className="divide-y-2 divide-border border-y-2 border-border">
        {cityFaq("Zaltbommel").map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-foreground list-none [&::-webkit-details-marker]:hidden"><span>{f.q}</span><span aria-hidden className="shrink-0 text-secondary text-2xl leading-none transition-transform group-open:rotate-45">+</span></summary>
            <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </LocationLayout>
  );
}
