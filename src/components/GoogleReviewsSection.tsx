import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink, MapPin } from 'lucide-react';

const GoogleReviewsSection = () => {
  const averageRating = 5.0;
  const totalReviews = 50;

  return (
    <section className="py-32 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 text-shadow-lg">
            GOOGLE
            <span className="block text-white">REVIEWS</span>
          </h2>
          
          {/* Google Rating Summary */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <div className="text-center">
              <div className="text-6xl font-black text-white mb-2">{averageRating}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-300 fill-current" />
                ))}
              </div>
              <div className="text-white/90 font-semibold">Gemiddelde beoordeling</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-black text-white mb-2">{totalReviews}</div>
              <div className="text-white/90 font-semibold">Google Reviews</div>
            </div>
          </div>

          <a
            href="https://www.google.com/search?sca_esv=316e97512ac41894&tbm=lcl&sxsrf=AE3TifPl6d0UBvRF7JUysAXISgoWwjesww:1755115764401&q=Dj+Kevin+Froger+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDY3tDAxMjE2M7ewNDUwNzY3M97AyPiKUdwlS8E7tSwzT8GtKD89tUghCMhJLS9exIpLBgAHDUjNTwAAAA&rldimm=13718424367895073763&hl=nl-NL&sa=X&ved=2ahUKEwil4bTdy4iPAxUdlP0HHXrgFZ4Q9fQKegQIWBAF&biw=2552&bih=1284&dpr=1#lkt=LocalPoiReviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-black text-lg hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            BEKIJK ALLE GOOGLE REVIEWS
          </a>
        </div>

        {/* Google Reviews Info Box */}
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Quote className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">
              BEKIJK ONZE GOOGLE REVIEWS
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Lees wat onze klanten zeggen over hun ervaring met DJ Kevin Froger. 
              Van bruiloften tot bedrijfsfeesten - ontdek waarom zij ons aanbevelen.
            </p>
            <a
              href="https://www.google.com/search?sca_esv=316e97512ac41894&tbm=lcl&sxsrf=AE3TifPl6d0UBvRF7JUysAXISgoWwjesww:1755115764401&q=Dj+Kevin+Froger+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDY3tDAxMjE2M7ewNDUwNzY3M97AyPiKUdwlS8E7tSwzT8GtKD89tUghCMhJLS9exIpLBgAHDUjNTwAAAA&rldimm=13718424367895073763&hl=nl-NL&sa=X&ved=2ahUKEwil4bTdy4iPAxUdlP0HHXrgFZ4Q9fQKegQIWBAF&biw=2552&bih=1284&dpr=1#lkt=LocalPoiReviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-black text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Star className="w-5 h-5 mr-2" />
              LEES GOOGLE REVIEWS
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GoogleReviewsSection;