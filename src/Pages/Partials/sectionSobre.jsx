import React from "react";
import { motion } from "framer-motion";
import styles from "../../Styles/Partials/sectionSobre.module.css";
import FotoPerfil from "../../Assets/Perfil.webp";

function Sobre() {
  // Array de skills extraídas diretamente da foto
  const skills = [
    "ReactJs/Native",
    "HTML",
    "UI/UX Design",
    "Figma",
    "JavaScript",
    "MySQL",
    "Linguagem C & C#",
    "Node.Js",
    "GitHub",
  ];

  // Variantes de Animação (Framer Motion)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
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
      <div className={styles.Sobre}>

        <motion.div className={styles.NameFunder} variants={itemVariants}>
          <h1>Emerson</h1>
          <p>Fundador - SalesDev</p>
        </motion.div>

        <motion.div className={styles.FotoContainer} variants={photoVariants}>
          <img src={FotoPerfil} alt="Emerson Sales" className={styles.FotoPerfil} />
        </motion.div>

        <motion.span className={styles.SectionTag} variants={itemVariants}>
          - SOBRE
        </motion.span>

        <div className={styles.TextContainer}>

          <motion.h1 className={styles.Title} variants={itemVariants}>
            Conectando propósito, <span>design</span> e engenharia.
          </motion.h1>

          <motion.div className={styles.Description} variants={itemVariants}>
            <p>
              Sou Emerson Sales, Desenvolvedor Front-end e UI/UX Designer. Unindo
              o olhar analítico do design de interface à solidez da engenharia de
              código, desenvolvo soluções web modernas, responsivas e de alta
              performance.
            </p>
            <p>
              Meu foco é traduzir as necessidades do seu negócio em produtos
              digitais escaláveis, acessíveis e totalmente centrados na experiência
              do usuário.
            </p>
          </motion.div>

          <motion.div className={styles.SkillsContainer} variants={itemVariants}>
            {skills.map((skill, index) => (
              <span key={index} className={styles.SkillBadge}>
                {skill}
              </span>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

export default Sobre;