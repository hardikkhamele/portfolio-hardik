import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaBriefcase, FaEye, FaTimes } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [showCV, setShowCV] = useState(false);

  return (
    <section id="home" className="section home-section">
      <div className="container home-container">
        <motion.div 
          className="home-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div 
            className="availability-badge"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="dot"></span> Open to work Pan India (Rotational Shift)
          </motion.div>
          
          <h1 className="home-title">
            <span className="greeting">Hello, I'm</span><br />
            Hardik
          </h1>
          <h2 className="home-subtitle">Full Stack Developer <span className="divider">|</span> Web App Developer</h2>
          
          <div className="code-window glass">
            <div className="window-header">
              <span className="btn-mac close"></span>
              <span className="btn-mac min"></span>
              <span className="btn-mac max"></span>
            </div>
            <pre className="code-content">
              <code>
                <span className="keyword">const</span> <span className="variable">developer</span> <span className="operator">=</span> {'{\n'}
                {'  '}name: <span className="string">"Hardik"</span>,\n
                {'  '}role: <span className="string">"MERN Stack Developer"</span>,\n
                {'  '}vibe: <span className="string">"Luxury Aesthetic"</span>,\n
                {'  '}passion: <span className="string">"Building seamless web apps"</span>\n
                {'}'};
              </code>
            </pre>
          </div>

          <div className="home-actions">
            <a href="#contact" className="btn btn-primary">
              <FaBriefcase /> Hire Me
            </a>
            <button className="btn btn-outline" onClick={() => setShowCV(true)}>
              <FaEye /> View CV
            </button>
            <a href="/Hardik_New_CV.pdf" className="btn btn-outline" download onClick={() => {
              const downloads = parseInt(localStorage.getItem('portfolio_cv_downloads') || '0', 10);
              localStorage.setItem('portfolio_cv_downloads', downloads + 1);
            }}>
              <FaDownload /> Download CV
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="home-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="portrait-container">
            <img src="/profile.jpg" alt="Hardik" className="portrait-img" />
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showCV && (
          <motion.div 
            className="cv-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCV(false)}
          >
            <motion.div 
              className="cv-modal-content"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="cv-modal-close" onClick={() => setShowCV(false)}>
                <FaTimes />
              </button>
              <iframe 
                src="/Hardik_New_CV.pdf#toolbar=0" 
                title="Hardik CV" 
                className="cv-iframe"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Home;
