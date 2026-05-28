export const SITE_URL = "https://kevinfroger.nl";
export const SITE_NAME = "DJ Kevin Froger";

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
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
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

export function service(opts: {
  name: string;
  description: string;
  serviceType: string;
  path: string;
  image: string;
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
    areaServed: { "@type": "Country", name: "Nederland" },
  };
}
