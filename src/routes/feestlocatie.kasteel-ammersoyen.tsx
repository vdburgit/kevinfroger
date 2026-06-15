import { createFileRoute } from "@tanstack/react-router";
import { FeestlocatiePage } from "@/components/FeestlocatiePage";
import { getLocatie } from "@/data/locaties";
import { breadcrumb, buildSeo, service } from "@/lib/seo";

const LOC = getLocatie("kasteel-ammersoyen")!;
const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";
const PATH = "/feestlocatie/kasteel-ammersoyen";

export const Route = createFileRoute("/feestlocatie/kasteel-ammersoyen")({
  head: () =>
    buildSeo({
      title: "DJ bij Kasteel Ammersoyen | Kevin Froger",
      description: "DJ huren bij Kasteel Ammersoyen in Ammerzoden? Eigen licht en geluid, DJ en MC in een persoon. Vraag je datum aan bij Kevin Froger.",
      path: PATH,
      image: IMG,
      jsonLd: [
        service({
          name: `DJ bij ${LOC.name}`,
          serviceType: "DJ op locatie",
          description: `Allround DJ en MC met eigen licht en geluid voor bruiloften en feesten bij ${LOC.name} in ${LOC.plaats}.`,
          path: PATH,
          image: IMG,
          areaServed: LOC.plaats,
        }),
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Feestlocaties", path: "/feestlocaties" },
          { name: LOC.name, path: PATH },
        ]),
      ],
    }),
  component: () => <FeestlocatiePage locatie={LOC} />,
});
