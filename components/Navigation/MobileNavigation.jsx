import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./MobileNavigation.module.scss";
import Container from "../Container/Container";
import Logo from "../../public/assets/svgs/logo.svg";
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Icon from "../Icon";

const MobileNavigation = () => {
  const isMobile = useWindowSize().width < 565;
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => setShowMenu(false));

  const RequestDemo = () => (
    <button className="nav-button">Request Demo</button>
  );

  return (
    <div className={styles.navigation__wrapper}>
      <Container>
        <nav ref={ref} className={styles.navigation}>
          <Logo className={styles.logo} />

          {!isMobile && <RequestDemo />}

          <button
            className={styles.nav__button}
            onClick={() => setShowMenu(!showMenu)}
          >
            {!showMenu ? <Icon name="menu" /> : <Icon name="close" size={24} />}
          </button>

          {showMenu && (
            <div className={styles.nav__dropdown}>
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
                {isMobile && (
                  <li className={styles.nav__item}>
                    <RequestDemo />
                  </li>
                )}
              </ul>
            </div>
          )}
        </nav>
      </Container>
    </div>
  );
};

MobileNavigation.propTypes = {};

export default MobileNavigation;
