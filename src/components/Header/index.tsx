import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { Banner } from "./Banner";
import { Gallery } from "./Gallery";
import styles from "./Header.module.scss";
import { Navbar } from "./NavBar";

export const Header: FC = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1200px)" });

  return (
    <div className={styles.container}>
      <Navbar />
      <Banner />
      {isLargeScreen && <Gallery />}
    </div>
  );
};
