import React from 'react';
import { Cog, Users, Music, CheckCircle, Star, Calendar, MessageCircle, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { GradientDivider } from '../components/GradientDivider';

const WerkwijzePage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Werkwijze – zo regelen we jouw feest van A tot Z | Kevin Froger';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Heldere stappen: intake, voorbereiding, techniek, show en nazorg. Eén aanspreekpunt en flexibel meedenken.');
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'DJ boeken bij Kevin Froger',
      step: [
        { '@type': 'HowToStep', name: 'Intake', text: 'We bespreken wensen, muziek en planning.' },
        { '@type': 'HowToStep', name: 'Voorbereiding', text: 'Afstemming met locatie en draaiboek.' },
        { '@type': 'HowToStep', name: 'Techniek', text: 'Passende set licht & geluid, klaar voor aanvang.' },
        { '@type': 'HowToStep', name: 'Show', text: 'Allround set, verzoekjes welkom, nette presentatie.' },
        { '@type': 'HowToStep', name: 'Nazorg', text: 'Korte terugkoppeling en evaluatie.' },
      ],
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const steps = [
    {
      step: '01', title: 'Intake', description: 'Kennismaken en behoeftes bespreken',
      details: 'We bespreken je evenement, wensen en verwachtingen. Datum, locatie, tijdschema, muziekvoorkeuren en eventuele speciale verzoeken komen aan bod. Je krijgt binnen 24 uur een prijsindicatie of offerte.',
      icon: <Users size={22} />,
    },
    {
      step: '02', title: 'Voorbereiding', description: 'Planning en afstemming',
      details: 'Ik stem af met de locatie over techniek en ruimte. We stellen samen een draaiboek op met tijdsindeling en belangrijke momenten. Muziekwensen verzamel ik via een handige online tool.',
      icon: <Calendar size={22} />,
    },
    {
      step: '03', title: 'Opbouw', description: 'Installatie en soundcheck',
      details: 'Ik kom ruim voor aanvang de apparatuur opbouwen en instellen. Alles wordt getest: geluid, licht en backup-systemen. Bij aanvang van het feest is alles klaar en werkend.',
      icon: <Cog size={22} />,
    },
    {
      step: '04', title: 'Uitvoering', description: 'Live DJ performance op maat',
      details: 'Ik draai live en stem de muziek af op het publiek en de sfeer. Verzoekjes zijn welkom en worden waar mogelijk ingewerkt. Als MC begeleid ik indien gewenst ook aankondigingen en ceremonies.',
      icon: <Music size={22} />,
    },
    {
      step: '05', title: 'Afbouw & Nazorg', description: 'Netjes afsluiten en evalueren',
      details: 'Na afloop bouw ik de apparatuur netjes af. Optioneel stuur ik je een evaluatieformulier om de samenwerking te bespreken en te leren van jullie ervaring.',
      icon: <Star size={22} />,
    },
  ];

  const benefits = [
    'Direct contact met de DJ – geen verhuurbedrijf of tussenpersonen',
    'Flexibel meedenken bij wijzigingen of onverwachte situaties',
    'Transparante communicatie en heldere afspraken',
    'Persoonlijke betrokkenheid van intake tot afbouw',
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
          <span className="kf-label">Werkwijze</span>
          <h1 style={{ fontFamily: 'var(--kf-font-heading)', fontWeight: 900, fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#151515', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1.25rem' }}>
            Van intake tot nazorg – volledig geregeld
          </h1>
          <p style={{ color: 'rgba(21,21,21,0.62)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '600px', marginBottom: '2rem' }}>
            Één aanspreekpunt, duidelijke stappen en persoonlijke betrokkenheid. Zo werkt samenwerken met DJ Kevin Froger.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#contact" className="kf-button-primary">Vraag offerte aan</a>
            <a href="https://wa.me/31645251333" target="_blank" rel="noopener noreferrer" className="kf-button-secondary">App voor prijsindicatie</a>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Process Steps */}
      <section className="kf-section" style={{ background: '#ffffff' }}>
        <div className="kf-section-inner">
          <div className="text-center mb-14">
            <p className="kf-label mb-3">Het proces</p>
            <h2 className="kf-section-title text-3xl md:text-4xl font-black">Stap voor stap</h2>
          </div>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={i} className="p-6 md:p-8 flex flex-col sm:flex-row gap-6" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', borderRadius: '20px' }}>
                <div className="shrink-0 flex sm:flex-col items-center sm:items-start gap-4 sm:gap-2">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(230,0,0,0.08)', color: '#e60000' }}>
                    {s.icon}
                  </div>
                  <span className="text-xs font-bold tracking-widest" style={{ color: '#e60000' }}>{s.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: '#151515' }}>{s.title}</h3>
                  <p className="text-sm font-semibold mb-2" style={{ color: '#e60000' }}>{s.description}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(21,21,21,0.60)' }}>{s.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Benefits */}
      <section className="kf-section" style={{ background: '#fff7e6' }}>
        <div className="kf-section-inner">
          <div className="text-center mb-14">
            <p className="kf-label mb-3">Voordelen</p>
            <h2 className="kf-section-title text-3xl md:text-4xl font-black">Waarom deze werkwijze?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 flex items-start gap-4" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', borderRadius: '20px' }}>
                <CheckCircle size={20} className="shrink-0 mt-0.5" style={{ color: '#e60000' }} />
                <span className="text-sm leading-relaxed" style={{ color: 'rgba(21,21,21,0.60)' }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Regions */}
      <section className="kf-section" style={{ background: '#f7f3ed' }}>
        <div className="kf-section-inner">
          <div className="text-center mb-10">
            <p className="kf-label mb-3">Regio</p>
            <h2 className="kf-section-title text-2xl md:text-3xl font-black">DJ in jouw regio</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {regions.map((r) => (
              <a key={r.name} href={r.href} className="flex flex-col items-center gap-2 p-4 text-center transition-all hover:scale-105" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', borderRadius: '20px' }}>
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
            <h2 className="kf-section-title text-3xl md:text-4xl font-black">Klaar om te starten?</h2>
            <p className="mt-3 text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>Neem contact op en laten we jouw evenement perfect regelen.</p>
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

export default WerkwijzePage;
