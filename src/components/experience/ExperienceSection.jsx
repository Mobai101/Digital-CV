import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import Container from "../../utils/Container";
import Experiences from "./Experiences";
import Education from "./Education";

const ExperienceSection = (props) => {
  const [showXp, setShowXp] = useState(true);

  return (
    <section className="experienceSection" id="experience">
      <Container>
        <div className="experience_buttonsContainer">
          <button
            className={showXp ? "active" : ""}
            onClick={() => {
              setShowXp(true);
            }}
          >
            Experience
          </button>
          <button
            className={!showXp ? "active" : ""}
            onClick={() => {
              setShowXp(false);
            }}
          >
            Education
          </button>
        </div>
        {/* {showXp ? <Experiences /> : <Education />} */}
        <CSSTransition
          in={showXp}
          unmountOnExit
          timeout={{ enter: 500, exit: 0 }}
          classNames="exp"
        >
          <Experiences />
        </CSSTransition>
        <CSSTransition
          in={!showXp}
          unmountOnExit
          timeout={{ enter: 500, exit: 0 }}
          classNames="edu"
        >
          <Education />
        </CSSTransition>
      </Container>
    </section>
  );
};

export default ExperienceSection;
