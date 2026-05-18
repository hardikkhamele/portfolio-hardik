import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Work', 'Contact'];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'glass' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container container">
        <div className="logo">H.K.</div>
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link} className="nav-item">
              <Link 
                activeClass="active" 
                to={link.toLowerCase()} 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                className="nav-link"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
