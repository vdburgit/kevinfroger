import React from 'react';
import { Heart, MapPin, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Building, Crown, Camera } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJBruiloftRotterdamPage = () => {
  const services = [
    {
      title: "Ceremonie Begeleiding",
      description: "Muzikale ondersteuning tijdens jullie trouwceremonie in Rotterdam",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Diner Entertainment",
      description: "Sfeervolle achtergrondmuziek tijdens het bruiloftsdiner",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Eerste Dans",
      description: "Perfect geluid en timing voor jullie eerste dans",
      icon: <Music className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Feestavond DJ",
      description: "Van rustig tot uitbundig - aangepast aan jullie gasten",
      icon: <Star className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    }
  ];

  const venues = [
    "Hotel New York", "SS Rotterdam", "Euromast", "Villa Thalia",
    "Kunsthal Rotterdam", "De Doelen", "Boijmans Van Beuningen", "Wereldmuseum",
    "Cruise Terminal", "Maassilo", "LantarenVenster", "Park Plaswijck"
  ];

  const districts = [
    "Rotterdam Centrum", "Kralingen-Crooswijk", "Noord", "Hillegersberg-Schiebroek",
    "Prins Alexander", "Charlois", "Feijenoord", "IJsselmonde"
  ];

  const stats = [
    { number: "15+", label: "Jaar Bruiloft Ervaring", icon: <Award className="w-8 h-8" /> },
    { number: "150+", label: "Rotterdamse Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "500+", label: "Totaal Bruiloften", icon: <Calendar className="w-8 h-8" /> },
    { number: "100%", label: "Tevreden Koppels", icon: <Star className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-pink-900 via-purple-800 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Heart className="w-10 h-10 text-pink-400" />
              <span className="text-pink-400 font-black text-xl tracking-wide">BRUILOFT ROTTERDAM</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ BRUILOFT
              <span className="block text-pink-400">ROTTERDAM</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-pink-100 leading-relaxed max-w-4xl mx-auto">
              Professionele bruiloft DJ in Rotterdam. Van ceremonie tot late avond, 
              van Hotel New York tot SS Rotterdam - wij maken jullie mooiste dag onvergetelijk in de Maasstad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105"
              >
                <Heart className="w-6 h-6 inline-block mr-3" />
                BOEK BRUILOFT DJ ROTTERDAM
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:0645251333"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-pink-900 transition-all duration-300"
              >
                06 45 25 13 33
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-pink-400 mb-2">{stat.number}</div>
                  <div className="text-pink-200 font-semibold">{stat.label}</div>
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
              BRUILOFT DJ
              <span className="block text-pink-500">ROTTERDAM</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Complete muzikale begeleiding voor jullie bruiloft in Rotterdam
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO Content */}
          <div className="prose prose-lg max-w-none">
            <h2>DJ Bruiloft Rotterdam - Professionele Bruiloft DJ Maasstad</h2>
            <p>Zoek je een bruiloft DJ in Rotterdam? DJ Kevin Froger is specialist in bruiloften in de Maasstad. Van ceremonie tot feestavond, van Hotel New York tot SS Rotterdam - wij maken jullie mooiste dag onvergetelijk.</p>
            
            <h3>Bruiloft DJ Rotterdam - Alle Locaties</h3>
            <p>Kevin verzorgt bruiloften op alle toplocaties in Rotterdam: Hotel New York bruiloft DJ, SS Rotterdam bruiloft DJ, Euromast bruiloft DJ, Villa Thalia bruiloft DJ, Kunsthal Rotterdam bruiloft DJ, De Doelen bruiloft DJ, Boijmans bruiloft DJ, Wereldmuseum bruiloft DJ.</p>
            
            <h3>Trouw DJ Rotterdam</h3>
            <p>Als trouw DJ in Rotterdam begeleidt Kevin jullie hele dag. Van getting ready muziek tot ceremonie, van diner tot late avond - complete muzikale begeleiding voor jullie bruiloft.</p>
            
            <h3>Ceremonie DJ Rotterdam</h3>
            <p>Voor trouwceremonies in Rotterdam zorgt Kevin voor de perfecte muzikale ondersteuning. Van klassieke ceremoniemuziek tot persoonlijke keuzes - altijd op het juiste moment.</p>
            
            <h3>Bruiloft Entertainment Rotterdam</h3>
            <p>Kevin biedt complete bruiloft entertainment in Rotterdam. Van DJ services tot MC begeleiding, van eerste dans tot feestavond - alles voor jullie perfecte dag.</p>
            
            <h3>Wedding DJ Rotterdam</h3>
            <p>Als wedding DJ in Rotterdam heeft Kevin internationale ervaring. Van Nederlandse bruiloften tot multiculturele ceremonies - altijd respectvol en professioneel.</p>
            
            <h3>Bruiloft DJ Boeken Rotterdam</h3>
            <p>Wil je een bruiloft DJ boeken in Rotterdam? Kevin Froger heeft meer dan 150 Rotterdamse bruiloften begeleid. Ervaring met alle venues en locaties in de Maasstad.</p>
            
            <h3>Populaire Bruiloft DJ Services Rotterdam</h3>
            <p>Bruiloft DJ Rotterdam, trouw DJ Rotterdam, wedding DJ Rotterdam, ceremonie DJ Rotterdam, bruiloft entertainment Rotterdam, Hotel New York DJ, SS Rotterdam DJ, Euromast bruiloft DJ.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-12 text-shadow">
                TOP BRUILOFT
                <span className="block text-pink-500">LOCATIES</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {venues.map((venue, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <Crown className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                    <h3 className="text-sm font-black text-gray-900">{venue}</h3>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-12 text-shadow">
                ALLE WIJKEN
                <span className="block text-blue-700">ROTTERDAM</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {districts.map((district, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <MapPin className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <h3 className="text-sm font-black text-gray-900">{district}</h3>
                  </div>
                ))}
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
              BOEK BRUILOFT DJ
              <span className="block text-pink-500">ROTTERDAM</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jullie bruiloft in Rotterdam onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Bruiloft Rotterdam" />
        </div>
      </section>
    </div>
  );
};

export default DJBruiloftRotterdamPage;