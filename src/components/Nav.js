import React, { useState, useEffect } from "react";
import { FaBorderNone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  const [burger, setBurger] = useState(false);

  const burgerHandler = () => {
    setBurger(!burger);
  };

  const linkStyle = {
    color: "#202020",
    textDecoration: "none",
  };

  useEffect(() => {
    if (burger) {
      document.querySelector("body").classList.add("scroll-lock");
    } else {
      document.querySelector("body").classList.remove("scroll-lock");
    }
  }, [burger]);

  return (
    <>
      <nav className="nav">
        <div className="custom-container">
          <Link style={linkStyle} to="/">
            <div className="nav-brand">andrew li</div>
          </Link>
          <ul className={burger ? "nav-list active" : "nav-list"}>
            <li className="nav-item burger-title">Explore More</li>
            <Link
              style={linkStyle}
              to="/"
              onClick={burger ? burgerHandler : null}
            >
              <li className="nav-item">Works</li>
            </Link>
            <Link
              style={linkStyle}
              to="/profile"
              onClick={burger ? burgerHandler : null}
            >
              <li className="nav-item">Profile</li>
            </Link>
          </ul>
          <div
            className={burger ? "burger active " : "burger"}
            onClick={burgerHandler}
          >
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>
        </div>
      </nav>
      <div className={burger ? "pusher active" : "pusher"}></div>
      <div className={burger ? "faded active" : "faded"}></div>
    </>
  );
};

export default Nav;
