import React from "react";
import Work from "../../components/Work";

import thumbTodobubu from "../../assets/img/thumb-todobubu.jpg";
import thumbLoopa from "../../assets/img/thumb-loopa.jpg";
import thumbHautakchurch from "../../assets/img/thumb-hautakchurch.jpg";
import thumbDanxUp from "../../assets/img/thumb-danxup.jpg";

const Works = () => {
  return (
    <section className="works custom-container">
      <h2 className="works__title">Works</h2>
      <div className="works__section-block">
        <Work
          link="/todobubu"
          src={thumbTodobubu}
          wider={false}
          title="Todobubu"
          desc="React"
        />
        <Work
          link="/loopa"
          src={thumbLoopa}
          wider={true}
          title="Loopa"
          desc="Tone.js"
        />
      </div>
      <div className="works__section-block">
        <Work
          link="/todobubu"
          src={thumbHautakchurch}
          wider={true}
          title="Hau Tak Church Web"
          desc="Wordpress"
        />
        <Work
          link="/todobubu"
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
