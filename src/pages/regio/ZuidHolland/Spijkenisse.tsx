import React from 'react';
import { MapPin, Calendar, Users, Award, Heart, Building, Zap, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../../components/ContactForm';
import { GradientDivider } from '../../../components/GradientDivider';

const Spijkenisse = () => {
  React.useEffect(() => {
    document.title = "DJ Spijkenisse | DJ Kevin Froger Putten | 100+ Events";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Spijkenisse ✨ 100+ events op Putten. DJ Kevin Froger van centrum tot Hekelingen. Professionele DJ services Spijkenisse. Boek nu!');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'DJ Spijkenisse | DJ Kevin Froger Putten');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'DJ Spijkenisse ✨ 100+ events op Putten. DJ Kevin Froger van centrum tot Hekelingen. Professionele DJ services Spijkenisse.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/regio/zuid-holland/spijkenisse');
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
            {"@type": "ListItem", "position": 3, "name": "Zuid-Holland", "item": "https://kevinfroger.nl/regio/zuid-holland"},
            {"@type": "ListItem", "position": 4, "name": "Spijkenisse", "item": "https://kevinfroger.nl/regio/zuid-holland/spijkenisse"}
          ]
        },
        {
          "@type": "LocalBusiness",
          "name": "DJ Spijkenisse - DJ Kevin Froger",
          "description": "Professionele DJ services in Spijkenisse en alle plaatsen op Putten",
          "url": "https://kevinfroger.nl/regio/zuid-holland/spijkenisse",
          "telephone": "+31645251333",
          "areaServed": "Spijkenisse",
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
      title: "Bruiloften Spijkenisse",
      description: "Romantische bruiloft DJ op Putten en omgeving",
      icon: <Heart size={28} />,
    },
    {
      title: "Bedrijfsfeesten",
      description: "Corporate events in Spijkenisse en Bernisse",
      icon: <Building size={28} />,
    },
    {
      title: "Privé Feesten",
      description: "Gezellige familiefeesten in Spijkenisse",
      icon: <Users size={28} />,
    },
    {
      title: "Festivals & Events",
      description: "Grote evenementen op het eiland Putten",
      icon: <Zap size={28} />,
    }
  ];

  const districts = [
    "Spijkenisse Centrum", "Hekelingen", "Zwartewaal", "Geervliet", "Bernisse",
    "Zuidland", "Heenvliet", "Abbenbroek", "Simonshaven", "Nieuw-Helvoet"
  ];

  const venues = [
    "Theater De Stoep", "Recreatiepark De Oosterpark", "Golfbaan Spijkenisse", "Zwembad De Waterdam",
    "Sportpark De Kooi", "Cultuurhuis De Stoep", "Bernisse Haven", "Zwartewaal Centrum",
    "Heenvliet Kasteel", "Abbenbroek Kerk", "Simonshaven Jachthaven", "Nieuw-Helvoet Park"
  ];

  const stats = [
    { number: "15+", label: "Jaar in Spijkenisse" },
    { number: "100+", label: "Events in Spijkenisse" },
    { number: "60+", label: "Spijkenisser Bruiloften" },
    { number: "35+", label: "Corporate Events" }
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
            <li><Link to="/regio/zuid-holland" className="transition-colors hover:underline">Zuid-Holland</Link></li>
            <li>/</li>
            <li style={{ color: '#151515' }} className="font-semibold">Spijkenisse</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="kf-seo-hero" role="banner">
        <div className="kf-section-inner relative z-10 text-center py-24 lg:py-36">
          <div className="flex items-center justify-center gap-2 mb-5">
            <MapPin size={18} style={{ color: '#ff7a00' }} />
            <span className="kf-eyebrow">Spijkenisse</span>
          </div>
          <h1 className="kf-hero-title mb-6" style={{ color: '#151515' }}>DJ Kevin Froger <span style={{ color: '#e60000' }}>Spijkenisse</span></h1>
          <p className="kf-hero-subtitle mx-auto mb-10" style={{ maxWidth: '640px', color: 'rgba(21,21,21,0.62)' }}>
            Professionele DJ services in Spijkenisse. Van het centrum tot Hekelingen,
            van bruiloften op Putten tot bedrijfsfeesten - altijd de perfecte sfeer op het eiland.
          </p>
          <div className="kf-hero-actions justify-center">
            <a href="#contact" className="kf-btn-primary"><Calendar size={18} /> Boek nu in Spijkenisse</a>
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
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">DJ services Spijkenisse</h2>
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
            <h2>DJ Spijkenisse - Professionele DJ Services Putten</h2>
            <p>Zoek je een DJ in Spijkenisse? DJ Kevin Froger verzorgt professionele DJ services op het eiland Putten. Van bruiloften in Theater De Stoep tot bedrijfsfeesten - altijd de perfecte sfeer in Spijkenisse.</p>

            <h3>DJ Spijkenisse - Alle Plaatsen</h3>
            <p>Kevin is actief in heel Spijkenisse en omgeving: DJ Spijkenisse Centrum, DJ Hekelingen, DJ Zwartewaal, DJ Geervliet, DJ Bernisse, DJ Zuidland, DJ Heenvliet, DJ Abbenbroek, DJ Simonshaven, DJ Nieuw-Helvoet.</p>

            <h3>Bruiloft DJ Spijkenisse</h3>
            <p>Voor bruiloften in Spijkenisse heeft Kevin meer dan 60 succesvolle events begeleid. Van Theater De Stoep tot Recreatiepark De Oosterpark, van Golfbaan Spijkenisse tot Zwembad De Waterdam - Kevin maakt jullie bruiloft onvergetelijk.</p>

            <h3>Bedrijfsfeest DJ Spijkenisse</h3>
            <p>Spijkenisse heeft een bloeiende bedrijvensector. Kevin verzorgt bedrijfsfeesten voor lokale ondernemingen en heeft ervaring met corporate events op het eiland Putten.</p>

            <h3>Festival DJ Spijkenisse</h3>
            <p>Van lokale festivals tot grote outdoor events - Kevin heeft ervaring met alle soorten festivals in Spijkenisse en omgeving. Altijd high-energy performances voor het eiland.</p>

            <h3>DJ Boeken Spijkenisse</h3>
            <p>Wil je een DJ boeken in Spijkenisse? Kevin Froger kent alle locaties op Putten. Professionele DJ services voor Spijkenisse en omliggende plaatsen.</p>

            <h3>Populaire DJ Services Spijkenisse</h3>
            <p>DJ Spijkenisse centrum, DJ Hekelingen, bruiloft DJ Spijkenisse, bedrijfsfeest DJ Spijkenisse, festival DJ Spijkenisse, DJ Putten, eiland DJ, professionele DJ Spijkenisse.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-black kf-section-title mb-8">Alle wijken Spijkenisse</h2>
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
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">Boek DJ Kevin in Spijkenisse</h2>
          </div>
          <div className="kf-hero-card p-8 md:p-10">
            <ContactForm eventType="Spijkenisse evenement" />
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

export default Spijkenisse;
