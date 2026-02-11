import React from "react";
import { motion } from "framer-motion";
import styles from "../../Styles/Partials/sectionHome.module.css";
import Header from "../../Components/Header";

function Home() {
  const handleLearnMore = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Variantes para o "surgimento discreto"
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
  };

  // Texto dividido para animação
  const fraseH1 = "Construindo Interfaces Intuitivas, Responsivas e Acessíveis.";
  // Palavras que devem herdar a cor do span (Azul-Claro)
  const destaques = ["Intuitivas,", "Responsivas", "Acessíveis."];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <section className={styles.Home} id="home" aria-labelledby="hero-title">
        <motion.header
          className={styles.introBadge}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>Desenvolvedor Front-end & UI/UX</p>
        </motion.header>

        <div className={styles.textContainer}>
          <article className={styles.text}>
            <motion.h1
              id="hero-title"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {fraseH1.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  variants={itemVariants}
                  // Se a palavra for um destaque, ela ganha a cor do CSS de span
                  className={destaques.includes(word) ? styles.spanColor : ""}
                  style={{ display: "inline-block", marginRight: "0.25em" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Olá, sou Emerson Sales! Desenvolvedor Front-end e Designer UI/UX,
              especializado em criar soluções web que colocam o usuário no centro do projeto.
            </motion.h2>
          </article>

          <motion.button
            className={styles.btn}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            onClick={() => {
              handleLearnMore();       
              scrollToSection('sobre'); 
            }}
          >
            Saiba sobre mim
            <div className={styles.iconBtn}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className={styles.Arrow}>
                <path d="M0.789685 6.24445L11.395 6.24458M11.395 6.24458L6.18848 0.789978M11.395 6.24458L6.18848 11.699" stroke="currentColor" strokeWidth="1.58" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.button>
        </div>
      </section>
    </>
  );
}

export default Home;