// Centrale data voor stadspagina's. Iedere stad heeft een eigen route file
// (/dj-boeken-<slug>.tsx) die deze data importeert en aan CityPage doorgeeft.
//
// Doel: SEO-rijke locatiepagina's voor de grootste Nederlandse steden, met
// unieke content per stad (geen template-thin pages).

export type CityData = {
  slug: string;
  name: string;
  province: string;
  region?: string;
  title: string;
  description: string;
  heroIntro: string;
  serviceDescription: string;
  // Een paar paragraphs unieke content per stad:
  paragraphs: string[];
  // Wat de stad/regio karakteriseert (venues, herkenbare punten):
  characteristics: string;
  // Top-3 omliggende of gerelateerde plaatsen (voor "Ook in"-strip):
  related: Array<{ to: string; label: string }>;
};

export const CITIES: Record<string, CityData> = {
  rotterdam: {
    slug: "rotterdam",
    name: "Rotterdam",
    province: "Zuid-Holland",
    region: "Rijnmond",
    title: "DJ Rotterdam huren | Bruiloft, feest & event | Kevin Froger",
    description:
      "DJ Kevin Froger draait in Rotterdam en heel Rijnmond. Bruiloften, bedrijfsfeesten en festivals. Vraag een offerte aan.",
    heroIntro:
      "Rotterdam is voor mij vaste prik. Van hippe locaties in M4H tot bedrijfsfeesten in de Maashaven, ik draai in de hele stad. Veel ervaring met events in de Drechtsteden-achtergrond, dus van Centrum tot Hoek van Holland ben ik snel ter plekke.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest en verjaardag in Rotterdam. Complete show met licht en geluid, DJ en MC in een persoon.",
    paragraphs: [
      "Rotterdam heeft enorm veel verschillende feestlocaties. Van historische plekken als de SS Rotterdam tot moderne locaties in M4H, het Lloydkwartier en op de Wilhelminapier. Ik ken de meeste zalen, restaurants en industriële spots en zorg voor een opbouw die past bij de uitstraling.",
      "Voor bedrijfsfeesten en netwerkevents in Rotterdam-Centrum, rond het Beurs-WTC of de Coolsingel kun je me boeken. Ook voor bruiloften in de buitenwijken (Hillegersberg, Kralingen, Schiebroek) en in Hoogvliet, Pernis en Hoek van Holland kom ik graag draaien.",
      "Vanuit de Drechtsteden ben ik via de A15 of Beneluxtunnel binnen 30 minuten in elke wijk van Rotterdam. Geen reiskosten binnen de stad.",
    ],
    characteristics:
      "Centrum, Wilhelminapier, M4H, Lloydkwartier, Kralingen, Hillegersberg, Schiebroek, Hoogvliet, Pernis, Hoek van Holland, IJsselmonde, Charlois, Feijenoord.",
    related: [
      { to: "/dj-boeken-dordrecht", label: "Dordrecht" },
      { to: "/dj-boeken-hoeksche-waard", label: "Hoeksche Waard" },
      { to: "/dj-boeken-den-haag", label: "Den Haag" },
    ],
  },

  amsterdam: {
    slug: "amsterdam",
    name: "Amsterdam",
    province: "Noord-Holland",
    region: "Randstad-noord",
    title: "DJ Amsterdam huren | Bruiloft & bedrijfsfeest | Kevin Froger",
    description:
      "DJ Kevin Froger voor bruiloften, bedrijfsfeesten en festivals in Amsterdam. Complete show met licht en geluid. Check je datum.",
    heroIntro:
      "Voor feesten in Amsterdam kom ik graag jouw kant op. Van bruiloften aan de grachten tot bedrijfsfeesten op de Zuidas, ik zorg voor een avond die staat. Elke wijk heeft een eigen sfeer en daar speel ik op in.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest en festival in Amsterdam. Inclusief licht, geluid en MC services.",
    paragraphs: [
      "Amsterdam heeft alles: bruiloften op een rondvaartboot, bedrijfsfeesten in moderne kantoorgebouwen op de Zuidas, festivals in Noord en intieme feesten in het centrum. Voor elk type event pas ik mijn show aan.",
      "Feestlocaties genoeg: hotels in Centrum en Zuid, plekken langs het IJ, evenementhallen in Noord en kleinere zalen in Oud-West, De Pijp en Oost. Heb je je locatie al, dan stem ik mijn set en opstelling daarop af.",
      "Vanuit Midden-Nederland of de Randstad-zuid ben ik via de A2 of A4 in een uur in Amsterdam. Voor klussen die laat eindigen kan ik in de stad overnachten, in overleg.",
    ],
    characteristics:
      "Centrum, Zuid, Zuidas, Oud-West, De Pijp, Oost, West, Noord, IJburg, Westpoort en Amstelveen.",
    related: [
      { to: "/dj-boeken-haarlem", label: "Haarlem" },
      { to: "/dj-boeken-utrecht", label: "Utrecht" },
      { to: "/dj-boeken-almere", label: "Almere" },
    ],
  },

  "den-haag": {
    slug: "den-haag",
    name: "Den Haag",
    province: "Zuid-Holland",
    region: "Haaglanden",
    title: "DJ Den Haag huren | Bruiloft & corporate | Kevin Froger",
    description:
      "DJ in Den Haag voor bruiloften, bedrijfsfeesten en festivals. Complete show met licht en geluid. Vraag een offerte aan.",
    heroIntro:
      "Den Haag is een stad met veel facetten: corporate events bij ministeries en internationale instellingen, bruiloften aan zee bij Scheveningen, en sfeervolle feesten in de oude binnenstad. Voor elk type avond breng ik de juiste set.",
    serviceDescription:
      "Allround DJ voor bedrijfsfeest, bruiloft, verjaardag of festival in Den Haag. Inclusief licht, geluid en MC services.",
    paragraphs: [
      "In Den Haag ben ik je DJ door de hele stad. Voor zakelijke events bij ministeries en internationale organisaties, bruiloften in Scheveningen of Kijkduin, en feesten in centrum-locaties zoals het Plein, Lange Voorhout of de Witte de Withstraat.",
      "Ook voor de wijken Voorburg, Leidschendam, Rijswijk en Wassenaar ben ik je DJ. De ligging van Den Haag aan zee maakt het gebied geliefd voor strandbruiloften en zomer-events.",
      "Vanuit het zuiden via de A4 of A13 ben ik snel in Den Haag. Geen extra reiskosten binnen de stad.",
    ],
    characteristics:
      "Centrum, Scheveningen, Kijkduin, Voorburg, Leidschendam, Rijswijk, Wassenaar, Loosduinen.",
    related: [
      { to: "/dj-boeken-rotterdam", label: "Rotterdam" },
      { to: "/dj-boeken-delft", label: "Delft" },
      { to: "/dj-boeken-leiden", label: "Leiden" },
    ],
  },

  utrecht: {
    slug: "utrecht",
    name: "Utrecht",
    province: "Utrecht",
    region: "Utrechtse Heuvelrug",
    title: "DJ Utrecht huren | Bruiloft & bedrijfsfeest | Kevin Froger",
    description:
      "DJ in Utrecht voor bruiloften, bedrijfsfeesten en festivals. Complete show met licht en geluid. Check beschikbaarheid.",
    heroIntro:
      "Utrecht zit centraal in Nederland en is goed bereikbaar. Voor bruiloften en bedrijfsfeesten in de Domstad, op kantoorlocaties rond Papendorp of Lage Weide, of in de wijken De Meern, Vleuten en Leidsche Rijn kun je me boeken. Goede bereikbaarheid vanuit de Betuwe en Hoeksche Waard.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest, verjaardag of festival in Utrecht en omgeving.",
    paragraphs: [
      "Utrecht heeft veel feestlocaties: historische plekken in het centrum, moderne event-locaties op de Croeselaan en rond Papendorp, en sfeervolle zalen in Lombok en Ondiep. Voor elke wijk pas ik mijn opbouw aan de ruimte aan.",
      "Ook de randgemeenten zijn goed bereikbaar: Nieuwegein, Houten, IJsselstein, Bunnik en Wijk bij Duurstede. Voor een bruiloft op een buitenlocatie op de Utrechtse Heuvelrug (Zeist, Doorn, Driebergen) kun je me net zo goed boeken.",
      "Vanuit de Betuwe via de A12 of A2 ben ik binnen 30-45 minuten in Utrecht. Geen extra reiskosten binnen de stad.",
    ],
    characteristics:
      "Centrum, Lombok, Ondiep, Lage Weide, Papendorp, De Meern, Vleuten, Leidsche Rijn, Tuindorp, Wittevrouwen.",
    related: [
      { to: "/dj-boeken-amersfoort", label: "Amersfoort" },
      { to: "/dj-boeken-tiel", label: "Tiel" },
      { to: "/dj-boeken-amsterdam", label: "Amsterdam" },
    ],
  },

  eindhoven: {
    slug: "eindhoven",
    name: "Eindhoven",
    province: "Noord-Brabant",
    region: "Zuidoost-Brabant",
    title: "DJ Eindhoven huren | Bruiloft & festival | Kevin Froger",
    description:
      "DJ Kevin Froger voor bruiloften, festivals en corporate events in Eindhoven en de Brainport-regio. Complete show inbegrepen.",
    heroIntro:
      "Eindhoven is de Brainport van Nederland: een stad met veel zakelijke events, technologiebedrijven en moderne feestlocaties. Daarnaast veel bruiloften op buitenlocaties tussen Veldhoven, Best en Geldrop. Voor een feest in de stad of het ommeland kun je me boeken.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest, festival of verjaardag in Eindhoven en de Brainport-regio.",
    paragraphs: [
      "Eindhoven heeft een levendig uitgaansleven en mooie feestlocaties, vooral rond Strijp-S, het centrum, Tongelre en Woensel. Voor een bruiloft, bedrijfsfeest of verjaardag in de stad kun je me boeken, inclusief eigen licht en geluid.",
      "Voor bruiloften in en rond Eindhoven kom ik ook naar Veldhoven, Best, Geldrop-Mierlo, Nuenen en Helmond. De Brabantse feestcultuur (en het bourgondische karakter) past goed bij hoe ik draai.",
      "Ook voor zomer-festivals en kermis-events in de regio kun je me boeken. Vanuit Den Bosch of de Betuwe via de A2 of A50 ben ik in een uurtje in Eindhoven.",
    ],
    characteristics:
      "Centrum, Strijp-S, Tongelre, Woensel, Stratum, Gestel, Veldhoven, Best, Geldrop, Nuenen.",
    related: [
      { to: "/dj-boeken-tilburg", label: "Tilburg" },
      { to: "/dj-boeken-den-bosch", label: "'s-Hertogenbosch" },
      { to: "/dj-boeken-breda", label: "Breda" },
    ],
  },

  tilburg: {
    slug: "tilburg",
    name: "Tilburg",
    province: "Noord-Brabant",
    region: "Hart van Brabant",
    title: "DJ Tilburg huren | Bruiloft & feest | Kevin Froger",
    description:
      "DJ Kevin Froger voor bruiloften en bedrijfsfeesten in Tilburg en het hart van Brabant. Complete show met licht en geluid.",
    heroIntro:
      "Tilburg is een echte feeststad. Carnaval, Tilburgse Kermis, studentenfeesten, en daarnaast veel bruiloften op landelijke locaties tussen Goirle, Oisterwijk en Loon op Zand. Ik draai er met plezier en ken het feestpubliek goed.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest, festival of verjaardag in Tilburg en het hart van Brabant.",
    paragraphs: [
      "Tilburg heeft een rijke feestcultuur, vooral rond Carnaval en de Tilburgse Kermis. Voor een bedrijfsfeest, bruiloft of verjaardag in een restaurant in het centrum of een zaal aan de rand van de stad kun je me inhuren.",
      "Voor bruiloften in en om Tilburg kom ik naar Goirle, Hilvarenbeek, Oisterwijk, Loon op Zand, Kaatsheuvel en Waalwijk. Brabantse bourgondische sfeer met een allround DJ en MC in één.",
      "Vanuit Den Bosch of Eindhoven via de A58 ben ik binnen een half uur in Tilburg.",
    ],
    characteristics:
      "Centrum, Reeshof, Goirle, Hilvarenbeek, Oisterwijk, Loon op Zand, Kaatsheuvel, Berkel-Enschot.",
    related: [
      { to: "/dj-boeken-eindhoven", label: "Eindhoven" },
      { to: "/dj-boeken-breda", label: "Breda" },
      { to: "/dj-boeken-den-bosch", label: "'s-Hertogenbosch" },
    ],
  },

  breda: {
    slug: "breda",
    name: "Breda",
    province: "Noord-Brabant",
    region: "West-Brabant",
    title: "DJ Breda huren | Bruiloft & bedrijfsfeest | Kevin Froger",
    description:
      "DJ in Breda voor bruiloft, bedrijfsfeest of festival. Complete show met licht en geluid. Vraag een offerte aan.",
    heroIntro:
      "Breda is een sfeervolle Brabantse stad met veel mooie feestplekken: historische locaties in het centrum, moderne event-zalen rond de Singel en buitenlocaties in en rond het Mastbos. Voor een bruiloft of bedrijfsfeest in de stad kun je me inhuren.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Breda en West-Brabant.",
    paragraphs: [
      "Voor bruiloften en bedrijfsfeesten in Breda kom ik in het centrum, Ginneken, Princenhage en de Haagse Beemden. De stad heeft veel landelijke locaties net buiten de ring, mooi voor sfeervolle bruiloften.",
      "Ook in Etten-Leur, Oosterhout, Zundert, Bavel en Teteringen kun je me boeken. De combinatie van bourgondische sfeer en moderne uitstraling past mooi bij mijn manier van werken.",
      "Vanuit Tilburg of Dordrecht via de A16 ben ik snel in Breda.",
    ],
    characteristics:
      "Centrum, Ginneken, Princenhage, Haagse Beemden, Belcrum, Etten-Leur, Oosterhout, Bavel, Teteringen, Zundert.",
    related: [
      { to: "/dj-boeken-tilburg", label: "Tilburg" },
      { to: "/dj-boeken-rotterdam", label: "Rotterdam" },
      { to: "/dj-boeken-den-bosch", label: "'s-Hertogenbosch" },
    ],
  },

  "den-bosch": {
    slug: "den-bosch",
    name: "'s-Hertogenbosch",
    province: "Noord-Brabant",
    region: "Noordoost-Brabant",
    title: "DJ Den Bosch huren | Bruiloft & feest | Kevin Froger",
    description:
      "DJ in 's-Hertogenbosch voor bruiloft, bedrijfsfeest of verjaardag. Bossche feesten met een complete show. Check beschikbaarheid.",
    heroIntro:
      "'s-Hertogenbosch heeft een bourgondische feestcultuur die past bij mijn manier van werken. Ik draai in de hele stad: historische locaties rond de Markt en de Sint-Jan, en moderne event-locaties op de Pettelaar of in Engelen. Ook bekend met de Meierij.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest, verjaardag of festival in 's-Hertogenbosch en de Meierij.",
    paragraphs: [
      "Bossche feesten staan bekend om de gezelligheid, en daar speel ik op in. Voor een bruiloft in een locatie als de Stadsschouwburg, een restaurant aan de Sint-Jan of een zaal rond Hintham kun je me inhuren.",
      "Ook voor de Meierij (Schijndel, Sint-Michielsgestel, Boxtel, Vught, Berlicum) en het Land van Heusden en Altena ben ik je DJ. Veel landelijke buitenlocaties tussen de boomgaarden en uiterwaarden.",
      "Vanuit Zaltbommel via de A2 of vanuit Tilburg via de A65 ben ik binnen 20-30 minuten in Den Bosch.",
    ],
    characteristics:
      "Centrum, Hintham, Engelen, Pettelaar, Empel, Schijndel, Sint-Michielsgestel, Boxtel, Vught.",
    related: [
      { to: "/dj-boeken-zaltbommel", label: "Zaltbommel" },
      { to: "/dj-boeken-eindhoven", label: "Eindhoven" },
      { to: "/dj-boeken-tilburg", label: "Tilburg" },
    ],
  },

  nijmegen: {
    slug: "nijmegen",
    name: "Nijmegen",
    province: "Gelderland",
    region: "Rijk van Nijmegen",
    title: "DJ Nijmegen huren | Bruiloft & festival | Kevin Froger",
    description:
      "DJ in Nijmegen voor bruiloften, festivals en bedrijfsfeesten. Complete show met licht en geluid. Check beschikbaarheid.",
    heroIntro:
      "Nijmegen is een levendige stad met veel jong publiek en een sterk feestcircuit (Vierdaagse, studentenfeesten, festivals). Voor bruiloften, bedrijfsfeesten en evenementen in de stad en het Rijk van Nijmegen kun je me boeken.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest, festival of verjaardag in Nijmegen en het Rijk van Nijmegen.",
    paragraphs: [
      "Nijmegen kent een sterke feestcultuur, niet alleen tijdens de Vierdaagse maar ook met regulier bruiloft- en feestcircuit. Ik draai zowel in het centrum, in Nijmegen-Oost, op de Waalkade als in de uitgaanslocaties.",
      "Voor bruiloften in en rond Nijmegen kom ik ook naar Beuningen, Wijchen, Druten, Berg en Dal en Groesbeek. Veel mooie locaties tussen de Waal en de bossen.",
      "Vanuit Tiel of Arnhem via de A325 of A15 ben ik snel in Nijmegen.",
    ],
    characteristics:
      "Centrum, Waalkade, Nijmegen-Oost, Hees, Wolfskuil, Beuningen, Wijchen, Berg en Dal, Groesbeek.",
    related: [
      { to: "/dj-boeken-arnhem", label: "Arnhem" },
      { to: "/dj-boeken-tiel", label: "Tiel" },
      { to: "/dj-boeken-den-bosch", label: "'s-Hertogenbosch" },
    ],
  },

  arnhem: {
    slug: "arnhem",
    name: "Arnhem",
    province: "Gelderland",
    region: "Veluwezoom",
    title: "DJ Arnhem huren | Bruiloft & event | Kevin Froger",
    description:
      "DJ in Arnhem voor bruiloften, bedrijfsfeesten en festivals. Complete show met licht en geluid. Vraag een offerte aan.",
    heroIntro:
      "Arnhem ligt tussen de Veluwe en de Betuwe en biedt veel feestlocaties met groen en water. Voor een feest in de stad, op de Veluwezoom of langs de Rijn kun je me boeken. Goed bereikbaar vanuit de Betuwe.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest of festival in Arnhem en de Veluwezoom.",
    paragraphs: [
      "Arnhem heeft een rijke mix van feestlocaties: historische plekken in het centrum, evenementenhallen op Stadsblokken-Meinerswijk en sfeervolle restaurants in Sonsbeek en Burgers' Zoo. Voor bedrijfsfeesten en bruiloften kom ik in de hele stad.",
      "Ook in de Veluwezoom (Velp, Rheden, Dieren, Doesburg) en de Liemers (Westervoort, Duiven, Zevenaar) kun je me boeken. Goed bereikbaar vanuit de Betuwe.",
      "Vanuit Tiel of Nijmegen via de A325 ben ik binnen 30 minuten in Arnhem.",
    ],
    characteristics:
      "Centrum, Sonsbeek, Stadsblokken, Schuytgraaf, Presikhaaf, Velp, Rheden, Dieren, Doesburg, Westervoort.",
    related: [
      { to: "/dj-boeken-nijmegen", label: "Nijmegen" },
      { to: "/dj-boeken-apeldoorn", label: "Apeldoorn" },
      { to: "/dj-boeken-tiel", label: "Tiel" },
    ],
  },

  apeldoorn: {
    slug: "apeldoorn",
    name: "Apeldoorn",
    province: "Gelderland",
    region: "Veluwe",
    title: "DJ Apeldoorn huren | Bruiloft & feest | Kevin Froger",
    description:
      "DJ in Apeldoorn voor bruiloften, bedrijfsfeesten en festivals. Complete show met licht en geluid. Vraag een offerte aan.",
    heroIntro:
      "Apeldoorn ligt midden op de Veluwe en heeft veel landelijke trouwlocaties tussen de bossen. Ik draai er voor bruiloften, bedrijfsfeesten en festivals, en ben bekend met locaties als Het Loo, Apenheul en de vele boslocaties.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Apeldoorn en op de Veluwe.",
    paragraphs: [
      "Apeldoorn heeft een mooie mix van historische en moderne locaties. Voor bruiloften en bedrijfsfeesten draai ik in het centrum, op Paleis Het Loo of in een van de boslocaties tussen Apeldoorn en Hoenderloo.",
      "Ook voor Beekbergen, Loenen, Vaassen, Epe en Heerde kom ik graag. De Veluwe biedt veel buitenlocaties voor zomerbruiloften.",
      "Vanuit Arnhem of Zwolle via de A50 ben ik snel in Apeldoorn.",
    ],
    characteristics:
      "Centrum, Het Loo, Beekbergen, Loenen, Vaassen, Epe, Hoenderloo, Ugchelen.",
    related: [
      { to: "/dj-boeken-arnhem", label: "Arnhem" },
      { to: "/dj-boeken-zwolle", label: "Zwolle" },
      { to: "/dj-boeken-nijmegen", label: "Nijmegen" },
    ],
  },

  zwolle: {
    slug: "zwolle",
    name: "Zwolle",
    province: "Overijssel",
    region: "Salland",
    title: "DJ Zwolle huren | Bruiloft & event | Kevin Froger",
    description:
      "DJ in Zwolle voor bruiloften, bedrijfsfeesten en festivals. Voor klussen in Overijssel rij ik graag mee. Check je datum.",
    heroIntro:
      "Voor klussen in Zwolle en Overijssel rij ik graag mee. Hanze-stad met veel sfeervolle feestlocaties in de binnenstad, plus mooie buitenlocaties richting Kampen, Hasselt en de Vechtdal-regio.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest of festival in Zwolle en Overijssel.",
    paragraphs: [
      "Zwolle heeft veel historische plekken die zich lenen voor een sfeervolle bruiloft: kerken, oude pakhuizen en restaurants in de binnenstad. Voor bedrijfsfeesten ben ik je DJ in de industriële zones en op modern ingerichte event-locaties.",
      "Ook voor Kampen, Hasselt, Hattem, Raalte en de Vechtdal-regio (Ommen, Hardenberg) ben ik je DJ. Voor de afstand reken ik vaak ook overnachting in, in overleg.",
      "Vanuit de Veluwe via de A28 ben ik in 45 minuten in Zwolle.",
    ],
    characteristics:
      "Binnenstad, Aa-landen, Kampen, Hasselt, Hattem, Raalte, Ommen, Hardenberg.",
    related: [
      { to: "/dj-boeken-apeldoorn", label: "Apeldoorn" },
      { to: "/dj-boeken-almere", label: "Almere" },
      { to: "/dj-boeken-arnhem", label: "Arnhem" },
    ],
  },

  almere: {
    slug: "almere",
    name: "Almere",
    province: "Flevoland",
    region: "Flevoland",
    title: "DJ Almere huren | Bruiloft & feest | Kevin Froger",
    description:
      "DJ in Almere voor bruiloften, bedrijfsfeesten en verjaardagen. Vanuit de polder snel ter plekke. Vraag een offerte aan.",
    heroIntro:
      "Almere is de jongste grote stad van Nederland, met moderne event-locaties en veel ruimte. Voor bruiloften, bedrijfsfeesten en festivals kun je me er inhuren, van het centrum tot Almere Buiten en Almere Haven.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest of festival in Almere en heel Flevoland.",
    paragraphs: [
      "Almere groeit nog steeds, en de stad telt veel moderne feestlocaties: hotels, restaurants en zalen rond het Weerwater en in Almere Centrum. Voor bedrijfsevents in Almere Buiten en Almere Haven kun je me inhuren.",
      "Ook voor Lelystad, Dronten, Emmeloord (Noordoostpolder), Zeewolde en Urk ben ik je DJ. Veel ruimte, sfeervolle polderbruiloften en weinig file-stress.",
      "Vanuit Utrecht via de A6 of vanuit Amsterdam via de A1 ben ik snel in Almere.",
    ],
    characteristics:
      "Almere-Stad, Almere Centrum, Almere Buiten, Almere Haven, Lelystad, Dronten, Emmeloord, Zeewolde, Urk.",
    related: [
      { to: "/dj-boeken-amsterdam", label: "Amsterdam" },
      { to: "/dj-boeken-utrecht", label: "Utrecht" },
      { to: "/dj-boeken-zwolle", label: "Zwolle" },
    ],
  },

  maastricht: {
    slug: "maastricht",
    name: "Maastricht",
    province: "Limburg",
    region: "Heuvelland",
    title: "DJ Maastricht huren | Bruiloft & event | Kevin Froger",
    description:
      "DJ in Maastricht voor bruiloften, festivals en bedrijfsfeesten. Voor klussen in Limburg rij ik graag mee. Check je datum.",
    heroIntro:
      "Voor mooie klussen in Maastricht en Limburg rij ik graag mee, vaak met overnachting omdat het verder is. De stad heeft een unieke sfeer en de feestlocaties zijn van internationaal niveau. Bekend met events in het Heuvelland.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest of festival in Maastricht en Limburg.",
    paragraphs: [
      "Maastricht heeft een rijke feestcultuur: bourgondisch, internationaal en met veel sfeer. Voor bruiloften en bedrijfsevents ben ik je DJ in de binnenstad, op locaties als de Bonbonnière, hotels rond de Maas en in Wyck.",
      "Ook voor Heuvelland-locaties (Valkenburg, Gulpen, Vaals, Cadier en Keer) en Sittard-Geleen, Heerlen en Roermond ben ik je DJ. Voor de afstand reken ik overnachting in.",
      "De rit vanuit Midden-Nederland is ~2 uur. Voor mooie klussen geen probleem.",
    ],
    characteristics:
      "Binnenstad, Wyck, Maastricht-Oost, Valkenburg, Gulpen, Vaals, Cadier en Keer, Heerlen, Sittard-Geleen, Roermond.",
    related: [
      { to: "/dj-boeken-eindhoven", label: "Eindhoven" },
      { to: "/dj-boeken-den-bosch", label: "'s-Hertogenbosch" },
      { to: "/dj-boeken-tilburg", label: "Tilburg" },
    ],
  },

  haarlem: {
    slug: "haarlem",
    name: "Haarlem",
    province: "Noord-Holland",
    region: "Kennemerland",
    title: "DJ Haarlem huren | Bruiloft & feest | Kevin Froger",
    description:
      "DJ in Haarlem voor bruiloften en bedrijfsfeesten. Complete show met licht en geluid. Vraag een offerte aan.",
    heroIntro:
      "Haarlem heeft een mooie historische binnenstad en is geliefd voor bruiloften en bedrijfsevents. Voor een feest op een centrumlocatie of in de Kennemerland-omgeving kun je me boeken.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Haarlem en Kennemerland.",
    paragraphs: [
      "Haarlem combineert historische sfeer met moderne event-locaties. Voor een bruiloft in een locatie als de Grote Kerk of de Toneelschuur, of een restaurant aan het Spaarne, kun je me boeken.",
      "Voor bedrijfsfeesten kom ik ook in IJmuiden, Beverwijk, Heemstede, Zandvoort en Bloemendaal. Voor een strandbruiloft in Zandvoort ben ik graag je DJ.",
      "Vanuit Amsterdam via de A9 of A200 ben ik snel in Haarlem.",
    ],
    characteristics:
      "Centrum, Spaarne-Oost, Heemstede, Zandvoort, Bloemendaal, IJmuiden, Beverwijk.",
    related: [
      { to: "/dj-boeken-amsterdam", label: "Amsterdam" },
      { to: "/dj-boeken-leiden", label: "Leiden" },
    ],
  },

  delft: {
    slug: "delft",
    name: "Delft",
    province: "Zuid-Holland",
    region: "Haaglanden",
    title: "DJ Delft huren | Bruiloft & feest | Kevin Froger",
    description:
      "DJ in Delft voor bruiloften en bedrijfsfeesten. Complete show met licht en geluid. Vraag een offerte aan.",
    heroIntro:
      "Delft is een sfeervolle, historische stad met volop feestlocaties. Denk aan een bruiloft aan de Markt, een bedrijfsevent in een TU-Delft-locatie of een feest in de oude pakhuizen langs de Schie, ik draai er graag.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Delft en omgeving.",
    paragraphs: [
      "Delft heeft een rijke historische sfeer die mooi past bij bruiloften. Locaties als de Oude en Nieuwe Kerk, of De Waag aan de Markt, zijn geliefd voor trouwerijen. Voor bedrijfsfeesten kom ik ook in de TU-Delft campus en YES!Delft.",
      "Ook voor Rijswijk, Pijnacker, Nootdorp, Berkel en Rodenrijs en Schipluiden ben ik je DJ.",
      "Vanuit Rotterdam of Den Haag via de A13 ben ik snel in Delft.",
    ],
    characteristics:
      "Centrum, TU-wijk, Pijnacker, Nootdorp, Berkel en Rodenrijs, Schipluiden, Den Hoorn.",
    related: [
      { to: "/dj-boeken-den-haag", label: "Den Haag" },
      { to: "/dj-boeken-rotterdam", label: "Rotterdam" },
      { to: "/dj-boeken-leiden", label: "Leiden" },
    ],
  },

  leiden: {
    slug: "leiden",
    name: "Leiden",
    province: "Zuid-Holland",
    region: "Bollenstreek",
    title: "DJ Leiden huren | Bruiloft & event | Kevin Froger",
    description:
      "DJ in Leiden voor bruiloften, studentenfeesten en bedrijfsevents. Complete show met licht en geluid. Check je datum.",
    heroIntro:
      "Leiden heeft een levendig studentenleven en een prachtige historische binnenstad. Voor bruiloften, bedrijfsevents en feesten in de stad en de Bollenstreek kun je me inhuren.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest, festival of verjaardag in Leiden en de Bollenstreek.",
    paragraphs: [
      "Leiden is een mix van historie en studentencultuur. Voor een bruiloft in een locatie als de Pieterskerk, de Hartebrugkerk of De Burcht kun je me boeken. Bedrijfsevents draai ik net zo goed, of het nu in een zaal in het centrum, op Bio Science Park of in een restaurant langs de grachten is.",
      "Voor de Bollenstreek (Lisse, Hillegom, Sassenheim, Noordwijk, Katwijk) en Voorschoten ben ik je DJ. Strandbruiloften in Noordwijk en Katwijk staan vast op het zomerprogramma.",
      "Vanuit Den Haag of Amsterdam via de A44 of A4 ben ik snel in Leiden.",
    ],
    characteristics:
      "Centrum, Bio Science Park, Lisse, Hillegom, Sassenheim, Noordwijk, Katwijk, Voorschoten.",
    related: [
      { to: "/dj-boeken-den-haag", label: "Den Haag" },
      { to: "/dj-boeken-haarlem", label: "Haarlem" },
      { to: "/dj-boeken-amsterdam", label: "Amsterdam" },
    ],
  },

  amersfoort: {
    slug: "amersfoort",
    name: "Amersfoort",
    province: "Utrecht",
    region: "Eemland",
    title: "DJ Amersfoort huren | Bruiloft & feest | Kevin Froger",
    description:
      "DJ in Amersfoort voor bruiloften, bedrijfsfeesten en verjaardagen. Complete show met licht en geluid. Vraag een offerte aan.",
    heroIntro:
      "Amersfoort is een sfeervolle stad in het hart van Nederland, met mooie locaties in de historische binnenstad en moderne event-zalen op De Hoef. Voor bruiloften en bedrijfsfeesten kun je me er inhuren.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Amersfoort en Eemland.",
    paragraphs: [
      "Amersfoort heeft een prachtige middeleeuwse binnenstad die zich leent voor sfeervolle bruiloften. Voor bedrijfsevents draai ik op moderne kantoorlocaties op De Hoef en in event-zalen rond station Schothorst.",
      "Ook voor Soest, Baarn, Hoogland, Bunschoten en Nijkerk ben ik je DJ. De Eem en de Utrechtse Heuvelrug bieden veel mooie buitenlocaties.",
      "Vanuit Utrecht via de A28 ben ik snel in Amersfoort.",
    ],
    characteristics:
      "Centrum, De Hoef, Schothorst, Soest, Baarn, Hoogland, Bunschoten, Nijkerk.",
    related: [
      { to: "/dj-boeken-utrecht", label: "Utrecht" },
      { to: "/dj-boeken-almere", label: "Almere" },
      { to: "/dj-boeken-zwolle", label: "Zwolle" },
    ],
  },

  // ====== Tweede ring: middelgrote steden ======

  gouda: {
    slug: "gouda",
    name: "Gouda",
    province: "Zuid-Holland",
    region: "Het Groene Hart",
    title: "DJ Gouda huren | Bruiloft & feest | Kevin Froger",
    description: "DJ in Gouda voor bruiloften, bedrijfsfeesten en verjaardagen. Complete show met licht en geluid. Vraag een offerte aan.",
    heroIntro: "Gouda heeft een schilderachtig centrum met de Markt en het Stadhuis als blikvangers. Voor bruiloften en bedrijfsfeesten in en rond de stad, ook richting de Krimpenerwaard, kun je me boeken.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Gouda en het Groene Hart.",
    paragraphs: [
      "Gouda is een Hollandse stad met veel sfeervolle locaties: rond de Markt, de Sint-Janskerk en in de oude binnenstad zit charme. Voor moderne bedrijfsevents zijn er ook locaties op Goudse Poort.",
      "Ook voor Bodegraven, Waddinxveen, Moordrecht, Reeuwijk en de Krimpenerwaard ben ik je DJ. Vanuit Rotterdam of Utrecht via de A20/A12 ben ik snel in Gouda.",
    ],
    characteristics: "Centrum, Goudse Poort, Bodegraven, Waddinxveen, Moordrecht, Reeuwijk, Schoonhoven.",
    related: [
      { to: "/dj-boeken-rotterdam", label: "Rotterdam" },
      { to: "/dj-boeken-utrecht", label: "Utrecht" },
    ],
  },

  spijkenisse: {
    slug: "spijkenisse",
    name: "Spijkenisse",
    province: "Zuid-Holland",
    region: "Voorne-Putten",
    title: "DJ Spijkenisse huren | Bruiloft & feest | Kevin Froger",
    description: "DJ in Spijkenisse en op Voorne-Putten voor bruiloften, bedrijfsfeesten en verjaardagen. Vraag een offerte aan. Eigen licht en geluid, DJ en MC in één.",
    heroIntro: "Spijkenisse is de centrale plek op Voorne-Putten. Je kunt me hier boeken, en ook in Hellevoetsluis, Brielle en de hele Voorne-Putten regio.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Spijkenisse en Voorne-Putten.",
    paragraphs: [
      "Voor bruiloften in Spijkenisse en de omliggende dorpen kun je me inhuren. Denk aan de zalen in het centrum of een buitenlocatie richting Oostvoorne.",
      "Ook voor Hellevoetsluis, Brielle, Oostvoorne, Rockanje, Zuidland en Abbenbroek kom ik graag. Vanuit Rotterdam via de Hartelbrug ben ik snel op Voorne-Putten.",
    ],
    characteristics: "Centrum, Hellevoetsluis, Brielle, Oostvoorne, Rockanje, Zuidland, Abbenbroek.",
    related: [
      { to: "/dj-boeken-rotterdam", label: "Rotterdam" },
      { to: "/dj-boeken-hoeksche-waard", label: "Hoeksche Waard" },
    ],
  },

  schiedam: {
    slug: "schiedam",
    name: "Schiedam",
    province: "Zuid-Holland",
    region: "Rijnmond",
    title: "DJ Schiedam huren | Bruiloft & feest | Kevin Froger",
    description: "DJ in Schiedam voor bruiloften en bedrijfsfeesten. Complete show met licht en geluid. Vraag een offerte aan.",
    heroIntro: "Schiedam ligt vlakbij Rotterdam en heeft een sfeervol jenever-centrum met molens. Geliefde feeststad voor bruiloften in historische pakhuizen aan de Lange Haven.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Schiedam en Rijnmond.",
    paragraphs: [
      "Schiedam heeft veel karakter: de molens, de jenever-distilleerderijen en de oude pakhuizen aan de Lange Haven maken het een populaire bruiloftslocatie. Ook voor bedrijfsevents in moderne kantoorlocaties op Schieveen kun je me inhuren.",
      "Naast Schiedam zelf kom ik ook in Vlaardingen, Maassluis en de hele Rijnmond. Vanuit Rotterdam in een paar minuten ter plekke.",
    ],
    characteristics: "Centrum, Schieveen, Vlaardingen, Maassluis, Spaland.",
    related: [
      { to: "/dj-boeken-rotterdam", label: "Rotterdam" },
      { to: "/dj-boeken-den-haag", label: "Den Haag" },
    ],
  },

  zoetermeer: {
    slug: "zoetermeer",
    name: "Zoetermeer",
    province: "Zuid-Holland",
    region: "Haaglanden",
    title: "DJ Zoetermeer huren | Bruiloft & feest | Kevin Froger",
    description: "DJ in Zoetermeer voor bruiloften en bedrijfsfeesten. Complete show met licht en geluid. Check je datum.",
    heroIntro: "Zoetermeer is een groene stad met veel moderne event-locaties. Voor bruiloften en bedrijfsfeesten kun je me er boeken, ook in Lansingerland en Pijnacker-Nootdorp.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Zoetermeer en omgeving.",
    paragraphs: [
      "Zoetermeer heeft een gevarieerd aanbod aan feestlocaties: Dutch Water Dreams, restaurants in Buytenpark en moderne event-zalen rond station Centrum-West.",
      "Ook voor Bleiswijk, Berkel en Rodenrijs, Pijnacker en Nootdorp ben ik je DJ. Via de A12 of N470 snel bereikbaar vanuit Den Haag of Utrecht.",
    ],
    characteristics: "Centrum, Buytenpark, Bleiswijk, Berkel en Rodenrijs, Pijnacker, Nootdorp.",
    related: [
      { to: "/dj-boeken-den-haag", label: "Den Haag" },
      { to: "/dj-boeken-rotterdam", label: "Rotterdam" },
    ],
  },

  alkmaar: {
    slug: "alkmaar",
    name: "Alkmaar",
    province: "Noord-Holland",
    region: "Noord-Holland-Noord",
    title: "DJ Alkmaar huren | Bruiloft & feest | Kevin Froger",
    description: "DJ in Alkmaar voor bruiloften en bedrijfsfeesten. Complete show met licht en geluid. Vraag een offerte aan.",
    heroIntro: "Alkmaar is een gezellige stad met een rijke historie. Voor bruiloften en bedrijfsfeesten kom ik in de hele Noord-Hollandse regio, ook richting Heerhugowaard, Bergen en Castricum.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Alkmaar en Noord-Holland-Noord.",
    paragraphs: [
      "Alkmaar heeft een schilderachtige binnenstad met de Waagplein, en daarbij veel mooie feestlocaties. Voor bruiloften, bedrijfsevents en festivals draai ik in en rond de stad.",
      "Ook voor Heerhugowaard, Bergen, Castricum, Schoorl en Limmen ben ik je DJ. Vanuit Amsterdam via de A9 ben ik in een uurtje in Alkmaar.",
    ],
    characteristics: "Centrum, Heerhugowaard, Bergen, Castricum, Schoorl, Limmen, Heiloo.",
    related: [
      { to: "/dj-boeken-amsterdam", label: "Amsterdam" },
      { to: "/dj-boeken-haarlem", label: "Haarlem" },
    ],
  },

  hilversum: {
    slug: "hilversum",
    name: "Hilversum",
    province: "Noord-Holland",
    region: "Het Gooi",
    title: "DJ Hilversum huren | Bruiloft & event | Kevin Froger",
    description: "DJ in Hilversum en Het Gooi voor bruiloften, bedrijfsfeesten en festivals. Vraag een offerte aan. Eigen licht en geluid, DJ en MC in één.",
    heroIntro: "Hilversum is mediastad bij uitstek: veel corporate events bij omroepen, productiebedrijven en hotels. Voor bruiloften en feesten in Het Gooi kun je me boeken.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Hilversum en Het Gooi.",
    paragraphs: [
      "Hilversum heeft een sterk corporate event-circuit door de mediabedrijven. Voor bedrijfsfeesten draai ik op campussen, in evenementenhallen en bij hotels rond Beeld & Geluid.",
      "Voor bruiloften in Het Gooi kom ik ook in Bussum, Naarden, Laren, Blaricum en Huizen. Sfeervolle buitenlocaties tussen bos en heide.",
    ],
    characteristics: "Centrum, Mediapark, Bussum, Naarden, Laren, Blaricum, Huizen.",
    related: [
      { to: "/dj-boeken-amsterdam", label: "Amsterdam" },
      { to: "/dj-boeken-utrecht", label: "Utrecht" },
    ],
  },

  veenendaal: {
    slug: "veenendaal",
    name: "Veenendaal",
    province: "Utrecht",
    region: "Vallei",
    title: "DJ Veenendaal huren | Bruiloft & feest | Kevin Froger",
    description: "DJ in Veenendaal voor bruiloften en bedrijfsfeesten. Complete show met licht en geluid. Check je datum.",
    heroIntro: "Veenendaal ligt aan de grens van Utrecht en Gelderland en heeft veel ondernemers-events. Ik draai er voor bedrijfsfeesten, bruiloften en verjaardagen, ook in de Gelderse Vallei.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Veenendaal en de Vallei.",
    paragraphs: [
      "Veenendaal heeft een actief bedrijfsleven, dus voor corporate events kun je me hier goed inzetten. Voor bruiloften ben ik je DJ in en rond de stad, met sfeervolle locaties richting de Veluwe-rand.",
      "Ook voor Rhenen, Renswoude, Scherpenzeel en Woudenberg kom ik graag. Vanuit Utrecht of Arnhem via de A12 snel ter plekke.",
    ],
    characteristics: "Centrum, Rhenen, Renswoude, Scherpenzeel, Woudenberg.",
    related: [
      { to: "/dj-boeken-utrecht", label: "Utrecht" },
      { to: "/dj-boeken-amersfoort", label: "Amersfoort" },
    ],
  },

  zeist: {
    slug: "zeist",
    name: "Zeist",
    province: "Utrecht",
    region: "Utrechtse Heuvelrug",
    title: "DJ Zeist huren | Bruiloft & feest | Kevin Froger",
    description: "DJ in Zeist en op de Utrechtse Heuvelrug voor bruiloften en bedrijfsfeesten. Complete show inbegrepen. Eigen licht en geluid, DJ en MC in één.",
    heroIntro: "Zeist heeft prachtige landgoederen die ideaal zijn voor bruiloften, plus veel bedrijven met events. Voor een feest op de Heuvelrug kun je me boeken.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Zeist en op de Utrechtse Heuvelrug.",
    paragraphs: [
      "Zeist heeft geliefde landgoederen als Slot Zeist, plus moderne event-locaties rond het centrum. Voor een bedrijfsfeest of bruiloft op een landgoed of in een zaal in de regio kun je me boeken.",
      "Voor bruiloften kom ik ook in Driebergen, Doorn, Bunnik en Den Dolder. Mooie buitenlocaties tussen Utrecht en de Veluwe.",
    ],
    characteristics: "Centrum, Slot Zeist, Driebergen, Doorn, Bunnik, Den Dolder, Austerlitz.",
    related: [
      { to: "/dj-boeken-utrecht", label: "Utrecht" },
      { to: "/dj-boeken-amersfoort", label: "Amersfoort" },
    ],
  },

  houten: {
    slug: "houten",
    name: "Houten",
    province: "Utrecht",
    region: "Kromme Rijnstreek",
    title: "DJ Houten huren | Bruiloft & feest | Kevin Froger",
    description: "DJ in Houten voor bruiloften, bedrijfsfeesten en verjaardagen. Complete show inbegrepen. Vraag een offerte aan. Eigen licht en geluid, DJ en MC in één.",
    heroIntro: "Houten ligt vlakbij Utrecht en heeft mooie feestlocaties. Voor bruiloften en bedrijfsevents in Houten en de Kromme Rijnstreek kun je me boeken.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Houten en de Kromme Rijnstreek.",
    paragraphs: [
      "Houten heeft veel mooie buitenlocaties en moderne event-zalen. Voor bruiloften, bedrijfsfeesten en verjaardagen kun je me inhuren.",
      "Ook voor Bunnik, Wijk bij Duurstede, Cothen, Werkhoven en Schalkwijk ben ik je DJ.",
    ],
    characteristics: "Centrum, Bunnik, Wijk bij Duurstede, Cothen, Werkhoven, Schalkwijk.",
    related: [
      { to: "/dj-boeken-utrecht", label: "Utrecht" },
      { to: "/dj-boeken-tiel", label: "Tiel" },
    ],
  },

  nieuwegein: {
    slug: "nieuwegein",
    name: "Nieuwegein",
    province: "Utrecht",
    region: "Lekstroom",
    title: "DJ Nieuwegein huren | Bruiloft & feest | Kevin Froger",
    description: "DJ in Nieuwegein voor bruiloften en bedrijfsfeesten. Complete show met licht en geluid.",
    heroIntro: "Nieuwegein ligt aan de zuidkant van Utrecht en heeft veel corporate event-locaties. Voor zakelijke en privé-events kun je me hier inhuren.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Nieuwegein en omgeving.",
    paragraphs: [
      "Nieuwegein heeft een actief zakelijk circuit: hotels, conferenties en event-zalen op Plettenburg en City. Voor corporate events kun je me hier boeken.",
      "Ook voor Vianen, IJsselstein, Lopik en Benschop kom ik graag. Vanuit Utrecht via de A2 of A27 in 15 minuten ter plekke.",
    ],
    characteristics: "Centrum, Plettenburg, Galecop, Vianen, IJsselstein, Lopik, Benschop.",
    related: [
      { to: "/dj-boeken-utrecht", label: "Utrecht" },
      { to: "/dj-boeken-houten", label: "Houten" },
    ],
  },

  ede: {
    slug: "ede",
    name: "Ede",
    province: "Gelderland",
    region: "Vallei",
    title: "DJ Ede huren | Bruiloft & feest | Kevin Froger",
    description: "DJ in Ede voor bruiloften, bedrijfsfeesten en festivals. Complete show met licht en geluid.",
    heroIntro: "Ede ligt centraal in Gelderland met de Veluwe-rand binnen handbereik. Voor bruiloften op buitenlocaties en bedrijfsevents kun je me boeken.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of festival in Ede en de Vallei.",
    paragraphs: [
      "Ede heeft een actief feest- en eventcircuit. Voor bruiloften en bedrijfsfeesten draai ik in het centrum en op de mooie buitenlocaties rond de Veluwe-rand.",
      "Ook voor Bennekom, Lunteren, Wageningen, Renkum en Wolfheze ben ik je DJ. Veluwe in de achtertuin, mooie omgeving voor feesten.",
    ],
    characteristics: "Centrum, Bennekom, Lunteren, Wageningen, Renkum, Wolfheze.",
    related: [
      { to: "/dj-boeken-arnhem", label: "Arnhem" },
      { to: "/dj-boeken-amersfoort", label: "Amersfoort" },
    ],
  },

  wageningen: {
    slug: "wageningen",
    name: "Wageningen",
    province: "Gelderland",
    region: "FoodValley",
    title: "DJ Wageningen huren | Bruiloft & event | Kevin Froger",
    description: "DJ in Wageningen voor bruiloften, bedrijfsfeesten en studentenfeesten. Vraag een offerte aan. Eigen licht en geluid, DJ en MC in één.",
    heroIntro: "Wageningen is de FoodValley met een sterke wetenschaps- en studentencultuur. Voor bruiloften, bedrijfsevents bij WUR en studentenfeesten kun je me inhuren.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of festival in Wageningen en de FoodValley.",
    paragraphs: [
      "Wageningen heeft veel zakelijke events door de universiteit en bijbehorende sector. Voor bruiloften ook geliefd: mooie locaties langs de Rijn met de Veluwezoom als achtergrond.",
      "Ook voor Rhenen, Bennekom, Renkum en de hele FoodValley ben ik je DJ.",
    ],
    characteristics: "Centrum, WUR Campus, Rhenen, Bennekom, Renkum.",
    related: [
      { to: "/dj-boeken-ede", label: "Ede" },
      { to: "/dj-boeken-arnhem", label: "Arnhem" },
    ],
  },

  helmond: {
    slug: "helmond",
    name: "Helmond",
    province: "Noord-Brabant",
    region: "Peelregio",
    title: "DJ Helmond huren | Bruiloft & feest | Kevin Froger",
    description: "DJ in Helmond voor bruiloften en bedrijfsfeesten in Brabant. Complete show inbegrepen. Vraag een offerte aan. Eigen licht en geluid, DJ en MC in één.",
    heroIntro: "Helmond ligt vlakbij Eindhoven in de Peelregio. Voor bruiloften, bedrijfsfeesten en verjaardagen in de stad en het ommeland kun je me boeken.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Helmond en de Peelregio.",
    paragraphs: [
      "Helmond heeft een actieve feestcultuur (Carnaval, kermis) en goede feestlocaties. Voor bruiloften draai ik ook in de dorpen eromheen.",
      "Ook voor Mierlo, Lierop, Asten, Someren, Deurne en Gemert ben ik je DJ.",
    ],
    characteristics: "Centrum, Mierlo, Lierop, Asten, Someren, Deurne, Gemert.",
    related: [
      { to: "/dj-boeken-eindhoven", label: "Eindhoven" },
      { to: "/dj-boeken-den-bosch", label: "'s-Hertogenbosch" },
    ],
  },

  oss: {
    slug: "oss",
    name: "Oss",
    province: "Noord-Brabant",
    region: "Noordoost-Brabant",
    title: "DJ Oss huren | Bruiloft & feest | Kevin Froger",
    description: "DJ in Oss voor bruiloften, bedrijfsfeesten en verjaardagen. Complete show inbegrepen. Eigen licht en geluid, DJ en MC in één.",
    heroIntro: "Oss is een Brabantse industriestad met veel bedrijfsfeesten. Voor bruiloften kom ik ook in de Maas-regio en het Land van Cuijk.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Oss en Noordoost-Brabant.",
    paragraphs: [
      "Oss heeft een sterk bedrijfsleven en een actief bruiloftscircuit. Voor corporate events en bruiloften in de stad en de omgeving kun je me boeken.",
      "Ook voor Berghem, Geffen, Megen, Lithoijen, Macharen en Ravenstein ben ik je DJ. Vanuit Den Bosch of Nijmegen snel ter plekke.",
    ],
    characteristics: "Centrum, Berghem, Geffen, Megen, Lithoijen, Macharen, Ravenstein.",
    related: [
      { to: "/dj-boeken-den-bosch", label: "'s-Hertogenbosch" },
      { to: "/dj-boeken-nijmegen", label: "Nijmegen" },
    ],
  },

  enschede: {
    slug: "enschede",
    name: "Enschede",
    province: "Overijssel",
    region: "Twente",
    title: "DJ Enschede huren | Bruiloft & feest | Kevin Froger",
    description: "DJ in Enschede en heel Twente voor bruiloften, bedrijfsfeesten en festivals. Vraag een offerte aan. Eigen licht en geluid, DJ en MC in één.",
    heroIntro: "Voor klussen in Enschede en Twente rij ik graag mee, vaak met overnachting. Studentenstad met actieve feestcultuur en mooie buitenlocaties richting Duitse grens.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of festival in Enschede en Twente.",
    paragraphs: [
      "Enschede is studentenstad en heeft een sterk feestcircuit. Voor bruiloften en bedrijfsevents in de hele Twentse regio kun je me boeken.",
      "Ook voor Hengelo, Almelo, Oldenzaal, Borne en Haaksbergen kom ik. Voor de afstand reken ik overnachting in.",
    ],
    characteristics: "Centrum, Boekelo, Hengelo, Almelo, Oldenzaal, Borne, Haaksbergen.",
    related: [
      { to: "/dj-boeken-zwolle", label: "Zwolle" },
      { to: "/dj-boeken-apeldoorn", label: "Apeldoorn" },
    ],
  },

  deventer: {
    slug: "deventer",
    name: "Deventer",
    province: "Overijssel",
    region: "Salland",
    title: "DJ Deventer huren | Bruiloft & event | Kevin Froger",
    description: "DJ in Deventer voor bruiloften, bedrijfsfeesten en festivals. Vraag een offerte aan. Eigen licht en geluid, DJ en MC in één.",
    heroIntro: "Deventer is een Hanze-stad met veel sfeer en historische feestlocaties. Voor bruiloften, bedrijfsevents en festivals in de hele Salland-regio kun je me boeken.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of festival in Deventer en Salland.",
    paragraphs: [
      "Deventer heeft een prachtige binnenstad met de Bergkerk en historische pakhuizen aan de IJssel. Voor bruiloften, bedrijfsevents en festivals kun je me er inhuren.",
      "Ook voor Bathmen, Diepenveen, Twello, Olst en Wijhe ben ik je DJ. Sallandse landschap met veel mooie buitenlocaties.",
    ],
    characteristics: "Centrum, Bathmen, Diepenveen, Twello, Olst, Wijhe.",
    related: [
      { to: "/dj-boeken-apeldoorn", label: "Apeldoorn" },
      { to: "/dj-boeken-zwolle", label: "Zwolle" },
    ],
  },

  leeuwarden: {
    slug: "leeuwarden",
    name: "Leeuwarden",
    province: "Friesland",
    region: "Friesland",
    title: "DJ Leeuwarden huren | Bruiloft & event | Kevin Froger",
    description: "DJ in Leeuwarden voor bruiloften, festivals en bedrijfsfeesten in Friesland. Voor mooie klussen kom ik graag mee. Eigen licht en geluid, DJ en MC in één.",
    heroIntro: "Voor mooie klussen in Leeuwarden en Friesland kom ik graag mee, met overnachting in overleg. Friese hoofdstad met sterke feestcultuur en sfeervolle buitenlocaties.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of festival in Leeuwarden en Friesland.",
    paragraphs: [
      "Leeuwarden is hoofdstad van Friesland en heeft een rijke feestcultuur. Voor bruiloften en bedrijfsevents draai ik in en rond de stad.",
      "Ook voor Sneek, Drachten, Heerenveen, Joure, Franeker en Dokkum ben ik je DJ. Voor de afstand reken ik reis en overnachting in.",
    ],
    characteristics: "Centrum, Sneek, Drachten, Heerenveen, Joure, Franeker, Dokkum.",
    related: [
      { to: "/dj-boeken-zwolle", label: "Zwolle" },
      { to: "/dj-boeken-groningen", label: "Groningen" },
    ],
  },

  groningen: {
    slug: "groningen",
    name: "Groningen",
    province: "Groningen",
    region: "Groningen",
    title: "DJ Groningen huren | Bruiloft & festival | Kevin Froger",
    description: "DJ in Groningen voor bruiloften, festivals en bedrijfsfeesten. Voor mooie klussen rij ik graag mee. Eigen licht en geluid, DJ en MC in één.",
    heroIntro: "Voor mooie klussen in Groningen ben ik beschikbaar, met overnachting omdat de afstand groter is. Studentenstad met actieve feestcultuur.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of festival in Groningen.",
    paragraphs: [
      "Groningen heeft een sterk feestcircuit door de studentencultuur, plus veel bedrijfsevents in moderne event-locaties.",
      "Ook voor Hoogezand, Veendam, Stadskanaal, Delfzijl en Winschoten ben ik je DJ. Voor afstand: reis en overnachting in offerte meegenomen.",
    ],
    characteristics: "Binnenstad, Paddepoel, Hoogezand, Veendam, Stadskanaal, Delfzijl, Winschoten.",
    related: [
      { to: "/dj-boeken-leeuwarden", label: "Leeuwarden" },
      { to: "/dj-boeken-zwolle", label: "Zwolle" },
    ],
  },

  assen: {
    slug: "assen",
    name: "Assen",
    province: "Drenthe",
    region: "Drenthe",
    title: "DJ Assen huren | Bruiloft & event | Kevin Froger",
    description: "DJ in Assen voor bruiloften, festivals en bedrijfsfeesten in Drenthe. Vraag een offerte aan. Eigen licht en geluid, DJ en MC in één.",
    heroIntro: "Voor klussen in Assen en Drenthe rij ik op aanvraag, vaak met overnachting. Bekend van TT Assen, sterke evenementen-cultuur.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of festival in Assen en Drenthe.",
    paragraphs: [
      "Assen heeft een sterke evenementen-cultuur door TT en andere festivals. Voor bruiloften en bedrijfsfeesten kun je me er ook inhuren.",
      "Ook voor Emmen, Hoogeveen, Meppel, Coevorden en Roden ben ik je DJ.",
    ],
    characteristics: "Centrum, TT-circuit, Emmen, Hoogeveen, Meppel, Coevorden, Roden.",
    related: [
      { to: "/dj-boeken-groningen", label: "Groningen" },
      { to: "/dj-boeken-zwolle", label: "Zwolle" },
    ],
  },

  middelburg: {
    slug: "middelburg",
    name: "Middelburg",
    province: "Zeeland",
    region: "Walcheren",
    title: "DJ Middelburg huren | Bruiloft & strandfeest | Kevin Froger",
    description: "DJ in Middelburg en heel Zeeland voor bruiloften, strandfeesten en festivals. Vraag een offerte aan. Eigen licht en geluid, DJ en MC in één.",
    heroIntro: "Voor bruiloften en strandfeesten in Zeeland kom ik graag. Middelburg is centraal in Walcheren en de Zeeuwse Kust biedt veel mooie locaties.",
    serviceDescription: "Allround DJ voor bruiloft, strandfeest of bedrijfsevent in Middelburg en Zeeland.",
    paragraphs: [
      "Middelburg heeft een prachtige historische binnenstad met de Lange Jan als blikvanger. Voor een bruiloft in een centrum-locatie of kerk kun je me boeken.",
      "Ook voor Vlissingen, Goes, Zierikzee, Domburg, Veere en de hele Zeeuwse Kust ben ik je DJ. Voor strandbruiloften veel ervaring.",
    ],
    characteristics: "Centrum, Vlissingen, Goes, Zierikzee, Domburg, Veere, Yerseke.",
    related: [
      { to: "/dj-boeken-rotterdam", label: "Rotterdam" },
      { to: "/dj-boeken-breda", label: "Breda" },
    ],
  },

  roermond: {
    slug: "roermond",
    name: "Roermond",
    province: "Limburg",
    region: "Midden-Limburg",
    title: "DJ Roermond huren | Bruiloft & feest | Kevin Froger",
    description: "DJ in Roermond voor bruiloften en bedrijfsfeesten in Midden-Limburg. Vraag een offerte aan. Eigen licht en geluid, DJ en MC in één.",
    heroIntro: "Voor klussen in Roermond en Midden-Limburg kom ik graag, met overnachting. Bekend van de Maasplassen en het Designer Outlet, sterk eventcircuit.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of festival in Roermond en Midden-Limburg.",
    paragraphs: [
      "Roermond heeft veel mooie waterlocaties aan de Maasplassen en goede event-locaties in de stad. Voor bruiloften en bedrijfsfeesten kun je me er boeken.",
      "Ook voor Weert, Echt-Susteren, Maasbracht en Sittard-Geleen ben ik je DJ. Voor afstand: reis in offerte meegenomen.",
    ],
    characteristics: "Centrum, Maasplassen, Weert, Echt-Susteren, Maasbracht, Sittard-Geleen.",
    related: [
      { to: "/dj-boeken-maastricht", label: "Maastricht" },
      { to: "/dj-boeken-eindhoven", label: "Eindhoven" },
    ],
  },

  venlo: {
    slug: "venlo",
    name: "Venlo",
    province: "Limburg",
    region: "Noord-Limburg",
    title: "DJ Venlo huren | Bruiloft & feest | Kevin Froger",
    description: "DJ in Venlo en Noord-Limburg voor bruiloften, bedrijfsfeesten en festivals. Voor klussen in Limburg rij ik graag mee.",
    heroIntro: "Voor klussen in Venlo en Noord-Limburg ben ik op aanvraag inzetbaar. Bourgondische feestcultuur en mooie locaties aan de Maas.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of festival in Venlo en Noord-Limburg.",
    paragraphs: [
      "Venlo heeft veel mooie feestplekken aan de Maas en in de centrum-locaties. Voor bruiloften en bedrijfsfeesten kun je me inhuren.",
      "Ook voor Venray, Horst, Roermond en Maasbracht ben ik je DJ. Voor afstand: reis in offerte meegenomen.",
    ],
    characteristics: "Centrum, Venray, Horst, Blerick, Tegelen, Belfeld.",
    related: [
      { to: "/dj-boeken-eindhoven", label: "Eindhoven" },
      { to: "/dj-boeken-roermond", label: "Roermond" },
    ],
  },

  "oud-beijerland": {
    "slug": "oud-beijerland",
    "name": "Oud-Beijerland",
    "province": "Zuid-Holland",
    "region": "Hoeksche Waard",
    "title": "DJ Oud-Beijerland huren | Kevin Froger",
    "description": "DJ Oud-Beijerland nodig? Ik draai al 15+ jaar, kom met eigen licht en geluid, ben DJ en MC in een persoon en sta op 5,0 op Google uit 10 reviews.",
    "heroIntro": "Zoek je een DJ in Oud-Beijerland? Vanuit 's-Gravendeel ben ik zo bij jullie, de Hoeksche Waard is mijn eigen achtertuin. Ik draai jouw feest van begin tot eind en doe de presentatie er zelf bij.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Oud-Beijerland en de rest van de Hoeksche Waard, inclusief eigen licht en geluid.",
    "paragraphs": [
      "Oud-Beijerland is de grootste kern van de Hoeksche Waard en het winkelhart van de regio, dus er valt hier veel te vieren. Of je nu een zaal in het centrum hebt geboekt, een feest geeft langs het Spui bij de haven of het thuis houdt in een wijk als De Bedijkte Rotte of Poortwijk, ik pas mijn set aan op de ruimte en het publiek.",
      "Geluid en licht heb ik zelf bij me, en achter de draaitafel pak ik ook de microfoon: het draaien en de presentatie komen bij mij uit dezelfde hand. Ik kondig de speeches aan, hou de avond op gang en zorg dat de vloer vol blijft. Tijdens het feest let ik op wat werkt en stuur ik daarop bij, in plaats van een vaste afspeellijst blind af te draaien.",
      "Vanaf 's-Gravendeel rijd ik via de N217 en de A29 zo Oud-Beijerland in, dus ik sta er ruim voor de eerste gasten klaar. Bruiloft, bedrijfsfeest, verjaardag of een feest met de buurt? Op mijn prijzenpagina vind je wat een avond met mij kost, en als je daar je datum bij vermeldt check ik meteen of ik nog vrij ben."
    ],
    "characteristics": "Oud-Beijerland centrum, Spui en haven, De Bedijkte Rotte, Poortwijk, Croonenburgh, Hoeksche Waard",
    "related": [
      {
        "to": "/dj-boeken-hoeksche-waard",
        "label": "Hoeksche Waard"
      },
      {
        "to": "/dj-boeken-numansdorp",
        "label": "Numansdorp"
      },
      {
        "to": "/dj-boeken-barendrecht",
        "label": "Barendrecht"
      }
    ]
  },

  "puttershoek": {
    "slug": "puttershoek",
    "name": "Puttershoek",
    "province": "Zuid-Holland",
    "region": "Hoeksche Waard",
    "title": "DJ Puttershoek huren | Kevin Froger",
    "description": "Als DJ in Puttershoek kom ik met eigen licht en geluid, en ik ben DJ en MC in een persoon. 15+ jaar ervaring en 5,0 op Google. Plan je feest met mij.",
    "heroIntro": "Op zoek naar een DJ in Puttershoek? Ik ben Kevin Froger, draai al ruim 15 jaar en woon vlakbij in 's-Gravendeel. Het oude suikerfabriekterrein leent zich prima voor een avond muziek, en ik weet hoe je zo'n ruime locatie vult met geluid en sfeer.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten en verjaardagen in Puttershoek en omgeving, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Puttershoek ligt aan de Oude Maas en heeft een dorps karakter, dus de feesten die ik hier draai lopen uiteen van een intieme verjaardag thuis tot een bedrijfsfeest in een grotere zaal. Het voormalige suikerfabriekterrein is omgebouwd tot evenementenruimte, en in dat soort ruime locaties stem ik mijn opstelling af op het volume en de akoestiek.",
      "Vanuit 's-Gravendeel ben ik snel in Puttershoek, zo over de provinciale weg langs Maasdam. Daardoor heb ik alle ruimte om op mijn gemak op te bouwen en alles te testen voordat het feest begint. Ik neem mijn eigen licht en geluid mee, dus je hoeft op de locatie niets te regelen.",
      "Als DJ en MC in een persoon praat ik de avond aan elkaar, kondig ik momenten aan en houd ik de vloer vol. Of het nu een bruiloft is in een kleine kring of een feest met honderd man, ik lees mee met wat de zaal wil horen en stuur de muziek daarop bij."
    ],
    "characteristics": "Puttershoek-centrum, suikerfabriekterrein, Oude Maas, Maasdam, Hoeksche Waard",
    "related": [
      {
        "to": "/dj-boeken-hoeksche-waard",
        "label": "Hoeksche Waard"
      },
      {
        "to": "/dj-boeken-maasdam",
        "label": "Maasdam"
      },
      {
        "to": "/dj-boeken-dordrecht",
        "label": "Dordrecht"
      }
    ]
  },

  "strijen": {
    "slug": "strijen",
    "name": "Strijen",
    "province": "Zuid-Holland",
    "region": "Hoeksche Waard",
    "title": "DJ Strijen huren | Bruiloft & feest | Kevin Froger",
    "description": "Op zoek naar een DJ in Strijen? Ik draai al 15+ jaar, kom met eigen licht en geluid en ben DJ en MC in een. 5,0 op Google. Even bellen kan altijd.",
    "heroIntro": "Een DJ in Strijen die het dorp en de polder kent? Dat ben ik. Ik woon vlakbij in 's-Gravendeel, dus ik sta zo bij je boerderij of in de zaal. Eigen licht en geluid neem ik mee, en ik praat de avond zelf aan elkaar.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten en verjaardagen in Strijen en Strijensas, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Strijen is een echt polderdorp, met de kern rond de Sint-Lambertuskerk en verderop Strijensas aan het Hollands Diep. Juist die buitenlocaties maken het feest hier vaak net even anders dan in een vaste zaal. Of je nu in een omgebouwde schuur, een feesttent in het weiland of een loods trouwt: ik kijk vooraf naar de ruimte zodat het geluid klopt en de avond loopt.",
      "Voor een boerderijbruiloft buitenaf is het handig dat ik alles zelf meebreng en zelf opbouw. Stroom, kabels, lampen, de hele installatie. Ik regel ook de momenten daaromheen, van de binnenkomst tot de eerste dans en het slotnummer, zodat jullie je geen zorgen hoeven te maken over wie wat aankondigt.",
      "Vanuit 's-Gravendeel rijd ik via de N217 en de Provincialeweg zo Strijen en Strijensas binnen. Ook de buurtschappen en het buitengebied richting Mookhoek en Cillaarshoek liggen voor mij om de hoek. Wil je weten of het op jullie datum past, dan kijken we dat samen rustig na."
    ],
    "characteristics": "Strijen centrum, Strijensas, Mookhoek, Cillaarshoek, buitengebied Hoeksche Waard",
    "related": [
      {
        "to": "/dj-boeken-hoeksche-waard",
        "label": "Hoeksche Waard"
      },
      {
        "to": "/dj-boeken-numansdorp",
        "label": "Numansdorp"
      },
      {
        "to": "/dj-boeken-dordrecht",
        "label": "Dordrecht"
      }
    ]
  },

  "numansdorp": {
    "slug": "numansdorp",
    "name": "Numansdorp",
    "province": "Zuid-Holland",
    "region": "Hoeksche Waard",
    "title": "DJ Numansdorp huren | Kevin Froger",
    "description": "DJ in Numansdorp nodig? Ik draai al 15+ jaar, DJ en MC in een persoon, eigen licht en geluid en 5,0 op Google. Compleet geregeld voor jouw feest.",
    "heroIntro": "Zoek je een DJ in Numansdorp die het feest van begin tot eind in goede banen leidt? Ik ben Kevin, woon om de hoek in 's-Gravendeel en sta zo bij je in het zuiden van de Hoeksche Waard. DJ en MC in een persoon, met mijn eigen licht en geluid mee.",
    "serviceDescription": "DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Numansdorp en omgeving, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Vanuit 's-Gravendeel ben ik snel in Numansdorp. Via de A29 sta ik zo aan de zuidkant van de Hoeksche Waard, dus ik heb genoeg tijd om alles in alle rust neer te zetten en te testen. Daar laad ik mijn complete set uit: licht en geluid neem ik zelf mee, jij hoeft niets te regelen.",
      "Of je feest nu in het centrum van Numansdorp is, dicht bij de jachthaven aan het Hollandsch Diep of richting het Hellegatsplein, ik draai overal waar je een goede vloer en wat ruimte hebt. Dat kan een feestzaal zijn, een loods, een tent in de tuin of een locatie aan het water. Ik kijk vooraf met je naar de plek zodat de opstelling klopt.",
      "Achter de draaitafel pak ik ook de microfoon erbij, dus een aparte presentator komt er niet aan te pas. Ik kondig de momenten aan, lees de zaal en pas de muziek aan op wat er die avond gebeurt. Bruiloft, bedrijfsfeest, verjaardag of festival in Numansdorp: ik zorg dat het van de eerste tot de laatste track loopt."
    ],
    "characteristics": "Numansdorp centrum, jachthaven Hollandsch Diep, Hellegatsplein, Buitensluis, zuidelijke Hoeksche Waard",
    "related": [
      {
        "to": "/dj-boeken-hoeksche-waard",
        "label": "Hoeksche Waard"
      },
      {
        "to": "/dj-boeken-klaaswaal",
        "label": "Klaaswaal"
      },
      {
        "to": "/dj-boeken-strijen",
        "label": "Strijen"
      }
    ]
  },

  "s-gravendeel": {
    "slug": "s-gravendeel",
    "name": "'s-Gravendeel",
    "province": "Zuid-Holland",
    "region": "Hoeksche Waard",
    "title": "DJ 's-Gravendeel huren | Kevin Froger",
    "description": "DJ 's-Gravendeel nodig? Dit is mijn eigen dorp. Ik draai al 15+ jaar, kom met eigen licht en geluid, ben DJ en MC in een en sta op 5,0 op Google.",
    "heroIntro": "Je zoekt een DJ in 's-Gravendeel? Dan zit je goed, want dit is mijn dorp. Ik woon hier aan de Dordtse Kil, tegenover Dordrecht, en sta vaak binnen een kwartier bij je voor de deur. Eigen licht en geluid neem ik mee, en de presentatie doe ik er zelf bij.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in 's-Gravendeel en de hele Hoeksche Waard, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "'s-Gravendeel is mijn thuisbasis, dus ik ken de kern rond de Kerkstraat, de buurt richting de jachthaven aan de Kil en de nieuwere wijken aan de rand van het dorp. Of je nu een feest geeft in een zaal in het centrum, een verjaardag thuis houdt of buiten bij het water iets organiseert: ik weet de weg en draai mijn set op wat bij de ruimte en de mensen past.",
      "Het grote voordeel als je mij hier boekt: korte lijntjes en geen reistijd om over na te denken. Ik bouw rustig op en test alles ruim voor aanvang, zonder gehaast. Mocht er tijdens de avond iets nodig zijn, dan ben ik letterlijk om de hoek en kan ik snel schakelen. Eigen licht en geluid heb ik bij me, dus op de locatie hoef je niets te regelen.",
      "Als DJ en MC in een persoon praat ik de avond aan elkaar, kondig ik de speeches en de eerste dans aan en hou ik de vloer vol. Je hebt er geen losse presentator bij nodig. 's-Gravendeel ligt vlak bij de A16 en de Kiltunnel naar Dordrecht, dus ook gasten van buiten het dorp vinden de weg makkelijk. Op mijn reviewspagina lees je hoe anderen het ervaren hebben, en wil je je datum vastleggen? Eén berichtje en je weet of ik nog vrij ben."
    ],
    "characteristics": "'s-Gravendeel centrum, Kerkstraat, jachthaven Dordtse Kil, Mookhoek, Wieldrecht, Kiltunnel, Hoeksche Waard",
    "related": [
      {
        "to": "/dj-boeken-hoeksche-waard",
        "label": "Hoeksche Waard"
      },
      {
        "to": "/dj-boeken-dordrecht",
        "label": "Dordrecht"
      },
      {
        "to": "/dj-boeken-puttershoek",
        "label": "Puttershoek"
      }
    ]
  },

  "zuid-beijerland": {
    "slug": "zuid-beijerland",
    "name": "Zuid-Beijerland",
    "province": "Zuid-Holland",
    "region": "Hoeksche Waard",
    "title": "DJ Zuid-Beijerland huren | Kevin Froger",
    "description": "DJ in Zuid-Beijerland nodig? Ik draai met eigen licht en geluid, ben DJ en MC in een persoon, heb 15+ jaar ervaring en sta op 5,0 op Google.",
    "heroIntro": "Zoek je een DJ in Zuid-Beijerland die het hele feest in handen neemt? Ik ben Kevin, kom uit 's-Gravendeel verderop in de Hoeksche Waard en sta zo bij jou in het westen van het eiland. Eigen licht en geluid mee, en ik praat de avond ook zelf aan elkaar.",
    "serviceDescription": "DJ en MC met eigen licht en geluid voor bruiloften, bedrijfsfeesten en verjaardagen in Zuid-Beijerland en omgeving.",
    "paragraphs": [
      "Zuid-Beijerland is een rustig akkerbouwdorp in het westen van de Hoeksche Waard, met veel ruimte en mooie buitenlocaties tussen de polders. Dat soort plekken vind ik fijn om te draaien: een feest in een schuur, op het erf van een boerderij of in een tent achter het huis. Ik breng mijn complete set licht en geluid mee, dus ook op een locatie zonder vaste installatie staat het binnen no time klaar.",
      "Vanuit 's-Gravendeel rij ik via de N217 zo door naar Zuid-Beijerland, en ook de buurkernen Goudswaard en Piershil liggen om de hoek. Ik ben dus snel ter plaatse om vooraf even rond te kijken hoe de zaal of de tent in elkaar zit. Of het nou een bruiloft, een verjaardag of een bedrijfsfeest is, ik stem de muziek af op wie er voor me staat.",
      "Het draaien en de presentatie komen bij mij uit dezelfde hand: ik kondig het eerste dansje aan, geef de toost een zetje en houd in de gaten dat de vloer vol blijft. In 15+ jaar achter de draaitafels heb ik geleerd te lezen wat een groep op dat moment wil horen."
    ],
    "characteristics": "Zuid-Beijerland, Goudswaard, Piershil, Nieuw-Beijerland, westelijke Hoeksche Waard, buitengebied en polders",
    "related": [
      {
        "to": "/dj-boeken-hoeksche-waard",
        "label": "Hoeksche Waard"
      },
      {
        "to": "/dj-boeken-oud-beijerland",
        "label": "Oud-Beijerland"
      },
      {
        "to": "/dj-boeken-numansdorp",
        "label": "Numansdorp"
      }
    ]
  },

  "klaaswaal": {
    "slug": "klaaswaal",
    "name": "Klaaswaal",
    "province": "Zuid-Holland",
    "region": "Hoeksche Waard",
    "title": "DJ Klaaswaal huren | Allround feest-DJ | Kevin Froger",
    "description": "DJ in Klaaswaal nodig? Ik draai al 15+ jaar, kom met eigen licht en geluid en ben DJ en MC in een. 5,0 op Google. Bel of mail voor je datum.",
    "heroIntro": "Op zoek naar een DJ in Klaaswaal die de avond in handen neemt? Ik ben Kevin, allround DJ en MC uit 's-Gravendeel, dus ik zit zo bij je in het dorp. Ik draai wat de zaal wil horen en houd het feest aan de gang tot het laatste nummer.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en feesten in Klaaswaal en de hele Hoeksche Waard, inclusief eigen licht en geluid.",
    "paragraphs": [
      "Klaaswaal ligt mooi centraal-zuid in de Hoeksche Waard, pal langs de A29. Vanuit 's-Gravendeel ben ik dus zo bij je, en met mijn eigen licht en geluid staat alles ruim voor aanvang klaar en getest. Of het nu in het dorpshuis is of een zaal in de buurt, ik pas mijn opstelling aan op de ruimte.",
      "Het feestpubliek hier is lekker gemoedelijk, en daar speel ik graag op in. Ik lees de zaal en draai van meezingers tot stevigere plaatjes, afhankelijk van wie er voor me staat. Als MC kondig ik momenten aan en zorg ik dat het programma loopt, zonder dat je daar een aparte presentator voor hoeft te regelen.",
      "Ik draai in Klaaswaal voor van alles: bruiloften, bedrijfsfeesten, verjaardagen en gewoon een goed feest. Via de A29 ben ik snel ter plaatse in de omliggende kernen als Numansdorp, Oud-Beijerland en Zuid-Beijerland. Wil je weten of jouw datum nog kan? Bel of mail me gerust, dan kom je er meteen achter."
    ],
    "characteristics": "Klaaswaal centrum, Numansdorp, Oud-Beijerland, Zuid-Beijerland, Mijnsheerenland, Hoeksche Waard",
    "related": [
      {
        "to": "/dj-boeken-hoeksche-waard",
        "label": "Hoeksche Waard"
      },
      {
        "to": "/dj-boeken-numansdorp",
        "label": "Numansdorp"
      },
      {
        "to": "/dj-boeken-oud-beijerland",
        "label": "Oud-Beijerland"
      }
    ]
  },

  "maasdam": {
    "slug": "maasdam",
    "name": "Maasdam",
    "province": "Zuid-Holland",
    "region": "Hoeksche Waard",
    "title": "DJ Maasdam huren | Kevin Froger",
    "description": "Op zoek naar een DJ in Maasdam? Ik draai al 15+ jaar, kom met eigen licht en geluid, ben DJ en MC in een en sta op 5,0 op Google. Bekijk de mogelijkheden.",
    "heroIntro": "Een DJ in Maasdam die je feest van begin tot eind leest? Daar kom ik voor. Ik woon vlakbij in 's-Gravendeel, dus dat dorpsfeest aan de Binnenmaas is voor mij een kort ritje. Ik regel het licht, het geluid en de microfoon zelf, zodat jij je nergens druk om hoeft te maken.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Maasdam en de rest van de Hoeksche Waard, inclusief eigen licht- en geluidsset.",
    "paragraphs": [
      "Maasdam is een klein dorp, en juist daar voel ik me thuis. Of het nu een verjaardag is in een zaaltje langs de Maasdamseweg, een feest bij iemand thuis of een buurtborrel met de hele straat, ik pas mijn set aan op de ruimte en de mensen die er staan. Ik kijk wat werkt en stuur bij terwijl ik draai, in plaats van een vaste lijst af te spelen.",
      "Omdat ik in 's-Gravendeel woon, ben ik snel ter plaatse. Via de Provincialeweg en langs Puttershoek sta ik zo in Maasdam, met genoeg marge om de boel rustig in te richten en te testen. Dat scheelt gedoe en betekent dat ik geen haast heb bij de opbouw.",
      "Ik draai bruiloften, bedrijfsfeesten, verjaardagen en festivals, en doe daarbij ook de presentatie zelf. Geschikt voor een kleine dorpsavond net zo goed als voor een grotere tent aan het water richting de Binnenmaas. Eigen licht en geluid neem ik mee, dus de zaal hoeft niets te leveren."
    ],
    "characteristics": "Maasdam, Puttershoek, Binnenmaas, 's-Gravendeel, Hoeksche Waard",
    "related": [
      {
        "to": "/dj-boeken-hoeksche-waard",
        "label": "Hoeksche Waard"
      },
      {
        "to": "/dj-boeken-puttershoek",
        "label": "Puttershoek"
      },
      {
        "to": "/dj-boeken-s-gravendeel",
        "label": "'s-Gravendeel"
      }
    ]
  },

  "heinenoord": {
    "slug": "heinenoord",
    "name": "Heinenoord",
    "province": "Zuid-Holland",
    "region": "Hoeksche Waard",
    "title": "DJ Heinenoord huren | Kevin Froger",
    "description": "DJ Heinenoord nodig? Ik draai al 15+ jaar, kom met eigen licht en geluid en ben DJ en MC in een persoon. 5,0 op Google. Bel of app me even.",
    "heroIntro": "Zoek je een DJ in Heinenoord die het feest van begin tot eind in goede banen leidt? Ik ben Kevin, allround DJ en MC uit 's-Gravendeel, en in Heinenoord ben ik in een wip ter plaatse. Ik kom met mijn eigen licht en geluid en regel zelf de aankondigingen, dus je hebt aan mij genoeg.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Heinenoord en omgeving, inclusief eigen licht en geluid.",
    "paragraphs": [
      "Heinenoord ligt aan de noordkant van de Hoeksche Waard, vlak bij de Heinenoordtunnel. Voor mij is dat de poort naar de regio: vanuit 's-Gravendeel ben ik er zo, en ook vanaf Rotterdam-zuid rij je er via de A29 en de tunnel binnen een kwartier naartoe. Handig als je gasten van beide kanten van het water komen.",
      "Ik draai in Heinenoord op allerlei plekken: een feestzaal of partyboerderij langs de Buitenom of de Dorpsstraat, een bedrijfspand op een terrein dichter bij de tunnel, of gewoon thuis in de tuin of de schuur. Ik kom langs, kijk waar de stroom zit en hoe de ruimte klinkt, en zorg dat licht en geluid passen bij de plek. Een grote zaal of een kleine huiskamer, ik stem het er allebei op af.",
      "Of het nu een bruiloft, een bedrijfsfeest, een verjaardag of een festival is: ik draai de muziek en pak zelf de microfoon voor de aankondigingen. Zo loopt de avond door zonder dat je een aparte presentator hoeft te regelen. Vooraf nemen we samen door wat je wel en niet wilt horen, zodat de vloer vol staat met nummers waar jouw mensen op wachten."
    ],
    "characteristics": "Heinenoord, Heinenoordtunnel, Buitenom, Dorpsstraat, noordkant Hoeksche Waard, A29",
    "related": [
      {
        "to": "/dj-boeken-hoeksche-waard",
        "label": "Hoeksche Waard"
      },
      {
        "to": "/dj-boeken-barendrecht",
        "label": "Barendrecht"
      },
      {
        "to": "/dj-boeken-oud-beijerland",
        "label": "Oud-Beijerland"
      }
    ]
  },

  "barendrecht": {
    "slug": "barendrecht",
    "name": "Barendrecht",
    "province": "Zuid-Holland",
    "region": "IJsselmonde",
    "title": "DJ Barendrecht huren | Kevin Froger",
    "description": "Een DJ in Barendrecht die het feest van A tot Z draait? Ik werk 15+ jaar, kom met eigen licht en geluid, ben DJ en MC in een en sta op 5,0 op Google.",
    "heroIntro": "Zoek je een DJ in Barendrecht? Ik ben Kevin Froger en woon net over de Oude Maas in 's-Gravendeel, dus ik sta zo bij jullie. Ik draai je feest van begin tot eind en doe de presentatie er zelf bij.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Barendrecht en omgeving, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Barendrecht ligt klem tussen Rotterdam en de Hoeksche Waard, en dat merk je aan de feesten hier: van een verjaardag in een wijk als Carnisselande of Buitenoord tot een bedrijfsfeest in een van de modernere zalen rond het centrum en Oude Dorp. In dat soort strakke, ruime locaties stem ik mijn opstelling en mijn volume af op de akoestiek, zodat het in een hoge zaal net zo lekker klinkt als in een kleinere ruimte.",
      "Vanuit 's-Gravendeel rijd ik over de Heinenoordtunnel en de A29 zo Barendrecht in, en via de A15 ben ik er ook snel als je aan de oostkant van het dorp zit. Daardoor heb ik alle tijd om in alle rust op te bouwen en alles te testen terwijl het nog stil is in de zaal. Mijn eigen licht en geluid neem ik mee, dus op de zaal hoef je daar niets voor te regelen.",
      "Als DJ en MC in een persoon praat ik de avond aan elkaar: ik kondig de speeches en het eerste dansje aan, hou het tempo erin en let de hele avond op wat de vloer doet. Bruiloft, bedrijfsfeest, verjaardag of festival, ik draai geen vaste lijst blind af maar stuur bij op wat dit publiek wil horen. Benieuwd of jouw datum nog vrij is? Stuur me een appje, dan hoor je het snel."
    ],
    "characteristics": "Barendrecht-centrum, Oude Dorp, Carnisselande, Buitenoord, Vrijenburg, langs Rotterdam en de Hoeksche Waard",
    "related": [
      {
        "to": "/dj-boeken-rotterdam",
        "label": "Rotterdam"
      },
      {
        "to": "/dj-boeken-hoeksche-waard",
        "label": "Hoeksche Waard"
      },
      {
        "to": "/dj-boeken-ridderkerk",
        "label": "Ridderkerk"
      }
    ]
  },

  "ridderkerk": {
    "slug": "ridderkerk",
    "name": "Ridderkerk",
    "province": "Zuid-Holland",
    "region": "IJsselmonde",
    "title": "DJ Ridderkerk huren | Kevin Froger",
    "description": "DJ Ridderkerk gezocht? Ik draai al 15+ jaar, kom met eigen licht en geluid, ben DJ en MC in een persoon en sta op 5,0 op Google uit 10 reviews.",
    "heroIntro": "Op zoek naar een DJ in Ridderkerk? Ik ben Kevin Froger en woon in 's-Gravendeel, net ten zuiden van de Oude Maas. Via de A15 en A16 ben ik zo op IJsselmonde, dus voor mij is Ridderkerk een kort ritje en ben ik ruim op tijd om op te bouwen.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Ridderkerk en op IJsselmonde, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Ridderkerk ligt op IJsselmonde, tegen Rotterdam-zuid aan, met aan de ene kant flink wat bedrijventerrein langs de snelwegen en aan de andere kant rustige woonwijken zoals Drievliet, Bolnes en Slikkerveer. Die mix zie ik terug in de feesten: de ene week een bedrijfsfeest in een loods of bedrijfshal langs de A15, de week erna een verjaardag of jubileum gewoon in een wijkzaal of thuis in de tuin.",
      "Mijn geluid en licht neem ik allemaal zelf mee, en ik draai niet alleen maar pak ook de microfoon. Aankondigen van de speeches en de eerste dans, het tempo erin houden en de muziek bijsturen op wat de vloer doet: dat zit allemaal bij mij. In een grote ruimte zoals een bedrijfshal stem ik mijn opstelling af op de akoestiek, zodat het ook achterin goed klinkt.",
      "Door de ligging aan de A15 en A16 is Ridderkerk vanuit de Hoeksche Waard goed bereikbaar, en ik ben er vaak voor de gasten al. Feest je in Rijsoord, Slikkerveer of dichter bij het centrum? Bel of app me met je datum en wat voor avond je voor ogen hebt, dan hoor je snel of het lukt en denk ik mee over de invulling."
    ],
    "characteristics": "Ridderkerk centrum, Slikkerveer, Bolnes, Drievliet, Rijsoord, IJsselmonde, bedrijventerrein A15",
    "related": [
      {
        "to": "/dj-boeken-rotterdam",
        "label": "Rotterdam"
      },
      {
        "to": "/dj-boeken-barendrecht",
        "label": "Barendrecht"
      },
      {
        "to": "/dj-boeken-hoeksche-waard",
        "label": "Hoeksche Waard"
      }
    ]
  },

  "zwijndrecht": {
    "slug": "zwijndrecht",
    "name": "Zwijndrecht",
    "province": "Zuid-Holland",
    "region": "Drechtsteden",
    "title": "DJ Zwijndrecht huren | Kevin Froger",
    "description": "DJ in Zwijndrecht nodig? Ik draai al 15+ jaar, kom met eigen licht en geluid en ben DJ en MC in een persoon. 5,0 op Google. Check je datum.",
    "heroIntro": "Zoek je een DJ in Zwijndrecht? Ik ben Kevin Froger en woon in 's-Gravendeel, vlak over de Oude Maas. Via de N3 en de A16 ben ik zo bij jullie, dus ik ben ruim op tijd om rustig op te bouwen en alles te testen.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Zwijndrecht en de Drechtsteden, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Zwijndrecht ligt aan de overkant van Dordrecht, tussen de Oude Maas en de Devel. Ik draai er van een verjaardag in een wijk als Walburg, Kort Ambacht of Nederhoven tot een bedrijfsfeest op een van de terreinen langs de A16 en de spoorlijn. Ook Heerjansdam hoort bij Zwijndrecht, en daar zit het feest vaker op een landelijke locatie. Ik stem mijn opstelling en mijn volume af op de ruimte, of die nu hoog en galmend is of juist klein.",
      "Mijn licht en geluid neem ik allemaal zelf mee, dus op de zaal of in de tent hoef je daar niets voor te regelen. Ik sta niet alleen achter de draaitafel maar pak ook de microfoon: het eerste dansje aankondigen, de speeches inleiden en het tempo erin houden, dat zit er bij mij bij. Ik draai allround, van Nederlandstalig en classics tot recente hits, en ik stuur bij op wat de vloer doet.",
      "Het Develpark en de groene randen van Zwijndrecht zijn fijne plekken voor een feest buiten, en in het centrum en de buitenwijken ken ik de meeste zalen. Vanuit 's-Gravendeel ben ik in een kwartiertje bij jullie. Bruiloft, bedrijfsfeest of verjaardag in Zwijndrecht of Heerjansdam? App of bel me met je datum, dan hoor je snel of het lukt en denk ik mee over de invulling."
    ],
    "characteristics": "Zwijndrecht centrum, Walburg, Kort Ambacht, Nederhoven, Heer Oudelands Ambacht, Heerjansdam, Develpark, langs de Oude Maas",
    "related": [
      {
        "to": "/dj-boeken-dordrecht",
        "label": "Dordrecht"
      },
      {
        "to": "/dj-boeken-papendrecht",
        "label": "Papendrecht"
      },
      {
        "to": "/dj-boeken-ridderkerk",
        "label": "Ridderkerk"
      }
    ]
  },

  "papendrecht": {
    "slug": "papendrecht",
    "name": "Papendrecht",
    "province": "Zuid-Holland",
    "region": "Drechtsteden",
    "title": "DJ Papendrecht huren | Kevin Froger",
    "description": "DJ Papendrecht gezocht? Ik draai al 15+ jaar, kom met eigen licht en geluid en ben DJ en MC in een persoon. 5,0 op Google. Vraag je datum op.",
    "heroIntro": "Op zoek naar een DJ in Papendrecht? Ik ben Kevin Froger, allround DJ en MC uit 's-Gravendeel. Papendrecht ligt aan de overkant van Dordrecht, aan de Beneden-Merwede, en daar kom ik graag voor een bruiloft, bedrijfsfeest of verjaardag.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Papendrecht en de Drechtsteden, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Papendrecht ligt tegen Sliedrecht aan, langs de Beneden-Merwede, met woonwijken als Wilgendonk, Kraaihoek, Westpolder, Oostpolder en Molenvliet. Ik draai er net zo makkelijk een verjaardag in een wijkzaal als een bruiloft op een locatie aan het water. In een hoge of ruime zaal stem ik mijn geluid af op de akoestiek, zodat het ook achterin lekker blijft klinken.",
      "Papendrecht is ook een werkdorp met grote werkgevers, en dat zie ik terug in de bedrijfsfeesten en jubilea die ik er draai. Als DJ en MC in een persoon doe ik de aankondigingen, de prijsuitreikingen en het inleiden van de avond er zelf bij, dus je hoeft geen losse presentator te regelen. Licht en geluid breng ik mee, en ik draai allround zodat iedereen wat van zijn gading hoort.",
      "Vanuit 's-Gravendeel rijd ik via Dordrecht en de N3 zo Papendrecht in, en ik ben er ruim op tijd om op te bouwen. Feest je in Papendrecht zelf of net over de grens richting Sliedrecht of Alblasserdam? Stuur me een appje met je datum en wat je voor ogen hebt, dan hoor je snel of het past en kijken we samen naar de muziek."
    ],
    "characteristics": "Papendrecht centrum, Wilgendonk, Kraaihoek, Westpolder, Oostpolder, Molenvliet, langs de Beneden-Merwede",
    "related": [
      {
        "to": "/dj-boeken-sliedrecht",
        "label": "Sliedrecht"
      },
      {
        "to": "/dj-boeken-dordrecht",
        "label": "Dordrecht"
      },
      {
        "to": "/dj-boeken-zwijndrecht",
        "label": "Zwijndrecht"
      }
    ]
  },

  "sliedrecht": {
    "slug": "sliedrecht",
    "name": "Sliedrecht",
    "province": "Zuid-Holland",
    "region": "Drechtsteden",
    "title": "DJ Sliedrecht huren | Kevin Froger",
    "description": "DJ in Sliedrecht nodig? Ik draai al 15+ jaar, kom met eigen licht en geluid en ben DJ en MC in een persoon. 5,0 op Google. Bekijk mijn beschikbaarheid.",
    "heroIntro": "Zoek je een DJ in Sliedrecht? Ik ben Kevin Froger en kom uit 's-Gravendeel, hier vlakbij. Sliedrecht ligt langs de Beneden-Merwede, tegen Papendrecht aan en op de rand van de Alblasserwaard, en daar draai ik graag jullie feest aan elkaar.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Sliedrecht en de Drechtsteden, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Sliedrecht is het langgerekte dorp aan het water, met de Kerkbuurt als oude kern en wijken als Baanhoek en de Staatsliedenbuurt. Het is van oudsher een baggerdorp, en dat nuchtere zit ook in de feesten: lekker draaien, niet moeilijk doen, vooral de vloer vol houden. Of het nu een verjaardag in een buurthuis is of een bruiloft op een locatie aan de Merwede, ik pas mijn muziek aan op wie er staat.",
      "Mijn licht en geluid neem ik zelf mee, en ik draai niet alleen maar pak ook de microfoon. Het eerste dansje aankondigen, een speech inleiden en het tempo bewaken hoort er bij mij gewoon bij, dus een aparte presentator heb je niet nodig. Ik draai allround, van Nederlandstalig en meezingers tot top 40 en dance, en ik stuur de hele avond bij op wat het publiek doet.",
      "Vanuit 's-Gravendeel ben ik via Dordrecht en de A15 snel in Sliedrecht en sta ik op tijd op te bouwen. Feest je in Sliedrecht zelf, of richting Papendrecht of Hardinxveld-Giessendam? Laat me weten welke datum je in gedachten hebt en wat voor avond je wilt, dan hoor je snel of het lukt en denk ik mee over de invulling."
    ],
    "characteristics": "Sliedrecht centrum, Kerkbuurt, Baanhoek, Staatsliedenbuurt, langs de Beneden-Merwede, rand Alblasserwaard",
    "related": [
      {
        "to": "/dj-boeken-papendrecht",
        "label": "Papendrecht"
      },
      {
        "to": "/dj-boeken-dordrecht",
        "label": "Dordrecht"
      },
      {
        "to": "/dj-boeken-gorinchem",
        "label": "Gorinchem"
      }
    ]
  },

  "cillaarshoek": {
    "slug": "cillaarshoek",
    "name": "Cillaarshoek",
    "province": "Zuid-Holland",
    "region": "Hoeksche Waard",
    "title": "DJ Cillaarshoek huren | Kevin Froger",
    "description": "Een DJ in Cillaarshoek nodig? Ik draai al 15+ jaar, ben DJ en MC in een, kom met eigen licht en geluid en sta 5,0 op Google. All-in geregeld.",
    "heroIntro": "Cillaarshoek is een lintje langs de Keizersdijk tussen Strijen en Maasdam, en ik woon vlakbij in 's-Gravendeel. Een feest hier is bijna altijd buitenaf, in een schuur of een tent in het weiland. Dat is precies waar ik goed in ben, met eigen licht en geluid en de microfoon erbij.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, verjaardagen en bedrijfsfeesten in Cillaarshoek en omgeving, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Cillaarshoek is geen dorp met een vaste feestzaal, maar een buurtschap van boerderijen en woningen langs de Keizersdijk. Juist daarom draai ik hier vaak op locatie: een omgebouwde schuur, een loods of een feesttent achter het huis. Ik kijk vooraf naar de ruimte en de stroom, zodat het geluid klopt en er 's avonds niets uitvalt.",
      "Omdat ik DJ en MC in een persoon ben, hoef je geen aparte presentator te regelen. Ik kondig de binnenkomst aan, tel af naar de eerste dans en lees de zaal door de avond heen. Mijn complete licht- en geluidsset breng ik zelf mee en bouw ik zelf op, ook als de plek midden in de polder ligt.",
      "Vanuit 's-Gravendeel ben ik via de N217 en de Provincialeweg zo in Cillaarshoek, Maasdam of Strijen. Dat scheelt reistijd en geeft mij rust om alles netjes neer te zetten. Bel of mail gerust om te checken of jullie datum nog vrij is."
    ],
    "characteristics": "Keizersdijk, lintbebouwing richting Maasdam en Strijen, buitengebied, boerderij- en schuurlocaties",
    "related": [
      { "to": "/dj-boeken-strijen", "label": "Strijen" },
      { "to": "/dj-boeken-maasdam", "label": "Maasdam" },
      { "to": "/dj-boeken-hoeksche-waard", "label": "Hoeksche Waard" }
    ]
  },

  "goudswaard": {
    "slug": "goudswaard",
    "name": "Goudswaard",
    "province": "Zuid-Holland",
    "region": "Hoeksche Waard",
    "title": "DJ Goudswaard huren | Kevin Froger",
    "description": "DJ in Goudswaard zoeken? Ik draai 15+ jaar, ben DJ en MC in een, kom met eigen licht en geluid en heb 5,0 op Google. All-in en compleet geregeld.",
    "heroIntro": "Goudswaard ligt op de westpunt van de Hoeksche Waard, tegen het Haringvliet en het Spui aan. Ik woon in 's-Gravendeel, dus de westkant ken ik goed. Voor je feest breng ik mijn eigen licht en geluid mee en praat ik de avond zelf aan elkaar.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten en verjaardagen in Goudswaard en de Korendijk, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Goudswaard is een rustig dorp met molen Windlust en de Korendijkse Slikken vlakbij, helemaal aan het water. Veel feesten hier zijn op een buitenlocatie of in een dorpszaaltje, en daar pas ik mijn opstelling op aan. Een grote installatie in een kleine zaal werkt niet, dus ik stem licht en geluid af op de ruimte.",
      "Ik werk als DJ en MC tegelijk. Dat betekent dat ik niet alleen draai, maar ook de momenten aankondig: het binnenkomen, de toost, de eerste dans. Mijn hele set neem ik zelf mee, inclusief licht, en ik bouw alles zelf op zodat jullie je nergens druk om hoeven maken.",
      "Vanuit 's-Gravendeel rijd ik via de N487 dwars door de Hoeksche Waard naar Goudswaard, Piershil en Nieuw-Beijerland. De westkant is voor mij gewoon thuiswerk. Wil je weten of jullie datum nog kan? Eventjes bellen of mailen en we kijken het na."
    ],
    "characteristics": "Goudswaard centrum, molen Windlust, Korendijkse Slikken, Spui, Haringvliet, westelijke Hoeksche Waard",
    "related": [
      { "to": "/dj-boeken-piershil", "label": "Piershil" },
      { "to": "/dj-boeken-nieuw-beijerland", "label": "Nieuw-Beijerland" },
      { "to": "/dj-boeken-hoeksche-waard", "label": "Hoeksche Waard" }
    ]
  },

  "nieuw-beijerland": {
    "slug": "nieuw-beijerland",
    "name": "Nieuw-Beijerland",
    "province": "Zuid-Holland",
    "region": "Hoeksche Waard",
    "title": "DJ Nieuw-Beijerland huren | Kevin Froger",
    "description": "Op zoek naar een DJ in Nieuw-Beijerland? 15+ jaar ervaring, DJ en MC in een, eigen licht en geluid en 5,0 op Google. Alles all-in geregeld.",
    "heroIntro": "Nieuw-Beijerland ligt aan het Spui in het westen van de Hoeksche Waard, vlak onder Spijkenisse. Ik woon in 's-Gravendeel en kom hier graag draaien. DJ en MC in een persoon, eigen licht en geluid mee, en alles van tevoren goed afgestemd.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Nieuw-Beijerland en omgeving, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Nieuw-Beijerland is een dorp aan het water, met het Spui aan de westkant en de windmolens van Windpark Spui in de polder richting Piershil. Of je nu in een dorpszaal viert, in een loods of in een tent bij huis: ik kijk eerst naar de plek en stem mijn licht- en geluidsopstelling daarop af.",
      "Achter de tafel pak ik ook de microfoon. Als DJ en MC kondig ik de avond zelf aan, van de binnenkomst tot het slotnummer, zodat het feest loopt zonder dat iemand uit jullie gezelschap dat hoeft te doen. De complete set breng ik mee en zet ik zelf neer.",
      "Vanuit 's-Gravendeel ben ik via de N217 en N487 snel in Nieuw-Beijerland, Zuid-Beijerland of Oud-Beijerland. Korte lijntjes, dus genoeg tijd om in alle rust op te bouwen. Even bellen om je datum te checken kan altijd."
    ],
    "characteristics": "Nieuw-Beijerland centrum, Spui, Windpark Spui, polder richting Piershil, westelijke Hoeksche Waard",
    "related": [
      { "to": "/dj-boeken-zuid-beijerland", "label": "Zuid-Beijerland" },
      { "to": "/dj-boeken-oud-beijerland", "label": "Oud-Beijerland" },
      { "to": "/dj-boeken-piershil", "label": "Piershil" }
    ]
  },

  "piershil": {
    "slug": "piershil",
    "name": "Piershil",
    "province": "Zuid-Holland",
    "region": "Hoeksche Waard",
    "title": "DJ Piershil huren | Kevin Froger",
    "description": "DJ in Piershil nodig? Ik draai al 15+ jaar, ben DJ en MC in een, kom met eigen licht en geluid en sta 5,0 op Google. All-in en zelf opgebouwd.",
    "heroIntro": "Piershil ligt in het westen van de Hoeksche Waard, tussen Goudswaard en Nieuw-Beijerland aan het Spui. Ik woon in 's-Gravendeel en draai graag in deze hoek. Eigen licht en geluid mee, en als DJ en MC praat ik de avond zelf aan elkaar.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, verjaardagen en bedrijfsfeesten in Piershil en de Korendijk, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Piershil is een rustig polderdorp aan het Spui, met de windmolens van Windpark Spui in de lijn richting Nieuw-Beijerland. Feesten zijn hier vaak in een dorpszaal, een schuur of een tent in de tuin. Ik bekijk de ruimte vooraf en stem licht en geluid daarop af, zodat het in een kleine zaal net zo strak klinkt als in een grote loods.",
      "Ik combineer DJ en MC in een persoon. Dat scheelt jou een extra boeking en houdt de avond strak: ik kondig de momenten aan, lees de zaal en schakel snel als de stemming verandert. De volledige set neem ik mee en bouw ik zelf op, ook op een buitenlocatie.",
      "Vanuit 's-Gravendeel rijd ik via de N487 zo de westkant van de Hoeksche Waard in, naar Piershil, Goudswaard en Nieuw-Beijerland. Korte rit, dus alle tijd om rustig op te bouwen en te testen. Bel of mail gerust om je datum na te kijken."
    ],
    "characteristics": "Piershil centrum, Spui, Windpark Spui, Korendijk, westelijke Hoeksche Waard",
    "related": [
      { "to": "/dj-boeken-goudswaard", "label": "Goudswaard" },
      { "to": "/dj-boeken-nieuw-beijerland", "label": "Nieuw-Beijerland" },
      { "to": "/dj-boeken-hoeksche-waard", "label": "Hoeksche Waard" }
    ]
  },

  "strijensas": {
    "slug": "strijensas",
    "name": "Strijensas",
    "province": "Zuid-Holland",
    "region": "Hoeksche Waard",
    "title": "DJ Strijensas huren | Kevin Froger",
    "description": "Een DJ in Strijensas zoeken? 15+ jaar ervaring, DJ en MC in een, eigen licht en geluid en 5,0 op Google. All-in en helemaal verzorgd.",
    "heroIntro": "Strijensas is het havenbuurtschap van Strijen, aan het Hollands Diep met de jachthaven en de vuurtoren bij de ingang. Ik woon vlakbij in 's-Gravendeel, dus ik sta er zo. Eigen licht en geluid neem ik mee en ik praat de avond zelf aan elkaar.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, verjaardagen en bedrijfsfeesten in Strijensas en Strijen, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Strijensas ligt aan het water, met de jachthaven aan het Hollands Diep en de natuurgebieden Sasseplaat en de Oeverlanden eromheen. Een feest hier is vaak aan of bij het water, in een horecazaak aan de haven of in een tent met uitzicht. Dat soort plekken vraagt om een opstelling die past, en daar kijk ik vooraf naar.",
      "Als DJ en MC regel ik niet alleen de muziek, maar ook de aankondigingen en de opbouw van de avond. Binnenkomst, speeches, eerste dans: ik pak de microfoon erbij zodat het loopt. Mijn complete licht- en geluidsset breng ik zelf mee en zet ik zelf neer, ook buiten aan de haven.",
      "Vanuit 's-Gravendeel rijd ik via de N217 en de dijk zo Strijen en Strijensas in. Het buitengebied richting Cillaarshoek en Mookhoek ligt daar voor mij vlakbij. Wil je weten of jullie datum nog vrij is, dan kijken we dat samen rustig na."
    ],
    "characteristics": "Jachthaven Strijensas, Hollands Diep, vuurtoren, Sasseplaat, Oeverlanden, kern Strijen",
    "related": [
      { "to": "/dj-boeken-strijen", "label": "Strijen" },
      { "to": "/dj-boeken-numansdorp", "label": "Numansdorp" },
      { "to": "/dj-boeken-cillaarshoek", "label": "Cillaarshoek" }
    ]
  },

  "westmaas": {
    "slug": "westmaas",
    "name": "Westmaas",
    "province": "Zuid-Holland",
    "region": "Hoeksche Waard",
    "title": "DJ Westmaas huren | Kevin Froger",
    "description": "DJ in Westmaas nodig? Ik draai 15+ jaar, ben DJ en MC in een, kom met eigen licht en geluid en sta 5,0 op Google. Alles all-in geregeld.",
    "heroIntro": "Westmaas ligt centraal in de Hoeksche Waard, aan de westkant van de Binnenmaas. Ik woon in 's-Gravendeel en sta er zo. Voor je feest breng ik mijn eigen licht en geluid mee, en als DJ en MC praat ik de hele avond zelf aan elkaar.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten en verjaardagen in Westmaas en omgeving, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Westmaas ligt tegen de Binnenbedijkte Maas, het water midden in de Hoeksche Waard, met aan de noordkant de strandjes richting Mijnsheerenland. De centrale ligging betekent dat ik vanuit hier bijna elk dorp snel bereik. Of je feest in een zaal, een schuur of bij het water is, ik stem mijn opstelling af op de plek.",
      "Ik werk als DJ en MC in een persoon. Dat houdt de avond strak: ik kondig de momenten aan, lees de zaal en schakel als de sfeer vraagt om iets anders. De complete set met licht en geluid neem ik zelf mee en bouw ik zelf op, zodat jullie alleen hoeven te genieten.",
      "Vanuit 's-Gravendeel ben ik via de N217 en de N489 zo in Westmaas, Mijnsheerenland of Klaaswaal. Korte ritjes binnen de Hoeksche Waard, dus genoeg tijd om alles rustig neer te zetten. Even bellen om je datum te checken kan altijd."
    ],
    "characteristics": "Westmaas centrum, Binnenbedijkte Maas, strandjes richting Mijnsheerenland, centrale Hoeksche Waard",
    "related": [
      { "to": "/dj-boeken-mijnsheerenland", "label": "Mijnsheerenland" },
      { "to": "/dj-boeken-klaaswaal", "label": "Klaaswaal" },
      { "to": "/dj-boeken-hoeksche-waard", "label": "Hoeksche Waard" }
    ]
  },

  "tiengemeten": {
    "slug": "tiengemeten",
    "name": "Tiengemeten",
    "province": "Zuid-Holland",
    "region": "Hoeksche Waard",
    "title": "DJ Tiengemeten huren | Kevin Froger",
    "description": "Trouwen op Tiengemeten? Ik ben DJ en MC in een, draai 15+ jaar, kom met eigen licht en geluid en sta 5,0 op Google. All-in op deze natuurlocatie.",
    "heroIntro": "Tiengemeten is een klein natuureiland in het Haringvliet, te bereiken met de veerpont vanaf Nieuwendijk bij Zuid-Beijerland. Een feest hier is bijzonder en logistiek net even anders. Ik woon in 's-Gravendeel, ken de westkant van de Hoeksche Waard goed en denk graag mee over de planning.",
    "serviceDescription": "Allround DJ en MC voor bruiloften en bijzondere feesten op natuureiland Tiengemeten, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Tiengemeten is een eiland dat tot 2000 landbouwgrond was en nu natuurgebied is, met de Herberg Tiengemeten als trouw- en feestlocatie. Het ligt midden in het Haringvliet, ver van de bewoonde wereld. Dat geeft een unieke sfeer, maar het vraagt ook overleg over de boot, de stroom op locatie en de tijden van de veerpont.",
      "Voor een feest op een natuurlocatie als deze is het juist fijn dat ik alles zelf meebreng en zelf opbouw: licht, geluid en de hele installatie. Als DJ en MC kondig ik ook de momenten aan, van de ceremonie tot de eerste dans. Ik stem de techniek af op wat er op het eiland mogelijk is.",
      "Vanuit 's-Gravendeel rijd ik via de N487 naar Nieuwendijk bij Zuid-Beijerland, waar de pont naar Tiengemeten vertrekt. Omdat de logistiek hier net anders is, plan ik het transport en de opbouw graag ruim van tevoren met je door. Bel of mail gerust om de mogelijkheden te bespreken."
    ],
    "characteristics": "Natuureiland in het Haringvliet, Herberg Tiengemeten, veerpont vanaf Nieuwendijk, Zuid-Beijerland",
    "related": [
      { "to": "/dj-boeken-goudswaard", "label": "Goudswaard" },
      { "to": "/dj-boeken-zuid-beijerland", "label": "Zuid-Beijerland" },
      { "to": "/dj-boeken-hoeksche-waard", "label": "Hoeksche Waard" }
    ]
  },

  "ophemert": {
    "slug": "ophemert",
    "name": "Ophemert",
    "province": "Gelderland",
    "region": "Rivierenland",
    "title": "DJ Ophemert huren | Kevin Froger",
    "description": "DJ in Ophemert nodig? Ik draai 15+ jaar, ben DJ en MC in een, kom met eigen licht en geluid en sta 5,0 op Google. All-in voor je feest aan de Waal.",
    "heroIntro": "Ophemert ligt aan de Waal in West Betuwe, tussen de buurtschap Zennewijnen en het dorp Varik. Mooie streek voor een feest, met Kasteel Ophemert als blikvanger. Ik kom als DJ en MC in een persoon, met mijn eigen licht en geluid mee.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten en verjaardagen in Ophemert en de Betuwe, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Ophemert is een echt Betuws Waaldorp, met Kasteel Ophemert en de dijk langs de rivier. Feesten zijn hier vaak op een landelijke locatie, in een schuur, een tuin of een zaal in het dorp. Ik kijk vooraf naar de ruimte en de stroom, zodat het geluid klopt en het licht past bij de plek.",
      "Ik draai en presenteer tegelijk. Als DJ en MC kondig ik de avond zelf aan, van binnenkomst tot eerste dans, en lees ik de zaal door de avond heen. Mijn complete licht- en geluidsset breng ik mee en bouw ik zelf op, ook op een buitenlocatie langs de dijk.",
      "Ophemert ligt tussen Varik en Tiel, vlak bij de A15. Daardoor ben ik er goed te krijgen voor een feest in de Betuwe, ook al is mijn thuisbasis 's-Gravendeel. Wil je weten of jullie datum nog vrij is? Even bellen of mailen en we kijken het na."
    ],
    "characteristics": "Ophemert centrum, Kasteel Ophemert, Waaldijk, Zennewijnen, ligging tussen Varik en Tiel",
    "related": [
      { "to": "/dj-boeken-varik", "label": "Varik" },
      { "to": "/dj-boeken-tiel", "label": "Tiel" },
      { "to": "/dj-boeken-rivierenland", "label": "Rivierenland" }
    ]
  },

  "tuil": {
    "slug": "tuil",
    "name": "Tuil",
    "province": "Gelderland",
    "region": "Rivierenland",
    "title": "DJ Tuil huren | Kevin Froger",
    "description": "Een DJ in Tuil zoeken? Ik draai 15+ jaar, ben DJ en MC in een, kom met eigen licht en geluid en sta 5,0 op Google. All-in voor je feest in de Betuwe.",
    "heroIntro": "Tuil ligt rustig aan de Waal in West Betuwe, met uitzicht op Zaltbommel aan de overkant en Waardenburg pal naast de deur. Een mooie hoek voor een feest. Ik kom als DJ en MC in een persoon, met mijn eigen licht en geluid mee.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, verjaardagen en bedrijfsfeesten in Tuil en de Betuwe, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Tuil is een klein Waaldorp dat direct aan Waardenburg grenst en uitkijkt op Zaltbommel aan de andere kant van de rivier. Feesten zijn hier vaak landelijk, in een schuur, een tent of een dorpszaal. Ik stem mijn opstelling af op de ruimte, zodat het in een kleine zaal net zo strak klinkt als in een grote loods.",
      "Als DJ en MC regel ik de muziek en de aankondigingen in een. Dat houdt de avond strak: binnenkomst, toost, eerste dans en het slotnummer, ik pak de microfoon er zelf bij. De complete set met licht en geluid breng ik mee en zet ik zelf neer.",
      "Tuil ligt bij Haaften en Waardenburg, vlak bij de A2 en A15. Daardoor ben ik er goed te krijgen voor een feest in de Betuwe, ook vanuit mijn thuisbasis 's-Gravendeel. Bel of mail gerust om te checken of jullie datum nog kan."
    ],
    "characteristics": "Tuil centrum, Waaldijk, uitzicht op Zaltbommel, grens met Waardenburg, nabij Haaften",
    "related": [
      { "to": "/dj-boeken-zaltbommel", "label": "Zaltbommel" },
      { "to": "/dj-boeken-geldermalsen", "label": "Geldermalsen" },
      { "to": "/dj-boeken-rivierenland", "label": "Rivierenland" }
    ]
  },

  "varik": {
    "slug": "varik",
    "name": "Varik",
    "province": "Gelderland",
    "region": "Rivierenland",
    "title": "DJ Varik huren | Kevin Froger",
    "description": "DJ in Varik nodig? Ik draai 15+ jaar, ben DJ en MC in een, kom met eigen licht en geluid en sta 5,0 op Google. All-in voor je feest aan de Waal.",
    "heroIntro": "Varik ligt aan de Waal in West Betuwe, naast Ophemert en het buurdorp Heesselt. Bekend van de Dikke Toren, de oude kerktoren in het dorp. Mooie streek voor een feest. Ik kom als DJ en MC in een persoon, met mijn eigen licht en geluid mee.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten en verjaardagen in Varik en de Betuwe, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Varik is een Waaldorp met de markante Dikke Toren, een vijftiende-eeuwse kerktoren midden in het dorp. Samen met buurdorp Heesselt ligt het pal aan de rivier en de dijk. Feesten zijn hier vaak landelijk, in een schuur, een tuin of een zaal. Ik bekijk de plek vooraf en stem licht en geluid daarop af.",
      "Ik combineer DJ en MC in een persoon, dus een aparte presentator hoef je niet te boeken. Ik kondig de momenten aan, lees de zaal en schakel als de stemming verandert. De volledige set met licht en geluid breng ik zelf mee en bouw ik zelf op, ook langs de dijk.",
      "Varik ligt naast Ophemert, vlak bij Tiel en de A15. Daardoor ben ik er goed te krijgen voor een feest in de Betuwe, ook al zit mijn thuisbasis in 's-Gravendeel. Wil je weten of jullie datum nog vrij is, dan kijken we dat samen rustig na."
    ],
    "characteristics": "Varik centrum, Dikke Toren, Heesselt, Waaldijk, ligging naast Ophemert richting Tiel",
    "related": [
      { "to": "/dj-boeken-ophemert", "label": "Ophemert" },
      { "to": "/dj-boeken-tiel", "label": "Tiel" },
      { "to": "/dj-boeken-rivierenland", "label": "Rivierenland" }
    ]
  },

  "rivierenland": {
    "slug": "rivierenland",
    "name": "Rivierenland",
    "province": "Gelderland",
    "region": "Rivierenland",
    "title": "DJ Rivierenland huren | Kevin Froger",
    "description": "DJ in Rivierenland nodig? Ik draai 15+ jaar in de Betuwe en Bommelerwaard, ben DJ en MC in een, kom met eigen licht en geluid en sta 5,0 op Google.",
    "heroIntro": "Rivierenland is de streek tussen de grote rivieren: de Betuwe, de Bommelerwaard en het gebied rond Tiel en Geldermalsen. Veel water, dijken en landelijke feestlocaties. Ik kom als DJ en MC in een persoon, met mijn eigen licht en geluid mee.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in heel Rivierenland, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Rivierenland loopt van de Betuwe en de Tielerwaard tot de Bommelerwaard, ingeklemd tussen de Waal, de Maas en de Linge. Steden als Tiel, Zaltbommel, Geldermalsen, Culemborg en Buren liggen hier, met daartussen tientallen dorpen aan de dijk. Veel feesten zijn op een landgoed, in een schuur of een tent in de uiterwaarden, en daar pas ik mijn opstelling op aan.",
      "Of het nu een bruiloft op een buitenlocatie is of een bedrijfsfeest in een zaal: ik draai en presenteer tegelijk. Als DJ en MC kondig ik de avond zelf aan en lees ik de zaal, en de complete licht- en geluidsset breng ik mee en bouw ik zelf op. Een grote installatie buiten of een compacte set binnen, ik stem het af op de plek.",
      "Vanuit 's-Gravendeel rijd ik via de A15 en A2 zo de streek in, naar de Betuwe, de Bommelerwaard en de hoek rond Tiel en Geldermalsen. Wil je voor jouw dorp of stad weten of het past, kijk dan ook op de pagina van die plaats of bel even, dan kijken we de datum na."
    ],
    "characteristics": "Betuwe, Tielerwaard, Bommelerwaard, Tiel, Zaltbommel, Geldermalsen, Culemborg, Buren, Waal, Maas, Linge",
    "related": [
      { "to": "/dj-boeken-tiel", "label": "Tiel" },
      { "to": "/dj-boeken-zaltbommel", "label": "Zaltbommel" },
      { "to": "/dj-boeken-geldermalsen", "label": "Geldermalsen" }
    ]
  },

  "gorcum": {
    "slug": "gorcum",
    "name": "Gorcum (Gorinchem)",
    "province": "Zuid-Holland",
    "region": "Alblasserwaard/Rivierenland",
    "title": "DJ Gorcum huren | Kevin Froger",
    "description": "DJ in Gorcum (Gorinchem) nodig? Ik draai 15+ jaar, ben DJ en MC in een, kom met eigen licht en geluid en sta 5,0 op Google. All-in geregeld.",
    "heroIntro": "Gorcum, oftewel Gorinchem, is de vestingstad waar de Linge en de Merwede samenkomen. Een mooie plek voor een feest, met de vesting en de Lingehaven. Ik kom als DJ en MC in een persoon, met mijn eigen licht en geluid mee.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Gorcum (Gorinchem) en omgeving, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Gorcum staat bekend als de grootste vestingstad van Nederland, met de bastions, de Dalempoort en de Lingehaven middenin de stad. Feesten zijn hier net zo divers als de stad: een bruiloft binnen de vesting, een bedrijfsfeest in een zaal of een feest aan het water. Ik kijk vooraf naar de locatie en stem licht en geluid af op de ruimte en de uitstraling.",
      "Ik combineer DJ en MC in een persoon. Dat scheelt een extra boeking en houdt de avond strak: ik kondig de momenten aan, lees de zaal en schakel snel als dat nodig is. De complete set met licht en geluid breng ik zelf mee en bouw ik zelf op, in een historische zaal net zo goed als in een moderne ruimte.",
      "Vanuit 's-Gravendeel ben ik via de A15 snel in Gorinchem, met Arkel en de Alblasserwaard om de hoek en de Betuwe aan de overkant van het water. Goede uitvalsbasis dus. Bel of mail gerust om te checken of jullie datum nog vrij is."
    ],
    "characteristics": "Vesting Gorinchem, Dalempoort, Lingehaven, samenkomst Linge en Merwede, Arkel, grens Alblasserwaard en Rivierenland",
    "related": [
      { "to": "/dj-boeken-gorinchem", "label": "Gorinchem" },
      { "to": "/dj-boeken-zaltbommel", "label": "Zaltbommel" },
      { "to": "/dj-boeken-rivierenland", "label": "Rivierenland" }
    ]
  },

  "albrandswaard": {
    "slug": "albrandswaard",
    "name": "Albrandswaard",
    "province": "Zuid-Holland",
    "region": "IJsselmonde",
    "title": "DJ Albrandswaard huren | Kevin Froger",
    "description": "DJ in Albrandswaard voor bruiloft, bedrijfsfeest of verjaardag in Rhoon en Poortugaal. DJ en MC in een, eigen licht en geluid, all-in.",
    "heroIntro": "Albrandswaard ligt net onder Rotterdam, tussen de Oude Maas en Barendrecht. Twee dorpen onder een gemeente: Rhoon en Poortugaal, met Portland ertussen. Ik draai er bruiloften en feesten, als DJ en MC in een persoon.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Albrandswaard, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Albrandswaard bestaat uit Rhoon en Poortugaal, met daartussen de nieuwbouwwijk Portland. Het gebied ligt tegen de Oude Maas aan, met aan de overkant Barendrecht en Ridderkerk. Van een trouwfeest op het Kasteel van Rhoon tot een verjaardag in een dorpszaal in Poortugaal, ik ken de plek en pas mijn set aan op het publiek.",
      "Ik kom met mijn eigen licht- en geluidsinstallatie en bouw die op maat van de ruimte op. Naast draaien pak ik ook de microfoon: als MC kondig ik het eerste dansje aan, hou ik het programma strak en zorg ik dat niemand op een stoel blijft zitten. DJ en MC in een, dus geen losse presentator nodig.",
      "Via de A15 en de Heinenoordtunnel ben ik zo in Rhoon of Poortugaal, ook vanuit de Hoeksche Waard. Plannen voor een feest in Albrandswaard? Stuur me je datum, dan check ik snel of ik vrij ben."
    ],
    "characteristics": "Rhoon, Poortugaal, Portland, Kasteel van Rhoon, kerk van Poortugaal, Valckesteijnse Bos, Oude Maas, Dorpsdijk.",
    "related": [
      { "to": "/dj-boeken-rhoon", "label": "Rhoon" },
      { "to": "/dj-boeken-poortugaal", "label": "Poortugaal" },
      { "to": "/dj-boeken-barendrecht", "label": "Barendrecht" }
    ]
  },

  "poortugaal": {
    "slug": "poortugaal",
    "name": "Poortugaal",
    "province": "Zuid-Holland",
    "region": "IJsselmonde",
    "title": "DJ Poortugaal huren | Kevin Froger",
    "description": "DJ in Poortugaal voor bruiloft, bedrijfsfeest of verjaardag. DJ en MC in een persoon, eigen licht en geluid, all-in, 5,0 op Google.",
    "heroIntro": "Poortugaal is een van de twee dorpen van Albrandswaard, met die mooie oude kern rond de kerk. Rustig wonen, dicht bij Rotterdam en de Oude Maas. Ik draai er feesten als DJ en MC in een persoon.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Poortugaal, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Poortugaal heeft een herkenbare oude dorpskern rond de kerk, met daarnaast het Valckesteijnse Bos en open polder richting de Oude Maas. Of het nu een verjaardag in een dorpszaal is of een trouwfeest in de buurt, ik stem mijn muziek af op de mensen voor me. Van Nederlandstalig tot classics en up-to-date hits.",
      "Mijn eigen licht en geluid neem ik mee en bouw ik passend bij de zaal op. Als MC hou ik de avond strak: speeches netjes aangekondigd, het feest op tijd losgetrokken en de vaart erin tot het eind. Een persoon voor alles, dus geen gedoe met losse boekingen.",
      "Poortugaal ligt vlak bij de A15 en de RandstadRail-halte, dus vanuit Rotterdam en de Hoeksche Waard ben ik er snel. Datum prikken? Laat het weten, dan kijk ik direct of ik kan."
    ],
    "characteristics": "Oude dorpskern, kerk van Poortugaal, Valckesteijnse Bos, Portland, Oude Maas, Rhoon, metrohalte Poortugaal.",
    "related": [
      { "to": "/dj-boeken-rhoon", "label": "Rhoon" },
      { "to": "/dj-boeken-albrandswaard", "label": "Albrandswaard" },
      { "to": "/dj-boeken-spijkenisse", "label": "Spijkenisse" }
    ]
  },

  "rhoon": {
    "slug": "rhoon",
    "name": "Rhoon",
    "province": "Zuid-Holland",
    "region": "IJsselmonde",
    "title": "DJ Rhoon huren | Kevin Froger",
    "description": "DJ in Rhoon voor bruiloft of feest, ook op het Kasteel van Rhoon. DJ en MC in een, eigen licht en geluid, all-in, 15+ jaar ervaring.",
    "heroIntro": "Rhoon ken ik goed: het dorp met het Kasteel van Rhoon als blikvanger, langs de Oude Maas. Een gewilde plek om te trouwen en te feesten. Ik draai er als DJ en MC in een persoon.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Rhoon, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Rhoon draait deels om het Kasteel van Rhoon aan de Dorpsdijk, een geliefde trouw- en feestlocatie waar je in de kasteelsfeer kunt trouwen en doorfeesten. Daarnaast heeft het dorp een gezellige kern en ligt het pal aan de Oude Maas. Voor zo'n locatie kies ik bewust mijn opbouw en muziek, van ingetogen diner tot een volle dansvloer.",
      "Ik werk met mijn eigen licht- en geluidsinstallatie en stem die af op de ruimte, of dat nu een kasteelzaal of een feesttent is. Als MC neem ik ook de presentatie voor mijn rekening: ik kondig de binnenkomst aan, begeleid de speeches en zorg dat het feest op het juiste moment losbarst. Alles uit een hand.",
      "Via de A15 en de Groene Kruisweg ben ik vlot in Rhoon, ook vanuit Rotterdam-Zuid en de Hoeksche Waard. Trouwen of feesten in Rhoon? Stuur je datum door, dan reageer ik snel."
    ],
    "characteristics": "Kasteel van Rhoon, Dorpsdijk, dorpskern Rhoon, Oude Maas, Portland, jachthaven, metrohalte Rhoon.",
    "related": [
      { "to": "/dj-boeken-poortugaal", "label": "Poortugaal" },
      { "to": "/dj-boeken-albrandswaard", "label": "Albrandswaard" },
      { "to": "/dj-boeken-barendrecht", "label": "Barendrecht" }
    ]
  },

  "vlaardingen": {
    "slug": "vlaardingen",
    "name": "Vlaardingen",
    "province": "Zuid-Holland",
    "region": "Rijnmond",
    "title": "DJ Vlaardingen huren | Kevin Froger",
    "description": "DJ in Vlaardingen voor bruiloft, bedrijfsfeest of verjaardag langs de Nieuwe Maas. DJ en MC in een, eigen licht en geluid, all-in.",
    "heroIntro": "Vlaardingen ligt aan de noordoever van de Nieuwe Maas, tussen Schiedam en Maassluis. Een echte havenstad met een groen achterland in de Broekpolder. Ik draai er feesten als DJ en MC in een persoon.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Vlaardingen, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Vlaardingen is grofweg verdeeld in het noordelijke Holy en het zuidelijke deel rond de oude haven aan de Nieuwe Maas. Daarnaast ligt het groene natuur- en recreatiegebied Broekpolder, waar volop ruimte is voor buitenfeesten. Of het nu een bruiloft in de stad is of een verjaardag in Holy, ik lees de zaal en draai wat de mensen aan het dansen krijgt.",
      "Met mijn eigen licht- en geluidsset bouw ik een show die past bij de ruimte, van een intieme zaal tot een feesttent in het groen. Als MC hou ik het programma strak: binnenkomst, speeches en het eerste dansje netjes aangekondigd, en daarna vol gas op de dansvloer. DJ en MC in een persoon.",
      "Via de A20 en de Beneluxtunnel ben ik snel in Vlaardingen, ook vanuit Rotterdam en de Hoeksche Waard. Plannen voor een feest? Geef je datum door, dan check ik of ik vrij ben."
    ],
    "characteristics": "Oude haven, Nieuwe Maas, Holy, Broekpolder, Vlaardinger Vaart, centrum, Museum Vlaardingen, Westwijk.",
    "related": [
      { "to": "/dj-boeken-schiedam", "label": "Schiedam" },
      { "to": "/dj-boeken-rotterdam", "label": "Rotterdam" },
      { "to": "/dj-boeken-delft", "label": "Delft" }
    ]
  },

  "capelle-aan-den-ijssel": {
    "slug": "capelle-aan-den-ijssel",
    "name": "Capelle aan den IJssel",
    "province": "Zuid-Holland",
    "region": "Rijnmond",
    "title": "DJ Capelle aan den IJssel | Kevin Froger",
    "description": "DJ in Capelle aan den IJssel voor bruiloft, bedrijfsfeest of verjaardag. DJ en MC in een, eigen licht en geluid, all-in, 5,0 op Google.",
    "heroIntro": "Capelle aan den IJssel ligt aan de Hollandsche IJssel, tegen Rotterdam en Krimpen aan den IJssel aan. Veel wijken, van het oude Capelle-West tot het nieuwe Fascinatio. Ik draai er feesten als DJ en MC in een persoon.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Capelle aan den IJssel, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Capelle aan den IJssel heeft veel gezichten: het oude Capelle-West aan de Hollandsche IJssel, de woonwijken Schollevaar, Oostgaarde en Middelwatering, en het moderne, waterrijke Fascinatio bij de A16. Voor een bedrijfsfeest op het Rivium of een bruiloft in een zaal, ik stem muziek en sfeer af op het gezelschap.",
      "Mijn eigen licht en geluid neem ik mee en bouw ik op maat van de ruimte op. Als MC pak ik de microfoon: speeches aankondigen, het programma bewaken en de dansvloer op het juiste moment lostrekken. Een persoon voor alles, dus geen losse presentator erbij.",
      "Via de A16 en de A20 ben ik zo in Capelle, ook vanuit Rotterdam en de Drechtsteden. Feest plannen in Capelle aan den IJssel? Stuur je datum, dan laat ik snel weten of ik kan."
    ],
    "characteristics": "Capelle-West, Schollevaar, Oostgaarde, Middelwatering, Schenkel, Fascinatio, Rivium, Hollandsche IJssel.",
    "related": [
      { "to": "/dj-boeken-rotterdam", "label": "Rotterdam" },
      { "to": "/dj-boeken-ridderkerk", "label": "Ridderkerk" },
      { "to": "/dj-boeken-gouda", "label": "Gouda" }
    ]
  },

  "hardinxveld-giessendam": {
    "slug": "hardinxveld-giessendam",
    "name": "Hardinxveld-Giessendam",
    "province": "Zuid-Holland",
    "region": "Alblasserwaard",
    "title": "DJ Hardinxveld-Giessendam | Kevin Froger",
    "description": "DJ in Hardinxveld-Giessendam voor bruiloft, bedrijfsfeest of verjaardag langs de Merwede. DJ en MC in een, eigen licht en geluid, all-in.",
    "heroIntro": "Hardinxveld-Giessendam ligt aan de Beneden-Merwede, tussen Sliedrecht en Gorinchem. Een echt dijkdorp, opgebouwd uit Giessendam, Neder-Hardinxveld en Boven-Hardinxveld. Ik draai er feesten als DJ en MC in een persoon.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Hardinxveld-Giessendam, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Hardinxveld-Giessendam bestaat uit Giessendam met Neder-Hardinxveld aan de westkant en Boven-Hardinxveld aan de oostkant, gescheiden door het Steenenhoekkanaal. Het dorp strekt zich uit langs de dijk aan de Beneden-Merwede, met de scheepsbouw en het water altijd dichtbij. Voor een bruiloft of verjaardag hier draai ik van Nederlandstalig tot classics en hits, net wat de zaal vraagt.",
      "Ik kom met mijn eigen licht- en geluidsinstallatie en bouw die passend bij de ruimte op. Als MC hou ik de avond in goede banen: ik kondig de speeches aan, begeleid het eerste dansje en zorg dat de dansvloer vol blijft. DJ en MC in een persoon, dus alles uit een hand.",
      "Via de A15 met de afritten Hardinxveld en de stations Boven-Hardinxveld en Hardinxveld-Giessendam ben ik er snel bij, ook vanuit Gorinchem en de Drechtsteden. Datum vrij? Stuur even een bericht, dan check ik mijn agenda."
    ],
    "characteristics": "Giessendam, Neder-Hardinxveld, Boven-Hardinxveld, Beneden-Merwede, Steenenhoekkanaal, de Giessen, scheepswerven, dijklint.",
    "related": [
      { "to": "/dj-boeken-sliedrecht", "label": "Sliedrecht" },
      { "to": "/dj-boeken-gorinchem", "label": "Gorinchem" },
      { "to": "/dj-boeken-papendrecht", "label": "Papendrecht" }
    ]
  },

  "leerdam": {
    "slug": "leerdam",
    "name": "Leerdam",
    "province": "Zuid-Holland",
    "region": "Alblasserwaard",
    "title": "DJ Leerdam huren | Kevin Froger",
    "description": "DJ in Leerdam, de glasstad in de Vijfheerenlanden, voor bruiloft, bedrijfsfeest of verjaardag. DJ en MC in een, eigen licht en geluid, all-in.",
    "heroIntro": "Leerdam staat bekend als glasstad, met het Nationaal Glasmuseum en een oude vestingkern. Het ligt in de Vijfheerenlanden, vlak bij Gorinchem. Ik draai er feesten als DJ en MC in een persoon.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Leerdam, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Leerdam is de glasstad van Nederland, met het Nationaal Glasmuseum en de glasblazerij als bekende plekken, plus een oude vestingkern met restanten van de stadswallen. Sinds 2019 hoort het bij de gemeente Vijfheerenlanden, samen met Vianen en Zederik. Voor een feest in Leerdam stem ik de muziek af op het gezelschap, van rustig diner tot volle dansvloer.",
      "Mijn eigen licht- en geluidsset neem ik mee en bouw ik op maat van de zaal of tent op. Als MC pak ik ook de microfoon: speeches netjes aangekondigd, het programma strak en het feest op tijd losgetrokken. Een persoon voor alles, geen losse presentator nodig.",
      "Via de A15 en de afslag Leerdam ben ik er snel, ook vanuit Gorinchem en de Drechtsteden. Plannen voor een feest in de glasstad? Stuur je datum, dan laat ik snel weten of ik vrij ben."
    ],
    "characteristics": "Nationaal Glasmuseum, glasblazerij, vestingkern, stadswallen, Linge, Vijfheerenlanden, Kedichem, Schoonrewoerd.",
    "related": [
      { "to": "/dj-boeken-gorinchem", "label": "Gorinchem" },
      { "to": "/dj-boeken-hardinxveld-giessendam", "label": "Hardinxveld-Giessendam" },
      { "to": "/dj-boeken-sliedrecht", "label": "Sliedrecht" }
    ]
  },

  "alphen-aan-den-rijn": {
    "slug": "alphen-aan-den-rijn",
    "name": "Alphen aan den Rijn",
    "province": "Zuid-Holland",
    "region": "Het Groene Hart",
    "title": "DJ Alphen aan den Rijn | Kevin Froger",
    "description": "DJ in Alphen aan den Rijn voor bruiloft, bedrijfsfeest of verjaardag in het Groene Hart. DJ en MC in een, eigen licht en geluid, all-in.",
    "heroIntro": "Alphen aan den Rijn ligt midden in het Groene Hart, aan de Oude Rijn en de Gouwe, tussen Gouda, Leiden en Bodegraven. Veel wijken, veel water en groen eromheen. Ik draai er feesten als DJ en MC in een persoon.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Alphen aan den Rijn, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Alphen aan den Rijn ligt aan de Oude Rijn en de Gouwe, midden in het veenweidegebied van het Groene Hart. De stad heeft wijken als Ridderveld, Kerk en Zanen, Oudshoorn en het Zegersloot-gebied, met daaromheen kernen als Aarlanderveen, Boskoop en Hazerswoude. Voor een bruiloft op een buitenlocatie of een feest in de stad lees ik de zaal en draai wat werkt.",
      "Met mijn eigen licht- en geluidsinstallatie zet ik een show neer die past bij de ruimte, van een zaal tot een tent aan het water. Als MC hou ik het programma strak: binnenkomst, speeches en het eerste dansje aangekondigd, en daarna vol op de dansvloer. DJ en MC in een persoon, alles uit een hand.",
      "Via de N11 en de A12 ben ik vlot in Alphen, ook vanuit Gouda en Leiden. Feest plannen in het Groene Hart? Stuur je datum door, dan check ik snel of ik kan."
    ],
    "characteristics": "Ridderveld, Kerk en Zanen, Oudshoorn, Zegersloot, Oude Rijn, Gouwe, Aarlanderveen, Boskoop, Hazerswoude.",
    "related": [
      { "to": "/dj-boeken-gouda", "label": "Gouda" },
      { "to": "/dj-boeken-leiden", "label": "Leiden" },
      { "to": "/dj-boeken-zoetermeer", "label": "Zoetermeer" }
    ]
  },

  "hendrik-ido-ambacht": {
    "slug": "hendrik-ido-ambacht",
    "name": "Hendrik-Ido-Ambacht",
    "province": "Zuid-Holland",
    "region": "Drechtsteden",
    "title": "DJ Hendrik-Ido-Ambacht huren | Kevin Froger",
    "description": "DJ in Hendrik-Ido-Ambacht nodig? DJ en MC in een, eigen licht en geluid, 15+ jaar ervaring en 5,0 op Google. All-in geregeld voor jouw feest.",
    "heroIntro": "Zoek je een DJ in Hendrik-Ido-Ambacht? Ik ben Kevin Froger uit 's-Gravendeel, vlak over de Oude Maas. Via de A16 sta ik zo bij jullie, of het feest nu in het centrum is of in De Volgerlanden. Ik draai de avond en doe de presentatie er zelf bij.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Hendrik-Ido-Ambacht en de Drechtsteden, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Hendrik-Ido-Ambacht ligt ingeklemd tussen Zwijndrecht en de Noord, met de A16 langs de rand en de Devel die door het dorp loopt. Het oude centrum rond de Dorpsstraat heeft een ander karakter dan de nieuwbouw van De Volgerlanden of het rustige Sandelingen-Ambacht, en dat zie ik terug in de feesten. De ene keer een verjaardag in een wijkzaal, de andere keer een bruiloft op een locatie aan het water of een bedrijfsfeest op een terrein langs de snelweg.",
      "Mijn licht en geluid neem ik allemaal zelf mee, dus op de zaal of in de tent hoef je daar niets voor te regelen. Ik sta niet alleen achter de draaitafel maar pak ook de microfoon: het eerste dansje aankondigen, de speeches inleiden en het tempo erin houden hoort er bij mij gewoon bij. In een hoge of galmende ruimte stem ik mijn opstelling af op de akoestiek, zodat het ook achterin lekker blijft klinken.",
      "Vanuit 's-Gravendeel ben ik via de A16 in een kwartiertje in 'Ambacht, dus ik bouw rustig op en test alles ruim voordat de eerste gasten binnenkomen. Feest je in 'Ambacht zelf of net over de grens richting Zwijndrecht, Dordrecht of Papendrecht? App of bel me met je datum en wat voor avond je voor ogen hebt, dan hoor je snel of het lukt."
    ],
    "characteristics": "Hendrik-Ido-Ambacht centrum, Dorpsstraat, De Volgerlanden, Sandelingen-Ambacht, langs de A16 en de Devel, Drechtsteden",
    "related": [
      {
        "to": "/dj-boeken-zwijndrecht",
        "label": "Zwijndrecht"
      },
      {
        "to": "/dj-boeken-dordrecht",
        "label": "Dordrecht"
      },
      {
        "to": "/dj-boeken-papendrecht",
        "label": "Papendrecht"
      }
    ]
  },

  "mijnsheerenland": {
    "slug": "mijnsheerenland",
    "name": "Mijnsheerenland",
    "province": "Zuid-Holland",
    "region": "Hoeksche Waard",
    "title": "DJ Mijnsheerenland huren | Kevin Froger",
    "description": "DJ Mijnsheerenland gezocht? DJ en MC in een persoon, eigen licht en geluid, 15+ jaar ervaring en 5,0 op Google. All-in voor je feest geregeld.",
    "heroIntro": "Een DJ in Mijnsheerenland die het dorp en de polder kent? Dat ben ik. Ik woon vlakbij in 's-Gravendeel, dus ik sta zo bij je in het hart van de Hoeksche Waard. Eigen licht en geluid neem ik mee, en de aankondigingen doe ik er zelf bij.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Mijnsheerenland en omgeving, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Mijnsheerenland ligt centraal in de Hoeksche Waard, met de oude kern rond de Hervormde kerk en de Oude Maas en de Binnenmaas vlakbij. Het is een rustig dorp met veel groen eromheen, en de feesten die ik hier draai lopen van een verjaardag thuis tot een bruiloft op een landelijke locatie of in een verbouwde schuur. Ik kijk vooraf naar de ruimte zodat licht en geluid kloppen, of die nu klein en intiem is of hoog en galmend.",
      "Omdat ik in 's-Gravendeel woon, ben ik snel ter plaatse en heb ik genoeg tijd om alles rustig op te bouwen en te testen. De buurkernen Westmaas, Heinenoord en Puttershoek liggen om de hoek, dus ook richting de Maas of de Binnenmaas ben ik zo. Mijn complete set licht en geluid neem ik mee, dus op de locatie hoef je niets te regelen.",
      "Het draaien en de presentatie komen bij mij uit dezelfde hand: ik kondig het eerste dansje aan, geef de toost een zetje en houd in de gaten dat de vloer vol blijft. Ik draai allround, van Nederlandstalig en meezingers tot recente hits, en ik stuur de hele avond bij op wat het publiek doet. Bruiloft, bedrijfsfeest of verjaardag in Mijnsheerenland? Laat me weten welke datum je in gedachten hebt."
    ],
    "characteristics": "Mijnsheerenland centrum, Oude Maas, Binnenmaas, Westmaas, Heinenoord, Puttershoek, centrale Hoeksche Waard",
    "related": [
      {
        "to": "/dj-boeken-heinenoord",
        "label": "Heinenoord"
      },
      {
        "to": "/dj-boeken-puttershoek",
        "label": "Puttershoek"
      },
      {
        "to": "/dj-boeken-oud-beijerland",
        "label": "Oud-Beijerland"
      }
    ]
  },

  "alblasserdam": {
    "slug": "alblasserdam",
    "name": "Alblasserdam",
    "province": "Zuid-Holland",
    "region": "Drechtsteden",
    "title": "DJ Alblasserdam huren | Kevin Froger",
    "description": "DJ in Alblasserdam nodig? DJ en MC in een, eigen licht en geluid, 15+ jaar ervaring en 5,0 op Google. All-in geregeld voor bruiloft of feest.",
    "heroIntro": "Op zoek naar een DJ in Alblasserdam? Ik ben Kevin Froger, allround DJ en MC uit 's-Gravendeel. Alblasserdam ligt langs de Noord, met de molens van Kinderdijk om de hoek, en daar draai ik graag jullie bruiloft, bedrijfsfeest of verjaardag aan elkaar.",
    "serviceDescription": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Alblasserdam en de Drechtsteden, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Alblasserdam ligt aan de Noord, op de overgang van de Drechtsteden naar de Alblasserwaard, met de werelderfgoed-molens van Kinderdijk pal naast de deur. Het dorp heeft een eigen karakter: de oude lintbebouwing langs de dijk, wijken als Kinderdijk en Nederwaard en de bedrijvigheid van de scheepsbouw langs het water. Ik draai er net zo makkelijk een verjaardag in een wijkzaal als een bruiloft op een locatie met uitzicht op de molens.",
      "Mijn licht en geluid breng ik allemaal zelf mee, en ik sta niet alleen achter de draaitafel maar pak ook de microfoon. Het eerste dansje aankondigen, een speech inleiden en het tempo bewaken hoort er bij mij gewoon bij, dus een aparte presentator heb je niet nodig. In een ruime of hoge zaal stem ik mijn opstelling af op de akoestiek, zodat het overal goed klinkt.",
      "Vanuit 's-Gravendeel rijd ik via Dordrecht en de N3 zo richting Papendrecht en de brug naar Alblasserdam, en ik ben er ruim op tijd om op te bouwen. Feest je in Alblasserdam zelf of net over het water richting Papendrecht, Ridderkerk of Sliedrecht? Stuur me een appje met je datum en wat je voor ogen hebt, dan hoor je snel of het past en kijken we samen naar de muziek."
    ],
    "characteristics": "Alblasserdam centrum, Kinderdijk, Nederwaard, langs de Noord, scheepsbouw aan het water, rand Alblasserwaard",
    "related": [
      {
        "to": "/dj-boeken-papendrecht",
        "label": "Papendrecht"
      },
      {
        "to": "/dj-boeken-ridderkerk",
        "label": "Ridderkerk"
      },
      {
        "to": "/dj-boeken-sliedrecht",
        "label": "Sliedrecht"
      }
    ]
  },

  "bommelerwaard": {
    "slug": "bommelerwaard",
    "name": "Bommelerwaard",
    "province": "Gelderland",
    "region": "Rivierenland",
    "title": "DJ Bommelerwaard huren | Kevin Froger",
    "description": "Op zoek naar een DJ in de Bommelerwaard? Ik draai al 15+ jaar, kom met eigen licht en geluid en ben DJ en MC in een. 5,0 op Google. Bekijk mijn beschikbaarheid.",
    "heroIntro": "Zoek je een DJ in de Bommelerwaard, het stukje tussen Maas en Waal met Zaltbommel, Kerkdriel en Ammerzoden? Ik kom met mijn complete show jullie kant op, van een bruiloft op een landelijke locatie tot een verjaardag in de fruitstreek. Eigen licht, eigen geluid en ik praat het feest zelf aan elkaar.",
    "serviceDescription": "Allround DJ en MC met eigen licht en geluid voor bruiloften, bedrijfsfeesten en verjaardagen in de Bommelerwaard.",
    "paragraphs": [
      "De Bommelerwaard ken ik als de strook tussen de Maas en de Waal: Zaltbommel aan de noordkant, met Kerkdriel, Ammerzoden en Hedel iets zuidelijker. Veel feesten hier zitten op een landelijke trouwlocatie of in een boerenschuur tussen de boomgaarden, en daar voel ik me prima thuis. Ik draai allround, dus ik lees de zaal en pas de muziek aan op wie er staat.",
      "Trouwen jullie op een sfeervolle kasteellocatie als Kasteel Ammersoyen in Ammerzoden, of op een plek buitenaf in de fruitstreek? Licht en geluid breng ik zelf mee en ik sta achter de draaitafel én bij de microfoon, zodat het aankondigen van de momenten ook geregeld is. Of het nu een intieme bruiloft is of een verjaardag waar het later op de avond losgaat, ik bouw de avond mee op.",
      "De Bommelerwaard ligt vlak aan de A2 en de A15, dus vanuit 's-Gravendeel ben ik snel bij jullie en sta ik op tijd op te bouwen. Ik draai er bruiloften, bedrijfsfeesten, verjaardagen en feesten, in Zaltbommel net zo makkelijk als in de kleinere kernen eromheen. Wil je sparren over de muziek of weten of jullie datum nog vrij is? Stuur me gerust een bericht.",
      "In de Bommelerwaard draai ik graag op sfeervolle locaties, van een landelijke trouwzaal tot een historische plek als Kasteel Ammersoyen in Ammerzoden. Dat soort plekken hebben een fijne, eigen sfeer en ik sluit er met mijn muziek graag op aan."
    ],
    "characteristics": "Zaltbommel, Kerkdriel, Ammerzoden, Hedel, Rossum, Brakel, Aalst, Gameren, Nederhemert",
    "related": [
      {
        "to": "/dj-boeken-zaltbommel",
        "label": "Zaltbommel"
      },
      {
        "to": "/dj-boeken-betuwe",
        "label": "Betuwe"
      },
      {
        "to": "/dj-boeken-den-bosch",
        "label": "'s-Hertogenbosch"
      }
    ]
  },

  "buren": {
    "slug": "buren",
    "name": "Buren",
    "province": "Gelderland",
    "region": "Betuwe",
    "title": "DJ Buren huren in de Betuwe | Kevin Froger",
    "description": "DJ in Buren nodig? Ik draai al 15+ jaar, kom als DJ en MC in een persoon met eigen licht en geluid. 5,0 op Google. Vraag mijn beschikbaarheid op.",
    "heroIntro": "Op zoek naar een DJ in Buren? Ik ben Kevin, allround DJ en MC, en ik draai graag in en rond het oude vestingstadje van de Oranjestad. Tussen de fruitboomgaarden van de Betuwe staat een feest pas echt mooi met goed licht en geluid.",
    "serviceDescription": "DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals in Buren en de Betuwe, inclusief eigen licht- en geluidsinstallatie.",
    "paragraphs": [
      "Buren is klein maar bijzonder: de historische vesting met zijn poorten, de Marsch eromheen en de kernen Lienden, Maurik en Beusichem horen er allemaal bij. Veel feesten in deze hoek vinden plaats op landelijke locaties, in een boomgaard, een verbouwde schuur of een sfeervolle hoeve. Ik stem mijn opstelling daarop af, of de ruimte nu hoog en galmend is of juist intiem.",
      "Ik werk als DJ en MC in een persoon, dus je hoeft geen aparte presentator te regelen. Ik kondig het eerste dansje aan, hou de avond op gang en draai van Nederlandstalig tot recente hits, afhankelijk van wat jullie en de gasten leuk vinden. Mijn eigen licht en geluid neem ik mee, zodat ook een kale feestzaal of tent er meteen goed uitziet.",
      "Buren ligt vlak bij de A15 en de N320, dus vanuit 's-Gravendeel ben ik snel ter plaatse en heb ik ruim de tijd om op te bouwen en alles rustig te testen. Een bruiloft op een fruitbedrijf bij Maurik, een bedrijfsfeest in de buurt van Beusichem of een verjaardag in het centrum van Buren: laat me weten wat je van plan bent, dan kijk ik of jouw datum nog vrij is."
    ],
    "characteristics": "Buren centrum, De Marsch, Lienden, Maurik, Beusichem, Eck en Wiel, Zoelen, Erichem",
    "related": [
      {
        "to": "/dj-boeken-tiel",
        "label": "Tiel"
      },
      {
        "to": "/dj-boeken-betuwe",
        "label": "Betuwe"
      },
      {
        "to": "/dj-boeken-culemborg",
        "label": "Culemborg"
      }
    ]
  },

  "zuid-holland": {
    "slug": "zuid-holland",
    "name": "Zuid-Holland",
    "province": "Zuid-Holland",
    "region": "Zuid-Holland",
    "title": "DJ Zuid-Holland huren | Kevin Froger",
    "description": "Op zoek naar een dj in Zuid-Holland? Ik draai al 15+ jaar, kom met eigen licht en geluid en ben dj en MC in een. 5,0 op Google uit 10 reviews.",
    "heroIntro": "Een dj in Zuid-Holland die net zo makkelijk in Rotterdam staat als in een dorpszaal in de Hoeksche Waard? Dat ben ik. Mijn thuisbasis is 's-Gravendeel, dus de hele provincie ligt om de hoek.",
    "serviceDescription": "Allround dj en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals door heel Zuid-Holland.",
    "paragraphs": [
      "Vanuit 's-Gravendeel zit ik snel in de Drechtsteden: Dordrecht, Zwijndrecht, Papendrecht en Sliedrecht zijn via de A16 en N3 een kort ritje. Ook richting Rotterdam-Zuid en de stad zelf ben ik vlot ter plaatse over de A15 en A29. Of het nu een trouwlocatie aan de Waal is of een bedrijfshal op een terrein langs de snelweg, ik plan mijn opbouw zo dat alles ruim op tijd staat.",
      "De Hoeksche Waard ken ik op mijn duimpje. Kernen als Oud-Beijerland, Puttershoek, Maasdam, Strijen en Numansdorp draai ik graag, of het nu een verjaardag in een dorpshuis is of een feest in een boerenschuur. Verder de provincie in kom ik ook: Den Haag, Delft, Leiden, Zoetermeer en Gouda zijn voor mij prima te doen.",
      "Geluid en licht breng ik allemaal zelf mee en stel ik in op de ruimte. Het draaien en de microfoon liggen bij dezelfde persoon, dus voor de aankondigingen en de speeches zit je ook bij mij goed. Een kleine zaal of een grote ruimte, ik stem de set af op jouw gasten en houd de avond op gang."
    ],
    "characteristics": "Rotterdam, Den Haag, Dordrecht, Drechtsteden, Hoeksche Waard, Delft, Leiden, Zoetermeer, Gouda, 's-Gravendeel",
    "related": [
      {
        "to": "/dj-boeken-rotterdam",
        "label": "Rotterdam"
      },
      {
        "to": "/dj-boeken-dordrecht",
        "label": "Dordrecht"
      },
      {
        "to": "/dj-boeken-hoeksche-waard",
        "label": "Hoeksche Waard"
      }
    ]
  },

};

export function getCity(slug: string): CityData | undefined {
  return CITIES[slug];
}

export const CITY_SLUGS = Object.keys(CITIES) as Array<keyof typeof CITIES>;
