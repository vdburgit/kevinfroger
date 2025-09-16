import React from 'react';
import { MapPin, Phone, Mail, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../../components/ContactForm';

const Leiden = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "DJ Leiden | DJ Kevin Froger Sleutelstad | 100+ Events";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Leiden ✨ 100+ events in de sleutelstad. DJ Kevin Froger van centrum tot universiteit. Professionele DJ services Leiden. Boek nu!');
    }
    
    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'DJ Leiden | DJ Kevin Froger Sleutelstad');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'DJ Leiden ✨ 100+ events in de sleutelstad. DJ Kevin Froger van centrum tot universiteit. Professionele DJ services Leiden.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);
    
    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/regio/zuid-holland/leiden');
    if (!document.head.contains(ogUrl)) document.head.appendChild(ogUrl);
    
    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', 'https://kevinfroger.nl/images/kevin-portrait.png');
    if (!document.head.contains(ogImage)) document.head.appendChild(ogImage);
    
    const ogSiteName = document.querySelector('meta[property="og:site_name"]') || document.createElement('meta');
    ogSiteName.setAttribute('property', 'og:site_name');
    ogSiteName.setAttribute('content', 'DJ Kevin Froger');
    if (!document.head.contains(ogSiteName)) document.head.appendChild(ogSiteName);
    
    // Add structured data for Leiden page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://kevinfroger.nl/"},
            {"@type": "ListItem", "position": 2, "name": "Regio", "item": "https://kevinfroger.nl/regio"},
            {"@type": "ListItem", "position": 3, "name": "Zuid-Holland", "item": "https://kevinfroger.nl/regio/zuid-holland"},
            {"@type": "ListItem", "position": 4, "name": "Leiden", "item": "https://kevinfroger.nl/regio/zuid-holland/leiden"}
          ]
        },
        {
          "@type": "LocalBusiness",
          "name": "DJ Leiden - DJ Kevin Froger",
          "description": "Professionele DJ services in Leiden en alle wijken van de sleutelstad",
          "url": "https://kevinfroger.nl/regio/zuid-holland/leiden",
          "telephone": "+31645251333",
          "areaServed": "Leiden",
          "sameAs": [
            "https://www.instagram.com/djkevinfroger/",
            "https://www.linkedin.com/in/kevin-froger-b23aa263/",
            "https://www.facebook.com/KevinFroger.nl",
            "https://wa.me/31645251333"
          ]
        }
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const services = [
    {
      title: "Bruiloften Leiden",
      description: "Romantische bruiloft DJ in de sleutelstad",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Studentenfeesten",
      description: "DJ voor studentenevenementen en universitaire feesten",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Bedrijfsfeesten",
      description: "Corporate events in historisch Leiden",
      icon: <Building className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Festivals & Events",
      description: "Grote evenementen in de universiteitstad",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    }
  ];

  const districts = [
    "Leiden Centrum", "Leiden Noord", "Leiden Zuid", "Leiden Oost", "Leiden West",
    "Stevenshof", "Merenwijk", "Roomburg", "De Kooi", "Boerhaavewijk", "Professorenwijk", "Groenoord"
  ];

  const venues = [
    "Museum De Lakenhal", "Hortus Botanicus", "Pieterskerk", "Universiteit Leiden",
    "Rijksmuseum van Oudheden", "Naturalis", "Corpus", "Burcht van Leiden",
    "Stedelijk Museum", "Bio Science Park", "Leiden American Pilgrim Museum", "Molen de Valk"
  ];

  const stats = [
    { number: "15+", label: "Jaar in Leiden", icon: <Award className="w-8 h-8" /> },
    { number: "100+", label: "Events in Leiden", icon: <Calendar className="w-8 h-8" /> },
    { number: "60+", label: "Leidse Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "40+", label: "Studentenfeesten", icon: <GraduationCap className="w-8 h-8" /> }
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link to="/regio" className="text-gray-500 hover:text-gray-700">Regio</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link to="/regio/zuid-holland" className="text-gray-500 hover:text-gray-700">Zuid-Holland</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-semibold">Leiden</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl animate-bounce-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <GraduationCap className="w-10 h-10 text-orange-400" />
              <span className="text-orange-400 font-black text-xl tracking-wide">LEIDEN</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ KEVIN FROGER
              <span className="block text-orange-400">LEIDEN</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Professionele DJ services in Leiden. Van het centrum tot de universiteit, 
              van bruiloften in de sleutelstad tot studentenfeesten - altijd de perfecte sfeer in de universiteitstad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Calendar className="w-6 h-6 inline-block mr-3" />
                BOEK NU IN LEIDEN
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
              <span className="block text-blue-700">LEIDEN</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professionele DJ services voor alle gelegenheden in de sleutelstad
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
            <h2>DJ Leiden - Professionele DJ Services Sleutelstad</h2>
            <p>Zoek je een DJ in Leiden? DJ Kevin Froger verzorgt professionele DJ services in de sleutelstad. Van bruiloften in historische panden tot studentenfeesten - altijd de perfecte sfeer in de universiteitstad.</p>
            
            <h3>DJ Leiden - Alle Wijken</h3>
            <p>Kevin is actief in heel Leiden: DJ Leiden Centrum, DJ Leiden Noord, DJ Leiden Zuid, DJ Leiden Oost, DJ Leiden West, DJ Stevenshof, DJ Merenwijk, DJ Roomburg, DJ De Kooi, DJ Boerhaavewijk, DJ Professorenwijk, DJ Groenoord.</p>
            
            <h3>Bruiloft DJ Leiden</h3>
            <p>Voor bruiloften in Leiden heeft Kevin meer dan 60 succesvolle events begeleid. Van Museum De Lakenhal tot Hortus Botanicus, van Pieterskerk tot Universiteit Leiden - Kevin maakt jullie bruiloft onvergetelijk in de sleutelstad.</p>
            
            <h3>Studentenfeest DJ Leiden</h3>
            <p>Leiden is dé studentenstad van Nederland. Kevin heeft ervaring met studentenfeesten, disputen, verenigingsfeesten en universitaire gala's. Van Minerva tot andere studentenverenigingen.</p>
            
            <h3>Bedrijfsfeest DJ Leiden</h3>
            <p>Voor bedrijfsfeesten in Leiden biedt Kevin professionele DJ services. Van Bio Science Park tot historische panden in het centrum - altijd representatief en stijlvol.</p>
            
            <h3>DJ Universiteit Leiden</h3>
            <p>Als oudste universiteit van Nederland heeft Leiden een rijke academische traditie. Kevin verzorgt universitaire events, alumni bijeenkomsten en academische gala's.</p>
            
            <h3>DJ Boeken Leiden</h3>
            <p>Wil je een DJ boeken in Leiden? Kevin Froger kent alle locaties van het centrum tot de universiteit. Professionele DJ services voor de sleutelstad.</p>
            
            <h3>Populaire DJ Services Leiden</h3>
            <p>DJ Leiden centrum, DJ universiteit Leiden, studentenfeest DJ Leiden, bruiloft DJ Leiden, bedrijfsfeest DJ Leiden, academische DJ, sleutelstad DJ, professionele DJ Leiden.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-12 text-shadow">
                ALLE WIJKEN
                <span className="block text-orange-500">LEIDEN</span>
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
                ACADEMISCHE
                <span className="block text-blue-700">LOCATIES</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {venues.map((venue, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <GraduationCap className="w-6 h-6 text-blue-500 mx-auto mb-2" />
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
              <span className="block text-blue-700">IN LEIDEN</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in Leiden onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Leiden evenement" />
        </div>
      </section>
    </div>
  );
};

export default Leiden;