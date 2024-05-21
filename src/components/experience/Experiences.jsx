import React from "react";
import ExperienceItem from "./ExperienceItem";

const experiences = [
  {
    period: "Feb 2024 - May 2024",
    company: "MADISON TECHNOLOGIES",
    role: "Front-end Developer Intern",
    responsibilities: `- Review HTML, CSS, JavaScript and learn new front-end framework (VueJS).
    - Work independently on "Agency" project with vanilla JS, then convert to VueJS.
    - Work on the "Move" project together with a front-end, a back-end and a QA team.
    - Personal tasks within the "Move" project includes: Featured Carousel, Categories list, Videos you may like, Browse Categories, Browse Top Videos, Watch Video, Rate Video, Count views for video, video categorized chart, etc.

    Skills gained:
    - Learned a new front-end framework (VueJS).
    - Learned how to collaborate with other developer using Git and GitHub with a large codebase.
    - Gained experience working in Agile methodologies with sprint planning and daily meetings.
    `,
    height: "380px",
  },
  {
    period: "July 2019 - Nov 2022",
    company: "NGSC",
    role: "SharePoint Tester / Business Analyst",
    responsibilities: `- Support users with how to use the SharePoint system.
    - Work with end user to receive and analyze problems.
    - Create documents for projects (proposal, requirement document, functional specification, SDT, UAT, User Guide).
    - Work with development team with document, design and testing for new projects.
    - Work with users departments to manage database, permission and workflow on the system.
    - Support with other management tasks of team such as reports, arrange meeting, managing tickets, etc.
    `,
    height: "280px",
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
    height: "300px",
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
    height: "300px",
  },
];

const Experiences = (props) => {
  return (
    <div className="experienceDiv">
      <ul className="expUl">
        {experiences.map((exp) => (
          <ExperienceItem exp={exp} edu="" key={exp.role} />
        ))}
      </ul>
    </div>
  );
};

export default Experiences;
