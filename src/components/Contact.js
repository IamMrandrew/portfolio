import React from "react";
import Button from "./Button";
import { FaUser, FaEnvelope, FaComments } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact custom-container">
      <h2 className="section-title">Leave some comments</h2>
      <div className="section-block">
        <form className="contact-form" action="">
          <div className="contact-name-field">
            <FaUser />
            <input className="contact-name" type="text" placeholder="Name" />
          </div>
          <div className="contact-email-field">
            <FaEnvelope />
            <input className="contact-email" type="text" placeholder="Email" />
          </div>
          <div className="contact-message-field">
            <FaComments className="icon-comments" />
            <textarea
              className="contact-message"
              type="text"
              placeholder="What do you think about me? Enter your message here ..."
              rows="6"
            />
          </div>
          <Button text="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
