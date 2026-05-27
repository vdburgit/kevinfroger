import React from 'react';
import { MapPin, Calendar, Users, Award, Heart, Building, Zap, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../../components/ContactForm';
import { GradientDivider } from '../../../components/GradientDivider';

const Vlaardingen = () => {
  React.useEffect(() => {
    document.title = "DJ Vlaardingen | DJ Kevin Froger Havenstad | 110+ Events";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Vlaardingen ✨ 110+ events in de havenstad. DJ Kevin Froger van centrum tot Westwijk. Professionele DJ services Vlaardingen. Boek nu!');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'DJ Vlaardingen | DJ Kevin Froger Havenstad');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'DJ Vlaardingen ✨ 110+ events in de havenstad. DJ Kevin Froger van centrum tot Westwijk. Professionele DJ services Vlaardingen.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/regio/zuid-holland/vlaardingen');
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
            {"@type": "ListItem", "position": 4, "name": "Vlaardingen", "item": "https://kevinfroger.nl/regio/zuid-holland/vlaardingen"}
          ]
        },
        {
          "@type": "LocalBusiness",
          "name": "DJ Vlaardingen - DJ Kevin Froger",
          "description": "Professionele DJ services in Vlaardingen en alle wijken van de havenstad",
          "url": "https://kevinfroger.nl/regio/zuid-holland/vlaardingen",
          "telephone": "+31645251333",
          "areaServed": "Vlaardingen",
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
      title: "Bruiloften Vlaardingen",
      description: "Romantische bruiloft DJ in de historische havenstad",
      icon: <Heart size={28} />,
    },
    {
      title: "Bedrijfsfeesten",
      description: "Corporate events in Vlaardingen en omgeving",
      icon: <Building size={28} />,
    },
    {
      title: "Privé Feesten",
      description: "Gezellige familiefeesten in Vlaardingen",
      icon: <Users size={28} />,
    },
    {
      title: "Festivals & Events",
      description: "Grote evenementen in de havenstad",
      icon: <Zap size={28} />,
    }
  ];

  const districts = [
    "Vlaardingen Centrum", "Westwijk", "Oostwijk", "Ambacht", "Holy",
    "Vettenoord", "Babberspolder", "Indische Buurt", "Broekpolder", "Ziedewij"
  ];

  const venues = [
    "Stedelijk Museum", "Theater De Stoep", "Sportpark De Kooi", "Zwembad De Waterdam",
    "Cultuurhuis Vlaardingen", "Haven Vlaardingen", "Park Broekpolder", "Landgoed Holy",
    "Ambacht Centrum", "Westwijk Park", "Oostwijk Sporthal", "Vettenoord Recreatie"
  ];

  const stats = [
    { number: "15+", label: "Jaar in Vlaardingen" },
    { number: "110+", label: "Events in Vlaardingen" },
    { number: "65+", label: "Vlaardingers Bruiloften" },
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
            <li style={{ color: '#151515' }} className="font-semibold">Vlaardingen</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="kf-seo-hero" role="banner">
        <div className="kf-section-inner relative z-10 text-center py-24 lg:py-36">
          <div className="flex items-center justify-center gap-2 mb-5">
            <MapPin size={18} style={{ color: '#ff7a00' }} />
            <span className="kf-eyebrow">Vlaardingen</span>
          </div>
          <h1 className="kf-hero-title mb-6" style={{ color: '#151515' }}>DJ Kevin Froger <span style={{ color: '#e60000' }}>Vlaardingen</span></h1>
          <p className="kf-hero-subtitle mx-auto mb-10" style={{ maxWidth: '640px', color: 'rgba(21,21,21,0.62)' }}>
            Professionele DJ services in Vlaardingen. Van het centrum tot Westwijk,
            van bruiloften aan de haven tot bedrijfsfeesten - altijd de perfecte sfeer in de havenstad.
          </p>
          <div className="kf-hero-actions justify-center">
            <a href="#contact" className="kf-btn-primary"><Calendar size={18} /> Boek nu in Vlaardingen</a>
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
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">DJ services Vlaardingen</h2>
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
            <h2>DJ Vlaardingen - Professionele DJ Services Havenstad</h2>
            <p>Zoek je een DJ in Vlaardingen? DJ Kevin Froger verzorgt professionele DJ services in de havenstad. Van bruiloften aan de haven tot bedrijfsfeesten in het centrum - altijd de perfecte sfeer in Vlaardingen.</p>

            <h3>DJ Vlaardingen - Alle Wijken</h3>
            <p>Kevin is actief in heel Vlaardingen: DJ Vlaardingen Centrum, DJ Westwijk, DJ Oostwijk, DJ Ambacht, DJ Holy, DJ Vettenoord, DJ Babberspolder, DJ Indische Buurt, DJ Broekpolder, DJ Ziedewij.</p>

            <h3>Bruiloft DJ Vlaardingen</h3>
            <p>Voor bruiloften in Vlaardingen heeft Kevin meer dan 65 succesvolle events begeleid. Van Stedelijk Museum tot Theater De Stoep, van Landgoed Holy tot Haven Vlaardingen - Kevin maakt jullie bruiloft onvergetelijk.</p>

            <h3>Bedrijfsfeest DJ Vlaardingen</h3>
            <p>Vlaardingen heeft een sterke bedrijvensector. Kevin verzorgt bedrijfsfeesten voor lokale ondernemingen en heeft ervaring met corporate events in de havenstad.</p>

            <h3>DJ Haven Vlaardingen</h3>
            <p>De haven van Vlaardingen biedt unieke locaties voor evenementen. Kevin heeft ervaring met events aan het water en in maritieme settings.</p>

            <h3>DJ Boeken Vlaardingen</h3>
            <p>Wil je een DJ boeken in Vlaardingen? Kevin Froger kent alle locaties van Westwijk tot Oostwijk. Professionele DJ services voor de havenstad.</p>

            <h3>Populaire DJ Services Vlaardingen</h3>
            <p>DJ Vlaardingen centrum, DJ Westwijk, DJ Oostwijk, bruiloft DJ Vlaardingen, bedrijfsfeest DJ Vlaardingen, haven DJ Vlaardingen, maritieme DJ, professionele DJ Vlaardingen.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-black kf-section-title mb-8">Alle wijken Vlaardingen</h2>
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
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">Boek DJ Kevin in Vlaardingen</h2>
          </div>
          <div className="kf-hero-card p-8 md:p-10">
            <ContactForm eventType="Vlaardingen evenement" />
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

export default Vlaardingen;
