# SEO-plan kevinfroger.nl

## 0. Cruciale context vooraf (lees eerst)

De brief beschrijft de **live website-bouwersite** op kevinfroger.nl. Dit project in deze repo is iets anders: het is de **nieuwe TanStack Start vervangingssite** die in eerdere sessies is gebouwd om de live site te vervangen. De code hier is bewerkbaar, geen hosted bouwer.

Gevolg: een aantal probleempunten uit de brief (canonical-naar-home, dunne provinciepagina's, propvolle meta keywords, dubbele `/dj-boeken-noord-brabant-2/`) **bestaan niet in dit project**. Die zitten in de huidige live versie en verdwijnen automatisch op het moment dat deze nieuwe site gedeployed wordt. Ze blijven wel relevant tot dat moment, dus ze staan in dit plan onder "Acties buiten de code".

Wat in dit project wel een groot probleem is: de huidige content (die uit een Lovable-generator komt en die ik in eerdere sessies grotendeels heb behouden) staat vol em-dashes, generieke "heel Nederland"-framing, geen Hoeksche Waard / Betuwe focus, en de reviews zijn placeholders. Plus de zakelijke gegevens kloppen niet (verkeerd e-mailadres, geen woonplaats in JSON-LD, geen 500+ bruiloften stat). Dat is wat we gaan oplossen.

---

## 1. Inventarisatie van de stack en huidige structuur

### Stack
- TanStack Start (React 19, Vite 7, Tailwind v4, nitro met preset `netlify`).
- SSR per pagina. Elke route definieert zijn eigen `head()` met meta, links en JSON-LD via de helper `src/lib/seo.ts` (`buildSeo`).
- Deploy target: Netlify. `netlify.toml` aanwezig met legacy redirects.

### Routes nu aanwezig (12 stuks, `src/routes/*.tsx`)

| URL | Bestand | Hoofdzoekwoord (volgens brief) | Status content |
|---|---|---|---|
| `/` | `index.tsx` | allround DJ | Goed visueel, copy moet om naar Hoeksche Waard + Betuwe focus, em-dashes weg |
| `/bruiloften` | `bruiloften.tsx` | bruiloft DJ | Copy "heel Nederland", moet om naar regio-focus |
| `/bedrijfsfeesten` | `bedrijfsfeesten.tsx` | bedrijfsfeest DJ / zakelijk DJ | Idem |
| `/festivals` | `festivals.tsx` | festival DJ | Idem. Brief vraagt om "60 minuten non-stop, power sets, crowd control, MC". Huidige content gaat over aprèsski + dance + mainstream. Aanscherpen. |
| `/privefeesten` | `privefeesten.tsx` | feest DJ / verjaardag DJ | Idem |
| `/biografie` | `biografie.tsx` | (geen) | Timeline mooi, "heel Nederland" eruit |
| `/werkwijze` | `werkwijze.tsx` | (geen) | Goed, em-dashes opschonen |
| `/prijzen` | `prijzen.tsx` | wat kost een DJ / betaalbare DJ huren | Drie pakketten Essential/Complete/Show. Positionering moet eerlijk en betaalbaar, niet goedkoopste. |
| `/reviews` | `reviews.tsx` | (geen) | **9 placeholder reviews** (Sanne & Tim, Heineken events, etc.) — niet echt. Vragen aan jou. |
| `/contact` | `contact.tsx` | (geen) | E-mail klopt niet, telefoon klopt |
| `/privacy` | `privacy.tsx` | (geen, noindex) | OK, e-mail moet om |
| `/algemene-voorwaarden` | `algemene-voorwaarden.tsx` | (geen, noindex) | OK |

### SEO-techniek per pagina (al goed, niet veranderen)
Elke route gebruikt `buildSeo({ title, description, path, image, jsonLd })` uit `src/lib/seo.ts`. Deze helper genereert:
- Unieke `<title>` en `<meta description>` per pagina.
- Zelfverwijzende `<link rel="canonical">` op basis van `path`.
- Volledig OG-blok: `og:title`, `og:description`, `og:url`, `og:type`, `og:locale=nl_NL`, `og:site_name`, `og:image` (absoluut), `og:image:width/height`.
- Twitter Card `summary_large_image` met eigen image.
- Optionele `noindex, nofollow` op privacy en voorwaarden.

In `__root.tsx` zit globale Organization + Person + WebSite JSON-LD. Per route komt daar Service/HowTo/BreadcrumbList/etc. bij. Geen propvolle `meta keywords`-tag aanwezig.

**Het canonical-naar-home probleem uit de brief bestaat in deze codebase niet.** Wel relevant voor de live site tot deze nieuwe versie deployed is.

### Sitemap en robots
- `public/sitemap.xml`: 12 entries, `<lastmod>2026-05-28</lastmod>`, prio's gezet. Goed.
- `public/robots.txt`: schoon, geen oude provincie-allowlist meer. Goed.
- `netlify.toml`: 301-redirects van oude slugs (`/bruiloft-dj` → `/bruiloften` etc.) en HTTPS/www-canonicalisatie. Goed.

---

## 2. Bevindingen, geordend op impact (wat er fout zit in dit project)

### Hoog (kritisch voor strategie en correctheid)

1. **Geo-framing klopt niet bij jouw strategie.** Op acht plaatsen in de code staat "heel Nederland" / "DJ Nederland" / `areaServed: Nederland`. Jouw thuisbasis (Hoeksche Waard / 's-Gravendeel) en groeigebied (Tiel / Betuwe) staan helemaal niet in de code. Locaties:
   - `src/routes/__root.tsx:88` — `address: { addressCountry: "NL" }` zonder locality/region.
   - `src/routes/__root.tsx:89` — `areaServed: { Country, name: "Nederland" }`.
   - `src/routes/__root.tsx:123` — title-default "Allround DJ Nederland".
   - `src/routes/index.tsx:30, 39, 184` — "in heel Nederland" + "door heel Nederland".
   - `src/routes/bruiloften.tsx:49` — "bruiloften door heel Nederland".
   - `src/routes/biografie.tsx:13, 26, 43, 57` — vier keer "heel Nederland".
   - `src/routes/bedrijfsfeesten.tsx:12` — title "Corporate event DJ Nederland".
   - `src/routes/privefeesten.tsx:13` — "in heel Nederland".
   - `src/routes/prijzen.tsx:47` — `areaServed: Nederland` in Service JSON-LD.
   - `src/components/SiteFooter.tsx:12, 40` — "allround DJ uit Nederland" + "Allround DJ Nederland".

2. **Zakelijke gegevens kloppen niet.**
   - **E-mail:** overal `info@kevinfroger.nl` (7 plekken). Brief zegt `Booking@kevinfroger.nl`. Locaties: `__root.tsx:84`, `contact.tsx:25, 64, 85`, `privacy.tsx:38, 44`, `SiteFooter.tsx:16`.
   - **Adres:** `__root.tsx:88` heeft alleen `addressCountry: NL`. Moet `'s-Gravendeel`, regio `Zuid-Holland` toevoegen.
   - **AggregateRating reviewCount:** `__root.tsx:94` heeft `"47"`. Dat is een gok van mij uit eerdere sessie, niet echt. Moet weg of vervangen door echt aantal.
   - **Stats homepage:** brief noemt "500+ bruiloften, 15+ jaar". De og-tag-oude-site zegt "1000+ events". In dit project staat alleen `15+ jaar` op de homepage. De `500+` stat ontbreekt. Brief eist gelijktrekking: kies 500+ en gebruik dat overal.

3. **Geen locatie- of werkgebied-pagina's.** Volgens architectuur uit brief horen er negen extra te zijn:
   - `/werkgebied/` (nieuwe regio-overzichtspagina) — ontbreekt.
   - `/dj-boeken-hoeksche-waard/` — ontbreekt.
   - `/dj-boeken-tiel/` — ontbreekt.
   - `/dj-boeken-betuwe/` — ontbreekt.
   - `/dj-boeken-gorinchem/` — ontbreekt.
   - `/dj-boeken-culemborg/` — ontbreekt.
   - `/dj-boeken-geldermalsen/` — ontbreekt.
   - `/dj-boeken-zaltbommel/` — ontbreekt.
   - `/dj-boeken-dordrecht/` — ontbreekt.

4. **Reviews op `/reviews` zijn placeholders.** Negen quotes met namen als "Sanne & Tim", "Mark van der Berg", "Heineken events", "Jumbo HQ". Niet echt afkomstig van klanten. Voor SEO van een DJ is een echte review-pagina belangrijk. Twee opties:
   - Echte reviews aanleveren (jij plakt Google-citaten of geeft mij toestemming).
   - Reviews-pagina degraderen tot redirect naar Google Business-profiel of een nette "Lees alle reviews op Google" CTA met aggregate count.

### Middel

5. **Em-dashes overal.** 76 voorkomens van `—` over 21 bestanden. De schrijfregels uit de brief verbieden em-dashes in alle Nederlandse teksten. Voorbeelden uit copy: "Van sfeer tot keihard, altijd raak", "altijd direct contact met mij — duidelijke communicatie", "Vraag direct een offerte aan — reactie binnen 24 uur". Alle moeten naar komma, punt, "en", "maar" of dubbele punt.

6. **Vage marketingtaal in bestaande copy.** Voorbeelden die de schrijfregels uit de brief schenden:
   - "Maak van jullie dag de avond om nooit te vergeten" (cliché).
   - "Een dansvloer die niet meer leeg gaat" (huidige homepage, sterke zin, mag blijven).
   - "Geen contactformulier-doolhof, geen ploeg van wisselende DJ's" (bruiloften, "het is niet X" constructie — mag niet).
   - "Crowd reading", "live mixing specialist", "high-energy sets" — Engelse termen die naar Nederlands kunnen.

7. **Festival-pagina past niet bij brief.** Huidige content focust op aprèsski / dance / mainstream. Brief beschrijft Festival DJ als "60 minuten non-stop, power sets, crowd control, MC". Andere invulling. Vragen aan jou welke richting.

8. **Prijzen-pagina positionering.** Brief zegt: "betaalbaar en eerlijk met all-in prijs, niet de goedkoopste. 'Goedkope DJ' mag één keer voorkomen, daarna doordraaien naar waarde." Huidige pagina noemt Essential v.a. €795, Complete v.a. €1295, Show op aanvraag. Prima startpunt, copy moet aangescherpt naar "eerlijk, all-in, niet de goedkoopste" framing.

### Laag (technische polish)

9. **Default title in `__root.tsx`** is "Allround DJ Nederland". Wordt overschreven per route, maar fallback moet ook regio-correct.
10. **Routes zonder trailing slash, brief gebruikt trailing slash** (`/dj-boeken-hoeksche-waard/`). TanStack-routes zijn zonder slash, Netlify normaliseert via redirect. Geen actie nodig maar wel bewust.
11. **Sitemap-lastmod** wordt na fase 2/3 weer fout (2026-05-28 is statisch). Op deploy bijwerken.

---

## 3. Stappenplan per fase

### Fase 2 — Technische fixes (na akkoord)

Volgorde van impact aanhouden zoals brief voorschrijft.

**Stap 2.1 — Canonical / unieke title-meta / meta keywords**
Niet nodig in dit project, al goed (zie sectie 1, "SEO-techniek per pagina"). Vermelden in plan, verder niets doen.

**Stap 2.2 — Geo-meta + LocalBusiness JSON-LD bijwerken**
- `src/routes/__root.tsx`: vervang `address` en `areaServed` blok door de exacte LocalBusiness uit de brief: `addressLocality: 's-Gravendeel'`, `addressRegion: 'Zuid-Holland'`, en `areaServed`-array met Hoeksche Waard, Dordrecht, Tiel, Betuwe, Gorinchem, Culemborg, Geldermalsen, Zaltbommel, Rivierenland.
- Verander `image` URL in JSON-LD van `dj-kevin-froger-bruiloft-scaled.jpeg` naar bij voorkeur een portret. Brief noemt `kevin-portrait.webp`. Die staat in `public/images/kevin-portrait.webp`. Bevestig dat dat het juiste portret is.
- `__root.tsx:84` e-mail naar `Booking@kevinfroger.nl`.

**Stap 2.3 — Contact-info overal naar `Booking@kevinfroger.nl`**
- `src/routes/contact.tsx:25, 64, 85` — meta + UI + mailto.
- `src/routes/privacy.tsx:38, 44` — body en privacy-contact.
- `src/components/SiteFooter.tsx:16` — footer-link.

**Stap 2.4 — Stats gelijktrekken op 500+ bruiloften, 15+ jaar**
- `src/routes/index.tsx`: in de "Over Kevin" stat-grid (regel ~192) staat nu `15+ / 100% / 5.0`. Wijzig naar `500+ / 15+ / 5.0` met labels `Bruiloften` / `Jaar ervaring` / `Google reviews`.
- Marquee strip (`index.tsx:121`) — kan `★ 500+ bruiloften` toevoegen of `15+ jaar ervaring` vervangen. Voorstel: marquee items uitbreiden zodat 500+ erin staat.
- Biografie (`biografie.tsx`): voeg in de timeline `500+` als slot toe of in intro.

**Stap 2.5 — `reviewCount` in `aggregateRating`**
- Brief geeft geen getal. Voorstel: getal weg, of jij geeft me het echte Google-aantal. Tot dan: tijdelijk verwijderen om geen onjuiste rich snippet te triggeren. `ratingValue: 5.0` mag blijven als dat de werkelijke Google-rating is.

**Stap 2.6 — Em-dashes en en-dashes weg in alle Nederlandse copy**
Grep target: `src/routes/*.tsx`, `src/components/*.tsx`, `src/lib/seo.ts`, en MD-bestanden in `src/`. Vervangregels:
- Een em-dash met spaties eromheen (` — `) wordt komma of punt afhankelijk van context.
- Em-dash zonder spaties (woord—woord) wordt "en", "of", of een schuine streep.
- En-dashes idem.
Geen geautomatiseerde sed-replace (context is belangrijk), maar bestand-voor-bestand handmatig.

**Stap 2.7 — Dubbele en dunne provinciepagina's**
Niet aanwezig in dit project. Acties horen bij de live website-bouwer (zie sectie 5).

### Fase 3 — Structuur en teksten (na fase 2)

**Stap 3.1 — Werkgebied-pagina aanmaken**
Nieuwe route: `/werkgebied` (slug op te schrijven). Vertelt de drie pijlers in lopende tekst, met:
- Thuisbasis Hoeksche Waard en kernen.
- Groeigebied Betuwe / Rivierenland.
- Verbindingsroute A15.
- Geen opsomming-bullets met dorpsnamen. Plaatsen in zinnen.
- Kaart-component (optioneel, anders foto van regio).

**Stap 3.2 — Acht locatiepagina's**
Voor elk een eigen `src/routes/dj-boeken-<slug>.tsx`. Brief levert title en meta voor zeven daarvan, hier samengevat in een tabel die ik in fase 3 ga implementeren:

| Slug | Title | Meta description |
|---|---|---|
| `dj-boeken-hoeksche-waard` | `Bruiloft DJ Hoeksche Waard \| DJ Kevin Froger` (44) | `Op zoek naar een DJ in de Hoeksche Waard? Kevin uit 's-Gravendeel draait al jaren bruiloften en feesten in de regio. Check je datum.` (131) |
| `dj-boeken-tiel` | `Bruiloft DJ Tiel \| Ervaren trouw-DJ \| Kevin Froger` (50) | `Bruiloft of feest in Tiel of de Betuwe? Kevin draait jullie dag aan elkaar, van ceremonie tot de laatste plaat. Vraag een offerte aan.` (133) |
| `dj-boeken-betuwe` | `DJ huren in de Betuwe & Rivierenland \| Kevin Froger` (51) | `DJ nodig in de Betuwe? Van Tiel en Culemborg tot Geldermalsen en Zaltbommel. Allround DJ met licht en geluid. Check beschikbaarheid.` (130) |
| `dj-boeken-gorinchem` | `DJ Gorinchem huren \| Bruiloft & feest \| Froger` (46) | `Feest of bruiloft in Gorinchem? DJ Kevin Froger zorgt voor de juiste muziek en een volle dansvloer. Vraag vrijblijvend een offerte aan.` (134) |
| `dj-boeken-culemborg` | `DJ Culemborg huren voor feest of bruiloft \| Froger` (50) | `Feest of bruiloft in Culemborg? Kevin draait passend bij jouw gasten en houdt de vloer vol. Vraag vrijblijvend een offerte aan.` (126) |
| `dj-boeken-geldermalsen` | `DJ Geldermalsen & West Betuwe \| DJ Kevin Froger` (47) | `DJ huren in Geldermalsen of West Betuwe? Van bruiloft tot bedrijfsfeest, Kevin draait passend bij jouw gasten. Boek je datum vandaag.` (132) |
| `dj-boeken-zaltbommel` | `DJ Zaltbommel huren \| Bruiloft & feest \| Froger` (47) | `Bruiloft of feest in Zaltbommel of de Bommelerwaard? Kevin maakt er een avond van om niet te vergeten. Check snel je datum.` (122) |
| `dj-boeken-dordrecht` | `DJ Dordrecht huren \| Allround feest-DJ \| Froger` (47) | `DJ nodig in Dordrecht? Kevin uit het naburige 's-Gravendeel draait bruiloften en feesten door de hele regio. Vraag een offerte aan.` (130) |

Bodytekst voor elke pagina: 300–500 woorden, uniek per locatie, met:
- Concrete locatie-haakjes (locaties, kerken, partycentra, festivalterreinen die kloppen).
- Geen template-zin als "Wil jij een DJ boeken in [plaats]".
- Eén `h1`, twee tot vier `h2`'s.
- Interne link naar de juiste dienstpagina (bruiloften / privefeesten / bedrijfsfeesten) en de werkgebiedpagina.

**Stap 3.3 — Homepage en dienst-pagina copy aanscherpen op geo**
- Homepage hero blijft "VAN SFEER TOT KEIHARD" als merknaam-claim, maar onderstaande zin wordt geo-specifiek: "Allround DJ uit 's-Gravendeel. Thuis in de Hoeksche Waard, langs de A15 tot in de Betuwe, landelijk op aanvraag."
- "Over Kevin"-sectie krijgt thuisbasis-verhaal.
- Dienstpagina's behouden structuur, intro krijgt regio-anker.

**Stap 3.4 — Prijzen herschrijven**
Framing: "eerlijke all-in prijs voor DJ, licht en geluid, in plaats van losse posten en verrassingen achteraf". `Goedkope DJ` één keer, daarna naar waarde.
Title en meta uit brief: `Wat kost een DJ? Betaalbare DJ huren | Kevin Froger` (51) + meta (133).

**Stap 3.5 — Sitemap.xml uitbreiden met 9 nieuwe URL's**
- `/werkgebied`, `/dj-boeken-hoeksche-waard`, `/dj-boeken-tiel`, `/dj-boeken-betuwe`, `/dj-boeken-gorinchem`, `/dj-boeken-culemborg`, `/dj-boeken-geldermalsen`, `/dj-boeken-zaltbommel`, `/dj-boeken-dordrecht`.
- `<lastmod>` op opleverdag.

**Stap 3.6 — Footer linkblokken uitbreiden**
- Extra blok "Werkgebied" met de werkgebied-link en de drie of vier belangrijkste locatie-pagina's (Hoeksche Waard, Tiel, Betuwe, Dordrecht).

**Stap 3.7 — Festival-pagina herschrijven**
Op basis van jouw input: "60 minuten non-stop, power sets, crowd control, MC". Vragen bevestiging of dit klopt voordat ik herschrijf.

### Fase 4 — Controle

- `grep -rn "—" src/` op gewijzigde bestanden, uitkomst rapporteren. Doel: 0 in alle Nederlandse copy, alleen toegestaan in (1) styles.css comments en (2) niet-gewijzigde third-party files.
- `grep -rn "info@kevinfroger" src/` moet 0 zijn na fase 2.3.
- `grep -rn "heel Nederland" src/` moet 0 zijn na fase 2.2 en 3.3.
- `npm run build` moet groen blijven.
- Voor elk nieuw bestand: `curl localhost:8081/<slug>` HTTP 200, title-tag aanwezig, canonical klopt.

---

## 4. Open vragen voor jou (graag beantwoorden voor we fase 2 starten)

1. **Reviews-pagina.** Hou ik de placeholders (en zet ik er duidelijk bij dat ze illustratief zijn), vervang ik ze door echte Google-reviews die jij aanlevert, of redirect ik `/reviews` naar je Google Business-profiel?
2. **`reviewCount` voor AggregateRating.** Wat is jouw echte aantal Google-reviews op dit moment? Tot dan haal ik het uit de JSON-LD.
3. **`500+ bruiloften` overal toepassen?** Of liever "honderden bruiloften"? Brief zegt 500+, ik volg dat als je akkoord bent.
4. **Festival-pagina-richting.** Brief noemt "60 min non-stop power sets, crowd control, MC". Past dat bij wat je doet, of houd je de huidige aprèsski + dance + mainstream framing?
5. **`kevin-portrait.webp` in JSON-LD.** Mag ik dat portret als hoofdimage van de LocalBusiness gebruiken, of heb je liever een andere foto?
6. **E-mailadres `Booking@kevinfroger.nl`.** Klopt de hoofdletter B zoals brief voorschrijft, of moet het `booking@` worden? Hoofdletters in mailto's hebben geen functie maar wel een visuele uitstraling.
7. **Verjaardag-DJ slug.** Huidige slug is `/privefeesten`. Brief noemt geen specifieke slug voor verjaardag/feest DJ. Houden of omdopen naar `/feest-dj` of `/verjaardag-dj` (dan ook 301-redirect van /privefeesten regelen)?
8. **Werkgebied-pagina slug.** `/werkgebied`, `/regios`, of `/werkgebied-en-regios`?

---

## 5. Acties buiten de code (jij doet dit zelf of geeft me toegang)

Deze zaken kan ik niet vanuit deze repo oplossen, maar zijn wel nodig voor het complete SEO-plaatje:

1. **`backup.kevinfroger.nl` uit de index.** Optie A: `noindex` op het subdomein zetten via een metarobots-tag in de huidige builder, of een `X-Robots-Tag: noindex` HTTP-header. Optie B: het subdomein offline halen. Daarna in Google Search Console handmatig URL-removal vragen.
2. **301-redirect van backup.kevinfroger.nl naar kevinfroger.nl** zodra deze nieuwe site live staat. Op DNS/hosting niveau in te stellen.
3. **Huidige live-site (de website-bouwer kevinfroger.nl).** Pas op het moment dat deze nieuwe site live gaat moet de oude vervangen worden. Tot dan blijven de live problemen uit de brief bestaan (canonical-naar-home, dunne provinciepagina's, `/dj-boeken-noord-brabant-2/` duplicaat, Noord-Brabant-kopieerfout, propvolle `meta keywords`). Niet in dit project op te lossen.
4. **Google Search Console.** Na deploy de nieuwe sitemap indienen en een crawl forceren voor de nieuwe locatiepagina's.
5. **Google Business Profile.** Vestigingsplaats `'s-Gravendeel`, service-area: Hoeksche Waard + Betuwe. Categorie "Disc jockey". Werkuren, telefoon en site-URL invullen.

---

## 6. Verwachte deliverables na fase 2 en 3

- 9 nieuwe routes in `src/routes/`.
- Aangepaste copy in 12 bestaande routes en 2 componenten.
- Bijgewerkte LocalBusiness JSON-LD in `__root.tsx`.
- Geüpdate sitemap.xml met 21 URL's totaal.
- Uitgebreide footer.
- Geen em-dashes, geen "info@", geen "heel Nederland", geen `reviewCount: 47`.
- Build groen.

---

## 7. Wachten op akkoord

**Geen wijzigingen tot je akkoord hebt gegeven op:**
1. Dit plan in zijn geheel (richting + scope).
2. De 8 open vragen in sectie 4.

Reageer met "akkoord" plus antwoorden op de open vragen, dan start ik fase 2.
