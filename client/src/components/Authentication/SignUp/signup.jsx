import React, { useState } from 'react';
import './signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
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
      const response = await fetch('https://your-api-endpoint.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Signup successful
        setFormData({
          username: '',
          email: '',
          password: ''
        });
        // Display success flash message
        setFlashMessage(data.message);
        setFlashMessageType('success');
      } else {
        // Signup failed
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error signing up:', error.message);
      // Display error flash message
      setFlashMessage(error.message);
      setFlashMessageType('error');
    }
  };  

  return (
    <div className='signup-container'>
      {/* {flashMessage && (
        <div className={`flash-message ${flashMessageType === 'success' ? 'success-message' : 'error-message'}`}>
            {flashMessage}
        </div>
      )} */}
      <form onSubmit={handleSubmit} className='signup-form'>
        <h2>انشاء حساب على ترجمان</h2>
        <div className='signup-input'>
          <label htmlFor="username">اسم المستخدم:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className='signup-input'>
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
        <div className='signup-input'>
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
        <button type="submit" className='signup-button'>انشاء حساب</button>
      </form>
    </div>
  );
};

export default Signup;