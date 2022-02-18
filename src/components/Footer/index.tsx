import { FC } from "react";
import styles from "./Footer.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Arrow } from "../../assets/arrow-black.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Youtube } from "../../assets/youtube.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Email } from "../../assets/email.svg";
import { ContentItem } from "./ContentItem";
import { Link } from "./Link";
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
            Fique por dentro de{" "}
            <span className={styles.contrast}>todas as novidades </span>
          </h3>
          <div className={styles.inputs}>
            <input type="text" placeholder="nome@email.com" />
            <input type="submit" />
          </div>
        </form>
        <div className={styles["content-links-container"]}>
          <ContentItem title="Empresa">
            <Link text="Sobre" />
            <Link text="Serviços" />
            <Link text="Time" />
            <Link text="Carreira" />
          </ContentItem>
          <ContentItem title="Mapa">
            <Link text="Galeria" />
            <Link text="Populares" />
            <Link text="Vendas" />
            <Link text="Contato" />
          </ContentItem>
          <ContentItem title="Contato">
            <Link text="FAQs" />
            <Link text="Termos" />
            <Link text="Politica" />
            <Link text="Ajuda" />
          </ContentItem>
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
