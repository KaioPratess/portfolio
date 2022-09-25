import { useEffect, useState, useRef } from 'react';

const Navigation = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const nav = useRef();

  useEffect(() => {
    nav.current.childNodes.forEach((i) => {
      if (currentSection === i.textContent.toLowerCase()) {
        i.classList.add('current');
      } else {
        i.classList.remove('current');
      }
    });
  }, [currentSection]);

  const showSecName = (e) => {
    e.target.childNodes[0].style.display = 'inline';
  };

  const hideSecName = (e) => {
    if (e.target.localName !== 'span') {
      e.target.childNodes[0].style.display = 'none';
    } else {
      e.target.style.display = 'none';
    }
  };

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
    <div className="navigation">
      <ul ref={nav}>
        <li
          onMouseEnter={showSecName}
          onMouseLeave={hideSecName}
          onClick={goToSection}
          className="current"
        >
          <span>Home</span>
        </li>
        <li
          onMouseEnter={showSecName}
          onMouseLeave={hideSecName}
          onClick={goToSection}
        >
          <span>About</span>
        </li>
        <li
          onMouseEnter={showSecName}
          onMouseLeave={hideSecName}
          onClick={goToSection}
        >
          <span>Skills</span>
        </li>
        <li
          onMouseEnter={showSecName}
          onMouseLeave={hideSecName}
          onClick={goToSection}
        >
          <span>Projects</span>
        </li>
        <li
          onMouseEnter={showSecName}
          onMouseLeave={hideSecName}
          onClick={goToSection}
        >
          <span>Challenges</span>
        </li>
        <li
          onMouseEnter={showSecName}
          onMouseLeave={hideSecName}
          onClick={goToSection}
        >
          <span>Contact</span>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
