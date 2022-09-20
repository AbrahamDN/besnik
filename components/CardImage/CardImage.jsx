import Image from "next/image";
import LinkComponent from "../Link/LinkComponent";
import styles from "./CardImage.module.scss";

const CardImage = ({ brand, followers, engagement, img }) => {
  return (
    <div className={styles["card-image"]}>
      <Image src={img} alt="card" width="360" height="300" />
      <div className={styles["card-image__float-card"]}>
        <div className={styles["card-image__float-card__stats"]}>
          <div>
            <h5 className={styles["card-image__float-count"]}>{followers}</h5>
            <span className={styles["card-image__float-card__description"]}>Follower reach</span>
          </div>
          <div>
            <h5 className={styles["card-image__float-count"]}>{engagement}</h5>
            <span className={styles["card-image__float-card__description"]}>Engagement</span>
          </div>
        </div>

        <div className={styles["card-image__float-card__link"]}>
          <LinkComponent text="Learn more" url="#" iconType="arrow-right" linkType="secondary" />
        </div>
      </div>
    </div>
  );
};

export default CardImage;
