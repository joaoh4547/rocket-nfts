import { FC } from "react";
import { Banner } from "./Banner";
import { Gallery } from "./Gallery";
import styles from "./Header.module.scss";
import { Navbar } from "./NavBar";

export const Header: FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Banner />
      <Gallery />
    </div>
  );
};
