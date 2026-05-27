import React from 'react';
import { Building, Users, CheckCircle, Trophy, Target, MessageCircle, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { GradientDivider } from '../components/GradientDivider';

const ZakelijkDJPage = () => {
  React.useEffect(() => {
    document.title = 'DJ voor bedrijfsfeest & relaties – professioneel & verzorgd | Kevin Froger';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Nette uitstraling, heldere afspraken en vlotte op‑ en afbouw. Compleet met licht & geluid. Snel schakelen via WhatsApp.');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          serviceType: 'DJ voor bedrijfsfeest',
          provider: { '@type': 'Person', name: 'Kevin Froger', url: 'https://kevinfroger.nl/' },
          areaServed: ['Zuid-Holland', 'Noord-Brabant', 'Gelderland', 'Utrecht', 'Overijssel'],
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Hoe zorg je voor nette uitstraling?', acceptedAnswer: { '@type': 'Answer', text: 'Professionele kleding, discrete opstelling en representatieve communicatie tijdens het event.' } },
            { '@type': 'Question', name: 'Kun je facturen leveren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, ik lever altijd nette facturen voor zakelijke boekingen met alle benodigde gegevens.' } },
          ],
        },
      ],
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const services = [
    { icon: <Building size={28} />, title: 'Bedrijfsfeesten & jubilea', description: 'Muzikale begeleiding voor bedrijfsfeesten en mijlpalen' },
    { icon: <Users size={28} />, title: 'Netwerkborrels & recepties', description: 'Subtiele achtergrondmuziek voor networking en borrels' },
    { icon: <Trophy size={28} />, title: 'Personeelsfeesten', description: 'Van gezellig borrelmoment tot uitbundig teamfeest' },
    { icon: <Target size={28} />, title: 'Productlanceringen & events', description: 'Muzikale ondersteuning bij presentaties en openingen' },
  ];

  const usps = [
    'Professionele uitstraling en representatief optreden',
    'Flexibel: van achtergrondmuziek tot feestavond',
    'Afstemming met locatie en planning vooraf',
    'Microfoon en MC-services indien gewenst',
  ];

  const faq = [
    { question: 'Hoe zorg je voor nette uitstraling?', answer: 'Professionele kleding, discrete opstelling en representatieve communicatie tijdens het event.' },
    { question: 'Kun je facturen leveren?', answer: 'Ja, ik lever altijd nette facturen voor zakelijke boekingen met alle benodigde gegevens.' },
    { question: 'Hoe stem je af met de locatie?', answer: 'Vooraf bezoek ik de locatie om techniek, opbouw en draaiboek door te nemen met de organisatie.' },
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
          <span className="kf-label">Zakelijk DJ</span>
          <h1 style={{ fontFamily: 'var(--kf-font-heading)', fontWeight: 900, fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#151515', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1.25rem' }}>
            DJ voor bedrijfsfeest & relaties – verzorgd tot in de puntjes
          </h1>
          <p style={{ color: 'rgba(21,21,21,0.62)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '600px', marginBottom: '2rem' }}>
            Representatieve presentatie met muziek die past bij jullie organisatie en publiek. Heldere afspraken vooraf; op de avond zelf geen verrassingen.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#contact" className="kf-button-primary">Vraag offerte aan</a>
            <a href="https://wa.me/31645251333" target="_blank" rel="noopener noreferrer" className="kf-button-secondary">Snel schakelen via WhatsApp</a>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Services */}
      <section className="kf-section" style={{ background: '#ffffff' }}>
        <div className="kf-section-inner">
          <div className="text-center mb-14">
            <p className="kf-label mb-3">Zakelijke evenementen</p>
            <h2 className="kf-section-title text-3xl md:text-4xl font-black">Professioneel voor elk zakelijk event</h2>
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
            <h2 className="kf-section-title text-2xl md:text-3xl font-black">Zakelijke DJ in jouw regio</h2>
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
            <h2 className="kf-section-title text-3xl md:text-4xl font-black">Plan uw zakelijk event</h2>
            <p className="mt-3 text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>Vrijblijvende offerte – reactie binnen 24 uur</p>
          </div>
          <div className="p-8 md:p-10" style={{ background: '#fff7e6', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '20px' }}>
            <ContactForm eventType="bedrijfsfeest" />
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

export default ZakelijkDJPage;
