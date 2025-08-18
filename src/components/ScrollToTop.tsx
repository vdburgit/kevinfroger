import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Optimize scroll behavior for performance
    const scrollOptions: ScrollIntoViewOptions = {
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    };
    
    if (hash) {
      // If there's a hash, scroll to the element with that ID
      const element = document.getElementById(hash.substring(1));
      if (element) {
        // Small delay to ensure the page has rendered
        requestAnimationFrame(() => {
          element.scrollIntoView(scrollOptions);
        }, 100);
      }
    } else {
      // No hash, scroll to top
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;