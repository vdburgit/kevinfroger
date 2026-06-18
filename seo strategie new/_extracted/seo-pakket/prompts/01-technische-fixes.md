# Prompt 01 — Technische fixes

Twee taken. Doe ze achter elkaar, elk in een eigen branch. Kopieer per taak het blok naar Claude Code.

---

## Taak 1A — Backup-subdomein en oude pagina's

```
Gebruik de seo-tech agent.

Context: Google heeft backup.kevinfroger.nl geïndexeerd met een oude kopie van de
site. Mogelijk staan er ook oude plaats-pagina's in een verouderde structuur
(bijv. /friesland/bollingawier/, /zuid-holland/den-bommel/) met oude content. Dit
veroorzaakt duplicate content en verzwakt de hoofdsite. Dit is de hoogste prioriteit.

Opdracht:
1. Zoek in de repo en hostingconfig (vercel.json, next.config.js, eventuele
   middleware.ts) waar het backup-subdomein vandaan komt.
2. Stel concreet voor hoe we backup.kevinfroger.nl uit Google halen: ofwel het
   subdomein offline halen, ofwel een robots-blokkade plus noindex header, plus
   zo nodig een 301-redirect naar het hoofddomein-equivalent. Geef de exacte
   configuratie die nodig is.
3. Inventariseer of de oude plaats-URL-structuur (/provincie/plaats/) nog live is.
   Zo ja: stel 301-redirects op naar de nieuwe /dj-boeken-[plaats] equivalenten,
   of naar /regios als er geen equivalent bestaat.
4. Lever alles als concrete diffs. Voer niets uit zonder mijn akkoord.
```

---

## Taak 1B — Sitemap, robots en canonicals

```
Gebruik de seo-tech agent.

Opdracht:
1. Controleer of er een dynamische sitemap is (app/sitemap.ts of een route). Zo
   niet, maak er een die ALLE live pagina's bevat (diensten, regio's, blogs) en
   automatisch meegroeit als ik pagina's toevoeg.
2. Controleer robots (app/robots.ts of robots.txt): hoofdsite volledig crawlbaar,
   backup-subdomein geblokkeerd, sitemap-URL erin vermeld.
3. Controleer dat elke pagina exact één self-referencing canonical heeft. Meld
   pagina's waar die ontbreekt, fout staat, of naar de homepage wijst in plaats
   van naar zichzelf.
4. Lever diffs.
```

Na livegang: dien de sitemap (opnieuw) in via Google Search Console.
