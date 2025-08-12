import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Modelo from "./pages/modelo/main/Modelo";
import ModeloCadastroSemFoto from "./pages/modelo/cadastro/ModeloCadastroSemFoto";
import ModeloEncontrar from "./pages/modelo/encontrar/ModeloEncontrar";
import ModeloListar from "./pages/modelo/listar/ModeloListar";
import ModeloAtualizarSemFoto from "./pages/modelo/atualizar/ModeloAtualizarSemFoto";
import ModeloDeletar from "./pages/modelo/delete/ModeloDeletar";
import ModeloPerfil from "./pages/modelo/perfil/ModeloPerfil";
import StatsPage from "./pages/StatsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/modelo/:page" element={<Modelo />} />
        <Route path="/modelo/cadastro" element={<ModeloCadastroSemFoto />} />
        <Route path="/modelo/buscar" element={<ModeloEncontrar />} />
        <Route path="/modelo/listar" element={<ModeloListar />} />
        <Route path="/modelo/alterar" element={<ModeloAtualizarSemFoto />} />
        <Route path="/modelo/deletar" element={<ModeloDeletar />} />
        <Route path="/Perfil/:id" element={<ModeloPerfil />} />
        <Route path="/Stats" element={<StatsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
