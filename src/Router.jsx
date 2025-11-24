import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Client/Home";
import RegisterPage from "./pages/Client/Resgister";
import LoginPage from "./pages/Client/LoginPage";
import EsqueciSenhaPage from "./pages/Client/EsqueciSenhaPage";
import AcompPage from "./pages/Client/AcompPage";
import AcompPerfilPage from "./pages/Client/AcompPerfilPage";
import Test from "./Test";
import TopAvaliadasPage from "./pages/Client/TopAvaliadasPage";
import PerfilAcompPage from "./pages/Client/PerfilAcompPage";
import PerfilClientePage from "./pages/Client/PerfilClientePage";
import Error404 from "./errors/Error404";

import LoginAdminPage from "./Pages/Admin/Login/Login";
import DashboardAdminPage from "./Pages/Admin/Dashboard/Dashboard";
import ProdutosAdminPage from "./Pages/Admin/Dashboard/Produtos";
import CadastroProdutoPage from "./Pages/Admin/Dashboard/CadastroProdutos";
import EditarProdutoPage from "./Pages/Admin/Dashboard/EditarAcompanhante";
import ClientesAdminPage from "./Pages/Admin/Dashboard/Clientes";
import BlogAdiminPage from "./Pages/Admin/Dashboard/Blog";
import AlterarAdminPage from "./pages/Admin/Dashboard/AlterarAdminPage";
import AlterarNavbarPage from "./pages/Admin/Dashboard/AlterarNavbarPage";
import AlterarHeroPage from "./pages/Admin/Dashboard/AlterarHeroPage";
import AlterarFooterPage from "./pages/Admin/Dashboard/AlterarFooterPage";
import AlterarContatoPage from "./pages/Admin/Dashboard/AlterarContatoPage";
import AlterarBlogPage from "./pages/Admin/Dashboard/AlterarBlogPage";
import AlterarAcompanhantesPage from "./pages/Admin/Dashboard/AlterarAcompanhantesPage";
import ContatoPage from "./pages/Client/ContatoPage";
import SobrenosPage from "./pages/Client/SobrenosPage";
import AlterarContatoInfoPage from "./pages/Admin/Dashboard/AlterarContatoInfo";
import AlterarSobrenosPage from "./pages/Admin/Dashboard/AlterarSobrenosPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/sobrenos" element={<SobrenosPage/>} />
        <Route path="/melhores-avaliadas" element={<TopAvaliadasPage />} />
        <Route path="/acompanhantes" element={<AcompPage />} />
        <Route path="/acompanhantes/perfil" element={<AcompPerfilPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registra-se" element={<RegisterPage />} />
        <Route path="/alterar-senha" element={<EsqueciSenhaPage />} />
        <Route path="/perfil/acompanhante" element={<PerfilAcompPage />} />
        <Route path="/perfil" element={<PerfilClientePage />} />
        <Route path="/test" element={<Test />} />

        <Route path="/admin" element={<LoginAdminPage />} />
        <Route path="/admindash" element={<DashboardAdminPage />} />
        <Route path="/admin-acompanhantes" element={<ProdutosAdminPage />} />
        <Route path="/admin-blog" element={<BlogAdiminPage />} />
        <Route path="/clientes" element={<ClientesAdminPage />} />
        <Route path="/cadastro-produto" element={<CadastroProdutoPage />} />
        <Route
          path="/editar-acompanhante/:id"
          element={<EditarProdutoPage />}
        />
        <Route path="/admin/alterar" element={<AlterarAdminPage />} />
        <Route path="/admin/alterar-navbar" element={<AlterarNavbarPage />} />
        <Route path="/admin/alterar-hero" element={<AlterarHeroPage />} />
        <Route path="/admin/alterar-footer" element={<AlterarFooterPage />} />
        <Route path="/admin/alterar-contato" element={<AlterarContatoPage />} />
        <Route path="/admin/alterar-blog" element={<AlterarBlogPage />} />
        <Route path="/admin/alterar-acompanhantes" element={<AlterarAcompanhantesPage />} />
        <Route path="/admin/alterar-contatoinfo" element={<AlterarContatoInfoPage />} />
        <Route path="/admin/alterar-sobrenos" element={<AlterarSobrenosPage />} />
      </Routes>
    </Router>
  );
}
