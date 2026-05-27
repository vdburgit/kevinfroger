import React from 'react';
import { MapPin, Calendar, Users, Award, Heart, Building, Zap, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../../components/ContactForm';
import { GradientDivider } from '../../../components/GradientDivider';

const Amsterdam = () => {
  React.useEffect(() => {
    document.title = "DJ Amsterdam | DJ Kevin Froger Hoofdstad | 200+ Events";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Amsterdam ✨ 200+ events in de hoofdstad. DJ Kevin Froger van centrum tot Noord. Professionele DJ services Amsterdam. Boek nu!');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'DJ Amsterdam | DJ Kevin Froger Hoofdstad');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'DJ Amsterdam ✨ 200+ events in de hoofdstad. DJ Kevin Froger van centrum tot Noord. Professionele DJ services Amsterdam.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/regio/noord-holland/amsterdam');
    if (!document.head.contains(ogUrl)) document.head.appendChild(ogUrl);

    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', 'https://kevinfroger.nl/images/kevin-portrait.png');
    if (!document.head.contains(ogImage)) document.head.appendChild(ogImage);

    const ogSiteName = document.querySelector('meta[property="og:site_name"]') || document.createElement('meta');
    ogSiteName.setAttribute('property', 'og:site_name');
    ogSiteName.setAttribute('content', 'DJ Kevin Froger');
    if (!document.head.contains(ogSiteName)) document.head.appendChild(ogSiteName);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://kevinfroger.nl/"},
            {"@type": "ListItem", "position": 2, "name": "Regio", "item": "https://kevinfroger.nl/regio"},
            {"@type": "ListItem", "position": 3, "name": "Noord-Holland", "item": "https://kevinfroger.nl/regio/noord-holland"},
            {"@type": "ListItem", "position": 4, "name": "Amsterdam", "item": "https://kevinfroger.nl/regio/noord-holland/amsterdam"}
          ]
        },
        {
          "@type": "LocalBusiness",
          "name": "DJ Amsterdam - DJ Kevin Froger",
          "description": "Professionele DJ services in Amsterdam en alle wijken van de hoofdstad",
          "url": "https://kevinfroger.nl/regio/noord-holland/amsterdam",
          "telephone": "+31645251333",
          "areaServed": "Amsterdam",
          "sameAs": [
            "https://www.instagram.com/djkevinfroger/",
            "https://www.linkedin.com/in/kevin-froger-b23aa263/",
            "https://www.facebook.com/KevinFroger.nl",
            "https://wa.me/31645251333"
          ]
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const services = [
    {
      title: "Bruiloften Amsterdam",
      description: "Romantische bruiloft DJ in de hoofdstad",
      icon: <Heart size={28} />,
    },
    {
      title: "Corporate Events",
      description: "Zakelijke evenementen in Amsterdam",
      icon: <Building size={28} />,
    },
    {
      title: "Festivals Amsterdam",
      description: "Grote evenementen in de hoofdstad",
      icon: <Zap size={28} />,
    },
    {
      title: "Privé Feesten",
      description: "Exclusieve feesten in Amsterdam",
      icon: <Users size={28} />,
    }
  ];

  const districts = [
    "Amsterdam Centrum", "Amsterdam Noord", "Amsterdam Zuid", "Amsterdam Oost", "Amsterdam West",
    "Amsterdam Zuidoost", "Amsterdam Nieuw-West", "Zuidas", "Bijlmermeer", "Jordaan", "De Pijp", "Oud-Zuid"
  ];

  const venues = [
    "Concertgebouw", "Rijksmuseum", "Lloyd Hotel", "Amstel Hotel",
    "Royal Concertgebouw", "Ziggo Dome", "AFAS Live", "Paradiso",
    "Melkweg", "Carré", "Vondelpark", "Museumplein"
  ];

  const stats = [
    { number: "15+", label: "Jaar in Amsterdam" },
    { number: "200+", label: "Events in Amsterdam" },
    { number: "120+", label: "Amsterdamse Bruiloften" },
    { number: "80+", label: "Corporate Events" }
  ];

  return (
    <div style={{ background: '#ffffff', color: '#151515' }}>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ background: '#f7f3ed', borderBottom: '1px solid rgba(0,0,0,0.08)' }} className="py-3">
        <div className="kf-section-inner py-0">
          <ol className="flex items-center gap-2 text-xs" style={{ color: 'rgba(21,21,21,0.60)' }}>
            <li><Link to="/" className="transition-colors hover:underline">Home</Link></li>
            <li>/</li>
            <li><Link to="/regio" className="transition-colors hover:underline">Regio</Link></li>
            <li>/</li>
            <li><Link to="/regio/noord-holland" className="transition-colors hover:underline">Noord-Holland</Link></li>
            <li>/</li>
            <li style={{ color: '#151515' }} className="font-semibold">Amsterdam</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="kf-seo-hero" role="banner">
        <div className="kf-section-inner relative z-10 text-center py-24 lg:py-36">
          <div className="flex items-center justify-center gap-2 mb-5">
            <MapPin size={18} style={{ color: '#ff7a00' }} />
            <span className="kf-eyebrow">Amsterdam</span>
          </div>
          <h1 className="kf-hero-title mb-6" style={{ color: '#151515' }}>DJ Kevin Froger <span style={{ color: '#e60000' }}>Amsterdam</span></h1>
          <p className="kf-hero-subtitle mx-auto mb-10" style={{ maxWidth: '640px', color: 'rgba(21,21,21,0.62)' }}>
            Professionele DJ services in Amsterdam. Van het centrum tot Amsterdam Noord,
            van bruiloften in de hoofdstad tot internationale corporate events - altijd de perfecte sfeer in de hoofdstad.
          </p>
          <div className="kf-hero-actions justify-center">
            <a href="#contact" className="kf-btn-primary"><Calendar size={18} /> Boek nu in Amsterdam</a>
            <a href="tel:0645251333" className="kf-btn-secondary"><Phone size={18} /> 06 45 25 13 33</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mt-14">
            {stats.map((s, i) => (
              <div key={i} style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '20px', boxShadow: '0 4px 18px rgba(0,0,0,0.07)' }} className="p-4 text-center">
                <div className="text-2xl font-black" style={{ color: '#151515' }}>{s.number}</div>
                <div className="text-xs mt-1" style={{ color: 'rgba(21,21,21,0.60)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Services */}
      <section className="kf-section" style={{ background: '#ffffff' }}>
        <div className="kf-section-inner">
          <div className="text-center mb-14">
            <p className="kf-label mb-3">DJ services</p>
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">DJ services Amsterdam</h2>
          </div>
          <div className="kf-services-grid">
            {services.map((s, i) => (
              <div key={i} className="kf-service-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '20px', boxShadow: '0 4px 18px rgba(0,0,0,0.07)' }}>
                <div className="mb-5 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,122,0,0.10)', color: '#ff7a00' }}>
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#151515' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(21,21,21,0.60)' }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Districts & Venues */}
      <section className="kf-section" style={{ background: '#fff7e6' }}>
        <div className="kf-section-inner">
          <div className="sr-only prose prose-lg max-w-none">
            <h2>DJ Amsterdam - Professionele DJ Services Hoofdstad</h2>
            <p>Zoek je een DJ in Amsterdam? DJ Kevin Froger verzorgt professionele DJ services in de hoofdstad. Van bruiloften in het Concertgebouw tot corporate events in de Zuidas - altijd de perfecte sfeer in Amsterdam.</p>

            <h3>DJ Amsterdam - Alle Stadsdelen</h3>
            <p>Kevin is actief in heel Amsterdam: DJ Amsterdam Centrum, DJ Amsterdam Noord, DJ Amsterdam Zuid, DJ Amsterdam Oost, DJ Amsterdam West, DJ Amsterdam Zuidoost, DJ Amsterdam Nieuw-West, DJ Zuidas, DJ Bijlmermeer, DJ Jordaan, DJ De Pijp.</p>

            <h3>Bruiloft DJ Amsterdam</h3>
            <p>Voor bruiloften in Amsterdam heeft Kevin meer dan 120 succesvolle events begeleid. Van Concertgebouw tot Rijksmuseum, van Lloyd Hotel tot Amstel Hotel - Kevin maakt jullie bruiloft onvergetelijk in de hoofdstad.</p>

            <h3>Corporate DJ Amsterdam</h3>
            <p>Amsterdam is het zakelijke centrum van Nederland. Kevin verzorgt corporate events voor multinationals, financiële instellingen en tech companies in de Zuidas en andere zakelijke districten.</p>

            <h3>Festival DJ Amsterdam</h3>
            <p>Van Amsterdam Dance Event tot Koningsdag - Kevin heeft ervaring met alle grote festivals in Amsterdam. Van Ziggo Dome tot outdoor events in de hoofdstad.</p>

            <h3>DJ Zuidas Amsterdam</h3>
            <p>De Zuidas is het financiële district van Amsterdam. Kevin heeft ervaring met high-end corporate events en zakelijke bijeenkomsten in dit prestigieuze gebied.</p>

            <h3>DJ Boeken Amsterdam</h3>
            <p>Wil je een DJ boeken in Amsterdam? Kevin Froger kent alle locaties van het centrum tot Noord. Professionele DJ services voor de hoofdstad.</p>

            <h3>Populaire DJ Services Amsterdam</h3>
            <p>DJ Amsterdam centrum, DJ Zuidas, bruiloft DJ Amsterdam, corporate DJ Amsterdam, festival DJ Amsterdam, hoofdstad DJ, internationale DJ Amsterdam, professionele DJ Amsterdam.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-black kf-section-title mb-8">Alle wijken Amsterdam</h2>
              <div className="grid grid-cols-2 gap-3">
                {districts.map((d, i) => (
                  <div key={i} style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '20px', boxShadow: '0 4px 18px rgba(0,0,0,0.07)' }} className="flex items-center gap-3 p-3">
                    <MapPin size={14} style={{ color: '#ff7a00', flexShrink: 0 }} />
                    <span className="text-xs font-bold" style={{ color: '#151515' }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black kf-section-title mb-8">Populaire locaties</h2>
              <div className="grid grid-cols-2 gap-3">
                {venues.map((v, i) => (
                  <div key={i} style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '20px', boxShadow: '0 4px 18px rgba(0,0,0,0.07)' }} className="flex items-center gap-3 p-3">
                    <Building size={14} style={{ color: '#ff7a00', flexShrink: 0 }} />
                    <span className="text-xs font-bold" style={{ color: '#151515' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Contact */}
      <section id="contact" className="kf-section scroll-mt-24" style={{ background: '#ffffff' }}>
        <div className="kf-section-inner" style={{ maxWidth: '720px' }}>
          <div className="text-center mb-10">
            <p className="kf-label mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">Boek DJ Kevin in Amsterdam</h2>
          </div>
          <div className="kf-hero-card p-8 md:p-10">
            <ContactForm eventType="Amsterdam evenement" />
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:0645251333" className="kf-btn-secondary"><Phone size={16} /> 06 45 25 13 33</a>
            <a href="https://wa.me/31645251333" target="_blank" rel="noopener noreferrer" className="kf-btn-secondary" style={{ color: '#25D366', borderColor: 'rgba(37,211,102,0.3)' }}>
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amsterdam;
