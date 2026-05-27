import React from 'react';
import { MapPin, Heart, Users, Building, Zap, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../../components/ContactForm';
import { GradientDivider } from '../../../components/GradientDivider';

const Breda = () => {
  React.useEffect(() => {
    document.title = "DJ Breda | DJ Kevin Froger Parel van het Zuiden | 100+ Events";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Breda ✨ 100+ events in de parel van het zuiden. DJ Kevin Froger van centrum tot buitenwijken. Professionele DJ services Breda. Boek nu!');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'DJ Breda | DJ Kevin Froger Parel van het Zuiden');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'DJ Breda ✨ 100+ events in de parel van het zuiden. DJ Kevin Froger van centrum tot buitenwijken. Professionele DJ services Breda.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/regio/noord-brabant/breda');
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
            {"@type": "ListItem", "position": 3, "name": "Noord-Brabant", "item": "https://kevinfroger.nl/regio/noord-brabant"},
            {"@type": "ListItem", "position": 4, "name": "Breda", "item": "https://kevinfroger.nl/regio/noord-brabant/breda"}
          ]
        },
        {
          "@type": "LocalBusiness",
          "name": "DJ Breda - DJ Kevin Froger",
          "description": "Professionele DJ services in Breda en alle wijken van de parel van het zuiden",
          "url": "https://kevinfroger.nl/regio/noord-brabant/breda",
          "telephone": "+31645251333",
          "areaServed": "Breda",
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
    { icon: <Heart size={28} />, title: "Bruiloften Breda", description: "Romantische bruiloft DJ in de parel van het zuiden" },
    { icon: <Building size={28} />, title: "Bedrijfsfeesten", description: "Corporate events in historische stad" },
    { icon: <Zap size={28} />, title: "Festival DJ Breda", description: "Grote evenementen in de parel" },
    { icon: <Users size={28} />, title: "Privé DJ Breda", description: "Privé feesten in alle wijken" },
  ];

  const districts = [
    "Breda Centrum", "Breda Noord", "Breda Zuid", "Breda Oost", "Breda West",
    "Princenhage", "Bavel", "Ulvenhout", "Teteringen", "Ginneken"
  ];

  const venues = [
    "Grote Kerk Breda", "Kasteel van Breda", "Chassé Theater", "Stedelijk Museum",
    "Begijnhof", "Valkenberg Park", "Mastbos", "Bouvigne",
    "Amphia Ziekenhuis", "Avans Hogeschool", "NHTV", "Markdal College"
  ];

  const stats = [
    { number: "15+", label: "Jaar in Breda" },
    { number: "100+", label: "Events in Breda" },
    { number: "60+", label: "Bredase Bruiloften" },
    { number: "40+", label: "Corporate Events" },
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
            <li><Link to="/regio/noord-brabant" className="transition-colors hover:underline">Noord-Brabant</Link></li>
            <li>/</li>
            <li style={{ color: '#151515' }} className="font-semibold">Breda</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="kf-seo-hero" role="banner">
        <div className="kf-section-inner relative z-10 text-center py-20 lg:py-32">
          <div className="flex items-center justify-center gap-2 mb-5">
            <MapPin size={18} style={{ color: '#ff7a00' }} />
            <span className="kf-eyebrow">Breda</span>
          </div>
          <h1 className="kf-hero-title mb-6" style={{ color: '#151515' }}>
            DJ Kevin Froger <span style={{ color: '#e60000' }}>Breda</span>
          </h1>
          <p className="kf-hero-subtitle mx-auto mb-10" style={{ maxWidth: '620px', color: 'rgba(21,21,21,0.62)' }}>
            Professionele DJ services in Breda. Van het centrum tot buitenwijken, van bruiloften in de parel van het zuiden tot bedrijfsfeesten – altijd de perfecte muziek.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto mb-10">
            {stats.map((s, i) => (
              <div key={i} style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '20px', boxShadow: '0 4px 18px rgba(0,0,0,0.07)' }} className="p-4 text-center">
                <div className="text-2xl font-black" style={{ color: '#151515' }}>{s.number}</div>
                <div className="text-xs mt-1" style={{ color: 'rgba(21,21,21,0.60)' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="kf-hero-actions justify-center">
            <a href="#contact" className="kf-btn-primary">
              <MessageCircle size={18} /> Boek nu in Breda
            </a>
            <a href="tel:0645251333" className="kf-btn-secondary">
              <Phone size={16} /> 06 45 25 13 33
            </a>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Services */}
      <section className="kf-section" style={{ background: '#ffffff' }}>
        <div className="kf-section-inner">
          <div className="text-center mb-14">
            <p className="kf-label mb-3">DJ services</p>
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">DJ services Breda</h2>
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
            <h2>DJ Breda - Professionele DJ Services Parel van het Zuiden</h2>
            <p>Zoek je een DJ in Breda? DJ Kevin Froger verzorgt professionele DJ services in de parel van het zuiden. Van bruiloften in de Grote Kerk tot bedrijfsfeesten - altijd de perfecte sfeer in de historische stad.</p>

            <h3>DJ Breda - Alle Wijken</h3>
            <p>Kevin is actief in heel Breda: DJ Breda Centrum, DJ Breda Noord, DJ Breda Zuid, DJ Breda Oost, DJ Breda West, DJ Princenhage, DJ Bavel, DJ Ulvenhout, DJ Teteringen, DJ Ginneken.</p>

            <h3>Bruiloft DJ Breda</h3>
            <p>Voor bruiloften in Breda heeft Kevin meer dan 60 succesvolle events begeleid. Van Grote Kerk Breda tot Kasteel van Breda, van Chassé Theater tot Begijnhof - Kevin maakt jullie bruiloft onvergetelijk in de parel van het zuiden.</p>

            <h3>Bedrijfsfeest DJ Breda</h3>
            <p>Breda heeft een diverse bedrijvensector. Kevin verzorgt bedrijfsfeesten voor lokale ondernemingen en heeft ervaring met corporate events in de historische stad.</p>

            <h3>Festival DJ Breda</h3>
            <p>Van Breda Jazz Festival tot lokale festivals - Kevin heeft ervaring met alle soorten festivals in Breda. Altijd aangepast aan het publiek van de parel van het zuiden.</p>

            <h3>DJ Kasteel van Breda</h3>
            <p>Het Kasteel van Breda is een historische locatie voor exclusieve evenementen. Kevin heeft ervaring met events in deze koninklijke setting.</p>

            <h3>DJ Boeken Breda</h3>
            <p>Wil je een DJ boeken in Breda? Kevin Froger kent alle locaties van het centrum tot Princenhage. Professionele DJ services voor de parel van het zuiden.</p>

            <h3>Populaire DJ Services Breda</h3>
            <p>DJ Breda centrum, DJ Princenhage, bruiloft DJ Breda, bedrijfsfeest DJ Breda, festival DJ Breda, kasteel DJ Breda, parel zuiden DJ, professionele DJ Breda.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black kf-section-title mb-8">Alle wijken Breda</h2>
              <div className="grid grid-cols-2 gap-3">
                {districts.map((d, i) => (
                  <div key={i} style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '20px', boxShadow: '0 4px 18px rgba(0,0,0,0.07)' }} className="flex items-center gap-2 p-3">
                    <MapPin size={14} style={{ color: '#ff7a00' }} />
                    <span className="text-xs font-semibold" style={{ color: '#151515' }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-black kf-section-title mb-8">Populaire locaties</h2>
              <div className="grid grid-cols-2 gap-3">
                {venues.map((v, i) => (
                  <div key={i} style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '20px', boxShadow: '0 4px 18px rgba(0,0,0,0.07)' }} className="flex items-center gap-2 p-3">
                    <Building size={14} style={{ color: '#ff7a00' }} />
                    <span className="text-xs font-semibold" style={{ color: '#151515' }}>{v}</span>
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
            <p className="kf-label mb-3">Boeken</p>
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">Boek DJ Kevin in Breda</h2>
            <p className="mt-3 text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>Klaar om jouw evenement in Breda onvergetelijk te maken?</p>
          </div>
          <div className="kf-hero-card p-8 md:p-10">
            <ContactForm eventType="Breda evenement" />
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

export default Breda;
