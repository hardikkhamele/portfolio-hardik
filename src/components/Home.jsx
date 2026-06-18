import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaBriefcase, FaEye, FaTimes } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [showCV, setShowCV] = useState(false);
  const [resumeData, setResumeData] = useState('/Hardik_New_CV.pdf');
  const [resumeName, setResumeName] = useState('Hardik_New_CV.pdf');

  useEffect(() => {
    const storedResume = localStorage.getItem('portfolio_resume_data');
    const storedName = localStorage.getItem('portfolio_resume_name');
    if (storedResume) {
      if (storedResume.startsWith('data:')) {
        try {
          const byteString = atob(storedResume.split(',')[1]);
          const mimeString = storedResume.split(',')[0].split(':')[1].split(';')[0];
          const ab = new ArrayBuffer(byteString.length);
          const ia = new Uint8Array(ab);
          for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }
          const blob = new Blob([ab], { type: mimeString });
          const url = URL.createObjectURL(blob);
          setResumeData(url);
        } catch (e) {
          setResumeData(storedResume);
        }
      } else {
        setResumeData(storedResume);
      }
      if (storedName) setResumeName(storedName);
    }
  }, []);

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
            <div className="cv-buttons">
              <button className="btn btn-outline" onClick={() => setShowCV(true)}>
                <FaEye /> View CV
              </button>
              <a href={resumeData} className="btn btn-outline" download={resumeName} onClick={() => {
                const downloads = parseInt(localStorage.getItem('portfolio_cv_downloads') || '0', 10);
                localStorage.setItem('portfolio_cv_downloads', downloads + 1);
              }}>
                <FaDownload /> Download CV
              </a>
            </div>
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
                src={resumeData.startsWith('blob:') || resumeData.startsWith('data:') ? resumeData : `${resumeData}#toolbar=0`} 
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
