import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Contact.css'; // Reusing some styles

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ id: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.id === 'mumbaiMH01' && credentials.password === '7004') {
      localStorage.setItem('portfolio_admin_auth', 'true');
      navigate('/dashboard');
    } else {
      setError('Invalid ID or Password');
    }
  };

  return (
    <section className="section contact-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ maxWidth: '500px' }}>
        <motion.div 
          className="contact-form-container glass"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Admin Login</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" id="id" value={credentials.id} onChange={handleChange} className="input-field" placeholder=" " required />
              <label htmlFor="id" className="input-label">Login ID</label>
            </div>
            <div className="input-group">
              <input type="password" id="password" value={credentials.password} onChange={handleChange} className="input-field" placeholder=" " required />
              <label htmlFor="password" className="input-label">Password</label>
            </div>
            {error && <p style={{ color: '#ef4444', marginBottom: '1rem', textAlign: 'center' }}>{error}</p>}
            <button type="submit" className="btn btn-primary submit-btn">
              Login
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default AdminLogin;
