import { useEffect, useState } from 'react';
import Home from './components/home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/parts/Navigation';
import MenuMobile from './components/parts/MenuMobile';
import projectsInfo from './assets/infos/projectsInfo';
import challengesInfo from './assets/infos/challengesInfo';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    const menuIcon = document.querySelector('.menu-checkbox');
    if (showMenuMobile) {
      body.style.overflow = 'hidden';
      menuIcon.checked = true;
    } else {
      body.style.overflow = 'visible';
      menuIcon.checked = false;
    }
  }, [showMenuMobile]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sec = entry.target.getAttribute('data-sec');
            setCurrentSection(sec);
          }
        });
      },
      {
        threshold: 0.3,
      },
    );

    const sections = document.querySelectorAll('.sec');
    sections.forEach((sec) => {
      observer.observe(sec);
    });
  }, []);

  const goToSection = (e) => {
    const secName = e.target.textContent.toLowerCase();
    const sections = document.querySelectorAll('.sec');

    sections.forEach((sec) => {
      const dataSec = sec.getAttribute('data-sec');
      if (secName === dataSec) {
        setCurrentSection(secName.toLowerCase());
        const rect = sec.getBoundingClientRect();
        window.scrollTo({
          top: rect.top + window.scrollY,
          behavior: 'smooth',
        });
      }
    });
  };

  return (
    <div className="App">
      <header className="header fade-in-top">
        <div className="header-logo">
          <a href="/">
            <svg
              width="50"
              height="44"
              viewBox="0 0 50 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48.5 22C48.5 33.1474 38.1646 42.5 25 42.5C11.8354 42.5 1.5 33.1474 1.5 22C1.5 10.8526 11.8354 1.5 25 1.5C38.1646 1.5 48.5 10.8526 48.5 22Z"
                stroke="white"
                strokeWidth="3"
              />
              <path
                d="M32.1094 12.4531C32.4635 12.4531 32.7135 12.5365 32.8594 12.7031C33.0156 12.8594 33.0938 13.1302 33.0938 13.5156C33.0938 13.901 33.0156 14.1771 32.8594 14.3438C32.7135 14.5 32.4635 14.5781 32.1094 14.5781H31.1562L24.6094 20.9062C24.6927 20.8958 24.8177 20.8906 24.9844 20.8906C26.349 20.8906 27.4375 21.4115 28.25 22.4531C28.5729 22.8698 28.8542 23.3385 29.0938 23.8594C29.3438 24.3802 29.6146 25.0312 29.9062 25.8125C29.9479 25.9167 30.0521 26.1927 30.2188 26.6406C30.3958 27.0781 30.5677 27.4479 30.7344 27.75C31.1406 28.5 31.6094 28.875 32.1406 28.875H32.5781C32.9323 28.875 33.1823 28.9583 33.3281 29.125C33.4844 29.2812 33.5625 29.5521 33.5625 29.9375C33.5625 30.3229 33.4844 30.599 33.3281 30.7656C33.1823 30.9219 32.9323 31 32.5781 31H31.2969C30.2448 31 29.349 30.276 28.6094 28.8281C28.349 28.3073 28.0417 27.5938 27.6875 26.6875C27.4479 26.0521 27.2292 25.5156 27.0312 25.0781C26.8333 24.6406 26.6146 24.25 26.375 23.9062C26.125 23.5521 25.8073 23.2812 25.4219 23.0938C25.0469 22.9062 24.6198 22.8125 24.1406 22.8125C23.7031 22.8125 23.2812 22.8906 22.875 23.0469C22.4688 23.2031 22.1094 23.4323 21.7969 23.7344L21.3281 24.1875V28.875H23.8594C24.2135 28.875 24.4635 28.9583 24.6094 29.125C24.7656 29.2812 24.8438 29.5521 24.8438 29.9375C24.8438 30.3229 24.7656 30.599 24.6094 30.7656C24.4635 30.9219 24.2135 31 23.8594 31H17.2344C16.8802 31 16.625 30.9219 16.4688 30.7656C16.3229 30.599 16.25 30.3229 16.25 29.9375C16.25 29.5521 16.3229 29.2812 16.4688 29.125C16.625 28.9583 16.8802 28.875 17.2344 28.875H18.9844V14.5781H17.2344C16.8802 14.5781 16.625 14.5 16.4688 14.3438C16.3229 14.1771 16.25 13.901 16.25 13.5156C16.25 13.1302 16.3229 12.8594 16.4688 12.7031C16.625 12.5365 16.8802 12.4531 17.2344 12.4531H22.7656C23.1198 12.4531 23.3698 12.5365 23.5156 12.7031C23.6719 12.8594 23.75 13.1302 23.75 13.5156C23.75 13.901 23.6719 14.1771 23.5156 14.3438C23.3698 14.5 23.1198 14.5781 22.7656 14.5781H21.3281V21.2812L28.1719 14.5781H27.0469C26.6927 14.5781 26.4375 14.5 26.2812 14.3438C26.1354 14.1771 26.0625 13.901 26.0625 13.5156C26.0625 13.1302 26.1354 12.8594 26.2812 12.7031C26.4375 12.5365 26.6927 12.4531 27.0469 12.4531H32.1094Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
        <label htmlFor="check" className="menu-button bar">
          <input
            id="check"
            type="checkbox"
            className="menu-checkbox"
            onClick={() => setShowMenuMobile((prev) => !prev)}
          />
          <span className="top-line"></span>
          <span className="middle-line"></span>
          <span className="bottom-line"></span>
        </label>
      </header>
      {showMenuMobile && (
        <MenuMobile
          setShowMenuMobile={setShowMenuMobile}
          goToSection={goToSection}
          showMenuMobile={showMenuMobile}
        />
      )}
      <Home sec="home" />
      <Navigation currentSection={currentSection} goToSection={goToSection} />
      <Skills sec="skills" />
      <Projects
        section="Projects"
        paragraph="Showcasing complete functional projects demonstrates what I can bring as value to your company. I built these projects from the ground up to demonstrate my skills in front-end development."
        sec="projects"
        projects={projectsInfo}
      />
      <Projects
        section="Coding Challenges"
        paragraph="I like to challenge myself and learn new things. Coding challenges allow me to solve new problems  with code but in a smaller scale that  a full project."
        sec="challenges"
        projects={challengesInfo}
      />
      <About sec="about" />
      <Contact sec="contact" />
      <footer className="footer">
        <p>Designed & Coded by Kaio Pratess</p>
      </footer>
    </div>
  );
}

export default App;
