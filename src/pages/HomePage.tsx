import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Users, Music, Award, Phone, Zap, Heart, Building, Volume2, Mic, MessageCircle } from 'lucide-react';
import MusicGenresSection from '../components/MusicGenresSection';
import PartnersSection from '../components/PartnersSection';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // SEO metadata for homepage
  React.useEffect(() => {
    document.title = "DJ Kevin Froger - #1 Bruiloft DJ Nederland | 500+ Bruiloften | Live Mixing Specialist";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '🎵 #1 Bruiloft DJ Nederland ✨ 500+ bruiloften, 15+ jaar ervaring. Live mixing specialist voor bruiloften, bedrijfsfeesten & festivals. Boek direct! 📞 06-45251333');
    }
  }, []);

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
      {/* VARIANT ZONDER VIDEO - Optimized Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white overflow-hidden" role="banner" aria-labelledby="hero-title">
        {/* Hero Background Image - LCP Element */}
        <img 
          src="/images/dj-kevin-froger-bruiloft-scaled.jpeg"
          srcSet="/images/dj-kevin-froger-bruiloft-scaled.jpeg 800w, /images/dj-kevin-froger-bruiloft-scaled.jpeg 1200w, /images/dj-kevin-froger-bruiloft-scaled.jpeg 1600w"
          sizes="100vw"
          alt="DJ Kevin Froger achter de draaitafel tijdens een bruiloft met dansend publiek"
          className="absolute inset-0 w-full h-full object-cover z-0"
          width="1600"
          height="900"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-1"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-lg animate-ping-slow"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-2">
          <div className="text-center mobile-hero-content">
            <h1 id="hero-title" className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ KEVIN
              <span className="block text-orange-400">FROGER</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Allround DJ & entertainment – sfeer, show en volle dansvloer. 
              Specialist in live mixing en MC services voor onvergetelijke evenementen.
            </p>
            
            {/* Desktop buttons */}
            <div className="hidden md:flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/prijzen"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
                aria-label="Bekijk prijzen en pakketten van DJ Kevin Froger"
              >
                <Calendar className="w-6 h-6 inline-block mr-3" />
                PRIJZEN & PAKKETTEN
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
                aria-label="Boek DJ Kevin Froger direct"
              >
                <Phone className="w-6 h-6 inline-block mr-3" />
                BOEK DIRECT
              </Link>
            </div>

            {/* Mobile buttons */}
            <div className="md:hidden mobile-btn-container mb-16 px-4">
              <Link
                to="/prijzen"
                className="mobile-btn bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg font-bold text-lg"
                aria-label="Bekijk prijzen en pakketten van DJ Kevin Froger"
              >
                <Calendar className="w-5 h-5 mr-3" />
                PRIJZEN & PAKKETTEN
              </Link>
              <Link
                to="/contact"
                className="mobile-btn border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg font-bold text-lg"
                aria-label="Boek DJ Kevin Froger direct"
              >
                <Phone className="w-5 h-5 mr-3" />
                BOEK DIRECT
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-orange-400 mb-2">15+</div>
                <div className="text-blue-200 font-semibold">Jaar Ervaring</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-orange-400 mb-2">500+</div>
                <div className="text-blue-200 font-semibold">Bruiloften</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-orange-400 mb-2">50+</div>
                <div className="text-blue-200 font-semibold">Festivals</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-black text-orange-400 mb-2">1000+</div>
                <div className="text-blue-200 font-semibold">Events</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* VARIANT MET VIDEO - Alternative with Video Background */}
      {/* 
      <header className="hero-section" role="banner" aria-labelledby="hero-title-video">
        <video 
          className="hero-image"
          poster="/images/dj-kevin-froger-bruiloft-scaled.jpeg"
          muted
          loop
          playsInline
          preload="none"
          width="1600"
          height="900"
          aria-label="DJ Kevin Froger video achtergrond"
        >
          <source src="/videos/dj-kevin-hero.webm" type="video/webm" />
          <source src="/videos/dj-kevin-hero.mp4" type="video/mp4" />
        </video>
        
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <h1 id="hero-title-video" className="hero-title">
            DJ Kevin Froger
          </h1>
          
          <p className="hero-subtitle">
            Allround DJ & entertainment – sfeer, show en volle dansvloer
          </p>
          
          <p className="hero-description">
            Specialist in live mixing en MC services. Ik lees het publiek en creëer de perfecte sfeer voor elk moment van jullie evenement.
          </p>
          
          <div className="hero-cta">
            <Link
              to="/prijzen"
              className="btn-primary"
              aria-label="Bekijk prijzen en pakketten van DJ Kevin Froger"
            >
              <Calendar className="icon" />
              Prijzen & Pakketten
            </Link>
            <Link
              to="/contact"
              className="btn-secondary"
              aria-label="Boek DJ Kevin Froger direct"
            >
              <Phone className="icon" />
              Boek Direct
            </Link>
          </div>
        </div>
        
        <script>
          // Start video after page load for performance
          window.addEventListener('load', function() {
            const video = document.querySelector('.hero-section video');
            if (video && video.readyState >= 3) {
              video.play().catch(() => {});
            }
          });
        </script>
      </header>
      */}

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