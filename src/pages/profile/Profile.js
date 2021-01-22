import React from "react";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";

const Profile = () => {
  return (
    <div className="profile">
      <About />
      <Skills />
      <Contact />
    </div>
  );
};
export default Profile;
