import Home from "./Partials/sectionHome";
import Projetos from "./Partials/sectionProjetos";
import Sobre from "./Partials/sectionSobre";
import Contatos from "./Partials/sectionContato";
import Footer from "../Components/Footer";

import "../Styles/styles.css";

function Index() {
  return (
    <>
      <Home />
      <Projetos />
      <Sobre />
      <Contatos />
      <Footer />
    </>
  );
}

export default Index;
