import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_URL, buildSeo } from "@/lib/seo";
import { responsiveImage } from "@/lib/images";

const ROTATING_WORDS = ["BRUILOFT", "FEEST", "BEDRIJFSFEEST", "FESTIVAL"];
// Vast publiek pad (niet via Vite-bundle) zodat de hero in index.html ge-preload kan worden.
const HERO_WEBP_SRCSET =
  "/images/hero-crowd-640.webp 640w, /images/hero-crowd-1280.webp 1280w, /images/hero-crowd-1920.webp 1920w";
// Portret: responsive zodat mobiel de 640px-variant (~55 KB) pakt i.p.v. het volle bestand.
const PORTRAIT = responsiveImage("/images/kevin-portrait.webp");
const IMG_DJ_BOOTH = "/images/licht-en-geluid-verhuur-show.jpeg";
const IMG_PRIVATE = "/images/dj-kevin-froger-prive-feest.jpeg";
const IMG_WEDDING = "/images/dj-kevin-froger-bruiloft-scaled.jpeg";
const IMG_CORPORATE = "/images/dj-kevin-froger-bedrijfsfeest.webp";
const IMG_FESTIVAL = "/images/dj-kevin-froger-festival.webp";

// Logo-varianten (max 240px) gegenereerd door scripts/optimize-logos.js (WebP)
// of als compacte SVG. width/height = intrinsieke afmeting zodat de layout
// gereserveerd wordt (CLS); max-h regelt het tonen.
const PARTNER_LOGOS = [
  { src: "/images/logos/heineken.webp", alt: "Heineken", w: 240, h: 125 },
  { src: "/images/logos/jumbo.webp", alt: "Jumbo", w: 240, h: 67 },
  { src: "/images/logos/albert-heijn.svg", alt: "Albert Heijn", w: 240, h: 251 },
  { src: "/images/logos/makro.webp", alt: "Makro", w: 240, h: 64 },
  { src: "/images/logos/bolcom.webp", alt: "Bol.com", lightBg: true, w: 240, h: 240 },
  { src: "/images/logos/kpn.webp", alt: "KPN", w: 228, h: 240 },
  { src: "/images/logos/van-der-valk.webp", alt: "Van der Valk", w: 240, h: 119 },
  { src: "/images/logos/feyenoord-rotterdam.webp", alt: "Feyenoord Rotterdam", w: 240, h: 240 },
  { src: "/images/logos/sparta-rotterdam.webp", alt: "Sparta Rotterdam", w: 64, h: 64 },
  { src: "/images/logos/dutch-grand-prix.webp", alt: "Dutch Grand Prix", w: 240, h: 146 },
  { src: "/images/logos/zandvoort.webp", alt: "Circuit Zandvoort", w: 240, h: 240 },
  { src: "/images/logos/landmacht.webp", alt: "Koninklijke Landmacht", w: 240, h: 240 },
  { src: "/images/logos/politie.svg", alt: "Politie", w: 240, h: 240 },
  { src: "/images/logos/hogeschool-rotterdam.webp", alt: "Hogeschool Rotterdam", w: 240, h: 183 },
  { src: "/images/logos/flugel.webp", alt: "Flügel", w: 181, h: 240 },
  { src: "/images/logos/pupa-milano.webp", alt: "Pupa Milano", w: 240, h: 240 },
  { src: "/images/logos/yoursurprise.svg", alt: "YourSurprise", w: 240, h: 105 },
  { src: "/images/logos/voorwinden.webp", alt: "Voorwinden", w: 240, h: 77 },
  { src: "/images/logos/modern-nerdplace.webp", alt: "Modern Nerdplace", w: 240, h: 240 },
  { src: "/images/logos/roparun.webp", alt: "Roparun", w: 240, h: 27 },
];

export const Route = createFileRoute("/")({
  head: () => buildSeo({
    title: "DJ Kevin Froger | Allround DJ voor bruiloft, bedrijfsfeest & festival",
    description: "Allround DJ voor bruiloft, bedrijfsfeest of festival door heel Nederland. Veel ervaring in de Betuwe, Bommelerwaard, Hoeksche Waard en Zuid-Holland. Licht en geluid inbegrepen.",
    path: "/",
    image: IMG_WEDDING,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "DJ Kevin Froger, Allround DJ Nederland",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#business` },
        primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}${IMG_WEDDING}` },
        inLanguage: "nl-NL",
        mainEntity: { "@id": `${SITE_URL}/#business` },
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIdx((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO: full-bleed festival photo + giant wordmark */}
      <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
        <picture>
          <source type="image/webp" srcSet={HERO_WEBP_SRCSET} sizes="100vw" />
          <img
            src="/images/hero-crowd.jpg"
            alt="Volle dansvloer met rode podiumverlichting en confetti tijdens DJ-set van Kevin Froger"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        {/* Warm overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.16 0.012 250 / 0.55) 0%, oklch(0.16 0.012 250 / 0.35) 40%, oklch(0.16 0.012 250 / 0.95) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, oklch(0.16 0.012 250 / 0.6) 100%)" }} />

        {/* Top bar: gedeeld component met mobile menu. z-50 zodat de header
            boven het hero-content-blok (z-10) ligt en klikbaar is. */}
        <div className="relative z-50">
          <SiteHeader transparent />
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-6 pb-12 sm:pb-16">
          <span className="text-secondary text-[10px] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase font-bold mb-5 sm:mb-6">
            Nederland · 15+ jaar · allround DJ
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] sm:leading-[0.9] tracking-tight text-foreground max-w-5xl"
            style={{ fontFamily: "var(--font-display)", textShadow: "0 6px 30px oklch(0 0 0 / 0.5)" }}
          >
            ALLROUND DJ<br/>VOOR JE{" "}
            <span
              key={wordIdx}
              className="text-primary inline-block animate-[rotateIn_0.5s_ease-out]"
            >
              {ROTATING_WORDS[wordIdx]}
            </span>
          </h1>
          <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed">
            Allround DJ voor bruiloft, bedrijfsfeest, verjaardag of festival, door heel Nederland. Complete show met licht en geluid, DJ en MC in een persoon. Veel ervaring in de Betuwe, Bommelerwaard, Hoeksche Waard en Zuid-Holland.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center">
            <Link to="/contact" className="rounded-full bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.18em] uppercase font-bold hover:opacity-90 transition shadow-[var(--shadow-glow)]">
              Direct offerte aanvragen
            </Link>
            <a href="tel:0645251333" className="rounded-full border-2 border-secondary text-secondary px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.18em] uppercase font-bold hover:bg-secondary hover:text-secondary-foreground transition">
              06 45 25 13 33
            </a>
          </div>
        </div>

        {/* Marquee strip */}
        <div className="relative z-10 border-y-2 border-white/30 bg-primary/95 overflow-hidden">
          <div className="flex gap-10 py-4 whitespace-nowrap animate-[scroll_30s_linear_infinite] text-white text-sm md:text-base tracking-[0.3em] uppercase font-bold">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="flex gap-10 items-center">
                <span>★ Bruiloft tot festival</span>
                <span>★ Eigen licht en geluid</span>
                <span>★ DJ en MC in een</span>
                <span>★ 15+ jaar ervaring</span>
                <span>★ 5.0 op Google</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes rotateIn {
          0%   { opacity: 0; transform: translateY(20px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* DIENSTEN: uniforme card-grid */}
      <section id="diensten" className="py-28 px-6 lg:px-10 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Diensten</div>
            <h2 className="text-5xl md:text-7xl leading-[0.9]" style={{ fontFamily: "var(--font-display)" }}>
              Voor elke gelegenheid
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Van intieme bruiloft tot strak bedrijfsfeest. Strakke uitvoering, eigen apparatuur, persoonlijk contact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Bruiloften", img: IMG_WEDDING, alt: "DJ Kevin Froger draait op een bruiloft", desc: "Complete muzikale begeleiding voor jullie mooiste dag, van ceremonie tot late avond.", href: "/bruiloft-dj" },
              { title: "Bedrijfsfeesten", img: IMG_CORPORATE, alt: "DJ Kevin Froger op een bedrijfsfeest", desc: "Professionele entertainment voor corporate events, jubilea en personeelsfeesten.", href: "/zakelijk-dj" },
              { title: "Festivals", img: IMG_FESTIVAL, alt: "DJ Kevin Froger op een festival met vuurwerk boven het podium en volle dansvloer", desc: "Strakke sets met crowd control en presentatie voor festivals en aprèsski.", href: "/festival-dj" },
              { title: "Privéfeesten", img: IMG_PRIVATE, alt: "DJ Kevin Froger op een privéfeest of verjaardag", desc: "Verjaardag, themafeest of besloten event, altijd op maat van jouw gasten.", href: "/verjaardag-dj" },
            ].map((d) => {
              const { src, srcSet } = responsiveImage(d.img);
              return (
              <Link key={d.title} to={d.href} className="group relative block overflow-hidden rounded-2xl bg-card border-2 border-border hover:border-primary transition-colors aspect-[4/5]">
                <img src={src} srcSet={srcSet} sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" alt={d.alt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={800} height={1000} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl md:text-3xl mb-2 text-white" style={{ fontFamily: "var(--font-display)" }}>{d.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{d.desc}</p>
                  <div className="mt-4 text-secondary text-xs tracking-[0.25em] uppercase font-bold inline-flex items-center gap-2">
                    Meer info <span aria-hidden>→</span>
                  </div>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* OVER KEVIN: portret met confetti + 2 stats */}
      <section id="over" className="relative py-28 px-6 lg:px-10 bg-card border-y-2 border-border overflow-hidden">
        {/* Spotlight glow achter het portret */}
        <div
          className="absolute pointer-events-none -right-20 top-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-60"
          style={{ background: "radial-gradient(circle at center, oklch(0.74 0.21 42 / 0.55) 0%, oklch(0.55 0.16 263 / 0.25) 35%, transparent 70%)" }}
        />
        {/* Subtiele confetti-stippen op achtergrond */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.74 0.21 42) 2px, transparent 2px), radial-gradient(circle at 80% 70%, oklch(0.55 0.16 263) 2px, transparent 2px), radial-gradient(circle at 60% 20%, oklch(0.82 0.16 85) 2px, transparent 2px)",
            backgroundSize: "120px 120px",
          }}
        />

        <div className="relative max-w-[1400px] mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-16 items-center">
          {/* Tekst-kolom */}
          <div className="order-2 lg:order-1">
            <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Over Kevin</div>
            <h2 className="text-5xl md:text-7xl leading-[0.9]" style={{ fontFamily: "var(--font-display)" }}>
              Persoonlijk,<br/><span className="text-primary">strak geregeld.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Ik ben Kevin Froger, allround DJ. Al ruim 15 jaar draai ik bruiloften, bedrijfsfeesten, verjaardagen en festivals door heel Nederland, met veel ervaring in de Betuwe, Bommelerwaard en Zuid-Holland. Ik kom met een complete show, dus licht en geluid zijn geregeld, en ik ben DJ en MC in een persoon. Geen vaste afspeellijst: ik lees de zaal en bouw de avond ter plekke op.
            </p>

            {/* 2 stats, minimal, geen kaders */}
            <div className="mt-12 flex flex-wrap items-end gap-12">
              <div>
                <div className="text-6xl md:text-7xl text-primary leading-none" style={{ fontFamily: "var(--font-display)" }}>15+</div>
                <div className="text-xs text-muted-foreground mt-2 tracking-[0.25em] uppercase">Jaar ervaring</div>
              </div>
              <div className="h-16 w-px bg-border" />
              <div>
                <div className="text-6xl md:text-7xl text-primary leading-none flex items-baseline gap-2" style={{ fontFamily: "var(--font-display)" }}>
                  5,0
                  <span className="text-secondary text-2xl">★</span>
                </div>
                <div className="text-xs text-muted-foreground mt-2 tracking-[0.25em] uppercase">Google reviews</div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/biografie" className="rounded-full border-2 border-secondary text-secondary px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:bg-secondary hover:text-secondary-foreground transition">
                Lees biografie
              </Link>
              <Link to="/werkwijze" className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">
                Werkwijze
              </Link>
              <Link to="/regios" className="rounded-full border-2 border-border text-foreground px-6 py-3 text-xs tracking-[0.18em] uppercase font-bold hover:border-primary transition">
                Werkgebied
              </Link>
            </div>
          </div>

          {/* Cutout portret-kolom. Bron is 797x1167; max-w klein houden voor scherpte op retina. */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end items-end">
            <img
              src={PORTRAIT.src}
              srcSet={PORTRAIT.srcSet}
              sizes="(min-width:1024px) 420px, 360px"
              alt="Kevin Froger met confetti achter zijn DJ-booth"
              className="relative w-full max-w-[360px] lg:max-w-[420px] h-auto"
              style={{ filter: "drop-shadow(0 30px 60px oklch(0 0 0 / 0.55)) drop-shadow(0 0 40px oklch(0.74 0.21 42 / 0.35))" }}
              width={797}
              height={1167}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* WERKGEBIED */}
      <section className="py-20 sm:py-24 px-5 sm:px-6 lg:px-10 bg-background">
        <div className="max-w-[1100px] mx-auto text-center">
          <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Waar ik draai</div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl leading-[0.95] sm:leading-[0.9] mb-6" style={{ fontFamily: "var(--font-display)" }}>
            DJ door<br/><span className="text-primary">heel Nederland</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Voor bruiloften, bedrijfsfeesten, verjaardagen en festivals kom ik in alle twaalf provincies. Van Amsterdam tot Maastricht, van Vlissingen tot Groningen. Bekijk het complete werkgebied met alle steden en dorpen.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 justify-center">
            <Link to="/regios" className="rounded-full bg-primary text-primary-foreground border-2 border-secondary px-6 py-3 text-xs sm:text-sm tracking-[0.15em] uppercase font-bold hover:bg-secondary hover:text-secondary-foreground transition">
              Bekijk alle plaatsen
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-24 px-6 lg:px-10 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Vertrouwd door</div>
            <h2 className="text-4xl md:text-6xl leading-[0.9]" style={{ fontFamily: "var(--font-display)" }}>
              Gedraaid voor <span className="text-primary">o.a.</span>
            </h2>
          </div>
          {/* Gecentreerde flex-wrap: gelijke vakken, een niet-volle laatste rij
              staat netjes gecentreerd i.p.v. links uitgelijnd. */}
          <div className="flex flex-wrap justify-center gap-4">
            {PARTNER_LOGOS.map((p) => (
              <div key={p.alt} className={`flex items-center justify-center p-4 rounded-xl border border-border h-24 w-[calc(50%-0.5rem)] sm:w-40 hover:border-primary transition-colors ${p.lightBg ? "bg-white" : "bg-card"}`}>
                <img src={p.src} alt={`${p.alt} logo`} width={p.w} height={p.h} loading="lazy" decoding="async" className="max-h-12 max-w-full object-contain opacity-90 hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-28 px-6 lg:px-10 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="text-secondary text-xs tracking-[0.4em] uppercase font-bold mb-4">Reviews</div>
            <h2 className="text-5xl md:text-7xl leading-[0.9]" style={{ fontFamily: "var(--font-display)" }}>
              5,0 op <span className="text-primary">Google</span>
            </h2>
            <p className="mt-4 text-muted-foreground">10 reviews, allemaal vijf sterren.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { quote: "Wat een feest, wat een DJ en wat een sfeermaker! Kevin je was geweldig op onze bruiloft bedankt! Je maakte onze dag compleet!", who: "Dylan Hartog", role: "Bruiloft" },
              { quote: "Kevin heeft een top avond verzorgd samen met de band. De wisselwerking was erg goed en Kevin speelde goed in op het publiek. Een aanrader!", who: "Tim De Feyter", role: "Event met band" },
              { quote: "Kevin maakt echt een heel groot feest. Hij neemt voldoende spullen mee, denk aan lampen en geluidsboxen. In een woord: geweldig.", who: "Jaimy Van Huffel", role: "Feest" },
            ].map((r) => (
              <article key={r.who} className="rounded-2xl bg-card border-2 border-border p-8 flex flex-col">
                <div className="text-secondary text-xl mb-4">★★★★★</div>
                <p className="text-foreground/90 leading-relaxed flex-1">"{r.quote}"</p>
                <div className="mt-6 pt-6 border-t-2 border-border">
                  <div className="font-bold" style={{ fontFamily: "var(--font-display)" }}>{r.who}</div>
                  <div className="text-xs text-muted-foreground tracking-[0.2em] uppercase mt-1">{r.role}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/reviews" className="text-secondary text-sm tracking-[0.25em] uppercase font-bold hover:underline">
              Alle reviews bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="relative py-32 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-warm)" }} />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle, oklch(0 0 0 / 0.15) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="text-primary-foreground text-xs tracking-[0.4em] uppercase font-bold mb-4">Boek Kevin</div>
          <h2 className="text-6xl md:text-8xl leading-[0.85] text-background" style={{ fontFamily: "var(--font-display)" }}>
            Tijd voor een<br/>volle dansvloer.
          </h2>
          <p className="mt-8 text-lg text-background/80 max-w-xl mx-auto">
            Vraag vrijblijvend een offerte aan of stuur direct een appje. Reactie binnen 24 uur, gegarandeerd.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="rounded-full bg-background text-foreground px-8 py-4 text-sm tracking-[0.18em] uppercase font-bold hover:bg-foreground hover:text-background transition">
              Offerte aanvragen
            </Link>
            <a href="tel:+31645251333" className="rounded-full border-2 border-background text-background px-8 py-4 text-sm tracking-[0.18em] uppercase font-bold hover:bg-background hover:text-foreground transition">
              Bel 06 45 25 13 33
            </a>
            <a href="https://wa.me/31645251333" className="rounded-full border-2 border-background text-background px-8 py-4 text-sm tracking-[0.18em] uppercase font-bold hover:bg-background hover:text-foreground transition">
              App direct
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
