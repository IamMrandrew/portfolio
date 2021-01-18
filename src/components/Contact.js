import React from "react";
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
  const { register, handleSubmit, watch, errors } = useForm();
  const netlify = useNetlifyForm({
    name: "react-hook-form",
    action: "/thanks",
    honeypotName: "bot-field",
    onSuccess: (response, context) => {
      console.log("Successfully sent from data to Netlify Server");
    },
  });
  const onSubmit = (data) => netlify.handleSubmit(null, data);

  const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
  console.log(watch("name"));

  return (
    <div className="contact custom-container">
      <h2 className="section-title">Leave some comments</h2>
      <div className="section-block">
        <NetlifyFormProvider {...netlify}>
          <NetlifyFormComponent
            className="contact-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Honeypot />
            <div className="contact-name-field">
              <FaUser />
              <input
                className="contact-name"
                type="text"
                name="name"
                placeholder="Name"
                ref={register({ required: true })}
              />
            </div>
            <div className="contact-email-field">
              <FaEnvelope />
              <input
                className="contact-email"
                name="email"
                type="email"
                placeholder="Email"
                ref={register({
                  required: true,
                })}
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
                ref={register({ required: true })}
              />
            </div>
            <Button text="Submit" type="submit" />
          </NetlifyFormComponent>
        </NetlifyFormProvider>
      </div>
    </div>
  );
};

export default Contact;
