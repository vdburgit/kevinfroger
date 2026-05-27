import { MessageCircle, Phone } from 'lucide-react';

const MobileCTA = () => (
  <div
    className="fixed bottom-3 left-3 right-3 z-40 flex gap-2.5 md:hidden"
    aria-label="Snel contact"
  >
    <a
      href="https://wa.me/31645251333"
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 font-bold text-sm py-3.5 rounded-full shadow-lg transition-opacity"
      style={{ background: '#25D366', color: '#fff' }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '0.90')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      aria-label="WhatsApp DJ Kevin Froger"
    >
      <MessageCircle size={17} /> WhatsApp
    </a>
    <a
      href="tel:0645251333"
      className="flex-1 flex items-center justify-center gap-2 font-bold text-sm py-3.5 rounded-full shadow-lg transition-opacity"
      style={{ background: 'linear-gradient(135deg,#e60000,#ff7a00)', color: '#fff' }}
      onMouseEnter={e => (e.currentTarget.style.opacity = '0.90')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      aria-label="Bel DJ Kevin Froger"
    >
      <Phone size={17} /> Bel direct
    </a>
  </div>
);

export default MobileCTA;
