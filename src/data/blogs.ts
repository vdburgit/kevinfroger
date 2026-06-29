// Centrale data voor de blog. Elk artikel heeft een eigen slug en wordt door de
// dynamische route /blog/$slug gerenderd via het ContentPage-component, plus een
// listing op /blog. Doel: vraag-zoekwoorden ("wat kost een dj", "dj of band",
// "dj openingsdans") afvangen en doorlinken naar de dienst- en prijspagina's.
//
// Schrijfstijl: informeel, korte zinnen, ik-vorm, geen holle clichés, geen
// em-dashes, niets verzinnen. Marktcijfers zijn algemene richtprijzen, geen
// uitspraak over Kevins eigen tarief (dat staat op /prijzen).

import type {
  ContentBlock,
  ContentSection,
  ContentLink,
} from "@/components/ContentPage";
import type { FaqItem } from "@/lib/seo";

export type BlogPost = {
  slug: string;
  // SEO
  title: string;
  description: string;
  primaryKeyword: string;
  datePublished: string; // ISO, YYYY-MM-DD
  // Listing
  cardTitle: string;
  cardSummary: string;
  readingMinutes: number;
  image: string;
  imageAlt: string;
  // ContentPage
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  intro: string;
  blocksHeading?: string;
  blocks: ContentBlock[];
  sections: ContentSection[];
  links: ContentLink[];
  faq: FaqItem[];
  ctaSubtitle?: string;
};

const IMG_BRUILOFT = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";
const IMG_BOOTH = "/images/dj-booth-black.webp";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "wat-kost-dj-bruiloft",
    title: "Wat kost een DJ voor je bruiloft? | Kevin Froger",
    description:
      "Wat kost een bruiloft DJ en waar betaal je voor? Eerlijke uitleg over uren, reisafstand, licht en geluid en wat all-in echt betekent.",
    primaryKeyword: "wat kost een dj bruiloft",
    datePublished: "2026-06-17",
    cardTitle: "Wat kost een DJ voor je bruiloft?",
    cardSummary:
      "Een eerlijke uitleg van wat een bruiloft-DJ kost, welke factoren meespelen en waarom all-in je achteraf gedoe scheelt.",
    readingMinutes: 5,
    image: IMG_BRUILOFT,
    imageAlt:
      "DJ Kevin Froger draait op een bruiloft met eigen licht en geluid",
    eyebrow: "Blog",
    titleLine1: "Wat kost een DJ",
    titleLine2: "voor je bruiloft?",
    intro:
      "Een van de eerste vragen die jullie stellen als je een DJ zoekt: wat kost dat eigenlijk? Eerlijk antwoord: dat hangt af van een paar dingen. Ik leg hieronder uit waar je voor betaalt, zodat je een prijs kunt plaatsen en weet waar je op moet letten.",
    blocksHeading: "In het kort",
    blocks: [
      {
        t: "De grote lijn",
        d: "Een hobby-DJ zit vaak rond de 100 tot 300 euro. Een ervaren bruiloft-DJ met eigen show zit meestal tussen de 600 en 1.200 euro. Complete all-in shows lopen op tot rond de 1.500 euro.",
      },
      {
        t: "Waar het van afhangt",
        d: "Het aantal uren, de reisafstand, of licht en geluid erbij zit en hoe druk de datum is. Een zaterdag in het hoogseizoen is iets anders dan een doordeweekse dag in de winter.",
      },
      {
        t: "Let op all-in",
        d: "De laagste prijs is niet altijd de goedkoopste. Als licht, geluid, microfoons en reiskosten los bij komen, betaal je achteraf vaak meer dan je dacht.",
      },
    ],
    sections: [
      {
        h2: "Waar je precies voor betaalt",
        paragraphs: [
          "Een bruiloft-DJ is meer dan iemand die nummers achter elkaar zet. Je betaalt voor ervaring, voor het lezen van de zaal en voor de techniek die een avond laat staan. Bij een goede DJ zit daar de voorbereiding in: een intake, jullie must-plays en no-go's doornemen en een draaiboek maken voor het verloop van de dag.",
          "Daarnaast betaal je voor de uren op de dag zelf, plus de opbouw en afbouw die je niet ziet. Ik ben meestal twee uur voor aanvang op locatie voor opbouw en soundcheck. Die tijd zit in de prijs, ook al staat de eerste gast er dan nog niet.",
        ],
      },
      {
        h2: "De factoren die de prijs bepalen",
        paragraphs: [
          "Het aantal draai-uren is de grootste. Een ceremonie, borrel, diner en feestavond samen vragen meer dan alleen een avondfeest. Reisafstand telt mee, want een locatie ver weg kost reistijd en soms een overnachting.",
          "Licht en geluid maken een groot verschil. Een kale set is goedkoper dan een complete show met sfeerverlichting die meebeweegt op de muziek. En de datum speelt mee: populaire zaterdagen in het seizoen raken vroeg vol, dus vroeg boeken is slim.",
        ],
      },
      {
        h2: "Waarom all-in je achteraf gedoe scheelt",
        paragraphs: [
          "Ik werk met een heldere all-in prijs. DJ, MC, licht en geluid zitten er samen in, vooraf vastgelegd. Geen losse opties die je tijdens het rekenen ineens omhoog zien gaan. Wat we afspreken, dat betaal je.",
          "Dat is precies waar het bij veel aanbieders misgaat. Een lage instapprijs ziet er mooi uit, maar als de microfoons, de tweede speaker en de reiskosten er los bij komen, sta je voor een verrassing. Op mijn [prijzen-pagina](/prijzen) lees je hoe ik de prijs opbouw, en op de [bruiloft-pagina](/bruiloft-dj) zie je wat ik op een trouwdag allemaal doe.",
        ],
      },
    ],
    links: [
      { to: "/prijzen", label: "Bekijk de prijzen" },
      { to: "/bruiloft-dj", label: "Bruiloft DJ" },
      { to: "/dj-en-mc", label: "DJ en MC in een" },
    ],
    faq: [
      {
        q: "Wat kost een DJ gemiddeld voor een bruiloft?",
        a: "Een ervaren bruiloft-DJ met eigen licht en geluid zit marktbreed meestal tussen de 600 en 1.200 euro, afhankelijk van het aantal uren en de reisafstand. Voor een exacte prijs voor jullie dag maak ik een offerte op maat.",
      },
      {
        q: "Zit licht en geluid bij de prijs in?",
        a: "Bij mij wel. Ik werk all-in, dus DJ, MC, licht en geluid zitten er samen in. Je hoeft op de locatie niets extra's te regelen of bij te huren.",
      },
      {
        q: "Betaal ik extra als het feest uitloopt?",
        a: "Dat spreken we vooraf af. Een extra uur kan vaak, en dan weet je van tevoren wat dat kost. Geen verrassingen achteraf.",
      },
      {
        q: "Hoe ver van tevoren moet ik een bruiloft-DJ boeken?",
        a: "Voor een zaterdag in het hoogseizoen is een jaar van tevoren niet gek. Heb je een datum, check dan vroeg of ik vrij ben. App of bel met je datum en locatie.",
      },
    ],
    ctaSubtitle:
      "App of bel met jullie datum en locatie. Dan reken ik een heldere all-in prijs voor je uit.",
  },

  {
    slug: "dj-of-band-bruiloft",
    title: "DJ of band op je bruiloft? | Kevin Froger",
    description:
      "DJ of band op je trouwfeest? Een eerlijke vergelijking van kosten, ruimte, flexibiliteit en sfeer, zodat je een goede keuze maakt.",
    primaryKeyword: "dj of band bruiloft",
    datePublished: "2026-06-17",
    cardTitle: "DJ of band op je bruiloft?",
    cardSummary:
      "Kosten, ruimte, pauzes en breedte van het repertoire op een rij. Plus waarom een DJ die ook MC is je een hoop geregel scheelt.",
    readingMinutes: 5,
    image: IMG_BOOTH,
    imageAlt: "DJ-booth met lichtshow op een feest",
    eyebrow: "Blog",
    titleLine1: "DJ of band",
    titleLine2: "op je bruiloft?",
    intro:
      "Een band geeft sfeer, een DJ houdt de vloer de hele avond vol. Allebei kan top zijn. De keuze hangt af van je budget, je ruimte en wat je belangrijk vindt. Ik zet de verschillen eerlijk op een rij, ook al ben ik zelf DJ.",
    blocksHeading: "In het kort",
    blocks: [
      {
        t: "Budget",
        d: "Een band met meerdere muzikanten kost al snel meer dan een DJ, want je betaalt meer mensen. Met een DJ houd je vaak budget over voor andere dingen op je dag.",
      },
      {
        t: "Repertoire",
        d: "Een DJ speelt alles, van jaren 70 tot de nieuwste hits, zonder pauze tussen genres. Een band klinkt live en uniek, maar binnen het repertoire dat ze beheersen.",
      },
      {
        t: "Ruimte en pauzes",
        d: "Een band heeft een podium en pauzes nodig. Een DJ past in elke hoek en draait door, zodat de vloer niet stilvalt.",
      },
    ],
    sections: [
      {
        h2: "Kosten en ruimte",
        paragraphs: [
          "Een band bestaat uit meerdere muzikanten, en die betaal je allemaal. Daar komt vaak techniek, opbouwtijd en soms een geluidsman bij. Een DJ is een persoon met een complete set, dus de kosten liggen meestal lager. Wat je bespaart, kun je aan iets anders op je dag besteden.",
          "Ruimte speelt ook mee. Een band heeft een podium nodig en neemt een flink deel van de zaal in. Als je locatie niet groot is, of je wil zoveel mogelijk plek voor de dansvloer, dan is een DJ praktischer. Ik pas in elke hoek en stem mijn opstelling af op de ruimte.",
        ],
      },
      {
        h2: "Flexibiliteit, pauzes en repertoire",
        paragraphs: [
          "Een band speelt sets en heeft pauzes nodig. In die pauzes valt de muziek stil of moet er alsnog een afspeellijst aan. Een DJ draait de hele avond door, leest de vloer en schakelt direct als de energie verandert. Verzoekjes van gasten kan ik meteen inpassen.",
          "Het repertoire is breder bij een DJ. Ik ga van een rustige plaat tijdens het diner naar meezingers en dan naar een volle dansvloer, zonder dat het schuurt tussen genres. Een band klinkt live en heeft een eigen geluid, maar speelt binnen wat ze geoefend hebben. Wil je per se livemuziek, dan is dat het sterke punt van een band.",
        ],
      },
      {
        h2: "Een DJ die ook MC is, scheelt geregel",
        paragraphs: [
          "Er is nog een verschil dat vaak vergeten wordt. Op een bruiloft moet iemand de avond aan elkaar praten: de binnenkomst aankondigen, speeches inleiden, de openingsdans starten. Bij een band regel je dat los, vaak met een aparte presentator.",
          "Ik ben DJ en MC in een persoon. Ik draai de muziek en pak zelf de microfoon op de momenten die ertoe doen. Dat scheelt een extra boeking en een hoop afstemming. Hoe ik een trouwdag invul lees je op de [bruiloft-pagina](/bruiloft-dj), en wat die MC-rol precies inhoudt staat op de [DJ en MC-pagina](/dj-en-mc).",
        ],
      },
    ],
    links: [
      { to: "/bruiloft-dj", label: "Bruiloft DJ" },
      { to: "/dj-en-mc", label: "DJ en MC in een" },
      { to: "/prijzen", label: "Bekijk de prijzen" },
    ],
    faq: [
      {
        q: "Is een DJ goedkoper dan een band?",
        a: "Meestal wel. Bij een band betaal je meerdere muzikanten plus techniek en opbouw. Een DJ is een persoon met een complete set, dus de kosten liggen doorgaans lager.",
      },
      {
        q: "Houdt een DJ de dansvloer beter vol?",
        a: "Een DJ draait zonder pauzes door en schakelt direct als de energie verandert. Een band speelt sets met pauzes ertussen. Voor een avond doordansen is een DJ daarin praktischer.",
      },
      {
        q: "Kan ik een band en een DJ combineren?",
        a: "Dat kan zeker. Een band voor het begin van de avond en een DJ die het feest doortrekt is een populaire combinatie. Houd er wel rekening mee dat je dan voor allebei betaalt.",
      },
    ],
    ctaSubtitle:
      "Twijfel je nog? App of bel me, dan denk ik vrijblijvend mee over wat bij jullie dag past.",
  },

  {
    slug: "openingsdans-nummers",
    title: "DJ openingsdans: zo kies je je nummer | Kevin Froger",
    description:
      "Hoe kies je het nummer voor je openingsdans? Praktisch advies over kiezen, vertragen, combineren en inkorten, zodat het moment klopt.",
    primaryKeyword: "dj openingsdans",
    datePublished: "2026-06-17",
    cardTitle: "DJ openingsdans: zo kies je je nummer",
    cardSummary:
      "Praktisch advies over het kiezen van je openingsdans-nummer, plus hoe je een te lang of te snel nummer passend maakt.",
    readingMinutes: 4,
    image: IMG_BRUILOFT,
    imageAlt: "Bruidspaar tijdens de openingsdans met DJ Kevin Froger",
    eyebrow: "Blog",
    titleLine1: "DJ openingsdans:",
    titleLine2: "zo kies je je nummer",
    intro:
      "De openingsdans is een moment waar iedereen even naar kijkt. Een goed gekozen nummer maakt het persoonlijk en zet meteen de toon voor de avond. Ik help jullie kiezen en zorg dat het technisch klopt. Hieronder mijn praktische tips.",
    blocksHeading: "In het kort",
    blocks: [
      {
        t: "Kies wat van jullie is",
        d: "Een nummer met een herinnering eraan werkt beter dan de mooiste plaat die niets met jullie te maken heeft. Het hoeft geen klassieke trouwsong te zijn.",
      },
      {
        t: "Let op het tempo",
        d: "Een nummer kan te snel of te traag voelen om op te dansen. Soms is een rustigere versie of een akoestische uitvoering fijner voor het moment.",
      },
      {
        t: "Niet te lang",
        d: "Een hele dans van vier minuten is voor veel stellen lang. Inkorten of na een minuut de gasten erbij vragen houdt het luchtig.",
      },
    ],
    sections: [
      {
        h2: "Hoe je het juiste nummer kiest",
        paragraphs: [
          "Begin niet bij lijstjes met populaire trouwnummers, maar bij jullie zelf. Welk nummer betekent iets, stond aan tijdens een mooi moment of zat in jullie reis ernaartoe? Dat is bijna altijd een betere keuze dan een plaat die technisch perfect is maar niets met jullie te maken heeft.",
          "Twijfel je tussen een paar nummers, luister er dan eens samen naar terwijl je je het moment voorstelt. Voelt het goed om hier de zaal op in te lopen? Durf ook buiten de standaard te kiezen. Een meezinger, een rustige plaat of zelfs iets onverwachts kan precies passen.",
        ],
      },
      {
        h2: "Vertragen, combineren of inkorten",
        paragraphs: [
          "Niet elk nummer leent zich meteen voor een dans. Een snelle plaat kan te druk voelen, een lang nummer te uitgesponnen. Hier kan ik als DJ veel in betekenen. Ik kan een nummer iets vertragen zodat het rustiger danst, of een akoestische versie gebruiken als die beter past bij het moment.",
          "Een veelgebruikte aanpak: begin met een rustig deel voor jullie samen en laat het nummer na ongeveer een minuut overgaan in iets uptempo, waarop de gasten de vloer op komen. Zo blijft het moment intiem en valt het feest er natuurlijk op aan. We spreken vooraf door wat jullie willen, dan regel ik de overgang.",
        ],
      },
      {
        h2: "Samen voorbereiden",
        paragraphs: [
          "In de intake nemen we jullie openingsdans door. Welk nummer, welke versie, wel of niet inkorten en hoe we de gasten erbij halen. Ik leg het vast in het draaiboek zodat het op de dag zelf klopt en jullie er niet meer aan hoeven te denken.",
          "Op de dag bewaak ik de timing, want ik ben ook de MC. Ik kondig de openingsdans aan zodat iedereen op tijd op zijn plek staat en jullie het podium krijgen. Hoe ik een hele trouwdag van ceremonie tot laatste plaat invul lees je op de [bruiloft-pagina](/bruiloft-dj).",
        ],
      },
    ],
    links: [
      { to: "/bruiloft-dj", label: "Bruiloft DJ" },
      { to: "/dj-en-mc", label: "DJ en MC in een" },
      { to: "/werkwijze", label: "Mijn werkwijze" },
    ],
    faq: [
      {
        q: "Welk nummer is goed voor een openingsdans?",
        a: "Een nummer dat iets voor jullie betekent werkt bijna altijd beter dan een standaard trouwsong. Let op het tempo: het moet prettig dansen. Twijfel je, dan denk ik graag mee.",
      },
      {
        q: "Kun je een nummer langzamer maken voor de dans?",
        a: "Ja. Ik kan een nummer iets vertragen of een rustigere, akoestische versie gebruiken als dat beter past bij het moment. Dat spreken we vooraf door.",
      },
      {
        q: "Hoe lang duurt een openingsdans meestal?",
        a: "Een hele plaat van vier minuten is voor veel stellen lang. Vaak korten we in of vragen we na ongeveer een minuut de gasten erbij, zodat het luchtig blijft.",
      },
    ],
    ctaSubtitle:
      "Datum bekend? App of bel me. We nemen jullie openingsdans samen door in de intake.",
  },

  {
    slug: "bruiloft-dj-kiezen",
    title: "Hoe kies je een bruiloft DJ? | Kevin Froger",
    description:
      "Hoe kies je een bruiloft DJ die bij jullie past? De vragen die je stelt over ervaring, all-in prijs, DJ plus MC, backup en de kennismaking.",
    primaryKeyword: "hoe kies je een bruiloft dj",
    datePublished: "2026-06-17",
    cardTitle: "Hoe kies je een bruiloft DJ?",
    cardSummary:
      "De vragen die je echt moet stellen voordat je een bruiloft-DJ boekt, van ervaring en all-in prijs tot backup-apparatuur en de klik.",
    readingMinutes: 5,
    image: IMG_BRUILOFT,
    imageAlt:
      "DJ Kevin Froger achter de booth tijdens een bruiloft met eigen show",
    eyebrow: "Blog",
    titleLine1: "Hoe kies je",
    titleLine2: "een bruiloft DJ?",
    intro:
      "Er zijn veel DJ's, en op een website lijken ze allemaal top. Hoe weet je dan wie bij jullie past? Ik zet de vragen op een rij die je echt verder helpen. Eerlijk, ook al hoop ik natuurlijk dat ik degene ben.",
    blocksHeading: "In het kort",
    blocks: [
      {
        t: "Vraag naar ervaring",
        d: "Hoeveel bruiloften heeft de DJ gedaan? Een trouwdag is iets anders dan een kroegfeest. Ervaring met de timing en de momenten op een bruiloft maakt verschil.",
      },
      {
        t: "Check de prijs",
        d: "Is het all-in, met licht, geluid en MC erbij? Of komen er losse opties bij? Een lage instapprijs zegt weinig als je daarna nog moet bijbetalen.",
      },
      {
        t: "Zoek de klik",
        d: "Plan een kennismaking. Je gunt deze persoon de hele avond de microfoon. Een goed gevoel telt net zo zwaar als de techniek.",
      },
    ],
    sections: [
      {
        h2: "De vragen die er echt toe doen",
        paragraphs: [
          "Begin bij ervaring. Vraag hoeveel bruiloften de DJ heeft gedaan en niet alleen hoeveel feesten in het algemeen. Een bruiloft heeft eigen momenten: de binnenkomst, speeches, de openingsdans, het opbouwen naar een vol feest. Iemand die dat vaker heeft gedaan voelt de timing aan.",
          "Vraag daarna naar de praktische dingen. Brengt de DJ eigen licht en geluid mee, of moet je dat los regelen? Is er backup-apparatuur als er iets uitvalt? En komt de DJ vooraf met jullie zitten voor een draaiboek, of krijg je iemand die op de dag zelf pas hoort wat de bedoeling is?",
        ],
      },
      {
        h2: "All-in prijs en wat erin zit",
        paragraphs: [
          "Een prijs is pas te vergelijken als je weet wat erin zit. Vraag of het all-in is: DJ, licht, geluid, microfoons en reiskosten samen, vooraf vastgelegd. Anders lijkt een DJ goedkoop tot de losse opties erbij komen en je alsnog duurder uit bent.",
          "Ik werk met een heldere all-in prijs. Wat we afspreken betaal je, zonder verrassingen achteraf. Hoe ik die prijs opbouw lees je op de [prijzen-pagina](/prijzen), en wat ik op een trouwdag allemaal doe staat op de [bruiloft-pagina](/bruiloft-dj).",
        ],
      },
      {
        h2: "DJ plus MC, backup en de kennismaking",
        paragraphs: [
          "Let op of de DJ ook de microfoon pakt. Op een bruiloft moet iemand de avond aan elkaar praten: de binnenkomst aankondigen, speeches inleiden, de openingsdans starten. Doet de DJ dat zelf, dan scheelt je dat een aparte presentator en een hoop afstemming. Bij mij zit die MC-rol erbij, daar lees je meer over op de [DJ en MC-pagina](/dj-en-mc).",
          "Vraag ook naar backup. Een tweede laptop, reservespeakers, een extra microfoon: als er iets hapert, draait de avond door. En plan een kennismaking, in het echt of via een videocall. Je merkt snel of er een klik is. Die klik is belangrijker dan een mooie website, want deze persoon staat de hele avond voor jullie gasten.",
        ],
      },
    ],
    links: [
      { to: "/bruiloft-dj", label: "Bruiloft DJ" },
      { to: "/dj-en-mc", label: "DJ en MC in een" },
      { to: "/prijzen", label: "Bekijk de prijzen" },
    ],
    faq: [
      {
        q: "Waar let je op bij het kiezen van een bruiloft-DJ?",
        a: "Op ervaring met bruiloften, een heldere all-in prijs, eigen licht en geluid, backup-apparatuur en of de DJ ook de MC-rol pakt. En vooral op de klik tijdens een kennismaking.",
      },
      {
        q: "Welke vragen stel ik aan een bruiloft-DJ?",
        a: "Vraag hoeveel bruiloften de DJ heeft gedaan, of de prijs all-in is, of er backup-apparatuur is, of er een draaiboek wordt gemaakt en of de DJ zelf de microfoon pakt als MC.",
      },
      {
        q: "Hoe weet ik of een DJ bij ons past?",
        a: "Plan een kennismaking. In een gesprek merk je snel of er een klik is en of de DJ jullie wensen begrijpt. Dat gevoel weegt net zo zwaar als de techniek en de prijs.",
      },
    ],
    ctaSubtitle:
      "Benieuwd of we klikken? App of bel me, dan plannen we vrijblijvend een kennismaking.",
  },

  {
    slug: "bruiloft-muziek",
    title: "Bruiloft muziek: zo vul je de avond | Kevin Froger",
    description:
      "Welke muziek draai je op een bruiloft? Hoe je de dag opbouwt van ceremonie tot feest, een dansvloer vol krijgt en de zaal leest.",
    primaryKeyword: "welke muziek draai je op een bruiloft",
    datePublished: "2026-06-17",
    cardTitle: "Bruiloft muziek: zo vul je de avond",
    cardSummary:
      "Hoe je de muziek over de dag opbouwt, een dansvloer vol krijgt en houdt, plus must-plays, no-go's en het lezen van de zaal.",
    readingMinutes: 5,
    image: IMG_BOOTH,
    imageAlt: "DJ-booth met lichtshow op een volle dansvloer tijdens een feest",
    eyebrow: "Blog",
    titleLine1: "Bruiloft muziek:",
    titleLine2: "zo vul je de avond",
    intro:
      "Goede muziek op een bruiloft gaat niet over een perfecte afspeellijst. Het gaat over de juiste plaat op het juiste moment. Ik leg uit hoe ik de dag opbouw en hoe ik een dansvloer vol krijg en houd. Met wat tips voor jullie eigen wensen.",
    blocksHeading: "In het kort",
    blocks: [
      {
        t: "Bouw het op",
        d: "De muziek volgt de dag. Rustig tijdens de ceremonie en het diner, langzaam meer energie naar de avond, en vol gas op de dansvloer.",
      },
      {
        t: "Lees de zaal",
        d: "Een vaste lijst werkt niet. Ik kijk wie er staat en wat aanslaat, en stuur de muziek bij op wat de gasten doen.",
      },
      {
        t: "Must-plays en no-go's",
        d: "Geef door welke nummers er echt in moeten en wat je absoluut niet wil. De rest vul ik aan op het moment zelf.",
      },
    ],
    sections: [
      {
        h2: "De muziek bouwt mee met de dag",
        paragraphs: [
          "Een bruiloft heeft fases en de muziek volgt die mee. Tijdens de ceremonie draai je iets rustigs en persoonlijks, denk aan een nummer voor het binnenkomen en eentje voor het tekenen. Bij de borrel zet je luchtige, herkenbare platen op de achtergrond, zacht genoeg om bij te praten.",
          "Tijdens het diner blijft de muziek subtiel, zodat gesprekken en speeches voorop staan. Na het eten draai je langzaam de energie op met meezingers, richting de openingsdans. Die opent het feest, en daarna ga je vol naar de dansvloer. Die opbouw zorgt dat het feest natuurlijk op gang komt in plaats van uit het niets.",
        ],
      },
      {
        h2: "Een dansvloer vol krijgen en houden",
        paragraphs: [
          "Een volle dansvloer begin je niet met je beste plaat van de avond. Je begint met iets dat bijna iedereen kent en meteen meeneemt, vaak een meezinger uit een tijd die het hele gezelschap deelt. Als de vloer eenmaal vol staat, bouw je verder en wissel je tempo af zodat mensen blijven staan.",
          "Vol houden is een kwestie van lezen en bijsturen. Loopt de vloer leeg, dan gooi ik er een zekerheidje in. Staat er een jong publiek, dan kan het uptempo. Zit er veel familie van verschillende leeftijden, dan meng ik genres en tijdperken zodat iedereen aan de beurt komt. Verzoekjes pas ik meteen in als ze passen bij het moment.",
        ],
      },
      {
        h2: "Allround draaien en de zaal lezen",
        paragraphs: [
          "Op een bruiloft staan mensen van alle leeftijden. Opa en oma, vrienden van jullie leeftijd, kinderen. Daarom draai ik allround: van jaren 70 en 80 tot de nieuwste hits, en alles ertussen. Niet alles tegelijk, maar verdeeld over de avond zodat elke groep zijn moment heeft.",
          "Het belangrijkste is de zaal lezen. Een afspeellijst die thuis perfect klinkt zegt niets over wat op de avond zelf werkt. Ik kijk continu wie er danst en stuur bij. Geef je vooraf je must-plays en no-go's door, dan heb ik een kader en vul ik de rest in op gevoel. Verzoekjes van jullie of de gasten kun je vooraf of op de avond doorgeven.",
        ],
      },
    ],
    links: [
      { to: "/bruiloft-dj", label: "Bruiloft DJ" },
      { to: "/dj-en-mc", label: "DJ en MC in een" },
      { to: "/verzoekje", label: "Verzoekje doorgeven" },
    ],
    faq: [
      {
        q: "Welke muziek draai je op een bruiloft?",
        a: "Allround, afgestemd op het moment. Rustig en persoonlijk bij de ceremonie en het diner, herkenbaar tijdens de borrel, en van jaren 70 tot de nieuwste hits op de dansvloer. Ik lees de zaal en stuur bij.",
      },
      {
        q: "Hoe krijg je een dansvloer vol op een bruiloft?",
        a: "Je begint met een plaat die bijna iedereen kent en meeneemt, vaak een meezinger. Daarna bouw je verder, wissel je tempo af en stuur je bij op wat de gasten doen.",
      },
      {
        q: "Kunnen wij en onze gasten verzoekjes doorgeven?",
        a: "Zeker. Geef vooraf je must-plays en no-go's door, en op de avond pas ik verzoekjes van gasten in als ze passen bij het moment. Doorgeven kan via de verzoekje-pagina.",
      },
    ],
    ctaSubtitle:
      "Wensen of een lijstje must-plays? App of bel me, dan nemen we de muziek voor jullie dag samen door.",
  },

  {
    slug: "wat-doet-een-mc",
    title: "Wat doet een MC op een feest? | Kevin Froger",
    description:
      "Wat doet een MC, en wat is het verschil met een DJ? Uitleg over presenteren en aankondigen, en waarom DJ en MC in een persoon je avond soepeler maakt.",
    primaryKeyword: "wat doet een mc",
    datePublished: "2026-06-29",
    cardTitle: "Wat doet een MC op een feest?",
    cardSummary:
      "Een MC praat je avond aan elkaar: aankondigingen, speeches en het programma. Lees wat een MC doet en waarom DJ en MC in een persoon handig is.",
    readingMinutes: 4,
    image: IMG_BOOTH,
    imageAlt: "DJ Kevin Froger met microfoon in zijn rol als MC",
    eyebrow: "Blog",
    titleLine1: "Wat doet een MC",
    titleLine2: "op een feest?",
    intro:
      "MC staat voor master of ceremonies: de persoon die je avond aan elkaar praat. Maar wat houdt dat precies in, en heb je er een nodig naast je DJ? Ik leg het uit, en waarom ik beide rollen in een persoon doe.",
    blocksHeading: "In het kort",
    blocks: [
      { t: "De avond aan elkaar praten", d: "Een MC kondigt de onderdelen aan: binnenkomst, speeches, de eerste dans, een prijsuitreiking. Zo weet iedereen wat er gebeurt en valt er geen stilte." },
      { t: "Het programma bewaken", d: "Een MC houdt de tijdlijn in de gaten en stuurt bij als het uitloopt, zodat het diner niet koud wordt en de avond op tijd losgaat." },
      { t: "De microfoon op de juiste momenten", d: "Een goede MC praat niet de hele avond, maar pakt de microfoon alleen als het ertoe doet. De rest van de tijd is voor de muziek." },
      { t: "DJ en MC in een", d: "Bij mij is de DJ ook de MC. Een aanspreekpunt, en de overgang van praten naar dansen verloopt vloeiend omdat dezelfde persoon de muziek draait." },
    ],
    sections: [
      {
        h2: "Wat is het verschil tussen een DJ en een MC?",
        paragraphs: [
          "Een DJ draait de muziek. Een MC praat de avond aan elkaar en pakt de microfoon voor aankondigingen. Op veel feesten zijn dat twee verschillende mensen, die op de dag zelf op elkaar ingespeeld moeten raken. Dat kan goed gaan, maar het is wel afstemmen.",
          "Bij mij zijn de DJ en de MC dezelfde persoon. Ik weet dus precies wanneer ik de muziek even zachter draai om iets aan te kondigen en wanneer het feest weer aan kan. Hoe dat werkt lees je op de pagina over [DJ en MC in een persoon](/dj-en-mc).",
        ],
      },
      {
        h2: "Heb je een MC nodig op je feest?",
        paragraphs: [
          "Niet elk feest heeft een strak programma nodig. Maar er zijn bijna altijd momenten die je niet wil missen: een toost, een speech, de eerste dans of een verrassing. Een MC zorgt dat die op het juiste moment komen en dat de hele zaal erbij is.",
          "Voor een [bruiloft](/bruiloft-dj) is een MC die de dag aan elkaar praat fijn, en op een [bedrijfsfeest](/zakelijk-dj) is er vaak een podiumdeel dat aangekondigd moet worden. Omdat ik beide rollen pak, hoef je geen losse presentator te boeken.",
        ],
      },
    ],
    links: [
      { to: "/dj-en-mc", label: "DJ en MC in een" },
      { to: "/bruiloft-dj", label: "Bruiloft DJ" },
      { to: "/zakelijk-dj", label: "Bedrijfsfeest DJ" },
    ],
    faq: [
      { q: "Wat betekent MC?", a: "MC staat voor master of ceremonies. Dat is de persoon die het programma aankondigt en de avond aan elkaar praat." },
      { q: "Is een MC hetzelfde als een presentator?", a: "In de praktijk wel. Een MC presenteert de onderdelen van je feest: aankondigingen, speeches en het inleiden van de momenten die ertoe doen." },
      { q: "Kan een DJ ook MC zijn?", a: "Ja. Ik ben DJ en MC in een persoon, dus ik draai de muziek en pak de microfoon op de juiste momenten. Je hebt zo een aanspreekpunt." },
      { q: "Praat een MC de hele avond?", a: "Nee. Een goede MC pakt de microfoon alleen als het nodig is. De rest van de avond ligt de focus op de muziek en de dansvloer." },
    ],
    ctaSubtitle:
      "Benieuwd hoe ik jouw avond aan elkaar praat? App of bel me met je datum en locatie.",
  },

  {
    slug: "hoeveel-kost-een-dj-huren",
    title: "Hoeveel kost een DJ huren? | Kevin Froger",
    description:
      "Hoeveel kost het om een DJ te huren? Uitleg over de factoren die de prijs bepalen: uren, ervaring, licht en geluid en reisafstand. Plus wat all-in betekent.",
    primaryKeyword: "hoeveel kost een dj huren",
    datePublished: "2026-06-29",
    cardTitle: "Hoeveel kost een DJ huren?",
    cardSummary:
      "Wat bepaalt de prijs van een DJ? Uitleg over uren, ervaring, techniek en reisafstand, en waarom all-in je achteraf gedoe scheelt.",
    readingMinutes: 4,
    image: IMG_BOOTH,
    imageAlt: "DJ-set van Kevin Froger met licht en geluid",
    eyebrow: "Blog",
    titleLine1: "Hoeveel kost",
    titleLine2: "een DJ huren?",
    intro:
      "De prijs van een DJ loopt flink uiteen, en dat is logisch: een hobby-DJ is iets anders dan een ervaren DJ met een complete show. Ik leg uit welke factoren de prijs bepalen, zodat je weet waar je op moet letten.",
    blocksHeading: "In het kort",
    blocks: [
      { t: "Uren en opbouw", d: "Hoe langer je draait en hoe meer opbouw en soundcheck, hoe meer tijd erin gaat zitten. De meeste DJ's rekenen per avond of per uur." },
      { t: "Ervaring", d: "Een hobby-DJ zit vaak rond de 100 tot 300 euro. Een ervaren DJ met eigen show zit marktbreed meestal tussen de 600 en 1.200 euro." },
      { t: "Licht en geluid", d: "Inclusief eigen set en verlichting, of komt dat los erbij? Dat scheelt veel in de prijs en in het gedoe op de dag zelf." },
      { t: "Reisafstand", d: "Verder weg betekent vaak reiskosten en soms een overnachting. Vraag of dat in de prijs zit of er los bij komt." },
    ],
    sections: [
      {
        h2: "Waar betaal je voor bij een DJ?",
        paragraphs: [
          "De grootste verschillen zitten in ervaring en in wat er bij de prijs in zit. Een lage instapprijs ziet er mooi uit, maar als de tweede speaker, de microfoons en de reiskosten er los bij komen, sta je voor een verrassing. Vraag daarom altijd wat all-in precies betekent.",
          "Ik werk all-in: DJ, MC, licht en geluid zitten er samen in. Op de [prijzenpagina](/prijzen) zie je de pakketten en wat erbij hoort, zodat je een eerlijke vergelijking kunt maken.",
        ],
      },
      {
        h2: "Wat kost een DJ voor jouw feest?",
        paragraphs: [
          "Voor een verjaardag of borrel is een DJ vaak goedkoper dan voor een bruiloft, simpelweg omdat er minder uren en minder opbouw bij komen kijken. Voor een bruiloft draai ik vaak de hele dag, van ceremonie tot de laatste plaat, en dat zie je terug in de prijs.",
          "Wil je het naadje van de kous over een bruiloft-DJ? Lees dan [wat een DJ voor je bruiloft kost](/blog/wat-kost-dj-bruiloft). Voor een prijs op maat voor jouw datum maak ik een offerte, app of bel me met de datum en locatie.",
        ],
      },
    ],
    links: [
      { to: "/prijzen", label: "Bekijk de prijzen" },
      { to: "/dj-en-mc", label: "DJ en MC in een" },
      { to: "/bruiloft-dj", label: "Bruiloft DJ" },
    ],
    faq: [
      { q: "Hoeveel kost een DJ gemiddeld?", a: "Een ervaren DJ met eigen licht en geluid zit marktbreed meestal tussen de 600 en 1.200 euro, afhankelijk van de uren en de reisafstand. Een hobby-DJ is goedkoper, maar levert meestal geen complete show." },
      { q: "Is licht en geluid bij de prijs inbegrepen?", a: "Bij mij wel. Ik werk all-in, dus DJ, MC, licht en geluid zitten er samen in. Bij sommige aanbieders komt dat los erbij, dus vraag er altijd naar." },
      { q: "Wat kost een DJ voor een bruiloft?", a: "Voor een bruiloft draai ik vaak de hele dag, dus dat ligt hoger dan een avondfeest. Lees de details in het artikel over wat een DJ voor je bruiloft kost." },
      { q: "Kun je een offerte op maat maken?", a: "Ja. Geef je datum, locatie en wensen door, dan reken ik een heldere all-in prijs voor je uit, zonder verrassingen achteraf." },
    ],
    ctaSubtitle:
      "Benieuwd wat een DJ voor jouw feest kost? App of bel me met de datum en locatie.",
  },
];

export const BLOG_BY_SLUG: Record<string, BlogPost> = Object.fromEntries(
  BLOG_POSTS.map((p) => [p.slug, p]),
);
