// FadingBackground.js
import React, { useState, useEffect } from 'react';

const FadingBackground = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fading-background"
      style={{
        backgroundImage: `url('your-image-path')`, // replace with your image path
        opacity: 1 - scrollPosition / 500, // adjust the divisor for the fading speed
      }}
    />
  );
};

export default FadingBackground;
