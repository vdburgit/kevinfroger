import React from 'react';
import { MapPin, Phone, Mail, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Waves } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJSpijkenissePage = () => {
  const services = [
    {
      title: "Bruiloften Spijkenisse",
      description: "Romantische bruiloft DJ op Putten en omgeving",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Bedrijfsfeesten",
      description: "Corporate events in Spijkenisse en Bernisse",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Privé Feesten",
      description: "Gezellige familiefeesten in Spijkenisse",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Festivals & Events",
      description: "Grote evenementen op het eiland Putten",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    }
  ];

  const districts = [
    "Spijkenisse Centrum", "Hekelingen", "Zwartewaal", "Geervliet", "Bernisse",
    "Zuidland", "Heenvliet", "Abbenbroek", "Simonshaven", "Nieuw-Helvoet"
  ];

  const venues = [
    "Theater De Stoep", "Recreatiepark De Oosterpark", "Golfbaan Spijkenisse", "Zwembad De Waterdam",
    "Sportpark De Kooi", "Cultuurhuis De Stoep", "Bernisse Haven", "Zwartewaal Centrum",
    "Heenvliet Kasteel", "Abbenbroek Kerk", "Simonshaven Jachthaven", "Nieuw-Helvoet Park"
  ];

  const stats = [
    { number: "15+", label: "Jaar in Spijkenisse", icon: <Award className="w-8 h-8" /> },
    { number: "100+", label: "Events in Spijkenisse", icon: <Calendar className="w-8 h-8" /> },
    { number: "60+", label: "Spijkenisser Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "35+", label: "Corporate Events", icon: <Building className="w-8 h-8" /> }
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
              <Waves className="w-10 h-10 text-orange-400" />
              <span className="text-orange-400 font-black text-xl tracking-wide">SPIJKENISSE</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ KEVIN FROGER
              <span className="block text-orange-400">SPIJKENISSE</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Professionele DJ services in Spijkenisse. Van het centrum tot Hekelingen, 
              van bruiloften op Putten tot bedrijfsfeesten - altijd de perfecte sfeer op het eiland.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Calendar className="w-6 h-6 inline-block mr-3" />
                BOEK NU IN SPIJKENISSE
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
              DJ SERVICES
              <span className="block text-blue-700">SPIJKENISSE</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professionele DJ services voor alle gelegenheden in Spijkenisse en omgeving
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

      {/* Districts & Venues Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO Content */}
          <div className="prose prose-lg max-w-none">
            <h2>DJ Spijkenisse - Professionele DJ Services Putten</h2>
            <p>Zoek je een DJ in Spijkenisse? DJ Kevin Froger verzorgt professionele DJ services op het eiland Putten. Van bruiloften in Theater De Stoep tot bedrijfsfeesten - altijd de perfecte sfeer in Spijkenisse.</p>
            
            <h3>DJ Spijkenisse - Alle Plaatsen</h3>
            <p>Kevin is actief in heel Spijkenisse en omgeving: DJ Spijkenisse Centrum, DJ Hekelingen, DJ Zwartewaal, DJ Geervliet, DJ Bernisse, DJ Zuidland, DJ Heenvliet, DJ Abbenbroek, DJ Simonshaven, DJ Nieuw-Helvoet.</p>
            
            <h3>Bruiloft DJ Spijkenisse</h3>
            <p>Voor bruiloften in Spijkenisse heeft Kevin meer dan 60 succesvolle events begeleid. Van Theater De Stoep tot Recreatiepark De Oosterpark, van Golfbaan Spijkenisse tot Zwembad De Waterdam - Kevin maakt jullie bruiloft onvergetelijk.</p>
            
            <h3>Bedrijfsfeest DJ Spijkenisse</h3>
            <p>Spijkenisse heeft een bloeiende bedrijvensector. Kevin verzorgt bedrijfsfeesten voor lokale ondernemingen en heeft ervaring met corporate events op het eiland Putten.</p>
            
            <h3>Festival DJ Spijkenisse</h3>
            <p>Van lokale festivals tot grote outdoor events - Kevin heeft ervaring met alle soorten festivals in Spijkenisse en omgeving. Altijd high-energy performances voor het eiland.</p>
            
            <h3>DJ Boeken Spijkenisse</h3>
            <p>Wil je een DJ boeken in Spijkenisse? Kevin Froger kent alle locaties op Putten. Professionele DJ services voor Spijkenisse en omliggende plaatsen.</p>
            
            <h3>Populaire DJ Services Spijkenisse</h3>
            <p>DJ Spijkenisse centrum, DJ Hekelingen, bruiloft DJ Spijkenisse, bedrijfsfeest DJ Spijkenisse, festival DJ Spijkenisse, DJ Putten, eiland DJ, professionele DJ Spijkenisse.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-12 text-shadow">
                ALLE PLAATSEN
                <span className="block text-orange-500">SPIJKENISSE</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {districts.map((district, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <MapPin className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                    <h3 className="text-sm font-black text-gray-900">{district}</h3>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-12 text-shadow">
                POPULAIRE
                <span className="block text-blue-700">LOCATIES</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {venues.map((venue, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <Waves className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <h3 className="text-sm font-black text-gray-900">{venue}</h3>
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
              BOEK DJ KEVIN
              <span className="block text-blue-700">IN SPIJKENISSE</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in Spijkenisse onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Spijkenisse evenement" />
        </div>
      </section>
    </div>
  );
};

export default DJSpijkenissePage;