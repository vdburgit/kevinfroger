import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";
import { breadcrumb, buildSeo, faqPage, service, type FaqItem } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";
const PATH = "/bruiloft-dj-hoeksche-waard";

const FAQ: FaqItem[] = [
  {
    "q": "Draai je echt de hele trouwdag, ook overdag?",
    "a": "Ja. Ik kan er vanaf de ceremonie bij zijn, het diner van achtergrondmuziek voorzien en daarna het feest draaien. Jullie hebben zo de hele dag een vertrouwd gezicht achter de muziek."
  },
  {
    "q": "Heb ik naast jou nog een presentator nodig?",
    "a": "Nee. Ik ben DJ en MC in een. Ik kondig aan, geef het moment voor de speeches en luid de openingsdans in. Dat scheelt jullie een extra persoon en het loopt soepeler, omdat het uit een hand komt."
  },
  {
    "q": "Onze bruiloft is op een boerderij of buitenlocatie in de polder. Lukt dat?",
    "a": "Zeker. Ik draai veel op boerderijen en buitenlocaties hier in de Hoeksche Waard. Ik neem eigen licht en geluid mee en stem dat af op de ruimte, of het nu een hoge schuur of een tent in het open veld is. Ik check vooraf wel even of er genoeg stroom is."
  },
  {
    "q": "In welke plaatsen in de Hoeksche Waard draai je?",
    "a": "In de hele regio. Of jullie nu in Puttershoek, Strijen of Heinenoord trouwen, of in Oud-Beijerland of Numansdorp: ik woon zelf in 's-Gravendeel en ben overal in de Hoeksche Waard snel ter plaatse."
  },
  {
    "q": "Kunnen wij zelf de muziek bepalen?",
    "a": "Ja. We nemen vooraf door welke nummers er echt in moeten en wat jullie niet willen horen. Op de avond lees ik de zaal en stuur ik bij, zodat de vloer vol blijft. Het blijft jullie feest, niet mijn vaste lijst."
  },
  {
    "q": "Hoe weet ik of je vrij bent op onze datum?",
    "a": "Stuur me jullie trouwdatum, dan kijk ik meteen in mijn agenda. Omdat ik in de regio woon, plannen we daarna zo een gesprek of bekijken we samen de locatie."
  }
];

const BLOCKS = [
  {
    "t": "Van ceremonie tot laatste dans",
    "d": "Ik draai jullie hele dag aan elkaar: muziek bij de ceremonie, achtergrond tijdens het diner, de openingsdans en daarna een volle dansvloer. Een vertrouwd gezicht van begin tot eind."
  },
  {
    "t": "DJ en MC in een persoon",
    "d": "De muziek en de microfoon liggen bij dezelfde persoon. Ik kondig aan, geef het moment voor de speeches en luid de openingsdans op tijd in, zodat alles uit één hand komt en jullie programma soepel loopt."
  },
  {
    "t": "Eigen licht en geluid",
    "d": "Ik kom met mijn complete set: geluid dat in een schuur net zo goed klinkt als in een zaal, en licht dat met de avond meegroeit. Genoeg vermogen voor een boerderij of een tent in de polder."
  },
  {
    "t": "Hier thuis",
    "d": "Ik kom in de hele Hoeksche Waard, van Oud-Beijerland tot Numansdorp en van Puttershoek tot Strijen en Heinenoord. Ik ken de regio en de locaties hier en sta zo bij jullie voor de deur."
  },
  {
    "t": "Jullie muziek, niet mijn vaste lijst",
    "d": "We bespreken vooraf wat jullie willen horen en wat juist niet. Op de avond zelf lees ik de zaal en stuur ik bij, zodat de vloer vol blijft van jong tot oud."
  },
  {
    "t": "5,0 op Google",
    "d": "Tien stellen en feestgevers gingen jullie voor en gaven samen een 5,0. Geen grote aantallen, wel eerlijke verhalen van mensen die mij echt hebben meegemaakt."
  }
];

const SECTIONS = [
  {
    "h2": "Een bruiloft DJ die de Hoeksche Waard kent",
    "paragraphs": [
      "Ik woon in 's-Gravendeel, midden in de Hoeksche Waard. Dat is geen detail op een trouwdag. Het betekent dat ik de route naar jullie locatie ken, dat ik ruim op tijd kan opbouwen en dat ik bij een vraag of een wijziging gewoon even langskom. Geen reisuren vanuit de andere kant van het land, gewoon iemand uit de buurt.",
      "Ik kom in de hele Hoeksche Waard, van Oud-Beijerland tot Numansdorp en van Puttershoek tot Strijen en Heinenoord. Trouwen in deze regio betekent vaak een boerderij, een verbouwde schuur of een buitenlocatie in de polder. Dat soort plekken vraagt iets anders dan een standaard zaal. Een hoge schuur klinkt galmend, een tent in het open veld verliest geluid aan de wind. Ik weet hoe ik mijn set daarop afstem zodat het overal goed klinkt.",
      "Trouwen jullie net buiten de regio, in Dordrecht of richting Rotterdam? Dat kan ook prima. De Hoeksche Waard is mijn thuisbasis, maar ik kom verder als jullie dat willen."
    ]
  },
  {
    "h2": "De hele dag op muziek, door een persoon",
    "paragraphs": [
      "Een trouwdag is meer dan een feestavond. Het begint vaak rustig: muziek terwijl iedereen binnenkomt, iets passends bij de ceremonie, achtergrondmuziek die het diner draagt zonder de gesprekken te overstemmen. Daarna bouw ik op naar de openingsdans en het feest. Omdat ik er de hele dag bij ben, klopt de overgang tussen die momenten en hoeven jullie niet aan een nieuw gezicht te wennen.",
      "Ik ben ook MC, dus ik kondig de binnenkomst aan, geef het moment voor de speeches en zet de openingsdans op het juiste moment in. Ik stem dat af met de trouwambtenaar, de cateraar en eventueel jullie ceremoniemeester, zodat het programma soepel loopt. Een losse presentator is daardoor niet nodig.",
      "Vooraf nemen we jullie wensen door. Welke nummers moeten er echt in, welk genre past bij jullie gasten, wat willen jullie absoluut niet horen. Op de avond zelf kijk ik naar de vloer en pas ik aan: rustiger als het even mag, vol gas als iedereen staat."
    ]
  },
  {
    "h2": "Hoe het verder gaat",
    "paragraphs": [
      "Het begint met een gesprek, vaak even bellen of bij een kop koffie. Ik wil weten wie jullie zijn, hoe jullie dag eruitziet en wat voor sfeer jullie zoeken. Daarna leg ik uit wat ik meeneem en maken we samen een plan voor de muziek en de momenten.",
      "Omdat ik in de regio woon, is een afspraak zo gemaakt en kunnen we de locatie eventueel samen bekijken. Laat me weten op welke datum jullie trouwen, dan check ik of ik vrij ben en denk ik graag mee."
    ]
  }
];

export const Route = createFileRoute("/bruiloft-dj-hoeksche-waard")({
  head: () =>
    buildSeo({
      title: "Bruiloft DJ Hoeksche Waard | Kevin Froger",
      description: "Bruiloft DJ in de Hoeksche Waard? Ik woon in 's-Gravendeel, draai al jaren in de regio en kom met eigen licht en geluid. DJ en MC in een. 5,0 op Google.",
      path: PATH,
      image: IMG,
      jsonLd: [
        service({
        name: "Bruiloft DJ Hoeksche Waard",
        serviceType: "Wedding DJ",
        description: "Bruiloft DJ in de Hoeksche Waard. De hele dag van ceremonie tot feest, eigen licht en geluid, DJ en MC in een persoon.",
        path: PATH,
        image: IMG,
        areaServed: "Hoeksche Waard",
      }),
        breadcrumb([{"name":"Home","path":"/"},{"name":"Bruiloft DJ","path":"/bruiloft-dj"},{"name":"Hoeksche Waard","path":"/bruiloft-dj-hoeksche-waard"}]),
        faqPage(FAQ),
      ],
    }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow={"Trouwen in de regio"}
      titleLine1={"Bruiloft DJ in de"}
      titleLine2={"Hoeksche Waard"}
      intro={"Ik ben Kevin, DJ en MC uit 's-Gravendeel. Jullie trouwen in de Hoeksche Waard, ik woon hier om de hoek en ken de wegen, de boerderijen en de buitenlocaties. Korte lijntjes, snel ter plaatse en een dag die op muziek precies klopt."}
      image={IMG}
      imageAlt={"DJ Kevin Froger op een bruiloft in de Hoeksche Waard"}
      breadcrumbs={[{"name":"Home","path":"/"},{"name":"Bruiloft DJ","path":"/bruiloft-dj"},{"name":"Hoeksche Waard","path":"/bruiloft-dj-hoeksche-waard"}]}
      blocks={BLOCKS}
      sections={SECTIONS}
      links={[{"to":"/bruiloft-dj","label":"Bruiloft DJ"},{"to":"/dj-boeken-hoeksche-waard","label":"DJ Hoeksche Waard"}]}
      faq={FAQ}
      ctaTitle={<>Check jullie<br/>trouwdatum.</>}
      ctaSubtitle={"App of bel ons met jullie datum en locatie. Reactie binnen 24 uur."}
    />
  );
}
