import React from "react";
import styles from "../../Styles/Partials/sectionHabilidades.module.css";
import tittlepage from "../../Styles/Partials/tittlepage.module.css";
import skillsData from "../../data/skills.json";

function Habilidades() {
  return (
    <section className={styles.Habilidades} id="habilidades">
      {/* Título e SVG permanecem estáticos conforme seu pedido anterior */}
      <svg width="409" height="44" viewBox="0 0 409 44" fill="none" className={tittlepage.Svg}>
        <g filter="url(#filter0_f_1_3332)">
          <path d="M4.29004 4.29004C4.29004 4.29004 4.29248 39.29 196.29 39.29C404.29 39.29 404.29 4.29004 404.29 4.29004" stroke="#007AFF" strokeWidth="0.58" strokeLinecap="round"/>
        </g>
      </svg>

      <h1 className={tittlepage.BgTittle}>Habilidades</h1>
      <h2 className={tittlepage.Tittle}>Habilidades</h2>

      <div className={styles.SkillsContainer}>
        {skillsData.map((skill, i) => (
          <div 
            key={skill.id} 
            className={styles.SkillItem}
            /* Lógica do AOS: Se o índice for par, vem da esquerda (fade-right), se for ímpar, da direita (fade-left) */
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            data-aos-delay={i * 100} // Cria um efeito cascata (cada um demora 0.1s a mais que o anterior)
          >
            <div className={styles.SkillHeader}>
              <span className={styles.number}>{skill.id}.</span>
              <h4 className={styles.Title}>{skill.title}</h4>
            </div>
            <p className={styles.Description}>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Habilidades;