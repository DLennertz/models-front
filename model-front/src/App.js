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
        <Route path="/Modelo/:page" element={<Modelo />} />
        <Route path="/CadastrarModelo" element={<ModeloCadastroSemFoto />} />
        <Route path="/EncontrarModelo" element={<ModeloEncontrar />} />
        <Route path="/ListarModelo" element={<ModeloListar />} />
        <Route path="/AtualizarModelo" element={<ModeloAtualizarSemFoto />} />
        <Route path="/DeletarModelo" element={<ModeloDeletar />} />
        <Route path="/Perfil/:id" element={<ModeloPerfil />} />
        <Route path="/Stats" element={<StatsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
