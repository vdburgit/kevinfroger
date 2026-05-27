import React from 'react';
import { MapPin, Heart, Users, Building, Zap, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../../components/ContactForm';
import { GradientDivider } from '../../../components/GradientDivider';

const Utrecht = () => {
  React.useEffect(() => {
    document.title = "DJ Utrecht | DJ Kevin Froger Domstad | 120+ Events";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Utrecht ✨ 120+ events in de domstad. DJ Kevin Froger van centrum tot Leidsche Rijn. Professionele DJ services Utrecht. Boek nu!');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'DJ Utrecht | DJ Kevin Froger Domstad');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'DJ Utrecht ✨ 120+ events in de domstad. DJ Kevin Froger van centrum tot Leidsche Rijn. Professionele DJ services Utrecht.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/regio/utrecht/utrecht');
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
            {"@type": "ListItem", "position": 3, "name": "Utrecht", "item": "https://kevinfroger.nl/regio/utrecht"},
            {"@type": "ListItem", "position": 4, "name": "Utrecht", "item": "https://kevinfroger.nl/regio/utrecht/utrecht"}
          ]
        },
        {
          "@type": "LocalBusiness",
          "name": "DJ Utrecht - DJ Kevin Froger",
          "description": "Professionele DJ services in Utrecht en alle wijken van de domstad",
          "url": "https://kevinfroger.nl/regio/utrecht/utrecht",
          "telephone": "+31645251333",
          "areaServed": "Utrecht",
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
    { icon: <Heart size={28} />, title: "Bruiloften Utrecht", description: "Romantische bruiloft DJ in de domstad" },
    { icon: <Building size={28} />, title: "Bedrijfsfeesten", description: "Corporate events in het hart van Nederland" },
    { icon: <Zap size={28} />, title: "Festivals Utrecht", description: "Grote evenementen in de domstad" },
    { icon: <Users size={28} />, title: "Privé Feesten", description: "Familiefeesten in Utrecht" },
  ];

  const districts = [
    "Utrecht Centrum", "Leidsche Rijn", "Nieuwegein", "IJsselstein", "Houten",
    "Zeist", "Bunnik", "De Meern", "Vleuten", "Lombok", "Transwijk", "Overvecht"
  ];

  const venues = [
    "Kasteel de Haar", "Domkerk", "Grand Hotel Karel V", "TivoliVredenburg",
    "Jaarbeurs Utrecht", "Beatrix Theater", "Centraal Museum", "Universiteit Utrecht",
    "Rietveld Schröder Huis", "Spoorwegmuseum", "Nijntje Museum", "DOMunder"
  ];

  const stats = [
    { number: "15+", label: "Jaar in Utrecht" },
    { number: "120+", label: "Events in Utrecht" },
    { number: "80+", label: "Utrechtse Bruiloften" },
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
            <li><Link to="/regio/utrecht" className="transition-colors hover:underline">Utrecht</Link></li>
            <li>/</li>
            <li style={{ color: '#151515' }} className="font-semibold">Utrecht</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="kf-seo-hero" role="banner">
        <div className="kf-section-inner relative z-10 text-center py-20 lg:py-32">
          <div className="flex items-center justify-center gap-2 mb-5">
            <MapPin size={18} style={{ color: '#ff7a00' }} />
            <span className="kf-eyebrow">Utrecht</span>
          </div>
          <h1 className="kf-hero-title mb-6" style={{ color: '#151515' }}>
            DJ Kevin Froger <span style={{ color: '#e60000' }}>Utrecht</span>
          </h1>
          <p className="kf-hero-subtitle mx-auto mb-10" style={{ maxWidth: '620px', color: 'rgba(21,21,21,0.62)' }}>
            Professionele DJ services in Utrecht. Van het centrum tot Leidsche Rijn, van bruiloften in de domstad tot bedrijfsfeesten – altijd de perfecte muziek.
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
              <MessageCircle size={18} /> Boek nu in Utrecht
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
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">DJ services Utrecht</h2>
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
            <h2>DJ Utrecht - Professionele DJ Services Domstad</h2>
            <p>Zoek je een DJ in Utrecht? DJ Kevin Froger verzorgt professionele DJ services in de domstad. Van bruiloften in de Domkerk tot bedrijfsfeesten in Leidsche Rijn - altijd de perfecte sfeer in het hart van Nederland.</p>

            <h3>DJ Utrecht - Alle Wijken</h3>
            <p>Kevin is actief in heel Utrecht: DJ Utrecht Centrum, DJ Leidsche Rijn, DJ Nieuwegein, DJ IJsselstein, DJ Houten, DJ Zeist, DJ Bunnik, DJ De Meern, DJ Vleuten, DJ Lombok, DJ Transwijk, DJ Overvecht, DJ Zuilen, DJ Ondiep.</p>

            <h3>Bruiloft DJ Utrecht</h3>
            <p>Voor bruiloften in Utrecht heeft Kevin meer dan 80 succesvolle events begeleid. Van Kasteel de Haar tot Domkerk, van Grand Hotel Karel V tot moderne venues in Leidsche Rijn - Kevin maakt jullie bruiloft onvergetelijk.</p>

            <h3>Bedrijfsfeest DJ Utrecht</h3>
            <p>Utrecht is het economische hart van Nederland. Kevin verzorgt bedrijfsfeesten voor hoofdkantoren, startups en internationale bedrijven in de regio Utrecht.</p>

            <h3>DJ Leidsche Rijn</h3>
            <p>Leidsche Rijn is een moderne wijk van Utrecht. Kevin heeft ervaring met events in dit nieuwe stadsdeel en kent alle moderne venues en locaties.</p>

            <h3>Festival DJ Utrecht</h3>
            <p>Van Le Guess Who tot lokale festivals - Kevin heeft ervaring met alle soorten festivals in Utrecht. Van Jaarbeurs tot outdoor events in de domstad.</p>

            <h3>DJ Kasteel de Haar</h3>
            <p>Kasteel de Haar is een van de mooiste bruiloftlocaties van Nederland. Kevin heeft ervaring met events in dit sprookjeskasteel nabij Utrecht.</p>

            <h3>DJ Boeken Utrecht</h3>
            <p>Wil je een DJ boeken in Utrecht? Kevin Froger kent alle locaties van het centrum tot Leidsche Rijn. Professionele DJ services voor de domstad.</p>

            <h3>Populaire DJ Services Utrecht</h3>
            <p>DJ Utrecht centrum, DJ Leidsche Rijn, bruiloft DJ Utrecht, bedrijfsfeest DJ Utrecht, festival DJ Utrecht, Kasteel de Haar DJ, domstad DJ, professionele DJ Utrecht.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black kf-section-title mb-8">Alle wijken Utrecht</h2>
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
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">Boek DJ Kevin in Utrecht</h2>
            <p className="mt-3 text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>Klaar om jouw evenement in Utrecht onvergetelijk te maken?</p>
          </div>
          <div className="kf-hero-card p-8 md:p-10">
            <ContactForm eventType="Utrecht evenement" />
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

export default Utrecht;
