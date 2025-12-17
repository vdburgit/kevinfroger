import React from 'react';
import { Search, Calendar, Users, Award, CheckCircle, ArrowRight, Heart, Building, Zap, Euro, Star, Sparkles, TreePine, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import GoogleReviewsSection from '../../components/GoogleReviewsSection';

const DJHurenNederlandPage = () => {
  const services = [
    {
      title: "Bruiloft DJ",
      description: "Van ceremonie tot laatste dans: complete begeleiding met persoonlijke voorbereiding.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600",
      price: "Op aanvraag"
    },
    {
      title: "Zakelijk DJ",
      description: "Professionele uitstraling voor bedrijfsfeesten, borrels en netwerkevents.",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      price: "Op aanvraag"
    },
    {
      title: "Verjaardag DJ",
      description: "Muziek op maat voor elke leeftijd en elk publiek – feestelijk of gezellig.",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      price: "Op aanvraag"
    },
    {
      title: "Licht & Geluid",
      description: "Complete verhuur van professionele DJ-, licht- en geluidsapparatuur.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600",
      price: "Op aanvraag"
    }
  ];

  const searchTerms = [
    "DJ huren Nederland", "DJ boeken", "DJ gezocht", "goedkope DJ", "betaalbare DJ",
    "professionele DJ", "ervaren DJ", "perfecte DJ", "DJ met apparatuur", "allround DJ",
    "DJ inclusief licht en geluid", "mobiele DJ show", "DJ met eigen installatie"
  ];

  const eventTypes = [
    "DJ voor bruiloft", "bruiloft DJ huren", "trouwfeest DJ", "DJ voor verjaardag",
    "verjaardagsfeest DJ", "DJ voor jubileum", "jubileumfeest DJ", "DJ voor bedrijfsfeest",
    "bedrijfsevenement DJ", "DJ voor personeelsfeest", "DJ voor festival", "festival DJ huren"
  ];

  const specialEvents = [
    "DJ voor tuinfeest", "tuinfeest DJ huren", "DJ voor schuurfeest", "schuurfeest DJ huren",
    "DJ voor schoolfeest", "schoolfeest DJ huren", "DJ voor themafeest", "themafeest DJ huren",
    "DJ voor Oktoberfest", "DJ voor carnaval", "DJ voor kerstfeest", "DJ voor nieuwjaarsfeest"
  ];

  const stats = [
    { number: "15+", label: "Jaar DJ Verhuur", icon: <Award className="w-8 h-8" /> },
    { number: "1000+", label: "DJ Boekingen", icon: <Calendar className="w-8 h-8" /> },
    { number: "7", label: "Provincies Actief", icon: <Users className="w-8 h-8" /> },
    { number: "€350+", label: "Vanaf Prijs", icon: <Euro className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Search className="w-10 h-10 text-orange-400" />
              <span className="text-orange-400 font-black text-xl tracking-wide">DJ HUREN NEDERLAND</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ HUREN NEDERLAND –
              <span className="block text-orange-400">ALLROUND, BETAALBAAR EN BETROUWBAAR</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              DJ huren met eigen apparatuur, muziek op maat en persoonlijke aanpak. Direct contact met de DJ, geen tussenpersonen. Prijsindicatie binnen 24 uur – landelijke dekking.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Calendar className="w-6 h-6 inline-block mr-3" />
                DJ HUREN NEDERLAND
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:0645251333"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                06 45 25 13 33
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
                  <div className="text-blue-200 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Welke DJ Section - Pillar Links */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-4">
              Welke DJ voor jouw feest?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kies hieronder je type feest en ontdek wat ik voor jou kan betekenen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/bruiloft-dj" className="group bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pink-300">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-pink-600">Bruiloft DJ</h3>
              <p className="text-sm text-gray-600 mb-3">Van ceremonie tot laatste dans - complete begeleiding</p>
              <span className="text-sm font-bold text-pink-600 group-hover:text-pink-700">Meer over bruiloften →</span>
            </Link>

            <Link to="/verjaardag-dj" className="group bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-green-600">Verjaardag DJ</h3>
              <p className="text-sm text-gray-600 mb-3">Muziek op maat voor elke leeftijd en elk publiek</p>
              <span className="text-sm font-bold text-green-600 group-hover:text-green-700">Meer over verjaardagen →</span>
            </Link>

            <Link to="/zakelijk-dj" className="group bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                <Building className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-blue-600">Zakelijk DJ</h3>
              <p className="text-sm text-gray-600 mb-3">Professionele uitstraling voor bedrijfsfeesten</p>
              <span className="text-sm font-bold text-blue-600 group-hover:text-blue-700">Meer over zakelijk →</span>
            </Link>

            <Link to="/evenementen-dj" className="group bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-300">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-orange-600">Evenementen DJ</h3>
              <p className="text-sm text-gray-600 mb-3">Van festivals tot grote openbare events</p>
              <span className="text-sm font-bold text-orange-600 group-hover:text-orange-700">Meer over evenementen →</span>
            </Link>

            <Link to="/dj-themafeest" className="group bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-purple-600">Themafeest DJ</h3>
              <p className="text-sm text-gray-600 mb-3">Alle soorten themafeesten en speciale gelegenheden</p>
              <span className="text-sm font-bold text-purple-600 group-hover:text-purple-700">Meer over themafeesten →</span>
            </Link>

            <Link to="/dj-tuinfeest" className="group bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-300">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                <TreePine className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-green-600">Tuinfeest DJ</h3>
              <p className="text-sm text-gray-600 mb-3">Outdoor feesten en zomerparty's in de tuin</p>
              <span className="text-sm font-bold text-green-600 group-hover:text-green-700">Meer over tuinfeesten →</span>
            </Link>

            <Link to="/dj-schuurfeest" className="group bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-300">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                <Star className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-yellow-600">Schuurfeest DJ</h3>
              <p className="text-sm text-gray-600 mb-3">Landelijke en rustieke feesten in de schuur</p>
              <span className="text-sm font-bold text-yellow-600 group-hover:text-yellow-700">Meer over schuurfeesten →</span>
            </Link>

            <Link to="/dj-koningsdag" className="group bg-white p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-300">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                <Crown className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-orange-600">Koningsdag DJ</h3>
              <p className="text-sm text-gray-600 mb-3">Oranje feesten en Nederlandse festiviteiten</p>
              <span className="text-sm font-bold text-orange-600 group-hover:text-orange-700">Meer over Koningsdag →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              DJ HUREN PER GELEGENHEID –
              <span className="block text-blue-700">SPECIALISATIES & ERVARING</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Van bruiloft tot bedrijfsfeest: muziek op maat, eigen apparatuur en ervaring met elk publiek.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <div className="text-2xl font-black text-orange-500">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sr-only">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-black text-gray-900 mb-8 text-center">
                DJ Huren Nederland - #1 Professionele DJ Services Landelijk
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-black text-orange-600 mb-4">Waarom DJ Kevin Froger?</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    DJ huren met direct contact – geen verhuurbedrijf of tussenpersonen. Je spreekt en plant rechtstreeks met de DJ die ook daadwerkelijk op je feest staat. Duidelijke communicatie, snelle reactie en persoonlijke betrokkenheid van begin tot eind.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Complete DJ show inclusief professionele apparatuur, licht en geluid. Muziek op maat met live mixing – geen standaard playlists. 15+ jaar ervaring met 1000+ evenementen door heel Nederland.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-black text-blue-600 mb-4">Wat je krijgt</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-black text-gray-900">Rechtstreeks contact</h4>
                        <p className="text-gray-600">Geen verhuurbedrijf – direct met de DJ zelf</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-black text-gray-900">Complete DJ show</h4>
                        <p className="text-gray-600">Licht, geluid en DJ in één pakket uit eigen bezit</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-black text-gray-900">Muziek op maat</h4>
                        <p className="text-gray-600">Live mixing afgestemd op jouw publiek en wensen</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-black text-gray-900">Landelijke dekking</h4>
                        <p className="text-gray-600">Door heel Nederland beschikbaar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">
                  Populaire DJ Huren Zoektermen Nederland
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-black text-orange-600 mb-3">DJ Huren Algemeen</h4>
                    <div className="space-y-2">
                      {searchTerms.map((term, index) => (
                        <span key={index} className="block text-sm text-gray-700 font-medium">{term}</span>
                      ))}
                      <span className="block text-sm text-gray-700 font-medium">DJ inhuren</span>
                      <span className="block text-sm text-gray-700 font-medium">DJ verhuur</span>
                      <span className="block text-sm text-gray-700 font-medium">DJ service</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-blue-600 mb-3">DJ Huren per Evenement</h4>
                    <div className="space-y-2">
                      {eventTypes.map((term, index) => (
                        <span key={index} className="block text-sm text-gray-700 font-medium">{term}</span>
                      ))}
                      <span className="block text-sm text-gray-700 font-medium">DJ huren bruiloft</span>
                      <span className="block text-sm text-gray-700 font-medium">DJ huren verjaardag</span>
                      <span className="block text-sm text-gray-700 font-medium">DJ huren bedrijfsfeest</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-green-600 mb-3">DJ Huren Speciale Events</h4>
                    <div className="space-y-2">
                      {specialEvents.map((term, index) => (
                        <span key={index} className="block text-sm text-gray-700 font-medium">{term}</span>
                      ))}
                      <span className="block text-sm text-gray-700 font-medium">DJ huren gala</span>
                      <span className="block text-sm text-gray-700 font-medium">DJ huren opening</span>
                      <span className="block text-sm text-gray-700 font-medium">DJ huren evenement</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  DJ Huren Nederland - Beste Keuze voor Alle Events
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Wil je een DJ huren in Nederland? Kevin Froger is de perfecte keuze voor alle evenementen. Professionele DJ huren met 
                  betaalbare prijzen vanaf €350, eigen apparatuur, live mixing, en 15+ jaar ervaring. DJ huren Nederland was nog nooit zo eenvoudig - binnen 24 uur offerte!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section - Reviews & Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-4">
              Bewijs: wat anderen zeggen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontdek waarom meer dan 1000 klanten voor DJ Kevin Froger kozen
            </p>
          </div>

          <GoogleReviewsSection />

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link
              to="/reviews"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg inline-flex items-center justify-center"
            >
              <Star className="w-5 h-5 mr-2" />
              Bekijk alle reviews
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
            >
              <Award className="w-5 h-5 mr-2" />
              Bekijk portfolio
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Freshness Block */}
      <section className="py-12 bg-gradient-to-r from-orange-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-gray-900 mb-4">🆕 Nieuwe ontwikkelingen 2025</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Live mixing met 4 decks</strong> nu standaard in Pro-pakket – naadloze overgangen tussen genres</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>AI-ondersteunde muziekkeuze</strong> op basis van stemming en publiek-analyse tijdens het feest</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Uitgebreid naar Zeeland</strong> – nu ook beschikbaar in Goes, Middelburg, Terneuzen en omgeving</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Nieuwe LED video wall optie</strong> beschikbaar voor grote events (vanaf 300 personen)</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-6">
                  Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              DJ HUREN
              <span className="block text-blue-700">KEVIN FROGER</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om de perfecte DJ te huren voor jouw evenement?
            </p>
          </div>
          <ContactForm eventType="DJ huren" />
        </div>
      </section>
    </div>
  );
};

export default DJHurenNederlandPage;