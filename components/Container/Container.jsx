import React from "react";
import PropTypes from "prop-types";
import styles from "./Container.module.scss";

const Container = ({ children, size = "md", style }) => {
  const containerStyles =
    size === "xs"
      ? styles.container__xs
      : size === "sm"
      ? styles.container__sm
      : styles.container;
  return (
    <div className={containerStyles} style={style}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  size: PropTypes.oneOf(["md", "sm", "xs"]),
  style: PropTypes.object,
};

export default Container;
