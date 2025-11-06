import React from 'react';
import { Globe, MapPin, Calendar, Award, ArrowRight } from 'lucide-react';
import { dutchCities } from '../../data/dutchCities';
import ContactForm from '../../components/ContactForm';

const DJNederlandPage = () => {
  const provinces = [
    "Zuid-Holland", "Noord-Holland", "Utrecht", "Noord-Brabant", 
    "Gelderland", "Overijssel", "Limburg", "Zeeland", 
    "Friesland", "Groningen", "Drenthe", "Flevoland"
  ];

  const majorCities = dutchCities.filter(city => city.type === 'grote stad');
  const allCities = dutchCities.filter(city => city.type !== 'grote stad');

  const stats = [
    { number: "15+", label: "Jaar Landelijk Actief", icon: <Award className="w-8 h-8" /> },
    { number: "12", label: "Provincies", icon: <Globe className="w-8 h-8" /> },
    { number: "100+", label: "Steden & Gemeenten", icon: <MapPin className="w-8 h-8" /> },
    { number: "1000+", label: "Events Nederland", icon: <Calendar className="w-8 h-8" /> }
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
              <span className="text-orange-400 font-black text-xl tracking-wide">DJ NEDERLAND</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ KEVIN FROGER
              <span className="block text-orange-400">HEEL NEDERLAND</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Professionele DJ services door heel Nederland. Van Noord tot Zuid, van Oost tot West - 
              DJ Kevin Froger is beschikbaar in alle provincies, steden en gemeenten van Nederland.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#steden"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Globe className="w-6 h-6 inline-block mr-3" />
                BEKIJK ALLE STEDEN
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

      {/* Major Cities Section */}
      <section id="steden" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              GROTE STEDEN
              <span className="block text-orange-500">NEDERLAND</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              DJ Kevin Froger verzorgt evenementen in alle grote steden van Nederland
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
            {majorCities.map((city, index) => (
              <a 
                key={index} 
                href={`/dj-${city.name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
                className="group bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2 hover:scale-105 border border-gray-100 hover:border-orange-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mb-2">
                  DJ {city.name}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 mb-4">
                  {city.province}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-6 h-6 text-orange-500 mx-auto" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All Cities Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* SEO Content - Hidden but accessible to search engines */}
          <div className="sr-only prose prose-lg max-w-none">
            <h2>DJ Nederland - Professionele DJ Services Landelijk</h2>
            <p>DJ Kevin Froger verzorgt professionele DJ services door heel Nederland. Van Noord tot Zuid, van Oost tot West - altijd de perfecte sfeer in alle provincies en steden.</p>
          </div>
          
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              ALLE STEDEN
              <span className="block text-blue-700">& GEMEENTEN</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Klik op jouw stad voor lokale DJ services
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {allCities.map((city, index) => (
              <a 
                key={index} 
                href={`/dj-${city.name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
                className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1 hover:scale-105 border border-gray-100 hover:border-blue-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-black text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-1">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {city.province}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              DJ BOEKEN
              <span className="block text-blue-700">HEEL NEDERLAND</span>
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

export default DJNederlandPage;