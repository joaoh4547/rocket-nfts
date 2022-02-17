import { FC } from "react";
import { ReactComponent as Arrow } from "../../assets/arrow-white.svg";

import styles from "./Content.module.scss";

interface PoppularOfWeekItemProps {
  title: string;
  name: string;
  value: number;
  image: string;
}

export const PoppularOfWeekItem: FC<PoppularOfWeekItemProps> = ({
  title,
  name,
  value,
  image,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles["item-header"]}>
        <h3>{title}</h3>
        <Arrow />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.value}>
          {new Intl.NumberFormat("en", { minimumFractionDigits: 2 }).format(
            value
          )}
          RKT
        </span>
      </div>
      <div>
        <img src={image} />
      </div>
    </div>
  );
};
