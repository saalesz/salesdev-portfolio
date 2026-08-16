import styles from "../Styles/Components/Footer.module.css";

import Logo from "../Assets/Logos/SalesDevLogo.svg"

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <img src={Logo} alt="SalesDev Logo" />
        <p >© 2026 SalesDev. Projetado e desenvolvido por Emerson Sales.</p>
      </div>
    </footer>
  );
}

export default Footer;
