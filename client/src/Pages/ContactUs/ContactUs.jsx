import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email');
      });

    setName('');
    setEmail('');
    setMessage('');
  };

  const sendWhatsAppMessage = () => {
    const whatsappLink = `https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;
    window.open(whatsappLink, '_blank');
  };

  const handleSubmit = (e) => {
    sendEmail(e);
    sendWhatsAppMessage();
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Message:
          <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
