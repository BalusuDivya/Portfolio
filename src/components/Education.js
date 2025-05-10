// Education.js
import React, { useState } from 'react';
import './Education.css';

const Education = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Vignan's Foundation for Science, Technology and Research",
      year: "Sept 2022 - Present",
      description: "Pre-final year B.Tech student in Computer Science and Engineering. Skilled in software development with expertise in C, DBMS, and Web Development. Currently expanding knowledge in Certified Ethical Hacking and Cloud Practitioner concepts.",
      achievements: [
        "GPA: 9.0/10",
        "Focus on software development, ethical hacking, and cloud computing",
        "Active participant in hackathons and coding competitions"
      ],
      icon: "🎓"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Sri Chaitanya Junior College",
      year: "Aug 2020 - Apr 2022",
      description: "Gained valuable problem-solving and analytical skills through rigorous Intermediate studies.",
      achievements: [
        "GPA: 9.4/10",
        "Developed strong foundational knowledge in Mathematics and Physics",
        "Participated in various science projects and competitions"
      ],
      icon: "🔬"
    },
    {
      degree: "Secondary School Education",
      institution: "St. Joseph's English Medium School",
      year: "Jul 2019 - Apr 2020",
      description: "Exhibited dedication and versatility by achieving excellence in academics and securing top honors in competitive sports.",
      achievements: [
        "GPA: 9.8/10",
        "Top honors in competitive sports during 10th grade",
        "Active participant in school leadership and extracurricular activities"
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
