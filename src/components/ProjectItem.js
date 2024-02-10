import React from "react";

function ProjectItem({ name, about, technologies }) {
  const spanList=technologies.map((technology)=><span key={technology}>{technology}</span>)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {spanList}
      </div>
    </div>
  );
}

export default ProjectItem;
