import React, { useEffect } from 'react';
import './About.css';

function About() {
  useEffect(() => {
    // Create floating elements dynamically
    const section = document.querySelector('.about-section');
    for (let i = 0; i < 5; i++) {
      const element = document.createElement('div');
      element.className = 'floating-element';
      element.style.width = `${Math.random() * 40 + 20}px`;
      element.style.height = element.style.width;
      element.style.left = `${Math.random() * 90}%`;
      element.style.top = `${Math.random() * 90}%`;
      element.style.animationDuration = `${Math.random() * 20 + 10}s`;
      element.style.animationDelay = `${Math.random() * 5}s`;
      element.style.opacity = Math.random() * 0.3 + 0.1;
      section.appendChild(element);
    }
  }, []);

  return (
    <section id="about" className="about-section">
      {/* Rest of your existing JSX remains exactly the same */}
      <div className="about-container">
        <h2 className="section-heading">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a pre-final year B.Tech student at Vignan's University studying Computer Science and Engineering.
              I've built a solid foundation in software development with expertise in C, DBMS, and Web Development. Currently, I'm expanding
              my skillset by learning Certified Ethical Hacking and Cloud Practitioner concepts. My journey
              in technology is driven by curiosity and passion for solving complex problems. I believe in the power of continuous learning and staying adaptable in the fast-evolving tech landscape. Every day presents an opportunity to grow, and I'm committed to making the most of it.
            </p>
          </div>
          
          <div className="info-sections">
            <div className="info-section">
              <h3 className="info-heading">Personal Info</h3>
              <div className="info-grid">
                {[
                  { title: "Name", content: "Divya Snehitha", icon: "👩‍💻" },
                  { title: "Age", content: "20", icon: "🎂" },
                  { title: "Email", content: "chowdaryd14@gmail.com", icon: "✉️" },
                  { title: "Status", content: "Undergraduate", icon: "🎓" },
                ].map((item, index) => (
                  <div key={index} className="info-card">
                    <span className="info-icon">{item.icon}</span>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-section">
              <h3 className="info-heading">Professional Info</h3>
              <div className="info-grid">
                {[
                  { title: "Tech Skills", content: "C, MySQL, HTML5, CSS3, JavaScript, React" },
                  { title: "Current Learning", content: "Ethical Hacking (CEH), AWS Cloud Fundamentals" },
                  { title: "Experience", content: "Built multiple academic and personal projects in Web Development" },
                  { title: "Interests", content: "Cybersecurity, Cloud, Web Development" },
                ].map((item, index) => (
                  <div key={index} className="info-card">
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;