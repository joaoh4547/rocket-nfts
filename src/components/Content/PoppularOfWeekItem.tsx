import { FC } from "react";
import { ReactComponent as Arrow } from "../../assets/arrow-white.svg";

import styles from "./Content.module.scss";

interface PoppularOfWeekItemProps {
  title: string;
  name: string;
  value: number;
  image: string;
  rotate?: "left" | "rigth";
}

export const PoppularOfWeekItem: FC<PoppularOfWeekItemProps> = ({
  title,
  name,
  value,
  image,
  rotate = "rigth",
}) => {
  const leftRotate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.transform = "rotateZ(-15deg) scale(0.8)";
  };
  const rigthRotate = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.transform = "rotateZ(15deg) scale(0.8)";
  };

  const reset = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.style.transform = "rotateZ(0) scale(1)";
  };
  return (
    <div
      className={styles.item}
      style={{ transition: "transform 0.3s" }}
      onMouseEnter={(e) =>
        rotate === "rigth" ? rigthRotate(e) : leftRotate(e)
      }
      onMouseLeave={reset}
    >
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
        <img src={image} alt={name} />
      </div>
    </div>
  );
};
