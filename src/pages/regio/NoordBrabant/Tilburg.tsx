import React from 'react';
import { MapPin, Calendar, Users, Award, ArrowRight, Heart, Building, Zap, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../../../components/ContactForm';

const Tilburg = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "DJ Tilburg | DJ Kevin Froger Textielstad | 120+ Events";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Tilburg ✨ 120+ events in de textielstad. DJ Kevin Froger van centrum tot universiteit. Professionele DJ services Tilburg. Boek nu!');
    }
    
    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'DJ Tilburg | DJ Kevin Froger Textielstad');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'DJ Tilburg ✨ 120+ events in de textielstad. DJ Kevin Froger van centrum tot universiteit. Professionele DJ services Tilburg.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);
    
    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/regio/noord-brabant/tilburg');
    if (!document.head.contains(ogUrl)) document.head.appendChild(ogUrl);
    
    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', 'https://kevinfroger.nl/images/kevin-portrait.png');
    if (!document.head.contains(ogImage)) document.head.appendChild(ogImage);
    
    const ogSiteName = document.querySelector('meta[property="og:site_name"]') || document.createElement('meta');
    ogSiteName.setAttribute('property', 'og:site_name');
    ogSiteName.setAttribute('content', 'DJ Kevin Froger');
    if (!document.head.contains(ogSiteName)) document.head.appendChild(ogSiteName);
    
    // Add structured data for Tilburg page
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
            {"@type": "ListItem", "position": 3, "name": "Noord-Brabant", "item": "https://kevinfroger.nl/regio/noord-brabant"},
            {"@type": "ListItem", "position": 4, "name": "Tilburg", "item": "https://kevinfroger.nl/regio/noord-brabant/tilburg"}
          ]
        },
        {
          "@type": "LocalBusiness",
          "name": "DJ Tilburg - DJ Kevin Froger",
          "description": "Professionele DJ services in Tilburg en alle wijken van de textielstad",
          "url": "https://kevinfroger.nl/regio/noord-brabant/tilburg",
          "telephone": "+31645251333",
          "areaServed": "Tilburg",
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
      title: "Bruiloften Tilburg",
      description: "Romantische bruiloft DJ in de textielstad",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Bedrijfsfeesten",
      description: "Corporate events in industriële stad",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Studentenfeest DJ",
      description: "Universiteit Tilburg evenementen",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Festival DJ Tilburg",
      description: "Grote evenementen in de textielstad",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    }
  ];

  const districts = [
    "Tilburg Centrum", "Tilburg Noord", "Tilburg Zuid", "Tilburg Oost", "Tilburg West",
    "Reeshof", "De Blaak", "Wandelbos", "Universiteit", "Industrieterrein"
  ];

  const venues = [
    "Concertzaal Tilburg", "Universiteit Tilburg", "Theater Tilburg", "Stadschouwburg",
    "Textielmuseum", "De Pont Museum", "Spoorzone", "Piushaven",
    "Leijpark", "Wandelbos", "Tilburg Ten Miles", "Koningshoeven"
  ];

  const stats = [
    { number: "15+", label: "Jaar in Tilburg", icon: <Award className="w-8 h-8" /> },
    { number: "120+", label: "Events in Tilburg", icon: <Calendar className="w-8 h-8" /> },
    { number: "70+", label: "Tilburgse Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "50+", label: "Corporate Events", icon: <Building className="w-8 h-8" /> }
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
            <li><Link to="/regio/noord-brabant" className="text-gray-500 hover:text-gray-700">Noord-Brabant</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-semibold">Tilburg</li>
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
              <Factory className="w-10 h-10 text-orange-400" />
              <span className="text-orange-400 font-black text-xl tracking-wide">TILBURG</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ KEVIN FROGER
              <span className="block text-orange-400">TILBURG</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Professionele DJ services in Tilburg. Van het centrum tot de universiteit, 
              van bruiloften in de textielstad tot bedrijfsfeesten - altijd de perfecte sfeer in de industriële stad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Calendar className="w-6 h-6 inline-block mr-3" />
                BOEK NU IN TILBURG
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
              <span className="block text-blue-700">TILBURG</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professionele DJ services voor alle gelegenheden in de textielstad
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
            <h2>DJ Tilburg - Professionele DJ Services Textielstad</h2>
            <p>Zoek je een DJ in Tilburg? DJ Kevin Froger verzorgt professionele DJ services in de textielstad. Van bruiloften in het centrum tot studentenfeesten aan de universiteit - altijd de perfecte sfeer in de industriële stad.</p>
            
            <h3>DJ Tilburg - Alle Wijken</h3>
            <p>Kevin is actief in heel Tilburg: DJ Tilburg Centrum, DJ Tilburg Noord, DJ Tilburg Zuid, DJ Tilburg Oost, DJ Tilburg West, DJ Reeshof, DJ De Blaak, DJ Wandelbos, DJ Universiteit, DJ Industrieterrein.</p>
            
            <h3>Bruiloft DJ Tilburg</h3>
            <p>Voor bruiloften in Tilburg heeft Kevin meer dan 70 succesvolle events begeleid. Van Concertzaal Tilburg tot Theater Tilburg, van Textielmuseum tot De Pont Museum - Kevin maakt jullie bruiloft onvergetelijk in de textielstad.</p>
            
            <h3>Studentenfeest DJ Tilburg</h3>
            <p>Universiteit Tilburg heeft een actief studentenleven. Kevin heeft ervaring met studentenfeesten, verenigingsfeesten en universitaire gala's in de textielstad.</p>
            
            <h3>Bedrijfsfeest DJ Tilburg</h3>
            <p>Tilburg heeft een sterke industriële traditie. Kevin verzorgt bedrijfsfeesten voor lokale ondernemingen en heeft ervaring met corporate events in de textielstad.</p>
            
            <h3>Festival DJ Tilburg</h3>
            <p>Van Festival Mundial tot lokale festivals - Kevin heeft ervaring met alle soorten festivals in Tilburg. Altijd aangepast aan het diverse publiek van de textielstad.</p>
            
            <h3>DJ Boeken Tilburg</h3>
            <p>Wil je een DJ boeken in Tilburg? Kevin Froger kent alle locaties van het centrum tot de universiteit. Professionele DJ services voor de textielstad.</p>
            
            <h3>Populaire DJ Services Tilburg</h3>
            <p>DJ Tilburg centrum, DJ universiteit Tilburg, studentenfeest DJ Tilburg, bruiloft DJ Tilburg, bedrijfsfeest DJ Tilburg, textielstad DJ, industriële DJ, professionele DJ Tilburg.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-12 text-shadow">
                ALLE WIJKEN
                <span className="block text-orange-500">TILBURG</span>
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
                CULTURELE
                <span className="block text-blue-700">LOCATIES</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {venues.map((venue, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                    <Factory className="w-6 h-6 text-blue-500 mx-auto mb-2" />
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
              <span className="block text-blue-700">IN TILBURG</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in Tilburg onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Tilburg evenement" />
        </div>
      </section>
    </div>
  );
};

export default Tilburg;