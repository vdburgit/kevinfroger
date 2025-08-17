import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const GoogleReviewsSection = () => {
  const averageRating = 5.0;
  const totalReviews = 47;

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
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
