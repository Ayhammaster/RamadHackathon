import React from 'react';
import './InternalServerError.css';
import Torjoman from '/Images/Icons/logoWithSlogan.png';
import InternalServerErrorIcon from '/Images/Icons/error-500.png';

const InternalServerError = () => {
  return (
    <div id='InternalServerErrorContainer'>
        <div id='InternalServerErrorCompanyLogo'>
            <a href="/">
                <img src={Torjoman} alt="Company Logo" />
            </a>
        </div>
        <div id='InternalServerErrorContent'>
            <h1>500 - خطأ في الخادم الداخلي</h1>
            <p>نأسف للإزعاج، حدث خطأ في الخادم الداخلي. يرجى المحاولة مرة أخرى في وقت لاحق. يمكنك الوصول إلى الصفحة الرئيسية عبر هذا <a href="/">الرابط</a>.</p>
        </div>
        <div id="InternalServerErrorIcon">
            <img src={InternalServerErrorIcon} alt="Internal Server Error Icon" />
        </div>
    </div>
  );
};

export default InternalServerError;
