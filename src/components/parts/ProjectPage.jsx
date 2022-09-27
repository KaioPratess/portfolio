import { useState } from 'react';

const ProjectPage = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const SlideNav = () => {
    const divs = props.project.gallery.map((img, index) => {
      return (
        <div
          className="circles"
          onClick={() => setCurrentImage(index)}
          style={{ background: currentImage === index ? 'white' : 'gray' }}
          key={index}
        ></div>
      );
    });

    return divs;
  };

  console.log(props.project);

  return (
    <div className="project-page">
      <div
        className="close-project-page"
        onClick={() => {
          const body = document.querySelector('body');
          body.style.overflow = 'auto';
          props.eraseProject();
        }}
      >
        X
      </div>
      <div className="project-gallery">
        <div className="gallery-slide">
          <img
            src={props.project.gallery[currentImage]}
            alt="Project Image"
            className="photo"
          />
        </div>
        <div className="slide-nav">
          <SlideNav />
        </div>
      </div>
      <div className="project-info">
        <h4>{props.project.name}</h4>
        <p className="project-description">{props.project.description}</p>
        <ul>
          <li>
            Project:<span>{props.project.name}</span>
          </li>
          <li>
            Technologies:
            <span>
              {props.project.technologies.map((tech, index) => {
                if (index === props.project.technologies.length - 1) {
                  return `${tech}.`;
                } else {
                  return `${tech}, `;
                }
              })}
            </span>
          </li>
          <li>
            Category:<span>{props.project.category}</span>
          </li>
          <li>
            Status:<span>{props.project.status}</span>
          </li>
        </ul>
        <div className="project-links">
          <a href={props.project.demo} target="_blank" rel="noopener">
            Demo
          </a>
          <a href={props.project.github} target="_blank" rel="noopener">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
