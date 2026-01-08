/**
 * Componente de Cabeçalho (Header)
 * Gerencia a navegação principal, estados do menu mobile e comportamento de scroll.
 */

import React, { useRef, useState, useEffect } from "react";

// Estilização
import styles from "../Styles/Components/Header.module.css";

// Ativos: Logotipos e Identidade Visual
import Logo from "../Assets/Logos/SalesDevLogo.svg";
import Icon from "../Assets/Logos/SalesDevIcon.svg";

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

  /**
   * Alterna o estado de visibilidade do menu mobile
   */
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  /**
   * Realiza o scroll suave até a seção alvo e fecha o menu mobile
   * @param {string} sectionId - O ID da seção de destino (ex: 'home', 'sobre')
   */
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  /**
   * Effect Hook: Monitora cliques fora do container do menu para fechá-lo automaticamente
   */
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

  return (
    <header className={styles.header}>
      {/* Brand: Renderização condicional de logos baseada em Media Queries via CSS */}
      <img 
        src={Logo} 
        alt="SalesDev Logo" 
        className={styles.Logo} 
        onClick={() => scrollToSection("home")} 
      />
      <img 
        src={Icon} 
        alt="SalesDev Icon" 
        className={styles.Icon} 
        onClick={() => scrollToSection("home")}
      />

      {/* Navigation & Menu Wrapper: Agrupamento lógico para controle de cliques externos */}
      <div ref={wrapperRef}>
        <nav
          ref={menuRef}
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
        >
          {/* Navegação Principal */}
          <ul>
            <li onClick={() => scrollToSection("projetos")}>Projetos</li>
            <li onClick={() => scrollToSection("sobre")}>Sobre</li>
            <li onClick={() => scrollToSection("habilidades")}>Habilidades</li>
          </ul>

          {/* Social Media Section */}
          <div className={styles.Redes}>
            <h1>Links Sociais</h1>
            <div className={styles.RedesIcon}>
              <a href="https://www.linkedin.com/in/emersonssales/" target="_blank" rel="noreferrer">
                <div className={styles.IconRedes}>
                  <img src={LinkedIn} alt="LinkedIn" />
                </div>
              </a>
              <a href="https://www.instagram.com/sxlesz_" target="_blank" rel="noreferrer">
                <div className={styles.IconRedes}>
                  <img src={Instagram} alt="Instagram" />
                </div>
              </a>
              <a href="https://github.com/saalesz" target="_blank" rel="noreferrer">
                <div className={styles.IconRedes}>
                  <img src={Github} alt="GitHub" />
                </div>
              </a>
            </div>
          </div>

          {/* Action Call: CTA Principal do Menu */}
          <button
            className={styles.BtnContatos}
            onClick={() => scrollToSection("contatos")}
          >
            Conecte-se
          </button>
        </nav>

        {/* Mobile Control: Botão Hamburguer com acessibilidade implícita */}
        <button
          className={styles.hamburger}
          onClick={(e) => {
            e.stopPropagation(); // Previne a propagação para o handleClickOutside
            toggleMenu();
          }}
          aria-expanded={isMenuOpen}
          aria-label="Abrir menu de navegação"
        >
          {isMenuOpen ? (
            <img src={Close} className={styles.closeIcon} alt="Ícone de fechar" />
          ) : (
            <img src={Menu} className={styles.menuIcon} alt="Ícone de menu" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;