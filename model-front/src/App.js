import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Modelo from "./pages/Modelo";
import ModeloCadastroSemFoto from "./pages/ModeloCadastroSemFoto";
import ModeloEncontrar from "./pages/ModeloEncontrar";
import ModeloListar from "./pages/ModeloListar";
import ModeloAtualizarSemFoto from "./pages/ModeloAtualizarSemFoto";
import ModeloDeletar from "./pages/ModeloDeletar";
import ModeloPerfil from "./pages/ModeloPerfil";
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
