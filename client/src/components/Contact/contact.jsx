import React from 'react';
import './contact.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>تواصل معنا</h2>
      <p>اذا كان لديك أي سؤال, أرسل لنا رسالة: </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">اسمك:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">بريدك الالكتروني:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">رسالتك:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.log(data);
};

export default ContactUs;