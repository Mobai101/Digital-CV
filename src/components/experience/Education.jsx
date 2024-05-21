import React from "react";
import ExperienceItem from "./ExperienceItem";

const education = [
  {
    period: "Mar 2023 - Sep 2023",
    company: "FUNIX",
    role: "Web Fullstack Developer Certificate",
    responsibilities: `HTML/CSS: GPA 8.7
    JavaScript: GPA 7.2
    ReactJS: GPA 9.4
    NodeJS: GPA 9.4`,
    height: "200px",
  },
  {
    period: "Jan 2023 - Jun 2023",
    company: "HARVARD UNIVERSITY",
    role: "CS50x",
    responsibilities: `Completed the CS50x course online including ten problem sets, nine labs, and one final project.
    `,
    height: "150px",
  },
  {
    period: "Aug 2013 - Jun 2017",
    company: "HANOI UNIVERSITY",
    role: "Bachelor - Finance and Banking",
    responsibilities: `GPA: 6.85 (Studied in English)`,
    height: "140px",
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
