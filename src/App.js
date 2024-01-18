// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact'
import Docs from './Docs';
import Fiction from './Fiction';
import './Navbar.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/fiction">Fiction</Link></li>
            <li><Link to="/docs">Documentaries</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/docs" element={< Docs/>} />
          <Route path="/fiction" element={<Fiction />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
