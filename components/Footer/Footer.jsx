import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.scss";
import Container from "../Container/Container";
import Logo from "../../public/assets/svgs/logo.svg";
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";
import Button from "../Button/Button";
import Icon from "../Icon";

const Footer = () => {
  const isTablet = useWindowSize().width < 768;
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__wrapper}>
          <nav className={styles.footer__nav}>
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

            <div className={styles.footer__socials}>
              <a className={styles.social} href="#">
                <Icon name="facebook" size={12} />
              </a>

              <a className={styles.social} href="#">
                <Icon name="instagram" size={12} />
              </a>

              <a className={styles.social} href="#">
                <Icon name="youtube" size={12} />
              </a>
            </div>
          </nav>
        </div>

        <hr />

        <p className={styles.footer__copy}>Copyright © 2020 Besnik</p>
      </Container>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
