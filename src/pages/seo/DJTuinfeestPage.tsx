import React from 'react';
import { TreePine, Phone, Mail, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Sun, Flower, Leaf } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJTuinfeestPage = () => {
  const services = [
    {
      title: "DJ Tuinfeest Verjaardag",
      description: "Perfecte DJ voor verjaardagsfeesten in de tuin",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600",
      features: ["Outdoor apparatuur", "Weerbestendig", "Buren-vriendelijk", "Alle leeftijden"]
    },
    {
      title: "DJ Tuinfeest BBQ",
      description: "Gezellige DJ voor barbecue en tuinfeesten",
      icon: <Sun className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      features: ["Zomer vibes", "Lounge muziek", "Party hits", "Flexibele tijden"]
    },
    {
      title: "DJ Tuinfeest Jubileum",
      description: "Stijlvolle DJ voor jubilea en speciale gelegenheden",
      icon: <Award className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      features: ["Klassieke hits", "Alle generaties", "Elegante setup", "MC services"]
    },
    {
      title: "DJ Pool Party",
      description: "Energieke DJ voor zwembadfeesten en pool parties",
      icon: <Zap className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600",
      features: ["Waterproof setup", "High-energy", "Zomer hits", "Party sfeer"]
    }
  ];

  const outdoorFeatures = [
    {
      title: "WEERBESTENDIGE APPARATUUR",
      description: "Professionele outdoor apparatuur die bestand is tegen alle weersomstandigheden",
      icon: <TreePine className="w-10 h-10" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "BUREN-VRIENDELIJK",
      description: "Geluidsniveaus aangepast aan tuinfeesten en woonwijken voor optimale sfeer",
      icon: <Flower className="w-10 h-10" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "FLEXIBELE SETUP",
      description: "Aanpasbare opstelling voor elke tuin, terras of outdoor locatie",
      icon: <Leaf className="w-10 h-10" />,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const stats = [
    { number: "15+", label: "Jaar Tuinfeest Ervaring", icon: <TreePine className="w-8 h-8" /> },
    { number: "200+", label: "Tuinfeesten", icon: <Flower className="w-8 h-8" /> },
    { number: "100+", label: "Pool Parties", icon: <Sun className="w-8 h-8" /> },
    { number: "300+", label: "Outdoor Events", icon: <Leaf className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-900 via-blue-800 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <TreePine className="w-10 h-10 text-green-400" />
              <span className="text-green-400 font-black text-xl tracking-wide">DJ TUINFEEST</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ TUINFEEST
              <span className="block text-green-400">SPECIALIST</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-green-100 leading-relaxed max-w-4xl mx-auto">
              DJ tuinfeest huren? DJ Kevin Froger is specialist in outdoor evenementen. 
              Van tuinfeesten tot pool parties, van BBQ tot zomerfeesten - altijd de perfecte sfeer in jouw tuin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-green-500 to-blue-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105"
              >
                <TreePine className="w-6 h-6 inline-block mr-3" />
                BOEK TUINFEEST DJ
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:0645251333"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-green-900 transition-all duration-300"
              >
                06 45 25 13 33
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-green-400 mb-2">{stat.number}</div>
                  <div className="text-green-200 font-semibold">{stat.label}</div>
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
              TUINFEEST DJ
              <span className="block text-green-600">SERVICES</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professionele DJ services voor alle outdoor evenementen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="#contact"
                    className="block w-full text-center py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full font-black text-sm hover:from-green-600 hover:to-blue-700 transition-all duration-200"
                  >
                    BOEK TUINFEEST DJ
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              WAAROM DJ KEVIN
              <span className="block text-green-600">VOOR TUINFEESTEN?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {outdoorFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-24 h-24 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-8 text-white group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-6">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sr-only prose prose-lg max-w-none">
            <h2>DJ Tuinfeest - Specialist in Outdoor Entertainment</h2>
            <p>Zoek je een DJ voor tuinfeest? DJ Kevin Froger is specialist in outdoor evenementen. Tuinfeest DJ huren met weerbestendige apparatuur en buren-vriendelijke geluidsniveaus.</p>
            
            <h3>Tuinfeest DJ Huren - Wat Krijg Je?</h3>
            <p>Bij tuinfeest DJ Kevin krijg je: weerbestendige apparatuur, professionele outdoor setup, geluidsniveaus aangepast aan woonwijken, flexibele tijden, en ervaring met outdoor events.</p>
            
            <h3>DJ Voor Tuinfeest Types</h3>
            <p>Kevin verzorgt alle tuinfeest types: verjaardagsfeest in de tuin, BBQ party DJ, zomerfeest DJ, pool party DJ, tuinfeest jubileum, familie reünie DJ, en housewarming party DJ.</p>
            
            <h3>Tuinfeest DJ Apparatuur</h3>
            <p>Speciale outdoor apparatuur: weerbestendige speakers, overdekte DJ booth, LED verlichting voor avond sfeer, draadloze microfoons, en complete stroomvoorziening.</p>
            
            <h3>DJ Pool Party Specialist</h3>
            <p>Kevin is ook specialist in pool parties en zwembadfeesten. Waterproof setup, zomer hits, en party sfeer voor de perfecte pool party ervaring.</p>
            
            <h3>Tuinfeest DJ Boeken</h3>
            <p>Wil je een tuinfeest DJ boeken? Kevin Froger heeft ervaring met alle outdoor events en zorgt voor de perfecte sfeer in jouw tuin.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK TUINFEEST DJ
              <span className="block text-green-600">KEVIN FROGER</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar voor het perfecte tuinfeest?
            </p>
          </div>
          <ContactForm eventType="Tuinfeest DJ boeking" />
        </div>
      </section>
    </div>
  );
};

export default DJTuinfeestPage;