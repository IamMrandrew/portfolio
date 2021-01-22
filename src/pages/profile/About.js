import React from "react";
import { motion } from "framer-motion";

import Button from "../../components/Button";
import memoji from "../../assets/img/memoji.png";
import resume from "../../assets/file/resume.pdf";

const About = () => {
  const textsIn = {
    animate: {
      transition: {
        // delayChildren: 0.5,
        staggerChildren: 0.4,
        staggerDirection: 1,
      },
    },
  };

  const textIn = {
    initial: {
      y: 100,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <section className="about custom-container">
      <motion.div
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        variants={textsIn}
        className="text-wrapper"
      >
        <div className="overflow-wrapper">
          <motion.h1 variants={textIn} className="about__title">
            Know more about me?
          </motion.h1>
        </div>
        <div className="overflow-wrapper">
          <motion.p variants={textIn} className="about__desc">
            I am a year 3 student in the Chinese University of Hong Kong
            majoring in Computer Science.
          </motion.p>
        </div>
        <div className="overflow-wrapper">
          <motion.p variants={textIn} className="about__desc">
            I love designing and coding. Working on frontend web development and
            UI/ UX design recently.
          </motion.p>
        </div>
        <div className="overflow-wrapper">
          <motion.p variants={textIn} className="about__desc">
            I am eager to learn more and I can learn quickly
          </motion.p>
        </div>
        <div className="overflow-wrapper">
          <a href={resume}>
            <motion.div variants={textIn}>
              <Button
                variants={textIn}
                className="about__button"
                text={"Resume"}
              />
            </motion.div>
          </a>
        </div>
      </motion.div>
      <div className="img-wrapper">
        <img className="about__img" src={memoji} alt="memoji" />
      </div>
    </section>
  );
};

export default About;
