import React from 'react';
import { MapPin, Calendar, Users, Award, Heart, Building, Zap, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../../components/ContactForm';
import { GradientDivider } from '../../../components/GradientDivider';

const Delft = () => {
  React.useEffect(() => {
    document.title = "DJ Delft | DJ Kevin Froger Blauwe Stad | 80+ Events";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Delft ✨ 80+ events in de blauwe stad. DJ Kevin Froger van centrum tot TU Delft. Professionele DJ services Delft. Boek nu!');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'DJ Delft | DJ Kevin Froger Blauwe Stad');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'DJ Delft ✨ 80+ events in de blauwe stad. DJ Kevin Froger van centrum tot TU Delft. Professionele DJ services Delft.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/regio/zuid-holland/delft');
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
            {"@type": "ListItem", "position": 4, "name": "Delft", "item": "https://kevinfroger.nl/regio/zuid-holland/delft"}
          ]
        },
        {
          "@type": "LocalBusiness",
          "name": "DJ Delft - DJ Kevin Froger",
          "description": "Professionele DJ services in Delft en alle wijken van de blauwe stad",
          "url": "https://kevinfroger.nl/regio/zuid-holland/delft",
          "telephone": "+31645251333",
          "areaServed": "Delft",
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
      title: "Bruiloften Delft",
      description: "Romantische bruiloft DJ in de blauwe stad",
      icon: <Heart size={28} />,
    },
    {
      title: "Studentenfeesten TU Delft",
      description: "DJ voor technische universiteit evenementen",
      icon: <Zap size={28} />,
    },
    {
      title: "Bedrijfsfeesten",
      description: "Corporate events in historisch Delft",
      icon: <Building size={28} />,
    },
    {
      title: "Festivals & Events",
      description: "Grote evenementen in de technische stad",
      icon: <Users size={28} />,
    }
  ];

  const districts = [
    "Delft Centrum", "TU Delft Campus", "Vrijenban", "Voorhof", "Buitenhof",
    "Tanthof", "Schieweg", "Wippolder", "Delft Noord", "Delft Zuid"
  ];

  const venues = [
    "Prinsenhof", "Nieuwe Kerk", "Museum Paul Tetar van Elven", "Botanische Tuin",
    "TU Delft Aula", "Delft Blue Factory", "Vermeer Centrum", "Oostpoort",
    "Delftse Hout", "Technopolis", "YES Delft", "Hotel de Plataan"
  ];

  const stats = [
    { number: "15+", label: "Jaar in Delft" },
    { number: "80+", label: "Events in Delft" },
    { number: "50+", label: "Delftse Bruiloften" },
    { number: "30+", label: "TU Delft Events" }
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
            <li style={{ color: '#151515' }} className="font-semibold">Delft</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="kf-seo-hero" role="banner">
        <div className="kf-section-inner relative z-10 text-center py-24 lg:py-36">
          <div className="flex items-center justify-center gap-2 mb-5">
            <MapPin size={18} style={{ color: '#ff7a00' }} />
            <span className="kf-eyebrow">Delft</span>
          </div>
          <h1 className="kf-hero-title mb-6" style={{ color: '#151515' }}>DJ Kevin Froger <span style={{ color: '#e60000' }}>Delft</span></h1>
          <p className="kf-hero-subtitle mx-auto mb-10" style={{ maxWidth: '640px', color: 'rgba(21,21,21,0.62)' }}>
            Professionele DJ services in Delft. Van het centrum tot TU Delft, van bruiloften in de blauwe stad tot studentenfeesten - altijd de perfecte sfeer in de technische stad.
          </p>
          <div className="kf-hero-actions justify-center">
            <a href="#contact" className="kf-btn-primary"><Calendar size={18} /> Boek nu in Delft</a>
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
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">DJ services Delft</h2>
            <p className="mt-3 text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>Professionele DJ services voor alle gelegenheden in Delft</p>
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
            <h2>DJ Delft - Professionele DJ Services Blauwe Stad</h2>
            <p>Zoek je een DJ in Delft? DJ Kevin Froger verzorgt professionele DJ services in de blauwe stad. Van bruiloften in historische panden tot studentenfeesten op TU Delft - altijd de perfecte sfeer in de technische stad.</p>

            <h3>DJ Delft - Alle Wijken</h3>
            <p>Kevin is actief in heel Delft: DJ Delft Centrum, DJ TU Delft, DJ Delft Noord, DJ Delft Zuid, DJ Delft Oost, DJ Delft West, DJ Vrijenban, DJ Voorhof, DJ Buitenhof, DJ Tanthof, DJ Schieweg, DJ Wippolder.</p>

            <h3>Bruiloft DJ Delft</h3>
            <p>Voor bruiloften in Delft heeft Kevin meer dan 50 succesvolle events begeleid. Van Prinsenhof tot Nieuwe Kerk, van Museum Paul Tetar van Elven tot Botanische Tuin - Kevin maakt jullie bruiloft onvergetelijk in de blauwe stad.</p>

            <h3>Studentenfeest DJ Delft</h3>
            <p>TU Delft is een van de beste technische universiteiten ter wereld. Kevin heeft ervaring met studentenfeesten, disputen, verenigingsfeesten en technische gala's op de campus.</p>

            <h3>Bedrijfsfeest DJ Delft</h3>
            <p>Delft heeft veel technische bedrijven en startups. Kevin verzorgt bedrijfsfeesten voor tech companies, engineering firms en innovatieve ondernemingen in de stad.</p>

            <h3>DJ TU Delft Campus</h3>
            <p>De TU Delft campus biedt moderne locaties voor evenementen. Kevin heeft ervaring met events in de Aula, faculteitsgebouwen en andere universitaire locaties.</p>

            <h3>DJ Boeken Delft</h3>
            <p>Wil je een DJ boeken in Delft? Kevin Froger kent alle locaties van het centrum tot de universiteit. Professionele DJ services voor de blauwe stad.</p>

            <h3>Populaire DJ Services Delft</h3>
            <p>DJ Delft centrum, DJ TU Delft, studentenfeest DJ Delft, bruiloft DJ Delft, bedrijfsfeest DJ Delft, technische DJ, blauwe stad DJ, professionele DJ Delft.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-black mb-8" style={{ color: '#151515' }}>Alle wijken Delft</h2>
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
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">Boek DJ Kevin in Delft</h2>
            <p className="mt-3 text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>Klaar om jouw evenement in Delft onvergetelijk te maken?</p>
          </div>
          <div className="kf-hero-card p-8 md:p-10">
            <ContactForm eventType="Delft evenement" />
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

export default Delft;
