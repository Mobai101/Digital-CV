import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const SkillTrait = (props) => {
  const { ref, inView } = useInView();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (inView) {
      setOpacity(1);
    }
  }, [inView]);

  return (
    <div className="about_skillTrait" ref={ref} style={{ opacity: opacity }}>
      {props.children}
      <h5>{props.skillName}</h5>
      <p>{props.skillDesc}</p>
    </div>
  );
};

export default SkillTrait;
