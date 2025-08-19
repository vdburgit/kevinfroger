import React from 'react';
import { MapPin, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../../components/ContactForm';

const RotterdamPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "DJ huren in Rotterdam (Zuid-Holland) – allround DJ met show";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ in Rotterdam voor bruiloft, verjaardag of bedrijfsevent. Persoonlijk contact, verzoekjes en strakke uitvoering. App voor prijsindicatie.');
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
            {"@type": "ListItem", "position": 3, "name": "Zuid-Holland", "item": "https://kevinfroger.nl/regio/zuid-holland"},
            {"@type": "ListItem", "position": 4, "name": "Rotterdam", "item": "https://kevinfroger.nl/regio/zuid-holland/rotterdam"}
          ]
        },
        {
          "@type": "Service",
          "serviceType": "DJ Rotterdam",
          "provider": {
            "@type": "Person",
            "name": "Kevin Froger",
            "url": "https://kevinfroger.nl/"
          },
          "areaServed": "Rotterdam"
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
      title: "Bruiloft DJ Rotterdam",
      description: "Van Hotel New York tot SS Rotterdam",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Verjaardag DJ Rotterdam",
      description: "Alle leeftijden in de Maasstad",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Zakelijk DJ Rotterdam",
      description: "Corporate events in de havenstad",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Evenementen DJ Rotterdam",
      description: "Festivals en publieke events",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    }
  ];

  const usps = [
    "Complete show met licht & geluid",
    "Verzoekjes welkom tijdens het feest",
    "Nette op‑ en afbouw in overleg",
    "Persoonlijk contact en voorbereiding"
  ];

  const faq = [
    {
      question: "Kun je draaien op locatie X in Rotterdam?",
      answer: "Ja, ik stem techniek en tijden vooraf af met de locatie."
    },
    {
      question: "Neem je eigen geluid/licht mee?",
      answer: "Ja, complete set passend bij de zaal en het aantal gasten."
    },
    {
      question: "Kunnen we verzoeknummers doorgeven?",
      answer: "Absoluut, vooraf en tijdens het feest."
    }
  ];

  const nearbyCities = [
    { name: "Schiedam", href: "/regio/zuid-holland/schiedam" },
    { name: "Vlaardingen", href: "/regio/zuid-holland/vlaardingen" },
    { name: "Delft", href: "/regio/zuid-holland/delft" },
    { name: "Den Haag", href: "/regio/zuid-holland/den-haag" }
  ];

  const stats = [
    { number: "15+", label: "Jaar in Rotterdam", icon: <Award className="w-8 h-8" /> },
    { number: "300+", label: "Events in Rotterdam", icon: <Calendar className="w-8 h-8" /> },
    { number: "150+", label: "Rotterdamse Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "100+", label: "Corporate Events", icon: <Building className="w-8 h-8" /> }
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
            <li><Link to="/regio/zuid-holland" className="text-gray-500 hover:text-gray-700">Zuid-Holland</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-semibold">Rotterdam</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-700 text-white" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            DJ huren in Rotterdam – allround DJ met show
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Op zoek naar een DJ in Rotterdam voor bruiloft, verjaardag of bedrijfsevent? 
            Ik breng een complete show mee en speel feilloos in op het publiek. Van binnenkomstmuziek 
            tot laatste plaat: strak geregeld, persoonlijk en met volle dansvloer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="https://wa.me/31645251333"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 inline-block mr-3" />
              APP VOOR PRIJSINDICATIE
            </a>
            <a
              href="/prijzen"
              className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              VRAAG OFFERTE AAN
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
              <span className="block text-blue-700">ROTTERDAM</span>
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

          <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-12">
            <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">Wat je krijgt in Rotterdam:</h3>
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

      {/* FAQ Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              VEELGESTELDE
              <span className="block text-blue-700">VRAGEN</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {faq.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-black mr-4">
                    {index + 1}
                  </span>
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-12">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              ANDERE STEDEN IN ZUID-HOLLAND
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nearbyCities.map((city, index) => (
              <Link
                key={index}
                to={city.href}
                className="group bg-gray-50 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1"
              >
                <MapPin className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <h3 className="text-sm font-black text-gray-900 group-hover:text-blue-600 transition-colors">
                  DJ {city.name}
                </h3>
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
              BOEK EEN DJ
              <span className="block text-blue-700">IN ROTTERDAM</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in Rotterdam onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Rotterdam" />
        </div>
      </section>
    </div>
  );
};

export default RotterdamPage;