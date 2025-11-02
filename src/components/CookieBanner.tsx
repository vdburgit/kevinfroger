import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookies-accepted');
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#1f2937', color: 'white', padding: '1rem', zIndex: 9999, textAlign: 'center', contain: 'layout style' }}>
      <p style={{ margin: '0 0 1rem 0' }}>
        Deze website gebruikt cookies voor analytics en gebruikerservaring. <a href="/privacy" style={{ color: '#f97316' }}>Meer info</a>
      </p>
      <button onClick={acceptCookies} style={{ background: '#f97316', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontWeight: 'bold', cursor: 'pointer' }}>
        Accepteren
      </button>
    </div>
  );
};

export default CookieBanner;
