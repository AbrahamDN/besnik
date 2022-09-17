import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";
import Container from "../Container/Container";
import Icon from "../Icon";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import Button from "../Button/Button";

const Header = () => {
  const isTablet = useWindowSize().width < 768;

  return (
    <header className={styles.header}>
      <Navigation />
      <span className={styles.header__bg} />
      <div className={styles.header__hero}>
        <Container>
          <div className={styles.hero__info}>
            <h1 className="title">Tell a better brand story</h1>

            <p>
              Automate the way you search through hashtags and suggested
              profiles to find results 100x faster.
            </p>

            {/* <button className={styles.hero__btn}>
              <span>Request demo</span>
              <Icon name="arrow-right" />
            </button> */}

            <Button
              className={styles.hero__btn}
              text={"Request Demo"}
              btnType="primary"
              iconType={"arrow-right"}
            />
          </div>
        </Container>

        {!isTablet && (
          <div className={styles.hero__img}>
            <Image
              src="/assets/header-img.png"
              alt=""
              width={718.34}
              height={598.6}
              // layout="responsive"
            />
          </div>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
