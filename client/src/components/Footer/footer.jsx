import React from 'react';
import './footer.css'; 
import Torjoman from '/Images/Icons/logoWithSlogan.png'
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div id='footerLogo'>
          <a href="/">
            <img src={Torjoman} alt="Company Logo" className="logo" loading="lazy" />
          </a>
          <br />
        </div>
            <div className="footer-content">
                <h3>روابط هامة</h3>
                <p><a href="/terms-and-conditions" target='_blank'>الشروط و الأحكام </a></p> <br />
                <p><a href="/intellectual-property" target="_blank">حقوق الملكية الفكرية </a></p> <br />
                <p><a href="/privacy-policy" target="_blank">سياسات الخصوصية</a></p> <br />
            </div>
  
            <div className="footer-content" id='followUs'>
                <h3>تواصل معنا</h3>
                <div id='iconsContainer'>
                  <a href="https://www.linkedin.com/in/ayham-ahmad-2787bb1b3/" target='_blank'>
                    <FaLinkedin className='linkedinIconReact' />
                  </a>
                  <a href="https://www.linkedin.com/in/abdullasadoun/" target='_blank'>
                    <FaLinkedin className='linkedinIconReact' />
                  </a>
                  <a href="https://www.linkedin.com/in/ibrahim-abu-eita-0b2490206/" target='_blank'>
                    <FaLinkedin className='linkedinIconReact' />
                  </a>
                </div>
            </div>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br />
        <p className="copyright">© 2024 . كل الحقوق محفوظة لترجمان.</p>
        <br />
        <p id='hema'> Made by Suhur Squad: 
          <a href="https://www.linkedin.com/in/ayham-ahmad-2787bb1b3/" target='_blank'>
            Ayham Ahmed (Mr. Code)
          </a> & 
          <a href="https://www.linkedin.com/in/abdullasadoun/" target="_blank"> 
            Abdullah Sadoun
          </a> & 
          <a href="https://www.linkedin.com/in/ibrahim-abu-eita-0b2490206/" target="_blank"> 
            Ibrahim Abu Eita
          </a>
        </p>
    </footer>
  );
}

export default Footer;