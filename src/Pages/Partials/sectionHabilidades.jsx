import React from "react";

/** * ESTILIZAÇÃO
 * Separação de estilos por módulos para garantir escopo local
 */
import styles from "../../Styles/Partials/sectionHabilidades.module.css";
import tittlepage from "../../Styles/Partials/tittlepage.module.css";

import skillsData from "../../data/skills.json";

function Habilidades() {
  return (
    <section
      className={styles.Habilidades}
      id="habilidades"
      aria-labelledby="hero-title"
    >
      {/* ELEMENTO DECORATIVO: SVG de fundo com efeito de glow/linha */}
      <svg
        width="409"
        height="44"
        viewBox="0 0 409 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={tittlepage.Svg}
      >
        <g filter="url(#filter0_f_1_3332)">
          <path
            d="M4.29004 4.29004C4.29004 4.29004 4.29248 39.29 196.29 39.29C404.29 39.29 404.29 4.29004 404.29 4.29004"
            stroke="#007AFF"
            strokeWidth="0.58"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_3332"
            x="0"
            y="0"
            width="408.58"
            height="43.5801"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0"
              result="effect1_foregroundBlur_1_3332"
            />
          </filter>
        </defs>
      </svg>

      {/* CABEÇALHO DA SEÇÃO: Título com efeito de profundidade (Background + Foreground) */}
      <h1 className={tittlepage.BgTittle}>Habilidades</h1>
      <h2 className={tittlepage.Tittle}>Habilidades</h2>

      <div className={styles.SkillsContainer}>
        {skillsData.map((skill) => (
          <div key={skill.id} className={styles.SkillItem}>
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
