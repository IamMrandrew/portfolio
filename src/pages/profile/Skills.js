import React from "react";

const Skills = () => {
  return (
    <section className="skills custom-container">
      <h2 className="skills__title">Skills</h2>
      <div className="section-block">
        <div className="skills__wrapper col-lg-4">
          <div className="text-wrapper">
            <h3 className="skills__subtitle">Coding</h3>
            <p className="skills__item">HTML</p>
            <p className="skills__item">CSS, SCSS</p>
            <p className="skills__item">Javascript</p>
            <p className="skills__item">PHP</p>
          </div>
        </div>
        <div className="skills__wrapper col-lg-4">
          <div className="text-wrapper">
            <h3 className="skills__subtitle">Environment</h3>
            <p className="skills__item">React</p>
            <p className="skills__item">Bootstrap</p>
            <p className="skills__item">Wordpresss</p>
            <p className="skills__item">Underscores</p>
            <p className="skills__item">Git, GitHub</p>
          </div>
        </div>
        <div className="skills__wrapper col-lg-4">
          <div className="text-wrapper">
            <h3 className="skills__subtitle">Designing</h3>
            <p className="skills__item">Figma</p>
            <p className="skills__item">Sketch</p>
            <p className="skills__item">Adobe XD</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
