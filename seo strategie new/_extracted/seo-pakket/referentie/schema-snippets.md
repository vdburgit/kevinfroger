# Schema-snippets (referentie)

Kant-en-klare JSON-LD voorbeelden voor kevinfroger.nl. Geef deze mee aan de seo-schema agent of gebruik ze direct. Vul plaatsspecifieke velden per pagina aan.

## LocalBusiness (op dienst- en regiopagina's)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://kevinfroger.nl/#business",
  "name": "DJ Kevin Froger",
  "description": "Allround DJ en MC voor bruiloften, bedrijfsfeesten, verjaardagen en festivals. Eigen licht en geluid, all-in.",
  "url": "https://kevinfroger.nl",
  "telephone": "+31645251333",
  "email": "Booking@kevinfroger.nl",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "'s-Gravendeel",
    "addressRegion": "Zuid-Holland",
    "addressCountry": "NL"
  },
  "areaServed": [
    { "@type": "Place", "name": "Hoeksche Waard" },
    { "@type": "Place", "name": "Drechtsteden" },
    { "@type": "Place", "name": "Zuid-Holland" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "ratingCount": "10"
  }
}
```

Let op: pas ratingCount aan naar het echte aantal reviews. Verzin geen aantallen. Update dit naarmate je reviews groeien.

## Service (specifieker, per dienst)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Bruiloft DJ",
  "provider": { "@id": "https://kevinfroger.nl/#business" },
  "areaServed": { "@type": "Place", "name": "Nederland" },
  "description": "Bruiloft DJ en MC in één, van ceremonie tot feestavond. Eigen licht en geluid."
}
```

## FAQPage (op pagina's met FAQ-blok)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kom je met eigen licht en geluid?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, ik draai met een complete set. Licht en geluid neem ik zelf mee en stem ik af op de ruimte, dus op de locatie hoef je daar niets voor te regelen."
      }
    },
    {
      "@type": "Question",
      "name": "Ben je ook MC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Ik draai de muziek en pak zelf de microfoon voor aankondigingen, speeches en het inleiden van de dans. Je hebt geen losse presentator nodig."
      }
    }
  ]
}
```

Belangrijke regel: de vragen en antwoorden in de schema moeten EXACT overeenkomen met wat zichtbaar op de pagina staat. Anders kan Google het negeren of als misleidend zien.

## BreadcrumbList (op pagina's met broodkruimels)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kevinfroger.nl/" },
    { "@type": "ListItem", "position": 2, "name": "Werkgebied", "item": "https://kevinfroger.nl/regios" },
    { "@type": "ListItem", "position": 3, "name": "Oud-Beijerland" }
  ]
}
```

## Article (op blogs)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Wat kost een DJ voor je bruiloft?",
  "author": { "@type": "Person", "name": "Kevin Froger" },
  "publisher": { "@id": "https://kevinfroger.nl/#business" },
  "datePublished": "2026-06-17",
  "mainEntityOfPage": "https://kevinfroger.nl/blog/wat-kost-dj-bruiloft"
}
```

## Implementatietip voor Next.js

Render JSON-LD via een `<script type="application/ld+json">` met `dangerouslySetInnerHTML`, of via een klein herbruikbaar component dat een object als prop neemt. Eén component, op elke pagina het juiste object meegeven. Vraag de seo-schema agent om dit component te maken.
