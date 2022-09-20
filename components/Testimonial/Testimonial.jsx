import Image from "next/image";
import styles from "./Testimonial.module.scss";
import Icon from "../Icon";

const Testimonial = ({ message, name, position, company }) => {
  return (
    <div className={styles.testimonial__container}>
      <div className={styles.testimonial__message__container}>
        <Icon name="testimonial-brand" color="#fff" size={48} />

        <p className={styles.testimonial__message}>{message}</p>

        <div className={styles.testimonial__author}>
          <div className={styles.testimonial__author__container}>
            <span className={styles.testimonial__author__name}>{name}</span>
            <span className={styles.testimonial_author_job}>{`${position}, ${company}`}</span>
          </div>

          <div className={styles.testimonial__controls}>
            <button className={styles.testimonial__button}>
              <Icon name={"chevron-left"} />
            </button>
            <button className={styles.testimonial__button}>
              <Icon name={"chevron-right"} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.testimonial__image}>
        <Image src="/assets/testimonial-avatar.png" alt="testimonial picture" width="345" height="476" />
      </div>
    </div>
  );
};

export default Testimonial;
