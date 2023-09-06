import React from "react";
import Container from "../../utils/Container";
import InterestItem from "./InterestItem";
import { FaComputer } from "react-icons/fa6";
import { GiAtom } from "react-icons/gi";
import { MdCardTravel } from "react-icons/md";
import { IoMdBicycle } from "react-icons/io";
import { FaPersonSwimming } from "react-icons/fa6";
import { PiGameController } from "react-icons/pi";

const InterestSection = (props) => {
  return (
    <section className="interestSection" id="interests">
      <Container>
        <h1>SOME OF MY INTERESTS</h1>
        <div className="interestsContainer">
          <InterestItem
            title="Technology"
            desc="I love everything related to new technology such as PC hardware, handheld devices, smartphone, headphone, etc. I even use technology for cooking with a sous vide machine. My most valuable possession that I very carefully shipped from Ha Noi to Da Nang is my PC setup."
          >
            <FaComputer />
          </InterestItem>
          <InterestItem
            title="Science"
            desc="If I have to state my religion, then it would be science (even though it is not a religion). I firmly believe that science is a way of thinking as much as it is a body of knowledge. Everything I do in life I try my best to follow guidelines from scientific studies. If not then I try my best to use logical thinking and objective views instead of feeling to avoid biases."
          >
            <GiAtom />
          </InterestItem>
          <InterestItem
            title="Travelling"
            desc="I have travelled to almost all of the popular cities in Viet Nam from the north to the south. I have not yet have the opportunity to travel abroad much but I aim to do so in the near future."
          >
            <MdCardTravel />
          </InterestItem>
          <InterestItem
            title="Cycling"
            desc="In my opinion cycling is the best exercise to lose weight. It can be very intense if you go fast or go up a slope, it is a low impact exercise which means no more knee pain from running. Best of all, with Son Tra cycling route in Da Nang there really is no reason to pay for a gym membership anymore."
          >
            <IoMdBicycle />
          </InterestItem>
          <InterestItem
            title="Swimming"
            desc="Before getting into cycling, I was an avid swimmer. I mostly swam in a swimming pool with my gym membership when I was living in Ha Noi. I have been able to taught myself how to swim breaststroke, frontcrawl and backstroke from just watching YouTube tutorial and then practice in the swimming pool by myself. Now that I have moved to Da Nang, I can go for a swim at the beach anytime that I want."
          >
            <FaPersonSwimming />
          </InterestItem>
          <InterestItem
            title="Gaming"
            desc="Same as any young male, I also enjoy playing video games. You could say that gaming was the reason why I got so interested in technology. However, nowaday I don't really play that much anymore as I find there are better things to do with my time such as coding, cycling, etc. You could say that coding have replaced gaming for me as it also fulfills the desire to solve problems that gaming brings while also being beneficial."
          >
            <PiGameController />
          </InterestItem>
        </div>
      </Container>
    </section>
  );
};

export default InterestSection;
