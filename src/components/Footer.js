import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer custom-container">
      <div className="footer__wrapper">
        <div className="footer__contact">
          <div className="footer__links col-md-5">
            <a
              href="https://github.com/IamMrandrew"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub aria-hidden={true} />
              <span className="footer__hidden-label">Github</span>
            </a>
            <a href="mailto:andrewliyanlap000824@gmail.com">
              <FaEnvelope aria-hidden={true} />
              <span className="footer__hidden-label">Github</span>
            </a>
          </div>
          <div className="footer__content col-md-7">
            <div className="text-wrapper">
              <h2 className="footer__title">Contact Me</h2>
              <p className="footer__desc">
                I love designing, coding, and exploring. If you are interested
                in my work, contact me.
              </p>
            </div>
          </div>
        </div>
        <p className="footer__copyright">@2021 andrew li</p>
      </div>
    </footer>
  );
};

export default Footer;
