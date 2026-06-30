import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";
import { breadcrumb, buildSeo, faqPage, service, type FaqItem } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";
const PATH = "/bruiloft-dj-betuwe";

const FAQ: FaqItem[] = [
  {
    "q": "Kom je voor een bruiloft naar de Betuwe?",
    "a": "Ja, graag. De Betuwe ligt verder van mijn dorp 's-Gravendeel, dus ik ben er niet om de hoek. Maar ik draai hier veel en kom er met plezier. Ik ken de streek en het soort locaties goed."
  },
  {
    "q": "Draai je de hele trouwdag, van ceremonie tot feest?",
    "a": "Ja. Ik kan vanaf de ceremonie aanwezig zijn, het diner van rustige achtergrondmuziek voorzien en daarna de feestavond draaien. Bij een bruiloft op een boerderij of een kasteel ben ik de hele dag jullie vaste gezicht."
  },
  {
    "q": "Heb ik naast jou nog een aparte presentator nodig?",
    "a": "Nee. Ik ben DJ en MC in een persoon. Ik kondig de binnenkomst aan, geef het moment voor de speeches en luid de openingsdans in. Dat scheelt jullie een extra persoon en het programma loopt strakker."
  },
  {
    "q": "Onze bruiloft is op een buitenlocatie of in een schuur. Lukt dat?",
    "a": "Zeker. De Betuwe zit vol landelijke trouwlocaties: schuren, boerderijen en buitenplekken tussen de boomgaarden. Ik neem eigen licht en geluid mee en stem dat af op een hoge schuur of een tent in het open veld. Ik check vooraf even of er genoeg stroom is."
  },
  {
    "q": "In welke plaatsen in de Betuwe draai je?",
    "a": "In de hele regio. Van Tiel, Buren en Culemborg tot Geldermalsen en de dorpen ertussen, zoals Beesd, Tricht, Echteld en Lienden. Of jullie nu in een dorpskern of op een buitenlocatie trouwen, ik kom jullie kant op."
  },
  {
    "q": "Hoe weet ik of je vrij bent op onze trouwdatum?",
    "a": "Stuur me jullie datum en de locatie in de Betuwe, dan kijk ik meteen in mijn agenda. Ik reageer binnen 24 uur en denk graag mee over de muziek en de momenten."
  }
];

const BLOCKS = [
  {
    "t": "Van ceremonie tot laatste plaat",
    "d": "Ik draai jullie hele trouwdag aan elkaar: muziek bij de ceremonie, achtergrond bij het diner, de openingsdans en daarna een volle vloer. Een vast gezicht van begin tot eind."
  },
  {
    "t": "DJ en MC in een",
    "d": "Muziek en microfoon bij dezelfde persoon. Ik kondig aan, geef het moment voor de speeches en zet de openingsdans op tijd in, zodat alles uit een hand komt en het programma strak loopt."
  },
  {
    "t": "Voor schuur, boerderij en kasteel",
    "d": "De Betuwe zit vol landelijke locaties tussen de boomgaarden. Ik neem eigen licht en geluid mee en stem dat af op een hoge schuur, een tent in het veld of een kasteelzaal."
  },
  {
    "t": "Veel en graag in de regio",
    "d": "De Betuwe ligt verder van mijn dorp 's-Gravendeel, dus ik ben er niet om de hoek. Maar ik draai hier veel en kom met plezier. Iemand die de streek echt kent."
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
    "h2": "Een bruiloft DJ die in de Betuwe draait",
    "paragraphs": [
      "Ik woon in 's-Gravendeel, in de Hoeksche Waard. De Betuwe ligt verder weg, dus ik ben hier niet om de hoek. Dat zeg ik liever eerlijk. Maar ik draai veel in de Betuwe en kom er graag. Ik ken de streek, de wegen en het soort locaties, en ik plan mijn rit zo dat ik ruim op tijd ben om op te bouwen en alles te testen voordat jullie eerste gasten binnenkomen.",
      "De Betuwe is de fruitstreek tussen de Waal en de Nederrijn. In het voorjaar staan de boomgaarden in bloei en in de zomer puilt de streek uit van het fruit. Dat landschap zie je terug in de trouwlocaties. Naast zalen in de dorpskernen zit het feest hier vaak op een boerderij, in een verbouwde schuur of op een buitenlocatie tussen de bomen. Ook echte kastelen horen erbij. Dat soort plekken vraagt iets anders dan een standaardzaal: een hoge schuur galmt, een tent verliest geluid aan de wind, een oude zaal heeft zijn eigen akoestiek. Ik weet hoe ik mijn set daarop afstem zodat het overal goed klinkt.",
      "Ik kom in de hele regio: van Tiel, Buren en Culemborg tot Geldermalsen, en de dorpen ertussen zoals Beesd, Tricht, Echteld en Lienden. Trouwen jullie ergens op een landelijke plek waar je het nummerbord niet zo snel ziet staan, dan vind ik de weg."
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
      "Laat me weten op welke datum jullie trouwen en op welke locatie in de Betuwe, dan check ik of ik vrij ben. Ik reageer binnen 24 uur en denk graag mee."
    ]
  }
];

export const Route = createFileRoute("/bruiloft-dj-betuwe")({
  head: () =>
    buildSeo({
      title: "Bruiloft DJ Betuwe | Kevin Froger",
      description: "Bruiloft DJ Betuwe? Ik draai hier veel, ook op boerderijen, schuren en kastelen. Eigen licht en geluid, DJ en MC in een. 5,0 op Google. Check jullie trouwdatum.",
      path: PATH,
      image: IMG,
      jsonLd: [
        service({
          name: "Bruiloft DJ Betuwe",
          serviceType: "Wedding DJ",
          description: "Bruiloft DJ in de Betuwe. De hele dag van ceremonie tot feest, eigen licht en geluid, DJ en MC in een persoon.",
          path: PATH,
          image: IMG,
          areaServed: "Betuwe",
          areaServedType: "AdministrativeArea",
        }),
        breadcrumb([{"name":"Home","path":"/"},{"name":"Bruiloft DJ","path":"/bruiloft-dj"},{"name":"Betuwe","path":"/bruiloft-dj-betuwe"}]),
        faqPage(FAQ),
      ],
    }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow={"Trouwen in de Betuwe"}
      titleLine1={"Bruiloft DJ in de"}
      titleLine2={"Betuwe"}
      intro={"Ik ben Kevin, DJ en MC uit 's-Gravendeel. Jullie trouwen in de Betuwe, de fruitstreek tussen de Waal en de Nederrijn. Ik ben hier niet om de hoek, maar ik draai er veel en graag, op boerderijen, in schuren en op kasteellocaties. Eigen licht en geluid mee, en een dag die op muziek precies klopt."}
      image={IMG}
      imageAlt={"DJ Kevin Froger op een bruiloft in de Betuwe"}
      breadcrumbs={[{"name":"Home","path":"/"},{"name":"Bruiloft DJ","path":"/bruiloft-dj"},{"name":"Betuwe","path":"/bruiloft-dj-betuwe"}]}
      blocks={BLOCKS}
      sections={SECTIONS}
      links={[{"to":"/bruiloft-dj","label":"Bruiloft DJ"},{"to":"/dj-boeken-betuwe","label":"DJ Betuwe"},{"to":"/bruiloft-dj-tiel","label":"Bruiloft DJ Tiel"},{"to":"/bruiloft-dj-hoeksche-waard","label":"Bruiloft DJ Hoeksche Waard"}]}
      faq={FAQ}
      ctaTitle={<>Check jullie<br/>trouwdatum.</>}
      ctaSubtitle={"App of bel ons met jullie datum en locatie in de Betuwe. Reactie binnen 24 uur."}
    />
  );
}
