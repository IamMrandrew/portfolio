import React from "react";
import { motion } from "framer-motion";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";

const Profile = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] }}
      className="profile"
    >
      <About />
      <Skills />
      <Contact />
    </motion.div>
  );
};
export default Profile;
