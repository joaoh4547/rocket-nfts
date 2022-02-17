import { FC } from "react";
import styles from "./Header.module.scss";
import Galeria1 from "../../assets/galeria-1.png";
import Galeria2 from "../../assets/galeria-2.png";
import Galeria3 from "../../assets/galeria-3.png";
import Galeria4 from "../../assets/galeria-4.png";
import Galeria5 from "../../assets/galeria-5.png";
import Galeria6 from "../../assets/galeria-6.png";
import Galeria7 from "../../assets/galeria-7.png";
import Galeria8 from "../../assets/galeria-8.png";

export const Gallery: FC = () => {
  return (
    <div className={styles.gallery}>
      <img src={Galeria1} />
      <img src={Galeria2} />
      <img src={Galeria3} />
      <img src={Galeria4} />
      <img src={Galeria5} />
      <img src={Galeria6} />
      <img src={Galeria7} />
      <img src={Galeria8} />
    </div>
  );
};
