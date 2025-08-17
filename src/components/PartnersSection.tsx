import React, { useState, useEffect } from 'react';
import { Building, Award, Users, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const PartnersSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const partners = [
    {
      name: "Heineken",
      logo: "/images/logos/heineken.png",
      category: "Horeca",
      description: "Internationale bierbrouwer"
    },
    {
      name: "Jumbo",
      logo: "/images/logos/jumbo.png",
      category: "Retail",
      description: "Nederlandse supermarktketen"
    },
    {
      name: "Pupa Milano",
      logo: "/images/logos/pupa milano.png",
      category: "Beauty",
      description: "Italiaans cosmeticamerk"
    },
    {
      name: "Flügel",
      logo: "/images/logos/flugel.png",
      category: "Events",
      description: "Event organisatie"
    },
    {
      name: "Modern Nerdplace",
      logo: "/images/logos/modern-nerdplace.png",
      category: "Tech",
      description: "Gaming & technologie"
    },
    {
      name: "Voorwinden",
      logo: "/images/logos/voorwinden.png",
      category: "Business",
      description: "Zakelijke dienstverlening"
    },
    {
      name: "Albert Heijn",
      logo: "/images/logos/Albert Heijn.svg",
      category: "Retail",
      description: "Nederlandse supermarktketen"
    },
    {
      name: "Bol.com",
      logo: "/images/logos/bol..png",
      category: "E-commerce",
      description: "Online webwinkel"
    },
    {
      name: "KPN",
      logo: "/images/logos/KPN.png",
      category: "Telecom",
      description: "Telecommunicatie provider"
    },
    {
      name: "Makro",
      logo: "/images/logos/Makro Europ.png",
      category: "Groothandel",
      description: "Cash & carry groothandel"
    },
    {
      name: "Politie",
      logo: "/images/logos/politie.svg",
      category: "Overheid",
      description: "Nederlandse politie"
    },
    {
      name: "Van der Valk",
      logo: "/images/logos/van der valk.png",
      category: "Horeca",
      description: "Hotel & restaurant keten"
    },
    {
      name: "YourSurprise",
      logo: "/images/logos/logo yoursurprise.svg",
      category: "E-commerce",
      description: "Gepersonaliseerde cadeaus"
    },
    {
      name: "Hogeschool Rotterdam",
      logo: "/images/logos/hogeschool-rotterdam.png",
      category: "Onderwijs",
      description: "Hoger onderwijs instelling"
    },
    {
      name: "Feyenoord",
      logo: "/images/logos/feyenoord-rotterdam.png",
      category: "Sport",
      description: "Voetbalclub Rotterdam"
    },
    {
      name: "Sparta Rotterdam",
      logo: "/images/logos/sparta-rotterdam.png",
      category: "Sport",
      description: "Voetbalclub Rotterdam"
    },
    {
      name: "Dutch Grand Prix",
      logo: "/images/logos/dutch-grand-prix.png",
      category: "Sport",
      description: "Formule 1 evenement"
    },
    {
      name: "Landmacht",
      logo: "/images/logos/landmacht.png",
      category: "Defensie",
      description: "Nederlandse landmacht"
    }
  ];

  // Group partners into slides of 6
  const partnersPerSlide = 6;
  const totalSlides = Math.ceil(partners.length / partnersPerSlide);
  const slides = Array.from({ length: totalSlides }, (_, i) =>
    partners.slice(i * partnersPerSlide, (i + 1) * partnersPerSlide)
  );

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl animate-ping-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-black mb-8 text-shadow-lg">
            VERTROUWD DOOR
            <span className="block text-orange-400">TOP BEDRIJVEN</span>
          </h2>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Van internationale merken tot lokale ondernemers - zij kozen voor DJ Kevin Froger
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white group"
            aria-label="Vorige partners"
          >
            <ChevronLeft className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white group"
            aria-label="Volgende partners"
          >
            <ChevronRight className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
          </button>

          {/* Slides */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-8">
                    {slide.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="group">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-3xl shadow-md md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 p-2 md:p-8 border border-white/20 hover:border-orange-300/50 transform hover:-translate-y-1 md:hover:-translate-y-4 hover:scale-102 md:hover:scale-105 h-20 md:h-80 flex flex-col">
                          {/* Logo Container */}
                          <div className="h-12 md:h-32 flex items-center justify-center mb-1 md:mb-6 bg-gray-50 rounded-lg md:rounded-2xl p-1 md:p-4 group-hover:bg-white transition-colors duration-300">
                            <img 
                              src={partner.logo} 
                              alt={`${partner.name} logo`}
                              className="max-w-full h-full object-contain group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          
                          {/* Partner Info */}
                          <div className="text-center flex-1 flex flex-col justify-center hidden md:flex">
                            <h3 className="font-black text-gray-900 text-xs md:text-lg mb-0.5 md:mb-2 group-hover:text-orange-600 transition-colors duration-300">
                              {partner.name}
                            </h3>
                            <p className="text-gray-500 text-xs md:text-sm font-semibold mb-0.5 md:mb-2">{partner.category}</p>
                            <p className="text-gray-400 text-xs leading-relaxed hidden lg:block">{partner.description}</p>
                          </div>

                          {/* Hover Glow Effect */}
                          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-orange-400 md:scale-125 shadow-lg shadow-orange-400/50' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Ga naar slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-4xl font-black text-white mb-6">
            SLUIT JE AAN BIJ DEZE TOP BEDRIJVEN
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ontdek waarom deze bedrijven kiezen voor de professionele services van DJ Kevin Froger
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
          >
            WORDT OOK PARTNER
            <ArrowRight className="w-6 h-6 ml-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;