import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";
import { breadcrumb, buildSeo, faqPage, service, type FaqItem } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-bedrijfsfeest.webp";
const PATH = "/personeelsfeest-dj";

const FAQ: FaqItem[] = [
  { q: "Draai je personeelsfeesten van begin tot eind?", a: "Ja. Van de borrel bij binnenkomst en achtergrondmuziek tijdens het eten tot een volle dansvloer later op de avond. Ik bouw het rustig op en voel aan wanneer het feest los kan." },
  { q: "Kun je ook het officiële deel aankondigen?", a: "Ja, als DJ en MC in een persoon pak ik de microfoon voor een woordje van de directie, een prijsuitreiking of een jubileum. Geen losse presentator nodig." },
  { q: "Werkt het ook in een kleine borrelruimte?", a: "Ja. Ik stem mijn opstelling en geluid af op de ruimte, of het nu een kantoorkantine, een zaal of een externe locatie is. Licht en geluid neem ik zelf mee." },
  { q: "Draai je muziek voor een gemengd team?", a: "Daar ben ik op ingesteld. Op een personeelsfeest staan alle leeftijden door elkaar. Ik draai allround en lees de zaal, zodat iedereen op het juiste moment de vloer op gaat." },
  { q: "Wat kost een DJ voor een personeelsfeest?", a: "Dat hangt af van de uren en de wensen. Op de prijzenpagina vind je de pakketten en wat all-in betekent, zonder verrassingen achteraf." },
  { q: "In welk gebied draai je personeelsfeesten?", a: "Door heel Nederland, met veel boekingen in de Randstad, Zuid-Holland, de Drechtsteden en de Betuwe." },
];

const BLOCKS = [
  { t: "Van borrel naar dansvloer", d: "Rustige muziek tijdens het netwerken en het eten, en een opbouw naar een volle vloer als het feest losbarst. Eén persoon die het hele verloop in de gaten houdt." },
  { t: "DJ en MC in een", d: "Een woordje van de directie, een prijsuitreiking of een jubileum kondig ik netjes aan. Geen aparte presentator die de zaal niet kent." },
  { t: "Eigen licht en geluid", d: "Een complete show, geschikt voor een borrelruimte of een grote zaal. Jullie hoeven geen techniek te regelen." },
  { t: "Muziek voor het hele team", d: "Allround van Nederlandstalig en classics tot top 40 en dance, afgestemd op alle leeftijden die er rondlopen." },
  { t: "All-in en helder vooraf", d: "De uren en wensen leggen we vooraf vast. Je weet wat je betaalt, zonder verrassingen achteraf." },
  { t: "Vast aanspreekpunt", d: "Van de eerste mail tot de avond zelf heb je direct contact met mij. Eén lijntje voor alles wat met de muziek te maken heeft." },
];

const SECTIONS = [
  {
    h2: "Van de borrel tot de laatste plaat",
    paragraphs: [
      "Een personeelsfeest begint vaak rustig: een borrel, even bijpraten, misschien een hapje. Ik draai dan achtergrondmuziek die niet over de gesprekken heen walst. Naarmate de avond vordert bouw ik op, zodat de eerste mensen vanzelf de vloer op komen en het feest op gang komt zonder dat het geforceerd voelt.",
      "Omdat ik zelf draai en presenteer, weet ik precies wanneer de muziek even zachter moet voor een aankondiging en wanneer het weer aan kan. Meer over hoe ik zakelijke events aanpak lees je op de [bedrijfsfeest-pagina](/zakelijk-dj), en hoe het zit met de combinatie van draaien en presenteren op de pagina over [DJ en MC in een persoon](/dj-en-mc).",
    ],
  },
  {
    h2: "Muziek voor een gemengd team",
    paragraphs: [
      "Op een personeelsfeest staan jongere en oudere collega's door elkaar, en die hebben niet allemaal dezelfde smaak. Ik draai allround en lees de zaal, dus ik schakel van classics en Nederlandstalig naar top 40 en dance op het moment dat het past. Verzoekjes verwerk ik in de set, zodat het het feest van jullie team blijft.",
      "Wil je weten wat een avond kost? Op de [prijzenpagina](/prijzen) staan de pakketten en wat all-in inhoudt. Vermeld je datum erbij, dan check ik meteen of ik nog vrij ben.",
    ],
  },
];

export const Route = createFileRoute("/personeelsfeest-dj")({
  head: () =>
    buildSeo({
      title: "DJ personeelsfeest huren | Kevin Froger",
      description: "DJ voor je personeelsfeest? Van borrel tot volle dansvloer, DJ en MC in een persoon, eigen licht en geluid en all-in vooraf. 5,0 op Google uit 10 reviews.",
      path: PATH,
      image: IMG,
      jsonLd: [
        service({
          name: "DJ personeelsfeest",
          serviceType: "Corporate Party DJ",
          description: "Allround DJ en MC voor personeelsfeesten en bedrijfsborrels. Van borrel tot dansvloer, inclusief eigen licht en geluid. Voor personeelsfeesten door heel Nederland.",
          path: PATH,
          image: IMG,
        }),
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "DJ personeelsfeest", path: PATH },
        ]),
        faqPage(FAQ),
      ],
    }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="Personeelsfeest DJ"
      titleLine1="DJ voor je personeelsfeest"
      titleLine2="die de tent vol houdt"
      intro="Een personeelsfeest is geslaagd als het team loskomt en de vloer vol staat. Als DJ en MC in een persoon draai ik van de borrel tot de laatste plaat en praat ik het officiële deel netjes aan elkaar. Eigen licht en geluid, all-in vooraf."
      image={IMG}
      imageAlt="DJ Kevin Froger draait een personeelsfeest met volle dansvloer"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "DJ personeelsfeest", path: PATH },
      ]}
      blocks={BLOCKS}
      sections={SECTIONS}
      links={[
        { to: "/zakelijk-dj", label: "Bedrijfsfeest DJ" },
        { to: "/dj-en-mc", label: "DJ en MC in een" },
        { to: "/prijzen", label: "Prijzen" },
        { to: "/werkwijze", label: "Werkwijze" },
      ]}
      faq={FAQ}
      ctaSubtitle="App of bel ons met de datum en locatie van jullie personeelsfeest. Reactie binnen 24 uur."
    />
  );
}
