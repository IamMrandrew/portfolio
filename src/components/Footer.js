import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer custom-container">
      <div className="contact-wrapper">
        <div className="col-lg-5">
          <FaGithub />
          <FaEnvelope />
        </div>
        <div className="col-lg-7">
          <div className="text-wrapper">
            <h2 className="footer-title">Contact Me</h2>
            <p className="footer-desc">
              I love designing, coding, and exploring. If you are interested in
              my work, contact me.
            </p>
          </div>
        </div>
      </div>
      <p className="copyright">@2021 andrew li</p>
    </footer>
  );
};

export default Footer;
