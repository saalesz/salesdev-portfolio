import React, { useRef } from "react";

/** * ESTILIZAÇÃO
 * Separação de estilos por módulos para garantir escopo local
 */
import styles from "../../Styles/Partials/sectionProjeto.module.css";

/** * COMPONENTES
 * Reutilização de componentes de interface
 */
import CardProjects from "../../Components/CardProject";

import left from "../../Assets/Icons/svgs/left.svg";
import right from "../../Assets/Icons/svgs/right.svg";

// IMPORTANDO OS DADOS
import { projectsData } from "../../data/projects.js";

function Projetos() {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;

    // Pega a largura do primeiro card dinamicamente para um scroll preciso
    const card = carousel.querySelector(`.${styles.cardWrapper}`) || carousel.firstChild;
    const cardWidth = card ? card.offsetWidth : 380;
    const gap = 24; // Mantendo o padrão de espaçamento do CSS
    const scrollAmount = cardWidth + gap;

    if (direction === "left") {
      carousel.scrollLeft -= scrollAmount;
    } else {
      carousel.scrollLeft += scrollAmount;
    }
  };

  return (
    <section className={styles.Projetos} id="projetos">

      {/* Controles do carrossel (Setas) */}
      <div className={styles.carouselActions}>
        <button
          onClick={() => handleScroll("left")}
          className={styles.arrowBtn}
          aria-label="Projetos anteriores"
        >
          <img src={left} alt="Seta esquerda" />
        </button>
        <button
          onClick={() => handleScroll("right")}
          className={styles.arrowBtn}
          aria-label="Próximos projetos"
        >
          <img src={right} alt="Seta direita" />
        </button>
      </div>

      <div className={styles.sectionTitle}>
        <p>- PORTFÓLIO</p>
        <h2>PRODUTOS DIGITAIS EM DESTAQUE.</h2>
      </div>

      {/* CONTAINER DO CARROSSEL: Recebe a Ref */}
      <div ref={carouselRef} className={styles.ProjectGrid}>
        {projectsData.map((proj) => (
          <div key={proj.id} className={styles.cardWrapper}>
            <CardProjects {...proj} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;