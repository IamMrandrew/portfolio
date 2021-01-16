import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="custom-container">
        <div className="nav-brand">andrew li</div>
        <ul className="nav-list">
          <li className="nav-item">Works</li>
          <li className="nav-item">Profile</li>
        </ul>
        <div className="burger">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
