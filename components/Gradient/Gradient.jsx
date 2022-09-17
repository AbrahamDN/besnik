import Button from '../Button/Button';
import styles from './Gradient.module.scss'

const Gradient = ({children, background, borderRadius, height, title, description, buttonText}) => {
  let isBackground = background ? styles["gradient--absolute"]: styles["gradient--relative"];
  let autoHeight = height == "auto" ? styles["gradient--auto"]: null;
  let gradient = `${styles.gradient} ${isBackground} ${autoHeight}`;

  return (<div className={gradient} style={{borderRadius}}>
    <span className={styles["gradient__corner"]}></span>
    <span className={styles["gradient__yellow-circle"]}></span>
    <span className={styles["gradient__orange-circle"]}></span>

    <div className={styles["gradient__content"]}>
      <h1 className={styles["gradient__title"]}>{title}</h1>
      <p className={styles["gradient__description"]}>{description}</p>
      
      {buttonText && <Button btnType="primary" text={buttonText} iconType={"arrow-right"} />}
    </div>
  </div>)
}

export default Gradient;