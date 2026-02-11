/* <--- FUNCTIONS REACT ---> */
import { useEffect } from "react";

/* <-----  CSS -----> */
import styles from "../Styles/Components/CardProjects.module.css";

/* <-----  ASSETS - ICON FIXO -----> */
import Arrow from "../Assets/Icons/svgs/Vector.svg";

/* <---- AOS ANIMATIONS ----> */
import AOS from "aos";
import "aos/dist/aos.css";

// Adicionamos 'bgColor' às props
function CardProjects({
  title,
  description,
  linkLabel,
  link,
  logo,
  template,
  bgColor,
}) {
  /* Chama a animação com aos */
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className={styles.Card} data-aos="fade-up">
      <div className={styles.Container}>
        <img className={styles.logo} src={logo} alt={`Logo ${title}`} />

        <div className={styles.textContainer}>
          <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.description}>{description}</h2>
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnLink}
          >
            <button className={styles.btn}>
              {linkLabel}
              <div className={styles.icon}>
                <img src={Arrow} alt="Seta" />
              </div>
            </button>
          </a>
        </div>
      </div>

      <div
        className={styles.Template}
        style={{ "--gradient-project": bgColor }} // Mudamos o nome para clareza
      >
        <img src={template} alt={`Preview ${title}`} />
      </div>
    </div>
  );
}

export default CardProjects;
