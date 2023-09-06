import React from "react";
import NavBar from "./NavBar";
import BannerInfo from "./BannerInfo";

const BannerSection = (props) => {
  return (
    <section className="bannerSection" id="home">
      <NavBar />
      <BannerInfo />
    </section>
  );
};

export default BannerSection;
