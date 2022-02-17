import { FC } from "react";
import styles from "./Header.module.scss";
import Avatars from "../../assets/group-avarts.png";
import { ReactComponent as Badge } from "../../assets/badge.svg";
export const Banner: FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles["left-area"]}>
        <div className={styles.text}>
          <span>
            Mercado digital para colecionáveis em criptos e tokens não fungível
            (NFT). Compre, venda e descubra ativos digitais exclusivos para
            você.
          </span>
          <div className={styles.selecteds}>
            <img src={Avatars} alt="avatars" />
            <div className={styles.info}>
              <span className={styles.contrast}>+10</span>
              <span>Artistas Selecionados</span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <h1 className={styles["banner-title"]}>
        Descubra a verdadeira arte digital e colecione diversas{" "}
        <span className={styles["banner-title-contrast"]}>NFTs</span>
      </h1>
      <Badge />
    </div>
  );
};
