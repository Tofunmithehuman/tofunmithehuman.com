import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-white/80 text-black p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 z-50 hover:scale-110 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;