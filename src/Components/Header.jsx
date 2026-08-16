/**
 * Componente de Cabeçalho (Header)
 * Gerencia a navegação principal, estados do menu mobile e comportamento de scroll.
 */
import React, { useRef, useState, useEffect } from "react";
// Importar apenas o motion
import { motion } from "framer-motion";

// Estilização
import styles from "../Styles/Components/Header.module.css";

// Ativos: Logotipos e Identidade Visual
import Logo from "../Assets/Logos/SalesDevLogo.svg";

// Ativos: Ícones de Interface e Redes Sociais
import Menu from "../Assets/Icons/svgs/Menu.svg";
import Close from "../Assets/Icons/svgs/Close.svg";
import LinkedIn from "../Assets/Icons/Icons Redes - Header/Linkedin.svg";
import Instagram from "../Assets/Icons/Icons Redes - Header/Instagram.svg";
import Github from "../Assets/Icons/Icons Redes - Header/Github.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const wrapperRef = useRef(null);

  // Estado para detetar se está no Mobile ou Desktop
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Ajusta o 768 para o breakpoint exato que usas no teu CSS Modules
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Executa ao montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Variantes de animação (só serão aplicadas se isMobile for true)
  const menuVariants = {
    closed: {
      x: "-100%", 
      transition: { type: "tween", duration: 0.3 }
    },
    open: {
      x: 0, 
      transition: { 
        type: "tween", 
        duration: 0.3, 
        staggerChildren: 0.05, 
        delayChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 }, // Itens surgem ligeiramente da esquerda
    open: { opacity: 1, x: 0 }
  };

  return (
    <header className={styles.header}>
      <img
        src={Logo}
        alt="SalesDev Logo"
        className={styles.Logo}
        onClick={() => scrollToSection("home")}
      />

      <div ref={wrapperRef}>
        {/* O <motion.nav> fica sempre no DOM agora */}
        <motion.nav
          ref={menuRef}
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
          // Se for mobile, ativa as animações. Se for desktop, ignora-as completamente.
          variants={isMobile ? menuVariants : {}}
          animate={isMobile ? (isMenuOpen ? "open" : "closed") : "open"}
          initial={isMobile ? "closed" : false}
        >
          {/* Navegação Principal */}
          <motion.ul variants={isMobile ? itemVariants : {}}>
            <li onClick={() => scrollToSection("projetos")}>Projetos</li>
            <li onClick={() => scrollToSection("sobre")}>Sobre</li>
            <li onClick={() => scrollToSection("contatos")}>Contato</li>
          </motion.ul>

          {/* Social Media Section */}
          <motion.div className={styles.Redes} variants={isMobile ? itemVariants : {}}>
            <h1>- Links Sociais -</h1>
            <div className={styles.RedesIcon}>
              <a href="https://www.linkedin.com/in/emersonssales/" target="_blank" rel="noreferrer">
                <div className={styles.IconRedes}>
                  <img src={LinkedIn} alt="LinkedIn" />
                </div>
              </a>
              <a href="https://github.com/saalesz" target="_blank" rel="noreferrer">
                <div className={styles.IconRedes}>
                  <img src={Github} alt="GitHub" />
                </div>
              </a>
              <a href="https://www.instagram.com/sxlesz_" target="_blank" rel="noreferrer">
                <div className={styles.IconRedes}>
                  <img src={Instagram} alt="Instagram" />
                </div>
              </a>
            </div>
          </motion.div>
          
          <motion.p className={styles.emailcontato} variants={isMobile ? itemVariants : {}}>
            contatosalesdev@gmail.com
          </motion.p>
          <motion.button className={styles.btnContato} variants={isMobile ? itemVariants : {}}>
            Fale comigo
          </motion.button>
        </motion.nav>

        {/* Botão Hamburguer */}
        <button
          className={styles.hamburger}
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          aria-expanded={isMenuOpen}
          aria-label="Abrir menu de navegação"
        >
          {isMenuOpen ? (
            <>
              <img src={Close} className={styles.closeIcon} alt="Ícone de fechar" />
              <span className={styles.menuText}>Menu</span>
            </>
          ) : (
            <>
              <img src={Menu} className={styles.menuIcon} alt="Ícone de menu" />
              <span className={styles.menuText}>Menu</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;