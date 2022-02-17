import styles from "./Content.module.scss";
import Artista1 from "../../assets/artista-1.png";
import Artista2 from "../../assets/artista-2.png";
import Artista3 from "../../assets/artista-3.png";
import Artista4 from "../../assets/artista-4.png";
import Artista5 from "../../assets/artista-5.png";
import Artista6 from "../../assets/artista-6.png";
import { ArtistCard } from "./ArtistCard";
import { ReactComponent as Arrow } from "../../assets/arrow-orange.svg";

export const TopArtists = () => {
  return (
    <section className={styles["top-artists"]}>
      <h2>
        Melhores <span className={styles.contrast}>Artistas</span>
      </h2>

      <div className={styles["artist-container"]}>
        <div className={styles["artists-grid"]}>
          <ArtistCard
            image={Artista1}
            name="Mayk Brito"
            rating="80 Fotografias"
          />
          <ArtistCard
            image={Artista2}
            name="Mayk Brito"
            rating="80 Fotografias"
          />
          <ArtistCard
            image={Artista3}
            name="Mayk Brito"
            rating="80 Fotografias"
          />
          <ArtistCard
            image={Artista4}
            name="Mayk Brito"
            rating="80 Fotografias"
          />
          <ArtistCard
            image={Artista5}
            name="Mayk Brito"
            rating="80 Fotografias"
          />
          <ArtistCard
            image={Artista6}
            name="Mayk Brito"
            rating="80 Fotografias"
          />
        </div>
        <div className={styles["show-all-artists"]}>
          <span>Ver Todos Artistas</span>
          <Arrow />
        </div>
      </div>
    </section>
  );
};
