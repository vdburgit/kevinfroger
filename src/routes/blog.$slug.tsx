import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/ContentPage";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { breadcrumb, buildSeo, faqPage, SITE_URL } from "@/lib/seo";
import { BLOG_BY_SLUG, BLOG_POSTS } from "@/data/blogs";

const PATH = "/blog";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = BLOG_BY_SLUG[params.slug];
    if (!post) {
      return buildSeo({
        title: "Artikel niet gevonden | Kevin Froger",
        description:
          "Dit blogartikel bestaat niet (meer). Bekijk de andere artikelen.",
        path: `${PATH}/${params.slug}`,
        noindex: true,
      });
    }
    const url = `${SITE_URL}${PATH}/${post.slug}`;
    return buildSeo({
      title: post.title,
      description: post.description,
      path: `${PATH}/${post.slug}`,
      image: post.image,
      type: "article",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.cardTitle,
          description: post.description,
          image: `${SITE_URL}${post.image}`,
          author: { "@type": "Person", name: "Kevin Froger" },
          publisher: { "@id": `${SITE_URL}/#business` },
          datePublished: post.datePublished,
          dateModified: post.datePublished,
          mainEntityOfPage: url,
          inLanguage: "nl-NL",
        },
        faqPage(post.faq),
        breadcrumb([
          { name: "Home", path: "/" },
          { name: "Blog", path: PATH },
          { name: post.cardTitle, path: `${PATH}/${post.slug}` },
        ]),
      ],
    });
  },
  component: Page,
});

function Page() {
  const { slug } = Route.useParams();
  const post = BLOG_BY_SLUG[slug];

  if (!post) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <SiteHeader transparent />
        <section className="py-32 px-6 lg:px-10 text-center">
          <div className="max-w-xl mx-auto">
            <h1
              className="text-4xl mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Dit artikel bestaat niet (meer)
            </h1>
            <p className="text-muted-foreground mb-8">
              Misschien is de link verouderd. Bekijk de andere artikelen op de
              blog.
            </p>
            <Link
              to="/blog"
              className="rounded-full border-2 border-secondary text-secondary px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:bg-secondary hover:text-secondary-foreground transition"
            >
              Naar de blog
            </Link>
          </div>
        </section>
        <SiteFooter />
      </main>
    );
  }

  // "Lees ook": link naar de twee andere artikelen, zodat de blog-silo onderling
  // gesloten is (alle posts zijn bruiloft-gerelateerd).
  const related = BLOG_POSTS.filter((p) => p.slug !== slug)
    .slice(0, 2)
    .map((p) => ({ to: `${PATH}/${p.slug}`, label: p.cardTitle }));

  return (
    <ContentPage
      eyebrow={post.eyebrow}
      titleLine1={post.titleLine1}
      titleLine2={post.titleLine2}
      intro={post.intro}
      image={post.image}
      imageAlt={post.imageAlt}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Blog", path: PATH },
        { name: post.cardTitle, path: `${PATH}/${post.slug}` },
      ]}
      blocksHeading={post.blocksHeading}
      blocks={post.blocks}
      sections={post.sections}
      links={[...post.links, ...related]}
      faq={post.faq}
      ctaSubtitle={post.ctaSubtitle}
    />
  );
}
