import styles from "./Header.module.scss";
import { ReactComponent as Icon } from "../../assets/logo_MetaMask.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Logo />
      </div>
      <div>
        <ul className={styles["menu-container"]}>
          <li>
            <a href="">Comprar NFT</a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>
      <div>
        <button>
          <Icon />
          Conectar Carteira
        </button>
      </div>
    </nav>
  );
};
