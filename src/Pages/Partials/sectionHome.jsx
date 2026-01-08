/* * Home Component
 * Responsável pela seção Hero (principal) do portfólio.
 * Apresenta a proposta de valor e a identidade do desenvolvedor.
 */

import React from "react";

// Estilização - Utilizando CSS Modules para escopo local
import styles from "../../Styles/Partials/sectionHome.module.css";

// Componentes de Interface
import Header from "../../Components/Header";

function Home() {
  /**
   * Handler para navegação suave ou ação do botão
   * Pode ser expandido para analytics ou scroll programático
   */
  const handleLearnMore = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      
      {/* Seção Principal: Utiliza a tag <main> ou <section> com ARIA labels se necessário */}
      <section className={styles.Home} id="home" aria-labelledby="hero-title">
        
        <header className={styles.introBadge}>
          <p>Desenvolvedor Front-end & UI/UX</p>
        </header>

        <div className={styles.textContainer}>
          <article className={styles.text}>
            <h1 id="hero-title">
              Construindo Interfaces <span>Intuitivas</span>,
              <span> Responsivas</span> e <span>Acessíveis.</span>
            </h1>
            
            <h2>
              Olá, sou Emerson Sales! Desenvolvedor Front-end e Designer UI/UX,
              especializado em criar soluções web que colocam o usuário no centro do projeto.
            </h2>
          </article>

          <button 
            className={styles.btn} 
            onClick={handleLearnMore}
            aria-label="Saiba mais sobre Emerson Sales"
          >
            Saiba sobre mim
            <div className={styles.iconBtn}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.Arrow}
                aria-hidden="true" // Oculta o ícone decorativo de leitores de tela
              >
                <path
                  d="M0.789685 6.24445L11.395 6.24458M11.395 6.24458L6.18848 0.789978M11.395 6.24458L6.18848 11.699"
                  stroke="currentColor" // Facilita a gestão de cores via CSS
                  strokeWidth="1.58"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;