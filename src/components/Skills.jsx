import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaAngular, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "Angular", icon: <FaAngular />, level: 90 },
        { name: "React", icon: <FaReact />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript />, level: 80 },
        { name: "HTML/CSS", icon: <FaHtml5 />, level: 95 },
        { name: "Tailwind", icon: <SiTailwindcss />, level: 90 },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 85 },
        { name: "Express.js", icon: <SiExpress />, level: 88 },
        { name: "MongoDB", icon: <SiMongodb />, level: 85 },
        { name: "SQL", icon: <FaDatabase />, level: 75 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          My Arsenal
        </motion.h2>

        <div className="skills-container">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="skill-category glass"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <motion.div 
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, i) => (
                  <motion.div key={i} className="skill-item" variants={itemVariants}>
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="progress-bar">
                        <motion.div 
                          className="progress" 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        ></motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
