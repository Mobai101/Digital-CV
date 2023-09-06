import React from "react";
import Container from "../../utils/Container";
import { useInView } from "react-intersection-observer";

const NavBar = (props) => {
  const { ref, inView } = useInView();

  return (
    <Container>
      <header className="navbarContainer">
        <h1>Curriculum Vitae</h1>
        <nav className="navBar" ref={ref}>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#project">PROJECTS</a>
          <a href="#interests">INTERESTS</a>
          <a href="#reference">REFERENCE</a>
        </nav>
        {!inView && (
          <nav className="navBar sticky">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#project">PROJECTS</a>
            <a href="#interests">INTERESTS</a>
            <a href="#reference">REFERENCE</a>
          </nav>
        )}
      </header>
    </Container>
  );
};

export default NavBar;
