import React from 'react';
import { Home, Phone, Mail, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, TreePine } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

// Create a simple barn icon component since Barcode doesn't work as Barn
const Barn = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 2.5L18.5 12H17v6H7v-6H5.5L12 5.5z"/>
  </svg>
);

const DJSchuurfeestPage = () => {
  const services = [
    {
      title: "DJ Schuurfeest Verjaardag",
      description: "Gezellige DJ voor verjaardagsfeesten in de schuur",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600",
      features: ["Landelijke sfeer", "Alle leeftijden", "Gezellige muziek", "Flexibele setup"]
    },
    {
      title: "DJ Schuurfeest Jubileum",
      description: "Stijlvolle DJ voor jubilea in rustieke setting",
      icon: <Award className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      features: ["Klassieke hits", "Nostalgische muziek", "Familie sfeer", "MC services"]
    },
    {
      title: "DJ Boerderij Feest",
      description: "Authentieke DJ voor boerderij en landelijke feesten",
      icon: <TreePine className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      features: ["Country vibes", "Nederlandse hits", "Volksmuziek", "Gezelligheid"]
    },
    {
      title: "DJ Schuurfeest Party",
      description: "Energieke DJ voor uitbundige schuurfeesten",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600",
      features: ["Party hits", "Dansbare muziek", "Feest sfeer", "Alle genres"]
    }
  ];

  const schuurfeestTypes = [
    "Schuurfeest verjaardag", "Schuurfeest jubileum", "Boerderij feest", "Landelijk feest",
    "Schuurfeest bruiloft", "Harvest party", "Oogstfeest", "Country party",
    "Schuurfeest familie", "Reünie schuur", "Dorpsfeest schuur", "Themafeest western"
  ];

  const stats = [
    { number: "15+", label: "Jaar Schuurfeest Ervaring", icon: <Barn className="w-8 h-8" /> },
    { number: "150+", label: "Schuurfeesten", icon: <Home className="w-8 h-8" /> },
    { number: "100+", label: "Boerderij Events", icon: <TreePine className="w-8 h-8" /> },
    { number: "200+", label: "Landelijke Feesten", icon: <Award className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-amber-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Barn className="w-10 h-10 text-amber-400" />
              <span className="text-amber-400 font-black text-xl tracking-wide">DJ SCHUURFEEST</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ SCHUURFEEST
              <span className="block text-amber-400">SPECIALIST</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-amber-100 leading-relaxed max-w-4xl mx-auto">
              Schuurfeest DJ huren? DJ Kevin Froger is specialist in landelijke feesten. 
              Van gezellige schuurfeesten tot boerderij parties - altijd de perfecte rustieke sfeer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105"
              >
                <Barn className="w-6 h-6 inline-block mr-3" />
                BOEK SCHUURFEEST DJ
                <ArrowRight className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:0645251333"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-amber-900 transition-all duration-300"
              >
                06 45 25 13 33
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-black text-amber-400 mb-2">{stat.number}</div>
                  <div className="text-amber-200 font-semibold">{stat.label}</div>
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
              SCHUURFEEST DJ
              <span className="block text-amber-600">PAKKETTEN</span>
            </h2>
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
                        <CheckCircle className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="#contact"
                    className="block w-full text-center py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-black text-sm hover:from-amber-600 hover:to-orange-700 transition-all duration-200"
                  >
                    BOEK SCHUURFEEST DJ
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sr-only prose prose-lg max-w-none">
            <h2>DJ Schuurfeest - Specialist in Landelijke Feesten</h2>
            <p>Zoek je een DJ voor schuurfeest? DJ Kevin Froger is specialist in landelijke en rustieke feesten. Schuurfeest DJ huren met ervaring in boerderijen, schuren en outdoor locaties.</p>
            
            <h3>Schuurfeest DJ Huren - Alle Types</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-6">
              {schuurfeestTypes.map((type, index) => (
                <span key={index} className="bg-amber-100 text-amber-800 px-3 py-2 rounded-full text-sm font-bold text-center">
                  {type}
                </span>
              ))}
            </div>
            
            <h3>DJ Voor Schuurfeest Voordelen</h3>
            <p>Voordelen van Kevin als schuurfeest DJ: ervaring met rustieke locaties, aangepaste apparatuur voor schuren, muziek passend bij landelijke sfeer, en flexibele opstelling.</p>
            
            <h3>Schuurfeest DJ Apparatuur</h3>
            <p>Speciale apparatuur voor schuurfeesten: compacte maar krachtige speakers, LED verlichting voor sfeer, draadloze systemen, en robuuste setup geschikt voor landelijke locaties.</p>
            
            <h3>DJ Boerderij Feest</h3>
            <p>Kevin heeft ervaring met boerderij feesten en agrarische evenementen. Van oogstfeesten tot jubilea van boerenbedrijven - altijd de juiste landelijke sfeer.</p>
            
            <h3>Schuurfeest DJ Boeken</h3>
            <p>Wil je een schuurfeest DJ boeken? Kevin Froger begrijpt de unieke sfeer van landelijke feesten en past zijn service daarop aan.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              BOEK SCHUURFEEST DJ
              <span className="block text-amber-600">KEVIN FROGER</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar voor het perfecte schuurfeest?
            </p>
          </div>
          <ContactForm eventType="Schuurfeest DJ boeking" />
        </div>
      </section>
    </div>
  );
};

export default DJSchuurfeestPage;