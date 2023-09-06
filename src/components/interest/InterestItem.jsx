import React, { useState } from "react";

const InterestItem = (props) => {
  const [showDetail, setShowDetail] = useState(false);

  const detailHandler = () => {
    setShowDetail((prev) => !prev);
  };

  return (
    <div className="interestItem">
      {props.children}
      <h5>{props.title}</h5>
      <button onClick={detailHandler} className="showDetailBtn interestBtn">
        {showDetail ? "Hide Detail" : "More Detail"}
      </button>
      {showDetail && <p>{props.desc}</p>}
    </div>
  );
};

export default InterestItem;
