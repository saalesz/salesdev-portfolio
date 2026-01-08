import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota do Portfólio Principal (Dark) */}
        <Route path="/" element={<Index />} />

        {/* Rota da Links Page (Light) - O '*' permite sub-rotas dentro dela 
        <Route path="/links/*" element={<LinksPage />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;