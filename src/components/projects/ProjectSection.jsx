import React from "react";
import Container from "../../utils/Container";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "Digital Curriculum Vitae",
    desc: "Personal Portfolio / CV",
    language: "ReactJS",
    demo: [{ name: "Demo", link: "/" }],
    source: [
      { name: "Source Code", link: "https://github.com/Mobai101/Digital-CV" },
    ],
    thumbnail: "/images/portfolio-app.png",
  },
  {
    title: "Apple Store App",
    desc: "Full Stack application including a client for user to order apple products, an admin page to manage products and orders, and an ExpressJS backend with MongoDB database.",
    language: "ReactJS, NodeJS",
    demo: [
      {
        link: "https://applestore-clone-client.firebaseapp.com/",
        name: "Client",
      },
      {
        link: "https://applestore-clone-admin.firebaseapp.com/",
        name: "Admin",
      },
    ],
    source: [
      {
        name: "Client Source Code",
        link: "https://github.com/Mobai101/AppleStore-Client",
      },
      {
        name: "Admin Source Code",
        link: "https://github.com/Mobai101/AppleStore-Admin-React",
      },
      {
        name: "Backend Source Code",
        link: "https://github.com/Mobai101/AppleStore-Admin",
      },
    ],
    thumbnail: "/images/apple-store.png",
  },
  {
    title: "Booking App",
    desc: "Full Stack application including a client for user to book hotel, an admin page to manage hotels and rooms, and an ExpressJS backend with MongoDB database.",
    language: "ReactJS, NodeJS",
    demo: [
      {
        link: "https://booking-app-client-d3a00.firebaseapp.com/",
        name: "Client",
      },
      {
        link: "https://booking-app-admin-57524.firebaseapp.com/",
        name: "Admin",
      },
    ],
    source: [
      {
        name: "Client Source Code",
        link: "https://github.com/Mobai101/BookingApp-client",
      },
      {
        name: "Admin Source Code",
        link: "https://github.com/Mobai101/BookingApp-admin",
      },
      {
        name: "Backend Source Code",
        link: "https://github.com/Mobai101/BookingApp-server",
      },
    ],
    thumbnail: "/images/booking-app.png",
  },
  {
    title: "Movies App",
    desc: "Application that uses public API to show lists of some trending movies.",
    language: "ReactJS",
    demo: [
      { link: "https://assignment-02-movie.firebaseapp.com/", name: "Demo" },
    ],
    source: [
      {
        name: "Source Code",
        link: "https://github.com/Mobai101/Movie-App",
      },
    ],
    thumbnail: "/images/movie-app.png",
  },
  {
    title: "Pet Management App",
    desc: "Application to manage pet information such as: weight, breed, vaccination status, etc.",
    language: "HTML, CSS, JavaScript",
    demo: [{ link: "https://mobai101.github.io/Pet-App/", name: "Demo" }],
    source: [
      {
        name: "Source Code",
        link: "https://github.com/Mobai101/Pet-App",
      },
    ],
    thumbnail: "/images/pet-app.png",
  },
  {
    title: "News App",
    desc: "Application that uses public API to show world news. User can use several features such as: login/signup, search, settings, etc. The app also includes a to do list function.",
    language: "HTML, CSS, JavaScript",
    demo: [{ link: "https://mobai101.github.io/News-App/", name: "Demo" }],
    source: [
      {
        name: "Source Code",
        link: "https://github.com/Mobai101/News-App",
      },
    ],
    thumbnail: "/images/news-app.png",
  },
];

const ProjectSection = (props) => {
  return (
    <section id="project" className="projectSection">
      <Container>
        <h1>MY PROJECTS</h1>
        <div className="projectsContainer">
          {projects.map((proj) => {
            return <ProjectItem project={proj} key={proj.title} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default ProjectSection;
