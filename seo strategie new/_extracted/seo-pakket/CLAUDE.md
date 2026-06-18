# CLAUDE.md — kevinfroger.nl

Dit bestand geeft Claude Code de context van dit project. Lees dit altijd eerst.

## Wat dit project is

De website van DJ Kevin Froger (kevinfroger.nl). Kevin is een zelfstandige DJ en MC uit 's-Gravendeel (Hoeksche Waard, Zuid-Holland) met 15+ jaar ervaring. Hij draait bruiloften, bedrijfsfeesten, verjaardagen en festivals door heel Nederland, met de meeste boekingen in de Hoeksche Waard, Drechtsteden, Betuwe en Bommelerwaard.

## Tech stack

- Next.js (app router) + Tailwind CSS
- Hosting op Vercel, versiebeheer via GitHub
- Google Tag Manager (GTM) + GA4 aanwezig
- Merkkleuren: oranje #E5512C, inktblauw #0E1525

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

## SEO-regels (ALTIJD aanhouden)

- Eén primair zoekwoord per pagina. Nooit twee pagina's op hetzelfde woord (kannibalisatie).
- Title onder 60 tekens, primair zoekwoord vooraan.
- Eén H1 per pagina, met het primaire zoekwoord erin.
- Logische H2/H3-structuur, natuurlijke tekst, geen keyword stuffing.
- Elke pagina: minstens 2-3 interne links naar verwante pagina's binnen hetzelfde cluster.
- Self-referencing canonical op elke pagina.
- Schema markup waar relevant (LocalBusiness/Service, FAQPage, BreadcrumbList, Article).
- Meta-description ingevuld, met zoekwoord en een reden om te klikken.

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

- Werk per taak in een aparte git-branch zodat alles per onderdeel te reviewen is en Vercel een preview geeft.
- Lever eerst een voorstel/diff, voer niets ongevraagd door.
- Gebruik de juiste subagent voor de taak (zie .claude/agents/).
- Output en commit-berichten in het Nederlands.

## Bekend technisch aandachtspunt

Er staat een backup-subdomein (backup.kevinfroger.nl) met een oude kopie van de site in Google, plus mogelijk oude plaats-URL's in een verouderde structuur. Dit veroorzaakt duplicate content. Dit eerst oplossen (zie prompts/01-technische-fixes.md).
