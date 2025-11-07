import React from "react";
import { Cog, Users, Music, CheckCircle, Star, Calendar, MessageCircle, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";

const WerkwijzePage: React.FC = () => {
  // SEO metadata + HowTo structured data
  React.useEffect(() => {
    document.title = "Werkwijze – zo regelen we jouw feest van A tot Z | Kevin Froger";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Heldere stappen: intake, voorbereiding, techniek, show en nazorg. Eén aanspreekpunt en flexibel meedenken."
      );
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "DJ boeken bij Kevin Froger",
      step: [
        { "@type": "HowToStep", name: "Intake", text: "We bespreken wensen, muziek en planning." },
        { "@type": "HowToStep", name: "Voorbereiding", text: "Afstemming met locatie en draaiboek." },
        { "@type": "HowToStep", name: "Techniek", text: "Passende set licht & geluid, klaar voor aanvang." },
        { "@type": "HowToStep", name: "Show", text: "Allround set, verzoekjes welkom, nette presentatie." },
        { "@type": "HowToStep", name: "Nazorg", text: "Korte terugkoppeling en evaluatie." }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const steps = [
    {
      step: "01",
      title: "INTAKE",
      description: "Kennismaken en behoeftes bespreken",
      details:
        "We bespreken je evenement, wensen en verwachtingen. Datum, locatie, tijdschema, muziekvoorkeuren en eventuele speciale verzoeken komen aan bod. Je krijgt binnen 24 uur een prijsindicatie of offerte.",
      icon: <Users className="w-8 h-8" />
    },
    {
      step: "02",
      title: "VOORBEREIDING",
      description: "Planning en afstemming",
      details: "Ik stem af met de locatie over techniek en ruimte. We stellen samen een draaiboek op met tijdsindeling en belangrijke momenten. Muziekwensen verzamel ik via een handige online tool.",
      icon: <Calendar className="w-8 h-8" />
    },
    {
      step: "03",
      title: "OPBOUW",
      description: "Installatie en soundcheck",
      details: "Ik kom ruim voor aanvang de apparatuur opbouwen en instellen. Alles wordt getest: geluid, licht en backup-systemen. Bij aanvang van het feest is alles klaar en werkend.",
      icon: <Cog className="w-8 h-8" />
    },
    {
      step: "04",
      title: "UITVOERING",
      description: "Live DJ performance op maat",
      details:
        "Ik draai live en stem de muziek af op het publiek en de sfeer. Verzoekjes zijn welkom en worden waar mogelijk ingewerkt. Als MC begeleid ik indien gewenst ook aankondigingen en ceremonies.",
      icon: <Music className="w-8 h-8" />
    },
    {
      step: "05",
      title: "AFBOUW & NAZORG",
      description: "Netjes afsluiten en evalueren",
      details: "Na afloop bouw ik de apparatuur netjes af. Optioneel stuur ik je een evaluatieformulier om de samenwerking te bespreken en te leren van jullie ervaring.",
      icon: <Star className="w-8 h-8" />
    }
  ];

  const benefits = [
    "Direct contact met de DJ – geen verhuurbedrijf of tussenpersonen",
    "Flexibel meedenken bij wijzigingen of onverwachte situaties",
    "Transparante communicatie en heldere afspraken",
    "Persoonlijke betrokkenheid van intake tot afbouw"
  ];

  const regions = [
    { name: "Rotterdam", href: "/regio/zuid-holland/rotterdam" },
    { name: "Den Haag", href: "/regio/zuid-holland/den-haag" },
    { name: "Utrecht", href: "/regio/utrecht" },
    { name: "Eindhoven", href: "/regio/noord-brabant" },
    { name: "Nijmegen", href: "/regio/gelderland" },
    { name: "Enschede", href: "/regio/overijssel" },
    { name: "Delft", href: "/regio/zuid-holland/delft" },
    { name: "Leiden", href: "/regio/zuid-holland/leiden" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-600 to-gray-700 text-white" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Cog className="w-16 h-16 mx-auto mb-6 text-gray-200" />
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            Werkwijze – van intake tot nazorg
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Van eerste contact tot afbouw: één aanspreekpunt, duidelijke stappen en persoonlijke betrokkenheid. Zo werkt samenwerken met DJ Kevin Froger.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/31645251333"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-black text-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 inline-block mr-3" />
              APP VOOR SNELLE PRIJSINDICATIE
            </a>
            <a
              href="/prijzen"
              className="border-3 border-white text-white px-10 py-5 rounded-full font-black text-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              VRAAG OFFERTE AAN
            </a>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              STAP VOOR <span className="block text-orange-500">STAP</span>
            </h2>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white mr-6">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-orange-500 font-black text-lg">{step.step}</div>
                      <h3 className="text-3xl font-black text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <p className="text-lg text-gray-500 leading-relaxed">{step.details}</p>
                </div>

                <div className="lg:w-1/2">
                  <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-blue-100 rounded-3xl flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              WAAROM DEZE <span className="block text-orange-500">WERKWIJZE?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Region Navigator */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">BOEK EEN DJ IN JOUW REGIO</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {regions.map((region) => (
              <a
                key={region.name}
                href={region.href}
                className="group bg-gray-50 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1"
              >
                <MapPin className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <h3 className="text-sm font-black text-gray-900 group-hover:text-orange-600 transition-colors">
                  {region.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mb-8 text-shadow">
              KLAAR OM <span className="block text-orange-500">TE STARTEN?</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Neem contact op en laten we jouw evenement perfect regelen.
            </p>
          </div>
          <ContactForm eventType="algemeen" />
        </div>
      </section>
    </div>
  );
};

export default WerkwijzePage;
