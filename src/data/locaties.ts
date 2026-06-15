// Feest- en trouwlocaties in Kevins werkgebied. Gegenereerd en gesaneerd;
// elke locatie heeft een verifyNote: Kevin moet naam/plaats bevestigen voor
// publicatie. Geen claims dat Kevin er heeft gedraaid (alleen geschiktheid).

export type Locatie = {
  name: string;
  slug: string;
  plaats: string;
  citySlug: string;
  type: string;
  description: string;
  verifyNote: string;
};

export const LOCATIES: Locatie[] = [
  {
    "name": "Partycentrum Wantijpaviljoen",
    "slug": "wantijpaviljoen-dordrecht",
    "plaats": "Dordrecht",
    "citySlug": "dordrecht",
    "type": "feestlocatie",
    "description": "Het Wantijpaviljoen ligt midden in het Wantijpark in Dordrecht en heeft meerdere zalen en terrassen, geschikt voor grotere gezelschappen. Een ruime locatie waar ik als allround DJ en MC een hele avond met eigen licht en geluid kan invullen.",
    "verifyNote": "Kevin: bevestig naam, plaats en of je deze locatie wilt vermelden."
  },
  {
    "name": "Postillion Hotel Dordrecht",
    "slug": "postillion-hotel-dordrecht",
    "plaats": "Dordrecht",
    "citySlug": "dordrecht",
    "type": "feestlocatie",
    "description": "Een groot hotel net buiten het centrum van Dordrecht met meerdere zalen voor bedrijfsfeesten, jubilea en bruiloften, geschikt voor grotere gezelschappen. Goede bereikbaarheid en parkeerruimte, ruimte genoeg om mijn complete show op te bouwen.",
    "verifyNote": "Kevin: bevestig naam, plaats en of je deze locatie wilt vermelden."
  },
  {
    "name": "Event Center Dordrecht",
    "slug": "event-center-dordrecht",
    "plaats": "Dordrecht",
    "citySlug": "dordrecht",
    "type": "evenementenlocatie",
    "description": "Het Event Center Dordrecht heeft grote hoofdzalen die je tot een ruime feestzaal kunt koppelen. Geschikt voor grote bedrijfsfeesten en evenementen waar een stevige opbouw van licht en geluid mooi tot zijn recht komt.",
    "verifyNote": "Kevin: bevestig naam, plaats en of je deze locatie wilt vermelden."
  },
  {
    "name": "Kasteel Ammersoyen",
    "slug": "kasteel-ammersoyen",
    "plaats": "Ammerzoden",
    "citySlug": "bommelerwaard",
    "type": "trouwlocatie",
    "description": "Kasteel Ammersoyen in Ammerzoden is een sfeervol, historisch waterkasteel, beheerd door Geldersch Landschap en Kasteelen. Het bijbehorende koetshuis en het terras lenen zich goed voor een ceremonie en aansluitend feest met DJ in de Bommelerwaard.",
    "verifyNote": "Kevin: bevestig naam, plaats en of je deze locatie wilt vermelden."
  },
  {
    "name": "Kasteel Nederhemert",
    "slug": "kasteel-nederhemert",
    "plaats": "Nederhemert",
    "citySlug": "bommelerwaard",
    "type": "trouwlocatie",
    "description": "Kasteel Nederhemert ligt aan het water in de Bommelerwaard en is in gebruik als sfeervolle, historische trouw- en feestlocatie. Een mooie plek voor een bruiloft, met ruimte genoeg voor een dansvloer en een avond als DJ en MC.",
    "verifyNote": "Kevin: bevestig naam, plaats en of je deze locatie wilt vermelden."
  },
  {
    "name": "Kasteel Wijenburg",
    "slug": "kasteel-wijenburg",
    "plaats": "Echteld",
    "citySlug": "betuwe",
    "type": "trouwlocatie",
    "description": "Kasteel Wijenburg in Echteld ligt in de Betuwe, vlak bij Tiel en goed bereikbaar via de A15. Een klassieke kasteellocatie die zich uitstekend leent voor een feest met DJ na de ceremonie, waar ik mijn eigen licht en geluid opbouw.",
    "verifyNote": "Kevin: bevestig naam, plaats en of je deze locatie wilt vermelden."
  },
  {
    "name": "Hart van de Betuwe",
    "slug": "hart-van-de-betuwe-tiel",
    "plaats": "Tiel",
    "citySlug": "tiel",
    "type": "feestlocatie",
    "description": "Restaurant Hart van de Betuwe ligt aan het Marktplein in het centrum van Tiel en is geschikt voor feesten en evenementen. Een centrale plek in de Betuwe voor een verjaardag, jubileum of bedrijfsfeest met DJ.",
    "verifyNote": "Kevin: bevestig naam, plaats en of je deze locatie wilt vermelden."
  }
];

export function getLocatie(slug: string): Locatie | undefined {
  return LOCATIES.find((l) => l.slug === slug);
}

export const LOCATIE_SLUGS = LOCATIES.map((l) => l.slug);
