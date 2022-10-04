import { useRef, useEffect } from 'react';
import img1 from '../assets/img/andras-vas-Bd7gNnWJBkU-unsplash (2).jpg';

const About = (props) => {
  const h3 = useRef();
  const img = useRef();
  const para = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('fade-in-left1');
          entries[0].target.style.visibility = 'visible';
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer.observe(img.current);

    const observer1 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('fade-in-right2');
          entries[0].target.style.visibility = 'visible';
        }
      },
      {
        threshold: 0.5,
      },
    );

    observer1.observe(para.current);

    const observer2 = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('fade-in-left1');
          entries[0].target.style.visibility = 'visible';
        }
      },
      {
        threshold: 1,
      },
    );

    observer2.observe(h3.current);
  }, []);

  return (
    <section className="about sec" data-sec={props.sec}>
      <h3 ref={h3}>About me</h3>
      <div className="about-div">
        <div className="about-img" ref={img}>
          <img src={img1} alt="About Image" />
        </div>
        <div className="about-desc" ref={para}>
          <p>
            Hey! I'm a Front End developer with a passion for bringing the
            technical and visual aspects of web applications to life.
          </p>
          <p>
            I've always loved computers and technologies so around august 2021 I
            decided to start learning programming and dive head first into the
            area. Since then I learned a lot of things and built a bunch of
            small/medium web applications.
          </p>
          <p>
            I used several plataforms to study but the main ones were{' '}
            <a
              href="https://www.theodinproject.com/"
              target="_blank"
              rel="noopener"
            >
              The Odin Project
            </a>{' '}
            and{' '}
            <a href="https://origamid.com/" target="_blank" rel="noopener">
              Origamid
            </a>
            . The stack that I dominate is the triad of HTML, CSS, JavaScript,
            and the ReactJs library. Soon I intend to learn PHP, MySql, and
            Laravel to cover the back end of the web and start deploying
            complete apps.
          </p>
          <p>
            My focus is coding but I know the huge difference a good design can
            make to an app, so I decided to learn it as well to at least be able
            to understand what is happening on the screen and to discern the
            good from the bad. In the close future, I intend to dive deeper into
            UI/UX design so I can be very competent with it.
          </p>
          <p>
            My goal is to become a specialist in Web Development, dominating
            both the Front End and Back End.
          </p>
          <p>
            I have a bachelor's degree in business, and I worked for 2 years in
            the financial department at FCA/Stellantis. The main learnings that
            I took from my past job experience were how to work as a team, solve
            problems efficiently and project management using agile
            methodologies.
          </p>
          <p>
            I'm always striving to learn new things and improve myself. So I'm
            very open-minded about new technologies I may need to learn and I
            learn fast.
          </p>
          <p>
            I've been programming for only a short time, but hope to make a
            career out of it!
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/kaioprates/"
              target="_blank"
              rel="noopener"
            >
              Get in touch
            </a>{' '}
            and let's work together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
