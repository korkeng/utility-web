import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  const logo = require('../assets/images/text.jpg');
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <a href="#">
            <img src={logo} />
          </a>
        </div>
        <a href="#" className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Ragnarok</a>
            </li>
            <li>
              <a href="#">Pangya</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <button className="log-in">Sign In</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
