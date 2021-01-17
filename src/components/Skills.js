import React from "react";

const Skills = () => {
  return (
    <section className="skills custom-container">
      <h2 className="section-title">Skills</h2>
      <div className="section-block">
        <article className="skill-wrapper">
          <h3 className="skill-title">Coding</h3>
          <p className="skill">HTML</p>
          <p className="skill">CSS, SCSS</p>
          <p className="skill">Javascript</p>
          <p className="skill">PHP</p>
        </article>
        <article className="skill-wrapper">
          <h3 className="skill-title">Environment</h3>
          <p className="skill">React</p>
          <p className="skill">Bootstrap</p>
          <p className="skill">Wordpresss</p>
          <p className="skill">Underscores</p>
          <p className="skill">Git, GitHub</p>
        </article>
        <div className="skill-wrapper">
          <h3 className="skill-title">Designing</h3>
          <p className="skill">Figma</p>
          <p className="skill">Sketch</p>
          <p className="skill">Adobe XD</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
