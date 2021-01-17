import React, { useState, useEffect } from "react";

const Nav = () => {
  const [burger, setBurger] = useState(false);

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
          <div className="nav-brand">andrew li</div>
          <ul className={burger ? "nav-list active" : "nav-list"}>
            <li className="nav-item burger-title">Explore More</li>
            <li className="nav-item">Works</li>
            <li className="nav-item">Profile</li>
          </ul>
          <div
            className={burger ? "burger active " : "burger"}
            onClick={() => {
              setBurger(!burger);
            }}
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
