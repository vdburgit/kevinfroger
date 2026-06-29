import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { breadcrumb, buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/algemene-voorwaarden")({
  head: () => buildSeo({
    title: "Algemene voorwaarden DJ Kevin Froger",
    description: "Algemene voorwaarden van DJ Kevin Froger voor boekingen, betalingen en uitvoering van DJ-diensten.",
    path: "/algemene-voorwaarden",
    noindex: true,
    jsonLd: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Algemene voorwaarden", path: "/algemene-voorwaarden" },
      ]),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <article className="max-w-3xl mx-auto px-6 lg:px-10 py-16">
        <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Voorwaarden</div>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Algemene voorwaarden", path: "/algemene-voorwaarden" }]} variant="default" className="mb-6" />
        <h1 className="text-5xl md:text-6xl leading-[0.9] mb-8" style={{ fontFamily: "var(--font-display)" }}>Algemene voorwaarden</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <Section title="1. Toepasselijkheid">
            <p>Deze voorwaarden gelden voor alle aanbiedingen en overeenkomsten van DJ Kevin Froger, tenzij schriftelijk anders overeengekomen.</p>
          </Section>
          <Section title="2. Offertes & boekingen">
            <p>Offertes zijn vrijblijvend en 14 dagen geldig. Een boeking is definitief na schriftelijke bevestiging door beide partijen.</p>
          </Section>
          <Section title="3. Tarieven & betaling">
            <p>Alle genoemde tarieven zijn in euro's en exclusief BTW, tenzij anders vermeld. Facturen dienen binnen 14 dagen na factuurdatum te zijn voldaan. Voor particuliere boekingen wordt 25% aanbetaling gevraagd; restant uiterlijk 7 dagen voor het event.</p>
          </Section>
          <Section title="4. Annulering door opdrachtgever">
            <p>Bij annulering door opdrachtgever is verschuldigd: tot 90 dagen voor het event 25%, tussen 90 en 30 dagen 50%, binnen 30 dagen 100% van de overeengekomen prijs.</p>
          </Section>
          <Section title="5. Annulering door DJ">
            <p>Bij onverhoopte annulering door DJ Kevin Froger (bijv. door ziekte) wordt in overleg een vervangende DJ van vergelijkbaar niveau geregeld of de aanbetaling volledig gerestitueerd.</p>
          </Section>
          <Section title="6. Locatie & techniek">
            <p>Opdrachtgever zorgt voor een geschikte opstelplek, deugdelijke stroomvoorziening (minimaal 2x 16A geaard) en een veilige werkomgeving. Beschadiging van apparatuur door derden komt voor rekening van opdrachtgever.</p>
          </Section>
          <Section title="7. Geluid & overlast">
            <p>Opdrachtgever is verantwoordelijk voor het naleven van eventueel geldende geluidsnormen en vergunningen op de locatie.</p>
          </Section>
          <Section title="8. Auteursrechten">
            <p>Buma/Stemra-afdracht is voor rekening van opdrachtgever, tenzij de locatie hier al voor zorgt.</p>
          </Section>
          <Section title="9. Aansprakelijkheid">
            <p>Aansprakelijkheid is beperkt tot het bedrag van de overeenkomst. Schade door overmacht of toedoen van derden is uitgesloten.</p>
          </Section>
          <Section title="10. Toepasselijk recht">
            <p>Op alle overeenkomsten is Nederlands recht van toepassing.</p>
          </Section>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl text-foreground mt-8 mb-3" style={{ fontFamily: "var(--font-display)" }}>{title}</h2>
      {children}
    </div>
  );
}