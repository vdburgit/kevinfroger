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
      "Voor bedrijfsfeesten en netwerkevents in Rotterdam-Centrum, het Beurs-WTC of de Coolsingel ben ik vaak ingehuurd. Ook voor bruiloften in de buitenwijken (Hillegersberg, Kralingen, Schiebroek) en in Hoogvliet, Pernis en Hoek van Holland kom ik graag.",
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
      "Voor feesten in Amsterdam ben ik vaak op locatie. Van bruiloften aan de grachten tot bedrijfsfeesten in de Zuidas, ik zorg voor een avond die staat. De stad heeft elke wijk een eigen sfeer en daar speel ik op in.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest en festival in Amsterdam. Inclusief licht, geluid en MC services.",
    paragraphs: [
      "Amsterdam heeft alles: bruiloften op een rondvaartboot, bedrijfsfeesten in moderne kantoorgebouwen op de Zuidas, festivals in Noord en intieme feesten in het centrum. Voor elk type event pas ik mijn show aan.",
      "Geliefde feestlocaties waar ik regelmatig draai: hotels in Centrum en Zuid, locaties langs het IJ, evenementhallen in Noord, en kleinere zalen in Oud-West, De Pijp en Oost.",
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
      "In Den Haag draai ik in de hele stad. Voor zakelijke events bij ministeries en internationale organisaties, bruiloften in Scheveningen of Kijkduin, en feesten in de centrum-locaties zoals het Plein, Lange Voorhout of de Witte de Withstraat.",
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
      "Utrecht zit centraal in Nederland en daar zit ik vaak. Voor bruiloften en bedrijfsfeesten in de Domstad, op kantoorlocaties rond Papendorp of Lage Weide, of in de wijken De Meern, Vleuten en Leidsche Rijn. Goede bereikbaarheid vanuit de Betuwe en Hoeksche Waard.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest, verjaardag of festival in Utrecht en omgeving.",
    paragraphs: [
      "Utrecht heeft veel feestlocaties: historische plekken in het centrum, moderne event-locaties op de Croeselaan en rond Papendorp, en sfeervolle zalen in Lombok en Ondiep. Voor elke wijk pas ik mijn opbouw aan de ruimte aan.",
      "Ook voor de randgemeenten ben ik regelmatig in de regio: Nieuwegein, Houten, IJsselstein, Bunnik en Wijk bij Duurstede zijn allemaal goed bereikbaar. Voor de Utrechtse Heuvelrug (Zeist, Doorn, Driebergen) draai ik geregeld bruiloften op buitenlocaties.",
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
      "Eindhoven is de Brainport van Nederland: een stad met veel zakelijke events, technologiebedrijven en moderne feestlocaties. Daarnaast veel bruiloften op buitenlocaties tussen Veldhoven, Best en Geldrop. Ik draai er regelmatig.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest, festival of verjaardag in Eindhoven en de Brainport-regio.",
    paragraphs: [
      "Eindhoven heeft een sterk DJ-circuit, en voor bedrijfsevents van technologiebedrijven, hotels en internationale conferenties ben ik vaak ingezet. Vooral de wijken Strijp-S, het centrum, Tongelre en Woensel hebben mooie feestlocaties.",
      "Voor bruiloften in en rond Eindhoven kom ik ook naar Veldhoven, Best, Geldrop-Mierlo, Nuenen en Helmond. De Brabantse feestcultuur (en het bourgondische karakter) past goed bij hoe ik draai.",
      "Voor de zomer-festivals en kermis-events in de regio ben ik geregeld geboekt. Vanuit Den Bosch of de Betuwe via de A2 of A50 ben ik in een uurtje in Eindhoven.",
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
      "Tilburg heeft een rijke feestcultuur, vooral rond Carnaval en de Tilburgse Kermis. Voor bedrijfsfeesten in de Tilburgse industrie, restaurants in het centrum of zalen aan de rand van de stad ben ik vaak geboekt.",
      "Voor bruiloften in en om Tilburg kom ik naar Goirle, Hilvarenbeek, Oisterwijk, Loon op Zand, Kaatsheuvel en Waalwijk. Brabantse bourgondische sfeer met een DJ die de regio kent.",
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
      "Breda is een sfeervolle Brabantse stad met veel mooie feestplekken: historische locaties in het centrum, moderne event-zalen rond de Singel en buitenlocaties in en rond het Mastbos. Ik draai er regelmatig en ken het gebied.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Breda en West-Brabant.",
    paragraphs: [
      "Voor bruiloften en bedrijfsfeesten in Breda kom ik in het centrum, Ginneken, Princenhage en de Haagse Beemden. De stad heeft veel landelijke locaties net buiten de ring, mooi voor sfeervolle bruiloften.",
      "Ook voor Etten-Leur, Oosterhout, Zundert, Bavel en Teteringen draai ik vaak. De combinatie van bourgondische sfeer en moderne uitstraling past mooi bij mijn manier van werken.",
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
      "Bossche feesten staan bekend om de gezelligheid, en daar speel ik op in. Voor bruiloften in de Stadsschouwburg, restaurants aan de Sint-Jan of zalen rond Hintham draai ik regelmatig.",
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
      "Nijmegen is een levendige stad met veel jong publiek en een sterk feestcircuit (Vierdaagse, studentenfeesten, festivals). Voor bruiloften, bedrijfsfeesten en evenementen draai ik er regelmatig en ken ik het Rijk van Nijmegen goed.",
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
      "Arnhem ligt tussen de Veluwe en de Betuwe en biedt veel feestlocaties met groen en water. Ik draai er regelmatig: in de stad, op de Veluwezoom of langs de Rijn. Goed bereikbaar vanuit de Betuwe.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest of festival in Arnhem en de Veluwezoom.",
    paragraphs: [
      "Arnhem heeft een rijke mix van feestlocaties: historische plekken in het centrum, evenementenhallen op Stadsblokken-Meinerswijk en sfeervolle restaurants in Sonsbeek en Burgers' Zoo. Voor bedrijfsfeesten en bruiloften kom ik in de hele stad.",
      "Ook voor de Veluwezoom (Velp, Rheden, Dieren, Doesburg) en de Liemers (Westervoort, Duiven, Zevenaar) draai ik geregeld. Bekend gebied voor mij vanuit de Betuwe.",
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
      "Zwolle heeft veel historische plekken die zich lenen voor een sfeervolle bruiloft: kerken, oude pakhuizen en restaurants in de binnenstad. Voor bedrijfsfeesten draai ik in de Industriële zones en op modern ingerichte event-locaties.",
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
      "Almere is de jongste grote stad van Nederland, met moderne event-locaties en veel ruimte. Ik draai er voor bruiloften, bedrijfsfeesten en festivals, en ken het gebied goed door regelmatige klussen in de polder.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest of festival in Almere en heel Flevoland.",
    paragraphs: [
      "Almere groeit nog steeds, en de stad telt veel moderne feestlocaties: hotels, restaurants en zalen rond het Weerwater en in Almere Centrum. Voor bedrijfsevents in Almere Buiten en Almere Haven kom ik regelmatig.",
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
      "Maastricht heeft een rijke feestcultuur: bourgondisch, internationaal en met veel sfeer. Voor bruiloften en bedrijfsevents draai ik in de binnenstad, op locaties als de Bonbonnière, hotels rond de Maas en in Wyck.",
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
      "Haarlem heeft een mooie historische binnenstad en is geliefd voor bruiloften en bedrijfsevents. Ik draai er regelmatig en ken zowel de centrumlocaties als de Kennemerland-omgeving.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Haarlem en Kennemerland.",
    paragraphs: [
      "Haarlem combineert historische sfeer met moderne event-locaties. Voor bruiloften in de Grote Kerk, Toneelschuur of restaurants aan het Spaarne draai ik regelmatig.",
      "Voor bedrijfsfeesten kom ik ook in IJmuiden, Beverwijk, Heemstede, Zandvoort en Bloemendaal. Strandbruiloften in Zandvoort zijn een vast onderdeel van mijn zomerseizoen.",
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
      "Delft is een sfeervolle, historische stad waar ik regelmatig draai. Bruiloften aan de Markt, bedrijfsevents in moderne TU-Delft locaties en feesten in de oude pakhuizen langs de Schie.",
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
      "Leiden heeft een levendig studentenleven en een prachtige historische binnenstad. Voor bruiloften, bedrijfsevents en feesten draai ik regelmatig in de stad en de Bollenstreek.",
    serviceDescription:
      "Allround DJ voor bruiloft, bedrijfsfeest, festival of verjaardag in Leiden en de Bollenstreek.",
    paragraphs: [
      "Leiden is een mix van historie en studentencultuur. Voor bruiloften in de Pieterskerk, Hartebrugkerk of De Burcht ben ik vaak ingehuurd. Bedrijfsevents draai ik in het Stadhuis, op Bio Science Park of in restaurants langs de grachten.",
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
      "Amersfoort is een sfeervolle stad in het hart van Nederland, met mooie locaties in de historische binnenstad en moderne event-zalen op De Hoef. Ik draai er voor bruiloften en bedrijfsfeesten regelmatig.",
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
    heroIntro: "Gouda heeft een schilderachtig centrum met de Markt en het Stadhuis als blikvangers. Voor bruiloften en bedrijfsfeesten draai ik regelmatig in en rond de stad, ook richting de Krimpenerwaard.",
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
    description: "DJ in Spijkenisse en op Voorne-Putten voor bruiloften, bedrijfsfeesten en verjaardagen. Vraag een offerte aan.",
    heroIntro: "Spijkenisse is de centrale plek op Voorne-Putten. Ik draai er regelmatig en kom ook in Hellevoetsluis, Brielle en de hele Voorne-Putten regio.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Spijkenisse en Voorne-Putten.",
    paragraphs: [
      "Voor bruiloften in Spijkenisse en de omliggende dorpen ben ik vaak ingezet. Geliefde locaties zijn de zalen in het centrum en de buitenlocaties richting Oostvoorne.",
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
      "Schiedam heeft veel karakter: de molens, de jenever-distilleerderijen en de oude pakhuizen aan de Lange Haven maken het een populaire bruiloftslocatie. Ook voor bedrijfsevents in moderne kantoorlocaties op Schieveen draai ik regelmatig.",
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
    heroIntro: "Zoetermeer is een groene stad met veel moderne event-locaties. Voor bruiloften en bedrijfsfeesten draai ik regelmatig, ook in Lansingerland en Pijnacker-Nootdorp.",
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
    description: "DJ in Hilversum en Het Gooi voor bruiloften, bedrijfsfeesten en festivals. Vraag een offerte aan.",
    heroIntro: "Hilversum is mediastad bij uitstek: veel corporate events bij omroepen, productiebedrijven en hotels. Voor bruiloften en feesten in Het Gooi kom ik regelmatig.",
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
      "Veenendaal heeft een actief bedrijfsleven, dus voor corporate events ben ik er vaak. Voor bruiloften draai ik in en rond de stad, met sfeervolle locaties richting de Veluwe-rand.",
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
    description: "DJ in Zeist en op de Utrechtse Heuvelrug voor bruiloften en bedrijfsfeesten. Complete show inbegrepen.",
    heroIntro: "Zeist heeft prachtige landgoederen die ideaal zijn voor bruiloften, plus veel bedrijven met events. Ik draai regelmatig op de Heuvelrug.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Zeist en op de Utrechtse Heuvelrug.",
    paragraphs: [
      "Zeist heeft geliefde landgoederen als Slot Zeist, plus moderne event-locaties rond het centrum. Voor bedrijfsfeesten van internationale bedrijven (denk Triodos, KPN) ben ik regelmatig in de regio.",
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
    description: "DJ in Houten voor bruiloften, bedrijfsfeesten en verjaardagen. Complete show inbegrepen. Vraag een offerte aan.",
    heroIntro: "Houten ligt vlakbij Utrecht en heeft mooie feestlocaties. Voor bruiloften en bedrijfsevents in Houten en de Kromme Rijnstreek kom ik regelmatig.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Houten en de Kromme Rijnstreek.",
    paragraphs: [
      "Houten heeft veel mooie buitenlocaties en moderne event-zalen. Voor bruiloften, bedrijfsfeesten en verjaardagen draai ik regelmatig.",
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
    heroIntro: "Nieuwegein ligt aan de zuidkant van Utrecht en heeft veel corporate event-locaties. Ik draai er regelmatig voor zakelijke en privé-events.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Nieuwegein en omgeving.",
    paragraphs: [
      "Nieuwegein heeft een actief zakelijk circuit: hotels, conferenties en event-zalen op Plettenburg en City. Ik draai er regelmatig voor corporate events.",
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
    heroIntro: "Ede ligt centraal in Gelderland met de Veluwe-rand binnen handbereik. Voor bruiloften op buitenlocaties en bedrijfsevents kom ik regelmatig.",
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
    description: "DJ in Wageningen voor bruiloften, bedrijfsfeesten en studentenfeesten. Vraag een offerte aan.",
    heroIntro: "Wageningen is de FoodValley met een sterke wetenschaps- en studentencultuur. Voor bruiloften, bedrijfsevents bij WUR en studentenfeesten kom ik regelmatig.",
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
    description: "DJ in Helmond voor bruiloften en bedrijfsfeesten in Brabant. Complete show inbegrepen. Vraag een offerte aan.",
    heroIntro: "Helmond ligt vlakbij Eindhoven in de Peelregio. Voor bruiloften, bedrijfsfeesten en verjaardagen kom ik in de stad en het ommeland regelmatig.",
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
    description: "DJ in Oss voor bruiloften, bedrijfsfeesten en verjaardagen. Complete show inbegrepen.",
    heroIntro: "Oss is een Brabantse industriestad met veel bedrijfsfeesten. Voor bruiloften kom ik ook in de Maas-regio en het Land van Cuijk.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of verjaardag in Oss en Noordoost-Brabant.",
    paragraphs: [
      "Oss heeft een sterk bedrijfsleven en een actief bruiloftscircuit. Voor corporate events en bruiloften draai ik regelmatig in de stad en de omgeving.",
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
    description: "DJ in Enschede en heel Twente voor bruiloften, bedrijfsfeesten en festivals. Vraag een offerte aan.",
    heroIntro: "Voor klussen in Enschede en Twente rij ik graag mee, vaak met overnachting. Studentenstad met actieve feestcultuur en mooie buitenlocaties richting Duitse grens.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of festival in Enschede en Twente.",
    paragraphs: [
      "Enschede is studentenstad en heeft een sterk feestcircuit. Voor bruiloften en bedrijfsevents draai ik in de hele Twentse regio.",
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
    description: "DJ in Deventer voor bruiloften, bedrijfsfeesten en festivals. Vraag een offerte aan.",
    heroIntro: "Deventer is een Hanze-stad met veel sfeer en historische feestlocaties. Voor bruiloften, bedrijfsevents en festivals kom ik regelmatig in de hele Salland-regio.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of festival in Deventer en Salland.",
    paragraphs: [
      "Deventer heeft een prachtige binnenstad met de Bergkerk en historische pakhuizen aan de IJssel. Voor bruiloften, bedrijfsevents en festivals draai ik er regelmatig.",
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
    description: "DJ in Leeuwarden voor bruiloften, festivals en bedrijfsfeesten in Friesland. Voor mooie klussen kom ik graag mee.",
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
    description: "DJ in Groningen voor bruiloften, festivals en bedrijfsfeesten. Voor mooie klussen rij ik graag mee.",
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
    description: "DJ in Assen voor bruiloften, festivals en bedrijfsfeesten in Drenthe. Vraag een offerte aan.",
    heroIntro: "Voor klussen in Assen en Drenthe rij ik op aanvraag, vaak met overnachting. Bekend van TT Assen, sterke evenementen-cultuur.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of festival in Assen en Drenthe.",
    paragraphs: [
      "Assen heeft een sterke evenementen-cultuur door TT en andere festivals. Voor bruiloften en bedrijfsfeesten draai ik er ook regelmatig.",
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
    description: "DJ in Middelburg en heel Zeeland voor bruiloften, strandfeesten en festivals. Vraag een offerte aan.",
    heroIntro: "Voor bruiloften en strandfeesten in Zeeland kom ik graag. Middelburg is centraal in Walcheren en de Zeeuwse Kust biedt veel mooie locaties.",
    serviceDescription: "Allround DJ voor bruiloft, strandfeest of bedrijfsevent in Middelburg en Zeeland.",
    paragraphs: [
      "Middelburg heeft een prachtige historische binnenstad met de Lange Jan als blikvanger. Voor bruiloften draai ik er in de centrum-locaties en kerken.",
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
    description: "DJ in Roermond voor bruiloften en bedrijfsfeesten in Midden-Limburg. Vraag een offerte aan.",
    heroIntro: "Voor klussen in Roermond en Midden-Limburg kom ik graag, met overnachting. Bekend van de Maasplassen en het Designer Outlet, sterk eventcircuit.",
    serviceDescription: "Allround DJ voor bruiloft, bedrijfsfeest of festival in Roermond en Midden-Limburg.",
    paragraphs: [
      "Roermond heeft veel mooie waterlocaties aan de Maasplassen en goede event-locaties in de stad. Voor bruiloften en bedrijfsfeesten draai ik er regelmatig.",
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
      "Venlo heeft veel mooie feestplekken aan de Maas en in de centrum-locaties. Voor bruiloften en bedrijfsfeesten draai ik regelmatig.",
      "Ook voor Venray, Horst, Roermond en Maasbracht ben ik je DJ. Voor afstand: reis in offerte meegenomen.",
    ],
    characteristics: "Centrum, Venray, Horst, Blerick, Tegelen, Belfeld.",
    related: [
      { to: "/dj-boeken-eindhoven", label: "Eindhoven" },
      { to: "/dj-boeken-roermond", label: "Roermond" },
    ],
  },

  // ====== Kleine dorpen (Betuwe SEO-focus) ======

  tuil: {
    slug: "tuil",
    name: "Tuil",
    province: "Gelderland",
    region: "West Betuwe",
    title: "DJ Tuil huren | DJ in dorp West Betuwe | Kevin Froger",
    description: "DJ in Tuil aan de Waal voor bruiloften, verjaardagen en feesten in de West Betuwe. Vraag een offerte aan.",
    heroIntro: "Tuil ligt aan de Waal in de West Betuwe, tussen Geldermalsen en Tiel. Voor feesten in dit landelijke gebied kom ik regelmatig, mooie sfeer langs de rivier.",
    serviceDescription: "Allround DJ voor bruiloft, verjaardag of feest in Tuil en omliggende West Betuwe dorpen.",
    paragraphs: [
      "Tuil is een klein dorp aan de Waal, maar mooi gelegen tussen de boomgaarden. Voor bruiloften op een landelijke locatie of feesten in een boerderij-schuur draai ik graag mee.",
      "Ook in de naburige dorpen Heesselt, Varik, Ophemert, Rumpt en Zoelen draai ik regelmatig. Bekijk de hele <strong>Betuwe</strong>-pagina voor meer.",
    ],
    characteristics: "Tuil aan de Waal, Heesselt, Varik, Haaften, Hellouw, Waardenburg.",
    related: [
      { to: "/dj-boeken-tiel", label: "Tiel" },
      { to: "/dj-boeken-geldermalsen", label: "Geldermalsen" },
      { to: "/dj-boeken-betuwe", label: "Betuwe" },
    ],
  },

  ophemert: {
    slug: "ophemert",
    name: "Ophemert",
    province: "Gelderland",
    region: "West Betuwe",
    title: "DJ Ophemert huren | DJ West Betuwe | Kevin Froger",
    description: "DJ in Ophemert aan de Waal voor bruiloften, verjaardagen en feesten in de West Betuwe.",
    heroIntro: "Ophemert ligt aan de Waal in de West Betuwe. Een sfeervol dorp met mooie buitenlocaties, ideaal voor landelijke bruiloften. Ik draai er regelmatig.",
    serviceDescription: "Allround DJ voor bruiloft, verjaardag of feest in Ophemert en omliggende West Betuwe dorpen.",
    paragraphs: [
      "Ophemert is geliefd voor landelijke bruiloften en familiefeesten. Het Slot Ophemert en de uiterwaarden geven sfeer aan elke locatie.",
      "Ook voor Varik, Heesselt, Tuil, Tiel en Zoelen ben ik je DJ. De hele West Betuwe is mijn werkgebied.",
    ],
    characteristics: "Slot Ophemert, Varik, Heesselt, Tuil, Wadenoijen, Zoelen.",
    related: [
      { to: "/dj-boeken-tiel", label: "Tiel" },
      { to: "/dj-boeken-tuil", label: "Tuil" },
      { to: "/dj-boeken-betuwe", label: "Betuwe" },
    ],
  },

  varik: {
    slug: "varik",
    name: "Varik",
    province: "Gelderland",
    region: "West Betuwe",
    title: "DJ Varik huren | DJ West Betuwe | Kevin Froger",
    description: "DJ in Varik aan de Waal voor bruiloften en feesten in de West Betuwe.",
    heroIntro: "Varik is een dorp aan de Waal in de West Betuwe, tussen Tiel en Zaltbommel. Voor bruiloften op landelijke locaties of feesten in dorpscentra draai ik er met plezier.",
    serviceDescription: "Allround DJ voor bruiloft, verjaardag of feest in Varik en de West Betuwe.",
    paragraphs: [
      "Varik heeft een mooie ligging aan de Waal met uitzicht op de uiterwaarden. Ideaal voor sfeervolle buitenbruiloften.",
      "Ook voor Heesselt, Tuil, Ophemert, Ophemert, Haaften en Hellouw kom ik. Hele West Betuwe binnen handbereik.",
    ],
    characteristics: "Varik aan de Waal, Heesselt, Tuil, Ophemert, Haaften, Hellouw, Neerijnen.",
    related: [
      { to: "/dj-boeken-zaltbommel", label: "Zaltbommel" },
      { to: "/dj-boeken-tiel", label: "Tiel" },
      { to: "/dj-boeken-betuwe", label: "Betuwe" },
    ],
  },
};

export function getCity(slug: string): CityData | undefined {
  return CITIES[slug];
}

export const CITY_SLUGS = Object.keys(CITIES) as Array<keyof typeof CITIES>;
