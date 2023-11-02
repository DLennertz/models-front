import React, { useState, useEffect } from "react";
import Header from "../components/header/header";
import SubMenu from "../components/SubMenu/SubMenu";
import Pagination from "../components/Pagination/Pagination";
import CardModel from "../components/Cards/CardModel/CardModel";
import ModeloService from "../services/ModeloService";
import "./Modelo.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

const Modelo = () => {
  const [data, setModelos] = useState([]);

  const [orderBy, setOrderBy] = useState(
    new URLSearchParams(window.location.search).get("orderBy") == null
      ? "Rating"
      : new URLSearchParams(window.location.search).get("orderBy")
  );
  const [totalRegistros, setTotalRegistros] = useState(0);
  const [page] = useState(parseInt(useParams().page, 10));
  const [qtdRegistros] = useState(8);
  const navigate = useNavigate();
  var key = 0;

  function returnKey() {
    key = key + 1;
    return key;
  }
  useEffect(() => {
    const modeloService = new ModeloService();
    let qtdRegistros = 8;

    modeloService
      .getModelo(page - 1, qtdRegistros, orderBy)
      .then((data) => setModelos(data));
    modeloService.getTotal().then((data) => setTotalRegistros(data));
    navigate(`/Modelo/${page}?orderBy=${orderBy}`);
  }, [page, orderBy, navigate]);

  const paginate = (pageNumber) => {
    navigate(`/Modelo/${pageNumber}?orderBy=${orderBy}`);
    window.location.reload();
  };
  const nextPage = () => {
    if (page === Math.ceil(totalRegistros / qtdRegistros)) {
    } else {
      navigate(`/Modelo/${page + 1}?orderBy=${orderBy}`);
      window.location.reload();
    }
  };
  const prevPage = () => {
    if (page === 1) {
    } else {
      navigate(`/Modelo/${page - 1}?orderBy=${orderBy}`);
      window.location.reload();
    }
  };

  return (
    <>
      <Header />
      <div id="container">
        <SubMenu />
        <div className="campo">
          <select
            id="orderBy"
            onChange={(event) => {
              if (event.target.value !== "Nada") {
                setOrderBy(event.target.value);
              } else {
              }
            }}
          >
            <option value={"Nada"}>------</option>
            <option value={"Rating"}>Rating</option>
            <option value={"MostRecent"}>Most Recent</option>
            <option value={"LeastRecent"}>Least Recent</option>
          </select>
          <Pagination
            qtdRegistros={qtdRegistros}
            totalRegistros={totalRegistros}
            page={page}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
          />
          <div className="wrapper">
            {data.map((item) => (
              <CardModel className="CardModel" key={returnKey()} props={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modelo;
