import React from 'react';
import { MapPin, Calendar, Users, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';

const ZuidHollandPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "DJ huren in Zuid-Holland – complete DJ‑show | Kevin Froger";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ervaren allround DJ in Zuid-Holland voor bruiloft, verjaardag en events. Compleet met licht & geluid. Vraag je prijs of offerte.');
    }
    
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
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Verjaardag DJ Zuid-Holland",
      description: "Van 18e verjaardag tot jubileum - altijd feest",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Zakelijk DJ Zuid-Holland",
      description: "Professionele DJ voor bedrijfsfeesten",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Evenementen DJ Zuid-Holland",
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
    { number: "15+", label: "Jaar in Zuid-Holland", icon: <Award className="w-8 h-8" /> },
    { number: "1000+", label: "Events totaal", icon: <Calendar className="w-8 h-8" /> },
    { number: "10", label: "Grote steden", icon: <MapPin className="w-8 h-8" /> },
    { number: "100%", label: "Tevreden klanten", icon: <Star className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link to="/regio" className="text-gray-500 hover:text-gray-700">Regio</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-semibold">Zuid-Holland</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            DJ huren in Zuid-Holland – complete DJ‑show
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ervaren allround DJ in Zuid-Holland voor bruiloft, verjaardag en events. 
            Van Rotterdam tot Leiden - compleet met licht & geluid. Vraag je prijs of offerte.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="https://wa.me/31645251333"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 inline-block mr-3" />
              APP VOOR EEN PRIJSINDICATIE
            </a>
            <a
              href="/prijzen"
              className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
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
                <div className="text-blue-200 font-semibold">{stat.label}</div>
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
              <span className="block text-blue-700">ZUID-HOLLAND</span>
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

          <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-3xl p-12">
            <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">Wat je krijgt in Zuid-Holland:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {usps.map((usp, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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
              <span className="block text-orange-500">ZUID-HOLLAND</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Klik op jouw stad voor lokale informatie en beschikbaarheid
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {cities.map((city, index) => (
              <Link
                key={index}
                to={city.href}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-2 border border-gray-100 hover:border-orange-200"
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
              <span className="block text-blue-700">IN ZUID-HOLLAND</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in Zuid-Holland onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Zuid-Holland" />
        </div>
      </section>
    </div>
  );
};

export default ZuidHollandPage;