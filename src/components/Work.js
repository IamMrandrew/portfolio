import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

const Work = ({ src, wider, title, desc }) => {
  let { path, url } = useRouteMatch();

  console.log("url: ", url);
  console.log("path: ", path);

  return (
    <article className={wider ? "work wider" : "work"}>
      <Link to={path + "works/todobubu"}>
        <div className="ratio-wrapper">
          <div className="img-wrapper">
            <img src={src} alt={src ? src.toString() : ""} />
          </div>
        </div>
      </Link>

      <div className="text-wrapper">
        <div className="work-title">{title}</div>
        <div className="work-desc">{desc}</div>
      </div>
    </article>
  );
};

export default Work;
