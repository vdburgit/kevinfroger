import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://kevinfroger.nl";
const OG_IMAGE = `${SITE_URL}/images/kevin-portrait.webp`;

const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "DJ Kevin Froger",
      url: `${SITE_URL}/`,
      telephone: "+31645251333",
      email: "Booking@kevinfroger.nl",
      image: `${SITE_URL}/images/kevin-portrait.webp`,
      logo: `${SITE_URL}/images/kevin-logo.png`,
      priceRange: "€€",
      description:
        "Allround DJ voor bruiloft, bedrijfsfeest, verjaardag of festival door heel Nederland. Veel ervaring in de Betuwe, Bommelerwaard, Hoeksche Waard en Zuid-Holland. Eigen licht en geluid, DJ en MC in een persoon.",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Zuid-Holland",
        addressCountry: "NL",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        bestRating: "5",
        reviewCount: "10",
      },
      areaServed: [
        { "@type": "Country", name: "Nederland" },
        // Alle 12 provincies
        { "@type": "State", name: "Zuid-Holland" },
        { "@type": "State", name: "Noord-Holland" },
        { "@type": "State", name: "Gelderland" },
        { "@type": "State", name: "Utrecht" },
        { "@type": "State", name: "Noord-Brabant" },
        { "@type": "State", name: "Limburg" },
        { "@type": "State", name: "Overijssel" },
        { "@type": "State", name: "Drenthe" },
        { "@type": "State", name: "Friesland" },
        { "@type": "State", name: "Groningen" },
        { "@type": "State", name: "Flevoland" },
        { "@type": "State", name: "Zeeland" },
        // Regio's
        { "@type": "AdministrativeArea", name: "Betuwe" },
        { "@type": "AdministrativeArea", name: "Rivierenland" },
        { "@type": "AdministrativeArea", name: "Bommelerwaard" },
        { "@type": "AdministrativeArea", name: "West Betuwe" },
        { "@type": "AdministrativeArea", name: "Hoeksche Waard" },
        { "@type": "AdministrativeArea", name: "Drechtsteden" },
        { "@type": "AdministrativeArea", name: "Land van Heusden en Altena" },
        // Betuwe & Rivierenland steden
        { "@type": "City", name: "Tiel" },
        { "@type": "City", name: "Culemborg" },
        { "@type": "City", name: "Geldermalsen" },
        { "@type": "City", name: "Zaltbommel" },
        { "@type": "City", name: "Gorinchem" },
        { "@type": "City", name: "Leerdam" },
        // Betuwe dorpen
        { "@type": "Place", name: "Tuil" },
        { "@type": "Place", name: "Ophemert" },
        { "@type": "Place", name: "Varik" },
        { "@type": "Place", name: "Heesselt" },
        { "@type": "Place", name: "Wamel" },
        { "@type": "Place", name: "Druten" },
        { "@type": "Place", name: "Beneden-Leeuwen" },
        { "@type": "Place", name: "Buren" },
        { "@type": "Place", name: "Beusichem" },
        { "@type": "Place", name: "Zoelen" },
        { "@type": "Place", name: "Kesteren" },
        { "@type": "Place", name: "Opheusden" },
        { "@type": "Place", name: "Ochten" },
        { "@type": "Place", name: "Dodewaard" },
        { "@type": "Place", name: "Maurik" },
        { "@type": "Place", name: "Lienden" },
        { "@type": "Place", name: "Eck en Wiel" },
        { "@type": "Place", name: "Ingen" },
        { "@type": "Place", name: "Echteld" },
        { "@type": "Place", name: "Ravenswaaij" },
        { "@type": "Place", name: "Beesd" },
        { "@type": "Place", name: "Buurmalsen" },
        { "@type": "Place", name: "Tricht" },
        { "@type": "Place", name: "Meteren" },
        { "@type": "Place", name: "Wadenoijen" },
        { "@type": "Place", name: "Kapel-Avezaath" },
        { "@type": "Place", name: "Kerk-Avezaath" },
        { "@type": "Place", name: "Rumpt" },
        { "@type": "Place", name: "Asch" },
        { "@type": "Place", name: "Erichem" },
        // Bommelerwaard dorpen
        { "@type": "Place", name: "Brakel" },
        { "@type": "Place", name: "Aalst" },
        { "@type": "Place", name: "Poederoijen" },
        { "@type": "Place", name: "Hurwenen" },
        { "@type": "Place", name: "Nederhemert" },
        { "@type": "Place", name: "Kerkwijk" },
        { "@type": "Place", name: "Gameren" },
        { "@type": "Place", name: "Velddriel" },
        { "@type": "Place", name: "Hedel" },
        { "@type": "Place", name: "Ammerzoden" },
        { "@type": "Place", name: "Rossum" },
        { "@type": "Place", name: "Heerewaarden" },
        // Hoeksche Waard kernen
        { "@type": "Place", name: "Oud-Beijerland" },
        { "@type": "Place", name: "Nieuw-Beijerland" },
        { "@type": "Place", name: "Zuid-Beijerland" },
        { "@type": "Place", name: "Heinenoord" },
        { "@type": "Place", name: "Mijnsheerenland" },
        { "@type": "Place", name: "Westmaas" },
        { "@type": "Place", name: "Klaaswaal" },
        { "@type": "Place", name: "Numansdorp" },
        { "@type": "Place", name: "Strijen" },
        { "@type": "Place", name: "Maasdam" },
        { "@type": "Place", name: "Puttershoek" },
        { "@type": "Place", name: "'s-Gravendeel" },
        { "@type": "Place", name: "Goudswaard" },
        { "@type": "Place", name: "Piershil" },
        // Zuid-Holland steden
        { "@type": "City", name: "Dordrecht" },
        { "@type": "City", name: "Zwijndrecht" },
        { "@type": "City", name: "Barendrecht" },
        { "@type": "City", name: "Hendrik-Ido-Ambacht" },
        { "@type": "City", name: "Ridderkerk" },
        { "@type": "City", name: "Papendrecht" },
        { "@type": "City", name: "Sliedrecht" },
        { "@type": "City", name: "Hardinxveld-Giessendam" },
        { "@type": "City", name: "Rotterdam" },
        { "@type": "City", name: "Schiedam" },
        { "@type": "City", name: "Vlaardingen" },
        { "@type": "City", name: "Spijkenisse" },
        { "@type": "City", name: "Capelle aan den IJssel" },
        { "@type": "City", name: "Krimpen aan den IJssel" },
        { "@type": "City", name: "Schoonhoven" },
        { "@type": "City", name: "Gouda" },
        { "@type": "City", name: "Den Haag" },
        { "@type": "City", name: "Delft" },
        { "@type": "City", name: "Rijswijk" },
        { "@type": "City", name: "Zoetermeer" },
        { "@type": "City", name: "Leiden" },
        // Utrecht & omgeving
        { "@type": "City", name: "Utrecht" },
        { "@type": "City", name: "Houten" },
        { "@type": "City", name: "Nieuwegein" },
        { "@type": "City", name: "Vianen" },
        { "@type": "City", name: "IJsselstein" },
        { "@type": "City", name: "Wijk bij Duurstede" },
        // Verder Gelderland
        { "@type": "City", name: "Arnhem" },
        { "@type": "City", name: "Nijmegen" },
        { "@type": "City", name: "Apeldoorn" },
        { "@type": "City", name: "Doetinchem" },
        { "@type": "City", name: "Zutphen" },
        { "@type": "City", name: "Wageningen" },
        { "@type": "City", name: "Ede" },
        { "@type": "City", name: "Harderwijk" },
        // Utrecht aanvullingen
        { "@type": "City", name: "Amersfoort" },
        { "@type": "City", name: "Veenendaal" },
        { "@type": "City", name: "Zeist" },
        { "@type": "City", name: "Woerden" },
        // Noord-Brabant
        { "@type": "City", name: "'s-Hertogenbosch" },
        { "@type": "City", name: "Oss" },
        { "@type": "City", name: "Eindhoven" },
        { "@type": "City", name: "Tilburg" },
        { "@type": "City", name: "Breda" },
        { "@type": "City", name: "Helmond" },
        { "@type": "City", name: "Roosendaal" },
        { "@type": "City", name: "Bergen op Zoom" },
        { "@type": "City", name: "Waalwijk" },
        { "@type": "City", name: "Veghel" },
        // Noord-Holland
        { "@type": "City", name: "Amsterdam" },
        { "@type": "City", name: "Haarlem" },
        { "@type": "City", name: "Zaanstad" },
        { "@type": "City", name: "Alkmaar" },
        { "@type": "City", name: "Hilversum" },
        { "@type": "City", name: "Hoorn" },
        { "@type": "City", name: "Purmerend" },
        { "@type": "City", name: "Den Helder" },
        // Overijssel
        { "@type": "City", name: "Zwolle" },
        { "@type": "City", name: "Enschede" },
        { "@type": "City", name: "Deventer" },
        { "@type": "City", name: "Almelo" },
        { "@type": "City", name: "Hengelo" },
        { "@type": "City", name: "Kampen" },
        // Flevoland
        { "@type": "City", name: "Almere" },
        { "@type": "City", name: "Lelystad" },
        { "@type": "City", name: "Dronten" },
        { "@type": "City", name: "Emmeloord" },
        // Friesland
        { "@type": "City", name: "Leeuwarden" },
        { "@type": "City", name: "Sneek" },
        { "@type": "City", name: "Drachten" },
        { "@type": "City", name: "Heerenveen" },
        // Drenthe
        { "@type": "City", name: "Assen" },
        { "@type": "City", name: "Emmen" },
        { "@type": "City", name: "Hoogeveen" },
        { "@type": "City", name: "Meppel" },
        // Groningen
        { "@type": "City", name: "Groningen" },
        { "@type": "City", name: "Veendam" },
        { "@type": "City", name: "Stadskanaal" },
        // Zeeland
        { "@type": "City", name: "Middelburg" },
        { "@type": "City", name: "Vlissingen" },
        { "@type": "City", name: "Goes" },
        { "@type": "City", name: "Terneuzen" },
        { "@type": "City", name: "Zierikzee" },
        // Limburg
        { "@type": "City", name: "Maastricht" },
        { "@type": "City", name: "Heerlen" },
        { "@type": "City", name: "Sittard" },
        { "@type": "City", name: "Roermond" },
        { "@type": "City", name: "Venlo" },
        { "@type": "City", name: "Weert" },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#kevin`,
      name: "Kevin Froger",
      jobTitle: "Allround DJ",
      worksFor: { "@id": `${SITE_URL}/#business` },
      url: SITE_URL,
      image: `${SITE_URL}/images/kevin-portrait.webp`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "DJ Kevin Froger",
      inLanguage: "nl-NL",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#E5512C" },
      { title: "DJ Kevin Froger | Allround DJ Nederland" },
      {
        name: "description",
        content:
          "Allround DJ voor bruiloft, bedrijfsfeest of festival door heel Nederland. Veel ervaring in de Betuwe, Bommelerwaard, Hoeksche Waard en Zuid-Holland.",
      },
      { property: "og:site_name", content: "DJ Kevin Froger" },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "NL" },
      { name: "geo.placename", content: "Nederland" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/images/kevin-logo.png" },
      { rel: "apple-touch-icon", href: "/images/kevin-logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Barlow+Condensed:wght@500;600;700&family=Bebas+Neue&family=Fjalla+One&family=Inter:wght@400;500;600;700;800&family=Oswald:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORGANIZATION_JSONLD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
