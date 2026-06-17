import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";
import { breadcrumb, buildSeo, faqPage, service, type FaqItem } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-bedrijfsfeest.webp";
const PATH = "/dj-en-mc";

const FAQ: FaqItem[] = [
  {
    "q": "Wat is het verschil tussen een DJ en een MC?",
    "a": "Een DJ draait de muziek, een MC praat de avond aan elkaar en pakt de microfoon voor aankondigingen. Bij mij zijn dat dezelfde persoon, dus ik doe beide."
  },
  {
    "q": "Moet ik dan nog een aparte presentator boeken?",
    "a": "Nee. Ik neem de presentatie zelf op me, van binnenkomst en speeches tot het inleiden van de dans. Je hebt aan mij genoeg en hebt zo één aanspreekpunt."
  },
  {
    "q": "Hoe weet je wat je moet aankondigen?",
    "a": "Dat spreken we vooraf door. Ik maak met jullie een tijdlijn van de avond, wie wat zegt en wanneer. Op de dag zelf bewaak ik die en stuur ik bij als het uitloopt."
  },
  {
    "q": "Scheelt het echt geld als jij beide doet?",
    "a": "Ja. Een losse presentator is een tweede boeking met een eigen prijs. Omdat ik de muziek en de presentatie samen doe, betaal je voor één persoon."
  },
  {
    "q": "Praat je de hele avond door de muziek heen?",
    "a": "Nee, ik pak de microfoon alleen op de momenten die ertoe doen. De rest van de avond ligt de focus op de muziek en de dansvloer."
  },
  {
    "q": "Doe je dit ook op een Engelstalig of tweetalig feest?",
    "a": "De aankondigingen kan ik in het Nederlands en het Engels doen. Laat me vooraf weten welke gasten erbij zijn, dan stem ik mijn taal daarop af."
  }
];

const BLOCKS = [
  {
    "t": "Een aanspreekpunt",
    "d": "Je hebt voor de muziek en het presenteren met dezelfde persoon te maken. Eén keer alles doorspreken, daarna weet ik wat er moet gebeuren."
  },
  {
    "t": "Geen afstemming tussen leveranciers",
    "d": "Een DJ en een aparte MC moeten op elkaar ingespeeld raken op de dag zelf. Dat valt bij mij weg, want ik weet wanneer ik de muziek zachter draai om iets aan te kondigen."
  },
  {
    "t": "Het programma loopt op tijd",
    "d": "Ik houd de tijdlijn in de gaten en stuur bij als het uitloopt. Speeches, een dans of een prijsuitreiking komen op het moment dat jullie hebben afgesproken."
  },
  {
    "t": "Scheelt kosten",
    "d": "Twee mensen inhuren kost ook twee keer. Doordat ik beide rollen pak, betaal je voor één boeking in plaats van twee."
  },
  {
    "t": "Ik lees de zaal",
    "d": "Omdat ik zelf draai, voel ik de sfeer en plak ik een aankondiging vast aan het juiste nummer. De overgang van praten naar dansen verloopt vloeiend."
  }
];

const SECTIONS = [
  {
    "h2": "Wat doet een MC eigenlijk op een bruiloft?",
    "paragraphs": [
      "Op een bruiloft is de MC degene die de dag aan elkaar praat. Ik kondig de binnenkomst van het bruidspaar aan, geef het woord aan wie een speech wil houden en zorg dat niemand een gast voor de voeten loopt. De openingsdans leid ik in zodat iedereen op tijd op zijn plek staat en jullie het podium krijgen.",
      "Het grootste verschil zit in de timing. Ik weet welke onderdelen er nog komen, dus ik bewaak het programma en stuur bij als het uitloopt. Zo wordt het diner niet koud omdat de speeches uitlopen en haal je de avondopening met genoeg tijd om los te gaan. Op de bruiloft-pagina lees je hoe ik een trouwdag van ceremonie tot laatste nummer invul."
    ]
  },
  {
    "h2": "Aankondigingen en prijsuitreikingen op een bedrijfsfeest",
    "paragraphs": [
      "Bij een bedrijfsfeest is er vaak een podiumdeel: een woordje van de directie, een prijsuitreiking of de aankondiging van een jubileum. Ik leid dat netjes in, geef de microfoon door en pak na afloop de muziek weer op zonder dode momenten. Jullie hoeven niet zelf met een blaadje het podium op om de boel aan te kondigen.",
      "Doordat ik DJ en MC in een ben, weet ik precies wanneer de muziek even uit moet en wanneer het feest weer aan kan. Dat scheelt geregel met een externe presentator die de zaal en jullie collega's niet kent. Meer over hoe ik een personeelsfeest of jubileum aanpak vind je op de bedrijfsfeest-pagina."
    ]
  },
  {
    "h2": "Ook bij een verjaardag of feest brengt het rust",
    "paragraphs": [
      "Niet elk feest heeft een strak programma nodig, maar er zijn altijd momenten die je niet wil missen. Een toost op de jarige, een verrassing die binnenkomt of het aansnijden van de taart. Ik breng die op het juiste moment, zodat de hele zaal erbij is en niemand het mist omdat de muziek te hard staat.",
      "Jij hoeft tijdens je eigen feest niet de regie te voeren. Eén keer vooraf doorspreken wat er gebeurt, en op de avond zelf houd ik het in de gaten en kondig ik het aan."
    ]
  }
];

export const Route = createFileRoute("/dj-en-mc")({
  head: () =>
    buildSeo({
      title: "DJ en MC in een persoon | Kevin Froger",
      description: "Ik ben DJ en MC tegelijk, dus je boekt geen aparte presentator. Een aanspreekpunt, een soepel verloop en scheelt kosten. 5,0 op Google uit 10 reviews.",
      path: PATH,
      image: IMG,
      jsonLd: [
        service({
        name: "DJ en MC in een persoon",
        serviceType: "DJ en MC",
        description: "DJ en MC in een persoon voor bruiloften, bedrijfsfeesten en feesten. Eigen licht en geluid, geen losse presentator nodig.",
        path: PATH,
        image: IMG,
      }),
        breadcrumb([{"name":"Home","path":"/"},{"name":"DJ en MC","path":"/dj-en-mc"}]),
        faqPage(FAQ),
      ],
    }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow={"DJ en MC"}
      titleLine1={"DJ en MC in een persoon"}
      titleLine2={"die je avond aan elkaar praat"}
      intro={"Bij mij krijg je een DJ en een MC in een persoon. Ik draai de hele avond en pak tussendoor de microfoon om je programma aan elkaar te praten. Je hoeft dus geen losse presentator te boeken die ik daarna moet aansturen."}
      image={IMG}
      imageAlt={"DJ Kevin Froger met microfoon als DJ en MC"}
      breadcrumbs={[{"name":"Home","path":"/"},{"name":"DJ en MC","path":"/dj-en-mc"}]}
      blocks={BLOCKS}
      sections={SECTIONS}
      links={[{"to":"/bruiloft-dj","label":"Bruiloft DJ"},{"to":"/zakelijk-dj","label":"Bedrijfsfeest DJ"},{"to":"/verjaardag-dj","label":"Feest DJ"},{"to":"/prijzen","label":"Prijzen"}]}
      faq={FAQ}
      ctaSubtitle={"App of bel ons. Een aanspreekpunt voor de muziek en de presentatie."}
    />
  );
}
