import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";
import { breadcrumb, buildSeo, faqPage, service, type FaqItem } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-prive-feest-1280.webp";
const PATH = "/tuinfeest";

const FAQ: FaqItem[] = [
  {
    q: "Kan ik een festival in mijn eigen tuin organiseren?",
    a: "Ja. Dat is precies dit concept. Een stage, licht, geluid en aankleding komen naar je tuin, en ik draai en presenteer. Jij nodigt je gasten uit, de rest regel ik met vaste partners.",
  },
  {
    q: "Kan de aprèsski naar mij thuis komen?",
    a: "Ja, met de Schirmbar. Ik breng de aprèsski sfeer het hele jaar door naar je achtertuin, voor zo'n 90 tot 100 personen, met schlagers en de roze Flügel aan de bar.",
  },
  {
    q: "Regelen jullie ook de bar, de horeca en de aankleding?",
    a: "Ja. Samen met vaste partners regel ik de bar, de horeca en de aankleding in het thema. Jij hebt één aanspreekpunt.",
  },
  {
    q: "Voor hoeveel mensen is een tuinfeest geschikt?",
    a: "De Schirmbar is geschikt voor ongeveer 90 tot 100 personen. Voor een mini festival of poolparty stemmen we het af op je tuin en je aantal gasten.",
  },
  {
    q: "Wat kost een tuinfeest met dj en bar?",
    a: "Dat hangt af van het format, de sfeer, het aantal gasten en wat je erbij wil. Ik maak een voorstel op maat. Stuur je datum, locatie en wat je voor ogen hebt, dan reken ik het voor je uit.",
  },
  {
    q: "Kan dit ook in de winter?",
    a: "Ja. De Schirmbar werkt juist goed in de winter, met de aprèsski sfeer. Voor de andere formats kijken we naar het weer en de mogelijkheden op je locatie.",
  },
  {
    q: "Doen jullie ook een schuimparty?",
    a: "Een schuimkanon kan erbij, bijvoorbeeld bij een poolparty. Zeg wat je wil, dan neem ik het mee in het voorstel.",
  },
  {
    q: "Hou je rekening met de buren en geluidsoverlast?",
    a: "Ja. In een tuin draait alles om de juiste balans: hard genoeg voor je gasten, niet voor de hele straat. Ik richt het geluid slim en hou de lage tonen in toom. Tip je buren vooraf even in, dan zit iedereen ontspannen.",
  },
  {
    q: "Moet de tuin bereikbaar zijn voor het opbouwen?",
    a: "Voor het laden en lossen moet de tuin vrij toegankelijk zijn voor een wagen met aanhanger. Een feest op een balkon, of een tuin die alleen via een brandgang te bereiken is, lukt helaas niet. Lukt dat bij jou niet? Geen zorgen, we bespreken vooraf wat de mogelijkheden zijn en maken altijd een passende oplossing op maat.",
  },
];

const BLOCKS = [
  {
    t: "Schirmbar",
    d: "Aprèsski in je tuin. Een grote schirm met een bar eronder, warme lampjes, Duitse schlagers en de roze Flügel. Voor zo'n 90 tot 100 personen, zomer en winter.",
  },
  {
    t: "Mini festival",
    d: "Een echt podium in je achtertuin, met festivalverlichting, een stevige geluidsset en aankleding in je thema. Jij nodigt uit, ik maak er een show van.",
  },
  {
    t: "Poolparty",
    d: "Een feest rond het zwembad. Opblaasartikelen, een schuimkanon als je wil en de Ibiza- en beachsfeer. Overdag chill, 's avonds vol gas.",
  },
  {
    t: "Mobile cafe",
    d: "Een mobiele bar die overal in je tuin kan staan. Het complete horecagevoel, ook als je geen vaste bar hebt.",
  },
  {
    t: "Kies je thema",
    d: "Piratenhits, aprèsski en Oktoberfest, foute party, disco uit de jaren 70, 80 en 90 of een Ibiza beachsfeer. Elk gewenst thema is mogelijk, de muziek en de aankleding gaan mee.",
  },
  {
    t: "Wat je erbij kiest",
    d: "Schirmbar of stage, schuimkanon, opblaasartikelen, decor in je thema, bar met Flügel, en DJ en MC in een. Je neemt wat je wil.",
  },
];

const SECTIONS = [
  {
    h2: "De Schirmbar, aprèsski in je tuin",
    paragraphs: [
      "De Schirmbar komt uit de aprèsski. Een grote schirm met een bar eronder, warme lampjes, Duitse schlagers en een volle meute eromheen. Je hoeft er niet voor naar de bergen. Ik breng de aprèsski het hele jaar door naar je achtertuin.",
      "Geschikt voor zo'n 90 tot 100 personen. Schlagers en feestmuziek, aangejaagd door mij als DJ en MC, en de roze Flügel aan de bar. Zomer of winter, het werkt altijd.",
    ],
  },
  {
    h2: "Mini festival in je achtertuin",
    paragraphs: [
      "Een echt festivalgevoel in je eigen tuin. Een stage die op je locatie wordt opgebouwd, festivalverlichting, een goede geluidsset en aankleding in het thema. Jij nodigt uit, ik maak er een podiumavond van en praat de avond aan elkaar.",
      "Klein houden of groter uitpakken kan allebei. We stemmen de opbouw en de techniek af op je tuin en je aantal gasten. Wil je het festivalgevoel breder zien? Bekijk ook wat ik als [festival DJ](/festival-dj) doe.",
    ],
  },
  {
    h2: "Elk thema is mogelijk",
    paragraphs: [
      "De muziek en de aankleding kies je in een thema, en bijna alles kan. De piratenhits en het Nederlandstalige werk zitten flink in de lift, dus daar draai ik graag een avond omheen. Maar ook aprèsski en Oktoberfest met Duitse schlagers, een foute party met meezingers, disco uit de jaren 70, 80 en 90, of een Ibiza beachsfeer met deephouse en tropische klanken.",
      "Heb je een ander idee? Carnaval en hossen, een Hollandse avond, top 40 en dance, een casino- of James Bond-thema, een neon glow party, een tropical of Hawaii-feest, Western, Great Gatsby of een jaren 20-avond: elk gewenst thema is mogelijk. Zeg wat je voor ogen hebt, dan stem ik de muziek, de verlichting en de aankleding daarop af.",
    ],
  },
  {
    h2: "Poolparty rond het zwembad",
    paragraphs: [
      "Heb je een zwembad of huur je er een? Dan maken we er een poolparty van. Opblaasartikelen, een schuimkanon als je dat wil en de ontspannen Ibiza- en beachsfeer. Overdag chill met deephouse en tropische klanken, 's avonds vol gas.",
      "Ik stem de muziek af op het moment van de dag, van loungy aan de rand van het bad tot een volle dansvloer als de zon onder is.",
    ],
  },
  {
    h2: "Mobile cafe in je tuin",
    paragraphs: [
      "Een mobiel cafe of bar dat overal in je tuin kan staan. Handig als je geen vaste bar hebt en toch het complete horecagevoel wil. We stemmen vooraf af wat er geschonken wordt en hoe de bar in je tuin past.",
    ],
  },
  {
    h2: "Zo werkt het",
    paragraphs: [
      "Ik werk samen met vaste partners die het materiaal en de horeca leveren. Jij hebt één aanspreekpunt. Je kiest een format en een sfeer, ik maak een voorstel op maat voor jouw tuin en aantal gasten, de partners bouwen op en ik draai en presenteer. Na afloop wordt alles weer opgehaald.",
      "Voor de opbouw moet de tuin vrij toegankelijk zijn voor een wagen met aanhanger om te laden en lossen. Een feest op een balkon, of een tuin die alleen via een brandgang te bereiken is, lukt helaas niet. We bespreken vooraf wat er kan op jouw locatie en maken altijd een passende oplossing op maat.",
      "Omdat ik [DJ en MC in een](/dj-en-mc) persoon ben, hoef je geen aparte presentator te boeken. Geef je je feest niet thuis maar op een andere locatie of op het bedrijf? Kijk dan ook naar [feest op locatie](/feest-op-locatie), hetzelfde concept maar breder en ook zakelijk. Voor een verjaardag of privefeest binnen ben ik je [feest DJ](/verjaardag-dj).",
    ],
  },
];

export const Route = createFileRoute("/tuinfeest")({
  head: () =>
    buildSeo({
      title: "Festival in je achtertuin, tuinfeest op maat | Kevin Froger",
      description:
        "Het complete feest in je eigen tuin. Schirmbar, mini festival of poolparty, met DJ, licht, bar en aankleding. Vraag een voorstel aan.",
      path: PATH,
      image: IMG,
      jsonLd: [
        service({
          name: "Tuinfeest en festival in je achtertuin",
          serviceType: "Party DJ",
          description:
            "Het complete feest in je eigen tuin: Schirmbar, mini festival, poolparty of mobiele bar. Inclusief DJ en MC, licht, geluid en aankleding.",
          path: PATH,
          image: IMG,
        }),
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Feest DJ", path: "/verjaardag-dj" },
          { name: "Tuinfeest", path: PATH },
        ]),
        faqPage(FAQ),
      ],
    }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow={"Feest in je eigen tuin"}
      titleLine1={"Een festival in je"}
      titleLine2={"eigen achtertuin"}
      intro={
        "Je hoeft niet naar een festival of een feestzaal. Het feest komt naar je tuin. Een echte aprèsski Schirmbar, een mini festival met podium of een poolparty rond het zwembad: jij kiest, ik regel het complete plaatje samen met vaste partners. Ik draai en presenteer de avond zelf, als DJ en MC in een. Jij nodigt je gasten uit, de rest regel ik."
      }
      image={IMG}
      imageAlt={"DJ Kevin Froger draait een tuinfeest met festivalsfeer in de achtertuin"}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Feest DJ", path: "/verjaardag-dj" },
        { name: "Tuinfeest", path: PATH },
      ]}
      blocks={BLOCKS}
      sections={SECTIONS}
      links={[
        { to: "/verjaardag-dj", label: "Feest DJ" },
        { to: "/feest-op-locatie", label: "Feest op locatie" },
        { to: "/festival-dj", label: "Festival DJ" },
        { to: "/dj-en-mc", label: "DJ en MC" },
      ]}
      faq={FAQ}
      ctaTitle={
        <>
          Vraag een
          <br />
          voorstel aan.
        </>
      }
      ctaSubtitle={"App of bel ons met je tuin, je datum en je aantal gasten. Reactie binnen 24 uur."}
    />
  );
}
