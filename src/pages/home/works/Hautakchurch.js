import React from "react";

import { motion } from "framer-motion";

import Button from "../../../components/Button";

import featureHautakchurch from "../../../assets/img/feature-hautakchurch.jpg";
import workHautakchurch1 from "../../../assets/img/work-hautakchurch-1.jpg";

const Hautakchurch = () => {
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
        <motion.img
          variants={textIn}
          className="work-page__feature-img"
          src={featureHautakchurch}
          alt="feature-hautakchurch"
        />
      </div>
      <div className="work-page__content">
        <div className="overflow-wrapper">
          <motion.h1 variants={textIn} className="work-page__title">
            Hau Tak Church Web
          </motion.h1>
        </div>
        <div className="overflow-wrapper">
          <motion.div variants={textIn} className="section-block">
            <h3 className="work-page__date">Jul 2020 - Sep 2020</h3>
            <div className="work-page__overview">
              <p className="work-page__p">
                Hau Tak Church website was built with Wordpress as CMS. This is
                a custom theme for hautakchurch.org as you may curious about,
                and is developed by using underscores as starter theme.
              </p>
            </div>
            <a
              className="work-page__links"
              target="_blank"
              rel="noreferrer"
              href="https://hautakchurch.org/wordpress"
            >
              <Button text="View work" />
            </a>
            <a
              className="work-page__links"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/IamMrandrew/hautakchurch2020-wp-theme"
            >
              <Button text="View GitHub" />
            </a>
          </motion.div>
        </div>
        <div className="work-page__para">
          <h2 className="work-page__subtitle">Features</h2>
          <p className="work-page__p">
            Modern & clean webpage design
            <br />
            Custom post type for more customization <br />
            Custom animated header (navigation bar)
            <br />
            Customize function.php <br />
            Multi-pages templates
          </p>
        </div>
        <div className="work-page__para">
          <h2 className="work-page__subtitle">Webpage Design</h2>
          <p className="work-page__p">
            The website has been rebuilt for many times. It was just a dynamic
            website with PHP as backend hosted with Synology server. If user
            want to edit the content, they have to access to the database
            directly. Also, the design is very old and it is not even
            responsive.
          </p>
          <p className="work-page__p">
            Recently, I planned to rebuild this site into a wordpress based
            site. The reason why I decided to make this decision is because
            using wordpress as CMS provide better user-experience for admin who
            have to constantly update the content.
          </p>
          <p className="work-page__p">
            The approach is start is to create a custom theme from Underscores.
            Also, I would like to make some changes on the design and the
            styling of the content to make the site more attractive.
          </p>
        </div>
        <img
          className="work-page__img"
          src={workHautakchurch1}
          alt="work-hautakchurch-1"
        />
        <div className="work-page__para">
          <h2 className="work-page__subtitle">Content Management System</h2>
          <p className="work-page__p">
            As this project targets the needed of the church, which required to
            upload audios and edit notices frequency. I chose wordpress as the
            CMS while develop my own theme for fully customization.
          </p>
          <p className="work-page__p">
            Moreover, for the audio recordings. I created a custom post type for
            it with customized metadata. This allowed the user the upload the
            recordings which fit in into the recordings componenets template
            that I designed. Same for the events, activities and documents,.
          </p>
        </div>
        <div className="work-page__para">
          <h3 className="work-page__bold">Adding hooks for custom post type</h3>
          <h3 className="work-page__bold">
            Adding hooks for custom post type metadata
          </h3>
          <p className="work-page__p">
            There are more and more features and ideas included in this theme.
            Feel free to explore more...
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Hautakchurch;
