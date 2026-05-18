import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Work.css';

const Work = () => {
  const projects = [
    {
      title: "Bike49 Platform",
      category: "Full Stack Web App",
      description: "A premium, modern bike buying and selling platform featuring advanced vehicle filtering, an EMI calculator, admin dashboards, and AI-simulated tools.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
      image: "Bike49",
      imgSrc: "/bike49.jpg",
      link: "https://bike49.vercel.app/"
    },
    {
      title: "E-Commerce Luxury Platform",
      category: "Full Stack Web App",
      description: "A premium e-commerce platform built with MERN stack featuring real-time inventory, secure payment gateways, and an admin dashboard.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image: "Project 1",
    },
    {
      title: "FinTech Dashboard",
      category: "Frontend Application",
      description: "Interactive financial dashboard providing real-time data visualization and analytics for corporate clients.",
      tech: ["Angular", "TypeScript", "Tailwind CSS", "Chart.js"],
      image: "Project 2",
    },
    {
      title: "Social Connect App",
      category: "Mobile-First Web App",
      description: "A responsive social networking application with real-time chat, notifications, and media sharing capabilities.",
      tech: ["React", "Firebase", "Node.js", "Socket.io"],
      image: "Project 3",
    }
  ];

  return (
    <section id="work" className="section work-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Selected Works
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              className="project-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className={`project-image ${project.imgSrc ? '' : 'image-placeholder'}`}>
                {project.imgSrc ? (
                  project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
                      <img src={project.imgSrc} alt={project.title} className="work-img" />
                    </a>
                  ) : (
                    <img src={project.imgSrc} alt={project.title} className="work-img" />
                  )
                ) : (
                  <span>[{project.image} Picture]</span>
                )}
                <div className="project-overlay">
                  <a href={project.link || "#"} target={project.link ? "_blank" : "_self"} rel="noreferrer" className="project-link"><FaExternalLinkAlt /></a>
                  <a href="#" className="project-link"><FaGithub /></a>
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="more-works text-center" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <a href="#" className="btn btn-outline">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Work;
