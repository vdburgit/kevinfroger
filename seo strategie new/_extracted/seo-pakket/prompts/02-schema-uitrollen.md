# Prompt 02 — Schema markup uitrollen

Concurrenten M Rental en Always Events missen dit. Met schema pak je extra ruimte in de zoekresultaten (uitklapbare FAQ-vragen, bedrijfsinfo). Kopieer naar Claude Code.

```
Gebruik de seo-schema agent.

Opdracht:
1. Maak één herbruikbaar schema-component in de Next.js app (bijv. een
   <JsonLd> component of een helper in lib/) zodat elke pagina makkelijk de juiste
   structured data meeneemt.
2. Voeg LocalBusiness/Service JSON-LD toe aan alle dienst- en regiopagina's.
   Gebruik de echte NAP-gegevens: DJ Kevin Froger, +31645251333,
   Booking@kevinfroger.nl, 's-Gravendeel / Hoeksche Waard / Zuid-Holland,
   rating 5.0 op Google.
3. Voeg FAQPage JSON-LD toe op elke pagina met een FAQ-blok. De regiopagina's
   hebben al FAQ-vragen in de tekst; koppel de schema aan exact diezelfde
   vragen en antwoorden.
4. Voeg BreadcrumbList toe op pagina's met broodkruimels.
5. Geef me per type (LocalBusiness, FAQPage, BreadcrumbList) een voorbeeld-snippet
   en bevestig dat het valide JSON-LD is. Verzin geen reviews of velden die niet
   kloppen.
6. Lever diffs.
```

Zie `referentie/schema-snippets.md` voor kant-en-klare voorbeelden die je erbij kunt geven.

Na livegang: test een paar pagina's met de Rich Results Test van Google.
