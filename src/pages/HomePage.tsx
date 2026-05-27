import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, MessageCircle, Phone, Mail, MapPin,
  Heart, Building, Zap, Mic, Users, Volume2,
  CheckCircle, ChevronDown, Calendar,
  Instagram, Facebook, Youtube,
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { GradientDivider } from '../components/GradientDivider';
import {
  useSEO, generateBreadcrumbSchema, generateFAQSchema, generateLocalBusinessSchema,
} from '../hooks/useSEO';

const heroSlides = [
  { image: '/images/IMG_0388-1920.webp',                         alt: 'DJ Kevin Froger in actie' },
  { image: '/images/dj-kevin-froger-bruiloft-scaled-1280.webp',  alt: 'DJ Kevin Froger op een bruiloft' },
  { image: '/images/licht-en-geluid-verhuur-show-scaled-1280.webp', alt: 'Licht en geluid show' },
  { image: '/images/dj-kevin-froger-bedrijfsfeest-1280.webp',    alt: 'DJ Kevin Froger bedrijfsfeest' },
];

const services = [
  { title: 'Bruiloft DJ',    desc: 'Van ceremonie tot laatste plaat — muziek en sfeer die past bij jullie dag.',    link: '/bruiloft-dj',    icon: <Heart size={22} /> },
  { title: 'Verjaardag DJ',  desc: 'Muziek op maat, van gezellig tot knallend feest.',                             link: '/verjaardag-dj',  icon: <Users size={22} /> },
  { title: 'Zakelijk DJ',    desc: 'Representatief en aanpasbaar — borrel tot personeelsfeest.',                    link: '/zakelijk-dj',    icon: <Building size={22} /> },
  { title: 'Evenementen DJ', desc: 'Complete DJ-show voor elk evenement, groot of klein.',                         link: '/evenementen-dj', icon: <Zap size={22} /> },
  { title: 'Licht & Geluid', desc: 'Eigen high-end apparatuur — inclusief of apart.',                              link: '/evenementen-dj', icon: <Volume2 size={22} /> },
  { title: 'Werkwijze',      desc: 'Intake, voorbereiding op maat en strakke uitvoering.',                         link: '/werkwijze',      icon: <Mic size={22} /> },
];

const faqs = [
  { q: 'Hoe ver van tevoren moet ik boeken?',    a: 'Voor bruiloften raden we 6–12 maanden aan. Voor andere evenementen is 2–3 maanden voldoende.' },
  { q: 'Wat is inbegrepen in de prijs?',         a: 'DJ-services, geluidsapparatuur, microfoon, basisverlichting en voor- en nabereiding. Uitgebreide lichtshows zijn als toevoeging beschikbaar.' },
  { q: 'Kunnen we muziekwensen doorgeven?',      a: 'Absoluut. Vooraf bespreken we alle wensen en no-go songs.' },
  { q: 'Draait Kevin met een vaste playlist?',   a: 'Nee. Kevin draait allround en speelt live in op het publiek. Wensen worden vooraf besproken en meegenomen.' },
  { q: 'Hoe zit het met de technische setup?',  a: 'Kevin verzorgt de complete setup en afbouw met eigen professionele apparatuur.' },
];

const marqueeItems = [
  'Allround DJ', 'Bruiloft DJ', 'Bedrijfsfeest', 'Verjaardag DJ',
  'Licht & Geluid', 'Evenementen DJ', 'Heel Nederland', 'Eigen apparatuur', 'Direct contact',
];

const regions = [
  { name: 'Zuid-Holland',  href: '/regio/zuid-holland',  cities: 'Rotterdam · Den Haag · Delft' },
  { name: 'Noord-Brabant', href: '/regio/noord-brabant', cities: 'Eindhoven · Tilburg · Breda' },
  { name: 'Gelderland',    href: '/regio/gelderland',    cities: 'Nijmegen · Arnhem · Apeldoorn' },
  { name: 'Utrecht',       href: '/regio/utrecht',       cities: 'Utrecht · Amersfoort · Zeist' },
  { name: 'Overijssel',    href: '/regio/overijssel',    cities: 'Enschede · Zwolle · Deventer' },
  { name: 'Noord-Holland', href: '/regio/noord-holland', cities: 'Amsterdam · Haarlem · Alkmaar' },
  { name: 'Zeeland',       href: '/regio/zeeland',       cities: 'Middelburg · Vlissingen · Goes' },
];

const HomePage = () => {
  const [slide,   setSlide]   = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5500);
    return () => clearInterval(t);
  }, []);

  useSEO({
    title: 'Allround DJ Kevin Froger – Bruiloft, Bedrijfsfeest & Evenementen',
    description: 'Boek allround DJ Kevin Froger voor bruiloften, bedrijfsfeesten, verjaardagen en evenementen. Persoonlijke aanpak, eigen licht & geluid, door heel Nederland.',
    keywords: 'allround dj, dj boeken, dj huren, dj voor bruiloft, dj voor verjaardag, dj voor bedrijfsfeest, dj voor evenement, dj met licht en geluid, dj Nederland',
    canonical: 'https://kevinfroger.nl/',
    ogType: 'website',
    ogImage: 'https://kevinfroger.nl/images/IMG_0388-1920.webp',
    ogImageAlt: 'Allround DJ Kevin Froger in actie',
    twitterCard: 'summary_large_image',
    jsonLd: [
      generateBreadcrumbSchema([{ name: 'Home', url: '/' }]),
      generateLocalBusinessSchema(),
      { '@context': 'https://schema.org', '@type': 'WebSite', name: 'DJ Kevin Froger', url: 'https://kevinfroger.nl' },
      generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a }))),
    ],
  });

  return (
    <div style={{ background: '#ffffff', color: '#151515' }}>

      {/* ════════════════════════════
          HERO — performer-first
      ════════════════════════════ */}
      <section style={{ position: 'relative', width: '100%', height: '100svh', minHeight: '600px', overflow: 'hidden' }} aria-labelledby="hero-title">

        {/* Slider images */}
        {heroSlides.map((s, i) => (
          <img key={i} src={s.image} alt={s.alt}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', opacity: i === slide ? 1 : 0, transition: 'opacity 1.4s ease', zIndex: i === slide ? 0 : -1 }}
            loading={i === 0 ? 'eager' : 'lazy'} decoding={i === 0 ? 'sync' : 'async'}
          />
        ))}

        {/* Gradient overlay — bottom-heavy for text readability */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.70) 75%, rgba(0,0,0,0.88) 100%)', zIndex: 1 }} />

        {/* Content — bottom-left anchor, like viezejack */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2, padding: 'clamp(32px,6vw,72px) clamp(20px,6vw,80px) clamp(48px,8vh,80px)' }}>

          {/* Eyebrow */}
          <p style={{ color: '#ff7a00', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Allround DJ · Nederland
          </p>

          {/* Big name */}
          <h1 id="hero-title" style={{ fontFamily: 'var(--kf-font-heading)', fontWeight: 900, fontSize: 'clamp(3.2rem,9vw,9rem)', color: '#ffffff', lineHeight: 0.88, letterSpacing: '-0.04em', textTransform: 'uppercase', marginBottom: 'clamp(1rem,2.5vh,1.75rem)', textShadow: '0 4px 40px rgba(0,0,0,0.5)' }}>
            KEVIN<br />FROGER
          </h1>

          {/* Subtitle */}
          <p style={{ color: 'rgba(255,247,230,0.85)', fontSize: 'clamp(1rem,1.8vw,1.2rem)', fontWeight: 500, maxWidth: '520px', lineHeight: 1.55, marginBottom: 'clamp(1.5rem,3vh,2.25rem)' }}>
            Voor feesten, bruiloften en evenementen die je bijblijven.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
            <a href="#contact" className="kf-button-primary" style={{ background: 'linear-gradient(135deg,#e60000,#ff7a00)' }}>
              <Calendar size={15} /> Boek Kevin
            </a>
            <a href="https://wa.me/31645251333" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#25D366', color: '#fff', padding: '14px 26px', borderRadius: '999px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>

          {/* Social links — subtle row */}
          <div style={{ display: 'flex', gap: '16px', marginTop: 'clamp(1.5rem,3vh,2.5rem)', alignItems: 'center' }}>
            {[
              { href: 'https://www.instagram.com/djkevinfroger/', icon: <Instagram size={18} />, label: 'Instagram' },
              { href: 'https://www.facebook.com/KevinFroger.nl', icon: <Facebook size={18} />, label: 'Facebook' },
              { href: 'https://www.youtube.com/@KEVINFROGER',     icon: <Youtube size={18} />,   label: 'YouTube' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                style={{ color: 'rgba(255,255,255,0.60)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#ff7a00')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.60)')}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Slide dots */}
        <div style={{ position: 'absolute', bottom: 'clamp(16px,3vh,28px)', right: 'clamp(20px,4vw,48px)', display: 'flex', gap: '8px', zIndex: 3 }}>
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`}
              style={{ width: i === slide ? '24px' : '8px', height: '8px', borderRadius: '4px', background: i === slide ? '#ff7a00' : 'rgba(255,255,255,0.40)', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
          ))}
        </div>
      </section>

      {/* ════════════════════════════
          MARQUEE
      ════════════════════════════ */}
      <div className="kf-marquee" aria-hidden="true">
        <div className="kf-marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="kf-marquee-item"><span className="kf-marquee-dot" />{item}</span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════
          OVER KEVIN — split photo + text
      ════════════════════════════ */}
      <section style={{ background: '#ffffff', padding: 'clamp(56px,8vw,112px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>

          {/* Photo — left */}
          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/5' }}>
            <img src="/images/dj-kevin-froger-bruiloft-scaled-640.webp" alt="DJ Kevin Froger" className="w-full h-full object-cover" loading="lazy" decoding="async" width={560} height={700} />
            {/* Red accent stripe */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg,#e60000,#ff7a00)' }} />
          </div>

          {/* Text — right */}
          <div>
            <p style={{ color: '#e60000', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1rem' }}>Over Kevin Froger</p>
            <h2 style={{ fontFamily: 'var(--kf-font-heading)', fontWeight: 900, fontSize: 'clamp(2rem,3.5vw,3.2rem)', color: '#151515', letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '1.5rem' }}>
              Allround DJ met gevoel voor sfeer en publiek
            </h2>
            <p style={{ color: 'rgba(21,21,21,0.65)', lineHeight: 1.85, marginBottom: '1rem', fontSize: '1rem' }}>
              Kevin Froger is een allround DJ voor feesten waar de sfeer vanaf het eerste moment goed moet staan. Met brede muziekkennis, professionele voorbereiding en gevoel voor het publiek zorgt Kevin voor een avond die past bij de gasten, de locatie en het soort feest.
            </p>
            <p style={{ color: 'rgba(21,21,21,0.55)', lineHeight: 1.85, marginBottom: '2rem' }}>
              Van bruiloft tot bedrijfsfeest — de muziek wordt live afgestemd op wat er gebeurt op de dansvloer.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Direct contact met de DJ', 'Eigen professioneel licht & geluid', 'Op maat afgestemd op jullie feest', 'Actief in heel Nederland'].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2d2d2d', fontSize: '0.92rem', fontWeight: 600 }}>
                  <CheckCircle size={16} style={{ color: '#e60000', flexShrink: 0 }} />{item}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#contact" className="kf-button-primary"><Calendar size={15} /> Beschikbaarheid</a>
              <a href="https://wa.me/31645251333" target="_blank" rel="noopener noreferrer" className="kf-button-secondary"><MessageCircle size={15} /> WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* ════════════════════════════
          DJ SHOWS / DIENSTEN
      ════════════════════════════ */}
      <section id="shows" style={{ background: '#fff7e6', padding: 'clamp(56px,8vw,100px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ color: '#e60000', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>DJ Shows</p>
            <h2 style={{ fontFamily: 'var(--kf-font-heading)', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3.2rem)', color: '#151515', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
              Voor elk feest de juiste show
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '20px' }}>
            {services.map(s => (
              <Link key={s.title} to={s.link} style={{ textDecoration: 'none', display: 'block', background: '#ffffff', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '16px', padding: '28px 26px', transition: 'transform 0.22s, box-shadow 0.22s, border-color 0.22s', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)'; el.style.borderColor = 'rgba(230,0,0,0.22)'; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'; el.style.borderColor = 'rgba(0,0,0,0.07)'; }}>
                {/* Top accent */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,#e60000,#ff7a00)' }} />
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(230,0,0,0.08)', color: '#e60000', marginBottom: '1.1rem' }}>
                  {s.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--kf-font-heading)', fontWeight: 800, fontSize: '1.05rem', color: '#151515', marginBottom: '0.6rem', letterSpacing: '-0.02em' }}>{s.title}</h3>
                <p style={{ color: 'rgba(21,21,21,0.58)', fontSize: '0.875rem', lineHeight: 1.72, marginBottom: '1.25rem' }}>{s.desc}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#e60000', fontWeight: 700, fontSize: '0.82rem' }}>
                  Meer informatie <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* ════════════════════════════
          REGIO
      ════════════════════════════ */}
      <section style={{ background: '#ffffff', padding: 'clamp(56px,8vw,100px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <p style={{ color: '#e60000', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Werkgebied</p>
              <h2 style={{ fontFamily: 'var(--kf-font-heading)', fontWeight: 900, fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#151515', letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '1.25rem' }}>
                DJ boeken in jouw regio
              </h2>
              <p style={{ color: 'rgba(21,21,21,0.60)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Kevin Froger is actief door heel Nederland — bruiloften, bedrijfsfeesten en evenementen in Zuid-Holland, Noord-Brabant, Gelderland, Utrecht, Overijssel, Noord-Holland en Zeeland.
              </p>
              <Link to="/regio" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#e60000', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}>
                Bekijk alle regio's <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {regions.map(r => (
                <Link key={r.name} to={r.href} style={{ background: '#fff7e6', border: '1px solid rgba(0,0,0,0.07)', borderRadius: '14px', padding: '16px 18px', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(230,0,0,0.28)'; e.currentTarget.style.background = '#fff2d6'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)'; e.currentTarget.style.background = '#fff7e6'; }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <MapPin size={13} style={{ color: '#e60000', flexShrink: 0 }} />
                    <strong style={{ fontFamily: 'var(--kf-font-heading)', fontWeight: 800, color: '#151515', fontSize: '0.88rem' }}>{r.name}</strong>
                  </div>
                  <p style={{ color: 'rgba(21,21,21,0.45)', fontSize: '0.68rem', marginLeft: '21px' }}>{r.cities}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* ════════════════════════════
          FAQ
      ════════════════════════════ */}
      <section id="faq" style={{ background: '#f7f3ed', padding: 'clamp(56px,8vw,100px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p style={{ color: '#e60000', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Vragen</p>
            <h2 style={{ fontFamily: 'var(--kf-font-heading)', fontWeight: 900, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: '#151515', letterSpacing: '-0.04em' }}>Alles wat je wilt weten</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ background: '#ffffff', border: openFaq === i ? '1px solid rgba(230,0,0,0.28)' : '1px solid rgba(0,0,0,0.08)', borderLeft: openFaq === i ? '3px solid #e60000' : '1px solid rgba(0,0,0,0.08)', borderRadius: '12px', overflow: 'hidden', transition: 'border-color 0.2s', boxShadow: '0 2px 10px rgba(0,0,0,0.04)' }}>
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 22px', textAlign: 'left', color: '#151515', fontWeight: 600, fontSize: '0.95rem', background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'var(--kf-font-heading)' }}
                  aria-expanded={openFaq === i}>
                  <span>{f.q}</span>
                  <ChevronDown size={16} style={{ color: '#e60000', flexShrink: 0, marginLeft: '12px', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 22px 18px', color: 'rgba(21,21,21,0.65)', fontSize: '0.88rem', lineHeight: 1.78, borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          CTA BANNER
      ════════════════════════════ */}
      <section style={{ background: '#151515', padding: 'clamp(64px,8vw,100px) clamp(20px,5vw,80px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 80% at 10% 50%, rgba(230,0,0,0.22), transparent 55%), radial-gradient(ellipse 50% 60% at 90% 50%, rgba(255,122,0,0.14), transparent 50%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1180px', margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '40px' }}>
          <div>
            <p style={{ color: '#ff7a00', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Direct contact</p>
            <h2 style={{ fontFamily: 'var(--kf-font-heading)', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3.5rem)', color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 0.95, marginBottom: '1rem' }}>
              Beschikbaar op<br />jouw datum?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '1rem', lineHeight: 1.7 }}>
              Stuur je datum, locatie en soort feest door. Dan kijk ik graag met je mee.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flexShrink: 0 }}>
            <a href="#contact" className="kf-button-primary" style={{ whiteSpace: 'nowrap' }}><Calendar size={15} /> Beschikbaarheid</a>
            <a href="https://wa.me/31645251333" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#25D366', color: '#fff', padding: '14px 26px', borderRadius: '999px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              <MessageCircle size={15} /> WhatsApp Kevin
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════
          CONTACT
      ════════════════════════════ */}
      <section id="contact" style={{ background: '#ffffff', padding: 'clamp(56px,8vw,100px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,72px)' }}>
          <div>
            <p style={{ color: '#e60000', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Boeken</p>
            <h2 style={{ fontFamily: 'var(--kf-font-heading)', fontWeight: 900, fontSize: 'clamp(1.8rem,3.5vw,3rem)', color: '#151515', letterSpacing: '-0.04em', lineHeight: 1.0, marginBottom: '1rem' }}>
              Kevin Froger boeken?
            </h2>
            <p style={{ color: 'rgba(21,21,21,0.60)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Vertel kort wat over je feest — datum, locatie, soort feest en eventuele wensen. Je hoort binnen 24 uur van mij.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '2rem' }}>
              {[
                { href: 'tel:+31645251333',            icon: <Phone size={15} />,        label: 'Bel Kevin',       sub: '06 45 25 13 33',        wa: false },
                { href: 'https://wa.me/31645251333',   icon: <MessageCircle size={15}/>,  label: 'WhatsApp direct', sub: 'Snelle reactie',         wa: true  },
                { href: 'mailto:kevin@kevinfroger.nl', icon: <Mail size={15} />,          label: 'Mail Kevin',      sub: 'kevin@kevinfroger.nl',   wa: false },
              ].map(c => (
                <a key={c.label} href={c.href} target={c.wa ? '_blank' : undefined} rel={c.wa ? 'noopener noreferrer' : undefined}
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px', background: '#fff7e6', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '14px', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(230,0,0,0.25)'; e.currentTarget.style.background = '#fff2d6'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'; e.currentTarget.style.background = '#fff7e6'; }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: c.wa ? 'rgba(37,211,102,0.12)' : 'rgba(230,0,0,0.10)', color: c.wa ? '#25D366' : '#e60000', flexShrink: 0 }}>
                    {c.icon}
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#151515', fontSize: '0.9rem', fontWeight: 700 }}>{c.label}</strong>
                    <span style={{ color: 'rgba(21,21,21,0.50)', fontSize: '0.8rem' }}>{c.sub}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div style={{ background: '#fff7e6', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '20px', padding: 'clamp(24px,4vw,36px)', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Mobile responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          #hero-title { font-size: clamp(2.8rem,14vw,5rem) !important; }
        }
        @media (max-width: 900px) {
          .home-split { grid-template-columns: 1fr !important; }
          .home-split > div:first-child { display: none; }
          .home-cta-grid { grid-template-columns: 1fr !important; }
          .home-cta-grid > div:last-child { flex-direction: row !important; flex-wrap: wrap; }
          .home-regio-grid { grid-template-columns: 1fr !important; }
          .home-contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
