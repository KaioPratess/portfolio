import { useEffect, useState, useRef } from 'react';
import Card from './parts/Card';
import ProjectPage from './parts/ProjectPage';
import { nanoid } from 'nanoid';

const Projects = (props) => {
  const [currentProject, setCurrentProject] = useState('');
  const [currentProjectObj, setCurrentProjectObj] = useState();

  const sec = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !entry.target.classList.contains('projects-grid')
          ) {
            entry.target.classList.add('fade-in-left1');
            entry.target.style.visibility = 'visible';
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 1,
      },
    );

    sec.current.childNodes.forEach((el) => {
      observer.observe(el);
    });
  }, []);

  useEffect(() => {
    const projectName = currentProject
      .toLowerCase()
      .replace(/ /g, '-')
      .replace('?', '');
    console.log(projectName);
    setCurrentProjectObj(props.projects[projectName]);
  }, [currentProject]);

  const changeProject = (name) => {
    setCurrentProject(name);
  };

  const eraseProject = () => {
    setCurrentProjectObj(false);
    setCurrentProject('');
  };

  const ProjectsArray = () => {
    const projects = Object.keys(props.projects);
    const jsx = projects.map((project) => {
      const obj = props.projects[project];
      return (
        <Card
          name={obj.name}
          background={obj.background}
          tags={obj.technologies}
          status={obj.status}
          category={obj.category}
          key={nanoid()}
          changeProject={changeProject}
          setCurrentProject={setCurrentProject}
        />
      );
    });

    return jsx;
  };

  return (
    <section className="projects sec" ref={sec} data-sec={props.sec}>
      <h3>{props.section}</h3>
      <p>{props.paragraph}</p>
      <div className="projects-grid">
        <ProjectsArray />
      </div>
      {currentProjectObj && (
        <ProjectPage project={currentProjectObj} eraseProject={eraseProject} />
      )}
    </section>
  );
};

export default Projects;
