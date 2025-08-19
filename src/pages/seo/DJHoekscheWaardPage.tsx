import React from 'react';
import { MapPin, Phone, Mail, Calendar, Users, Music, Award, CheckCircle, ArrowRight, Star, Heart, Building, Zap } from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const DJHoekscheWaardPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "DJ Hoeksche Waard | DJ Kevin Froger Lokaal | 200+ Events";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DJ Hoeksche Waard ✨ 200+ events in de regio. DJ Kevin Froger lokale specialist van Oud-Beijerland tot Strijen. Professionele DJ services!');
    }
    
    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'DJ Hoeksche Waard | DJ Kevin Froger Lokaal');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'DJ Hoeksche Waard ✨ 200+ events in de regio. DJ Kevin Froger lokale specialist van Oud-Beijerland tot Strijen.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);
    
    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/dj-hoeksche-waard');
    if (!document.head.contains(ogUrl)) document.head.appendChild(ogUrl);
    
    const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
    ogImage.setAttribute('property', 'og:image');
    ogImage.setAttribute('content', 'https://kevinfroger.nl/images/kevin-portrait.png');
    if (!document.head.contains(ogImage)) document.head.appendChild(ogImage);
    
    const ogSiteName = document.querySelector('meta[property="og:site_name"]') || document.createElement('meta');
    ogSiteName.setAttribute('property', 'og:site_name');
    ogSiteName.setAttribute('content', 'DJ Kevin Froger');
    if (!document.head.contains(ogSiteName)) document.head.appendChild(ogSiteName);
    
    // Add structured data for Hoeksche Waard page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "DJ Hoeksche Waard - DJ Kevin Froger",
      "description": "Professionele DJ services in de Hoeksche Waard en alle gemeenten van de regio",
      "url": "https://kevinfroger.nl/dj-hoeksche-waard",
      "telephone": "+31645251333",
      "areaServed": "Hoeksche Waard",
      "sameAs": [
        "https://www.instagram.com/djkevinfroger/",
        "https://www.linkedin.com/in/kevin-froger-b23aa263/",
        "https://www.facebook.com/KevinFroger.nl",
        "https://wa.me/31645251333"
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const services = [
    {
      title: "Bruiloften Hoeksche Waard",
      description: "Complete muzikale begeleiding voor jullie mooiste dag in de Hoeksche Waard",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Bedrijfsfeesten",
      description: "Professionele DJ services voor bedrijfsevenementen in de regio",
      icon: <Building className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Privé Feesten",
      description: "Van verjaardagen tot jubilea - elk feest wordt onvergetelijk",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Festivals & Events",
      description: "High-energy performances voor grote evenementen",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-pink-600"
    }
  ];

  const locations = [
    "Binnenmaas", "Cromstrijen", "Korendijk", "Oud-Beijerland", "Strijen", 
    "Westmaas", "Heinenoord", "Klaaswaal", "Maasdam", "Puttershoek",
    "Zuid-Beijerland", "Goidschalxoord", "Strijensas", "Mijnsheerenland"
  ];

  const stats = [
    { number: "15+", label: "Jaar in Hoeksche Waard", icon: <Award className="w-8 h-8" /> },
    { number: "200+", label: "Events in de Regio", icon: <Calendar className="w-8 h-8" /> },
    { number: "100+", label: "Lokale Bruiloften", icon: <Heart className="w-8 h-8" /> },
    { number: "50+", label: "Bedrijfsfeesten", icon: <Building className="w-8 h-8" /> }
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
              <MapPin className="w-10 h-10 text-orange-400" />
              <span className="text-orange-400 font-black text-xl tracking-wide">HOEKSCHE WAARD</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              DJ KEVIN FROGER
              <span className="block text-orange-400">HOEKSCHE WAARD</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Professionele DJ services in de Hoeksche Waard. Van Oud-Beijerland tot Strijen, 
              van bruiloften tot bedrijfsfeesten - lokale expertise met 15+ jaar ervaring.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
              >
                <Calendar className="w-6 h-6 inline-block mr-3" />
                BOEK NU IN HOEKSCHE WAARD
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
              <span className="block text-blue-700">HOEKSCHE WAARD</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professionele DJ services voor alle gelegenheden in de Hoeksche Waard
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
            <h2>DJ Kevin Froger - Professionele DJ Services Hoeksche Waard</h2>
            <p>Zoek je een DJ in de Hoeksche Waard? DJ Kevin Froger is dé lokale specialist voor bruiloften, bedrijfsfeesten en festivals in Oud-Beijerland, Strijen, Binnenmaas en omgeving. Met 15+ jaar ervaring en 200+ events in de regio zorgt Kevin voor de perfecte muzikale begeleiding van jouw evenement in de Hoeksche Waard.</p>
            
            <h3>DJ Hoeksche Waard - Alle Gemeenten</h3>
            <p>Kevin verzorgt DJ services in alle gemeenten van de Hoeksche Waard: DJ Oud-Beijerland, DJ Strijen, DJ Binnenmaas, DJ Cromstrijen, DJ Korendijk, DJ Westmaas, DJ Heinenoord, DJ Klaaswaal, DJ Maasdam, DJ Puttershoek, DJ Zuid-Beijerland, DJ Goidschalxoord, DJ Strijensas, DJ Mijnsheerenland. DJ Hoeksche Waard alle dorpen en gemeenten.</p>
            
            <h3>Bruiloft DJ Hoeksche Waard</h3>
            <p>Zoek je een bruiloft DJ in de Hoeksche Waard? Kevin heeft meer dan 100 bruiloften begeleid in de regio. Van ceremonie tot feestavond, van Oud-Beijerland tot Strijen - altijd de perfecte muziek voor jullie mooiste dag. Bruiloft DJ Hoeksche Waard met lokale kennis en persoonlijke service.</p>
            
            <h3>Bedrijfsfeest DJ Hoeksche Waard</h3>
            <p>Voor bedrijfsfeesten in de Hoeksche Waard biedt Kevin professionele DJ services. Of het nu gaat om een personeelsfeest, jubileum of netwerkborrel - Kevin zorgt voor de juiste sfeer en representatieve uitstraling. Bedrijfsfeest DJ Hoeksche Waard voor alle lokale ondernemingen en agrarische bedrijven.</p>
            
            <h3>Festival DJ Hoeksche Waard</h3>
            <p>Van grote festivals tot lokale dorpsfeesten - Kevin heeft ervaring met alle soorten festivals in de Hoeksche Waard. High-energy performances die het publiek in beweging houden. Festival DJ Hoeksche Waard voor alle outdoor events en dorpsfeesten in de regio.</p>
            
            <h3>DJ Boeken Hoeksche Waard</h3>
            <p>Wil je een DJ boeken in de Hoeksche Waard? Neem contact op met Kevin Froger voor een vrijblijvende offerte. Binnen 24 uur ontvang je een persoonlijk voorstel voor jouw evenement. DJ boeken Hoeksche Waard - lokale specialist met landelijke ervaring.</p>
            
            <h3>Lokale DJ Specialist Hoeksche Waard</h3>
            <p>Kevin woont in de Hoeksche Waard en kent de regio als geen ander. Van lokale tradities tot moderne wensen - altijd de juiste balans. Lokale DJ Hoeksche Waard met persoonlijke service en korte reisafstanden.</p>
            
            <h3>Populaire Zoektermen DJ Hoeksche Waard</h3>
            <p>DJ Hoeksche Waard, DJ Oud-Beijerland, DJ Strijen, bruiloft DJ Hoeksche Waard, bedrijfsfeest DJ Hoeksche Waard, festival DJ Hoeksche Waard, lokale DJ, DJ Hoeksche Waard boeken, DJ Hoeksche Waard huren, Hoeksche Waard entertainment.</p>
          </div>
          
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              ALLE LOCATIES
              <span className="block text-orange-500">HOEKSCHE WAARD</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              DJ Kevin Froger verzorgt evenementen in alle gemeenten van de Hoeksche Waard
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-black text-gray-900">{location}</h3>
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
              <span className="block text-blue-700">IN HOEKSCHE WAARD</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Klaar om jouw evenement in de Hoeksche Waard onvergetelijk te maken?
            </p>
          </div>
          <ContactForm eventType="Hoeksche Waard evenement" />
        </div>
      </section>
    </div>
  );
};

export default DJHoekscheWaardPage;