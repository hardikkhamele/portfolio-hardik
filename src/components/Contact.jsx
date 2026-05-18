import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('');

  const trackClick = (platform) => {
    const stats = JSON.parse(localStorage.getItem('portfolio_stats') || '{}');
    stats[platform] = (stats[platform] || 0) + 1;
    localStorage.setItem('portfolio_stats', JSON.stringify(stats));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const messages = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
    messages.push({ ...formData, date: new Date().toISOString() });
    localStorage.setItem('portfolio_messages', JSON.stringify(messages));
    
    // Also track query count
    const stats = JSON.parse(localStorage.getItem('portfolio_stats') || '{}');
    stats['queries'] = (stats['queries'] || 0) + 1;
    localStorage.setItem('portfolio_stats', JSON.stringify(stats));

    setSubmitStatus('Message sent successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitStatus(''), 3000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="contact-subtitle">Let's build something amazing together.</h3>
            <p className="contact-text">
              I'm always open to discussing product design work or partnership opportunities. Feel free to reach out using the details below or fill out the form.
            </p>

            <div className="contact-details">
              <a href="https://wa.me/919371155111" target="_blank" rel="noopener noreferrer" className="contact-item" onClick={() => trackClick('WhatsApp')}>
                <div className="icon-box glass"><FaWhatsapp /></div>
                <div className="item-content">
                  <span className="item-title">Call or WhatsApp</span>
                  <span className="item-value">+91 9371155111</span>
                </div>
              </a>
              <a href="mailto:Hardikkhamele@gmail.com" className="contact-item" onClick={() => trackClick('Email')}>
                <div className="icon-box glass"><FaEnvelope /></div>
                <div className="item-content">
                  <span className="item-title">Email</span>
                  <span className="item-value">Hardikkhamele@gmail.com</span>
                </div>
              </a>
              <a href="https://maps.google.com/?q=Nagpur,+Maharashtra,+India" target="_blank" rel="noreferrer" className="contact-item" onClick={() => trackClick('Location')}>
                <div className="icon-box glass"><FaMapMarkerAlt /></div>
                <div className="item-content">
                  <span className="item-title">Location</span>
                  <span className="item-value">Nagpur, Maharashtra, India</span>
                </div>
              </a>
            </div>

            <div className="social-links">
              <p className="social-title">Contact me on</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/hardik-khamele" target="_blank" rel="noreferrer" className="social-icon" onClick={() => trackClick('LinkedIn')}><FaLinkedin /></a>
                <a href="https://github.com/hardikkhamele" target="_blank" rel="noreferrer" className="social-icon" onClick={() => trackClick('GitHub')}><FaGithub /></a>
                <a href="https://www.instagram.com/hardik.ft?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="social-icon" onClick={() => trackClick('Instagram')}><FaInstagram /></a>
                <a href="https://x.com/hardikkhamele" target="_blank" rel="noreferrer" className="social-icon" onClick={() => trackClick('Twitter')}><FaXTwitter /></a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container glass"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" id="name" value={formData.name} onChange={handleChange} className="input-field" placeholder=" " required />
                <label htmlFor="name" className="input-label">Your Name</label>
              </div>
              <div className="input-group">
                <input type="email" id="email" value={formData.email} onChange={handleChange} className="input-field" placeholder=" " required />
                <label htmlFor="email" className="input-label">Your Email</label>
              </div>
              <div className="input-group">
                <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="input-field" placeholder=" " required />
                <label htmlFor="phone" className="input-label">Your Phone</label>
              </div>
              <div className="input-group">
                <textarea id="message" value={formData.message} onChange={handleChange} className="input-field" rows="4" placeholder=" " required></textarea>
                <label htmlFor="message" className="input-label">Your Message</label>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
              {submitStatus && <p style={{ color: '#4ade80', marginTop: '1rem', textAlign: 'center' }}>{submitStatus}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
