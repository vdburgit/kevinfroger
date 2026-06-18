# CLAUDE.md — kevinfroger.nl

Dit bestand geeft Claude Code de context van dit project. Lees dit altijd eerst.

## Wat dit project is

De website van DJ Kevin Froger (kevinfroger.nl). Kevin is een zelfstandige DJ en MC uit 's-Gravendeel (Hoeksche Waard, Zuid-Holland) met 15+ jaar ervaring. Hij draait bruiloften, bedrijfsfeesten, verjaardagen en festivals door heel Nederland, met de meeste boekingen in de Hoeksche Waard, Drechtsteden, Betuwe en Bommelerwaard.

## Tech stack (LET OP: geen Next.js, geen Vercel)

- **TanStack Start** (op Vite) + React + Tailwind CSS. File-based routing: elke pagina is een bestand in `src/routes/*.tsx` (puntjes in de bestandsnaam = padscheiding, bijv. `blog.$slug.tsx` -> `/blog/:slug`).
- **Hosting: GitHub Pages**, custom domein via `CNAME` (kevinfroger.nl). Versiebeheer via GitHub.
- **Deploy**: automatisch via `.github/workflows/deploy.yml` op push naar `main`: `npm run build` -> `npm run prerender` (headless browser rendert elke route uit `public/sitemap.xml` naar statische HTML met de juiste meta/JSON-LD/content) -> publiceren naar Pages. Er is dus geen serverruntime; alles is statisch.
- `netlify.toml` (indien aanwezig) is dode config en wordt door GitHub Pages genegeerd. Niet op vertrouwen.
- Google Tag Manager (GTM) + GA4 aanwezig (zie `src/lib/track.ts`).
- Merkkleuren: oranje #E5512C en blauw #1E47A8, in `src/styles.css` als oklch-CSS-variabelen (`--primary`, `--secondary`). Gebruik de Tailwind-tokens (`bg-primary`, `text-secondary`), niet losse hexwaarden.

## Het doel

Zo hoog mogelijk in Google ranken op alle relevante DJ-zoekwoorden, met focus op lokale dominantie (Hoeksche Waard + Drechtsteden) en de waardevolle bruiloft- en zakelijke markt. De volledige strategie staat in de mega keyword-spreadsheet en het SEO-pakket.

## Schrijfstijl (ALTIJD aanhouden in alle teksten)

- Informeel Nederlands, korte zinnen, direct.
- Geen holle marketingclichés ("ontzorgen", "de magie van", "onvergetelijke momenten").
- Geen em-dashes (lange streepjes). Gebruik gewone komma's of punten.
- Geen verzonnen feiten. Niets claimen wat niet klopt.
- Spreek de lezer aan met "je" en "jullie" (bij bruiloften vaak "jullie").
- Concreet boven abstract: noem echte momenten, locaties, situaties.

## Kernpunten van Kevin (USP's, gebruik deze consistent)

1. DJ én MC in één persoon. Geen losse presentator nodig.
2. Eigen licht en geluid, complete show. Geen aparte leverancier.
3. All-in prijs, helder vooraf, geen verrassingen achteraf.
4. Je weet wie er draait: Kevin zelf. Geen onbekende invaller, geen tussenpersoon.
5. 15+ jaar ervaring, 5.0 op Google, gedraaid voor o.a. Heineken, KPN, Feyenoord.
6. Lokaal bekend in de Hoeksche Waard, veel boekingen via via.

Echte gegevens (één bron: `src/lib/seo.ts`): +31645251333, Booking@kevinfroger.nl, 5.0 op Google met 10 reviews (`REVIEW_RATING` / `REVIEW_COUNT`). Verzin nooit een ander aantal reviews of een tarief.

## SEO-regels (ALTIJD aanhouden)

- Eén primair zoekwoord per pagina. Nooit twee pagina's op hetzelfde woord (kannibalisatie).
- Title onder 60 tekens, primair zoekwoord vooraan.
- Eén H1 per pagina, met het primaire zoekwoord erin.
- Logische H2/H3-structuur, natuurlijke tekst, geen keyword stuffing.
- Elke pagina: minstens 2-3 interne links naar verwante pagina's binnen hetzelfde cluster.
- Self-referencing canonical op elke pagina.
- Schema markup waar relevant (LocalBusiness/Service, FAQPage, BreadcrumbList, Article).
- Meta-description ingevuld, met zoekwoord en een reden om te klikken.

## Hoe SEO technisch geregeld is in deze repo (gebruik deze helpers, bouw niets dubbel)

Alles loopt via `src/lib/seo.ts`:
- `buildSeo({ title, description, path, jsonLd, ... })` -> geef dit terug uit de `head()` van een route. Zet automatisch self-referencing canonical, OG- en Twitter-tags, en JSON-LD scripttags. Gebruik dit op ELKE pagina.
- `service({...})` -> Service-schema, standaard met `aggregateRating()` (echte 5.0/10). Verwijst naar het centrale `#business`-knooppunt.
- `faqPage(items)` -> FAQPage JSON-LD. Voed met DEZELFDE array als het zichtbare `<Faq items={...} />` component (of de `faq`-prop van `ContentPage`), anders matchen markup en zichtbare tekst niet (Google-vereiste).
- `breadcrumb([{name, path}, ...])` -> BreadcrumbList. Gebruik samen met de `<Breadcrumbs>`/layout-broodkruimels.
- `cityFaq(plaats)` -> herbruikbare 4-vragen-FAQ voor plaatspagina's.
- Het centrale LocalBusiness/Person-knooppunt (`@id` `${SITE_URL}/#business`) staat globaal in `src/routes/__root.tsx`. Andere schema's verwijzen ernaar; niet dupliceren.

Sitemap & redirects (GitHub Pages kan GEEN server-301):
- `public/sitemap.xml` is de canonieke lijst van indexeerbare URL's en stuurt de prerender aan. Voeg nieuwe pagina's hier toe, verwijder oude.
- Oude/dode URL's worden afgevangen met statische redirect-stubs in `public/<oud-pad>/index.html` (meta-refresh + canonical + JS `location.replace`), gegenereerd door `scripts/gen-redirects.js`. Google behandelt dit als een permanente redirect. Voeg nieuwe redirects toe in de `REDIRECTS`-map van dat script en draai het opnieuw.
- `public/robots.txt` staat crawl toe en vermeldt de sitemap; `/dj$` (privé-dashboard) is geblokkeerd.

## Clusters en hun hoofdpagina's

- Bruiloft: /bruiloft-dj (hoofd) + bruiloft-blogs + bruiloft-regiopaginas
- Zakelijk: /zakelijk-dj
- Feest: /verjaardag-dj
- Festival: /festival-dj
- USP: /dj-en-mc
- Regio: /regios (overzicht) -> /dj-boeken-[plaats]
- Prijs: /prijzen

Interne link-regel: elke pagina linkt naar de hoofdpagina van zijn cluster, en regiopagina's linken naar 2-3 buurplaatsen.

## Concurrenten om voor te blijven

- M Rental (Oud-Beijerland): verhuurbedrijf dat DJ's erbij doet. Versla op DJ-specialisme + plaatspagina's + DJ+MC.
- Always Events (Oud-Beijerland): nieuw event-bureau dat DJ's inkoopt. Versla op echte DJ-autoriteit + technische SEO.
- Portals (The DJ Company, Trouwen.nl): versla op echte persoon + lokale binding + diepte.

## Werkwijze voor Claude Code

- Werk per taak in een aparte git-branch zodat alles per onderdeel te reviewen is.
- Lever eerst een voorstel/diff, voer niets ongevraagd door. Verwijder nooit pagina's zonder dat eerst een redirect-stub staat.
- Gebruik de juiste subagent voor de taak (zie `.claude/agents/`: seo-tech, seo-content, seo-local, seo-schema).
- Output en commit-berichten in het Nederlands.
- Raak bij SEO-werk het visuele design/CSS/layout niet aan, tenzij daar expliciet om gevraagd wordt.

## Bekend technisch aandachtspunt

Er stond een backup-subdomein (backup.kevinfroger.nl) met een oude kopie van de site in Google. Dat wordt NIET door deze repo geserveerd maar door een DNS-record in Cloudflare, en moet daar verwijderd worden (plus een verwijderverzoek in Google Search Console). De oude provincie-/dienst-URL's op het hoofddomein zijn al afgevangen met redirect-stubs (zie hierboven).
