import React from 'react';
import { Award, Phone, Mail, Calendar, Users, Music, CheckCircle, ArrowRight, Star, Heart, Building, Zap, Shield, Clock, Target } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const ProfessionaleDJPage = () => {
  const services = [
    {
      title: "Professionele Bruiloft DJ",
      description: "Complete muzikale begeleiding voor jullie mooiste dag",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Corporate DJ Services",
      description: "Zakelijke evenementen met professionele uitstraling",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Festival DJ Professional",
      description: "High-energy performances voor grote evenementen",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    },
    {
      title: "Event DJ Services",
      description: "Alle soorten evenementen professioneel begeleid",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    }
  ];

  const professionalFeatures = [
    {
      title: "15+ Jaar Ervaring",
      description: "Bewezen track record met 1000+ succesvolle evenementen",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Professionele Apparatuur",
      description: "Hoogwaardige geluids- en lichtapparatuur met backup systemen",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Betrouwbare Service",
      description: "Altijd op tijd, volledig voorbereid en flexibel tijdens events",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Maatwerk Aanpak",
      description: "Elke event uniek aangepakt met persoonlijke voorbereiding",
      icon: <Target className="w-8 h-8" />
    }
  ];

  const stats = [
    { number: "15+", label: "Jaar Professioneel", icon: <Award className="w-8 h-8" /> },
    { number: "1000+", label: "Professionele Events", icon: <Calendar className="w-8 h-8" /> },
    { number: "500+", label: "Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "100%", label: "Tevredenheid", icon: <Star className="w-8 h-8" /> }
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
              <Award className="w-10 h-10 text-orange-400" />
              <span className="text-orange-400 font-black text-xl tracking-wide">PROFESSIONELE DJ</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              PROFESSIONELE DJ
              <span className="block text-orange-400">KEVIN FROGER</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Professionele DJ services met 15+ jaar ervaring. Van live mixing specialist tot MC services - 
              altijd de hoogste kwaliteit en betrouwbaarheid voor jouw evenement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Award className="w-6 h-6 inline-block mr-3" />
                BOEK PROFESSIONELE DJ
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
              PROFESSIONELE
              <span className="block text-blue-700">DJ SERVICES</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hoogwaardige DJ services voor alle professionele evenementen
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

      {/* Professional Features Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              WAAROM
              <span className="block text-orange-500">PROFESSIONEEL?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {professionalFeatures.map((feature, index) => (
              <div key={index} className="group p-8 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sr-only prose prose-lg max-w-none">
            <h2>Professionele DJ - DJ Kevin Froger Professional Services</h2>
            <p>Zoek je een professionele DJ? DJ Kevin Froger biedt professionele DJ services met 15+ jaar ervaring. Van live mixing specialist tot MC services - altijd de hoogste kwaliteit en betrouwbaarheid.</p>
            
            <h3>Professionele DJ - Wat Betekent Dat?</h3>
            <p>Een professionele DJ betekent: betrouwbaarheid, kwaliteit, ervaring, professionele apparatuur, backup systemen, verzekering, vergunningen, en complete service van A tot Z.</p>
            
            <h3>Professionele DJ Bruiloft</h3>
            <p>Voor bruiloften is professionaliteit essentieel. Kevin heeft meer dan 500 bruiloften begeleid met complete muzikale begeleiding van ceremonie tot late avond.</p>
            
            <h3>Professionele DJ Bedrijfsfeest</h3>
            <p>Bedrijfsfeesten vereisen een professionele uitstraling. Kevin verzorgt corporate events met representatieve DJ services en zakelijke benadering.</p>
            
            <h3>Professionele DJ Apparatuur</h3>
            <p>Kevin gebruikt alleen professionele apparatuur: Pioneer mixers, JBL speakers, Shure microfoons, en professionele verlichting. Altijd met backup systemen.</p>
            
            <h3>Professionele DJ Voorbereiding</h3>
            <p>Professionele voorbereiding betekent: locatie bezoek, technische planning, muziekwensen bespreken, tijdschema afstemmen, en backup plannen maken.</p>
            
            <h3>Professionele DJ Boeken</h3>
            <p>Wil je een professionele DJ boeken? Kevin Froger biedt complete professionele DJ services met garantie op kwaliteit en betrouwbaarheid.</p>
            
            <h3>Populaire Professionele DJ Services</h3>
            <p>Professionele DJ, professional DJ services, ervaren DJ, betrouwbare DJ, kwaliteit DJ, live mixing DJ, MC DJ, allround DJ, event DJ, entertainment DJ.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK PROFESSIONELE DJ
              <span className="block text-blue-700">KEVIN FROGER</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar voor professionele DJ services van de hoogste kwaliteit?
            </p>
          </div>
          <ContactForm eventType="Professionele DJ boeking" />
        </div>
      </section>
    </div>
  );
};

export default ProfessionaleDJPage;