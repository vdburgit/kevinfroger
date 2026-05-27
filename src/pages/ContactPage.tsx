import React from 'react';
import { Phone, Mail, CheckCircle, Award, Users, Music, Calendar, Star, MessageCircle, Send, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { GradientDivider } from '../components/GradientDivider';
import { useSEO, generateBreadcrumbSchema } from '../hooks/useSEO';

const ContactPage = () => {
  useSEO({
    title: 'Contact DJ Kevin Froger | DJ Boeken | Gratis Offerte',
    description: 'Contact DJ Kevin Froger - allround DJ boeken Nederland. Gratis offerte binnen 24u, 15+ jaar ervaring, 1000+ events. Bel 06 45 25 13 33 of stuur WhatsApp!',
    keywords: 'dj boeken, dj contact, dj offerte, dj huren nederland, dj prijs, contact kevin froger, dj beschikbaarheid',
    canonical: 'https://kevinfroger.nl/contact',
    ogType: 'website',
    ogImage: 'https://kevinfroger.nl/images/kevin-portrait.png',
    ogImageAlt: 'DJ Kevin Froger - Contact voor DJ boekingen',
    twitterCard: 'summary_large_image',
    jsonLd: [
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'DJ Kevin Froger',
        url: 'https://kevinfroger.nl',
        telephone: '+31645251333',
        email: 'booking@kevinfroger.nl',
        areaServed: [
          { '@type': 'Place', name: 'Nederland' },
          { '@type': 'Place', name: 'Zuid-Holland' },
          { '@type': 'Place', name: 'Noord-Brabant' },
          { '@type': 'Place', name: 'Gelderland' },
          { '@type': 'Place', name: 'Utrecht' },
          { '@type': 'Place', name: 'Overijssel' },
          { '@type': 'Place', name: 'Noord-Holland' },
          { '@type': 'Place', name: 'Zeeland' },
        ],
        sameAs: [
          'https://www.instagram.com/djkevinfroger/',
          'https://www.linkedin.com/in/kevin-froger-b23aa263/',
          'https://www.facebook.com/KevinFroger.nl',
          'https://wa.me/31645251333',
        ],
        address: { '@type': 'PostalAddress', addressCountry: 'NL' },
        priceRange: '€€',
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '47' },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'DJ boeken in 3 stappen',
        totalTime: 'PT24H',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Beschikbaarheid checken', text: 'Datum & locatie checken. Direct beschikbaarheid via WhatsApp of contactformulier.' },
          { '@type': 'HowToStep', position: 2, name: 'Offerte ontvangen', text: 'Showkeuze & prijs bevestigen. Gratis offerte binnen 24 uur.' },
          { '@type': 'HowToStep', position: 3, name: 'Definitief boeken', text: 'Contract & planning rond. Persoonlijke begeleiding tot en met je evenement.' },
        ],
      },
    ],
  });

  const contactMethods = [
    { icon: <Phone size={24} />, title: 'Direct bellen', subtitle: 'Voor snelle vragen en spoedboekingen', contact: '06 45 25 13 33', href: 'tel:0645251333', note: 'Bereikbaar 7 dagen per week' },
    { icon: <MessageCircle size={24} />, title: 'WhatsApp', subtitle: 'Snelle berichten en foto\'s delen', contact: '06 45 25 13 33', href: 'https://api.whatsapp.com/send/?phone=31645251333&text&type=phone_number&app_absent=0', note: 'Gemiddeld binnen 1 uur reactie' },
    { icon: <Mail size={24} />, title: 'E-mail sturen', subtitle: 'Voor uitgebreide vragen', contact: 'booking@kevinfroger.nl', href: 'mailto:booking@kevinfroger.nl', note: 'Binnen 24 uur uitgebreid antwoord' },
    { icon: <Send size={24} />, title: 'Formulier', subtitle: 'Persoonlijke offerte aanvragen', contact: 'Scroll naar beneden', href: '#contact-form', note: 'Binnen 24 uur jouw offerte' },
  ];

  const stats = [
    { icon: <Award size={22} />, number: '15+', label: 'Jaar ervaring' },
    { icon: <MapPin size={22} />, number: '7', label: 'Provincies' },
    { icon: <Music size={22} />, number: '50+', label: 'Festivals' },
    { icon: <CheckCircle size={22} />, number: '1000+', label: 'Events' },
  ];

  const process = [
    { step: '01', title: 'Contact & Intake', description: 'Vertel ons over uw evenement en wensen', icon: <Calendar size={22} /> },
    { step: '02', title: 'Offerte op maat', description: 'Binnen 24 uur een persoonlijke offerte', icon: <Star size={22} /> },
    { step: '03', title: 'Voorbereiding', description: 'Muziekwensen en technische planning', icon: <Music size={22} /> },
    { step: '04', title: 'Evenement', description: 'Ontspannen genieten van jouw feest', icon: <CheckCircle size={22} /> },
  ];

  const faqs = [
    { question: 'Hoe ver van tevoren moet ik boeken?', answer: 'Voor bruiloften raden we 6–12 maanden aan. Voor andere evenementen is 2–3 maanden meestal voldoende. Is het al snel? Bel dan direct, we denken graag mee bij last-minute boekingen.' },
    { question: 'Wat is inbegrepen in de prijs?', answer: 'Standaard inbegrepen: DJ services, complete geluidsapparatuur, draadloze microfoons, basisverlichting en voor-/nabereiding. Uitgebreide licht shows en extra apparatuur kunnen worden toegevoegd.' },
    { question: 'Kunnen we eigen muziekwensen doorgeven?', answer: 'Absoluut! We bespreken vooraf uitgebreid jullie muziekvoorkeuren en no-go songs. Jullie kunnen een playlist aanleveren die we vakkundig verwerken in de set.' },
    { question: 'Hoe zit het met de technische setup?', answer: 'Wij verzorgen de complete technische setup en breakdown. We hebben eigen professionele apparatuur en zorgen voor de juiste aansluitingen en veiligheid.' },
    { question: 'Wat gebeurt er bij ziekte of noodgevallen?', answer: 'We hebben altijd een backup plan en een netwerk van professionele DJ\'s die kunnen invallen. Jouw evenement gaat altijd door met dezelfde kwaliteit.' },
    { question: 'Kunnen jullie ook buiten Nederland optreden?', answer: 'Ja, we verzorgen ook evenementen in België en Duitsland. Voor internationale boekingen bespreken we de specifieke voorwaarden en kosten.' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ background: '#ffffff', color: '#151515' }}>

      {/* Hero */}
      <section className="kf-seo-hero" role="banner" aria-labelledby="contact-hero-title">
        <div className="kf-seo-hero__inner">
          <span className="kf-label">Contact</span>
          <h1 id="contact-hero-title" style={{ fontFamily: 'var(--kf-font-heading)', fontWeight: 900, fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#151515', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1.25rem' }}>
            Neem contact op met DJ Kevin
          </h1>
          <p style={{ color: 'rgba(21,21,21,0.62)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '600px', marginBottom: '2rem' }}>
            Klaar om jouw evenement onvergetelijk te maken? Reactie altijd binnen 24 uur – vrijblijvend.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {stats.map((s, i) => (
              <div key={i} className="p-4 text-center" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', borderRadius: '20px' }}>
                <div className="flex justify-center mb-2" style={{ color: '#e60000' }}>{s.icon}</div>
                <div className="text-2xl font-black" style={{ color: '#151515' }}>{s.number}</div>
                <div className="text-xs mt-0.5" style={{ color: 'rgba(21,21,21,0.60)' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="#contact-form" onClick={e => handleSmoothScroll(e, '#contact-form')} className="kf-button-primary">
              Vraag offerte aan
            </a>
            <a href="https://wa.me/31645251333" target="_blank" rel="noopener noreferrer" className="kf-button-secondary">
              Direct bellen
            </a>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Contact Methods */}
      <section className="kf-section" style={{ background: '#ffffff' }}>
        <div className="kf-section-inner">
          <div className="text-center mb-14">
            <p className="kf-label mb-3">Bereikbaarheid</p>
            <h2 className="kf-section-title text-3xl md:text-4xl font-black">Kies jouw contactmethode</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((m, i) => (
              <a
                key={i}
                href={m.href}
                target={m.href.startsWith('http') ? '_blank' : undefined}
                rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={e => handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>, m.href)}
                className="flex flex-col gap-3 transition-all hover:scale-[1.02] p-6"
                style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', borderRadius: '20px' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(230,0,0,0.08)', color: '#e60000' }}>
                  {m.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1" style={{ color: '#151515' }}>{m.title}</h3>
                  <p className="text-xs mb-2" style={{ color: 'rgba(21,21,21,0.60)' }}>{m.subtitle}</p>
                  <p className="text-sm font-bold" style={{ color: '#e60000' }}>{m.contact}</p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(21,21,21,0.60)' }}>{m.note}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Eventplan-scan */}
      <section id="eventplan-scan" className="kf-section scroll-mt-24" style={{ background: '#fff7e6' }}>
        <div className="kf-section-inner" style={{ maxWidth: '860px' }}>
          <div className="text-center mb-10">
            <p className="kf-label mb-4">Gratis intakegesprek</p>
            <h2 className="kf-section-title text-3xl md:text-4xl font-black mb-4">Eventplan-scan: weet binnen 24 uur wat je nodig hebt</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(21,21,21,0.60)', maxWidth: '600px', margin: '0 auto' }}>
              Nog niet precies wat je wilt? Vraag een gratis Eventplan-scan aan. We kijken naar jouw locatie, publiek, doelen en budget – en geven direct concreet advies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { emoji: '📍', title: 'Locatie-check', desc: 'Techniek passend bij jouw venue' },
              { emoji: '🎵', title: 'Muziekadvies', desc: 'Stijl en BPM voor jouw publiek' },
              { emoji: '⚡', title: 'Risico-scan', desc: 'Geluidslimieten & backup plan' },
              { emoji: '💰', title: 'Pakketadvies', desc: 'Beste prijs-kwaliteit voor jou' },
            ].map((item, i) => (
              <div key={i} className="p-5 text-center" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', borderRadius: '20px' }}>
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="text-sm font-bold mb-1" style={{ color: '#151515' }}>{item.title}</h3>
                <p className="text-xs" style={{ color: 'rgba(21,21,21,0.60)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://api.whatsapp.com/send/?phone=31645251333&text=Ik%20wil%20graag%20een%20gratis%20Eventplan-scan%20aanvragen%20voor%20mijn%20evenement"
              target="_blank"
              rel="noopener noreferrer"
              className="kf-button-primary"
              style={{ background: 'linear-gradient(135deg,#25D366,#1da851)' }}
            >
              <MessageCircle size={18} /> Via WhatsApp aanvragen
            </a>
            <a href="#contact-form" onClick={e => handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>, '#contact-form')} className="kf-button-secondary">
              <Send size={18} /> Via formulier aanvragen
            </a>
          </div>

          <p className="text-xs text-center" style={{ color: 'rgba(21,21,21,0.40)' }}>
            Reactie binnen 24 uur · Direct daarna optioneel belafspraak · Geen verplichtingen
          </p>
        </div>
      </section>

      <GradientDivider />

      {/* Contact Form */}
      <section id="contact-form" className="kf-section scroll-mt-24" style={{ background: '#ffffff' }}>
        <div className="kf-section-inner" style={{ maxWidth: '720px' }}>
          <div className="text-center mb-10">
            <p className="kf-label mb-3">Offerte aanvragen</p>
            <h2 className="kf-section-title text-3xl md:text-4xl font-black">Vraag direct een offerte aan</h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgba(21,21,21,0.60)', maxWidth: '500px', margin: '12px auto 0' }}>
              Vul het formulier in en ontvang binnen 24 uur een persoonlijke offerte op maat. Geen verplichtingen, wel professioneel advies.
            </p>
          </div>
          <div className="p-8 md:p-10" style={{ background: '#fff7e6', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '20px' }}>
            <ContactForm />
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Process */}
      <section className="kf-section" style={{ background: '#f7f3ed' }}>
        <div className="kf-section-inner">
          <div className="text-center mb-14">
            <p className="kf-label mb-3">Hoe werkt het?</p>
            <h2 className="kf-section-title text-3xl md:text-4xl font-black">Van contact tot perfect feest in 4 stappen</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={i} className="p-6 text-center" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', borderRadius: '20px' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(230,0,0,0.08)', color: '#e60000' }}>
                  {p.icon}
                </div>
                <div className="text-xs font-bold tracking-widest mb-2" style={{ color: '#e60000' }}>{p.step}</div>
                <h3 className="text-sm font-bold mb-2" style={{ color: '#151515' }}>{p.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(21,21,21,0.60)' }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* FAQ */}
      <section className="kf-section" style={{ background: '#ffffff' }}>
        <div className="kf-section-inner" style={{ maxWidth: '780px' }}>
          <div className="text-center mb-14">
            <p className="kf-label mb-3">FAQ</p>
            <h2 className="kf-section-title text-3xl md:text-4xl font-black">Veelgestelde vragen</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="p-6" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', borderRadius: '20px' }}>
                <h3 className="text-base font-bold mb-2" style={{ color: '#151515' }}>{f.question}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(21,21,21,0.60)' }}>{f.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm mb-5" style={{ color: 'rgba(21,21,21,0.60)' }}>Staat jouw vraag er niet bij? Neem gerust contact op.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:0645251333" className="kf-button-primary">
                <Phone size={16} /> Bel direct
              </a>
              <a href="https://api.whatsapp.com/send/?phone=31645251333&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="kf-button-secondary" style={{ color: '#25D366', borderColor: 'rgba(37,211,102,0.3)' }}>
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Final CTA */}
      <section className="kf-seo-hero" style={{ minHeight: 'auto' }}>
        <div className="kf-seo-hero__inner text-center py-20">
          <span className="kf-label mb-6 block">Klaar voor de volgende stap?</span>
          <h2 style={{ fontFamily: 'var(--kf-font-heading)', fontWeight: 900, fontSize: 'clamp(1.8rem,4vw,3rem)', color: '#151515', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1rem' }}>
            Klaar voor een onvergetelijk feest?
          </h2>
          <p className="text-sm leading-relaxed mb-10 mx-auto" style={{ color: 'rgba(21,21,21,0.60)', maxWidth: '520px' }}>
            Neem vandaag nog contact op. Binnen 24 uur ontvang je een persoonlijke offerte.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#contact-form" onClick={e => handleSmoothScroll(e as React.MouseEvent<HTMLAnchorElement>, '#contact-form')} className="kf-button-primary">
              Boek nu direct
            </a>
            <a href="tel:0645251333" className="kf-button-secondary">
              <Phone size={16} /> Bel direct
            </a>
            <a href="https://api.whatsapp.com/send/?phone=31645251333&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="kf-button-secondary" style={{ color: '#25D366', borderColor: 'rgba(37,211,102,0.3)' }}>
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
