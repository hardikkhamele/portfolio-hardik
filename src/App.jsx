import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

const Portfolio = () => (
  <div className="App">
    <Navbar />
    <main>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </main>
    <footer className="footer glass">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Hardik Khamele. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
