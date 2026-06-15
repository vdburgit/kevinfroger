import { createFileRoute } from "@tanstack/react-router";
import { CityPage } from "@/components/CityPage";
import { CITIES } from "@/data/cities";
import { breadcrumb, buildSeo, service } from "@/lib/seo";

const CITY = CITIES["s-gravendeel"];
const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";
const PATH = "/dj-boeken-s-gravendeel";

export const Route = createFileRoute("/dj-boeken-s-gravendeel")({
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
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Werkgebied", path: "/regios" },
          { name: CITY.name, path: PATH },
        ]),
      ],
    }),
  component: () => <CityPage city={CITY} />,
});
