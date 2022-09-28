import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = (props) => {
  const myName = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Kaio Prates.'],
      typeSpeed: 125,
      startDelay: 2500,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(myName.current, options);
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  const scrollDown = () => {
    const aboutSec = document.querySelector('.skills');
    const rect = aboutSec.getBoundingClientRect();
    window.scrollTo({
      top: rect.top + window.scrollY,
      behavior: 'smooth',
    });
  };

  return (
    <section className="home sec" data-sec={props.sec}>
      <div className="home-desc">
        <span className="fade-in-left">Hi, my name is</span>
        <h1 ref={myName}>
          {typed.current ? typed.current.el.textContent : ''}
        </h1>
        <h2 className="fade-in-left2">I'm a Front End Developer</h2>
      </div>
      <div
        className="scrolldown fade-in-bottom2"
        style={{ color: 'skyblue' }}
        onClick={scrollDown}
      >
        <div className="chevrons">
          <div className="chevrondown"></div>
          <div className="chevrondown"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
