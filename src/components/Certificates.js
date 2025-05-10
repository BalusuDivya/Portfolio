import React, { useState } from 'react';
import './Certificates.css';
// Import your local images
import ideathonCert from '../assets/ideathon.jpeg';
import webhackathonCert from '../assets/webhack.jpeg';
import stackhackCert from '../assets/stackhack.jpeg';
import petCert from '../assets/pet.jpeg';
import generativeAICert from '../assets/genai.jpg';
import networkingBasicsCert from '../assets/networking.jpg';
import bacCert from '../assets/bac.jpg';

import essayImg from '../assets/essay1.jpeg';
import tImg from '../assets/tenni.jpeg';
import carromsImg from '../assets/carroms.jpeg';
import essayImg2 from '../assets/essay2.jpeg';
import kabaddiImg from '../assets/kabaddi.jpeg';
import essayImg3 from '../assets/essay3.jpeg';
import khoKhoImg1 from '../assets/khokho1.jpeg';
import khoKhoImg2 from '../assets/khokho2.jpeg';
import throwballImg1 from '../assets/throwball1.jpeg';
import tennikoitImg from '../assets/tenni1.jpeg';
import throwballImg2 from '../assets/throwball2.jpeg';

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const certificateData = {
    technical: [
      {
        id: 1,
        name: 'Participated in Ideathon 2k24',
        issuer: 'Vignan University',
        date: 'September 2024',
        image: ideathonCert,
        description: 'Participated in Ideathon 2k24 organized on Engineers Day'
      },
      {
        id: 2,
        name: 'Appreciation Award in Webhackathon 2k25',
        issuer: 'Vignan University-Dept(CSE)',
        date: 'April 2025',
        image: webhackathonCert,
        description: 'Received appreciation award in Webhackathon 2k25'
      },
      {
        id: 3,
        name: 'Participated in 48hrs Hackathon Stackhack',
        issuer: 'Vignan University-Dept(CSE)',
        date: 'October 2024',
        image: stackhackCert,
        description: 'Participated in a continuous 48 hours hackathon called Stackhack'
      },
      {
        id: 4,
        name: 'B1 Preliminary Certificate',
        issuer: 'Cambridge University',
        date: 'December 2022',
        image: petCert,
        description: 'Achieved B1 Preliminary Certificate in Business Communication with Grade C'
      },
      {
        id: 5,
        name: '45-hour Online Course in Generative AI',
        issuer: 'Google Cloud',
        date: 'September 2024',
        image: generativeAICert,
        description: 'Completed 45-hour online course in Generative AI offered by Google Cloud'
      },
      {
        id: 6,
        name: 'Networking Basics',
        issuer: 'Cisco',
        date: 'October 2024',
        image: networkingBasicsCert,
        description: 'Certified in Networking Basics course offered by Cisco'
      },
      {
        id: 7,
        name: 'BAC Certificate',
        issuer: 'Cambridge University',
        date: 'August 2024',
        image: bacCert,
        description: 'Certified with BAC grade B in Business Communication'
      },
      
    ],
    nonTechnical: [
      { 
        id: 1, 
        name: 'Essay Writing Competition - 2nd Place', 
        issuer: 'Vignan University', 
        date: 'October 2023', 
        image: essayImg,
        description: 'Secured 2nd place in Essay Writing competition on Gandhi Jayanthi event 2023'
      },
      { 
        id: 2, 
        name: 'Tennikoit - 1st Place (Intra-University)', 
        issuer: 'Vignan University', 
        date: 'August 2022', 
        image: tImg,
        description: 'Won 1st place in Tennikoit during Intra-University Sports Competitions 2022'
      },
      { 
        id: 3, 
        name: 'Carroms Women’s - 1st Place', 
        issuer: 'Vignan University', 
        date: 'February 2024', 
        image: carromsImg,
        description: 'Won 1st place in Carroms (Women’s) during Intra-University Sports Competitions 2024'
      },
      { 
        id: 4, 
        name: 'Essay Writing - Consolation Prize', 
        issuer: 'Vignan University', 
        date: 'October 2022', 
        image: essayImg2,
        description: 'Received Consolation Prize in Essay Writing competition on Gandhi Jayanthi event 2022'
      },
      { 
        id: 5, 
        name: 'Kabaddi Women’s - 2nd Place', 
        issuer: 'Vignan University', 
        date: 'April 2025', 
        image: kabaddiImg,
        description: 'Secured 2nd place in Kabaddi (Women’s) during Department Fest 2K25'
      },
      { 
        id: 6, 
        name: 'Essay Writing - 3rd Place', 
        issuer: 'Vignan University', 
        date: 'January 2024', 
        image: essayImg3,
        description: 'Secured 3rd place in Essay Writing competition on Republic Day event 2024'
      },
      { 
        id: 7, 
        name: 'Kho-Kho - 2nd Place (2024)', 
        issuer: 'Vignan University-Department(CSE)', 
        date: 'March 2024', 
        image: khoKhoImg1,
        description: 'Secured 2nd place in Kho-Kho during Department Fest 2024'
      },
      { 
        id: 8, 
        name: 'Kho-Kho - 2nd Place (2025)', 
        issuer: 'Vignan University-Department(CSE)', 
        date: 'March 2025', 
        image: khoKhoImg2,
        description: 'Secured 2nd place in Kho-Kho during Department Fest 2025'
      },
      { 
        id: 9, 
        name: 'Throwball - 1st Place', 
        issuer: 'Vignan University-Department(CSE)', 
        date: 'March 2025', 
        image: throwballImg1,
        description: 'Secured 1st place in Throwball during Department Fest 2025'
      },
      { 
        id: 10, 
        name: 'Tennikoit - 1st Place (Department Fest)', 
        issuer: 'Vignan University-Department(CSE)', 
        date: 'March 2025', 
        image: tennikoitImg,
        description: 'Secured 1st place in Tennikoit during Department Fest 2025'
      },
      { 
        id: 11, 
        name: 'Throwball Participation - Vignanotsav', 
        issuer: 'Vignan University', 
        date: 'December 2022', 
        image: throwballImg2,
        description: 'Participated in Throwball event during Vignanotsav 2022'
      },
    ]
    
  };
  

  // Duplicate certificates for seamless looping
  const duplicatedTechnical = [...certificateData.technical, ...certificateData.technical];
  const duplicatedNonTechnical = [...certificateData.nonTechnical, ...certificateData.nonTechnical];

  const openCertificate = (cert) => {
    setIsPaused(true);
    setSelectedCertificate(cert);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
    setIsPaused(false);
  };

  return (
    <section id="certificates" className="certificates">
      <h2 className="section-title">My Certifications</h2>
      
      <div className="certificate-categories">
        {/* Technical Certificates */}
        <div className="category">
          <h3 className="category-title">Technical Certifications</h3>
          <div className={`scroller-container ${isPaused ? 'paused' : ''}`}>
            <div className="scroller">
              {duplicatedTechnical.map((cert, index) => (
                <div 
                  key={`tech-${cert.id}-${index}`} 
                  className="certificate-card"
                  onClick={() => openCertificate(cert)}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => !selectedCertificate && setIsPaused(false)}
                >
                  <div className="certificate-image">
                    <img src={cert.image} alt={cert.name} />
                  </div>
                  <div className="certificate-info">
                    <h4>{cert.name}</h4>
                    <p className="issuer">{cert.issuer}</p>
                    <p className="date">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Non-Technical Certificates */}
        <div className="category">
          <h3 className="category-title">Non-Technical Certifications</h3>
          <div className={`scroller-container ${isPaused ? 'paused' : ''}`}>
            <div className="scroller">
              {duplicatedNonTechnical.map((cert, index) => (
                <div 
                  key={`nontech-${cert.id}-${index}`} 
                  className="certificate-card"
                  onClick={() => openCertificate(cert)}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => !selectedCertificate && setIsPaused(false)}
                >
                  <div className="certificate-image">
                    <img src={cert.image} alt={cert.name} />
                  </div>
                  <div className="certificate-info">
                    <h4>{cert.name}</h4>
                    <p className="issuer">{cert.issuer}</p>
                    <p className="date">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="certificate-modal" onClick={closeCertificate}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeCertificate}>&times;</button>
            <div className="modal-image">
              <img src={selectedCertificate.image} alt={selectedCertificate.name} />
            </div>
            <div className="modal-details">
              <h3>{selectedCertificate.name}</h3>
              <p><strong>Issuer:</strong> {selectedCertificate.issuer}</p>
              <p><strong>Date:</strong> {selectedCertificate.date}</p>
              <p><strong>Description:</strong> {selectedCertificate.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;