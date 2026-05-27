import React, { useState } from 'react';
import {
  Send,
  CheckCircle,
  AlertCircle,
  Phone,
  MessageCircle,
} from 'lucide-react';

interface ContactFormProps {
  eventType?: string;
}

const inputClass = 'w-full px-4 py-2.5 rounded-lg text-white text-sm focus:outline-none focus:ring-2 transition-colors';
const inputErrorClass = 'w-full px-4 py-2.5 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors';
const labelClass = 'block text-sm font-semibold mb-1.5';
const inputStyle = {
  background: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(255,255,255,0.14)',
  color: 'var(--kf-text)',
} as React.CSSProperties;
const inputErrorStyle = {
  background: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(239,68,68,0.7)',
  color: 'var(--kf-text)',
} as React.CSSProperties;
const labelStyle = { color: 'rgba(255,255,255,0.75)' } as React.CSSProperties;

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
    message: '',
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
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
      setSubmitError(
        'Er is een fout opgetreden. Probeer het opnieuw of bel direct: 06 45 25 13 33'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center text-center py-8">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
          style={{ background: 'rgba(37,211,102,0.12)' }}
        >
          <CheckCircle size={32} style={{ color: '#25D366' }} />
        </div>
        <h3 className="text-xl font-black text-white mb-3">Bedankt!</h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--kf-text-muted)' }}>
          Je aanvraag is succesvol verzonden naar booking@kevinfroger.nl. Ik neem binnen 24 uur
          contact met je op voor een vrijblijvend gesprek over je evenement.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <a href="tel:0645251333" className="flex-1 kf-btn-primary">
            <Phone size={16} />
            Bel direct: 06 45 25 13 33
          </a>
          <button
            type="button"
            className="flex-1 kf-btn-secondary"
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
                message: '',
              });
            }}
          >
            Nieuwe aanvraag
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-6">
        <p className="kf-label">Aanvraagformulier</p>
        <h3 className="text-xl font-black text-white mb-1">Plan je feest met Kevin</h3>
        <p className="text-sm" style={{ color: 'var(--kf-text-muted)' }}>
          Velden met <span style={{ color: 'var(--kf-accent-gold)' }}>*</span> zijn verplicht. Reactie binnen 24 uur.
        </p>
      </div>

      <div className="space-y-4">
        {submitError && (
          <div
            className="flex items-start gap-3 p-4 rounded-lg text-sm"
            style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#fca5a5' }}
            role="alert"
          >
            <AlertCircle size={18} className="shrink-0 mt-0.5" />
            <span>{submitError}</span>
          </div>
        )}

        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className={labelClass} style={labelStyle}>
              Naam <span style={{ color: 'var(--kf-accent-gold)' }}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Jouw naam"
              autoComplete="name"
              className={errors.name ? inputErrorClass : inputClass}
              style={errors.name ? inputErrorStyle : inputStyle}
            />
            {errors.name && (
              <span className="flex items-center gap-1 mt-1.5 text-xs" style={{ color: '#fca5a5' }}>
                <AlertCircle size={12} />
                {errors.name}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="email" className={labelClass} style={labelStyle}>
              E-mail <span style={{ color: 'var(--kf-accent-gold)' }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="jouw@email.nl"
              autoComplete="email"
              className={errors.email ? inputErrorClass : inputClass}
              style={errors.email ? inputErrorStyle : inputStyle}
            />
            {errors.email && (
              <span className="flex items-center gap-1 mt-1.5 text-xs" style={{ color: '#fca5a5' }}>
                <AlertCircle size={12} />
                {errors.email}
              </span>
            )}
          </div>
        </div>

        {/* Phone & Event type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className={labelClass} style={labelStyle}>Telefoon</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="06 45 25 13 33"
              autoComplete="tel"
              className={inputClass}
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="eventType" className={labelClass} style={labelStyle}>
              Type evenement <span style={{ color: 'var(--kf-accent-gold)' }}>*</span>
            </label>
            <select
              id="eventType"
              name="eventType"
              required
              value={formData.eventType}
              onChange={handleChange}
              className={errors.eventType ? inputErrorClass : inputClass}
              style={errors.eventType ? inputErrorStyle : inputStyle}
            >
              <option value="">Selecteer type evenement</option>
              <option value="eventplan-scan">Eventplan-scan (gratis adviesgesprek)</option>
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
              <span className="flex items-center gap-1 mt-1.5 text-xs" style={{ color: '#fca5a5' }}>
                <AlertCircle size={12} />
                {errors.eventType}
              </span>
            )}
          </div>
        </div>

        {/* Date & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="eventDate" className={labelClass} style={labelStyle}>Datum evenement</label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className={inputClass}
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="location" className={labelClass} style={labelStyle}>Locatie / plaats</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Stad of locatie"
              className={inputClass}
              style={inputStyle}
            />
          </div>
        </div>

        {/* Guest count & Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="guestCount" className={labelClass} style={labelStyle}>Aantal gasten</label>
            <select
              id="guestCount"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              className={inputClass}
              style={inputStyle}
            >
              <option value="">Aantal gasten</option>
              <option value="0-25">0-25 gasten</option>
              <option value="25-50">25-50 gasten</option>
              <option value="50-100">50-100 gasten</option>
              <option value="100-200">100-200 gasten</option>
              <option value="200-500">200-500 gasten</option>
              <option value="500+">500+ gasten</option>
            </select>
          </div>

          <div>
            <label htmlFor="budget" className={labelClass} style={labelStyle}>Budget indicatie</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={inputClass}
              style={inputStyle}
            >
              <option value="">Budget indicatie</option>
              <option value="500-750">€500 - €750</option>
              <option value="750-1000">€750 - €1.000</option>
              <option value="1000-1500">€1.000 - €1.500</option>
              <option value="1500-2500">€1.500 - €2.500</option>
              <option value="2500+">€2.500+</option>
              <option value="overleg">In overleg</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClass} style={labelStyle}>Bericht / aanvullende info</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Vertel kort over je feest: tijden, wensen, muziekvoorkeur, locatie, etc."
            className={`${inputClass} resize-none`}
            style={inputStyle}
          />
        </div>

        {/* Submit row */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 kf-btn-primary disabled:opacity-60"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span
                  className="w-4 h-4 border-2 rounded-full animate-spin"
                  style={{ borderColor: 'rgba(22,4,12,0.3)', borderTopColor: '#16040C' }}
                />
                Versturen…
              </>
            ) : (
              <>
                <Send size={16} />
                Verstuur aanvraag
              </>
            )}
          </button>

          <a href="tel:0645251333" className="kf-btn-secondary">
            <Phone size={16} />
            Bel direct
          </a>

          <a
            href="https://wa.me/31645251333"
            target="_blank"
            rel="noopener noreferrer"
            className="kf-btn-secondary"
            style={{ color: '#25D366', borderColor: 'rgba(37,211,102,0.3)' }}
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>

        <p className="text-xs pt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Door dit formulier te versturen ga je akkoord met onze{' '}
          <a href="/privacy" className="underline transition-colors hover:text-white">privacyvoorwaarden</a>.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
