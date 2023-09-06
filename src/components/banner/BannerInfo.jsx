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
          <div>
            <p>HELLO EVERYBODY, I AM</p>
            <h1>TRAN LE DONG</h1>
            <h6>FULL STACK DEVELOPER</h6>
            <p>
              <BsCalendar3 /> 01/01/1995
            </p>
            <p>
              <BsTelephone /> (+84) 39 644 6388
            </p>
            <p>
              <FiMail /> tranledong0101@gmail.com
            </p>
            <p>
              <BsHouseDoor /> 97 Bui Duong Lich, Son Tra, Da Nang
            </p>
            <div className="socialLinks">
              <span>
                <a
                  href="https://www.facebook.com/mobai123"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/Mobai101"
                  target="_blank"
                  rel="noreferrer"
                >
                  <PiGithubLogoFill />
                </a>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BannerInfo;
