import React from "react";
import PropTypes from "prop-types";
import styles from "./Insight.module.scss";

const Insight = ({ className, number, label }) => {
  return (
    <article className={`${styles.insight} ${className}`}>
      <span className={`h2 ${styles.insight__number}`}>{number}</span>
      <span className={styles.insight__label}>{label}</span>
    </article>
  );
};

Insight.propTypes = {
  className: PropTypes.string,
  number: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default Insight;
