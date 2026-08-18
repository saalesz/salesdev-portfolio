import Home from "./Partials/sectionHome";
import Projetos from "./Partials/sectionProjetos";
import Sobre from "./Partials/sectionSobre";
import Contatos from "./Partials/sectionContato";
import Footer from "../Components/Footer";

import "../Styles/styles.css";
import CustomCursor from "../Components/CustomCursor";

function Index() {
  return (
    <>
      <CustomCursor />
      <Home />
      <Projetos />
      <Sobre />
      <Contatos />
      <Footer />
      <CustomCursor />
    </>
  );
}

export default Index;
