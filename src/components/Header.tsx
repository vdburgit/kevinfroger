import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'HOME', href: '/' },
    { 
      name: 'DIENSTEN', 
      href: '#',
      dropdown: [
        { name: 'Alle Evenementen', href: '/evenementen' },
        { name: 'Bruiloften', href: '/bruiloften' },
        { name: 'Bedrijfsfeesten', href: '/bedrijfsfeesten' },
        { name: 'Festivals', href: '/festivals' },
        { name: 'Privé Feesten', href: '/prive-feesten' },
        { name: 'Sportfeesten', href: '/sportfeesten' }
      ]
    },
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'PRIJZEN', href: '/prijzen' },
    { name: 'BIOGRAFIE', href: '/biografie' },
    { name: 'FAQ', href: '/faq' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = (href: string) => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
    
    // Handle hash links
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      if (path === '' || path === location.pathname) {
        // Same page, just scroll to element
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
      // For different pages with hash, let React Router handle it
    }
  };

  return (
    <>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm shadow-lg'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 lg:py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src="/images/kevin-logo.png" 
                alt="DJ Kevin Froger Logo" 
                className="h-8 md:h-12 lg:h-16 w-auto group-hover:scale-105 transition-transform duration-200 drop-shadow-lg"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button 
                        className="flex items-center px-4 py-2 text-sm font-black tracking-wide transition-all duration-200 text-gray-900 hover:text-orange-500"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsServicesOpen(!isServicesOpen);
                        }}
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                      
                      <div 
                        className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 z-50 transition-all duration-300 ${
                          isServicesOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                        }`}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-6 py-3 text-sm font-bold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200"
                            onClick={() => handleLinkClick(dropdownItem.href)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-4 py-2 text-sm font-black tracking-wide transition-all duration-200 relative group ${
                        isActive(item.href)
                          ? 'text-orange-500'
                          : 'text-gray-900 hover:text-orange-500'
                      }`}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform transition-transform duration-200 ${
                        isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}></span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full font-black text-sm tracking-wide hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                BOEKEN
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-gray-900 hover:text-orange-500 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open mobiel menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-200 bg-white shadow-xl">
              <div className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <div className="px-4 py-3 text-lg font-black tracking-wide text-gray-900 mobile-nav-item">
                          {item.name}
                        </div>
                        <div className="pl-6 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-4 py-3 text-base font-bold text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-xl transition-all duration-200 mobile-nav-item"
                              onClick={() => handleLinkClick(dropdownItem.href)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`px-4 py-3 text-lg font-black tracking-wide rounded-xl transition-all duration-200 mobile-nav-item ${
                          isActive(item.href)
                            ? 'text-orange-500 bg-orange-50'
                            : 'text-gray-900 hover:text-orange-500 hover:bg-orange-50'
                        }`}
                        onClick={() => handleLinkClick(item.href)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="pt-6 mt-4 border-t border-gray-200 space-y-3">
                  <Link
                    to="/contact"
                    className="block px-4 py-3 text-gray-800 hover:text-orange-500 transition-colors text-base font-semibold bg-gray-50 rounded-xl text-center"
                  >
                    Contact & Boeken
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;