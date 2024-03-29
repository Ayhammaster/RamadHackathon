import React, { useState } from 'react';
import './login.css';
import { LoginHandler } from '../../../API/auth/login';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      LoginHandler(formData);
    } catch (error) {
      console.error('Error logging in:', error.message);
      // Display error flash message
      setFlashMessage(error.message);
      setFlashMessageType('error');
    }
  };  

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit} className='login-form'>
        <h2>تسجيل الدخول لترجمان</h2>
        <div className='login-input'>
          <label htmlFor="email">البريد الالكتروني:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='login-input'>
          <label htmlFor="password">كلمة المرور:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='login-button'>تسجيل الدخول</button>
        <a href="/reset-password">هل نسيت كلمة المرور؟</a>
      </form>
    </div>
  );
};

export default Login;