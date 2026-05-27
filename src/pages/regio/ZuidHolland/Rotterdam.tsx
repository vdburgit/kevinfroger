import React from 'react';
import { MapPin, Calendar, Users, Award, Heart, Building, Zap, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../../components/ContactForm';
import { GradientDivider } from '../../../components/GradientDivider';

const Rotterdam = () => {
  React.useEffect(() => {
    document.title = "DJ Rotterdam | DJ Kevin Froger Maasstad | 300+ Events";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Rotterdam ✨ 300+ events in de Maasstad. DJ Kevin Froger van centrum tot Hoek van Holland. Professionele DJ services Rotterdam. Boek nu!');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'DJ Rotterdam | DJ Kevin Froger Maasstad');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'DJ Rotterdam ✨ 300+ events in de Maasstad. DJ Kevin Froger van centrum tot Hoek van Holland. Professionele DJ services Rotterdam.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/regio/zuid-holland/rotterdam');
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
            {"@type": "ListItem", "position": 4, "name": "Rotterdam", "item": "https://kevinfroger.nl/regio/zuid-holland/rotterdam"}
          ]
        },
        {
          "@type": "LocalBusiness",
          "name": "DJ Rotterdam - DJ Kevin Froger",
          "description": "Professionele DJ services in Rotterdam en alle wijken van de Maasstad",
          "url": "https://kevinfroger.nl/regio/zuid-holland/rotterdam",
          "telephone": "+31645251333",
          "areaServed": "Rotterdam",
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
      title: "Bruiloften Rotterdam",
      description: "Professionele bruiloft DJ voor alle locaties in Rotterdam",
      icon: <Heart size={28} />,
    },
    {
      title: "Bedrijfsfeesten",
      description: "Corporate events en zakelijke bijeenkomsten in Rotterdam",
      icon: <Building size={28} />,
    },
    {
      title: "Privé Feesten",
      description: "Verjaardagen en familiefeesten door heel Rotterdam",
      icon: <Users size={28} />,
    },
    {
      title: "Festivals & Events",
      description: "Grote evenementen en festivals in de Maasstad",
      icon: <Zap size={28} />,
    }
  ];

  const districts = [
    "Rotterdam Centrum", "Kralingen-Crooswijk", "Noord", "Hillegersberg-Schiebroek",
    "Prins Alexander", "Charlois", "Feijenoord", "IJsselmonde", "Pernis",
    "Hoek van Holland", "Rozenburg", "Overschie", "Delfshaven", "Hoogvliet"
  ];

  const venues = [
    "Hotel New York", "SS Rotterdam", "Euromast", "Kunsthal Rotterdam",
    "De Doelen", "Ahoy Rotterdam", "Villa Thalia", "Boijmans Van Beuningen",
    "Wereldmuseum", "Cruise Terminal", "Maassilo", "LantarenVenster"
  ];

  const stats = [
    { number: "15+", label: "Jaar in Rotterdam" },
    { number: "300+", label: "Events in Rotterdam" },
    { number: "150+", label: "Rotterdamse Bruiloften" },
    { number: "100+", label: "Corporate Events" }
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
            <li style={{ color: '#151515' }} className="font-semibold">Rotterdam</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="kf-seo-hero" role="banner">
        <div className="kf-section-inner relative z-10 text-center py-24 lg:py-36">
          <div className="flex items-center justify-center gap-2 mb-5">
            <MapPin size={18} style={{ color: '#ff7a00' }} />
            <span className="kf-eyebrow">Rotterdam</span>
          </div>
          <h1 className="kf-hero-title mb-6" style={{ color: '#151515' }}>DJ Kevin Froger <span style={{ color: '#e60000' }}>Rotterdam</span></h1>
          <p className="kf-hero-subtitle mx-auto mb-10" style={{ maxWidth: '640px', color: 'rgba(21,21,21,0.62)' }}>
            Professionele DJ services in Rotterdam. Van het centrum tot Hoek van Holland, van bruiloften in Hotel New York tot bedrijfsfeesten in Ahoy - altijd de perfecte muziek.
          </p>
          <div className="kf-hero-actions justify-center">
            <a href="#contact" className="kf-btn-primary"><Calendar size={18} /> Boek nu in Rotterdam</a>
            <a href="tel:0645251333" className="kf-btn-secondary"><Phone size={18} /> 06 45 25 13 33</a>
          </div>
          {/* Stats */}
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
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">DJ services Rotterdam</h2>
            <p className="mt-3 text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>Professionele DJ services voor alle gelegenheden in Rotterdam</p>
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
            <h2>DJ Rotterdam - Professionele DJ Services Maasstad</h2>
            <p>Zoek je een DJ in Rotterdam? DJ Kevin Froger is dé specialist voor alle evenementen in de Maasstad. Met 15+ jaar ervaring en 300+ events in Rotterdam zorgt Kevin voor perfecte entertainment. Van bruiloften in Hotel New York tot bedrijfsfeesten in Ahoy Rotterdam.</p>

            <h3>DJ Rotterdam - Alle Wijken en Districten</h3>
            <p>Kevin verzorgt DJ services in heel Rotterdam en alle wijken: DJ Rotterdam Centrum, DJ Kralingen-Crooswijk, DJ Rotterdam Noord, DJ Hillegersberg-Schiebroek, DJ Prins Alexander, DJ Charlois, DJ Feijenoord, DJ IJsselmonde, DJ Pernis, DJ Hoek van Holland, DJ Rozenburg, DJ Overschie, DJ Delfshaven, DJ Hoogvliet. DJ Rotterdam alle wijken beschikbaar.</p>

            <h3>Bruiloft DJ Rotterdam</h3>
            <p>Voor bruiloften in Rotterdam heeft Kevin meer dan 150 succesvolle events begeleid. Van Hotel New York tot SS Rotterdam, van Euromast tot Villa Thalia - Kevin maakt jullie bruiloft onvergetelijk in de Maasstad. Bruiloft DJ Rotterdam met complete muzikale begeleiding van ceremonie tot feestavond.</p>

            <h3>Bedrijfsfeest DJ Rotterdam</h3>
            <p>Bedrijfsfeesten in Rotterdam verdienen professionele begeleiding. Kevin heeft ervaring met corporate events in Ahoy Rotterdam, World Trade Center, Cruise Terminal, Maassilo en andere prestigieuze locaties. Bedrijfsfeest DJ Rotterdam voor alle corporate events in de Maasstad.</p>

            <h3>Festival DJ Rotterdam</h3>
            <p>Van North Sea Jazz tot lokale wijkfestivals - Kevin heeft ervaring met alle soorten festivals in Rotterdam. High-energy performances voor elk publiek in de Maasstad. Festival DJ Rotterdam voor grote en kleine evenementen in de havenstad.</p>

            <h3>DJ Boeken Rotterdam</h3>
            <p>Wil je een DJ boeken in Rotterdam? Kevin Froger is beschikbaar voor alle wijken en locaties in de Maasstad. Neem contact op voor een vrijblijvende offerte voor jouw evenement in Rotterdam. DJ boeken Rotterdam - binnen 24 uur reactie gegarandeerd.</p>

            <h3>Populaire Zoektermen DJ Rotterdam</h3>
            <p>DJ Rotterdam centrum, DJ Rotterdam noord, DJ Rotterdam zuid, bruiloft DJ Rotterdam, bedrijfsfeest DJ Rotterdam, festival DJ Rotterdam, corporate DJ Rotterdam, party DJ Rotterdam, allround DJ Rotterdam, professionele DJ Rotterdam, DJ Rotterdam boeken, DJ Rotterdam huren, Maasstad DJ, Rotterdam entertainment.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-black mb-8" style={{ color: '#151515' }}>Alle wijken Rotterdam</h2>
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
              <h2 className="text-2xl md:text-3xl font-black mb-8" style={{ color: '#151515' }}>Populaire locaties</h2>
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
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">Boek DJ Kevin in Rotterdam</h2>
            <p className="mt-3 text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>Klaar om jouw evenement in Rotterdam onvergetelijk te maken?</p>
          </div>
          <div className="kf-hero-card p-8 md:p-10">
            <ContactForm eventType="Rotterdam evenement" />
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

export default Rotterdam;
