import React from "react";

const Referenceitem = ({ item }) => {
  return (
    <div className="referenceItem">
      <div className="referenceLogo">
        <img src="/images/ngs-logo.png" alt="ngslogo" />
      </div>

      <div className="referenceDetail">
        <h5>{item.name}</h5>
        <p>{item.role}</p>
        <p>Phone: {item.phone}</p>
        <p>Email: {item.email}</p>
      </div>
    </div>
  );
};

export default Referenceitem;
