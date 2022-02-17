import { FC } from "react";
import styles from "./Footer.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Arrow } from "../../assets/arrow-black.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Youtube } from "../../assets/youtube.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Email } from "../../assets/email.svg";
export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <header className={styles["footer-header"]}>
        <Logo />
        <button onClick={() => window.scrollTo({ top: 0 })}>
          <Arrow />
        </button>
      </header>
      <section className={styles["footer-content"]}>
        <form className={styles["footer-form"]}>
          <h3>
            Fique por dentro de <span>todas as novidades </span>
          </h3>
          <div>
            <input type="text" placeholder="nome@email.com" />
            <input type="submit" />
          </div>
        </form>
        <div className={styles["content-links-container"]}>
          <div className={styles["content-links-item"]}>
            <h4 className={styles["item-title"]}>Empresa</h4>
            <ul>
              <li className={styles["item-link"]}>
                <a href="/#">Sobre</a>
              </li>
              <li className={styles["item-link"]}>
                <a href="/#">Serviços</a>
              </li>
              <li className={styles["item-link"]}>
                <a href="/#">Time</a>
              </li>
              <li className={styles["item-link"]}>
                <a href="/#">Carreira</a>
              </li>
            </ul>
          </div>
          <div className={styles["content-links-item"]}>
            <h4 className={styles["item-title"]}>Mapa</h4>
            <ul>
              <li className={styles["item-link"]}>
                <a href="/#">Galeria</a>
              </li>
              <li className={styles["item-link"]}>
                <a href="/#">Populares</a>
              </li>
              <li className={styles["item-link"]}>
                <a href="/#">Vendas</a>
              </li>
              <li className={styles["item-link"]}>
                <a href="/#">Contato</a>
              </li>
            </ul>
          </div>
          <div className={styles["content-links-item"]}>
            <h4 className={styles["item-title"]}>Contato</h4>
            <ul>
              <li className={styles["item-link"]}>
                <a href="/#">FAQs</a>
              </li>
              <li className={styles["item-link"]}>
                <a href="/#">Termos</a>
              </li>
              <li className={styles["item-link"]}>
                <a href="/#">Politica</a>
              </li>
              <li className={styles["item-link"]}>
                <a href="/#">Ajuda</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className={styles["footer-end"]}>
        <div>
          <a href="/#">www.rocketseat.com.br</a>
        </div>
        <div className={styles["social-media"]}>
          <Instagram />
          <Youtube />
          <Twitter />
          <Email />
        </div>
      </div>
    </footer>
  );
};
