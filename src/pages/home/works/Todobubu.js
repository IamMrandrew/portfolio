import React from "react";
import { motion } from "framer-motion";
import featureTodobubu from "../../../assets/img/feature-todobubu.jpg";
import workTodobubu1 from "../../../assets/img/work-todobubu-1.jpg";
import workTodobubu2 from "../../../assets/img/work-todobubu-2.png";
import workTodobubu3 from "../../../assets/img/work-todobubu-3.png";
import Button from "../../../components/Button";

const Todobubu = () => {
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
          className="feature-img"
          src={featureTodobubu}
          alt="feature-todobubu"
        />
      </div>
      <div className="content">
        <div className="overflow-wrapper">
          <motion.h1 variants={textIn} className="work-title">
            Todobubu
          </motion.h1>
        </div>
        <div className="overflow-wrapper">
          <motion.div variants={textIn} className="section-block">
            <h3 className="work-date">Jan 9 2020 - Jan 17 2020</h3>
            <p className="work-overview">
              Todobubu, a light weight daily todo list application. It focus on
              planning daily workflow, making your day become more productive.
              It is a cloud-based, cross-platform application which you can
              access your todos everywhere with your phones, tablets or
              desktops.
            </p>
            <a
              className="work-links"
              target="_blank"
              href="https://todobubu.laporatory.com/"
            >
              <Button text="View work" />
            </a>
            <a
              className="work-links"
              target="_blank"
              href="https://github.com/IamMrandrew/Todobubu"
            >
              <Button text="View GitHub" />
            </a>
          </motion.div>
        </div>
        <div className="work-para">
          <h2 className="work-subtitle">Features</h2>
          <p className="work-p">
            Adding Todos <br />
            Responsive & Clean UI/UX Design <br />
            Cross Platform Support
          </p>
        </div>
        <div className="work-para">
          <h3 className="work-bold">Adding Todos</h3>
          <p className="work-p">
            As a todo list application, Todobubu provided a simple and handy way
            for users to add a todo. Unlike other todo lists, each todo inside
            Todobubu occupies its own timeslot, which is assigned with a
            starting time and an ending time or a duration.
          </p>
          <p className="work-p">
            Todobubu will help the users to sort the todos and give users a
            brief schedule of the day. Plan well before you start the journey.
            Well scheduled will definitely help to increase the productivity of
            the day.
          </p>
        </div>
        <img
          className="work-img sm"
          src={workTodobubu1}
          alt="work-todobubu-1"
        />
        <div className="work-para">
          <h3 className="work-bold">Responsive & Clean UI/UX Design</h3>
          <p className="work-p">
            With a bright and smart blue color, Todobubu enlights your whole
            day. The entire application use only the color #A9BCEE, its shaded
            color #414F75, muted color #B5C1DE, and achromatic colors with
            different grayscale
          </p>
          <img
            className="work-img sm"
            src={workTodobubu2}
            alt="work-todobubu-2"
          />
          <p className="work-p">
            The design on mobile-first approach while it also fit on desktop.
            Thinking that most of the users will use it on their phones, this
            design give great experience when users is using it on PWA.
            Designing before coding is important for me. I tend to design the
            layout or even prototype on Figma before start coding.
          </p>
          <img className="work-img" src={workTodobubu3} alt="work-todobubu-3" />
        </div>
        <div className="work-para">
          <h3 className="work-bold">Cross-platform Support</h3>
          <p className="work-p">
            Todobubu is a web application. Which means that it can be access
            anywhere with internet and browser. Also, Todobubu is also a
            progressive web application (PWA). For phone user, PWA is provided
            to enjoy the fullscreen native application experience and shortcut
            on homescreen for quick access.
          </p>
          <p className="work-p">
            For desktop, Todobubu is working on another a{" "}
            <a
              className="links"
              href="https://github.com/IamMrandrew/Todobubu-electron"
              target="_blank"
            >
              electron project
            </a>{" "}
            which provided dmg and exe as desktop app. As I mentioned before,
            data of Todobubu can be stored on cloud.
          </p>
          <p className="work-p">
            And of course, Todobubu's data can also be stored on local storage.
            To understand more, can take a look on the implementation section of
            Firebase Integration.
          </p>
        </div>
        <div className="work-para">
          <h2 className="work-subtitle">Implementations</h2>
          <p className="work-p">
            React Framework <br />
            Firebase Integration
          </p>
          <h3 className="work-bold">React Framework</h3>
          <p className="work-p">
            Being the most popular js framework, this web application is built
            by React. Using React, components can be reused without write
            repetitively, like Timeslot, Todo components. This keep the code
            more clean and structeed in an intuitive way.
          </p>
          <p className="work-p">
            As this is my first react project, passing props through compoents
            is a bit messy at first. At last, I utilized context api to provide
            props that is used around entire project. I am not sure if it is the
            best practise for my project but it works in some way.
          </p>
          <p className="work-p">
            Using states for array of object (Todo) is a new perspective for me.
            React render the UI only when the state have changes. Here is an
            example of how a new todo is added. (Spread operator in ES6
            javascript is useful here)
          </p>
        </div>
        <div className="work-para">
          <h3 className="work-bold">Firebase Integration</h3>
          <p className="work-p">
            To achieve the cloud based service, Firebase Cloud Firestore &
            Authentication is used in this project. Firebase provided a rather
            simple way to link the database with my react app. With firebase and
            react-firebase-hooks, I can fetch the query in the database with few
            lines of code.
          </p>
          <p className="work-p">
            For authentication, using the useAuthState can identify if the user
            is logged in or not throughout the entire applications. I chose to
            use the Google and Github sign-in this time while Firebase provided
            various options for developers.
          </p>
        </div>
        <div className="work-para">
          <h2 className="work-subtitle">Contributing</h2>
          <p className="work-p">
            This app is built within 1-2 weeks only with design and
            implementation. There may be some bugs or functions not working
            well.
          </p>
          <p className="work-p">
            Feel free to leave comments or even fork it and create a pull
            request. I will be happy about it!!!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Todobubu;
