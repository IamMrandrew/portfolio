import React from "react";
import { Link } from "react-router-dom";

const Work = ({ src, wider, title, desc }) => {
  return (
    <div className={wider ? "work work--wider" : "work"}>
      <Link to={"/todobubu"}>
        <div className="ratio-wrapper">
          <div className="img-wrapper">
            <img
              className="work__img"
              src={src}
              alt={src ? src.toString() : ""}
            />
          </div>
        </div>
      </Link>

      <div className="text-wrapper">
        <div className="work__title">{title}</div>
        <div className="work__desc">{desc}</div>
      </div>
    </div>
  );
};

export default Work;
