import React from 'react';
import { MapPin, Heart, Users, Building, Zap, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../../components/ContactForm';
import { GradientDivider } from '../../../components/GradientDivider';

const Dordrecht = () => {
  React.useEffect(() => {
    document.title = "DJ Dordrecht | DJ Kevin Froger Oudste Stad | 180+ Events";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Dordrecht ✨ 180+ events in de oudste stad van Holland. DJ Kevin Froger van centrum tot Dubbeldam. Professionele DJ services Dordrecht. Boek nu!');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'DJ Dordrecht | DJ Kevin Froger Oudste Stad');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'DJ Dordrecht ✨ 180+ events in de oudste stad van Holland. DJ Kevin Froger van centrum tot Dubbeldam. Professionele DJ services Dordrecht.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/regio/zuid-holland/dordrecht');
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
            {"@type": "ListItem", "position": 4, "name": "Dordrecht", "item": "https://kevinfroger.nl/regio/zuid-holland/dordrecht"}
          ]
        },
        {
          "@type": "LocalBusiness",
          "name": "DJ Dordrecht - DJ Kevin Froger",
          "description": "Professionele DJ services in Dordrecht en alle wijken van de oudste stad",
          "url": "https://kevinfroger.nl/regio/zuid-holland/dordrecht",
          "telephone": "+31645251333",
          "areaServed": "Dordrecht",
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
    { icon: <Heart size={28} />, title: "Bruiloften Dordrecht", description: "Romantische bruiloft DJ voor alle locaties in de oudste stad van Holland" },
    { icon: <Building size={28} />, title: "Bedrijfsfeesten", description: "Professionele corporate events in historisch Dordrecht" },
    { icon: <Users size={28} />, title: "Privé Feesten", description: "Gezellige privé evenementen in de Dordtse regio" },
    { icon: <Zap size={28} />, title: "Festivals & Events", description: "Grote evenementen in de historische binnenstad" },
  ];

  const districts = [
    "Dordrecht Centrum", "Wielwijk", "Crabbehof", "Sterrenburg", "Reeland",
    "Dubbeldam", "Wieldrecht", "Stadspolders", "Noordflank", "Zuidhoven"
  ];

  const venues = [
    "Villa Augustus", "Hof van Nederland", "Dordrechts Museum", "Grote Kerk",
    "Huis van Gijn", "Energiehuis", "Landgoed Groenhoven", "De Biesbosch",
    "Dordtyart", "Villa Welgelegen", "Kasteel Duurstede", "Merwestein"
  ];

  const stats = [
    { number: "15+", label: "Jaar in Dordrecht" },
    { number: "180+", label: "Events in Dordrecht" },
    { number: "90+", label: "Dordtse Bruiloften" },
    { number: "60+", label: "Corporate Events" }
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
            <li style={{ color: '#151515' }} className="font-semibold">Dordrecht</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="kf-seo-hero" role="banner">
        <div className="kf-section-inner relative z-10 text-center py-20 lg:py-32">
          <div className="flex items-center justify-center gap-2 mb-5">
            <MapPin size={18} style={{ color: '#ff7a00' }} />
            <span className="kf-eyebrow">Dordrecht</span>
          </div>
          <h1 className="kf-hero-title mb-6" style={{ color: '#151515' }}>
            DJ Kevin Froger <span style={{ color: '#e60000' }}>Dordrecht</span>
          </h1>
          <p className="kf-hero-subtitle mx-auto mb-10" style={{ maxWidth: '620px', color: 'rgba(21,21,21,0.62)' }}>
            Professionele DJ services in Dordrecht. Van het historische centrum tot Dubbeldam, van bruiloften in Villa Augustus tot bedrijfsfeesten – altijd de perfecte sfeer in de oudste stad van Holland.
          </p>

          {/* Stats */}
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
              <MessageCircle size={18} /> Boek nu in Dordrecht
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
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">DJ services Dordrecht</h2>
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
            <h2>DJ Dordrecht - Professionele DJ Services Oudste Stad Holland</h2>
            <p>Zoek je een DJ in Dordrecht? DJ Kevin Froger verzorgt professionele DJ services in de oudste stad van Holland. Met 15+ jaar ervaring en 180+ events in Dordrecht - altijd historische sfeer gecombineerd met moderne entertainment. Van bruiloften in Villa Augustus tot bedrijfsfeesten in het Energiehuis.</p>

            <h3>DJ Dordrecht - Alle Wijken</h3>
            <p>Kevin is actief in heel Dordrecht en alle wijken: DJ Dordrecht Centrum, DJ Wielwijk, DJ Crabbehof, DJ Sterrenburg, DJ Reeland, DJ Dubbeldam, DJ Wieldrecht, DJ Stadspolders, DJ Noordflank, DJ Zuidhoven. DJ Dordrecht alle wijken en buitengebieden beschikbaar.</p>

            <h3>Bruiloft DJ Dordrecht</h3>
            <p>Voor bruiloften in Dordrecht heeft Kevin meer dan 90 succesvolle events begeleid. Van Villa Augustus tot Hof van Nederland, van Dordrechts Museum tot De Biesbosch - Kevin maakt jullie bruiloft onvergetelijk. Bruiloft DJ Dordrecht met historische flair en moderne muziek.</p>

            <h3>Bedrijfsfeest DJ Dordrecht</h3>
            <p>Bedrijfsfeesten in Dordrecht krijgen de professionele touch van Kevin. Van Energiehuis tot Landgoed Groenhoven - altijd de juiste sfeer voor zakelijke evenementen. Bedrijfsfeest DJ Dordrecht voor alle corporate events in de oudste stad van Holland.</p>

            <h3>Festival DJ Dordrecht</h3>
            <p>Kevin heeft ervaring met festivals en grote evenementen in Dordrecht. Van Dordt in Stoom tot Big Rivers Festival - altijd spectaculaire performances in de oudste stad van Holland. Festival DJ Dordrecht voor alle grote en kleine evenementen.</p>

            <h3>DJ Boeken Dordrecht</h3>
            <p>Wil je een DJ boeken in Dordrecht? Kevin Froger kent alle locaties en venues in de oudste stad van Holland. Professionele DJ services voor alle wijken van Dordrecht. DJ boeken Dordrecht - binnen 24 uur persoonlijke offerte.</p>

            <h3>Populaire Zoektermen DJ Dordrecht</h3>
            <p>DJ Dordrecht centrum, DJ Dubbeldam, bruiloft DJ Dordrecht, bedrijfsfeest DJ Dordrecht, festival DJ Dordrecht, corporate DJ Dordrecht, historische DJ Dordrecht, professionele DJ oudste stad, DJ Dordrecht boeken, DJ Dordrecht huren, Dordtse DJ.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black kf-section-title mb-8">Alle wijken Dordrecht</h2>
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
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">Boek DJ Kevin in Dordrecht</h2>
            <p className="mt-3 text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>Klaar om jouw evenement in Dordrecht onvergetelijk te maken?</p>
          </div>
          <div className="kf-hero-card p-8 md:p-10">
            <ContactForm eventType="Dordrecht evenement" />
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

export default Dordrecht;
