import React, { useState, useEffect } from "react";
import ModeloService from "../services/ModeloService";
import CardInfo from "../components/Cards/cardInfo";
import Header from "../components/header/header";

const StatsPage = () => {
  const [stats, setStats] = new useState([]);
  var i = 0;

  function returnKey() {
    i = i + 1;
    return i;
  }
  useEffect(() => {
    const modeloService = new ModeloService();

    modeloService.getStats().then((data) => setStats(data));
  });

  return (
    <>
      <Header />
      <div className="infoRow" style={{ background: "violet" }}>
        {Object.keys(stats).map((data) => (
          <div
            className="infoBox"
            key={returnKey()}
            style={{ background: "white" }}
          >
            {data.replace(/^count/, "")}
            <CardInfo props={stats[data]} />
          </div>
        ))}
      </div>
    </>
  );
};
export default StatsPage;
