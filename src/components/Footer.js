import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer custom-container">
      <div className="wrapper">
        <div className="contact-wrapper">
          <div className="col-md-5">
            <a href="https://github.com/IamMrandrew" target="_blank">
              <FaGithub />
            </a>
            <a href="mailto:andrewliyanlap000824@gmail.com">
              <FaEnvelope />
            </a>
          </div>
          <div className="col-md-7">
            <div className="text-wrapper">
              <h2 className="footer-title">Contact Me</h2>
              <p className="footer-desc">
                I love designing, coding, and exploring. If you are interested
                in my work, contact me.
              </p>
            </div>
          </div>
        </div>
        <p className="copyright">@2021 andrew li</p>
      </div>
    </footer>
  );
};

export default Footer;
