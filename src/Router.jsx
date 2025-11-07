import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Client/Home";
import RegisterPage from "./pages/Client/Resgister";
import LoginPage from "./pages/Client/LoginPage";
import EsqueciSenhaPage from "./pages/Client/EsqueciSenhaPage";
import SearchAcompPage from "./pages/Client/SeachAcompPage";
import AcompPage from "./pages/Client/AcompPage";
import AcompPerfilPage from "./pages/Client/AcompPerfilPage";
import Test from "./Test";
import CidadesPage from "./pages/Client/CidadesPage";
import TopAvaliadasPage from "./pages/Client/TopAvaliadasPage";
import PerfilAcompPage from "./pages/Client/PerfilAcompPage";
import PerfilClientePage from "./pages/Client/PerfilClientePage";
import Error404 from "./errors/Error404";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/cidades" element={<CidadesPage />} />
        <Route path="/melhores-avaliadas" element={<TopAvaliadasPage />} />
        <Route path="/acompanhantes" element={<SearchAcompPage />} />
        <Route path="/acompanhantes-?" element={<AcompPage />} />
        <Route path="/acompanhantes/perfil" element={<AcompPerfilPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registra-se" element={<RegisterPage />} />
        <Route path="/alterar-senha" element={<EsqueciSenhaPage />} />
        <Route path="/perfil/acompanhante" element={<PerfilAcompPage />} />
        <Route path="/perfil" element={<PerfilClientePage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}
