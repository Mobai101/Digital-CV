import React from "react";
import Container from "../../utils/Container";
import SkillScore from "./SkillScore";
import SkillTrait from "./SkillTrait";
import { SiMicrosoftoffice } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

const AboutSection = (props) => {
  return (
    <section id="about">
      <Container>
        <div className="about_flexContainer">
          <div className="about_leftDiv">
            <h3 style={{ fontWeight: "700" }}>ABOUT ME</h3>
            <p>
              From 2019 to 2022, I was working for NGSC (in Ha Noi) as a
              SharePoint Tester / Business Analyst for the Nghi Son Refinery
              project. Due to my passion for technology in general and for
              coding in particular plus my personal goal of moving from Ha Noi
              to Da Nang, I have spent the good part of last year learning how
              to program. Recently, I have joined an internship program in
              Madison Technologies but afterward they decided to let go of the
              whole internship team (probably due to having no additional
              project for our team to work on, tight budget, etc.). Therefore, I
              am now currently seeking new opportunities that will allow me to
              leverage my skills and experiences in this field.
            </p>
            <div className="about_skillTraitContainer">
              <SkillTrait
                skillName="English"
                skillDesc="Advanced English skill, strong technical reading and can communicate with English confidently."
              >
                <HiOutlineChatBubbleBottomCenterText />
              </SkillTrait>
              <SkillTrait
                skillName="Problem Solving"
                skillDesc="Have a logical approach to most problems."
              >
                <LuBrainCircuit />
              </SkillTrait>
              <SkillTrait
                skillName="Office"
                skillDesc="Well familiar with MS Office 365 Suite, especially MS Excel."
              >
                <SiMicrosoftoffice />
              </SkillTrait>
            </div>
          </div>
          <div className="about_rightDiv">
            <SkillScore skillName="HTML/CSS" skillScore="90%" />
            <SkillScore skillName="JavaScript" skillScore="80%" />
            <SkillScore skillName="ReactJS" skillScore="100%" />
            <SkillScore skillName="VueJS" skillScore="100%" />
            <SkillScore skillName="NodeJS" skillScore="80%" />
            <SkillScore skillName="Python" skillScore="50%" />
            <SkillScore skillName="MongoDB" skillScore="90%" />
            <SkillScore skillName="SQL" skillScore="70%" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
