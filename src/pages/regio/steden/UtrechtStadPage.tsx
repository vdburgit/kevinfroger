import React from 'react';
import { Calendar, Users, Award, Heart, Building, Zap, Church, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../../components/ContactForm';

const UtrechtStadPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "DJ Utrecht - Professionele DJ services in de domstad | Kevin Froger";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Utrecht - Professionele DJ services in de domstad. Van centrum tot Leidsche Rijn, van bruiloften tot bedrijfsfeesten. Boek nu!');
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
            {"@type": "ListItem", "position": 3, "name": "Utrecht", "item": "https://kevinfroger.nl/regio/utrecht"},
            {"@type": "ListItem", "position": 4, "name": "Utrecht", "item": "https://kevinfroger.nl/regio/utrecht/utrecht"}
          ]
        },
        {
          "@type": "Service",
          "serviceType": "DJ Utrecht",
          "provider": {
            "@type": "Person",
            "name": "Kevin Froger",
            "url": "https://kevinfroger.nl/"
          },
          "areaServed": "Utrecht"
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
      title: "Bruiloft DJ Utrecht",
      description: "Romantische bruiloften in de domstad",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Bedrijfsfeest DJ Utrecht",
      description: "Corporate events in het hart van Nederland",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Festival DJ Utrecht",
      description: "Grote evenementen in de domstad",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    },
    {
      title: "Privé DJ Utrecht",
      description: "Privé feesten in alle wijken",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    }
  ];

  const stats = [
    { number: "15+", label: "Jaar in Utrecht", icon: <Award className="w-8 h-8" /> },
    { number: "120+", label: "Events in Utrecht", icon: <Calendar className="w-8 h-8" /> },
    { number: "80+", label: "Utrechtse Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "40+", label: "Corporate Events", icon: <Building className="w-8 h-8" /> }
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
            <li><Link to="/regio/utrecht" className="text-gray-500 hover:text-gray-700">Utrecht</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-semibold">Utrecht</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-red-600 to-orange-700 text-white" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Church className="w-16 h-16 mx-auto mb-6 text-red-200" />
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            DJ Utrecht - Professionele DJ services in de domstad
          </h1>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            DJ in Utrecht voor alle gelegenheden. Van centrum tot Leidsche Rijn, 
            van bruiloften tot bedrijfsfeesten in het hart van Nederland.
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
              className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-red-900 transition-all duration-300"
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
              <span className="block text-red-700">UTRECHT</span>
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
              <span className="block text-red-700">IN UTRECHT</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in Utrecht onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Utrecht" />
        </div>
      </section>
    </div>
  );
};

export default UtrechtStadPage;