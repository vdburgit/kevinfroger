import { Heart, Music, Users, CheckCircle, Sparkles, Star, MessageCircle, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { GradientDivider } from '../components/GradientDivider';
import { useSEO, generateBreadcrumbSchema, generateServiceSchema, generateFAQSchema } from '../hooks/useSEO';

const BruiloftDJPage = () => {
  useSEO({
    title: 'Bruiloft DJ – persoonlijk & professioneel | Kevin Froger',
    description: 'Openingsdans tot knallend slot. Complete DJ‑show met licht & geluid, afgestemd op jullie dag. 15+ jaar ervaring. Snel een prijs via WhatsApp of ontvang een offerte.',
    keywords: 'bruiloft dj, bruiloft dj nederland, bruiloft dj zuid-holland, trouw dj, dj bruiloft, bruiloft muziek, ceremonie muziek, openingsdans, feest dj bruiloft',
    canonical: 'https://kevinfroger.nl/bruiloft-dj',
    ogType: 'website',
    ogImage: 'https://kevinfroger.nl/images/dj-kevin-froger-bruiloft-scaled.webp',
    ogImageAlt: 'DJ Kevin Froger - Bruiloft DJ met complete show setup',
    twitterCard: 'summary_large_image',
    jsonLd: [
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Bruiloft DJ', url: '/bruiloft-dj' }
      ]),
      generateServiceSchema({
        name: 'DJ voor bruiloft',
        description: 'Complete bruiloft DJ service met licht, geluid en MC services. Persoonlijke begeleiding van ceremonie tot late avond voor jullie perfecte bruiloft.',
        areaServed: ['Nederland', 'Zuid-Holland', 'Noord-Brabant', 'Gelderland', 'Utrecht', 'Overijssel', 'Noord-Holland', 'Zeeland'],
        priceRange: '€750-€2500'
      }),
      generateFAQSchema([
        { question: 'Kunnen we onze favoriete muziek doorgeven?', answer: 'Zeker. Vooraf verzamelen we jullie wensen en doornemen we alles. Op de avond zelf speel ik in op de sfeer en verzoekjes.' },
        { question: 'Wat is inbegrepen bij de show?', answer: 'Complete set met licht en geluid, microfoon, op- & afbouw en voorbereiding. Alles in overleg met de locatie.' },
        { question: 'Hoe snel ontvangen we een prijsindicatie?', answer: 'Binnen enkele minuten via WhatsApp of e‑mail krijg je een indicatie op basis van duur, locatie en setup.' },
        { question: 'Begeleid je ook de ceremonie?', answer: 'Ja, als dat gewenst is zorgen we voor muziek tijdens de ceremonie, vanaf binnenkomst tot ontvangst.' }
      ])
    ]
  });

  const services = [
    { icon: <Heart size={28} />, title: 'Ceremonie & Ontvangst', description: 'Muzikale begeleiding vanaf binnenkomst tot borrel' },
    { icon: <Music size={28} />, title: 'Diner & Speeches', description: 'Sfeervolle achtergrondmuziek en microfoon voor toespraken' },
    { icon: <Sparkles size={28} />, title: 'Openingsdans', description: 'Perfecte timing en geluid voor jullie eerste dans samen' },
    { icon: <Users size={28} />, title: 'Feestavond', description: 'Live DJ set afgestemd op jullie gasten en wensen' },
  ];

  const usps = [
    'Van ceremonie tot laatste plaat – complete begeleiding',
    'Direct contact met de DJ – geen verhuurbedrijf',
    'Eigen licht- en geluidapparatuur uit één hand',
    '15+ jaar ervaring – ik weet wat werkt',
  ];

  const process = [
    { step: '01', title: 'Intake', description: 'Kennismaking, wensen bespreken en prijsindicatie binnen 24 uur', icon: <Heart size={22} /> },
    { step: '02', title: 'Voorbereiding', description: 'Muziekwensen verzamelen, afstemming met locatie en draaiboek opstellen', icon: <Music size={22} /> },
    { step: '03', title: 'Opbouw', description: 'Ruim voor aanvang installatie opbouwen en testen', icon: <Sparkles size={22} /> },
    { step: '04', title: 'Uitvoering', description: 'Van ceremonie tot feestavond – live mixing op jullie publiek', icon: <Star size={22} /> },
  ];

  const faq = [
    { question: 'Kunnen we onze favoriete muziek doorgeven?', answer: 'Zeker. Vooraf verzamelen we jullie wensen en doornemen we alles. Op de avond zelf speel ik in op de sfeer en verzoekjes.' },
    { question: 'Wat is inbegrepen bij de show?', answer: 'Complete set met licht en geluid, microfoon, op- & afbouw en voorbereiding. Alles in overleg met de locatie.' },
    { question: 'Hoe snel ontvangen we een prijsindicatie?', answer: 'Binnen enkele minuten via WhatsApp of e‑mail krijg je een indicatie op basis van duur, locatie en setup.' },
    { question: 'Regel jij de techniek?', answer: 'Ja, inclusief microfoon en passende set. Ik stem alles vooraf af met de locatie voor vlotte opbouw.' },
  ];

  const regions = [
    { name: 'Rotterdam', href: '/regio/zuid-holland/rotterdam' },
    { name: 'Den Haag', href: '/regio/zuid-holland/den-haag' },
    { name: 'Delft', href: '/regio/zuid-holland/delft' },
    { name: 'Leiden', href: '/regio/zuid-holland/leiden' },
    { name: 'Zoetermeer', href: '/regio/zuid-holland/zoetermeer' },
    { name: 'Utrecht', href: '/regio/utrecht' },
    { name: 'Eindhoven', href: '/regio/noord-brabant' },
    { name: 'Nijmegen', href: '/regio/gelderland' },
  ];

  return (
    <div style={{ background: '#ffffff', color: '#151515' }}>

      {/* Hero */}
      <section className="kf-seo-hero" role="banner" aria-labelledby="bruiloft-hero-title">
        <div className="kf-seo-hero__inner">
          <span className="kf-label">Bruiloft DJ</span>
          <h1 id="bruiloft-hero-title" style={{ fontFamily: 'var(--kf-font-heading)', fontWeight: 900, fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#151515', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1.25rem' }}>
            De bruiloft DJ die sfeer maakt
          </h1>
          <p style={{ color: 'rgba(21,21,21,0.62)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '600px', marginBottom: '2rem' }}>
            Van openingsdans tot knallend slot: complete DJ‑show met licht & geluid, persoonlijk afgestemd op jullie dag. 15+ jaar ervaring.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#contact" className="kf-button-primary">Vraag offerte aan</a>
            <a href="https://wa.me/31645251333" target="_blank" rel="noopener noreferrer" className="kf-button-secondary">App voor prijsindicatie</a>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Services */}
      <section className="kf-section" style={{ background: '#ffffff' }}>
        <div className="kf-section-inner">
          <div className="text-center mb-14">
            <p className="kf-label mb-3">Wat je krijgt</p>
            <h2 className="kf-section-title text-3xl md:text-4xl font-black">Complete begeleiding van begin tot eind</h2>
          </div>
          <div className="kf-services-grid">
            {services.map((s, i) => (
              <div key={i} className="kf-service-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', borderRadius: '20px' }}>
                <div className="mb-5 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(230,0,0,0.08)', color: '#e60000' }}>
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#151515' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(21,21,21,0.60)' }}>{s.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl p-8 md:p-10" style={{ background: '#fff7e6', border: '1px solid rgba(0,0,0,0.08)' }}>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#151515' }}>Wat je krijgt:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {usps.map((u, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: '#e60000' }} />
                  <span className="text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>{u}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Process */}
      <section className="kf-section" style={{ background: '#fff7e6' }}>
        <div className="kf-section-inner">
          <div className="text-center mb-14">
            <p className="kf-label mb-3">Werkwijze</p>
            <h2 className="kf-section-title text-3xl md:text-4xl font-black">Hoe werkt het?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div key={i} className="text-center p-8" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', borderRadius: '20px' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(230,0,0,0.08)', color: '#e60000' }}>
                  {p.icon}
                </div>
                <div className="text-xs font-bold tracking-widest mb-2" style={{ color: '#e60000' }}>{p.step}</div>
                <h3 className="text-base font-bold mb-3" style={{ color: '#151515' }}>{p.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(21,21,21,0.60)' }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* FAQ */}
      <section className="kf-section" style={{ background: '#f7f3ed' }}>
        <div className="kf-section-inner" style={{ maxWidth: '780px' }}>
          <div className="text-center mb-14">
            <p className="kf-label mb-3">FAQ</p>
            <h2 className="kf-section-title text-3xl md:text-4xl font-black">Veelgestelde vragen</h2>
          </div>
          <div className="space-y-4">
            {faq.map((f, i) => (
              <div key={i} className="p-6" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', borderRadius: '20px' }}>
                <h3 className="text-base font-bold mb-2" style={{ color: '#151515' }}>{f.question}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(21,21,21,0.60)' }}>{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Regions */}
      <section className="kf-section" style={{ background: '#fff7e6' }}>
        <div className="kf-section-inner">
          <div className="text-center mb-10">
            <p className="kf-label mb-3">Regio</p>
            <h2 className="kf-section-title text-2xl md:text-3xl font-black">Bruiloft DJ in jouw regio</h2>
            <p className="mt-2 text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>Beschikbaar voor bruiloften door heel Nederland</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {regions.map((r, i) => (
              <a key={i} href={r.href} className="flex flex-col items-center gap-2 p-4 text-center transition-all hover:scale-105" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', borderRadius: '20px' }}>
                <MapPin size={16} style={{ color: '#e60000' }} />
                <span className="text-xs font-bold" style={{ color: '#151515' }}>{r.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Contact */}
      <section id="contact" className="kf-section" style={{ background: '#ffffff' }}>
        <div className="kf-section-inner" style={{ maxWidth: '720px' }}>
          <div className="text-center mb-10">
            <p className="kf-label mb-3">Contact</p>
            <h2 className="kf-section-title text-3xl md:text-4xl font-black">Plan jullie droombruiloft</h2>
            <p className="mt-3 text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>Vrijblijvend gesprek – reactie binnen 24 uur</p>
          </div>
          <div className="p-8 md:p-10" style={{ background: '#fff7e6', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '20px' }}>
            <ContactForm eventType="bruiloft" />
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:0645251333" className="kf-button-secondary">
              <Phone size={16} /> 06 45 25 13 33
            </a>
            <a href="https://wa.me/31645251333" target="_blank" rel="noopener noreferrer" className="kf-button-secondary" style={{ color: '#25D366', borderColor: 'rgba(37,211,102,0.3)' }}>
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BruiloftDJPage;
