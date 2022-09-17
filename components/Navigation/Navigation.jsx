import React from "react";
import PropTypes from "prop-types";
import styles from "./Navigation.module.scss";
import Container from "../Container/Container";
import Logo from "../../public/assets/svgs/logo.svg";
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";
import MobileNavigation from "./MobileNavigation";
import Button from "../Button/Button";

const Navigation = () => {
  const isTablet = useWindowSize().width < 768;
  if (isTablet) return <MobileNavigation />;
  return (
    <div className={styles.navigation__wrapper}>
      <Container>
        <nav className={styles.navigation}>
          <Logo className="logo" />

          <ul className={styles.nav__links}>
            <li className={styles.nav__item}>
              <Link href="">Solution</Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="">Plans</Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="">Resource</Link>
            </li>
            <li className={styles.nav__item}>
              <Link href="">Blog</Link>
            </li>
          </ul>

          <Button
            className={styles.hero__btn}
            text={"Request Demo"}
            btnType="secondary"
          />

          {/* <button className="nav-button">Request Demo</button> */}
        </nav>
      </Container>
    </div>
  );
};

Navigation.propTypes = {};

export default Navigation;
