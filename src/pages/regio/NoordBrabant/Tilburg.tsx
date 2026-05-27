import React from 'react';
import { MapPin, Heart, Users, Building, Zap, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../../components/ContactForm';
import { GradientDivider } from '../../../components/GradientDivider';

const Tilburg = () => {
  React.useEffect(() => {
    document.title = "DJ Tilburg | DJ Kevin Froger Textielstad | 120+ Events";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Tilburg ✨ 120+ events in de textielstad. DJ Kevin Froger van centrum tot universiteit. Professionele DJ services Tilburg. Boek nu!');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'DJ Tilburg | DJ Kevin Froger Textielstad');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'DJ Tilburg ✨ 120+ events in de textielstad. DJ Kevin Froger van centrum tot universiteit. Professionele DJ services Tilburg.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/regio/noord-brabant/tilburg');
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
            {"@type": "ListItem", "position": 4, "name": "Tilburg", "item": "https://kevinfroger.nl/regio/noord-brabant/tilburg"}
          ]
        },
        {
          "@type": "LocalBusiness",
          "name": "DJ Tilburg - DJ Kevin Froger",
          "description": "Professionele DJ services in Tilburg en alle wijken van de textielstad",
          "url": "https://kevinfroger.nl/regio/noord-brabant/tilburg",
          "telephone": "+31645251333",
          "areaServed": "Tilburg",
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
    { icon: <Heart size={28} />, title: "Bruiloften Tilburg", description: "Romantische bruiloft DJ in de textielstad" },
    { icon: <Building size={28} />, title: "Bedrijfsfeesten", description: "Corporate events in industriële stad" },
    { icon: <Users size={28} />, title: "Studentenfeest DJ", description: "Universiteit Tilburg evenementen" },
    { icon: <Zap size={28} />, title: "Festival DJ Tilburg", description: "Grote evenementen in de textielstad" },
  ];

  const districts = [
    "Tilburg Centrum", "Tilburg Noord", "Tilburg Zuid", "Tilburg Oost", "Tilburg West",
    "Reeshof", "De Blaak", "Wandelbos", "Universiteit", "Industrieterrein"
  ];

  const venues = [
    "Concertzaal Tilburg", "Universiteit Tilburg", "Theater Tilburg", "Stadschouwburg",
    "Textielmuseum", "De Pont Museum", "Spoorzone", "Piushaven",
    "Leijpark", "Wandelbos", "Tilburg Ten Miles", "Koningshoeven"
  ];

  const stats = [
    { number: "15+", label: "Jaar in Tilburg" },
    { number: "120+", label: "Events in Tilburg" },
    { number: "70+", label: "Tilburgse Bruiloften" },
    { number: "50+", label: "Corporate Events" },
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
            <li style={{ color: '#151515' }} className="font-semibold">Tilburg</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="kf-seo-hero" role="banner">
        <div className="kf-section-inner relative z-10 text-center py-20 lg:py-32">
          <div className="flex items-center justify-center gap-2 mb-5">
            <MapPin size={18} style={{ color: '#ff7a00' }} />
            <span className="kf-eyebrow">Tilburg</span>
          </div>
          <h1 className="kf-hero-title mb-6" style={{ color: '#151515' }}>
            DJ Kevin Froger <span style={{ color: '#e60000' }}>Tilburg</span>
          </h1>
          <p className="kf-hero-subtitle mx-auto mb-10" style={{ maxWidth: '620px', color: 'rgba(21,21,21,0.62)' }}>
            Professionele DJ services in Tilburg. Van het centrum tot de universiteit, van bruiloften in de textielstad tot bedrijfsfeesten – altijd de perfecte muziek.
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
              <MessageCircle size={18} /> Boek nu in Tilburg
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
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">DJ services Tilburg</h2>
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
            <h2>DJ Tilburg - Professionele DJ Services Textielstad</h2>
            <p>Zoek je een DJ in Tilburg? DJ Kevin Froger verzorgt professionele DJ services in de textielstad. Van bruiloften in het centrum tot studentenfeesten aan de universiteit - altijd de perfecte sfeer in de industriële stad.</p>

            <h3>DJ Tilburg - Alle Wijken</h3>
            <p>Kevin is actief in heel Tilburg: DJ Tilburg Centrum, DJ Tilburg Noord, DJ Tilburg Zuid, DJ Tilburg Oost, DJ Tilburg West, DJ Reeshof, DJ De Blaak, DJ Wandelbos, DJ Universiteit, DJ Industrieterrein.</p>

            <h3>Bruiloft DJ Tilburg</h3>
            <p>Voor bruiloften in Tilburg heeft Kevin meer dan 70 succesvolle events begeleid. Van Concertzaal Tilburg tot Theater Tilburg, van Textielmuseum tot De Pont Museum - Kevin maakt jullie bruiloft onvergetelijk in de textielstad.</p>

            <h3>Studentenfeest DJ Tilburg</h3>
            <p>Universiteit Tilburg heeft een actief studentenleven. Kevin heeft ervaring met studentenfeesten, verenigingsfeesten en universitaire gala's in de textielstad.</p>

            <h3>Bedrijfsfeest DJ Tilburg</h3>
            <p>Tilburg heeft een sterke industriële traditie. Kevin verzorgt bedrijfsfeesten voor lokale ondernemingen en heeft ervaring met corporate events in de textielstad.</p>

            <h3>Festival DJ Tilburg</h3>
            <p>Van Festival Mundial tot lokale festivals - Kevin heeft ervaring met alle soorten festivals in Tilburg. Altijd aangepast aan het diverse publiek van de textielstad.</p>

            <h3>DJ Boeken Tilburg</h3>
            <p>Wil je een DJ boeken in Tilburg? Kevin Froger kent alle locaties van het centrum tot de universiteit. Professionele DJ services voor de textielstad.</p>

            <h3>Populaire DJ Services Tilburg</h3>
            <p>DJ Tilburg centrum, DJ universiteit Tilburg, studentenfeest DJ Tilburg, bruiloft DJ Tilburg, bedrijfsfeest DJ Tilburg, textielstad DJ, industriële DJ, professionele DJ Tilburg.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black kf-section-title mb-8">Alle wijken Tilburg</h2>
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
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">Boek DJ Kevin in Tilburg</h2>
            <p className="mt-3 text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>Klaar om jouw evenement in Tilburg onvergetelijk te maken?</p>
          </div>
          <div className="kf-hero-card p-8 md:p-10">
            <ContactForm eventType="Tilburg evenement" />
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

export default Tilburg;
