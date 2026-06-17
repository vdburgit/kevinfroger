# Claude Code taken — SEO kevinfroger.nl

Dit bestand bevat kant-en-klare taken en subagent-definities voor je Next.js repo. Werk van boven naar beneden: eerst de fixes, dan de paginas, dan content. Alles is geschreven om direct in Claude Code te plakken.

---

## Deel 1 — De subagents opzetten

Claude Code subagents zijn losse specialisten met een eigen taak. Je maakt ze aan via de `/agents` command, of door markdown-bestanden in `.claude/agents/` te zetten. Hieronder vier agents die je SEO-werk verdelen. Maak per stuk een bestand aan.

### `.claude/agents/seo-tech.md`
```markdown
---
name: seo-tech
description: Technische SEO-specialist. Controleert canonical tags, robots, sitemap, redirects, duplicate content, Core Web Vitals en metadata in de Next.js app. Inzetten bij technische audits en fixes.
tools: Read, Grep, Glob, Edit, Bash
---
Je bent een technische SEO-specialist voor een Next.js site (app router, Vercel).
Je taken: vind en meld duplicate content, ontbrekende of foute canonical tags,
ontbrekende metadata, problemen met sitemap.xml en robots.txt, en redirect-issues.
Werk altijd eerst read-only en lever een lijst van bevindingen met bestandspad en
ernst (kritiek/belangrijk/klein). Pas pas iets aan na akkoord. Nederlandse output.
```

### `.claude/agents/seo-content.md`
```markdown
---
name: seo-content
description: Content- en on-page SEO-specialist. Optimaliseert titles, H1's, koppen, tekst en interne links per pagina rond één primair zoekwoord. Inzetten bij het verbeteren van bestaande paginas.
tools: Read, Grep, Glob, Edit
---
Je bent on-page SEO-specialist. Per pagina werk je rond ÉÉN primair zoekwoord.
Regels: title onder 60 tekens met zoekwoord vooraan, één H1 met het zoekwoord,
logische H2/H3, natuurlijke tekst (geen keyword stuffing), minstens 2-3 interne
links naar verwante paginas. Schrijfstijl: informeel Nederlands, korte zinnen,
direct, geen holle marketingtaal, geen lange streepjes, geen "ontzorgen".
Lever per pagina een diff-voorstel. Nederlandse output.
```

### `.claude/agents/seo-schema.md`
```markdown
---
name: seo-schema
description: Structured-data specialist. Genereert en valideert JSON-LD schema (LocalBusiness, Service, FAQPage, BreadcrumbList) voor de Next.js paginas. Inzetten voor rich results.
tools: Read, Grep, Glob, Edit
---
Je bent specialist structured data. Je genereert valide JSON-LD voor een lokale
DJ-dienst. Gebruik LocalBusiness/Service op dienst- en regiopaginas, FAQPage waar
FAQ-blokken staan, BreadcrumbList op paginas met broodkruimels. Gebruik echte NAP:
naam DJ Kevin Froger, telefoon +31645251333, e-mail Booking@kevinfroger.nl,
regio Hoeksche Waard / Zuid-Holland. Lever per pagina een component-snippet dat in
de Next.js head/metadata past. Nederlandse output.
```

### `.claude/agents/seo-local.md`
```markdown
---
name: seo-local
description: Lokale SEO-specialist. Bouwt en verdiept regio/plaats-paginas met echte lokale details en correcte interne links binnen het regio-cluster. Inzetten voor lokale dekking.
tools: Read, Grep, Glob, Edit, WebSearch
---
Je bent lokale SEO-specialist. Je bouwt plaats-paginas voor een DJ in Zuid-Holland.
Elke pagina: uniek (geen gekopieerde tekst tussen plaatsen), noemt echte kernen,
buurtplaatsen en gangbare feestlocaties, heeft een lokale FAQ, en linkt omhoog naar
de regiopagina + zijwaarts naar 2-3 buurplaatsen. Vermijd dunne doorzichtige
template-content; maak elke pagina echt anders. Informeel Nederlands. Nederlandse output.
```

Inzetten doe je zo in een Claude Code sessie:
```
> gebruik de seo-tech agent om de hele repo te auditen op duplicate content en canonical-problemen
```
Voor een volledige parallelle audit kun je in één bericht meerdere agents aanroepen, dan werken ze tegelijk.

---

## Deel 2 — Taken in volgorde

### TAAK 1 (kritiek) — Backup-subdomein en oude paginas

```
Context: Google heeft backup.kevinfroger.nl geïndexeerd met een oude kopie van de
site. Ook staan er oude plaats-paginas in een verouderde structuur (bijv.
/friesland/bollingawier/, /zuid-holland/den-bommel/) met oude content. Dit
veroorzaakt duplicate content en verzwakt de hoofdsite.

Opdracht:
1. Zoek in de repo en hostingconfig (vercel.json, next.config, eventuele
   middleware) waar het backup-subdomein vandaan komt.
2. Stel voor hoe we backup.kevinfroger.nl uit Google halen: ofwel het subdomein
   offline halen, ofwel een robots-blokkade plus noindex, plus zo nodig een
   301-redirect naar de hoofddomein-equivalent. Geef de concrete configuratie.
3. Inventariseer of de oude plaats-URL-structuur (/provincie/plaats/) nog live is.
   Zo ja: stel 301-redirects op naar de nieuwe /dj-boeken-[plaats] equivalenten,
   of naar /regios als er geen equivalent is.
4. Lever de wijzigingen als concrete diffs. Voer niets uit zonder mijn akkoord.
```

### TAAK 2 (kritiek) — Sitemap en robots controleren

```
Opdracht:
1. Controleer of er een dynamische sitemap.xml is (app/sitemap.ts of route). Zo
   niet, maak er een die ALLE live paginas bevat (diensten, regio's, blogs) en
   automatisch meegroeit.
2. Controleer robots.txt / app/robots.ts: hoofdsite volledig crawlbaar, backup-
   subdomein geblokkeerd, sitemap-URL erin vermeld.
3. Zorg dat elke pagina exact één self-referencing canonical heeft. Meld paginas
   waar die ontbreekt of fout staat.
Lever diffs.
```

### TAAK 3 (belangrijk) — Schema markup uitrollen

```
Gebruik de seo-schema agent.

Opdracht:
1. Voeg LocalBusiness/Service JSON-LD toe aan alle dienst- en regiopaginas.
2. Voeg FAQPage JSON-LD toe op elke pagina met een FAQ-blok (de regiopaginas
   hebben die al in de tekst — koppel de schema aan diezelfde vragen/antwoorden).
3. Voeg BreadcrumbList toe waar broodkruimels staan.
4. Maak één herbruikbaar schema-component zodat nieuwe paginas het makkelijk
   meenemen.
5. Geef me per type een voorbeeld-snippet en bevestig dat het valide JSON-LD is.
Lever diffs.
```

### TAAK 4 (belangrijk) — Bruiloftpagina naar topniveau

```
Gebruik de seo-content agent. Primair zoekwoord: "bruiloft dj huren".

Opdracht: herschrijf en verdiep /bruiloft-dj zodat het de meest complete
bruiloft-DJ pagina in de regio wordt. Houd mijn stijl aan: informeel, kort,
direct, geen holle taal, geen lange streepjes.
Structuur:
- H1 met "bruiloft dj" vooraan
- Blok per moment: ceremonie, diner, openingsdans, feestavond (elk concreet)
- USP-blok: DJ+MC in één, eigen licht en geluid, all-in prijs zonder verrassingen
- Korte echte voorbeelden / situaties
- FAQ-blok (5 vragen) — ook geschikt voor FAQPage schema
- Interne links naar /prijzen, /reviews, /werkwijze en 2 bruiloft-regiopaginas
Lever als diff.
```

### TAAK 5 (belangrijk) — Lokale kernen verdiepen + nieuwe paginas

```
Gebruik de seo-local agent.

Deel A — verdiep bestaande: neem /dj-boeken-hoeksche-waard en /dj-boeken-dordrecht
en maak ze concreter en unieker (echte locaties, kernen, situaties). Geen
template-gevoel.

Deel B — nieuwe paginas, elk uniek, met eigen lokale invalshoek:
- /dj-boeken-oud-beijerland
- /dj-boeken-strijen
- /dj-boeken-numansdorp
- /dj-boeken-zwijndrecht
- /dj-boeken-papendrecht
- /dj-boeken-sliedrecht
- /dj-boeken-ridderkerk
Elke pagina: primair zoekwoord "dj [plaats]", lokale FAQ, links omhoog naar de
regio + zijwaarts naar 2 buurplaatsen, schema via het component uit taak 3.
Zet ze ook in de sitemap. Lever per pagina een diff.
```

### TAAK 6 (groei) — Blog opzetten + eerste artikelen

```
Gebruik de seo-content agent.

Deel A: zet een blogstructuur op in de app (/blog overzicht + /blog/[slug]),
met metadata, canonical en schema (Article + Breadcrumb). Neem blogs mee in de
sitemap.

Deel B: schrijf de eerste 3 artikelen, mijn stijl, elk met intern doorlinken naar
de juiste dienst/prijspagina:
1. /blog/wat-kost-dj-bruiloft  — primair: "wat kost een dj bruiloft" → link /prijzen
2. /blog/dj-of-band-bruiloft   — primair: "dj of band bruiloft" → link /bruiloft-dj
3. /blog/openingsdans-nummers  — primair: "dj openingsdans" → link /bruiloft-dj
Per artikel: pakkende title onder 60 tekens, één H1, H2-structuur, FAQ waar logisch.
Lever per artikel een diff.
```

### TAAK 7 (doorlopend) — On-page check overige dienstpaginas

```
Gebruik de seo-content agent. Loop /zakelijk-dj, /verjaardag-dj, /festival-dj en
/dj-en-mc na. Per pagina: title/H1 rond het primaire zoekwoord, ontbrekende
synoniem-secties toevoegen (zie keyword-spreadsheet, kolom Cluster), interne links
versterken, USP-blok consistent. Lever per pagina een diff.
```

---

## Deel 3 — Werkvolgorde en tips

1. Doe Taak 1 en 2 eerst en apart. Dit zijn de fixes die je hele site versterken; vermeng ze niet met contentwerk.
2. Laat na elke taak Claude Code de wijziging in een aparte git-branch zetten zodat je per onderdeel kunt reviewen en via Vercel een preview krijgt.
3. Na livegang van de fixes: dien je sitemap (opnieuw) in via Google Search Console en vraag herindexering aan voor de gewijzigde paginas.
4. Gebruik Search Console als waarheid voor welke zoekwoorden je volgende prioriteit zijn: de woorden waar je op positie 5-15 staat zijn je snelste winst.
5. Werk de keyword-spreadsheet bij als statuslijst: zet paginas op "klaar" zodra ze live zijn.

Kant-en-klare open-source SEO-subagents voor Claude Code bestaan ook (volledige sets met technische audit, schema, lokale SEO en E-E-A-T agents die parallel draaien). Als je die wilt gebruiken in plaats van de agents hierboven, zoek in Claude Code naar beschikbare SEO-subagent skills; de bovenstaande zijn bewust simpel en op jouw site toegesneden.
