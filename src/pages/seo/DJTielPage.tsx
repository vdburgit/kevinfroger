import React from 'react';
import { MapPin, Phone, Mail, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Apple } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJTielPage = () => {
  const services = [
    {
      title: "Bruiloften Tiel",
      description: "Romantische bruiloft DJ in de fruitstad",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Bedrijfsfeesten",
      description: "Corporate events in Tiel",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Privé Feesten",
      description: "Gezellige familiefeesten in Tiel",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Festivals & Events",
      description: "Grote evenementen in de Betuwe",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    }
  ];

  const districts = [
    "Tiel Centrum", "Tiel-Noord", "Tiel-Zuid", "Tiel-Oost", "Tiel-West",
    "Medel", "Wadenoijen", "Kapel-Avezaath", "Kerk-Avezaath", "Zoelen"
  ];

  const venues = [
    "Flipje en Streekmuseum", "Theater De Poorterij", "Sportpark Tiel", "Zwembad De Waterman",
    "Cultuurhuis Tiel", "Haven Tiel", "Park Tiel", "Landgoed Betuwe",
    "Fruitcorso Tiel", "Waalboulevard", "Binnenstad Tiel", "Recreatiegebied"
  ];

  const stats = [
    { number: "10+", label: "Jaar in Tiel", icon: <Award className="w-8 h-8" /> },
    { number: "60+", label: "Events in Tiel", icon: <Calendar className="w-8 h-8" /> },
    { number: "30+", label: "Tielse Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "20+", label: "Corporate Events", icon: <Building className="w-8 h-8" /> }
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
              <Apple className="w-10 h-10 text-orange-400" />
              <span className="text-orange-400 font-black text-xl tracking-wide">TIEL</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ KEVIN FROGER
              <span className="block text-orange-400">TIEL</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Professionele DJ services in Tiel. Van het centrum tot de haven, 
              van bruiloften in de fruitstad tot bedrijfsfeesten - altijd de perfecte sfeer in de Betuwe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Calendar className="w-6 h-6 inline-block mr-3" />
                BOEK NU IN TIEL
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
              <span className="block text-blue-700">TIEL</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professionele DJ services voor alle gelegenheden in de fruitstad
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
            <h2>DJ Tiel - Professionele DJ Services Fruitstad Betuwe</h2>
            <p>Zoek je een DJ in Tiel? DJ Kevin Froger verzorgt professionele DJ services in de fruitstad van de Betuwe. Van bruiloften in Theater De Poorterij tot bedrijfsfeesten - altijd de perfecte sfeer in Tiel.</p>
            
            <h3>DJ Tiel - Alle Wijken</h3>
            <p>Kevin is actief in heel Tiel: DJ Tiel Centrum, DJ Tiel-Noord, DJ Tiel-Zuid, DJ Tiel-Oost, DJ Tiel-West, DJ Medel, DJ Wadenoijen, DJ Kapel-Avezaath, DJ Kerk-Avezaath, DJ Zoelen.</p>
            
            <h3>Bruiloft DJ Tiel</h3>
            <p>Voor bruiloften in Tiel heeft Kevin meer dan 30 succesvolle events begeleid. Van Flipje en Streekmuseum tot Theater De Poorterij, van Waalboulevard tot Landgoed Betuwe - Kevin maakt jullie bruiloft onvergetelijk in de fruitstad.</p>
            
            <h3>Bedrijfsfeest DJ Tiel</h3>
            <p>Tiel is het centrum van de Betuwe fruitteelt. Kevin verzorgt bedrijfsfeesten voor fruitbedrijven, logistieke ondernemingen en lokale bedrijven in de regio.</p>
            
            <h3>DJ Fruitcorso Tiel</h3>
            <p>Het beroemde Fruitcorso van Tiel is een hoogtepunt van het jaar. Kevin heeft ervaring met grote publieksevenementen en festivals in de fruitstad.</p>
            
            <h3>DJ Betuwe Regio</h3>
            <p>Tiel ligt in het hart van de Betuwe. Kevin verzorgt ook events in omliggende plaatsen zoals Buren, Geldermalsen, Culemborg en andere Betuwe gemeenten.</p>
            
            <h3>DJ Boeken Tiel</h3>
            <p>Wil je een DJ boeken in Tiel? Kevin Froger kent alle locaties van het centrum tot de buitenwijken. Professionele DJ services voor de fruitstad.</p>
            
            <h3>Populaire DJ Services Tiel</h3>
            <p>DJ Tiel centrum, DJ Betuwe, DJ fruitstad, bruiloft DJ Tiel, bedrijfsfeest DJ Tiel, festival DJ Tiel, Fruitcorso DJ, professionele DJ Tiel, DJ Rivierenland.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-12 text-shadow">
                ALLE WIJKEN
                <span className="block text-orange-500">TIEL</span>
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
                BETUWE
                <span className="block text-blue-700">LOCATIES</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {venues.map((venue, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <Apple className="w-6 h-6 text-blue-500 mx-auto mb-2" />
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
              <span className="block text-blue-700">IN TIEL</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in Tiel onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Tiel evenement" />
        </div>
      </section>
    </div>
  );
};

export default DJTielPage;