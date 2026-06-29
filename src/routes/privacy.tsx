import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { breadcrumb, buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => buildSeo({
    title: "Privacyverklaring DJ Kevin Froger",
    description: "Privacyverklaring van DJ Kevin Froger. Hoe persoonlijke gegevens worden verwerkt en beschermd.",
    path: "/privacy",
    noindex: true,
    jsonLd: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Privacy", path: "/privacy" },
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
        <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Privacy</div>
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy", path: "/privacy" }]} variant="default" className="mb-6" />
        <h1 className="text-5xl md:text-6xl leading-[0.9] mb-8" style={{ fontFamily: "var(--font-display)" }}>Privacyverklaring</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>DJ Kevin Froger ("ik", "mij") hecht waarde aan de bescherming van jouw persoonsgegevens. In deze verklaring lees je hoe ik daarmee omga.</p>
          <Section title="1. Welke gegevens">
            <p>Naam, e-mailadres, telefoonnummer, eventdatum en locatie, uitsluitend wanneer jij die zelf invult via het contactformulier of mij rechtstreeks mailt of belt.</p>
          </Section>
          <Section title="2. Doel van de verwerking">
            <p>Je gegevens worden alleen gebruikt voor het beantwoorden van je aanvraag, het opstellen van een offerte en de uitvoering van de boeking.</p>
          </Section>
          <Section title="3. Bewaartermijn">
            <p>Gegevens worden bewaard zolang dit noodzakelijk is voor de uitvoering van de overeenkomst en eventuele wettelijke bewaarplicht (maximaal 7 jaar voor administratie).</p>
          </Section>
          <Section title="4. Delen met derden">
            <p>Gegevens worden niet gedeeld met derden, tenzij dit noodzakelijk is voor de uitvoering van de boeking (bijv. locatiebeheerder) of wanneer dit wettelijk verplicht is.</p>
          </Section>
          <Section title="5. Jouw rechten">
            <p>Je hebt het recht je gegevens in te zien, te corrigeren of te laten verwijderen. Stuur daarvoor een mail naar Booking@kevinfroger.nl.</p>
          </Section>
          <Section title="6. Cookies">
            <p>Deze website plaatst geen tracking cookies. Alleen technisch noodzakelijke cookies worden gebruikt.</p>
          </Section>
          <Section title="7. Contact">
            <p>Vragen over deze privacyverklaring? Mail naar Booking@kevinfroger.nl of bel ons.</p>
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