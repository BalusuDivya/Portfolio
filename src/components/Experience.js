import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    { title: 'Job Title 1', company: 'Company 1', duration: 'Duration 1', description: 'Description of job 1' },
    { title: 'Job Title 2', company: 'Company 2', duration: 'Duration 2', description: 'Description of job 2' },
    // Add more experiences
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.title}</h3>
            <p>{exp.company} - {exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;