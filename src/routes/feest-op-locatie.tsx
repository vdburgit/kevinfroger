import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";
import { breadcrumb, buildSeo, faqPage, service, type FaqItem } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-prive-feest-1280.webp";
const PATH = "/feest-op-locatie";

const FAQ: FaqItem[] = [
  {
    "q": "Kan de aprèsski naar mijn eigen locatie komen?",
    "a": "Ja. Dat is precies de Schirmbar. Ik breng de aprèsski sfeer het hele jaar door naar je tuin of je bedrijf, voor zo'n 90 tot 100 personen."
  },
  {
    "q": "Regelen jullie ook de bar en de horeca?",
    "a": "Ja. Samen met vaste partners regel ik de bar, de horeca en de aankleding. Jij hebt één aanspreekpunt."
  },
  {
    "q": "Voor hoeveel mensen is dit geschikt?",
    "a": "De Schirmbar is geschikt voor ongeveer 90 tot 100 personen. Voor de andere formats stemmen we het af op je locatie en je aantal gasten."
  },
  {
    "q": "Kan dit ook voor een bedrijfsfeest?",
    "a": "Ja. Thuis of op het bedrijf, particulier of zakelijk. Vertel wat je voor ogen hebt, dan maak ik een voorstel."
  }
];

const BLOCKS = [
  {
    "t": "Schirmbar",
    "d": "De Schirmbar is mijn aprèsski-tent: een schirm met bar, warme lampjes en Duitse schlagers, voor zo'n 90 tot 100 personen. Ik zet hem neer waar jij wil, thuis of op het bedrijf, het hele jaar door. De roze Flügel hoort er natuurlijk bij."
  },
  {
    "t": "Achtertuinfestival",
    "d": "Een echt festivalgevoel in je eigen tuin. Een stage op je locatie, licht, geluid en festival-aankleding. Jij nodigt uit, ik maak er een podiumavond van."
  },
  {
    "t": "Poolparty",
    "d": "Een zomers feest rond het zwembad. Opblaasartikelen, een schuimkanon als je wil en de ontspannen Ibiza- en beachsfeer. Overdag chill, 's avonds vol gas."
  },
  {
    "t": "Mobiel cafe",
    "d": "Een mobiel cafe of bar dat overal kan staan. Handig als je geen vaste bar hebt en toch het complete horecagevoel wil."
  },
  {
    "t": "Kies je sfeer",
    "d": "Jaren 70, 80 en 90 disco en foute popsongs. Aprèsski en Oktoberfest met Duitse schlagers. Foute Party met Nederlandstalige meezingers. Of Ibiza Lounge en Beach met deephouse en tropische klanken. Jij kiest de sfeer, ik draai erop."
  },
  {
    "t": "DJ en MC in een",
    "d": "Ik draai en presenteer de avond zelf. De muziek en de microfoon liggen bij dezelfde persoon, dus je hebt geen losse presentator nodig en het loopt uit een hand."
  }
];

const SECTIONS = [
  {
    "h2": "Het feest komt naar jou",
    "paragraphs": [
      "Je hoeft niet naar een feestlocatie. Het feest komt naar jou. Thuis, in de tuin, bij het zwembad of op je bedrijf. Van een echte aprèsski Schirmbar tot een achtertuinfestival of poolparty. Ik regel het complete plaatje samen met vaste partners en draai en presenteer de avond zelf. Eén aanspreekpunt, alles onder een dak.",
      "Geen vaste zaal betekent geen vaste sfeer. Een Schirmbar voelt anders dan een poolparty, en een achtertuinfestival weer anders dan een mobiel cafe. Je kiest een format dat bij je gasten en je locatie past, en daarna kies je de muziek erbij. Of het nu een [feest of verjaardag](/verjaardag-dj) is of een [bedrijfsfeest](/zakelijk-dj), het concept buigt mee. Geef je het feest in je eigen tuin? Bekijk dan [tuinfeest](/tuinfeest), daar staat ditzelfde concept toegespitst op je achtertuin.",
      "Wil je het festivalgevoel groter? Bekijk dan ook wat ik als [festival DJ](/festival-dj) doe. En omdat ik [DJ en MC in een](/dj-en-mc) ben, hoef je geen aparte presentator te boeken voor de aankondigingen en de momenten op de avond."
    ]
  },
  {
    "h2": "Zo werkt het",
    "paragraphs": [
      "Ik werk samen met vaste partners die het materiaal en de horeca leveren. Jij hebt één aanspreekpunt. Je kiest een format en een sfeer, ik maak een voorstel voor jouw locatie en aantal gasten, de partners bouwen op en ik draai en presenteer. Jij nodigt je gasten uit, de rest regel ik."
    ]
  }
];

export const Route = createFileRoute("/feest-op-locatie")({
  head: () =>
    buildSeo({
      title: "Schirmbar en feest op locatie huren | Kevin Froger",
      description: "Het complete feest naar jouw locatie. Schirmbar, achtertuinfestival of poolparty, thuis of op het bedrijf. Vraag een voorstel aan.",
      path: PATH,
      image: IMG,
      jsonLd: [
        service({
          name: "Schirmbar en feest op locatie",
          serviceType: "Party DJ",
          description: "Het complete feest op jouw locatie: Schirmbar, achtertuinfestival, poolparty of mobiele bar. Thuis of op het bedrijf, inclusief DJ en MC.",
          path: PATH,
          image: IMG,
        }),
        breadcrumb([{ "name": "Home", "path": "/" }, { "name": "Feest op locatie", "path": "/feest-op-locatie" }]),
        faqPage(FAQ),
      ],
    }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow={"Het feest naar jouw locatie"}
      titleLine1={"Het feest komt"}
      titleLine2={"naar jou"}
      intro={"Je hoeft niet naar een feestlocatie. Het feest komt naar jou. Thuis, in de tuin, bij het zwembad of op je bedrijf. Van een echte aprèsski Schirmbar tot een achtertuinfestival of poolparty. Ik regel het complete plaatje samen met vaste partners en draai en presenteer de avond zelf. Eén aanspreekpunt, alles onder een dak."}
      image={IMG}
      imageAlt={"DJ Kevin Froger draait een feest op locatie"}
      breadcrumbs={[{ "name": "Home", "path": "/" }, { "name": "Feest op locatie", "path": "/feest-op-locatie" }]}
      blocks={BLOCKS}
      sections={SECTIONS}
      links={[{ "to": "/verjaardag-dj", "label": "Feest DJ" }, { "to": "/zakelijk-dj", "label": "Bedrijfsfeest DJ" }, { "to": "/festival-dj", "label": "Festival DJ" }, { "to": "/dj-en-mc", "label": "DJ en MC" }]}
      faq={FAQ}
      ctaTitle={<>Vraag een<br />voorstel aan.</>}
      ctaSubtitle={"App of bel ons met je locatie en aantal gasten. Reactie binnen 24 uur."}
    />
  );
}
