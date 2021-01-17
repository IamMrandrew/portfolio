import React, { useState, useEffect } from "react";

const Hero = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const texts = [
      "creating beautiful things",
      "solving problems with my own creation",
      "exploring interesting things",
    ];
    let index = 0;
    let letterIndex = 0;
    let currentText = "";

    const typing = () => {
      index %= texts.length;

      currentText = texts[index];

      setText(currentText.slice(0, ++letterIndex));

      if (currentText.slice(0, letterIndex).length === currentText.length) {
        index++;
        letterIndex = 0;
      }
    };

    setInterval(typing, 400);
  }, []);

  return (
    <section className="hero custom-container">
      <div className="text-wrapper">
        <h1 className="main-title">
          Hello, I am andrew <br></br> a{" "}
          <span className="highlighting">
            Computer&nbsp;
            <div className="highlighter"></div>
          </span>
          <span className="highlighting">
            Science&nbsp;
            <div className="highlighter"></div>
          </span>
          <span className="highlighting">
            student
            <div className="highlighter"></div>
          </span>
        </h1>
        <p className="sub-title">I love {text}</p>
      </div>
    </section>
  );
};

export default Hero;
