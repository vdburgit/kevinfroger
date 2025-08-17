import React from 'react';
import { MapPin, Phone, Mail, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, TreePine } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJRegioTielPage = () => {
  const services = [
    {
      title: "Bruiloften Regio Tiel",
      description: "Romantische bruiloft DJ in de Betuwe",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Bedrijfsfeesten",
      description: "Corporate events in Tiel en omliggende gemeenten",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Privé Feesten",
      description: "Gezellige familiefeesten in de Betuwe",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Festivals & Events",
      description: "Grote evenementen in de fruitstreek",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    }
  ];

  const locations = [
    "Tiel", "Kerk-Avezaath", "Kapel-Avezaath", "Zoelen", "Buren", 
    "Geldermalsen", "Culemborg", "Betuwe", "Rivierenland", "Bommelerwaard"
  ];

  const venues = [
    "Flipje en Streekmuseum", "Theater De Poorterij", "Sportpark Tiel", "Zwembad De Waterman",
    "Cultuurhuis Tiel", "Haven Tiel", "Park Tiel", "Landgoed Betuwe",
    "Buren Kasteel", "Geldermalsen Centrum", "Culemborg Binnenstad", "Zoelen Recreatie"
  ];

  const stats = [
    { number: "10+", label: "Jaar in Regio Tiel", icon: <Award className="w-8 h-8" /> },
    { number: "80+", label: "Events Regio Tiel", icon: <Calendar className="w-8 h-8" /> },
    { number: "40+", label: "Betuwe Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "25+", label: "Corporate Events", icon: <Building className="w-8 h-8" /> }
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
              <TreePine className="w-10 h-10 text-orange-400" />
              <span className="text-orange-400 font-black text-xl tracking-wide">REGIO TIEL</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ KEVIN FROGER
              <span className="block text-orange-400">REGIO TIEL</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Professionele DJ services in de regio Tiel. Van Tiel tot Culemborg, 
              van bruiloften in de Betuwe tot bedrijfsfeesten - altijd de perfecte sfeer in de fruitstreek.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Calendar className="w-6 h-6 inline-block mr-3" />
                BOEK NU IN REGIO TIEL
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
              <span className="block text-blue-700">REGIO TIEL</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professionele DJ services voor alle gelegenheden in de Betuwe
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

      {/* Locations Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO Content - Hidden but accessible to search engines */}
          <div className="sr-only prose prose-lg max-w-none">
            <h2>DJ Regio Tiel - Professionele DJ Services Betuwe Rivierenland</h2>
            <p>Zoek je een DJ in de regio Tiel? DJ Kevin Froger verzorgt professionele DJ services in de hele Betuwe en Rivierenland. Van Tiel tot Culemborg, van Buren tot Geldermalsen - altijd de perfecte sfeer in de fruitstreek.</p>
            
            <h3>DJ Regio Tiel - Alle Plaatsen</h3>
            <p>Kevin is actief in de hele regio: DJ Tiel, DJ Kerk-Avezaath, DJ Kapel-Avezaath, DJ Zoelen, DJ Buren, DJ Geldermalsen, DJ Culemborg, DJ Betuwe, DJ Rivierenland, DJ Bommelerwaard, DJ Neder-Betuwe, DJ West Betuwe.</p>
            
            <h3>Bruiloft DJ Regio Tiel</h3>
            <p>Voor bruiloften in de regio Tiel heeft Kevin meer dan 40 succesvolle events begeleid. Van kastelen in Buren tot landgoederen in Geldermalsen, van Culemborg tot Tiel - Kevin maakt jullie bruiloft onvergetelijk in de Betuwe.</p>
            
            <h3>Bedrijfsfeest DJ Betuwe</h3>
            <p>De Betuwe is bekend om fruitteelt en agrarische bedrijven. Kevin verzorgt bedrijfsfeesten voor fruitbedrijven, coöperaties en agrarische ondernemingen in de regio Tiel.</p>
            
            <h3>DJ Rivierenland</h3>
            <p>Het Rivierenland omvat de regio tussen Waal en Lek. Kevin heeft ervaring met events in dit prachtige rivierengebied en kent alle locaties en venues.</p>
            
            <h3>Festival DJ Betuwe</h3>
            <p>Van Fruitcorso Tiel tot lokale dorpsfeesten - Kevin heeft ervaring met alle soorten festivals in de Betuwe en regio Tiel. Altijd aangepast aan het lokale publiek.</p>
            
            <h3>DJ Boeken Regio Tiel</h3>
            <p>Wil je een DJ boeken in de regio Tiel? Kevin Froger kent alle plaatsen van Tiel tot Culemborg. Professionele DJ services voor de hele Betuwe.</p>
            
            <h3>Populaire DJ Services Regio Tiel</h3>
            <p>DJ regio Tiel, DJ Betuwe, DJ Rivierenland, bruiloft DJ Betuwe, bedrijfsfeest DJ regio Tiel, festival DJ Betuwe, fruitstreek DJ, agrarische events DJ, professionele DJ Rivierenland.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-12 text-shadow">
                ALLE PLAATSEN
                <span className="block text-orange-500">REGIO TIEL</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {locations.map((location, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <MapPin className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                    <h3 className="text-sm font-black text-gray-900">{location}</h3>
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
                    <TreePine className="w-6 h-6 text-blue-500 mx-auto mb-2" />
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
              <span className="block text-blue-700">IN REGIO TIEL</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in de regio Tiel onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Regio Tiel evenement" />
        </div>
      </section>
    </div>
  );
};

export default DJRegioTielPage;