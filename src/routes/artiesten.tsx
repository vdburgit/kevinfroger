import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";
import { breadcrumb, buildSeo, faqPage, service, type FaqItem } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-festival.webp";
const PATH = "/artiesten";

const FAQ: FaqItem[] = [
  {
    q: "Welke artiesten kunnen jullie regelen?",
    a: "Via vaste partners regel ik de act die bij je feest past. Denk aan een zanger of saxofonist naast de DJ, live percussie of een complete act. Wat er speelt en wat bij je gasten past, stemmen we vooraf af.",
  },
  {
    q: "Kan een live act samen met de DJ?",
    a: "Ja, dat is juist de kracht. Ik draai als DJ en stem de set af op de act, zodat een zanger of saxofonist naadloos meedraait. Als DJ en MC kondig ik de optredens zelf aan, dus de avond loopt strak.",
  },
  {
    q: "Is dit voor een bruiloft, feest of bedrijfsfeest?",
    a: "Voor allemaal. Een live randje op je bruiloft, een knaller op je verjaardag of een act voor je bedrijfsfeest: ik regel het op maat van de gelegenheid en je gasten.",
  },
  {
    q: "Boeken we de DJ en de artiest apart?",
    a: "Nee, dat is juist het idee. Je regelt de muziek en de artiesten via mij, dus je hebt één aanspreekpunt voor de hele avond in plaats van losse afspraken met meerdere partijen.",
  },
  {
    q: "Wat kost het om een artiest erbij te boeken?",
    a: "Dat hangt af van de act, de duur en je wensen. Ik maak een voorstel op maat. Stuur je datum, locatie en wat je voor ogen hebt, dan reken ik het voor je uit.",
  },
  {
    q: "Hoe ver van tevoren moet ik boeken?",
    a: "Voor een act is vroeg boeken slim, want de goede mensen raken vol. App of bel me met je datum, dan check ik meteen wat er kan.",
  },
];

const BLOCKS = [
  {
    t: "DJ plus live",
    d: "De energie van een DJ-set met een live randje erbij. Een zanger of saxofonist die meedraait op de muziek, voor een avond die net even meer brengt.",
  },
  {
    t: "De juiste act",
    d: "Van een troubadour bij de borrel tot een knaller op de dansvloer. Via vaste partners regel ik de act die past bij je feest en je gasten.",
  },
  {
    t: "Eén aanspreekpunt",
    d: "Muziek en artiesten via mij. Geen los geregel met meerdere partijen. Ik stem het op elkaar af, jij hebt één lijntje voor de hele avond.",
  },
  {
    t: "DJ en MC die aankondigt",
    d: "Ik draai en pak de microfoon, dus ik kondig de optredens aan en houd het tempo erin. De overgang tussen DJ en live act loopt soepel.",
  },
  {
    t: "Op maat",
    d: "Je kiest de act bij de sfeer en het budget. Klein houden of groot uitpakken kan allebei, we stemmen het vooraf af.",
  },
  {
    t: "Feest en bedrijf",
    d: "Een bruiloft, een verjaardag of een bedrijfsfeest: de act schaalt mee met je gelegenheid en je aantal gasten.",
  },
];

const SECTIONS = [
  {
    h2: "Een DJ-avond met een live randje",
    paragraphs: [
      "Een DJ houdt de vloer vol, maar soms wil je net iets meer. Een zanger die meezingt op de hits, een saxofonist die over de beat heen speelt of een live act die de avond een hoogtepunt geeft. Dat regel ik erbij. Via vaste partners boek ik de act die bij je feest en je gasten past, en als DJ stem ik mijn set daarop af zodat het een geheel wordt.",
      "Omdat ik [DJ en MC in een](/dj-en-mc) persoon ben, kondig ik de optredens zelf aan en houd ik het tempo erin. De overgang van de DJ naar een live act en weer terug loopt daardoor soepel, zonder stiltes of gedoe op het podium.",
      "Dit werkt op een [bruiloft](/bruiloft-dj), een [feest of verjaardag](/verjaardag-dj) en op een [bedrijfsfeest](/zakelijk-dj). Van een ingetogen act bij de ceremonie tot een knaller laat op de avond.",
    ],
  },
  {
    h2: "Een aanspreekpunt voor de hele avond",
    paragraphs: [
      "Het voordeel is dat je niet apart een DJ en een artiest hoeft te boeken die elkaar nog moeten leren kennen. Je regelt het via mij, ik stem het met de act en de partners af, en op de avond zelf klopt het programma. Dat scheelt jou gedoe en geeft een strakkere show.",
      "Wil je er ook de bar en de aankleding bij? Bekijk dan [horeca](/horeca) en mijn concept [feest op locatie](/feest-op-locatie). Zo komt de hele avond, van muziek en act tot de bar, uit een hand.",
    ],
  },
  {
    h2: "Hoe het werkt",
    paragraphs: [
      "Laat me weten wat voor feest je geeft, wat voor sfeer je zoekt en met hoeveel gasten. Ik denk mee over welke act past en maak een voorstel op maat. De act en ik stemmen vooraf af, zodat het op de avond als een geheel voelt.",
      "Neem [contact](/contact) op met je datum en je wensen, dan check ik meteen wat er kan.",
    ],
  },
];

export const Route = createFileRoute("/artiesten")({
  head: () =>
    buildSeo({
      title: "Artiesten boeken voor je feest of event | Kevin Froger",
      description:
        "Artiesten en live acts boeken naast de DJ, uit een hand. Zanger, saxofonist of complete act, op maat van je feest. Vraag een voorstel aan.",
      path: PATH,
      image: IMG,
      jsonLd: [
        service({
          name: "Artiesten en live acts boeken",
          serviceType: "Live entertainment",
          description:
            "Artiesten en live acts naast de DJ, uit een hand geregeld. Zanger, saxofonist of complete act, op maat van je feest of bedrijfsevent.",
          path: PATH,
          image: IMG,
          rating: false,
        }),
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Artiesten", path: PATH },
        ]),
        faqPage(FAQ),
      ],
    }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow={"Artiesten en live acts"}
      titleLine1={"Artiesten voor je"}
      titleLine2={"feest geregeld"}
      intro={
        "Een DJ houdt de vloer vol, maar soms wil je net iets meer. Een zanger, een saxofonist of een complete live act erbij. Via vaste partners regel ik de artiest die bij je feest past, en als DJ stem ik mijn set daarop af. Eén aanspreekpunt voor de muziek en de acts, jij nodigt je gasten uit en ik regel de rest."
      }
      image={IMG}
      imageAlt={"DJ Kevin Froger met een live act op het podium"}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Artiesten", path: PATH },
      ]}
      blocks={BLOCKS}
      sections={SECTIONS}
      links={[
        { to: "/dj-en-mc", label: "DJ en MC" },
        { to: "/horeca", label: "Horeca" },
        { to: "/feest-op-locatie", label: "Feest op locatie" },
        { to: "/zakelijk-dj", label: "Bedrijfsfeest DJ" },
      ]}
      faq={FAQ}
      ctaTitle={
        <>
          Vraag een
          <br />
          voorstel aan.
        </>
      }
      ctaSubtitle={"App of bel ons met je feest, je datum en je wensen. Reactie binnen 24 uur."}
    />
  );
}
