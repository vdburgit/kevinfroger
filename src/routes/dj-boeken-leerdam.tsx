import { createFileRoute } from "@tanstack/react-router";
import { CityPage } from "@/components/CityPage";
import { CITIES } from "@/data/cities";
import { breadcrumb, buildSeo, cityFaq, faqPage, service } from "@/lib/seo";

const CITY = CITIES["leerdam"];
const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";
const PATH = "/dj-boeken-leerdam";

export const Route = createFileRoute("/dj-boeken-leerdam")({
  head: () =>
    buildSeo({
      title: CITY.title,
      description: CITY.description,
      path: PATH,
      image: IMG,
      jsonLd: [
        service({
          name: `DJ ${CITY.name}`,
          serviceType: `DJ in ${CITY.name}`,
          areaServed: CITY.name,
          description: CITY.serviceDescription,
          path: PATH,
          image: IMG,
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
          { name: CITY.name, path: PATH },
        ]),
      ],
    }),
  component: () => <CityPage city={CITY} />,
});
