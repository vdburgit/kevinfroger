import { createFileRoute, Link } from "@tanstack/react-router";
import { LocationLayout } from "@/components/LocationLayout";
import { breadcrumb, buildSeo, cityFaq, faqPage, service } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";

export const Route = createFileRoute("/dj-boeken-dordrecht")({
  head: () => buildSeo({
    title: "DJ Dordrecht huren | Allround feest-DJ | Kevin Froger",
    description: "DJ nodig in Dordrecht? Kevin Froger draait bruiloften, bedrijfsfeesten en verjaardagen in de hele stad en Drechtsteden. Vraag een offerte aan.",
    path: "/dj-boeken-dordrecht",
    image: IMG,
    jsonLd: [
      service({
        name: "DJ Dordrecht",
        serviceType: "DJ in Dordrecht",
        areaServed: "Dordrecht",
        description: "Allround DJ voor bruiloft, verjaardag en bedrijfsfeest in Dordrecht en de hele Drechtsteden. Eigen licht en geluid.",
        path: "/dj-boeken-dordrecht",
        image: IMG,
        // Geen zichtbaar reviewblok op deze pagina, dus geen rating in de JSON-LD
        // (Google-beleid: rating-markup alleen waar de reviews ook zichtbaar staan).
        rating: false,
      }),
      faqPage(cityFaq("Dordrecht")),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Werkgebied", path: "/regios" },
        { name: "Dordrecht", path: "/dj-boeken-dordrecht" },
      ]),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LocationLayout
      breadcrumbs={[{ name: "Home", path: "/" }, { name: "Werkgebied", path: "/regios" }, { name: "Dordrecht", path: "/dj-boeken-dordrecht" }]}
      eyebrow="Dordrecht"
      heroTitle={<>DJ in Dordrecht<br/><span className="text-primary">huren.</span></>}
      heroIntro="Dordrecht is een vaste stop voor mij. Ik ken de stad goed en draai er regelmatig, van een bruiloft op een historische locatie tot een bedrijfsfeest in het centrum."
      heroImage={IMG}
      heroImageAlt="DJ Kevin Froger draait een feest in Dordrecht"
      related={[
        { to: "/dj-boeken-hoeksche-waard", label: "Hoeksche Waard" },
        { to: "/dj-boeken-gorinchem", label: "Gorinchem" },
        { to: "/dj-boeken-betuwe", label: "Betuwe" },
      ]}
    >
      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Van bruiloft tot bedrijfsfeest</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Van een bruiloft op een historische locatie tot een verjaardag of een bedrijfsfeest, ik kom met een complete show: licht, geluid en allround muziek, opgebouwd naar de sfeer van de avond. Geen standaardlijst, maar een set die meebeweegt met jouw gasten.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>DJ en MC in een persoon</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Als DJ en MC in een persoon verzorg ik ook de presentatie, handig bij een speech of een verrassing. Voor een <Link to="/bruiloft-dj" className="text-secondary underline hover:text-primary">trouwdag</Link>, <Link to="/verjaardag-dj" className="text-secondary underline hover:text-primary">verjaardag</Link> of <Link to="/zakelijk-dj" className="text-secondary underline hover:text-primary">bedrijfsfeest</Link> in Dordrecht ben ik je DJ.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Dordrecht en Drechtsteden</h2>
      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
        Vanuit Dordrecht draai ik in de hele <strong className="text-foreground">Drechtsteden</strong>: <Link to="/dj-boeken-zwijndrecht" className="text-secondary underline hover:text-primary">Zwijndrecht</Link>, <Link to="/dj-boeken-barendrecht" className="text-secondary underline hover:text-primary">Barendrecht</Link>, Hendrik-Ido-Ambacht, <Link to="/dj-boeken-ridderkerk" className="text-secondary underline hover:text-primary">Ridderkerk</Link>, <Link to="/dj-boeken-papendrecht" className="text-secondary underline hover:text-primary">Papendrecht</Link>, <Link to="/dj-boeken-sliedrecht" className="text-secondary underline hover:text-primary">Sliedrecht</Link> en Hardinxveld-Giessendam. Allemaal binnen handbereik.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        Via de A15 ben ik ook snel in <Link to="/dj-boeken-gorinchem" className="text-secondary underline hover:text-primary">Gorinchem</Link> en de <Link to="/dj-boeken-betuwe" className="text-secondary underline hover:text-primary">Betuwe</Link>, en via de Kiltunnel in de <Link to="/dj-boeken-hoeksche-waard" className="text-secondary underline hover:text-primary">Hoeksche Waard</Link>.
      </p>

      <p className="text-lg text-muted-foreground leading-relaxed mb-10">
        In Dordrecht draai ik regelmatig op bekende feestlocaties in de stad, van locaties als Partycentrum Wantijpaviljoen tot het Postillion Hotel Dordrecht. Op dat soort zalen in en rond Dordrecht voel ik me thuis en weet ik er een mooi feest van te maken.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6" style={{ fontFamily: "var(--font-display)" }}>Korte lijntjes</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Wil je weten of ik op jouw datum kan? App of bel ons. Bekijk eerst de <Link to="/prijzen" className="text-secondary underline hover:text-primary">prijzen</Link>.
      </p>

      <h2 className="text-3xl md:text-5xl leading-[0.95] mb-6 mt-10" style={{ fontFamily: "var(--font-display)" }}>Veelgestelde vragen over een DJ in Dordrecht</h2>
      <div className="divide-y-2 divide-border border-y-2 border-border">
        {cityFaq("Dordrecht").map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-foreground list-none [&::-webkit-details-marker]:hidden"><span>{f.q}</span><span aria-hidden className="shrink-0 text-secondary text-2xl leading-none transition-transform group-open:rotate-45">+</span></summary>
            <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </LocationLayout>
  );
}
