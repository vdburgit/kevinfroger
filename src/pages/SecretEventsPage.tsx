import React from 'react';
import { Shield, Lock, Eye, FileText, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Users, Music, AlertTriangle, Globe, Crown, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const SecretEventsPage = () => {
  // SEO metadata for this page
  React.useEffect(() => {
    document.title = "Secret Events & Privacy | DJ & Eventservice – Kevin Froger";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discreet en veilig: DJ- en eventservice voor secret events, productlanceringen en VIP-ontvangsten. Geen media, geen socials. NDA en VOG op verzoek.');
    }
    
    // Add canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://kevinfroger.nl/secret-events-privacy');
    if (!document.head.contains(canonical)) document.head.appendChild(canonical);
    
    // Add robots meta
    const robots = document.querySelector('meta[name="robots"]') || document.createElement('meta');
    robots.setAttribute('name', 'robots');
    robots.setAttribute('content', 'index,follow,max-snippet:-1,max-image-preview:standard,max-video-preview:-1');
    if (!document.head.contains(robots)) document.head.appendChild(robots);
    
    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', 'Secret Events & Privacy | DJ & Eventservice – Kevin Froger');
    if (!document.head.contains(ogTitle)) document.head.appendChild(ogTitle);
    
    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.setAttribute('content', 'Discreet en veilig: DJ- en eventservice voor secret events, productlanceringen en VIP-ontvangsten. Geen media, geen socials. NDA en VOG op verzoek.');
    if (!document.head.contains(ogDescription)) document.head.appendChild(ogDescription);
    
    const ogType = document.querySelector('meta[property="og:type"]') || document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.setAttribute('content', 'website');
    if (!document.head.contains(ogType)) document.head.appendChild(ogType);
    
    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', 'https://kevinfroger.nl/secret-events-privacy');
    if (!document.head.contains(ogUrl)) document.head.appendChild(ogUrl);
    
    const ogSiteName = document.querySelector('meta[property="og:site_name"]') || document.createElement('meta');
    ogSiteName.setAttribute('property', 'og:site_name');
    ogSiteName.setAttribute('content', 'Kevin Froger');
    if (!document.head.contains(ogSiteName)) document.head.appendChild(ogSiteName);
    
    // Add structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Secret Events & Privacy – DJ & Eventservice",
      "serviceType": "Discrete DJ- en eventservice voor secret events",
      "provider": {
        "@type": "Person",
        "name": "Kevin Froger",
        "url": "https://kevinfroger.nl"
      },
      "areaServed": ["Zuid-Holland", "Noord-Brabant", "Gelderland", "Utrecht", "Overijssel", "Zeeland", "Nederland"],
      "inLanguage": "nl-NL",
      "description": "Discreet en veilig: DJ- en eventservice voor secret events, productlanceringen en VIP-ontvangsten. Geen media, geen socials. NDA en VOG op verzoek.",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "VOG",
        "name": "Verklaring Omtrent het Gedrag"
      },
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR"
        },
        "availability": "https://schema.org/InStock"
      },
      "sameAs": [
        "https://www.instagram.com/djkevinfroger",
        "https://www.linkedin.com/in/kevinfroger",
        "https://www.facebook.com/kevinfroger",
        "https://wa.me/31645251333"
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const services = [
    "High‑end DJ‑show door Kevin Froger (volledig verzorgd)",
    "Complete licht‑ en geluidsvoorziening; low‑profile opstelling waar mogelijk",
    "Meedenkend per locatie: haalbaarheid, geluidsplan en opstelling passend bij de ruimte",
    "Discrete communicatie met één vast aanspreekpunt",
    "Vertrouwelijkheid op verzoek: NDA/vertrouwelijkheidsovereenkomst. VOG beschikbaar",
    "Geen media en geen socials – alle communicatie blijft privé"
  ];

  const process = [
    {
      step: "01",
      title: "INTAKE (KORT & DISCREET)",
      description: "Doel, locatie en wensen; discretieniveau en contactlijnen vastleggen",
      icon: <Eye className="w-8 h-8" />
    },
    {
      step: "02",
      title: "PLAN & BEVESTIGING",
      description: "Beknopt plan (tijden, op-/afbouw, contactpunten); NDA/VOG indien nodig",
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: "03",
      title: "UITVOERING (LOW‑PROFILE)",
      description: "Onopvallende show en techniek; afstemming met locatie en security van opdrachtgever",
      icon: <Shield className="w-8 h-8" />
    },
    {
      step: "04",
      title: "NAZORG",
      description: "Korte terugkoppeling op verzoek; geen foto's, posts of referenties zonder toestemming",
      icon: <Lock className="w-8 h-8" />
    }
  ];

  const privacyGuarantees = [
    "Geen media en geen socials: wij delen niets publiekelijk",
    "NDA/Geheimhouding: op verzoek standaard",
    "VOG beschikbaar: recente Verklaring Omtrent het Gedrag",
    "Dataminimalisatie & veilige communicatie: we delen alleen wat strikt nodig is",
    "Low‑profile aanwezigheid: onopvallende uitvoering, zonder branding",
    "Operationele details stemmen we 1‑op‑1 achter de schermen af; bewust niet publiek"
  ];

  const applications = [
    "Productlanceringen en onthullingen onder embargo",
    "Speciale evenementen en exclusieve ontvangsten",
    "Feesten en partijen in besloten kring",
    "Verjaardagen en jubilea (beperkte kring)",
    "Besloten bijeenkomsten, diners en boardroomsessies",
    "Koninklijke/diplomatieke context (in overleg)",
    "Militaire ceremonies en protocollaire evenementen (binnen geldende kaders)",
    "VIP/BN'er‑events waar anonimiteit vereist is",
    "Uitzendingsgebieden/missielocaties: morale‑events voor gestationeerd personeel (in overleg; conform wet- en regelgeving en operationele protocollen)"
  ];

  const faq = [
    {
      question: "Werken jullie altijd met een NDA?",
      answer: "Ja. We ondertekenen jullie NDA of werken met onze standaard‑NDA."
    },
    {
      question: "Kunnen jullie een VOG aanleveren?",
      answer: "Ja. Recente VOG op verzoek; indien vereist ook per teamlid."
    },
    {
      question: "Leveren jullie beveiliging of toegangscontrole?",
      answer: "Nee. Uitsluitend entertainment (DJ + licht/geluid). Afstemming met jullie beveiligingspartner is mogelijk."
    },
    {
      question: "Hoe waarborgen jullie privacy?",
      answer: "Geen media/geen socials, NDA's, dataminimalisatie, beveiligde communicatie en low‑profile uitvoering."
    },
    {
      question: "Publiceren jullie achteraf foto's of referenties?",
      answer: "Nee, niet zonder uitdrukkelijke schriftelijke toestemming."
    },
    {
      question: "Internationale inzet mogelijk?",
      answer: "Ja, in overleg en binnen geldende kaders (wet- en regelgeving, travel/security briefings, visa/clearances)."
    }
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><span className="text-gray-500">Diensten</span></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-semibold">Secret Events & Privacy</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden" role="banner" aria-labelledby="secret-hero-title">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Subtle background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gray-400/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 id="secret-hero-title" className="text-5xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight text-shadow-lg">
              SECRET EVENTS
              <span className="block text-blue-400">& PRIVACY</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Discreet, veilig en volledig vertrouwelijk – high‑end DJ‑show en techniek zonder publiciteit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+31645251333"
                className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
              >
                <Phone className="w-6 h-6 inline-block mr-3" />
                BEL KEVIN
              </a>
              <a
                href="mailto:kevin@kevinfroger.nl"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                <Mail className="w-6 h-6 inline-block mr-3" />
                E-MAIL
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              DISCRETE
              <span className="block text-blue-700">ENTERTAINMENT</span>
            </h2>
          </div>
          
          <div className="prose prose-xl max-w-none text-center">
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              Wanneer absolute discretie vereist is, leveren wij uitsluitend de artistieke invulling en productie: 
              de DJ‑show door Kevin Froger en de complete licht‑ en geluidsopzet.
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">
              Wij maken het feestje – en we zorgen dat het privé blijft.
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed">
              Geen media, geen socials, geen publiciteit.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              WAT WIJ
              <span className="block text-blue-700">BIEDEN</span>
            </h2>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg text-gray-700 font-medium leading-relaxed">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              ONZE
              <span className="block text-blue-700">WERKWIJZE</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-8 text-white group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  {item.icon}
                </div>
                <div className="text-blue-500 font-black text-lg mb-4">{item.step}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-6">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy & Guarantees Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              PRIVACY &
              <span className="block text-blue-700">GARANTIES</span>
            </h2>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {privacyGuarantees.map((guarantee, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg text-gray-700 font-medium leading-relaxed">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              TOEPASSINGEN
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((application, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{application}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Region & Availability Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              REGIO &
              <span className="block text-blue-700">BESCHIKBAARHEID</span>
            </h2>
          </div>
          
          <div className="bg-white p-12 rounded-3xl shadow-xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-12 h-12 text-blue-500 mr-4" />
              <h3 className="text-3xl font-black text-gray-900">LANDELIJKE DEKKING</h3>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              Heel Nederland: Zuid‑Holland, Noord‑Brabant, Gelderland, Utrecht, Overijssel, Zeeland en omliggende regio's. 
              Internationale inzet (incl. uitzendingslocaties) is mogelijk in overleg; toegang/vergunningen/security door 
              opdrachtgever of Defensie. Wij leveren uitsluitend entertainment (DJ + licht & geluid).
            </p>
          </div>
        </div>
      </section>

      {/* Security Disclaimer */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-8 rounded-2xl">
            <div className="flex items-start">
              <AlertTriangle className="w-8 h-8 text-orange-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">ARTISTS ONLY – GEEN SECURITY</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Heldere disclaimer: wij leveren geen beveiligingsdiensten of toegangscontrole; 
                  afstemming met security van opdrachtgever is mogelijk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              VEELGESTELDE
              <span className="block text-blue-700">VRAGEN</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {faq.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-black mr-4">
                    {index + 1}
                  </span>
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-12 text-lg">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-gray-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-gray-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-7xl font-black mb-8 text-shadow-lg">
            BESPREEK UW OPDRACHT
            <span className="block text-blue-400">DISCREET</span>
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Eén vast aanspreekpunt. Snel en vertrouwelijk.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+31645251333"
              className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-12 py-6 rounded-full font-black text-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
            >
              <Phone className="w-6 h-6 inline-block mr-3" />
              BEL KEVIN
            </a>
            <a
              href="mailto:kevin@kevinfroger.nl"
              className="border-3 border-white text-white px-12 py-6 rounded-full font-black text-2xl hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              <Mail className="w-6 h-6 inline-block mr-3" />
              E-MAIL
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecretEventsPage;