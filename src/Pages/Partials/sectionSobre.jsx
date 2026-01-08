import React from "react";

/** * ESTILIZAÇÃO
 * Separação de estilos por módulos para garantir escopo local
 */
import styles from "../../Styles/Partials/sectionSobre.module.css";
import tittlepage from "../../Styles/Partials/tittlepage.module.css";

import IconCV from "../../Assets/Icons/svgs/IconCV.svg";

function Sobre() {
  return (
    <section className={styles.Sobre} id="sobre" aria-labelledby="hero-title">
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
      <h1 className={tittlepage.BgTittle2}>Sobre</h1>
      <h2 className={tittlepage.Tittle2}>Sobre</h2>

      <div className={styles.Container}>
        <div className={styles.Text}>
          <h1>
            Desenvolvedor <span>Front-end</span> & <span>UI/UX</span>
          </h1>
          <h2>
            Olá! Sou Emerson Sales, especialista em transformar análises e
            design em interfaces web eficientes e centradas no usuário. Minha
            paixão é construir experiências digitais que não apenas funcionam
            perfeitamente (com ênfase em Front-end e performance), mas que
            também são intuitivas e visualmente atraentes (foco em UI/UX). Com
            uma formação sólida em Desenvolvimento de Sistemas, estou pronto
            para aplicar minha dedicação e orientação a resultados para
            impulsionar os objetivos da sua equipe e entregar projetos de alto
            valor.
          </h2>
        </div>
        <button className={styles.ButtonCV}>
          <div className={styles.IconCV}>
            <img src={IconCV} />
          </div>
          ACESSAR MEU CURRÍCULO
        </button>
      </div>
    </section>
  );
}

export default Sobre;
