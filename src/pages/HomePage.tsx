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
      <header className="hero-section" role="banner" aria-labelledby="hero-title">
        {/* Hero Background Image - LCP Element */}
        <img 
          src="/images/dj-kevin-froger-bruiloft-scaled.jpeg"
          srcSet="/images/dj-kevin-froger-bruiloft-scaled.jpeg 800w, /images/dj-kevin-froger-bruiloft-scaled.jpeg 1200w, /images/dj-kevin-froger-bruiloft-scaled.jpeg 1600w"
          sizes="100vw"
          alt="DJ Kevin Froger achter de draaitafel tijdens een bruiloft met dansend publiek"
          className="hero-image"
          width="1600"
          height="900"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        
        {/* Overlay */}
        <div className="hero-overlay"></div>
        
        {/* Content */}
        <div className="hero-content">
          <h1 id="hero-title" className="hero-title">
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
      </header>
      
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