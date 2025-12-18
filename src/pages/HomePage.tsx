import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Users, Zap, Heart, Building, Volume2, Mic, MessageCircle, CheckCircle, MapPin } from 'lucide-react';
import MusicGenresSection from '../components/MusicGenresSection';
import PartnersSection from '../components/PartnersSection';
import { useSEO, generateBreadcrumbSchema } from '../hooks/useSEO';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Enhanced SEO configuration for homepage
  useSEO({
    title: 'DJ Kevin Froger – DJ voor bruiloft, verjaardag & events',
    description: 'Allround DJ met complete show (licht & geluid). Persoonlijk contact, strakke uitvoering en volle dansvloer. 15+ jaar ervaring. Vraag direct een prijsindicatie of offerte.',
    keywords: 'bruiloft dj nederland, dj boeken, dj huren, allround dj, bruiloft dj, festival dj, bedrijfsfeest dj, live mixing dj, mc services',
    canonical: 'https://kevinfroger.nl/',
    ogType: 'website',
    ogImage: 'https://kevinfroger.nl/images/dj-kevin-froger-bruiloft-scaled.jpeg',
    ogImageAlt: 'DJ Kevin Froger - Professioneel DJ bij bruiloft met complete licht en geluid show',
    twitterCard: 'summary_large_image',
    jsonLd: [
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' }
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'DJ Kevin Froger',
        'url': 'https://kevinfroger.nl',
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://kevinfroger.nl/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  });

  const heroSlides = [
    { // This is the first slide, used as static image for mobile
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
      image: "/images/dj-kevin-froger-bedrijfsfeest.webp",
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
      title: "Bruiloft DJ",
      description: "Van ceremonie tot laatste plaat: persoonlijke begeleiding en muziek die past bij jullie dag.",
      features: ["Intake & voorbereiding", "Ceremonie & diner", "Live mixing feestavond", "Eigen licht & geluid"],
      link: "/bruiloft-dj",
      image: "/images/dj-kevin-froger-bruiloft-scaled.jpeg",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600",
      price: "Op aanvraag"
    },
    {
      title: "Verjaardag DJ",
      description: "Muziek op maat voor elke verjaardag. Van gezellige 50+ tot knallend 30-jarig feest.",
      features: ["Muziek op het publiek", "Flexibele opzet", "Licht & geluid pakket", "MC services mogelijk"],
      link: "/verjaardag-dj",
      image: "/images/IMG_1605.webp",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      price: "Op aanvraag"
    },
    {
      title: "Zakelijk DJ",
      description: "Van netwerkborrel tot personeelsfeest: professioneel, representatief en aanpasbaar.",
      features: ["Achtergrond of feest", "Representatieve uitstraling", "Flexibele indeling", "Meertalig mogelijk"],
      link: "/zakelijk-dj",
      image: "/images/dj-kevin-froger-bedrijfsfeest.webp",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      price: "Op aanvraag"
    },
    {
      title: "Licht & Geluid",
      description: "Complete verhuur van professionele DJ-, licht- en geluidsapparatuur voor elk evenement.",
      features: ["Professioneel geluid", "Sfeervolle lichtshow", "Eigen materiaal", "Inclusief DJ mogelijk"],
      link: "/licht-en-geluid-verhuur",
      image: "/images/licht-en-geluid-verhuur-show-scaled.jpeg",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600",
      price: "Op aanvraag"
    }
  ];

  const features = [
    {
      icon: <Volume2 className="w-12 h-12" />,
      title: "RECHTSTREEKS BIJ DE DJ",
      description: "Je hebt direct contact met mij. Geen verhuurbedrijf, geen tussenpersonen. Duidelijke communicatie, snelle reactie en betrokkenheid van begin tot eind.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Mic className="w-12 h-12" />,
      title: "COMPLETE DJ SHOW",
      description: "Licht, geluid en DJ in één pakket. Van subtiele achtergrondmuziek tot spectaculaire lichtshow – alles uit eigen bezit en strak geregeld.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "15+ JAAR ERVARING",
      description: "Meer dan 500 bruiloften gedraaid, van intieme ceremonies tot grote feesten. Ik weet hoe ik de dansvloer vol krijg en vol houd.",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] max-h-[600px] bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white overflow-hidden hero-section" role="banner" aria-labelledby="hero-title">
        {/* Mobile-only static hero image */}
        <div className="md:hidden absolute inset-0">
          <picture>
            <source type="image/avif" srcSet="/images/dj-kevin-froger-bruiloft-scaled-1280.avif 1280w, /images/dj-kevin-froger-bruiloft-scaled-640.avif 640w, /images/dj-kevin-froger-bruiloft-scaled-320.avif 320w" sizes="(max-width: 768px) 100vw, 100vw" />
            <source type="image/webp" srcSet="/images/dj-kevin-froger-bruiloft-scaled-1280.webp 1280w, /images/dj-kevin-froger-bruiloft-scaled-640.webp 640w, /images/dj-kevin-froger-bruiloft-scaled-320.webp 320w" sizes="(max-width: 768px) 100vw, 100vw" />
            <img
              src="/images/dj-kevin-froger-bruiloft-scaled-1280.jpg"
              alt="DJ Kevin Froger - Professionele DJ services Nederland"
              className="w-full h-full object-cover object-center transform-gpu hero-image"
              width="1200"
              height="800"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
        </div>
        {/* Hero Slider Background */}
        <div className="absolute inset-0 hero-slider">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 hero-slide transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <picture>
                <source type="image/avif" srcSet={`${slide.image.replace(/\.(jpe?g|png)$/i, '')}-1280.avif 1280w, ${slide.image.replace(/\.(jpe?g|png)$/i, '')}-640.avif 640w, ${slide.image.replace(/\.(jpe?g|png)$/i, '')}-320.avif 320w`} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" />
                <source type="image/webp" srcSet={`${slide.image.replace(/\.(jpe?g|png)$/i, '')}-1280.webp 1280w, ${slide.image.replace(/\.(jpe?g|png)$/i, '')}-640.webp 640w, ${slide.image.replace(/\.(jpe?g|png)$/i, '')}-320.webp 320w`} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" />
                <img
                  src={slide.image.replace(/\.(jpe?g|png)$/i, '') + '-1280.jpg'}
                  alt={`DJ Kevin Froger ${slide.title} - Professionele DJ services Nederland`}
                  className="w-full h-full object-cover object-center transform-gpu hero-image"
                  width="1200"
                  height="675"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={index === 0 ? 'high' : 'low'}
                  style={{ aspectRatio: '16/9' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
              </picture>
            </div>
          ))}
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-lg animate-ping-slow"></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12 z-10 h-full flex items-center justify-center">
          <div className="text-center w-full max-w-5xl mx-auto">
            <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 lg:mb-6 leading-tight text-shadow-lg">
              ALLROUND DJ MET COMPLETE SHOW
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mb-6 lg:mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto px-4">
              Persoonlijk contact, strakke uitvoering en een volle dansvloer. 15+ jaar ervaring. Vraag direct een prijsindicatie of offerte – app of bel.
            </p>
            
            {/* Desktop buttons */}
            <div className="hidden md:flex flex-row gap-4 lg:gap-6 justify-center mb-8 lg:mb-10">
              <Link
                to="https://wa.me/31645251333"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 lg:px-10 py-3 lg:py-4 rounded-full font-black text-base lg:text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-orange-500/25 transform hover:scale-105 min-h-[44px]"
                aria-label="App voor snelle prijsindicatie"
              >
                <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5 inline-block mr-2" />
                APP VOOR EEN PRIJSINDICATIE
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/prijzen"
                className="border-2 border-white text-white px-6 lg:px-10 py-3 lg:py-4 rounded-full font-black text-base lg:text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 min-h-[44px]"
                aria-label="Vraag een offerte aan"
              >
                <Calendar className="w-4 h-4 lg:w-5 lg:h-5 inline-block mr-2" />
                VRAAG EEN OFFERTE AAN
              </Link>
            </div>

            {/* Mobile buttons */}
            <div className="md:hidden flex flex-col gap-3 mb-6 px-4 max-w-sm mx-auto">
              <a
                href="https://wa.me/31645251333"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg font-bold text-base py-4 px-6 rounded-lg flex items-center justify-center min-h-[48px]"
                aria-label="App voor snelle prijsindicatie"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                APP VOOR EEN PRIJS
              </a>
              <Link
                to="/prijzen"
                className="w-full border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg font-bold text-base py-4 px-6 rounded-lg flex items-center justify-center min-h-[48px]"
                aria-label="Vraag een offerte aan"
              >
                <Calendar className="w-5 h-5 mr-3" />
                EEN OFFERTE
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-4" role="tablist" aria-label="Hero slides">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center ${
                    index === currentSlide 
                      ? 'bg-orange-400 scale-125 shadow-lg shadow-orange-400/50' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  role="tab"
                  aria-selected={index === currentSlide}
                  aria-label={`Ga naar slide ${index + 1}: ${heroSlides[index].title}`}
                >
                  <span className="w-3 h-3 lg:w-3 lg:h-3 rounded-full bg-current"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Section - Moved above main services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-8">
              POPULAIRE DJ SERVICES
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/bruiloft-dj" className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full font-bold hover:bg-pink-200 transition-colors">
                Bruiloft DJ
              </Link>
              <Link to="/verjaardag-dj" className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold hover:bg-green-200 transition-colors">
                Verjaardag DJ
              </Link>
              <Link to="/evenementen-dj" className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-bold hover:bg-orange-200 transition-colors">
                Evenementen DJ
              </Link>
              <Link to="/zakelijk-dj" className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold hover:bg-blue-200 transition-colors">
                Zakelijk DJ
              </Link>
              <Link to="/werkwijze" className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-bold hover:bg-indigo-200 transition-colors">
                Werkwijze
              </Link>
              <Link to="/reviews" className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-bold hover:bg-emerald-200 transition-colors">
                Reviews
              </Link>
              <Link to="/prijzen" className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold hover:bg-green-200 transition-colors">
                Prijzen
              </Link>
              <Link to="/regio" className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-bold hover:bg-purple-200 transition-colors">
                Regio's
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-gray-50 section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 lg:mb-6 text-shadow">
              DJ HUREN VOOR ELK EVENEMENT –
              <span className="block text-orange-500">PROFESSIONEEL EN COMPLEET</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Van bruiloft tot zakelijk evenement: één aanspreekpunt, eigen apparatuur en muziek op maat. Direct prijsindicatie of offerte – geen tussenpersonen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
                <div className="relative overflow-hidden">
                  <picture>
                    <source type="image/avif" srcSet={`${service.image.replace(/\.(jpe?g|png)$/i, '')}-640.avif 640w, ${service.image.replace(/\.(jpe?g|png)$/i, '')}-320.avif 320w`} sizes="(max-width: 768px) 100vw, 33vw" />
                    <source type="image/webp" srcSet={`${service.image.replace(/\.(jpe?g|png)$/i, '')}-640.webp 640w, ${service.image.replace(/\.(jpe?g|png)$/i, '')}-320.webp 320w`} sizes="(max-width: 768px) 100vw, 33vw" />
                    <img
                      src={service.image.replace(/\.(jpe?g|png)$/i, '') + '-640.jpg'}
                      alt={`DJ Kevin Froger ${service.title} - Professionele DJ services voor ${service.title.toLowerCase()} in Nederland`}
                      className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      fetchPriority="low"
                      decoding="async"
                      width="400"
                      height="256"
                      style={{ aspectRatio: '400/256' }}
                    />
                  </picture>
                  <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                      {service.icon}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                    <h3 className="text-lg md:text-2xl font-black text-white mb-2 text-shadow-lg mobile-service-title">{service.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed mobile-service-description">{service.description}</p>
                  
                  <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-4">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                        </div>
                        <span className="text-base md:text-lg text-gray-700 font-medium mobile-feature-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={service.link}
                    className="group inline-flex items-center text-blue-700 font-black text-base md:text-lg hover:text-orange-500 transition-colors duration-200"
                    aria-label={`Meer informatie over ${service.title} DJ services van Kevin Froger`}
                  >
                    MEER INFORMATIE
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-2 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Region Navigator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">
              BOEK EEN DJ IN JOUW REGIO
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beschikbaar in Zuid-Holland, Noord-Brabant, Gelderland, Utrecht en Overijssel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <Link to="/regio/zuid-holland" className="group bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 text-center">
              <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-black text-gray-900 group-hover:text-orange-600 transition-colors">Zuid-Holland</h3>
              <p className="text-sm text-gray-600 mt-2">Rotterdam, Den Haag, Delft</p>
            </Link>
            <Link to="/regio/noord-brabant" className="group bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 text-center">
              <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-black text-gray-900 group-hover:text-orange-600 transition-colors">Noord-Brabant</h3>
              <p className="text-sm text-gray-600 mt-2">Eindhoven, Tilburg, Breda</p>
            </Link>
            <Link to="/regio/gelderland" className="group bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 text-center">
              <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-black text-gray-900 group-hover:text-orange-600 transition-colors">Gelderland</h3>
              <p className="text-sm text-gray-600 mt-2">Nijmegen, Arnhem, Apeldoorn</p>
            </Link>
            <Link to="/regio/utrecht" className="group bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 text-center">
              <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-black text-gray-900 group-hover:text-orange-600 transition-colors">Utrecht</h3>
              <p className="text-sm text-gray-600 mt-2">Utrecht, Amersfoort, Zeist</p>
            </Link>
            <Link to="/regio/overijssel" className="group bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 text-center">
              <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-black text-gray-900 group-hover:text-orange-600 transition-colors">Overijssel</h3>
              <p className="text-sm text-gray-600 mt-2">Enschede, Zwolle, Deventer</p>
            </Link>
          </div>
          
          <div className="text-center">
            <Link
              to="/regio"
              className="inline-flex items-center text-blue-700 font-black text-lg hover:text-orange-500 transition-colors duration-200"
            >
              BEKIJK ALLE REGIO'S
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white lazy-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 lg:mb-6 text-shadow">
              WAAROM DJ KEVIN FROGER?
              <span className="block text-orange-500">PERSOONLIJK, PROFESSIONEEL, STRAK GEREGELD</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Van intake tot nazorg: één aanspreekpunt, flexibel meedenken en een dansvloer die vol blijft.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group px-4 lg:px-0">
                <div className={`w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 lg:mb-8 text-white group-hover:scale-110 transition-transform duration-300 shadow-xl lg:shadow-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg lg:text-2xl font-black text-gray-900 mb-4 lg:mb-6">{feature.title}</h3>
                <p className="text-base lg:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Genres Section */}
      <div className="lazy-section">
        <MusicGenresSection />
      </div>

      {/* Partners Section */}
      <div className="lazy-section">
        <PartnersSection />
      </div>

    </div>
  );
};

export default HomePage;