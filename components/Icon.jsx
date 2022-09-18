import React from "react";
import PropTypes from "prop-types";

const Icon = ({
  className,
  color = "inherit",
  name = "arrow-right",
  size = 16,
}) => {
  const [Icon, setIcon] = React.useState("");

  React.useEffect(() => {
    fetch(`/assets/svgs/${name}.svg`)
      .then((res) => res.text())
      .then((res) => {
        if (res.startsWith("<svg")) return setIcon(res);
        console.error(
          `Icon: "${name}.svg" not found in ${process.env.PUBLIC_URL}/icons`
        );
        return setIcon("");
      });
  }, [name]);

  if (!Icon) return null;

  return (
    <span
      className={`icon ${className}`}
      style={{
        color,
        width: !size ? "100%" : size + "px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      dangerouslySetInnerHTML={{ __html: Icon }}
    />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
};

export default Icon;
