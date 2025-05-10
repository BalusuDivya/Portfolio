// Education.js
import React, { useState } from 'react';
import './Education.css';

const Education = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Tech University",
      year: "2020 - 2024",
      description: "Specialized in Artificial Intelligence and Machine Learning. Completed with honors (GPA: 3.8/4.0).",
      achievements: [
        "Recipient of Dean's Excellence Award",
        "Published research paper on Neural Networks",
        "Lead developer of university chatbot project"
      ],
      icon: "🎓"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Science College",
      year: "2018 - 2020",
      description: "Major in Physics, Chemistry, and Mathematics. Scored 95% in final examinations.",
      achievements: [
        "Gold medalist in National Science Olympiad",
        "President of Science Club",
        "Developed school management system as final project"
      ],
      icon: "🔬"
    },
    {
      degree: "Secondary School Education",
      institution: "St. Mary's High School",
      year: "2016 - 2018",
      description: "Completed with distinction in all subjects. Active participant in extracurricular activities.",
      achievements: [
        "School Topper in Computer Science",
        "Captain of Robotics Team",
        "Won inter-school coding competition"
      ],
      icon: "🏫"
    }
  ];

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="education-container" id="education">
      <h2 className="education-title">My Academic Journey</h2>
      
      <div className="education-grid">
        {educationData.map((item, index) => (
          <div 
            key={index}
            className={`education-card ${expandedCard === index ? 'expanded' : ''}`}
            onClick={() => toggleCard(index)}
          >
            <div className="card-header">
              <div className="card-icon">{item.icon}</div>
              <div className="card-title">
                <h3 className="degree">{item.degree}</h3>
                <p className="institution">{item.institution}</p>
                <p className="year">{item.year}</p>
              </div>
            </div>
            
            {expandedCard === index && (
              <div className="card-details">
                <p className="description">{item.description}</p>
                <ul className="achievements">
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;