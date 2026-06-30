import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";
import { breadcrumb, buildSeo, faqPage, service, type FaqItem } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";
const PATH = "/bruiloft-dj-tiel";

const FAQ: FaqItem[] = [
  {
    "q": "Kom je voor een bruiloft helemaal naar Tiel?",
    "a": "Ja, graag. Tiel ligt verder van mijn woonplaats 's-Gravendeel, maar ik draai geregeld in de Betuwe en ken de streek goed. Ik ben er dus niet om de hoek, maar wel een vertrouwd gezicht dat hier vaker staat."
  },
  {
    "q": "Draai je de hele trouwdag, ook de ceremonie en het diner?",
    "a": "Ja. Ik kan vanaf de ceremonie aanwezig zijn, het diner van rustige achtergrondmuziek voorzien en daarna de feestavond draaien. Bij een bruiloft in een zaal aan de Linge of een schuur tussen de boomgaarden ben ik de hele dag jullie vaste gezicht."
  },
  {
    "q": "Heb ik naast jou nog een aparte presentator nodig?",
    "a": "Nee. Ik ben DJ en MC in een persoon. Ik kondig de binnenkomst aan, geef het moment voor de speeches en luid de openingsdans in. Dat scheelt jullie een extra persoon en het loopt soepeler."
  },
  {
    "q": "Onze bruiloft is op een boerderij of in een schuur. Lukt dat?",
    "a": "Zeker. In en rond Tiel zit het feest vaak op een landelijke locatie tussen de fruitboomgaarden. Ik neem eigen licht en geluid mee en stem dat af op een hoge schuur of een tent in het open veld. Ik check vooraf even of er genoeg stroom is."
  },
  {
    "q": "In welke dorpen rond Tiel draai je ook?",
    "a": "In de hele streek. Denk aan Wadenoijen, Zoelen, Kapel-Avezaath en Kerk-Avezaath, en aan de Waalkant Tuil, Ophemert, Varik en Heesselt. Ook richting Buren en verder de Betuwe in kom ik graag."
  },
  {
    "q": "Hoe weet ik of je vrij bent op onze trouwdatum?",
    "a": "Stuur me jullie datum en de locatie in of rond Tiel, dan kijk ik meteen in mijn agenda. Ik reageer binnen 24 uur en denk graag mee over de muziek en de momenten."
  }
];

const BLOCKS = [
  {
    "t": "Van ceremonie tot laatste plaat",
    "d": "Ik draai jullie hele trouwdag aan elkaar: muziek bij de ceremonie, achtergrond bij het diner, de openingsdans en daarna een volle vloer. Een vast gezicht van begin tot eind."
  },
  {
    "t": "DJ en MC in een",
    "d": "Muziek en microfoon bij dezelfde persoon. Ik kondig aan, geef het moment voor de speeches en zet de openingsdans op tijd in, zodat jullie programma soepel loopt zonder losse presentator."
  },
  {
    "t": "Thuis op boerderijen en schuren",
    "d": "Veel Betuwse bruiloften zitten in een schuur of op een buitenlocatie tussen de boomgaarden. Ik neem eigen licht en geluid mee en stem dat af op een hoge schuur of een tent in het veld."
  },
  {
    "t": "Vaak in de Betuwe",
    "d": "Tiel ligt verder van mijn dorp 's-Gravendeel, maar ik draai hier geregeld. Geen leverancier van om de hoek, wel iemand die de streek kent en hier graag staat."
  },
  {
    "t": "Jullie muziek, geen vaste lijst",
    "d": "We spreken vooraf af wat er echt in moet en wat juist niet. Op de avond lees ik de zaal en stuur ik bij, zodat de vloer vol blijft van jong tot oud."
  },
  {
    "t": "5,0 op Google",
    "d": "Tien stellen en feestgevers gingen jullie voor en gaven samen een 5,0. Geen grote aantallen, wel eerlijke verhalen van mensen die mij echt hebben meegemaakt."
  }
];

const SECTIONS = [
  {
    "h2": "Een bruiloft DJ die de Betuwe kent",
    "paragraphs": [
      "Ik woon in 's-Gravendeel, in de Hoeksche Waard. Tiel ligt verder weg, dus ik ben hier niet om de hoek. Eerlijk is eerlijk. Maar ik draai geregeld in de Betuwe en kom hier graag. Ik ken de streek, de wegen en het soort locaties, en ik plan mijn rit zo dat ik ruim op tijd ben om op te bouwen en alles te testen voordat jullie eerste gasten binnenkomen.",
      "Tiel ligt aan de Waal, midden in de fruitstreek. Dat zie je terug in de trouwlocaties. Naast zalen in en rond de stad zit het feest hier vaak op een landelijke plek: een verbouwde schuur, een boerderij of een buitenlocatie tussen de boomgaarden. Dat soort plekken vraagt iets anders dan een standaardzaal. Een hoge schuur galmt, een tent in het open veld verliest geluid aan de wind. Ik weet hoe ik mijn set daarop afstem zodat het overal goed klinkt.",
      "Ik draai niet alleen in Tiel zelf, maar in de hele streek eromheen: Wadenoijen, Zoelen, Kapel-Avezaath en Kerk-Avezaath, en langs de Waal Tuil, Ophemert, Varik en Heesselt. Ook richting Buren en verder de Betuwe in kom ik graag."
    ]
  },
  {
    "h2": "De hele dag op muziek, door een persoon",
    "paragraphs": [
      "Een trouwdag in de Betuwe begint vaak rustig: muziek bij de binnenkomst, iets passends bij de ceremonie en achtergrondmuziek bij het diner die de gesprekken niet overstemt. Daarna bouw ik op naar de openingsdans en het feest. Omdat ik er de hele dag bij ben, lopen die overgangen vanzelf en hoeven jullie niet aan een nieuw gezicht te wennen.",
      "Ik ben ook MC. Ik kondig de binnenkomst aan, geef het moment voor de speeches en zet de openingsdans op het juiste moment in. Dat stem ik af met de trouwambtenaar, de cateraar en jullie ceremoniemeester, zodat de dag soepel loopt. Een losse presentator is daardoor niet nodig.",
      "Vooraf nemen we jullie wensen door. Welke nummers moeten er echt in, welk genre past bij jullie gasten en wat willen jullie absoluut niet horen. Op de avond zelf kijk ik naar de vloer en pas ik aan: rustiger als het even mag, vol gas als iedereen staat."
    ]
  },
  {
    "h2": "Hoe het verder gaat",
    "paragraphs": [
      "Het begint met een gesprek, vaak even bellen of een videocall. Ik wil weten wie jullie zijn, hoe jullie dag eruitziet en wat voor sfeer jullie zoeken. Daarna leg ik uit wat ik meeneem en maken we samen een plan voor de muziek en de momenten.",
      "Laat me weten op welke datum jullie trouwen en op welke locatie in of rond Tiel, dan check ik of ik vrij ben. Ik reageer binnen 24 uur en denk graag mee."
    ]
  }
];

export const Route = createFileRoute("/bruiloft-dj-tiel")({
  head: () =>
    buildSeo({
      title: "Bruiloft DJ Tiel | Kevin Froger",
      description: "Bruiloft DJ Tiel? Ik draai geregeld in de Betuwe, ook op boerderijen en in schuren. Eigen licht en geluid, DJ en MC in een. 5,0 op Google. Check je trouwdatum.",
      path: PATH,
      image: IMG,
      jsonLd: [
        service({
          name: "Bruiloft DJ Tiel",
          serviceType: "Wedding DJ",
          description: "Bruiloft DJ in Tiel en de Betuwe. De hele dag van ceremonie tot feest, eigen licht en geluid, DJ en MC in een persoon.",
          path: PATH,
          image: IMG,
          areaServed: "Tiel",
        }),
        breadcrumb([{"name":"Home","path":"/"},{"name":"Bruiloft DJ","path":"/bruiloft-dj"},{"name":"Tiel","path":"/bruiloft-dj-tiel"}]),
        faqPage(FAQ),
      ],
    }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow={"Trouwen in de Betuwe"}
      titleLine1={"Bruiloft DJ in"}
      titleLine2={"Tiel"}
      intro={"Ik ben Kevin, DJ en MC uit 's-Gravendeel. Jullie trouwen in Tiel of een dorp eromheen. Ik ben hier niet om de hoek, maar ik draai geregeld in de Betuwe en ken de zalen, de schuren en de boerderijen tussen de boomgaarden. Eigen licht en geluid mee, en een dag die op muziek precies klopt."}
      image={IMG}
      imageAlt={"DJ Kevin Froger op een bruiloft in Tiel"}
      breadcrumbs={[{"name":"Home","path":"/"},{"name":"Bruiloft DJ","path":"/bruiloft-dj"},{"name":"Tiel","path":"/bruiloft-dj-tiel"}]}
      blocks={BLOCKS}
      sections={SECTIONS}
      links={[{"to":"/bruiloft-dj","label":"Bruiloft DJ"},{"to":"/dj-boeken-tiel","label":"DJ Tiel"},{"to":"/bruiloft-dj-betuwe","label":"Bruiloft DJ Betuwe"},{"to":"/bruiloft-dj-hoeksche-waard","label":"Bruiloft DJ Hoeksche Waard"}]}
      faq={FAQ}
      ctaTitle={<>Check jullie<br/>trouwdatum.</>}
      ctaSubtitle={"App of bel ons met jullie datum en locatie in of rond Tiel. Reactie binnen 24 uur."}
    />
  );
}
