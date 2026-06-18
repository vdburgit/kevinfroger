# SEO-pakket kevinfroger.nl

Alles wat je nodig hebt om kevinfroger.nl naar de top te brengen, klaar om uit te voeren met Claude Code. Dit pakket is je complete uitvoeringsdraaiboek. Werk de stappen van boven naar beneden af.

## Wat zit erin

```
seo-pakket/
├── README.md                      <- dit bestand, je startpunt
├── CLAUDE.md                      <- in de root van je repo plaatsen (projectcontext voor Claude Code)
├── .claude/agents/                <- 4 SEO-subagents, in je repo onder .claude/agents/ zetten
│   ├── seo-tech.md
│   ├── seo-content.md
│   ├── seo-schema.md
│   └── seo-local.md
├── prompts/
│   ├── 00-stappenplan.md          <- de volgorde: welke prompt wanneer
│   ├── 01-technische-fixes.md     <- backup-subdomein, sitemap, robots, canonicals
│   ├── 02-schema-uitrollen.md     <- LocalBusiness, FAQ, Breadcrumb schema
│   ├── 03-bruiloftpagina.md       <- je waardevolste pagina naar topniveau
│   ├── 04-oud-beijerland.md       <- nieuwe pagina (verslaat M Rental + Always Events lokaal)
│   ├── 05-dj-en-mc.md             <- je unieke verkooppunt sterk neerzetten
│   ├── 06-nieuwe-regiopaginas.md  <- HW-kernen + Drechtsteden
│   ├── 07-overige-diensten.md     <- zakelijk, verjaardag, festival
│   ├── 08-blogs.md                <- vraag-keywords als content
│   └── 09-prijspagina.md          <- transparantie als wapen tegen concurrenten
└── referentie/
    ├── schema-snippets.md         <- kant-en-klare JSON-LD voorbeelden
    ├── stijlgids.md               <- jouw schrijfstijl, voor consistente teksten
    └── meta-teksten.md            <- titles + descriptions per pagina

Losse bestanden die je al hebt (horen erbij):
- mega-keyword-strategie-kevinfroger.xlsx   <- 2170 keywords, 8 tabbladen (tab 7 = concurrenten)
- concurrentieanalyse.md                     <- 6 concurrenten volledig uitgewerkt + prijsbenchmark
```

## Hoe je dit gebruikt (kort)

1. Zet `CLAUDE.md` in de root van je repo. Claude Code leest dit automatisch en kent dan je project, stijl en SEO-regels.
2. Zet de 4 agent-bestanden in `.claude/agents/` in je repo.
3. Open `prompts/00-stappenplan.md`. Dat vertelt je de volgorde.
4. Per stap: open het promptbestand, kopieer de prompt naar Claude Code, review de voorgestelde wijziging, en laat Claude het via een git-branch doorvoeren.
5. Houd de mega keyword-spreadsheet ernaast als naslag voor welk zoekwoord bij welke pagina hoort (tab 5 en 7).

## De volgorde in één oogopslag

| Fase | Prompt | Wat | Waarom eerst/later |
|---|---|---|---|
| 1 | 01-technische-fixes | Backup-subdomein, sitemap, robots, canonicals | Grootste lek dichten, versterkt alles |
| 2 | 02-schema-uitrollen | Schema markup | Rich results, concurrenten missen dit |
| 3 | 03-bruiloftpagina | Bruiloftpagina top maken | Je waardevolste pagina |
| 3 | 04-oud-beijerland | Nieuwe lokale pagina | Verslaat M Rental + Always Events thuis |
| 3 | 05-dj-en-mc | USP sterk neerzetten | Je grootste onderscheid |
| 4 | 06-nieuwe-regiopaginas | HW-kernen + Drechtsteden | Lokale dominantie |
| 4 | 07-overige-diensten | Zakelijk, verjaardag, festival | Dienst-autoriteit |
| 5 | 08-blogs | Vraag-keywords als blog | Funnel vullen |
| 5 | 09-prijspagina | Prijs-transparantie | Vertrouwen winnen |
| doorlopend | - | Reviews, Search Console bijsturen | Vliegwiel |

## Belangrijk

- De volumes in de keyword-spreadsheet zijn onderbouwde inschattingen, geen exacte tooldata. Zodra je Google Search Console koppelt, leg je echte cijfers ernaast. Begin dan met de zoekwoorden waar je op positie 5-15 staat: dat is je snelste winst.
- "Nummer 1 op alles" kan niemand garanderen. Wel haalbaar: #1 op je lokale en niche-woorden, top-3 op middelzwaar, long-tail winst op zwaar. Dit pakket is daarop gebouwd.
- Eén primair zoekwoord per pagina. Geen twee pagina's die op hetzelfde woord mikken (kannibalisatie). Tab 5 van de spreadsheet is daarvoor je waarheid.
