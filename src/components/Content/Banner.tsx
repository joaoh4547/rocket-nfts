import { FC } from "react";
import styles from "./Content.module.scss";
import BannerImage from "../../assets/banner.png";
export const Banner: FC = () => {
  return (
    <section className={styles.banner}>
      <div className={styles["left-container"]}>
        <div className={styles["banner-content-left-items"]}>
          <h3>100K+</h3>
          <span>Artes</span>
        </div>
        <div className={styles["banner-content-left-items"]}>
          <h3>200+</h3>
          <span>Vendas</span>
        </div>
        <div className={styles["banner-content-left-items"]}>
          <h3>20</h3>
          <span>Artistas</span>
        </div>
      </div>
      <div className={styles["banner-content"]}>
        <div className={styles["banner-content-items-container"]}>
          <div className={styles["banner-content-item"]}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id{" "}
              <a className={styles.contrast}>potenti</a> diam et cras odio
              viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc
              semper.
            </p>
            <a href="">Lorem ipsum</a>
          </div>
          <div className={styles["banner-content-item"]}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id{" "}
              <a className={styles.contrast}>potenti</a> diam et cras odio
              viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc
              semper.
            </p>
            <a href="">Lorem ipsum</a>
          </div>
        </div>
        <img src={BannerImage} alt="" />
      </div>
    </section>
  );
};
