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
import AlterarGeralPage from "./pages/Admin/Dashboard/AlterarGeralPage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
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
        <Route path="/admin/alterar" element={<AlterarGeralPage />} />
        <Route path="/clientes" element={<ClientesAdminPage />} />
        <Route path="/cadastro-produto" element={<CadastroProdutoPage />} />
        <Route
          path="/editar-acompanhante/:id"
          element={<EditarProdutoPage />}
        />
      </Routes>
    </Router>
  );
}
