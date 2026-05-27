import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const serviceLinks = [
  { name: 'Bruiloft DJ',     href: '/bruiloft-dj' },
  { name: 'Verjaardag DJ',   href: '/verjaardag-dj' },
  { name: 'Evenementen DJ',  href: '/evenementen-dj' },
  { name: 'Zakelijk DJ',     href: '/zakelijk-dj' },
  { name: 'Werkwijze',       href: '/werkwijze' },
];

const navigation = [
  { name: 'Home',      href: '/' },
  { name: 'DJ Shows',  href: '#',   dropdown: serviceLinks },
  { name: 'Reviews',   href: '/reviews' },
  { name: 'Prijzen',   href: '/prijzen' },
  { name: 'Contact',   href: '/contact' },
];

const Header = () => {
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled,     setScrolled]     = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const bg = scrolled
    ? 'rgba(14,14,14,0.97)'
    : 'rgba(14,14,14,0.72)';

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: bg,
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Red accent line */}
      <div className="kf-header-accent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0" aria-label="Kevin Froger – Allround DJ">
            <img
              src="/images/kevin-logo.png"
              alt="Kevin Froger Allround DJ"
              className="h-9 lg:h-11 w-auto"
              width={200} height={44}
              loading="eager"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Hoofdmenu">
            {navigation.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-lg transition-colors"
                    style={{ color: 'rgba(255,255,255,0.70)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.70)')}
                  >
                    {item.name}
                    <ChevronDown size={13} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {servicesOpen && (
                    <div
                      className="absolute top-full left-0 w-52 py-2 z-50 mt-0.5"
                      style={{
                        background: '#181818',
                        border: '1px solid rgba(255,255,255,0.10)',
                        borderRadius: '14px',
                        boxShadow: '0 24px 60px rgba(0,0,0,0.65)',
                      }}
                    >
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.name}
                          to={d.href}
                          className="block px-4 py-2.5 text-sm font-semibold transition-colors"
                          style={{ color: 'rgba(255,255,255,0.60)' }}
                          onMouseEnter={e => {
                            e.currentTarget.style.color = '#fff';
                            e.currentTarget.style.background = 'rgba(230,0,0,0.10)';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.color = 'rgba(255,255,255,0.60)';
                            e.currentTarget.style.background = 'transparent';
                          }}
                        >
                          {d.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-4 py-2 text-sm font-semibold rounded-lg transition-colors"
                  style={{
                    color: location.pathname === item.href
                      ? '#ff7a00'
                      : 'rgba(255,255,255,0.70)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = location.pathname === item.href
                      ? '#ff7a00'
                      : 'rgba(255,255,255,0.70)';
                  }}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:0645251333"
            className="hidden lg:inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-full transition-all"
            style={{
              background: 'linear-gradient(135deg, #e60000, #ff7a00)',
              color: '#fff',
              boxShadow: '0 6px 20px rgba(230,0,0,0.30)',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            aria-label="Bel Kevin Froger"
          >
            <Phone size={14} />
            06 45 25 13 33
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(v => !v)}
            className="lg:hidden p-2 rounded-lg"
            style={{ color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.06)' }}
            aria-label={menuOpen ? 'Sluit menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden pb-4"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            background: 'rgba(14,14,14,0.99)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 pt-3 space-y-0.5">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => setServicesOpen(v => !v)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-xl"
                    style={{ color: 'rgba(255,255,255,0.70)' }}
                  >
                    {item.name}
                    <ChevronDown size={13} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="ml-4 mt-0.5 space-y-0.5 pb-1">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.name}
                          to={d.href}
                          className="block px-4 py-2.5 text-sm font-semibold rounded-xl"
                          style={{ color: 'rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.03)' }}
                        >
                          {d.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-3 text-sm font-semibold rounded-xl"
                  style={{
                    color: location.pathname === item.href ? '#ff7a00' : 'rgba(255,255,255,0.70)',
                  }}
                >
                  {item.name}
                </Link>
              )
            )}

            <div className="pt-3 pb-1">
              <a
                href="tel:0645251333"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold text-sm"
                style={{ background: 'linear-gradient(135deg,#e60000,#ff7a00)', color: '#fff' }}
              >
                <Phone size={16} /> 06 45 25 13 33
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
