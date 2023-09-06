import React, { useState } from "react";

const ExperienceItem = ({ exp, edu }) => {
  const [isShownExp, setShownExp] = useState(false);

  const clickHandler = (e) => {
    setShownExp((prev) => !prev);
  };
  return (
    <li
      key={exp.role}
      className={`expLi ${edu} ${isShownExp ? "active" : ""}`}
      onClick={clickHandler}
    >
      <div className="expHeadDiv">
        <h6>{exp.period}</h6>
      </div>
      <div className="expBodyDiv">
        <h5>{exp.company}</h5>
        <h6>{exp.role}</h6>
        <p>{exp.responsibilities}</p>
      </div>
    </li>
  );
};

export default ExperienceItem;
