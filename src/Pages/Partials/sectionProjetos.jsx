import React from "react";

/** * ESTILIZAÇÃO
 * Separação de estilos por módulos para garantir escopo local
 */
import styles from "../../Styles/Partials/sectionProjeto.module.css";
import tittlepage from "../../Styles/Partials/tittlepage.module.css";

/** * COMPONENTES
 * Reutilização de componentes de interface
 */
import CardProjects from "../../Components/CardProject";

// IMPORTANDO OS DADOS
import { projectsData } from "../../data/projects.js";

/** * ASSETS
 * Centralização de mídias para facilitar a manutenção de caminhos
 */

/**
 * Componente Projetos
 * Renderiza a seção de portfólio, exibindo uma vitrine de projetos
 * mapeados a partir de um conjunto de dados estático.
 * * @returns {JSX.Element} Seção de projetos com grid responsivo
 */
function Projetos() {
  return (
    <section
      className={styles.Projetos}
      id="projetos"
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
      <h1 className={tittlepage.BgTittle}>Projetos</h1>
      <h2 className={tittlepage.Tittle}>Projetos</h2>

      {/* GRID DE PROJETOS: Renderização dinâmica baseada no array 'projects' */}
      <div className={styles.ProjectGrid}>
        {projectsData.map((proj) => (
          <CardProjects
            key={proj.id} // Usando o ID único do banco de dados
            {...proj} // Spread operator: passa todas as propriedades de uma vez
          />
        ))}
      </div>
    </section>
  );
}

export default Projetos;
