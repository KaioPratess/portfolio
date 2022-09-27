import { useEffect, useRef } from 'react';

const Navigation = (props) => {
  const nav = useRef();

  useEffect(() => {
    nav.current.childNodes.forEach((i) => {
      if (props.currentSection === i.textContent.toLowerCase()) {
        i.classList.add('current');
      } else {
        i.classList.remove('current');
      }
    });
  }, [props.currentSection]);

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

  return (
    <div className="navigation">
      <nav className="desktop-nav">
        <ul ref={nav}>
          <li
            onMouseEnter={showSecName}
            onMouseLeave={hideSecName}
            onClick={props.goToSection}
            className="current"
          >
            <span>Home</span>
          </li>
          <li
            onMouseEnter={showSecName}
            onMouseLeave={hideSecName}
            onClick={props.goToSection}
          >
            <span>Skills</span>
          </li>
          <li
            onMouseEnter={showSecName}
            onMouseLeave={hideSecName}
            onClick={props.goToSection}
          >
            <span>Projects</span>
          </li>
          <li
            onMouseEnter={showSecName}
            onMouseLeave={hideSecName}
            onClick={props.goToSection}
          >
            <span>Challenges</span>
          </li>
          <li
            onMouseEnter={showSecName}
            onMouseLeave={hideSecName}
            onClick={props.goToSection}
          >
            <span>About</span>
          </li>
          <li
            onMouseEnter={showSecName}
            onMouseLeave={hideSecName}
            onClick={props.goToSection}
          >
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
