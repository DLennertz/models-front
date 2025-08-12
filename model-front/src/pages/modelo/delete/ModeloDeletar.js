import SubMenu from "../../../components/SubMenu/SubMenu";
import Header from "../../../components/header/header";
import ImputModeloDeletar from "../../../components/Inputs/inputDeletarModelo/InputDeletarModelo";
import "../encontrar/ModeloEncontrar.css";

const ModeloDeletar = () => (
  <>
    <Header />
    <div id="container">
      <SubMenu />

      <div className="campo">
        <h2>Deletar</h2>
        <ImputModeloDeletar />
      </div>
    </div>
  </>
);

export default ModeloDeletar;
