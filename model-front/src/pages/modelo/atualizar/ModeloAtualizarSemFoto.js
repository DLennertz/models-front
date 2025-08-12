import React from "react";
import Header from "../../../components/header/header";
import SubMenu from "../../../components/SubMenu/SubMenu";
import InputAtualizarFotoPath from "../../../components/Inputs/InputAtualizarFotoPath/inputAtualizarFotoPath";

import "../cadastro/ModeloCadastro.css";
const ModeloAtualizarSemFoto = () => (
  <>
    <Header />
    <div id="container">
      <SubMenu />

      <div className="campo">
        <h2>Update Modelo</h2>
        <InputAtualizarFotoPath />
      </div>
    </div>
  </>
);

export default ModeloAtualizarSemFoto;
