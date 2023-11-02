import React from "react";
import "./SubMenu.scss";
import { Link } from "react-router-dom";

const SubMenu = () => {
  const [currCount] = React.useState(0);

  return (
    <div className="sidebar">
      <Link
        className={currCount === 0 && "active"}
        href="#listar"
        to="/ListarModelo"
      >
        <span className={currCount === 0 && "text-active"}>
          <i className="fas fa-arrow-right"></i>Listar
        </span>
      </Link>
      <Link
        className={currCount === 1 && "active"}
        href="#achar"
        to="/EncontrarModelo"
      >
        <span className={currCount === 1 && "text-active"}>
          <i className="fas fa-arrow-right"></i>Achar
        </span>
      </Link>
      <Link
        className={currCount === 2 && "active"}
        href="#cadastrarSemFoto"
        to="/CadastrarModelo"
      >
        <span className={currCount === 2 && "text-active"}>
          <i className="fas fa-arrow-right"></i>Cadastrar
        </span>
      </Link>
      <Link
        className={currCount === 3 && "active"}
        href="#atualizarSemFoto"
        to="/AtualizarModelo"
      >
        <span className={currCount === 3 && "text-active"}>
          <i className="fas fa-arrow-right"></i>Atualizar
        </span>
      </Link>
      <Link
        className={currCount === 4 && "active"}
        href="#deleter"
        to="/DeletarModelo"
      >
        <span className={currCount === 4 && "text-active"}>
          <i className="fas fa-arrow-right"></i>Deletar
        </span>
      </Link>
    </div>
  );
};

export default SubMenu;
