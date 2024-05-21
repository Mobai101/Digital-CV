import React from "react";
import { BsCalendar3, BsTelephone, BsHouseDoor } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import Container from "../../utils/Container";

const BannerInfo = (props) => {
  return (
    <section>
      <Container>
        <div className="bannerArea">
          <div>
            <img src="/images/avatar.jpg" alt="avatar" />
          </div>
          <address>
            <p>HELLO EVERYBODY, I AM</p>
            <h1>TRAN LE DONG</h1>
            <h6>FULL STACK DEVELOPER</h6>
            <p>
              <BsCalendar3 /> 01/01/1995
            </p>
            <a href="tel:+84396446388">
              <BsTelephone /> (+84) 39 644 6388
            </a>
            <a href="mailto:tranledong0101@gmail.com">
              <FiMail /> tranledong0101@gmail.com
            </a>
            <p>
              <BsHouseDoor /> 97 Bui Duong Lich, Son Tra, Da Nang
            </p>
            <div className="socialLinks">
              <a
                href="https://www.facebook.com/mobai123"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://github.com/Mobai101"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiGithubLogoFill />
              </a>
            </div>
          </address>
        </div>
      </Container>
    </section>
  );
};

export default BannerInfo;
