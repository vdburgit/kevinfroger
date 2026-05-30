import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_URL, breadcrumb, buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => buildSeo({
    title: "Contact DJ Kevin Froger | Offerte aanvragen of boeken",
    description: "Neem contact op met DJ Kevin Froger voor je bruiloft, bedrijfsfeest, festival of privéfeest. Reactie binnen 24 uur. Bel, app of mail direct.",
    path: "/contact",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact DJ Kevin Froger",
        url: `${SITE_URL}/contact`,
        mainEntity: {
          "@id": `${SITE_URL}/#business`,
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "Boeking",
              telephone: "+31645251333",
              email: "Booking@kevinfroger.nl",
              areaServed: "NL",
              availableLanguage: ["Dutch", "English"],
            },
          ],
        },
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="px-6 lg:px-10 pt-20 pb-24">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Contact</div>
            <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} variant="default" className="mb-6" />
            <h1 className="text-5xl md:text-7xl leading-[0.9]" style={{ fontFamily: "var(--font-display)" }}>
              Laten we<br/><span className="text-primary">praten.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Stuur een berichtje met je datum en type event. Binnen 24 uur weet je of ik beschikbaar ben en wat het kost.
            </p>
            <div className="mt-10 space-y-5">
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-secondary font-bold">Telefoon</div>
                <a href="tel:0645251333" className="text-xl mt-1 inline-block hover:text-primary transition">Bellen</a>
              </div>
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-secondary font-bold">E-mail</div>
                <a href="mailto:Booking@kevinfroger.nl" className="text-xl mt-1 inline-block hover:text-primary transition">Booking@kevinfroger.nl</a>
              </div>
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-secondary font-bold">WhatsApp</div>
                <a href="https://wa.me/31645251333" className="text-xl mt-1 inline-block hover:text-primary transition">Direct een appje sturen</a>
              </div>
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-secondary font-bold">Werkgebied</div>
                <div className="text-base mt-1 text-muted-foreground">Heel Nederland, met focus op Betuwe, Hoeksche Waard en Zuid-Holland</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              className="rounded-2xl border-2 border-border bg-card p-8 md:p-10 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = `Aanvraag ${data.get("type")} – ${data.get("date") ?? ""}`;
                const body = `Naam: ${data.get("name")}\nE-mail: ${data.get("email")}\nTelefoon: ${data.get("phone")}\nType event: ${data.get("type")}\nDatum: ${data.get("date")}\nLocatie: ${data.get("location")}\nAantal gasten: ${data.get("guests")}\n\nBericht:\n${data.get("message")}`;
                window.location.href = `mailto:Booking@kevinfroger.nl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                setSent(true);
              }}
            >
              {sent && (
                <div className="rounded-xl border-2 border-secondary bg-secondary/10 p-4 text-sm text-secondary font-semibold">
                  Bedankt! Je mailprogramma wordt geopend met het bericht. Verstuur de mail om je aanvraag te bevestigen.
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-5">
                <Field name="name" label="Je naam" required />
                <Field name="email" label="E-mail" type="email" required />
                <Field name="phone" label="Telefoon" type="tel" />
                <Select name="type" label="Type event" required options={["Bruiloft", "Verjaardag of feest", "Bedrijfsfeest", "Festival", "Anders"]} />
                <Field name="date" label="Datum" type="date" required />
                <Field name="location" label="Locatie / plaats" />
                <Field name="guests" label="Aantal gasten" type="number" />
              </div>
              <div>
                <label className="block text-xs tracking-[0.2em] uppercase font-bold text-secondary mb-2">Bericht</label>
                <textarea name="message" rows={5} className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition" placeholder="Vertel kort over je event, wensen, must-plays..." />
              </div>
              <button type="submit" className="w-full rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm tracking-[0.18em] uppercase font-bold hover:opacity-90 transition shadow-[var(--shadow-glow)]">
                Verstuur aanvraag
              </button>
              <p className="text-xs text-muted-foreground">Liever direct contact? Bel ons of stuur een appje.</p>
            </form>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs tracking-[0.2em] uppercase font-bold text-secondary mb-2">{label}{required && " *"}</label>
      <input name={name} type={type} required={required} className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition" />
    </div>
  );
}

function Select({ name, label, options, required }: { name: string; label: string; options: string[]; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs tracking-[0.2em] uppercase font-bold text-secondary mb-2">{label}{required && " *"}</label>
      <select name={name} required={required} defaultValue="" className="w-full rounded-lg border-2 border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition">
        <option value="" disabled>Kies een type...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}