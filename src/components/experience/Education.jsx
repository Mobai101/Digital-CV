import React from "react";
import ExperienceItem from "./ExperienceItem";

const education = [
  {
    period: "Feb 2023 - Present",
    company: "FUNIX",
    role: "Full Stack Enterprise Certificate",
    responsibilities: `HTML/CSS: GPA 8.7
    JavaScript: GPA 7.2
    ReactJS: GPA 9.4
    NodeJS: GPA 9.4`,
  },
  {
    period: "Aug 2013 - Jun 2017",
    company: "HANOI UNIVERSITY",
    role: "Bachelor - Finance and Banking",
    responsibilities: `GPA: 6.85 (Studied in English)`,
  },
];

const Education = (props) => {
  return (
    <div className="experienceDiv">
      <ul className="expUl">
        {education.map((exp) => {
          return <ExperienceItem exp={exp} edu="edu" key={exp.role} />;
        })}
      </ul>
    </div>
  );
};

export default Education;
