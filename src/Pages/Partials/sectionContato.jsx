import React from "react";
import { motion } from "framer-motion";

import styles from "../../Styles/Partials/sectionContatos.module.css";
import { contactsData } from "../../data/contacts.js";

// Variantes de Animação
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

function Contatos() {
  return (
    <motion.section
      className={styles.Contatos}
      id="contatos"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* 1. Tag Superior */}
      <motion.span className={styles.SectionTag} variants={itemVariants}>
        - CONTATOS
      </motion.span>

      {/* 2. Título Principal Impagável */}
      <motion.h1 className={styles.Title} variants={itemVariants}>
        Pronto para <span>criar algo incrível.</span>
      </motion.h1>

      {/* 3. Subtítulo / Descrição */}
      <motion.div className={styles.Description} variants={itemVariants}>
        <p>
          Seja para novos projetos, propostas ou parcerias estratégicas, estou a um clique de distância.
        </p>
        <p>
          Vamos construir o próximo produto juntos?
        </p>
      </motion.div>

      {/* 4. Grid dos 3 Cards de Contato */}
      <motion.div className={styles.cardsContainer} variants={containerVariants}>
        {contactsData.map((item) => (
          <motion.a
            href={item.url}
            key={item.id}
            target="_blank"
            rel="noreferrer"
            className={styles.card}
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.iconContainer}>
              <img src={item.icon} alt={item.platform} className={styles.icon} />
            </div>

            <p className={styles.cardDescription}>{item.description}</p>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Contatos;