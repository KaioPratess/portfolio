import img1 from '../assets/img/andras-vas-Bd7gNnWJBkU-unsplash (2).jpg';

const About = (props) => {
  return (
    <section className="about sec" data-sec={props.sec}>
      <h3>About me</h3>
      <div className="about-div">
        <div className="about-img">
          <img src={img1} alt="About Image" />
        </div>
        <div className="about-desc">
          <p>
            Hey! I'm a Front End developer with a passion for bringing the
            technical and visual aspects of web applications to life.
          </p>
          <p>
            I've always loved computers and technologies so around august 2021 I
            decided to start learning programming and dive head first in the
            area. Since then I learned a lot of things and build a bunch of
            small/medium web applications.
          </p>
          <p>
            I used several plataforms to study but the main one was The Odin
            Project. The stack that I dominate is the triad HTML, CSS,
            JavaScript and the ReactJs library. Soon I intend to learn PHP,
            MySql and Laravel to cover the back end of the web and start
            deploying complete applications.
          </p>
          <p>
            My focus is coding but I know the huge difference a good design can
            make to an app, so I decided to learn it as well to at least be able
            to understand what is happening on the screen and to discern the
            good from the bad. In a close future I intend to dive deeper in
            UI/UX design so I can be very compentent with it.
          </p>
          <p>
            My goal is to become a specialist in Web Development, dominating
            both the Front End and Back End.
          </p>
          <p>
            I little bit about my background. I have a bachelor degree in
            business, and I worked during 2 years in the financial department at
            FCA/Stellantis. The main learnings that I took from my past job
            experience was how to work as a team, solve problems efficiently and
            project management using agile methodologies.
          </p>
          <p>
            I'm always striving to learn new things and improve myself. So I'm
            very open minded about new technologies I may need to learn and I
            learn fast.
          </p>
          <p>
            I've been programming for only a short time, but hope to make a
            career out of it!
          </p>
          <p>Get in touch and let's work together!</p>
        </div>
      </div>
    </section>
  );
};

export default About;
