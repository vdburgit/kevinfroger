import { createFileRoute, Link } from "@tanstack/react-router";
import { LocationLayout } from "@/components/LocationLayout";
import { breadcrumb, buildSeo, cityFaq, faqPage, service } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";

export const Route = createFileRoute("/dj-boeken-gorinchem")({
  head: () => buildSeo({
    title: "DJ Gorinchem huren | Bruiloft & feest | Kevin Froger",
    description: "Feest of bruiloft in Gorinchem? DJ Kevin Froger zorgt voor de juiste muziek en een volle dansvloer. Vraag vrijblijvend een offerte aan.",
    path: "/dj-boeken-gorinchem",
    image: IMG,
    jsonLd: [
      service({
        name: "DJ Gorinchem",
        serviceType: "DJ in Gorinchem",
        areaServed: "Gorinchem",
        description: "Allround DJ voor bruiloften, verjaardagen en bedrijfsfeesten in Gorinchem. Complete show met licht en geluid, en MC services.",
        path: "/dj-boeken-gorinchem",
        image: IMG,
      }),
      faqPage(cityFaq("Gorinchem")),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Werkgebied", path: "/regios" },
        { name: "Gorinchem", path: "/dj-boeken-gorinchem" },
      ]),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LocationLayout
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Werkgebied", path: "/regios" }, { name: "Gorinchem", path: "/dj-boeken-gorinchem" }]}
      eyebrow="Gorinchem"
      heroTitle={<>DJ in Gorinchem<br/><span className="text-primary">huren.</span></>}
      heroIntro="Gorinchem is voor mij een vaste stop tussen de Hoeksche Waard en de Betuwe. Ik draai er regelmatig en ken zowel de stad als de Alblasserwaard en het Land van Heusden en Altena goed."
      heroImage={IMG}
      heroImageAlt="DJ Kevin Froger draait een feest in Gorinchem"
      related={[
        { to: "/dj-boeken-hoeksche-waard", label: "Hoeksche Waard" },
        { to: "/dj-boeken-betuwe", label: "Betuwe" },
        { to: "/dj-boeken-dordrecht", label: "Dordrecht" },
      ]}
    >
      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Complete show</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Voor een bruiloft, verjaardag of bedrijfsfeest in Gorinchem zorg ik voor een complete show met licht en geluid. Ik draai allround en pas de muziek aan op de gasten, zodat de vloer vol blijft. Als DJ en MC in een hou ik ook het verloop van de avond in de gaten.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Snel ter plaatse</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Of je feest nu in het centrum is of net buiten de stad, ik ben snel ter plaatse en de op- en afbouw regel ik zelf. Voor <Link to="/bruiloft-dj" className="text-secondary underline hover:text-primary">bruiloft</Link>, <Link to="/verjaardag-dj" className="text-secondary underline hover:text-primary">verjaardag</Link> of <Link to="/zakelijk-dj" className="text-secondary underline hover:text-primary">bedrijfsfeest</Link> in Gorinchem ben ik je DJ.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Gorinchem en omgeving</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Naast Gorinchem zelf draai ik regelmatig in Leerdam, Sliedrecht, Hardinxveld-Giessendam en de hele <strong className="text-foreground">Alblasserwaard</strong>. Ook in het <strong className="text-foreground">Land van Heusden en Altena</strong> ben ik geregeld.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Verder richting de <Link to="/dj-boeken-betuwe" className="text-secondary underline hover:text-primary">Betuwe</Link>, of via de A15 westwaarts naar <Link to="/dj-boeken-dordrecht" className="text-secondary underline hover:text-primary">Dordrecht</Link> en de Drechtsteden.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Beschikbaarheid</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Wil je weten of ik beschikbaar ben? Bel of app ons. Bekijk eerst de <Link to="/prijzen" className="text-secondary underline hover:text-primary">prijzen</Link>.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6 mt-10" style={{ fontFamily: "var(--font-display)" }}>Veelgestelde vragen over een DJ in Gorinchem</h2>
      <div className="divide-y-2 divide-border border-y-2 border-border">
        {cityFaq("Gorinchem").map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-foreground list-none [&::-webkit-details-marker]:hidden"><span>{f.q}</span><span aria-hidden className="shrink-0 text-secondary text-2xl leading-none transition-transform group-open:rotate-45">+</span></summary>
            <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </LocationLayout>
  );
}
