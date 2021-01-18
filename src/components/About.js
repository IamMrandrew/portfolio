import React from "react";
import Button from "./Button";
import memoji from "../img/memoji.png";
import resume from "../file/resume-4.pdf";

const About = () => {
  return (
    <section className="about custom-container">
      <div className="text-wrapper">
        <h1 className="main-title">Know more about me?</h1>
        <p className="about-desc">
          I am a year 3 student in the Chinese University of Hong Kong majoring
          in Computer Science.
        </p>
        <p className="about-desc">
          I love designing and coding. Working on frontend web development and
          UI/ UX design recently.
        </p>
        <p className="about-desc">
          I am eager to learn more and I can learn quickly
        </p>
        <a href={resume}>
          <Button text={"Resume"} />
        </a>
      </div>
      <div className="img-wrapper">
        <img src={memoji} alt="memoji" />
      </div>
    </section>
  );
};

export default About;
