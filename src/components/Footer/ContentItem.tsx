import { FC } from "react";
import styles from "./Footer.module.scss";

interface ContentItemProps {
  title: string;
}

export const ContentItem: FC<ContentItemProps> = ({ title, children }) => {
  return (
    <div className={styles["content-links-item"]}>
      <h4 className={styles["item-title"]}>{title}</h4>
      <ul className={styles["item-link"]}>{children}</ul>
    </div>
  );
};
