import { FC } from "react";
import styles from "./Content.module.scss";
interface ArtistCardProps {
  name: string;
  rating: string;
  image: string;
}

export const ArtistCard: FC<ArtistCardProps> = ({ image, name, rating }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <div className={styles["card-content"]}>
        <span>{name}</span>
        <span>{rating}</span>
      </div>
    </div>
  );
};
