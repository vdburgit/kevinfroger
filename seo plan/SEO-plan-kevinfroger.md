# SEO-plan kevinfroger.nl

Doel: zoveel mogelijk relevante DJ-zoekwoorden bovenaan in Google, met focus op winst die echt boekingen oplevert. Opgesteld op basis van je live site en een concurrentieanalyse.

---

## Eerst even eerlijk over "nummer 1 op alles"

Op élk zoekwoord nummer 1 staan kan niemand garanderen, ook geen duur bureau niet. Google rankt per zoekwoord anders, en op zware landelijke termen als "dj huren" staan portals met enorme domeinautoriteit. Wat wél realistisch en haalbaar is:

- **Nummer 1** op je lokale en niche-zoekwoorden (Hoeksche Waard, Drechtsteden, dj+mc). Daar is de concurrentie laag en ben jij de echte lokale naam.
- **Top 3** op de middelzware regio's (Dordrecht, Gorinchem, Barendrecht).
- **Top 10 + long-tail winst** op de zware landelijke termen, waar je via specifieke combinaties ("bruiloft dj met licht en geluid") alsnog boekingen binnenhaalt.

Dit plan is daarop ingericht: eerst de zekere winst pakken, dan opschalen. Tienvoudig groeien doe je niet door op één onmogelijk woord te jagen, maar door op honderd haalbare woorden te winnen.

---

## Wat je nu al goed doet

Je site is technisch al sterker dan de meeste concurrenten. Concreet sterk:

- Schone Next.js site, snel, eigen hosting via Vercel. Veel concurrenten draaien nog op trage, verouderde sites (Partyfriend op `.asp`, anderen op zware WordPress).
- Duidelijke dienstpaginas (bruiloft, zakelijk, festival, verjaardag) met eigen URL's.
- Goede lokale paginastructuur (`/dj-boeken-[plaats]`) met FAQ-blokken en interne links.
- Echte 5,0 Google-rating, echte klantnamen, herkenbare klantlogos (Heineken, KPN, Feyenoord). Dat is vertrouwen dat portals niet hebben.
- Canonical tags en meta-descriptions staan goed ingesteld.
- Je hebt een sterk uniek verkooppunt dat bijna niemand zo brengt: **DJ én MC in één persoon, met eigen licht en geluid, all-in prijs zonder verrassingen.**

## Het grootste probleem dat nu geld kost

Bij het uitlezen vond ik een **backup-subdomein dat in Google staat**: `backup.kevinfroger.nl`. Daar staat een oude versie van je site op ("De Beste en Leukste Dj van het Moment"), met dezelfde content als je hoofdsite.

Dit is schadelijk omdat Google twee keer dezelfde content ziet en niet weet welke de echte is. Dat verzwakt je hoofdsite. Dit is prioriteit één om op te lossen (zie taken-bestand). Daarnaast staan er nog oude losse plaats-paginas in de oude structuur (`/friesland/bollingawier/` enzovoort) met de verouderde tekst. Die moeten weg of doorverwezen.

---

## De strategie in vier lagen

### Laag 1 — Lokale dominantie (je thuisbasis)

Dit is je makkelijkste en belangrijkste winst. In de Hoeksche Waard en Drechtsteden is de concurrentie laag en ben jij de echte lokale DJ. Hier ga je voor nummer 1.

Aanpak:
- Bestaande regiopaginas verdiepen met échte lokale details: feestlocaties bij naam noemen, dorpskernen, herkenbare zalen. Google en bezoekers belonen specifieke, echte content.
- Nieuwe paginas voor kernen die je nu mist maar wel draait: Oud-Beijerland, Strijen, Numansdorp als eigen pagina, plus Drechtsteden (Zwijndrecht, Papendrecht, Sliedrecht, Ridderkerk).
- Google Bedrijfsprofiel optimaliseren en koppelen (zie Laag 4).

### Laag 2 — Dienst-autoriteit (je geld-paginas)

Je vier dienstpaginas moeten de beste van Nederland worden op hun onderwerp. Niet langer per se, maar completer en concreter.

Aanpak:
- **Bruiloft** is je waardevolste. Maak die pagina het sterkst: per moment van de dag (ceremonie, diner, openingsdans, feest) een blok, echte voorbeelden, FAQ met schema.
- Voeg overal de FAQ-vragen toe als gestructureerde data (schema), zodat ze als uitklapbare vragen in Google verschijnen. Dat pakt extra ruimte in de zoekresultaten.
- Versterk elke dienstpagina met je USP-blok (DJ+MC, eigen licht/geluid, all-in prijs).

### Laag 3 — Content die de funnel vult (blogs)

Mensen die nog niet klaar zijn om te boeken, zoeken eerst ("wat kost een dj", "dj of band"). Die ving je nu niet. Met een handvol sterke artikelen trek je ze binnen en stuur je ze door naar je dienstpaginas.

Aanpak: 5-7 artikelen, gepland over de eerste maanden (zie content kalender in de spreadsheet). Elk artikel linkt intern door naar de juiste dienst- of prijspagina. Dit bouwt ook thematische autoriteit op, wat je dienstpaginas mee omhoog trekt.

### Laag 4 — Lokale signalen en vertrouwen (off-page)

Voor lokale zoekopdrachten kijkt Google sterk naar je Google Bedrijfsprofiel en reviews.

Aanpak:
- Google Bedrijfsprofiel compleet maken: categorieën, dienstgebieden (alle kernen), foto's, posts.
- Reviewcampagne: van 10 naar 30+ Google-reviews. Vraag na elk feest actief om een review met een directe link. Dit is een van de sterkste lokale rankingfactoren en het kost niets.
- Vermeldingen (NAP: naam, adres, telefoon consistent) op relevante platforms.

---

## Topic clusters: zo linkt alles samen

Google beloont sites die een onderwerp compleet afdekken en logisch intern linken. Structuur:

- **Bruiloft-cluster:** bruiloft-dj (hoofd) ← bruiloft-blogs (openingsdans, dj of band, ceremoniemuziek) ← bruiloft-regiopaginas. Alles linkt naar de hoofd-bruiloftpagina.
- **Regio-cluster:** /regios (overzicht) → hoofdregio's (Hoeksche Waard, Dordrecht) → losse kernen. Kernen linken omhoog naar hun regio en zijwaarts naar buurkernen.
- **Zakelijk-cluster:** zakelijk-dj ← personeelsfeest/jubileum/kerstfeest-secties.

Vuistregel: elke nieuwe pagina krijgt minstens 2-3 interne links vanuit verwante paginas, en linkt zelf naar de hoofdpagina van zijn cluster.

---

## Meten: weet of het werkt

Je hebt GA4 en GTM al draaien. Voeg toe en check maandelijks:

- **Google Search Console** is je belangrijkste bron. Hier zie je de échte zoekwoorden waarop je al vertoond wordt en op welke positie. Begin daar: de keywords waar je nu op positie 5-15 staat zijn je snelste winst (klein duwtje = pagina 1).
- Track in GA4 welke paginas boekingsaanvragen opleveren (contact, WhatsApp-klik, vragenlijst).
- Houd per kwartaal de posities van je P1-zoekwoorden bij.

De keyword-volumes in de spreadsheet zijn indicaties op basis van marktkennis, geen exacte tooldata. Search Console geeft je de echte cijfers van jóuw site. Gebruik die als waarheid.

---

## Realistische tijdlijn

- **Maand 1:** technische fixes (backup-subdomein, schema). Dit alleen al kan je hoofdsite merkbaar versterken.
- **Maand 1-2:** lokale paginas verdiepen + nieuwe kernen. Eerste rankingwinst lokaal.
- **Maand 2-4:** dienstpaginas versterken + eerste blogs. Long-tail boekingen komen binnen.
- **Maand 3-6:** content uitbouwen, reviewcampagne, autoriteit groeit. Hier komt de versnelling.
- **Maand 6+:** je staat #1 op het gros van je lokale/niche-woorden en top-3 op de middelzware. De zware landelijke termen blijven een lange adem, maar leveren via long-tail al boekingen.

SEO is een vliegwiel: de eerste maanden duwen, daarna versnelt het. "Tienvoudig" komt niet van één ingreep maar van consequent dit plan uitvoeren over alle paginas.

---

## Hoe Claude Code je dit laat uitvoeren (de "agents")

Je vroeg naar agents in Claude. Goed nieuws: Claude Code ondersteunt **subagents**, gespecialiseerde AI-assistenten met een eigen taak die je via de `/agents` command aanmaakt. In plaats van één algemene AI zet je een team van specialisten in, elk met eigen focus.

Voor jouw SEO betekent dat: je kunt agents opzetten voor technische SEO-audit, content-optimalisatie, schema-markup en lokale SEO, die parallel je site nalopen. Er bestaan zelfs kant-en-klare open-source SEO-subagent sets voor Claude Code die precies dit doen (technische audit, schema, lokale SEO, E-E-A-T).

In het aparte taken-bestand (`claude-code-taken.md`) staan de agent-definities en de concrete prompts klaar om te kopiëren naar Claude Code. Dat is je uitvoeringslaag: jij beschrijft, de agents bouwen.
