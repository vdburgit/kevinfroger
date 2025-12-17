import React from 'react';
import { MapPin, Calendar, Award, ArrowRight, Globe, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const RegioPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "Regio's – DJ Kevin Froger beschikbaar door heel Nederland";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Kevin Froger is beschikbaar in Zuid-Holland, Noord-Brabant, Gelderland, Utrecht, Overijssel, Noord-Holland en Zeeland. Bekijk alle steden en regio\'s.');
    }
    
    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "DJ Kevin Froger Regio's",
      "description": "DJ services beschikbaar in alle regio's van Nederland",
      "url": "https://kevinfroger.nl/regio",
      "telephone": "+31645251333",
      "areaServed": ["Zuid-Holland", "Noord-Brabant", "Gelderland", "Utrecht", "Overijssel", "Noord-Holland", "Zeeland"],
      "sameAs": [
        "https://www.instagram.com/djkevinfroger/",
        "https://www.linkedin.com/in/kevin-froger-b23aa263/",
        "https://www.facebook.com/KevinFroger.nl",
        "https://wa.me/31645251333"
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const provinces = [
    {
      name: "Zuid-Holland",
      href: "/regio/zuid-holland",
      description: "Van Rotterdam tot Leiden - het hart van de Randstad",
      cities: ["Rotterdam", "Den Haag", "Delft", "Leiden", "Zoetermeer", "Dordrecht", "Gouda", "Alphen a/d Rijn", "Schiedam", "Vlaardingen"],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Noord-Brabant",
      href: "/regio/noord-brabant", 
      description: "Van Eindhoven tot Breda - het bruisende zuiden",
      cities: ["Eindhoven", "Tilburg", "Breda", "'s-Hertogenbosch", "Helmond", "Oosterhout", "Roosendaal"],
      color: "from-red-500 to-red-600"
    },
    {
      name: "Gelderland",
      href: "/regio/gelderland",
      description: "Van Nijmegen tot Apeldoorn - gevarieerde provincie",
      cities: ["Nijmegen", "Arnhem", "Apeldoorn", "Ede", "Barneveld", "Tiel", "Culemborg"],
      color: "from-green-500 to-green-600"
    },
    {
      name: "Utrecht",
      href: "/regio/utrecht",
      description: "Het hart van Nederland met historische steden",
      cities: ["Utrecht", "Amersfoort", "Zeist", "Nieuwegein", "Houten", "Veenendaal"],
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Overijssel",
      href: "/regio/overijssel",
      description: "Van Enschede tot Zwolle - het oosten van Nederland",
      cities: ["Enschede", "Zwolle", "Deventer", "Hengelo", "Almelo", "Kampen"],
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Noord-Holland",
      href: "/regio/noord-holland",
      description: "Van Amsterdam tot Alkmaar - het hart van de Randstad",
      cities: ["Amsterdam", "Haarlem", "Alkmaar", "Zaanstad", "Hilversum", "Amstelveen"],
      color: "from-red-500 to-red-600"
    },
    {
      name: "Zeeland",
      href: "/regio/zeeland",
      description: "Van Middelburg tot Vlissingen - de kustprovincie",
      cities: ["Middelburg", "Vlissingen", "Goes", "Terneuzen"],
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const stats = [
    { number: "7", label: "Provincies", icon: <Globe className="w-8 h-8" /> },
    { number: "50+", label: "Steden", icon: <MapPin className="w-8 h-8" /> },
    { number: "1000+", label: "Events", icon: <Calendar className="w-8 h-8" /> },
    { number: "15+", label: "Jaar Ervaring", icon: <Award className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-700 text-white" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            Regio's – DJ Kevin Froger beschikbaar door heel Nederland
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Beschikbaar in Zuid-Holland, Noord-Brabant, Gelderland, Utrecht, Overijssel, Noord-Holland en Zeeland.
            Bekijk alle steden waar ik regelmatig draai.
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

      {/* Provinces Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BESCHIKBARE
              <span className="block text-blue-700">PROVINCIES</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Klik op jouw provincie om alle beschikbare steden te bekijken
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {provinces.map((province, index) => (
              <Link
                key={index}
                to={province.href}
                className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${province.color} rounded-full flex items-center justify-center text-white mr-6 group-hover:scale-110 transition-transform duration-300`}>
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {province.name}
                    </h3>
                    <p className="text-gray-600">{province.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-black text-gray-900 mb-3">Beschikbare steden:</h4>
                  <div className="flex flex-wrap gap-2">
                    {province.cities.map((city, cityIndex) => (
                      <span key={cityIndex} className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700 border border-gray-200">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center text-blue-600 font-black group-hover:text-orange-500 transition-colors duration-300">
                  BEKIJK ALLE STEDEN
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              JOUW REGIO
              <span className="block text-blue-700">NIET GEVONDEN?</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Neem contact op - ik ben flexibel en denk graag mee over andere locaties.
            </p>
          </div>
          <ContactForm eventType="regio" />
        </div>
      </section>
    </div>
  );
};

export default RegioPage;