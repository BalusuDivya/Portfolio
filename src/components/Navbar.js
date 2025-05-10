import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? 'auto' : 'hidden';
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="nav-logo" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}>
          Portfolio
        </a>

        <div className="mobile-menu" onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        <div className={`nav-overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}>About</a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}>Projects</a>
          </li>
          <li>
            <a href="#certificates" onClick={(e) => {
              e.preventDefault();
              scrollToSection('certificates');
            }}>Certifications</a>
          </li>
          <li>
            <a href="#education" onClick={(e) => {
              e.preventDefault();
              scrollToSection('education');
            }}>Education</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;