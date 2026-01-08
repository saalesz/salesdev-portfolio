/* <--- FUNCTIONS REACT ---> */
import React from "react";

/* <-----  CSS -----> */
import styles from "../Styles/Components/CardProjects.module.css";

/* <-----  ASSETS - ICON FIXO -----> */
import Arrow from "../Assets/Icons/svgs/Vector.svg";

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
  return (
    <div className={styles.Card}>
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
