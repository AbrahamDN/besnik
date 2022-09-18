import React from "react";
import styles from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";
import Container from "../Container/Container";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import Button from "../Button/Button";
import Gradient from "../Gradient/Gradient";

import ChaseLogo from "../../public/assets/svgs/brand-chase.svg";
import AsanaLogo from "../../public/assets/svgs/brand-asana.svg";
import GoogleLogo from "../../public/assets/svgs/brand-google.svg";
import BuzzFeedLogo from "../../public/assets/svgs/brand-buzzFeed.svg";
import TogglLogo from "../../public/assets/svgs/brand-toggl.svg";
import WallmartLogo from "../../public/assets/svgs/brand-wallmart.svg";

const Header = () => {
  const isTablet = useWindowSize().width < 768;

  return (
    <header className={styles.header}>
      <Navigation />

      <Gradient background={true} />

      <div className={styles.header__hero}>
        <Container>
          <div className={styles.hero__info}>
            <h1 className="title">Tell a better brand story</h1>

            <p className={styles.hero__desc}>
              Automate the way you search through hashtags and suggested
              profiles to find results 100x faster.
            </p>

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
            />
          </div>
        )}
      </div>

      <Container>
        <div className={styles.clients}>
          <p>SOME OF OUR TRUSTED CLIENTS</p>

          <div className={styles.brands}>
            <ChaseLogo />
            <AsanaLogo />
            <GoogleLogo />
            <BuzzFeedLogo />
            <TogglLogo />
            <WallmartLogo />
          </div>
        </div>
      </Container>
    </header>
  );
};

Header.propTypes = {};

export default Header;
