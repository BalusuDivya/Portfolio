import React, { useRef, useEffect, useState } from 'react';
import './Home.css';
import profileImage from '../assets/profile.jpg';
import cvFile from '../assets/my resume.pdf';

function Home() {
  const profileRef = useRef(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Skip mouse effects on mobile

    const handleMouseMove = (e) => {
      if (!profileRef.current || !containerRef.current) return;
      
      const container = containerRef.current;
      const profile = profileRef.current;
      
      // Get container dimensions and position
      const containerRect = container.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const containerCenterY = containerRect.top + containerRect.height / 2;
      
      // Calculate mouse position relative to center
      const mouseX = e.clientX - containerCenterX;
      const mouseY = e.clientY - containerCenterY;
      
      // Calculate rotation angles (reduced for subtle effect)
      const rotateY = mouseX / 20;
      const rotateX = -mouseY / 20;
      
      // Apply rotation
      profile.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      
      // Parallax effect for the decoration elements
      const decoration = profile.querySelector('.image-decoration');
      const border = profile.querySelector('.image-border');
      const loadingCircle = profile.querySelector('.loading-circle');
      
      if (decoration) decoration.style.transform = `translate(-50%, -50%) rotate(${rotateY * 2}deg)`;
      if (border) border.style.transform = `translate(-50%, -50%) scale(${1 + Math.abs(mouseY)/500})`;
      if (loadingCircle) loadingCircle.style.transform = `translate(-50%, -50%) rotate(${rotateX * 5}deg)`;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isMobile]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className={`home-content ${isMobile ? 'mobile-view' : ''}`}>
          {isMobile && (
            <div className="image-content mobile-image" ref={containerRef}>
              <div className="profile-image-container" ref={profileRef}>
                <img src={profileImage} alt="Divya Chowdary" className="profile-image" />
                <div className="image-border"></div>
                <div className="image-decoration"></div>
                <div className="loading-circle"></div>
                <div className="particles">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="particle" style={{
                      '--i': i,
                      '--color': i % 2 === 0 ? '#87ceeb' : '#ff69b4'
                    }}></div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="text-content">
            <h1 className="greeting animated-text">Hello, It's Me <span className="highlight">Divya Snehitha</span></h1>
            <h2 className="title animated-text">And I'm a Passionate Frontend Developer</h2>
            <p className="description animated-text">
            I am a web development enthusiast with skills in building responsive websites, frontend development, and a commitment to continuous learning.
            </p>
            <div className="button-group">
              <button onClick={scrollToContact} className="secondary-btn">Contact Me</button>
              <a href={cvFile} download className="cv-download-btn">Download CV</a>
            </div>
            <div className="social-icons">
              <a href="https://github.com/BalusuDivya" target="_blank" rel="noopener noreferrer" className="social-icon-link neon-icon">
                <svg className="github-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/divya-chowdary-4a63922bb/" target="_blank" rel="noopener noreferrer" className="social-icon-link neon-icon">
                <svg className="linkedin-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
              </a>
              <a href="https://leetcode.com/u/chowdaryd14/" target="_blank" rel="noopener noreferrer" className="social-icon-link neon-icon">
                <svg className="leetcode-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </a>
            </div>
          </div>
          {!isMobile && (
            <div className="image-content" ref={containerRef}>
              <div className="profile-image-container" ref={profileRef}>
                <img src={profileImage} alt="Divya Chowdary" className="profile-image" />
                <div className="image-border"></div>
                <div className="image-decoration"></div>
                <div className="loading-circle"></div>
                <div className="particles">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="particle" style={{
                      '--i': i,
                      '--color': i % 2 === 0 ? '#87ceeb' : '#ff69b4'
                    }}></div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;  