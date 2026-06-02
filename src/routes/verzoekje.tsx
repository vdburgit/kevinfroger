import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_URL, breadcrumb, buildSeo } from "@/lib/seo";
import { VERZOEKJE_APP_URL } from "@/lib/verzoekje";

// Hoeveel milliseconden de bezoeker de uitleg ziet voor we automatisch
// doorsturen naar de aparte verzoekjes-app.
const REDIRECT_NA_MS = 1400;

export const Route = createFileRoute("/verzoekje")({
  head: () =>
    buildSeo({
      title: "Verzoekje bij de DJ | Doe live een muziekverzoek aan Kevin Froger",
      description:
        "Op het feest? Doe live een verzoekje bij DJ Kevin Froger. Geef je favoriete nummer door en wie weet hoor je het zo voorbijkomen op de dansvloer.",
      path: "/verzoekje",
      jsonLd: [
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Verzoekje bij de DJ", path: "/verzoekje" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Verzoekje bij de DJ",
          url: VERZOEKJE_APP_URL,
          applicationCategory: "EntertainmentApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
          provider: { "@id": `${SITE_URL}/#business` },
        },
      ],
    }),
  component: Page,
});

function Page() {
  const [doorsturen, setDoorsturen] = useState(false);

  useEffect(() => {
    // Niet doorsturen tijdens het prerenderen (headless browser): dan blijft de
    // statische HTML met de juiste meta op deze pagina staan.
    if (typeof navigator !== "undefined" && navigator.webdriver) return;
    setDoorsturen(true);
    const t = setTimeout(() => {
      window.location.href = VERZOEKJE_APP_URL;
    }, REDIRECT_NA_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="px-6 lg:px-10 pt-24 pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">
            Op het feest
          </div>
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Verzoekje bij de DJ", path: "/verzoekje" },
            ]}
            variant="default"
            className="mb-6 justify-center"
          />
          <h1
            className="text-5xl md:text-7xl leading-[0.9]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Verzoekje bij de <span className="text-primary">DJ.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Sta je op het feest en wil je een nummer horen? Geef het door aan Kevin in de
            verzoekjes-app. Het komt direct op zijn scherm en wie weet hoor je het zo voorbijkomen
            op de dansvloer.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href={VERZOEKJE_APP_URL}
              className="rounded-full bg-primary text-primary-foreground px-10 py-5 text-sm md:text-base tracking-[0.18em] uppercase font-bold hover:opacity-90 transition shadow-[var(--shadow-glow)] animate-pulse"
            >
              🎉 Open de verzoekjes-app
            </a>
            <p className="text-sm text-muted-foreground">
              {doorsturen
                ? "Je wordt automatisch doorgestuurd naar de app..."
                : "Klik op de knop om een verzoekje te doen."}
            </p>
          </div>

          <p className="mt-12 text-xs text-muted-foreground">Kevin Froger · DJ &amp; MC</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
