import React from "react";
import Work from "../../components/Work";

import thumbTodobubu from "../../assets/img/thumb-todobubu.jpg";
import thumbLoopa from "../../assets/img/thumb-loopa.jpg";
import thumbHautakchurch from "../../assets/img/thumb-hautakchurch.jpg";
import thumbDanxUp from "../../assets/img/thumb-danxup.jpg";

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
