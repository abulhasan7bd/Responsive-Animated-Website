import React from "react";
import "./button.scss";
const Button = ({ text, className }) => {
  return (
    <div className="golobal__button">
      <button className={className}>{text}</button>
    </div>
  );
};

export default Button;
