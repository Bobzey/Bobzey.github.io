import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Make sure to import the CSS

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setShowNavbar(false); // hide navbar
    } else {
      setShowNavbar(true); // show navbar
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={showNavbar ? 'navbar visible' : 'navbar hidden'}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/fiction">Fiction</a></li>
        <li><a href="/docs">Documentaries</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
