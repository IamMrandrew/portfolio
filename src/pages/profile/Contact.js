import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import { FaUser, FaEnvelope, FaComments } from "react-icons/fa";

const Contact = () => {
  const history = useHistory();

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      history.push("/profile/thanks");
    }
  }, []);

  return (
    <section className="contact custom-container">
      <h2 className="contact__title">Leave some comments</h2>
      <div className="section-block">
        <form
          className="contact__form"
          name="contact-form"
          method="post"
          action="/profile/?success=true"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <div className="contact__name-field">
            <FaUser />
            <input
              className="contact__name-input"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="contact__email-field">
            <FaEnvelope />
            <input
              className="contact__email-input"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="contact__message-field">
            <FaComments className="contact__icon-comments" />
            <textarea
              className="contact__message-input"
              name="message"
              type="text"
              placeholder="What do you think about me? Enter your message here ..."
              rows="6"
            />
          </div>
          <Button text="Submit" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
