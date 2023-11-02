import React from "react";
import "./CardModel.css";

const CardModelteste = (props) => {
  return (
    <div className="card">
      <div className="card__body">
        <h2 className="cardNome">Nome</h2>
        <h3>{props.props.id}</h3>
        <img
          className="cardFoto"
          src={
            require(`C:/Users/danie/OneDrive/Documentos/react/reactJs/nome-do-app/src/assets/img/0.jpg`).default
          }
        />
        <div className="cardInfo">
          <div className="cardInfoBox">
            <p>empresa</p>
            <p>cargo</p>
          </div>
          <div className="cardInfoBox">
            <p>projeto</p>
            <p>salario</p>
          </div>
        </div>
      </div>
      <button className="card__btn">Mais detalhes</button>
    </div>
  );
};
export default CardModelteste;
