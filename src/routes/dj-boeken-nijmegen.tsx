import { createFileRoute } from "@tanstack/react-router";
import { CityPage } from "@/components/CityPage";
import { CITIES } from "@/data/cities";
import { SITE_URL, breadcrumb, buildSeo, cityFaq, faqPage, service } from "@/lib/seo";

const CITY = CITIES["nijmegen"];

export const Route = createFileRoute("/dj-boeken-nijmegen")({
  head: () => buildSeo({
    title: CITY.title,
    description: CITY.description,
    path: "/dj-boeken-nijmegen",
    image: "/images/dj-kevin-froger-bruiloft-scaled.jpeg",
    jsonLd: [
      service({
        name: `DJ ${CITY.name}`,
        serviceType: `DJ in ${CITY.name}`,
        areaServed: CITY.name,
        description: CITY.serviceDescription,
        path: "/dj-boeken-nijmegen",
        image: "/images/dj-kevin-froger-bruiloft-scaled.jpeg",
      }),
      {
        "@context": "https://schema.org",
        "@type": "Place",
        name: CITY.name,
        containedInPlace: { "@type": "AdministrativeArea", name: CITY.province },
      },
      faqPage(cityFaq(CITY.name)),
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Werkgebied", path: "/regios" },
        { name: CITY.name, path: "/dj-boeken-nijmegen" },
      ]),
    ],
  }),
  component: () => <CityPage city={CITY} />,
});
