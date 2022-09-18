import React from "react";
import LinkComponent from "../Link/LinkComponent";
import cardStyle from "./FeatureCard.module.scss";
import Image from "next/image";

const FeatureCard = ({ tag, title, description, image, rowReverse }) => {
  return (
    <div
      className={`${cardStyle["card"]} ${
        rowReverse ? `${cardStyle["reverse"]}` : ""
      }`}
    >
      <div className={` ${cardStyle["card--main"]}`}>
        <div className={` ${cardStyle["card--header"]}`}>
          <p className={`${cardStyle[`card-tag--${tag.toLowerCase()}`]}`}>
            {tag}
          </p>
          <h3>{title}</h3>
        </div>

        <div className={` ${cardStyle["card--body"]}`}>
          <p>{description}</p>

          <LinkComponent
            text={"Learn More"}
            url="#"
            linkType="primary"
            iconType={"arrow-right"}
          />
        </div>
      </div>

      <div>
        <Image src={image} alt="" width={350} height={350} />
      </div>
    </div>
  );
};

export default FeatureCard;
