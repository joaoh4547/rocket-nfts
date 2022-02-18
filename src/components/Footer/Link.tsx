import { FC } from "react";
import styles from "./Footer.module.scss";

interface LinkProps {
  to?: string;
  text: string;
}

export const Link: FC<LinkProps> = ({ to = "/#", text }) => {
  return (
    <li className={styles["item-link"]}>
      <a href={to}>{text}</a>
    </li>
  );
};
