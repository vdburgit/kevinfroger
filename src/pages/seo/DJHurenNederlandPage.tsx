import React from 'react';
import { Search, Calendar, Users, Award, CheckCircle, ArrowRight, Heart, Building, Zap, Euro } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJHurenNederlandPage = () => {
  const services = [
    {
      title: "DJ Huren Bruiloft",
      description: "Professionele bruiloft DJ huren voor jullie mooiste dag",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600",
      price: "Vanaf €500"
    },
    {
      title: "DJ Huren Bedrijfsfeest",
      description: "Corporate DJ huren voor zakelijke evenementen",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      price: "Vanaf €400"
    },
    {
      title: "DJ Huren Festival",
      description: "Festival DJ huren voor grote evenementen",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600",
      price: "Vanaf €600"
    },
    {
      title: "DJ Huren Privé Feest",
      description: "DJ huren voor verjaardagen en familiefeesten",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      price: "Vanaf €350"
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
    { number: "500+", label: "Gehuurde Bruiloften", icon: <Heart className="w-8 h-8" /> },
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
              DJ HUREN
              <span className="block text-orange-400">NEDERLAND</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              DJ huren in Nederland? DJ Kevin Froger is de professionele keuze. Goedkope DJ met kwaliteit, 
              ervaren DJ met eigen apparatuur, allround DJ voor alle evenementen. DJ huren vanaf €350.
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

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              DJ HUREN
              <span className="block text-blue-700">ALLE EVENEMENTEN</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professionele DJ huren voor alle gelegenheden - goedkoop en met kwaliteit
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
                  <h3 className="text-2xl font-black text-orange-600 mb-4">Waarom DJ Kevin Froger Huren?</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    DJ huren in Nederland? DJ Kevin Froger is dé professionele keuze voor alle evenementen. 
                    Als ervaren DJ met 15+ jaar ervaring en 1000+ succesvolle events biedt Kevin betaalbare DJ services zonder concessies aan kwaliteit. DJ huren Nederland vanaf €350.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    DJ huren inclusief professionele apparatuur, licht en geluid. Geen verborgen kosten, 
                    transparante prijzen vanaf €350. Allround DJ die inspeelt op het publiek met live mixing - geen standaard playlists. DJ huren Nederland met landelijke dekking.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-black text-blue-600 mb-4">DJ Huren Voordelen</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-black text-gray-900">Betaalbare DJ met Topkwaliteit</h4>
                        <p className="text-gray-600">Goedkope DJ huren vanaf €350 zonder kwaliteitsverlies</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-black text-gray-900">DJ Inclusief Apparatuur</h4>
                        <p className="text-gray-600">DJ huren inclusief complete setup met licht en geluid</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-black text-gray-900">Ervaren Professionele DJ</h4>
                        <p className="text-gray-600">DJ huren met 15+ jaar ervaring, 1000+ events, 500+ bruiloften</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-black text-gray-900">Landelijke Dekking</h4>
                        <p className="text-gray-600">DJ huren in alle provincies van Nederland mogelijk</p>
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