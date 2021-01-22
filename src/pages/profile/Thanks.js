import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import thanksSVG from "../../assets/img/thanks.svg";
import Button from "../../components/Button";

const Thanks = () => {
  const textsIn = {
    animate: {
      transition: {
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
    <motion.section
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      variants={textsIn}
      className="thanks custom-container"
    >
      <div className="text-wrapper">
        <div className="overflow-wrapper">
          <motion.h1 variants={textIn} className="thanks__title">
            Thank you for your Feedback
          </motion.h1>
        </div>
        <div className="overflow-wrapper">
          <motion.p variants={textIn} className="thanks__subtitle">
            Form submitted. Thank you :)
          </motion.p>
        </div>
        <Link to="/">
          <div className="overflow-wrapper">
            <motion.div variants={textIn}>
              <Button text="Back to homepage" />
            </motion.div>
          </div>
        </Link>
      </div>
      <div className="img-wrapper">
        <img className="thanks__img" src={thanksSVG} alt="thanks-svg" />
      </div>
    </motion.section>
  );
};

export default Thanks;
