import React, { useState } from "react";

const ProjectItem = ({ project }) => {
  const [showDetail, setShowDetail] = useState(false);

  const detailHandler = () => {
    setShowDetail((prev) => !prev);
  };

  return (
    <div className="projectItem">
      <div className="projectItem_image">
        <img src={project.thumbnail} alt={project.title} />
        <div className="projectItem_middle">
          {project.demo.map((demo) => {
            return (
              <a href={demo.link} target="_blank" rel="noopener noreferrer">
                {demo.name}
              </a>
            );
          })}
        </div>
      </div>
      <h4>{project.title}</h4>

      <button onClick={detailHandler} className="showDetailBtn">
        {showDetail ? "Hide Detail" : "More Detail"}
      </button>
      {showDetail && (
        <div className="projectItem_detail">
          <p>
            <b>Language: </b> {project.language}
          </p>
          <p>
            <b>Description:</b> {project.desc}
          </p>
          <p>
            <b>Source Code:</b>
          </p>
          <ul>
            {project.source.map((source) => {
              return (
                <li>
                  <a
                    href={source.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
