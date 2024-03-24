import React from 'react';
import './NotFound.css'
import Torjoman from '/Images/Icons/logoWithSlogan.png'
import NotFoundIcon from '/Images/Icons/error-404.png'

const NotFound = () => {
  return (
    <div id='NotFoundContainer'>
        <div id='NotFoundCompanyLogo'>
            <a href="/">
                <img src={Torjoman} alt="Company Logo" />
            </a>
        </div>
        <div id='NotFoundContent'>
            <h1>404 - الصفحة ليست موجودة مع الأسف</h1>
            <p>نأسف لعدم توفر اي خدمة على هذا الرابط, يمكنك الوصول الى الصفحة الرئيسية عبر هذا <a href="/">الرابط</a>.</p>
        </div>
        <div id="NotFoundIcon">
            <img src={NotFoundIcon} alt="Not Found Icon" />
        </div>
    </div>
  );
};

export default NotFound;