import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/fiction">Fiction</a></li>
        <li><a href="/docs">Documentaries</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;