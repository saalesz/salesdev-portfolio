import React from "react";

/** * ESTILIZAÇÃO
 * Separação de estilos por módulos para garantir escopo local
 */
import styles from "../../Styles/Partials/sectionContatos.module.css";
import tittlepage from "../../Styles/Partials/tittlepage.module.css";

import { contactsData } from "../../data/contacts.js";
import ArrowIcon from "../../Assets/Icons/svgs/Arrow.svg";

function Contatos() {
  return (
    <section
      className={styles.Contatos}
      id="contatos"
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
      <h1 className={tittlepage.BgTittle}>Contatos</h1>
      <h2 className={tittlepage.Tittle}>Contatos</h2>

      <div className={styles.textContainer}>
        <h1>
          Pronto para <span>Criar Algo Incrível.</span>
        </h1>
        <p>
          Seja para novas oportunidades, feedback ou parcerias estratégicas,
          estou a um clique de distância.
        </p>
        <p>
          Explore meu universo de código e conexões. LinkedIn para a trajetória
          profissional, GitHub para ver o código em ação. Vamos interagir!
        </p>
      </div>

      <div className={styles.CardsContainer}>
        {contactsData.map((item) => (
          <a
            href={item.url}
            key={item.id}
            target="_blank"
            rel="noreferrer"
            className={styles.ContactCard}
          >
            <div className={styles.CardContent}>
              <div className={styles.IconBox}>
                <img src={item.icon} alt={item.platform} />
              </div>
                <p className={styles.CardInfo}>
                  {item.description} 
                </p>
              <div className={styles.ArrowCircle}>
                <img src={ArrowIcon} alt="Ir" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contatos;
