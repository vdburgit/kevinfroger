import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const MobileCTA = () => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://api.whatsapp.com/send/?phone=31645251333&text&type=phone_number&app_absent=0';
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:0645251333';
  };

  // Optimize event listeners for performance
  React.useEffect(() => {
    // Remove unused scroll listener for performance
  }, []);

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <div className="flex gap-2 max-w-sm mx-auto">
        <button
          onClick={handleWhatsAppClick}
          className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-green-500/50 min-h-[48px]"
          aria-label="App direct met Kevin"
        >
          <MessageCircle className="w-4 h-4 flex-shrink-0" />
          <span className="font-bold">App direct</span>
        </button>
        <button
          onClick={handleCallClick}
          className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 min-h-[48px]"
          aria-label="Bel Kevin"
          aria-label="Bel DJ Kevin Froger op 06 45 25 13 33"
        >
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span className="font-bold">Bel Kevin</span>
        </button>
      </div>
    </div>
  );
};

export default MobileCTA;