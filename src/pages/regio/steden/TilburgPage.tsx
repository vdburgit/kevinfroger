import React from 'react';
import { MapPin, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Factory, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../../components/ContactForm';

const TilburgPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "DJ Tilburg - Professionele DJ services in de textielstad | Kevin Froger";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Tilburg - Professionele DJ services in de textielstad. Van centrum tot universiteit, van bruiloften tot bedrijfsfeesten. Boek nu!');
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
            {"@type": "ListItem", "position": 3, "name": "Noord-Brabant", "item": "https://kevinfroger.nl/regio/noord-brabant"},
            {"@type": "ListItem", "position": 4, "name": "Tilburg", "item": "https://kevinfroger.nl/regio/noord-brabant/tilburg"}
          ]
        },
        {
          "@type": "Service",
          "serviceType": "DJ Tilburg",
          "provider": {
            "@type": "Person",
            "name": "Kevin Froger",
            "url": "https://kevinfroger.nl/"
          },
          "areaServed": "Tilburg"
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
      title: "Bruiloft DJ Tilburg",
      description: "Romantische bruiloften in de textielstad",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Bedrijfsfeest DJ Tilburg",
      description: "Corporate events in industriële stad",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Studentenfeest DJ",
      description: "Universiteit Tilburg evenementen",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Festival DJ Tilburg",
      description: "Grote evenementen in de textielstad",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    }
  ];

  const stats = [
    { number: "15+", label: "Jaar in Tilburg", icon: <Award className="w-8 h-8" /> },
    { number: "120+", label: "Events in Tilburg", icon: <Calendar className="w-8 h-8" /> },
    { number: "70+", label: "Tilburgse Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "50+", label: "Corporate Events", icon: <Building className="w-8 h-8" /> }
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
            <li><Link to="/regio/noord-brabant" className="text-gray-500 hover:text-gray-700">Noord-Brabant</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-semibold">Tilburg</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-red-700 text-white" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Factory className="w-16 h-16 mx-auto mb-6 text-purple-200" />
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            DJ Tilburg - Professionele DJ services in de textielstad
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            DJ in Tilburg voor alle gelegenheden. Van centrum tot universiteit, 
            van bruiloften tot bedrijfsfeesten in de textielstad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="https://wa.me/31645251333"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 inline-block mr-3" />
              WHATSAPP CONTACT
            </a>
            <a
              href="/contact"
              className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              OFFERTE AANVRAGEN
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
                <div className="text-purple-200 font-semibold">{stat.label}</div>
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
              <span className="block text-purple-700">TILBURG</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK DJ KEVIN
              <span className="block text-purple-700">IN TILBURG</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in Tilburg onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Tilburg" />
        </div>
      </section>
    </div>
  );
};

export default TilburgPage;