import React from 'react';
import './Projects.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import codingprofiletrackerImg from '../assets/codingprofiletracker.png';
import transportmoduleImg from '../assets/transport.png';
import portfolioImg from '../assets/portfolioImg.png';
import AttendanceportalImg from '../assets/attendanceportal.png';
import FacultyportalImg from '../assets/facultyportal.png';
import CalculatorImg from '../assets/calc.png';
import QuizImg from '../assets/Quiz.png';
import NavbarImg from '../assets/navbar.png';
import GalleryImg from '../assets/img gallery.png';
import BookImg from '../assets/bookimg.png';
import IDImg from '../assets/idcard.png';
import BloodImg from '../assets/blood.png';
import DMTImg from '../assets/classifi.png';
import RandomImg from '../assets/random.png';
import WeatherImg from '../assets/weather.png';

const projects = [
  {
    title: 'Coding Profile Tracker',
    description: 'An application to track coding profiles across multiple platforms like LeetCode, Codeforces, and GitHub at one place.',
    tags: ['React', 'API Integration', 'Node.js', 'MongoDB'],
    github: 'https://github.com/BalusuDivya/coding-profile-tracker',
    live: 'https://webhackfrontend.vercel.app/',
    image: codingprofiletrackerImg,
    video: 'https://drive.google.com/file/d/14AWBs8k1NsTQMoGIyFA_Q-JYSBKIZjkk/view?usp=sharing'
  },
  {
    title: 'Transport Module in an ERP System',
    description: 'Designed and developed a transport management system module within an ERP, covering routes, vehicles, and trip scheduling.',
    tags: ['MongoDB', 'React', 'Vite', 'Node.js'],
    github: 'https://github.com/BalusuDivya/Transport-Module-in-an-ERP-System',
    live: 'https://github.com/BalusuDivya/Transport-Module-in-an-ERP-System',
    image: transportmoduleImg,
    video: 'https://drive.google.com/file/d/1BAtUpCmSlSfdnz1kJGJnowVt7NiWZeP8/view?usp=sharing'
  },
  {
    title: 'My Portfolio',
    description: 'A personal portfolio website showcasing my projects, skills, achievements, and work experience in a responsive design.',
    tags: ['React', 'MongoDB', 'CSS', 'Node.js'],
    github: 'https://github.com/BalusuDivya/Portfolio',
    live: 'https://github.com/BalusuDivya/Portfolio',
    image: portfolioImg,
    video: 'https://drive.google.com/file/d/1ejbLoKi_OSpUM2mt-Pms0XN6PU-oDHv3/view?usp=sharing'
  },
  {
    title: 'Attendance Portal',
    description: 'A web-based portal for marking, tracking, and managing student attendance with admin, faculty, and student roles.',
    tags: ['JavaScript', 'React', 'CSS'],
    github: 'https://github.com/BalusuDivya/Attendance-portal',
    live: 'https://attendance-portal-nine.vercel.app/',
    image: AttendanceportalImg,
    video: 'https://drive.google.com/file/d/1ZVoXyq2OW2imTUk6MhHygny8JFXYjawu/view?usp=sharing'
  },
  {
    title: 'Faculty Research and Paper Monitoring Hub',
    description: 'A centralized hub to monitor faculty research activities, publications, and track departmental progress reports.',
    tags: ['JavaScript', 'React', 'CSS', 'MongoDB'],
    github: 'https://github.com/BalusuDivya/Faculty_Portal',
    live: 'https://github.com/BalusuDivya/Faculty_Portal',
    image: FacultyportalImg,
    video: 'https://drive.google.com/file/d/1nxEgNjJn8zsmede_h7PgoN3ub4YniOMg/view?usp=sharing'
  },
  {
    title: 'Basic Quiz App',
    description: 'A simple quiz application where users can attempt multiple-choice questions and view their scores instantly.',
    tags: ['HTML', 'CSS', 'JS'],
    github: 'https://github.com/BalusuDivya/Quiz-App',
    live: 'https://quiz-app-two-psi-31.vercel.app/',
    image: QuizImg,
    video: 'https://drive.google.com/file/d/1nbiuF6sYQ2y2_AtEYz_686DSvMwW8COf/view?usp=sharing'
  },
  {
    title: 'Calculator',
    description: 'A basic web calculator to perform simple arithmetic operations like addition, subtraction, multiplication, and division.',
    tags: ['HTML', 'CSS', 'JS'],
    github: 'https://github.com/BalusuDivya/Calculator',
    live: 'https://calculator-two-sooty-96.vercel.app/',
    image: CalculatorImg,
    video: 'https://drive.google.com/file/d/1C8YLxnqEGvH4h1Qa_UqVJsJlsser-7BG/view?usp=sharing'
  },
  {
    title: 'Responsive Navbar',
    description: 'A fully responsive navigation bar with smooth scrolling links and mobile-friendly menu toggling.',
    tags: ['HTML', 'CSS', 'JS'],
    github: 'https://github.com/BalusuDivya/Responsive-Navbar',
    live: 'https://responsive-navbar-beryl.vercel.app/',
    image: NavbarImg,
    video: 'https://drive.google.com/file/d/1RhEqK2AiHndgp__D9WK_dLmUOC3arIvz/view?usp=sharing  '
  },
  {
    title: 'Image Gallery',
    description: 'An image gallery app that dynamically displays a collection of images fetched from an external API.',
    tags: ['HTML', 'CSS', 'JS', 'API'],
    github: 'https://github.com/BalusuDivya/Image-Gallery',
    live: 'https://image-gallery-eosin-six.vercel.app/  ',
    image: GalleryImg,
    video: 'https://drive.google.com/file/d/1XpgQ13YTAe2S-ZxxsI3-U5GZpttE_v5j/view?usp=sharing'
  },
  {
    title: 'Book App',
    description: 'An online book library app to search and browse books with details like author, publisher, and description using API.',
    tags: ['HTML', 'CSS', 'JS', 'API'],
    github: 'https://github.com/BalusuDivya/Book-App',
    live: 'https://book-app-tau-ten.vercel.app/',
    image: BookImg, 
    video: 'https://drive.google.com/file/d/1ZNKq_UdIqJgKE36TwqRWI_3oE6eLiAxq/view?usp=sharing'
  },
  {
    title: 'Dynamic Student Profile Viewer',
    description: 'A dynamic web page that generates and displays student profiles with editable information fields.',
    tags: ['HTML', 'CSS', 'JS'],
    github: 'https://github.com/BalusuDivya/Dynamic-Student-Profile-Viewer',
    live: 'https://dynamic-student-profile-viewer.vercel.app/',
    image: IDImg,
    video: 'https://drive.google.com/file/d/1mmdowjSf-w3T08fARh8Ls_uy82m5vRTe/view?usp=sharing'
  },
  {
    title: 'Random Background Color Changer',
    description: 'A fun project that changes the background color randomly every time the user clicks a button.',
    tags: ['HTML', 'CSS', 'JS'],
    github: 'https://github.com/BalusuDivya/Random-Background-Color-Changer',
    live: 'https://random-background-color-changer.vercel.app/',
    image: RandomImg,
    video: 'https://drive.google.com/file/d/1iY7zPGsM_8_chlAiRM7hy5C-4xT5frV0/view?usp=sharing'
  },
  {
    title: 'Blood Cell Detection',
    description: 'An Image Processing project to detect different types of blood cells from microscopic images using Python.',
    tags: ['Python'],
    github: 'https://github.com/BalusuDivya/Blood-cells-WBC-detection-using-image-processing',
    live: 'https://github.com/BalusuDivya/Blood-cells-WBC-detection-using-image-processing',
    image: BloodImg,
    video: 'https://drive.google.com/file/d/1S50WL5tEpN1hO3kZg153dAMIKLtlKzoL/view?usp=sharing'
  },
  {
    title: 'Weather App',
    description: 'A weather application that fetches real-time weather data based on user location or city input using APIs.',
    tags: ['API', 'EJS', 'CSS'],
    github: 'https://github.com/BalusuDivya/Weather-App',
    live: 'https://weather-app-bay-one-51.vercel.app/',
    image: WeatherImg,
    video: 'https://drive.google.com/file/d/13TXYNkIup0xYEeAZ885USQb-hXqui15T/view?usp=sharing'
  },
  {
    title: 'Classification and Clustering Techniques in Data Mining',
    description: 'A project implementing classification and clustering algorithms to analyze datasets and extract hidden patterns.',
    tags: ['Python'],
    github: 'https://github.com/BalusuDivya/Classification-and-Clustering-Techniques-in-Data-Mining',
    live: 'https://github.com/BalusuDivya/Classification-and-Clustering-Techniques-in-Data-Mining',
    image: DMTImg,
    video: 'https://drive.google.com/file/d/1DO760Lzj9IvE4Nl0NzpeuX1iHAWe7G9Y/view?usp=sharing'
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-heading">
          <span className="section-number"></span> Projects I have worked on:
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-media">
                <img src={project.image} alt={project.title} className="project-image" />
                {project.video && (
                  <div className="video-overlay">
                    <a href={project.video} target="_blank" rel="noopener noreferrer" className="video-link">
                      Watch Demo
                    </a>
                  </div>
                )}
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <ul className="project-tags">
                  {project.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiGithub /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
