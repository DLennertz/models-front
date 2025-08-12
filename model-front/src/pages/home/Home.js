import "./Home.css";
import React, { useState, useEffect } from "react";
import Header from "../../components/header/header";
import CardInfo from "../../components/Cards/cardInfo";
import ModeloService from "../../services/ModeloService";

const Home = () => {
  const [aniversariante, setAniversariante] = new useState([]);

  useEffect(() => {
    const modeloService = new ModeloService();

    modeloService.getAniversariante().then((data) => setAniversariante(data));
  }, [setAniversariante]);

  return (
    <div>
      <Header />
      <div className="infoRow" style={{ background: "violet" }}>
        {Object.keys(aniversariante).map((key) => (
          <div className="infoBox" style={{ background: "white" }}>
            <CardInfo props={aniversariante[key].nomeCompleto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
