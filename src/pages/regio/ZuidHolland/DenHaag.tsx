import React from 'react';
import { MapPin, Calendar, Users, Award, Heart, Building, Zap, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../../components/ContactForm';
import { GradientDivider } from '../../../components/GradientDivider';

const DenHaag = () => {
  React.useEffect(() => {
    document.title = "DJ Den Haag | DJ Kevin Froger Hofstad | 250+ Events";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Den Haag ✨ 250+ events in de hofstad. DJ Kevin Froger van centrum tot Scheveningen. Exclusieve DJ services Den Haag. Boek nu!');
    }

    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'DJ Den Haag | DJ Kevin Froger Hofstad');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'DJ Den Haag ✨ 250+ events in de hofstad. DJ Kevin Froger van centrum tot Scheveningen. Exclusieve DJ services Den Haag.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/regio/zuid-holland/den-haag');
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
            {"@type": "ListItem", "position": 4, "name": "Den Haag", "item": "https://kevinfroger.nl/regio/zuid-holland/den-haag"}
          ]
        },
        {
          "@type": "LocalBusiness",
          "name": "DJ Den Haag - DJ Kevin Froger",
          "description": "Professionele DJ services in Den Haag en alle wijken van de hofstad",
          "url": "https://kevinfroger.nl/regio/zuid-holland/den-haag",
          "telephone": "+31645251333",
          "areaServed": "Den Haag",
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
      title: "Bruiloften Den Haag",
      description: "Elegante bruiloft DJ voor alle locaties in de hofstad",
      icon: <Heart size={28} />,
    },
    {
      title: "Bedrijfsfeesten",
      description: "Professionele corporate events in Den Haag",
      icon: <Building size={28} />,
    },
    {
      title: "Privé Feesten",
      description: "Stijlvolle privé evenementen door heel Den Haag",
      icon: <Users size={28} />,
    },
    {
      title: "Gala's & Events",
      description: "Exclusieve evenementen in de regeringsstad",
      icon: <Zap size={28} />,
    }
  ];

  const districts = [
    "Den Haag Centrum", "Scheveningen", "Benoordenhout", "Bezuidenhout",
    "Haagse Hout", "Laak", "Loosduinen", "Segbroek", "Escamp",
    "Leidschenveen-Ypenburg", "Haagse Bos", "Statenkwartier", "Archipelbuurt", "Zeeheldenkwartier"
  ];

  const venues = [
    "Kurhaus Scheveningen", "Hotel Des Indes", "Paleis Noordeinde", "Binnenhof",
    "Gemeentemuseum", "Museon", "World Forum", "Lange Voorhout Paleis",
    "Ridderzaal", "Pier Scheveningen", "Carlton Beach", "Grand Hotel Amrâth"
  ];

  const stats = [
    { number: "15+", label: "Jaar in Den Haag" },
    { number: "250+", label: "Events in Den Haag" },
    { number: "120+", label: "Haagse Bruiloften" },
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
            <li><Link to="/regio/zuid-holland" className="transition-colors hover:underline">Zuid-Holland</Link></li>
            <li>/</li>
            <li style={{ color: '#151515' }} className="font-semibold">Den Haag</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="kf-seo-hero" role="banner">
        <div className="kf-section-inner relative z-10 text-center py-24 lg:py-36">
          <div className="flex items-center justify-center gap-2 mb-5">
            <MapPin size={18} style={{ color: '#ff7a00' }} />
            <span className="kf-eyebrow">Den Haag</span>
          </div>
          <h1 className="kf-hero-title mb-6" style={{ color: '#151515' }}>DJ Kevin Froger <span style={{ color: '#e60000' }}>Den Haag</span></h1>
          <p className="kf-hero-subtitle mx-auto mb-10" style={{ maxWidth: '640px', color: 'rgba(21,21,21,0.62)' }}>
            Professionele DJ services in Den Haag. Van het centrum tot Scheveningen, van bruiloften in het Kurhaus tot gala's in de hofstad - altijd stijlvol en professioneel.
          </p>
          <div className="kf-hero-actions justify-center">
            <a href="#contact" className="kf-btn-primary"><Calendar size={18} /> Boek nu in Den Haag</a>
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
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">DJ services Den Haag</h2>
            <p className="mt-3 text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>Professionele DJ services voor alle gelegenheden in Den Haag</p>
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
            <h2>DJ Den Haag - Professionele DJ Services Hofstad</h2>
            <p>Zoek je een DJ in Den Haag? DJ Kevin Froger verzorgt exclusieve DJ services in de hofstad. Met 15+ jaar ervaring en 250+ events in Den Haag - altijd stijlvol en professioneel. Van bruiloften in het Kurhaus tot gala's in het Binnenhof.</p>

            <h3>DJ Den Haag - Alle Wijken</h3>
            <p>Kevin is actief in heel Den Haag en alle wijken: DJ Den Haag Centrum, DJ Scheveningen, DJ Benoordenhout, DJ Bezuidenhout, DJ Haagse Hout, DJ Laak, DJ Loosduinen, DJ Segbroek, DJ Escamp, DJ Leidschenveen-Ypenburg, DJ Haagse Bos, DJ Statenkwartier, DJ Archipelbuurt, DJ Zeeheldenkwartier. DJ Den Haag alle wijken beschikbaar.</p>

            <h3>Bruiloft DJ Den Haag</h3>
            <p>Voor bruiloften in Den Haag heeft Kevin meer dan 120 succesvolle events begeleid. Van Kurhaus Scheveningen tot Hotel Des Indes, van Paleis Noordeinde tot Carlton Beach - Kevin maakt jullie bruiloft onvergetelijk in de hofstad. Bruiloft DJ Den Haag met stijlvolle uitstraling passend bij de regeringsstad.</p>

            <h3>Bedrijfsfeest DJ Den Haag</h3>
            <p>Bedrijfsfeesten in Den Haag verdienen de beste begeleiding. Kevin heeft ervaring met corporate events in World Forum, Gemeentemuseum, Museon, Ridderzaal en andere prestigieuze locaties. Bedrijfsfeest DJ Den Haag voor alle corporate events in de regeringsstad.</p>

            <h3>Gala DJ Den Haag</h3>
            <p>Voor exclusieve gala's en events in Den Haag biedt Kevin premium DJ services. Van Ridderzaal tot Lange Voorhout Paleis - altijd de juiste sfeer voor uw exclusieve evenement. Gala DJ Den Haag voor diplomatieke en zakelijke gala's in de hofstad.</p>

            <h3>DJ Boeken Den Haag</h3>
            <p>Wil je een DJ boeken in Den Haag? Kevin Froger is beschikbaar voor alle wijken en exclusieve locaties in de hofstad. Professionele DJ services voor de regeringsstad. DJ boeken Den Haag - binnen 24 uur persoonlijke offerte.</p>

            <h3>Populaire Zoektermen DJ Den Haag</h3>
            <p>DJ Den Haag centrum, DJ Scheveningen, bruiloft DJ Den Haag, gala DJ Den Haag, corporate DJ Den Haag, exclusieve DJ Den Haag, professionele DJ hofstad, DJ regeringsstad, DJ Den Haag boeken, DJ Den Haag huren, hofstad DJ, Haagse DJ.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-black mb-8" style={{ color: '#151515' }}>Alle wijken Den Haag</h2>
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
            <h2 className="text-3xl md:text-4xl font-black kf-section-title">Boek DJ Kevin in Den Haag</h2>
            <p className="mt-3 text-sm" style={{ color: 'rgba(21,21,21,0.60)' }}>Klaar om jouw evenement in Den Haag onvergetelijk te maken?</p>
          </div>
          <div className="kf-hero-card p-8 md:p-10">
            <ContactForm eventType="Den Haag evenement" />
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

export default DenHaag;
