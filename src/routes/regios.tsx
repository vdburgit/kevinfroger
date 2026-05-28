import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ContactCta } from "@/components/ContactCta";
import { breadcrumb, buildSeo } from "@/lib/seo";

const IMG = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";

export const Route = createFileRoute("/regios")({
  head: () => buildSeo({
    title: "DJ door heel Nederland | Alle steden, dorpen en provincies",
    description: "DJ Kevin Froger draait bruiloften, bedrijfsfeesten, verjaardagen en festivals door heel Nederland. Van Amsterdam tot Maastricht, alle provincies en plaatsen.",
    path: "/regios",
    image: IMG,
    jsonLd: [
      breadcrumb([
        { name: "Home", path: "/" },
        { name: "Werkgebied", path: "/regios" },
      ]),
    ],
  }),
  component: Page,
});

// Provincies in volgorde van vermoedelijke aanvraag-frequentie voor Kevin
const PROVINCES: Array<{
  name: string;
  intro: string;
  cities: string[];
  villages?: string[];
  regions?: string[];
}> = [
  {
    name: "Zuid-Holland",
    intro:
      "Provincie waar ik veel boekingen heb voor bruiloften, bedrijfsfeesten en verjaardagen. Korte aanrijtijden en goede locatiekennis.",
    cities: [
      "Rotterdam", "Den Haag", "Delft", "Leiden", "Dordrecht", "Zoetermeer",
      "Gouda", "Schiedam", "Vlaardingen", "Spijkenisse", "Capelle aan den IJssel",
      "Krimpen aan den IJssel", "Rijswijk", "Ridderkerk", "Barendrecht",
      "Zwijndrecht", "Hendrik-Ido-Ambacht", "Papendrecht", "Sliedrecht",
      "Hardinxveld-Giessendam", "Alphen aan den Rijn", "Katwijk", "Schoonhoven",
      "Bergambacht", "Maassluis", "Hellevoetsluis", "Brielle",
    ],
    regions: ["Hoeksche Waard", "Drechtsteden", "Krimpenerwaard", "Alblasserwaard", "Voorne-Putten", "Goeree-Overflakkee"],
    villages: [
      "Oud-Beijerland", "Nieuw-Beijerland", "Zuid-Beijerland", "Heinenoord",
      "Mijnsheerenland", "Westmaas", "Klaaswaal", "Numansdorp", "Strijen",
      "Maasdam", "Puttershoek", "'s-Gravendeel", "Goudswaard", "Piershil",
      "Zuidland", "Abbenbroek", "Ouddorp", "Stellendam", "Middelharnis",
    ],
  },
  {
    name: "Gelderland",
    intro:
      "Veel boekingen in de Betuwe, het Rivierenland en omgeving Arnhem-Nijmegen. Centrale ligging maakt elke uithoek goed bereikbaar.",
    cities: [
      "Arnhem", "Nijmegen", "Apeldoorn", "Ede", "Wageningen", "Doetinchem",
      "Zutphen", "Tiel", "Culemborg", "Geldermalsen", "Zaltbommel",
      "Harderwijk", "Nunspeet", "Winterswijk", "Lochem",
    ],
    regions: ["Betuwe", "West Betuwe", "Neder-Betuwe", "Rivierenland", "Bommelerwaard", "Maas en Waal", "Veluwe", "Achterhoek", "Liemers"],
    villages: [
      "Tuil", "Ophemert", "Varik", "Heesselt", "Wamel", "Druten",
      "Beneden-Leeuwen", "Boven-Leeuwen", "Buren", "Beusichem", "Zoelen",
      "Kesteren", "Opheusden", "Ochten", "Dodewaard", "Maurik", "Lienden",
      "Beesd", "Buurmalsen", "Tricht", "Meteren", "Wadenoijen",
      "Kapel-Avezaath", "Kerk-Avezaath", "Rumpt", "Asch", "Erichem",
      "Eck en Wiel", "Ingen", "Echteld", "Ravenswaaij", "Brakel", "Aalst",
      "Poederoijen", "Hurwenen", "Nederhemert", "Kerkwijk", "Gameren",
      "Velddriel", "Hedel", "Ammerzoden", "Rossum", "Heerewaarden",
    ],
  },
  {
    name: "Noord-Brabant",
    intro:
      "Voor bruiloften, festivals en bedrijfsfeesten kom ik graag naar Brabant. Vooral de Bossche regio en West-Brabant kennen mij goed.",
    cities: [
      "'s-Hertogenbosch", "Eindhoven", "Tilburg", "Breda", "Helmond", "Oss",
      "Roosendaal", "Bergen op Zoom", "Waalwijk", "Veghel", "Uden", "Boxmeer",
      "Cuijk", "Boxtel", "Vught", "Heeswijk", "Drunen", "Geertruidenberg",
      "Etten-Leur", "Oosterhout",
    ],
    regions: ["Land van Heusden en Altena", "De Meierij", "West-Brabant", "De Kempen", "Het Land van Cuijk"],
    villages: [
      "Werkendam", "Woudrichem", "Sleeuwijk", "Almkerk", "Andel", "Veen",
      "Wijk en Aalburg", "Berlicum", "Sint-Michielsgestel", "Schijndel",
      "Heeswijk-Dinther", "Nuland", "Geffen", "Lithoijen", "Lith",
      "Maren-Kessel", "Macharen", "Megen", "Berghem",
    ],
  },
  {
    name: "Utrecht",
    intro:
      "Vanuit de Betuwe en Hoeksche Waard goed bereikbaar. Voor bruiloften en bedrijfsfeesten in Utrecht draai ik geregeld.",
    cities: [
      "Utrecht", "Amersfoort", "Nieuwegein", "Houten", "Veenendaal",
      "IJsselstein", "Zeist", "Woerden", "Vianen", "Bunnik", "Wijk bij Duurstede",
      "Bunschoten", "Soest", "Bilthoven", "Doorn", "Driebergen",
    ],
    regions: ["Utrechtse Heuvelrug", "Het Groene Hart", "Eemland", "Kromme Rijnstreek", "Vechtstreek"],
    villages: [
      "Cothen", "Werkhoven", "Schalkwijk", "Tull en 't Waal", "Honswijk",
      "Everdingen", "Hagestein", "Lopik", "Benschop", "Polsbroek", "Cabauw",
    ],
  },
  {
    name: "Noord-Holland",
    intro:
      "Voor evenementen en bedrijfsfeesten in de Randstad-noord. Goed bereikbaar via de A2 en A4.",
    cities: [
      "Amsterdam", "Haarlem", "Zaanstad", "Haarlemmermeer", "Alkmaar",
      "Hilversum", "Hoorn", "Purmerend", "Den Helder", "Heerhugowaard",
      "Beverwijk", "IJmuiden", "Castricum", "Bussum", "Naarden",
    ],
    regions: ["Het Gooi", "Kennemerland", "Westfriesland", "Waterland", "Kop van Noord-Holland"],
  },
  {
    name: "Overijssel",
    intro:
      "Voor grotere klussen kom ik ook naar Overijssel. Bruiloften en bedrijfsevents in en rond Zwolle, Deventer en Enschede.",
    cities: [
      "Zwolle", "Enschede", "Deventer", "Almelo", "Hengelo", "Kampen",
      "Oldenzaal", "Raalte", "Steenwijk", "Hardenberg", "Ommen",
    ],
    regions: ["Twente", "Salland", "Vechtdal", "Noord-Veluwe-rand"],
  },
  {
    name: "Flevoland",
    intro:
      "Voor feesten in de polder rij ik graag mee. Vooral Almere en Lelystad zijn goed bereikbaar via de A6.",
    cities: ["Almere", "Lelystad", "Dronten", "Emmeloord", "Urk", "Zeewolde"],
    regions: ["Noordoostpolder", "Oostelijk Flevoland"],
  },
  {
    name: "Friesland",
    intro:
      "Voor bruiloften en festivals in Friesland rij ik mee, vaak met overnachting omdat de afstand groter is.",
    cities: ["Leeuwarden", "Sneek", "Drachten", "Heerenveen", "Joure", "Franeker", "Dokkum", "Harlingen"],
    regions: ["Waddeneilanden", "Friese Meren", "De Wâlden", "Friese Wouden"],
  },
  {
    name: "Drenthe",
    intro:
      "Voor klussen in Drenthe kom ik op aanvraag. Mooie buitenlocaties, vooral rond Assen en Emmen.",
    cities: ["Assen", "Emmen", "Hoogeveen", "Meppel", "Coevorden", "Roden"],
    regions: ["Hondsrug", "Drents-Friese Wold"],
  },
  {
    name: "Groningen",
    intro:
      "Voor festivals en grote bruiloften in Groningen ben ik op aanvraag beschikbaar.",
    cities: ["Groningen", "Hoogezand", "Veendam", "Stadskanaal", "Delfzijl", "Winschoten"],
    regions: ["Westerkwartier", "Oldambt"],
  },
  {
    name: "Zeeland",
    intro:
      "Voor strandbruiloften en festivals aan de Zeeuwse kust rij ik graag mee. Korte ferry-aansluitingen vanuit Zuid-Holland.",
    cities: ["Middelburg", "Vlissingen", "Goes", "Terneuzen", "Zierikzee", "Hulst", "Sluis", "Yerseke"],
    regions: ["Walcheren", "Zeeuws-Vlaanderen", "Schouwen-Duiveland", "Zuid-Beveland"],
  },
  {
    name: "Limburg",
    intro:
      "Voor evenementen en bruiloften in Limburg ben ik op aanvraag inzetbaar, met overnachting omdat het wat verder is.",
    cities: ["Maastricht", "Heerlen", "Sittard", "Roermond", "Venlo", "Weert", "Venray", "Geleen"],
    regions: ["Heuvelland", "Westelijke Mijnstreek", "Peel"],
  },
];

function ProvinceCard({ p }: { p: (typeof PROVINCES)[number] }) {
  return (
    <details className="group mb-4 rounded-2xl border-2 border-border bg-card overflow-hidden">
      <summary className="flex items-center justify-between cursor-pointer list-none px-5 sm:px-6 py-4 sm:py-5 hover:bg-background/40 transition-colors">
        <h2 className="text-2xl sm:text-3xl md:text-4xl leading-[0.95]" style={{ fontFamily: "var(--font-display)" }}>
          DJ in {p.name}
        </h2>
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 text-secondary transition-transform group-open:rotate-180 shrink-0 ml-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>

      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 border-t border-border/60">
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 mt-3">{p.intro}</p>

        {p.regions && p.regions.length > 0 && (
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3">
            <strong className="text-foreground">Regio's binnen {p.name}</strong>: {p.regions.join(", ")}.
          </p>
        )}

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3">
          <strong className="text-foreground">Steden</strong>: {p.cities.join(", ")}.
        </p>

        {p.villages && p.villages.length > 0 && (
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Dorpen en kleine kernen</strong>: {p.villages.join(", ")}.
          </p>
        )}
      </div>
    </details>
  );
}

function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader transparent />
      <PageHero
        eyebrow="Werkgebied"
        title={<>DJ door<br/><span className="text-primary">heel Nederland.</span></>}
        intro="Ik draai bruiloften, bedrijfsfeesten, verjaardagen en festivals door alle twaalf provincies van Nederland. Veel boekingen komen uit de Randstad, de Betuwe en Zuid-Holland, maar voor een mooie klus kom ik naar elke plaats."
        image={IMG}
        imageAlt="DJ Kevin Froger met complete show op een feest"
      />

      <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-12">
            <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-3">Hoe ik werk</div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ik kom met een complete show: licht, geluid en allround muziek, afgestemd op jouw gasten. Voor klussen binnen de Randstad, Betuwe, Bommelerwaard en Zuid-Holland zijn er geen extra reiskosten. Voor uithoeken zoals Limburg, Groningen of Friesland kunnen reis en eventuele overnachting in de offerte worden meegenomen.
            </p>
          </div>

          {PROVINCES.map((p) => (
            <ProvinceCard key={p.name} p={p} />
          ))}

          <article className="rounded-2xl border-2 border-secondary/40 bg-card p-6 md:p-8 mt-12">
            <h2 className="text-2xl md:text-4xl leading-[0.95] mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Staat jouw plaats er niet bij?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              De lijsten hierboven zijn niet uitputtend. Nederland telt honderden dorpen en buurtschappen, en voor een mooie klus rij ik in principe overal naartoe. <Link to="/contact" className="text-secondary underline hover:text-primary">Stuur een berichtje</Link> met datum en locatie, dan kijk ik direct of het past.
            </p>
          </article>
        </div>
      </section>

      <ContactCta title={<>Datum prikken<br/>in jouw plaats?</>} subtitle="App of bel 06-45251333 met datum en locatie. Reactie binnen 24 uur." />
      <SiteFooter />
    </main>
  );
}
