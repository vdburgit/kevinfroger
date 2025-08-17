import React from 'react';
import { MapPin, Phone, Mail, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Waves } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJGoerreeOverflakkeePage = () => {
  const services = [
    {
      title: "Bruiloften Goeree-Overflakkee",
      description: "Romantische bruiloft DJ op het eiland",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Bedrijfsfeesten",
      description: "Corporate events op Goeree-Overflakkee",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Privé Feesten",
      description: "Gezellige familiefeesten op het eiland",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Festivals & Events",
      description: "Grote evenementen op Goeree-Overflakkee",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    }
  ];

  const districts = [
    "Middelharnis", "Sommelsdijk", "Dirksland", "Nieuwe-Tonge", "Oude-Tonge",
    "Stad aan 't Haringvliet", "Stellendam", "Goedereede", "Ouddorp", "Den Bommel"
  ];

  const venues = [
    "Strand Ouddorp", "Haven Stellendam", "Goeree Natuur", "Middelharnis Centrum",
    "Sommelsdijk Haven", "Dirksland Park", "Nieuwe-Tonge Recreatie", "Oude-Tonge Centrum",
    "Stad aan 't Haringvliet", "Goedereede Strand", "Den Bommel Natuur", "Golfbaan Goeree"
  ];

  const stats = [
    { number: "15+", label: "Jaar op Goeree-Overflakkee", icon: <Award className="w-8 h-8" /> },
    { number: "40+", label: "Events op het eiland", icon: <Calendar className="w-8 h-8" /> },
    { number: "25+", label: "Eiland Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "10+", label: "Corporate Events", icon: <Building className="w-8 h-8" /> }
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
              <span className="text-orange-400 font-black text-xl tracking-wide">GOEREE-OVERFLAKKEE</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ KEVIN FROGER
              <span className="block text-orange-400">GOEREE-OVERFLAKKEE</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Professionele DJ services op Goeree-Overflakkee. Van Middelharnis tot Ouddorp, 
              van bruiloften aan zee tot bedrijfsfeesten - altijd de perfecte sfeer op het mooiste eiland van Zuid-Holland.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Calendar className="w-6 h-6 inline-block mr-3" />
                BOEK NU OP GOEREE-OVERFLAKKEE
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
              <span className="block text-blue-700">GOEREE-OVERFLAKKEE</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professionele DJ services voor alle gelegenheden op het eiland
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
          {/* SEO Content - Hidden but accessible to search engines */}
          <div className="sr-only prose prose-lg max-w-none">
            <h2>DJ Goeree-Overflakkee - Professionele DJ Services Eiland</h2>
            <p>Zoek je een DJ op Goeree-Overflakkee? DJ Kevin Froger verzorgt professionele DJ services op het mooiste eiland van Zuid-Holland. Van Middelharnis tot Ouddorp, van bruiloften aan zee tot bedrijfsfeesten - altijd de perfecte sfeer.</p>
            
            <h3>DJ Goeree-Overflakkee - Alle Plaatsen</h3>
            <p>Kevin is actief op heel het eiland: DJ Middelharnis, DJ Sommelsdijk, DJ Dirksland, DJ Nieuwe-Tonge, DJ Oude-Tonge, DJ Stad aan 't Haringvliet, DJ Stellendam, DJ Goedereede, DJ Ouddorp, DJ Den Bommel.</p>
            
            <h3>Bruiloft DJ Goeree-Overflakkee</h3>
            <p>Voor bruiloften op Goeree-Overflakkee heeft Kevin meer dan 25 succesvolle events begeleid. Van Strand Ouddorp tot Haven Stellendam, van Goeree Natuur tot Golfbaan Goeree - Kevin maakt jullie bruiloft onvergetelijk op het eiland.</p>
            
            <h3>DJ Strand Ouddorp</h3>
            <p>Strand Ouddorp is een populaire locatie voor beach events en zomerfestivals. Kevin heeft ervaring met outdoor events aan de Noordzeekust van Goeree-Overflakkee.</p>
            
            <h3>Bedrijfsfeest DJ Goeree-Overflakkee</h3>
            <p>Het eiland heeft veel toeristische en agrarische bedrijven. Kevin verzorgt bedrijfsfeesten en heeft ervaring met corporate events op Goeree-Overflakkee.</p>
            
            <h3>DJ Boeken Goeree-Overflakkee</h3>
            <p>Wil je een DJ boeken op Goeree-Overflakkee? Kevin Froger kent alle locaties van Middelharnis tot Ouddorp. Professionele DJ services voor het eiland.</p>
            
            <h3>Populaire DJ Services Goeree-Overflakkee</h3>
            <p>DJ Middelharnis, DJ Ouddorp, DJ Stellendam, bruiloft DJ Goeree-Overflakkee, bedrijfsfeest DJ eiland, strand DJ, natuur DJ, professionele DJ Goeree-Overflakkee.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-12 text-shadow">
                ALLE PLAATSEN
                <span className="block text-orange-500">GOEREE-OVERFLAKKEE</span>
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
                EILAND
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
              <span className="block text-blue-700">OP GOEREE-OVERFLAKKEE</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement op Goeree-Overflakkee onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Goeree-Overflakkee evenement" />
        </div>
      </section>
    </div>
  );
};

export default DJGoerreeOverflakkeePage;