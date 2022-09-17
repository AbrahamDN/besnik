import React from "react";
import buttonStyle from "./Button.module.scss";
import styles from "../../styles/Home.module.scss";
const Button = ({ text, btnType }) => {
  return (
    <button className={` ${buttonStyle["btn"]} ${buttonStyle["btn-primary"]}`}>
      {text}
    </button>
  );
};

export default Button;
