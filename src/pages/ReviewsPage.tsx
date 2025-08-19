import React from 'react';
import { Star, Quote, ExternalLink, Building, Award, Users, Calendar, ArrowRight, MessageCircle, Phone, MapPin } from 'lucide-react';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import PartnersSection from '../components/PartnersSection';

const ReviewsPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "Reviews & ervaringen – DJ Kevin Froger";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Eerlijke ervaringen van opdrachtgevers door heel NL. Lees hoe we sfeer, techniek en organisatie aanpakken.');
    }
    
    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "DJ Kevin Froger Reviews",
      "description": "Reviews en ervaringen van DJ Kevin Froger",
      "url": "https://kevinfroger.nl/reviews",
      "telephone": "+31645251333",
      "areaServed": "Nederland",
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

  const achievements = [
    {
      title: "GOOGLE REVIEWS",
      description: "Uitstekende beoordelingen van tevreden klanten",
      icon: <Star className="w-10 h-10" />,
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "VERTROUWDE PARTNERS",
      description: "Samenwerking met top bedrijven en organisaties",
      icon: <Building className="w-10 h-10" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "BEWEZEN KWALITEIT",
      description: "15+ jaar ervaring met 1000+ succesvolle evenementen",
      icon: <Award className="w-10 h-10" />,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const regions = [
    { name: "Rotterdam", href: "/regio/zuid-holland/rotterdam" },
    { name: "Den Haag", href: "/regio/zuid-holland/den-haag" },
    { name: "Utrecht", href: "/regio/utrecht" },
    { name: "Eindhoven", href: "/regio/noord-brabant" },
    { name: "Nijmegen", href: "/regio/gelderland" },
    { name: "Enschede", href: "/regio/overijssel" },
    { name: "Delft", href: "/regio/zuid-holland/delft" },
    { name: "Leiden", href: "/regio/zuid-holland/leiden" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-yellow-500 to-orange-600 text-white" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-16 h-16 mx-auto mb-6 text-yellow-200" />
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            Reviews & ervaringen – DJ Kevin Froger
          </h1>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Eerlijke ervaringen van opdrachtgevers door heel NL. Lees hoe we sfeer, techniek en organisatie aanpakken.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/31645251333"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 inline-block mr-3" />
              APP VOOR SNELLE PRIJSINDICATIE
            </a>
            <a
              href="/prijzen"
              className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-yellow-900 transition-all duration-300"
            >
              VRAAG OFFERTE AAN
            </a>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              WAAROM KIEZEN
              <span className="block text-yellow-600">VOOR KEVIN?</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Bewezen kwaliteit door reviews en partnerships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className={`w-24 h-24 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-8 text-white group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-6">{achievement.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviewsSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Region Navigator */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              BOEK EEN DJ IN JOUW REGIO
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {regions.map((region, index) => (
              <a
                key={index}
                href={region.href}
                className="group bg-gray-50 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1"
              >
                <MapPin className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                <h3 className="text-sm font-black text-gray-900 group-hover:text-yellow-600 transition-colors">
                  DJ {region.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-yellow-500 to-orange-600 text-white relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-7xl font-black mb-8 text-shadow-lg">
            SLUIT JE AAN BIJ
            <span className="block text-white">TEVREDEN KLANTEN</span>
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-yellow-100 leading-relaxed max-w-4xl mx-auto">
            Word onderdeel van onze groeiende lijst van tevreden klanten en partners. 
            Ervaar zelf waarom bedrijven en particulieren kiezen voor DJ Kevin Froger.
          </p>
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
            >
              BOEK NU DIRECT
              <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:0645251333"
              className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-yellow-900 transition-all duration-300"
            >
              <Phone className="w-6 h-6 inline-block mr-3" />
              BEL DIRECT
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;