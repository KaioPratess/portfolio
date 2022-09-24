const Projects = (props) => {
  return (
    <section className="projects sec" data-sec={props.sec}>
      <h3>{props.section}</h3>
      <p>{props.paragraph}</p>
      {/* <div className="projects-grid">
        <div></div>
        <div></div>
        <div></div>
      </div> */}
    </section>
  );
};

export default Projects;
