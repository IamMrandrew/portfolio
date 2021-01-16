import React from "react";

const Work = ({ src, wider, title, desc }) => {
  return (
    <article className={wider ? "work wider" : "work"}>
      <div className="ratio-wrapper">
        <div className="img-wrapper">
          <img src={src} alt={src ? src.toString() : ""} />
        </div>
      </div>
      <div className="text-wrapper">
        <div className="work-title">{title}</div>
        <div className="work-desc">{desc}</div>
      </div>
    </article>
  );
};

export default Work;
