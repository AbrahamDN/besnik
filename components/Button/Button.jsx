import React from "react";
import buttonStyle from "./Button.module.scss";
import Icon from "../Icon";
const Button = ({ text, btnType, iconType }) => {
  return (
    <button
      aria-label={`${text}`}
      className={` ${buttonStyle["btn"]} ${buttonStyle[`btn-${btnType}`]}`}
    >
      {text}
      {iconType && (
        <Icon className={` ${buttonStyle["btn-icon"]}`} name={`${iconType}`} />
      )}
    </button>
  );
};

export default Button;
