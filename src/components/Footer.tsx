import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  const services = [
    { name: 'Bruiloft DJ',    href: '/bruiloft-dj' },
    { name: 'Verjaardag DJ',  href: '/verjaardag-dj' },
    { name: 'Evenementen DJ', href: '/evenementen-dj' },
    { name: 'Zakelijk DJ',    href: '/zakelijk-dj' },
    { name: 'Werkwijze',      href: '/werkwijze' },
    { name: 'Prijzen',        href: '/prijzen' },
  ];

  const links = [
    { name: 'Home',       href: '/' },
    { name: 'Portfolio',  href: '/portfolio' },
    { name: 'Biografie',  href: '/biografie' },
    { name: 'Reviews',    href: '/reviews' },
    { name: 'FAQ',        href: '/faq' },
    { name: 'Contact',    href: '/contact' },
  ];

  const socials = [
    { href: 'https://www.facebook.com/KevinFroger.nl',             icon: <Facebook size={15} />,    label: 'Facebook' },
    { href: 'https://www.instagram.com/djkevinfroger/',             icon: <Instagram size={15} />,   label: 'Instagram' },
    { href: 'https://www.youtube.com/@KEVINFROGER',                 icon: <Youtube size={15} />,     label: 'YouTube' },
    { href: 'https://www.linkedin.com/in/kevin-froger-b23aa263/',   icon: <Linkedin size={15} />,    label: 'LinkedIn' },
    { href: 'https://wa.me/31645251333',                            icon: <MessageCircle size={15}/>, label: 'WhatsApp' },
  ];

  return (
    <footer style={{ background: '#0e0e0e', borderTop: '1px solid rgba(255,255,255,0.07)', color: 'var(--kf-text)', position: 'relative' }}>

      {/* Warm radial glow near the top */}
      <div className="kf-footer-glow" />

      {/* Top accent */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #b80000 0%, #e60000 30%, #ff7a00 60%, #ffd000 100%)', position: 'relative', zIndex: 1 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/images/kevin-logo.png"
              alt="Kevin Froger Allround DJ"
              className="h-11 w-auto mb-5"
              width={200} height={44}
              loading="lazy"
            />
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.52)' }}>
              Allround DJ Kevin Froger — professionele DJ-shows voor bruiloften, bedrijfsfeesten, verjaardagen en evenementen door heel Nederland.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center transition-all duration-200"
                  style={{
                    width: '34px', height: '34px',
                    borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.10)',
                    background: 'rgba(255,255,255,0.04)',
                    color: 'rgba(255,255,255,0.50)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'linear-gradient(135deg,#e60000,#ff7a00)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.50)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: '#ff7a00' }}>
              Diensten
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.name}>
                  <Link to={s.href} className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.50)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.50)')}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: '#ff7a00' }}>
              Navigatie
            </h3>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.50)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.50)')}
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest mb-4" style={{ color: '#ff7a00' }}>
              Contact
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="tel:0645251333" className="flex items-center gap-2.5 text-sm transition-colors"
                   style={{ color: 'rgba(255,255,255,0.50)' }}
                   onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                   onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.50)')}
                >
                  <Phone size={13} style={{ color: '#e60000', flexShrink: 0 }} />
                  06 45 25 13 33
                </a>
              </li>
              <li>
                <a href="mailto:kevin@kevinfroger.nl" className="flex items-center gap-2.5 text-sm transition-colors"
                   style={{ color: 'rgba(255,255,255,0.50)' }}
                   onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                   onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.50)')}
                >
                  <Mail size={13} style={{ color: '#e60000', flexShrink: 0 }} />
                  kevin@kevinfroger.nl
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <MapPin size={13} style={{ color: '#e60000', flexShrink: 0, marginTop: '3px' }} />
                Heel Nederland · vanuit Hoeksche Waard
              </li>
            </ul>
            <a
              href="https://wa.me/31645251333"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-opacity"
              style={{ background: '#25D366', color: '#fff' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>
        </div>

        {/* Region mention */}
        <div className="mt-10 pt-6 pb-4 text-xs text-center" style={{ color: 'rgba(255,255,255,0.30)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          Allround DJ in Zuid-Holland · Noord-Brabant · Gelderland · Utrecht · Overijssel · Noord-Holland · Zeeland
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.30)' }}>
          <span>© {year} Kevin Froger · Allround DJ Nederland</span>
          <span className="flex gap-5">
            <Link to="/privacy" onMouseEnter={e => (e.currentTarget.style.color = '#fff')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.30)')} className="transition-colors">Privacy</Link>
            <Link to="/algemene-voorwaarden" onMouseEnter={e => (e.currentTarget.style.color = '#fff')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.30)')} className="transition-colors">Algemene voorwaarden</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
