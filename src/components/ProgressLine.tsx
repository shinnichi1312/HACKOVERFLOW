import React, { useState, useEffect } from 'react';

function ScrollAnimatedLine() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPercentage = (scrollPosition / (document.body.scrollHeight - windowHeight)) * 100;

      // Adjust animation based on scroll percentage
      if (scrollPercentage > 25 && scrollPercentage < 75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-1 z-10">
      <div className={`h-screen w-1 bg-gradient-to-b from-transparent to-[rgb(51,179,154)] ${isVisible ? 'animate-slide-top' : ''}`}></div>
    </div>
  );
}

export default ScrollAnimatedLine;
