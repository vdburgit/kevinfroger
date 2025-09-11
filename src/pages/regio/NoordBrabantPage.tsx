import React from 'react';
import { MapPin, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';

const NoordBrabantPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "DJ huren in Noord-Brabant – complete DJ‑show | Kevin Froger";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ervaren allround DJ in Noord-Brabant voor bruiloft, verjaardag en events. Compleet met licht & geluid. Vraag je prijs of offerte.');
    }
    
    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://kevinfroger.nl/regio/noord-brabant');
    if (!document.head.contains(canonical)) document.head.appendChild(canonical);
    
    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'DJ huren in Noord-Brabant – complete DJ‑show | Kevin Froger');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Ervaren allround DJ in Noord-Brabant voor bruiloft, verjaardag en events. Compleet met licht & geluid.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);
    
    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/regio/noord-brabant');
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
            {"@type": "ListItem", "position": 3, "name": "Noord-Brabant", "item": "https://kevinfroger.nl/regio/noord-brabant"}
          ]
        },
        {
          "@type": "Service",
          "serviceType": "DJ Noord-Brabant",
          "provider": {
            "@type": "Person",
            "name": "Kevin Froger",
            "url": "https://kevinfroger.nl/"
          },
          "areaServed": "Noord-Brabant"
        }
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const cities = [
    { name: "Eindhoven", href: "/dj-eindhoven", description: "Lichtstad" },
    { name: "Tilburg", href: "/dj-tilburg", description: "Textielstad" },
    { name: "Breda", href: "/dj-breda", description: "Parel van het zuiden" },
    { name: "'s-Hertogenbosch", href: "/dj-s-hertogenbosch", description: "Hoofdstad Brabant" },
    { name: "Helmond", href: "/dj-helmond", description: "Industriestad" },
    { name: "Roosendaal", href: "/dj-roosendaal", description: "Spoorwegstad" },
    { name: "Bergen op Zoom", href: "/dj-bergen-op-zoom", description: "Vestingstad" },
    { name: "Oss", href: "/dj-oss", description: "Maasstad" },
    { name: "Oosterhout", href: "/dj-oosterhout", description: "Groene stad" },
    { name: "Etten-Leur", href: "/dj-etten-leur", description: "Markstad" },
    { name: "Veldhoven", href: "/dj-veldhoven", description: "Technologiestad" },
    { name: "Best", href: "/dj-best", description: "Moderne gemeente" }
  ];

  const services = [
    {
      title: "Bruiloft DJ Noord-Brabant",
      description: "Complete muzikale begeleiding voor jullie mooiste dag",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Verjaardag DJ Noord-Brabant",
      description: "Van 18e verjaardag tot jubileum - altijd feest",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Zakelijk DJ Noord-Brabant",
      description: "Professionele DJ voor bedrijfsfeesten",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Evenementen DJ Noord-Brabant",
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
    { number: "15+", label: "Jaar in Noord-Brabant", icon: <Award className="w-8 h-8" /> },
    { number: "300+", label: "Events in de provincie", icon: <Calendar className="w-8 h-8" /> },
    { number: "12", label: "Grote steden", icon: <MapPin className="w-8 h-8" /> },
    { number: "100%", label: "Tevreden klanten", icon: <Star className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* NoScript Fallback */}
      <noscript>
        <div className="bg-red-600 text-white p-4 text-center">
          <h1 className="text-2xl font-bold mb-2">DJ Kevin Froger - Noord-Brabant</h1>
          <p className="mb-4">Ervaren allround DJ in Noord-Brabant voor alle evenementen.</p>
          <a href="https://wa.me/31645251333" className="bg-white text-red-600 px-6 py-3 rounded-full font-bold">
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
            <li className="text-gray-900 font-semibold">Noord-Brabant</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-red-600 to-red-700 text-white" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <picture>
            <source type="image/avif" 
                    srcset="/images/dj-kevin-froger-bruiloft-640.avif 640w, /images/dj-kevin-froger-bruiloft-960.avif 960w, /images/dj-kevin-froger-bruiloft-1280.avif 1280w"
                    sizes="(max-width: 768px) 100vw, 960px" />
            <source type="image/webp" 
                    srcset="/images/dj-kevin-froger-bruiloft-640.webp 640w, /images/dj-kevin-froger-bruiloft-960.webp 960w, /images/dj-kevin-froger-bruiloft-1280.webp 1280w"
                    sizes="(max-width: 768px) 100vw, 960px" />
            <img src="/images/dj-kevin-froger-bruiloft-scaled.jpeg"
                 width="1280" height="720"
                 alt="DJ Kevin Froger Noord-Brabant - Professionele DJ services"
                 loading="eager" 
                 fetchpriority="high" 
                 decoding="async"
                 className="w-16 h-16 mx-auto mb-6 rounded-full object-cover" />
          </picture>
          
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            DJ huren in Noord&shy;-Brabant – complete DJ‑show
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ervaren allround DJ in Noord&nbsp;-&nbsp;Brabant voor bruiloft, verjaardag en events. 
            Van Eindhoven tot Breda - compleet met licht & geluid. Vraag je prijs of offerte.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="https://wa.me/31645251333"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 min-h-[48px] min-w-[48px]"
              aria-label="WhatsApp contact voor prijsindicatie DJ Noord-Brabant"
              title="App voor een prijsindicatie"
            >
              <MessageCircle className="w-6 h-6 inline-block mr-3" />
              APP VOOR EEN PRIJSINDICATIE
            </a>
            <a
              href="/prijzen"
              className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-red-900 transition-all duration-300 min-h-[48px] min-w-[48px]"
              aria-label="Vraag offerte aan voor DJ Noord-Brabant"
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
                <div className="text-red-200 font-semibold">{stat.label}</div>
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
              <span className="block text-red-700">NOORD-BRABANT</span>
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

          <div className="bg-gradient-to-r from-red-50 to-gray-50 rounded-3xl p-12">
            <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">Wat je krijgt in Noord&nbsp;-&nbsp;Brabant:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {usps.map((usp, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
              <span className="block text-orange-500">NOORD-BRABANT</span>
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
              <span className="block text-red-700">IN NOORD-BRABANT</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in Noord&nbsp;-&nbsp;Brabant onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Noord-Brabant" />
        </div>
      </section>
    </div>
  );
};

export default NoordBrabantPage;