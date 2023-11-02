import SubMenu from '../components/SubMenu/SubMenu'
import Header from '../components/header/header';
import TableModelo from '../components/TableModelo/tableModelo'
import './ModeloListar.css'

const ModeloEncontrar = () => (
    <>
    
        <Header />
        <div id="container">
            <SubMenu style={{height:'auto'}}/>
                    
            <div className="campo">
                <h2>Procurar Modelo</h2>
                <TableModelo className="TableModelo"/>
            </div>
        </div>
    </>
);

export default ModeloEncontrar