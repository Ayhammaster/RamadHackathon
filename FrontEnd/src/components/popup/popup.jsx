import React, { useState } from 'react';
import './popup.css'; 
import { IoCloseSharp } from "react-icons/io5";
import { LuMousePointerClick } from "react-icons/lu";

import LoginComponent from '../Authentication/Login/login';
import SingUpComponent from '../Authentication/SignUp/signup'

const PopUp = () => {
  const [isBodyContentVisible, setIsBodyContentVisible] = useState(true);

  const toggleBodyContent = () => {
    setIsBodyContentVisible(!isBodyContentVisible);
  };

  const closePopup = () => {
    document.getElementById('popUpWindow').classList.remove('active');
  };

  return (
    <div className="custom-component" id='popUpWindow'>
      <div className="custom-header">
        <span className="slider-button" onClick={toggleBodyContent}>
            <LuMousePointerClick />
            {isBodyContentVisible ? (
                'انشاء حساب'
            ) : (
                'تسجيل دخول'
            )}
        </span>
      </div>
      <div className="body-content">
        {isBodyContentVisible ? (
          <LoginComponent className="authentication-component"/>
        ) : (
          <SingUpComponent />
        )}
        
      </div>
      <div id="closingIconDiv">
        <IoCloseSharp id='closeIcon' onClick={closePopup} />
      </div>
    </div>
  );
};

export default PopUp;
