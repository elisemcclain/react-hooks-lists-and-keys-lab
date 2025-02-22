import React from "react";

const ProjectItem = ({ name, about, technologies }) => {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        <span className="tech name">{technologies}</span>
      </div>
    </div>
  );
};

export default ProjectItem;
