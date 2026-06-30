import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";
import { breadcrumb, buildSeo, faqPage, service, type FaqItem } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-bedrijfsfeest.webp";
const PATH = "/horeca";

const FAQ: FaqItem[] = [
  {
    q: "Regelen jullie de bar en de drank voor mijn feest?",
    a: "Ja. Samen met vaste partners regel ik de bar, de drank en de aankleding, afgestemd op je feest en je locatie. Wat je precies nodig hebt aan bar, drank en bediening stemmen we vooraf af.",
  },
  {
    q: "Kan de horeca samen met de DJ in een pakket?",
    a: "Ja, en dat is juist het idee. Je boekt de muziek en de horeca via mij, dus je hebt één aanspreekpunt voor de hele avond in plaats van losse afspraken met vijf partijen.",
  },
  {
    q: "Op welke locaties kunnen jullie de bar neerzetten?",
    a: "Thuis, in de tuin, op een buitenlocatie of op het bedrijf. We kijken vooraf naar de ruimte, de stroom en de bereikbaarheid en stemmen de opstelling daarop af.",
  },
  {
    q: "Hebben jullie ook een mobiele bar of Schirmbar?",
    a: "Ja. De bar kan een mobiel cafe zijn dat overal staat, of de aprèsski Schirmbar met de roze Flügel. Bekijk daarvoor ook mijn concept feest op locatie.",
  },
  {
    q: "Wat kost de horeca bij een feest?",
    a: "Dat hangt af van het aantal gasten, wat je schenkt en welke aankleding je wil. Ik maak een voorstel op maat. Stuur je datum, locatie en wat je voor ogen hebt, dan reken ik het voor je uit.",
  },
];

const BLOCKS = [
  {
    t: "Bar en drank",
    d: "Een complete bar op je feest, van een mobiel cafe tot de aprèsski Schirmbar. Wat er geschonken wordt en hoe de bar past op je locatie stemmen we vooraf af.",
  },
  {
    t: "Aankleding in je thema",
    d: "De bar en de aankleding gaan mee in de sfeer die je kiest, van foute party tot Ibiza beach of aprèsski. Een geheel dat klopt, niet los aan elkaar geplakt.",
  },
  {
    t: "Eén aanspreekpunt",
    d: "Muziek en horeca via mij. Geen los geregel met meerdere leveranciers. Ik stem het op elkaar af, jij hebt één lijntje voor de hele avond.",
  },
  {
    t: "Via vaste partners",
    d: "Ik werk samen met vaste partners die het materiaal en de horeca leveren. Bekende mensen, dus het loopt en de kwaliteit klopt.",
  },
  {
    t: "Op elke locatie",
    d: "Thuis, in de tuin of op het bedrijf. We kijken naar de ruimte, de stroom en de bereikbaarheid en zetten de bar neer waar het werkt.",
  },
  {
    t: "Particulier en zakelijk",
    d: "Een verjaardag, een tuinfeest of een bedrijfsfeest: de horeca schaalt mee met je gelegenheid en je aantal gasten.",
  },
];

const SECTIONS = [
  {
    h2: "Bar en horeca uit een hand",
    paragraphs: [
      "Een goed feest is meer dan muziek. De bar, de drank en de aankleding bepalen net zo goed de sfeer. Het lastige is dat je daar normaal meerdere partijen voor belt, die allemaal apart moeten afstemmen. Bij mij hoeft dat niet. Ik regel de horeca samen met vaste partners, zodat de muziek en de bar uit een hand komen en op elkaar zijn afgestemd.",
      "Je kiest wat bij je feest past. Een mobiel cafe dat overal staat, een complete bar met bediening of de aprèsski Schirmbar met de roze Flügel. Wat er geschonken wordt en hoe alles op je locatie past, stemmen we vooraf af. Geen standaardpakket, maar een opzet die klopt bij jouw avond en je gasten.",
      "Dit werkt voor een [tuinfeest](/tuinfeest), een [feest op locatie](/feest-op-locatie) en net zo goed voor een [bedrijfsfeest](/zakelijk-dj). Particulier of zakelijk, de bar schaalt mee met je gelegenheid.",
    ],
  },
  {
    h2: "Een aanspreekpunt voor muziek en bar",
    paragraphs: [
      "Het grote voordeel is dat je niet met vijf partijen hoeft te schakelen. Je boekt de muziek en de horeca via mij, en ik stem het met de partners af. Dat scheelt jou tijd en gedoe, en op de avond zelf loopt het soepel omdat alles op elkaar is ingepland.",
      "Ik draai zelf als DJ en pak de microfoon als MC, terwijl de bar en de aankleding door de vaste partners worden verzorgd. Jij nodigt je gasten uit, ik regel de rest.",
    ],
  },
  {
    h2: "Hoe het werkt",
    paragraphs: [
      "Laat me weten wat voor feest je geeft, op welke locatie en met hoeveel gasten. Ik maak een voorstel op maat voor de muziek en de horeca, de partners bouwen op en na afloop wordt alles weer opgehaald.",
      "Wil je weten wat er kan op jouw locatie? Neem [contact](/contact) op met je datum en je wensen, dan denk ik mee.",
    ],
  },
];

export const Route = createFileRoute("/horeca")({
  head: () =>
    buildSeo({
      title: "Horeca voor je feest, bar en drank geregeld | Kevin Froger",
      description:
        "De bar en horeca voor je feest, samen met de DJ uit een hand. Mobiele bar of Schirmbar, op maat en op elke locatie. Vraag een voorstel aan.",
      path: PATH,
      image: IMG,
      jsonLd: [
        service({
          name: "Horeca en bar voor feesten",
          serviceType: "Horeca en bar",
          description:
            "Bar, drank en aankleding voor je feest of event, samen met de DJ uit een hand. Mobiele bar of aprèsski Schirmbar, op maat en op elke locatie.",
          path: PATH,
          image: IMG,
          rating: false,
        }),
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Horeca", path: PATH },
        ]),
        faqPage(FAQ),
      ],
    }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow={"Bar en horeca geregeld"}
      titleLine1={"De bar en horeca,"}
      titleLine2={"helemaal geregeld"}
      intro={
        "Een goed feest draait niet alleen om muziek. De bar, de drank en de aankleding bepalen de sfeer net zo goed. Ik regel de horeca samen met vaste partners, zodat de muziek en de bar uit een hand komen. Eén aanspreekpunt, jij nodigt je gasten uit en ik regel de rest."
      }
      image={IMG}
      imageAlt={"Bar en horeca op een feest van DJ Kevin Froger"}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Horeca", path: PATH },
      ]}
      blocks={BLOCKS}
      sections={SECTIONS}
      links={[
        { to: "/feest-op-locatie", label: "Feest op locatie" },
        { to: "/tuinfeest", label: "Tuinfeest" },
        { to: "/artiesten", label: "Artiesten" },
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
      ctaSubtitle={"App of bel ons met je feest, je locatie en je aantal gasten. Reactie binnen 24 uur."}
    />
  );
}
