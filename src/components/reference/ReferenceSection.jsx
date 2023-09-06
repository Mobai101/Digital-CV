import React from "react";
import Container from "../../utils/Container";
import Referenceitem from "./Referenceitem";

const reference = [
  {
    name: "Mr. Nguyen Van Tam",
    role: "SharePoint Developer/ Head of SharePoint department",
    phone: "(+84) 97 988 3775",
    email: "tamnv@ngs.com.vn",
  },
  {
    name: "Mr. Tran Quynh Long",
    role: "SharePoint BA Leader",
    phone: "(+84) 98 958 0083",
    email: "longtq@ngs.com.vn",
  },
];

const ReferenceSection = (props) => {
  return (
    <section className="referenceSection" id="reference">
      <Container>
        <h1 style={{ textAlign: "center" }}>REFERENCES</h1>
        <div className="referenceContainer">
          {reference.map((item) => {
            return <Referenceitem item={item} key={item.name} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default ReferenceSection;
