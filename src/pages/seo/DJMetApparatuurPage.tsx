import React from 'react';
import { Speaker, Phone, Mail, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Volume2, Mic, Lightbulb } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJMetApparatuurPage = () => {
  const equipment = [
    {
      title: "Professionele Geluidssystemen",
      description: "JBL speakers, Pioneer mixers, draadloze microfoons",
      icon: <Speaker className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      items: ["JBL PRX speakers", "Pioneer DJM mixers", "Shure draadloze mics", "Subwoofers"]
    },
    {
      title: "LED Verlichting & Effecten",
      description: "Sfeerverlichting, spots, en speciale effecten",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600",
      items: ["LED PAR spots", "Moving heads", "Laser effecten", "Rookmachine"]
    },
    {
      title: "DJ Booth & Setup",
      description: "Complete DJ setup met professionele uitstraling",
      icon: <Music className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      items: ["DJ booth", "Pioneer CDJ's", "Laptop backup", "Kabel management"]
    },
    {
      title: "Backup & Service",
      description: "Altijd backup apparatuur en technische ondersteuning",
      icon: <Award className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      items: ["Backup mixer", "Reserve speakers", "Extra kabels", "Technische support"]
    }
  ];

  const services = [
    {
      title: "DJ Met Apparatuur Bruiloft",
      description: "Complete bruiloft setup inclusief geluid en licht",
      icon: <Heart className="w-8 h-8" />,
      price: "All-in vanaf €750"
    },
    {
      title: "DJ Met Apparatuur Bedrijfsfeest",
      description: "Professionele corporate setup met representatieve uitstraling",
      icon: <Building className="w-8 h-8" />,
      price: "All-in vanaf €650"
    },
    {
      title: "DJ Met Apparatuur Festival",
      description: "Festival-grade apparatuur voor grote evenementen",
      icon: <Zap className="w-8 h-8" />,
      price: "All-in vanaf €900"
    },
    {
      title: "DJ Met Apparatuur Privé",
      description: "Complete setup voor privé feesten en verjaardagen",
      icon: <Users className="w-8 h-8" />,
      price: "All-in vanaf €550"
    }
  ];

  const stats = [
    { number: "€550+", label: "All-in Vanaf", icon: <Speaker className="w-8 h-8" /> },
    { number: "100%", label: "Eigen Apparatuur", icon: <Award className="w-8 h-8" /> },
    { number: "15+", label: "Jaar Ervaring", icon: <Music className="w-8 h-8" /> },
    { number: "1000+", label: "Complete Setups", icon: <Volume2 className="w-8 h-8" /> }
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
              <Speaker className="w-10 h-10 text-orange-400" />
              <span className="text-orange-400 font-black text-xl tracking-wide">DJ MET APPARATUUR</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ MET
              <span className="block text-orange-400">APPARATUUR</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              DJ met apparatuur gezocht? DJ Kevin Froger levert complete all-in pakketten. 
              Professionele DJ inclusief geluid, licht en alle benodigde apparatuur voor jouw evenement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Speaker className="w-6 h-6 inline-block mr-3" />
                BOEK DJ MET APPARATUUR
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

      {/* Equipment Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              PROFESSIONELE
              <span className="block text-blue-700">APPARATUUR</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Complete DJ apparatuur voor elk evenement - altijd inbegrepen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
              <div key={index} className="group bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                
                <ul className="space-y-2">
                  {item.items.map((equipment, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{equipment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              ALL-IN
              <span className="block text-orange-500">PAKKETTEN</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              DJ met apparatuur - complete pakketten voor elk evenement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="text-2xl font-black text-orange-500">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sr-only prose prose-lg max-w-none">
            <h2>DJ Met Apparatuur - Complete All-in DJ Services</h2>
            <p>Zoek je een DJ met apparatuur? DJ Kevin Froger levert complete all-in pakketten inclusief professionele geluids- en lichtapparatuur. Geen gedoe met verhuur, alles uit één hand.</p>
            
            <h3>DJ Inclusief Licht en Geluid</h3>
            <p>Kevin brengt altijd professionele apparatuur mee: JBL speakers, Pioneer mixers, LED verlichting, draadloze microfoons, en alle benodigde kabels. DJ inclusief complete setup.</p>
            
            <h3>Mobiele DJ Show</h3>
            <p>Complete mobiele DJ show met eigen installatie. Kevin komt naar elke locatie met professionele apparatuur en zorgt voor de complete technische setup en breakdown.</p>
            
            <h3>DJ Met Eigen Installatie Voordelen</h3>
            <p>Voordelen van DJ met eigen apparatuur: geen extra verhuurkosten, alles uit één hand, professionele kwaliteit gegarandeerd, backup apparatuur aanwezig, en ervaring met eigen setup.</p>
            
            <h3>DJ Apparatuur Specificaties</h3>
            <p>Professionele DJ apparatuur: Pioneer DJM mixers, JBL PRX speakers, Shure draadloze microfoons, LED PAR spots, moving heads, rookmachine, en complete bekabeling.</p>
            
            <h3>DJ Met Apparatuur Boeken</h3>
            <p>Wil je een DJ met apparatuur boeken? Kevin Froger biedt complete all-in pakketten vanaf €550. Alles inclusief voor een zorgeloze ervaring.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK DJ MET
              <span className="block text-blue-700">APPARATUUR</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar voor complete all-in DJ services?
            </p>
          </div>
          <ContactForm eventType="DJ met apparatuur boeking" />
        </div>
      </section>
    </div>
  );
};

export default DJMetApparatuurPage;