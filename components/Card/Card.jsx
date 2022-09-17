import styles from "./Card.module.scss";

const Card = ({ children, padding = "1em", borderRadius = "1.25em", background = "#ffffff;" }) => {
  return (
    <div className={styles.card} style={{ padding, borderRadius, background }}>
      {children}
    </div>
  );
};

export default Card;
