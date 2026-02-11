import { useEffect } from "react";
import { motion } from "framer-motion"; // 1. Importar o motion

import styles from "../../Styles/Partials/sectionContatos.module.css";
import tittlepage from "../../Styles/Partials/tittlepage.module.css";

import { contactsData } from "../../data/contacts.js";
import ArrowIcon from "../../Assets/Icons/svgs/Arrow.svg";
import Subtract from "../../Assets/Subtract.png";

/* <---- AOS ANIMATIONS ----> */
import AOS from "aos";
import "aos/dist/aos.css";

// 2. Configuração das animações (Variantes)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Tempo entre a aparição de cada card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Contatos() {
  /* Chama a animação com aos */
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <section
      className={styles.Contatos}
      id="contatos"
      aria-labelledby="hero-title"
    >
      {/* ... (Seu SVG de fundo se mantém igual) ... */}

      <h1 className={tittlepage.BgTittle}>Contatos</h1>
      <h2 className={tittlepage.Tittle}>Contatos</h2>

      {/* Animação suave no texto de introdução */}
      <motion.div
        className={styles.textContainer}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
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
      </motion.div>

      {/* 3. Container dos cards com animação de grupo */}
      <motion.div
        className={styles.cardsContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {contactsData.map((item) => (
          <motion.a
            href={item.url}
            key={item.id}
            target="_blank"
            rel="noreferrer"
            className={styles.card}
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            data-aos="fade-up"
          >
            <div className={styles.iconContainer}>
              <div className={styles.iconBg}>
                <motion.img
                  src={ArrowIcon}
                  alt="Ir"
                  whileHover={{ rotate: -45 }} // Sutil rotação na seta ao passar o mouse
                />
              </div>
              <img src={Subtract} className={styles.subtract} alt="" />
            </div>

            <div className={styles.cardInfo}>
              <img src={item.icon} alt={item.platform} />
              <h1>{item.description}</h1>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

export default Contatos;
