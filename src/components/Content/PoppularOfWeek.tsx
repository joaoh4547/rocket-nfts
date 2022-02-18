import { FC } from "react";
import styles from "./Content.module.scss";
import { PoppularOfWeekItem } from "./PoppularOfWeekItem";
import Astronauta1 from "../../assets/astronauta 1.png";
import Astronauta2 from "../../assets/astronauta-2.png";
import Astronauta3 from "../../assets/astronauta-3.png";
import Astronauta4 from "../../assets/astronauta-4.png";
import { useMediaQuery } from "react-responsive";

export const PoppularOfWeek: FC = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1200px)" });

  const renderSmallSize = () => {
    return (
      <>
        <PoppularOfWeekItem
          image={Astronauta1}
          title="Astronauta 1"
          name="Mayk Brito"
          value={1.5}
        />
        <PoppularOfWeekItem
          image={Astronauta2}
          title="Astronauta 2"
          name="João Inácio (Biro)"
          value={3.75}
        />

        <PoppularOfWeekItem
          image={Astronauta3}
          title="Astronauta 1"
          name="Jakeliny Gracielly"
          value={2.0}
        />
        <PoppularOfWeekItem
          image={Astronauta4}
          title="Astronauta 1"
          name="Tamires Santos"
          value={4.3}
        />
      </>
    );
  };

  const renderLargeSize = () => {
    return (
      <>
        <div className={styles["left-area"]}>
          <PoppularOfWeekItem
            image={Astronauta1}
            title="Astronauta 1"
            name="Mayk Brito"
            value={1.5}
          />
          <PoppularOfWeekItem
            rotate="left"
            image={Astronauta2}
            title="Astronauta 2"
            name="João Inácio (Biro)"
            value={3.75}
          />
        </div>
        <div className={styles["center-area"]}>
          <div className={styles.line}></div>
        </div>
        <div className={styles["right-area"]}>
          <PoppularOfWeekItem
            rotate="left"
            image={Astronauta3}
            title="Astronauta 1"
            name="Jakeliny Gracielly"
            value={2.0}
          />
          <PoppularOfWeekItem
            image={Astronauta4}
            title="Astronauta 1"
            name="Tamires Santos"
            value={4.3}
          />
        </div>
      </>
    );
  };

  return (
    <section className={styles["poppular-of-week"]}>
      <h2>
        <span className={styles.contrast}>Populares</span> da semana
      </h2>
      <div className={styles["itens-container"]}>
        {isLargeScreen ? renderLargeSize() : renderSmallSize()}
      </div>
    </section>
  );
};
