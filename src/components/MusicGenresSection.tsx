import React, { useState, useEffect, useRef } from 'react';
import { Music, Disc, Radio, Headphones, Volume2, Play, SkipForward, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const MusicGenresSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  const musicGenres = [
    {
      name: "Classic Disco Hits",
      icon: <Disc className="w-8 h-8" />,
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-50",
      description: "Tijdloze disco classics uit de jaren 70, 80 en 90"
    },
    {
      name: "Reggae",
      icon: <Music className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      description: "Ontspannen Caribische vibes"
    },
    {
      name: "Rock",
      icon: <Volume2 className="w-8 h-8" />,
      color: "from-slate-600 to-gray-800",
      bgColor: "bg-slate-50",
      description: "Krachtige rock anthems"
    },
    {
      name: "Old School Hits",
      icon: <Radio className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      description: "Evergreen hits en tijdloze klassiekers"
    },
    {
      name: "Pop Classics",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      description: "Populaire pop hits van alle tijden"
    },
    {
      name: "Top 40",
      icon: <Play className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      description: "De grootste hits van dit moment"
    },
    {
      name: "Urban",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-gray-700 to-slate-800",
      bgColor: "bg-gray-50",
      description: "Hip-Hop, R&B en Urban muziek"
    },
    {
      name: "Moombahton",
      icon: <SkipForward className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      description: "Energieke Latin-elektronische fusion"
    },
    {
      name: "Reggaeton",
      icon: <Music className="w-8 h-8" />,
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50",
      description: "Energieke Latin reggaeton"
    },
    {
      name: "Nederlandse Feestmuziek",
      icon: <Volume2 className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      description: "Populaire Nederlandse party hits"
    },
    {
      name: "Latin Music",
      icon: <Disc className="w-8 h-8" />,
      color: "from-rose-500 to-red-600",
      bgColor: "bg-rose-50",
      description: "Authentieke Latin ritmes en melodieën"
    },
    {
      name: "Salsa",
      icon: <Music className="w-8 h-8" />,
      color: "from-red-600 to-orange-700",
      bgColor: "bg-red-50",
      description: "Dansbare salsa classics"
    },
    {
      name: "Soca",
      icon: <Play className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      description: "Caribische carnaval en soca muziek"
    },
    {
      name: "House",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50",
      description: "Elektronische dancefloor hits"
    },
    {
      name: "Freestyle",
      icon: <Radio className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
      description: "Freestyle en breakbeat muziek"
    },
    {
      name: "Hardstyle",
      icon: <Volume2 className="w-8 h-8" />,
      color: "from-purple-600 to-indigo-800",
      bgColor: "bg-purple-50",
      description: "Harde elektronische beats"
    },
    {
      name: "Happy Hardcore",
      icon: <SkipForward className="w-8 h-8" />,
      color: "from-pink-600 to-purple-700",
      bgColor: "bg-pink-50",
      description: "Uptempo hardcore en gabber"
    },
    {
      name: "Dubstep",
      icon: <Disc className="w-8 h-8" />,
      color: "from-green-600 to-teal-700",
      bgColor: "bg-green-50",
      description: "Zware elektronische drops"
    },
    {
      name: "Foute Hits",
      icon: <Heart className="w-8 h-8" />,
      color: "from-yellow-600 to-orange-700",
      bgColor: "bg-yellow-50",
      description: "Nostalgische guilty pleasure hits"
    },
    {
      name: "Party Classics",
      icon: <Play className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      description: "Ultimate party en feest hits"
    },
    {
      name: "Après-Ski Hits",
      icon: <Music className="w-8 h-8" />,
      color: "from-blue-600 to-indigo-700",
      bgColor: "bg-blue-50",
      description: "Gezellige après-ski en hut muziek"
    },
    {
      name: "Nederlandse Pop",
      icon: <Radio className="w-8 h-8" />,
      color: "from-orange-600 to-red-700",
      bgColor: "bg-orange-50",
      description: "Populaire Nederlandstalige pop muziek"
    },
    {
      name: "Meezingers",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-teal-600 to-cyan-700",
      bgColor: "bg-teal-50",
      description: "Bekende meezingers en sing-alongs"
    },
    {
      name: "Traditioneel Nederlands",
      icon: <Volume2 className="w-8 h-8" />,
      color: "from-amber-600 to-yellow-700",
      bgColor: "bg-amber-50",
      description: "Klassieke Nederlandse volksmuziek"
    }
  ];

  const cardWidth = 200; // Width of each card in pixels
  const gap = 16; // Gap between cards
  const scrollAmount = cardWidth + gap;

  const updateScrollButtons = () => {
    if (!sliderRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    const newPosition = Math.max(0, scrollPosition - scrollAmount * 3);
    sliderRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    setScrollPosition(newPosition);
    setIsAutoScrolling(false);
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    const newPosition = Math.min(maxScroll, scrollPosition + scrollAmount * 3);
    sliderRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    setScrollPosition(newPosition);
    setIsAutoScrolling(false);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling || !sliderRef.current) return;
    
    const timer = setInterval(() => {
      if (!sliderRef.current) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const maxScroll = scrollWidth - clientWidth;
      
      if (scrollLeft >= maxScroll - 10) {
        // Reset to beginning
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        setScrollPosition(0);
      } else {
        // Continue scrolling
        const newPosition = Math.min(maxScroll, scrollLeft + scrollAmount);
        sliderRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
        setScrollPosition(newPosition);
      }
    }, 3000);
    
    return () => clearInterval(timer);
  }, [isAutoScrolling, scrollAmount]);

  useEffect(() => {
    updateScrollButtons();
    
    const handleScroll = () => {
      if (!sliderRef.current) return;
      setScrollPosition(sliderRef.current.scrollLeft);
      updateScrollButtons();
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll, { passive: true });
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-orange-400/5 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-400/5 rounded-full blur-2xl animate-ping-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
            ALLE MUZIEK
            <span className="block text-blue-700">GENRES</span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Van klassieke disco tot moderne elektronische muziek - wij draaien alles wat jouw publiek wil horen
          </p>
        </div>

        {/* Single Horizontal Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 rounded-full transition-all duration-300 flex items-center justify-center shadow-xl group ${
              canScrollLeft 
                ? 'bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 cursor-pointer' 
                : 'bg-gray-200/50 text-gray-400 cursor-not-allowed'
            }`}
            aria-label="Scroll naar links"
          >
            <ChevronLeft className={`w-7 h-7 transition-transform duration-200 ${canScrollLeft ? 'group-hover:scale-110' : ''}`} />
          </button>
          
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 rounded-full transition-all duration-300 flex items-center justify-center shadow-xl group ${
              canScrollRight 
                ? 'bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 cursor-pointer' 
                : 'bg-gray-200/50 text-gray-400 cursor-not-allowed'
            }`}
            aria-label="Scroll naar rechts"
          >
            <ChevronRight className={`w-7 h-7 transition-transform duration-200 ${canScrollRight ? 'group-hover:scale-110' : ''}`} />
          </button>

          {/* Horizontal Scrolling Container */}
          <div 
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-8 py-4"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
          >
            {musicGenres.map((genre, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden flex-shrink-0"
                style={{ 
                  width: `${cardWidth}px`,
                  aspectRatio: '1/1'
                }}
              >
                {/* Icon Container */}
                <div className="flex-1 flex items-center justify-center p-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${genre.color} rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {genre.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 pt-0 text-center">
                  <h3 className="text-sm font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
                    {genre.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Progress Indicator */}
          <div className="flex justify-center mt-8">
            <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-orange-500 rounded-full transition-all duration-300"
                style={{ 
                  width: `${sliderRef.current ? 
                    ((scrollPosition / (sliderRef.current.scrollWidth - sliderRef.current.clientWidth)) * 100) : 0}%` 
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-16 border-t border-gray-200">
          <h3 className="text-4xl font-black text-gray-900 mb-6">
            JOUW FAVORIETE GENRE NIET GEVONDEN?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Geen probleem! Wij draaien ook andere genres en passen ons altijd aan jouw wensen aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-black text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg"
            >
              <Music className="w-6 h-6 mr-3" />
              BESPREEK JOUW WENSEN
            </a>
            <a
              href="tel:0645251333"
              className="inline-flex items-center border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full font-black text-lg hover:bg-blue-500 hover:text-white transition-all duration-200"
            >
              DIRECT BELLEN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicGenresSection;