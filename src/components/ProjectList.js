import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
  const projectsListItems = projects.map((project) => (
    <ProjectItem
      key={project.id}
      name={project.name}
      technologies={project.technologies}
    />
  ));

  return (
    <section>
      <h2>My Projects</h2>

      <div className="tester">{projectsListItems}</div>
    </section>
  );
};

export default ProjectList;
