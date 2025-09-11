import React from 'react';
import { MapPin, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';

const GelderlandPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "DJ huren in Gelderland – complete DJ‑show | Kevin Froger";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ervaren allround DJ in Gelderland voor bruiloft, verjaardag en events. Compleet met licht & geluid. Vraag je prijs of offerte.');
    }
    
    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://kevinfroger.nl/regio/gelderland');
    if (!document.head.contains(canonical)) document.head.appendChild(canonical);
    
    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'DJ huren in Gelderland – complete DJ‑show | Kevin Froger');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Ervaren allround DJ in Gelderland voor bruiloft, verjaardag en events. Compleet met licht & geluid.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);
    
    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/regio/gelderland');
    if (!document.head.contains(ogUrl)) document.head.appendChild(ogUrl);
    
    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', 'https://kevinfroger.nl/images/kevin-portrait.png');
    if (!document.head.contains(ogImage)) document.head.appendChild(ogImage);
    
    // Add structured data
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
            {"@type": "ListItem", "position": 3, "name": "Gelderland", "item": "https://kevinfroger.nl/regio/gelderland"}
          ]
        },
        {
          "@type": "Service",
          "serviceType": "DJ Gelderland",
          "provider": {
            "@type": "Person",
            "name": "Kevin Froger",
            "url": "https://kevinfroger.nl/"
          },
          "areaServed": "Gelderland"
        }
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const cities = [
    { name: "Nijmegen", href: "/dj-nijmegen", description: "Oudste stad" },
    { name: "Arnhem", href: "/dj-arnhem", description: "Hoofdstad Gelderland" },
    { name: "Apeldoorn", href: "/dj-apeldoorn", description: "Kroondomein" },
    { name: "Ede", href: "/dj-ede", description: "Veluwe stad" },
    { name: "Doetinchem", href: "/dj-doetinchem", description: "Achterhoek" },
    { name: "Zutphen", href: "/dj-zutphen", description: "Hanzestad" },
    { name: "Wageningen", href: "/dj-wageningen", description: "Universiteitsstad" },
    { name: "Tiel", href: "/dj-tiel", description: "Fruitstad" },
    { name: "Harderwijk", href: "/dj-harderwijk", description: "Hanzestad" },
    { name: "Barneveld", href: "/dj-barneveld", description: "Kippendorp" },
    { name: "Culemborg", href: "/dj-culemborg", description: "Vestingstad" },
    { name: "Winterswijk", href: "/dj-winterswijk", description: "Achterhoek parel" }
  ];

  const services = [
    {
      title: "Bruiloft DJ Gelderland",
      description: "Complete muzikale begeleiding voor jullie mooiste dag",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Verjaardag DJ Gelderland",
      description: "Van 18e verjaardag tot jubileum - altijd feest",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Zakelijk DJ Gelderland",
      description: "Professionele DJ voor bedrijfsfeesten",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Evenementen DJ Gelderland",
      description: "Festivals en publieke evenementen",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    }
  ];

  const usps = [
    "Ervaren allround DJ met complete show",
    "Licht & geluid inclusief",
    "Persoonlijk contact en voorbereiding",
    "Flexibel inspelen op publiek en wensen"
  ];

  const stats = [
    { number: "15+", label: "Jaar in Gelderland", icon: <Award className="w-8 h-8" /> },
    { number: "250+", label: "Events in de provincie", icon: <Calendar className="w-8 h-8" /> },
    { number: "12", label: "Grote steden", icon: <MapPin className="w-8 h-8" /> },
    { number: "100%", label: "Tevreden klanten", icon: <Star className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* NoScript Fallback */}
      <noscript>
        <div className="bg-green-600 text-white p-4 text-center">
          <h1 className="text-2xl font-bold mb-2">DJ Kevin Froger - Gelderland</h1>
          <p className="mb-4">Ervaren allround DJ in Gelderland voor alle evenementen.</p>
          <a href="https://wa.me/31645251333" className="bg-white text-green-600 px-6 py-3 rounded-full font-bold">
            WhatsApp Contact
          </a>
        </div>
      </noscript>

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link to="/regio" className="text-gray-500 hover:text-gray-700">Regio</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-semibold">Gelderland</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-600 to-green-700 text-white" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="/images/kevin-logo.png" 
            alt="DJ Kevin Froger Gelderland"
            className="w-16 h-16 mx-auto mb-6 rounded-full object-cover"
            width="64"
            height="64"
            loading="eager"
            decoding="sync"
          />
          
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            DJ huren in Gelderland – complete DJ‑show
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ervaren allround DJ in Gelderland voor bruiloft, verjaardag en events. 
            Van Nijmegen tot Arnhem - compleet met licht & geluid. Vraag je prijs of offerte.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="https://wa.me/31645251333"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 min-h-[48px] min-w-[48px]"
              aria-label="WhatsApp contact voor prijsindicatie DJ Gelderland"
              title="App voor een prijsindicatie"
            >
              <MessageCircle className="w-6 h-6 inline-block mr-3" />
              APP VOOR EEN PRIJSINDICATIE
            </a>
            <a
              href="/prijzen"
              className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-green-900 transition-all duration-300 min-h-[48px] min-w-[48px]"
              aria-label="Vraag offerte aan voor DJ Gelderland"
              title="Vraag een offerte aan"
            >
              VRAAG EEN OFFERTE AAN
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-black text-orange-400 mb-2">{stat.number}</div>
                <div className="text-green-200 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              DJ SERVICES
              <span className="block text-green-700">GELDERLAND</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-gray-50 rounded-3xl p-12">
            <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">Wat je krijgt in Gelderland:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {usps.map((usp, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{usp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              ALLE STEDEN
              <span className="block text-orange-500">GELDERLAND</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Klik op jouw stad voor lokale informatie en beschikbaarheid
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <Link
                key={index}
                to={city.href}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-2 border border-gray-100 hover:border-orange-200"
                aria-label={`DJ services in ${city.name}`}
                title={`DJ ${city.name} - ${city.description}`}
              >
                <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-black text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mb-2">
                  DJ {city.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{city.description}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-orange-500 mx-auto" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK EEN DJ
              <span className="block text-green-700">IN GELDERLAND</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in Gelderland onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Gelderland" />
        </div>
      </section>
    </div>
  );
};

export default GelderlandPage;