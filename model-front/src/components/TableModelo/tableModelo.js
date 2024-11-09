import React, { useState, useEffect } from "react";
import ModeloService from "../../services/ModeloService";
import MaterialTable from "material-table";
import "./tableModelo.css";

<MaterialTable
  // other props
  options={{
    search: true,
  }}
/>;

const TableModelo = () => {
  const [data, setModelos] = useState([]);

  useEffect(() => {
    const modeloService = new ModeloService();
    modeloService.getAll().then((data) => setModelos(data));
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <MaterialTable
        title="Basic Search Preview"
        columns={[
          { title: "ID", field: "id" },
          { title: "Nome", field: "nomeCompleto" },
          { title: "Position", field: "position" },
          { title: "País", field: "country" },
          { title: "Nascimento", field: "dataNascimento" },
        ]}
        data={data}
        detailPanel={(rowData) => {
          return (
            <div>
              <table className="subTabela">
                <tr>
                  <th>Height</th>
                  <th>Bust</th>
                  <th>Waist</th>
                  <th>Hips</th>
                  <th>Eyes</th>
                  <th>Hair</th>
                  <th>Boys</th>
                  <th>Girls</th>
                </tr>
                <tr>
                  <td>{rowData.height}</td>
                  <td>{rowData.bust}</td>
                  <td>{rowData.waist}</td>
                  <td>{rowData.hips}</td>
                  <td>{rowData.eyeColor}</td>
                  <td>{rowData.hairColor}</td>
                  <td>{rowData.boys}</td>
                  <td>{rowData.girls}</td>
                </tr>
              </table>
            </div>
          );
        }}
        options={{
          search: true,
          pageSize: 20,
        }}
      />
    </div>
  );
};

export default TableModelo;
