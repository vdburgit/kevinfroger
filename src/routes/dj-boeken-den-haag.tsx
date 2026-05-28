import { createFileRoute } from "@tanstack/react-router";
import { CityPage } from "@/components/CityPage";
import { CITIES } from "@/data/cities";
import { SITE_URL, breadcrumb, buildSeo, service } from "@/lib/seo";

const CITY = CITIES["den-haag"];

export const Route = createFileRoute("/dj-boeken-den-haag")({
  head: () => buildSeo({
    title: CITY.title,
    description: CITY.description,
    path: "/dj-boeken-den-haag",
    image: "/images/dj-kevin-froger-bruiloft-scaled.jpeg",
    jsonLd: [
      service({
        name: `DJ ${CITY.name}`,
        serviceType: `DJ in ${CITY.name}`,
        description: CITY.serviceDescription,
        path: "/dj-boeken-den-haag",
        image: "/images/dj-kevin-froger-bruiloft-scaled.jpeg",
      }),
      {
        "@context": "https://schema.org",
        "@type": "Place",
        name: CITY.name,
        containedInPlace: { "@type": "AdministrativeArea", name: CITY.province },
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Werkgebied", path: "/regios" },
        { name: CITY.name, path: "/dj-boeken-den-haag" },
      ]),
    ],
  }),
  component: () => <CityPage city={CITY} />,
});
