import Home from './components/home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import projectsInfo from './assets/infos/projectsInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div>
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
              d="M19.1136 31V13.5455H21.2273V22.2045H21.4318L29.2727 13.5455H32.0341L24.7045 21.4205L32.0341 31H29.4773L23.4091 22.8864L21.2273 25.3409V31H19.1136Z"
              fill="white"
            />
          </svg>
        </div>
      </header>
      <Navigation />
      <Home sec="home" />
      <About sec="about" />
      <Skills sec="skills" />
      <Projects
        section="Projects"
        paragraph="Showcasing complete functional projects demonstrates what I can bring as value to your project. I built these projects from the ground up to demonstrate my skills in front-end development. All these projects are built so you can demo them easily. Contact me to get a complete code walkthrough."
        sec="projects"
        projects={projectsInfo}
      />
      <Projects
        section="Coding Challenges"
        paragraph="I like to challenge myself and learn new things. Coding challenges allow me to solve new problems  with code but in a smaller scale that  a full project. Plus they are fun to do!  Each code challenge is display in their own mini sites that allow you to interact with the challenges."
        sec="challenges"
        projects={projectsInfo}
      />
      <Contact sec="contact" />
      <footer className="footer">
        <p>Designed & Coded by Kaio Pratess</p>
      </footer>
    </div>
  );
}

export default App;
