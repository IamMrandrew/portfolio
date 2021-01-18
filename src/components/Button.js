import React from "react";

const Button = ({ text, type }) => {
  return (
    <button className="button" type={type ? "submit" : ""}>
      {text}
    </button>
  );
};

export default Button;
