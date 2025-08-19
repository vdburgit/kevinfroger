import React from 'react';
import { Star, Quote, ExternalLink, Building, Award, Users, Calendar, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import PartnersSection from '../components/PartnersSection';

const PortfolioPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "Portfolio DJ Kevin Froger | Google Reviews & Partners";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Portfolio DJ Kevin Froger ⭐ Google reviews, partners en referenties. 15+ jaar ervaring, 1000+ events. DJ Kevin Froger bekijk portfolio!');
    }
    
    // Add structured data for portfolio page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Portfolio DJ Kevin Froger",
      "description": "Portfolio, Google reviews en partners van DJ Kevin Froger",
      "url": "https://kevinfroger.nl/portfolio",
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
  const googleStats = [
  
  ];

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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white overflow-hidden" role="banner" aria-labelledby="reviews-hero-title">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-lg animate-ping-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 id="reviews-hero-title" className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              GOOGLE REVIEWS
              <span className="block text-orange-400">& PARTNERS</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Ontdek wat onze klanten zeggen en bekijk de topbedrijven die vertrouwen op DJ Kevin Froger. 
              Van 5-sterren reviews tot internationale partnerships.
            </p>
            
            <div className="md:hidden mobile-btn-container mb-16 px-4">
              <a
                href="#google-reviews"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('google-reviews')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="group mobile-btn bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg font-bold text-lg w-full min-h-[60px] rounded-2xl flex items-center justify-center mb-4"
              >
                <Star className="w-6 h-6 inline-block mr-3" />
                BEKIJK REVIEWS
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="mobile-btn border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg font-bold text-lg w-full min-h-[60px] rounded-2xl flex items-center justify-center"
              >
                BOEK NU
              </a>
            </div>

            {/* Google Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {googleStats.map((stat, index) => (
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
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              WAAROM KIEZEN
              <span className="block text-blue-700">VOOR KEVIN?</span>
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
      <div id="google-reviews">
        <GoogleReviewsSection />
      </div>

      {/* Partners Section */}
      <PartnersSection />

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-orange-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-7xl font-black mb-8 text-shadow-lg">
            SLUIT JE AAN BIJ
            <span className="block text-orange-400">TEVREDEN KLANTEN</span>
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
            Word onderdeel van onze groeiende lijst van tevreden klanten en partners. 
            Ervaar zelf waarom bedrijven en particulieren kiezen voor DJ Kevin Froger.
          </p>
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
            >
              BOEK NU DIRECT
              <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:0645251333"
              className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              <Phone className="w-6 h-6 inline-block mr-3" />
              BEL DIRECT
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=31645251333&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="border-3 border-green-400 text-green-100 px-10 py-5 rounded-full font-black text-xl hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6 inline-block mr-3" />
              WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;