import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import Works from "./Works";

const Home = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] }}
      className="home"
    >
      <Hero />
      <Works />
    </motion.div>
  );
};

export default Home;
