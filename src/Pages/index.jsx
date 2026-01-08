import Home from "./Partials/sectionHome";
import Projetos from "./Partials/sectionProjetos";
import Sobre from "./Partials/sectionSobre";
import Habilidades from "./Partials/sectionHabilidades";
import Contatos from "./Partials/sectionConecte";
import Footer from "../Components/Footer";

import "../Styles/styles.css";

function Index() {
  return (
    <>
      <Home />
      <Projetos />
      <Sobre />
      <Habilidades />
      <Contatos />
      <Footer />
    </>
  );
}

export default Index;
