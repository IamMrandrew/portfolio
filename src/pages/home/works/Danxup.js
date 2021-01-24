import React from "react";

import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";

import Button from "../../../components/Button";

import featureDanxup from "../../../assets/img/feature-danxup.jpg";
import tinyFeatureDanxup from "../../../assets/img/tiny/feature-danxup.jpg";

const Danxup = () => {
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
    <motion.div
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      className="work-page custom-container"
    >
      <div className="overflow-wrapper">
        <ProgressiveImage src={featureDanxup} placeholder={tinyFeatureDanxup}>
          {(src) => (
            <motion.img
              variants={textIn}
              className="work-page__feature-img"
              src={src}
              alt="feature-danxup"
            />
          )}
        </ProgressiveImage>
      </div>
      <div className="work-page__content">
        <div className="overflow-wrapper">
          <motion.h1 variants={textIn} className="work-page__title">
            danXup
          </motion.h1>
        </div>
        <div className="overflow-wrapper">
          <motion.div variants={textIn} className="section-block">
            <h3 className="work-page__date">Jan 2 2021 - Jan 9 2021</h3>
            <div className="work-page__overview">
              <p className="work-page__p">
                danXup is a working prototype for the technology part of
                NofallTech. This project leads to shortlisted 15 teams in Hong
                Kong Techathon 2021 of the theme "Social Impact & Health Tech".
              </p>
            </div>
            <a
              className="work-page__links"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/IamMrandrew/NofallTech"
            >
              <Button text="View GitHub" />
            </a>
          </motion.div>
        </div>
        <div className="work-page__para">
          <h3 className="work-page__bold">What is NofallTech?</h3>
          <p className="work-page__p">
            NofallTech focuses on fall prevention especially for 50-65+. The
            idea of fall prevention is to form a dance group for them. Within
            the dancing session, we can analyze their postures/ motions to
            identify their problems.
          </p>
          <p className="work-page__p">
            Therefore, we can provide rhythmic movements according to the
            research from Otago University, with the help of a dance
            choreographer and physiotherapist to reduce to risk of falling.
          </p>
          <p className="work-page__p">
            This project is focusing on the platform/ application of the dancing
            service and motion tracking.
          </p>
        </div>
        <div className="work-page__para">
          <h2 className="work-page__subtitle">Pose Animator</h2>
          <p className="work-page__p">
            For the motion tracking feature, I used{" "}
            <a
              className="work-page__links work-page__links--inline"
              href="https://github.com/yemount/pose-animator"
              target="_blank"
              rel="noreferrer"
            >
              Pose Animator
            </a>{" "}
            for the simulation.
          </p>
          <p className="work-page__p">
            Pose Animator takes a 2D vector illustration and animates its
            containing curves in real-time based on the recognition result from
            PoseNet and FaceMesh. It borrows the idea of skeleton-based
            animation from computer graphics and applies it to vector
            characters.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Danxup;
