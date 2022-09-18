import React from "react";
import PropTypes from "prop-types";
import styles from "./InsightBanner.module.scss";
import Container from "../Container/Container";
import Insight from "./Insight";

const InsightBanner = ({ title, desc, insights }) => {
  return (
    <article className={styles.banner}>
      <Container size="sm">
        <div className={styles.banner__content}>
          <div className={styles.banner__header}>
            {title && <h2 className={styles.banner__title}>{title}</h2>}

            {desc && <p className={styles.banner__desc}>{desc}</p>}
          </div>

          {insights?.length > 0 && (
            <div className={styles.insight__container}>
              {insights.map(({ number, label }, idx) => (
                <Insight
                  key={`insight-${idx}`}
                  className={styles.insight}
                  number={number}
                  label={label}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </article>
  );
};

InsightBanner.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  insights: PropTypes.shape({
    number: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }),
};

export default InsightBanner;
