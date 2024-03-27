import React, { useState, useEffect  } from 'react';
import './header.css';
import './toggle.css';

import Torjoman from '/Images/Icons/logoWithSlogan.png'

const Header = () => {
  const [navListActive, setNavListActive] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Retrieve dark mode preference from local storage, default to false if not available
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    // Update local storage when dark mode preference changes
    localStorage.setItem('darkMode', isDarkMode);
    // Add or remove 'darkmoderoot' class to the body based on dark mode preference
    document.body.classList.toggle('lightmoderoot', isDarkMode);
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  };


  return (
    <header className="header">
      <nav className={`navbar ${navListActive ? 'active' : ''}`}>
      <form id="toggleform">
        <input 
          onChange={handleDarkModeToggle}  
          id="dark-mode" 
          className="toggle" 
          type="checkbox" 
          name="Dark mode" 
          role="switch" 
          value="on"
        />
        <label for="dark-mode" className="sr">Dark Mode</label>
        <div className="curtain"></div>
      </form>
        <ul className="nav-list">
          <li className="nav-item"><a href="/" className="nav-link">الصفحة الرئيسية</a></li>
          <li className="nav-item"><a href="/about-us" className="nav-link">من نحن</a></li>
          <li className="nav-item" id='contactsNav'><a href="/chatting" className="nav-link">تواصل معنا</a></li>
        </ul>
        <div id='vlogoDiv'>
          <img src={Torjoman} alt="Company Logo" className="vidLogo" loading="lazy" />
        </div>
      </nav>
    </header>
  );
}

export default Header;