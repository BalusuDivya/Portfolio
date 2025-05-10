import React, { useEffect } from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaCode, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

function Skills() {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 70, color: '#E44D26' },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 80, color: '#264DE4' },
    { name: 'JavaScript', icon: <FaJs />, level: 30, color: '#F0DB4F' },
    { name: 'React', icon: <FaReact />, level: 60, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs />, level: 50, color: '#68A063' },
    { name: 'Express', icon: <SiExpress />, level: 40, color: '#000000' },
    { name: 'MongoDB', icon: <SiMongodb />, level: 70, color: '#4DB33D' },
    { name: 'Git', icon: <FaGitAlt />, level: 70, color: '#F05032' },
    { name: 'C', icon: <FaCode />, level: 60, color: '#555555' },
    { name: 'DBMS', icon: <FaDatabase />, level: 70, color: '#4A90E2' },
  ];

  useEffect(() => {
    // Create floating elements dynamically
    const section = document.querySelector('.skills-section');
    const colors = ['#87ceeb', '#ff69b4', '#ffffff', '#61DAFB', '#F0DB4F'];
    
    for (let i = 0; i < 8; i++) {
      const element = document.createElement('div');
      element.className = 'floating-element';
      element.style.width = `${Math.random() * 40 + 20}px`;
      element.style.height = element.style.width;
      element.style.left = `${Math.random() * 90}%`;
      element.style.top = `${Math.random() * 90}%`;
      element.style.animationDuration = `${Math.random() * 20 + 10}s`;
      element.style.animationDelay = `${Math.random() * 5}s`;
      element.style.opacity = Math.random() * 0.3 + 0.1;
      element.style.background = colors[Math.floor(Math.random() * colors.length)];
      element.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      section.appendChild(element);
    }
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">My <span className="highlight">Skills</span></h2>
          <p className="section-subtitle">Technologies I'm working with</p>
          <div className="divider"></div>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <div className="skill-content">
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-level">
                  <div 
                    className="level-bar" 
                    style={{ 
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                    }}
                  ></div>
                  <span className="level-percent">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;