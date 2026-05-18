import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <div className="about-container">
          <motion.div 
            className="about-images"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="main-img img-container">
              <img src="/about-1.jpg" alt="Working" className="about-img-tag" />
            </div>
            <div className="sub-img-1 img-container">
              <img src="/about-2.jpg" alt="Developer" className="about-img-tag" />
            </div>
            <div className="sub-img-2 img-container">
              <img src="/about-3.jpg" alt="Lifestyle" className="about-img-tag" />
            </div>
          </motion.div>

          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="about-subtitle">Crafting Digital Experiences</h3>
            <p className="about-text">
              I'm a dedicated MEAN stack developer, skilled in MongoDB, Express.js, Angular, and Node.js. With a knack for creating seamless web applications, I design dynamic user interfaces, build robust APIs, and optimize server performance.
            </p>
            <p className="about-text">
              My clean code philosophy and passion for innovation drive me to craft user-friendly solutions that meet modern standards. I believe that an application should not only function flawlessly but also provide a luxury aesthetic experience to the user.
            </p>
            
            <div className="stats-container">
              <div className="stat-item glass">
                <span className="stat-number">2+</span>
                <span className="stat-text">Years Exp.</span>
              </div>
              <div className="stat-item glass">
                <span className="stat-number">20+</span>
                <span className="stat-text">Projects</span>
              </div>
              <div className="stat-item glass">
                <span className="stat-number">100%</span>
                <span className="stat-text">Commitment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
