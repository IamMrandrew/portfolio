import React from "react";
import { Link } from "react-router-dom";

import thanksSVG from "../../assets/img/thanks.svg";
import Button from "../../components/Button";

const Thanks = () => {
  return (
    <section className="thanks custom-container">
      <div className="text-wrapper">
        <h1 className="thanks__title">Thank you for your Feedback</h1>
        <p className="thanks__subtitle">Form submitted. Thank you :)</p>
        <Link to="/">
          <Button text="Back to homepage" />
        </Link>
      </div>
      <div className="img-wrapper">
        <img className="thanks__img" src={thanksSVG} alt="thanks-svg" />
      </div>
    </section>
  );
};

export default Thanks;
