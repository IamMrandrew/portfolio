import React from "react";
import Work from "./Work";

import thumbTodobubu from "../img/thumb-todobubu.jpg";
import thumbLoopa from "../img/thumb-loopa.jpg";
import thumbHautakchurch from "../img/thumb-hautakchurch.jpg";
import thumbDanxUp from "../img/thumb-danxup.jpg";

const Works = () => {
  return (
    <section className="works custom-container">
      <h2 className="section-title">Works</h2>
      <div className="section-block">
        <Work src={thumbTodobubu} wider={false} title="Todobubu" desc="React" />
        <Work src={thumbLoopa} wider={true} title="Loopa" desc="Tone.js" />
      </div>
      <div className="section-block">
        <Work
          src={thumbHautakchurch}
          wider={true}
          title="Hau Tak Church Web"
          desc="Wordpress"
        />
        <Work
          src={thumbDanxUp}
          wider={false}
          title="danXup"
          desc="Pose Animator"
        />
      </div>
    </section>
  );
};

export default Works;
