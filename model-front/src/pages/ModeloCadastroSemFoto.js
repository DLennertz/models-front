import React from "react";
import Header from "../components/header/header";
import SubMenu from "../components/SubMenu/SubMenu";
import InputCadastrarModeloFotoPath from "../components/Inputs/InputCadastrarModeloFotoPath/inputCadastrarModeloFotoPath";

import "./ModeloCadastro.css";
const ModeloCadastroSemFoto = () => (
  <>
    <Header />
    <div id="container">
      <SubMenu />

      <div className="campo">
        <h2>Cadastrar Modelo</h2>
        <InputCadastrarModeloFotoPath />
      </div>
    </div>
  </>
);

export default ModeloCadastroSemFoto;
