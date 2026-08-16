import { useEffect } from "react";

/* <----- CSS -----> */
import styles from "../Styles/Components/CardProjects.module.css";
import linkIcon from "../Assets/Icons/svgs/ArrowBtn.svg";

/* <---- AOS ANIMATIONS ----> */
import AOS from "aos";
import "aos/dist/aos.css";

function CardProjects({
  title,
  year,
  description,
  linkLabel,
  link,
  template,
  ballons, // Array de strings ex: ["Reactjs", "UI/UX Design"]
}) {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div className={styles.Card} data-aos="fade-up">
      {/* 1. Imagem/Preview do Projeto no Topo */}
      <div className={styles.Template}>
        <img src={template} alt={`Preview ${title}`} />
      </div>

      {/* 2. Container de Informações (Texto, Tags e Link) */}
      <div className={styles.Container}>
        <div className={styles.textContainer}>

          {/* Alinhamento do Título e Ano lado a lado */}
          <div className={styles.headerTitle}>
            <h1 className={styles.title}>{title}</h1>
            {year && <span className={styles.year}>{year}</span>}
          </div>

          <h2 className={styles.description}>{description}</h2>

          <div className={styles.footerContainer}>
            {ballons && ballons.length > 0 && (
              <div className={styles.ballonsContainer}>
                {ballons.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}

              </div>
            )}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnLink}
            >
              {linkLabel} <div className={styles.linkIcon}><img src={linkIcon} alt="Arrow" /></div>
            </a>
          </div>


        </div>
      </div>
    </div>
  );
}

export default CardProjects;