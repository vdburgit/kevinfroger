import { createFileRoute } from "@tanstack/react-router";
import { CityPage } from "@/components/CityPage";
import { CITIES } from "@/data/cities";
import { SITE_URL, breadcrumb, buildSeo, cityFaq, faqPage, service } from "@/lib/seo";

const CITY = CITIES["nieuwegein"];

export const Route = createFileRoute("/dj-boeken-nieuwegein")({
  head: () => buildSeo({
    title: CITY.title,
    description: CITY.description,
    path: "/dj-boeken-nieuwegein",
    image: "/images/dj-kevin-froger-bruiloft-scaled.jpeg",
    jsonLd: [
      service({
        name: `DJ ${CITY.name}`,
        serviceType: `DJ in ${CITY.name}`,
        areaServed: CITY.name,
        description: CITY.serviceDescription,
        path: "/dj-boeken-nieuwegein",
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
        { name: CITY.name, path: "/dj-boeken-nieuwegein" },
      ]),
    ],
  }),
  component: () => <CityPage city={CITY} />,
});
