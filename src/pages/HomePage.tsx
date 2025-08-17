import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Users, Music, Award, Phone, Zap, Heart, Building, Volume2, Mic, MessageCircle } from 'lucide-react';
import MusicGenresSection from '../components/MusicGenresSection';
import PartnersSection from '../components/PartnersSection';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: "/images/dj-kevin-froger-bruiloft-scaled.jpeg",
      title: "PROFESSIONELE DJ",
      subtitle: "KEVIN FROGER",
      description: "Specialist in live mixing en MC services. Ik lees het publiek en creëer de perfecte sfeer voor elk moment van jullie evenement."
    },
    {
      image: "/images/licht-en-geluid-verhuur-show-scaled.jpeg",
      title: "LIVE MIXING",
      subtitle: "SPECIALIST",
      description: "Geen standaard playlists, maar unieke live sets die ik ter plekke samenstel. Elke track wordt zorgvuldig gekozen voor het perfecte moment."
    },
    {
      image: "/images/dj-kevin-froger-bedrijfsfeest.png",
      title: "DJ & MC",
      subtitle: "COMPLETE SERVICE",
      description: "Als ervaren MC begeleid ik jullie evenement van begin tot eind. Van aankondigingen tot crowd interaction - alles voor de perfecte sfeer."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "Bruiloften",
      description: "Complete muzikale begeleiding voor jullie mooiste dag. Van ceremonie tot late avond.",
      features: ["Ceremonie muziek", "Diner begeleiding", "Eerste dans", "Feestavond DJ"],
      link: "/bruiloften",
      image: "/images/dj-kevin-froger-bruiloft-scaled.jpeg",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600",
      price: "Op aanvraag"
    },
    {
      title: "Bedrijfsfeesten", 
      description: "Professionele entertainment voor corporate events en personeelsfeesten.",
      features: ["Netwerkevents", "Jubilea", "Productlanceringen", "Teambuilding"],
      link: "/bedrijfsfeesten",
      image: "/images/dj-kevin-froger-bedrijfsfeest.png",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      price: "Op aanvraag"
    },
    {
      title: "Festivals",
      description: "High-energy festival sets. 60 minuten non-stop entertainment voor elk publiek.",
      features: ["Power sets", "Crowd control", "MC services", "Flexibele tijdslots"],
      link: "/festivals", 
      image: "/images/licht-en-geluid-verhuur-show-scaled.jpeg",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600",
      price: "Op aanvraag"
    }
  ];

  const features = [
    {
      icon: <Volume2 className="w-12 h-12" />,
      title: "LIVE MIXING SPECIALIST",
      description: "Geen standaard playlists maar unieke live mixen die ter plekke worden samengesteld, afgestemd op de sfeer van het moment",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mic className="w-12 h-12" />,
      title: "ENERGIEKE MC SERVICES",
      description: "DJ én MC in één persoon. Interactie met het publiek en professionele presentatie voor complete entertainment",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "15+ JAAR ERVARING", 
      description: "Jarenlange ervaring met alle soorten evenementen. Van intieme bruiloften tot grote festivals - altijd de juiste sfeer",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Fullscreen Slider */}
      <section className="relative min-h-screen overflow-hidden" role="banner" aria-label="DJ Kevin Froger Hero Section">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70 z-10"></div>
            <img 
              src={slide.image}
              alt={`DJ Kevin Froger - ${slide.title} ${slide.subtitle}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              width="1920"
              height="1080"
            />
          </div>
        ))}
        
        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white mb-8 leading-tight text-shadow-xl">
              <span className="block">#1 BRUILOFT DJ</span>
              <span className="block text-orange-400">NEDERLAND</span>
              <span className="block text-orange-400">KEVIN FROGER</span>
            </h1>
            
            <div className="mb-8">
              <p className="text-xl lg:text-2xl text-white mb-4 text-shadow-lg font-bold">
                LIVE MIXING SPECIALIST & ENERGIEKE MC
              </p>
              <div className="flex items-center justify-center space-x-6 text-orange-400 font-black text-lg">
                <span>✅ 500+ BRUILOFTEN</span>
                <span>✅ 15+ JAAR ERVARING</span>
                <span>✅ LANDELIJK ACTIEF</span>
              </div>
            </div>
            
            <p className="text-lg lg:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed text-shadow-lg">
              🎵 DJ Kevin Froger - De meest geboekte bruiloft DJ van Nederland. Geen standaard playlists maar live mixing op maat. 
              Van ceremonie tot feestavond, van Rotterdam tot Amsterdam - altijd de perfecte sfeer voor jullie evenement.
            </p>
            
            {/* Desktop buttons */}
            <div className="hidden md:flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500/50 flex items-center justify-center min-w-[200px]"
                aria-label="Boek DJ Kevin Froger direct"
              >
                <Calendar className="w-6 h-6 inline-block mr-3" />
                DIRECT BOEKEN
                <ArrowRight className="w-5 h-5 inline-block ml-2" />
              </Link>
              <a
                href="tel:0645251333"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center min-w-[200px]"
                aria-label="Bel DJ Kevin Froger op 06 45 25 13 33"
              >
               <Phone className="w-6 h-6 inline-block mr-3" />
                BEL DIRECT
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=31645251333&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="border-3 border-green-400 text-green-100 px-10 py-5 rounded-full font-black text-xl hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center min-w-[200px]"
                aria-label="Stuur WhatsApp bericht naar DJ Kevin Froger"
              >
                <MessageCircle className="w-6 h-6 inline-block mr-3" />
                WHATSAPP
              </a>
            </div>

            {/* Mobile buttons */}
            <div className="md:hidden w-full max-w-xs mx-auto px-2 space-y-1.5 mb-6">
              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-2 rounded-lg font-bold text-xs hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md flex items-center justify-center min-h-[36px]"
                aria-label="Boek DJ Kevin Froger direct"
              >
                <Calendar className="w-3 h-3 mr-1.5" />
                DIRECT BOEKEN
              </Link>
              <a
                href="tel:0645251333"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-lg font-bold text-xs hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md flex items-center justify-center min-h-[36px]"
                aria-label="Bel DJ Kevin Froger"
              >
                <Phone className="w-3 h-3 mr-1.5" />
                BEL DIRECT
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=31645251333&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2 rounded-lg font-bold text-xs hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md flex items-center justify-center min-h-[36px]"
                aria-label="Stuur WhatsApp bericht naar DJ Kevin Froger"
              >
                <MessageCircle className="w-3 h-3 mr-1.5" />
                WHATSAPP
              </a>
            </div>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-orange-400 md:scale-125 shadow-lg' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ga naar slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features Section - Stayawake Style */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              WAAROM
              <span className="block text-orange-500">KEVIN FROGER?</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              De perfecte combinatie van ervaring, professionaliteit en passie
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-24 h-24 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-8 text-white group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-6">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Genres Section */}
      <MusicGenresSection />

      {/* Partners Section */}
      <PartnersSection />

    </div>
  );
};

export default HomePage;