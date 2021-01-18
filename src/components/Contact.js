import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
} from "react-netlify-forms";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { FaUser, FaEnvelope, FaComments } from "react-icons/fa";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
      <Redirect to="/profile/submitted" />;
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    <Redirect to="/profile/submitted" />;
  };

  return (
    <section className="contact custom-container">
      <h2 className="section-title">Leave some comments</h2>
      <div className="section-block">
        <form
          className="contact-form"
          name="contact-form"
          method="post"
          action="/profile/?success=true"
          // action="/profile/submitted"
          // onSubmit={submitHandler}
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <div className="contact-name-field">
            <FaUser />
            <input
              className="contact-name"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="contact-email-field">
            <FaEnvelope />
            <input
              className="contact-email"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="contact-message-field">
            <FaComments className="icon-comments" />
            <textarea
              className="contact-message"
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
