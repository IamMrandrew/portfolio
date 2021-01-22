import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [burger, setBurger] = useState(false);

  const burgerHandler = () => {
    setBurger(!burger);
  };

  const delayBurgerHandler = () => {
    setTimeout(() => {
      burgerHandler();
    }, 350);
  };
  const linkStyle = {
    color: "inherit",
    textDecoration: "inherit",
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
            <div className="nav__brand">andrew li</div>
          </Link>
          <ul className={burger ? "nav__list nav__list--active" : "nav__list"}>
            <li className="nav__item nav__item--title">Explore More</li>
            <Link
              style={linkStyle}
              to="/"
              onClick={burger ? delayBurgerHandler : null}
            >
              <li className="nav__item">Works</li>
            </Link>
            <Link
              style={linkStyle}
              to="/profile"
              onClick={burger ? delayBurgerHandler : null}
            >
              <li className="nav__item">Profile</li>
            </Link>
          </ul>
          <div
            className={
              burger ? "nav__burger nav__burger--active " : "nav__burger"
            }
            onClick={burgerHandler}
          >
            <div className="nav__bar nav__bar-1"></div>
            <div className="nav__bar nav__bar-2"></div>
            <div className="nav__bar nav__bar-3"></div>
          </div>
        </div>
      </nav>
      <div className={burger ? "pusher active" : "pusher"}></div>
      <div className={burger ? "faded active" : "faded"}></div>
    </>
  );
};

export default Nav;
