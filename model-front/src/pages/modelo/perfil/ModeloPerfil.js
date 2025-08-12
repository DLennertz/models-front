import React, { useState, useEffect } from "react";
import Header from "../../../components/header/header";
import SubMenu from "../../../components/SubMenu/SubMenu";
import ModeloService from "../../../services/ModeloService";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";

const ModeloPerfil = () => {
  const [perfil, setPerfil] = useState([]);
  const idModel = parseInt(useParams().id);
  useEffect(() => {
    const modeloService = new ModeloService();
    modeloService.getModeloId(idModel).then((data) => setPerfil(data));
  }, [idModel]);

  return (
    <>
      <Helmet>
        <title>{perfil.nomeCompleto}</title>
      </Helmet>
      <Header />
      <div className="container">
        <SubMenu />
        <div className="campo">
          <h1>{perfil.nomeCompleto}</h1>
        </div>
      </div>
    </>
  );
};

export default ModeloPerfil;
