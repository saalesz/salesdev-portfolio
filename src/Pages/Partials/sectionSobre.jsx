import React from "react";
import { motion } from "framer-motion";
import styles from "../../Styles/Partials/sectionSobre.module.css";
import tittlepage from "../../Styles/Partials/tittlepage.module.css";
import IconCV from "../../Assets/Icons/svgs/IconCV.svg";
import IconLinkedIn from "../../Assets/Icons/Icons Contatos/Linkedin.svg";
import FotoPerfil from "../../Assets/Perfil.png";

import MeuCV from "../../Assets/CV/CV_EmersonSales.pdf"; 

function Sobre() {
  // 1. Variantes de animação para o container (gerencia o atraso entre os filhos)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Tempo entre a aparição de cada elemento
        delayChildren: 0.1,
      },
    },
  };

  // 2. Animação de "surgimento" suave (Fade + Slide Up + Blur)
  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // 3. Animação específica para a foto (Scale + Rotate)
  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

      const abrirCurriculo = () => {
        window.open(MeuCV, '_blank');
    };

  return (
    <motion.section
      className={styles.Sobre}
      id="sobre"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* ELEMENTO DECORATIVO */}
      <div variants={itemVariants}>
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
            <filter id="filter0_f_1_3332" x="0" y="0" width="408.58" height="43.5801" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="0" result="effect1_foregroundBlur_1_3332" />
            </filter>
          </defs>
        </svg>
      </div>

      {/* CABEÇALHO DA SEÇÃO */}
      <h1 className={tittlepage.BgTittle2} variants={itemVariants}>Sobre</h1>
      <h2 className={tittlepage.Tittle2} variants={itemVariants}>Sobre</h2>

      <h1 className={styles.SubTittle} variants={itemVariants}>
        Desenvolvedor <span>Front-end</span> & <span>UI/UX</span>
      </h1>

      <motion.div className={styles.FotoPerfil} variants={photoVariants}>
        <img src={FotoPerfil} alt="Emerson Sales" />
      </motion.div>

      <div className={styles.Container}>
        <motion.div className={styles.Text} variants={itemVariants}>
          <h2>
            Emerson {" "} <span>Sales</span>
          </h2>
          <p>
            Especialista em transformar requisitos de negócio e conceitos de
            design em interfaces web de alta performance, centradas na
            experiência do usuário. Minha atuação une a precisão técnica do
            Desenvolvimento de Sistemas à sensibilidade estética do UI/UX,
            garantindo que cada projeto seja não apenas visualmente atraente,
            mas tecnicamente impecável e escalável.
          </p>
        </motion.div>

        <motion.div  className={styles.ButtonsContainer} variants={itemVariants}>
          <motion.button 
            className={styles.ButtonCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={abrirCurriculo}
          >
            <div className={styles.IconCV}>
              <img src={IconCV} alt="Ícone CV" />
            </div>
            Currículo
          </motion.button>
          
          <motion.a 
            className={styles.BtnLinkedin}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/emersonssales/" target="_blank" rel="noreferrer"
          >
            <div className={styles.IconLinkedin}>
              <img src={IconLinkedIn} alt="Ícone LinkedIn" />
            </div>
            LinkedIn
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Sobre;