import React, { useState } from 'react';
import './reset.css';
import { IoCloseSharp } from "react-icons/io5";

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Password reset requested for email: ${email}`);
    setMessage('تم ارسال رسال تغيير كلمة المرور على بريدك الالكتروني.');
    setEmail('');
  };

  const closePopup = () => {
    document.getElementById('successDiv').style.display = 'none';
  };

  return (
    <div className="reset-password-container">
      <h2>تغيير كلمة المرور</h2>
      {message &&
        <div id='successDiv'>
            <p className="success-message">
                <IoCloseSharp id='successXicon' onClick={closePopup} />
                {message}
            </p>
        </div> 
      }
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>بريدك الالكتروني :</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="form-control"
          />
        </div>
        <div id="buttonDiv">
            <button type="submit" className="btn btn-primary">
                ارسال
            </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;