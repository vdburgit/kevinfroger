import React from 'react';
import { MapPin, Heart, Users, Building, Zap, CheckCircle, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import { GradientDivider } from '../../components/GradientDivider';

const ZuidHollandPage = () => {
  React.useEffect(() => {
    document.title = "DJ huren in Zuid-Holland – complete DJ‑show | Kevin Froger";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ervaren allround DJ in Zuid-Holland voor bruiloft, verjaardag en events. Compleet met licht & geluid. Vraag je prijs of offerte.');
    }

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
            {"@type": "ListItem", "position": 3, "name": "Zuid-Holland", "item": "https://kevinfroger.nl/regio/zuid-holland"}
          ]
        },
        {
          "@type": "Service",
          "serviceType": "DJ Zuid-Holland",
          "provider": {
            "@type": "Person",
            "name": "Kevin Froger",
            "url": "https://kevinfroger.nl/"
          },
          "areaServed": "Zuid-Holland"
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const cities = [
    { name: "Rotterdam", href: "/regio/zuid-holland/rotterdam", description: "Maasstad" },
    { name: "Den Haag", href: "/regio/zuid-holland/den-haag", description: "Hofstad" },
    { name: "Delft", href: "/regio/zuid-holland/delft", description: "Blauwe stad" },
    { name: "Leiden", href: "/regio/zuid-holland/leiden", description: "Sleutelstad" },
    { name: "Zoetermeer", href: "/regio/zuid-holland/zoetermeer", description: "Groene stad" },
    { name: "Dordrecht", href: "/regio/zuid-holland/dordrecht", description: "Oudste stad" },
    { name: "Gouda", href: "/regio/zuid-holland/gouda", description: "Kaasstad" },
    { name: "Alphen a/d Rijn", href: "/regio/zuid-holland/alphen-aan-den-rijn", description: "Aan de rivier" },
    { name: "Schiedam", href: "/regio/zuid-holland/schiedam", description: "Jeneverstad" },
    { name: "Vlaardingen", href: "/regio/zuid-holland/vlaardingen", description: "Havenstad" }
  ];

  const services = [
    {
      title: "Bruiloft DJ Zuid-Holland",
      description: "Complete muzikale begeleiding voor jullie mooiste dag",
      icon: <Heart size={28} />
    },
    {
      title: "Verjaardag DJ Zuid-Holland",
      description: "Van 18e verjaardag tot jubileum - altijd feest",
      icon: <Users size={28} />
    },
    {
      title: "Zakelijk DJ Zuid-Holland",
      description: "Professionele DJ voor bedrijfsfeesten",
      icon: <Building size={28} />
    },
    {
      title: "Evenementen DJ Zuid-Holland",
      description: "Festivals en publieke evenementen",
      icon: <Zap size={28} />
    }
  ];

  const usps = [
    "Ervaren allround DJ met complete show",
    "Licht & geluid inclusief",
    "Persoonlijk contact en voorbereiding",
    "Flexibel inspelen op publiek en wensen"
  ];

  const stats = [
    { number: "15+", label: "Jaar in Zuid-Holland" },
    { number: "1000+", label: "Events totaal" },
    { number: "10", label: "Grote steden" },
    { number: "100%", label: "Tevreden klanten" }
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
            <li style={{ color: '#151515' }} className="font-semibold">Zuid-Holland</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="kf-seo-hero" role="banner">
        <div className="kf-section-inner relative z-10 text-center py-24 lg:py-36">
          <div className="flex items-center justify-center gap-2 mb-5">
            <MapPin size={18} style={{ color: '#ff7a00' }} />
            <span className="kf-eyebrow">Zuid-Holland</span>
          </div>
          <h1 className="kf-hero-title mb-6" style={{ color: '#151515' }}>DJ huren in <span style={{ color: '#e60000' }}>Zuid-Holland</span></h1>
          <p className="kf-hero-subtitle mx-auto mb-10" style={{ maxWidth: '620px', color: 'rgba(21,21,21,0.62)' }}>
            Ervaren allround DJ in Zuid-Holland voor bruiloft, verjaardag en events. Van Rotterdam tot Leiden - compleet met licht &amp; geluid. Vraag je prijs of offerte.
          </p>
          <div className="kf-hero-actions justify-center">
            <a href="https://wa.me/31645251333" target="_blank" rel="noopener noreferrer" className="kf-btn-primary">
              <MessageCircle size={18} /> App voor prijsindicatie
            </a>
            <a href="/contact" className="kf-btn-secondary">Vraag offerte aan</a>
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
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">DJ services Zuid-Holland</h2>
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
          <div className="mt-14 rounded-2xl p-8" style={{ background: '#fff7e6', border: '1px solid rgba(230,0,0,0.10)' }}>
            <h3 className="text-xl font-bold mb-6" style={{ color: '#151515' }}>Wat je krijgt in Zuid-Holland:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {usps.map((u, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: '#e60000' }} />
                  <span className="text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>{u}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Cities */}
      <section className="kf-section" style={{ background: '#fff7e6' }}>
        <div className="kf-section-inner">
          <div className="text-center mb-10">
            <p className="kf-label mb-3">Steden</p>
            <h2 className="text-2xl md:text-3xl font-black kf-section-title">Alle steden Zuid-Holland</h2>
            <p className="mt-2 text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>Klik op jouw stad voor lokale informatie en beschikbaarheid</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {cities.map((c, i) => (
              <Link key={i} to={c.href} style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '20px', boxShadow: '0 4px 18px rgba(0,0,0,0.07)' }} className="flex flex-col items-center gap-2 p-5 text-center transition-all hover:scale-105">
                <MapPin size={18} style={{ color: '#ff7a00' }} />
                <span className="text-sm font-bold" style={{ color: '#151515' }}>DJ {c.name}</span>
                <span className="text-xs" style={{ color: 'rgba(21,21,21,0.60)' }}>{c.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* Contact */}
      <section className="kf-section" style={{ background: '#ffffff' }}>
        <div className="kf-section-inner" style={{ maxWidth: '720px' }}>
          <div className="text-center mb-10">
            <p className="kf-label mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">Boek een DJ in Zuid-Holland</h2>
            <p className="mt-3 text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>Klaar om jouw evenement in Zuid-Holland onvergetelijk te maken?</p>
          </div>
          <div className="kf-hero-card p-8 md:p-10">
            <ContactForm eventType="Zuid-Holland" />
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

export default ZuidHollandPage;
