import { useEffect } from 'react';

function Navigation() {
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
      <ul>
        <li
          onMouseEnter={showSecName}
          onMouseLeave={hideSecName}
          onClick={goToSection}
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
}

export default Navigation;
