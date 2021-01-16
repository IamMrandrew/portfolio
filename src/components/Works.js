import React from "react";
import Work from "./Work";

import thumbTodobubu from "../img/thumb-todobubu.jpg";
import thumbLoopa from "../img/thumb-loopa.jpg";

const Works = () => {
  return (
    <section className="works custom-container">
      <h2 className="section-title">Works</h2>
      <div className="section-block">
        <Work src={thumbTodobubu} wider={false} title="Todobubu" desc="React" />
        <Work src={thumbLoopa} wider={true} title="Loopa" desc="Tone.js" />
      </div>
      <div className="section-block">
        <Work src={thumbLoopa} wider={true} title="Loopa" desc="Tone.js" />
        <Work src={thumbTodobubu} wider={false} title="Todobubu" desc="React" />
      </div>
    </section>
  );
};

export default Works;
