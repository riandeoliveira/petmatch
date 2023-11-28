import { ReactElement } from "react";
import { AppStoreButton, GooglePlayButton } from "react-mobile-app-button";
import logo from "./assets/logo.png";
import pet_1 from "./assets/pet-1.jpg";
import pet_2 from "./assets/pet-2.jpg";
import pet_3 from "./assets/pet-3.jpg";
import smartphone_1 from "./assets/smartphone-1.svg";
import smartphone_2 from "./assets/smartphone-2.svg";
import smartphone_3 from "./assets/smartphone-3.svg";
import styles from "./styles.module.scss";

export const App = (): ReactElement => {
  return (
    <div className={styles.background}>
      <header className={styles.header}>
        <img src={logo} alt="" className={styles.logo} />
      </header>
      <main className={styles.main}>
        <div className={styles.main_container}>
          <section className={styles.section}>
            <h1 className={styles.title}>
              Você sabia que existem cerca de{" "}
              <strong className={styles.strong}>30 milhões</strong> de animais
              abandonados no Brasil?
            </h1>
            <img src={pet_1} alt="" height={400} className={styles.image} />
          </section>
          <section className={`${styles.section} ${styles.reverse}`}>
            <h1 className={styles.title}>
              E se você tivesse na palma da sua mão a possibilidade de mudar
              isso, <strong className={styles.strong}>Você mudaria?</strong>
            </h1>
            <div className={styles.pets}>
              <img src={pet_2} alt="" height={400} className={styles.image} />
              <img src={pet_3} alt="" height={400} className={styles.image} />
            </div>
          </section>
        </div>
        <section className={styles.app_section}>
          <div className={styles.app_section_container}>
            <h2 className={styles.second_title}>
              <strong className={styles.app_name}>Somos a PetMatch! </strong>
              Baixe nosso aplicativo e adote com responsabilidade o pet mais
              próximo de você! 💓🐾
            </h2>
            <div className={styles.smartphones}>
              <img src={smartphone_1} alt="" className={styles.smartphone} />
              <img src={smartphone_2} alt="" className={styles.smartphone} />
              <img src={smartphone_3} alt="" className={styles.smartphone} />
            </div>
            <div className={styles.buttons}>
              <GooglePlayButton url={"#"} theme={"light"} />
              <AppStoreButton url={"#"} theme={"light"} />
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <span className={styles.footer_content}>
          PetMatch © 2023 | Aproximando o amor de quem também merece ser amado.
        </span>
      </footer>
    </div>
  );
};
