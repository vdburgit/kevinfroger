import React, { useState } from 'react';
import { Send, Calendar, Users, MapPin, Clock, CheckCircle, AlertCircle, Phone, MessageCircle } from 'lucide-react';

interface ContactFormProps {
  eventType?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ eventType = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: eventType,
    eventDate: '',
    location: '',
    guestCount: '',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Naam is verplicht';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is verplicht';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ongeldig email adres';
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Type evenement is verplicht';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Er is iets misgegaan bij het verzenden van je bericht');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Er is een fout opgetreden. Probeer het opnieuw of bel direct: 06 45 25 13 33');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-black text-gray-900 mb-4">Dank je!</h3>
        <p className="text-lg text-gray-600 mb-8">
          We nemen snel contact op voor een vrijblijvend gesprek over je evenement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:0645251333"
            className="mobile-btn bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-bold"
            aria-label="Bel Kevin"
            title="Bel Kevin"
          >
            Bel Kevin: 06 45 25 13 33
          </a>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                eventType: eventType,
                eventDate: '',
                location: '',
                guestCount: '',
                budget: '',
                message: ''
              });
            }}
            className="mobile-btn border-2 border-gray-300 text-gray-700 hover:border-gray-400 transition-all duration-200 font-bold"
            aria-label="Nieuwe aanvraag"
            title="Nieuwe aanvraag"
          >
            Nieuwe aanvraag
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-10">
      <form onSubmit={handleSubmit} className="space-y-8">
        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start">
            <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-red-700 font-medium">{submitError}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="name" className="block text-base md:text-sm font-black text-gray-700 mb-3 tracking-wide">
              NAAM *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 md:px-6 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-semibold text-base ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Je naam"
              placeholder="Jouw naam"
            />
            {errors.name && (
              <div className="flex items-center mt-2 text-red-600">
                <AlertCircle className="w-4 h-4 mr-2" />
                <span className="text-base md:text-sm font-medium">Vul dit veld in</span>
              </div>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-base md:text-sm font-black text-gray-700 mb-3 tracking-wide">
              EMAIL *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 md:px-6 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-semibold text-base ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="je@email.nl"
              placeholder="jouw@email.nl"
            />
            {errors.email && (
              <div className="flex items-center mt-2 text-red-600">
                <AlertCircle className="w-4 h-4 mr-2" />
                <span className="text-base md:text-sm font-medium">Vul een geldig e-mailadres in</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="phone" className="block text-base md:text-sm font-black text-gray-700 mb-3 tracking-wide">
              TELEFOON
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 md:px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-semibold text-base"
              placeholder="Je telefoonnummer"
              placeholder="Jouw telefoonnummer"
            />
          </div>
          <div>
            <label htmlFor="eventType" className="block text-base md:text-sm font-black text-gray-700 mb-3 tracking-wide">
              <Calendar className="w-4 h-4 inline-block mr-2" />
              SOORT EVENEMENT *
            </label>
            <select
              id="eventType"
              name="eventType"
              required
              value={formData.eventType}
              onChange={handleChange}
              className={`w-full px-4 md:px-6 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-semibold text-base ${
                errors.eventType ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Kies je evenement</option>
              <option value="bruiloft">Bruiloft</option>
              <option value="bedrijfsfeest">Bedrijfsfeest</option>
              <option value="festival">Festival</option>
              <option value="prive">Privé feest</option>
              <option value="jubileum">Jubileum</option>
              <option value="verjaardag">Verjaardag</option>
              <option value="sportfeest">Sportfeest</option>
              <option value="anders">Anders</option>
            </select>
            {errors.eventType && (
              <div className="flex items-center mt-2 text-red-600">
                <AlertCircle className="w-4 h-4 mr-2" />
                <span className="text-base md:text-sm font-medium">Vul dit veld in</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="eventDate" className="block text-sm font-black text-gray-700 mb-3 tracking-wide">
              <Clock className="w-4 h-4 inline-block mr-2" />
              DATUM VAN JE EVENT
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-semibold"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-black text-gray-700 mb-3 tracking-wide">
              <MapPin className="w-4 h-4 inline-block mr-2" />
              LOCATIE OF PLAATS
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-semibold"
              placeholder="Locatie of plaats"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="guestCount" className="block text-sm font-black text-gray-700 mb-3 tracking-wide">
              <Users className="w-4 h-4 inline-block mr-2" />
              HOEVEEL GASTEN
            </label>
            <select
              id="guestCount"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-semibold"
            >
              <option value="">Hoeveel gasten</option>
              <option value="0-25">0-25 gasten</option>
              <option value="25-50">25-50 gasten</option>
              <option value="50-100">50-100 gasten</option>
              <option value="100-200">100-200 gasten</option>
              <option value="200-500">200-500 gasten</option>
              <option value="500+">500+ gasten</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-black text-gray-700 mb-3 tracking-wide">
              JE BUDGET
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-semibold"
            >
              <option value="">Je budget</option>
              <option value="500-750">€500 - €750</option>
              <option value="750-1000">€750 - €1.000</option>
              <option value="1000-1500">€1.000 - €1.500</option>
              <option value="1500-2500">€1.500 - €2.500</option>
              <option value="2500+">€2.500+</option>
              <option value="overleg">In overleg</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-black text-gray-700 mb-3 tracking-wide">
            VERTEL KORT WAT JE ZOEKT
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none font-semibold"
            placeholder="Vertel kort wat je zoekt"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md md:shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-bold md:font-black text-base md:text-lg flex items-center justify-center min-h-[48px] md:min-h-[60px] rounded-lg md:rounded-2xl px-4 md:px-8 py-3 md:py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 md:mr-3"></div>
                <span className="tracking-wide">Versturen...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                <span className="tracking-wide">Versturen</span>
              </>
            )}
          </button>
          
          <a
            href="tel:0645251333"
            className="flex-1 sm:flex-none border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-bold md:font-black text-base md:text-lg flex items-center justify-center min-h-[48px] md:min-h-[60px] rounded-lg md:rounded-2xl shadow-md hover:shadow-blue-500/20 transform hover:scale-105 bg-blue-50 hover:bg-blue-600 group px-4 md:px-6 py-3 md:py-4 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            aria-label="Bel Kevin"
            title="Bel Kevin"
          >
            <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2 md:mr-3 group-hover:bg-white group-hover:text-blue-600 transition-all duration-300">
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
            </div>
            <span className="tracking-wide">Bel Kevin</span>
          </a>
          
          <a
            href="https://api.whatsapp.com/send/?phone=31645251333&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 font-bold md:font-black text-base md:text-lg flex items-center justify-center min-h-[48px] md:min-h-[60px] rounded-lg md:rounded-2xl shadow-md hover:shadow-green-500/20 transform hover:scale-105 bg-green-50 hover:bg-green-600 group px-4 md:px-6 py-3 md:py-4 focus:outline-none focus:ring-4 focus:ring-green-500/50"
            aria-label="App direct met Kevin"
            title="App direct met Kevin"
          >
            <div className="w-6 h-6 md:w-8 md:h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-2 md:mr-3 group-hover:bg-white group-hover:text-green-600 transition-all duration-300">
              <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
            </div>
            <span className="tracking-wide">App direct</span>
          </a>
        </div>

        <div className="text-center text-base md:text-sm text-gray-500 pt-4">
          <p>We gebruiken je gegevens alleen om je aanvraag te beantwoorden. <a href="/privacy" className="text-blue-600 hover:underline">Meer info</a>.</p>
          <p>Door dit formulier te versturen ga je akkoord met ons <a href="/privacy" className="text-blue-600 hover:underline">privacybeleid</a>.</p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;