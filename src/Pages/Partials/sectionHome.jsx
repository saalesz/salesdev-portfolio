import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../../Styles/Partials/sectionHome.module.css";
import Header from "../../Components/Header";

import Arrow from "../../Assets/Icons/svgs/Arrow.svg";

// 1. Alterado para o abecedário completo em maiúsculas
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function Home() {
  const targetWord = "INTERFACE";
  const [displayText, setDisplayText] = useState(targetWord);

  useEffect(() => {
    let iteration = 0;
    let interval = null;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText((prev) =>
          targetWord
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return targetWord[index]; // Fixa a letra correta
              }
              // 2. Sorteia apenas letras do abecedário para o efeito
              return alphabet[Math.floor(Math.random() * alphabet.length)];
            })
            .join("")
        );

        if (iteration >= targetWord.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3; // Mantém a velocidade da transição
      }, 30); // Velocidade da troca de letras (ms)
    }, 400); 

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  // Variantes do Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const blurVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 0.6, 
      scale: 1, 
      transition: { duration: 1.2, ease: "easeOut" } 
    }
  };

  return (
    <>
      <Header />
      <section className={styles.Home} id="home" aria-labelledby="hero-title">
        <motion.div 
          className={styles.HomeContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants}>
            - UI/UX DESIGNER & FRONT-END DEVELOPER
          </motion.p>
          
          <div className={styles.HomeContentText}>
            <div className={styles.HomeContentTextTitle}>
              <motion.h1 variants={itemVariants} id="hero-title">
                DESIGN DE <span className={styles.scrambleWord}>{displayText}</span>, ENGENHARIA <span>FRONT-END.</span>
              </motion.h1>
              
              <motion.h2 variants={itemVariants}>
                Olá, sou Emerson Sales. Transformo ideias complexas em aplicações web modernas, acessíveis e de alta performance, unindo design focado na experiência do usuário e código limpo.
              </motion.h2>
            </div>
            
            <motion.button 
              className={styles.ViewProjects}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Ver projetos <img src={Arrow} alt="" />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Home;