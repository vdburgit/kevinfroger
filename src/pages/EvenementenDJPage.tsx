import React from 'react';
import { Calendar, Users, Music, Star, CheckCircle, MessageCircle, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { GradientDivider } from '../components/GradientDivider';

const EvenementenDJPage = () => {
  React.useEffect(() => {
    document.title = 'Evenementen DJ – bedrijfsfeest, dorpsfeest, publiek event | Kevin Froger';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Representatieve DJ‑show met betrouwbare techniek en voorbereiding. Beschikbaar in ZH, NB, GE, UT en OV. Bel of app voor beschikbaarheid.');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          serviceType: 'DJ voor evenementen',
          provider: { '@type': 'Person', name: 'Kevin Froger', url: 'https://kevinfroger.nl/' },
          areaServed: ['Zuid-Holland', 'Noord-Brabant', 'Gelderland', 'Utrecht', 'Overijssel'],
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Werk je met een draaiboek?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, ik houd rekening met het programma en stem af met organisatoren voor perfecte timing.' } },
            { '@type': 'Question', name: 'Hoe zit het met geluidsnormen?', acceptedAnswer: { '@type': 'Answer', text: 'Ik houd rekening met lokale geluidsnormen en stem het volume af op de locatie en omgeving.' } },
          ],
        },
      ],
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const services = [
    { icon: <Calendar size={28} />, title: 'Bedrijfsfeesten', description: 'Representatieve DJ voor corporate events' },
    { icon: <Users size={28} />, title: 'Dorpsfeesten', description: 'Lokale evenementen en gemeenschapsfeesten' },
    { icon: <Music size={28} />, title: 'Publieke evenementen', description: 'Festivals en grote openbare events' },
    { icon: <Star size={28} />, title: 'Speciale gelegenheden', description: 'Jubilea, openingen en officiële events' },
  ];

  const usps = [
    'Rider in orde en professionele voorbereiding',
    'Coördinatie met techniek en organisatie',
    'Heldere afspraken en betrouwbare uitvoering',
    'Rekening houden met draaiboek en geluidsnormen',
  ];

  const faq = [
    { question: 'Werk je met een draaiboek?', answer: 'Ja, ik houd rekening met het programma en stem af met organisatoren voor perfecte timing.' },
    { question: 'Hoe zit het met geluidsnormen?', answer: 'Ik houd rekening met lokale geluidsnormen en stem het volume af op de locatie en omgeving.' },
    { question: 'Regel je de technische afstemming?', answer: 'Ja, ik coördineer vooraf met de locatie en andere technici voor vlotte opbouw en uitvoering.' },
  ];

  const regions = [
    { name: 'Rotterdam', href: '/regio/zuid-holland/rotterdam' },
    { name: 'Den Haag', href: '/regio/zuid-holland/den-haag' },
    { name: 'Utrecht', href: '/regio/utrecht' },
    { name: 'Eindhoven', href: '/regio/noord-brabant' },
    { name: 'Nijmegen', href: '/regio/gelderland' },
    { name: 'Enschede', href: '/regio/overijssel' },
    { name: 'Delft', href: '/regio/zuid-holland/delft' },
    { name: 'Leiden', href: '/regio/zuid-holland/leiden' },
  ];

  return (
    <div style={{ background: '#ffffff', color: '#151515' }}>

      {/* Hero */}
      <section className="kf-seo-hero" role="banner">
        <div className="kf-seo-hero__inner">
          <span className="kf-label">Evenementen DJ</span>
          <h1 style={{ fontFamily: 'var(--kf-font-heading)', fontWeight: 900, fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#151515', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1.25rem' }}>
            Representatief en betrouwbaar
          </h1>
          <p style={{ color: 'rgba(21,21,21,0.62)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '600px', marginBottom: '2rem' }}>
            Geschikt voor bedrijfsfeesten, dorpsfeesten en publieks­evenementen. Nette show, stillen efficiënt werken, draaiboek en geluidsnormen in acht genomen.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#contact" className="kf-button-primary">Vraag offerte aan</a>
            <a href="https://wa.me/31645251333" target="_blank" rel="noopener noreferrer" className="kf-button-secondary">Check beschikbaarheid</a>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Services */}
      <section className="kf-section" style={{ background: '#ffffff' }}>
        <div className="kf-section-inner">
          <div className="text-center mb-14">
            <p className="kf-label mb-3">Specialiteiten</p>
            <h2 className="kf-section-title text-3xl md:text-4xl font-black">Evenementen specialiteiten</h2>
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
            <h2 className="kf-section-title text-2xl md:text-3xl font-black">Evenementen DJ in jouw regio</h2>
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
            <h2 className="kf-section-title text-3xl md:text-4xl font-black">Plan uw evenement</h2>
            <p className="mt-3 text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>Vrijblijvende offerte – reactie binnen 24 uur</p>
          </div>
          <div className="p-8 md:p-10" style={{ background: '#fff7e6', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '20px' }}>
            <ContactForm eventType="anders" />
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:0645251333" className="kf-button-secondary"><Phone size={16} /> 06 45 25 13 33</a>
            <a href="https://wa.me/31645251333" target="_blank" rel="noopener noreferrer" className="kf-button-secondary" style={{ color: '#25D366', borderColor: 'rgba(37,211,102,0.3)' }}>
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EvenementenDJPage;
