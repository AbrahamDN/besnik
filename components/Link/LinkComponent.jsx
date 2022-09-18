import React from "react";
import Icon from "../Icon";
import linkStyle from "./Link.module.scss";

const LinkComponent = ({ text, url, iconType, linkType }) => {
  return (
    <a
      className={` ${linkStyle["a-link"]} ${linkStyle[`a-${linkType}`]}`}
      href={`${url}`}
    >
      {text}{" "}
      <Icon className={` ${linkStyle["a--icon"]}`} name={`${iconType}`} />
    </a>
  );
};

export default LinkComponent;
