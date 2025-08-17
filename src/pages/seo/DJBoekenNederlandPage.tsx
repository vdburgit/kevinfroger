import React from 'react';
import { MapPin, Phone, Mail, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Globe } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJBoekenNederlandPage = () => {
  const services = [
    {
      title: "DJ Boeken Bruiloft",
      description: "Professionele bruiloft DJ door heel Nederland",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "DJ Boeken Bedrijfsfeest",
      description: "Corporate DJ services landelijk",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "DJ Boeken Festival",
      description: "Festival DJ voor grote evenementen",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    },
    {
      title: "DJ Boeken Privé",
      description: "Privé feesten en verjaardagen",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    }
  ];

  const provinces = [
    "Zuid-Holland", "Noord-Holland", "Utrecht", "Noord-Brabant", "Gelderland",
    "Overijssel", "Limburg", "Zeeland", "Friesland", "Groningen", "Drenthe", "Flevoland"
  ];

  const stats = [
    { number: "15+", label: "Jaar Landelijk Actief", icon: <Award className="w-8 h-8" /> },
    { number: "1000+", label: "Events Nederland", icon: <Calendar className="w-8 h-8" /> },
    { number: "500+", label: "Nederlandse Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "12", label: "Provincies Actief", icon: <Globe className="w-8 h-8" /> }
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
              <Globe className="w-10 h-10 text-orange-400" />
              <span className="text-orange-400 font-black text-xl tracking-wide">DJ BOEKEN NEDERLAND</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ BOEKEN
              <span className="block text-orange-400">NEDERLAND</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Professionele DJ boeken in heel Nederland. Van Noord tot Zuid, van Oost tot West - 
              DJ Kevin Froger is landelijk beschikbaar voor alle evenementen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Calendar className="w-6 h-6 inline-block mr-3" />
                BOEK NU LANDELIJK
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
              DJ BOEKEN
              <span className="block text-blue-700">NEDERLAND</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professionele DJ services voor alle gelegenheden door heel Nederland
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

      {/* Provinces Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sr-only prose prose-lg max-w-none">
            <h2>DJ Boeken Nederland - Professionele DJ Services Landelijk</h2>
            <p>Wil je een DJ boeken in Nederland? DJ Kevin Froger is landelijk werkzaam en verzorgt professionele DJ services door het hele land. Van bruiloften tot bedrijfsfeesten, van festivals tot privé events - altijd de perfecte sfeer.</p>
            
            <h3>DJ Boeken - Alle Provincies</h3>
            <p>Kevin is actief in alle provincies: DJ boeken Zuid-Holland, DJ boeken Noord-Holland, DJ boeken Utrecht, DJ boeken Noord-Brabant, DJ boeken Gelderland, DJ boeken Overijssel, DJ boeken Limburg, DJ boeken Zeeland, DJ boeken Friesland, DJ boeken Groningen, DJ boeken Drenthe, DJ boeken Flevoland.</p>
            
            <h3>Bruiloft DJ Boeken Nederland</h3>
            <p>Voor bruiloften door heel Nederland heeft Kevin meer dan 500 succesvolle events begeleid. Van kastelen tot moderne venues, van strand tot bos - Kevin maakt jullie bruiloft overal onvergetelijk.</p>
            
            <h3>Bedrijfsfeest DJ Boeken</h3>
            <p>Kevin verzorgt bedrijfsfeesten voor ondernemingen door heel Nederland. Van multinationals tot MKB, van startups tot traditionele bedrijven - altijd professioneel en representatief.</p>
            
            <h3>Festival DJ Boeken Nederland</h3>
            <p>Van grote festivals tot lokale dorpsfeesten - Kevin heeft ervaring met alle soorten festivals door Nederland. Altijd high-energy performances aangepast aan het publiek.</p>
            
            <h3>Professionele DJ Boeken</h3>
            <p>Kevin is een professionele DJ met 15+ jaar ervaring. Van live mixing tot MC services, van technische setup tot complete entertainment - altijd de hoogste kwaliteit.</p>
            
            <h3>DJ Boeken Tips</h3>
            <p>Hoe boek je de beste DJ? Kevin adviseert: boek op tijd (6-12 maanden voor bruiloften), bespreek muziekwensen vooraf, en kies voor ervaring en betrouwbaarheid.</p>
            
            <h3>Populaire DJ Boeken Services</h3>
            <p>DJ boeken Nederland, professionele DJ boeken, bruiloft DJ boeken, bedrijfsfeest DJ boeken, festival DJ boeken, allround DJ boeken, landelijke DJ, DJ Kevin Froger boeken.</p>
          </div>
          
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 text-shadow">
              ALLE PROVINCIES
              <span className="block text-orange-500">NEDERLAND</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {provinces.map((province, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <Globe className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-black text-gray-900">{province}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK DJ KEVIN
              <span className="block text-blue-700">LANDELIJK</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in Nederland onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Nederland evenement" />
        </div>
      </section>
    </div>
  );
};

export default DJBoekenNederlandPage;