import React, { useState } from 'react';
import './header.css';

import Torjoman from '/Images/Icons/logoWithSlogan.png'

const Header = () => {
  const [navListActive, setNavListActive] = useState(false);

  return (
    <header className="header">
      <nav className={`navbar ${navListActive ? 'active' : ''}`}>
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