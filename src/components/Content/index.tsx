import { FC } from "react";
import { Banner } from "./Banner";
import styles from "./Content.module.scss";
import { PoppularOfWeek } from "./PoppularOfWeek";
import { TopArtists } from "./TopArtists";

export const Content: FC = () => {
  return (
    <main className={styles.content}>
      <Banner />
      <PoppularOfWeek />
      <TopArtists />
    </main>
  );
};
