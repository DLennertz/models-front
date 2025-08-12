import SubMenu from "../../../components/SubMenu/SubMenu";
import Header from "../../../components/header/header";
import InputEncontarModelo from "../../../components/Inputs/InputEncontrarModelo/InputEncontrarModelo";
import "./ModeloEncontrar.css";

const ModeloEncontrar = () => (
  <>
    <Header />
    <div id="container">
      <SubMenu />

      <div className="campo">
        <h2>Lista</h2>
        <InputEncontarModelo />
      </div>
    </div>
  </>
);

export default ModeloEncontrar;
