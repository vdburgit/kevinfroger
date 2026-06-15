export const SITE_URL = "https://kevinfroger.nl";
export const SITE_NAME = "DJ Kevin Froger";

// Echte Google-reviewcijfers. Eén centrale bron, zodat zichtbaar reviewblok en
// JSON-LD altijd hetzelfde getal gebruiken. Pas alleen hier aan als het aantal
// reviews of de score op Google verandert.
export const REVIEW_RATING = "5.0";
export const REVIEW_COUNT = 10;
export const REVIEW_URL = "https://www.google.com/search?q=DJ+Kevin+Froger+reviews";

type MetaTag =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string };

type LinkTag = { rel: string; href: string } & Record<string, string | boolean | undefined>;

type ScriptTag = { type: string; children: string };

type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export type SeoHead = {
  meta: MetaTag[];
  links: LinkTag[];
  scripts?: ScriptTag[];
};

function abs(path: string) {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildSeo({
  title,
  description,
  path,
  image = "/images/dj-kevin-froger-bruiloft-scaled.jpeg",
  type = "website",
  noindex = false,
  jsonLd,
}: SeoInput): SeoHead {
  const url = abs(path);
  const imageUrl = abs(image);

  const meta: MetaTag[] = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: type },
    { property: "og:locale", content: "nl_NL" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: imageUrl },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: title },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: title },
  ];

  if (noindex) {
    meta.push({ name: "robots", content: "noindex, nofollow" });
  }

  const links: LinkTag[] = [{ rel: "canonical", href: url }];

  const scripts: ScriptTag[] = [];
  if (jsonLd) {
    const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
    for (const block of blocks) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify(block),
      });
    }
  }

  return { meta, links, scripts: scripts.length ? scripts : undefined };
}

export function breadcrumb(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export type FaqItem = { q: string; a: string };

// FAQPage JSON-LD. Voed dit met DEZELFDE array als het zichtbare <Faq>-component,
// zodat de zichtbare tekst en de structured data gegarandeerd identiek zijn
// (vereiste van Google: antwoord in JSON-LD moet 1-op-1 op de pagina staan).
export function faqPage(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

// AggregateRating-blok op basis van de echte Google-cijfers (5,0 / 10 reviews).
// Voeg toe aan een Service via service({ rating: true }). Gebruik alleen waar de
// pagina ook een zichtbaar reviewblok met dezelfde cijfers toont (Google-vereiste:
// rating-markup moet overeenkomen met zichtbare content).
export function aggregateRating() {
  return {
    "@type": "AggregateRating",
    ratingValue: REVIEW_RATING,
    reviewCount: REVIEW_COUNT,
    bestRating: "5",
    worstRating: "1",
  };
}

export function service(opts: {
  name: string;
  description: string;
  serviceType: string;
  path: string;
  image: string;
  areaServed?: string;
  rating?: boolean;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: abs(opts.path),
    image: abs(opts.image),
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: opts.areaServed
      ? { "@type": "AdministrativeArea", name: opts.areaServed }
      : { "@type": "Country", name: "Nederland" },
    ...(opts.rating ? { aggregateRating: aggregateRating() } : {}),
  };
}
