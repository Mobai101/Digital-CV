import React from "react";
import ExperienceItem from "./ExperienceItem";

const experiences = [
  {
    period: "July 2019 - Nov 2022",
    company: "NGSC",
    role: "SharePoint Support Specialist / Business Analyst",
    responsibilities: `BA Tasks:
      - Work with end user to receive and analyze requirement.
      - Create documents for improvement project (proposal, requirement document, functional specification, SDT, UAT, User Guide).
      - Work with development team with document, design and testing for new improvement project.

      Support Tasks:
      - Support users with how to use the SharePoint system.
      - Receive issues from users and find solution to resolve or forward to development team to fix serious bugs.
      - Work with users' departments to manage system config, permission and workflow on the system.
      - Support with other management tasks of team such as reports, arrange meeting, managing tickets, etc.`,
  },
  {
    period: "Oct 2018 - May 2019",
    company: "VISANA / VIETNAM DISCOVERY TRAVEL",
    role: "Outbound Visa Operator",
    responsibilities: `- Prepare Visa Application for customers including: Fill out Visa form, Prepare schedule for Visa Application, check documents for errors, etc.
      - Guide customers to the Embassy or Visa Application Center to Apply for Visa or Submit them myself if authorized.
      
      Skills gained:
      - Experience in Visa Application procedure.
      - Communication with customers.`,
  },
  {
    period: "Dec 2017 - Aug 2018",
    company: "PHUONG CHI SOFTWARE",
    role: "Data Processing Staff",
    responsibilities: `- Scrape data from supplier website for customer (Wayfair).
    - Format and organize data on Excel worksheet.
    - Check team members' works for error.

    Skills gained:
    - Office skills (especially Excel).
    - Team communication skills.
    - Cooperation skills.`,
  },
];

const Experiences = (props) => {
  return (
    <div className="experienceDiv">
      <ul className="expUl">
        {experiences.map((exp) => {
          return <ExperienceItem exp={exp} edu="" key={exp.role} />;
        })}
      </ul>
    </div>
  );
};

export default Experiences;
