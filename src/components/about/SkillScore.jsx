import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const SkillScore = (props) => {
  const { ref, inView } = useInView();
  const [progressWidth, setProgressWidth] = useState("0%");

  useEffect(() => {
    if (inView) {
      setProgressWidth(props.skillScore);
    }
  }, [inView, props.skillScore]);

  return (
    <div className="skillItem">
      <h6>{props.skillName}</h6>
      <div className="skillBar">
        <div
          className="skillProgress"
          style={{ width: progressWidth }}
          ref={ref}
        >
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default SkillScore;
